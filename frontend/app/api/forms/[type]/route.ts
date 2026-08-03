
import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/auth'
import { connectDB } from '@/lib/db'
import { FormSubmission } from '@/models/FormSubmission'
import type { FormType } from '@/models/FormSubmission'
import { rateLimit } from '@/lib/rate-limit'
import { sendUserConfirmationEmail, sendAdminNotificationEmail } from '@/lib/email'

const validFormTypes: FormType[] = ['contact', 'career', 'investor', 'partner', 'faq', 'advisory']

const MAX_DATA_SIZE = 50_000

function validateFormData(data: unknown): data is Record<string, unknown> {
  if (!data || typeof data !== 'object' || Array.isArray(data)) return false
  const entries = Object.entries(data as Record<string, unknown>)
  if (entries.length > 50) return false
  for (const [key, val] of entries) {
    if (typeof key !== 'string' || key.length > 100) return false
    if (val !== null && val !== undefined && typeof val !== 'string' && typeof val !== 'number' && typeof val !== 'boolean' && !Array.isArray(val)) return false
    if (typeof val === 'string' && val.length > 5000) return false
    if (Array.isArray(val) && val.some(v => typeof v !== 'string')) return false
  }
  return true
}

export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest, { params }: { params: Promise<{ type: string }> }) {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { type } = await params
  if (!validFormTypes.includes(type as FormType)) {
    return NextResponse.json({ error: 'Invalid form type' }, { status: 400 })
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid form data' }, { status: 400 })
  }

  if (!validateFormData(body)) {
    return NextResponse.json({ error: 'Invalid form data' }, { status: 400 })
  }

  if (JSON.stringify(body).length > MAX_DATA_SIZE) {
    return NextResponse.json({ error: 'Form data too large' }, { status: 400 })
  }

  await connectDB()
  const { allowed } = await rateLimit(session.user.id)
  if (!allowed) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
  }

  try {
    const submission = await FormSubmission.create({
      userId: session.user.id,
      formType: type as FormType,
      data: body,
      status: 'pending',
    })

    // Asynchronously dispatch user confirmation and admin notification emails.
    // Confirmation mail is always sent to the authenticated user's email so a
    // crafted body.email can't be used to mail arbitrary addresses.
    const targetEmail = session.user.email || ''
    const targetName = (typeof body.fullName === 'string' && body.fullName.trim()) || (typeof body.name === 'string' && body.name.trim()) || session.user.name || ''
    const submissionIdStr = String(submission._id)

    if (targetEmail) {
      sendUserConfirmationEmail({
        toEmail: targetEmail,
        userName: targetName,
        formType: type,
        submissionId: submissionIdStr,
        data: body,
      }).catch(err => console.error('[EMAIL FAIL] User confirmation:', err))
    }

    sendAdminNotificationEmail({
      userName: targetName,
      userEmail: targetEmail || 'unknown@domain.com',
      formType: type,
      submissionId: submissionIdStr,
      data: body,
    }).catch(err => console.error('[EMAIL FAIL] Admin notification:', err))

    return NextResponse.json({ success: true, id: submission._id }, { status: 201 })
  } catch (error) {
    console.error('Form submission error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function GET(req: NextRequest, { params }: { params: Promise<{ type: string }> }) {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { type } = await params
  const isAdmin = session.user.role === 'admin'

  try {
    await connectDB()
    const filter: Record<string, unknown> = {}
    if (type !== 'all') {
      if (!validFormTypes.includes(type as FormType)) {
        return NextResponse.json({ error: 'Invalid form type' }, { status: 400 })
      }
      filter.formType = type
    }
    if (!isAdmin) {
      filter.userId = session.user.id
    }

    const { searchParams } = new URL(req.url)
    const rawPage = parseInt(searchParams.get('page') ?? '1', 10)
    const page = Number.isFinite(rawPage) ? Math.max(1, rawPage) : 1
    const rawLimit = parseInt(searchParams.get('limit') ?? '50', 10)
    const limit = Number.isFinite(rawLimit) ? Math.min(100, Math.max(1, rawLimit)) : 50
    const skip = (page - 1) * limit

    const [submissions, total] = await Promise.all([
      FormSubmission.find(filter)
        .populate('userId', 'name email')
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      FormSubmission.countDocuments(filter),
    ])

    return NextResponse.json({ submissions, total, page, limit })
  } catch (error) {
    console.error('Form fetch error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

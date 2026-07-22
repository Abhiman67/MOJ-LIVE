import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/auth'
import { connectDB } from '@/lib/db'
import { FormSubmission } from '@/models/FormSubmission'
import type { FormType } from '@/models/FormSubmission'
import { rateLimit, getClientIp } from '@/lib/rate-limit'

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

export async function POST(req: NextRequest, { params }: { params: Promise<{ type: string }> }) {
  const ip = getClientIp(req)
  const { allowed } = rateLimit(ip)
  if (!allowed) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
  }

  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { type } = await params
  if (!validFormTypes.includes(type as FormType)) {
    return NextResponse.json({ error: 'Invalid form type' }, { status: 400 })
  }

  try {
    await connectDB()
    const body = await req.json()

    if (!validateFormData(body)) {
      return NextResponse.json({ error: 'Invalid form data' }, { status: 400 })
    }

    const jsonLength = JSON.stringify(body).length
    if (jsonLength > MAX_DATA_SIZE) {
      return NextResponse.json({ error: 'Form data too large' }, { status: 400 })
    }

    const submission = await FormSubmission.create({
      userId: session.user.id,
      formType: type as FormType,
      data: body,
      status: 'pending',
    })

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
    const page = Math.max(1, parseInt(searchParams.get('page') ?? '1', 10))
    const limit = Math.min(100, Math.max(1, parseInt(searchParams.get('limit') ?? '50', 10)))
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

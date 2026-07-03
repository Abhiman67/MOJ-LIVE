import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/auth'
import { connectDB } from '@/lib/db'
import { FormSubmission } from '@/models/FormSubmission'
import type { FormType } from '@/models/FormSubmission'

const validFormTypes: FormType[] = ['contact', 'career', 'investor', 'partner', 'faq', 'advisory']

export async function POST(req: NextRequest, { params }: { params: Promise<{ type: string }> }) {
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
    const data = await req.json()

    const submission = await FormSubmission.create({
      userId: session.user.id,
      formType: type as FormType,
      data,
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

    const submissions = await FormSubmission.find(filter)
      .populate('userId', 'name email')
      .sort({ createdAt: -1 })
      .lean()

    return NextResponse.json(submissions)
  } catch (error) {
    console.error('Form fetch error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

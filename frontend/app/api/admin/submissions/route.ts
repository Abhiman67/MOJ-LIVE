import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/auth'
import { connectDB } from '@/lib/db'
import { FormSubmission } from '@/models/FormSubmission'

export async function GET() {
  const session = await auth()
  if (session?.user?.role !== 'admin') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  try {
    await connectDB()
    const submissions = await FormSubmission.find()
      .populate('userId', 'name email')
      .sort({ createdAt: -1 })
      .lean()
    return NextResponse.json(submissions)
  } catch (error) {
    console.error('Admin fetch error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function PATCH(req: NextRequest) {
  const session = await auth()
  if (session?.user?.role !== 'admin') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  try {
    await connectDB()
    const { id, status, adminNotes } = await req.json()

    const update: Record<string, unknown> = {}
    if (status) update.status = status
    if (adminNotes !== undefined) update.adminNotes = adminNotes

    const submission = await FormSubmission.findByIdAndUpdate(id, { $set: update }, { new: true })
      .populate('userId', 'name email')
      .lean()

    if (!submission) {
      return NextResponse.json({ error: 'Submission not found' }, { status: 404 })
    }

    return NextResponse.json(submission)
  } catch (error) {
    console.error('Admin update error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/auth'
import { connectDB } from '@/lib/db'
import { FormSubmission } from '@/models/FormSubmission'
import { Notification } from '@/models/Notification'



export async function GET(req: NextRequest) {
  const session = await auth()
  if (session?.user?.role !== 'admin') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  try {
    await connectDB()
    const { searchParams } = new URL(req.url)
    const page = Math.max(1, parseInt(searchParams.get('page') ?? '1', 10))
    const limit = Math.min(100, Math.max(1, parseInt(searchParams.get('limit') ?? '50', 10)))
    const skip = (page - 1) * limit

    const [submissions, total] = await Promise.all([
      FormSubmission.find()
        .populate('userId', 'name email')
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      FormSubmission.countDocuments({}),
    ])
    return NextResponse.json({ submissions, total, page, limit })
  } catch (error) {
    console.error('Admin fetch error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

const formTypeLabels: Record<string, string> = {
  contact: 'Contact Form',
  career: 'Job Application',
  investor: 'Investor Inquiry',
  partner: 'Partnership Proposal',
  faq: 'Inquiry',
  advisory: 'Advisory Request',
}

export async function PATCH(req: NextRequest) {
  const session = await auth()
  if (session?.user?.role !== 'admin') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  try {
    await connectDB()
    const { id, status, adminNotes } = await req.json()

    if (!id || typeof id !== 'string' || !/^[a-f\d]{24}$/i.test(id)) {
      return NextResponse.json({ error: 'Invalid submission ID' }, { status: 400 })
    }

    const validStatuses = ['pending', 'reviewed', 'approved', 'rejected']
    if (status && !validStatuses.includes(status)) {
      return NextResponse.json({ error: 'Invalid status' }, { status: 400 })
    }

    const update: Record<string, unknown> = {}
    if (status) update.status = status
    if (adminNotes !== undefined) update.adminNotes = adminNotes

    const submission = await FormSubmission.findByIdAndUpdate(id, { $set: update }, { new: true })
      .populate('userId', 'name email')
      .lean()

    if (!submission) {
      return NextResponse.json({ error: 'Submission not found' }, { status: 404 })
    }

    // Trigger notification for the user if userId exists
    const targetUserId = (submission.userId as unknown as { _id?: unknown })?._id || submission.userId
    if (targetUserId) {
      const formLabel = formTypeLabels[submission.formType] || submission.formType

      try {
        if (status) {
          let notifTitle = `Form Status Updated: ${formLabel}`
          let notifType: 'approved' | 'rejected' | 'reviewed' | 'system' = 'system'
          let notifMessage = `Your ${formLabel} submission status is now marked as ${status}.`

          if (status === 'approved') {
            notifTitle = `Form Approved (${formLabel})`
            notifType = 'approved'
            notifMessage = `Great news! Your ${formLabel} submission has been approved by the admin team.`
          } else if (status === 'rejected') {
            notifTitle = `Form Status Update (${formLabel})`
            notifType = 'rejected'
            notifMessage = `Your ${formLabel} submission was reviewed and marked as rejected by admin.`
          } else if (status === 'reviewed') {
            notifTitle = `Form Under Review (${formLabel})`
            notifType = 'reviewed'
            notifMessage = `Your ${formLabel} submission has been reviewed by the admin team.`
          }

          await Notification.create({
            userId: String(targetUserId),
            submissionId: String(submission._id),
            title: notifTitle,
            message: notifMessage,
            type: notifType,
            formType: submission.formType,
          })
        }

        if (adminNotes && adminNotes.trim().length > 0) {
          await Notification.create({
            userId: String(targetUserId),
            submissionId: String(submission._id),
            title: `Admin Note on ${formLabel}`,
            message: `Admin added a note: "${adminNotes}"`,
            type: 'message',
            formType: submission.formType,
          })
        }
      } catch (notifError) {
        console.error('Failed to create notification:', notifError)
      }
    }

    return NextResponse.json(submission)
  } catch (error) {
    console.error('Admin update error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}


import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/auth'
import { connectDB } from '@/lib/db'
import { Notification } from '@/models/Notification'

export const dynamic = 'force-dynamic'

export async function GET() {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    await connectDB()
    const notifications = await Notification.find({ userId: session.user.id })
      .sort({ createdAt: -1 })
      .limit(50)
      .lean()

    const unreadCount = await Notification.countDocuments({
      userId: session.user.id,
      isRead: false,
    })

    return NextResponse.json({ notifications, unreadCount })
  } catch (error) {
    console.error('Notification fetch error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function PATCH(req: NextRequest) {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    await connectDB()
    const body = await req.json()
    const { notificationId, markAllRead } = body

    if (markAllRead) {
      await Notification.updateMany(
        { userId: session.user.id, isRead: false },
        { $set: { isRead: true } }
      )
    } else if (notificationId) {
      if (typeof notificationId !== 'string' || !/^[a-f\d]{24}$/i.test(notificationId)) {
        return NextResponse.json({ error: 'Invalid notification ID' }, { status: 400 })
      }
      await Notification.updateOne(
        { _id: notificationId, userId: session.user.id },
        { $set: { isRead: true } }
      )
    } else {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
    }

    const unreadCount = await Notification.countDocuments({
      userId: session.user.id,
      isRead: false,
    })

    return NextResponse.json({ success: true, unreadCount })
  } catch (error) {
    console.error('Notification update error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

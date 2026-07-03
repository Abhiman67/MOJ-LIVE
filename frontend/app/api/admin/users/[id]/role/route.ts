import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/auth'
import { connectDB } from '@/lib/db'
import { User } from '@/models/User'

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth()
  if (!session?.user?.id || session.user.role !== 'admin') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  const { id } = await params
  const { role } = await req.json()

  const validRoles = ['admin', 'general', 'partner', 'investor', 'career']
  if (!validRoles.includes(role)) {
    return NextResponse.json({ error: 'Invalid role' }, { status: 400 })
  }

  await connectDB()
  const user = await User.findByIdAndUpdate(id, { $set: { role } }, { new: true }).lean()

  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 })
  }

  return NextResponse.json({ success: true, user: { id: (user as unknown as Record<string, unknown>)._id, role } })
}

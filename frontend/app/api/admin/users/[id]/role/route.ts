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
  if (!id || typeof id !== 'string' || !/^[a-f\d]{24}$/i.test(id)) {
    return NextResponse.json({ error: 'Invalid user ID' }, { status: 400 })
  }

  const { role } = await req.json()

  const validRoles = ['admin', 'general', 'partner', 'investor', 'career']
  if (!validRoles.includes(role)) {
    return NextResponse.json({ error: 'Invalid role' }, { status: 400 })
  }

  await connectDB()
  const user = await User.findByIdAndUpdate(id, { $set: { role } }, { returnDocument: 'after' }).lean()

  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 })
  }

  console.info(`[AUDIT] Admin ${session.user.id} changed user ${id} role to ${role}`)

  const userObj = JSON.parse(JSON.stringify(user))
  return NextResponse.json({ success: true, user: { id: String(userObj._id), role } })
}

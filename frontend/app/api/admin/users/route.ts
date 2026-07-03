import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/auth'
import { connectDB } from '@/lib/db'
import { User } from '@/models/User'

export async function GET(req: NextRequest) {
  const session = await auth()
  if (!session?.user?.id || session.user.role !== 'admin') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  const { searchParams } = new URL(req.url)
  const email = searchParams.get('email')?.toLowerCase()

  if (!email) {
    return NextResponse.json({ error: 'email query param required' }, { status: 400 })
  }

  await connectDB()
  const user = await User.findOne({ email }).select('name email role').lean()

  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 })
  }

  const doc = user as unknown as Record<string, unknown>
  return NextResponse.json({
    id: String(doc._id),
    name: doc.name,
    email: doc.email,
    role: doc.role,
  })
}

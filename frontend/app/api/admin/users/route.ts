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
  const search = (searchParams.get('search') || searchParams.get('email') || '').trim().toLowerCase()

  await connectDB()

  const filter: Record<string, unknown> = {}
  if (search) {
    const escapedSearch = search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    filter.$or = [
      { email: { $regex: escapedSearch, $options: 'i' } },
      { name: { $regex: escapedSearch, $options: 'i' } },
    ]
  }

  const users = await User.find(filter)
    .select('name email role authProvider createdAt')
    .sort({ createdAt: -1 })
    .lean()

  const userList = users.map(u => {
    const userObj = JSON.parse(JSON.stringify(u))
    return {
      id: String(userObj._id),
      name: userObj.name || '',
      email: userObj.email || '',
      role: userObj.role || 'general',
      authProvider: userObj.authProvider || 'credentials',
      createdAt: userObj.createdAt ? new Date(userObj.createdAt).toISOString() : new Date().toISOString(),
    }
  })

  return NextResponse.json(userList)
}

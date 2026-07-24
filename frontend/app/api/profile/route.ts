import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/auth'
import { connectDB } from '@/lib/db'
import { Profile } from '@/models/Profile'
import { User } from '@/models/User'

export async function GET() {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    await connectDB()
    const [profile, user] = await Promise.all([
      Profile.findOne({ userId: session.user.id }).lean(),
      User.findById(session.user.id).select('name email role').lean(),
    ])

    const baseData = {
      userId: session.user.id,
      name: user?.name ?? '',
      email: user?.email ?? '',
      phone: '',
      organization: '',
      role: user?.role ?? 'general',
      linkedIn: '',
      portfolio: '',
      location: '',
      bio: '',
    }

    if (!profile) {
      return NextResponse.json(baseData)
    }

    return NextResponse.json({ ...baseData, ...profile, name: user?.name ?? '', email: user?.email ?? '' })
  } catch (error) {
    console.error('Profile fetch error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function PUT(req: NextRequest) {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    await connectDB()
    const body = await req.json()
    const { name, phone, organization, role, linkedIn, portfolio, location, bio } = body ?? {}

    const updateData: Record<string, unknown> = {
      userId: session.user.id,
      phone: typeof phone === 'string' ? phone : '',
      organization: typeof organization === 'string' ? organization : '',
      role: typeof role === 'string' ? role : '',
      linkedIn: typeof linkedIn === 'string' ? linkedIn : '',
      portfolio: typeof portfolio === 'string' ? portfolio : '',
      location: typeof location === 'string' ? location : '',
      bio: typeof bio === 'string' ? bio : '',
    }

    const profile = await Profile.findOneAndUpdate(
      { userId: session.user.id },
      { $set: updateData },
      { returnDocument: 'after', upsert: true }
    ).lean()

    const userUpdate: Record<string, unknown> = { profileCompleted: true }
    if (typeof name === 'string' && name.trim().length > 0) {
      userUpdate.name = name.trim()
    }

    const updatedUser = await User.findByIdAndUpdate(session.user.id, { $set: userUpdate }, { returnDocument: 'after' }).lean()

    return NextResponse.json({ ...profile, name: updatedUser?.name })
  } catch (error) {
    console.error('Profile update error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/auth'
import { connectDB } from '@/lib/db'
import { Profile } from '@/models/Profile'
import { User } from '@/models/User'

const MAX_FIELD_LENGTH: Record<string, number> = {
  name: 120,
  phone: 30,
  organization: 120,
  role: 120,
  linkedIn: 255,
  portfolio: 255,
  location: 120,
  bio: 2000,
}

export const dynamic = 'force-dynamic'

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

    for (const [field, value] of Object.entries({ name, phone, organization, role, linkedIn, portfolio, location, bio })) {
      if (typeof value === 'string' && value.trim().length > (MAX_FIELD_LENGTH[field] ?? 2000)) {
        return NextResponse.json({ error: `${field} exceeds the maximum length` }, { status: 400 })
      }
    }

    const updateData: Record<string, unknown> = {
      userId: session.user.id,
      phone: typeof phone === 'string' ? phone.trim() : '',
      organization: typeof organization === 'string' ? organization.trim() : '',
      role: typeof role === 'string' ? role.trim() : '',
      linkedIn: typeof linkedIn === 'string' ? linkedIn.trim() : '',
      portfolio: typeof portfolio === 'string' ? portfolio.trim() : '',
      location: typeof location === 'string' ? location.trim() : '',
      bio: typeof bio === 'string' ? bio.trim() : '',
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

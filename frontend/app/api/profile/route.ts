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
    let profile = await Profile.findOne({ userId: session.user.id }).lean()

    if (!profile) {
      const user = await User.findById(session.user.id).lean()
      profile = {
        userId: session.user.id as unknown as never,
        phone: '',
        organization: '',
        role: user?.role ?? 'general',
        linkedIn: '',
        portfolio: '',
        location: '',
        bio: '',
      } as never
    }

    return NextResponse.json(profile)
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

    const profile = await Profile.findOneAndUpdate(
      { userId: session.user.id },
      { $set: body },
      { new: true, upsert: true }
    ).lean()

    await User.findByIdAndUpdate(session.user.id, { profileCompleted: true })

    return NextResponse.json(profile)
  } catch (error) {
    console.error('Profile update error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

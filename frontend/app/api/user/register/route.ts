import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { connectDB } from '@/lib/db'
import { User } from '@/models/User'
import { rateLimitByIp } from '@/lib/rate-limit'

const credentialsEnabled =
  (process.env.AUTH_CREDENTIALS_ENABLED ?? process.env.NEXT_PUBLIC_AUTH_CREDENTIALS_ENABLED ?? 'false') === 'true'
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function getClientIp(req: NextRequest): string {
  const forwarded = req.headers.get('x-forwarded-for')
  if (forwarded) return forwarded.split(',')[0].trim()
  return req.headers.get('x-real-ip') || 'unknown'
}

export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  if (!credentialsEnabled) {
    return NextResponse.json({ error: 'Registration disabled' }, { status: 403 })
  }

  try {
    const { name, email, password } = await req.json()

    if (typeof name !== 'string' || typeof email !== 'string' || typeof password !== 'string') {
      return NextResponse.json({ error: 'Name, email, and password are required' }, { status: 400 })
    }

    const normalizedName = name.trim()
    const normalizedEmail = email.trim().toLowerCase()
    if (!normalizedName || normalizedName.length > 120) {
      return NextResponse.json({ error: 'Enter a name between 1 and 120 characters' }, { status: 400 })
    }
    if (normalizedEmail.length > 254 || !EMAIL_PATTERN.test(normalizedEmail)) {
      return NextResponse.json({ error: 'Enter a valid email address' }, { status: 400 })
    }
    if (password.length < 8 || password.length > 128) {
      return NextResponse.json({ error: 'Password must be between 8 and 128 characters' }, { status: 400 })
    }

    await connectDB()
    const { allowed } = await rateLimitByIp(getClientIp(req))
    if (!allowed) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
    }

    const existing = await User.findOne({ email: normalizedEmail })
    if (existing) {
      return NextResponse.json({ error: 'Email already registered' }, { status: 409 })
    }

    const hashedPassword = await bcrypt.hash(password, 12)

    const user = await User.create({
      name: normalizedName,
      email: normalizedEmail,
      hashedPassword,
      authProvider: 'credentials',
      role: 'general',
      profileCompleted: false,
    })

    return NextResponse.json(
      { success: true, id: user._id, name: user.name, email: user.email },
      { status: 201 }
    )
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

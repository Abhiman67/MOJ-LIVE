import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { connectDB } from '@/lib/db'
import { User } from '@/models/User'

export async function POST(req: NextRequest) {
  if (process.env.AUTH_CREDENTIALS_ENABLED !== 'true') {
    return NextResponse.json({ error: 'Registration disabled' }, { status: 403 })
  }

  try {
    await connectDB()
    const { name, email, password } = await req.json()

    if (!name || !email || !password) {
      return NextResponse.json({ error: 'Name, email, and password are required' }, { status: 400 })
    }

    if (password.length < 6) {
      return NextResponse.json({ error: 'Password must be at least 6 characters' }, { status: 400 })
    }

    const existing = await User.findOne({ email: email.toLowerCase() })
    if (existing) {
      return NextResponse.json({ error: 'Email already registered' }, { status: 409 })
    }

    const hashedPassword = await bcrypt.hash(password, 12)

    const user = await User.create({
      name,
      email: email.toLowerCase(),
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

import { NextRequest, NextResponse } from 'next/server'
import { rateLimitByIp } from '@/lib/rate-limit'
import { sendCustomEmail, escapeHtml } from '@/lib/email'
import { connectDB } from '@/lib/db'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function getClientIp(req: NextRequest): string {
  const forwarded = req.headers.get('x-forwarded-for')
  if (forwarded) return forwarded.split(',')[0].trim()
  return req.headers.get('x-real-ip') || 'unknown'
}

export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const {
      fullName,
      organization,
      designation,
      email,
      phone,
      focusArea,
      geoFocus,
      description,
    } = body ?? {}

    if (typeof fullName !== 'string' || typeof organization !== 'string' || typeof email !== 'string' || typeof description !== 'string') {
      return NextResponse.json({ error: 'Required fields are missing' }, { status: 400 })
    }

    const normalizedName = fullName.trim()
    const normalizedOrg = organization.trim()
    const normalizedEmail = email.trim().toLowerCase()
    if (!normalizedName || normalizedName.length > 120) {
      return NextResponse.json({ error: 'Enter a name between 1 and 120 characters' }, { status: 400 })
    }
    if (!normalizedOrg || normalizedOrg.length > 120) {
      return NextResponse.json({ error: 'Enter an organization name between 1 and 120 characters' }, { status: 400 })
    }
    if (normalizedEmail.length > 254 || !EMAIL_PATTERN.test(normalizedEmail)) {
      return NextResponse.json({ error: 'Enter a valid email address' }, { status: 400 })
    }
    if (description.trim().length < 10 || description.trim().length > 2000) {
      return NextResponse.json({ error: 'Description must be between 10 and 2000 characters' }, { status: 400 })
    }
    if (typeof focusArea !== 'string' || !focusArea.trim() || focusArea.trim().length > 120) {
      return NextResponse.json({ error: 'Select a focus area' }, { status: 400 })
    }
    if (typeof geoFocus !== 'string' || !geoFocus.trim() || geoFocus.trim().length > 60) {
      return NextResponse.json({ error: 'Select a geographical focus' }, { status: 400 })
    }
    if (typeof phone === 'string' && phone.trim().length > 30) {
      return NextResponse.json({ error: 'Phone number is too long' }, { status: 400 })
    }
    if (typeof designation === 'string' && designation.trim().length > 120) {
      return NextResponse.json({ error: 'Designation is too long' }, { status: 400 })
    }

    await connectDB()
    const { allowed } = await rateLimitByIp(getClientIp(req))
    if (!allowed) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
    }


    const rows = [
      ['Full Name', normalizedName],
      ['Organization', normalizedOrg],
      ['Designation', designation || '—'],
      ['Email', normalizedEmail],
      ['Phone', phone || '—'],
      ['Focus Area', focusArea],
      ['Geo Focus', geoFocus],
      ['Description', description],
    ]
      .map(([label, value]) => `
        <tr>
          <td style="padding: 10px 14px; border-bottom: 1px solid #e2e8f0; color: #475569; font-weight: 600; width: 35%; font-size: 14px;">${escapeHtml(label)}</td>
          <td style="padding: 10px 14px; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-size: 14px;">${escapeHtml(value)}</td>
        </tr>
      `)
      .join('')

    const bodyHtml = `
      <h2 style="font-family: 'Playfair Display', Georgia, serif; color: #0a1f44; margin: 0 0 16px 0; font-size: 22px;">New Industry Intelligence Contribution</h2>
      <p>A stakeholder submitted research/insights on the MyOnlineJet reports page.</p>
      <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 6px; overflow: hidden; margin: 20px 0;">
        <tbody>
          ${rows}
        </tbody>
      </table>
      <p style="margin: 0;">Review and respond within the promised 10 business days.</p>
    `

    await sendCustomEmail({
      toEmail: process.env.NOTIFICATION_EMAIL || 'contact@myonlinejet.com',
      subject: `New Industry Contribution from ${normalizedName}`,
      preheaderText: `Industry intelligence submission from ${normalizedName}`,
      bodyHtml,
      automatedNoticeText: 'Internal notification for MyOnlineJet administrative team.',
      plainText: `New Industry Intelligence Contribution\n\nFull Name: ${normalizedName}\nOrganization: ${normalizedOrg}\nEmail: ${normalizedEmail}\n\n${description}`,
    })

    return NextResponse.json({ success: true }, { status: 201 })
  } catch (error) {
    console.error('Reports contribution error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
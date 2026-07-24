import nodemailer from 'nodemailer'

const host = process.env.SMTP_HOST || 'smtp.mailtrap.io'
const port = Number(process.env.SMTP_PORT) || 587
const user = process.env.SMTP_USER || ''
const pass = process.env.SMTP_PASS || ''
const fromEmail = process.env.FROM_EMAIL || 'noreply@myonlinejet.com'
const adminEmail = process.env.NOTIFICATION_EMAIL || 'contact@myonlinejet.com'

const labels: Record<string, string> = {
  contact: 'Contact Request',
  career: 'Job Application',
  investor: 'Investor Inquiry',
  partner: 'Partnership Inquiry',
  faq: 'General Inquiry',
  advisory: 'Advisory Consultation',
}

function getTransporter() {
  if (user && pass) {
    return nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    })
  }
  return null
}

async function sendEmailPayload(opts: { to: string; subject: string; html: string; text: string }) {
  const transporter = getTransporter()
  if (!transporter) {
    console.info(`[EMAIL DEV LOG] To: ${opts.to} | Subject: ${opts.subject}`)
    console.info(`[EMAIL CONTENT]\n${opts.text}\n----------------------------------------`)
    return { simulated: true }
  }

  try {
    const info = await transporter.sendMail({
      from: `MyOnlineJet <${fromEmail}>`,
      to: opts.to,
      subject: opts.subject,
      text: opts.text,
      html: opts.html,
    })
    console.info(`[EMAIL SENT] MessageId: ${info.messageId} to ${opts.to}`)
    return { success: true, messageId: info.messageId }
  } catch (err) {
    console.error(`[EMAIL ERROR] Failed to send email to ${opts.to}:`, err)
    return { error: err }
  }
}

function escapeHtml(str: unknown): string {
  if (str === null || str === undefined) return ''
  const s = typeof str === 'object' ? JSON.stringify(str) : String(str)
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

interface FormEmailContent {
  title: string
  subject: string
  introMessage: string
  nextSteps: string
  accentColor: string
}

const formEmailConfigs: Record<string, FormEmailContent> = {
  contact: {
    title: 'General Contact Inquiry Received',
    subject: 'We Received Your Contact Inquiry - MyOnlineJet',
    introMessage: 'Thank you for reaching out to MyOnlineJet. We have successfully logged your contact message with our communications team.',
    nextSteps: 'Our communications team will review your message and respond within 24 business hours.',
    accentColor: '#C50000',
  },
  career: {
    title: 'Job Application Received',
    subject: 'Thank You for Applying to MyOnlineJet',
    introMessage: 'Thank you for your interest in building the future of Urban Air Mobility with MyOnlineJet! We have received your application materials.',
    nextSteps: 'Our Talent Acquisition team will carefully review your qualifications and experience. If your profile matches our openings, we will invite you for an introductory interview.',
    accentColor: '#3b82f6',
  },
  investor: {
    title: 'Investor Inquiry Received',
    subject: 'Investor Relations Inquiry - MyOnlineJet',
    introMessage: 'Thank you for your interest in investing in MyOnlineJet’s eVTOL and vertiport infrastructure ecosystem.',
    nextSteps: 'Our Executive Leadership & Investor Relations office will review your request and connect with you directly regarding investment materials.',
    accentColor: '#10b981',
  },
  partner: {
    title: 'Partnership Proposal Received',
    subject: 'Partnership Proposal Acknowledgment - MyOnlineJet',
    introMessage: 'Thank you for proposing a strategic partnership with MyOnlineJet. We have registered your collaboration proposal.',
    nextSteps: 'Our Business Development team will evaluate potential technology, infrastructure, or operational synergies and respond promptly.',
    accentColor: '#8b5cf6',
  },
  faq: {
    title: 'Support Inquiry Logged',
    subject: 'Inquiry Logged - MyOnlineJet Support',
    introMessage: 'Thank you for submitting your question. Your request has been queued in our support portal.',
    nextSteps: 'A specialist from our team will inspect your question and provide guidance shortly.',
    accentColor: '#f59e0b',
  },
  advisory: {
    title: 'AAM Advisory Consultation Request',
    subject: 'Advanced Air Mobility Advisory Request - MyOnlineJet',
    introMessage: 'Thank you for requesting eVTOL, Vertiport, and Advanced Air Mobility (AAM) advisory services from MyOnlineJet.',
    nextSteps: 'Our Senior Aviation & Infrastructure Consultants will review your project scope and schedule an initial consultation call.',
    accentColor: '#ec4899',
  },
}

function getFormConfig(formType: string): FormEmailContent {
  return formEmailConfigs[formType] || {
    title: `${labels[formType] || formType} Received`,
    subject: `Inquiry Received: ${labels[formType] || formType} - MyOnlineJet`,
    introMessage: `Thank you for reaching out to MyOnlineJet. We have successfully received your ${labels[formType] || formType} submission.`,
    nextSteps: 'Our team is currently reviewing your details and will get back to you within 24–48 business hours.',
    accentColor: '#C50000',
  }
}

// 1. User Form Submission Confirmation Email
export async function sendUserConfirmationEmail(params: {
  toEmail: string
  userName: string
  formType: string
  submissionId: string
  data?: Record<string, unknown>
}) {
  const cfg = getFormConfig(params.formType)
  const safeName = escapeHtml(params.userName || 'User')
  const safeRef = escapeHtml(params.submissionId.slice(-6).toUpperCase())
  const subject = cfg.subject
  
  const text = `Hi ${params.userName || 'User'},

${cfg.introMessage}

Submission Reference: #${params.submissionId.slice(-6).toUpperCase()}

${cfg.nextSteps}

Log in to your dashboard to track status: https://myonlinejet.com/dashboard

Best regards,
The MyOnlineJet Team
https://myonlinejet.com`

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #030712; color: #f3f4f6; margin: 0; padding: 20px; }
    .container { max-width: 580px; margin: 0 auto; background-color: #0b1020; border: 1px solid #1f2937; border-radius: 16px; overflow: hidden; }
    .header { background-color: #030712; padding: 24px; text-align: center; border-bottom: 1px solid #1f2937; }
    .logo { display: inline-block; background-color: #C50000; color: #ffffff; font-weight: bold; font-size: 16px; padding: 8px 14px; border-radius: 8px; text-decoration: none; }
    .content { padding: 32px 24px; line-height: 1.6; }
    .ref-card { background-color: #111827; border-left: 4px solid ${cfg.accentColor}; padding: 16px; margin: 20px 0; border-radius: 8px; }
    .btn { display: inline-block; background-color: #C50000; color: #ffffff; text-decoration: none; padding: 12px 24px; font-weight: 600; border-radius: 10px; margin-top: 20px; }
    .footer { padding: 20px; text-align: center; font-size: 12px; color: #9ca3af; border-top: 1px solid #1f2937; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo">MyOnlineJet</div>
    </div>
    <div class="content">
      <h2 style="color: #ffffff; margin-top: 0;">${escapeHtml(cfg.title)}</h2>
      <p>Hi <strong>${safeName}</strong>,</p>
      <p>${escapeHtml(cfg.introMessage)}</p>
      
      <div class="ref-card">
        <p style="margin: 0; font-size: 13px; color: #9ca3af;">Submission Reference</p>
        <p style="margin: 4px 0 0 0; font-size: 18px; font-weight: bold; color: #ffffff;">#${safeRef}</p>
      </div>

      <p>${escapeHtml(cfg.nextSteps)}</p>

      <a href="https://myonlinejet.com/dashboard" class="btn">Track Status in Dashboard</a>
    </div>
    <div class="footer">
      <p>&copy; ${new Date().getFullYear()} MyOnlineJet. All rights reserved.<br>Urban Air Mobility & eVTOL Ecosystem Integration</p>
    </div>
  </div>
</body>
</html>`

  return sendEmailPayload({ to: params.toEmail, subject, text, html })
}

// 2. Admin Alert Email for New Lead / Submission
export async function sendAdminNotificationEmail(params: {
  userName: string
  userEmail: string
  formType: string
  submissionId: string
  data: Record<string, unknown>
}) {
  const formLabel = labels[params.formType] || params.formType
  const safeName = escapeHtml(params.userName || params.userEmail)
  const safeEmail = escapeHtml(params.userEmail)
  const subject = `🚨 New ${formLabel} Submission from ${params.userName || params.userEmail}`

  const dataLines = Object.entries(params.data || {})
    .map(([k, v]) => `${k}: ${typeof v === 'object' ? JSON.stringify(v) : String(v)}`)
    .join('\n')

  const text = `New Submission Alert:

Form Type: ${formLabel}
User Name: ${params.userName || 'N/A'}
User Email: ${params.userEmail}
Reference ID: #${params.submissionId}

Payload Details:
${dataLines}

Review in Admin Dashboard: https://myonlinejet.com/dashboard`

  const dataRowsHtml = Object.entries(params.data || {})
    .map(([k, v]) => `<tr>
      <td style="padding: 8px 12px; border-bottom: 1px solid #1f2937; color: #9ca3af; font-weight: 600; text-transform: capitalize;">${escapeHtml(k)}</td>
      <td style="padding: 8px 12px; border-bottom: 1px solid #1f2937; color: #ffffff;">${escapeHtml(v)}</td>
    </tr>`)
    .join('')

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #030712; color: #f3f4f6; margin: 0; padding: 20px; }
    .container { max-width: 600px; margin: 0 auto; background-color: #0b1020; border: 1px solid #1f2937; border-radius: 16px; overflow: hidden; }
    .header { background-color: #111827; padding: 20px 24px; border-bottom: 1px solid #1f2937; }
    .badge { display: inline-block; background-color: #C50000; color: #ffffff; font-size: 11px; font-weight: bold; text-transform: uppercase; padding: 4px 8px; border-radius: 6px; }
    .content { padding: 24px; }
    table { width: 100%; border-collapse: collapse; margin: 16px 0; background-color: #030712; border-radius: 8px; overflow: hidden; }
    .btn { display: inline-block; background-color: #C50000; color: #ffffff; text-decoration: none; padding: 10px 20px; font-weight: 600; border-radius: 8px; margin-top: 16px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <span class="badge">New ${escapeHtml(formLabel)} Submission</span>
      <h2 style="color: #ffffff; margin: 8px 0 0 0;">${safeName}</h2>
    </div>
    <div class="content">
      <p style="color: #9ca3af; margin: 0 0 12px 0;">Applicant Email: <strong style="color: #ffffff;">${safeEmail}</strong></p>
      
      <table>
        <tbody>
          ${dataRowsHtml}
        </tbody>
      </table>

      <a href="https://myonlinejet.com/dashboard" class="btn">Open Admin Dashboard</a>
    </div>
  </div>
</body>
</html>`

  return sendEmailPayload({ to: adminEmail, subject, text, html })
}

// 3. Admin Message / Status Update Email to User
export async function sendAdminMessageEmail(params: {
  toEmail: string
  userName: string
  submissionId: string
  formType: string
  status?: string
  adminNotes?: string
}) {
  const formLabel = labels[params.formType] || params.formType
  const statusLabel = params.status ? params.status.toUpperCase() : 'UPDATED'
  const safeName = escapeHtml(params.userName || 'User')
  const safeRef = escapeHtml(params.submissionId.slice(-6).toUpperCase())
  const safeNote = params.adminNotes ? escapeHtml(params.adminNotes) : ''
  const subject = `Update on your ${formLabel} Submission - MyOnlineJet`

  const text = `Hi ${params.userName || 'User'},

An administrator has updated your ${formLabel} submission (Ref: #${params.submissionId.slice(-6).toUpperCase()}).

${params.status ? `Current Status: ${statusLabel}\n` : ''}${params.adminNotes ? `Admin Message:\n"${params.adminNotes}"\n` : ''}
Log in to your dashboard to review full updates:
https://myonlinejet.com/dashboard

Best regards,
MyOnlineJet Administrator`

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #030712; color: #f3f4f6; margin: 0; padding: 20px; }
    .container { max-width: 580px; margin: 0 auto; background-color: #0b1020; border: 1px solid #1f2937; border-radius: 16px; overflow: hidden; }
    .header { background-color: #030712; padding: 24px; text-align: center; border-bottom: 1px solid #1f2937; }
    .logo { display: inline-block; background-color: #C50000; color: #ffffff; font-weight: bold; font-size: 16px; padding: 8px 14px; border-radius: 8px; text-decoration: none; }
    .content { padding: 32px 24px; line-height: 1.6; }
    .msg-card { background-color: #111827; border-left: 4px solid #3b82f6; padding: 18px; margin: 20px 0; border-radius: 8px; }
    .status-badge { display: inline-block; background-color: rgba(197, 0, 0, 0.2); color: #ff5252; border: 1px solid rgba(197, 0, 0, 0.4); padding: 4px 10px; font-size: 12px; font-weight: bold; border-radius: 6px; text-transform: uppercase; }
    .btn { display: inline-block; background-color: #C50000; color: #ffffff; text-decoration: none; padding: 12px 24px; font-weight: 600; border-radius: 10px; margin-top: 16px; }
    .footer { padding: 20px; text-align: center; font-size: 12px; color: #9ca3af; border-top: 1px solid #1f2937; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo">MyOnlineJet</div>
    </div>
    <div class="content">
      <h2 style="color: #ffffff; margin-top: 0;">Submission Update</h2>
      <p>Hi <strong>${safeName}</strong>,</p>
      <p>An administrator has reviewed and updated your <strong>${escapeHtml(formLabel)}</strong> inquiry (Ref: #${safeRef}).</p>
      
      ${params.status ? `<p>New Status: <span class="status-badge">${escapeHtml(statusLabel)}</span></p>` : ''}

      ${params.adminNotes ? `
      <div class="msg-card">
        <p style="margin: 0; font-size: 12px; color: #9ca3af; font-weight: 600;">Message from MyOnlineJet Administrator:</p>
        <p style="margin: 8px 0 0 0; font-size: 14px; color: #ffffff; font-style: italic;">"${safeNote}"</p>
      </div>` : ''}

      <a href="https://myonlinejet.com/dashboard" class="btn">View Dashboard</a>
    </div>
    <div class="footer">
      <p>&copy; ${new Date().getFullYear()} MyOnlineJet. All rights reserved.</p>
    </div>
  </div>
</body>
</html>`

  return sendEmailPayload({ to: params.toEmail, subject, text, html })
}

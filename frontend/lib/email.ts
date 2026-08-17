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

export function escapeHtml(str: unknown): string {
  if (str === null || str === undefined) return ''
  if (typeof str === 'object') {
    if (Array.isArray(str)) {
      return str.map(s => escapeHtml(s)).join(', ')
    }
    return Object.entries(str)
      .map(([k, v]) => `${escapeHtml(k)}: ${escapeHtml(v)}`)
      .join('; ')
  }
  const s = String(str)
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

/**
 * Master Email Layout Renderer matching MyOnlineJet Brand Guidelines & Template
 */
export function renderEmailTemplate({
  preheaderText = 'Official communication from MyOnlineJet — Advanced Air Mobility & Vertiport Infrastructure.',
  bodyHtml,
  automatedNoticeText = 'This is an automated message from MyOnlineJet. Please do not reply to this email.',
}: {
  preheaderText?: string
  bodyHtml: string
  automatedNoticeText?: string
}): string {
  const currentYear = new Date().getFullYear()

  return `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="color-scheme" content="light">
<meta name="supported-color-schemes" content="light">
<title>MyOnlineJet</title>
<!--[if mso]>
<noscript>
<xml>
<o:OfficeDocumentSettings>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
</noscript>
<![endif]-->
<style>
  body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
  table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
  img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
  body { margin: 0 !important; padding: 0 !important; width: 100% !important; height: 100% !important; background-color: #f2f4f7; font-family: 'Inter', Arial, Helvetica, sans-serif; }

  .email-wrapper { width: 100%; background-color: #f2f4f7; }
  .email-container { max-width: 640px; margin: 0 auto; }

  .header-band { background-color: #0a1f44; height: 6px; line-height: 6px; font-size: 0; }
  .logo-cell { background-color: #ffffff; padding: 28px 24px; text-align: center; }
  .logo-cell img { display: block; margin: 0 auto; max-width: 220px; width: 100%; height: auto; }

  .content-cell { background-color: #ffffff; padding: 8px 36px 36px 36px; }
  .content-body { font-family: 'Inter', Arial, Helvetica, sans-serif; font-size: 15px; line-height: 1.7; color: #2b2b2b; }
  .content-body h1, .content-body h2, .content-body h3 { font-family: 'Playfair Display', Georgia, serif; color: #0a1f44; margin: 0 0 14px 0; }
  .content-body p { margin: 0 0 14px 0; }
  .content-body a { color: #0a1f44; }

  .divider-cell { padding: 0 36px; background-color: #ffffff; }
  .divider { border-top: 1px solid #e6e6e6; font-size: 0; line-height: 0; height: 1px; }

  .automated-cell { background-color: #ffffff; padding: 18px 36px 4px 36px; text-align: center; }
  .automated-text { font-family: Arial, Helvetica, sans-serif; font-size: 12px; color: #9a9a9a; font-style: italic; margin: 0; }

  .footer-cell { background-color: #0a1f44; padding: 32px 36px; text-align: center; }
  .footer-logo-wrap { background-color: #ffffff; display: inline-block; padding: 12px 20px; border-radius: 4px; margin: 0 0 16px 0; }
  .footer-logo-wrap img { display: block; max-width: 160px; width: 100%; height: auto; }
  .footer-contact { font-family: Arial, Helvetica, sans-serif; font-size: 13px; color: #d7dce6; line-height: 1.8; margin: 0 0 14px 0; }
  .footer-contact a { color: #e8cf85; text-decoration: none; }

  .footer-links { font-family: Arial, Helvetica, sans-serif; font-size: 12px; margin: 0 0 16px 0; }
  .footer-links a { color: #e8cf85; text-decoration: none; }
  .footer-links span.sep { color: #4a5a7a; padding: 0 8px; }

  .footer-disclaimer { font-family: Arial, Helvetica, sans-serif; font-size: 11px; color: #94a1bd; line-height: 1.7; margin: 0 0 14px 0; border-top: 1px solid #1c3363; padding-top: 14px; }
  .footer-copyright { font-family: Arial, Helvetica, sans-serif; font-size: 11px; color: #7c8bab; margin: 0; }

  @media only screen and (max-width: 600px) {
    .email-container { width: 100% !important; }
    .content-cell { padding: 8px 20px 28px 20px !important; }
    .divider-cell { padding: 0 20px !important; }
    .automated-cell { padding: 16px 20px 4px 20px !important; }
    .footer-cell { padding: 26px 20px !important; }
    .logo-cell img { max-width: 170px !important; }
    .footer-logo-wrap img { max-width: 140px !important; }
    .content-body { font-size: 14px !important; }
    .footer-links a { display: inline-block; margin: 4px 0; }
  }
</style>
</head>
<body style="margin: 0; padding: 0; width: 100%; height: 100%; background-color: #f2f4f7; font-family: 'Inter', Arial, Helvetica, sans-serif;">
<center class="email-wrapper" style="width: 100%; background-color: #f2f4f7;">
<div style="display:none; max-height:0; overflow:hidden; mso-hide:all;">
  ${escapeHtml(preheaderText)}
</div>

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="email-wrapper" style="width: 100%; background-color: #f2f4f7;">
  <tr>
    <td align="center" style="padding: 24px 12px;">

      <table role="presentation" width="640" cellpadding="0" cellspacing="0" class="email-container" style="width:640px; max-width:640px; margin: 0 auto;">

        <!-- Top navy accent band -->
        <tr>
          <td class="header-band" style="background-color: #0a1f44; height: 6px; line-height: 6px; font-size: 0;">&nbsp;</td>
        </tr>

        <!-- Logo on pure white -->
        <tr>
          <td class="logo-cell" style="background-color: #ffffff; padding: 28px 24px; text-align: center;">
            <img src="https://myonlinejet.com/images/Logo.webp" alt="MyOnlineJet" width="220" style="display: block; margin: 0 auto; max-width: 220px; width: 100%; height: auto; background-color:#ffffff;">
          </td>
        </tr>

        <!-- Divider -->
        <tr>
          <td class="divider-cell" style="padding: 0 36px; background-color: #ffffff;">
            <div class="divider" style="border-top: 1px solid #e6e6e6; font-size: 0; line-height: 0; height: 1px;">&nbsp;</div>
          </td>
        </tr>

        <!-- MESSAGE CONTENT AREA -->
        <tr>
          <td class="content-cell" style="background-color: #ffffff; padding: 18px 36px 36px 36px;">
            <div class="content-body" style="font-family: 'Inter', Arial, Helvetica, sans-serif; font-size: 15px; line-height: 1.7; color: #2b2b2b;">
              ${bodyHtml}
            </div>
          </td>
        </tr>

        <!-- Automated notice -->
        <tr>
          <td class="automated-cell" style="background-color: #ffffff; padding: 18px 36px 4px 36px; text-align: center;">
            <p class="automated-text" style="font-family: Arial, Helvetica, sans-serif; font-size: 12px; color: #9a9a9a; font-style: italic; margin: 0;">${escapeHtml(automatedNoticeText)}</p>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td class="footer-cell" style="background-color: #0a1f44; padding: 32px 36px; text-align: center;">
            <table role="presentation" cellpadding="0" cellspacing="0" align="center" style="margin: 0 auto 16px auto;">
              <tr>
                <td class="footer-logo-wrap" style="background-color:#ffffff; padding:12px 20px; border-radius:4px;">
                  <img src="https://myonlinejet.com/images/Logo.webp" alt="MyOnlineJet" width="160" style="display:block; max-width:160px; width:100%; height:auto; background-color:#ffffff;">
                </td>
              </tr>
            </table>
            <p class="footer-contact" style="font-family: Arial, Helvetica, sans-serif; font-size: 13px; color: #d7dce6; line-height: 1.8; margin: 0 0 14px 0;">
              Advanced Air Mobility &amp; Vertiport Infrastructure<br>
              For any query, contact us at <a href="mailto:contact@myonlinejet.com" style="color: #e8cf85; text-decoration: none;">contact@myonlinejet.com</a>
            </p>

            <p class="footer-links" style="font-family: Arial, Helvetica, sans-serif; font-size: 12px; margin: 0 0 16px 0;">
              <a href="https://myonlinejet.com/privacy-policy/" target="_blank" style="color: #e8cf85; text-decoration: none;">Privacy Policy</a>
              <span class="sep" style="color: #4a5a7a; padding: 0 8px;">|</span>
              <a href="https://myonlinejet.com/terms-conditions/" target="_blank" style="color: #e8cf85; text-decoration: none;">Terms &amp; Conditions</a>
            </p>

            <p class="footer-disclaimer" style="font-family: Arial, Helvetica, sans-serif; font-size: 11px; color: #94a1bd; line-height: 1.7; margin: 0 0 14px 0; border-top: 1px solid #1c3363; padding-top: 14px;">
              Disclaimer: This email and any attachments are intended solely for the addressee(s) and may contain confidential or privileged information. If you have received this email in error, please notify the sender immediately and delete it from your system. MyOnlineJet accepts no liability for any loss or damage arising from unauthorized access, alteration, or use of this communication. This message does not constitute a binding offer, agreement, or commitment unless explicitly stated otherwise in writing.
            </p>

            <p class="footer-copyright" style="font-family: Arial, Helvetica, sans-serif; font-size: 11px; color: #7c8bab; margin: 0;">
              &copy; ${currentYear} iAlpha Technologies Pvt Ltd. All rights reserved.
            </p>
          </td>
        </tr>

      </table>

    </td>
  </tr>
</table>
</center>
</body>
</html>`
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
    accentColor: '#0a1f44',
  },
  career: {
    title: 'Job Application Received',
    subject: 'Thank You for Applying to MyOnlineJet',
    introMessage: 'Thank you for your interest in building the future of Urban Air Mobility with MyOnlineJet! We have received your application materials.',
    nextSteps: 'Our Talent Acquisition team will carefully review your qualifications and experience. If your profile matches our openings, we will invite you for an introductory interview.',
    accentColor: '#0a1f44',
  },
  investor: {
    title: 'Investor Inquiry Received',
    subject: 'Investor Relations Inquiry - MyOnlineJet',
    introMessage: 'Thank you for your interest in investing in MyOnlineJet’s eVTOL and vertiport infrastructure ecosystem.',
    nextSteps: 'Our Executive Leadership & Investor Relations office will review your request and connect with you directly regarding investment materials.',
    accentColor: '#0a1f44',
  },
  partner: {
    title: 'Partnership Proposal Received',
    subject: 'Partnership Proposal Acknowledgment - MyOnlineJet',
    introMessage: 'Thank you for proposing a strategic partnership with MyOnlineJet. We have registered your collaboration proposal.',
    nextSteps: 'Our Business Development team will evaluate potential technology, infrastructure, or operational synergies and respond promptly.',
    accentColor: '#0a1f44',
  },
  faq: {
    title: 'Support Inquiry Logged',
    subject: 'Inquiry Logged - MyOnlineJet Support',
    introMessage: 'Thank you for submitting your question. Your request has been queued in our support portal.',
    nextSteps: 'A specialist from our team will inspect your question and provide guidance shortly.',
    accentColor: '#0a1f44',
  },
  advisory: {
    title: 'AAM Advisory Consultation Request',
    subject: 'Advanced Air Mobility Advisory Request - MyOnlineJet',
    introMessage: 'Thank you for requesting eVTOL, Vertiport, and Advanced Air Mobility (AAM) advisory services from MyOnlineJet.',
    nextSteps: 'Our Senior Aviation & Infrastructure Consultants will review your project scope and schedule an initial consultation call.',
    accentColor: '#0a1f44',
  },
}

function getFormConfig(formType: string): FormEmailContent {
  return formEmailConfigs[formType] || {
    title: `${labels[formType] || formType} Received`,
    subject: `Inquiry Received: ${labels[formType] || formType} - MyOnlineJet`,
    introMessage: `Thank you for reaching out to MyOnlineJet. We have successfully received your ${labels[formType] || formType} submission.`,
    nextSteps: 'Our team is currently reviewing your details and will get back to you within 24–48 business hours.',
    accentColor: '#0a1f44',
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
  const safeName = escapeHtml(params.userName || 'Valued Client')
  const safeRef = escapeHtml(params.submissionId.slice(-6).toUpperCase())
  const subject = cfg.subject

  const text = `Dear ${params.userName || 'Valued Client'},

${cfg.introMessage}

Submission Reference: #${params.submissionId.slice(-6).toUpperCase()}

${cfg.nextSteps}

Track your status in your dashboard: https://myonlinejet.com/dashboard

Regards,
Team MyOnlineJet`

  const bodyHtml = `
    <h2 style="font-family: 'Playfair Display', Georgia, serif; color: #0a1f44; margin: 0 0 16px 0; font-size: 22px; font-weight: 700;">${escapeHtml(cfg.title)}</h2>
    
    <p>Dear ${safeName},</p>

    <p>${escapeHtml(cfg.introMessage)}</p>

    <div style="background-color: #f8fafc; border-left: 4px solid #0a1f44; padding: 16px 20px; margin: 20px 0; border-radius: 4px;">
      <div style="font-size: 12px; color: #64748b; text-transform: uppercase; font-weight: 600; letter-spacing: 0.5px;">Submission Reference</div>
      <div style="font-size: 18px; font-weight: 700; color: #0a1f44; margin-top: 4px;">#${safeRef}</div>
    </div>

    <p>${escapeHtml(cfg.nextSteps)}</p>

    <div style="margin-top: 24px; margin-bottom: 24px;">
      <a href="https://myonlinejet.com/dashboard" style="display: inline-block; background-color: #0a1f44; color: #ffffff; text-decoration: none; padding: 12px 24px; font-weight: 600; border-radius: 4px; font-size: 14px;">Track Status in Dashboard</a>
    </div>

    <p style="margin-top: 24px; margin-bottom: 0;">Regards,<br><strong>Team MyOnlineJet</strong></p>
  `

  const html = renderEmailTemplate({
    preheaderText: `${cfg.title} - Reference #${safeRef}`,
    bodyHtml,
  })

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
  const safeRef = escapeHtml(params.submissionId.slice(-6).toUpperCase())
  const subject = `New ${formLabel} Submission from ${params.userName || params.userEmail}`

  const dataLines = Object.entries(params.data || {})
    .map(([k, v]) => `${k}: ${typeof v === 'object' ? JSON.stringify(v) : String(v)}`)
    .join('\n')

  const text = `New Submission Alert:

Form Type: ${formLabel}
User Name: ${params.userName || 'N/A'}
User Email: ${params.userEmail}
Reference ID: #${safeRef}

Payload Details:
${dataLines}

Review in Admin Dashboard: https://myonlinejet.com/dashboard`

  const dataRowsHtml = Object.entries(params.data || {})
    .map(([k, v]) => `
      <tr>
        <td style="padding: 10px 14px; border-bottom: 1px solid #e2e8f0; color: #475569; font-weight: 600; text-transform: capitalize; width: 35%; font-size: 14px;">${escapeHtml(k)}</td>
        <td style="padding: 10px 14px; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-size: 14px;">${escapeHtml(v)}</td>
      </tr>
    `)
    .join('')

  const bodyHtml = `
    <h2 style="font-family: 'Playfair Display', Georgia, serif; color: #0a1f44; margin: 0 0 16px 0; font-size: 22px;">New ${escapeHtml(formLabel)} Submission</h2>
    
    <p>A new form inquiry has been submitted on the MyOnlineJet portal.</p>

    <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 16px; margin: 20px 0;">
      <p style="margin: 0 0 8px 0; font-size: 14px; color: #475569;">Submitter: <strong style="color: #0a1f44;">${safeName}</strong> (&lt;<a href="mailto:${safeEmail}" style="color: #0a1f44;">${safeEmail}</a>&gt;)</p>
      <p style="margin: 0; font-size: 13px; color: #64748b;">Reference ID: <strong>#${safeRef}</strong></p>
    </div>

    <h3 style="font-family: 'Inter', Arial, sans-serif; color: #0a1f44; font-size: 16px; font-weight: 600; margin: 20px 0 10px 0;">Submission Details</h3>

    <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 6px; overflow: hidden; margin-bottom: 24px;">
      <tbody>
        ${dataRowsHtml}
      </tbody>
    </table>

    <div style="margin-top: 24px;">
      <a href="https://myonlinejet.com/dashboard" style="display: inline-block; background-color: #0a1f44; color: #ffffff; text-decoration: none; padding: 12px 24px; font-weight: 600; border-radius: 4px; font-size: 14px;">Open Admin Dashboard</a>
    </div>
  `

  const html = renderEmailTemplate({
    preheaderText: `New ${formLabel} Submission from ${safeName}`,
    bodyHtml,
    automatedNoticeText: 'Internal notification for MyOnlineJet administrative team.',
  })

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
  const safeName = escapeHtml(params.userName || 'Valued Client')
  const safeRef = escapeHtml(params.submissionId.slice(-6).toUpperCase())
  const safeNote = params.adminNotes ? escapeHtml(params.adminNotes) : ''
  const subject = `Update on your ${formLabel} Submission - MyOnlineJet`

  const text = `Dear ${params.userName || 'Valued Client'},

An administrator has updated your ${formLabel} submission (Ref: #${safeRef}).

${params.status ? `Current Status: ${statusLabel}\n` : ''}${params.adminNotes ? `Admin Message:\n"${params.adminNotes}"\n` : ''}
Log in to your dashboard to review full updates:
https://myonlinejet.com/dashboard

Regards,
Team MyOnlineJet`

  const bodyHtml = `
    <h2 style="font-family: 'Playfair Display', Georgia, serif; color: #0a1f44; margin: 0 0 16px 0; font-size: 22px;">Submission Update</h2>
    
    <p>Dear ${safeName},</p>

    <p>An administrator has reviewed and updated your <strong>${escapeHtml(formLabel)}</strong> inquiry (Ref: <strong>#${safeRef}</strong>).</p>

    ${params.status ? `
      <div style="margin: 16px 0;">
        <span style="display: inline-block; background-color: #0a1f44; color: #ffffff; padding: 6px 14px; font-size: 12px; font-weight: 700; border-radius: 4px; letter-spacing: 0.5px;">STATUS: ${escapeHtml(statusLabel)}</span>
      </div>
    ` : ''}

    ${params.adminNotes ? `
      <div style="background-color: #f8fafc; border-left: 4px solid #0a1f44; padding: 16px 20px; margin: 20px 0; border-radius: 4px;">
        <div style="font-size: 12px; color: #64748b; font-weight: 600; text-transform: uppercase; margin-bottom: 6px;">Message from MyOnlineJet Administrator</div>
        <div style="font-size: 15px; color: #1e293b; font-style: italic; line-height: 1.6;">"${safeNote}"</div>
      </div>
    ` : ''}

    <p>You can view full status history and communicate with our team in your dashboard.</p>

    <div style="margin-top: 24px; margin-bottom: 24px;">
      <a href="https://myonlinejet.com/dashboard" style="display: inline-block; background-color: #0a1f44; color: #ffffff; text-decoration: none; padding: 12px 24px; font-weight: 600; border-radius: 4px; font-size: 14px;">View Dashboard</a>
    </div>

    <p style="margin-top: 24px; margin-bottom: 0;">Regards,<br><strong>Team MyOnlineJet</strong></p>
  `

  const html = renderEmailTemplate({
    preheaderText: `Update on your ${formLabel} inquiry - #${safeRef}`,
    bodyHtml,
  })

  return sendEmailPayload({ to: params.toEmail, subject, text, html })
}

/**
 * Send a custom email using the MyOnlineJet HTML email template design.
 */
export async function sendCustomEmail(params: {
  toEmail: string
  subject: string
  preheaderText?: string
  bodyHtml: string
  plainText?: string
  automatedNoticeText?: string
}) {
  const html = renderEmailTemplate({
    preheaderText: params.preheaderText,
    bodyHtml: params.bodyHtml,
    automatedNoticeText: params.automatedNoticeText,
  })

  const text = params.plainText || params.bodyHtml.replace(/<[^>]+>/g, '').trim()

  return sendEmailPayload({
    to: params.toEmail,
    subject: params.subject,
    text,
    html,
  })
}


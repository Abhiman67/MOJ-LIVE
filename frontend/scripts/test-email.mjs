import nodemailer from 'nodemailer'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Parse .env file manually
const envPath = path.join(__dirname, '../.env')
if (fs.existsSync(envPath)) {
  const envConfig = fs.readFileSync(envPath, 'utf8')
  envConfig.split('\n').forEach(line => {
    const trimmed = line.trim()
    if (trimmed && !trimmed.startsWith('#') && trimmed.includes('=')) {
      const idx = trimmed.indexOf('=')
      const key = trimmed.substring(0, idx).trim()
      const val = trimmed.substring(idx + 1).trim()
      if (key && !process.env[key]) {
        process.env[key] = val
      }
    }
  })
}

const host = process.env.SMTP_HOST || 'smtppro.zoho.com'
const port = Number(process.env.SMTP_PORT) || 465
const user = process.env.SMTP_USER || ''
const pass = process.env.SMTP_PASS || ''
const fromEmail = process.env.FROM_EMAIL || user

const recipient = process.argv[2] || user

console.log('--- Zoho Mail SMTP Test ---')
console.log(`Host: ${host}`)
console.log(`Port: ${port}`)
console.log(`User: ${user}`)
console.log(`From: ${fromEmail}`)
console.log(`To:   ${recipient}`)
console.log('---------------------------')

if (!user || !pass) {
  console.log('ℹ️  SMTP_USER or SMTP_PASS is missing in .env')
  console.log('Please set SMTP_PASS in frontend/.env with your Zoho App Password to test sending emails.')
  process.exit(0)
}

const transporter = nodemailer.createTransport({
  host,
  port,
  secure: port === 465,
  auth: { user, pass },
})

async function main() {
  try {
    console.log('Verifying SMTP connection with Zoho Mail...')
    await transporter.verify()
    console.log('✅ SMTP Connection Successful!')

    console.log(`Sending test email to ${recipient}...`)
    const info = await transporter.sendMail({
      from: `MyOnlineJet <${fromEmail}>`,
      to: recipient,
      subject: 'MyOnlineJet Zoho Mail SMTP Test',
      text: 'This is a test email sent from MyOnlineJet using Zoho Mail SMTP.',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f2f4f7;">
          <div style="max-width: 600px; margin: 0 auto; background: #ffffff; padding: 24px; border-top: 6px solid #0a1f44; border-radius: 4px;">
            <h2 style="color: #0a1f44;">Zoho Mail Connected Successfully!</h2>
            <p>Your MyOnlineJet website is now configured to send custom emails via <strong>${fromEmail}</strong>.</p>
            <p>Regards,<br><strong>Team MyOnlineJet</strong></p>
          </div>
        </div>
      `,
    })

    console.log('✅ Email Sent Successfully!')
    console.log('Message ID:', info.messageId)
  } catch (err) {
    console.error('❌ Error sending email via Zoho SMTP:', err)
  }
}

main()

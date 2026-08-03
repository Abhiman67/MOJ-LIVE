/**
 * Seed script — creates initial admin user and sample form submissions.
 *
 * Usage:
 *   node scripts/seed.mjs
 *
 * Requires explicit seed approval and credentials in environment variables.
 */

const uri = process.env.MONGODB_URI
const adminEmail = process.env.ADMIN_EMAIL
const adminPassword = process.env.ADMIN_PASSWORD

if (process.env.ALLOW_SEED !== 'true') {
  throw new Error('Set ALLOW_SEED=true to run the seed script.')
}
if (!uri || !adminEmail || !adminPassword) {
  throw new Error('MONGODB_URI, ADMIN_EMAIL, and ADMIN_PASSWORD are required.')
}
if (adminPassword.length < 12) {
  throw new Error('ADMIN_PASSWORD must be at least 12 characters long.')
}

async function seed() {
  const mongoose = (await import('mongoose')).default
  await mongoose.connect(uri)
  console.log('Connected to MongoDB')

  const UserModel = mongoose.model('User', new mongoose.Schema({
    name: String, email: String, role: String,
    authProvider: String, hashedPassword: String,
    profileCompleted: Boolean, emailVerified: Date,
  }, { timestamps: true }))

  const FormSubmissionModel = mongoose.model('FormSubmission', new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    formType: String, data: mongoose.Schema.Types.Mixed,
    status: String, adminNotes: String,
  }, { timestamps: true }))

  const bcrypt = (await import('bcryptjs')).default

  // Create admin user
  const normalizedAdminEmail = adminEmail.trim().toLowerCase()
  const existing = await UserModel.findOne({ email: normalizedAdminEmail })
  if (!existing) {
    const hashedPassword = await bcrypt.hash(adminPassword, 12)
    await UserModel.create({
      name: 'Admin',
      email: normalizedAdminEmail,
      role: 'admin',
      authProvider: 'credentials',
      hashedPassword,
      profileCompleted: true,
      emailVerified: new Date(),
    })
    console.log(`Admin user created: ${normalizedAdminEmail}`)
  } else {
    console.log('Admin user already exists')
  }

  await mongoose.disconnect()
  console.log('Done.')
}

seed().catch((err) => {
  console.error(err)
  process.exit(1)
})

/**
 * Seed script — creates initial admin user and sample form submissions.
 *
 * Usage:
 *   node scripts/seed.mjs
 *
 * Requires MONGODB_URI env var or a running local MongoDB instance.
 */

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/myonlinejet'

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
  const adminEmail = 'admin@myonlinejet.com'
  const existing = await UserModel.findOne({ email: adminEmail })
  if (!existing) {
    const hashedPassword = await bcrypt.hash('admin123', 10)
    await UserModel.create({
      name: 'Admin',
      email: adminEmail,
      role: 'admin',
      authProvider: 'credentials',
      hashedPassword,
      profileCompleted: true,
      emailVerified: new Date(),
    })
    console.log('Admin user created: admin@myonlinejet.com / admin123')
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

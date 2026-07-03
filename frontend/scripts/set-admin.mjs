// Run with: node scripts/set-admin.mjs your@email.com
import mongoose from 'mongoose'

const uri = process.env.MONGODB_URI
if (!uri) { console.error('MONGODB_URI not set'); process.exit(1) }

const email = process.argv[2]
if (!email) { console.error('Usage: node scripts/set-admin.mjs <email>'); process.exit(1) }

await mongoose.connect(uri)
const db = mongoose.connection.db
const result = await db.collection('users').updateOne(
  { email: email.toLowerCase() },
  { $set: { role: 'admin' } }
)

if (result.matchedCount) {
  console.log(`✅ ${email} is now an admin`)
} else {
  console.log(`❌ User not found: ${email}`)
}

await mongoose.disconnect()

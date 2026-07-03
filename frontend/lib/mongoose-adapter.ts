import type { Adapter } from 'next-auth/adapters'
import mongoose from 'mongoose'
import { connectDB } from './db'

const UserModel = mongoose.models.User || mongoose.model('User', new mongoose.Schema({}, { strict: false, collection: 'users' }))
const AccountModel = mongoose.models.Account || mongoose.model('Account', new mongoose.Schema({}, { strict: false, collection: 'accounts' }))
const SessionModel = mongoose.models.Session || mongoose.model('Session', new mongoose.Schema({}, { strict: false, collection: 'sessions' }))
const VerificationTokenModel =
  mongoose.models.VerificationToken || mongoose.model('VerificationToken', new mongoose.Schema({}, { strict: false, collection: 'verification_tokens' }))

export function MongooseAdapter(): Adapter {
  return {
    async createUser(user) {
      await connectDB()
      const doc = await UserModel.create({ ...user, role: 'general', authProvider: 'credentials', profileCompleted: false })
      return { id: doc._id.toString(), ...doc.toObject(), emailVerified: doc.emailVerified ?? null }
    },
    async getUser(id) {
      await connectDB()
      const doc = await UserModel.findById(id)
      if (!doc) return null
      return { id: doc._id.toString(), ...doc.toObject(), emailVerified: doc.emailVerified ?? null }
    },
    async getUserByEmail(email) {
      await connectDB()
      const doc = await UserModel.findOne({ email })
      if (!doc) return null
      return { id: doc._id.toString(), ...doc.toObject(), emailVerified: doc.emailVerified ?? null }
    },
    async getUserByAccount({ provider, providerAccountId }) {
      await connectDB()
      const account = await AccountModel.findOne({ provider, providerAccountId })
      if (!account) return null
      const doc = await UserModel.findById(account.userId)
      if (!doc) return null
      return { id: doc._id.toString(), ...doc.toObject(), emailVerified: doc.emailVerified ?? null }
    },
    async updateUser(user) {
      await connectDB()
      const doc = await UserModel.findByIdAndUpdate(user.id, user, { new: true })
      if (!doc) throw new Error('User not found')
      return { id: doc._id.toString(), ...doc.toObject(), emailVerified: doc.emailVerified ?? null }
    },
    async deleteUser(userId) {
      await connectDB()
      const doc = await UserModel.findByIdAndDelete(userId)
      await AccountModel.deleteMany({ userId })
      await SessionModel.deleteMany({ userId })
      if (!doc) return null
      return { id: doc._id.toString(), ...doc.toObject(), emailVerified: doc.emailVerified ?? null }
    },
    async linkAccount(account) {
      await connectDB()
      await AccountModel.create(account)
    },
    async unlinkAccount({ provider, providerAccountId }) {
      await connectDB()
      await AccountModel.deleteOne({ provider, providerAccountId })
    },
    async createSession(session) {
      await connectDB()
      const doc = await SessionModel.create(session)
      return { ...doc.toObject(), id: doc._id.toString() }
    },
    async getSessionAndUser(sessionToken) {
      await connectDB()
      const session = await SessionModel.findOne({ sessionToken })
      if (!session) return null
      const user = await UserModel.findById(session.userId)
      if (!user) return null
      return {
        session: { ...session.toObject(), id: session._id.toString() },
        user: { id: user._id.toString(), ...user.toObject(), emailVerified: user.emailVerified ?? null },
      }
    },
    async updateSession(session) {
      await connectDB()
      const doc = await SessionModel.findOneAndUpdate({ sessionToken: session.sessionToken }, session, { new: true })
      if (!doc) return null
      return { ...doc.toObject(), id: doc._id.toString() }
    },
    async deleteSession(sessionToken) {
      await connectDB()
      await SessionModel.deleteOne({ sessionToken })
    },
    async createVerificationToken(token) {
      await connectDB()
      const doc = await VerificationTokenModel.create(token)
      return { ...doc.toObject(), id: doc._id.toString() }
    },
    async useVerificationToken({ identifier, token }) {
      await connectDB()
      const doc = await VerificationTokenModel.findOneAndDelete({ identifier, token })
      if (!doc) return null
      return { ...doc.toObject(), id: doc._id.toString() }
    },
  }
}

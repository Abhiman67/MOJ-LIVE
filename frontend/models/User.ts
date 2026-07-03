import mongoose, { Schema, type Model, type Document } from 'mongoose'

export type UserRole = 'admin' | 'general' | 'partner' | 'investor' | 'career'
export type AuthProvider = 'google' | 'apple' | 'credentials'

export interface IUser extends Document {
  name: string
  email: string
  image?: string
  role: UserRole
  authProvider: AuthProvider
  hashedPassword?: string
  profileCompleted: boolean
  emailVerified?: Date
  createdAt: Date
  updatedAt: Date
}

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    image: { type: String },
    role: { type: String, enum: ['admin', 'general', 'partner', 'investor', 'career'], default: 'general' },
    authProvider: { type: String, enum: ['google', 'apple', 'credentials'], required: true },
    hashedPassword: { type: String },
    profileCompleted: { type: Boolean, default: false },
    emailVerified: { type: Date },
  },
  { timestamps: true }
)

export const User: Model<IUser> = mongoose.models.User ?? mongoose.model<IUser>('User', UserSchema)

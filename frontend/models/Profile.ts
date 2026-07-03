import mongoose, { Schema, type Model, type Document, type Types } from 'mongoose'

export interface IProfile extends Document {
  userId: Types.ObjectId
  phone?: string
  organization?: string
  role?: string
  linkedIn?: string
  portfolio?: string
  location?: string
  bio?: string
  createdAt: Date
  updatedAt: Date
}

const ProfileSchema = new Schema<IProfile>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, unique: true, index: true },
    phone: { type: String },
    organization: { type: String },
    role: { type: String },
    linkedIn: { type: String },
    portfolio: { type: String },
    location: { type: String },
    bio: { type: String },
  },
  { timestamps: true }
)

export const Profile: Model<IProfile> = mongoose.models.Profile ?? mongoose.model<IProfile>('Profile', ProfileSchema)

import mongoose, { Schema, type Model, type Document } from 'mongoose'

interface IRateLimit extends Document {
  key: string
  window: number
  count: number
  expiresAt: Date
}

const RateLimitSchema = new Schema<IRateLimit>(
  {
    key: { type: String, required: true },
    window: { type: Number, required: true },
    count: { type: Number, required: true, default: 0 },
    expiresAt: { type: Date, required: true, index: { expires: 0 } },
  },
  { versionKey: false }
)

RateLimitSchema.index({ key: 1, window: 1 }, { unique: true })

export const RateLimit: Model<IRateLimit> =
  mongoose.models.RateLimit ?? mongoose.model<IRateLimit>('RateLimit', RateLimitSchema)

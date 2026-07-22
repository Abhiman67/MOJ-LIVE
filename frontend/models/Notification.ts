import mongoose, { Schema, type Model, type Document, type Types } from 'mongoose'

export type NotificationType = 'approved' | 'rejected' | 'reviewed' | 'message' | 'system'

export interface INotification extends Document {
  userId: Types.ObjectId
  submissionId?: Types.ObjectId
  title: string
  message: string
  type: NotificationType
  formType?: string
  isRead: boolean
  createdAt: Date
  updatedAt: Date
}

const NotificationSchema = new Schema<INotification>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    submissionId: { type: Schema.Types.ObjectId, ref: 'FormSubmission', index: true },
    title: { type: String, required: true },
    message: { type: String, required: true },
    type: {
      type: String,
      enum: ['approved', 'rejected', 'reviewed', 'message', 'system'],
      default: 'system',
    },
    formType: { type: String },
    isRead: { type: Boolean, default: false, index: true },
  },
  { timestamps: true }
)

export const Notification: Model<INotification> =
  mongoose.models.Notification ?? mongoose.model<INotification>('Notification', NotificationSchema)

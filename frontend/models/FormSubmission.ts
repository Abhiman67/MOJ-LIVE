import mongoose, { Schema, type Model, type Document, type Types } from 'mongoose'

export type FormType = 'contact' | 'career' | 'investor' | 'partner' | 'faq' | 'advisory'
export type SubmissionStatus = 'pending' | 'reviewed' | 'approved' | 'rejected'

export interface IFormSubmission extends Document {
  userId: Types.ObjectId
  formType: FormType
  data: Record<string, unknown>
  status: SubmissionStatus
  adminNotes?: string
  createdAt: Date
  updatedAt: Date
}

const FormSubmissionSchema = new Schema<IFormSubmission>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    formType: {
      type: String,
      enum: ['contact', 'career', 'investor', 'partner', 'faq', 'advisory'],
      required: true,
      index: true,
    },
    data: { type: Schema.Types.Mixed, required: true },
    status: {
      type: String,
      enum: ['pending', 'reviewed', 'approved', 'rejected'],
      default: 'pending',
    },
    adminNotes: { type: String },
  },
  { timestamps: true }
)

export const FormSubmission: Model<IFormSubmission> =
  mongoose.models.FormSubmission ?? mongoose.model<IFormSubmission>('FormSubmission', FormSubmissionSchema)

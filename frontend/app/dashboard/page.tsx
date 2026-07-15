import { auth } from '@/auth'
import { connectDB } from '@/lib/db'
import { FormSubmission } from '@/models/FormSubmission'
import DashboardContent from './DashboardContent'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const session = await auth()
  if (!session?.user?.id) redirect('/auth?callbackUrl=/dashboard')

  const isAdmin = session.user.role === 'admin'

  await connectDB()

  const filter: Record<string, unknown> = {}
  if (!isAdmin) filter.userId = session.user.id

  const submissions = await FormSubmission
    .find(filter)
    .populate('userId', 'name email')
    .sort({ createdAt: -1 })
    .lean()

  const initialSubs = submissions.map(s => {
    const doc = s as unknown as Record<string, unknown>
    const userIdObj = doc.userId as Record<string, unknown> | undefined
    return {
      _id: String(doc._id),
      formType: doc.formType as string,
      data: doc.data as Record<string, unknown>,
      status: doc.status as string,
      createdAt: (doc.createdAt as Date)?.toISOString?.() || String(doc.createdAt),
      userId: userIdObj
        ? {
            name: String(userIdObj.name || ''),
            email: String(userIdObj.email || ''),
          }
        : undefined,
    }
  })

  return (
    <DashboardContent
      initialSubs={initialSubs}
      user={{ name: session.user.name, email: session.user.email }}
      isAdmin={isAdmin}
    />
  )
}

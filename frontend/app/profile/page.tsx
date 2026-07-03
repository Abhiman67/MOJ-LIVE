import { auth } from '@/auth'
import { connectDB } from '@/lib/db'
import { Profile } from '@/models/Profile'
import { User } from '@/models/User'
import ProfileForm from './ProfileForm'
import { redirect } from 'next/navigation'

export default async function ProfilePage() {
  const session = await auth()
  if (!session?.user?.id) redirect('/auth?callbackUrl=/profile')

  await connectDB()

  const doc = await Profile.findOne({ userId: session.user.id }).lean()

  let initialData = {
    phone: '',
    organization: '',
    role: 'general',
    linkedIn: '',
    portfolio: '',
    location: '',
    bio: '',
  }

  if (doc) {
    const p = doc as unknown as Record<string, unknown>
    initialData = {
      phone: (p.phone as string) || '',
      organization: (p.organization as string) || '',
      role: (p.role as string) || '',
      linkedIn: (p.linkedIn as string) || '',
      portfolio: (p.portfolio as string) || '',
      location: (p.location as string) || '',
      bio: (p.bio as string) || '',
    }
  } else {
    const user = await User.findById(session.user.id).lean()
    initialData.role = ((user as unknown as Record<string, unknown>)?.role as string) || 'general'
  }

  return (
    <ProfileForm
      initialData={initialData}
      user={{ name: session.user.name, email: session.user.email }}
    />
  )
}

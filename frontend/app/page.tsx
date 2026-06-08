import type { Metadata } from 'next'
import { HomeLanding } from '@/components/home/HomeLanding'

export const metadata: Metadata = {
  title: 'MyOnlineJet - Advanced Air Mobility | Smart Vertiports | Jaipur, India',
  description:
    'MyOnlineJet is an Aviation infrastructure technology company focused on urban air mobility, vertiport networks, and next-generation transport systems. Invest in the future of transportation.',
  alternates: {
    canonical: '/'
  }
}

export default function HomePage() {
  return <HomeLanding />
}

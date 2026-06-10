import type { Metadata } from 'next'
import { AAMContent } from '@/components/page/AAMContent'

export const metadata: Metadata = {
  title: 'Advanced Air Mobility (AAM) | Redefining Movement — MyOnlineJet',
  description:
    'Advanced Air Mobility is not an upgrade to aviation — it\'s a new layer of civilization. MyOnlineJet is building India\'s integrated AAM ecosystem with vertiports, intelligence, and network-first infrastructure.',
  openGraph: {
    title: 'Advanced Air Mobility | MyOnlineJet — Building the Next Layer of Movement',
    description:
      'AAM is inevitable. MyOnlineJet is building the infrastructure, intelligence, and network that makes it work at scale. Explore India\'s first integrated AAM ecosystem.',
    images: [{ url: 'https://myonlinejet.com/images/og-aam.webp' }]
  },
  alternates: {
    canonical: 'https://myonlinejet.com/advanced-air-mobility/'
  }
}

export default function AdvancedAirMobilityPage() {
  return <AAMContent />
}

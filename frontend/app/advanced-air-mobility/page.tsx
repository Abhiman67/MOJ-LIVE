import type { Metadata } from 'next'
import { ContentPage } from '@/components/page/ContentPage'
import { pageData } from '@/lib/page-data'

export const metadata: Metadata = {
  title: 'Advanced Air Mobility (AAM) | Redefining Movement - MyOnlineJet',
  description:
    "Advanced Air Mobility is not an upgrade to aviation - it's a new layer of civilization. MyOnlineJet is building India's integrated AAM ecosystem.",
  alternates: {
    canonical: '/advanced-air-mobility'
  }
}

export default function AdvancedAirMobilityPage() {
  return <ContentPage data={pageData['/advanced-air-mobility']} />
}

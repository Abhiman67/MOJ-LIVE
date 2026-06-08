import type { Metadata } from 'next'
import { ContentPage } from '@/components/page/ContentPage'
import { pageData } from '@/lib/page-data'

export const metadata: Metadata = {
  title: 'Ecosystem Integration | MyOnlineJet - India\'s Intelligent Air Mobility Network',
  description:
    'MyOnlineJet connects vertiports, eVTOL aircraft, digital intelligence, partners, and regulatory systems into a scalable mobility infrastructure.',
  alternates: { canonical: '/ecosystem-integration' }
}

export default function Page() {
  return <ContentPage data={pageData['/ecosystem-integration']} />
}

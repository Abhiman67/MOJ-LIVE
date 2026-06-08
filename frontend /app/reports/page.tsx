import type { Metadata } from 'next'
import { ContentPage } from '@/components/page/ContentPage'
import { pageData } from '@/lib/page-data'

export const metadata: Metadata = {
  title: 'Industry Reports | MyOnlineJet - Advanced Air Mobility Intelligence',
  description:
    'Strategic insights on AAM, eVTOL, vertiports, infrastructure, policy, and ecosystem intelligence.',
  alternates: { canonical: '/reports' }
}

export default function Page() {
  return <ContentPage data={pageData['/reports']} />
}

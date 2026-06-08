import type { Metadata } from 'next'
import { ContentPage } from '@/components/page/ContentPage'
import { pageData } from '@/lib/page-data'

export const metadata: Metadata = {
  title: 'MyOnlineJet Technology | Intelligent AAM & Vertiport Systems',
  description:
    'MyOnlineJet\'s technology platform powers Advanced Air Mobility with real-time coordination, vertiport intelligence, and ecosystem connectivity.',
  alternates: { canonical: '/technology' }
}

export default function Page() {
  return <ContentPage data={pageData['/technology']} />
}

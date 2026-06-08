import type { Metadata } from 'next'
import { ContentPage } from '@/components/page/ContentPage'
import { pageData } from '@/lib/page-data'

export const metadata: Metadata = {
  title: 'Partner With Us | MyOnlineJet - Build India\'s Advanced Air Mobility Network',
  description:
    'Partner with MyOnlineJet to architect India\'s first nationwide vertiport and eVTOL ecosystem.',
  alternates: { canonical: '/partner-with-us' }
}

export default function Page() {
  return <ContentPage data={pageData['/partner-with-us']} />
}

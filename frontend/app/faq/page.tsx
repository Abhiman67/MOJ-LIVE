import type { Metadata } from 'next'
import { ContentPage } from '@/components/page/ContentPage'
import { pageData } from '@/lib/page-data'

export const metadata: Metadata = {
  title: 'MyOnlineJet FAQ | Advanced Air Mobility Infrastructure & Vertiport Network',
  description:
    'Get answers about vertiport networks, partnerships, early access, technology, and the future of urban air mobility.',
  alternates: { canonical: '/faq' }
}

export default function Page() {
  return <ContentPage data={pageData['/faq']} />
}

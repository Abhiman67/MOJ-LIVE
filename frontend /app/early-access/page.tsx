import type { Metadata } from 'next'
import { ContentPage } from '@/components/page/ContentPage'
import { pageData } from '@/lib/page-data'

export const metadata: Metadata = {
  title: 'MyOnlineJet Early Access | Future of Urban Air Mobility',
  description:
    'Request priority early access to India\'s first integrated Advanced Air Mobility ecosystem.',
  alternates: { canonical: '/early-access' }
}

export default function Page() {
  return <ContentPage data={pageData['/early-access']} />
}

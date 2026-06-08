import type { Metadata } from 'next'
import { ContentPage } from '@/components/page/ContentPage'
import { pageData } from '@/lib/page-data'

export const metadata: Metadata = {
  title: 'Company Profile | MyOnlineJet - Next-Gen Aviation Infrastructure',
  description:
    'MyOnlineJet is building India\'s foundational vertiport network, AI-driven mobility intelligence, and the core infrastructure layer for Advanced Air Mobility.',
  alternates: { canonical: '/company-profile' }
}

export default function Page() {
  return <ContentPage data={pageData['/company-profile']} />
}

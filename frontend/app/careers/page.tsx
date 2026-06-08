import type { Metadata } from 'next'
import { ContentPage } from '@/components/page/ContentPage'
import { pageData } from '@/lib/page-data'

export const metadata: Metadata = {
  title: 'Careers at MyOnlineJet | Build the Future of Urban Air Mobility',
  description:
    'Join MyOnlineJet to build India\'s foundational vertiport network and advanced air mobility ecosystem.',
  alternates: { canonical: '/careers' }
}

export default function Page() {
  return <ContentPage data={pageData['/careers']} />
}

import type { Metadata } from 'next'
import { ContentPage } from '@/components/page/ContentPage'
import { pageData } from '@/lib/page-data'

export const metadata: Metadata = {
  title: 'Whitepapers | MyOnlineJet - Defining Advanced Air Mobility in India',
  description:
    'Official whitepaper series on strategic frameworks, infrastructure vision, market opportunity, and ecosystem approach for Advanced Air Mobility in India.',
  alternates: { canonical: '/whitepapers' }
}

export default function Page() {
  return <ContentPage data={pageData['/whitepapers']} />
}

import type { Metadata } from 'next'
import { ContentPage } from '@/components/page/ContentPage'
import { pageData } from '@/lib/page-data'

export const metadata: Metadata = {
  title: 'MyOnlineJet - Investors | Infrastructure for the Next Aviation Era',
  description:
    'MyOnlineJet is building foundational Advanced Air Mobility infrastructure. Explore the long-term network opportunity.',
  alternates: { canonical: '/investors' }
}

export default function Page() {
  return <ContentPage data={pageData['/investors']} />
}

import type { Metadata } from 'next'
import { ContentPage } from '@/components/page/ContentPage'
import { pageData } from '@/lib/page-data'

export const metadata: Metadata = {
  title: 'Vision & Mission | MyOnlineJet - India\'s AAM Infrastructure Architect',
  description:
    'MyOnlineJet\'s vision to build the world\'s most intelligent Advanced Air Mobility ecosystem.',
  alternates: { canonical: '/vision-mission' }
}

export default function Page() {
  return <ContentPage data={pageData['/vision-mission']} />
}

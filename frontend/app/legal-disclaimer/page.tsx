import type { Metadata } from 'next'
import { ContentPage } from '@/components/page/ContentPage'
import { pageData } from '@/lib/page-data'

export const metadata: Metadata = {
  title: 'Legal Disclaimer | MyOnlineJet',
  description:
    'Read the legal disclaimer for the MyOnlineJet website, including scope, informational use, and no-warranty language.',
  alternates: { canonical: '/legal-disclaimer' }
}

export default function Page() {
  return <ContentPage data={pageData['/legal-disclaimer']} />
}

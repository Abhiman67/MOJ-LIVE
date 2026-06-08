import type { Metadata } from 'next'
import { ContentPage } from '@/components/page/ContentPage'
import { pageData } from '@/lib/page-data'

export const metadata: Metadata = {
  title: 'Privacy Policy | MyOnlineJet',
  description:
    'Learn how MyOnlineJet may collect, use, disclose, and protect information when you visit the site or submit an inquiry.',
  alternates: { canonical: '/privacy-policy' }
}

export default function Page() {
  return <ContentPage data={pageData['/privacy-policy']} />
}

import type { Metadata } from 'next'
import { ContentPage } from '@/components/page/ContentPage'
import { pageData } from '@/lib/page-data'

export const metadata: Metadata = {
  title: 'Terms & Conditions | MyOnlineJet',
  description:
    'Read the terms that apply to using the MyOnlineJet website and the information presented here.',
  alternates: { canonical: '/terms-conditions' }
}

export default function Page() {
  return <ContentPage data={pageData['/terms-conditions']} />
}

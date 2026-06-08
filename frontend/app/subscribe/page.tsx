import type { Metadata } from 'next'
import { ContentPage } from '@/components/page/ContentPage'
import { pageData } from '@/lib/page-data'

export const metadata: Metadata = {
  title: 'Subscribe | MyOnlineJet - Future of Air Mobility Intelligence',
  description:
    'Subscribe to MyOnlineJet for exclusive insights on vertiport infrastructure, eVTOL rollout, and AAM ecosystem updates.',
  alternates: { canonical: '/subscribe' }
}

export default function Page() {
  return <ContentPage data={pageData['/subscribe']} />
}

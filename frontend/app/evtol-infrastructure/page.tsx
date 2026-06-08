import type { Metadata } from 'next'
import { ContentPage } from '@/components/page/ContentPage'
import { pageData } from '@/lib/page-data'

export const metadata: Metadata = {
  title: 'eVTOL Infrastructure | Physical & Digital Backbone for Advanced Air Mobility',
  description:
    'MyOnlineJet builds the complete eVTOL infrastructure, including vertiport networks, energy and charging systems, airspace integration, and safety frameworks.',
  alternates: { canonical: '/evtol-infrastructure' }
}

export default function Page() {
  return <ContentPage data={pageData['/evtol-infrastructure']} />
}

import type { Metadata } from 'next'
import { ContentPage } from '@/components/page/ContentPage'
import { pageData } from '@/lib/page-data'

export const metadata: Metadata = {
  title: "Vertiports | India's Largest AAM Infrastructure Network | MyOnlineJet",
  description:
    'AI-powered, strategically located urban air mobility hubs enabling eVTOL operations across India with modular and scalable infrastructure.',
  alternates: { canonical: '/vertiports' }
}

export default function Page() {
  return <ContentPage data={pageData['/vertiports']} />
}

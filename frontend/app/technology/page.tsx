import type { Metadata } from 'next'
import { TechnologyContent } from '@/components/page/TechnologyContent'

export const metadata: Metadata = {
  title: 'MyOnlineJet Technology | Intelligent AAM & Vertiport Systems',
  description:
    "MyOnlineJet's technology platform powers Advanced Air Mobility with real-time coordination, vertiport intelligence, and ecosystem connectivity. Built for scale, safety and future readiness.",
  keywords:
    'AAM technology platform, vertiport software, eVTOL infrastructure, air mobility intelligence, MyOnlineJet technology, real-time coordination, urban air mobility systems',
  alternates: { canonical: '/technology' },
  openGraph: {
    title: 'MyOnlineJet Technology – Intelligence Layer for Advanced Air Mobility',
    description:
      'We are building the real-time, adaptive system that orchestrates vertiports, aircraft, partners and cities into a seamless aerial mobility network.',
    url: 'https://myonlinejet.com/technology',
    type: 'website'
  }
}

export default function Page() {
  return <TechnologyContent />
}

import type { Metadata } from 'next'
import { EcosystemPage } from '@/components/ecosystem/EcosystemPage'

export const metadata: Metadata = {
  title: "Ecosystem Integration | MyOnlineJet — India's Intelligent Air Mobility Network",
  description:
    "MyOnlineJet's ecosystem integration framework connects vertiports, eVTOL aircraft, digital intelligence, partners, and regulatory systems into a unified, scalable mobility infrastructure across India.",
  keywords: [
    'ecosystem integration',
    'air mobility network',
    'urban air mobility India',
    'vertiport ecosystem',
    'AAM integration',
    'MyOnlineJet platform',
    'eVTOL infrastructure'
  ],
  alternates: {
    canonical: '/ecosystem-integration'
  },
  openGraph: {
    title: 'Ecosystem Integration | Building India\'s Most Intelligent Air Mobility Network',
    description:
      'We are architecting a fully integrated ecosystem where aviation, infrastructure, technology, and services operate as one seamless network. No node operates alone.',
    url: 'https://myonlinejet.com/ecosystem-integration/',
    images: [{ url: 'https://myonlinejet.com/images/Logo.webp' }]
  }
}

export default function Page() {
  return <EcosystemPage />
}

import type { Metadata } from 'next'
import { AboutPage } from '@/components/about/AboutPage'

export const metadata: Metadata = {
  title: "About MyOnlineJet | Building India's Advanced Air Mobility Infrastructure",
  description:
    "MyOnlineJet is building India's foundational vertiport network and AAM ecosystem. We focus on infrastructure, systems, and intelligent mobility layers for future cities.",
  keywords: [
    'about MyOnlineJet',
    'advanced air mobility India',
    'vertiport infrastructure',
    'AAM ecosystem',
    'Amit Kumar founder',
    'urban air mobility'
  ],
  alternates: {
    canonical: '/about-us'
  }
}

export default function Page() {
  return <AboutPage />
}

import type { Metadata } from 'next'
import { CompanyProfileClient } from './CompanyProfileClient'

export const metadata: Metadata = {
  title: 'Company Profile | MyOnlineJet - Next-Gen Aviation Infrastructure',
  description:
    'MyOnlineJet is building India\'s foundational vertiport network, AI-driven mobility intelligence, and the core infrastructure layer for Advanced Air Mobility (AAM).',
  alternates: { canonical: '/company-profile' }
}

export default function Page() {
  return <CompanyProfileClient />
}

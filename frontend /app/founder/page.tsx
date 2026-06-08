import type { Metadata } from 'next'
import { ContentPage } from '@/components/page/ContentPage'
import { pageData } from '@/lib/page-data'

export const metadata: Metadata = {
  title: 'Founder & CEO Message | MyOnlineJet',
  description:
    'Amit Kumar shares the vision of building India\'s AAM infrastructure from first principles.',
  alternates: { canonical: '/founder' }
}

export default function Page() {
  return <ContentPage data={pageData['/founder']} />
}

'use client'

import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const isAuthOrDashboard = pathname.startsWith('/auth') || pathname.startsWith('/dashboard') || pathname.startsWith('/profile')

  if (isHome) {
    return <>{children}<Footer /></>
  }

  if (isAuthOrDashboard) {
    return <>{children}</>
  }

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

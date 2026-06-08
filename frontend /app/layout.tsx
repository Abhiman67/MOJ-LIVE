import type { Metadata } from 'next'
import Script from 'next/script'
import type { ReactNode } from 'react'
import { SiteShell } from '@/components/layout/SiteShell'
import { siteConfig } from '@/lib/site'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: '/'
  },
  openGraph: {
    type: 'website',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage]
  },
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: '/favicon.svg'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preload" href="https://myonlinejet.com/images/Logo.webp" as="image" />
        <link rel="preload" href="https://myonlinejet.com/images/MOJ_Vertiport.webp" as="image" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
        <link rel="dns-prefetch" href="https://news.myonlinejet.com" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SiteShell>{children}</SiteShell>

        <Script
          id="site-structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(siteConfig.structuredData)
          }}
        />
        <Script
          id="crisp-chat"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: siteConfig.crispBootstrap
          }}
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.googleAnalyticsId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${siteConfig.googleAnalyticsId}');
          `}
        </Script>
        <Script
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${siteConfig.googleAdsenseAccount}`}
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  )
}

import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site'

const routes = [
  '/',
  '/about-us',
  '/advanced-air-mobility',
  '/careers',
  '/company-profile',
  '/contact',
  '/early-access',
  '/ecosystem-integration',
  '/evtol-infrastructure',
  '/faq',
  '/founder',
  '/investors',
  '/partner-with-us',
  '/reports',
  '/services',
  '/subscribe',
  '/technology',
  '/vertiports',
  '/vision-mission',
  '/whitepapers',
  '/privacy-policy',
  '/terms-conditions',
  '/legal-disclaimer'
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: new URL(route, siteConfig.url).toString(),
    lastModified: new Date(),
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.7
  }))
}

export const siteConfig = {
  name: 'MyOnlineJet',
  url: 'https://myonlinejet.com',
  description:
    'MyOnlineJet is an aviation infrastructure technology company focused on urban air mobility, vertiport networks, and next-generation transport systems. Invest in the future of transportation.',
  shortDescription:
    'Building India\'s urban air mobility infrastructure for a sustainable transportation future.',
  location: 'Jaipur, Rajasthan, India',
  ogImage: 'https://myonlinejet.com/images/Logo.webp',
  keywords: [
    'urban air mobility',
    'vertiport',
    'AAM',
    'eVTOL infrastructure',
    'aviation technology',
    'Jaipur',
    'India'
  ],
  googleAnalyticsId: 'G-2M27Z7RLT5',
  googleAdsenseAccount: 'ca-pub-1241432514654667',
  crispBootstrap: `window.$crisp=[];window.CRISP_WEBSITE_ID="8d2a15df-5634-4caa-8123-cc7850979408";(function(){var d=document;var s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`,
  homeTitle: 'MyOnlineJet - Advanced Air Mobility | Smart Vertiports | Jaipur, India',
  homeDescription:
    'MyOnlineJet is an Aviation infrastructure technology company focused on urban air mobility, vertiport networks, and next-generation transport systems. Invest in the future of transportation.',
  homeStats: [
    { value: '15B+', label: 'Market Potential' },
    { value: '50+', label: 'Cities by 2030' },
    { value: '85%', label: 'CO2 Reduction' },
    { value: '70%', label: 'Faster Travel' }
  ],
  structuredData: {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://myonlinejet.com/#organization',
        name: 'MyOnlineJet',
        url: 'https://myonlinejet.com/',
        logo: {
          '@type': 'ImageObject',
          url: 'https://myonlinejet.com/images/Logo.webp'
        },
        description:
          'MyOnlineJet is an aviation infrastructure technology company focused on urban air mobility, vertiport networks, and next-generation transport systems.',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Jaipur',
          addressRegion: 'Rajasthan',
          addressCountry: 'IN',
          streetAddress: 'iAlpha Technologies Private Limited',
          postalCode: '302017'
        }
      },
      {
        '@type': 'WebSite',
        '@id': 'https://myonlinejet.com/#website',
        url: 'https://myonlinejet.com/',
        name: 'MyOnlineJet',
        publisher: {
          '@id': 'https://myonlinejet.com/#organization'
        }
      }
    ]
  },
  phaseOneChecklist: [
    {
      title: 'Shared app shell',
      description:
        'A reusable Next.js layout with a single header, footer, metadata base, and global scripts.'
    },
    {
      title: 'TypeScript + Tailwind',
      description:
        'Modern build tooling so the project can evolve into a maintainable React + Node codebase.'
    },
    {
      title: 'SEO and scripts',
      description:
        'Global metadata, structured data, Crisp, analytics, and AdSense wired through Next.js.'
    },
    {
      title: 'Route map',
      description:
        'A clean list of site routes so each HTML page can be migrated into a dedicated Next page.'
    },
    {
      title: 'Public assets',
      description:
        'Static site files moved into public paths so robots, ads, security, and humans files remain accessible.'
    },
    {
      title: 'Backend-ready shape',
      description:
        'The app structure already leaves room for Node-backed form endpoints in the next phase.'
    }
  ]
}

export const siteNavLinks = [
  { label: 'About Us', href: '/about-us' },
  { label: 'AAM', href: '/advanced-air-mobility' },
  { label: 'Vertiports', href: '/vertiports' },
  { label: 'Technology', href: '/technology' },
  { label: 'Services', href: '/services' },
  { label: 'Partner With Us', href: '/partner-with-us' },
  { label: 'Contact', href: '/contact' }
] as const

export const homeNavLinks = [
  { label: 'Vision', href: '#vision' },
  { label: 'Technology', href: '#technology' },
  { label: 'News', href: 'https://news.myonlinejet.com' },
  { label: 'Advisory Network', href: '#advisors' },
  { label: 'Careers', href: '/careers' }
] as const

export const pageNavLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about-us' },
  { label: 'AAM', href: '/advanced-air-mobility' },
  { label: 'Vertiports', href: '/vertiports' },
  { label: 'Technology', href: '/technology' },
  { label: 'Services', href: '/services' },
  { label: 'Partners', href: '/partners' },
  { label: 'Careers', href: '/careers' }
] as const

export const footerGroups = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about-us' },
      { label: 'Company Profile', href: '/company-profile' },
      { label: 'Founder', href: '/founder' },
      { label: 'Vision & Mission', href: '/vision-mission' }
    ]
  },
  {
    title: 'Infrastructure',
    links: [
      { label: 'Vertiports', href: '/vertiports' },
      { label: 'eVTOL Infrastructure', href: '/evtol-infrastructure' },
      { label: 'Ecosystem Integration', href: '/ecosystem-integration' },
      { label: 'Services', href: '/services' }
    ]
  },
  {
    title: 'Opportunities',
    links: [
      { label: 'Partner With Us', href: '/partner-with-us' },
      { label: 'Investors', href: '/investors' },
      { label: 'Careers', href: '/careers' },
      { label: 'Early Access', href: '/early-access' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { label: 'Press & Media', href: '/' },
      { label: 'Whitepapers', href: '/whitepapers' },
      { label: 'Reports', href: '/reports' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Blog', href: 'https://news.myonlinejet.com' },
      { label: 'Subscribe', href: '/subscribe' }
    ]
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms & Conditions', href: '/terms-conditions' },
      { label: 'Cookie Policy', href: '/privacy-policy' },
      { label: 'Legal Disclaimer', href: '/legal-disclaimer' }
    ]
  }
] as const

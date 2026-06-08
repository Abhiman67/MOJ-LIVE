import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'All Services | MyOnlineJet - Full-Stack Advanced Air Mobility Ecosystem',
  description:
    'MyOnlineJet provides vertiport development, eVTOL infrastructure enablement, digital aviation platform, enterprise partnerships, and AAM network services. Building India\'s complete air mobility ecosystem.',
  keywords: [
    'AAM services India',
    'vertiport development',
    'eVTOL infrastructure',
    'digital aviation platform',
    'MyOnlineJet services',
    'air mobility partnerships',
    'enterprise AAM solutions'
  ],
  alternates: { canonical: '/services' }
}

const services = [
  {
    badge: '01 — FOUNDATIONAL INFRASTRUCTURE',
    title: 'Vertiport Development & Infrastructure Strategy',
    summary:
      'We design, plan, and enable future-ready vertiport networks across high-demand urban and intercity corridors.',
    points: [
      'Strategic location identification & demand mapping',
      'Land use advisory & stakeholder alignment',
      'Modular vertiport design frameworks',
      'Regulatory-aligned infrastructure planning',
      'Integration with airports, heliports, and urban hubs'
    ],
    link: { href: '/vertiports', label: '→ Learn more on Vertiports page' }
  },
  {
    badge: '02 — OEM READINESS',
    title: 'eVTOL Infrastructure Enablement',
    summary: 'We bridge the gap between aircraft manufacturers and real-world deployment environments.',
    points: [
      'eVTOL readiness assessment for cities & partners',
      'Charging, energy, and turnaround infrastructure planning',
      'OEM integration strategy',
      'Ground operations framework design',
      'Safety and compliance alignment (DGCA-ready frameworks)'
    ],
    link: { href: '/evtol-infrastructure', label: '→ Explore in detail on eVTOL Infrastructure page' }
  },
  {
    badge: '03 — NETWORK DEVELOPMENT',
    title: 'Advanced Air Mobility (AAM) Network Development',
    summary: 'We are building one of the most ambitious AAM ecosystems in emerging markets.',
    tags: ['City-to-city corridors', 'Intra-city aerial mobility', 'Multi-node architecture', 'Demand aggregation & traffic modeling', 'Phased rollout strategy'],
    link: { href: '/advanced-air-mobility', label: '→ Understand the full scope on Advanced Air Mobility page' }
  },
  {
    badge: '04 — DIGITAL PLATFORM',
    title: 'Digital Aviation Platform (MyOnlineJet Core System)',
    summary: 'At the center of everything is our intelligent digital layer.',
    points: [
      'User access & early booking systems',
      'Partner dashboards & enterprise onboarding',
      'Data-driven route optimization',
      'Demand intelligence & analytics',
      'API-ready ecosystem for integrations'
    ],
    link: { href: '/technology', label: '→ Read more on the Technology page' }
  },
  {
    badge: '05 — PARTNER NETWORK',
    title: 'Ecosystem Integration & Strategic Partnerships',
    summary: 'We actively integrate with high-value real estate and mobility ecosystems.',
    tags: ['Hotels & luxury hospitality', 'Hospitals & emergency networks', 'Airports & aviation', 'Malls, tourism hubs', 'Smart cities'],
    link: { href: '/ecosystem-integration', label: '→ See how this works on Ecosystem Integration page' }
  },
  {
    badge: '06 — INSTITUTIONAL SOLUTIONS',
    title: 'Enterprise & Institutional Solutions',
    summary: 'We work with governments, enterprises, and large-scale institutions to enable AAM adoption at scale.',
    points: ['AAM feasibility studies', 'Infrastructure advisory', 'Policy-aligned frameworks', 'PPP structuring', 'White-label infrastructure strategy'],
    link: { href: '/company-profile', label: '→ Explore more on our Company Profile page' }
  },
  {
    badge: '07 — PRE-LAUNCH PROGRAMS',
    title: 'Early Access & Pre-Launch Programs',
    summary: 'Structured early access for individuals, businesses, and strategic partners.',
    tags: ['Priority access to routes', 'Early booking advantages', 'Ecosystem positioning', 'Exclusive pre-launch benefits'],
    link: { href: '/early-access', label: '→ Join via the Early Access page' }
  },
  {
    badge: '08 — COLLABORATIONS',
    title: 'Strategic Partnerships & Collaborations',
    summary:
      'Collaborating with eVTOL OEMs, infrastructure developers, tech providers, research institutions, and government bodies.',
    tags: ['Infrastructure partnerships', 'Technology integration', 'Co-development frameworks', 'Pilot programs & trials'],
    link: { href: '/partner-with-us', label: '→ Apply via Partner With Us page' }
  },
  {
    badge: '09 — CAPITAL',
    title: 'Investor & Capital Collaboration',
    summary:
      'We engage with investors who understand long-term infrastructure play, aviation-tech convergence, and network-effect businesses.',
    link: { href: '/investors', label: '→ Learn more on the Investors page' }
  },
  {
    badge: '10 — INTELLIGENCE',
    title: 'Research, Intelligence & Industry Insights',
    summary: 'Whitepapers, industry reports, market intelligence, policy insights — positioning MyOnlineJet as a thought leader.',
    link: { href: '/whitepapers', label: 'Whitepaper page' }
  },
  {
    badge: '11 — TALENT',
    title: 'Talent & Career Opportunities',
    summary: 'High-performance, mission-driven team across aviation, infrastructure, technology, strategy & operations.',
    link: { href: '/careers', label: '→ Explore opportunities on the Careers page' }
  },
  {
    badge: '12 — MEDIA',
    title: 'Media, Press & Public Communication',
    summary: 'Press releases, media coverage, official announcements, strategic updates.',
    link: { href: 'https://news.myonlinejet.com', label: '→ Visit the Press & Media page' }
  },
  {
    badge: '13 — SUPPORT',
    title: 'Customer & Stakeholder Support',
    summary: 'Clear communication channels for general inquiries, business discussions, partnership opportunities, media requests.',
    link: { href: '/contact', label: '→ Reach out via Contact Us page' }
  },
  {
    badge: '14 — LEGAL',
    title: 'Compliance, Transparency & Legal Framework',
    summary: 'Regulatory alignment, ethical positioning, transparent communication.',
    link: { href: '/legal-disclaimer', label: 'Legal Disclaimer page' }
  }
]

export default function ServicesPage() {
  return (
    <div className="page-shell">
      <section className="mx-auto max-w-6xl text-center">
        <div className="inline-flex rounded-full border border-brand-red/20 bg-brand-red/10 px-3 py-1.5 text-xs font-semibold tracking-[0.12em] text-brand-red sm:px-4 sm:py-2 sm:text-sm">
          FULL-STACK AAM ECOSYSTEM
        </div>
        <h1 className="heading-xl mt-4 sm:mt-6">
          Redefining Air Mobility
          <span className="block text-brand-red">Infrastructure, Access & Intelligence</span>
        </h1>
        <p className="mx-auto mt-4 sm:mt-6 max-w-4xl text-sm leading-7 text-brand-gray-dark sm:text-base md:text-lg md:leading-8">
          MyOnlineJet is not a single-service company. We are building a full-stack Advanced Air Mobility (AAM) ecosystem where infrastructure, access, intelligence, and operations converge into a unified, scalable network.
        </p>
        <p className="mx-auto mt-3 sm:mt-4 max-w-3xl text-xs leading-6 text-brand-gray-dark sm:text-sm md:text-base md:leading-7">
          From vertiports and eVTOL integration to enterprise partnerships and digital infrastructure, every service we offer is designed to accelerate the adoption of next-generation aviation across India and beyond.
        </p>
        <Link href="/vision-mission" className="mt-4 sm:mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-red sm:text-base">
          For a deeper understanding of our long-term direction, visit our Vision & Mission page <i className="fas fa-arrow-right text-xs" />
        </Link>
      </section>

      <section className="content-section space-y-8">
        {services.map((item) => (
          <article key={item.title} className="glass-card p-5 sm:p-6 md:p-8">
            <div className="mb-3 sm:mb-4 flex flex-wrap items-start justify-between gap-3 sm:gap-4">
              <span className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-[0.12em] text-brand-red uppercase">{item.badge}</span>
              <span className="text-[10px] sm:text-xs text-brand-gray-dark">
                <i className="far fa-building mr-1 sm:mr-2" />
                Core capability
              </span>
            </div>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-brand-navy mb-2 sm:mb-3">{item.title}</h2>
            <p className="text-xs sm:text-sm md:text-base text-brand-gray-dark mb-3 sm:mb-4">{item.summary}</p>

            {item.points ? (
              <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-brand-gray-dark">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <i className="fas fa-check-circle text-brand-red mt-0.5 sm:mt-1 text-xs sm:text-sm" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="rounded-xl sm:rounded-2xl bg-brand-gray-light p-4 sm:p-5">
                  <p className="text-[10px] sm:text-xs md:text-sm italic text-brand-gray-dark">
                    {item.title.includes('Vertiport')
                      ? 'Our approach is not just physical infrastructure - it is network-first thinking, ensuring every vertiport becomes part of a larger intelligent system.'
                      : item.title.includes('eVTOL')
                        ? 'We are positioning MyOnlineJet as a neutral infrastructure layer - enabling multiple OEMs to operate efficiently.'
                        : item.title.includes('Digital Aviation')
                          ? 'This platform ensures that MyOnlineJet is not just infrastructure-heavy - but also data-driven and scalable.'
                          : item.title.includes('Ecosystem')
                            ? 'AAM intersects with hospitality, healthcare, tourism, logistics, and urban infrastructure.'
                            : 'This service pillar supports the larger AAM network with practical execution, partner alignment, and long-term readiness.'}
                  </p>
                  <Link href={item.link.href} className="mt-2 sm:mt-3 inline-block text-[10px] sm:text-xs md:text-sm font-semibold text-brand-red">
                    {item.link.label}
                  </Link>
                </div>
              </div>
            ) : null}

            {item.tags ? (
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {item.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-brand-gray-light px-2 py-0.5 text-[10px] text-brand-navy sm:px-3 sm:py-1 sm:text-xs md:text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}

            {!item.points && !item.tags ? (
              <div className="mt-3">
                <Link href={item.link.href} className="text-brand-red font-semibold text-sm">
                  {item.link.label}
                </Link>
              </div>
            ) : null}
          </article>
        ))}
      </section>

      <section className="content-section">
        <div className="rounded-2xl sm:rounded-[1.5rem] bg-[#0F1C3F] p-5 sm:p-8 text-white md:p-12 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">Building the underlying layer of next-generation air mobility</h2>
          <p className="text-gray-200 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
            MyOnlineJet is not entering the market to participate. We are building the underlying layer of next-generation air mobility.
          </p>
          <p className="text-gray-300 mt-2 sm:mt-3 text-xs sm:text-sm md:text-base">
            Every service you see here is a building block of a much larger system - one that connects infrastructure, technology, and access into a unified aviation network.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            <Link href="/early-access" className="primary-btn">
              Join Early Access
            </Link>
            <Link href="/partner-with-us" className="secondary-btn bg-transparent border-white text-white hover:bg-white hover:text-brand-red">
              Become Partner
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

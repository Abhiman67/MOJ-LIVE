import Link from 'next/link'
import type { Metadata } from 'next'
import { PageClient } from '@/components/shared/PageClient'

export const metadata: Metadata = {
  title: 'All Services - Full-Stack Advanced Air Mobility Ecosystem',
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

export default function ServicesPage() {

  return (
    <>
    <div className="page-shell">
      <div className="mx-auto max-w-6xl">

        {/* HERO SECTION */}
        <div className="text-center mb-20 reveal">
          <div className="inline-block badge mb-6">Full-Stack AAM Ecosystem</div>
          <h1 className="hero-title mb-6">
            Redefining Air Mobility
            <br />
            <span className="gradient-text">Infrastructure, Access & Intelligence</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            MyOnlineJet is not a single-service company. We are building a full-stack Advanced Air
            Mobility (AAM) ecosystem — where infrastructure, access, intelligence, and operations
            converge into a unified, scalable network.
          </p>
          <p className="text-text-muted max-w-2xl mx-auto mt-4">
            From vertiports and eVTOL integration to enterprise partnerships and digital
            infrastructure, every service we offer is designed to accelerate the adoption of
            next-generation aviation across India and beyond.
          </p>
          <div className="mt-6">
            <Link href="/vision-mission" className="link-brand text-sm">
              For a deeper understanding of our long-term direction, visit our Vision & Mission page{' '}
              <i className="fas fa-arrow-right text-xs" />
            </Link>
          </div>
        </div>

        {/* SERVICES GRID (14 SECTIONS) */}
        <div className="space-y-6">

          {/* 1. Vertiport Development */}
          <div className="glass-card p-6 md:p-8 reveal" id="vertiport-dev">
            <div className="flex flex-wrap justify-between items-start gap-4 mb-5">
              <div className="flex items-center gap-3">
                <div className="icon-box"><i className="fas fa-building" /></div>
                <div>
                  <span className="service-number block mb-1">01 — FOUNDATIONAL INFRASTRUCTURE</span>
                  <h2 className="card-title text-text-primary">Vertiport Development & Infrastructure Strategy</h2>
                </div>
              </div>
              <span className="text-sm text-text-muted"><i className="far fa-building mr-1" /> Core capability</span>
            </div>
            <p className="text-text-secondary mb-5">
              We design, plan, and enable future-ready vertiport networks across high-demand urban and intercity corridors.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start gap-3"><i className="fas fa-check-circle check-icon text-brand-red" /> Strategic location identification & demand mapping</li>
                <li className="flex items-start gap-3"><i className="fas fa-check-circle check-icon text-brand-red" /> Land use advisory & stakeholder alignment</li>
                <li className="flex items-start gap-3"><i className="fas fa-check-circle check-icon text-brand-red" /> Modular vertiport design frameworks</li>
                <li className="flex items-start gap-3"><i className="fas fa-check-circle check-icon text-brand-red" /> Regulatory-aligned infrastructure planning</li>
                <li className="flex items-start gap-3"><i className="fas fa-check-circle check-icon text-brand-red" /> Integration with airports, heliports, and urban hubs</li>
              </ul>
              <div className="bg-surface-card border border-border-subtle p-5 rounded-xl">
                <p className="text-sm italic text-text-muted">
                  Our approach is not just physical infrastructure — it&apos;s network-first thinking, ensuring every vertiport becomes part of a larger intelligent system.
                </p>
                <Link href="/vertiports" className="link-brand text-sm mt-3 inline-block">
                  Learn more on Vertiports page <i className="fas fa-arrow-right text-xs" />
                </Link>
              </div>
            </div>
          </div>

          {/* 2. eVTOL Infrastructure Enablement */}
          <div className="glass-card p-6 md:p-8 reveal">
            <div className="flex flex-wrap justify-between items-start gap-4 mb-5">
              <div className="flex items-center gap-3">
                <div className="icon-box"><i className="fas fa-charging-station" /></div>
                <div>
                  <span className="service-number block mb-1">02 — OEM READINESS</span>
                  <h2 className="card-title text-text-primary">eVTOL Infrastructure Enablement</h2>
                </div>
              </div>
              <span className="text-sm text-text-muted"><i className="fas fa-charging-station mr-1" /> Aircraft-agnostic</span>
            </div>
            <p className="text-text-secondary mb-5">
              We bridge the gap between aircraft manufacturers and real-world deployment environments.
            </p>
            <ul className="grid md:grid-cols-2 gap-3 mb-5 text-text-secondary">
              <li className="flex items-center gap-3"><i className="fas fa-bolt text-brand-red text-xs" /> eVTOL readiness assessment for cities & partners</li>
              <li className="flex items-center gap-3"><i className="fas fa-bolt text-brand-red text-xs" /> Charging, energy, and turnaround infrastructure planning</li>
              <li className="flex items-center gap-3"><i className="fas fa-bolt text-brand-red text-xs" /> OEM integration strategy</li>
              <li className="flex items-center gap-3"><i className="fas fa-bolt text-brand-red text-xs" /> Ground operations framework design</li>
              <li className="flex items-center gap-3"><i className="fas fa-bolt text-brand-red text-xs" /> Safety and compliance alignment (DGCA-ready frameworks)</li>
            </ul>
            <div className="bg-surface-card border border-border-subtle p-4 rounded-lg">
              <p className="text-sm text-text-secondary">
                We are positioning MyOnlineJet as a neutral infrastructure layer — enabling multiple OEMs to operate efficiently.
              </p>
            </div>
            <Link href="/evtol-infrastructure" className="link-brand text-sm mt-4 inline-block">
              Explore in detail on eVTOL Infrastructure page <i className="fas fa-arrow-right text-xs" />
            </Link>
          </div>

          {/* 3. AAM Network Development */}
          <div className="glass-card p-6 md:p-8 reveal">
            <div className="flex items-center gap-3 mb-5">
              <div className="icon-box"><i className="fas fa-network-wired" /></div>
              <div>
                <span className="service-number block mb-1">03 — NETWORK ARCHITECTURE</span>
                <h2 className="card-title text-text-primary">Advanced Air Mobility (AAM) Network Development</h2>
              </div>
            </div>
            <p className="text-text-secondary mb-5">
              We are building one of the most ambitious AAM ecosystems in emerging markets.
            </p>
            <div className="flex flex-wrap gap-3 mb-5">
              <span className="tag-pill">City-to-city corridors</span>
              <span className="tag-pill">Intra-city aerial mobility</span>
              <span className="tag-pill">Multi-node architecture</span>
              <span className="tag-pill">Demand aggregation & traffic modeling</span>
              <span className="tag-pill">Phased rollout strategy</span>
            </div>
            <p className="italic text-text-muted text-sm">
              Our focus is not pilots — it&apos;s scalable networks that actually work commercially.
            </p>
            <Link href="/advanced-air-mobility" className="link-brand text-sm mt-4 inline-block">
              Understand the full scope on Advanced Air Mobility page <i className="fas fa-arrow-right text-xs" />
            </Link>
          </div>

          {/* 4. Digital Aviation Platform */}
          <div className="glass-card p-6 md:p-8 reveal">
            <div className="flex items-center gap-3 mb-5">
              <div className="icon-box"><i className="fas fa-database" /></div>
              <div>
                <span className="service-number block mb-1">04 — DIGITAL CORE</span>
                <h2 className="card-title text-text-primary">Digital Aviation Platform (MyOnlineJet Core System)</h2>
              </div>
            </div>
            <p className="text-text-secondary mb-5">
              At the center of everything is our intelligent digital layer.
            </p>
            <ul className="grid md:grid-cols-2 gap-3 mb-5 text-text-secondary">
              <li className="flex gap-3"><i className="fas fa-server text-brand-red text-xs mt-1" /> User access & early booking systems</li>
              <li className="flex gap-3"><i className="fas fa-server text-brand-red text-xs mt-1" /> Partner dashboards & enterprise onboarding</li>
              <li className="flex gap-3"><i className="fas fa-server text-brand-red text-xs mt-1" /> Data-driven route optimization</li>
              <li className="flex gap-3"><i className="fas fa-server text-brand-red text-xs mt-1" /> Demand intelligence & analytics</li>
              <li className="flex gap-3"><i className="fas fa-server text-brand-red text-xs mt-1" /> API-ready ecosystem for integrations</li>
            </ul>
            <p className="text-sm text-text-secondary">
              This platform ensures that MyOnlineJet is not just infrastructure-heavy — but also data-driven and scalable.
            </p>
            <Link href="/technology" className="link-brand text-sm mt-4 inline-block">
              Read more on the Technology page <i className="fas fa-arrow-right text-xs" />
            </Link>
          </div>

          {/* 5. Ecosystem Integration */}
          <div className="glass-card p-6 md:p-8 reveal">
            <div className="flex items-center gap-3 mb-5">
              <div className="icon-box"><i className="fas fa-puzzle-piece" /></div>
              <div>
                <span className="service-number block mb-1">05 — STRATEGIC INTEGRATION</span>
                <h2 className="card-title text-text-primary">Ecosystem Integration & Strategic Partnerships</h2>
              </div>
            </div>
            <p className="text-text-secondary mb-5">
              We actively integrate with high-value real estate and mobility ecosystems.
            </p>
            <div className="flex flex-wrap gap-3 mb-5">
              <span className="tag-pill">Hotels & luxury hospitality</span>
              <span className="tag-pill">Hospitals & emergency networks</span>
              <span className="tag-pill">Airports & aviation</span>
              <span className="tag-pill">Malls, tourism hubs</span>
              <span className="tag-pill">Smart cities</span>
            </div>
            <Link href="/ecosystem-integration" className="link-brand text-sm inline-block">
              See how this works on Ecosystem Integration page <i className="fas fa-arrow-right text-xs" />
            </Link>
          </div>

          {/* 6. Enterprise & Institutional Solutions */}
          <div className="glass-card p-6 md:p-8 reveal">
            <div className="flex items-center gap-3 mb-5">
              <div className="icon-box"><i className="fas fa-briefcase" /></div>
              <div>
                <span className="service-number block mb-1">06 — ENTERPRISE</span>
                <h2 className="card-title text-text-primary">Enterprise & Institutional Solutions</h2>
              </div>
            </div>
            <p className="text-text-secondary">
              We work with governments, enterprises, and large-scale institutions to enable AAM adoption at scale.
            </p>
            <ul className="grid md:grid-cols-3 gap-3 mt-5 text-text-secondary text-sm">
              <li className="flex items-center gap-2"><i className="fas fa-check-circle text-brand-red text-xs" /> AAM feasibility studies</li>
              <li className="flex items-center gap-2"><i className="fas fa-check-circle text-brand-red text-xs" /> Infrastructure advisory</li>
              <li className="flex items-center gap-2"><i className="fas fa-check-circle text-brand-red text-xs" /> Policy-aligned frameworks</li>
              <li className="flex items-center gap-2"><i className="fas fa-check-circle text-brand-red text-xs" /> PPP structuring</li>
              <li className="flex items-center gap-2"><i className="fas fa-check-circle text-brand-red text-xs" /> White-label infrastructure strategy</li>
            </ul>
            <Link href="/company-profile" className="link-brand text-sm mt-5 inline-block">
              Explore more on our Company Profile page <i className="fas fa-arrow-right text-xs" />
            </Link>
          </div>

          {/* 7. Early Access & Pre-Launch Programs */}
          <div className="glass-card p-6 md:p-8 reveal" style={{ background: 'linear-gradient(135deg, rgba(20,20,20,0.6) 0%, rgba(255,45,45,0.05) 100%)' }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="icon-box"><i className="fas fa-rocket" /></div>
              <div>
                <span className="service-number block mb-1">07 — EARLY ACCESS</span>
                <h2 className="card-title text-text-primary">Early Access & Pre-Launch Programs</h2>
              </div>
            </div>
            <p className="text-text-secondary">
              Structured early access for individuals, businesses, and strategic partners.
            </p>
            <div className="flex flex-wrap gap-3 mt-5">
              <span className="tag-pill">Priority access to routes</span>
              <span className="tag-pill">Early booking advantages</span>
              <span className="tag-pill">Ecosystem positioning</span>
              <span className="tag-pill">Exclusive pre-launch benefits</span>
            </div>
            <Link href="/early-access" className="btn-primary inline-block mt-6 text-sm py-2 px-5">
              Join via the Early Access page
            </Link>
          </div>

          {/* 8. Strategic Partnerships & Collaborations */}
          <div className="glass-card p-6 md:p-8 reveal">
            <div className="flex items-center gap-3 mb-5">
              <div className="icon-box"><i className="fas fa-handshake" /></div>
              <div>
                <span className="service-number block mb-1">08 — PARTNERSHIPS</span>
                <h2 className="card-title text-text-primary">Strategic Partnerships & Collaborations</h2>
              </div>
            </div>
            <p className="text-text-secondary">
              Collaborating with eVTOL OEMs, infrastructure developers, tech providers, research institutions, and government bodies.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-5 text-sm text-text-secondary">
              <span className="tag-pill text-center">Infrastructure partnerships</span>
              <span className="tag-pill text-center">Technology integration</span>
              <span className="tag-pill text-center">Co-development frameworks</span>
              <span className="tag-pill text-center">Pilot programs & trials</span>
            </div>
            <div className="mt-5 flex gap-6 flex-wrap">
              <Link href="/partners" className="link-brand text-sm">
                See details on Partners page <i className="fas fa-arrow-right text-xs" />
              </Link>
              <Link href="/partner-with-us" className="link-brand text-sm">
                Apply via Partner With Us page <i className="fas fa-arrow-right text-xs" />
              </Link>
            </div>
          </div>

          {/* 9. Investor & Capital Collaboration */}
          <div className="glass-card p-6 md:p-8 reveal">
            <div className="flex items-center gap-3 mb-5">
              <div className="icon-box"><i className="fas fa-chart-line" /></div>
              <div>
                <span className="service-number block mb-1">09 — INVESTORS</span>
                <h2 className="card-title text-text-primary">Investor & Capital Collaboration</h2>
              </div>
            </div>
            <p className="text-text-secondary">
              We engage with investors who understand long-term infrastructure play, aviation-tech convergence, and network-effect businesses. Focus: Vertiport expansion, technology development, market scaling.
            </p>
            <Link href="/investors" className="link-brand text-sm mt-5 inline-block">
              Learn more on the Investors page <i className="fas fa-arrow-right text-xs" />
            </Link>
          </div>

          {/* 10. Research & Intelligence */}
          <div className="glass-card p-6 md:p-8 reveal">
            <div className="flex items-center gap-3 mb-5">
              <div className="icon-box"><i className="fas fa-microscope" /></div>
              <div>
                <span className="service-number block mb-1">10 — RESEARCH</span>
                <h2 className="card-title text-text-primary">Research, Intelligence & Industry Insights</h2>
              </div>
            </div>
            <p className="text-text-secondary">
              Whitepapers, industry reports, market intelligence, policy insights — positioning MyOnlineJet as a thought leader.
            </p>
            <div className="flex flex-wrap gap-4 mt-5">
              <Link href="/whitepapers" className="link-brand text-sm">
                Whitepaper page <i className="fas fa-arrow-right text-xs" />
              </Link>
            </div>
          </div>

          {/* 11. Talent & Career Opportunities */}
          <div className="glass-card p-6 md:p-8 reveal">
            <div className="flex items-center gap-3 mb-5">
              <div className="icon-box"><i className="fas fa-users" /></div>
              <div>
                <span className="service-number block mb-1">11 — TALENT</span>
                <h2 className="card-title text-text-primary">Talent & Career Opportunities</h2>
              </div>
            </div>
            <p className="text-text-secondary">
              High-performance, mission-driven team across aviation, infrastructure, technology, strategy & operations. Ownership mindset, execution capability, long-term thinking.
            </p>
            <Link href="/careers" className="link-brand text-sm mt-5 inline-block">
              Explore opportunities on the Careers page <i className="fas fa-arrow-right text-xs" />
            </Link>
          </div>

          {/* 12. Media & Press */}
          <div className="glass-card p-6 md:p-8 reveal">
            <div className="flex items-center gap-3 mb-5">
              <div className="icon-box"><i className="fas fa-newspaper" /></div>
              <div>
                <span className="service-number block mb-1">12 — MEDIA</span>
                <h2 className="card-title text-text-primary">Media, Press & Public Communication</h2>
              </div>
            </div>
            <p className="text-text-secondary">
              Press releases, media coverage, official announcements, strategic updates.
            </p>
            <a href="https://news.myonlinejet.com" className="link-brand text-sm mt-5 inline-block" target="_blank" rel="noopener noreferrer">
              Visit the Press & Media page <i className="fas fa-arrow-right text-xs" />
            </a>
          </div>

          {/* 13. Customer Support */}
          <div className="glass-card p-6 md:p-8 reveal">
            <div className="flex items-center gap-3 mb-5">
              <div className="icon-box"><i className="fas fa-headset" /></div>
              <div>
                <span className="service-number block mb-1">13 — SUPPORT</span>
                <h2 className="card-title text-text-primary">Customer & Stakeholder Support</h2>
              </div>
            </div>
            <p className="text-text-secondary">
              Clear communication channels for general inquiries, business discussions, partnership opportunities, media requests.
            </p>
            <Link href="/contact" className="link-brand text-sm mt-5 inline-block">
              Reach out via Contact Us page <i className="fas fa-arrow-right text-xs" />
            </Link>
          </div>

          {/* 14. Compliance & Legal */}
          <div className="glass-card p-6 md:p-8 reveal">
            <div className="flex items-center gap-3 mb-5">
              <div className="icon-box"><i className="fas fa-shield-alt" /></div>
              <div>
                <span className="service-number block mb-1">14 — COMPLIANCE</span>
                <h2 className="card-title text-text-primary">Compliance, Transparency & Legal Framework</h2>
              </div>
            </div>
            <p className="text-text-secondary">
              Regulatory alignment, ethical positioning, transparent communication.
            </p>
            <div className="flex gap-6 mt-5">
              <Link href="/legal-disclaimer" className="link-brand text-sm">
                Legal Disclaimer page <i className="fas fa-arrow-right text-xs" />
              </Link>
              <Link href="/faq" className="link-brand text-sm">
                FAQ page <i className="fas fa-arrow-right text-xs" />
              </Link>
            </div>
          </div>
        </div>

        {/* CLOSING POSITIONING STATEMENT */}
        <div className="mt-20 cta-section rounded-3xl p-10 md:p-14 reveal relative z-10">
          <div className="relative z-10 text-center">
            <h2 className="section-title text-text-primary mb-5">
              Building the underlying layer of next-generation air mobility
            </h2>
            <p className="text-text-secondary text-lg max-w-3xl mx-auto">
              MyOnlineJet is not entering the market to participate. We are building the underlying layer of next-generation air mobility.
            </p>
            <p className="text-text-muted mt-4 max-w-2xl mx-auto">
              Every service you see here is a building block of a much larger system — one that connects infrastructure, technology, and access into a unified aviation network.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <Link href="/early-access" className="btn-primary">
                Join Early Access
              </Link>
              <Link href="/partner-with-us" className="btn-secondary">
                Become Partner
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <PageClient />
    </>
  )
}

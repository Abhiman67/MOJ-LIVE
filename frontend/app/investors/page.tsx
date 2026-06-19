import type { Metadata } from 'next'
import { InvestorForm } from './InvestorForm'

export const metadata: Metadata = {
  title: 'MyOnlineJet – Investors | Infrastructure for the Next Aviation Era',
  description: 'MyOnlineJet is building foundational Advanced Air Mobility (AAM) infrastructure. Long-term network play, vertiports, digital intelligence layer. Explore investment opportunity.',
  alternates: { canonical: '/investors' },
  openGraph: {
    title: 'MyOnlineJet – Investors | Infrastructure for Next Aviation Era',
    description: 'We are building the foundational layer of Advanced Air Mobility in India. Vertiports, digital intelligence, ecosystem integration.',
    images: [{ url: 'https://myonlinejet.com/images/Logo.webp' }]
  }
}

export default function Page() {
  return (
    <div className="dark-page-shell">
      <div className="aurora-bg" />
      <div className="noise-overlay" />

      <section className="mx-auto max-w-6xl">
        {/* Hero */}
        <div className="text-center mb-20">
          <div className="inline-block rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#C50000]">
            Investor Relations
          </div>
          <h1 className="content-hero-title mt-8 mb-6 max-w-4xl mx-auto">
            Investing in the Infrastructure <br />
            <span className="text-gradient">of the Next Aviation Era</span>
          </h1>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            MyOnlineJet is building foundational infrastructure for Advanced Air Mobility (AAM)&mdash;scalable, compliant, and commercially viable across India and global high-growth corridors.
          </p>
        </div>

        {/* Why Market Exists */}
        <div className="glass-card rounded-2xl p-8 md:p-10 mb-20">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-white">
            <i className="fas fa-chart-line text-[#C50000]" /> Why This Market Exists Now
          </h2>
          <p className="text-text-secondary mb-5">
            Urban congestion, time-critical mobility needs, and rapid advancements in electric aviation are converging to create a new layer of transport.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            <ul className="space-y-2">
              <li className="flex gap-2 text-text-secondary"><i className="fas fa-check-circle text-[#C50000] mt-1" /><span>Global shift toward electric vertical mobility systems (eVTOL)</span></li>
              <li className="flex gap-2 text-text-secondary"><i className="fas fa-check-circle text-[#C50000] mt-1" /><span>Increasing government-level interest in AAM corridors</span></li>
              <li className="flex gap-2 text-text-secondary"><i className="fas fa-check-circle text-[#C50000] mt-1" /><span>Rising demand for time-efficient urban & intercity travel</span></li>
            </ul>
            <ul className="space-y-2">
              <li className="flex gap-2 text-text-secondary"><i className="fas fa-check-circle text-[#C50000] mt-1" /><span>Emergence of vertiports as critical infrastructure assets</span></li>
              <li className="flex gap-2 text-text-secondary"><i className="fas fa-check-circle text-[#C50000] mt-1" /><span>India: underbuilt yet high-potential market for AAM shift</span></li>
            </ul>
          </div>
          <p className="mt-6 text-white font-medium">MyOnlineJet is strategically positioned to participate through ecosystem-first execution, not isolated product deployment.</p>
        </div>

        {/* Our Approach - 4 Layers */}
        <div className="mb-20">
          <h2 className="section-title text-center mb-8">Our Approach &ndash; Multi-Layered Platform</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card rounded-2xl p-6 text-center">
              <i className="fas fa-hard-hat text-4xl text-[#C50000] mb-3" />
              <h3 className="text-xl font-bold text-white mb-2">Physical Infrastructure</h3>
              <p className="text-sm text-text-muted">Vertiports, helipads, VTOL-ready zones</p>
              <a href="/vertiports" className="text-[#C50000] font-semibold text-sm mt-2 inline-block">Learn more &rarr;</a>
            </div>
            <div className="glass-card rounded-2xl p-6 text-center">
              <i className="fas fa-microchip text-4xl text-[#C50000] mb-3" />
              <h3 className="text-xl font-bold text-white mb-2">Digital Intelligence</h3>
              <p className="text-sm text-text-muted">Booking, access, network mapping</p>
              <a href="/technology" className="text-[#C50000] font-semibold text-sm mt-2 inline-block">Explore tech &rarr;</a>
            </div>
            <div className="glass-card rounded-2xl p-6 text-center">
              <i className="fas fa-plug text-4xl text-[#C50000] mb-3" />
              <h3 className="text-xl font-bold text-white mb-2">Ecosystem Integration</h3>
              <p className="text-sm text-text-muted">Hospitals, hotels, tourism, aviation partners</p>
              <a href="/ecosystem-integration" className="text-[#C50000] font-semibold text-sm mt-2 inline-block">View &rarr;</a>
            </div>
            <div className="glass-card rounded-2xl p-6 text-center">
              <i className="fas fa-rocket text-4xl text-[#C50000] mb-3" />
              <h3 className="text-xl font-bold text-white mb-2">Mobility Enablement</h3>
              <p className="text-sm text-text-muted">eVTOL operations, air taxis, emergency mobility</p>
              <a href="/advanced-air-mobility" className="text-[#C50000] font-semibold text-sm mt-2 inline-block">Read AAM &rarr;</a>
            </div>
          </div>
        </div>

        {/* Business Model & Strategic Positioning */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="glass-card rounded-2xl p-8">
            <i className="fas fa-chart-simple text-3xl text-[#C50000] mb-3" />
            <h3 className="text-2xl font-bold mb-3 text-white">Business Model (High-Level)</h3>
            <ul className="space-y-2 text-text-secondary">
              <li><i className="fas fa-angle-right text-[#C50000] mr-2" />Platform-based access & subscription models</li>
              <li><i className="fas fa-angle-right text-[#C50000] mr-2" />Partner onboarding & integration fees</li>
              <li><i className="fas fa-angle-right text-[#C50000] mr-2" />Infrastructure-linked revenue participation</li>
              <li><i className="fas fa-angle-right text-[#C50000] mr-2" />Premium mobility services (future-ready)</li>
              <li><i className="fas fa-angle-right text-[#C50000] mr-2" />Data-driven optimization & network intelligence</li>
            </ul>
            <p className="mt-4 text-white font-semibold">Building for long-term recurring value, not short-term transactions.</p>
          </div>
          <div className="glass-card rounded-2xl p-8">
            <i className="fas fa-bullseye text-3xl text-[#C50000] mb-3" />
            <h3 className="text-2xl font-bold mb-3 text-white">Strategic Positioning</h3>
            <div className="space-y-3 text-text-secondary">
              <p><span className="font-bold text-white">Network ownership</span> over asset dependency</p>
              <p><span className="font-bold text-white">Integration</span> over isolation</p>
              <p><span className="font-bold text-white">Scalability</span> over pilot-only execution</p>
              <p><span className="font-bold text-white">Regulatory alignment</span> from day one</p>
            </div>
            <p className="mt-4 text-text-secondary">This allows us to adapt as AAM evolves while controlling key access points in the value chain.</p>
          </div>
        </div>

        {/* Execution Philosophy */}
        <div className="glass-card rounded-2xl p-8 md:p-10 mb-20">
          <h3 className="text-2xl font-bold mb-5 text-white">Execution Philosophy &ndash; Phased, Infrastructure-Driven</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="bg-[#C50000] w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mb-2">1</div>
              <h4 className="font-bold text-white">Phase 1 &mdash; Foundation</h4>
              <p className="text-sm text-text-muted">Digital platform readiness, early partnerships, strategic positioning</p>
            </div>
            <div>
              <div className="bg-[#C50000] w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mb-2">2</div>
              <h4 className="font-bold text-white">Phase 2 &mdash; Network Formation</h4>
              <p className="text-sm text-text-muted">Vertiport mapping & onboarding, institutional collaborations, demand aggregation</p>
            </div>
            <div>
              <div className="bg-[#C50000] w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mb-2">3</div>
              <h4 className="font-bold text-white">Phase 3 &mdash; Operational Enablement</h4>
              <p className="text-sm text-text-muted">Integration with aircraft operators, launch of mobility services, expansion into key corridors</p>
            </div>
          </div>
          <p className="text-center mt-6 text-text-secondary italic">We are not rushing to launch. We are preparing to scale.</p>
        </div>

        {/* Regulatory & Current Stage */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="glass-card rounded-2xl p-8 border-l-4 border-[#C50000]">
            <i className="fas fa-gavel text-3xl text-[#C50000] mb-2" />
            <h3 className="text-2xl font-bold text-white">Regulatory & Compliance Approach</h3>
            <p className="text-text-secondary mt-2">Aviation is highly regulated. MyOnlineJet is committed to working within Indian aviation frameworks, aligning with future AAM policy developments, and collaborating with authorities. Compliance is not a constraint&mdash;it is a moat.</p>
          </div>
          <div className="glass-card rounded-2xl p-8">
            <i className="fas fa-chart-line text-3xl text-[#C50000] mb-2" />
            <h3 className="text-2xl font-bold text-white">Current Stage</h3>
            <p className="text-text-secondary mt-2">Active development and ecosystem-building phase, focused on platform development, strategic partnerships, network readiness. Selectively engaging with aligned investors.</p>
            <a href="/founder" className="inline-block mt-3 text-[#C50000] font-semibold">Read Founder&apos;s Perspective &rarr;</a>
          </div>
        </div>

        {/* Who We Are Looking For */}
        <div className="glass-card rounded-2xl p-8 md:p-10 mb-20" style={{ background: 'linear-gradient(135deg, rgba(20,20,20,0.8), rgba(10,10,10,0.9))' }}>
          <h3 className="text-2xl font-bold mb-4 text-center text-white">Who We Are Looking to Partner With</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="font-semibold text-[#C50000] mb-2">Investor Types:</p>
              <ul className="space-y-1 text-text-secondary">
                <li><i className="fas fa-check text-[#C50000] mr-2" />Venture Capital Firms</li>
                <li><i className="fas fa-check text-[#C50000] mr-2" />Strategic Investors</li>
                <li><i className="fas fa-check text-[#C50000] mr-2" />Infrastructure Investors</li>
                <li><i className="fas fa-check text-[#C50000] mr-2" />Aviation & Mobility-Focused Funds</li>
                <li><i className="fas fa-check text-[#C50000] mr-2" />Institutional Partners</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-[#C50000] mb-2">We value investors who bring:</p>
              <ul className="space-y-1 text-text-secondary">
                <li><i className="fas fa-check text-[#C50000] mr-2" />Long-term vision</li>
                <li><i className="fas fa-check text-[#C50000] mr-2" />Strategic insight</li>
                <li><i className="fas fa-check text-[#C50000] mr-2" />Ecosystem access</li>
              </ul>
              <p className="mt-3 text-text-muted text-sm">Value Beyond Capital: Strategic Partnerships, Govt Access, Global Expansion, Technology Scaling, Talent.</p>
            </div>
          </div>
        </div>

        {/* Investor Enquiry Form */}
        <div className="glass-card rounded-2xl p-8 md:p-10 mb-20" id="investor-form">
          <h2 className="section-title text-center mb-6">Investor Enquiry Form</h2>
          <p className="text-center text-text-muted mb-8">Structured intake to ensure meaningful conversations. Our team reviews alignment before connecting.</p>
          <InvestorForm />
        </div>

        {/* Explore More */}
        <div className="text-center mb-20">
          <h3 className="text-2xl font-bold mb-4 text-white">Explore the Full Ecosystem</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { label: 'Vision & Mission', href: '/vision-mission' },
              { label: 'Company Profile', href: '/company-profile' },
              { label: 'Technology', href: '/technology' },
              { label: 'Advanced Air Mobility', href: '/advanced-air-mobility' },
              { label: 'Vertiports', href: '/vertiports' },
              { label: 'Ecosystem Integration', href: '/ecosystem-integration' },
              { label: 'Services', href: '/services' }
            ].map((link) => (
              <a key={link.href} href={link.href} className="btn-secondary text-sm">{link.label}</a>
            ))}
          </div>
        </div>

        {/* Closing */}
        <div className="glass-card rounded-2xl p-8 text-center">
          <i className="fas fa-envelope-open-text text-3xl text-[#C50000] mb-3" />
          <h4 className="text-xl font-bold text-white">Investor Relations Direct</h4>
          <p className="text-text-secondary">For direct communication: <a href="/contact" className="text-[#C50000] font-semibold underline">Contact Us &rarr; (Investor Relations section)</a></p>
          <p className="text-xs text-text-muted mt-3">Legal Note: This page is for informational purposes only and does not constitute an offer to sell or a solicitation. <a href="/legal-disclaimer" className="underline">Read full disclaimer</a></p>
          <p className="mt-5 italic font-medium text-text-secondary">&ldquo;We are not just building a company. We are building access to a new layer of mobility infrastructure. And infrastructure, when done right, compounds for decades.&rdquo;</p>
        </div>
      </section>
    </div>
  )
}

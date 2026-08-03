import type { Metadata } from 'next'
import Link from 'next/link'
import { IndustryContributionForm } from '@/components/reports/IndustryContributionForm'

export const metadata: Metadata = {
  title: 'Industry Reports | MyOnlineJet - Shaping the Intelligence Layer of Advanced Air Mobility',
  description:
    'Industry Reports by MyOnlineJet: Strategic insights on AAM, eVTOL, vertiports, infrastructure, policy & ecosystem intelligence. Data-driven perspectives for global aviation stakeholders.',
  alternates: { canonical: '/reports' }
}

const focusAreas = [
  {
    num: '01',
    iconClass: 'fa-solid fa-rocket',
    title: 'Advanced Air Mobility Landscape',
    description: 'Global/regional market evolution, demand projections, fleet numbers, and policy execution timelines.',
    href: '/advanced-air-mobility',
    linkText: 'Explore AAM Framework'
  },
  {
    num: '02',
    iconClass: 'fa-solid fa-plane-up',
    title: 'eVTOL Aircraft Ecosystem',
    description: 'OEM landscape, type certification pathways, battery technology roadmaps, and fleet deployment strategies.',
    href: '/evtol-infrastructure',
    linkText: 'Infrastructure Implications'
  },
  {
    num: '03',
    iconClass: 'fa-solid fa-city',
    title: 'Vertiport Infrastructure & Network Design',
    description: 'Urban vs intercity vertiport models, site selection intelligence, passenger flow, and intermodal integration.',
    href: '/vertiports',
    linkText: 'Vertiport Strategy'
  },
  {
    num: '04',
    iconClass: 'fa-solid fa-microchip',
    title: 'Technology & Digital Infrastructure',
    description: 'AI air traffic orchestration, digital twin simulations, airspace deconfliction, and predictive scheduling.',
    href: '/technology',
    linkText: 'Technology Execution'
  },
  {
    num: '05',
    iconClass: 'fa-solid fa-handshake',
    title: 'Ecosystem Integration',
    description: 'Multi-stakeholder operating models, Public-Private Partnerships (PPP), and smart city master planning.',
    href: '/ecosystem-integration',
    linkText: 'Integration Layer'
  },
  {
    num: '06',
    iconClass: 'fa-solid fa-leaf',
    title: 'Sustainability & Clean Aviation',
    description: 'Electric propulsion, renewable grid integration, net-zero vertiport design, and environmental compliance.',
    href: '/services',
    linkText: 'Sustainable Services'
  }
]

const featuredReports = [
  {
    code: 'REP-2026-01',
    iconClass: 'fa-solid fa-chart-column',
    title: 'India AAM Readiness Index (2026 Edition)',
    badge: 'Q2 2026 Release',
    description: 'City-level preparedness scoring, regulatory maturity analysis, airspace classification, and vertiport density benchmarks across top Indian metropolitan regions.'
  },
  {
    code: 'REP-2026-02',
    iconClass: 'fa-solid fa-draw-polygon',
    title: 'Vertiport Infrastructure Blueprint for Tier-1 & Tier-2 Cities',
    badge: 'Q2 2026 Release',
    description: 'Comprehensive engineering, spatial planning, charging grid requirements, capex benchmarks, and passenger throughput models for high-density vertiport hubs.'
  },
  {
    code: 'REP-2026-03',
    iconClass: 'fa-solid fa-earth-americas',
    title: 'Global eVTOL Market Mapping & Deployment Forecast',
    badge: 'Q3 2026 Release',
    description: 'Data-driven analysis of leading eVTOL OEMs, certification timelines (FAA, EASA, DGCA), manufacturing pipelines, and route profitability projections through 2035.'
  },
  {
    code: 'REP-2026-04',
    iconClass: 'fa-solid fa-gavel',
    title: 'Urban Air Mobility Policy Landscape – India & Global Comparison',
    badge: 'Q3 2026 Release',
    description: 'Comparative study of regulatory sandboxes, airspace management frameworks, noise mitigation standards, and municipal zoning policies across APAC, Europe, and North America.'
  }
]

const targetAudienceList = [
  'Government Bodies, DGCA & Aviation Policymakers',
  'Infrastructure Developers & Real Estate Groups',
  'Aviation Startups, eVTOL OEMs & Fleet Operators',
  'Hospitality, Medical & Urban Transport Systems',
  'Institutional Investors, Infrastructure Funds & Venture Capital'
]

export default function Page() {
  return (
    <div className="dark-page-shell">
      <div className="aurora-bg" />
      <div className="noise-overlay" />

      <section className="relative z-10 mx-auto max-w-6xl px-4 pt-28 pb-16 sm:px-6 sm:pt-32 sm:pb-20 lg:px-8">

        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#C50000]/40 bg-[#C50000]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#C50000] shadow-[0_0_15px_rgba(197,0,0,0.15)] sm:px-5 sm:py-2 sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-[#C50000] animate-pulse" />
            Intelligence Hub
          </div>
          <h1 className="content-hero-title mt-6 mb-4 sm:mt-8 sm:mb-5">
            Shaping the <span className="text-[#C50000]">Intelligence Layer</span> of Advanced Air Mobility
          </h1>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-zinc-300 sm:text-lg sm:leading-8">
            At MyOnlineJet, we don’t just participate in the future of aviation—we actively decode, structure, and enable it through data-driven industry research and strategic intelligence.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="#featured-reports" className="btn-primary">
              <i className="fa-solid fa-layer-group text-xs mr-2" /> Explore Reports
            </a>
            <a href="#contribute" className="btn-secondary">
              <i className="fa-solid fa-pen-to-square text-xs mr-2" /> Contribute Insights &rarr;
            </a>
          </div>
        </div>

        {/* Why Industry Reports Matter Now */}
        <div className="glass-card mb-12 rounded-2xl p-6 sm:p-10 border border-white/10 shadow-2xl">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="font-display text-xl text-white font-bold sm:text-2xl md:text-3xl">
              Why Industry Reports Matter Now
            </h2>
            <p className="mt-3 text-xs leading-relaxed text-zinc-300 sm:text-sm sm:leading-7">
              The global aviation ecosystem is undergoing its most significant transformation since the introduction of commercial jet travel. Urban congestion, clean energy mandates, and multi‑layered mobility systems are pushing boundaries. Yet the industry suffers from fragmented data, missing infrastructure standards, and a lack of actionable intelligence. MyOnlineJet Industry Reports bridge this gap with strategic clarity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 pt-4 border-t border-white/10 text-center">
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-6 hover:border-[#C50000]/30 transition-all">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#C50000]/20 text-[#C50000] text-xl font-bold border border-[#C50000]/30">
                <i className="fa-solid fa-chart-line" />
              </div>
              <strong className="text-white text-base block mb-1">Standardized Frameworks</strong>
              <p className="text-xs text-zinc-400 leading-relaxed">Unified data taxonomies and ecosystem alignment standards</p>
            </div>

            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-6 hover:border-[#C50000]/30 transition-all">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#C50000]/20 text-[#C50000] text-xl font-bold border border-[#C50000]/30">
                <i className="fa-solid fa-earth-asia" />
              </div>
              <strong className="text-white text-base block mb-1">Global + Regional Lens</strong>
              <p className="text-xs text-zinc-400 leading-relaxed">In-depth insights covering India, APAC, Europe, and the Americas</p>
            </div>

            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-6 hover:border-[#C50000]/30 transition-all">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#C50000]/20 text-[#C50000] text-xl font-bold border border-[#C50000]/30">
                <i className="fa-solid fa-brain" />
              </div>
              <strong className="text-white text-base block mb-1">Decision Intelligence</strong>
              <p className="text-xs text-zinc-400 leading-relaxed">Actionable research for investors, policymakers, and OEMs</p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap justify-center items-center gap-4 text-xs sm:text-sm text-zinc-400">
            <Link href="/vision-mission" className="text-[#C50000] font-semibold hover:underline flex items-center gap-1">
              <i className="fa-solid fa-compass text-xs" /> Explore Vision &amp; Mission &rarr;
            </Link>
            <span className="text-white/20">&bull;</span>
            <Link href="/technology" className="text-[#C50000] font-semibold hover:underline flex items-center gap-1">
              <i className="fa-solid fa-gears text-xs" /> Technology Execution &rarr;
            </Link>
          </div>
        </div>

        {/* 6 Core Focus Areas */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <div className="inline-block text-xs font-semibold uppercase tracking-[0.18em] text-[#C50000] mb-2">
              Research Pillars
            </div>
            <h2 className="font-display text-xl text-white font-bold sm:text-2xl md:text-3xl">
              Our 6 Core Focus Areas
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-zinc-400">
              Structuring intelligence across every layer of the Advanced Air Mobility value chain.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {focusAreas.map((area) => (
              <div
                key={area.num}
                className="glass-card rounded-2xl p-6 border border-white/10 hover:border-[#C50000]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C50000]/20 text-[#C50000] text-base border border-[#C50000]/30 shadow-[0_0_10px_rgba(197,0,0,0.15)]">
                      <i className={area.iconClass} />
                    </div>
                    <span className="font-mono text-xs font-bold text-zinc-500 bg-white/5 px-2.5 py-1 rounded border border-white/5">
                      {area.num}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                    {area.title}
                  </h3>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {area.description}
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-white/5">
                  <Link href={area.href} className="text-xs font-semibold text-[#C50000] hover:underline flex items-center gap-1">
                    {area.linkText} &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Reports Section */}
        <div id="featured-reports" className="scroll-mt-28 mb-16">
          <div className="glass-card rounded-2xl p-6 sm:p-10 border border-white/10 bg-gradient-to-br from-white/[0.04] via-transparent to-[#C50000]/10">
            <div className="flex flex-wrap justify-between items-center pb-4 mb-6 border-b border-white/10 gap-3">
              <div>
                <h2 className="font-display text-xl text-white font-bold sm:text-2xl md:text-3xl">
                  Featured Research Reports
                </h2>
                <p className="text-xs text-zinc-400 mt-1">Strategic publications releasing in 2026</p>
              </div>
              <span className="rounded-full border border-[#C50000]/40 bg-[#C50000]/20 px-3.5 py-1 text-xs font-semibold text-[#C50000] flex items-center gap-1.5">
                <i className="fa-solid fa-calendar-days text-xs" /> 2026 Publication Schedule
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
              {featuredReports.map((report) => (
                <div
                  key={report.code}
                  className="rounded-xl border border-white/10 bg-black/40 p-5 sm:p-6 flex flex-col justify-between hover:border-[#C50000]/40 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#C50000]/20 text-[#C50000] text-xs font-bold border border-[#C50000]/30">
                          <i className={report.iconClass} />
                        </div>
                        <span className="text-[11px] font-mono font-semibold text-[#C50000] bg-[#C50000]/10 px-2 py-0.5 rounded border border-[#C50000]/20">
                          {report.code}
                        </span>
                      </div>
                      <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                        {report.badge}
                      </span>
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-white mb-2 leading-snug">
                      {report.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-zinc-300">
                      {report.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                    <span className="text-zinc-500">Status: In Peer Review</span>
                    <Link href="/subscribe" className="text-[#C50000] font-semibold hover:underline flex items-center gap-1">
                      Notify Me &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4 pt-6 border-t border-white/10">
              <Link href="/subscribe" className="btn-primary text-xs py-2.5 px-6">
                <i className="fa-solid fa-bell text-xs mr-1.5" /> Subscribe for Report Releases
              </Link>
              <Link href="/early-access" className="btn-secondary text-xs py-2.5 px-6">
                <i className="fa-solid fa-key text-xs mr-1.5" /> Register for Early Access &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* Audience & Data Integrity Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10">
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/10">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C50000]/20 text-[#C50000] text-base border border-[#C50000]/30">
                <i className="fa-solid fa-users" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Who These Reports Are For</h3>
                <p className="text-xs text-zinc-400">Target stakeholders &amp; decision makers</p>
              </div>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-zinc-300">
              {targetAudienceList.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <i className="fa-solid fa-circle-check text-[#C50000] text-sm shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-4 border-t border-white/10 flex gap-4 text-xs">
              <Link href="/partner-with-us" className="text-[#C50000] font-semibold hover:underline flex items-center gap-1">
                <i className="fa-solid fa-handshake text-xs" /> Collaborate &rarr;
              </Link>
              <Link href="/company-profile" className="text-[#C50000] font-semibold hover:underline flex items-center gap-1">
                <i className="fa-solid fa-building text-xs" /> Company Profile &rarr;
              </Link>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 bg-gradient-to-br from-white/[0.02] to-[#C50000]/5">
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/10">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C50000]/20 text-[#C50000] text-base border border-[#C50000]/30">
                <i className="fa-solid fa-shield-halved" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Data Integrity &amp; Methodology</h3>
                <p className="text-xs text-zinc-400">Our research principles and verification standards</p>
              </div>
            </div>
            <div className="space-y-3 text-xs sm:text-sm text-zinc-300 leading-relaxed">
              <p className="flex items-start gap-2">
                <i className="fa-solid fa-lock text-[#C50000] text-xs shrink-0 mt-1" />
                <span><strong className="text-white">Strict Confidentiality:</strong> No confidential or proprietary partner data is ever disclosed without explicit authorization.</span>
              </p>
              <p className="flex items-start gap-2">
                <i className="fa-solid fa-magnifying-glass-chart text-[#C50000] text-xs shrink-0 mt-1" />
                <span><strong className="text-white">Multi-Source Verification:</strong> Synthesized from primary regulatory filings, flight telemetry, infrastructure spatial mapping, and peer-reviewed aviation standards.</span>
              </p>
              <p className="flex items-start gap-2">
                <i className="fa-solid fa-bullseye text-[#C50000] text-xs shrink-0 mt-1" />
                <span><strong className="text-white">Actionable &amp; Strategic:</strong> Built for founders, investors, and municipal planning officers who require empirical clarity over speculation.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Contribution Form Component */}
        <IndustryContributionForm />

        {/* Strategic Positioning Statement Card */}
        <div className="mt-16 rounded-2xl border border-white/10 bg-gradient-to-br from-[#0F1C3F] via-[#0F1C3F]/80 to-black p-8 sm:p-10 text-center shadow-2xl">
          <div className="inline-block text-xs font-semibold uppercase tracking-[0.18em] text-[#C50000] mb-2">
            Strategic Instrument
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">
            Positioning Statement
          </h2>
          <p className="mx-auto max-w-3xl text-xs leading-relaxed text-zinc-300 sm:text-sm sm:leading-7 md:text-base">
            MyOnlineJet Industry Reports are not just static documents—they are strategic instruments designed to accelerate the adoption, alignment, and execution of Advanced Air Mobility ecosystems globally.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-8">
            <Link href="/vision-mission" className="rounded-xl border border-white/10 bg-white/5 py-3 px-3 text-xs text-zinc-200 hover:border-[#C50000] hover:text-white transition-all flex items-center justify-center gap-2">
              <i className="fa-solid fa-road text-[#C50000]" /> Vision &amp; Mission
            </Link>
            <Link href="/services" className="rounded-xl border border-white/10 bg-white/5 py-3 px-3 text-xs text-zinc-200 hover:border-[#C50000] hover:text-white transition-all flex items-center justify-center gap-2">
              <i className="fa-solid fa-cogs text-[#C50000]" /> Services Stack
            </Link>
            <Link href="/partner-with-us" className="rounded-xl border border-white/10 bg-white/5 py-3 px-3 text-xs text-zinc-200 hover:border-[#C50000] hover:text-white transition-all flex items-center justify-center gap-2">
              <i className="fa-solid fa-handshake text-[#C50000]" /> Partner With Us
            </Link>
            <Link href="/whitepapers" className="rounded-xl border border-white/10 bg-white/5 py-3 px-3 text-xs text-zinc-200 hover:border-[#C50000] hover:text-white transition-all flex items-center justify-center gap-2">
              <i className="fa-solid fa-file-lines text-[#C50000]" /> Whitepapers
            </Link>
          </div>
        </div>

        {/* Final Note & CTA */}
        <div className="text-center py-10 border-t border-white/10 mt-16">
          <p className="text-xs sm:text-sm text-zinc-400 italic max-w-3xl mx-auto leading-relaxed">
            &ldquo;The next era of aviation will not be defined by aircraft alone—but by systems, infrastructure, intelligence, and collaboration. MyOnlineJet is building at that intersection.&rdquo;
          </p>
          <div className="mt-8 flex justify-center items-center gap-4 sm:gap-6 flex-wrap">
            <Link href="/ecosystem-integration" className="text-xs sm:text-sm text-[#C50000] font-semibold hover:underline flex items-center gap-1">
              <i className="fa-solid fa-network-wired text-xs" /> Ecosystem Integration &rarr;
            </Link>
            <Link href="/founder" className="text-xs sm:text-sm text-[#C50000] font-semibold hover:underline flex items-center gap-1">
              <i className="fa-solid fa-user-tie text-xs" /> Founder Message &rarr;
            </Link>
            <Link href="/early-access" className="btn-primary text-xs py-2 px-5">
              <i className="fa-solid fa-bolt text-xs mr-1" /> Join Early Access
            </Link>
          </div>
        </div>

      </section>
    </div>
  )
}

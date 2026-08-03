import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Founder & CEO Message | MyOnlineJet - Building Inevitability',
  description:
    "Amit Kumar, Founder & CEO of MyOnlineJet, shares the vision of building India's Advanced Air Mobility infrastructure from first principles. Long-term strategic thinking.",
  alternates: { canonical: '/founder' },
  openGraph: {
    title: 'Founder & CEO Message | MyOnlineJet',
    description: "Building India's Advanced Air Mobility infrastructure from first principles.",
    images: [{ url: 'https://myonlinejet.com/images/Logo.webp' }]
  }
}

const strategicPillars = [
  {
    num: '01',
    iconClass: 'fa-solid fa-brain',
    title: 'First Principles Infrastructure',
    description: 'No legacy constraints. Designing spatial, energy, and digital aviation systems for 2050, not yesterday.'
  },
  {
    num: '02',
    iconClass: 'fa-solid fa-handshake',
    title: 'Ecosystem-First Alignment',
    description: 'Uniting vertiport operators, eVTOL OEMs, government regulators (DGCA), and municipal planners into one coordinated mesh.'
  },
  {
    num: '03',
    iconClass: 'fa-solid fa-building-columns',
    title: 'Durable Network Play',
    description: 'Focusing on physical assets and digital coordination layers that compound value over decades, not short-term cycles.'
  },
  {
    num: '04',
    iconClass: 'fa-solid fa-shield-halved',
    title: 'Safety & Regulatory Trust',
    description: 'Aviation-grade safety discipline embedded across every node, airspace corridor, and passenger touchpoint.'
  }
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
            Founder&apos;s Vision
          </div>
          <h1 className="content-hero-title mt-6 mb-4 sm:mt-8 sm:mb-5 max-w-5xl mx-auto">
            The future of mobility will not be built by adapting old systems.<br className="hidden md:inline" />
            <span className="text-[#C50000]"> It will be built by rethinking infrastructure from first principles.</span>
          </h1>

          {/* Subtitle Metadata Badges */}
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs sm:text-sm">
            <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-zinc-300 flex items-center gap-2">
              <i className="fa-solid fa-user-tie text-[#C50000]" /> Author: <strong className="text-white">Amit Kumar (Founder &amp; CEO)</strong>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-zinc-300 flex items-center gap-2">
              <i className="fa-solid fa-building text-[#C50000]" /> Entity: <strong className="text-white">iAlpha Technologies Pvt Ltd</strong>
            </div>
            <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-emerald-400 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Focus: Nationwide AAM Network
            </div>
          </div>
        </div>

        {/* Founder Message Card */}
        <div className="glass-card mb-16 rounded-2xl p-6 sm:p-10 md:p-12 border border-white/10 shadow-2xl">
          <div className="space-y-6 text-sm leading-relaxed text-zinc-300 sm:text-base sm:leading-8">
            <p className="text-base sm:text-lg text-white font-medium leading-relaxed bg-white/[0.02] p-5 rounded-xl border border-white/5">
              At MyOnlineJet, we are not chasing trends—we are architecting inevitability. India presents a unique opportunity. Dense urban clusters, rising demand for time efficiency, and rapid infrastructure growth demand a brand new mobility layer above the ground.
            </p>
            <p>
              <strong className="text-white font-semibold">Advanced Air Mobility (AAM)</strong> is that layer. But AAM cannot scale through aircraft technology alone. It requires:
            </p>

            <div className="grid sm:grid-cols-3 gap-4 my-6">
              <div className="rounded-xl border border-white/5 bg-surface-card p-4 text-center">
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-[#C50000]/20 text-[#C50000]">
                  <i className="fa-solid fa-microchip" />
                </div>
                <strong className="text-white text-xs sm:text-sm block">Intelligent Infrastructure</strong>
                <span className="text-zinc-400 text-xs">Vertiports &amp; airspace software</span>
              </div>
              <div className="rounded-xl border border-white/5 bg-surface-card p-4 text-center">
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-[#C50000]/20 text-[#C50000]">
                  <i className="fa-solid fa-network-wired" />
                </div>
                <strong className="text-white text-xs sm:text-sm block">Coordinated Ecosystem</strong>
                <span className="text-zinc-400 text-xs">Multi-stakeholder alignment</span>
              </div>
              <div className="rounded-xl border border-white/5 bg-surface-card p-4 text-center">
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-[#C50000]/20 text-[#C50000]">
                  <i className="fa-solid fa-chart-line" />
                </div>
                <strong className="text-white text-xs sm:text-sm block">Long-Term Thinking</strong>
                <span className="text-zinc-400 text-xs">Decadal value compounding</span>
              </div>
            </div>

            <p>
              That is where MyOnlineJet stands. We are building not just isolated landing sites, but complete alignment across physical, digital, and regulatory frameworks. This is not a short-term play—this is foundational infrastructure for the next century of flight.
            </p>
          </div>

          {/* Signature & CTA Block */}
          <div className="mt-10 rounded-xl border border-[#C50000]/30 bg-gradient-to-r from-[#C50000]/15 via-white/[0.02] to-transparent p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
              <div>
                <p className="text-lg sm:text-xl font-bold text-[#C50000]">
                  &mdash; Amit Kumar
                </p>
                <p className="text-xs sm:text-sm text-zinc-300 font-medium mt-0.5">
                  Founder &amp; CEO, MyOnlineJet | iAlpha Technologies Pvt Ltd
                </p>
              </div>

              <div className="flex gap-3 flex-wrap">
                <Link href="/advanced-air-mobility" className="btn-primary text-xs py-2.5 px-5">
                  Advanced Air Mobility &rarr;
                </Link>
                <Link href="/ecosystem-integration" className="btn-secondary text-xs py-2.5 px-5">
                  Ecosystem Integration &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Strategic Pillars */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <div className="inline-block text-xs font-semibold uppercase tracking-[0.18em] text-[#C50000] mb-2">
              Foundational Principles
            </div>
            <h2 className="font-display text-xl text-white font-bold sm:text-2xl md:text-3xl">
              Strategic Pillars of Execution
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-zinc-400">
              The core principles driving our infrastructure blueprint and ecosystem operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {strategicPillars.map((pillar) => (
              <div
                key={pillar.num}
                className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-[#C50000]/40 transition-all duration-300 flex items-start gap-4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#C50000]/20 text-[#C50000] text-xl border border-[#C50000]/30 shadow-[0_0_12px_rgba(197,0,0,0.15)]">
                  <i className={pillar.iconClass} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-[11px] font-bold text-zinc-500 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                      {pillar.num}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-xs leading-relaxed text-zinc-300 sm:text-sm mt-2">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action & Positioning CTA Card */}
        <div className="mt-16 rounded-2xl border border-white/10 bg-gradient-to-r from-[#C50000]/20 via-[#C50000]/5 to-transparent p-6 text-center shadow-[0_30px_60px_rgba(0,0,0,0.4)] sm:p-10">
          <h2 className="font-display text-xl text-white font-bold sm:text-2xl md:text-3xl">
            Explore the Ecosystem
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xs text-zinc-300 sm:text-sm md:text-base">
            Discover how our vertiport infrastructure, technology orchestration, and strategic alliances bring this vision to life.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 sm:gap-4">
            <Link href="/company-profile" className="btn-primary text-xs py-2.5 px-5">
              <i className="fa-solid fa-building text-xs mr-1.5" /> Company Profile
            </Link>
            <Link href="/vertiports" className="btn-secondary text-xs py-2.5 px-5">
              <i className="fa-solid fa-city text-xs mr-1.5" /> Vertiport Network
            </Link>
            <Link href="/partner-with-us" className="btn-secondary text-xs py-2.5 px-5">
              <i className="fa-solid fa-handshake text-xs mr-1.5" /> Partner With Us
            </Link>
          </div>
        </div>

      </section>
    </div>
  )
}

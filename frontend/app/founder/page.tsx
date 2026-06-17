import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Founder & CEO Message | MyOnlineJet",
  description: "Amit Kumar, Founder & CEO of MyOnlineJet, shares the vision of building India's AAM infrastructure from first principles. Long-term strategic thinking.",
  alternates: { canonical: '/founder' },
  openGraph: {
    title: "Founder & CEO Message | Building inevitability",
    images: [{ url: 'https://myonlinejet.com/images/Logo.webp' }]
  }
}

export default function Page() {
  return (
    <div className="dark-page-shell">
      <div className="aurora-bg" />
      <div className="noise-overlay" />

      <section className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-block rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#FF4444]">
            FOUNDER&apos;S VISION
          </div>
          <h1 className="content-hero-title mt-8 mb-6 max-w-5xl mx-auto">
            The future of mobility will not be built by adapting old systems.<br />
            <span className="text-gradient">It will be built by rethinking infrastructure from first principles.</span>
          </h1>
        </div>

        <div className="glass-card rounded-2xl p-8 md:p-12 mb-16">
          <p className="text-lg text-text-secondary leading-relaxed mb-6">
            At MyOnlineJet, we are not chasing trends, we are architecting inevitability. India presents a unique opportunity. Dense urban clusters, rising demand for time efficiency, and rapid infrastructure growth demand a new mobility layer.
          </p>
          <p className="text-lg text-text-secondary leading-relaxed mb-6">
            <strong className="text-white">Advanced Air Mobility</strong> is that layer. But AAM cannot scale without: Intelligent infrastructure, Coordinated ecosystem players, Long-term strategic thinking.
          </p>
          <p className="text-lg text-text-secondary leading-relaxed mb-6">
            That is where MyOnlineJet stands. We are building not just infrastructure, but alignment across the ecosystem. This is not a short-term play. This is foundational.
          </p>
          <div className="rounded-xl border border-border-subtle bg-surface-card p-6 mt-8">
            <p className="text-xl font-bold text-[#FF4444]">&mdash; Amit Kumar, Founder &amp; CEO</p>
            <div className="flex gap-4 mt-6 flex-wrap">
              <a href="/advanced-air-mobility" className="btn-primary">
                Advanced Air Mobility &rarr;
              </a>
              <a href="/ecosystem-integration" className="btn-secondary">
                Ecosystem Integration &rarr;
              </a>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-card rounded-2xl p-8">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C50000]/10 text-3xl text-[#FF4444]">
              <i className="fas fa-brain" />
            </div>
            <h3 className="text-xl font-bold text-white">First principles infrastructure</h3>
            <p className="mt-3 text-text-secondary">No legacy constraints. Designing for 2050, not yesterday.</p>
          </div>
          <div className="glass-card rounded-2xl p-8">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C50000]/10 text-3xl text-[#FF4444]">
              <i className="fas fa-handshake" />
            </div>
            <h3 className="text-xl font-bold text-white">Ecosystem-first alignment</h3>
            <p className="mt-3 text-text-secondary">Bringing partners, government, and innovators together.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

import type { Metadata } from 'next'
import { VertiportClient } from '@/components/vertiports/VertiportClient'

const pageCss = `
.vertiports-page{position:relative;overflow:hidden;min-height:100vh;background:#0A0A0A;color:#FAFAFA}
.vertiport-glow-orb-1{position:fixed;border-radius:50%;filter:blur(120px);pointer-events:none;z-index:0;opacity:0.15;width:600px;height:600px;background:radial-gradient(circle,#FF2D2D 0%,transparent 70%);top:-200px;right:-100px}
.vertiport-glow-orb-2{position:fixed;border-radius:50%;filter:blur(120px);pointer-events:none;z-index:0;opacity:0.15;width:500px;height:500px;background:radial-gradient(circle,#FF4444 0%,transparent 70%);bottom:10%;left:-150px}
.vertiport-glow-orb-3{position:fixed;border-radius:50%;filter:blur(120px);pointer-events:none;z-index:0;opacity:0.08;width:400px;height:400px;background:radial-gradient(circle,#FF2D2D 0%,transparent 70%);top:50%;right:-100px}
.vertiport-grid-pattern{position:fixed;inset:0;pointer-events:none;z-index:1;background-image:linear-gradient(rgba(255,45,45,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,45,45,0.03) 1px,transparent 1px);background-size:60px 60px}
.vertiport-dark-section{background:#111111;border-radius:24px;border:1px solid #1F1F1F}
.font-heading{font-family:'Space Grotesk',sans-serif}
.font-body{font-family:'Inter',sans-serif}
.badge-pill{display:inline-flex;align-items:center;gap:6px;background:rgba(255,45,45,0.1);color:#FF2D2D;padding:6px 16px;border-radius:40px;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;border:1px solid rgba(255,45,45,0.15)}
.icon-box-lg{width:64px;height:64px;border-radius:16px}
.icon-box-lg i{font-size:24px}
.reveal{opacity:0;transform:translateY(30px);transition:opacity 0.8s ease,transform 0.8s ease}
.reveal.visible{opacity:1;transform:translateY(0)}
.text-brandRed{color:#FF2D2D}
.text-brandRedGlow{color:#FF4444}
.gradient-text{background:linear-gradient(135deg,#FAFAFA 0%,#FF2D2D 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
@media(max-width:768px){.vertiport-glow-orb-1{width:300px;height:300px;top:-100px}.vertiport-glow-orb-2{width:250px;height:250px}.vertiport-glow-orb-3{width:200px;height:200px}}
@media(max-width:480px){.vertiports-page .hero-title{font-size:clamp(1.6rem,8vw,2rem)!important}.vertiports-page .section-title{font-size:clamp(1.2rem,5vw,1.5rem)!important}.vertiports-page .glass-card,.vertiports-page .vertiport-dark-section{padding:1rem!important;border-radius:12px}.vertiports-page .icon-box-lg{width:48px;height:48px}.vertiports-page .badge-pill{font-size:10px;padding:4px 10px}}
@media(max-width:380px){.vertiports-page .hero-title{font-size:clamp(1.3rem,7vw,1.6rem)!important}.vertiports-page .section-title{font-size:clamp(1rem,4.5vw,1.2rem)!important}.vertiports-page .glass-card,.vertiports-page .vertiport-dark-section{padding:0.75rem!important;border-radius:10px}.vertiports-page .icon-box{width:32px;height:32px;font-size:14px;border-radius:8px}.vertiports-page .icon-box-lg{width:40px;height:40px}}
`

export const metadata: Metadata = {
  title: "Vertiports | India's Largest AAM Infrastructure Network | MyOnlineJet",
  description: "MyOnlineJet's vertiport network: AI-powered, strategically located urban air mobility hubs. Enabling eVTOL operations across India with modular & scalable infrastructure.",
  keywords: ['vertiports', 'urban air mobility infrastructure', 'eVTOL landing pads', 'AAM vertiport network India', 'MyOnlineJet vertiports', 'aerial mobility nodes'],
  alternates: { canonical: '/vertiports' },
  openGraph: {
    title: 'Vertiports | Intelligent Infrastructure for Advanced Air Mobility',
    description: 'Building India\'s backbone for aerial mobility: interconnected vertiports powered by AI, strategic location intelligence, and scalable design.',
    images: [{ url: 'https://myonlinejet.com/images/vertiports-og.jpg', width: 1200, height: 630 }],
    url: 'https://myonlinejet.com/vertiports/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vertiports | Intelligent Infrastructure for Advanced Air Mobility',
    description: 'Building India\'s backbone for aerial mobility: interconnected vertiports powered by AI, strategic location intelligence, and scalable design.',
  }
}

export default function VertiportsPage() {

  return (
    <>
    <div className="vertiports-page">
      {/* Ambient glow orbs */}
      <div className="glow-orb vertiport-glow-orb-1" />
      <div className="glow-orb vertiport-glow-orb-2" />
      <div className="glow-orb vertiport-glow-orb-3" />
      <div className="vertiport-grid-pattern" />

      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-28 pb-16">

        {/* HERO SECTION — visible immediately, no scroll-reveal delay */}
        <div className="text-center mb-20 reveal visible">
          <div className="badge-pill mb-8 inline-flex items-center gap-1.5">
            <i className="fas fa-satellite-dish text-xs" />
            Infrastructure — Vertiports
          </div>
          <h1 className="hero-title mb-6">
            The Foundation of <span className="text-brandRed">Urban Air Mobility</span> in India
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto font-body leading-relaxed">
            Urban air mobility will not scale because of aircraft alone. It will scale because of infrastructure that is intelligently designed, strategically located, and deeply integrated into the ecosystem.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="/partner-with-us" className="btn-primary">
              <i className="fas fa-handshake" />
              Partner With Us
            </a>
            <a href="/early-access" className="btn-secondary">
              <i className="fas fa-rocket" />
              Early Access
            </a>
          </div>
        </div>

        {/* WHAT IS A VERTIPORT */}
        <div className="glass-card p-8 md:p-12 mb-20 reveal" style={{ transitionDelay: '0.1s' }}>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="badge-pill mb-6 inline-flex items-center gap-1.5">
                <i className="fas fa-layer-group text-xs" />
                Beyond Landing Zones
              </span>
              <h2 className="section-title mb-4">What is a Vertiport?</h2>
              <p className="text-text-secondary mb-4 font-body leading-relaxed">
                A vertiport is a purpose-built infrastructure hub designed for electric vertical take-off and landing (eVTOL) aircraft. But in reality, a true vertiport is far more than that.
              </p>
              <ul className="space-y-3 text-text-secondary font-body">
                <li className="flex items-start gap-3">
                  <span className="icon-box mt-0.5 shrink-0"><i className="fas fa-cube" /></span>
                  <span>A multi-layer mobility node</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="icon-box mt-0.5 shrink-0"><i className="fas fa-database" /></span>
                  <span>A data-driven aviation infrastructure system</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="icon-box mt-0.5 shrink-0"><i className="fas fa-charging-station" /></span>
                  <span>A high-frequency, high-efficiency transit hub</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="icon-box mt-0.5 shrink-0"><i className="fas fa-city" /></span>
                  <span>A gateway connecting cities, industries, and critical services</span>
                </li>
              </ul>
              <p className="mt-6 text-text-secondary italic font-body">
                At MyOnlineJet, we redefine vertiports as <strong className="text-brandRed">intelligent infrastructure assets</strong>, not static real estate.
              </p>
            </div>
            <div className="bg-surface-elevated p-6 rounded-2xl border border-border-subtle text-center">
              <div className="icon-box icon-box-lg mx-auto mb-4">
                <i className="fas fa-map-marked-alt" />
              </div>
              <p className="font-heading font-semibold text-textPrimary">Control points of the future aviation economy</p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="p-3 rounded-xl bg-surface-card border border-border-subtle">
                  <i className="fas fa-charging-station text-xl text-brandRed mb-2" />
                  <p className="text-sm text-text-secondary">Smart Energy</p>
                </div>
                <div className="p-3 rounded-xl bg-surface-card border border-border-subtle">
                  <i className="fas fa-microchip text-xl text-brandRed mb-2" />
                  <p className="text-sm text-text-secondary">AI Command</p>
                </div>
                <div className="p-3 rounded-xl bg-surface-card border border-border-subtle">
                  <i className="fas fa-users text-xl text-brandRed mb-2" />
                  <p className="text-sm text-text-secondary">Passenger Flow</p>
                </div>
                <div className="p-3 rounded-xl bg-surface-card border border-border-subtle">
                  <i className="fas fa-shield-alt text-xl text-brandRed mb-2" />
                  <p className="text-sm text-text-secondary">Safety Layer</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* OUR VISION */}
        <div className="vertiport-dark-section p-8 md:p-12 mb-20 reveal" style={{ transitionDelay: '0.2s' }}>
          <h2 className="section-title text-center mb-6">Our Vision for Vertiports</h2>
          <p className="text-center text-text-secondary max-w-3xl mx-auto mb-10 font-body">
            We are not building isolated vertiports. We are building India&apos;s largest interconnected vertiport network powering seamless aerial mobility.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-6 rounded-xl bg-surface-card border border-border-subtle hover:border-brandRed/30 transition-all">
              <div className="icon-box icon-box-lg mx-auto mb-4">
                <i className="fas fa-subway" />
              </div>
              <p className="font-heading font-bold text-textPrimary">Urban Vertiports</p>
              <p className="text-sm text-text-secondary mt-1">Across metro cities</p>
            </div>
            <div className="p-6 rounded-xl bg-surface-card border border-border-subtle hover:border-brandRed/30 transition-all">
              <div className="icon-box icon-box-lg mx-auto mb-4">
                <i className="fas fa-road" />
              </div>
              <p className="font-heading font-bold text-textPrimary">Intercity Corridors</p>
              <p className="text-sm text-text-secondary mt-1">High-demand routes</p>
            </div>
            <div className="p-6 rounded-xl bg-surface-card border border-border-subtle hover:border-brandRed/30 transition-all">
              <div className="icon-box icon-box-lg mx-auto mb-4">
                <i className="fas fa-hospital" />
              </div>
              <p className="font-heading font-bold text-textPrimary">Strategic Hubs</p>
              <p className="text-sm text-text-secondary mt-1">Hospitals / Tourism / Business</p>
            </div>
            <div className="p-6 rounded-xl bg-surface-card border border-border-subtle hover:border-brandRed/30 transition-all">
              <div className="icon-box icon-box-lg mx-auto mb-4">
                <i className="fas fa-chart-line" />
              </div>
              <p className="font-heading font-bold text-textPrimary">Future-Ready</p>
              <p className="text-sm text-text-secondary mt-1">Regulation aligned</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <a href="/advanced-air-mobility" className="inline-flex items-center text-brandRed hover:text-brandRedGlow transition font-medium">
              Explore broader AAM vision <i className="fas fa-arrow-right ml-2 text-sm" />
            </a>
          </div>
        </div>

        {/* WHY VERTIPORTS MATTER */}
        <div className="glass-card p-8 md:p-12 mb-20 reveal" style={{ transitionDelay: '0.1s' }}>
          <h2 className="section-title text-center mb-4">Why Vertiports Matter</h2>
          <p className="text-center text-text-secondary max-w-2xl mx-auto mb-12 font-body">
            Without infrastructure, air taxis remain a concept. Vertiports solve the real problems.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: 'fa-check-circle', title: 'Operational Feasibility', desc: 'Turning eVTOL into real-world transport' },
              { icon: 'fa-user-check', title: 'Passenger Efficiency', desc: 'Seamless boarding & alighting' },
              { icon: 'fa-clock', title: 'Turnaround Optimization', desc: 'High-frequency operations' },
              { icon: 'fa-gavel', title: 'Safety & Compliance', desc: 'Trust & regulatory readiness' },
              { icon: 'fa-chart-simple', title: 'Revenue Scalability', desc: 'Long-term asset monetization' },
              { icon: 'fa-tower-cell', title: 'Control Layer', desc: 'Routes, capacity & pricing power' },
            ].map((item) => (
              <div key={item.title} className="text-center p-6 rounded-xl bg-surface-card border border-border-subtle hover:border-brandRed/30 transition-all">
                <div className="icon-box icon-box-lg mx-auto mb-4">
                  <i className={`fas ${item.icon}`} />
                </div>
                <h3 className="font-heading font-bold text-textPrimary mb-2">{item.title}</h3>
                <p className="text-sm text-text-secondary">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-surface-elevated rounded-xl p-6 mt-8 text-center border-l-4 border-brandRed">
            <p className="text-lg font-heading font-semibold text-textPrimary">
              Who controls vertiports, controls the future of aerial mobility.
            </p>
          </div>
        </div>

        {/* STRATEGY SECTION */}
        <div className="mb-20 reveal">
          <span className="badge-pill mb-6 inline-flex items-center gap-1.5">
            <i className="fas fa-bullseye text-xs" />
            Strategic Edge
          </span>
          <h2 className="section-title mb-10">MyOnlineJet Vertiport Strategy</h2>
          <div className="space-y-6">
            <div className="glass-card p-6 md:p-8">
              <div className="flex items-start gap-5 flex-wrap md:flex-nowrap">
                <div className="icon-box icon-box-lg shrink-0">
                  <i className="fas fa-map-pin" />
                </div>
                <div>
                  <h3 className="card-title mb-2">1. Strategic Location Intelligence</h3>
                  <p className="text-text-secondary font-body mb-4">
                    We identify high-impact locations such as luxury hotels, hospitals, airports, tourism destinations, corporate clusters. Each location selected using demand analysis, accessibility mapping, revenue potential modeling, and future urban growth projections.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="tag-pill">Luxury Hotels</span>
                    <span className="tag-pill">Hospitals</span>
                    <span className="tag-pill">Multi-Modal Hubs</span>
                    <span className="tag-pill">Airports</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="glass-card p-6 md:p-8">
              <div className="flex items-start gap-5 flex-wrap md:flex-nowrap">
                <div className="icon-box icon-box-lg shrink-0">
                  <i className="fas fa-balance-scale" />
                </div>
                <div>
                  <h3 className="card-title mb-2">2. Asset-Light + Asset-Heavy Hybrid Model</h3>
                  <p className="text-text-secondary font-body mb-3">
                    Partner-based vertiports (existing rooftops, helipads, private assets) + custom-built vertiports in high-demand zones. Enables faster expansion, lower capital risk, higher network density.
                  </p>
                  <a href="/partner-with-us" className="inline-flex items-center text-brandRed hover:text-brandRedGlow transition font-medium text-sm">
                    Partner with us <i className="fas fa-arrow-right ml-2 text-xs" />
                  </a>
                </div>
              </div>
            </div>
            <div className="glass-card p-6 md:p-8">
              <div className="flex items-start gap-5 flex-wrap md:flex-nowrap">
                <div className="icon-box icon-box-lg shrink-0">
                  <i className="fas fa-cubes" />
                </div>
                <div>
                  <h3 className="card-title mb-2">3. Modular &amp; Scalable Design</h3>
                  <p className="text-text-secondary font-body">
                    Modular architecture, scalable capacity, future expansion capability — quick deployment, adaptability to aircraft evolution, and cost efficiency at its core.
                  </p>
                </div>
              </div>
            </div>
            <div className="glass-card p-6 md:p-8">
              <div className="flex items-start gap-5 flex-wrap md:flex-nowrap">
                <div className="icon-box icon-box-lg shrink-0">
                  <i className="fas fa-brain" />
                </div>
                <div>
                  <h3 className="card-title mb-2">4. AI-Driven Operations</h3>
                  <p className="text-text-secondary font-body mb-3">
                    Every vertiport is powered by intelligent systems: real-time traffic coordination, predictive demand management, automated scheduling, smart energy optimization. Transforming physical infrastructure into digital command centers.
                  </p>
                  <a href="/technology" className="inline-flex items-center text-brandRed hover:text-brandRedGlow transition font-medium text-sm">
                    Explore Technology <i className="fas fa-arrow-right ml-2 text-xs" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* KEY COMPONENTS + INTEGRATION */}
        <div className="grid lg:grid-cols-2 gap-6 mb-20 reveal">
          <div className="glass-card p-8">
            <div className="icon-box icon-box-lg mb-5">
              <i className="fas fa-microchip" />
            </div>
            <h2 className="section-title mb-5">Key Components</h2>
            <div className="space-y-4">
              {[
                { label: 'Flight Infrastructure:', desc: 'Landing/take-off pads, taxiing zones, safety buffers' },
                { label: 'Passenger Infrastructure:', desc: 'Premium lounges, digital check-in, security control' },
                { label: 'Operational Systems:', desc: 'Air traffic coordination, fleet integration, real-time dashboards' },
                { label: 'Energy & Sustainability:', desc: 'Electric charging, battery mgmt, renewable-ready' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brandRed mt-2.5 shrink-0" />
                  <div>
                    <span className="font-heading font-semibold text-textPrimary">{item.label}</span>
                    <span className="text-text-secondary font-body"> {item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-card p-8">
            <div className="icon-box icon-box-lg mb-5">
              <i className="fas fa-plug" />
            </div>
            <h2 className="section-title mb-4">Integration with eVTOL Ecosystem</h2>
            <p className="text-text-secondary font-body mb-6">
              Vertiports are deeply integrated with eVTOL manufacturers, air traffic systems, ground mobility platforms, digital booking &amp; logistics — creating a fully connected aerial mobility ecosystem.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="/evtol-infrastructure" className="tag-pill hover:text-brandRed transition">
                eVTOL Infrastructure <i className="fas fa-arrow-right text-xs ml-1" />
              </a>
              <a href="/ecosystem" className="tag-pill hover:text-brandRed transition">
                Ecosystem Integration <i className="fas fa-arrow-right text-xs ml-1" />
              </a>
            </div>
          </div>
        </div>

        {/* USE CASES */}
        <div className="vertiport-dark-section p-8 md:p-12 mb-20 reveal" style={{ transitionDelay: '0.2s' }}>
          <h2 className="section-title text-center mb-10">Use Cases of Our Vertiport Network</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 text-center">
            {[
              { icon: 'fa-city', title: 'Urban Air Mobility', desc: 'Intra-city travel, hours→minutes' },
              { icon: 'fa-road', title: 'Intercity Connectivity', desc: 'Seamless short-haul routes' },
              { icon: 'fa-truck-medical', title: 'Medical & Emergency', desc: 'Time-critical operations' },
              { icon: 'fa-crown', title: 'Luxury & Premium', desc: 'High-end experiences' },
              { icon: 'fa-umbrella-beach', title: 'Tourism & Hospitality', desc: 'Direct aerial access' },
            ].map((item) => (
              <div key={item.title} className="p-5 rounded-xl bg-surface-card border border-border-subtle hover:border-brandRed/30 transition-all">
                <div className="icon-box icon-box-lg mx-auto mb-3">
                  <i className={`fas ${item.icon}`} />
                </div>
                <p className="font-heading font-semibold text-textPrimary">{item.title}</p>
                <p className="text-sm text-text-secondary mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* REGULATORY + LONG TERM */}
        <div className="grid md:grid-cols-2 gap-6 mb-20 reveal">
          <div className="glass-card p-8">
            <div className="icon-box icon-box-lg mb-5">
              <i className="fas fa-file-contract" />
            </div>
            <h3 className="section-title mb-3">Regulatory Alignment</h3>
            <p className="text-text-secondary font-body">
              We are building in alignment with Indian aviation authorities, emerging UAM policies, and global safety standards. Compliance readiness, policy adaptability, and long-term operational sustainability define our approach.
            </p>
          </div>
          <div className="glass-card p-8">
            <div className="icon-box icon-box-lg mb-5">
              <i className="fas fa-chart-line" />
            </div>
            <h3 className="section-title mb-3">Long-Term Vision</h3>
            <p className="text-text-secondary font-body">
              Vertiports today are infrastructure. Tomorrow they will be revenue-generating digital assets, data intelligence hubs, mobility command networks. MyOnlineJet aims to be the defining infrastructure layer for Advanced Air Mobility in India.
            </p>
          </div>
        </div>

        {/* COLLABORATE CTA */}
        <div className="glass-card p-8 md:p-12 text-center mb-20 reveal border border-brandRed/20" style={{ transitionDelay: '0.1s' }}>
          <div className="icon-box icon-box-lg mx-auto mb-5">
            <i className="fas fa-handshake" />
          </div>
          <h3 className="section-title mb-3">Opportunities to Collaborate</h3>
          <p className="text-text-secondary max-w-2xl mx-auto mb-8 font-body">
            If you own or manage high-potential locations — real estate, hotels, hospitals, infrastructure assets — this is the moment to be part of the network.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/partner-with-us" className="btn-primary">
              <i className="fas fa-building" />
              Become a Partner
            </a>
            <a href="/contact" className="btn-secondary">
              Contact Infrastructure Team
            </a>
          </div>
        </div>

        {/* EARLY ACCESS */}
        <div className="text-center py-6 mb-20 reveal">
          <div className="inline-flex items-center gap-2 bg-surface-elevated px-5 py-2 rounded-full text-sm mb-6 border border-border-subtle">
            <i className="fas fa-bolt text-brandRed" />
            <span className="text-text-secondary">Early Access to the Network</span>
          </div>
          <p className="text-text-secondary max-w-2xl mx-auto mb-8 font-body">
            We are onboarding strategic partners, early adopters, and infrastructure collaborators. Register now for priority updates and exclusive collaboration opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/early-access" className="btn-primary">
              <i className="fas fa-rocket" />
              Join Early Access
            </a>
            <a href="/subscribe" className="btn-secondary">
              <i className="fas fa-bell" />
              Subscribe for Updates
            </a>
          </div>
        </div>

        {/* FINAL POSITIONING */}
        <div className="vertiport-dark-section p-8 md:p-12 text-center reveal">
          <p className="text-2xl md:text-3xl font-heading font-bold mb-2 text-textPrimary">
            Vertiports are not just infrastructure.
          </p>
          <p className="text-xl md:text-2xl font-heading text-text-secondary mb-4">
            They are control points of the future aviation economy.
          </p>
          <p className="text-brandRed font-heading font-semibold text-lg">
            MyOnlineJet is building them with intent, precision, and long-term vision.
          </p>
          <div className="mt-8">
            <a href="/technology" className="text-text-secondary hover:text-textPrimary transition border-b border-text-muted hover:border-textPrimary pb-1 font-body inline-flex items-center gap-1.5">
              Explore how technology powers our vertiports <i className="fas fa-arrow-right text-xs" />
            </a>
          </div>
        </div>

      </div>
    </div>

    <style dangerouslySetInnerHTML={{ __html: pageCss }} />

    <VertiportClient />
    </>
  )
}

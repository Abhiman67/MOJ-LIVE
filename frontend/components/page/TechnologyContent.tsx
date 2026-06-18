'use client'

import { useEffect } from 'react'

const pageStyles = `
  /* ─── ROOT & BASE ─── */
  :root {
    --surface: #0A0A0A;
    --elevated: #111111;
    --card: #141414;
    --hover: #1A1A1A;
    --text-primary: #FAFAFA;
    --text-secondary: #A1A1AA;
    --text-muted: #52525B;
    --border-subtle: #1F1F1F;
    --border-medium: #2A2A2A;
    --brand-red: #FF2D2D;
    --brand-red-glow: #FF4444;
    --success: #22C55E;
  }

  .noise-overlay {
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    pointer-events: none;
    z-index: 9999;
    opacity: 0.03;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  }

  .glow-orb {
    position: fixed;
    border-radius: 50%;
    pointer-events: none;
    z-index: 0;
    filter: blur(120px);
  }
  .glow-orb-1 {
    width: 500px; height: 500px;
    background: radial-gradient(circle, rgba(255,45,45,0.08), transparent 70%);
    top: -10%; right: -10%;
  }
  .glow-orb-2 {
    width: 400px; height: 400px;
    background: radial-gradient(circle, rgba(255,45,45,0.06), transparent 70%);
    bottom: 10%; left: -10%;
  }
  .glow-orb-3 {
    width: 300px; height: 300px;
    background: radial-gradient(circle, rgba(255,45,45,0.04), transparent 70%);
    top: 40%; left: 50%;
    transform: translateX(-50%);
  }

  .grid-pattern {
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background-image:
      linear-gradient(rgba(255,45,45,0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,45,45,0.03) 1px, transparent 1px);
    background-size: 60px 60px;
    pointer-events: none;
    z-index: 1;
  }

  .hero-title {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 1.1;
    font-size: clamp(2.5rem, 5vw, 4.5rem);
  }

  .section-title {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 1.2;
    font-size: clamp(1.8rem, 3vw, 2.8rem);
  }

  .card-title {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 700;
    font-size: 1.25rem;
    letter-spacing: -0.01em;
  }

  .glass-card {
    background: rgba(20, 20, 20, 0.6);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid var(--border-subtle);
    border-radius: 16px;
    transition: all 0.4s cubic-bezier(0.2, 0, 0, 1);
  }
  .glass-card:hover {
    border-color: rgba(255, 45, 45, 0.3);
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(255, 45, 45, 0.08), 0 0 0 1px rgba(255, 45, 45, 0.1);
  }

  .solid-card {
    background: var(--card);
    border: 1px solid var(--border-subtle);
    border-radius: 16px;
    transition: all 0.4s cubic-bezier(0.2, 0, 0, 1);
  }
  .solid-card:hover {
    border-color: rgba(255, 45, 45, 0.3);
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(255, 45, 45, 0.08);
  }

  .badge {
    display: inline-block;
    background: rgba(255, 45, 45, 0.1);
    color: var(--brand-red);
    padding: 6px 16px;
    border-radius: 9999px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-family: 'Inter', sans-serif;
  }

  .icon-box {
    width: 48px; height: 48px;
    display: flex; align-items: center; justify-content: center;
    background: rgba(255, 45, 45, 0.1);
    border-radius: 12px;
    color: var(--brand-red);
    font-size: 1.25rem;
    flex-shrink: 0;
  }
  .icon-box-lg {
    width: 64px; height: 64px;
    font-size: 1.5rem;
  }

  .stat-card {
    background: var(--elevated);
    border: 1px solid var(--border-subtle);
    border-radius: 16px;
    padding: 1.5rem;
    text-align: center;
    transition: all 0.3s ease;
  }
  .stat-card:hover {
    border-color: rgba(255, 45, 45, 0.2);
  }

  .pillar-card {
    border-left: 3px solid var(--brand-red);
  }

  .quote-block {
    background: var(--elevated);
    border: 1px solid var(--border-subtle);
    border-radius: 16px;
  }

  .dark-section {
    background: var(--elevated);
    border: 1px solid var(--border-subtle);
    border-radius: 24px;
  }

  .eco-tag {
    background: var(--card);
    border: 1px solid var(--border-subtle);
    color: var(--text-secondary);
    padding: 8px 20px;
    border-radius: 9999px;
    font-size: 0.875rem;
    transition: all 0.2s ease;
  }
  .eco-tag:hover {
    border-color: var(--brand-red);
    color: var(--brand-red);
  }

  .link-red {
    color: var(--brand-red);
    transition: opacity 0.2s ease;
  }
  .link-red:hover { opacity: 0.8; }

  .btn-primary {
    background: var(--brand-red);
    color: white;
    padding: 14px 36px;
    border-radius: 8px;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
    transition: all 0.3s ease;
    display: inline-block;
    position: relative;
    overflow: hidden;
    border: none;
    cursor: pointer;
  }
  .btn-primary::after {
    content: '';
    position: absolute;
    top: 0; left: -100%;
    width: 100%; height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s ease;
  }
  .btn-primary:hover::after { left: 100%; }
  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 30px rgba(255, 45, 45, 0.4);
  }

  .btn-secondary {
    background: transparent;
    color: var(--text-primary);
    border: 1px solid var(--border-medium);
    padding: 14px 36px;
    border-radius: 8px;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
    transition: all 0.3s ease;
    display: inline-block;
    cursor: pointer;
  }
  .btn-secondary:hover {
    border-color: var(--brand-red);
    color: var(--brand-red);
    transform: translateY(-2px);
  }

  .reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }
  .reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    .hero-title { font-size: clamp(2rem, 8vw, 2.5rem); }
    .section-title { font-size: clamp(1.5rem, 6vw, 1.8rem); }
  }
  @media (max-width: 480px) {
    .hero-title { font-size: clamp(1.6rem, 8vw, 2rem); }
    .section-title { font-size: clamp(1.2rem, 5vw, 1.5rem); }
    .glass-card, .solid-card { padding: 1rem !important; border-radius: 12px; }
    .icon-box-lg { width: 48px; height: 48px; }
    .stat-card { padding: 1rem; }
  }
  @media (max-width: 380px) {
    .hero-title { font-size: clamp(1.3rem, 7vw, 1.6rem); }
    .section-title { font-size: clamp(1rem, 4.5vw, 1.2rem); }
    .glass-card, .solid-card { padding: 0.75rem !important; border-radius: 10px; }
    .icon-box { width: 32px; height: 32px; font-size: 14px; border-radius: 8px; }
    .icon-box-lg { width: 40px; height: 40px; }
    .stat-card { padding: 0.75rem; }
    .eco-tag { padding: 4px 12px; font-size: 0.7rem; }
  }
`

export function TechnologyContent() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal')
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          revealObserver.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })
    revealElements.forEach(el => revealObserver.observe(el))
    return () => revealObserver.disconnect()
  }, [])

  return (
    <>
      <style>{pageStyles}</style>

      <div className="noise-overlay" />
      <div className="glow-orb glow-orb-1" />
      <div className="glow-orb glow-orb-2" />
      <div className="glow-orb glow-orb-3" />
      <div className="grid-pattern" />

      <div className="relative z-10 pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">

          {/* Hero Section */}
          <div className="text-center mb-20 reveal">
            <div className="badge mb-6">Technology Platform</div>
            <h1 className="hero-title mb-6">
              Powering the <span className="text-brandRed">Intelligence Layer</span><br />
              of Advanced Air Mobility
            </h1>
            <p className="text-xl text-textSecondary max-w-3xl mx-auto leading-relaxed">
              MyOnlineJet is building the real-time, adaptive system that orchestrates vertiports, aircraft, partners, and cities into a seamless aerial mobility ecosystem. Not incremental, foundational.
            </p>
          </div>

          {/* Unified Architecture Section */}
          <div className="glass-card p-8 md:p-12 mb-20 reveal">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="section-title text-textPrimary mb-4">A Unified Technology Architecture</h2>
                <p className="text-textSecondary mb-6 leading-relaxed">
                  Our platform is designed as a multi-layered, intelligent system enabling seamless coordination across the entire mobility network from vertiport readiness to real-time fleet orchestration.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <div className="icon-box"><i className="fas fa-microchip" /></div>
                    <span className="text-textPrimary">Real-time operational awareness</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="icon-box"><i className="fas fa-charging-station" /></div>
                    <span className="text-textPrimary">Infrastructure readiness &amp; predictive analytics</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="icon-box"><i className="fas fa-link" /></div>
                    <span className="text-textPrimary">Aircraft + partner ecosystem connectivity</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="icon-box"><i className="fas fa-user-check" /></div>
                    <span className="text-textPrimary">Unified user experience &amp; access layer</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <a href="/advanced-air-mobility" className="link-red font-semibold inline-flex items-center gap-2">
                    Explore AAM ecosystem <i className="fas fa-arrow-right text-sm" />
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="stat-card">
                  <div className="icon-box icon-box-lg mx-auto mb-3"><i className="fas fa-chart-line" /></div>
                  <p className="font-heading font-bold text-2xl text-textPrimary">&lt;50ms</p>
                  <p className="text-sm text-textMuted mt-1">Latency for decisions</p>
                </div>
                <div className="stat-card">
                  <div className="icon-box icon-box-lg mx-auto mb-3"><i className="fas fa-cloud-upload-alt" /></div>
                  <p className="font-heading font-bold text-2xl text-textPrimary">99.99%</p>
                  <p className="text-sm text-textMuted mt-1">Target uptime</p>
                </div>
                <div className="stat-card">
                  <div className="icon-box icon-box-lg mx-auto mb-3"><i className="fas fa-network-wired" /></div>
                  <p className="font-heading font-bold text-2xl text-textPrimary">&infin;</p>
                  <p className="text-sm text-textMuted mt-1">Multi-operator scale</p>
                </div>
                <div className="stat-card">
                  <div className="icon-box icon-box-lg mx-auto mb-3"><i className="fas fa-shield-alt" /></div>
                  <p className="font-heading font-bold text-2xl text-textPrimary">ISO 27001</p>
                  <p className="text-sm text-textMuted mt-1">Being Security ready</p>
                </div>
              </div>
            </div>
          </div>

          {/* Real Time Intelligence */}
          <div className="glass-card p-8 md:p-12 mb-20 reveal">
            <div className="flex flex-wrap gap-8 items-start">
              <div className="flex-1 min-w-[280px]">
                <div className="icon-box icon-box-lg mb-5"><i className="fas fa-brain" /></div>
                <h3 className="section-title text-textPrimary mb-4">Real-Time Intelligence &amp; Decision Systems</h3>
                <p className="text-textSecondary leading-relaxed mb-6">
                  Urban air mobility environments are highly dynamic: demand, weather, infrastructure availability, and airspace constraints shift constantly. MyOnlineJet is built to operate in this reality with adaptive systems that react in milliseconds.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="icon-box"><i className="fas fa-check-circle text-sm" /></div>
                    <span className="text-textPrimary text-sm">Smarter routing &amp; scheduling</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="icon-box"><i className="fas fa-check-circle text-sm" /></div>
                    <span className="text-textPrimary text-sm">Efficient infrastructure utilization</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="icon-box"><i className="fas fa-check-circle text-sm" /></div>
                    <span className="text-textPrimary text-sm">Cross-stakeholder coordination</span>
                  </div>
                </div>
              </div>
              <div className="flex-1 min-w-[280px] quote-block p-6">
                <p className="italic text-textSecondary leading-relaxed">
                  &ldquo;We don&apos;t just process data, we enable adaptive orchestration across vertiports, fleets and airspace, creating a truly responsive mobility network.&rdquo;
                </p>
                <p className="text-sm font-semibold text-textPrimary mt-4">&mdash; MyOnlineJet Engineering</p>
              </div>
            </div>
          </div>

          {/* Vertiport & Infrastructure Enablement */}
          <div className="grid md:grid-cols-2 gap-6 mb-20 reveal">
            <div className="solid-card p-8">
              <div className="icon-box icon-box-lg mb-4"><i className="fas fa-tower-broadcast" /></div>
              <h3 className="card-title text-textPrimary mb-3">Vertiport &amp; Infrastructure Enablement</h3>
              <p className="text-textSecondary leading-relaxed mb-5">
                We transform vertiports into intelligent, connected nodes. Our tech enables coordinated operations across locations, optimal utilization, and integration with urban environments.
              </p>
              <a href="/vertiports" className="link-red font-medium inline-flex items-center gap-2">
                Learn about vertiports <i className="fas fa-arrow-right text-sm" />
              </a>
            </div>
            <div className="solid-card p-8">
              <div className="icon-box icon-box-lg mb-4"><i className="fas fa-jet-fighter-up" /></div>
              <h3 className="card-title text-textPrimary mb-3">Aircraft &amp; Network Integration</h3>
              <p className="text-textSecondary leading-relaxed mb-5">
                Multi-type, multi-operator future demands interoperability. MyOnlineJet enables scalable fleet ops, cross-network coordination, and continuous visibility across heterogeneous eVTOL ecosystems.
              </p>
              <a href="/evtol-infrastructure" className="link-red font-medium inline-flex items-center gap-2">
                eVTOL infrastructure <i className="fas fa-arrow-right text-sm" />
              </a>
            </div>
          </div>

          {/* Ecosystem Connectivity */}
          <div className="glass-card p-8 md:p-12 mb-20 reveal">
            <div className="text-center max-w-3xl mx-auto">
              <div className="icon-box icon-box-lg mx-auto mb-5"><i className="fas fa-globe-americas" /></div>
              <h2 className="section-title text-textPrimary mb-4">Ecosystem Connectivity &ndash; Beyond Aviation</h2>
              <p className="text-textSecondary leading-relaxed mb-8">
                AAM intersects with hospitality, healthcare, tourism, logistics, and urban infrastructure. MyOnlineJet enables partners to integrate seamlessly into a larger mobility ecosystem, driving network expansion and new economic opportunities.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <span className="eco-tag">🏨 Hospitality</span>
                <span className="eco-tag">🏥 Healthcare</span>
                <span className="eco-tag">✈️ Tourism</span>
                <span className="eco-tag">📦 Logistics</span>
                <span className="eco-tag">🏙️ Urban infra</span>
              </div>
              <a href="/partner-with-us" className="btn-secondary text-sm">Become a partner &rarr;</a>
            </div>
          </div>

          {/* User Experience & Scale */}
          <div className="grid md:grid-cols-3 gap-6 mb-20 reveal">
            <div className="solid-card p-6 text-center">
              <div className="icon-box icon-box-lg mx-auto mb-4"><i className="fas fa-mobile-alt" /></div>
              <h4 className="card-title text-textPrimary mb-2">User Experience Layer</h4>
              <p className="text-textMuted text-sm leading-relaxed">
                Complex system, simple interface. Real-time updates, personalized journey flows, effortless access.
              </p>
              <a href="/early-access" className="link-red text-sm font-semibold inline-block mt-4">Early access &rarr;</a>
            </div>
            <div className="solid-card p-6 text-center">
              <div className="icon-box icon-box-lg mx-auto mb-4"><i className="fas fa-chart-simple" /></div>
              <h4 className="card-title text-textPrimary mb-2">Built for Scale</h4>
              <p className="text-textMuted text-sm leading-relaxed">
                Multi-city, high-density ops, global expansion ready. Designed to evolve with industry complexity.
              </p>
            </div>
            <div className="solid-card p-6 text-center">
              <div className="icon-box icon-box-lg mx-auto mb-4"><i className="fas fa-shield-halved" /></div>
              <h4 className="card-title text-textPrimary mb-2">Safety &amp; Reliability</h4>
              <p className="text-textMuted text-sm leading-relaxed">
                Operational reliability, system transparency, alignment with DGCA &amp; global standards. Trust is non-negotiable.
              </p>
            </div>
          </div>

          {/* Why This Matters Section */}
          <div className="dark-section p-10 md:p-14 mb-20 reveal">
            <div className="max-w-3xl mx-auto text-center">
              <div className="icon-box icon-box-lg mx-auto mb-5"><i className="fas fa-quote-left text-xl" /></div>
              <h2 className="section-title text-textPrimary mb-5">Why This Matters</h2>
              <p className="text-textSecondary text-lg leading-relaxed mb-8">
                The future of air mobility will not be defined by individual assets &mdash; but by how effectively the entire system is coordinated. MyOnlineJet is building the coordination layer where infrastructure becomes intelligent, operations seamless, and mobility truly on-demand.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/ecosystem" className="btn-primary text-sm">Explore ecosystem integration</a>
                <a href="/services" className="btn-secondary text-sm">View services</a>
              </div>
            </div>
          </div>

          {/* Tech Architecture Pillars */}
          <div className="mb-20 reveal">
            <h2 className="section-title text-center text-textPrimary mb-10">Platform Pillars</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="solid-card p-6 pillar-card">
                <div className="icon-box mb-4"><i className="fas fa-diagram-project" /></div>
                <h3 className="card-title text-textPrimary mb-2">Orchestration Engine</h3>
                <p className="text-textMuted text-sm leading-relaxed">
                  Real-time task allocation, airspace deconfliction, and predictive resource management.
                </p>
              </div>
              <div className="solid-card p-6 pillar-card">
                <div className="icon-box mb-4"><i className="fas fa-database" /></div>
                <h3 className="card-title text-textPrimary mb-2">Infrastructure OS</h3>
                <p className="text-textMuted text-sm leading-relaxed">
                  Digital twin of vertiports, energy systems, and ground assets for optimal uptime.
                </p>
              </div>
              <div className="solid-card p-6 pillar-card">
                <div className="icon-box mb-4"><i className="fas fa-handshake" /></div>
                <h3 className="card-title text-textPrimary mb-2">Partner Mesh</h3>
                <p className="text-textMuted text-sm leading-relaxed">
                  API-first integration layer allowing any operator, city, or service to connect instantly.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Deep Dive */}
          <div className="border-t border-borderSubtle pt-12 mt-6 text-center reveal">
            <p className="text-textSecondary mb-6 max-w-2xl mx-auto">
              Our technology is not an add-on, it is the central nervous system for advanced air mobility in India and beyond.
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm">
              <a href="/advanced-air-mobility" className="link-red hover:underline">Advanced Air Mobility</a>
              <a href="/vertiports" className="link-red hover:underline">Vertiports</a>
              <a href="/evtol-infrastructure" className="link-red hover:underline">eVTOL Infrastructure</a>
              <a href="/ecosystem" className="link-red hover:underline">Ecosystem Integration</a>
              <a href="/partner-with-us" className="link-red hover:underline">Partner With Us</a>
              <a href="/early-access" className="link-red hover:underline">Early Access</a>
              <a href="/subscribe" className="link-red hover:underline">Subscribe</a>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

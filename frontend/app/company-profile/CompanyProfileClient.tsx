'use client'

import Link from 'next/link'
import { useEffect } from 'react'

const styles = `
  :root {
    --bg-surface: #0A0A0A;
    --bg-elevated: #111111;
    --bg-card: #141414;
    --bg-hover: #1A1A1A;
    --text-primary: #FAFAFA;
    --text-secondary: #A1A1AA;
    --text-muted: #52525B;
    --border-subtle: #1F1F1F;
    --border-medium: #2A2A2A;
    --brand-red: #C50000;
    --brand-red-glow: #C50000;
    --brand-success: #22C55E;
  }

  .hero-title {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 700;
    letter-spacing: -0.03em;
    line-height: 1.1;
    font-size: clamp(2.5rem, 5vw, 4.5rem);
  }
  .section-title {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 700;
    letter-spacing: -0.02em;
    font-size: clamp(1.8rem, 3vw, 2.8rem);
    line-height: 1.2;
  }
  .card-title {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 700;
    font-size: 1.25rem;
    letter-spacing: -0.01em;
  }

  .badge {
    display: inline-block;
    background: rgba(197, 0, 0, 0.1);
    color: var(--brand-red);
    padding: 6px 16px;
    border-radius: 9999px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .icon-box {
    width: 48px; height: 48px;
    background: rgba(197, 0, 0, 0.1);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .icon-box i {
    color: var(--brand-red);
    font-size: 1.25rem;
  }

  .glass-card {
    background: rgba(20, 20, 20, 0.6);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid var(--border-subtle);
    border-radius: 16px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .glass-card:hover {
    border-color: rgba(197, 0, 0, 0.3);
    transform: translateY(-2px);
    box-shadow: 0 0 40px rgba(197, 0, 0, 0.08), 0 8px 32px rgba(0,0,0,0.4);
  }

  .btn-primary {
    background: var(--brand-red);
    color: #fff;
    border: none;
    padding: 14px 36px;
    border-radius: 8px;
    font-weight: 600;
    font-size: 15px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-block;
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  .btn-primary::after {
    content: '';
    position: absolute;
    top: 0; left: -100%;
    width: 100%; height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s ease;
  }
  .btn-primary:hover::after {
    left: 100%;
  }
  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 30px rgba(197, 0, 0, 0.3);
  }
  .btn-secondary {
    background: transparent;
    color: var(--text-primary);
    border: 1px solid var(--border-medium);
    padding: 13px 35px;
    border-radius: 8px;
    font-weight: 600;
    font-size: 15px;
    transition: all 0.3s ease;
    display: inline-block;
  }
  .btn-secondary:hover {
    border-color: rgba(197, 0, 0, 0.4);
    background: rgba(197, 0, 0, 0.05);
    transform: translateY(-2px);
  }

  .stat-number {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 700;
    font-size: 3rem;
    line-height: 1;
    color: var(--brand-red);
    letter-spacing: -0.02em;
  }

  .quote-section {
    background: var(--bg-elevated);
    border: 1px solid var(--border-subtle);
    border-radius: 24px;
    position: relative;
    overflow: hidden;
  }
  .quote-section::before {
    content: '';
    position: absolute;
    top: -50%; left: -50%;
    width: 200%; height: 200%;
    background: radial-gradient(circle, rgba(197,0,0,0.05) 0%, transparent 60%);
    pointer-events: none;
  }

  .reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease;
  }
  .reveal.active {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    .hero-title { font-size: clamp(2rem, 8vw, 2.5rem); }
    .section-title { font-size: clamp(1.5rem, 5vw, 1.8rem); }
    .stat-number { font-size: 2.5rem; }
    .glass-card { padding: 1.25rem !important; }
  }
  @media (max-width: 480px) {
    .hero-title { font-size: clamp(1.6rem, 8vw, 2rem); }
    .section-title { font-size: clamp(1.2rem, 5vw, 1.5rem); }
    .stat-number { font-size: 2rem; }
    .glass-card { padding: 1rem !important; border-radius: 12px; }
    .icon-box { width: 40px; height: 40px; font-size: 1rem; }
  }
  @media (max-width: 380px) {
    .hero-title { font-size: clamp(1.3rem, 7vw, 1.6rem); }
    .section-title { font-size: clamp(1rem, 4.5vw, 1.2rem); }
    .stat-number { font-size: 1.6rem; }
    .glass-card { padding: 0.75rem !important; border-radius: 10px; }
    .icon-box { width: 32px; height: 32px; font-size: 14px; border-radius: 8px; }
    .card-title { font-size: 1rem; }
  }
`

export function CompanyProfileClient() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal')
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
          revealObserver.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })
    revealElements.forEach(el => revealObserver.observe(el))
    return () => revealObserver.disconnect()
  }, [])

  return (
    <>
      <style>{styles}</style>

      <div className="pt-32 pb-20 relative z-10">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">

          {/* Breadcrumb */}
          <div className="text-sm text-text-muted mb-8 flex gap-2 items-center flex-wrap reveal">
            <Link href="/" className="hover:text-brand-red transition-colors">Home</Link>
            <i className="fas fa-chevron-right text-xs text-text-muted"></i>
            <span className="text-brand-red font-medium">Company Profile</span>
          </div>

          {/* Hero */}
          <div className="text-center mb-20 reveal">
            <div className="badge mb-8">Defining the Infrastructure Layer</div>
            <h1 className="hero-title mb-8">
              Company Profile<br />
              <span className="text-brand-red">The Core of Advanced Air Mobility</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              MyOnlineJet is a next-generation aviation infrastructure and technology company focused on building the foundational layer for Advanced Air Mobility in India and beyond.
            </p>
          </div>

          {/* Core identity */}
          <div className="glass-card p-8 md:p-12 mb-20 reveal">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="section-title text-text-primary mb-4">We are not an operator.</h2>
                <h2 className="section-title text-brand-red mb-6">We are not just a platform.</h2>
                <p className="text-text-secondary text-lg leading-relaxed">
                  We are building the core <strong className="text-text-primary">infrastructure, intelligence, and ecosystem</strong> that will enable aerial mobility to scale from concept to everyday reality.
                </p>
                <div className="mt-8 flex gap-4 flex-wrap">
                  <Link href="/vertiports" className="btn-primary text-sm px-6 py-3">Explore Vertiport Network</Link>
                  <Link href="/technology" className="btn-secondary text-sm px-6 py-3">AI-Driven Intelligence</Link>
                </div>
              </div>
              <div className="bg-surface/50 p-6 rounded-2xl border border-border-subtle">
                <div className="flex flex-col space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="icon-box"><i className="fas fa-chart-line"></i></div>
                    <div>
                      <p className="font-semibold text-text-primary">Vertiport Infrastructure Planning & Deployment</p>
                      <p className="text-sm text-text-muted">Strategic placement, regulatory alignment, future-ready nodes</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="icon-box"><i className="fas fa-rocket"></i></div>
                    <div>
                      <p className="font-semibold text-text-primary">eVTOL Ecosystem Integration</p>
                      <p className="text-sm text-text-muted">Charging, maintenance, operational workflows</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="icon-box"><i className="fas fa-handshake"></i></div>
                    <div>
                      <p className="font-semibold text-text-primary">Strategic Global Partnerships</p>
                      <p className="text-sm text-text-muted">Aligning with aviation leaders, tech innovators, policymakers</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="icon-box"><i className="fas fa-brain"></i></div>
                    <div>
                      <p className="font-semibold text-text-primary">AI-Driven Network Optimization</p>
                      <p className="text-sm text-text-muted">Real-time orchestration, predictive demand, intelligent routing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Pillars */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-20 reveal">
            <div className="glass-card p-5 sm:p-6 text-center">
              <div className="icon-box mx-auto mb-4"><i className="fas fa-building"></i></div>
              <h3 className="card-title text-text-primary mb-2">Vertiport Infrastructure</h3>
              <p className="text-sm text-text-muted mb-4">Strategic network across urban hubs, airports, medical zones</p>
              <Link href="/vertiports" className="text-brand-red text-sm font-semibold hover:underline">Learn more →</Link>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="icon-box mx-auto mb-4"><i className="fas fa-microchip"></i></div>
              <h3 className="card-title text-text-primary mb-2">eVTOL Ecosystem Integration</h3>
              <p className="text-sm text-text-muted mb-4">Seamless aircraft to infrastructure alignment</p>
              <Link href="/evtol-infrastructure" className="text-brand-red text-sm font-semibold hover:underline">Discover →</Link>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="icon-box mx-auto mb-4"><i className="fas fa-globe"></i></div>
              <h3 className="card-title text-text-primary mb-2">Strategic Partnerships</h3>
              <p className="text-sm text-text-muted mb-4">Global alliances that accelerate AAM</p>
              <Link href="/partners" className="text-brand-red text-sm font-semibold hover:underline">Collaborate →</Link>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="icon-box mx-auto mb-4"><i className="fas fa-chart-simple"></i></div>
              <h3 className="card-title text-text-primary mb-2">AI-Driven Network Optimization</h3>
              <p className="text-sm text-text-muted mb-4">Intelligence as the operating system</p>
              <Link href="/technology" className="text-brand-red text-sm font-semibold hover:underline">Explore tech →</Link>
            </div>
          </div>

          {/* Philosophy Quote */}
          <div className="quote-section p-10 md:p-16 mb-20 reveal">
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <i className="fas fa-quote-left text-5xl text-brand-red/40 mb-6"></i>
              <p className="text-2xl font-light leading-relaxed text-text-primary mb-6">
                Most companies in this space are chasing the aircraft. We are building the runways, the control towers, the intelligence, and the trust layer that makes the entire ecosystem possible.
              </p>
              <div className="h-px w-20 bg-brand-red/40 mx-auto mb-4"></div>
              <p className="text-text-secondary text-sm tracking-wide uppercase">— MyOnlineJet Core Philosophy</p>
            </div>
          </div>

          {/* Institutional Capabilities */}
          <div className="glass-card p-8 md:p-10 mb-20 reveal">
            <h2 className="section-title text-center text-text-primary mb-10">Our Institutional Capabilities</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="card-title text-text-primary flex items-center gap-3 mb-3">
                  <div className="icon-box"><i className="fas fa-hard-hat"></i></div>
                  Infrastructure Engineering
                </h3>
                <p className="text-text-muted leading-relaxed">End-to-end vertiport lifecycle: site selection, design, regulatory navigation, construction oversight, and operational handover.</p>
              </div>
              <div>
                <h3 className="card-title text-text-primary flex items-center gap-3 mb-3">
                  <div className="icon-box"><i className="fas fa-chart-line"></i></div>
                  Ecosystem Orchestration
                </h3>
                <p className="text-text-muted leading-relaxed">Multi-stakeholder alignment: aircraft OEMs, energy providers, city planners, and service operators.</p>
              </div>
              <div>
                <h3 className="card-title text-text-primary flex items-center gap-3 mb-3">
                  <div className="icon-box"><i className="fas fa-database"></i></div>
                  Digital Intelligence Layer
                </h3>
                <p className="text-text-muted leading-relaxed">Proprietary algorithms for demand forecasting, vertiport utilization, dynamic pricing, and network resilience.</p>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-20 text-center reveal">
            <div className="glass-card p-5 sm:p-6">
              <div className="stat-number mb-2">2023</div>
              <div className="text-sm font-medium uppercase tracking-wide text-text-secondary">Founded</div>
              <div className="text-xs text-text-muted mt-1">With first-principles approach</div>
            </div>
            <div className="glass-card p-5 sm:p-6">
              <div className="stat-number mb-2">1</div>
              <div className="text-sm font-medium uppercase tracking-wide text-text-secondary">Strategic Vertiport Sites</div>
              <div className="text-xs text-text-muted mt-1">Under active development</div>
            </div>
            <div className="glass-card p-5 sm:p-6">
              <div className="stat-number mb-2">5</div>
              <div className="text-sm font-medium uppercase tracking-wide text-text-secondary">Global OEM Partners</div>
              <div className="text-xs text-text-muted mt-1">eVTOL integration agreements</div>
            </div>
            <div className="glass-card p-5 sm:p-6">
              <div className="stat-number mb-2">100+</div>
              <div className="text-sm font-medium uppercase tracking-wide text-text-secondary">Ecosystem Stakeholders</div>
              <div className="text-xs text-text-muted mt-1">Engaged across India</div>
            </div>
          </div>

          {/* Governance & Advisory */}
          <div className="glass-card p-8 md:p-10 mb-20 reveal">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="flex-1">
                <div className="icon-box mb-4"><i className="fas fa-shield-alt text-xl"></i></div>
                <h3 className="section-title text-text-primary mb-3">Governance & Trust</h3>
                <p className="text-text-secondary leading-relaxed">Operational transparency, regulatory-first engineering, safety case development, and long-term institutional relationships define our corporate DNA. We are aligned with DGCA and international safety frameworks.</p>
                <Link href="/about-us" className="inline-block mt-4 text-brand-red font-semibold hover:underline">Read our commitment →</Link>
              </div>
              <div className="flex-1">
                <div className="icon-box mb-4"><i className="fas fa-chalkboard-user text-xl"></i></div>
                <h3 className="section-title text-text-primary mb-3">Advisory & Council</h3>
                <p className="text-text-secondary leading-relaxed">Our advisory brings decades of aviation, infrastructure, and policy experience. We combine domain depth with technological velocity.</p>
                <Link href="/founder" className="inline-block mt-4 text-brand-red font-semibold hover:underline">Meet our leaders →</Link>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center py-10 mb-12 reveal">
            <h2 className="section-title text-text-primary mb-4">Partner with the Infrastructure Layer</h2>
            <p className="text-text-secondary max-w-2xl mx-auto mb-8 leading-relaxed">MyOnlineJet is actively collaborating with investors, technology partners, and infrastructure developers who share our long-term, systemic vision.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/partner-with-us" className="btn-primary">Become a Partner</Link>
              <Link href="/investors" className="btn-secondary">Investor Relations</Link>
            </div>
          </div>

          {/* Related content interlinks */}
          <div className="border-t border-border-subtle pt-10 mt-6 reveal">
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <Link href="/advanced-air-mobility" className="font-semibold text-brand-red hover:underline">Advanced Air Mobility →</Link>
                <p className="text-text-muted mt-1">Understanding the AAM ecosystem and how we fit</p>
              </div>
              <div>
                <Link href="/vertiports" className="font-semibold text-brand-red hover:underline">Vertiport Infrastructure →</Link>
                <p className="text-text-muted mt-1">Explore our network design and deployment strategy</p>
              </div>
              <div>
                <Link href="/technology" className="font-semibold text-brand-red hover:underline">AI-Driven Network →</Link>
                <p className="text-text-muted mt-1">Discover the intelligence behind the infrastructure</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

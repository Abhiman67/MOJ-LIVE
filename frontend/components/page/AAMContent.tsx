'use client'

import Link from 'next/link'
import { useEffect } from 'react'

const styles = `
  .glow-orb {
    position: fixed;
    border-radius: 50%;
    filter: blur(120px);
    pointer-events: none;
    z-index: 0;
  }
  .glow-orb-1 {
    width: 400px;
    height: 400px;
    background: rgba(255, 45, 45, 0.08);
    top: -100px;
    right: -100px;
  }
  .glow-orb-2 {
    width: 300px;
    height: 300px;
    background: rgba(255, 45, 45, 0.06);
    bottom: 20%;
    left: -100px;
  }
  .glow-orb-3 {
    width: 250px;
    height: 250px;
    background: rgba(255, 45, 45, 0.05);
    top: 50%;
    right: 10%;
  }
  .font-heading {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 700;
    letter-spacing: -0.02em;
  }
  .font-heading-tight {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 700;
    letter-spacing: -0.03em;
  }
  .heading-primary {
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
  .badge-pill {
    background: rgba(255, 45, 45, 0.1);
    color: #FF2D2D;
    border-radius: 100px;
    padding: 0.4rem 1rem;
    font-weight: 600;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    display: inline-block;
  }
  .icon-box {
    width: 48px;
    height: 48px;
    background: rgba(255, 45, 45, 0.1);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FF2D2D;
    font-size: 1.25rem;
    flex-shrink: 0;
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
    .heading-primary { font-size: clamp(2rem, 8vw, 3rem); }
    .section-title { font-size: clamp(1.5rem, 5vw, 2rem); }
    .glass-card { padding: 1.25rem !important; }
  }
  @media (max-width: 480px) {
    .heading-primary { font-size: clamp(1.6rem, 8vw, 2rem); }
    .section-title { font-size: clamp(1.2rem, 5vw, 1.5rem); }
    .glass-card { padding: 1rem !important; border-radius: 12px; }
    .icon-box { width: 40px; height: 40px; }
  }
`

export function AAMContent() {
  useEffect(() => {
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    }, observerOptions)
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style>{styles}</style>

      {/* Ambient glow orbs */}
      <div className="glow-orb glow-orb-1" />
      <div className="glow-orb glow-orb-2" />
      <div className="glow-orb glow-orb-3" />

      {/* Grid background */}
      <div className="grid-bg" />

      {/* Noise overlay */}
      <div className="noise-overlay" />

      <main className="pt-32 pb-20 relative z-10">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">

          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mb-20 reveal">
            <div className="badge-pill mb-6">The Next Mobility Layer</div>
            <h1 className="heading-primary mb-6">
              Advanced Air Mobility <br />
              <span className="text-[#FF2D2D]">Redefining Movement. Engineering the Next Layer of Civilization.</span>
            </h1>
            <p className="text-xl text-[#A1A1AA] max-w-3xl mx-auto">
              Advanced Air Mobility is not an upgrade to aviation. It is the emergence of an entirely new mobility layer above the roads, beyond congestion, independent of legacy constraints. At MyOnlineJet, we are designing, structuring, and enabling it at scale.
            </p>
          </div>

          {/* Definition + Core Philosophy */}
          <div className="glass-card p-8 md:p-12 mb-20 reveal">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <span className="badge-pill mb-4">Defining AAM</span>
                <h2 className="section-title mt-4 mb-5">What is Advanced Air Mobility?</h2>
                <p className="text-[#A1A1AA] mb-4">Advanced Air Mobility (AAM) integrates next-generation electric aircraft, primarily eVTOL into urban, regional, and intercity networks. But most conversations limit AAM to aircraft innovation. That is incomplete.</p>
                <p className="text-[#FAFAFA] font-medium">At MyOnlineJet, we define AAM as:</p>
                <p className="text-[#A1A1AA] bg-[#111111] p-4 rounded-xl mt-2 italic border-l-4 border-[#FF2D2D]">A fully integrated mobility ecosystem combining eVTOL aircraft, vertiport infrastructure, airspace intelligence, AI orchestration, and multi-sector connectivity.</p>
                <div className="mt-5 space-y-2 text-sm text-[#A1A1AA]">
                  <span className="inline-flex items-center gap-2 mr-4"><i className="fas fa-check-circle text-[#FF2D2D]" /> Urban air taxis</span>
                  <span className="inline-flex items-center gap-2 mr-4"><i className="fas fa-check-circle text-[#FF2D2D]" /> Intercity corridors</span>
                  <span className="inline-flex items-center gap-2 mr-4"><i className="fas fa-check-circle text-[#FF2D2D]" /> Medical logistics</span>
                  <span className="inline-flex items-center gap-2"><i className="fas fa-check-circle text-[#FF2D2D]" /> Tourism &amp; premium mobility</span>
                </div>
              </div>
              <div className="bg-[#111111] rounded-2xl p-6 border border-[#1F1F1F]">
                <div className="icon-box mb-4"><i className="fas fa-chart-line" /></div>
                <h3 className="card-title mb-3">Why AAM matters now</h3>
                <ul className="mt-3 space-y-3 text-[#A1A1AA]">
                  <li><span className="font-bold text-[#FAFAFA]">Urban congestion</span> is economically unsustainable</li>
                  <li><span className="font-bold text-[#FAFAFA]">Ground infra expansion</span> capital-intensive &amp; limited</li>
                  <li><span className="font-bold text-[#FAFAFA]">Time-efficient demand</span> accelerating globally</li>
                  <li><span className="font-bold text-[#FAFAFA]">eVTOL tech readiness</span> has reached real deployment stage</li>
                </ul>
                <p className="mt-5 pt-3 border-t border-[#1F1F1F] text-[#FF2D2D] font-semibold">India: one of the most significant AAM opportunities: dense clusters, rapid infra growth &amp; aviation expansion.</p>
              </div>
            </div>
          </div>

          {/* MyOnlineJet's Strategic Positioning */}
          <div className="mb-20 reveal">
            <div className="text-center mb-12">
              <h2 className="section-title">MyOnlineJet&apos;s Strategic Positioning in AAM</h2>
              <div className="w-16 h-1 bg-[#FF2D2D] mx-auto mt-3 rounded-full" />
              <p className="text-[#A1A1AA] max-w-2xl mx-auto mt-4">We are not an aircraft manufacturer. We are not a traditional operator. We are building India&apos;s first integrated, intelligence-driven AAM infrastructure and network platform.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="glass-card p-6 text-center">
                <div className="icon-box mx-auto mb-4"><i className="fas fa-draw-polygon" /></div>
                <h3 className="card-title mb-2">Infrastructure First</h3>
                <p className="text-[#52525B] text-sm">Vertiport planning, rooftop hubs, integration with airports &amp; commercial nodes.</p>
                <Link href="/vertiports" className="inline-block mt-3 text-[#FF2D2D] text-sm font-semibold hover:underline">Explore vertiports →</Link>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="icon-box mx-auto mb-4"><i className="fas fa-microchip" /></div>
                <h3 className="card-title mb-2">eVTOL Ecosystem</h3>
                <p className="text-[#52525B] text-sm">Collaborating with global eVTOL innovators, enabling route networks, landing infra &amp; scalability.</p>
                <Link href="/evtol-infrastructure" className="inline-block mt-3 text-[#FF2D2D] text-sm font-semibold hover:underline">eVTOL infra →</Link>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="icon-box mx-auto mb-4"><i className="fas fa-brain" /></div>
                <h3 className="card-title mb-2">Intelligent Network Layer</h3>
                <p className="text-[#52525B] text-sm">Real-time orchestration, demand-supply balancing, predictive utilization.</p>
                <Link href="/technology" className="inline-block mt-3 text-[#FF2D2D] text-sm font-semibold hover:underline">Technology →</Link>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="icon-box mx-auto mb-4"><i className="fas fa-link" /></div>
                <h3 className="card-title mb-2">Multi-Sector Integration</h3>
                <p className="text-[#52525B] text-sm">Hospitals, luxury hotels, logistics, corporate districts — ecosystem ready.</p>
                <Link href="/ecosystem" className="inline-block mt-3 text-[#FF2D2D] text-sm font-semibold hover:underline">Integration →</Link>
              </div>
            </div>
          </div>

          {/* Execution Model: Phases */}
          <div className="bg-[#111111] border border-[#1F1F1F] rounded-3xl p-8 md:p-12 mb-20 reveal">
            <h2 className="section-title text-center mb-3">From Concept to Network</h2>
            <p className="text-center text-[#A1A1AA] max-w-2xl mx-auto mb-10">Our model is structured around network thinking, not isolated deployments.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              <div>
                <div className="text-3xl font-black text-[#FF2D2D] mb-2 font-heading">01</div>
                <h3 className="font-bold text-xl text-[#FAFAFA] mb-2">Strategic Alignment</h3>
                <p className="text-[#A1A1AA] text-sm">Infrastructure partners, real estate owners, high-value corridors.</p>
                <Link href="/partner-with-us" className="text-[#FF4444] text-sm mt-2 inline-block hover:underline">Partner →</Link>
              </div>
              <div>
                <div className="text-3xl font-black text-[#FF2D2D] mb-2 font-heading">02</div>
                <h3 className="font-bold text-xl text-[#FAFAFA] mb-2">Vertiport Network</h3>
                <p className="text-[#A1A1AA] text-sm">Scalable vertiports, regulatory alignment, integration with aviation ecosystems.</p>
                <Link href="/vertiports" className="text-[#FF4444] text-sm mt-2 inline-block hover:underline">Vertiports →</Link>
              </div>
              <div>
                <div className="text-3xl font-black text-[#FF2D2D] mb-2 font-heading">03</div>
                <h3 className="font-bold text-xl text-[#FAFAFA] mb-2">Aircraft Integration</h3>
                <p className="text-[#A1A1AA] text-sm">eVTOL alignment, operational readiness, pilot routes.</p>
                <Link href="/evtol-infrastructure" className="text-[#FF4444] text-sm mt-2 inline-block hover:underline">eVTOL →</Link>
              </div>
              <div>
                <div className="text-3xl font-black text-[#FF2D2D] mb-2 font-heading">04</div>
                <h3 className="font-bold text-xl text-[#FAFAFA] mb-2">Public Access &amp; Scale</h3>
                <p className="text-[#A1A1AA] text-sm">Premium &amp; mass users, AI-driven optimization, multi-city expansion.</p>
                <Link href="/early-access" className="text-[#FF4444] text-sm mt-2 inline-block hover:underline">Early access →</Link>
              </div>
            </div>
          </div>

          {/* Use Cases We Enable */}
          <div className="mb-20 reveal">
            <div className="text-center mb-10">
              <h2 className="section-title">AAM Use Cases We Are Enabling</h2>
              <p className="text-[#A1A1AA]">High-impact applications across industries &amp; daily life</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="glass-card flex gap-4 p-5">
                <div className="icon-box"><i className="fas fa-city" /></div>
                <div>
                  <h3 className="font-bold text-[#FAFAFA]">Urban Air Mobility</h3>
                  <p className="text-[#52525B] text-sm">Fast intra-city travel — hours to minutes.</p>
                </div>
              </div>
              <div className="glass-card flex gap-4 p-5">
                <div className="icon-box"><i className="fas fa-road" /></div>
                <div>
                  <h3 className="font-bold text-[#FAFAFA]">Intercity Connectivity</h3>
                  <p className="text-[#52525B] text-sm">Seamless aerial corridors between high-demand cities.</p>
                </div>
              </div>
              <div className="glass-card flex gap-4 p-5">
                <div className="icon-box"><i className="fas fa-ambulance" /></div>
                <div>
                  <h3 className="font-bold text-[#FAFAFA]">Medical &amp; Emergency</h3>
                  <p className="text-[#52525B] text-sm">Time-critical patient transport, organ logistics.</p>
                </div>
              </div>
              <div className="glass-card flex gap-4 p-5">
                <div className="icon-box"><i className="fas fa-umbrella-beach" /></div>
                <div>
                  <h3 className="font-bold text-[#FAFAFA]">Luxury &amp; Tourism</h3>
                  <p className="text-[#52525B] text-sm">Premium experiences for high-value travelers.</p>
                </div>
              </div>
              <div className="glass-card flex gap-4 p-5">
                <div className="icon-box"><i className="fas fa-briefcase" /></div>
                <div>
                  <h3 className="font-bold text-[#FAFAFA]">Business Transport</h3>
                  <p className="text-[#52525B] text-sm">Efficient executive mobility between key locations.</p>
                </div>
              </div>
              <div className="glass-card flex gap-4 p-5">
                <div className="icon-box"><i className="fas fa-boxes" /></div>
                <div>
                  <h3 className="font-bold text-[#FAFAFA]">Logistics &amp; Cargo</h3>
                  <p className="text-[#52525B] text-sm">Time-sensitive supply chains, e-commerce express.</p>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link href="/services" className="secondary-btn">Explore all services →</Link>
            </div>
          </div>

          {/* India Opportunity & Safety */}
          <div className="grid md:grid-cols-2 gap-8 mb-20 reveal">
            <div className="glass-card p-8">
              <div className="icon-box mb-4"><i className="fas fa-flag-checkered" /></div>
              <h2 className="section-title mb-3">India&apos;s Defining Opportunity</h2>
              <p className="text-[#A1A1AA]">India is not just a market, it is a defining landscape for AAM. With the right infrastructure strategy, India can leapfrog traditional mobility limits, build one of the world&apos;s largest AAM networks, and integrate aviation into everyday urban life. MyOnlineJet is contributing through early infrastructure development, strategic ecosystem partnerships, and scalable network design.</p>
              <Link href="/partners" className="inline-block mt-4 text-[#FF2D2D] font-semibold hover:underline">Join the transformation →</Link>
            </div>
            <div className="glass-card p-8">
              <div className="icon-box mb-4"><i className="fas fa-shield-alt" /></div>
              <h2 className="section-title mb-3">Safety, Regulation &amp; Trust</h2>
              <p className="text-[#A1A1AA]">AAM cannot scale without trust. We align with national aviation authorities, global best practices in airspace safety, infrastructure compliance. Speed of innovation must never compromise safety. Our philosophy is rooted in structural credibility, long-term thinking, and uncompromising operational reliability.</p>
              <Link href="/technology#safety" className="inline-block mt-4 text-[#FF2D2D] font-semibold hover:underline">Safety framework →</Link>
            </div>
          </div>

          {/* Visual Divider block: Intelligent network quote */}
          <div className="bg-[#FF2D2D]/5 border border-[#FF2D2D]/10 rounded-2xl p-10 text-center mb-20 reveal">
            <i className="fas fa-quote-left text-4xl text-[#FF2D2D] opacity-50 mb-4" />
            <p className="text-xl md:text-2xl font-medium text-[#FAFAFA] max-w-3xl mx-auto font-heading">The future of air mobility will not be defined by individual aircraft but by how effectively the entire system is coordinated. MyOnlineJet is building that coordination layer.</p>
            <div className="mt-6"><span className="font-bold text-[#A1A1AA]">— Amit Kumar, Founder &amp; CEO</span></div>
          </div>

          {/* Looking Ahead + Call to Action */}
          <div className="text-center py-6 reveal">
            <h2 className="section-title mb-4">Looking Ahead: The Inevitable Layer</h2>
            <p className="text-[#A1A1AA] text-lg max-w-2xl mx-auto mb-8">Advanced Air Mobility will define how cities function, how economies move, and how people experience distance. The question is not whether AAM will happen, it&apos;s who will build the systems that make it work at scale. We are focused on building that system, quietly, structurally, with long-term intent.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/partner-with-us" className="primary-btn"><i className="fas fa-handshake mr-2" />Become a Partner</Link>
              <Link href="/early-access" className="secondary-btn"><i className="fas fa-bell mr-2" />Early Access</Link>
              <Link href="/investors" className="bg-[#1A1A1A] text-[#FAFAFA] hover:bg-[#2A2A2A] py-3 px-6 rounded-lg font-medium transition border border-[#2A2A2A]">Investor Relations</Link>
            </div>
          </div>

          {/* Section: Explore ecosystem deep dive */}
          <div className="mt-20 pt-6 border-t border-[#1F1F1F] reveal">
            <div className="grid md:grid-cols-4 gap-5 text-center">
              <Link href="/vertiports" className="text-[#A1A1AA] hover:text-[#FF2D2D] transition-colors"><i className="fas fa-building text-2xl mb-1 block" />Vertiports</Link>
              <Link href="/evtol-infrastructure" className="text-[#A1A1AA] hover:text-[#FF2D2D] transition-colors"><i className="fas fa-fan text-2xl mb-1 block" />eVTOL Infra</Link>
              <Link href="/ecosystem" className="text-[#A1A1AA] hover:text-[#FF2D2D] transition-colors"><i className="fas fa-project-diagram text-2xl mb-1 block" />Ecosystem Integration</Link>
              <Link href="/technology" className="text-[#A1A1AA] hover:text-[#FF2D2D] transition-colors"><i className="fas fa-microchip text-2xl mb-1 block" />Intelligence Layer</Link>
            </div>
          </div>

        </div>
      </main>
    </>
  )
}

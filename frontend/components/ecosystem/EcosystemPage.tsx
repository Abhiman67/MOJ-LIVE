'use client'

import Link from 'next/link'
import { useEffect } from 'react'

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.myonlinejet.com/',
      name: 'MyOnlineJet',
      url: 'https://www.myonlinejet.com/',
      logo: 'https://myonlinejet.com/images/Logo.webp',
      foundingDate: '2023',
      founder: { '@type': 'Person', name: 'Amit Kumar' },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Jaipur',
        addressRegion: 'Rajasthan',
        addressCountry: 'IN',
        streetAddress: 'iAlpha Technologies Private Limited',
        postalCode: '302017'
      },
      sameAs: ['https://www.linkedin.com/company/myonlinejet']
    },
    {
      '@type': 'WebPage',
      '@id': 'https://www.myonlinejet.com/ecosystem-integration/',
      url: 'https://www.myonlinejet.com/ecosystem-integration/',
      name: "Ecosystem Integration | MyOnlineJet — India's Intelligent Air Mobility Network",
      isPartOf: { '@id': 'https://www.myonlinejet.com/' },
      description:
        "MyOnlineJet's ecosystem integration framework connects vertiports, eVTOL aircraft, digital intelligence, partners, and regulatory systems into a unified, scalable mobility infrastructure across India.",
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.myonlinejet.com/' },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Ecosystem Integration',
            item: 'https://www.myonlinejet.com/ecosystem-integration/'
          }
        ]
      }
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.myonlinejet.com/',
      url: 'https://www.myonlinejet.com/',
      name: 'MyOnlineJet'
    }
  ]
}

const styles = `
  .eco-noise-overlay {
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    pointer-events: none;
    z-index: 9999;
    opacity: 0.03;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  }
  .eco-glow-orb {
    position: fixed;
    border-radius: 50%;
    pointer-events: none;
    z-index: 0;
    filter: blur(120px);
    opacity: 0.15;
  }
  .eco-glow-orb-1 {
    width: 400px; height: 400px;
    background: #C50000;
    top: -100px;
    right: -100px;
  }
  .eco-glow-orb-2 {
    width: 300px; height: 300px;
    background: #C50000;
    bottom: 20%;
    left: -80px;
  }
  .eco-grid-bg {
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background-image: linear-gradient(rgba(197,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(197,0,0,0.03) 1px, transparent 1px);
    background-size: 60px 60px;
    pointer-events: none;
    z-index: -1;
  }
  .eco-modern-card {
    background: rgba(20,20,20,0.6);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid #1F1F1F;
    border-radius: 16px;
    transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  }
  .eco-modern-card:hover {
    transform: translateY(-2px);
    border-color: rgba(197,0,0,0.3);
    box-shadow: 0 20px 40px rgba(197,0,0,0.08), 0 0 60px rgba(197,0,0,0.05);
  }
  .eco-heading-primary {
    font-family: 'Space Grotesk', sans-serif;
    font-size: clamp(2.5rem, 5vw, 4.5rem);
    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 1.1;
    color: #FAFAFA;
  }
  .eco-section-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: clamp(1.8rem, 3vw, 2.8rem);
    font-weight: 700;
    letter-spacing: -0.02em;
    color: #FAFAFA;
  }
  .eco-flow-step {
    background: rgba(197,0,0,0.05);
    border-radius: 1rem;
    transition: all 0.2s;
    border: 1px solid #1F1F1F;
  }
  .eco-flow-step:hover {
    background: rgba(197,0,0,0.1);
    border-color: rgba(197,0,0,0.2);
  }
  .eco-badge {
    display: inline-block;
    background: rgba(197,0,0,0.1);
    color: #C50000;
    padding: 4px 14px;
    border-radius: 9999px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  .eco-icon-box {
    width: 48px; height: 48px;
    border-radius: 12px;
    background: rgba(197,0,0,0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #C50000;
    font-size: 20px;
    flex-shrink: 0;
  }
  .eco-reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease;
  }
  .eco-reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }
  @media (max-width: 768px) {
    .eco-heading-primary { font-size: clamp(1.8rem, 7vw, 2.5rem); }
    .eco-section-title { font-size: clamp(1.4rem, 5vw, 1.8rem); }
  }
  @media (max-width: 480px) {
    .eco-heading-primary { font-size: clamp(1.5rem, 8vw, 1.8rem); }
    .eco-section-title { font-size: clamp(1.1rem, 5vw, 1.4rem); }
    .eco-icon-box { width: 40px; height: 40px; font-size: 16px; }
  }
  @media (max-width: 380px) {
    .eco-heading-primary { font-size: clamp(1.2rem, 7vw, 1.5rem); }
    .eco-section-title { font-size: clamp(1rem, 4.5vw, 1.2rem); }
    .eco-modern-card { padding: 0.75rem !important; border-radius: 10px; }
    .eco-icon-box { width: 32px; height: 32px; font-size: 14px; border-radius: 8px; }
    .eco-flow-step { padding: 0.75rem !important; }
  }
`

export function EcosystemPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    document.querySelectorAll('.eco-reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style>{styles}</style>

      <div className="eco-noise-overlay" />
      <div className="eco-glow-orb eco-glow-orb-1" />
      <div className="eco-glow-orb eco-glow-orb-2" />
      <div className="eco-grid-bg" />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData, null, 2) }} />

      <div className="relative z-10 pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          {/* Hero Section */}
          <div className="text-center mb-20 eco-reveal">
            <div className="eco-badge mb-6">Ecosystem Integration</div>
            <h1 className="eco-heading-primary mb-6">
              Building India&apos;s Most Intelligent <br /><span className="text-[#C50000]">Air Mobility Network</span>
            </h1>
            <p className="text-xl text-[#A1A1AA] max-w-3xl mx-auto">
              MyOnlineJet is not just enabling air mobility&mdash;we are architecting a fully integrated, intelligent ecosystem where aviation, infrastructure, technology, and real-world services operate as one seamless network.
            </p>
            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              <a href="#why-ecosystem" className="secondary-btn">Why Integration Matters</a>
              <Link href="/partner-with-us" className="primary-btn">Become a Partner &rarr;</Link>
            </div>
          </div>

          {/* Why Ecosystem Integration Matters */}
          <div id="why-ecosystem" className="eco-modern-card p-8 md:p-12 mb-20 eco-reveal">
            <h2 className="eco-section-title mb-6">Why Ecosystem Integration Matters</h2>
            <p className="text-[#A1A1AA] text-lg mb-4">The future of aviation will not be defined by aircraft alone&mdash;but by how effectively systems connect.</p>
            <div className="grid md:grid-cols-2 gap-12 mt-6">
              <div>
                <p className="font-semibold text-[#C50000] mb-2">Fragmented infrastructure leads to:</p>
                <ul className="space-y-2 text-[#A1A1AA]">
                  <li><i className="fas fa-times-circle text-[#C50000] mr-2"></i> Inefficient operations</li>
                  <li><i className="fas fa-times-circle text-[#C50000] mr-2"></i> Low asset utilization</li>
                  <li><i className="fas fa-times-circle text-[#C50000] mr-2"></i> Poor user experience</li>
                  <li><i className="fas fa-times-circle text-[#C50000] mr-2"></i> Regulatory bottlenecks</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-[#FAFAFA] mb-2">MyOnlineJet solves this by integrating:</p>
                <ul className="space-y-2 text-[#A1A1AA]">
                  <li><i className="fas fa-check-circle text-[#22C55E] mr-2"></i> Physical infrastructure</li>
                  <li><i className="fas fa-check-circle text-[#22C55E] mr-2"></i> Digital intelligence</li>
                  <li><i className="fas fa-check-circle text-[#22C55E] mr-2"></i> Regulatory alignment</li>
                  <li><i className="fas fa-check-circle text-[#22C55E] mr-2"></i> Commercial ecosystems</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <Link href="/vertiports" className="text-[#C50000] font-medium hover:underline">&rarr; Explore vertiport infrastructure</Link>
              <Link href="/advanced-air-mobility" className="text-[#C50000] font-medium hover:underline">&rarr; Understand the aircraft layer</Link>
            </div>
          </div>

          {/* Our Integration Philosophy */}
          <div className="eco-modern-card p-8 md:p-12 mb-20 eco-reveal">
            <h2 className="eco-section-title text-center mb-6">Our Integration Philosophy</h2>
            <div className="max-w-3xl mx-auto text-center mb-8">
              <p className="text-xl italic font-light text-[#A1A1AA]">&ldquo;No node operates alone. Every component strengthens the network.&rdquo;</p>
            </div>
            <p className="text-[#A1A1AA] text-center mb-6">Each vertiport, partner, aircraft, and service is designed to:</p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <i className="fas fa-share-alt text-3xl text-[#C50000] mb-3"></i>
                <p className="font-semibold text-[#FAFAFA]">Share intelligence</p>
              </div>
              <div className="p-4">
                <i className="fas fa-chart-line text-3xl text-[#C50000] mb-3"></i>
                <p className="font-semibold text-[#FAFAFA]">Improve efficiency across the system</p>
              </div>
              <div className="p-4">
                <i className="fas fa-globe text-3xl text-[#C50000] mb-3"></i>
                <p className="font-semibold text-[#FAFAFA]">Contribute to network-wide optimization</p>
              </div>
            </div>
            <p className="text-center text-[#52525B] mt-6">This creates a <strong className="text-[#C50000]">network effect</strong>&mdash;where every addition increases the value of the entire ecosystem.</p>
          </div>

          {/* Core Layers of Ecosystem */}
          <h2 className="eco-section-title text-center mb-10 eco-reveal">Core Layers of the MyOnlineJet Ecosystem</h2>

          <div className="grid gap-6 mb-20">
            {/* Layer 1 */}
            <div className="eco-modern-card p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start eco-reveal">
              <div className="w-16 h-16 rounded-full bg-[rgba(197,0,0,0.1)] flex items-center justify-center shrink-0">
                <i className="fas fa-building text-3xl text-[#C50000]"></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-[#FAFAFA]">1. Infrastructure Layer : Vertiports &amp; Ground Network</h3>
                <p className="text-[#A1A1AA] mb-3">Our ecosystem begins with strategically placed vertiports integrated into hospitals, hotels &amp; luxury properties, business districts, tourism hubs, airports and multimodal transit points. Each vertiport is a connected node within a national network.</p>
                <div className="flex gap-4">
                  <Link href="/vertiports" className="text-[#C50000] font-medium text-sm">Learn more on Vertiports &rarr;</Link>
                  <Link href="/evtol-infrastructure" className="text-[#C50000] font-medium text-sm">eVTOL Infrastructure &rarr;</Link>
                </div>
              </div>
            </div>
            {/* Layer 2 */}
            <div className="eco-modern-card p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start eco-reveal">
              <div className="w-16 h-16 rounded-full bg-[rgba(197,0,0,0.1)] flex items-center justify-center shrink-0">
                <i className="fas fa-fan text-3xl text-[#C50000]"></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-[#FAFAFA]">2. Air Mobility Layer : eVTOL &amp; Advanced Aircraft</h3>
                <p className="text-[#A1A1AA] mb-3">We integrate next-generation eVTOL aircraft to enable rapid intra-city movement, inter-city regional connectivity, emergency and medical transport, and premium time-critical mobility. Aircraft are dynamically managed within our ecosystem.</p>
                <Link href="/advanced-air-mobility" className="text-[#C50000] font-medium text-sm">Read more on Advanced Air Mobility &rarr;</Link>
              </div>
            </div>
            {/* Layer 3 */}
            <div className="eco-modern-card p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start eco-reveal">
              <div className="w-16 h-16 rounded-full bg-[rgba(197,0,0,0.1)] flex items-center justify-center shrink-0">
                <i className="fas fa-microchip text-3xl text-[#C50000]"></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-[#FAFAFA]">3. Digital Intelligence Layer</h3>
                <p className="text-[#A1A1AA] mb-3">Real-time network orchestration, demand-supply optimization, predictive route planning, fleet and vertiport coordination, smart booking &mdash; this digital backbone transforms a static network into a living, intelligent system.</p>
                <Link href="/technology" className="text-[#C50000] font-medium text-sm">Explore Technology &rarr;</Link>
              </div>
            </div>
            {/* Layer 4 */}
            <div className="eco-modern-card p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start eco-reveal">
              <div className="w-16 h-16 rounded-full bg-[rgba(197,0,0,0.1)] flex items-center justify-center shrink-0">
                <i className="fas fa-handshake text-3xl text-[#C50000]"></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-[#FAFAFA]">4. Partner Ecosystem Layer</h3>
                <p className="text-[#A1A1AA] mb-3">Healthcare &rarr; Emergency access, organ transport. Hospitality &rarr; Premium guest mobility. Tourism &rarr; Destination connectivity. Real Estate &rarr; High-value infrastructure integration. Enterprise &amp; Corporates &rarr; Time-critical mobility. Every partner becomes a network contributor.</p>
                <Link href="/partner-with-us" className="text-[#C50000] font-medium text-sm">See collaboration models &rarr;</Link>
              </div>
            </div>
            {/* Layer 5 */}
            <div className="eco-modern-card p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start eco-reveal">
              <div className="w-16 h-16 rounded-full bg-[rgba(197,0,0,0.1)] flex items-center justify-center shrink-0">
                <i className="fas fa-gavel text-3xl text-[#C50000]"></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-[#FAFAFA]">5. Regulatory &amp; Public Infrastructure Alignment</h3>
                <p className="text-[#A1A1AA] mb-3">Deep alignment with aviation authorities, urban development bodies, smart city frameworks, infrastructure regulators. MyOnlineJet integrates seamlessly within India&apos;s evolving regulatory ecosystem&mdash;ensuring compliance, safety, and scalability.</p>
              </div>
            </div>
          </div>

          {/* How the Ecosystem Works */}
          <div className="eco-modern-card p-8 md:p-12 mb-20 eco-reveal">
            <h2 className="eco-section-title text-center mb-8">How the Ecosystem Works</h2>
            <div className="grid md:grid-cols-5 gap-4 text-center">
              <div className="eco-flow-step p-4">
                <span className="font-bold text-2xl text-[#C50000]">1</span>
                <p className="text-sm mt-2 text-[#A1A1AA]">User books a trip through MyOnlineJet</p>
              </div>
              <div className="eco-flow-step p-4">
                <span className="font-bold text-2xl text-[#C50000]">2</span>
                <p className="text-sm mt-2 text-[#A1A1AA]">System identifies optimal routes, aircraft, vertiports</p>
              </div>
              <div className="eco-flow-step p-4">
                <span className="font-bold text-2xl text-[#C50000]">3</span>
                <p className="text-sm mt-2 text-[#A1A1AA]">Ground + air infrastructure dynamically allocated</p>
              </div>
              <div className="eco-flow-step p-4">
                <span className="font-bold text-2xl text-[#C50000]">4</span>
                <p className="text-sm mt-2 text-[#A1A1AA]">Partners integrated into journey</p>
              </div>
              <div className="eco-flow-step p-4">
                <span className="font-bold text-2xl text-[#C50000]">5</span>
                <p className="text-sm mt-2 text-[#A1A1AA]">Real-time coordination ensures seamless execution</p>
              </div>
            </div>
            <p className="text-center text-[#52525B] mt-6 text-lg">Result: Door-to-destination aerial mobility experience</p>
            <div className="text-center mt-6"><Link href="/services" className="secondary-btn">Explore Services &rarr;</Link></div>
          </div>

          {/* Network Effects + India-first */}
          <div className="grid md:grid-cols-2 gap-6 mb-20">
            <div className="eco-modern-card p-8 eco-reveal">
              <i className="fas fa-chart-network text-4xl text-[#C50000] mb-4"></i>
              <h3 className="text-2xl font-bold mb-3 text-[#FAFAFA]">Network Effects: The True Power</h3>
              <p className="text-[#A1A1AA]">More vertiports &rarr; Greater coverage. More partners &rarr; Higher utility. More users &rarr; Better optimization. More data &rarr; Smarter operations. This creates a compounding advantage that is difficult to replicate.</p>
            </div>
            <div className="eco-modern-card p-8 eco-reveal">
              <i className="fas fa-flag-checkered text-4xl text-[#C50000] mb-4"></i>
              <h3 className="text-2xl font-bold mb-3 text-[#FAFAFA]">India-First, Globally Scalable</h3>
              <p className="text-[#A1A1AA]">High-density urban challenges, diverse infrastructure conditions, rapidly growing demand. Once validated, the same model is designed to scale globally.</p>
              <Link href="/company-profile" className="inline-block mt-4 text-[#C50000] font-semibold">Company Profile &rarr;</Link>
            </div>
          </div>

          {/* Long-Term Vision */}
          <div className="text-center eco-modern-card p-8 mb-20 eco-reveal">
            <h2 className="text-3xl font-bold text-[#FAFAFA] mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Our Long-Term Vision</h2>
            <p className="text-[#A1A1AA] max-w-3xl mx-auto">To establish MyOnlineJet as the operating layer of urban air mobility, the largest integrated vertiport network in India, and a trusted infrastructure partner for cities, businesses, and institutions.</p>
          </div>

          {/* Get Involved + CTA */}
          <div className="eco-modern-card p-8 md:p-12 text-center eco-reveal">
            <h2 className="eco-section-title mb-4">Get Involved in the Ecosystem</h2>
            <p className="text-[#A1A1AA] max-w-2xl mx-auto mb-6">Whether you are a business looking to integrate, an infrastructure partner, a technology collaborator, or an investor &mdash; there is a place for you in this network.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/partner-with-us" className="primary-btn">Start your journey &rarr;</Link>
              <Link href="/investors" className="secondary-btn">Investor opportunities &rarr;</Link>
              <Link href="/early-access" className="secondary-btn">Join early access &rarr;</Link>
            </div>
          </div>

          {/* Closing Perspective */}
          <div className="mt-20 border-t border-[#1F1F1F] pt-10 text-center eco-reveal">
            <p className="text-xl text-[#A1A1AA] italic max-w-3xl mx-auto">The future of mobility will not belong to isolated players. It will belong to those who build connected ecosystems&mdash;where infrastructure, intelligence, and access converge. MyOnlineJet is building that future.</p>
            <div className="mt-6 text-[#C50000] font-semibold">#BuildingTheNextLayer</div>
          </div>
        </div>
      </div>
    </>
  )
}

'use client'

import Image from 'next/image'
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
      '@type': 'AboutPage',
      '@id': 'https://www.myonlinejet.com/about-us/',
      url: 'https://www.myonlinejet.com/about-us/',
      name: 'About MyOnlineJet',
      isPartOf: { '@id': 'https://www.myonlinejet.com/' },
      about: { '@id': 'https://www.myonlinejet.com/' },
      description: 'Overview of MyOnlineJet, an aviation infrastructure initiative focused on urban air mobility and vertiport systems.'
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.myonlinejet.com/',
      url: 'https://www.myonlinejet.com/',
      name: 'MyOnlineJet'
    }
  ]
}

const whatWeBuild = [
  {
    number: '01',
    icon: 'map-marker-alt',
    title: 'Vertiport Infrastructure Network',
    description: 'Access points to airspace. Nodes of a future mobility network. Strategic infrastructure assets.',
    href: '/vertiports',
    label: 'Learn more'
  },
  {
    number: '02',
    icon: 'microchip',
    title: 'Intelligent Mobility Layer',
    description: 'Real-time coordination, airspace awareness, intelligent routing. Software orchestrates movement.',
    href: '/technology',
    label: 'Explore tech'
  },
  {
    number: '03',
    icon: 'plug',
    title: 'Platform for Integration',
    description: 'Multi-operator, multi-city, multi-layered. Integrating eVTOL operators, infrastructure partners, and service providers.',
    href: '/services',
    label: 'View services'
  }
]

const approach = [
  { icon: 'gavel', title: 'Working in sync with evolving regulatory frameworks' },
  { icon: 'chart-line', title: 'Understanding infrastructure before scaling demand' },
  { icon: 'calendar-alt', title: 'Prioritizing long-term systems over short-term visibility' }
]

const comparison = ['Aircraft companies', 'Tech experiments', 'Short-term pilots']

const direction = [
  'A long-term infrastructure and network play',
  'Nodes, not just routes',
  'Systems, not just services',
  'Decades, not quarters'
]

const styles = `
  .about-noise-overlay {
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    pointer-events: none; z-index: 0;
    opacity: 0.03;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  }
  .about-ambient-glow {
    position: fixed;
    border-radius: 50%;
    filter: blur(120px);
    pointer-events: none; z-index: 0;
  }
  .about-ambient-glow-1 {
    width: 600px; height: 600px;
    background: radial-gradient(circle, rgba(255,45,45,0.08) 0%, transparent 70%);
    top: -10%; right: -10%;
  }
  .about-ambient-glow-2 {
    width: 500px; height: 500px;
    background: radial-gradient(circle, rgba(255,45,45,0.05) 0%, transparent 70%);
    bottom: 10%; left: -10%;
  }
  .about-grid-pattern {
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background-image:
      linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px);
    background-size: 60px 60px;
    pointer-events: none; z-index: 1;
  }
  .about-heading-hero {
    font-family: 'Space Grotesk', sans-serif;
    font-size: clamp(2.5rem, 5vw, 4.5rem);
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: -0.03em;
  }
  .about-heading-section {
    font-family: 'Space Grotesk', sans-serif;
    font-size: clamp(1.8rem, 3vw, 2.8rem);
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.02em;
  }
  .about-heading-card {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1.3;
  }
  .about-text-gradient {
    background: linear-gradient(135deg, #ff2d2d 0%, #ff6b6b 50%, #ff2d2d 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .about-icon-box {
    width: 52px; height: 52px;
    border-radius: 14px;
    background: rgba(255,45,45,0.1);
    border: 1px solid rgba(255,45,45,0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ff2d2d;
    font-size: 22px;
    transition: all 0.3s ease;
  }
  .about-icon-box:hover {
    background: rgba(255,45,45,0.15);
    border-color: rgba(255,45,45,0.4);
    transform: scale(1.05);
  }
  .about-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 14px;
    border-radius: 100px;
    background: rgba(255,45,45,0.1);
    border: 1px solid rgba(255,45,45,0.2);
    color: #ff2d2d;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }
  .about-badge-dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    background: #ff2d2d;
  }
  .about-pulse-dot { position: relative; }
  .about-pulse-dot::after {
    content: '';
    position: absolute;
    inset: -4px;
    border-radius: 50%;
    border: 2px solid #ff2d2d;
    animation: about-pulse-ring 2s ease-out infinite;
  }
  @keyframes about-pulse-ring {
    0% { transform: scale(0.8); opacity: 1; }
    100% { transform: scale(2); opacity: 0; }
  }
  .about-step-number {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 48px;
    font-weight: 700;
    color: #2a2a2a;
    line-height: 1;
    transition: color 0.3s ease;
  }
  .about-step-card:hover .about-step-number { color: #ff2d2d; }
  .about-link-arrow {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: #ff2d2d;
    font-weight: 600;
    font-size: 14px;
    transition: all 0.3s ease;
  }
  .about-link-arrow:hover { gap: 10px; }
  .about-check-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 0;
    border-bottom: 1px solid #1f1f1f;
  }
  .about-check-item:last-child { border-bottom: none; }
  .about-check-icon {
    width: 24px; height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    flex-shrink: 0;
  }
  .about-check-icon.success {
    background: rgba(34,197,94,0.1);
    color: #22c55e;
    border: 1px solid rgba(34,197,94,0.2);
  }
  .about-check-icon.fail {
    background: rgba(255,45,45,0.1);
    color: #ff2d2d;
    border: 1px solid rgba(255,45,45,0.2);
  }
  .about-cta-gradient {
    background: linear-gradient(135deg, rgba(255,45,45,0.08) 0%, rgba(10,10,10,0) 50%, rgba(255,45,45,0.05) 100%);
    border: 1px solid #1f1f1f;
  }
  .about-quote-block {
    position: relative;
    padding-left: 24px;
    border-left: 3px solid #ff2d2d;
  }
  .about-quote-block::before {
    content: '"';
    position: absolute;
    top: -20px;
    left: 24px;
    font-size: 80px;
    color: #ff2d2d;
    opacity: 0.2;
    font-family: 'Space Grotesk', serif;
    line-height: 1;
  }
  .about-avatar-glow {
    position: relative;
    width: 120px; height: 120px;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid #2a2a2a;
    transition: all 0.4s ease;
  }
  .about-avatar-glow::before {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 50%;
    background: conic-gradient(from 0deg, #ff2d2d, transparent, #ff2d2d);
    animation: about-rotate 4s linear infinite;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  .about-avatar-glow:hover::before { opacity: 1; }
  .about-avatar-glow:hover { border-color: transparent; }
  @keyframes about-rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  .about-section-divider {
    height: 1px;
    background: linear-gradient(90deg, transparent, #2a2a2a, transparent);
  }
  .about-reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .about-reveal.active {
    opacity: 1;
    transform: translateY(0);
  }
  .about-glass-card {
    background: rgba(20,20,20,0.6);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid #1f1f1f;
    border-radius: 16px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .about-glass-card:hover {
    border-color: rgba(255,45,45,0.3);
    background: rgba(26,26,26,0.7);
    transform: translateY(-2px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.4), 0 0 40px rgba(255,45,45,0.05);
  }
  .about-btn-primary {
    position: relative;
    background: #ff2d2d;
    color: #ffffff;
    border: none;
    padding: 14px 36px;
    border-radius: 8px;
    font-weight: 600;
    font-size: 15px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    overflow: hidden;
    letter-spacing: 0.02em;
  }
  .about-btn-primary::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s ease;
  }
  .about-btn-primary:hover::before { left: 100%; }
  .about-btn-primary:hover {
    background: #ff4444;
    transform: translateY(-1px);
    box-shadow: 0 8px 30px rgba(255,45,45,0.3);
  }
  .about-btn-secondary {
    background: transparent;
    color: #fafafa;
    border: 1px solid #2a2a2a;
    padding: 14px 36px;
    border-radius: 8px;
    font-weight: 600;
    font-size: 15px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    letter-spacing: 0.02em;
  }
  .about-btn-secondary:hover {
    border-color: #ff2d2d;
    color: #ff2d2d;
    background: rgba(255,45,45,0.05);
  }
  @media (max-width: 768px) {
    .about-heading-hero {
      font-size: clamp(2.2rem, 10vw, 3.25rem);
      line-height: 1.03;
    }
    .about-heading-section {
      font-size: clamp(1.5rem, 6vw, 2rem);
    }
    .about-heading-card {
      font-size: 1.05rem;
    }
    .about-glass-card {
      padding: 1.25rem !important;
      border-radius: 1rem;
    }
    .about-icon-box {
      width: 44px;
      height: 44px;
      border-radius: 12px;
      font-size: 18px;
    }
    .about-step-number {
      font-size: 34px;
    }
    .about-avatar-glow {
      width: 96px;
      height: 96px;
    }
    .about-quote-block {
      padding-left: 18px;
    }
    .about-quote-block::before {
      left: 12px;
      font-size: 56px;
    }
    .about-check-item {
      align-items: flex-start;
    }
    .about-btn-primary,
    .about-btn-secondary {
      width: 100%;
      justify-content: center;
      padding: 12px 18px;
    }
    .about-badge {
      padding: 0.45rem 0.8rem;
      letter-spacing: 0.08em;
    }
  }
  @media (max-width: 640px) {
    .about-glass-card p {
      line-height: 1.65;
      word-break: break-word;
    }
  }
  @media (max-width: 480px) {
    .about-avatar-glow {
      width: 80px;
      height: 80px;
    }
    .about-step-number {
      font-size: 28px;
    }
  }
`

export function AboutPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
          }
        })
      },
      { root: null, rootMargin: '0px', threshold: 0.1 }
    )
    document.querySelectorAll('.about-reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style>{styles}</style>

      <div className="about-noise-overlay" />
      <div className="about-ambient-glow about-ambient-glow-1" />
      <div className="about-ambient-glow about-ambient-glow-2" />
      <div className="about-grid-pattern" />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData, null, 2) }} />

      <div className="relative z-10 pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24 about-reveal">
            <div className="about-badge mb-8">
              <span className="about-badge-dot about-pulse-dot" />
              About Us
            </div>
            <h1 className="about-heading-hero mb-8">
              We are not building a product.<br />
              <span className="about-text-gradient">We are building the next layer<br />of how India moves.</span>
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
              MyOnlineJet is a next-generation aviation infrastructure and mobility platform focused on enabling Advanced Air Mobility (AAM) across India.
            </p>
          </div>

          <div className="about-glass-card p-8 md:p-12 mb-20 about-reveal">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="about-heading-section text-white mb-6">Who We Are</h2>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  At a time when most conversations revolve around aircraft and flying taxis, we are focused on something deeper, more fundamental, and far more powerful:
                </p>
                <p className="text-xl font-semibold about-text-gradient mb-6">
                  The infrastructure, systems, and networks that will make air mobility inevitable.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  We are designing and building the foundational layer that will connect Vertiports, Operators, Cities, and eventually people into a seamless, intelligent, and scalable aerial mobility ecosystem.
                </p>
              </div>
              <div className="bg-surface-elevated p-8 rounded-2xl border border-border-subtle">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div className="p-4 rounded-xl hover:bg-surface-hover transition-colors">
                    <i className="fas fa-building text-3xl text-brand-red mb-3" />
                    <p className="font-semibold text-white text-sm">Vertiports</p>
                  </div>
                  <div className="p-4 rounded-xl hover:bg-surface-hover transition-colors">
                    <i className="fas fa-microchip text-3xl text-brand-red mb-3" />
                    <p className="font-semibold text-white text-sm">Operators</p>
                  </div>
                  <div className="p-4 rounded-xl hover:bg-surface-hover transition-colors">
                    <i className="fas fa-city text-3xl text-brand-red mb-3" />
                    <p className="font-semibold text-white text-sm">Cities</p>
                  </div>
                  <div className="p-4 rounded-xl hover:bg-surface-hover transition-colors">
                    <i className="fas fa-users text-3xl text-brand-red mb-3" />
                    <p className="font-semibold text-white text-sm">People</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="py-8 mb-20 about-reveal">
            <h2 className="about-heading-section text-center text-white mb-12">Why We Exist</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12">
              <div className="text-center p-4 sm:p-6">
                <div className="about-icon-box mx-auto mb-5">
                  <i className="fas fa-car-side" />
                </div>
                <h3 className="about-heading-card text-white mb-2">Roads enabled cars</h3>
                <p className="text-text-muted text-sm">The first great mobility shift</p>
              </div>
              <div className="text-center p-6">
                <div className="about-icon-box mx-auto mb-5">
                  <i className="fas fa-train" />
                </div>
                <h3 className="about-heading-card text-white mb-2">Railways connected cities</h3>
                <p className="text-text-muted text-sm">The second industrial revolution</p>
              </div>
              <div className="text-center p-6">
                <div className="about-icon-box mx-auto mb-5">
                  <i className="fas fa-plane" />
                </div>
                <h3 className="about-heading-card text-white mb-2">Aviation compressed distance</h3>
                <p className="text-text-muted text-sm">The global connector</p>
              </div>
            </div>
            <div className="about-glass-card p-8 md:p-10 text-center">
              <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
                Urban congestion is rising. Time is becoming the most expensive resource. Cities are expanding faster than infrastructure can keep up. And above all of this... there is an underutilized layer. <strong className="text-brand-red">The sky.</strong>
              </p>
              <p className="mt-6 font-semibold text-white">
                MyOnlineJet exists to unlock that layer, not as a concept, but as a structured, operational reality.
              </p>
            </div>
          </div>

          <div className="about-section-divider mb-20" />

          <div className="mb-20 about-reveal">
            <h2 className="about-heading-section text-center text-white mb-12">What We Are Building</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {whatWeBuild.map((item) => (
                <div key={item.title} className="about-glass-card p-6 sm:p-8 about-step-card">
                  <div className="about-step-number mb-4">{item.number}</div>
                  <div className="about-icon-box mb-5">
                    <i className={`fas fa-${item.icon}`} />
                  </div>
                  <h3 className="about-heading-card text-white mb-3">{item.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">{item.description}</p>
                  <Link href={item.href} className="about-link-arrow">
                    {item.label} <i className="fas fa-arrow-right text-xs" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20 about-reveal">
            <h2 className="about-heading-section text-center text-white mb-12">Our Approach</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {approach.map((item) => (
                <div key={item.title} className="about-glass-card p-6 sm:p-8 text-center">
                  <div className="about-icon-box mx-auto mb-5">
                    <i className={`fas fa-${item.icon}`} />
                  </div>
                  <h3 className="about-heading-card text-white">{item.title}</h3>
                </div>
              ))}
            </div>
            <p className="text-center text-text-muted mt-8 italic text-sm">
              We are not rushing to launch. We are preparing to scale.
            </p>
          </div>

          <div className="about-section-divider mb-20" />

          <div className="about-glass-card p-8 md:p-12 mb-20 about-reveal" style={{ background: 'linear-gradient(135deg, rgba(20,20,20,0.9) 0%, rgba(15,15,15,0.95) 100%)' }}>
            <h2 className="about-heading-section text-center text-white mb-10">What Makes Us Different</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-text-muted mb-6 text-sm uppercase tracking-wider font-semibold">Most players are approaching this space as:</p>
                <div className="space-y-1">
                  {comparison.map((item) => (
                    <div key={item} className="about-check-item">
                      <span className="about-check-icon fail"><i className="fas fa-times" /></span>
                      <span className="text-text-secondary">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-brand-red mb-6 text-sm uppercase tracking-wider font-semibold">We are approaching it as:</p>
                <div className="space-y-1">
                  {direction.map((item) => (
                    <div key={item} className="about-check-item">
                      <span className="about-check-icon success"><i className="fas fa-check" /></span>
                      <span className="text-white font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="about-glass-card p-8 md:p-12 mb-20 about-reveal">
            <div className="flex flex-col md:flex-row gap-10 items-start">
              <div className="about-avatar-glow shrink-0 mx-auto md:mx-0">
                <Image
                  src="https://myonlinejet.com/images/Founder.webp"
                  alt="Amit Kumar - Founder of MyOnlineJet"
                  width={120}
                  height={120}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex-1">
                <div className="about-quote-block text-text-secondary mb-8 leading-relaxed">
                  <p className="relative z-10 italic text-lg">
                    When I first started studying this space, I realized something most people were missing. The future of air mobility is not about flying vehicles. It is about how movement will be structured, controlled, and scaled. Infrastructure comes before adoption. Systems come before scale. And the ones who understand this early don&apos;t just participate in the future - they shape it.
                  </p>
                </div>
                <p className="font-bold text-white text-lg">- Amit Kumar</p>
                <p className="text-text-muted text-sm">Founder &amp; CEO, MyOnlineJet</p>
                <a
                  href="https://www.linkedin.com/in/amit-kr-debana/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-brand-red font-semibold mt-6 hover:gap-3 transition-all duration-300 text-sm"
                >
                  <i className="fab fa-linkedin text-lg" />
                  Connect on LinkedIn
                  <i className="fas fa-external-link-alt text-xs" />
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-20 about-reveal">
            <div className="about-glass-card p-8">
              <div className="about-icon-box mb-6">
                <i className="fas fa-eye" />
              </div>
              <h2 className="about-heading-section text-white mb-4">Our Vision</h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                To enable a future where distance is no longer a constraint, cities are seamlessly connected, mobility is intelligent, efficient, and elevated. And where India does not just adopt advanced air mobility, but leads its infrastructure and ecosystem globally.
              </p>
              <Link href="/vision-mission" className="about-link-arrow">
                Explore vision <i className="fas fa-arrow-right text-xs" />
              </Link>
            </div>
            <div className="about-glass-card p-8">
              <div className="about-icon-box mb-6">
                <i className="fas fa-shield-alt" />
              </div>
              <h2 className="about-heading-section text-white mb-4">Our Responsibility</h2>
              <p className="text-text-secondary leading-relaxed">
                Safety-first thinking. Regulatory alignment. Sustainable infrastructure development. Long-term value creation. Because building in aviation is not just about innovation - it is about trust.
              </p>
            </div>
          </div>

          <div className="about-section-divider mb-20" />

          <div className="text-center mb-20 about-reveal">
            <h2 className="about-heading-section text-white mb-6">The Road Ahead</h2>
            <p className="text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
              We are at the beginning of a shift that will redefine mobility. The timelines will evolve. The technologies will mature. The ecosystem will expand. But one thing is certain - the future of movement will not remain limited to the ground.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/partner-with-us" className="about-btn-primary">
                Become a Partner
              </Link>
              <Link href="/contact" className="about-btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="about-cta-gradient rounded-2xl p-8 md:p-10 text-center about-reveal">
            <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Whether you are a partner, an operator, an investor, or simply someone who believes in the future, we invite you to be a part of this journey. Because this is not just about building a company. It is about building <strong className="text-white">the next layer of mobility.</strong>
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/early-access" className="about-btn-primary">
                Join Early Access
              </Link>
              <Link href="/investors" className="about-btn-secondary">
                Investor Relations
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

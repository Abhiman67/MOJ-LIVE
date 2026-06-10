'use client'

import Image from 'next/image'
import Script from 'next/script'
import Link from 'next/link'
import type { MouseEvent as ReactMouseEvent } from 'react'
import { createElement, useEffect, useMemo, useRef, useState } from 'react'

type ModalId = 'advisor-modal' | 'career-modal' | null

const visionCards = [
  {
    className: 'bento-item bento-item-large reveal',
    iconClass: 'fas fa-city text-3xl text-[#FF4444]',
    iconWrapClass: 'w-16 h-16 rounded-2xl bg-[#C50000]/10 flex items-center justify-center mb-6 border border-[#C50000]/20',
    title: 'Urban Integration',
    description:
      "Vertiports designed for seamless integration with existing urban infrastructure and transportation networks. We don't just add flying vehicles - we weave them into the fabric of the city.",
    chips: ['Smart Routing', 'Multi-modal']
  },
  {
    className: 'bento-item bento-item-tall reveal reveal-delay-1',
    iconClass: 'fas fa-leaf text-3xl text-green-400',
    iconWrapClass: 'w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center mb-6 border border-green-500/20',
    title: 'Sustainability First',
    description:
      'Electric vehicles and renewable energy-powered infrastructure for minimal environmental impact. Our vertiports generate 40% of their own energy needs.'
  },
  {
    className: 'bento-item reveal reveal-delay-2',
    iconClass: 'fas fa-shield-alt text-2xl text-blue-400',
    iconWrapClass: 'w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-5 border border-blue-500/20',
    title: 'Safety & Reliability',
    description: 'Advanced AI systems and redundant safety mechanisms ensuring passenger security at all times.'
  },
  {
    className: 'bento-item reveal reveal-delay-3',
    iconClass: 'fas fa-network-wired text-2xl text-purple-400',
    iconWrapClass: 'w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-5 border border-purple-500/20',
    title: 'Network Effects',
    description: 'Connected vertiport networks that scale exponentially with each new node added to the grid.'
  },
  {
    className: 'bento-item reveal reveal-delay-2',
    iconClass: 'fas fa-rocket text-2xl text-orange-400',
    iconWrapClass: 'w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center border border-orange-500/20 shrink-0',
    title: 'Rapid Deployment',
    description: 'Modular vertiport design enables deployment in under 6 months per location.',
    wide: true
  }
]

const techCards = [
  {
    index: '01',
    title: 'Smart Operations',
    description:
      'Intelligent systems for real-time air traffic management, scheduling, and safety monitoring powered by proprietary AI.',
    tags: ['Machine Learning', 'Predictive Analytics']
  },
  {
    index: '02',
    title: 'Sustainable Infrastructure',
    description: 'Renewable energy-powered vertiports with minimal environmental footprint and closed-loop energy systems.',
    tags: ['Solar Arrays', 'Green Hydrogen'],
  },
  {
    index: '03',
    title: 'Smart Integration',
    description:
      'Seamless connectivity with existing transportation networks and urban infrastructure through open APIs.',
    tags: ['API First', 'IoT Sensors']
  }
]

const advisoryChecks = [
  'Provide strategic guidance on technology development',
  'Help establish industry partnerships and collaborations',
  'Advise on regulatory compliance and safety standards'
]

const expertiseCards = [
  { icon: 'fas fa-plane', title: 'Aviation', subtitle: 'Aerospace & Flight Ops', tone: 'blue' },
  { icon: 'fas fa-solar-panel', title: 'Energy', subtitle: 'Sustainable Systems', tone: 'yellow' },
  { icon: 'fas fa-city', title: 'Urban', subtitle: 'Planning & Design', tone: 'purple' },
  { icon: 'fas fa-balance-scale', title: 'Regulatory', subtitle: 'Compliance & Policy', tone: 'red' }
] as const

const careerHighlights = [
  'All positions will be advertised through official channels',
  'Transparent and merit-based selection process',
  'Competitive compensation packages with benefits',
  'Opportunities for professional growth and development'
]

const footerColumns = [
  {
    title: 'Company',
    links: [
      { href: '/about-us', label: 'About Us' },
      { href: '/company-profile', label: 'Company Profile' },
      { href: '/founder', label: 'Founder & CEO' },
      { href: '/vision-mission', label: 'Vision & Mission' },
      { href: '/technology', label: 'Technology' }
    ]
  },
  {
    title: 'Infrastructure',
    links: [
      { href: '/vertiports', label: 'Vertiports' },
      { href: '/evtol-infrastructure', label: 'eVTOL Infrastructure' },
      { href: '/ecosystem-integration', label: 'Ecosystem Integration' },
      { href: '/services', label: 'All Services' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { href: 'https://news.myonlinejet.com', label: 'Blog', external: true },
      { href: '/whitepapers', label: 'Whitepapers' },
      { href: '/faq', label: 'FAQ' },
      { href: '/contact', label: 'Contact Us' }
    ]
  }
]

function useRevealEffects() {
  useEffect(() => {
    const revealEls = Array.from(document.querySelectorAll<HTMLElement>('.reveal'))
    if (!('IntersectionObserver' in window)) {
      revealEls.forEach((el) => el.classList.add('active'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    revealEls.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

function useStatCounters() {
  useEffect(() => {
    const stats = Array.from(document.querySelectorAll<HTMLElement>('.stat-value'))
    if (!stats.length || !('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const stat = entry.target as HTMLElement
          const target = Number(stat.dataset.target || '0')
          const suffix = stat.dataset.suffix || ''
          let current = 0
          const increment = target / 50
          const timer = window.setInterval(() => {
            current += increment
            if (current >= target) {
              window.clearInterval(timer)
              stat.textContent = `${target}${suffix}`
            } else {
              stat.textContent = `${Math.floor(current)}${suffix}`
            }
          }, 30)
          observer.unobserve(stat)
        })
      },
      { threshold: 0.5 }
    )

    stats.forEach((stat) => observer.observe(stat))
    return () => observer.disconnect()
  }, [])
}

export function HomeLanding() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeModal, setActiveModal] = useState<ModalId>(null)
  const [scrolled, setScrolled] = useState(false)
  const heroTiltRef = useRef<HTMLDivElement | null>(null)

  useRevealEffects()
  useStatCounters()

  const navLinks = useMemo(
    () => [
      { href: '#vision', label: 'Vision' },
      { href: '#technology', label: 'Technology' },
      { href: 'https://news.myonlinejet.com', label: 'News', external: true },
      { href: '#advisors', label: 'Advisory' },
      { href: '#careers', label: 'Careers' }
    ],
    []
  )

  useEffect(() => {
    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0
      const progressEl = document.getElementById('scrollProgress')
      if (progressEl) {
        progressEl.style.transform = `scaleX(${progress})`
      }
      setScrolled(window.scrollY > 50)
    }

    const onMove = (event: globalThis.MouseEvent) => {
      const heroTilt = heroTiltRef.current
      if (!heroTilt) return
      const xAxis = (window.innerWidth / 2 - event.pageX) / 50
      const yAxis = (window.innerHeight / 2 - event.pageY) / 50
      heroTilt.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    document.addEventListener('mousemove', onMove)
    onScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
      document.removeEventListener('mousemove', onMove)
    }
  }, [])

  useEffect(() => {
    const body = document.body
    body.style.overflow = activeModal ? 'hidden' : 'auto'
    return () => {
      body.style.overflow = 'auto'
    }
  }, [activeModal])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveModal(null)
        setMobileOpen(false)
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    const cards = Array.from(document.querySelectorAll<HTMLElement>('.spotlight-card, .bento-item'))
    const handleMouseMove = (event: MouseEvent) => {
      const card = event.currentTarget as HTMLElement
      const rect = card.getBoundingClientRect()
      const x = ((event.clientX - rect.left) / rect.width) * 100
      const y = ((event.clientY - rect.top) / rect.height) * 100
      card.style.setProperty('--mouse-x', `${x}%`)
      card.style.setProperty('--mouse-y', `${y}%`)
    }

    cards.forEach((card) => card.addEventListener('mousemove', handleMouseMove))
    return () => {
      cards.forEach((card) => card.removeEventListener('mousemove', handleMouseMove))
    }
  }, [])

  const scrollToHash = (hash: string) => (event: ReactMouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    const target = document.querySelector(hash)
    if (target instanceof HTMLElement) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setMobileOpen(false)
  }

  const openModal = (id: Exclude<ModalId, null>) => setActiveModal(id)
  const closeModal = () => setActiveModal(null)

  return (
    <div className="home-page relative overflow-x-hidden text-white">
      <div className="scroll-progress" id="scrollProgress" />
      <div className="aurora-bg" />
      <div className="noise-overlay" />

      <nav
        id="navbar"
        className={`nav-glass fixed top-0 z-50 w-full transition-all duration-500 ${scrolled ? 'is-scrolled' : ''}`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="flex h-16 items-center justify-between sm:h-20">
            <div className="z-50 flex items-center space-x-3">
              <Image
                src="https://myonlinejet.com/images/Logo.webp"
                alt="MyOnlineJet"
                width={168}
                height={48}
                className="h-8 w-auto brightness-0 invert sm:h-10"
                priority
              />
            </div>

            <div className="hidden items-center space-x-10 lg:flex">
              {navLinks.map((link) =>
                link.external ? (
                  <a key={link.href} href={link.href} className="home-nav-link" target="_blank" rel="noreferrer noopener">
                    {link.label}
                  </a>
                ) : (
                  <a key={link.href} href={link.href} className="home-nav-link" onClick={scrollToHash(link.href)}>
                    {link.label}
                  </a>
                )
              )}
              <a href="#contact" className="btn-primary text-sm px-7 py-3" onClick={scrollToHash('#contact')}>
                Contact Us
              </a>
            </div>

            <button
              type="button"
              className={`mobile-toggle lg:hidden z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 ${mobileOpen ? 'hamburger-active' : ''}`}
              aria-label="Toggle mobile menu"
              onClick={() => setMobileOpen((value) => !value)}
            >
              <span className="hamburger-line" />
              <span className="hamburger-line" />
              <span className="hamburger-line" />
            </button>
          </div>
        </div>

        {mobileOpen ? (
          <div className="fixed inset-0 z-40 flex items-start justify-center bg-[rgba(3,7,18,0.94)] px-4 py-6 lg:hidden">
            <div className="mobile-menu-shell dark w-full max-w-[22rem] overflow-hidden rounded-[1.9rem] bg-[#0b1020] shadow-[0_40px_100px_rgba(0,0,0,0.55)]">
              <div className="px-4 py-4">
                <div className="space-y-2">
                  {navLinks.map((link) =>
                    link.external ? (
                      <a key={link.href} href={link.href} className={`mobile-menu-item dark ${link.label === 'News' ? 'is-active' : ''}`} target="_blank" rel="noreferrer noopener" onClick={() => setMobileOpen(false)}>
                        {link.label}
                      </a>
                    ) : (
                      <a key={link.href} href={link.href} className="mobile-menu-item dark" onClick={(e) => { scrollToHash(link.href)(e); setMobileOpen(false); }}>
                        {link.label}
                      </a>
                    )
                  )}
                </div>
                <div className="mt-4">
                  <a href="#contact" className="mobile-menu-cta dark" onClick={(e) => { scrollToHash('#contact')(e); setMobileOpen(false); }}>
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </nav>

      <section className="relative flex min-h-screen items-center overflow-hidden px-4 pt-16 sm:px-6 sm:pt-20 lg:px-10">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="space-y-5 sm:space-y-8 lg:col-span-7 reveal active">
            <div className="luxury-badge reveal">
              <span>Est. 2023 - Jaipur, India</span>
            </div>

            <h1 className="font-display text-[clamp(1.8rem,7vw,4.5rem)] leading-[1.1] tracking-[-0.03em]">
              <span className="block text-white">REDEFINING</span>
              <span className="text-gradient-red text-glow mt-1 sm:mt-2 block">URBAN AIR</span>
              <span className="text-gradient mt-1 sm:mt-2 block">MOBILITY</span>
            </h1>

            <p className="max-w-xl text-sm leading-7 text-text-secondary sm:text-base md:text-lg reveal reveal-delay-1">
              Pioneering India&apos;s first smart vertiport infrastructure. Starting from Jaipur, building sustainable air transportation for future cities.
            </p>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap sm:gap-4 reveal reveal-delay-2">
              <a href="#vision" className="btn-primary" onClick={scrollToHash('#vision')}>
                <span>Explore Vision</span>
                <i className="fas fa-arrow-right ml-3 text-sm" />
              </a>
              <a href="#technology" className="btn-secondary" onClick={scrollToHash('#technology')}>
                <span>View Technology</span>
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6 sm:gap-8 md:grid-cols-4 reveal reveal-delay-3">
              <div className="space-y-1 sm:space-y-2">
                <div className="stat-value text-xl sm:text-3xl md:text-4xl lg:stat-value" data-target="15" data-suffix="B+">0</div>
                <p className="text-xs font-medium text-text-muted sm:text-sm">Billion Market</p>
              </div>
              <div className="space-y-1 sm:space-y-2">
                <div className="stat-value text-xl sm:text-3xl md:text-4xl lg:stat-value" data-target="50" data-suffix="+">0</div>
                <p className="text-xs font-medium text-text-muted sm:text-sm">Cities by 2030</p>
              </div>
              <div className="space-y-1 sm:space-y-2">
                <div className="stat-value text-xl sm:text-3xl md:text-4xl lg:stat-value" data-target="85" data-suffix="%">0</div>
                <p className="text-xs font-medium text-text-muted sm:text-sm">CO₂ Reduction</p>
              </div>
              <div className="space-y-1 sm:space-y-2">
                <div className="stat-value text-xl sm:text-3xl md:text-4xl lg:stat-value" data-target="70" data-suffix="%">0</div>
                <p className="text-xs font-medium text-text-muted sm:text-sm">Faster Travel</p>
              </div>
            </div>
          </div>

          <div className="relative lg:col-span-5 reveal reveal-delay-1">
            <div ref={heroTiltRef} id="heroTilt" className="tilt-card relative">
              <div className="spotlight-card float-slow p-2 sm:p-3">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                  <Image
                    src="https://myonlinejet.com/images/MOJ_Vertiport.webp"
                    alt="MyOnlineJet Vertiport Visualization"
                    fill
                    className="tilt-content object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <div className="tilt-content absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                    <div className="mb-2 flex items-center justify-between sm:mb-3">
                      <span className="text-sm font-semibold text-white sm:text-lg">Jaipur Vertiport</span>
                      <span className="rounded-full border border-green-500/30 bg-green-500/20 px-2 py-0.5 text-[10px] text-green-400 backdrop-blur-md sm:px-3 sm:py-1 sm:text-xs">
                        ACTIVE
                      </span>
                    </div>
                    <div className="h-1 overflow-hidden rounded-full bg-white/20">
                      <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-[#C50000] to-[#FF6B35]" />
                    </div>
                    <p className="mt-1 text-[10px] text-white/60 sm:mt-2 sm:text-xs">Development Phase 3 of 4</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 -top-4 z-20 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#C50000] to-[#FF6B35] shadow-2xl shadow-[#C50000]/30 float-medium sm:-right-6 sm:-top-6 sm:h-16 sm:w-16 sm:rounded-2xl">
                <i className="fas fa-bolt text-base text-white sm:text-xl" />
              </div>

              <div className="glass absolute -bottom-3 -left-3 z-20 rounded-lg px-3 py-2 float-medium sm:-bottom-4 sm:-left-4 sm:rounded-xl sm:px-4 sm:py-3" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#C50000]/20 sm:h-8 sm:w-8">
                    <i className="fas fa-satellite-dish text-[10px] text-[#FF4444] sm:text-xs" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold text-white sm:text-xs">AI Traffic Control</p>
                    <p className="text-[8px] text-gray-400 sm:text-[10px]">Real-time monitoring</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      <div className="overflow-hidden border-y border-border-subtle py-12">
        <div className="marquee-container">
          <div className="marquee-content">
            {['VERTIPORTS', 'eVTOL', 'AIR MOBILITY', 'JAIPUR', 'SUSTAINABLE', 'FUTURE'].flatMap((item, index) => (
              <span
                key={`${item}-${index}`}
                className={`mx-8 text-6xl font-display md:text-8xl ${index % 2 === 0 ? 'text-white/5' : 'text-brand-red-dim/20'}`}
              >
                {item}
              </span>
            ))}
            {['VERTIPORTS', 'eVTOL', 'AIR MOBILITY', 'JAIPUR', 'SUSTAINABLE', 'FUTURE'].flatMap((item, index) => (
              <span
                key={`${item}-b-${index}`}
                className={`mx-8 text-6xl font-display md:text-8xl ${index % 2 === 0 ? 'text-white/5' : 'text-brand-red-dim/20'}`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <section id="vision" className="relative px-4 py-12 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center reveal sm:mb-16 lg:mb-20">
            <h2 className="font-display mb-3 text-2xl sm:text-4xl sm:mb-6 md:text-6xl lg:text-7xl">
              OUR VISION FOR<br />
              <span className="text-gradient-red">INDIA&apos;S FUTURE</span>
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-gray-400 sm:text-lg md:text-xl">
              Building accessible, sustainable, and efficient urban air mobility infrastructure for every Indian city.
            </p>
          </div>

          <div className="bento-grid">
            {visionCards.map((card) => (
              <div key={card.title} className={card.className}>
                <div className="h-full flex flex-col justify-between">
                  <div className={card.iconWrapClass}>
                    <i className={card.iconClass} />
                  </div>
                  <div>
                    <h3 className="mb-3 font-display text-2xl text-white sm:text-3xl">{card.title}</h3>
                    <p className={`leading-relaxed ${card.wide ? 'text-sm text-gray-400' : 'text-sm text-gray-400 sm:text-lg'}`}>
                      {card.description}
                    </p>
                  </div>
                  {'chips' in card && card.chips ? (
                    <div className="mt-8 flex gap-4">
                      {card.chips.map((chip) => (
                        <div key={chip} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-400">
                          {chip}
                        </div>
                      ))}
                    </div>
                  ) : null}
                  {card.title === 'Sustainability First' ? (
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Solar Integration</span>
                        <span className="text-green-400">100%</span>
                      </div>
                      <div className="h-1 overflow-hidden rounded-full bg-white/10">
                        <div className="h-full w-full rounded-full bg-green-500" />
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Carbon Offset</span>
                        <span className="text-green-400">85%</span>
                      </div>
                      <div className="h-1 overflow-hidden rounded-full bg-white/10">
                        <div className="h-full w-[85%] rounded-full bg-green-500" />
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider reveal" />

      <section id="technology" className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C50000]/5 blur-[80px] sm:h-[800px] sm:w-[800px] sm:blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-12 grid items-center gap-10 sm:mb-16 sm:gap-12 lg:mb-20 lg:grid-cols-2 lg:gap-16">
            <div className="reveal">
              <div className="luxury-badge mb-4 sm:mb-6">
                <span>Platform Overview</span>
              </div>
              <h2 className="font-display mb-4 text-3xl sm:text-4xl sm:mb-6 md:text-6xl lg:text-7xl">
                ADVANCED<br />
                <span className="text-gradient-red">TECHNOLOGY</span>
              </h2>
              <p className="text-base leading-relaxed text-gray-400 sm:text-lg md:text-xl">
                Our integrated technology stack powers every aspect of urban air mobility - from passenger booking to air traffic control.
              </p>
            </div>

            <div className="reveal reveal-delay-1 grid grid-cols-3 gap-3 sm:gap-6">
              {[
                { value: '99.9%', label: 'Uptime' },
                { value: '100%', label: 'Renewable' },
                { value: '24/7', label: 'Operations' }
              ].map((item) => (
                <div key={item.label} className="glass rounded-xl p-4 text-center sm:rounded-2xl sm:p-6">
                  <div className="mb-1 font-display text-lg text-white sm:text-2xl md:text-3xl">{item.value}</div>
                  <p className="text-[10px] uppercase tracking-wider text-gray-500 sm:text-xs">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
            {techCards.map((card, index) => (
              <div key={card.index} className={`spotlight-card p-6 sm:p-8 reveal ${index === 1 ? 'reveal-delay-1' : index === 2 ? 'reveal-delay-2' : ''}`}>
                <div className="mb-4 font-display text-4xl text-white/10 sm:mb-6 sm:text-5xl md:text-6xl">{card.index}</div>
                <h3 className="mb-3 font-display text-xl text-white sm:mb-4 sm:text-2xl">{card.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-400 sm:mb-6 sm:text-base">{card.description}</p>
                <div className="flex flex-wrap gap-2">
                  {card.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-gray-400 sm:px-3 sm:py-1 sm:text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider reveal" />

      <section id="advisors" className="px-4 py-12 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="reveal lg:sticky lg:top-32">
            <div className="luxury-badge mb-4 sm:mb-6">
              <span>Strategic Network</span>
            </div>
            <h2 className="font-display mb-4 text-3xl sm:text-4xl sm:mb-6 md:text-6xl">
              ADVISORY<br />
              <span className="text-gradient-red">NETWORK</span>
            </h2>
            <p className="mb-6 text-base leading-relaxed text-gray-400 sm:mb-8 sm:text-lg md:text-xl">
              We are seeking experienced professionals in aviation, urban planning, sustainable technology, and transportation infrastructure to provide strategic guidance.
            </p>

            <div className="mb-8 space-y-3 sm:mb-10 sm:space-y-4">
              {advisoryChecks.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-3 sm:gap-4 sm:p-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#C50000]/10 sm:h-10 sm:w-10">
                    <i className="fas fa-check text-xs text-[#FF4444] sm:text-sm" />
                  </div>
                  <span className="pt-1 text-xs text-gray-300 sm:pt-2 sm:text-sm">{item}</span>
                </div>
              ))}
            </div>

            <button type="button" className="magnetic-btn w-full lg:w-auto" onClick={() => openModal('advisor-modal')}>
              <i className="fas fa-user-plus mr-3" />
              Express Interest
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 reveal reveal-delay-1">
            {expertiseCards.map((card) => (
              <div key={card.title} className="spotlight-card group p-4 text-center sm:p-6 md:p-8">
                <div
                  className={`mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl border transition-transform group-hover:scale-110 sm:mb-6 sm:h-16 sm:w-16 sm:rounded-2xl ${
                    card.tone === 'blue'
                      ? 'border-blue-500/20 bg-blue-500/10'
                      : card.tone === 'yellow'
                        ? 'border-yellow-500/20 bg-yellow-500/10'
                        : card.tone === 'purple'
                          ? 'border-purple-500/20 bg-purple-500/10'
                          : 'border-[#C50000]/20 bg-[#C50000]/10'
                  }`}
                >
                  <i className={`${card.icon} text-xl sm:text-3xl ${card.tone === 'blue' ? 'text-blue-400' : card.tone === 'yellow' ? 'text-yellow-400' : card.tone === 'purple' ? 'text-purple-400' : 'text-[#FF4444]'}`} />
                </div>
                <h4 className="mb-1 font-display text-base text-white sm:mb-2 sm:text-lg">{card.title}</h4>
                <p className="text-xs text-gray-500 sm:text-sm">{card.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0A0F1E] px-4 py-12 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-end justify-between reveal sm:mb-12">
            <div>
              <div className="luxury-badge mb-3 sm:mb-4">
                <span>Latest Updates</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                FROM THE <span className="text-gradient-red">NEWSROOM</span>
              </h2>
            </div>
            <a href="https://news.myonlinejet.com" className="hidden items-center gap-2 text-gray-400 transition-colors hover:text-white sm:flex" target="_blank" rel="noreferrer noopener">
              <span>View All</span>
              <i className="fas fa-arrow-right" />
            </a>
          </div>
          {createElement('moj-news-widget')}
        </div>
      </section>

      <section id="careers" className="relative px-4 py-12 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center reveal sm:mb-16">
            <h2 className="font-display mb-4 text-3xl sm:text-4xl sm:mb-6 md:text-6xl lg:text-7xl">
              CAREER<br />
              <span className="text-gradient-red">OPPORTUNITIES</span>
            </h2>
            <p className="mx-auto max-w-2xl text-base text-gray-400 sm:text-lg md:text-xl">
              Join us in building India&apos;s urban air mobility infrastructure. Long-term careers with competitive benefits.
            </p>
          </div>

          <div className="spotlight-card mb-10 border-l-4 border-l-[#C50000] p-5 sm:p-8 lg:p-12 reveal">
            <div className="mb-6 flex flex-col items-start gap-4 sm:mb-8 sm:flex-row sm:gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#C50000]/20 bg-[#C50000]/10 sm:h-14 sm:w-14 sm:rounded-2xl">
                <i className="fas fa-bullhorn text-base text-[#FF4444] sm:text-xl" />
              </div>
              <div>
                <h3 className="mb-2 font-display text-lg text-white sm:text-2xl">Career Opportunities Notice</h3>
                <p className="text-sm text-gray-400 sm:text-base">
                  MyOnlineJet is developing long-term career opportunities in urban air mobility infrastructure. Positions will be announced following standard recruitment procedures.
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
              {careerHighlights.map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-xl bg-white/5 p-3 sm:gap-3 sm:p-4">
                  <i className="fas fa-check mt-0.5 text-xs text-[#FF4444] sm:mt-1 sm:text-sm" />
                  <span className="text-xs text-gray-300 sm:text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: 'fas fa-drafting-compass',
                title: 'Infrastructure Engineers',
                description: 'Design and development of vertiport infrastructure and facilities.',
                tone: 'blue'
              },
              {
                icon: 'fas fa-robot',
                title: 'AI Systems Specialists',
                description: 'Development of AI systems for air traffic management and operations.',
                tone: 'purple'
              },
              {
                icon: 'fas fa-bolt',
                title: 'Energy Systems Engineers',
                description: 'Design and implementation of sustainable energy solutions.',
                tone: 'yellow'
              }
            ].map((item) => (
              <div key={item.title} className="spotlight-card group flex h-full flex-col p-5 text-left sm:p-6 md:p-8">
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl border transition-transform group-hover:scale-110 sm:mb-6 sm:h-16 sm:w-16 sm:rounded-2xl ${
                    item.tone === 'blue'
                      ? 'border-blue-500/20 bg-blue-500/10'
                      : item.tone === 'purple'
                        ? 'border-purple-500/20 bg-purple-500/10'
                        : 'border-yellow-500/20 bg-yellow-500/10'
                  }`}
                >
                  <i
                    className={`${item.icon} text-lg sm:text-2xl ${
                      item.tone === 'blue'
                        ? 'text-blue-400'
                        : item.tone === 'purple'
                          ? 'text-purple-400'
                          : 'text-yellow-400'
                    }`}
                  />
                </div>
                <h4 className="mb-3 font-display text-base text-white sm:mb-4 sm:text-xl">{item.title}</h4>
                <p className="mb-4 text-xs leading-relaxed text-gray-400 sm:mb-6 sm:text-sm">{item.description}</p>
                <div className="mt-auto text-xs font-medium text-[#FF4444] sm:text-sm">FUTURE OPENINGS</div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center sm:mt-16">
            <div className="inline-block max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-6 sm:rounded-3xl sm:p-8 md:p-10">
              <h3 className="mb-4 text-lg font-bold text-white sm:mb-6 sm:text-xl md:text-2xl">Register Your Interest</h3>
              <p className="mb-6 text-sm text-gray-400 sm:mb-8 sm:text-base">
                Interested in future career opportunities with MyOnlineJet? Register your interest and we&apos;ll notify you when positions become available.
              </p>
              <button type="button" className="magnetic-btn" onClick={() => openModal('career-modal')}>
                <i className="fas fa-envelope mr-3" />
                Register Interest
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="border-t border-white/10 bg-[#030712] px-4 pb-6 pt-10 sm:px-6 sm:pb-10 sm:pt-16 lg:px-10 lg:pt-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid grid-cols-1 gap-8 sm:mb-16 sm:gap-10 md:grid-cols-2 lg:grid-cols-5 lg:gap-12">
            <div className="md:col-span-2 lg:col-span-2">
              <Image
                src="https://myonlinejet.com/images/MyOnlineJet_White_Logo.png"
                alt="MyOnlineJet"
                width={220}
                height={64}
                className="mb-4 h-10 w-auto opacity-90 sm:mb-6 sm:h-12"
              />
              <p className="mb-6 max-w-sm text-xs leading-relaxed text-gray-500 sm:mb-8 sm:text-sm">
                Building India&apos;s urban air mobility infrastructure for a sustainable transportation future. Starting from Jaipur, reaching every city.
              </p>
              <div className="flex gap-2 sm:gap-3">
                {[
                  { href: 'https://www.linkedin.com/company/myonlinejet/', icon: 'fab fa-linkedin-in' },
                  { href: 'https://www.facebook.com/myonlinejet/', icon: 'fab fa-facebook-f' },
                  { href: 'https://twitter.com/myonlinejet', icon: 'fab fa-twitter' },
                  { href: 'https://www.youtube.com/@myonlinejet', icon: 'fab fa-youtube' }
                ].map((social) => (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition-all hover:border-[#C50000]/30 hover:bg-[#C50000]/20 hover:text-white sm:h-10 sm:w-10"
                  >
                    <i className={social.icon} />
                  </a>
                ))}
              </div>
            </div>

            {footerColumns.map((group) => (
              <div key={group.title}>
                <h4 className="footer-heading">{group.title}</h4>
                <div className="mt-3 space-y-2 sm:mt-4 sm:space-y-3">
                  {group.links.map((link) =>
                    link.external ? (
                      <a key={link.href} href={link.href} className="block text-xs text-gray-500 transition-colors hover:text-white sm:text-sm" target="_blank" rel="noreferrer noopener">
                        {link.label}
                      </a>
                    ) : (
                      <Link key={link.href} href={link.href} className="block text-xs text-gray-500 transition-colors hover:text-white sm:text-sm">
                        {link.label}
                      </Link>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mb-6 border-t border-white/10 pt-6 sm:mb-8 sm:pt-8">
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-gray-600 sm:gap-x-8 sm:gap-y-3 sm:text-sm">
              <Link href="/privacy-policy" className="transition-colors hover:text-gray-400">
                Privacy Policy
              </Link>
              <Link href="/terms-conditions" className="transition-colors hover:text-gray-400">
                Terms of Service
              </Link>
              <Link href="/privacy-policy" className="transition-colors hover:text-gray-400">
                Cookie Policy
              </Link>
              <Link href="/legal-disclaimer" className="transition-colors hover:text-gray-400">
                Legal Disclaimer
              </Link>
              <Link href="/sitemap.xml" className="transition-colors hover:text-gray-400">
                Sitemap
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-3 text-xs text-gray-600 sm:gap-4 sm:text-sm md:flex-row">
            <p>© 2026 MyOnlineJet | iAlpha Technologies Pvt Ltd</p>
            <p>Jaipur, Rajasthan, India</p>
          </div>

          <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4 sm:mt-8 sm:rounded-2xl sm:p-5 md:p-6">
            <div className="grid gap-4 text-[10px] text-gray-500 sm:gap-6 sm:text-xs md:grid-cols-2">
              <div>
                <h5 className="mb-1 flex items-center gap-2 font-semibold text-white sm:mb-2">
                  <i className="fas fa-shield-alt text-[#C50000]" />
                  Data Protection
                </h5>
                <p className="leading-relaxed">
                  Compliant with India&apos;s DPDPA and GDPR standards. Your information is never sold or shared without explicit consent.
                </p>
              </div>
              <div>
                <h5 className="mb-1 flex items-center gap-2 font-semibold text-white sm:mb-2">
                  <i className="fas fa-gavel text-[#C50000]" />
                  Legal Disclaimer
                </h5>
                <p className="leading-relaxed">
                  All projects are subject to regulatory approvals. Information is for informational purposes only and does not constitute an offer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {activeModal ? (
        <div className="modal-overlay fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6" onClick={(event) => event.target === event.currentTarget && closeModal()}>
          <div className="spotlight-card modal-panel max-h-[90vh] w-full max-w-2xl overflow-y-auto p-5 sm:p-6 md:p-8 relative z-10">
            <div className="mb-6 flex items-start justify-between gap-4 sm:mb-8">
              <div>
                <h3 className="font-display text-lg text-white sm:text-xl md:text-2xl">
                  {activeModal === 'advisor-modal' ? 'Advisory Interest Form' : 'Career Interest Registration'}
                </h3>
                <p className="mt-1 text-xs text-gray-400 sm:mt-2 sm:text-sm">
                  {activeModal === 'advisor-modal'
                    ? 'Express interest in joining our advisory network'
                    : 'Register interest for future career opportunities'}
                </p>
              </div>
              <button
                type="button"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white/5 text-gray-400 transition-all hover:bg-white/10 hover:text-white sm:h-10 sm:w-10"
                onClick={closeModal}
              >
                <i className="fas fa-times text-sm sm:text-base" />
              </button>
            </div>

            <form
              className="space-y-4 sm:space-y-5 md:space-y-6"
              onSubmit={(event) => {
                event.preventDefault()
                alert(
                  activeModal === 'advisor-modal'
                    ? 'Thank you for expressing interest in our advisory network. We will review your submission and contact you if there is a potential match.'
                    : 'Thank you for registering your interest. You will be notified when relevant career opportunities become available.'
                )
                closeModal()
              }}
            >
              {activeModal === 'advisor-modal' ? (
                <>
                  <div className="grid gap-4 sm:gap-5 md:grid-cols-2 md:gap-6">
                    <div>
                      <label className="mb-1 block text-xs text-gray-400 sm:mb-2 sm:text-sm">Full Name</label>
                      <input type="text" className="modern-input" required />
                    </div>
                    <div>
                      <label className="mb-1 block text-xs text-gray-400 sm:mb-2 sm:text-sm">Current Position</label>
                      <input type="text" className="modern-input" required />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1 block text-xs text-gray-400 sm:mb-2 sm:text-sm">Email Address</label>
                    <input type="email" className="modern-input" required />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs text-gray-400 sm:mb-2 sm:text-sm">Area of Expertise</label>
                    <select className="modern-input">
                      <option value="">Select your expertise area</option>
                      <option value="aviation">Aviation & Aerospace</option>
                      <option value="urban">Urban Planning & Infrastructure</option>
                      <option value="sustainability">Sustainable Technology</option>
                      <option value="regulation">Regulatory Affairs</option>
                      <option value="technology">Technology Development</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-1 block text-xs text-gray-400 sm:mb-2 sm:text-sm">Brief Background (Optional)</label>
                    <textarea rows={3} className="modern-input" placeholder="Briefly describe your relevant experience" />
                  </div>
                  <p className="text-[10px] text-gray-500 sm:text-xs">
                    By submitting this form, you express interest in being considered for our advisory network. Selected candidates will be contacted for further discussion.
                  </p>
                </>
              ) : (
                <>
                  <div className="grid gap-4 sm:gap-5 md:grid-cols-2 md:gap-6">
                    <div>
                      <label className="mb-1 block text-xs text-gray-400 sm:mb-2 sm:text-sm">Full Name</label>
                      <input type="text" className="modern-input" required />
                    </div>
                    <div>
                      <label className="mb-1 block text-xs text-gray-400 sm:mb-2 sm:text-sm">Email Address</label>
                      <input type="email" className="modern-input" required />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1 block text-xs text-gray-400 sm:mb-2 sm:text-sm">Area of Interest</label>
                    <select className="modern-input">
                      <option value="">Select area of interest</option>
                      <option value="engineering">Engineering & Infrastructure</option>
                      <option value="technology">Technology & AI Systems</option>
                      <option value="operations">Operations & Management</option>
                      <option value="business">Business Development</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-1 block text-xs text-gray-400 sm:mb-2 sm:text-sm">Qualifications (Optional)</label>
                    <textarea rows={3} className="modern-input" placeholder="Briefly mention your qualifications or background" />
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-xs text-gray-400 sm:p-4 sm:text-sm">
                    <p className="mb-2 text-white font-medium">Recruitment Process:</p>
                    <div className="space-y-1 sm:space-y-2">
                      <div className="flex items-start gap-2">
                        <i className="fas fa-info-circle mt-0.5 text-[10px] text-[#FF4444] sm:mt-1 sm:text-xs" />
                        <span>All positions will be formally advertised when available</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <i className="fas fa-info-circle mt-0.5 text-[10px] text-[#FF4444] sm:mt-1 sm:text-xs" />
                        <span>Selection will follow transparent, merit-based procedures</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <i className="fas fa-info-circle mt-0.5 text-[10px] text-[#FF4444] sm:mt-1 sm:text-xs" />
                        <span>Registered candidates will receive notifications of relevant openings</span>
                      </div>
                    </div>
                  </div>
                </>
              )}

              <button type="submit" className="magnetic-btn w-full">
                <i className={`fas ${activeModal === 'advisor-modal' ? 'fa-paper-plane' : 'fa-envelope'} mr-3`} />
                {activeModal === 'advisor-modal' ? 'Submit Expression of Interest' : 'Register Interest'}
              </button>
            </form>
          </div>
        </div>
      ) : null}

      <Script src="/moj-news-widget.js" strategy="afterInteractive" />
    </div>
  )
}

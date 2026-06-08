import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'

export const metadata: Metadata = {
  title: "About MyOnlineJet | Building India's Advanced Air Mobility Infrastructure",
  description:
    "MyOnlineJet is building India's foundational vertiport network and AAM ecosystem. We focus on infrastructure, systems, and intelligent mobility layers for future cities.",
  keywords: [
    'about MyOnlineJet',
    'advanced air mobility India',
    'vertiport infrastructure',
    'AAM ecosystem',
    'Amit Kumar founder',
    'urban air mobility'
  ],
  alternates: {
    canonical: '/about-us'
  }
}

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
      founder: {
        '@type': 'Person',
        name: 'Amit Kumar'
      },
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
      isPartOf: {
        '@id': 'https://www.myonlinejet.com/'
      },
      about: {
        '@id': 'https://www.myonlinejet.com/'
      },
      description:
        'Overview of MyOnlineJet, an aviation infrastructure initiative focused on urban air mobility and vertiport systems.'
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
    description:
      'Access points to airspace. Nodes of a future mobility network. Strategic infrastructure assets.',
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
    description:
      'Multi-operator, multi-city, multi-layered. Integrating eVTOL operators, infrastructure partners, and service providers.',
    href: '/services',
    label: 'View services'
  }
]

const approach = [
  {
    icon: 'gavel',
    title: 'Working in sync with evolving regulatory frameworks'
  },
  {
    icon: 'chart-line',
    title: 'Understanding infrastructure before scaling demand'
  },
  {
    icon: 'calendar-alt',
    title: 'Prioritizing long-term systems over short-term visibility'
  }
]

const comparison = ['Aircraft companies', 'Tech experiments', 'Short-term pilots']

const direction = [
  'A long-term infrastructure and network play',
  'Nodes, not just routes',
  'Systems, not just services',
  'Decades, not quarters'
]

export default function AboutUsPage() {
  return (
    <div className="about-page relative" itemScope itemType="https://schema.org/AboutPage">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData, null, 2) }} />

      <nav className="nav-glass fixed w-full z-50 py-4 px-5 sm:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3">
            <img src="https://myonlinejet.com/images/Logo.webp" alt="MyOnlineJet" className="h-8 sm:h-10 w-auto brightness-200" />
          </Link>
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="nav-link">Home</Link>
            <a href="/about-us" className="nav-link active">About</a>
            <a href="/advanced-air-mobility" className="nav-link">AAM</a>
            <a href="/vertiports" className="nav-link">Vertiports</a>
            <a href="/technology" className="nav-link">Technology</a>
            <a href="/services" className="nav-link">Services</a>
            <a href="/partner-with-us" className="nav-link">Partners</a>
            <a href="/contact" className="btn-primary py-2 px-5 text-sm">Contact</a>
          </div>
          <button id="mobileMenuBtn" className="mobile-toggle lg:hidden inline-flex h-10 w-10 flex-col items-center justify-center gap-1.5 text-gray-400 z-50">
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>
        <div id="mobileMenu" className="lg:hidden fixed inset-0 z-40 hidden items-start justify-center bg-[rgba(3,7,18,0.94)] px-4 py-6">
          <div className="mobile-menu-shell dark w-full max-w-[22rem] overflow-hidden rounded-[1.9rem] bg-[#0b1020] shadow-[0_40px_100px_rgba(0,0,0,0.55)]">
            <div className="px-4 py-4">
              <div className="space-y-2">
                <a href="/about-us" className="mobile-menu-item dark is-active">About</a>
                <a href="/advanced-air-mobility" className="mobile-menu-item dark">Advanced Air Mobility</a>
                <a href="/vertiports" className="mobile-menu-item dark">Vertiports</a>
                <a href="/technology" className="mobile-menu-item dark">Technology</a>
                <a href="/services" className="mobile-menu-item dark">Services</a>
                <a href="/partner-with-us" className="mobile-menu-item dark">Partners</a>
              </div>
              <div className="mt-4">
                <a href="/contact" className="mobile-menu-cta dark">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="noise-overlay" />
      <div className="ambient-glow ambient-glow-1" />
      <div className="ambient-glow ambient-glow-2" />
      <div className="grid-pattern" />

      <main className="relative z-10 pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-24 reveal">
            <div className="badge mb-8">
              <span className="badge-dot pulse-dot" />
              About Us
            </div>
            <h1 className="heading-hero mb-8">
              We are not building a product.<br />
              <span className="text-gradient">We are building the next layer<br />of how India moves.</span>
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
              MyOnlineJet is a next-generation aviation infrastructure and mobility platform focused on enabling Advanced Air Mobility (AAM) across India.
            </p>
          </div>

          <div className="glass-card p-8 md:p-12 mb-20 reveal">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="heading-section text-white mb-6">Who We Are</h2>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  At a time when most conversations revolve around aircraft and flying taxis, we are focused on something deeper, more fundamental, and far more powerful:
                </p>
                <p className="text-xl font-semibold text-gradient mb-6">
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

          <div className="py-8 mb-20 reveal">
            <h2 className="heading-section text-center text-white mb-12">Why We Exist</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="text-center p-6">
                <div className="icon-box mx-auto mb-5">
                  <i className="fas fa-car-side" />
                </div>
                <h3 className="heading-card text-white mb-2">Roads enabled cars</h3>
                <p className="text-text-muted text-sm">The first great mobility shift</p>
              </div>
              <div className="text-center p-6">
                <div className="icon-box mx-auto mb-5">
                  <i className="fas fa-train" />
                </div>
                <h3 className="heading-card text-white mb-2">Railways connected cities</h3>
                <p className="text-text-muted text-sm">The second industrial revolution</p>
              </div>
              <div className="text-center p-6">
                <div className="icon-box mx-auto mb-5">
                  <i className="fas fa-plane" />
                </div>
                <h3 className="heading-card text-white mb-2">Aviation compressed distance</h3>
                <p className="text-text-muted text-sm">The global connector</p>
              </div>
            </div>
            <div className="glass-card p-8 md:p-10 text-center">
              <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
                Urban congestion is rising. Time is becoming the most expensive resource. Cities are expanding faster than infrastructure can keep up. And above all of this... there is an underutilized layer. <strong className="text-brand-red">The sky.</strong>
              </p>
              <p className="mt-6 font-semibold text-white">
                MyOnlineJet exists to unlock that layer, not as a concept, but as a structured, operational reality.
              </p>
            </div>
          </div>

          <div className="section-divider mb-20" />

          <div className="mb-20 reveal">
            <h2 className="heading-section text-center text-white mb-12">What We Are Building</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {whatWeBuild.map((item) => (
                <div key={item.title} className="glass-card p-8 step-card">
                  <div className="step-number mb-4">{item.number}</div>
                  <div className="icon-box mb-5">
                    <i className={`fas fa-${item.icon}`} />
                  </div>
                  <h3 className="heading-card text-white mb-3">{item.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">{item.description}</p>
                  <Link href={item.href} className="link-arrow">
                    {item.label} <i className="fas fa-arrow-right text-xs" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20 reveal">
            <h2 className="heading-section text-center text-white mb-12">Our Approach</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {approach.map((item) => (
                <div key={item.title} className="glass-card p-8 text-center">
                  <div className="icon-box mx-auto mb-5">
                    <i className={`fas fa-${item.icon}`} />
                  </div>
                  <h3 className="heading-card text-white">{item.title}</h3>
                </div>
              ))}
            </div>
            <p className="text-center text-text-muted mt-8 italic text-sm">
              We are not rushing to launch. We are preparing to scale.
            </p>
          </div>

          <div className="section-divider mb-20" />

          <div className="glass-card p-8 md:p-12 mb-20 reveal" style={{ background: 'linear-gradient(135deg, rgba(20,20,20,0.9) 0%, rgba(15,15,15,0.95) 100%)' }}>
            <h2 className="heading-section text-center text-white mb-10">What Makes Us Different</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-text-muted mb-6 text-sm uppercase tracking-wider font-semibold">Most players are approaching this space as:</p>
                <div className="space-y-1">
                  {comparison.map((item) => (
                    <div key={item} className="check-item">
                      <span className="check-icon fail"><i className="fas fa-times" /></span>
                      <span className="text-text-secondary">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-brand-red mb-6 text-sm uppercase tracking-wider font-semibold">We are approaching it as:</p>
                <div className="space-y-1">
                  {direction.map((item) => (
                    <div key={item} className="check-item">
                      <span className="check-icon success"><i className="fas fa-check" /></span>
                      <span className="text-white font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 md:p-12 mb-20 reveal">
            <div className="flex flex-col md:flex-row gap-10 items-start">
              <div className="avatar-glow shrink-0 mx-auto md:mx-0">
                <img
                  src="https://myonlinejet.com/images/Founder.webp"
                  alt="Amit Kumar - Founder of MyOnlineJet"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="quote-block text-text-secondary mb-8 leading-relaxed">
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

          <div className="grid md:grid-cols-2 gap-6 mb-20 reveal">
            <div className="glass-card p-8">
              <div className="icon-box mb-6">
                <i className="fas fa-eye" />
              </div>
              <h2 className="heading-section text-white mb-4">Our Vision</h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                To enable a future where distance is no longer a constraint, cities are seamlessly connected, mobility is intelligent, efficient, and elevated. And where India does not just adopt advanced air mobility, but leads its infrastructure and ecosystem globally.
              </p>
              <Link href="/vision-mission" className="link-arrow">
                Explore vision <i className="fas fa-arrow-right text-xs" />
              </Link>
            </div>
            <div className="glass-card p-8">
              <div className="icon-box mb-6">
                <i className="fas fa-shield-alt" />
              </div>
              <h2 className="heading-section text-white mb-4">Our Responsibility</h2>
              <p className="text-text-secondary leading-relaxed">
                Safety-first thinking. Regulatory alignment. Sustainable infrastructure development. Long-term value creation. Because building in aviation is not just about innovation - it is about trust.
              </p>
            </div>
          </div>

          <div className="section-divider mb-20" />

          <div className="text-center mb-20 reveal">
            <h2 className="heading-section text-white mb-6">The Road Ahead</h2>
            <p className="text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
              We are at the beginning of a shift that will redefine mobility. The timelines will evolve. The technologies will mature. The ecosystem will expand. But one thing is certain - the future of movement will not remain limited to the ground.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/partner-with-us" className="btn-primary">
                Become a Partner
              </Link>
              <Link href="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="cta-gradient rounded-2xl p-8 md:p-10 text-center reveal">
            <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Whether you are a partner, an operator, an investor, or simply someone who believes in the future, we invite you to be a part of this journey. Because this is not just about building a company. It is about building <strong className="text-white">the next layer of mobility.</strong>
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/early-access" className="btn-primary">
                Join Early Access
              </Link>
              <Link href="/investors" className="btn-secondary">
                Investor Relations
              </Link>
            </div>
          </div>
        </div>
      </main>

      <footer id="contact" className="site-footer relative z-10 bg-surface-elevated border-t border-border-subtle pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <img src="https://myonlinejet.com/images/MyOnlineJet_White_Logo.png" alt="MyOnlineJet" className="h-12 w-auto" />
              </div>
              <p className="text-text-muted text-sm leading-relaxed mb-6">Building India&apos;s urban air mobility infrastructure for a sustainable transportation future.</p>
              <div className="flex space-x-3">
                <a href="https://www.linkedin.com/company/myonlinejet/" className="social-icon"><i className="fab fa-linkedin-in" /></a>
                <a href="https://www.facebook.com/myonlinejet/" className="social-icon"><i className="fab fa-facebook-f" /></a>
                <a href="https://twitter.com/myonlinejet" className="social-icon"><i className="fab fa-twitter" /></a>
                <a href="https://www.youtube.com/@myonlinejet" className="social-icon"><i className="fab fa-youtube" /></a>
              </div>
            </div>
            <div>
              <h4 className="text-white text-sm font-bold mb-6 uppercase tracking-wider">Company</h4>
              <div className="space-y-3">
                <Link href="/" className="footer-link block">Home</Link>
                <Link href="/about-us" className="footer-link block">About Us</Link>
                <Link href="/company-profile" className="footer-link block">Company Profile</Link>
                <Link href="/vision-mission" className="footer-link block">Vision &amp; Mission</Link>
                <Link href="/technology" className="footer-link block">Technology</Link>
              </div>
            </div>
            <div>
              <h4 className="text-white text-sm font-bold mb-6 uppercase tracking-wider">Infrastructure</h4>
              <div className="space-y-3">
                <Link href="/vertiports" className="footer-link block">Vertiports</Link>
                <Link href="/evtol-infrastructure" className="footer-link block">eVTOL Infrastructure</Link>
                <Link href="/services" className="footer-link block">All Services</Link>
                <Link href="/advanced-air-mobility" className="footer-link block">Advanced Air Mobility</Link>
              </div>
            </div>
            <div>
              <h4 className="text-white text-sm font-bold mb-6 uppercase tracking-wider">Partners &amp; Careers</h4>
              <div className="space-y-3">
                <Link href="/partner-with-us" className="footer-link block">Partner With Us</Link>
                <Link href="/investors" className="footer-link block">Investors</Link>
                <Link href="/careers" className="footer-link block">Careers</Link>
                <Link href="/early-access" className="footer-link block">Early Access</Link>
              </div>
            </div>
            <div>
              <h4 className="text-white text-sm font-bold mb-6 uppercase tracking-wider">Resources &amp; Legal</h4>
              <div className="space-y-3">
                <a href="https://news.myonlinejet.com" target="_blank" rel="noopener noreferrer" className="footer-link block">Blog</a>
                <Link href="/contact" className="footer-link block">Contact</Link>
                <Link href="/privacy-policy" className="footer-link block">Privacy Policy</Link>
                <Link href="/terms-conditions" className="footer-link block">Terms of Service</Link>
              </div>
            </div>
          </div>
          <div className="border-t border-border-subtle pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-muted">
            <p>© 2026 MyOnlineJet | iAlpha Technologies Pvt Ltd | All Rights Reserved</p>
            <div className="flex gap-6">
              <a href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</a>
              <a href="/robots.txt" className="hover:text-white transition-colors">Robots.txt</a>
            </div>
          </div>
        </div>
      </footer>

      <Script id="about-us-interactions" strategy="afterInteractive">
        {`
          function closeMobileMenu() {
            var btn = document.getElementById('mobileMenuBtn');
            var menu = document.getElementById('mobileMenu');
            if (menu) menu.style.display = 'none';
            if (btn) btn.classList.remove('hamburger-active');
          }

          (function() {
            const mobileMenuBtn = document.getElementById('mobileMenuBtn');
            const mobileMenu = document.getElementById('mobileMenu');
            const nav = document.querySelector('nav');

            if (mobileMenuBtn && mobileMenu) {
              mobileMenuBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                const isOpen = mobileMenu.style.display === 'flex';
                mobileMenu.style.display = isOpen ? 'none' : 'flex';
                mobileMenuBtn.classList.toggle('hamburger-active');
              });

              const closeButton = mobileMenu.querySelector('.mobileMenuClose');
              if (closeButton) {
                closeButton.addEventListener('click', function() {
                  closeMobileMenu();
                });
              }

              mobileMenu.querySelectorAll('a').forEach(function(link) {
                link.addEventListener('click', function() {
                  closeMobileMenu();
                });
              });
            }

            const observerOptions = {
              root: null,
              rootMargin: '0px',
              threshold: 0.1
            };

            const observer = new IntersectionObserver((entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  entry.target.classList.add('visible');
                }
              });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

            window.addEventListener('scroll', function() {
              if (!nav) return;
              if (window.scrollY > 50) {
                nav.style.boxShadow = '0 4px 30px rgba(0,0,0,0.3)';
              } else {
                nav.style.boxShadow = 'none';
              }
            });

            document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
              anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) target.scrollIntoView({ behavior: 'smooth' });
              });
            });
          })();
        `}
      </Script>
    </div>
  )
}

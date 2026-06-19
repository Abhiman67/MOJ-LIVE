import type { Metadata } from 'next'
import Link from 'next/link'
import { CareersEnhancements } from '@/components/careers/CareersEnhancements'

export const metadata: Metadata = {
  title: 'Careers at MyOnlineJet | Build the Future of Urban Air Mobility | Join India\'s AAM Infrastructure Team',
  description:
    'Join MyOnlineJet to build India\'s foundational vertiport network and advanced air mobility ecosystem. Open roles in aviation research, full-stack development, partnerships & operations.',
  keywords: [
    'careers at MyOnlineJet',
    'air mobility jobs India',
    'vertiport infrastructure careers',
    'eVTOL jobs',
    'AAM ecosystem roles',
    'founder-led startup',
    'aviation research internship',
    'full stack developer aviation',
    'future mobility jobs'
  ],
  alternates: { canonical: '/careers' },
  openGraph: {
    title: 'Careers at MyOnlineJet: Build the Future of Air Mobility',
    description:
      "We're building the infrastructure, systems, and networks for India's Advanced Air Mobility. Join us to own problems that define the next 50 years.",
    url: '/careers',
    type: 'website'
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
      '@id': 'https://www.myonlinejet.com/careers/',
      url: 'https://www.myonlinejet.com/careers/',
      name: 'Careers at MyOnlineJet | Build the Future of Air Mobility',
      isPartOf: { '@id': 'https://www.myonlinejet.com/' },
      description:
        "Join MyOnlineJet to build India's first integrated Advanced Air Mobility ecosystem. Work on vertiport infrastructure, eVTOL integration, and future mobility systems.",
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.myonlinejet.com/' },
          { '@type': 'ListItem', position: 2, name: 'Careers', item: 'https://www.myonlinejet.com/careers/' }
        ]
      }
    },
    {
      '@type': 'Website',
      '@id': 'https://www.myonlinejet.com/',
      url: 'https://www.myonlinejet.com/',
      name: 'MyOnlineJet'
    }
  ]
}

const openRoles = [
  {
    title: 'Aviation Research & Strategy Intern',
    description: 'Work on AAM market research, global policy analysis, infrastructure benchmarking.',
    tags: ['Remote / Jaipur', 'Internship']
  },
  {
    title: 'Full Stack Developer (Node.js / Next.js)',
    description: 'Platform architecture, user systems, scalable backend infrastructure for air mobility orchestration.',
    tags: ['Remote / India', 'Full-time']
  },
  {
    title: 'Business Development & Partnerships Intern',
    description: 'Strategic partnerships, ecosystem onboarding, institutional collaborations across AAM ecosystem.',
    tags: ['Remote', 'Internship']
  },
  {
    title: 'Content & Communication Strategist',
    description: 'Thought leadership, founder messaging, global positioning content for next-gen mobility.',
    tags: ['Remote / Jaipur', 'Full-time / Intern']
  },
  {
    title: 'Operations & Execution Intern',
    description: 'Ground-level execution, process building, internal systems for vertiport readiness.',
    tags: ['Jaipur / Onsite', 'Internship']
  }
]

export default function CareersPage() {
  return (
    <div className="careers-page relative" itemScope itemType="https://schema.org/WebPage">
      <CareersEnhancements />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData, null, 2) }} />

      <div className="noise-overlay" />
      <div className="ambient-glow ambient-glow-1" />
      <div className="ambient-glow ambient-glow-2" />
      <div className="grid-pattern" />

      <div className="relative z-10 pt-28 pb-12 sm:pt-32 sm:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">

          {/* ===== HERO SECTION ===== */}
          <div className="text-center mb-20 reveal">
            <div className="badge mb-8">Join the Movement</div>
            <h1 className="heading-hero mb-8">
              Build the Future of<br />
              <span className="text-gradient">Air Mobility</span>
            </h1>
            <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-10 leading-relaxed">
              At MyOnlineJet, we&apos;re not just creating a company&mdash;we&apos;re building the foundational infrastructure for how cities will move in the next 50 years.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#open-roles" className="btn-primary">Explore Opportunities</a>
              <a href="#early-talent" className="btn-secondary">Join Early Access Talent Network <i className="fas fa-arrow-right ml-2 text-xs" /></a>
            </div>
          </div>

          {/* ===== OPENING STATEMENT ===== */}
          <div className="glass-card p-8 md:p-12 mb-20 reveal">
            <p className="text-text-secondary text-lg leading-relaxed mb-4">The next era of aviation will not be built by legacy thinking.</p>
            <p className="text-text-secondary text-lg leading-relaxed mb-4">
              It will be built by people who understand <strong className="text-text-primary">systems, infrastructure, scale</strong>&mdash;and who are willing to work on problems that don&apos;t yet have playbooks.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              MyOnlineJet is designing and enabling India&apos;s first integrated Advanced Air Mobility ecosystem, spanning:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 my-6 sm:my-8">
              <div className="glass-card py-4 text-center flex items-center justify-center gap-2 text-sm text-text-secondary" style={{ border: '1px solid #1f1f1f', padding: '1rem' }}>
                <i className="fas fa-charging-station text-brand-red" /> eVTOL infrastructure
              </div>
              <div className="glass-card py-4 text-center flex items-center justify-center gap-2 text-sm text-text-secondary" style={{ border: '1px solid #1f1f1f', padding: '1rem' }}>
                <i className="fas fa-city text-brand-red" /> Vertiport networks
              </div>
              <div className="glass-card py-4 text-center flex items-center justify-center gap-2 text-sm text-text-secondary" style={{ border: '1px solid #1f1f1f', padding: '1rem' }}>
                <i className="fas fa-rocket text-brand-red" /> Urban air mobility ops
              </div>
              <div className="glass-card py-4 text-center flex items-center justify-center gap-2 text-sm text-text-secondary" style={{ border: '1px solid #1f1f1f', padding: '1rem' }}>
                <i className="fas fa-link text-brand-red" /> Multi-sector integration
              </div>
            </div>
            <p className="text-text-secondary">
              If that excites you, you&apos;re in the right place.
              <Link href="/vision-mission" className="text-brand-red font-semibold hover:underline ml-1">
                Learn more about our vision <i className="fas fa-arrow-right text-xs" />
              </Link>
            </p>
          </div>

          {/* ===== WHY MYONLINEJET ===== */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-20 items-start">
            <div className="reveal">
              <h2 className="heading-section text-text-primary mb-6">Why MyOnlineJet</h2>
              <p className="text-text-secondary text-lg mb-3">
                Most companies offer jobs.<br />
                <span className="font-bold text-brand-red">We offer ownership of problems that matter.</span>
              </p>
              <ul className="space-y-4 text-text-secondary mt-6">
                <li className="flex gap-3 items-start">
                  <div className="icon-box"><i className="fas fa-check" /></div>
                  <span>Systems that impact millions of future users</span>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="icon-box"><i className="fas fa-check" /></div>
                  <span>Infrastructure that defines entire city ecosystems</span>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="icon-box"><i className="fas fa-check" /></div>
                  <span>A category that is still being written globally</span>
                </li>
              </ul>
              <p className="mt-8 italic text-text-muted text-sm">This is not a role. This is responsibility at scale.</p>
            </div>
            <div className="glass-card p-8 reveal">
              <div className="icon-box icon-box-lg mb-5"><i className="fas fa-globe-asia" /></div>
              <p className="font-semibold text-text-primary text-lg mb-4">We are building a deep-tech + infrastructure + ecosystem company. Our focus areas include:</p>
              <div className="mt-4 space-y-3">
                <Link href="/advanced-air-mobility" className="flex items-center gap-2 text-text-secondary hover:text-brand-red transition-colors py-2 border-b border-border-subtle">
                  <i className="fas fa-arrow-right text-xs text-brand-red" />Advanced Air Mobility (AAM)
                </Link>
                <Link href="/vertiports" className="flex items-center gap-2 text-text-secondary hover:text-brand-red transition-colors py-2 border-b border-border-subtle">
                  <i className="fas fa-arrow-right text-xs text-brand-red" />Vertiport Infrastructure Networks
                </Link>
                <Link href="/evtol-infrastructure" className="flex items-center gap-2 text-text-secondary hover:text-brand-red transition-colors py-2 border-b border-border-subtle">
                  <i className="fas fa-arrow-right text-xs text-brand-red" />eVTOL Integration & Operations
                </Link>
                <Link href="/ecosystem-integration" className="flex items-center gap-2 text-text-secondary hover:text-brand-red transition-colors py-2">
                  <i className="fas fa-arrow-right text-xs text-brand-red" />Smart City & Multi-Industry Integration
                </Link>
              </div>
              <p className="mt-6 text-sm text-text-muted">Unlike traditional startups, we operate at the intersection of aviation, urban infrastructure, technology systems, and policy alignment.</p>
            </div>
          </div>

          {/* ===== WHO WE'RE LOOKING FOR ===== */}
          <div className="dark-section rounded-3xl p-8 md:p-14 mb-20 reveal">
            <h2 className="heading-section text-center mb-6 text-text-primary">Who We&apos;re Looking For</h2>
            <p className="text-center text-text-secondary max-w-2xl mx-auto mb-10">We don&apos;t hire based on resumes alone. We look for people who:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 max-w-4xl mx-auto">
              <div className="glass-card p-5 flex items-center gap-4">
                <div className="icon-box"><i className="fas fa-brain" /></div>
                <span className="text-text-primary">Think in systems, not tasks</span>
              </div>
              <div className="glass-card p-5 flex items-center gap-4">
                <div className="icon-box"><i className="fas fa-flag-checkered" /></div>
                <span className="text-text-primary">Take ownership without being asked</span>
              </div>
              <div className="glass-card p-5 flex items-center gap-4">
                <div className="icon-box"><i className="fas fa-chart-line" /></div>
                <span className="text-text-primary">Can operate in uncertain, early-stage environments</span>
              </div>
              <div className="glass-card p-5 flex items-center gap-4">
                <div className="icon-box"><i className="fas fa-gem" /></div>
                <span className="text-text-primary">Are obsessed with quality, clarity, and execution</span>
              </div>
              <div className="glass-card p-5 flex items-center gap-4 md:col-span-2 justify-center">
                <div className="icon-box"><i className="fas fa-tower-broadcast" /></div>
                <span className="text-text-primary">Want to build something that outlasts them</span>
              </div>
            </div>
            <p className="text-center text-text-muted mt-10">You don&apos;t need to come from aviation. You need to bring clarity, depth, and intent.</p>
          </div>

          {/* ===== OPEN ROLES ===== */}
          <div id="open-roles" className="mb-20 scroll-mt-24 reveal">
            <h2 className="heading-section text-center mb-12 text-text-primary">Open Roles</h2>
            <div className="space-y-4">
              {openRoles.map((role) => (
                <div key={role.title} className="glass-card p-6 role-card">
                  <div className="flex flex-wrap justify-between items-start gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="heading-card text-text-primary mb-2">{role.title}</h3>
                      <p className="text-text-muted text-sm mb-4">{role.description}</p>
                      <div className="flex gap-3 flex-wrap">
                        {role.tags.map((tag) => (
                          <span key={tag} className="tag-pill">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <a href="#apply-form" className="text-brand-red font-semibold text-sm whitespace-nowrap hover:underline">
                      Apply <i className="fas fa-arrow-right text-xs" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-10 p-8 glass-card">
              <p className="text-lg font-medium text-text-primary">Didn&apos;t find your role? <span className="text-brand-red">We still want to hear from you.</span></p>
              <Link href="/contact" className="inline-block mt-4 btn-secondary text-sm">
                Submit your profile <i className="fas fa-arrow-right text-xs ml-1" />
              </Link>
            </div>
          </div>

          {/* ===== CULTURE + WHAT YOU GET ===== */}
          <div className="grid md:grid-cols-2 gap-6 mb-20">
            <div className="glass-card p-8 reveal">
              <div className="icon-box icon-box-lg mb-5"><i className="fas fa-users" /></div>
              <h3 className="heading-card text-text-primary mb-4">Our Work Culture</h3>
              <p className="font-semibold text-text-secondary mb-4">We operate differently.</p>
              <ul className="space-y-3 text-text-muted">
                <li className="flex gap-3 items-center"><i className="fas fa-ban text-brand-red text-sm" /> No unnecessary hierarchy</li>
                <li className="flex gap-3 items-center"><i className="fas fa-ban text-brand-red text-sm" /> No micromanagement</li>
                <li className="flex gap-3 items-center"><i className="fas fa-ban text-brand-red text-sm" /> No tolerance for low ownership</li>
              </ul>
              <p className="mt-6 font-medium text-text-secondary text-sm">Instead: clarity over noise, execution over discussion, impact over activity. You will be trusted with real responsibility from day one.</p>
            </div>
            <div className="glass-card p-8 reveal">
              <div className="icon-box icon-box-lg mb-5"><i className="fas fa-gift" /></div>
              <h3 className="heading-card text-text-primary mb-4">What You Get</h3>
              <p className="text-text-secondary mb-4">We&apos;re early&mdash;but intentional.</p>
              <ul className="space-y-3 text-text-muted" style={{ listStyle: 'disc', paddingLeft: '1.25rem' }}>
                <li>Direct exposure to founder-level decision making (<Link href="/founder" className="text-brand-red hover:underline">Founder & CEO Message</Link>)</li>
                <li>Opportunity to work on category-defining projects</li>
                <li>Steep learning curve across multiple domains</li>
                <li>Potential for long-term growth and leadership roles</li>
              </ul>
              <p className="mt-6 text-sm text-text-muted">For select roles: performance-based incentives & long-term strategic involvement.</p>
            </div>
          </div>

          {/* ===== IMPORTANT NOTE ===== */}
          <div className="glass-card p-8 rounded-2xl mb-20 reveal" style={{ borderLeft: '3px solid #c50000' }}>
            <p className="font-bold text-lg text-text-primary mb-3"><i className="fas fa-triangle-exclamation text-brand-red mr-2" />Important Note</p>
            <p className="text-text-secondary leading-relaxed">We are building in a high-ownership, high-expectation environment. This is not for passive contributors, short-term seekers, or low-effort participation. This is for people who want to build something meaningful.</p>
          </div>

          {/* ===== HIRING PROCESS ===== */}
          <div className="mb-20 glass-card p-8 md:p-12 reveal">
            <h2 className="heading-section text-center mb-12 text-text-primary">Hiring Process</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
              <div className="p-4">
                <div className="step-circle mx-auto mb-4">1</div>
                <p className="font-semibold text-text-primary text-sm">Application Submission</p>
                <p className="text-text-muted text-xs mt-2">Submit your profile via the form below</p>
              </div>
              <div className="p-4">
                <div className="step-circle mx-auto mb-4">2</div>
                <p className="font-semibold text-text-primary text-sm">Initial Screening</p>
                <p className="text-text-muted text-xs mt-2">Clarity + Intent assessment</p>
              </div>
              <div className="p-4">
                <div className="step-circle mx-auto mb-4">3</div>
                <p className="font-semibold text-text-primary text-sm">Deep Discussion</p>
                <p className="text-text-muted text-xs mt-2">Thinking + Approach evaluation</p>
              </div>
              <div className="p-4">
                <div className="step-circle mx-auto mb-4">4</div>
                <p className="font-semibold text-text-primary text-sm">Final Interaction</p>
                <p className="text-text-muted text-xs mt-2">With the core team</p>
              </div>
            </div>
          </div>

          {/* ===== APPLICATION FORM ===== */}
          <div id="apply-form" className="glass-card p-8 md:p-12 mb-20 scroll-mt-24 reveal">
            <h2 className="heading-section text-center mb-10 text-text-primary">Apply to Join MyOnlineJet</h2>
            <form action="#" method="post" className="space-y-6 max-w-3xl mx-auto">
              <div className="grid md:grid-cols-2 gap-5">
                <input type="text" placeholder="Full Name *" required className="form-input" />
                <input type="email" placeholder="Email Address *" required className="form-input" />
                <input type="tel" placeholder="Phone Number *" required className="form-input" />
                <input type="text" placeholder="Current Role / Education" className="form-input" />
                <input type="url" placeholder="LinkedIn Profile" className="form-input" />
                <input type="text" placeholder="Portfolio / Work Links (optional)" className="form-input" />
              </div>
              <select className="form-select" defaultValue="">
                <option value="" disabled>Area of Interest</option>
                <option value="technology">Technology</option>
                <option value="aviation-research">Aviation Research</option>
                <option value="business-development">Business Development</option>
                <option value="operations">Operations</option>
                <option value="content-media">Content & Media</option>
              </select>
              <textarea rows={4} placeholder="Why do you want to work with MyOnlineJet? (Long answer) *" required className="form-textarea resize-none" />
              <textarea rows={4} placeholder="What problem excites you the most in this space? (Long answer) *" required className="form-textarea resize-none" />
              <div>
                <label className="block mb-2 text-sm text-text-secondary font-medium">Upload Resume (PDF)</label>
                <input type="file" accept=".pdf" className="form-input py-3 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-brand-red file:text-white hover:file:bg-[#c50000] file:transition-colors file:cursor-pointer" />
              </div>
              <button type="submit" className="btn-primary w-full md:w-auto">Apply Now</button>
            </form>
          </div>

          {/* ===== EARLY TALENT NETWORK ===== */}
          <div id="early-talent" className="dark-section rounded-3xl p-10 md:p-14 text-center mb-20 scroll-mt-24 reveal">
            <div className="icon-box icon-box-lg mx-auto mb-6"><i className="fas fa-envelope-open-text" /></div>
            <h3 className="heading-section text-text-primary mb-4">Early Talent Network</h3>
            <p className="max-w-xl mx-auto mb-8 text-text-secondary">Not ready to apply? Join our Early Talent Network to stay updated on future roles, exclusive opportunities, and insider updates.</p>
            <Link href="/subscribe" className="btn-secondary" style={{ borderColor: '#fafafa', color: '#fafafa' }}>
              Join here <i className="fas fa-arrow-right text-xs ml-1" />
            </Link>
          </div>

          {/* ===== CLOSING SECTION ===== */}
          <div className="text-center py-8 border-t border-border-subtle reveal">
            <p className="text-xl text-text-primary font-medium mb-2">The future of mobility will not wait. And neither will we.</p>
            <p className="text-text-muted mt-2">If you believe you can contribute meaningfully&mdash;we&apos;re open to building with you.</p>
            <div className="flex flex-wrap justify-center gap-6 mt-10">
              <Link href="/vision-mission" className="text-brand-red font-semibold text-sm hover:underline">Learn about our Vision <i className="fas fa-arrow-right text-xs" /></Link>
              <Link href="/technology" className="text-brand-red font-semibold text-sm hover:underline">Explore Our Technology <i className="fas fa-arrow-right text-xs" /></Link>
              <Link href="/partner-with-us" className="text-brand-red font-semibold text-sm hover:underline">Partner With Us <i className="fas fa-arrow-right text-xs" /></Link>
              <Link href="/contact" className="text-brand-red font-semibold text-sm hover:underline">Contact Us <i className="fas fa-arrow-right text-xs" /></Link>
            </div>
            <p className="text-xs text-text-muted mt-10">MyOnlineJet is an equal opportunity organization. All applications are reviewed based on merit, intent, and alignment with our mission.</p>
          </div>
        </div>
      </div>

    </div>
  )
}

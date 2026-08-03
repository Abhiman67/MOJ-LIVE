'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { LockedFormOverlay } from '@/components/ui/LockedFormOverlay'
import { ModernSelect } from '@/components/ui/ModernSelect'
import { CustomAlert } from '@/components/ui/CustomAlert'

const categoryOptions = [
  { value: 'General Inquiry', label: 'General Inquiry' },
  { value: 'Partnership', label: 'Partnership' },
  { value: 'Investment', label: 'Investment' },
  { value: 'Careers', label: 'Careers' },
  { value: 'Media', label: 'Media' },
]

const faqSchema = {
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
      '@type': 'WebSite',
      '@id': 'https://www.myonlinejet.com/',
      url: 'https://www.myonlinejet.com/',
      name: 'MyOnlineJet'
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.myonlinejet.com/faq/',
      url: 'https://www.myonlinejet.com/faq/',
      name: 'Frequently Asked Questions — MyOnlineJet',
      description:
        'Comprehensive FAQ about MyOnlineJet, advanced air mobility infrastructure, vertiports, partnerships, early access, and ecosystem.',
      isPartOf: { '@id': 'https://www.myonlinejet.com/' },
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is MyOnlineJet?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'MyOnlineJet is an advanced aviation technology platform focused on enabling next-generation urban air mobility (UAM) through a connected ecosystem of eVTOL aircraft, vertiports, and intelligent infrastructure networks.'
          }
        },
        {
          '@type': 'Question',
          name: 'What problem is MyOnlineJet solving?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Urban mobility is reaching its physical limits. Ground congestion, time inefficiencies, and infrastructure bottlenecks demand a new layer of transportation.'
          }
        },
        {
          '@type': 'Question',
          name: 'Is MyOnlineJet an airline?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. MyOnlineJet is not an airline. We are a technology and infrastructure enabler.'
          }
        },
        {
          '@type': 'Question',
          name: 'What makes MyOnlineJet different from others in this space?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our differentiation lies in infrastructure-first approach (Vertiports + Network), ecosystem integration (not just aircraft), technology-led coordination layer, and scalable, partner-driven model.'
          }
        },
        {
          '@type': 'Question',
          name: 'What are vertiports?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Vertiports are specialized infrastructure hubs designed for vertical takeoff and landing aircraft (eVTOLs). They function as boarding & landing hubs, charging and support systems, and network nodes in urban air mobility.'
          }
        },
        {
          '@type': 'Question',
          name: 'Who can partner with MyOnlineJet?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We collaborate with real estate & infrastructure owners, hotels, hospitals, tourism operators, aviation companies and technology providers.'
          }
        },
        {
          '@type': 'Question',
          name: 'What is Early Access at MyOnlineJet?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Early Access allows users and partners to get priority access to future services, unlock exclusive benefits, and join the network before public launch.'
          }
        },
        {
          '@type': 'Question',
          name: 'Is MyOnlineJet compliant with aviation regulations?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We operate with a strong focus on regulatory alignment, safety-first approach, and industry standards. MyOnlineJet does not operate aircraft but integrates with certified operators.'
          }
        }
      ]
    }
  ]
}

const styles = `
  .faq-noise-overlay {
    position: fixed; top: 0; left: 0;
    width: 100%; height: 100%;
    pointer-events: none; z-index: 9999;
    opacity: 0.03;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
    transform: translateZ(0);
  }
  .faq-glow-orb {
    position: fixed; border-radius: 50%;
    pointer-events: none; z-index: 0;
    filter: blur(120px); opacity: 0.15;
    will-change: transform;
  }
  .faq-glow-orb-1 {
    width: 400px; height: 400px;
    background: #C50000; top: -100px; right: -100px;
  }
  .faq-glow-orb-2 {
    width: 300px; height: 300px;
    background: #C50000; bottom: 20%; left: -80px;
  }
  .faq-grid-bg {
    position: fixed; top: 0; left: 0;
    width: 100%; height: 100%;
    background-image: linear-gradient(rgba(197,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(197,0,0,0.03) 1px, transparent 1px);
    background-size: 60px 60px;
    pointer-events: none; z-index: -1;
  }
  .faq-modern-card {
    background: rgba(20,20,20,0.6);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid #1F1F1F;
    border-radius: 16px;
    transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  }
  .faq-modern-card:hover {
    transform: translateY(-2px);
    border-color: rgba(197,0,0,0.3);
    box-shadow: 0 20px 40px rgba(197,0,0,0.08), 0 0 60px rgba(197,0,0,0.05);
  }
  .faq-heading-primary {
    font-family: 'Space Grotesk', sans-serif;
    font-size: clamp(2.5rem, 5vw, 4.5rem);
    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 1.1;
    color: #FAFAFA;
  }
  .faq-section-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: clamp(1.8rem, 3vw, 2.8rem);
    font-weight: 700;
    letter-spacing: -0.02em;
    color: #FAFAFA;
  }
  .faq-badge {
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
  .faq-question {
    cursor: pointer;
    user-select: none;
  }
  .faq-question:hover h3 {
    color: #C50000;
  }
  .faq-answer-grid {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .faq-answer-grid.active {
    grid-template-rows: 1fr;
  }
  .faq-answer-content {
    overflow: hidden;
    opacity: 0;
    transition: opacity 0.25s ease-in-out;
  }
  .faq-answer-grid.active .faq-answer-content {
    opacity: 1;
  }
  .faq-reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: transform 0.6s ease-out, opacity 0.6s ease-out;
  }
  .faq-reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }
  @media (max-width: 768px) {
    .faq-heading-primary { font-size: clamp(1.8rem, 7vw, 2.5rem); }
    .faq-section-title { font-size: clamp(1.4rem, 5vw, 1.8rem); }
  }
  @media (max-width: 480px) {
    .faq-heading-primary { font-size: clamp(1.5rem, 8vw, 1.8rem); }
    .faq-section-title { font-size: clamp(1.1rem, 5vw, 1.4rem); }
    .faq-modern-card { padding: 1rem !important; border-radius: 12px; }
  }
  @media (max-width: 380px) {
    .faq-heading-primary { font-size: clamp(1.2rem, 7vw, 1.5rem); }
    .faq-section-title { font-size: clamp(1rem, 4.5vw, 1.2rem); }
    .faq-modern-card { padding: 0.75rem !important; border-radius: 10px; }
    .faq-question h3 { font-size: 0.9rem; }
  }
`

export default function FAQPage() {
  const [category, setCategory] = useState('')
  const [alertState, setAlertState] = useState<{
    isOpen: boolean
    title: string
    message: string
    type: 'success' | 'error'
  }>({
    isOpen: false,
    title: '',
    message: '',
    type: 'success'
  })

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
    document.querySelectorAll('.faq-reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style>{styles}</style>

      <div className="faq-noise-overlay" />
      <div className="faq-glow-orb faq-glow-orb-1" />
      <div className="faq-glow-orb faq-glow-orb-2" />
      <div className="faq-grid-bg" />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema, null, 2) }} />

      <div className="relative z-10 pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          {/* Hero */}
          <div className="text-center mb-16 faq-reveal">
            <div className="faq-badge mb-6">Answers & Insights</div>
            <h1 className="faq-heading-primary mb-6">
              Frequently Asked Questions<br />
              <span className="text-[#C50000]">Aviation Infrastructure Technology Company</span>
            </h1>
            <p className="text-lg text-[#A1A1AA] max-w-3xl mx-auto">
              Everything you need to know about MyOnlineJet — our infrastructure, vertiports, partnerships, early access,
              and the future of advanced air mobility in India.
            </p>
          </div>

          {/* Disclaimer */}
          <div className="faq-modern-card p-5 mb-12 faq-reveal">
            <div className="flex items-start gap-3">
              <i className="fas fa-info-circle text-amber-500 mt-0.5" />
              <div className="text-sm text-[#A1A1AA]">
                <strong className="text-amber-400">Development Phase Notice:</strong> MyOnlineJet is currently in the
                pre-launch and ecosystem-building phase. All services, partnerships, and offerings are subject to regulatory
                approvals, infrastructure readiness, and strategic alignment.{' '}
                <Link href="/legal-disclaimer" className="text-[#C50000] font-semibold hover:underline">
                  Read full disclaimer →
                </Link>
              </div>
            </div>
          </div>

          {/* Section 1 */}
          <div className="faq-modern-card p-6 md:p-10 mb-8 faq-reveal">
            <h2 className="faq-section-title mb-6">1. About MyOnlineJet</h2>
            <div className="divide-y divide-[#1F1F1F]">
              <FaqItem
                question="What is MyOnlineJet?"
                answer={
                  <>
                    MyOnlineJet is an advanced aviation technology platform focused on enabling next-generation urban air
                    mobility (UAM) through a connected ecosystem of eVTOL aircraft, vertiports, and intelligent
                    infrastructure networks. We are building a unified platform that connects users, infrastructure
                    providers, aviation partners, and enterprises into a scalable air mobility network.
                    <div className="mt-3 flex flex-wrap gap-3">
                      <Link href="/company-profile" className="text-[#C50000] text-sm font-medium hover:underline">
                        Learn more: Company Profile →
                      </Link>
                      <Link href="/vision-mission" className="text-[#C50000] text-sm font-medium hover:underline">
                        Vision & Mission →
                      </Link>
                    </div>
                  </>
                }
              />
              <FaqItem
                question="What problem is MyOnlineJet solving?"
                answer="Urban mobility is reaching its physical limits. Ground congestion, time inefficiencies, and infrastructure bottlenecks demand a new layer of transportation. MyOnlineJet addresses this by enabling aerial mobility networks, integrating vertiports into urban ecosystems, and creating on-demand, high-efficiency air transport access."
              />
              <FaqItem
                question="Is MyOnlineJet an airline?"
                answer="No. MyOnlineJet is not an airline. We are a technology and infrastructure enabler that connects aircraft operators, infrastructure providers, businesses, and end users."
              />
              <FaqItem
                question="Where is MyOnlineJet currently operating?"
                answer={
                  <>
                    We are currently in the pre-launch and ecosystem development phase, actively working on partnerships,
                    infrastructure mapping, and early network design.{' '}
                    <Link href="/contact" className="text-[#C50000] font-medium hover:underline">
                      Stay updated: Press & Media →
                    </Link>
                  </>
                }
              />
            </div>
          </div>

          {/* Section 2 */}
          <div className="faq-modern-card p-6 md:p-10 mb-8 faq-reveal">
            <h2 className="faq-section-title mb-6">2. Vision, Mission & Positioning</h2>
            <div className="divide-y divide-[#1F1F1F]">
              <FaqItem
                question="What is the vision of MyOnlineJet?"
                answer={
                  <>
                    To build India&apos;s most advanced and globally scalable air mobility network, powered by intelligent
                    infrastructure and seamless ecosystem integration.{' '}
                    <Link href="/vision-mission" className="text-[#C50000] font-medium hover:underline">
                      Read in detail →
                    </Link>
                  </>
                }
              />
              <FaqItem
                question="What makes MyOnlineJet different?"
                answer={
                  <>
                    Infrastructure-first approach (Vertiports + Network), ecosystem integration (not just aircraft),
                    technology-led coordination layer, and scalable partner-driven model.{' '}
                    <Link href="/technology" className="text-[#C50000] font-medium hover:underline">
                      Explore Technology →
                    </Link>{' '}
                    |{' '}
                    <Link href="/ecosystem-integration" className="text-[#C50000] font-medium hover:underline">
                      Ecosystem Integration →
                    </Link>
                  </>
                }
              />
            </div>
          </div>

          {/* Section 3 */}
          <div className="faq-modern-card p-6 md:p-10 mb-8 faq-reveal">
            <h2 className="faq-section-title mb-6">3. Technology & Infrastructure</h2>
            <div className="divide-y divide-[#1F1F1F]">
              <FaqItem
                question="What technologies does MyOnlineJet use?"
                answer={
                  <>
                    Smart network orchestration, infrastructure mapping systems, partner integration frameworks,
                    data-driven mobility intelligence.{' '}
                    <Link href="/technology" className="text-[#C50000] font-medium hover:underline">
                      Full breakdown →
                    </Link>
                  </>
                }
              />
              <FaqItem
                question="What are vertiports?"
                answer={
                  <>
                    Specialized infrastructure hubs designed for vertical takeoff and landing aircraft (eVTOLs). They
                    function as boarding/landing hubs, charging systems, and network nodes.{' '}
                    <Link href="/vertiports" className="text-[#C50000] font-medium hover:underline">
                      Learn more →
                    </Link>
                  </>
                }
              />
              <FaqItem
                question="What is eVTOL infrastructure?"
                answer={
                  <>
                    Landing pads, charging systems, maintenance support, airspace coordination.{' '}
                    <Link href="/evtol-infrastructure" className="text-[#C50000] font-medium hover:underline">
                      Deep dive →
                    </Link>
                  </>
                }
              />
              <FaqItem
                question="Will MyOnlineJet build its own vertiports?"
                answer="Hybrid model: partner-led infrastructure development, strategic integration with existing assets, and selective development where needed."
              />
            </div>
          </div>

          {/* Section 4 */}
          <div className="faq-modern-card p-6 md:p-10 mb-8 faq-reveal">
            <h2 className="faq-section-title mb-6">4. Services & Partnerships</h2>
            <div className="divide-y divide-[#1F1F1F]">
              <FaqItem
                question="What services will MyOnlineJet offer?"
                answer={
                  <>
                    Future-ready air mobility access, infrastructure integration for partners, network onboarding, early
                    access programs.{' '}
                    <Link href="/services" className="text-[#C50000] font-medium hover:underline">
                      All Services →
                    </Link>
                  </>
                }
              />
              <FaqItem
                question="Who can partner with MyOnlineJet?"
                answer={
                  <>
                    Real estate & infrastructure owners, hotels, hospitals, tourism operators, aviation companies,
                    technology providers.{' '}
                    <Link href="/partners" className="text-[#C50000] font-medium hover:underline">
                      Partners Page →
                    </Link>{' '}
                    |{' '}
                    <Link href="/partner-with-us" className="text-[#C50000] font-medium hover:underline">
                      Partner With Us →
                    </Link>
                  </>
                }
              />
              <FaqItem
                question="Is there any cost to partner?"
                answer="Strategic partnerships may involve commitments; early-stage collaborations vary. All details shared during onboarding."
              />
            </div>
          </div>

          {/* Section 5 */}
          <div className="faq-modern-card p-6 md:p-10 mb-8 faq-reveal">
            <h2 className="faq-section-title mb-6">5. Early Access, Subscription & Investors</h2>
            <div className="divide-y divide-[#1F1F1F]">
              <FaqItem
                question="What is Early Access?"
                answer={
                  <>
                    Priority access to future services, exclusive benefits, join the network before public launch.{' '}
                    <Link href="/early-access" className="text-[#C50000] font-medium hover:underline">
                      Join Early Access →
                    </Link>
                  </>
                }
              />
              <FaqItem
                question="What is the subscription model?"
                answer={
                  <>
                    Priority access, exclusive updates, network benefits.{' '}
                    <Link href="/subscribe" className="text-[#C50000] font-medium hover:underline">
                      Explore plans →
                    </Link>
                  </>
                }
              />
              <FaqItem
                question="Is MyOnlineJet open to investors?"
                answer={
                  <>
                    Yes, engaging with strategic investors aligned with long-term vision.{' '}
                    <Link href="/investors" className="text-[#C50000] font-medium hover:underline">
                      Investors Page →
                    </Link>
                  </>
                }
              />
            </div>
          </div>

          {/* Section 6 */}
          <div className="faq-modern-card p-6 md:p-10 mb-12 faq-reveal">
            <h2 className="faq-section-title mb-6">6. Careers, Media & Legal</h2>
            <div className="divide-y divide-[#1F1F1F]">
              <FaqItem
                question="How can I join MyOnlineJet?"
                answer={
                  <>
                    Active roles for interns, researchers, and industry professionals.{' '}
                    <Link href="/careers" className="text-[#C50000] font-medium hover:underline">
                      Apply here →
                    </Link>
                  </>
                }
              />
              <FaqItem
                question="Where can I find official updates & research?"
                answer={
                  <div className="flex flex-wrap gap-3">
                    <Link href="/contact" className="text-[#C50000] font-medium hover:underline">
                      Press & Media
                    </Link>
                    <Link href="/whitepapers" className="text-[#C50000] font-medium hover:underline">
                      Whitepaper
                    </Link>
                    <Link href="https://news.myonlinejet.com" className="text-[#C50000] font-medium hover:underline">
                      Blog →
                    </Link>
                  </div>
                }
              />
              <FaqItem
                question="Is MyOnlineJet compliant with aviation regulations?"
                answer={
                  <>
                    Yes, regulatory alignment, safety-first approach. We integrate with certified operators.{' '}
                    <Link href="/legal-disclaimer" className="text-[#C50000] font-medium hover:underline">
                      Legal terms →
                    </Link>
                  </>
                }
              />
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="faq-modern-card p-6 md:p-10 mb-8 faq-reveal">
            <h2 className="faq-section-title text-center mb-8">General Inquiry Form</h2>
            <LockedFormOverlay formType="faq">
            <form
              className="max-w-2xl mx-auto space-y-5"
              onSubmit={async (e) => {
                e.preventDefault()
                const form = e.currentTarget
                const data = Object.fromEntries(new FormData(form))
                try {
                  const res = await fetch('/api/forms/faq', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
                  if (!res.ok) throw new Error()
                  setAlertState({
                    isOpen: true,
                    title: 'Message Sent',
                    message: 'Thank you for reaching out. Our team will get back to you shortly.',
                    type: 'success'
                  })
                  form.reset()
                  setCategory('')
                } catch {
                  setAlertState({
                    isOpen: true,
                    title: 'Error',
                    message: 'Something went wrong. Please try again.',
                    type: 'error'
                  })
                }
              }}
            >
              <div>
                <label className="block text-sm font-medium text-[#D1D5DB] mb-1">Full Name *</label>
                <input name="fullName" type="text" required className="w-full bg-[#111] border border-[#2A2A2A] rounded-xl p-3 text-[#FAFAFA] focus:border-[#C50000] outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#D1D5DB] mb-1">Email Address *</label>
                <input name="email" type="email" required className="w-full bg-[#111] border border-[#2A2A2A] rounded-xl p-3 text-[#FAFAFA] focus:border-[#C50000] outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#D1D5DB] mb-1">Phone Number</label>
                <input name="phone" type="tel" className="w-full bg-[#111] border border-[#2A2A2A] rounded-xl p-3 text-[#FAFAFA] focus:border-[#C50000] outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#D1D5DB] mb-1">Category *</label>
                <ModernSelect name="category" options={categoryOptions} value={category} onChange={setCategory} />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#D1D5DB] mb-1">Message</label>
                <textarea name="message" rows={4} className="w-full bg-[#111] border border-[#2A2A2A] rounded-xl p-3 text-[#FAFAFA] focus:border-[#C50000] outline-none transition-colors" />
              </div>
              <div className="flex items-start gap-2">
                <input type="checkbox" name="consent" required className="mt-1 accent-[#C50000]" />
                <span className="text-sm text-[#A1A1AA]">
                  I agree to the{' '}
                  <Link href="/legal-disclaimer" className="text-[#C50000] hover:underline">
                    Terms & Privacy Policy
                  </Link>{' '}
                  *
                </span>
              </div>
              <button type="submit" className="primary-btn w-full justify-center">
                Submit Inquiry →
              </button>
            </form>
            </LockedFormOverlay>
            <p className="text-xs text-[#52525B] text-center mt-4">Your information is secure. We respond within 48 hours.</p>
          </div>

          {/* Final Disclaimer */}
          <div className="faq-modern-card p-6 text-center faq-reveal">
            <i className="fas fa-balance-scale text-[#52525B] mr-2" />
            <span className="text-sm text-[#A1A1AA]">
              <strong className="text-[#D1D5DB]">Important Disclaimer:</strong> MyOnlineJet is currently in the development
              and ecosystem-building phase. All services, partnerships, and offerings are subject to regulatory approvals,
              infrastructure readiness, and strategic alignment. For full details:{' '}
              <Link href="/legal-disclaimer" className="text-[#C50000] font-semibold hover:underline">
                Legal Disclaimer Page →
              </Link>
            </span>
          </div>
        </div>
      </div>

      <CustomAlert
        isOpen={alertState.isOpen}
        title={alertState.title}
        message={alertState.message}
        type={alertState.type}
        onClose={() => setAlertState((prev) => ({ ...prev, isOpen: false }))}
      />
    </>
  )
}

function FaqItem({ question, answer }: { question: string; answer: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="py-5 border-b border-[#1F1F1F] last:border-b-0">
      <div
        className="faq-question flex justify-between items-center cursor-pointer group"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <h3 className="text-lg font-semibold text-[#FAFAFA] transition-colors group-hover:text-[#C50000]">
          {question}
        </h3>
        <i
          className={`fas fa-chevron-down text-[#52525B] transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-[#C50000]' : ''
          }`}
        />
      </div>
      <div className={`faq-answer-grid ${isOpen ? 'active' : ''}`}>
        <div className="faq-answer-content">
          <div className="pt-3 pb-1 text-[#A1A1AA] leading-relaxed">{answer}</div>
        </div>
      </div>
    </div>
  )
}

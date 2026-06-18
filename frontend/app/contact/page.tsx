import type { Metadata } from 'next'
import Link from 'next/link'
import { ContactEnhancements } from '@/components/contact/ContactEnhancements'

export const metadata: Metadata = {
  title: 'Contact Us | MyOnlineJet – Aviation Infrastructure Technology for AAM',
  description:
    'Connect with MyOnlineJet — India\'s vertiport infrastructure leader. Partnerships, investors, eVTOL collaboration, media, early access. Let\'s build the next layer of mobility.',
  keywords: [
    'contact MyOnlineJet',
    'vertiport partnerships',
    'AAM India',
    'advanced air mobility contact',
    'eVTOL collaboration',
    'aviation infrastructure technology'
  ],
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact MyOnlineJet — Build the Future of Air Mobility',
    description:
      'We are an aviation infrastructure technology company. Reach out for strategic partnerships, vertiport networks, investments, or early ecosystem access.',
    url: '/contact',
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
      contactPoint: [
        { '@type': 'ContactPoint', contactType: 'partnerships', email: 'contact@myonlinejet.com', availableLanguage: 'English' },
        { '@type': 'ContactPoint', contactType: 'investor relations', email: 'contact@myonlinejet.com' },
        { '@type': 'ContactPoint', contactType: 'media', email: 'contact@myonlinejet.com' },
        { '@type': 'ContactPoint', contactType: 'careers', email: 'contact@myonlinejet.com' }
      ],
      sameAs: ['https://www.linkedin.com/company/myonlinejet']
    },
    {
      '@type': 'ContactPage',
      '@id': 'https://www.myonlinejet.com/contact/',
      url: 'https://www.myonlinejet.com/contact/',
      name: 'Contact MyOnlineJet – Aviation Infrastructure Technology Company',
      isPartOf: { '@id': 'https://www.myonlinejet.com/' },
      description:
        'Get in touch with MyOnlineJet for partnerships, vertiport infrastructure, eVTOL collaboration, investments, media or early access. We build India\'s advanced air mobility ecosystem.',
      mainEntity: { '@type': 'WebPageElement', name: 'Contact Form' }
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.myonlinejet.com/',
      url: 'https://www.myonlinejet.com/',
      name: 'MyOnlineJet',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://www.myonlinejet.com/search?q={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.myonlinejet.com/contact/faq',
      name: 'Contact & Engagement FAQ',
      isPartOf: { '@id': 'https://www.myonlinejet.com/contact/' },
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How long does MyOnlineJet take to respond to inquiries?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our team evaluates all submissions and typically responds within 24–72 business hours. High-priority collaboration requests may be escalated faster.'
          }
        },
        {
          '@type': 'Question',
          name: 'Does MyOnlineJet accept unsolicited proposals for vertiport locations?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, we evaluate strategic infrastructure proposals aligned with our long-term AAM roadmap. Please use the \'Infrastructure & Vertiport Development\' category in the form.'
          }
        },
        {
          '@type': 'Question',
          name: 'What kind of partners is MyOnlineJet looking for?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We collaborate with eVTOL manufacturers, smart city planners, real estate developers, technology providers, investment firms, and regulatory bodies focused on building the future of air mobility.'
          }
        },
        {
          '@type': 'Question',
          name: 'Is MyOnlineJet an operating airline or aircraft manufacturer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. MyOnlineJet is an aviation infrastructure technology company. We design, develop and operate vertiport networks and the intelligent mobility layer that enables Advanced Air Mobility (AAM) ecosystems.'
          }
        }
      ]
    }
  ]
}

export default function ContactPage() {
  return (
    <div className="contact-page relative" itemScope itemType="https://schema.org/ContactPage">
      <ContactEnhancements />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData, null, 2) }} />

      <div className="noise-overlay" />
      <div className="glow-orb glow-orb-1" />
      <div className="glow-orb glow-orb-2" />
      <div className="glow-orb glow-orb-3" />
      <div className="grid-bg" />

      <div className="relative z-10 pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">

          {/* Hero Section */}
          <div className="text-center mb-20 reveal">
            <div className="badge mb-5">Engage With Intent</div>
            <h1 className="heading-hero mb-5">
              Let&apos;s Build the Future <br />of <span className="text-[#FF2D2D]">Air Mobility, Together</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              At MyOnlineJet, we are shaping the next era of aviation, where Advanced Air Mobility (AAM), intelligent vertiport networks, and seamless urban air transportation redefine how the world moves.<br />
              Whether you are a strategic partner, investor, infrastructure provider, technology innovator, or early adopter, we are open to meaningful conversations that align with our long-term vision.
            </p>
            <p className="text-[#FF2D2D] font-medium mt-4">We don&apos;t just respond, we engage with intent.</p>
          </div>

          {/* Two column layout: form + info */}
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Form Column (2/3) */}
            <div className="lg:col-span-2">
              <div className="glass-card p-6 md:p-8 reveal">
                <h2 className="heading-card mb-2 flex items-center gap-2">
                  <i className="fas fa-pen-alt text-[#FF2D2D]" /> Contact Form
                </h2>
                <p className="text-text-muted text-sm mb-6 border-b border-border-subtle pb-3">
                  Primary mode of communication: all submissions are reviewed by the relevant team.
                </p>

                <form id="enterpriseContactForm" action="#" method="POST">
                  {/* Basic Information */}
                  <div className="mb-8">
                    <h3 className="font-bold text-lg mb-4 text-text-primary border-l-4 border-[#FF2D2D] pl-3 font-['Space_Grotesk']">
                      Basic Information
                    </h3>
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold mb-1 text-text-secondary">Full Name <span className="text-[#FF2D2D]">*</span></label>
                        <input type="text" name="fullName" required className="form-input" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-1 text-text-secondary">Email Address <span className="text-[#FF2D2D]">*</span></label>
                        <input type="email" name="email" required className="form-input" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-1 text-text-secondary">Phone Number (Optional but recommended)</label>
                        <input type="tel" name="phone" className="form-input" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-1 text-text-secondary">Organization / Company Name</label>
                        <input type="text" name="organization" className="form-input" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-1 text-text-secondary">Your Role / Designation</label>
                        <input type="text" name="role" className="form-input" />
                      </div>
                    </div>
                  </div>

                  {/* Inquiry Details */}
                  <div className="mb-8">
                    <h3 className="font-bold text-lg mb-4 text-text-primary border-l-4 border-[#FF2D2D] pl-3 font-['Space_Grotesk']">
                      Inquiry Details
                    </h3>
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold mb-1 text-text-secondary">Inquiry Type <span className="text-[#FF2D2D]">*</span></label>
                        <select id="inquiryType" name="inquiryType" required className="form-select">
                          <option value="">Select one</option>
                          <option value="partnerships">Partnerships</option>
                          <option value="investors">Investors</option>
                          <option value="infrastructure">Infrastructure / Vertiports</option>
                          <option value="technology">Technology / eVTOL</option>
                          <option value="media">Media / Press</option>
                          <option value="careers">Careers</option>
                          <option value="earlyaccess">Early Access</option>
                          <option value="general">General</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-1 text-text-secondary">Subject <span className="text-[#FF2D2D]">*</span></label>
                        <input type="text" name="subject" required className="form-input" />
                      </div>
                    </div>
                    <div className="mt-5">
                      <label className="block text-sm font-semibold mb-1 text-text-secondary">Message <span className="text-[#FF2D2D]">*</span></label>
                      <textarea name="message" rows={5} required className="form-textarea" placeholder="Please describe your intent clearly. Relevant details help us respond faster." />
                    </div>
                  </div>

                  {/* Advanced Inputs (conditional) */}
                  <div id="advancedBusinessFields" className="mb-8 conditional-group hidden">
                    <h3 className="font-bold text-lg mb-4 text-text-primary border-l-4 border-[#FF2D2D] pl-3 font-['Space_Grotesk']">
                      Advanced Inputs (For Business / Partners / Investors)
                    </h3>
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold mb-1 text-text-secondary">Area of Interest</label>
                        <select name="areaOfInterest" className="form-select">
                          <option value="">Select</option>
                          <option>Vertiport Development</option>
                          <option>Fleet / eVTOL Integration</option>
                          <option>Smart Mobility Infrastructure</option>
                          <option>Data / AI / Technology</option>
                          <option>Strategic Collaboration</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-1 text-text-secondary">Geographic Focus</label>
                        <input type="text" name="geoFocus" className="form-input" placeholder="e.g., India, Southeast Asia" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-1 text-text-secondary">Investment Range / Budget</label>
                        <input type="text" name="investmentRange" className="form-input" placeholder="Optional" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-1 text-text-secondary">Timeline for Engagement</label>
                        <input type="text" name="timeline" className="form-input" placeholder="e.g., Q3 2026" />
                      </div>
                    </div>
                    <div className="mt-4">
                      <label className="block text-sm font-semibold mb-1 text-text-secondary">Attachments (Optional)</label>
                      <input type="file" name="attachment" className="form-input text-text-muted" accept=".pdf,.docx,.pptx" />
                    </div>
                  </div>

                  {/* Consent & Privacy */}
                  <div className="space-y-3 mb-8">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" required className="w-4 h-4 accent-[#FF2D2D] rounded" />
                      <span className="text-sm text-text-secondary">
                        I agree to the{' '}
                        <Link href="/privacy-policy" className="text-[#FF2D2D] underline hover:text-[#FF4444]">Privacy Policy</Link>
                        {' '}and{' '}
                        <Link href="/terms-conditions" className="text-[#FF2D2D] underline hover:text-[#FF4444]">Terms & Conditions</Link>.
                      </span>
                    </label>
                  </div>
                  <button type="submit" className="primary-btn w-full md:w-auto px-8 py-3 text-lg">
                    Submit Inquiry →
                  </button>
                  <p className="text-xs text-text-muted mt-4">
                    * Submission does not constitute contractual obligation. MyOnlineJet reserves selective response rights.
                  </p>
                </form>
                <div id="formSuccessMsg" className="hidden mt-4 p-4 bg-[#22C55E]/10 text-[#22C55E] rounded-xl text-center border border-[#22C55E]/20" />
              </div>

              {/* Direct Communication Section */}
              <div className="glass-card p-6 mt-8 reveal">
                <h3 className="heading-card mb-3">
                  <i className="fas fa-envelope-open-text text-[#FF2D2D] mr-2" /> Direct Communication
                </h3>
                <p className="text-text-secondary mb-4">
                  For all categories, you may also reach us directly (form submissions prioritized):
                </p>
                <div className="grid sm:grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <i className="fas fa-handshake text-[#FF2D2D] w-5" />
                    <span className="text-text-secondary">Contact:</span>{' '}
                    <a href="mailto:contact@myonlinejet.com" className="text-[#FF2D2D] hover:text-[#FF4444] break-all">
                      contact@myonlinejet.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar: What happens next + explore more */}
            <div className="space-y-6">
              <div className="glass-card p-6 reveal">
                <div className="icon-box mb-3"><i className="fas fa-clock" /></div>
                <h3 className="heading-card mb-2">What Happens Next</h3>
                <ol className="list-decimal list-inside space-y-2 text-text-secondary text-sm">
                  <li>Our internal team evaluates your inquiry.</li>
                  <li>Relevant stakeholders assigned by domain expertise.</li>
                  <li>Response within <strong className="text-text-primary">24–72 business hours</strong>.</li>
                  <li>High-priority collaborations escalated faster.</li>
                </ol>
              </div>
              <div className="glass-card p-6 reveal">
                <div className="icon-box mb-3"><i className="fas fa-compass" /></div>
                <h3 className="heading-card mb-3">Explore More</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/vision-mission" className="text-text-secondary hover:text-[#FF2D2D] flex items-center gap-1 transition-colors">→ Vision & Mission</a></li>
                  <li><a href="/vertiports" className="text-text-secondary hover:text-[#FF2D2D] transition-colors">→ Vertiport Infrastructure Strategy</a></li>
                  <li><a href="/technology" className="text-text-secondary hover:text-[#FF2D2D] transition-colors">→ Technology Stack</a></li>
                  <li><a href="/partners" className="text-text-secondary hover:text-[#FF2D2D] transition-colors">→ Partner With Us</a></li>
                  <li><a href="/investors" className="text-text-secondary hover:text-[#FF2D2D] transition-colors">→ Investor Relations</a></li>
                  <li><a href="/early-access" className="text-text-secondary hover:text-[#FF2D2D] transition-colors">→ Early Access Ecosystem</a></li>
                </ul>
              </div>
              <div className="glass-card p-6 border-l-4 border-[#FF2D2D] bg-[#FF2D2D]/5 reveal">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#FF2D2D]">Global Outlook, Local Execution</p>
                <p className="text-xs text-text-secondary mt-2">
                  India-first focus, built with global mindset. Actively exploring urban air corridors, smart city networks, and aviation tech ecosystems.
                </p>
              </div>
              {/* FAQ */}
              <div className="glass-card p-6 reveal">
                <div className="icon-box mb-2"><i className="fas fa-question-circle" /></div>
                <h3 className="heading-card">Frequently Asked</h3>
                <div className="space-y-3 mt-3 text-sm">
                  <div>
                    <details className="group">
                      <summary className="font-semibold cursor-pointer text-text-primary flex justify-between items-center">
                        Response time? <i className="fas fa-chevron-down text-text-muted group-open:rotate-180 transition-transform" />
                      </summary>
                      <p className="text-text-secondary mt-1 pl-2">24–72 business hours. High-priority faster.</p>
                    </details>
                  </div>
                  <div>
                    <details className="group">
                      <summary className="font-semibold cursor-pointer text-text-primary flex justify-between items-center">
                        Unsolicited vertiport proposals? <i className="fas fa-chevron-down text-text-muted group-open:rotate-180 transition-transform" />
                      </summary>
                      <p className="text-text-secondary mt-1 pl-2">Yes, use &apos;Infrastructure / Vertiports&apos; category.</p>
                    </details>
                  </div>
                  <div>
                    <details className="group">
                      <summary className="font-semibold cursor-pointer text-text-primary flex justify-between items-center">
                        Type of partners? <i className="fas fa-chevron-down text-text-muted group-open:rotate-180 transition-transform" />
                      </summary>
                      <p className="text-text-secondary mt-1 pl-2">eVTOL, smart cities, real estate, tech, investors.</p>
                    </details>
                  </div>
                  <div>
                    <details className="group">
                      <summary className="font-semibold cursor-pointer text-text-primary flex justify-between items-center">
                        Is MyOnlineJet an airline? <i className="fas fa-chevron-down text-text-muted group-open:rotate-180 transition-transform" />
                      </summary>
                      <p className="text-text-secondary mt-1 pl-2">
                        No. We are an Aviation Infrastructure Technology Company — building vertiport networks and intelligent mobility layer.
                      </p>
                    </details>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Important Notice + final alignment */}
          <div className="mt-20 border-t border-border-subtle pt-10 text-center text-sm text-text-muted max-w-4xl mx-auto reveal">
            <p className="font-semibold text-text-secondary">Important Notice:</p>
            <p>
              Submission of this form does not constitute any contractual obligation. MyOnlineJet reserves the right to respond selectively based on relevance and alignment. Please do not share confidential or proprietary information unless formally requested under a defined agreement.
            </p>
            <div className="flex justify-center gap-6 mt-4 text-xs">
              <a href="/legal-disclaimer" className="hover:text-[#FF2D2D] transition-colors">Legal Disclaimer</a> |
              <a href="/privacy-policy" className="hover:text-[#FF2D2D] transition-colors">Privacy Policy</a> |
              <a href="/terms-conditions" className="hover:text-[#FF2D2D] transition-colors">Terms of Service</a>
            </div>
            <p className="mt-6 italic text-text-secondary">
              If you&apos;re here, you&apos;re likely thinking ahead. So are we. Let&apos;s connect, only if you&apos;re serious about building something that actually matters at scale.
            </p>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .contact-page .glow-orb {
          position: fixed;
          border-radius: 50%;
          filter: blur(120px);
          pointer-events: none;
          z-index: 0;
        }
        .contact-page .glow-orb-1 {
          width: 400px;
          height: 400px;
          background: rgba(255, 45, 45, 0.08);
          top: -100px;
          right: -100px;
        }
        .contact-page .glow-orb-2 {
          width: 300px;
          height: 300px;
          background: rgba(255, 45, 45, 0.05);
          bottom: 20%;
          left: -100px;
        }
        .contact-page .glow-orb-3 {
          width: 250px;
          height: 250px;
          background: rgba(255, 45, 45, 0.06);
          top: 50%;
          right: 10%;
        }
        .contact-page .badge {
          display: inline-block;
          background: rgba(255, 45, 45, 0.1);
          color: #FF2D2D;
          padding: 4px 12px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-family: 'Inter', sans-serif;
        }
        .contact-page .heading-hero {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          letter-spacing: -0.02em;
          line-height: 1.2;
          font-size: clamp(2.5rem, 5vw, 4.5rem);
        }
        .contact-page .heading-section {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          letter-spacing: -0.02em;
          line-height: 1.2;
          font-size: clamp(1.8rem, 3vw, 2.8rem);
        }
        .contact-page .heading-card {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 1.25rem;
        }
        .contact-page .icon-box {
          width: 48px;
          height: 48px;
          background: rgba(255, 45, 45, 0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FF2D2D;
          font-size: 1.2rem;
        }
        .contact-page .conditional-group {
          transition: all 0.2s ease;
        }
        .contact-page .glass-card:hover {
          border-color: rgba(255, 45, 45, 0.3);
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(255, 45, 45, 0.08), 0 0 0 1px rgba(255, 45, 45, 0.1);
        }
        @media (max-width: 768px) {
          .contact-page .heading-hero { font-size: clamp(1.8rem, 7vw, 2.5rem); }
          .contact-page .heading-section { font-size: 1.6rem; }
          .contact-page .glass-card { padding: 1.25rem !important; }
        }
        @media (max-width: 480px) {
          .contact-page .heading-hero { font-size: clamp(1.5rem, 8vw, 1.8rem); }
          .contact-page .heading-section { font-size: clamp(1.1rem, 5vw, 1.4rem); }
          .contact-page .glass-card { padding: 1rem !important; border-radius: 12px; }
          .contact-page .icon-box { width: 40px; height: 40px; font-size: 1rem; }
        }
        @media (max-width: 380px) {
          .contact-page .heading-hero { font-size: clamp(1.2rem, 7vw, 1.5rem); }
          .contact-page .heading-section { font-size: clamp(1rem, 4.5vw, 1.2rem); }
          .contact-page .glass-card { padding: 0.75rem !important; border-radius: 10px; }
          .contact-page .icon-box { width: 32px; height: 32px; font-size: 14px; border-radius: 8px; }
          .contact-page .heading-card { font-size: 1rem; }
        }
        `
      }} />
    </div>
  )
}

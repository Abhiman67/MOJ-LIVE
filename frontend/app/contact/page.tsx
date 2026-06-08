import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact Us | MyOnlineJet - Aviation Infrastructure Technology for AAM',
  description:
    'Connect with MyOnlineJet for partnerships, investors, eVTOL collaboration, media, early access, and vertiport infrastructure discussions.',
  keywords: [
    'contact MyOnlineJet',
    'vertiport partnerships',
    'AAM India',
    'advanced air mobility contact',
    'eVTOL collaboration',
    'aviation infrastructure technology'
  ],
  alternates: { canonical: '/contact' }
}

const inquiryTypes = [
  'Strategic Partnership',
  'Vertiport / Infrastructure',
  'Investor Relation',
  'Media / Press',
  'Early Access',
  'Careers',
  'General Inquiry'
]

const faq = [
  [
    'How long does MyOnlineJet take to respond to inquiries?',
    'Our team evaluates all submissions and typically responds within 24-72 business hours.'
  ],
  [
    'Does MyOnlineJet accept unsolicited proposals for vertiport locations?',
    'Yes, we evaluate strategic infrastructure proposals aligned with our long-term AAM roadmap.'
  ],
  [
    'What kind of partners is MyOnlineJet looking for?',
    'We collaborate with eVTOL manufacturers, smart city planners, real estate developers, technology providers, investment firms, and regulatory bodies.'
  ],
  [
    'Is MyOnlineJet an operating airline or aircraft manufacturer?',
    'No. MyOnlineJet is an aviation infrastructure technology company focused on vertiport networks and the intelligent mobility layer.'
  ]
]

export default function Page() {
  return (
    <div className="dark-page-shell">
      <div className="aurora-bg" />
      <div className="noise-overlay" />

      <section className="mx-auto max-w-7xl text-center">
        <div className="luxury-badge">Contact</div>
        <h1 className="content-hero-title mt-6">
          Let&apos;s Build the Future
          <br />
          of <span className="text-gradient-red">Air Mobility, Together</span>
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-text-secondary md:text-xl">
          Connect with MyOnlineJet - India&apos;s vertiport infrastructure leader. Partnerships, investors, eVTOL collaboration, media, early access. Let&apos;s build the next layer of mobility.
        </p>
      </section>

      <section className="content-section grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6">
          <div className="glass-card p-6">
            <p className="section-kicker">Ways to Reach Us</p>
            <p className="mt-4 text-sm leading-7 text-text-secondary">
              Choose the path that best matches your inquiry. This helps us route your request quickly.
            </p>
            <div className="mt-5 space-y-3">
              {[
                ['Partnerships', 'Strategic infrastructure hosting and ecosystem collaboration.'],
                ['Investors', 'Long-term network play and infrastructure opportunity discussions.'],
                ['Media and research', 'Request context on the platform, vision, and roadmap.']
              ].map(([title, description]) => (
                <div key={title} className="rounded-2xl border border-border-subtle bg-surface-card p-4">
                  <p className="font-semibold text-white">{title}</p>
                  <p className="text-sm text-text-secondary">{description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-6">
            <p className="section-kicker">Direct Contact</p>
            <div className="mt-4 space-y-3 text-sm text-text-secondary">
              <p>
                Email:{' '}
                <a className="font-semibold text-[#FF4444]" href="mailto:contact@myonlinejet.com">
                  contact@myonlinejet.com
                </a>
              </p>
              <p>Location: Jaipur, Rajasthan, India</p>
              <p>Response target: 24-72 business hours</p>
            </div>
          </div>

          <div className="glass-card p-6">
            <p className="section-kicker">Other Channels</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/partner-with-us" className="btn-secondary">
                Partner With Us
              </Link>
              <Link href="/investors" className="btn-secondary">
                Investors
              </Link>
              <Link href="/early-access" className="btn-secondary">
                Early Access
              </Link>
            </div>
          </div>
        </div>

        <div className="glass-card p-6 md:p-8">
          <div className="mb-6 flex items-start">
            <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#C50000]/10">
              <i className="fas fa-paper-plane text-xl text-[#FF4444]" />
            </div>
            <div>
              <h2 className="font-display text-3xl text-white">Send an inquiry</h2>
              <p className="mt-2 text-text-secondary">
                Tell us what you are looking for and we will route your request to the right team.
              </p>
            </div>
          </div>

          <form className="space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-semibold text-white/80">Full Name <span className="text-[#FF4444]">*</span></label>
                <input type="text" name="name" required className="modern-input" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-semibold text-white/80">Email <span className="text-[#FF4444]">*</span></label>
                <input type="email" name="email" required className="modern-input" />
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-semibold text-white/80">Inquiry Type</label>
                <select name="type" className="modern-input">
                  <option value="">Select</option>
                  {inquiryTypes.map((type) => (
                    <option key={type}>{type}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-1 block text-sm font-semibold text-white/80">Area of Interest</label>
                <select name="areaOfInterest" className="modern-input">
                  <option value="">Select</option>
                  <option>Vertiport Development</option>
                  <option>Fleet / eVTOL Integration</option>
                  <option>Smart Mobility Infrastructure</option>
                  <option>Data / AI / Technology</option>
                  <option>Strategic Collaboration</option>
                </select>
              </div>
            </div>

            <div>
              <label className="mb-1 block text-sm font-semibold text-white/80">
                Subject <span className="text-[#FF4444]">*</span>
              </label>
              <input type="text" name="subject" required className="modern-input" />
            </div>

            <div>
              <label className="mb-1 block text-sm font-semibold text-white/80">
                Message <span className="text-[#FF4444]">*</span>
              </label>
              <textarea
                name="message"
                rows={5}
                required
                className="modern-input"
                placeholder="Please describe your intent clearly. Relevant details help us respond faster."
              />
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              <div>
                <label className="mb-1 block text-sm font-semibold text-white/80">Geographic Focus</label>
                <input type="text" name="geoFocus" className="modern-input" placeholder="e.g., India, Southeast Asia" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-semibold text-white/80">Investment Range / Budget</label>
                <input type="text" name="investmentRange" className="modern-input" placeholder="Optional" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-semibold text-white/80">Timeline for Engagement</label>
                <input type="text" name="timeline" className="modern-input" placeholder="e.g., Q3 2026" />
              </div>
            </div>

            <div>
              <label className="mb-1 block text-sm font-semibold text-white/80">Attachments (Optional)</label>
              <input type="file" name="attachment" className="modern-input" accept=".pdf,.docx,.pptx" />
            </div>

              <label className="flex items-start gap-2 text-sm text-text-secondary">
              <input type="checkbox" required className="mt-1 h-4 w-4 accent-[#C50000]" />
              <span>
                I agree to the{' '}
                <Link href="/privacy-policy" className="text-[#FF4444] underline">
                  Privacy Policy
                </Link>{' '}
                and{' '}
                <Link href="/terms-conditions" className="text-[#FF4444] underline">
                  Terms & Conditions
                </Link>
                .
              </span>
            </label>

            <button type="submit" className="btn-primary w-full md:w-auto px-8 py-3 text-lg">
              Submit Inquiry
            </button>
          </form>
        </div>
      </section>

      <section className="content-section">
        <div className="glass-card p-6 md:p-8">
          <h2 className="mb-6 text-center font-display text-3xl text-white">Contact & Engagement FAQ</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {faq.map(([question, answer]) => (
              <div key={question} className="rounded-2xl border border-border-subtle bg-surface-card p-5">
                <h3 className="mb-2 font-semibold text-white">{question}</h3>
                <p className="text-sm text-text-secondary">{answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

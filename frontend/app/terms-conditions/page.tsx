import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms & Conditions | MyOnlineJet',
  description:
    'Read the terms that apply to using the MyOnlineJet website and the information presented here.',
  alternates: { canonical: '/terms-conditions' }
}

const sections = [
  {
    title: 'Acceptance of Terms',
    content:
      'By accessing or using this website, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions. If you do not agree with any part of these terms, you must refrain from using this site.',
    points: [
      'These terms constitute a binding agreement between you and MyOnlineJet regarding your use of the website.',
      'We reserve the right to update or modify these terms at any time without prior notice. Continued use after changes constitutes acceptance.',
      'Certain sections of this website may have additional terms and conditions that apply specifically to those features or services.'
    ]
  },
  {
    title: 'Use of the Site',
    content:
      'This website is provided for general informational and business purposes related to MyOnlineJet and its ecosystem.',
    points: [
      'All content on this website is provided for general informational purposes only and does not create any professional or advisory relationship.',
      'You agree not to misuse the website, including but not limited to introducing malware, attempting unauthorized access, or interfering with site functionality.',
      'We may update, modify, or discontinue any page, feature, or service on this website at any time without prior notice.'
    ]
  },
  {
    title: 'Intellectual Property Rights',
    content:
      'Unless otherwise indicated, all content, design, graphics, logos, icons, images, software, and written materials on this website are the exclusive property of MyOnlineJet or its licensors.',
    points: [
      'You may not reproduce, distribute, modify, transmit, republish, or create derivative works from any part of this website without prior written authorization.',
      'All trademarks, service marks, and trade names displayed on this website are the property of their respective owners and may not be used without permission.',
      'Unauthorized use of any material may violate copyright, trademark, and other applicable laws and may result in legal action.'
    ]
  },
  {
    title: 'User Responsibilities',
    content:
      'As a user of this website, you agree to act responsibly and in compliance with all applicable laws and regulations.',
    points: [
      'You represent that any information you submit through forms or communication channels is accurate, complete, and not misleading.',
      'You agree not to use the website for any unlawful purpose or in violation of any applicable local, national, or international law.',
      'You are solely responsible for maintaining the confidentiality of any account credentials and for all activities that occur under your account.'
    ]
  },
  {
    title: 'No Warranties',
    content:
      'This website and all content, materials, and services are provided on an "as is" and "as available" basis without warranties of any kind, either express or implied.',
    points: [
      'We do not guarantee that all information on this website remains current, complete, or error-free at all times.',
      'Project details, timelines, technical specifications, and operational references may change as the platform and regulatory environment evolve.',
      'External links and third-party services accessible through this website are governed by their own terms and are outside our control.'
    ]
  },
  {
    title: 'Limitation of Liability',
    content:
      'To the fullest extent permitted by applicable law, MyOnlineJet and its affiliates shall not be liable for any damages arising out of or related to your use of this website.',
    points: [
      'This limitation applies to all damages, including direct, indirect, incidental, special, consequential, or punitive damages.',
      'We shall not be liable for any loss of data, profits, business, or goodwill resulting from the use or inability to use this website.',
      'Your sole and exclusive remedy for any dissatisfaction with the website is to discontinue your use of it.'
    ]
  },
  {
    title: 'Indemnification',
    content:
      'You agree to indemnify, defend, and hold harmless MyOnlineJet, its affiliates, officers, directors, employees, and agents from any claims, liabilities, damages, losses, or expenses arising out of your use of the website or violation of these terms.',
    points: [
      'This indemnification obligation survives the termination of your use of the website and these terms.',
      'We reserve the right to assume the exclusive defense and control of any matter subject to indemnification, at your expense.',
      'You agree to cooperate fully in the defense of any such claims and not to settle any matter without our prior written consent.'
    ]
  },
  {
    title: 'Governing Law & Dispute Resolution',
    content:
      'These terms shall be governed by and construed in accordance with the laws of India.',
    points: [
      'Any disputes arising out of or relating to these terms or your use of the website shall be resolved exclusively in the courts of Jaipur, Rajasthan, India.',
      'You consent to the personal jurisdiction of such courts and waive any objection based on inconvenient forum.',
      'If any provision of these terms is found to be unenforceable, the remaining provisions shall remain in full force and effect.'
    ]
  },
  {
    title: 'Changes to These Terms',
    content:
      'We reserve the right to update, amend, or modify these terms and conditions at any time without prior notice. Changes are effective immediately upon posting.',
    points: [
      'It is your responsibility to review this page periodically for any changes to the terms and conditions.',
      'Your continued use of the website after any modifications constitutes your acceptance of the updated terms.',
      'Material changes will be reflected in the "Last Updated" date at the top of this page.'
    ]
  },
  {
    title: 'Contact Information',
    content:
      'If you have any questions, concerns, or requests regarding these terms and conditions, please reach out to us through the appropriate channels.',
    points: [
      'For general inquiries about these terms, please use the Contact page on this website.',
      'For legal or compliance concerns, you may direct your communication through the official contact channels listed on our website.',
      'We aim to respond to all legitimate inquiries in a timely manner.'
    ]
  }
]

const faqItems = [
  {
    q: 'Do these terms create a legally binding agreement?',
    a: 'Yes. By using this website, you enter into a legally binding agreement with MyOnlineJet governed by these terms and the laws of India.'
  },
  {
    q: 'Can I use content from this website for my own projects?',
    a: 'Not without prior written authorization. All content is protected by intellectual property laws. Please contact us for permission requests.'
  },
  {
    q: 'What happens if I violate these terms?',
    a: 'We reserve the right to restrict or terminate access to the website for any violation of these terms, without liability or prior notice.'
  }
]

export default function Page() {
  return (
    <div className="dark-page-shell">
      <div className="aurora-bg" />
      <div className="noise-overlay" />

      <section className="relative z-10 mx-auto max-w-6xl px-4 pt-28 pb-16 sm:px-6 sm:pt-32 sm:pb-20 lg:px-8">

        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#C50000] sm:px-5 sm:py-2 sm:text-sm">
            Legal
          </div>
          <h1 className="content-hero-title mt-6 mb-4 sm:mt-8 sm:mb-5">
            Terms &amp; Conditions
          </h1>
          <p className="mx-auto max-w-3xl text-sm leading-6 text-text-secondary sm:text-base sm:leading-7 md:text-lg">
            These terms describe the basic rules for using the MyOnlineJet website and the information presented here.
          </p>
          <p className="mt-3 text-xs text-text-muted sm:mt-4 sm:text-sm">
            Last Updated: January 2025
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8 lg:space-y-10">
          {sections.map((section) => (
            <div
              key={section.title}
              className="glass-card rounded-xl p-5 sm:rounded-2xl sm:p-8 lg:p-10"
            >
              <div className="max-w-4xl">
                <h2 className="section-kicker text-base sm:text-lg lg:text-xl">
                  {section.title}
                </h2>
                <p className="mt-2 text-xs leading-5 text-text-secondary sm:mt-3 sm:text-sm sm:leading-7 md:text-base">
                  {section.content}
                </p>
              </div>
              <ul className="mt-4 grid gap-2 sm:mt-6 sm:gap-3">
                {section.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 rounded-lg border border-border-subtle bg-surface-card p-3 text-xs text-text-secondary sm:rounded-xl sm:p-4 sm:text-sm"
                  >
                    <span className="mt-0.5 shrink-0 text-[#C50000]">&bull;</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 lg:mt-20">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="font-display text-lg text-white sm:text-2xl md:text-3xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-sm text-text-secondary sm:mt-3 sm:text-base">
              Common questions about our terms and conditions.
            </p>
          </div>
          <div className="space-y-4 sm:space-y-5">
            {faqItems.map((item) => (
              <div
                key={item.q}
                className="glass-card rounded-xl p-4 sm:rounded-2xl sm:p-6 lg:p-8"
              >
                <h3 className="text-sm font-semibold text-white sm:text-base lg:text-lg">
                  {item.q}
                </h3>
                <p className="mt-2 text-xs leading-5 text-text-secondary sm:mt-3 sm:text-sm sm:leading-7">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 sm:mt-16 lg:mt-20">
          <div className="rounded-xl border border-border-subtle bg-gradient-to-r from-[#C50000]/12 via-[#C50000]/5 to-transparent p-5 text-center shadow-[0_30px_60px_rgba(0,0,0,0.24)] sm:rounded-[1.5rem] sm:p-8 lg:p-10">
            <h2 className="font-display text-lg text-white sm:text-2xl md:text-3xl">
              Need Help?
            </h2>
            <p className="mx-auto mt-2 max-w-3xl text-xs text-text-secondary sm:mt-4 sm:text-sm md:text-base">
              The contact page is the best place to start if you need to route a compliance or policy inquiry.
            </p>
            <div className="mt-4 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4 sm:mt-6">
              <Link href="/contact" className="btn-primary">
                Contact Us
              </Link>
              <Link href="/privacy-policy" className="btn-secondary">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

      </section>
    </div>
  )
}

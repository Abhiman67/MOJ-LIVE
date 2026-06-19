import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Legal Disclaimer | MyOnlineJet',
  description:
    'Read the legal disclaimer for the MyOnlineJet website, including scope, informational use, and no-warranty language.',
  alternates: { canonical: '/legal-disclaimer' }
}

const sections = [
  {
    title: 'General Information Only',
    content:
      'The content published on this website is provided for general informational and educational purposes only. It does not constitute legal, financial, tax, investment, or professional advice of any kind.',
    points: [
      'Project descriptions, timelines, technical specifications, and operational references may change as the platform, regulatory environment, and market conditions evolve.',
      'Public-facing pages may contain forward-looking statements, high-level architectural concepts, aspirational goals, or strategic visions that are not guarantees of future performance or outcomes.',
      'Any decision or action taken based on the information presented on this website is solely at your own risk. You should independently verify all critical information and consult qualified professionals where appropriate.'
    ]
  },
  {
    title: 'No Warranties',
    content:
      'This website and all content, materials, information, software, products, and services are provided on an "as is" and "as available" basis without warranties of any kind, either express or implied.',
    points: [
      'We do not warrant that the website will be uninterrupted, timely, secure, or error-free, or that any defects will be corrected.',
      'We make no representation or warranty regarding the accuracy, completeness, currency, or reliability of any content, data, or third-party materials accessible through this site.',
      'We expressly disclaim all warranties, including but not limited to merchantability, fitness for a particular purpose, non-infringement, and any warranties arising out of course of dealing or usage of trade.'
    ]
  },
  {
    title: 'Limitation of Liability',
    content:
      'To the fullest extent permitted by applicable law, MyOnlineJet, its affiliates, directors, officers, employees, and agents shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of or inability to use this website.',
    points: [
      'This limitation applies whether the alleged liability is based on contract, tort, negligence, strict liability, or any other legal theory, even if we have been advised of the possibility of such damages.',
      'Some jurisdictions do not allow the exclusion or limitation of certain warranties or liabilities, so the above limitations may not apply to you to the extent prohibited by applicable law.',
      'Your sole and exclusive remedy for dissatisfaction with this website is to stop using it.'
    ]
  },
  {
    title: 'External Links & Third-Party Content',
    content:
      'This website may contain links to third-party websites, platforms, or resources that are not owned or controlled by MyOnlineJet.',
    points: [
      'We have no control over, and assume no responsibility for, the content, privacy policies, terms, or practices of any third-party websites or services.',
      'The inclusion of any link does not imply endorsement, recommendation, or affiliation by MyOnlineJet unless expressly stated otherwise.',
      'Accessing and using third-party websites is done entirely at your own risk and subject to the terms and conditions of those websites.'
    ]
  },
  {
    title: 'Forward-Looking Statements',
    content:
      'Certain statements on this website may constitute forward-looking statements within the meaning of applicable securities laws. These statements reflect our current expectations, projections, and beliefs regarding future events, trends, and performance.',
    points: [
      'Forward-looking statements are based on assumptions that may prove to be inaccurate and are subject to known and unknown risks, uncertainties, and other factors that could cause actual results to differ materially.',
      'These statements are not guarantees of future performance and should not be unduly relied upon. We undertake no obligation to update or revise any forward-looking statements.',
      'This website does not constitute an offer to sell or a solicitation of an offer to buy any securities, nor shall it form the basis of any investment decision.'
    ]
  },
  {
    title: 'Intellectual Property',
    content:
      'Unless otherwise indicated, all content, design, graphics, logos, icons, images, audio clips, software, and written material on this website are the exclusive property of MyOnlineJet or its licensors and are protected by applicable intellectual property laws.',
    points: [
      'You may not reproduce, distribute, modify, transmit, republish, display, perform, or create derivative works from any part of this website without prior written authorization from MyOnlineJet.',
      'Unauthorized use of any material may violate copyright, trademark, and other applicable laws and could result in civil or criminal penalties.',
      'All trademarks, service marks, and trade names displayed on this website are the property of their respective owners.'
    ]
  },
  {
    title: 'Governing Law & Jurisdiction',
    content:
      'This legal disclaimer and any disputes arising out of or related to your use of this website shall be governed by and construed in accordance with the laws of India.',
    points: [
      'Any legal action or proceeding arising out of or relating to this disclaimer or your use of the website shall be brought exclusively in the courts of Jaipur, Rajasthan, India.',
      'You consent to the personal jurisdiction of such courts and waive any objection based on improper venue or inconvenient forum.',
      'If any provision of this disclaimer is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.'
    ]
  },
  {
    title: 'Changes to This Disclaimer',
    content:
      'We reserve the right to update, amend, or modify this legal disclaimer at any time without prior notice. Changes will be effective immediately upon posting to this page.',
    points: [
      'It is your responsibility to review this page periodically for any updates or changes.',
      'Your continued use of the website after any modifications constitutes your acceptance of the revised disclaimer.',
      'Material changes will be reflected in the "Last Updated" date at the top of this page.'
    ]
  }
]

const faqItems = [
  {
    q: 'Can I rely on this website for legal or investment advice?',
    a: 'No. The content is for general informational purposes only. You should consult qualified legal, financial, or investment professionals for advice specific to your situation.'
  },
  {
    q: 'Does MyOnlineJet endorse the third-party websites it links to?',
    a: 'Not unless expressly stated. Third-party links are provided for convenience only and we assume no responsibility for their content or practices.'
  },
  {
    q: 'How can I get in touch regarding legal or compliance matters?',
    a: 'Please use the Contact page to reach out to the appropriate team. We aim to respond to compliance and legal inquiries promptly.'
  }
]

export default function Page() {
  return (
    <div className="dark-page-shell">
      <div className="aurora-bg" />
      <div className="noise-overlay" />

      <section className="relative z-10 mx-auto max-w-6xl px-4 pt-28 pb-16 sm:px-6 sm:pt-32 sm:pb-20 lg:px-8">

        {/* Hero */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#C50000] sm:px-5 sm:py-2 sm:text-sm">
            Legal
          </div>
          <h1 className="content-hero-title mt-6 mb-4 sm:mt-8 sm:mb-5">
            Legal Disclaimer
          </h1>
          <p className="mx-auto max-w-3xl text-sm leading-6 text-text-secondary sm:text-base sm:leading-7 md:text-lg">
            The information on this website is provided for general informational purposes only and should not be treated as legal, financial, technical, or investment advice.
          </p>
          <p className="mt-3 text-xs text-text-muted sm:mt-4 sm:text-sm">
            Last Updated: January 2025
          </p>
        </div>

        {/* Disclaimer Sections */}
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

        {/* FAQ Section */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="font-display text-lg text-white sm:text-2xl md:text-3xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-sm text-text-secondary sm:mt-3 sm:text-base">
              Common questions about our legal disclaimer.
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

        {/* CTA */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <div className="rounded-xl border border-border-subtle bg-gradient-to-r from-[#C50000]/12 via-[#C50000]/5 to-transparent p-5 text-center shadow-[0_30px_60px_rgba(0,0,0,0.24)] sm:rounded-[1.5rem] sm:p-8 lg:p-10">
            <h2 className="font-display text-lg text-white sm:text-2xl md:text-3xl">
              Need Clarification?
            </h2>
            <p className="mx-auto mt-2 max-w-3xl text-xs text-text-secondary sm:mt-4 sm:text-sm md:text-base">
              If you have a question about the information on this site or need to route a compliance inquiry, please reach out through the contact page.
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

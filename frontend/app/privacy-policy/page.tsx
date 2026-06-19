import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | MyOnlineJet',
  description:
    'Learn how MyOnlineJet may collect, use, disclose, and protect information when you visit the site or submit an inquiry.',
  alternates: { canonical: '/privacy-policy' }
}

const sections = [
  {
    title: 'Information We Collect',
    content:
      'We may collect certain information when you interact with our website, forms, or communication channels. The types of data we collect depend on the nature of your interaction.',
    points: [
      'Contact details you voluntarily submit through forms or email, such as your name, email address, phone number, and organization name.',
      'Basic usage data collected automatically, including pages viewed, referring URLs, browser type, device details, and timestamps.',
      'Message content, attachments, and any additional context you choose to share when submitting inquiries, partnership requests, or applications.'
    ]
  },
  {
    title: 'How We Use Information',
    content:
      'Any information collected is used solely for legitimate business purposes related to our operations and services.',
    points: [
      'To respond to inquiries, manage partnership requests, investor communications, and support or career-related submissions.',
      'To improve and maintain the website experience, enhance security, and analyze aggregate usage patterns.',
      'To comply with applicable legal obligations, enforce our terms, and protect our rights and the rights of others.'
    ]
  },
  {
    title: 'Data Sharing & Disclosure',
    content:
      'We do not sell, rent, or trade your personal information. We may share data only in limited circumstances as described below.',
    points: [
      'We may share information with trusted service providers who assist in operating our website or business, subject to strict confidentiality agreements.',
      'We may disclose information if required by law, legal process, or governmental request, or to protect our rights, property, or safety.',
      'In the event of a business transaction such as a merger, acquisition, or asset sale, your information may be transferred as part of that transaction with appropriate notice.'
    ]
  },
  {
    title: 'Data Security',
    content:
      'We implement reasonable administrative, technical, and physical safeguards to protect your information from unauthorized access, alteration, disclosure, or destruction.',
    points: [
      'All data transmitted through our website is protected using industry-standard encryption protocols where applicable.',
      'Access to personal information is restricted to authorized personnel only, on a need-to-know basis.',
      'Despite our efforts, no method of transmission or storage is completely secure. We cannot guarantee absolute security of your data.'
    ]
  },
  {
    title: 'Your Rights & Choices',
    content:
      'Depending on your jurisdiction, you may have certain rights regarding the personal information we hold about you.',
    points: [
      'You may choose not to submit forms or share personal information, though this may limit our ability to respond to your inquiries.',
      'You may request access to, correction of, or deletion of your personal data by contacting us through the designated channels.',
      'You can manage browser-level cookie and tracking preferences through your browser settings at any time.'
    ]
  },
  {
    title: 'Cookies & Tracking',
    content:
      'Our website may use cookies, web beacons, and similar tracking technologies to enhance functionality and analyze usage.',
    points: [
      'Essential cookies are used for basic site functionality and cannot be disabled through our site.',
      'Analytics cookies help us understand how visitors interact with our website to improve the user experience.',
      'Third-party cookies may be set by embedded services such as analytics platforms. You can control cookie preferences through your browser settings.'
    ]
  },
  {
    title: 'Third-Party Services',
    content:
      'Our website may integrate with or link to third-party services that operate under their own privacy practices.',
    points: [
      'We are not responsible for the privacy practices or content of third-party websites, platforms, or services linked from our site.',
      'Any information you provide to third-party services is subject to their respective privacy policies and terms.',
      'We encourage you to review the privacy policies of any third-party services you interact with through our website.'
    ]
  },
  {
    title: 'Changes to This Policy',
    content:
      'We reserve the right to update or modify this privacy policy at any time. Changes will be effective immediately upon posting to this page.',
    points: [
      'Material changes will be reflected in the "Last Updated" date at the top of this page.',
      'We encourage you to review this page periodically for any updates to our privacy practices.',
      'Your continued use of the website after any modifications constitutes your acceptance of the revised policy.'
    ]
  }
]

const faqItems = [
  {
    q: 'Does MyOnlineJet sell my personal information?',
    a: 'No. We do not sell, rent, or trade personal information to third parties for their marketing purposes.'
  },
  {
    q: 'How long do you retain my data?',
    a: 'We retain personal information only as long as necessary to fulfill the purposes for which it was collected, or as required by applicable law.'
  },
  {
    q: 'How can I request deletion of my data?',
    a: 'Please contact us through the Contact page with your request. We will respond in accordance with applicable privacy laws.'
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
            Privacy
          </div>
          <h1 className="content-hero-title mt-6 mb-4 sm:mt-8 sm:mb-5">
            Privacy Policy
          </h1>
          <p className="mx-auto max-w-3xl text-sm leading-6 text-text-secondary sm:text-base sm:leading-7 md:text-lg">
            This page explains how MyOnlineJet may collect, use, disclose, and protect information when you visit the site or submit an inquiry.
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
              Common questions about our privacy practices.
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
              Questions About Privacy?
            </h2>
            <p className="mx-auto mt-2 max-w-3xl text-xs text-text-secondary sm:mt-4 sm:text-sm md:text-base">
              If you need clarification about how your data is handled, please reach out through the contact page.
            </p>
            <div className="mt-4 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4 sm:mt-6">
              <Link href="/contact" className="btn-primary">
                Contact Us
              </Link>
              <Link href="/terms-conditions" className="btn-secondary">
                Terms &amp; Conditions
              </Link>
            </div>
          </div>
        </div>

      </section>
    </div>
  )
}

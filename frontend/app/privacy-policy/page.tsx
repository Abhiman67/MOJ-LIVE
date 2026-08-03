import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | MyOnlineJet - Advanced Air Mobility Infrastructure',
  description:
    'MyOnlineJet Privacy Policy - Learn how we collect, use, and protect your personal data in compliance with Indian data protection laws, IT Rules 2011, and DPDP Act 2023.',
  alternates: { canonical: '/privacy-policy' }
}

const dataCollectionRows = [
  {
    category: 'Identity & Contact Data',
    badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    elements: 'Full legal name, date of birth, email address, phone number, postal address',
    basis: 'Contractual necessity (service delivery); Identity verification; Communication'
  },
  {
    category: 'Government & Verification Data',
    badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    elements: 'Government-issued ID numbers (PAN, Aadhaar, Passport), KYC status, biometric verification tokens',
    basis: 'Legal obligation (anti-fraud, aviation security); Legitimate interest (safety)'
  },
  {
    category: 'Technical & Usage Data',
    badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    elements: 'IP address, MAC address, device fingerprints, browser type, operating system, session logs, clickstream data',
    basis: 'Legitimate interest (security, fraud prevention, platform optimization)'
  },
  {
    category: 'Geolocation Data',
    badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    elements: 'Real-time precise location (GPS), altitude data, movement history, vertiport access timestamps',
    basis: 'Consent (explicit opt-in); Contractual necessity (mobility service optimization)'
  },
  {
    category: 'Transactional & Financial Data',
    badgeColor: 'bg-red-500/10 text-red-400 border-red-500/20',
    elements: 'Payment instrument details (tokenized), billing address, transaction amount, invoice history, UPI reference IDs',
    basis: 'Contractual necessity (payment processing); Legal obligation (tax reporting)'
  },
  {
    category: 'Operational Aviation Data',
    badgeColor: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
    elements: 'Booking manifests, flight preferences, weight and balance information, vertiport entry/exit logs',
    basis: 'Legitimate interest (aviation safety, infrastructure planning)'
  }
]

const userRightsRows = [
  {
    right: 'Right to Access',
    description: 'Obtain confirmation and copy of your personal data',
    limitations: 'Cannot disclose trade secrets or data of other individuals'
  },
  {
    right: 'Right to Correction',
    description: 'Rectify inaccurate, incomplete, or outdated data',
    limitations: 'Must be accompanied by verifiable identity proof'
  },
  {
    right: 'Right to Erasure',
    description: 'Request permanent deletion of your data',
    limitations: 'Subject to statutory legal and regulatory retention obligations'
  },
  {
    right: 'Right to Withdraw Consent',
    description: 'Withdraw previously given processing consent',
    limitations: 'Withdrawal does not affect lawful processing conducted prior'
  },
  {
    right: 'Right to Grieve',
    description: 'File a complaint with the Company and Data Protection Board',
    limitations: 'Exhaustion of internal redressal mechanism is recommended'
  }
]

const faqItems = [
  {
    q: 'What information does MyOnlineJet collect?',
    a: 'MyOnlineJet collects identity & contact details, government verification documents (PAN, Aadhaar, Passport), technical usage logs, real-time geolocation, tokenized financial data, and operational aviation manifests strictly for service delivery and regulatory compliance.'
  },
  {
    q: 'How does MyOnlineJet use collected data?',
    a: 'Collected data is used to deliver mobility services, manage vertiport access, fulfill legal/aviation obligations (such as DGCA directives), enhance infrastructure security, and optimize our Advanced Air Mobility platform.'
  },
  {
    q: 'Is user data shared with third parties?',
    a: 'MyOnlineJet does not sell personal data. We only share data with regulatory & law enforcement authorities (e.g., DGCA), trusted ecosystem partners (eVTOL operators, vertiport landlords), and essential service providers (payment gateways, cloud hosting) under strict confidentiality agreements.'
  },
  {
    q: 'Does MyOnlineJet sell my personal information?',
    a: 'No. We do not, and will not, sell, rent, or trade your personal data to any third party for consideration or marketing purposes.'
  },
  {
    q: 'How long do you retain my data?',
    a: 'We retain personal data only for as long as necessary to fulfill operational purposes, plus statutory retention periods mandated under Indian law (e.g., financial records for 8 years under Income Tax Act; aviation passenger manifests for 5 years under DGCA regulations).'
  },
  {
    q: 'How can I request deletion or correction of my data?',
    a: 'Submit a request to contact@myonlinejet.com using the subject line "Data Principal Request – [Your Full Name]". We will acknowledge receipt within 24 hours and resolve your request within 30 calendar days.'
  }
]

export default function Page() {
  return (
    <div className="dark-page-shell">
      <div className="aurora-bg" />
      <div className="noise-overlay" />

      <section className="relative z-10 mx-auto max-w-6xl px-4 pt-28 pb-16 sm:px-6 sm:pt-32 sm:pb-20 lg:px-8">

        {/* Hero Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#C50000]/40 bg-[#C50000]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#C50000] shadow-[0_0_15px_rgba(197,0,0,0.15)] sm:px-5 sm:py-2 sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-[#C50000] animate-pulse" />
            Legal Document
          </div>
          <h1 className="content-hero-title mt-6 mb-4 sm:mt-8 sm:mb-5">
            Privacy Policy
          </h1>
          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-zinc-300 sm:text-base sm:leading-7 md:text-lg">
            Comprehensive notice governing data protection, privacy rights, and compliance under Indian Data Protection Laws and DGCA Aviation Standards.
          </p>

          {/* Metadata Badges */}
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs sm:text-sm">
            <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-zinc-300 flex items-center gap-2">
              <span className="text-[#C50000] font-bold">&bull;</span> Effective Date: <strong className="text-white">June 1, 2025</strong>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-zinc-300 flex items-center gap-2">
              <span className="text-[#C50000] font-bold">&bull;</span> Last Updated: <strong className="text-white">June 15, 2025</strong>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-zinc-300 flex items-center gap-2">
              <span className="text-[#C50000] font-bold">&bull;</span> Version: <strong className="text-white">2.0</strong>
            </div>
            <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-emerald-400 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Compliant: DPDP Act 2023
            </div>
          </div>
        </div>

        {/* Entity Info Box */}
        <div className="glass-card mb-10 rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-[#C50000]/12 via-white/[0.03] to-transparent border border-white/10 shadow-xl">
          <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/10">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#C50000]/20 text-[#C50000] font-bold">
              &sect;
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">Entity Identification & Governance</h3>
              <p className="text-xs text-zinc-400">Official corporate &amp; legal fiduciary details</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4 text-xs sm:text-sm text-zinc-300">
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3.5">
              <span className="text-xs uppercase tracking-wider text-zinc-400 block mb-1">Entity Brand Name</span>
              <strong className="text-white text-base">MyOnlineJet</strong>
            </div>
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3.5">
              <span className="text-xs uppercase tracking-wider text-zinc-400 block mb-1">Registered Legal Name</span>
              <strong className="text-white text-base">iAlpha Technologies Private Limited</strong>
            </div>
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3.5">
              <span className="text-xs uppercase tracking-wider text-zinc-400 block mb-1">Geographic Scope</span>
              <span className="text-zinc-200">India (with extraterritorial application as provided by law)</span>
            </div>
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3.5">
              <span className="text-xs uppercase tracking-wider text-zinc-400 block mb-1">Grievance Officer Email</span>
              <a href="mailto:contact@myonlinejet.com" className="text-[#C50000] hover:underline font-semibold text-base">
                contact@myonlinejet.com
              </a>
            </div>
          </div>
        </div>

        {/* Notice Banner */}
        <div className="mb-10 rounded-2xl border border-amber-500/40 bg-amber-500/10 p-5 text-xs sm:text-sm text-amber-200 leading-relaxed shadow-[0_0_20px_rgba(245,158,11,0.08)] flex items-start gap-3.5">
          <div className="shrink-0 mt-0.5 flex h-7 w-7 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 font-bold">
            !
          </div>
          <div>
            <strong className="text-amber-400 font-semibold text-sm block mb-1">Statutory Notice:</strong>
            This Privacy Policy constitutes a legally binding notice pursuant to the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, and the Digital Personal Data Protection Act, 2023.
          </div>
        </div>

        {/* 17 Detailed Sections */}
        <div className="space-y-8 sm:space-y-10">

          {/* Section 1 */}
          <div id="section-1" className="scroll-mt-28 glass-card rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/10 hover:border-[#C50000]/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#C50000]/20 text-[#C50000] text-xs font-bold border border-[#C50000]/30">
                01
              </span>
              <h2 className="text-lg sm:text-xl text-white font-bold tracking-tight">
                PREAMBLE AND SCOPE OF AGREEMENT
              </h2>
            </div>
            <div className="space-y-4 text-xs leading-relaxed text-zinc-300 sm:text-sm sm:leading-7">
              <p className="bg-white/[0.02] p-4 rounded-xl border border-white/5">
                <strong className="text-white font-semibold">1.1 Introduction.</strong> This Privacy Policy (&ldquo;Policy&rdquo;) constitutes a legally binding notice. MyOnlineJet (operated by <strong className="text-white">iAlpha Technologies Private Limited</strong>) (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) recognizes data privacy as a non-negotiable element of operational integrity, particularly within the high-trust domain of mobility and aviation infrastructure.
              </p>
              <p className="bg-white/[0.02] p-4 rounded-xl border border-white/5">
                <strong className="text-white font-semibold">1.2 Acceptance.</strong> By accessing any platform, application, service, API, or physical touchpoint operated by MyOnlineJet (collectively, the &ldquo;Services&rdquo;), you, the Data Principal (&ldquo;you,&rdquo; &ldquo;your,&rdquo; or &ldquo;User&rdquo;), expressly acknowledge that you have read, understood, and agreed to be bound by the terms of this Policy. If you do not agree, you must immediately discontinue use of the Services.
              </p>
              <p className="bg-white/[0.02] p-4 rounded-xl border border-white/5">
                <strong className="text-white font-semibold">1.3 Applicability.</strong> This Policy applies to all natural persons who are: (a) Visitors and registered users of our digital platforms; (b) Beneficiaries of our mobility or infrastructure services; (c) Representatives of business partners, vendors, and stakeholders; (d) Any individual whose personal data is collected in connection with our operations.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div id="section-2" className="scroll-mt-28 glass-card rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/10 hover:border-[#C50000]/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#C50000]/20 text-[#C50000] text-xs font-bold border border-[#C50000]/30">
                02
              </span>
              <h2 className="text-lg sm:text-xl text-white font-bold tracking-tight">
                DEFINITIONS AND INTERPRETATION
              </h2>
            </div>
            <p className="text-xs leading-relaxed text-zinc-300 sm:text-sm sm:leading-7 mb-4">
              Capitalized terms not defined herein shall have the meaning ascribed to them under applicable data protection laws. For the purpose of this Policy:
            </p>
            <div className="grid gap-3">
              <div className="flex gap-3 rounded-xl border border-white/5 bg-surface-card p-4 text-xs text-zinc-300 sm:text-sm">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#C50000]" />
                <div>
                  <strong className="text-white text-sm block mb-0.5">&ldquo;Data Fiduciary&rdquo;</strong>
                  Means MyOnlineJet (iAlpha Technologies Private Limited), which determines the purpose and means of processing personal data.
                </div>
              </div>
              <div className="flex gap-3 rounded-xl border border-white/5 bg-surface-card p-4 text-xs text-zinc-300 sm:text-sm">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#C50000]" />
                <div>
                  <strong className="text-white text-sm block mb-0.5">&ldquo;Data Principal&rdquo;</strong>
                  Means the natural person to whom the personal data relates.
                </div>
              </div>
              <div className="flex gap-3 rounded-xl border border-white/5 bg-surface-card p-4 text-xs text-zinc-300 sm:text-sm">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#C50000]" />
                <div>
                  <strong className="text-white text-sm block mb-0.5">&ldquo;Processing&rdquo;</strong>
                  Means any operation performed on personal data, including collection, storage, adaptation, retrieval, use, disclosure, restriction, erasure, or destruction.
                </div>
              </div>
              <div className="flex gap-3 rounded-xl border border-white/5 bg-surface-card p-4 text-xs text-zinc-300 sm:text-sm">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#C50000]" />
                <div>
                  <strong className="text-white text-sm block mb-0.5">&ldquo;Sensitive Personal Data&rdquo;</strong>
                  Includes, but is not limited to, passwords, financial information, health data, official identifiers (e.g., Aadhaar, PAN), and biometric data.
                </div>
              </div>
              <div className="flex gap-3 rounded-xl border border-white/5 bg-surface-card p-4 text-xs text-zinc-300 sm:text-sm">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#C50000]" />
                <div>
                  <strong className="text-white text-sm block mb-0.5">&ldquo;Vertiport&rdquo;</strong>
                  Means any physical infrastructure used for takeoff, landing, and maintenance of vertical takeoff and landing (VTOL) aircraft.
                </div>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div id="section-3" className="scroll-mt-28 glass-card rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/10 hover:border-[#C50000]/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#C50000]/20 text-[#C50000] text-xs font-bold border border-[#C50000]/30">
                03
              </span>
              <h2 className="text-lg sm:text-xl text-white font-bold tracking-tight">
                TYPES OF DATA COLLECTED AND PURPOSES OF PROCESSING
              </h2>
            </div>
            <div className="overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5 text-white">
                    <th className="p-4 font-semibold w-1/4">Category</th>
                    <th className="p-4 font-semibold w-5/12">Specific Data Elements</th>
                    <th className="p-4 font-semibold w-1/3">Lawful Basis &amp; Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-zinc-300">
                  {dataCollectionRows.map((row) => (
                    <tr key={row.category} className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 align-top">
                        <span className={`inline-block px-2.5 py-1 rounded-md text-xs font-semibold border ${row.badgeColor}`}>
                          {row.category}
                        </span>
                      </td>
                      <td className="p-4 align-top leading-relaxed text-zinc-200">
                        {row.elements}
                      </td>
                      <td className="p-4 align-top leading-relaxed text-zinc-300">
                        {row.basis}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 4 */}
          <div id="section-4" className="scroll-mt-28 glass-card rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/10 hover:border-[#C50000]/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#C50000]/20 text-[#C50000] text-xs font-bold border border-[#C50000]/30">
                04
              </span>
              <h2 className="text-lg sm:text-xl text-white font-bold tracking-tight">
                SENSITIVE PERSONAL DATA
              </h2>
            </div>
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5 text-xs leading-relaxed text-zinc-300 sm:text-sm sm:leading-7">
              MyOnlineJet collects Sensitive Personal Data (e.g., biometric data from KYC, precise geolocation, financial data) only upon:
              <ul className="mt-3 space-y-2 pl-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#C50000] font-bold">&bull;</span>
                  <span><strong className="text-white">(a) Explicit Consent:</strong> Affirmative consent obtained through a separate explicit opt-in mechanism; or</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C50000] font-bold">&bull;</span>
                  <span><strong className="text-white">(b) Legal Mandate:</strong> Compliance with statutory legal obligations under aviation or anti-money laundering laws.</span>
                </li>
              </ul>
              <p className="mt-3 text-zinc-400 text-xs">
                Such data is processed with enhanced security controls, including AES-256 encryption at rest, TLS 1.3 in transit, and strict multi-factor authentication access controls.
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <div id="section-5" className="scroll-mt-28 glass-card rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/10 hover:border-[#C50000]/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#C50000]/20 text-[#C50000] text-xs font-bold border border-[#C50000]/30">
                05
              </span>
              <h2 className="text-lg sm:text-xl text-white font-bold tracking-tight">
                LEGAL BASES FOR PROCESSING
              </h2>
            </div>
            <p className="text-xs leading-relaxed text-zinc-300 sm:text-sm sm:leading-7 mb-4">
              We process your personal data strictly under one or more of the following lawful grounds:
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="rounded-xl border border-white/5 bg-surface-card p-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#C50000] block mb-1">01. Consent</span>
                <p className="text-zinc-300">You have provided free, specific, informed, unconditional, and unambiguous consent for processing.</p>
              </div>
              <div className="rounded-xl border border-white/5 bg-surface-card p-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#C50000] block mb-1">02. Contractual Performance</span>
                <p className="text-zinc-300">Processing is required to execute and fulfill our contractual obligations under the Terms of Service.</p>
              </div>
              <div className="rounded-xl border border-white/5 bg-surface-card p-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#C50000] block mb-1">03. Legal Obligation</span>
                <p className="text-zinc-300">Processing is mandated by applicable Indian laws or regulatory authorities (e.g., DGCA directives, tax reporting).</p>
              </div>
              <div className="rounded-xl border border-white/5 bg-surface-card p-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#C50000] block mb-1">04. Legitimate Interest</span>
                <p className="text-zinc-300">Processing serves legitimate business interests (e.g., network security, fraud detection) without overriding your rights.</p>
              </div>
            </div>
          </div>

          {/* Section 6 */}
          <div id="section-6" className="scroll-mt-28 glass-card rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/10 hover:border-[#C50000]/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#C50000]/20 text-[#C50000] text-xs font-bold border border-[#C50000]/30">
                06
              </span>
              <h2 className="text-lg sm:text-xl text-white font-bold tracking-tight">
                DATA SHARING, DISCLOSURE, AND THIRD-PARTY TRANSFERS
              </h2>
            </div>
            <div className="space-y-4 text-xs leading-relaxed text-zinc-300 sm:text-sm sm:leading-7">
              <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-emerald-200">
                <strong className="text-emerald-400 font-semibold text-sm block mb-1">6.1 Strict No-Sale Commitment:</strong>
                We do not, and will never, sell, rent, lease, or trade your personal data to any third party for consideration, marketing, or commercial exploitation.
              </div>
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <strong className="text-white font-semibold block mb-1">6.2 Authorized Recipients:</strong>
                We may disclose personal data only to: Regulatory &amp; Law Enforcement Bodies (DGCA, Ministry of Civil Aviation), Vertiport Ecosystem Partners (eVTOL operators, infrastructure landlords), Vetted Service Providers (cloud storage, payment gateways), and Professional Auditors under strict NDAs.
              </div>
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <strong className="text-white font-semibold block mb-1">6.3 Lawful Government Access:</strong>
                We will disclose personal data to law enforcement or court authorities only upon receipt of a valid, verifiable legal subpoena or judicial order.
              </div>
            </div>
          </div>

          {/* Section 7 */}
          <div id="section-7" className="scroll-mt-28 glass-card rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/10 hover:border-[#C50000]/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#C50000]/20 text-[#C50000] text-xs font-bold border border-[#C50000]/30">
                07
              </span>
              <h2 className="text-lg sm:text-xl text-white font-bold tracking-tight">
                CROSS-BORDER DATA TRANSFER
              </h2>
            </div>
            <p className="text-xs leading-relaxed text-zinc-300 sm:text-sm sm:leading-7">
              Personal data collected from Indian Data Principals may be transferred to or processed on cloud servers located outside India strictly in compliance with Chapter III of the Digital Personal Data Protection Act, 2023. For any cross-border transfers, we mandate Standard Contractual Clauses (SCCs) and robust cryptographic protection.
            </p>
          </div>

          {/* Section 8 */}
          <div id="section-8" className="scroll-mt-28 glass-card rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/10 hover:border-[#C50000]/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#C50000]/20 text-[#C50000] text-xs font-bold border border-[#C50000]/30">
                08
              </span>
              <h2 className="text-lg sm:text-xl text-white font-bold tracking-tight">
                DATA RETENTION AND DISPOSAL
              </h2>
            </div>
            <p className="text-xs leading-relaxed text-zinc-300 sm:text-sm sm:leading-7 mb-4">
              We retain personal data only for the duration strictly necessary to fulfill declared operational purposes, plus mandatory statutory periods:
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-xs sm:text-sm mb-2">
              <div className="rounded-xl border border-white/5 bg-surface-card p-4">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 block mb-1">Financial Records</span>
                <strong className="text-white text-base block">8 Years</strong>
                <span className="text-zinc-400 text-xs">Statutory requirement under Income Tax Act &amp; Companies Act</span>
              </div>
              <div className="rounded-xl border border-white/5 bg-surface-card p-4">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 block mb-1">Aviation Passenger Manifests</span>
                <strong className="text-white text-base block">5 Years</strong>
                <span className="text-zinc-400 text-xs">Mandatory safety retention period under DGCA regulations</span>
              </div>
            </div>
            <p className="text-xs text-zinc-400">
              Upon expiry of retention thresholds, data is permanently erased or irreversibly anonymized using Department of Defense standard wiping protocols.
            </p>
          </div>

          {/* Section 9 */}
          <div id="section-9" className="scroll-mt-28 glass-card rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/10 hover:border-[#C50000]/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#C50000]/20 text-[#C50000] text-xs font-bold border border-[#C50000]/30">
                09
              </span>
              <h2 className="text-lg sm:text-xl text-white font-bold tracking-tight">
                DATA SECURITY &amp; BREACH PROTOCOLS
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-3 text-xs sm:text-sm mb-4">
              <div className="rounded-xl border border-white/5 bg-surface-card p-4">
                <strong className="text-white block font-semibold mb-1">AES-256 Encryption</strong>
                <span className="text-zinc-400">All data stored at rest is protected using hardware-backed AES-256 standard.</span>
              </div>
              <div className="rounded-xl border border-white/5 bg-surface-card p-4">
                <strong className="text-white block font-semibold mb-1">TLS 1.3 Transport</strong>
                <span className="text-zinc-400">All network traffic is encrypted in transit via TLS 1.3 cryptographic protocols.</span>
              </div>
              <div className="rounded-xl border border-white/5 bg-surface-card p-4">
                <strong className="text-white block font-semibold mb-1">RBAC &amp; MFA</strong>
                <span className="text-zinc-400">Strict Role-Based Access Control backed by mandatory Hardware Token MFA.</span>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-zinc-300 sm:text-sm">
              In the event of a confirmed personal data breach, MyOnlineJet will notify the relevant statutory authority (CERT-In / Data Protection Board) and affected Data Principals within <strong className="text-white">72 hours</strong>.
            </p>
          </div>

          {/* Section 10 */}
          <div id="section-10" className="scroll-mt-28 glass-card rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/10 hover:border-[#C50000]/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#C50000]/20 text-[#C50000] text-xs font-bold border border-[#C50000]/30">
                10
              </span>
              <h2 className="text-lg sm:text-xl text-white font-bold tracking-tight">
                YOUR RIGHTS AS A DATA PRINCIPAL
              </h2>
            </div>
            <div className="overflow-x-auto rounded-xl border border-white/10 mb-5">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5 text-white">
                    <th className="p-4 font-semibold w-1/4">Right</th>
                    <th className="p-4 font-semibold w-1/2">Description</th>
                    <th className="p-4 font-semibold w-1/4">Limitations</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-zinc-300">
                  {userRightsRows.map((row) => (
                    <tr key={row.right} className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 align-top font-semibold text-white">
                        {row.right}
                      </td>
                      <td className="p-4 align-top leading-relaxed text-zinc-200">
                        {row.description}
                      </td>
                      <td className="p-4 align-top leading-relaxed text-zinc-400">
                        {row.limitations}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="rounded-xl border border-[#C50000]/30 bg-[#C50000]/10 p-4 text-xs sm:text-sm text-zinc-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <div>
                <span className="text-white font-semibold block">To Exercise Your Data Rights:</span>
                Email <code className="text-[#C50000] font-mono bg-black/40 px-2 py-0.5 rounded">contact@myonlinejet.com</code> with subject <code className="text-zinc-300 font-mono bg-black/40 px-2 py-0.5 rounded">&ldquo;Data Principal Request – [Your Full Name]&rdquo;</code>
              </div>
              <a href="mailto:contact@myonlinejet.com?subject=Data%20Principal%20Request" className="btn-primary text-xs shrink-0 py-2 px-4">
                Submit Rights Request
              </a>
            </div>
          </div>

          {/* Section 11 */}
          <div id="section-11" className="scroll-mt-28 glass-card rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/10 hover:border-[#C50000]/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#C50000]/20 text-[#C50000] text-xs font-bold border border-[#C50000]/30">
                11
              </span>
              <h2 className="text-lg sm:text-xl text-white font-bold tracking-tight">
                COOKIES AND TRACKING TECHNOLOGIES
              </h2>
            </div>
            <p className="text-xs leading-relaxed text-zinc-300 sm:text-sm sm:leading-7">
              Our digital platforms utilize Strictly Necessary Cookies (essential for site operation and authentication), Functional Cookies, and Analytics Cookies (only with explicit consent). You may customize or revoke non-essential cookie preferences at any time via your browser settings.
            </p>
          </div>

          {/* Section 12 */}
          <div id="section-12" className="scroll-mt-28 glass-card rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/10 hover:border-[#C50000]/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#C50000]/20 text-[#C50000] text-xs font-bold border border-[#C50000]/30">
                12
              </span>
              <h2 className="text-lg sm:text-xl text-white font-bold tracking-tight">
                CHILDREN’S PRIVACY
              </h2>
            </div>
            <p className="text-xs leading-relaxed text-zinc-300 sm:text-sm sm:leading-7">
              Our Services are strictly designed for individuals aged 18 and older. We do not knowingly collect personal data from minors. If we discover inadvertent collection of a minor&apos;s data, it will be deleted within 72 hours.
            </p>
          </div>

          {/* Section 13 */}
          <div id="section-13" className="scroll-mt-28 glass-card rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/10 hover:border-[#C50000]/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#C50000]/20 text-[#C50000] text-xs font-bold border border-[#C50000]/30">
                13
              </span>
              <h2 className="text-lg sm:text-xl text-white font-bold tracking-tight">
                THIRD-PARTY LINKS AND SERVICES
              </h2>
            </div>
            <p className="text-xs leading-relaxed text-zinc-300 sm:text-sm sm:leading-7">
              The MyOnlineJet platform may contain hyperlinks to third-party partner sites or services. These entities operate as independent Data Fiduciaries. We encourage you to review their privacy notices as our Policy does not extend to third-party domains.
            </p>
          </div>

          {/* Section 14 */}
          <div id="section-14" className="scroll-mt-28 glass-card rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/10 hover:border-[#C50000]/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#C50000]/20 text-[#C50000] text-xs font-bold border border-[#C50000]/30">
                14
              </span>
              <h2 className="text-lg sm:text-xl text-white font-bold tracking-tight">
                AMENDMENTS AND MODIFICATIONS
              </h2>
            </div>
            <p className="text-xs leading-relaxed text-zinc-300 sm:text-sm sm:leading-7">
              We reserve the right to amend this Policy as regulatory requirements evolve. Material revisions will be posted on our platform banner 30 days prior to taking effect and notified directly to registered accounts.
            </p>
          </div>

          {/* Section 15 */}
          <div id="section-15" className="scroll-mt-28 glass-card rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/10 hover:border-[#C50000]/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#C50000]/20 text-[#C50000] text-xs font-bold border border-[#C50000]/30">
                15
              </span>
              <h2 className="text-lg sm:text-xl text-white font-bold tracking-tight">
                GRIEVANCE REDRESSAL MECHANISM
              </h2>
            </div>
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-6 space-y-4">
              <div className="grid md:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div>
                  <span className="text-xs uppercase tracking-wider text-zinc-400 block mb-1">Grievance Officer</span>
                  <strong className="text-white text-base">Data Protection Officer (DPO)</strong>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-zinc-400 block mb-1">Formal Complaints Email</span>
                  <a href="mailto:contact@myonlinejet.com" className="text-[#C50000] hover:underline font-semibold text-base">
                    contact@myonlinejet.com
                  </a>
                </div>
                <div className="md:col-span-2">
                  <span className="text-xs uppercase tracking-wider text-zinc-400 block mb-1">Corporate Physical Address</span>
                  <p className="text-zinc-200">iAlpha Technologies Private Limited, Jaipur, Rajasthan, India - 302017</p>
                </div>
              </div>
              <div className="pt-3 border-t border-white/10 flex flex-wrap gap-4 text-xs text-zinc-300">
                <span className="rounded-md bg-white/5 border border-white/10 px-3 py-1 text-emerald-400">
                  Acknowledgement SLA: <strong>Within 24 Hours</strong>
                </span>
                <span className="rounded-md bg-white/5 border border-white/10 px-3 py-1 text-emerald-400">
                  Resolution SLA: <strong>Within 15 Business Days</strong>
                </span>
              </div>
            </div>
          </div>

          {/* Section 16 */}
          <div id="section-16" className="scroll-mt-28 glass-card rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/10 hover:border-[#C50000]/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#C50000]/20 text-[#C50000] text-xs font-bold border border-[#C50000]/30">
                16
              </span>
              <h2 className="text-lg sm:text-xl text-white font-bold tracking-tight">
                GOVERNING LAW AND JURISDICTION
              </h2>
            </div>
            <p className="text-xs leading-relaxed text-zinc-300 sm:text-sm sm:leading-7">
              This Policy shall be governed by and construed in accordance with the laws of the Republic of India. Any disputes arising hereunder shall be subject to the exclusive jurisdiction of the competent courts located in <strong className="text-white">Jaipur, Rajasthan, India</strong>.
            </p>
          </div>

          {/* Section 17 */}
          <div id="section-17" className="scroll-mt-28 glass-card rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/10 hover:border-[#C50000]/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#C50000]/20 text-[#C50000] text-xs font-bold border border-[#C50000]/30">
                17
              </span>
              <h2 className="text-lg sm:text-xl text-white font-bold tracking-tight">
                FINAL COMMITMENT AND CONTACT
              </h2>
            </div>
            <p className="text-xs leading-relaxed text-zinc-300 sm:text-sm sm:leading-7">
              MyOnlineJet operates at the convergence of mobility and technology. We treat your personal data with the same rigor, discipline, and safety standards we apply to aviation infrastructure operations. For any matter not explicitly addressed herein, please contact our legal team at <a href="mailto:contact@myonlinejet.com" className="text-[#C50000] hover:underline font-semibold">contact@myonlinejet.com</a>.
            </p>
          </div>

        </div>

        {/* Acknowledgement Box */}
        <div className="mt-12 rounded-2xl border border-[#C50000]/40 bg-gradient-to-br from-[#C50000]/20 via-[#C50000]/5 to-transparent p-6 text-center shadow-[0_10px_30px_rgba(197,0,0,0.15)] sm:p-8">
          <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#C50000]/30 text-[#C50000] text-xl font-bold border border-[#C50000]/50">
            &sect;
          </div>
          <h3 className="font-display text-base font-bold uppercase tracking-wider text-white sm:text-lg">
            Legal Acknowledgement &amp; Consent
          </h3>
          <p className="mx-auto mt-3 max-w-4xl text-xs leading-relaxed text-zinc-300 sm:text-sm sm:leading-7">
            BY CONTINUING TO USE MYONLINEJET&apos;S SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE RECEIVED, READ, AND UNDERSTOOD THIS PRIVACY POLICY, AND YOU AGREE TO ITS TERMS. YOU PROVIDE YOUR FREE, SPECIFIC, INFORMED, AND UNCONDITIONAL CONSENT TO THE COLLECTION, PROCESSING, STORAGE, AND DISCLOSURE OF YOUR PERSONAL DATA AS DESCRIBED HEREIN.
          </p>
        </div>

        {/* FAQ Section */}
        <div id="faq-section" className="scroll-mt-28 mt-16 sm:mt-20">
          <div className="text-center mb-10">
            <h2 className="font-display text-xl text-white font-bold sm:text-2xl md:text-3xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-sm text-zinc-400">
              Clear answers regarding data protection and user privacy rights.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            {faqItems.map((item, idx) => (
              <div
                key={item.q}
                className="glass-card rounded-2xl p-6 border border-white/10 hover:border-[#C50000]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-0.5 rounded bg-[#C50000]/20 text-[#C50000] text-xs font-bold font-mono">
                      Q0{idx + 1}
                    </span>
                    <h3 className="text-sm sm:text-base font-semibold text-white">
                      {item.q}
                    </h3>
                  </div>
                  <p className="text-xs leading-relaxed text-zinc-300 sm:text-sm">
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action / Contact Card */}
        <div className="mt-16 sm:mt-20">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-[#C50000]/20 via-[#C50000]/5 to-transparent p-6 text-center shadow-[0_30px_60px_rgba(0,0,0,0.4)] sm:p-10">
            <h2 className="font-display text-xl text-white font-bold sm:text-2xl md:text-3xl">
              Have Privacy or Legal Questions?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-xs text-zinc-300 sm:text-sm md:text-base">
              Our Data Protection Officer and Legal Team are available to assist with any inquiries regarding personal data processing or statutory rights.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
              <a href="mailto:privacy@myonlinejet.com" className="btn-primary">
                Submit Privacy Inquiry
              </a>
              <Link href="/contact" className="btn-secondary">
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

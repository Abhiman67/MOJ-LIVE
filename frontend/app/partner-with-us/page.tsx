import type { Metadata } from 'next'
import { PartnerEnhancements } from './PartnerEnhancements'
import { LockedFormOverlay } from '@/components/ui/LockedFormOverlay'

export const metadata: Metadata = {
  title: 'Partner With Us | MyOnlineJet — Build India\'s Advanced Air Mobility Network',
  description: 'Partner with MyOnlineJet to architect India\'s first nationwide vertiport and eVTOL ecosystem. Infrastructure hosting, technology integration, and strategic alliances.',
  keywords: ['AAM partnership India', 'vertiport partner', 'eVTOL infrastructure partner', 'MyOnlineJet partner', 'air mobility collaboration', 'smart city vertiport'],
  alternates: { canonical: '/partner-with-us' },
  openGraph: {
    title: 'Partner With Us — MyOnlineJet | Advanced Air Mobility Ecosystem',
    description: 'Be part of India\'s next aviation backbone. Vertiport hosting, technology co-development, and ecosystem integration for the future of movement.',
    images: [{ url: 'https://myonlinejet.com/images/Logo.webp', width: 1200, height: 630 }]
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
        '@type': 'PostalAddress', addressLocality: 'Jaipur', addressRegion: 'Rajasthan', addressCountry: 'IN'
      },
      sameAs: ['https://www.linkedin.com/company/myonlinejet']
    },
    {
      '@type': 'WebPage',
      '@id': 'https://www.myonlinejet.com/partner-with-us/',
      url: 'https://www.myonlinejet.com/partner-with-us/',
      name: 'Partner With Us | MyOnlineJet — AAM Infrastructure Partnership',
      isPartOf: { '@id': 'https://www.myonlinejet.com/' },
      description: 'Join MyOnlineJet in building India\'s most advanced air mobility network. Strategic vertiport hosting, tech integration, and ecosystem partnerships for the future of aviation.',
      mainEntity: {
        '@type': 'Offer', name: 'MyOnlineJet Partnership Program',
        description: 'Vertiport hosting, strategic technology alliance, ecosystem integration and anchor partner models for Advanced Air Mobility in India.',
        offeredBy: { '@id': 'https://www.myonlinejet.com/' }, businessFunction: 'https://schema.org/Partnership'
      }
    },
    { '@type': 'WebSite', '@id': 'https://www.myonlinejet.com/', url: 'https://www.myonlinejet.com/', name: 'MyOnlineJet' }
  ]
}

export default function PartnerWithUsPage() {
  return (
    <div className="partner-page relative">
      <PartnerEnhancements />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <div className="noise-overlay" />
      <div className="glow-orb-1-custom" />
      <div className="glow-orb-2-custom" />
      <div className="grid-bg-custom" />

      <div className="relative z-10 pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">

          {/* Hero */}
          <div className="text-center mb-20 reveal active" id="partner-hero">
            <span className="badge-pill-page">PARTNER WITH US</span>
            <h1 className="heading-hero-page mt-6 mb-5">
              Building India&apos;s Most Advanced <br /><span className="text-[#C50000]">Air Mobility Network — Together</span>
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              At MyOnlineJet, we are not just building an aviation service — we are architecting a nationwide Advanced Air Mobility (AAM) ecosystem that will redefine how people, businesses, and cities move. This is a foundational moment. And ecosystems are never built alone.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-5">
              <a href="#partnerForm" className="btn-primary text-center w-full sm:w-auto">Start Your Partnership &rarr;</a>
              <a href="#whyPartner" className="btn-secondary text-center w-full sm:w-auto">Discover Opportunities</a>
            </div>
          </div>

          {/* Why Partner */}
          <div id="whyPartner" className="glass-card p-8 md:p-12 mb-20 reveal">
            <h2 className="section-title mb-6">Why Partner With MyOnlineJet</h2>
            <p className="text-text-secondary text-lg mb-6">The shift to Advanced Air Mobility is inevitable. What matters is who builds the infrastructure layer that powers it. MyOnlineJet is positioned at that layer.</p>
            <div className="grid md:grid-cols-3 gap-8 mt-4">
              <div>
                <div className="icon-box mb-4"><i className="fas fa-building" /></div>
                <h3 className="heading-card-page mb-1">A distributed vertiport network</h3>
                <p className="text-text-secondary mt-1">across high-value locations, forming the physical backbone.</p>
              </div>
              <div>
                <div className="icon-box mb-4"><i className="fas fa-cloud-upload-alt" /></div>
                <h3 className="heading-card-page mb-1">Integrated digital platform</h3>
                <p className="text-text-secondary mt-1">connecting users, operators, and infrastructure in real-time.</p>
              </div>
              <div>
                <div className="icon-box mb-4"><i className="fas fa-chart-line" /></div>
                <h3 className="heading-card-page mb-1">Scalable ecosystem</h3>
                <p className="text-text-secondary mt-1">aligned with future regulatory and technological evolution.</p>
              </div>
            </div>
            <div className="mt-6 text-center md:text-left">
              <a href="/vision-mission" className="link-brand-page">Learn more about our long-term direction on the &quot;Vision &amp; Mission&quot; page <i className="fas fa-arrow-right text-sm" /></a>
            </div>
          </div>

          {/* Partner Showcase */}
          <div className="my-20 glass-card p-8 md:p-12 reveal">
            <div className="text-center mb-8">
              <span className="badge-pill-page">&bull; STRATEGIC ALLIANCE &bull;</span>
              <h2 className="section-title text-3xl md:text-4xl mt-4">Our Founding Partner Ecosystem</h2>
              <p className="text-text-secondary max-w-2xl mx-auto mt-3">We are proud to collaborate with visionary organizations shaping the future of AAM. Below is our first committed partner — more industry leaders joining soon.</p>
            </div>
            <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 justify-items-center">
              <div className="partner-logo-card-page w-full max-w-3xl bg-surface-card rounded-2xl border border-border-subtle p-8 flex flex-col md:flex-row items-center gap-8 shadow-sm">
                <div className="w-40 h-40 flex items-center justify-center bg-gradient-to-br from-[#1A1A1A] to-[#111111] rounded-2xl p-4 border border-border-subtle">
                  <img
                    src="https://myonlinejet.com/images/ialpha-logo-placeholder.png"
                    alt="iAlpha Technologies - Strategic Technology Partner"
                    className="max-w-full max-h-full object-contain"
                    data-fallback="https://placehold.co/400x200?text=iAlpha+Tech"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-text-primary font-display">iAlpha Technologies Private Limited</h3>
                  <p className="text-[#C50000] font-semibold text-sm mt-1">Founding Technology &amp; Infrastructure Partner</p>
                  <p className="text-text-secondary mt-3">As a core enabler of MyOnlineJet&apos;s digital backbone, iAlpha Technologies brings deep expertise in AI-driven fleet orchestration, vertiport management systems, and enterprise-grade mobility platforms. Together we are co-developing the intelligent control layer for India&apos;s vertiport network.</p>
                  <div className="mt-4 flex flex-wrap gap-3 justify-center md:justify-start">
                    <span className="bg-surface-hover text-text-secondary text-xs px-3 py-1 rounded-full border border-border-subtle">Vertiport OS</span>
                    <span className="bg-surface-hover text-text-secondary text-xs px-3 py-1 rounded-full border border-border-subtle">AI Airspace Mgmt</span>
                    <span className="bg-surface-hover text-text-secondary text-xs px-3 py-1 rounded-full border border-border-subtle">Edge Infrastructure</span>
                  </div>
                  <a href="#" className="link-brand-page inline-flex mt-4">Learn about joint roadmap <i className="fas fa-arrow-right ml-1" /></a>
                </div>
              </div>
            </div>
            <div className="mt-10 text-center border-t border-border-subtle pt-8">
              <div className="inline-flex items-center gap-2 bg-surface-card rounded-full px-5 py-2 border border-border-subtle">
                <i className="fas fa-plus-circle text-[#C50000]" />
                <span className="text-sm font-medium text-text-secondary">More anchor partners will be announced as we expand our vertiport footprint across India.</span>
              </div>
              <p className="text-xs text-text-muted mt-4">Join the select group of industry pioneers shaping India&apos;s Advanced Air Mobility infrastructure.</p>
            </div>
          </div>

          {/* Who Should Partner */}
          <div className="mb-20 reveal">
            <h2 className="section-title text-center mb-10">Who Should Partner With Us</h2>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
              <div className="glass-card p-6">
                <div className="icon-box mb-3"><i className="fas fa-hotel" /></div>
                <h3 className="heading-card-page mb-1">Infrastructure &amp; Real Estate</h3>
                <p className="text-sm text-text-secondary">Luxury hotels, hospitals, malls, airports, helipad owners.</p>
                <p className="text-xs text-text-muted mt-2">Transform your property into high-value vertiport node.</p>
                <a href="/vertiports" className="link-brand-page mt-3 inline-block">Explore Vertiports &rarr;</a>
              </div>
              <div className="glass-card p-6">
                <div className="icon-box mb-3"><i className="fas fa-microchip" /></div>
                <h3 className="heading-card-page mb-1">Aviation &amp; Technology</h3>
                <p className="text-sm text-text-secondary">eVTOL OEMs, drone companies, AI mapping, navigation, fleet mgt.</p>
                <p className="text-sm mt-2 text-text-muted">Co-develop into live operational ecosystem.</p>
                <a href="/technology" className="link-brand-page mt-2 inline-block">Technology integration &rarr;</a>
              </div>
              <div className="glass-card p-6">
                <div className="icon-box mb-3"><i className="fas fa-landmark" /></div>
                <h3 className="heading-card-page mb-1">Govt, Institutions &amp; Smart Cities</h3>
                <p className="text-sm text-text-secondary">Urban authorities, smart city missions, academic research.</p>
                <a href="/advanced-air-mobility" className="link-brand-page mt-2 inline-block">AAM frameworks &rarr;</a>
              </div>
              <div className="glass-card p-6">
                <div className="icon-box mb-3"><i className="fas fa-truck-fast" /></div>
                <h3 className="heading-card-page mb-1">Mobility &amp; Service Ecosystem</h3>
                <p className="text-sm text-text-secondary">Luxury mobility, emergency response, tourism, logistics.</p>
                <a href="/services" className="link-brand-page mt-2 inline-block">All Services &rarr;</a>
              </div>
            </div>
          </div>

          {/* Partnership Models */}
          <div className="glass-card p-8 md:p-12 mb-20 reveal">
            <h2 className="section-title text-center mb-8">Partnership Models — Built for Scale</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">
              <div>
                <div className="font-bold text-xl text-[#C50000] font-display">A. Vertiport Hosting</div>
                <p className="text-text-secondary text-sm mt-2">You provide infrastructure. We bring technology, network, operations. Revenue sharing + early-mover advantage.</p>
              </div>
              <div>
                <div className="font-bold text-xl text-[#C50000] font-display">B. Strategic Technology</div>
                <p className="text-text-secondary text-sm mt-2">You bring tech. We bring deployment scale. API integration &amp; co-development from pilot to scale.</p>
              </div>
              <div>
                <div className="font-bold text-xl text-[#C50000] font-display">C. Ecosystem Integration</div>
                <p className="text-text-secondary text-sm mt-2">You bring services/users. We connect you into aerial mobility layer. Joint offerings &amp; market expansion.</p>
              </div>
              <div>
                <div className="font-bold text-xl text-[#C50000] font-display">D. Founding / Anchor Partner</div>
                <p className="text-text-secondary text-sm mt-2">Selective high-impact. Deep strategic collaboration, co-branding, long-term positioning.</p>
                <a href="/investors" className="text-xs text-[#C50000] font-semibold mt-1 inline-block">Investor relations &rarr;</a>
              </div>
            </div>
          </div>

          {/* What Makes This Opportunity Unique */}
          <div className="glass-card p-8 md:p-10 mb-20 reveal">
            <h2 className="text-2xl font-bold mb-5 font-display">What Makes This Opportunity Unique</h2>
            <p className="text-text-secondary mb-5">Most companies will wait for the ecosystem to mature. A few will help build it. This is that moment.</p>
            <ul className="grid md:grid-cols-2 gap-3 list-disc pl-5 text-text-secondary">
              <li>India&apos;s AAM market is at pre-infrastructure stage</li>
              <li>Regulatory frameworks are evolving — early players shape them</li>
              <li>Network effects will define market leaders</li>
              <li>Infrastructure control = long-term power</li>
            </ul>
            <div className="mt-6 p-4 bg-[rgba(197,0,0,0.05)] rounded-xl text-center border border-[rgba(197,0,0,0.1)]">
              <p className="font-semibold text-text-primary">MyOnlineJet is focused on building that control layer — ethically, strategically, and at scale.</p>
            </div>
          </div>

          {/* Process Steps */}
          <div className="my-20 text-center reveal">
            <h2 className="section-title mb-8">How the Process Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
              {['EOI', 'Initial Evaluation', 'Discussion & Alignment', 'Formalization', 'Integration & Deployment'].map((step, i) => (
                <div key={step} className="process-step-page">
                  <span className="step-circle-page">{i + 1}</span>
                  <p className="font-semibold mt-2 text-text-primary font-display">{i === 0 ? 'EOI' : step}</p>
                  {i === 0 && <p className="text-xs text-text-secondary">Expression of Interest</p>}
                </div>
              ))}
            </div>
          </div>

          {/* Application Form */}
          <div id="partnerForm" className="scroll-mt-28 glass-card p-6 md:p-10 my-20 reveal">
            <h2 className="text-3xl font-bold text-center mb-2 font-display">Partner With Us — Application Form</h2>
            <p className="text-center text-text-secondary mb-8">Simple, clean, high-conversion. Serious inquiries only.</p>
            <LockedFormOverlay formType="partner">
            <form id="partnershipForm" action="#" method="POST">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div><label className="block font-semibold mb-2 text-text-primary">Full Name *</label><input type="text" className="form-input" required placeholder="Amit Sharma" /></div>
                <div><label className="block font-semibold mb-2 text-text-primary">Organization Name *</label><input type="text" className="form-input" required placeholder="Your Company" /></div>
                <div><label className="block font-semibold mb-2 text-text-primary">Website / LinkedIn Profile</label><input type="url" className="form-input" placeholder="https://" /></div>
                <div><label className="block font-semibold mb-2 text-text-primary">Email Address *</label><input type="email" className="form-input" required placeholder="contact@company.com" /></div>
                <div><label className="block font-semibold mb-2 text-text-primary">Phone Number *</label><input type="tel" className="form-input" required placeholder="+91" /></div>
                <div><label className="block font-semibold mb-2 text-text-primary">Partnership Category *</label>
                  <select className="form-select" required defaultValue="">
                    <option value="" disabled>Select</option>
                    <option>Infrastructure / Real Estate</option>
                    <option>Aviation / eVTOL / Drone</option>
                    <option>Technology Provider</option>
                    <option>Government / Institutional</option>
                    <option>Mobility / Service Provider</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div><label className="block font-semibold mb-2 text-text-primary">City</label><input type="text" className="form-input" placeholder="Mumbai" /></div>
                <div><label className="block font-semibold mb-2 text-text-primary">State</label><input type="text" className="form-input" placeholder="Maharashtra" /></div>
                <div><label className="block font-semibold mb-2 text-text-primary">Country</label><input type="text" className="form-input" placeholder="India" defaultValue="India" /></div>
                <div><label className="block font-semibold mb-2 text-text-primary">Specific Asset Location (if applicable)</label><input type="text" className="form-input" placeholder="Address / Coordinates" /></div>
              </div>
              <div className="mb-6"><label className="block font-semibold mb-2 text-text-primary">About Your Organization</label><textarea rows={3} className="form-textarea" placeholder="Describe your organization, capabilities, and current operations..." /></div>
              <div className="mb-6">
                <label className="block font-semibold mb-2 text-text-primary">Partnership Interest (Multi-select)</label>
                <div className="flex flex-wrap gap-4 mt-2">
                  {['Vertiport Hosting', 'Technology Integration', 'Ecosystem Services', 'Strategic Partnership', 'Other'].map((opt) => (
                    <label key={opt} className="flex items-center gap-2 text-text-secondary">
                      <input type="checkbox" className="accent-[#C50000]" /> {opt}
                    </label>
                  ))}
                </div>
              </div>
              <div className="mb-6"><label className="block font-semibold mb-2 text-text-primary">Asset / Capability Details</label><input type="text" className="form-input" placeholder="Land / Rooftop / Helipad details OR technology description / service offerings" /></div>
              <div className="mb-6"><label className="block font-semibold mb-2 text-text-primary">Why Do You Want to Partner With MyOnlineJet?</label><textarea rows={2} className="form-textarea" placeholder="This helps us filter serious partners. (Important)" /></div>
              <div className="mb-6"><label className="block font-semibold mb-2 text-text-primary">Additional Information (Optional)</label><textarea rows={2} className="form-textarea" placeholder="Anything else you'd like us to know" /></div>
              <div className="mb-8">
                <label className="flex items-start gap-3">
                  <input type="checkbox" required className="mt-1 accent-[#C50000]" />
                  <span className="text-sm text-text-secondary">I agree to be contacted by MyOnlineJet regarding partnership opportunities and understand that submission does not guarantee acceptance.</span>
                </label>
              </div>
              <div className="text-center"><button type="submit" className="btn-primary text-lg px-10 py-3">Apply for Partnership &rarr;</button></div>
              <p className="text-xs text-center text-text-muted mt-6">All information is handled with strict confidentiality. Submission does not constitute binding agreement.</p>
            </form>
            </LockedFormOverlay>
          </div>

          {/* Confidentiality */}
          <div className="glass-card p-7 text-center my-20 reveal">
            <div className="icon-box mb-3 mx-auto"><i className="fas fa-lock" /></div>
            <h3 className="font-bold text-xl font-display">A Note on Confidentiality</h3>
            <p className="text-text-secondary max-w-xl mx-auto mt-2">We respect the confidentiality of all discussions. Submission does not constitute a binding agreement, and detailed discussions will only proceed under appropriate terms where required.</p>
            <a href="/legal-disclaimer" className="link-brand-page inline-flex items-center gap-1 mt-4 text-sm font-medium">Legal Disclaimer &rarr;</a>
          </div>

          {/* Final Word */}
          <div className="text-center py-8 border-t border-border-subtle reveal">
            <p className="text-2xl font-bold text-text-primary font-display">
              The next decade of aviation will not be defined by aircraft alone — <br />it will be defined by infrastructure, integration, and ecosystem control.
            </p>
            <p className="text-text-secondary mt-4 max-w-2xl mx-auto">MyOnlineJet is building that foundation. If you see the future the way we do — we should be building it together.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-5 mt-7">
              <a href="/contact" className="btn-secondary text-center w-full sm:w-auto">General Inquiry</a>
              <a href="#partnerForm" className="btn-primary text-center w-full sm:w-auto">Submit Partnership Interest</a>
            </div>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .partner-page .glow-orb-1-custom { position:fixed; top:-20%; right:-10%; width:600px; height:600px; background:radial-gradient(circle,rgba(197,0,0,0.08) 0%,transparent 70%); pointer-events:none; z-index:0; }
        .partner-page .glow-orb-2-custom { position:fixed; bottom:-10%; left:-5%; width:500px; height:500px; background:radial-gradient(circle,rgba(197,0,0,0.05) 0%,transparent 70%); pointer-events:none; z-index:0; }
        .partner-page .grid-bg-custom { position:fixed; top:0; left:0; width:100%; height:100%; background-image:linear-gradient(rgba(255,255,255,0.015) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.015) 1px,transparent 1px); background-size:60px 60px; pointer-events:none; z-index:0; }
        .partner-page .badge-pill-page { display:inline-block; background:rgba(197,0,0,0.1); color:#C50000; padding:4px 16px; border-radius:9999px; font-size:0.75rem; font-weight:600; text-transform:uppercase; letter-spacing:0.05em; font-family:'Inter',sans-serif; }
        .partner-page .heading-hero-page { font-family:'Space Grotesk',sans-serif; font-size:clamp(2.5rem,5vw,4rem); font-weight:800; line-height:1.1; letter-spacing:-0.03em; }
        .partner-page .heading-card-page { font-family:'Space Grotesk',sans-serif; font-weight:700; font-size:1.25rem; letter-spacing:-0.01em; color:#FAFAFA; }
        .partner-page .link-brand-page { color:#C50000; font-weight:600; transition:all 0.3s ease; display:inline-flex; align-items:center; gap:0.25rem; }
        .partner-page .link-brand-page:hover { gap:0.5rem; color:#C50000; }
        .partner-page .partner-logo-card-page { transition:all 0.3s cubic-bezier(0.2,0.9,0.4,1.1); }
        .partner-page .partner-logo-card-page:hover { transform:scale(1.02); box-shadow:0 20px 35px -12px rgba(0,0,0,0.4); border-color:#C50000 !important; }
        .partner-page .process-step-page { background:#141414; border:1px solid #1F1F1F; border-radius:16px; padding:1.5rem; transition:all 0.3s ease; }
        .partner-page .process-step-page:hover { border-color:rgba(197,0,0,0.3); transform:translateY(-2px); }
        .partner-page .step-circle-page { width:32px; height:32px; background:#C50000; color:#fff; border-radius:50%; display:inline-flex; align-items:center; justify-content:center; font-weight:700; font-family:'Space Grotesk',sans-serif; }
        .partner-page .section-title { font-family:'Space Grotesk',sans-serif; font-weight:700; letter-spacing:-0.03em; font-size:clamp(1.8rem,3vw,2.8rem); background:linear-gradient(135deg,#FAFAFA,#C50000); -webkit-background-clip:text; background-clip:text; color:transparent; }
        .partner-page .glass-card:hover { border-color:rgba(197,0,0,0.3); transform:translateY(-2px); box-shadow:0 12px 40px rgba(197,0,0,0.08); }
        .partner-page .reveal { opacity:0; transform:translateY(24px); transition:opacity 0.4s ease,transform 0.4s ease; }
        .partner-page .reveal.active { opacity:1; transform:translateY(0); }
        @media (max-width:768px) { .partner-page .heading-hero-page { font-size:clamp(1.8rem,7vw,2.5rem); } .partner-page .section-title { font-size:1.8rem; } .partner-page .glass-card { padding:1.25rem !important; } .partner-page .process-step-page { padding:1rem; } }
        @media (max-width:640px) { .partner-page .heading-hero-page { font-size:clamp(1.6rem,8vw,2rem); } .partner-page .section-title { font-size:1.5rem; } .partner-page .partner-logo-card-page { padding:1.25rem; } .partner-page .partner-logo-card-page img { max-height:100px; } .partner-page .process-step-page .step-circle-page { width:28px; height:28px; font-size:14px; } }
        @media (max-width:480px) { .partner-page .heading-hero-page { font-size:clamp(1.4rem,9vw,1.7rem); } .partner-page .section-title { font-size:1.3rem; } .partner-page .glass-card { padding:1rem !important; border-radius:12px; } .partner-page .icon-box { width:40px; height:40px; font-size:1rem; } }
        @media (max-width:380px) { .partner-page .heading-hero-page { font-size:clamp(1.1rem,8vw,1.4rem); } .partner-page .section-title { font-size:clamp(1rem,4.5vw,1.2rem); } .partner-page .glass-card { padding:0.75rem !important; border-radius:10px; } .partner-page .icon-box { width:32px; height:32px; font-size:14px; border-radius:8px; } .partner-page .heading-card-page { font-size:1rem; } .partner-page .badge-pill-page { font-size:0.55rem; padding:2px 8px; } }
      ` }} />
    </div>
  )
}

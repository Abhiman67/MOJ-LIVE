'use client'

import { useState } from 'react'
import { LockedFormOverlay } from '@/components/ui/LockedFormOverlay'

export function InvestorForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
    e.currentTarget.reset()
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <LockedFormOverlay formType="investor">
    <form id="investorForm" onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div><label className="block font-semibold mb-1 text-white">Full Name *</label><input type="text" required className="w-full rounded-2xl border border-border-subtle bg-surface-card px-4 py-3 text-white placeholder-text-muted focus:border-[#C50000] focus:outline-none focus:ring-[3px] focus:ring-[rgba(197,0,0,0.1)]" placeholder="e.g., Rajiv Malhotra" /></div>
        <div><label className="block font-semibold mb-1 text-white">Organization / Fund Name *</label><input type="text" required className="w-full rounded-2xl border border-border-subtle bg-surface-card px-4 py-3 text-white placeholder-text-muted focus:border-[#C50000] focus:outline-none focus:ring-[3px] focus:ring-[rgba(197,0,0,0.1)]" placeholder="Alpha Ventures" /></div>
        <div><label className="block font-semibold mb-1 text-white">Role / Designation</label><input type="text" className="w-full rounded-2xl border border-border-subtle bg-surface-card px-4 py-3 text-white placeholder-text-muted focus:border-[#C50000] focus:outline-none focus:ring-[3px] focus:ring-[rgba(197,0,0,0.1)]" placeholder="Partner / MD" /></div>
        <div><label className="block font-semibold mb-1 text-white">Email Address *</label><input type="email" required className="w-full rounded-2xl border border-border-subtle bg-surface-card px-4 py-3 text-white placeholder-text-muted focus:border-[#C50000] focus:outline-none focus:ring-[3px] focus:ring-[rgba(197,0,0,0.1)]" placeholder="contact@fund.com" /></div>
        <div><label className="block font-semibold mb-1 text-white">Phone Number</label><input type="tel" className="w-full rounded-2xl border border-border-subtle bg-surface-card px-4 py-3 text-white placeholder-text-muted focus:border-[#C50000] focus:outline-none focus:ring-[3px] focus:ring-[rgba(197,0,0,0.1)]" placeholder="+91 ..." /></div>
        <div><label className="block font-semibold mb-1 text-white">Location (Country/City)</label><input type="text" className="w-full rounded-2xl border border-border-subtle bg-surface-card px-4 py-3 text-white placeholder-text-muted focus:border-[#C50000] focus:outline-none focus:ring-[3px] focus:ring-[rgba(197,0,0,0.1)]" placeholder="India, Mumbai" /></div>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div><label className="block font-semibold mb-1 text-white">Type of Investor *</label>
          <select className="w-full rounded-2xl border border-border-subtle bg-surface-card px-4 py-3 text-white focus:border-[#C50000] focus:outline-none focus:ring-[3px] focus:ring-[rgba(197,0,0,0.1)]">
            <option>Venture Capital</option><option>Angel</option><option>Institutional</option><option>Strategic / Corporate</option><option>Family Office</option><option>Other</option>
          </select>
        </div>
        <div><label className="block font-semibold mb-1 text-white">Investment Stage Preference</label>
          <select className="w-full rounded-2xl border border-border-subtle bg-surface-card px-4 py-3 text-white focus:border-[#C50000] focus:outline-none focus:ring-[3px] focus:ring-[rgba(197,0,0,0.1)]">
            <option>Pre-seed</option><option>Seed</option><option>Early Growth</option><option>Growth</option><option>Flexible</option>
          </select>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div><label className="block font-semibold mb-1 text-white">Typical Investment Size (Range)</label><input type="text" className="w-full rounded-2xl border border-border-subtle bg-surface-card px-4 py-3 text-white placeholder-text-muted focus:border-[#C50000] focus:outline-none focus:ring-[3px] focus:ring-[rgba(197,0,0,0.1)]" placeholder="$500k - $2M" /></div>
        <div><label className="block font-semibold mb-1 text-white">Areas of Interest</label>
          <select className="w-full rounded-2xl border border-border-subtle bg-surface-card px-4 py-3 text-white focus:border-[#C50000] focus:outline-none focus:ring-[3px] focus:ring-[rgba(197,0,0,0.1)]">
            <option>Aviation</option><option>Infrastructure</option><option>Mobility</option><option>Deep Tech</option><option>Urban Systems</option><option>Other</option>
          </select>
        </div>
      </div>
      <div className="mb-6">
        <label className="block font-semibold mb-2 text-white">Do you have experience in: (Select all)</label>
        <div className="flex flex-wrap gap-4">
          {['Aviation/Aerospace','Mobility Platforms','Infrastructure Development','Government/Policy'].map((v) => (
            <label key={v} className="flex items-center gap-1 text-text-secondary"><input type="checkbox" value={v} /> {v}</label>
          ))}
        </div>
      </div>
      <div className="mb-6">
        <label className="block font-semibold mb-1 text-white">Value Beyond Capital (Can support in)</label>
        <div className="flex flex-wrap gap-3">
          {['Strategic Partnerships','Govt/Institutional Access','Global Expansion','Technology Scaling','Talent & Leadership'].map((v) => (
            <label key={v} className="flex items-center gap-1 text-text-secondary"><input type="checkbox" value={v} /> {v}</label>
          ))}
        </div>
      </div>
      <div className="mb-6">
        <label className="block font-semibold mb-1 text-white">Message / Investment Thesis (Why MyOnlineJet?)</label>
        <textarea rows={3} className="w-full rounded-2xl border border-border-subtle bg-surface-card px-4 py-3 text-white placeholder-text-muted focus:border-[#C50000] focus:outline-none focus:ring-[3px] focus:ring-[rgba(197,0,0,0.1)]" placeholder="Share your perspective..." />
      </div>
      <div className="mb-6">
        <label className="block font-semibold mb-1 text-white">Optional: Investor Deck / Profile (Dropbox/Drive link)</label>
        <input type="url" className="w-full rounded-2xl border border-border-subtle bg-surface-card px-4 py-3 text-white placeholder-text-muted focus:border-[#C50000] focus:outline-none focus:ring-[3px] focus:ring-[rgba(197,0,0,0.1)]" placeholder="https://..." />
      </div>
      <div className="mb-6">
        <label className="flex items-center gap-2 text-text-secondary">
          <input type="checkbox" required /> <span className="text-sm">I agree to be contacted by MyOnlineJet regarding investment opportunities.</span>
        </label>
      </div>
      <div className="text-center">
        <button type="submit" className="btn-primary w-full md:w-auto px-10">Submit Enquiry &rarr;</button>
      </div>
      <p className="text-xs text-text-muted text-center mt-5">We prioritize quality of alignment over volume of conversations.</p>

      {submitted && (
        <div className="mt-4 rounded-2xl bg-[rgba(34,197,94,0.1)] p-4 text-center text-[#22C55E]">
          Thank you. Our IR team will review and reach out if alignment exists.
        </div>
      )}
    </form>
    </LockedFormOverlay>
  )
}

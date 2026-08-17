'use client'

import React, { useState } from 'react'
import Link from 'next/link'

export function IndustryContributionForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    fullName: '',
    organization: '',
    designation: '',
    email: '',
    phone: '',
    focusArea: '',
    geoFocus: 'India',
    description: '',
    consent: false
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.consent) {
      alert('Please confirm the non-confidentiality consent checkbox before submitting.')
      return
    }

    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/reports/contribute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          organization: formData.organization,
          designation: formData.designation,
          email: formData.email,
          phone: formData.phone,
          focusArea: formData.focusArea,
          geoFocus: formData.geoFocus,
          description: formData.description,
        }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || 'Something went wrong. Please try again.')
        setLoading(false)
        return
      }
      setLoading(false)
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div id="contribute" className="scroll-mt-28 glass-card rounded-2xl p-6 md:p-10 border border-[#C50000]/30 shadow-[0_0_30px_rgba(197,0,0,0.1)]">
      <div className="text-center mb-8">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#C50000]/20 text-[#C50000] text-xl font-bold border border-[#C50000]/30">
          <i className="fa-solid fa-pen-ruler" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Contribute to Industry Intelligence
        </h2>
        <p className="text-xs sm:text-sm text-zinc-300 max-w-2xl mx-auto mt-2 leading-relaxed">
          We invite data, insights, and research collaborations from credible stakeholders across the Advanced Air Mobility ecosystem.
        </p>
      </div>

      {submitted ? (
        <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center text-emerald-200">
          <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 text-lg font-bold">
            ✓
          </div>
          <h3 className="text-lg font-bold text-white mb-1">Contribution Submitted!</h3>
          <p className="text-xs sm:text-sm text-zinc-300 max-w-md mx-auto">
            Thank you for sharing your insights. Our research and intelligence team will review your submission within 10 business days.
          </p>
          <button
            onClick={() => {
              setSubmitted(false)
              setFormData({
                fullName: '',
                organization: '',
                designation: '',
                email: '',
                phone: '',
                focusArea: '',
                geoFocus: 'India',
                description: '',
                consent: false
              })
            }}
            className="btn-secondary mt-4 text-xs py-2 px-4"
          >
            Submit Another Contribution
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="grid lg:grid-cols-2 gap-5 text-xs sm:text-sm">
          <div>
            <label className="block font-medium text-zinc-200 mb-1.5">Full Name *</label>
            <input
              type="text"
              required
              placeholder="e.g. Amit Sharma"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white placeholder-zinc-500 focus:border-[#C50000] focus:outline-none focus:ring-1 focus:ring-[#C50000] transition-colors"
            />
          </div>

          <div>
            <label className="block font-medium text-zinc-200 mb-1.5">Organization / Company Name *</label>
            <input
              type="text"
              required
              placeholder="e.g. iAlpha Technologies"
              value={formData.organization}
              onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
              className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white placeholder-zinc-500 focus:border-[#C50000] focus:outline-none focus:ring-1 focus:ring-[#C50000] transition-colors"
            />
          </div>

          <div>
            <label className="block font-medium text-zinc-200 mb-1.5">Designation / Role</label>
            <input
              type="text"
              placeholder="e.g. Head of Strategy / Aviation Analyst"
              value={formData.designation}
              onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
              className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white placeholder-zinc-500 focus:border-[#C50000] focus:outline-none focus:ring-1 focus:ring-[#C50000] transition-colors"
            />
          </div>

          <div>
            <label className="block font-medium text-zinc-200 mb-1.5">Email Address *</label>
            <input
              type="email"
              required
              placeholder="contact@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white placeholder-zinc-500 focus:border-[#C50000] focus:outline-none focus:ring-1 focus:ring-[#C50000] transition-colors"
            />
          </div>

          <div>
            <label className="block font-medium text-zinc-200 mb-1.5">Contact Number (Optional)</label>
            <input
              type="tel"
              placeholder="+91 ..."
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white placeholder-zinc-500 focus:border-[#C50000] focus:outline-none focus:ring-1 focus:ring-[#C50000] transition-colors"
            />
          </div>

          <div>
            <label className="block font-medium text-zinc-200 mb-1.5">Area of Contribution *</label>
            <select
              required
              value={formData.focusArea}
              onChange={(e) => setFormData({ ...formData, focusArea: e.target.value })}
              className="w-full rounded-xl border border-white/10 bg-[#0a0a0a] px-4 py-3 text-white focus:border-[#C50000] focus:outline-none focus:ring-1 focus:ring-[#C50000] transition-colors"
            >
              <option value="">Select Focus Area</option>
              <option value="AAM Market Insights">AAM Market Insights</option>
              <option value="eVTOL Technology">eVTOL Technology</option>
              <option value="Vertiport Infrastructure">Vertiport Infrastructure</option>
              <option value="Policy & Regulation">Policy &amp; Regulation</option>
              <option value="Investment & Market Data">Investment &amp; Market Data</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="lg:col-span-2">
            <label className="block font-medium text-zinc-200 mb-1.5">Geographical Focus *</label>
            <select
              required
              value={formData.geoFocus}
              onChange={(e) => setFormData({ ...formData, geoFocus: e.target.value })}
              className="w-full rounded-xl border border-white/10 bg-[#0a0a0a] px-4 py-3 text-white focus:border-[#C50000] focus:outline-none focus:ring-1 focus:ring-[#C50000] transition-colors"
            >
              <option value="India">India</option>
              <option value="APAC">APAC</option>
              <option value="Europe">Europe</option>
              <option value="North America">North America</option>
              <option value="Global">Global</option>
            </select>
          </div>

          <div className="lg:col-span-2">
            <label className="block font-medium text-zinc-200 mb-1.5">Brief Description of Insights / Data *</label>
            <textarea
              required
              rows={4}
              placeholder="Provide a brief summary of your research, market observations, or infrastructure data..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white placeholder-zinc-500 focus:border-[#C50000] focus:outline-none focus:ring-1 focus:ring-[#C50000] transition-colors"
            />
          </div>

          <div className="lg:col-span-2 flex items-start gap-3 pt-2">
            <input
              type="checkbox"
              id="consentCheck"
              required
              checked={formData.consent}
              onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
              className="mt-1 h-4 w-4 rounded border-white/20 bg-black/40 text-[#C50000] focus:ring-[#C50000]"
            />
            <label htmlFor="consentCheck" className="text-xs text-zinc-300 leading-relaxed cursor-pointer">
              I confirm that the submitted information is non-confidential and can be used by MyOnlineJet for research, intelligence analysis, and publication purposes.
            </label>
          </div>

          <div className="lg:col-span-2 text-center pt-3">
            {error && (
              <p className="text-xs text-red-400 mb-3">{error}</p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full sm:w-auto px-10 py-3.5 text-sm font-semibold disabled:opacity-50"
            >
              {loading ? 'Submitting...' : 'Submit Contribution'}
            </button>
            <p className="text-xs text-zinc-500 mt-2.5">
              Our research team reviews every submission within 10 business days.
            </p>
          </div>
        </form>
      )}

      <div className="mt-8 text-center border-t border-white/10 pt-6 text-xs text-zinc-400">
        For partnership-based research collaboration,{' '}
        <Link href="/contact" className="text-[#C50000] font-semibold hover:underline">
          Contact Us &rarr;
        </Link>{' '}
        or explore{' '}
        <Link href="/partner-with-us" className="text-[#C50000] font-semibold hover:underline">
          Partners &rarr;
        </Link>
      </div>
    </div>
  )
}

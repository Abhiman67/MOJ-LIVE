'use client'

import { useState, type FormEvent } from 'react'
import { LockedFormOverlay } from '@/components/ui/LockedFormOverlay'
import { ModernSelect } from '@/components/ui/ModernSelect'

const investorTypeOptions = [
  { value: 'Venture Capital', label: 'Venture Capital' },
  { value: 'Angel', label: 'Angel' },
  { value: 'Institutional', label: 'Institutional' },
  { value: 'Strategic / Corporate', label: 'Strategic / Corporate' },
  { value: 'Family Office', label: 'Family Office' },
  { value: 'Other', label: 'Other' },
]

export function InvestorForm() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [investorType, setInvestorType] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))

    try {
      const res = await fetch('/api/forms/investor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Submission failed')
      setSubmitted(true)
      form.reset()
      setInvestorType('')
      setTimeout(() => setSubmitted(false), 5000)
    } catch {
      setError('Something went wrong. Please try again.')
    }
  }

  return (
    <LockedFormOverlay formType="investor">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-1">Full Name *</label>
            <input name="fullName" required aria-required="true" className="form-input w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-1">Organization / Fund *</label>
            <input name="organization" required aria-required="true" className="form-input w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-1">Email *</label>
            <input name="email" type="email" required aria-required="true" className="form-input w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-1">Phone</label>
            <input name="phone" type="tel" className="form-input w-full" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-text-secondary mb-1">Type of Investor *</label>
          <ModernSelect name="investorType" options={investorTypeOptions} value={investorType} onChange={setInvestorType} />
        </div>
        <div>
          <label className="block text-sm font-medium text-text-secondary mb-1">Investment Size (Range)</label>
          <input name="investmentSize" className="form-input w-full" placeholder="$500k - $2M" />
        </div>
        <div>
          <label className="block text-sm font-medium text-text-secondary mb-1">Message / Investment Thesis</label>
          <textarea name="message" rows={3} className="form-textarea w-full" />
        </div>
        <label className="flex items-center gap-2 text-sm text-text-secondary">
          <input type="checkbox" name="consent" required aria-required="true" className="accent-[#C50000]" />
          I agree to be contacted regarding investment opportunities *
        </label>
        {error && <p className="text-sm text-red-400">{error}</p>}
        <button type="submit" className="primary-btn px-6 py-2.5 text-sm">Submit</button>
        {submitted && (
          <p className="text-sm text-emerald-400"><i className="fas fa-check-circle mr-1" /> Submitted successfully.</p>
        )}
      </form>
    </LockedFormOverlay>
  )
}

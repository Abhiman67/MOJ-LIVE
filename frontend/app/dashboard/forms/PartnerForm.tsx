'use client'

import { useState, type FormEvent } from 'react'
import { LockedFormOverlay } from '@/components/ui/LockedFormOverlay'
import { ModernSelect } from '@/components/ui/ModernSelect'

const categoryOptions = [
  { value: 'Infrastructure / Real Estate', label: 'Infrastructure / Real Estate' },
  { value: 'Aviation / eVTOL / Drone', label: 'Aviation / eVTOL / Drone' },
  { value: 'Technology Provider', label: 'Technology Provider' },
  { value: 'Government / Institutional', label: 'Government / Institutional' },
  { value: 'Mobility / Service Provider', label: 'Mobility / Service Provider' },
  { value: 'Other', label: 'Other' },
]

export function PartnerForm() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [category, setCategory] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))

    try {
      const res = await fetch('/api/forms/partner', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Submission failed')
      setSubmitted(true)
      form.reset()
      setCategory('')
      setTimeout(() => setSubmitted(false), 5000)
    } catch {
      setError('Something went wrong. Please try again.')
    }
  }

  return (
    <LockedFormOverlay formType="partner">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-1">Full Name *</label>
            <input name="fullName" required className="form-input w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-1">Organization *</label>
            <input name="organization" required className="form-input w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-1">Email *</label>
            <input name="email" type="email" required className="form-input w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-1">Phone *</label>
            <input name="phone" type="tel" required className="form-input w-full" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-text-secondary mb-1">Partnership Category *</label>
          <ModernSelect name="partnershipCategory" options={categoryOptions} value={category} onChange={setCategory} />
        </div>
        <div>
          <label className="block text-sm font-medium text-text-secondary mb-1">About Your Organization</label>
          <textarea name="aboutOrg" rows={3} className="form-textarea w-full" />
        </div>
        <div>
          <label className="block text-sm font-medium text-text-secondary mb-1">Why do you want to partner? *</label>
          <textarea name="whyPartner" rows={2} required className="form-textarea w-full" />
        </div>
        <label className="flex items-center gap-2 text-sm text-text-secondary">
          <input type="checkbox" name="consent" required className="accent-[#C50000]" />
          I agree to be contacted regarding partnership opportunities *
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

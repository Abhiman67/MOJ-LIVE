'use client'

import { useState, type FormEvent } from 'react'
import { LockedFormOverlay } from '@/components/ui/LockedFormOverlay'
import { ModernSelect } from '@/components/ui/ModernSelect'

const advisoryTypeOptions = [
  { value: 'Strategic Advisory', label: 'Strategic Advisory' },
  { value: 'Technical Advisory', label: 'Technical Advisory' },
  { value: 'Industry Advisory', label: 'Industry Advisory' },
  { value: 'Policy & Regulatory', label: 'Policy & Regulatory' },
  { value: 'Board Advisory', label: 'Board Advisory' },
  { value: 'Other', label: 'Other' },
]

export function AdvisoryForm() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [advisoryType, setAdvisoryType] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))

    try {
      const res = await fetch('/api/forms/advisory', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Submission failed')
      setSubmitted(true)
      form.reset()
      setAdvisoryType('')
      setTimeout(() => setSubmitted(false), 5000)
    } catch {
      setError('Something went wrong. Please try again.')
    }
  }

  return (
    <LockedFormOverlay formType="advisory">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-1">Full Name *</label>
            <input name="fullName" required className="form-input w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-1">Email *</label>
            <input name="email" type="email" required className="form-input w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-1">Organization</label>
            <input name="organization" className="form-input w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-1">Role / Title</label>
            <input name="role" className="form-input w-full" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-text-secondary mb-1">Advisory Interest *</label>
          <ModernSelect name="advisoryType" options={advisoryTypeOptions} value={advisoryType} onChange={setAdvisoryType} />
        </div>
        <div>
          <label className="block text-sm font-medium text-text-secondary mb-1">Subject *</label>
          <input name="subject" required className="form-input w-full" />
        </div>
        <div>
          <label className="block text-sm font-medium text-text-secondary mb-1">Message *</label>
          <textarea name="message" rows={4} required className="form-textarea w-full" placeholder="Describe your advisory interest and relevant experience." />
        </div>
        <label className="flex items-center gap-2 text-sm text-text-secondary">
          <input type="checkbox" name="consent" required className="accent-[#C50000]" />
          I agree to the Privacy Policy & Terms *
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

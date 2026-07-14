'use client'

import { useState, type FormEvent } from 'react'
import { LockedFormOverlay } from '@/components/ui/LockedFormOverlay'
import { ModernSelect } from '@/components/ui/ModernSelect'

const areaOptions = [
  { value: 'technology', label: 'Technology' },
  { value: 'aviation-research', label: 'Aviation Research' },
  { value: 'business-development', label: 'Business Development' },
  { value: 'operations', label: 'Operations' },
  { value: 'content-media', label: 'Content & Media' },
]

export function CareerForm() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [area, setArea] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))

    try {
      const res = await fetch('/api/forms/career', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Submission failed')
      setSubmitted(true)
      form.reset()
      setArea('')
      setTimeout(() => setSubmitted(false), 5000)
    } catch {
      setError('Something went wrong. Please try again.')
    }
  }

  return (
    <LockedFormOverlay formType="career">
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
            <label className="block text-sm font-medium text-text-secondary mb-1">Phone *</label>
            <input name="phone" type="tel" required className="form-input w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-1">LinkedIn</label>
            <input name="linkedIn" type="url" className="form-input w-full" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-text-secondary mb-1">Area of Interest</label>
          <ModernSelect name="areaOfInterest" options={areaOptions} value={area} onChange={setArea} />
        </div>
        <div>
          <label className="block text-sm font-medium text-text-secondary mb-1">Why do you want to work with us? *</label>
          <textarea name="whyWork" rows={3} required className="form-textarea w-full" />
        </div>
        <div>
          <label className="block text-sm font-medium text-text-secondary mb-1">What problem excites you most? *</label>
          <textarea name="whatProblem" rows={3} required className="form-textarea w-full" />
        </div>
        {error && <p className="text-sm text-red-400">{error}</p>}
        <button type="submit" className="primary-btn px-6 py-2.5 text-sm">Apply</button>
        {submitted && (
          <p className="text-sm text-emerald-400"><i className="fas fa-check-circle mr-1" /> Application submitted.</p>
        )}
      </form>
    </LockedFormOverlay>
  )
}

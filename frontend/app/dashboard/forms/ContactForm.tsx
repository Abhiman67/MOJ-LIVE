'use client'

import { useState, type FormEvent } from 'react'
import { LockedFormOverlay } from '@/components/ui/LockedFormOverlay'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))

    try {
      const res = await fetch('/api/forms/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Submission failed')
      setSubmitted(true)
      form.reset()
      setTimeout(() => setSubmitted(false), 5000)
    } catch {
      setError('Something went wrong. Please try again.')
    }
  }

  return (
    <LockedFormOverlay formType="contact">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-1">Full Name *</label>
            <input name="fullName" required aria-required="true" className="form-input w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-1">Email *</label>
            <input name="email" type="email" required aria-required="true" className="form-input w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-1">Phone</label>
            <input name="phone" type="tel" className="form-input w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-1">Organization</label>
            <input name="organization" className="form-input w-full" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-text-secondary mb-1">Subject *</label>
            <input name="subject" required aria-required="true" className="form-input w-full" />
        </div>
        <div>
          <label className="block text-sm font-medium text-text-secondary mb-1">Message *</label>
          <textarea name="message" rows={4} required aria-required="true" className="form-textarea w-full" />
        </div>
        <label className="flex items-center gap-2 text-sm text-text-secondary">
          <input type="checkbox" name="consent" required aria-required="true" className="accent-[#C50000]" />
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

'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
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

export default function AdvisoryPage() {
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
    <div className="relative min-h-screen bg-[#030712]">
      <div className="noise-overlay" />
      <div className="relative z-10 pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-10">
          <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-text-secondary transition-colors mb-8">
            <i className="fas fa-arrow-left" /> Home
          </Link>

          <div className="text-center mb-12">
            <div className="inline-block rounded-full bg-[#C50000]/10 px-4 py-1 text-xs font-semibold text-[#C50000] uppercase tracking-wider mb-4">
              Advisory Network
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white font-display mb-4">Join Our Advisory Network</h1>
            <p className="text-text-secondary max-w-xl mx-auto">
              We seek experienced leaders to guide our strategic direction in aviation, infrastructure, technology, and policy.
            </p>
          </div>

          <div className="rounded-xl border border-border-subtle bg-surface-card p-6 sm:p-8">
            {!submitted ? (
              <LockedFormOverlay formType="advisory">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
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
                  <button type="submit" className="primary-btn px-6 py-2.5 text-sm">Submit Interest</button>
                </form>
              </LockedFormOverlay>
            ) : (
              <div className="text-center py-12">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 mx-auto">
                  <i className="fas fa-check-circle text-2xl text-emerald-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Thank You</h3>
                <p className="text-text-secondary text-sm">We will review your submission and reach out if there is a potential match.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

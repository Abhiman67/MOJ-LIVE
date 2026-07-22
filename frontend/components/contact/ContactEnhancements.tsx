'use client'

import { useEffect, useState } from 'react'

export function ContactEnhancements() {
  const [successMsg, setSuccessMsg] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    const page = document.querySelector('.contact-page')
    if (!page) return

    const revealElements = Array.from(page.querySelectorAll<HTMLElement>('.reveal'))
    if (typeof IntersectionObserver !== 'undefined') {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      )
      revealElements.forEach((el) => observer.observe(el))
      return () => observer.disconnect()
    }
    revealElements.forEach((el) => el.classList.add('active'))
    return undefined
  }, [])

  useEffect(() => {
    const heroReveal = document.querySelector<HTMLElement>('.contact-page .reveal')
    if (heroReveal) {
      setTimeout(() => heroReveal.classList.add('active'), 100)
    }
  }, [])

  useEffect(() => {
    const form = document.querySelector<HTMLFormElement>('#enterpriseContactForm')
    if (!form) return

    const handleSubmit = async (e: Event) => {
      e.preventDefault()
      setErrorMsg('')
      setSuccessMsg('')
      const raw = new FormData(form)
      const data: Record<string, unknown> = {}
      for (const [key, val] of raw.entries()) {
        if (key === 'attachment') continue
        if (data[key]) {
          const existing = data[key]
          data[key] = Array.isArray(existing) ? [...existing, val] : [existing, val]
        } else {
          data[key] = val
        }
      }

      try {
        const res = await fetch('/api/forms/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        })
        if (!res.ok) {
          const errData = await res.json()
          throw new Error(errData.error || 'Submission failed')
        }
        setSuccessMsg('Your inquiry has been submitted. Our team will respond within 24–72 business hours.')
        form.reset()
        const advancedDiv = document.querySelector<HTMLElement>('#advancedBusinessFields')
        if (advancedDiv) advancedDiv.classList.add('hidden')
        const fileNameSpan = document.querySelector<HTMLElement>('.file-upload-btn .file-name')
        if (fileNameSpan) fileNameSpan.textContent = ''
      } catch (err) {
        setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
      }
    }

    form.addEventListener('submit', handleSubmit)
    return () => form.removeEventListener('submit', handleSubmit)
  }, [])

  useEffect(() => {
    const inquirySelect = document.querySelector<HTMLSelectElement>('#inquiryType')
    const advancedDiv = document.querySelector<HTMLElement>('#advancedBusinessFields')
    if (!inquirySelect || !advancedDiv) return

    const toggleAdvanced = () => {
      const val = inquirySelect.value
      if (['partnerships', 'investors', 'infrastructure', 'technology'].includes(val)) {
        advancedDiv.classList.remove('hidden')
      } else {
        advancedDiv.classList.add('hidden')
      }
    }
    inquirySelect.addEventListener('change', toggleAdvanced)
    toggleAdvanced()
    return () => inquirySelect.removeEventListener('change', toggleAdvanced)
  }, [])

  useEffect(() => {
    const fileInput = document.querySelector<HTMLInputElement>('#fileAttachment')
    const fileNameSpan = document.querySelector<HTMLElement>('.file-upload-btn .file-name')
    if (!fileInput || !fileNameSpan) return

    const handleFileChange = () => {
      const file = fileInput.files?.[0]
      fileNameSpan.textContent = file ? file.name : ''
    }
    fileInput.addEventListener('change', handleFileChange)
    return () => fileInput.removeEventListener('change', handleFileChange)
  }, [])

  return (
    <>
      {successMsg && (
        <div className="mt-4 p-4 bg-[#22C55E]/10 text-[#22C55E] rounded-xl text-center border border-[#22C55E]/20">
          <i className="fas fa-check-circle mr-2" /> {successMsg}
        </div>
      )}
      {errorMsg && (
        <div className="mt-4 p-4 bg-red-500/10 text-red-400 rounded-xl text-center border border-red-500/20">
          <i className="fas fa-exclamation-circle mr-2" /> {errorMsg}
        </div>
      )}
    </>
  )
}

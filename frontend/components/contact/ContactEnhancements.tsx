'use client'

import { useEffect } from 'react'

export function ContactEnhancements() {
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
    const page = document.querySelector('.contact-page')
    if (!page) return
    const heroReveal = page.querySelector<HTMLElement>('.reveal')
    if (heroReveal) {
      setTimeout(() => heroReveal.classList.add('active'), 100)
    }
  }, [])

  useEffect(() => {
    const page = document.querySelector('.contact-page')
    if (!page) return

    const inquirySelect = page.querySelector<HTMLSelectElement>('#inquiryType')
    const advancedDiv = page.querySelector<HTMLElement>('#advancedBusinessFields')
    if (inquirySelect && advancedDiv) {
      const toggleAdvanced = () => {
        const val = inquirySelect.value
        if (val === 'partnerships' || val === 'investors' || val === 'infrastructure' || val === 'technology') {
          advancedDiv.classList.remove('hidden')
        } else {
          advancedDiv.classList.add('hidden')
        }
      }
      inquirySelect.addEventListener('change', toggleAdvanced)
      toggleAdvanced()
      return () => inquirySelect.removeEventListener('change', toggleAdvanced)
    }
    return undefined
  }, [])

  useEffect(() => {
    const page = document.querySelector('.contact-page')
    if (!page) return

    const form = page.querySelector<HTMLFormElement>('#enterpriseContactForm')
    const msgDiv = page.querySelector<HTMLElement>('#formSuccessMsg')
    if (form && msgDiv) {
      const handleSubmit = async (e: Event) => {
        e.preventDefault()
        const raw = new FormData(form)
        const data: Record<string, unknown> = {}
        for (const [key, val] of raw.entries()) {
          if (key === 'attachment') continue
          if (data[key]) {
            data[key] = [data[key], val].flat()
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
          if (!res.ok) throw new Error('Submission failed')
          msgDiv.classList.remove('hidden')
          msgDiv.innerHTML = '<i class="fas fa-check-circle mr-2"></i> Your inquiry has been submitted. Our team will respond within 24–72 business hours.'
          form.reset()
          const advancedDiv = page.querySelector<HTMLElement>('#advancedBusinessFields')
          if (advancedDiv) advancedDiv.classList.add('hidden')
          const fileNameSpan = page.querySelector<HTMLElement>('.file-upload-btn .file-name')
          if (fileNameSpan) fileNameSpan.textContent = ''
        } catch {
          msgDiv.classList.remove('hidden')
          msgDiv.innerHTML = '<i class="fas fa-exclamation-circle mr-2"></i> Something went wrong. Please try again.'
        }

        setTimeout(() => { msgDiv.classList.add('hidden') }, 8000)
      }
      form.addEventListener('submit', handleSubmit)
      return () => form.removeEventListener('submit', handleSubmit)
    }
    return undefined
  }, [])

  useEffect(() => {
    const page = document.querySelector('.contact-page')
    if (!page) return

    const fileInput = page.querySelector<HTMLInputElement>('#fileAttachment')
    const fileNameSpan = page.querySelector<HTMLElement>('.file-upload-btn .file-name')
    if (fileInput && fileNameSpan) {
      const handleFileChange = () => {
        const file = fileInput.files?.[0]
        fileNameSpan.textContent = file ? file.name : ''
      }
      fileInput.addEventListener('change', handleFileChange)
      return () => fileInput.removeEventListener('change', handleFileChange)
    }
    return undefined
  }, [])

  return null
}

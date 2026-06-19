'use client'

import { useEffect } from 'react'

export function ContactEnhancements() {
  useEffect(() => {
    const page = document.querySelector('.contact-page')
    if (!page) return

    // Scroll Reveal Animation
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

    // Trigger hero reveal immediately
    const heroReveal = page.querySelector<HTMLElement>('.reveal')
    if (heroReveal) {
      setTimeout(() => heroReveal.classList.add('active'), 100)
    }
  }, [])

  useEffect(() => {
    const page = document.querySelector('.contact-page')
    if (!page) return

    // Toggle advanced fields based on inquiry type
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

    // Form submission
    const form = page.querySelector<HTMLFormElement>('#enterpriseContactForm')
    const msgDiv = page.querySelector<HTMLElement>('#formSuccessMsg')
    if (form && msgDiv) {
      const handleSubmit = (e: Event) => {
        e.preventDefault()
        msgDiv.classList.remove('hidden')
        msgDiv.innerHTML =
          '<i class="fas fa-check-circle mr-2"></i> Your inquiry has been submitted. Our team will respond within 24–72 business hours. We engage with intent.'
        form.reset()
        const advancedDiv = page.querySelector<HTMLElement>('#advancedBusinessFields')
        if (advancedDiv) advancedDiv.classList.add('hidden')
        const fileNameSpan = page.querySelector<HTMLElement>('.file-upload-btn .file-name')
        if (fileNameSpan) fileNameSpan.textContent = ''
        setTimeout(() => {
          msgDiv.classList.add('hidden')
        }, 8000)
      }
      form.addEventListener('submit', handleSubmit)
      return () => form.removeEventListener('submit', handleSubmit)
    }
    return undefined
  }, [])

  useEffect(() => {
    const page = document.querySelector('.contact-page')
    if (!page) return

    // File input - show selected file name
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

'use client'

import { useEffect } from 'react'

export function PartnerEnhancements() {
  useEffect(() => {
    const page = document.querySelector('.partner-page')
    if (!page) return

    page.querySelectorAll<HTMLImageElement>('img[data-fallback]').forEach((img) => {
      img.addEventListener('error', function handler(ev) {
        const target = ev.currentTarget as HTMLImageElement
        target.onerror = null
        target.src = target.getAttribute('data-fallback') || ''
        target.classList.add('opacity-80')
      })
    })

    const form = page.querySelector<HTMLFormElement>('#partnershipForm')
    if (form) {
      const handleSubmit = async (e: Event) => {
        e.preventDefault()
        const raw = new FormData(form)
        const data: Record<string, unknown> = {}
        for (const [key, val] of raw.entries()) {
          if (data[key]) {
            data[key] = [data[key], val].flat()
          } else {
            data[key] = val
          }
        }

        try {
          const res = await fetch('/api/forms/partner', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          })
          if (!res.ok) throw new Error('Submission failed')
          alert('Thank you for your interest. Our partnerships team will reach out within 48 hours.')
          ;(e.currentTarget as HTMLFormElement).reset()
        } catch {
          alert('Something went wrong. Please try again.')
        }
      }
      form.addEventListener('submit', handleSubmit)
      return () => form.removeEventListener('submit', handleSubmit)
    }

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

  return null
}

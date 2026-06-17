'use client'

import { useEffect } from 'react'

export function PartnerEnhancements() {
  useEffect(() => {
    const page = document.querySelector('.partner-page')
    if (!page) return

    // Image error fallback
    page.querySelectorAll<HTMLImageElement>('img[data-fallback]').forEach((img) => {
      img.addEventListener('error', function handler(ev) {
        const target = ev.currentTarget as HTMLImageElement
        target.onerror = null
        target.src = target.getAttribute('data-fallback') || ''
        target.classList.add('opacity-80')
      })
    })

    // Form submission
    const form = page.querySelector<HTMLFormElement>('#partnershipForm')
    if (form) {
      form.addEventListener('submit', function handler(e) {
        e.preventDefault()
        alert('Thank you for your interest. Our partnerships team will reach out within 48 hours.')
        ;(e.currentTarget as HTMLFormElement).reset()
      })
    }

    // Scroll reveal
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

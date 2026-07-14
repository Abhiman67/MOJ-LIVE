'use client'

import { useEffect } from 'react'

export function CareersEnhancements() {
  useEffect(() => {
    const page = document.querySelector('.careers-page')
    if (!page) return

    const revealElements = Array.from(page.querySelectorAll<HTMLElement>('.reveal'))
    const supportsObserver = typeof IntersectionObserver !== 'undefined'

    if (supportsObserver) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.12, rootMargin: '0px 0px -48px 0px' }
      )
      revealElements.forEach((element) => observer.observe(element))
      return () => observer.disconnect()
    }
    revealElements.forEach((element) => element.classList.add('visible'))
    return undefined
  }, [])

  useEffect(() => {
    const page = document.querySelector('.careers-page')
    if (!page) return

    const anchors = Array.from(page.querySelectorAll<HTMLAnchorElement>('a[href^="#"]'))
    const handleClick = (event: MouseEvent) => {
      const anchor = event.currentTarget as HTMLAnchorElement
      const targetSelector = anchor.getAttribute('href')
      if (!targetSelector) return
      const target = document.querySelector(targetSelector)
      if (!target) return
      event.preventDefault()
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      history.replaceState(null, '', targetSelector)
    }
    anchors.forEach((anchor) => anchor.addEventListener('click', handleClick))
    return () => anchors.forEach((anchor) => anchor.removeEventListener('click', handleClick))
  }, [])

  useEffect(() => {
    const page = document.querySelector('.careers-page')
    if (!page) return

    const form = page.querySelector<HTMLFormElement>('#apply-form form')
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
          const res = await fetch('/api/forms/career', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          })
          if (!res.ok) throw new Error('Submission failed')
          alert('Thank you for your application. We will review and reach out if there is a match.')
          form.reset()
        } catch {
          alert('Something went wrong. Please try again.')
        }
      }
      form.addEventListener('submit', handleSubmit)
      return () => form.removeEventListener('submit', handleSubmit)
    }
    return undefined
  }, [])

  return null
}

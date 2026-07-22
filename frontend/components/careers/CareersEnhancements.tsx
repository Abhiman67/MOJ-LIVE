'use client'

import { useEffect, useState } from 'react'
import { CustomAlert } from '@/components/ui/CustomAlert'

export function CareersEnhancements() {
  const [alertState, setAlertState] = useState<{
    isOpen: boolean
    title: string
    message: string
    type: 'success' | 'error'
  }>({
    isOpen: false,
    title: '',
    message: '',
    type: 'success'
  })
  useEffect(() => {
    const page = document.querySelector('.careers-page')
    if (!page) return

    const cleanups: (() => void)[] = []

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
      cleanups.push(() => observer.disconnect())
    } else {
      revealElements.forEach((element) => element.classList.add('visible'))
    }

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
    cleanups.push(() => anchors.forEach((anchor) => anchor.removeEventListener('click', handleClick)))

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
          setAlertState({
            isOpen: true,
            title: 'Application Received',
            message: 'Thank you for your application. We will review and reach out if there is a match.',
            type: 'success'
          })
          form.reset()
        } catch {
          setAlertState({
            isOpen: true,
            title: 'Error',
            message: 'Something went wrong. Please try again.',
            type: 'error'
          })
        }
      }
      form.addEventListener('submit', handleSubmit)
      cleanups.push(() => form.removeEventListener('submit', handleSubmit))
    }

    return () => cleanups.forEach((fn) => fn())
  }, [])

  return (
    <CustomAlert
      isOpen={alertState.isOpen}
      title={alertState.title}
      message={alertState.message}
      type={alertState.type}
      onClose={() => setAlertState((prev) => ({ ...prev, isOpen: false }))}
    />
  )
}

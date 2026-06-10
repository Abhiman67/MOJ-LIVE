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

    return () => {
      anchors.forEach((anchor) => anchor.removeEventListener('click', handleClick))
    }
  }, [])

  return null
}

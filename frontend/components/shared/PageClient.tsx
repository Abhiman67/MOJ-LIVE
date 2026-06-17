'use client'

import { useEffect } from 'react'

export function PageClient({ revealClass = 'active' }: { revealClass?: string }) {
  useEffect(() => {
    const ro = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(revealClass)
            ro.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    document.querySelectorAll('.reveal').forEach((el) => ro.observe(el))

    const onScroll = () => {
      const nav = document.querySelector('nav')
      if (nav) {
        nav.style.boxShadow =
          window.scrollY > 50 ? '0 4px 30px rgba(0,0,0,0.5)' : 'none'
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      ro.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [revealClass])

  return null
}

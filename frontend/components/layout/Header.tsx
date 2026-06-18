'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { homeNavLinks, pageNavLinks } from '@/lib/site'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'
  const navLinks = isHome ? homeNavLinks : pageNavLinks

  return (
    <header className="site-header relative z-50">
      <div className="mx-auto flex max-w-8xl items-center justify-between px-4 py-4 sm:px-6 sm:py-5 lg:px-10">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="https://myonlinejet.com/images/Logo.webp"
            alt="MyOnlineJet"
            width={168}
            height={48}
            className="h-8 w-auto brightness-0 invert sm:h-10"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item) => (
            item.href.startsWith('#') || item.href.startsWith('http') ? (
              <a
                key={item.href}
                href={item.href}
                className="nav-link transition-colors duration-300"
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer noopener' : undefined}
              >
                {item.label}
              </a>
            ) : (
              <Link key={item.href} href={item.href} className="nav-link transition-colors duration-300">
                {item.label}
              </Link>
            )
          ))}
          {isHome ? (
            <a href="#contact" className="primary-btn py-3">
              Contact Us
            </a>
          ) : (
            <Link href="/contact" className="primary-btn py-3">
              Contact Us
            </Link>
          )}
        </nav>

        <button
          type="button"
          aria-label={isOpen ? 'Close mobile menu' : 'Open mobile menu'}
          className={`mobile-toggle z-50 inline-flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden ${isOpen ? 'hamburger-active' : ''}`}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </div>

      {isOpen ? (
        <div className="fixed inset-0 z-40 flex items-start justify-center bg-[rgba(3,7,18,0.94)] px-4 py-6 lg:hidden">
          <div className="mobile-menu-shell dark w-full max-w-[22rem] overflow-hidden rounded-[1.9rem] bg-[#0b1020] shadow-[0_40px_100px_rgba(0,0,0,0.55)]">
            <div className="px-4 py-4">
              <div className="space-y-2">
                {navLinks.map((item) =>
                  item.href.startsWith('#') || item.href.startsWith('http') ? (
                    <a
                      key={item.href}
                      href={item.href}
                      className={`mobile-menu-item dark ${item.label === 'News' ? 'is-active' : ''}`}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noreferrer noopener' : undefined}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </a>
                  ) : (
                      <Link
                      key={item.href}
                      href={item.href}
                      className="mobile-menu-item dark"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )
                )}
              </div>
              <div className="mt-4">
                {isHome ? (
                  <a href="#contact" className="mobile-menu-cta dark" onClick={() => setIsOpen(false)}>
                    Contact Us
                  </a>
                ) : (
                  <Link href="/contact" className="mobile-menu-cta dark" onClick={() => setIsOpen(false)}>
                    Contact Us
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}

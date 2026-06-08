'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { homeNavLinks, pageNavLinks, siteConfig } from '@/lib/site'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'
  const isAbout = pathname === '/about-us'
  const navLinks = isHome ? homeNavLinks : pageNavLinks
  const headerClassName = isAbout ? 'site-header site-header-dark' : 'site-header'
  const linkClassName = isAbout ? 'home-nav-link transition-colors duration-300' : 'nav-link transition-colors duration-300'
  const buttonClassName = isAbout ? 'magnetic-btn text-sm px-7 py-3' : 'primary-btn py-3'
  const logoClassName = isAbout ? 'h-12 w-auto brightness-0 invert' : 'h-12 w-auto'

  return (
    <header className={headerClassName}>
      <div className="mx-auto flex max-w-8xl items-center justify-between px-6 py-5 lg:px-10">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="https://myonlinejet.com/images/Logo.webp"
            alt={siteConfig.name}
            width={172}
            height={56}
            className={logoClassName}
            priority={isHome}
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item) => (
            item.href.startsWith('#') || item.href.startsWith('http') ? (
              <a
                key={item.href}
                href={item.href}
                className={linkClassName}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer noopener' : undefined}
              >
                {item.label}
              </a>
            ) : (
              <Link key={item.href} href={item.href} className={linkClassName}>
                {item.label}
              </Link>
            )
          ))}
          {isHome ? (
            <a href="#contact" className="primary-btn py-3">
              Contact Us
            </a>
          ) : isAbout ? (
            <Link href="/contact" className={buttonClassName}>
              Contact Us
            </Link>
          ) : (
            <Link href="/contact" className={buttonClassName}>
              Contact Us
            </Link>
          )}
        </nav>

        <button
          type="button"
          aria-label="Toggle mobile menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-gray bg-white text-brand-navy shadow-sm transition hover:border-brand-red hover:text-brand-red lg:hidden"
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="text-sm font-semibold">{isOpen ? 'Close' : 'Menu'}</span>
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-brand-gray bg-white px-5 py-4 shadow-sm lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navLinks.map((item) => (
              item.href.startsWith('#') || item.href.startsWith('http') ? (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-brand-navy transition hover:bg-brand-gray-light hover:text-brand-red"
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
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-brand-navy transition hover:bg-brand-gray-light hover:text-brand-red"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              )
            ))}
            {isHome ? (
              <a href="#contact" className="primary-btn mt-2 text-center" onClick={() => setIsOpen(false)}>
                Contact Us
              </a>
            ) : (
              <Link
                href="/contact"
                className="primary-btn mt-2 text-center"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            )}
          </div>
        </div>
      ) : null}
    </header>
  )
}

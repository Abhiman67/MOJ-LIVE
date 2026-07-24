'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { useSession, signOut } from 'next-auth/react'
import { homeNavLinks, pageNavLinks } from '@/lib/site'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const pathname = usePathname()
  const { status } = useSession()
  const isHome = pathname === '/'
  const navLinks = isHome ? homeNavLinks : pageNavLinks
  const isAuthenticated = status === 'authenticated'

  return (
    <header className="site-header relative z-50">
      <div className="mx-auto flex max-w-8xl items-center justify-between px-4 py-4 sm:px-6 sm:py-5 lg:px-10">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/MyOnlineJet_White_Logo.png"
            alt="MyOnlineJet"
            width={168}
            height={48}
            className="h-8 w-auto sm:h-10"
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
          {isAuthenticated ? (
            <div className="relative">
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="primary-btn py-3 flex items-center gap-2"
              >
                <i className="fas fa-columns text-sm" />
                Dashboard
                <i className={`fas fa-chevron-down text-xs transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 rounded-xl bg-surface-card border border-border-subtle shadow-xl overflow-hidden">
                  <Link
                    href="/dashboard"
                    className="flex items-center gap-3 px-4 py-3 text-sm text-text-secondary hover:bg-surface-hover hover:text-white transition-colors"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <i className="fas fa-columns w-4 text-[#C50000]" />
                    Dashboard
                  </Link>
                  <Link
                    href="/profile"
                    className="flex items-center gap-3 px-4 py-3 text-sm text-text-secondary hover:bg-surface-hover hover:text-white transition-colors"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <i className="fas fa-user w-4 text-[#C50000]" />
                    Profile
                  </Link>
                  <hr className="border-border-subtle" />
                  <button
                    type="button"
                    onClick={() => { setDropdownOpen(false); signOut({ callbackUrl: '/' }) }}
                    className="flex items-center gap-3 w-full px-4 py-3 text-sm text-text-secondary hover:bg-surface-hover hover:text-[#C50000] transition-colors"
                  >
                    <i className="fas fa-sign-out-alt w-4" />
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link href="/auth" className="primary-btn py-3">
              Sign In
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
              <div className="mt-4 space-y-2">
                {isAuthenticated ? (
                  <>
                    <Link href="/dashboard" className="mobile-menu-cta dark" onClick={() => setIsOpen(false)}>
                      <i className="fas fa-columns mr-2" /> Dashboard
                    </Link>
                    <button
                      type="button"
                      onClick={() => { setIsOpen(false); signOut({ callbackUrl: '/' }) }}
                      className="mobile-menu-item dark justify-center text-[#C50000]"
                    >
                      <i className="fas fa-sign-out-alt mr-2" /> Sign Out
                    </button>
                  </>
                ) : (
                  <Link href="/auth" className="mobile-menu-cta dark" onClick={() => setIsOpen(false)}>
                    <i className="fas fa-sign-in-alt mr-2" /> Sign In
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

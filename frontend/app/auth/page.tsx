'use client'

import { signIn, useSession } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState, useEffect, Suspense } from 'react'
import Link from 'next/link'

function safeCallback(candidate: string | null): string {
  if (!candidate) return '/dashboard'
  try {
    const base = `${window.location.protocol}//${window.location.host}`
    const url = new URL(candidate, base)
    if (url.origin === window.location.origin && candidate.trim().startsWith('/')) {
      return url.pathname + url.search + url.hash
    }
  } catch {
    return '/dashboard'
  }
  return '/dashboard'
}

function AuthForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { status } = useSession()
  const callbackUrl = safeCallback(searchParams.get('callbackUrl'))

  const [mode, setMode] = useState<'signin' | 'signup'>('signin')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const credentialsEnabled = (process.env.NEXT_PUBLIC_AUTH_CREDENTIALS_ENABLED ?? 'false') === 'true'

  const socialButtons = [
    {
      id: 'google',
      enabled: process.env.NEXT_PUBLIC_AUTH_GOOGLE_ENABLED === 'true',
      label: 'Continue with Google',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
      ),
    },
    {
      id: 'apple',
      enabled: process.env.NEXT_PUBLIC_AUTH_APPLE_ENABLED === 'true',
      label: 'Continue with Apple',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24"><path fill="white" d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
      ),
    },
    {
      id: 'linkedin',
      enabled: process.env.NEXT_PUBLIC_AUTH_LINKEDIN_ENABLED === 'true',
      label: 'Continue with LinkedIn',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24"><path fill="#0A66C2" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
      ),
    },
  ].filter(btn => btn.enabled)

  useEffect(() => {
    if (status === 'authenticated') {
      router.push(callbackUrl)
    }
  }, [status, callbackUrl, router])

  useEffect(() => {
    const err = searchParams.get('error')
    if (err) {
      if (err === 'OAuthSignin' || err === 'OAuthCallback') {
        setError('An error occurred during social sign-in. Please try again.')
      } else if (err === 'OAuthCreateAccount') {
        setError('Could not create user account using your social profile.')
      } else if (err === 'EmailCreateAccount') {
        setError('Could not create user account using this email.')
      } else if (err === 'Callback') {
        setError('Authentication callback failed. Check database connection/credentials.')
      } else if (err === 'Configuration') {
        setError('Authentication configuration error. Please check your AUTH_SECRET or OAuth settings.')
      } else {
        setError(`Authentication error: ${err}`)
      }
    }
  }, [searchParams])

  async function handleSocialLogin(provider: string) {
    await signIn(provider, { callbackUrl })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    if (mode === 'signup') {
      const res = await fetch('/api/user/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || 'Registration failed')
        setLoading(false)
        return
      }
    }

    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    })

    if (result?.error) {
      setError('Invalid email or password')
      setLoading(false)
      return
    }

    router.push(callbackUrl)
  }

  if (status === 'loading') {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#030712]">
        <div className="flex flex-col items-center gap-4">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#C50000] border-t-transparent" />
          <p className="text-text-muted text-sm">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen bg-[#030712] flex items-center justify-center px-4">
      <div className="noise-overlay" />
      <div className="glow-orb glow-orb-1" />
      <div className="glow-orb glow-orb-2" />

      <div className="relative z-10 w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block mb-6">
            <span className="text-2xl font-bold text-white font-display">MyOnlineJet</span>
          </Link>
          <h1 className="text-3xl font-bold text-white font-display mb-2">
            {mode === 'signin' ? 'Welcome back' : 'Create account'}
          </h1>
          <p className="text-text-muted text-sm">
            {mode === 'signin'
              ? 'Sign in to access your dashboard and submissions'
              : 'Register to start tracking your inquiries'}
          </p>
        </div>

        <div className="glass-card p-8">
          {error && (
            <div className="rounded-xl bg-[rgba(197,0,0,0.1)] p-3 text-sm text-[#C50000] text-center mb-6">
              {error}
            </div>
          )}
          {/* Social Buttons */}
          {socialButtons.length > 0 && (
            <div className="space-y-3 mb-6">
              {socialButtons.map(btn => (
                <button
                  key={btn.id}
                  type="button"
                  onClick={() => handleSocialLogin(btn.id)}
                  className="w-full flex items-center justify-center gap-3 rounded-xl border border-border-subtle bg-surface-card px-4 py-3 text-white font-medium hover:bg-surface-hover transition-colors"
                >
                  {btn.icon}
                  {btn.label}
                </button>
              ))}
            </div>
          )}

          {credentialsEnabled && (
            <>
              {socialButtons.length > 0 && (
                <div className="relative mb-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-border-subtle" />
                  </div>
                  <div className="relative flex justify-center text-xs">
                    <span className="bg-surface-card px-3 text-text-muted">or continue with email</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {mode === 'signup' && (
                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-1">Full Name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full rounded-xl border border-border-subtle bg-[#0b1020] px-4 py-3 text-white placeholder-text-muted focus:border-[#C50000] focus:outline-none focus:ring-[3px] focus:ring-[rgba(197,0,0,0.1)]"
                      placeholder="John Doe"
                    />
                  </div>
                )}
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full rounded-xl border border-border-subtle bg-[#0b1020] px-4 py-3 text-white placeholder-text-muted focus:border-[#C50000] focus:outline-none focus:ring-[3px] focus:ring-[rgba(197,0,0,0.1)]"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1">Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={8}
                    className="w-full rounded-xl border border-border-subtle bg-[#0b1020] px-4 py-3 text-white placeholder-text-muted focus:border-[#C50000] focus:outline-none focus:ring-[3px] focus:ring-[rgba(197,0,0,0.1)]"
                    placeholder="Min. 8 characters"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="primary-btn w-full justify-center py-3 disabled:opacity-50"
                >
                  {loading ? 'Processing...' : mode === 'signin' ? 'Sign In' : 'Create Account'}
                </button>
              </form>

              <div className="mt-6 text-center">
                <button
                  type="button"
                  onClick={() => { setMode(mode === 'signin' ? 'signup' : 'signin'); setError('') }}
                  className="text-sm text-[#C50000] hover:underline"
                >
                  {mode === 'signin' ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
                </button>
              </div>
            </>
          )}

          {!credentialsEnabled && (
            <p className="text-center text-xs text-text-muted mt-4">
              By signing in, you agree to our{' '}
              <Link href="/privacy-policy" className="text-[#C50000] hover:underline">Privacy Policy</Link>
            </p>
          )}
        </div>

        <p className="text-center text-xs text-text-muted mt-6">
          By continuing, you agree to our{' '}
          <Link href="/privacy-policy" className="text-[#C50000] hover:underline">Privacy Policy</Link>
          {' '}and{' '}
          <Link href="/terms-conditions" className="text-[#C50000] hover:underline">Terms of Service</Link>
        </p>
      </div>

      <style>{`
        .glow-orb {
          position: fixed;
          border-radius: 50%;
          filter: blur(120px);
          pointer-events: none;
          z-index: 0;
        }
        .glow-orb-1 {
          width: 400px; height: 400px;
          background: rgba(197, 0, 0, 0.08);
          top: -100px; right: -100px;
        }
        .glow-orb-2 {
          width: 300px; height: 300px;
          background: rgba(197, 0, 0, 0.05);
          bottom: 20%; left: -100px;
        }
      `}</style>
    </div>
  )
}

export default function AuthPage() {
  return (
    <Suspense fallback={
      <div className="flex min-h-screen items-center justify-center bg-[#030712]">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#C50000] border-t-transparent" />
      </div>
    }>
      <AuthForm />
    </Suspense>
  )
}

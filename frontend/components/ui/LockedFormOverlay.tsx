'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { type ReactNode } from 'react'

interface LockedFormOverlayProps {
  formType: string
  children: ReactNode
}

export function LockedFormOverlay({ formType, children }: LockedFormOverlayProps) {
  const { status } = useSession()
  const router = useRouter()

  if (status === 'loading') {
    return <div className="relative">{children}</div>
  }

  if (status === 'authenticated') {
    return <>{children}</>
  }

  return (
    <div className="relative">
      <div className="pointer-events-none select-none">
        <div className="blur-sm">
          {children}
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="w-full h-full absolute inset-0 bg-[#030712]/60 backdrop-blur-[2px] transition-all duration-500" />

        <div className="relative glass-card p-8 md:p-10 text-center max-w-md mx-4 animate-fade-in">
          <div className="icon-box mx-auto mb-5">
            <i className="fas fa-lock text-2xl" />
          </div>
          <h3 className="text-xl font-bold text-white font-display mb-2">Sign in to Continue</h3>
          <p className="text-text-muted text-sm mb-6">
            Sign in to submit this {formType} form and track your submissions from the dashboard.
          </p>
          <button
            type="button"
            onClick={() => router.push(`/auth?callbackUrl=${encodeURIComponent(window.location.pathname)}`)}
            className="primary-btn px-6 py-3"
          >
            Sign In
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(16px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease-out;
        }
      `}</style>
    </div>
  )
}

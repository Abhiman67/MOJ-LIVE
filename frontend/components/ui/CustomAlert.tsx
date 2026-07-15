'use client'

import { useEffect } from 'react'

interface CustomAlertProps {
  isOpen: boolean
  title: string
  message: string
  type: 'success' | 'error'
  onClose: () => void
}

export function CustomAlert({ isOpen, title, message, type, onClose }: CustomAlertProps) {
  // Prevent scrolling when the alert is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop overlay */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 animate-fade-in-overlay"
        onClick={onClose}
      />
      
      {/* Alert Panel */}
      <div className="relative w-full max-w-md transform overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] p-6 text-center shadow-[0_0_50px_rgba(0,0,0,0.8)] transition-all duration-300 animate-scale-up-alert">
        {/* Top visual glow line */}
        <div className={`absolute top-0 left-0 right-0 h-1.5 ${type === 'success' ? 'bg-gradient-to-r from-emerald-500 to-green-500' : 'bg-gradient-to-r from-red-500 to-[#C50000]'}`} />

        {/* Icon wrapper */}
        <div className={`mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border transition-all ${
          type === 'success' 
            ? 'border-emerald-500/20 bg-emerald-500/10 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.15)] animate-pulse-subtle' 
            : 'border-red-500/20 bg-red-500/10 text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.15)]'
        }`}>
          {type === 'success' ? (
            <i className="fas fa-check-circle text-2xl" />
          ) : (
            <i className="fas fa-exclamation-triangle text-2xl" />
          )}
        </div>

        {/* Header / Title */}
        <h3 className="font-display text-xl font-bold text-white tracking-wide mb-3">
          {title}
        </h3>

        {/* Content message */}
        <p className="text-sm leading-relaxed text-gray-400 mb-6 font-sans">
          {message}
        </p>

        {/* Action button */}
        <button
          type="button"
          onClick={onClose}
          className={`w-full py-3 px-6 rounded-xl font-medium tracking-wide transition-all duration-300 transform active:scale-[0.98] ${
            type === 'success'
              ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-[0_4px_20px_rgba(16,185,129,0.25)] hover:shadow-[0_6px_25px_rgba(16,185,129,0.35)]'
              : 'bg-[#C50000] hover:bg-[#a00000] text-white shadow-[0_4px_20px_rgba(197,0,0,0.25)] hover:shadow-[0_6px_25px_rgba(197,0,0,0.35)]'
          }`}
        >
          Dismiss
        </button>
      </div>

      <style>{`
        @keyframes fadeInOverlay {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleUpAlert {
          from { opacity: 0; transform: scale(0.9) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes pulseSubtle {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.03); }
        }
        .animate-fade-in-overlay {
          animation: fadeInOverlay 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-scale-up-alert {
          animation: scaleUpAlert 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        .animate-pulse-subtle {
          animation: pulseSubtle 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

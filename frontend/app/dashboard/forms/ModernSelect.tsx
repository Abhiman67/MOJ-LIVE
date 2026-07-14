'use client'

import { useState, useRef, useEffect } from 'react'

interface Option {
  value: string
  label: string
}

interface ModernSelectProps {
  name: string
  options: Option[]
  placeholder?: string
  required?: boolean
  value?: string
  onChange?: (value: string) => void
}

export function ModernSelect({ name, options, placeholder = 'Select', required, value: controlledValue, onChange }: ModernSelectProps) {
  const [open, setOpen] = useState(false)
  const [localValue, setLocalValue] = useState('')
  const ref = useRef<HTMLDivElement>(null)
  const hiddenRef = useRef<HTMLSelectElement>(null)

  const value = controlledValue ?? localValue
  const selected = options.find(o => o.value === value)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  function select(option: Option) {
    setLocalValue(option.value)
    setOpen(false)
    onChange?.(option.value)
    if (hiddenRef.current) {
      hiddenRef.current.value = option.value
      hiddenRef.current.dispatchEvent(new Event('change', { bubbles: true }))
    }
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`flex w-full items-center justify-between rounded-xl border px-4 py-3 text-left text-sm transition-all ${
          open ? 'border-[#C50000] shadow-[0_0_0_3px_rgba(197,0,0,0.12)]' : 'border-[#2a2a2a] hover:border-[#3a3a3a]'
        } ${value ? 'text-[#fafafa]' : 'text-[#6b6b6b]'} bg-[#111]`}
      >
        <span>{value ? selected?.label : placeholder}</span>
        <svg className={`h-4 w-4 text-text-muted transition-transform duration-200 ${open ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 right-0 z-50 mt-1.5 overflow-hidden rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] shadow-xl animate-select-dropdown">
          {options.map(opt => (
            <button
              key={opt.value}
              type="button"
              onClick={() => select(opt)}
              className={`flex w-full items-center px-4 py-2.5 text-left text-sm transition-colors ${
                value === opt.value
                  ? 'bg-[#C50000]/10 text-[#C50000] font-medium'
                  : 'text-text-secondary hover:bg-[#2a2a2a] hover:text-[#fafafa]'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}

      <select ref={hiddenRef} name={name} required={required} defaultValue="" className="hidden" aria-hidden="true">
        <option value="" disabled>{placeholder}</option>
        {options.map(o => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>

      <style>{`
        @keyframes select-dropdown {
          from { opacity: 0; transform: translateY(-4px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-select-dropdown {
          animation: select-dropdown 0.15s ease-out;
        }
      `}</style>
    </div>
  )
}

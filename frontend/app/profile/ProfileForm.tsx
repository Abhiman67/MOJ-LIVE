'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'

interface ProfileData {
  phone: string
  organization: string
  role: string
  linkedIn: string
  portfolio: string
  location: string
  bio: string
  [key: string]: string
}

const sections = [
  { id: 'basic', label: 'Basic', icon: 'fa-address-card' },
  { id: 'work', label: 'Work', icon: 'fa-briefcase' },
  { id: 'links', label: 'Links', icon: 'fa-link' },
  { id: 'bio', label: 'Bio', icon: 'fa-feather' },
]

export default function ProfileForm({ initialData, user }: { initialData: ProfileData; user: { name?: string | null; email?: string | null } }) {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [tab, setTab] = useState('basic')
  const [data, setData] = useState<ProfileData>(initialData)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  const displayName = user.name || session?.user?.name || ''
  const displayEmail = user.email || session?.user?.email || ''
  const init = displayName.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2) || 'U'

  useEffect(() => {
    if (status === 'unauthenticated') router.push('/auth?callbackUrl=/profile')
  }, [status, router])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true); setSaved(false)
    try {
      const r = await fetch('/api/profile', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
      if (r.ok) { setSaved(true); setTimeout(() => setSaved(false), 2500) }
    } catch {}
    setSaving(false)
  }

  const filled = Object.values(data).filter(v => typeof v === 'string' && v.trim()).length
  const total = Object.values(data).length
  const pct = Math.round((filled / total) * 100)

  const cx = 'w-full rounded-lg border border-border-subtle bg-surface-elevated px-3.5 py-2.5 text-sm text-text-primary placeholder-text-muted focus:border-text-muted focus:outline-none focus:ring-0 transition-colors'

  return (
    <div className="min-h-screen bg-[#030712]">
      <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
        <Link href="/dashboard" className="inline-flex items-center gap-1.5 text-xs text-text-muted hover:text-text-secondary transition-colors mb-8">
          <i className="fas fa-arrow-left" />
          Dashboard
        </Link>

        <div className="mb-10 flex items-center gap-5">
          <div className="relative">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#C50000] to-[#ff5252] text-xl font-bold text-white shadow-lg">
              {init}
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#030712] bg-emerald-500">
              <i className="fas fa-check text-[7px] text-white" />
            </div>
          </div>
          <div>
            <h1 className="text-lg font-semibold text-text-primary">{displayName}</h1>
            <p className="text-sm text-text-secondary">{displayEmail}</p>
          </div>
        </div>

        <div className="mb-6 border-b border-border-subtle">
          <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-1 scrollbar-none">
            {sections.map(s => (
              <button key={s.id} onClick={() => setTab(s.id)}
                className={`relative pb-3 text-xs sm:text-sm font-medium shrink-0 transition-colors ${
                  tab === s.id ? 'text-text-primary' : 'text-text-muted hover:text-text-secondary'
                }`}>
                <i className={`fas ${s.icon} mr-1.5 sm:mr-2 text-xs`} />
                {s.label}
                {tab === s.id && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C50000] rounded-full" />}
              </button>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="rounded-xl border border-border-subtle bg-surface-card overflow-hidden">
            <div className="flex items-center justify-between border-b border-border-subtle px-4 py-3.5 sm:px-6 sm:py-4">
              <div>
                <p className="text-sm font-medium text-text-primary">{sections.find(s => s.id === tab)?.label}</p>
                <p className="text-xs text-text-muted mt-0.5">
                  {tab === 'basic' && 'Your contact details'}
                  {tab === 'work' && 'Your professional background'}
                  {tab === 'links' && 'Your online presence'}
                  {tab === 'bio' && 'A short intro about you'}
                </p>
              </div>
              {saved && (
                <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-400">
                  <i className="fas fa-check-circle" />
                  Saved
                </span>
              )}
            </div>

            <div className="px-4 py-5 sm:px-6 sm:py-6">
              {tab === 'basic' && (
                <div className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Lab>Full Name</Lab>
                      <input type="text" value={data.name ?? displayName} onChange={e => setData(p => ({ ...p, name: e.target.value }))} className={cx} placeholder="Your Full Name" />
                    </div>
                    <div>
                      <Lab>Email</Lab>
                      <input type="email" value={displayEmail} disabled className={`${cx} text-text-muted cursor-not-allowed`} />
                    </div>
                  </div>
                  <hr className="border-border-subtle" />
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Lab>Phone</Lab>
                      <input type="tel" value={data.phone} onChange={e => setData(p => ({ ...p, phone: e.target.value }))} className={cx} placeholder="+91 98765 43210" />
                    </div>
                    <div>
                      <Lab>Location</Lab>
                      <input type="text" value={data.location} onChange={e => setData(p => ({ ...p, location: e.target.value }))} className={cx} placeholder="Jaipur, India" />
                    </div>
                  </div>
                </div>
              )}

              {tab === 'work' && (
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Lab>Organization</Lab>
                    <input type="text" value={data.organization} onChange={e => setData(p => ({ ...p, organization: e.target.value }))} className={cx} placeholder="Company or institution" />
                  </div>
                  <div>
                    <Lab>Role</Lab>
                    <input type="text" value={data.role} onChange={e => setData(p => ({ ...p, role: e.target.value }))} className={cx} placeholder="CEO, Partner, Researcher..." />
                  </div>
                </div>
              )}

              {tab === 'links' && (
                <div className="space-y-4">
                  <div>
                    <Lab><i className="fab fa-linkedin mr-1.5" />LinkedIn</Lab>
                    <input type="url" value={data.linkedIn} onChange={e => setData(p => ({ ...p, linkedIn: e.target.value }))} className={cx} placeholder="https://linkedin.com/in/..." />
                  </div>
                  <div>
                    <Lab><i className="fas fa-globe mr-1.5" />Website</Lab>
                    <input type="url" value={data.portfolio} onChange={e => setData(p => ({ ...p, portfolio: e.target.value }))} className={cx} placeholder="https://..." />
                  </div>
                </div>
              )}

              {tab === 'bio' && (
                <div>
                  <Lab>Bio</Lab>
                  <textarea rows={5} value={data.bio} onChange={e => setData(p => ({ ...p, bio: e.target.value }))}
                    className={`${cx} resize-none`} placeholder="Tell us about yourself..." />
                  <p className="mt-1.5 text-xs text-text-muted">{data.bio.length} characters</p>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between border-t border-border-subtle px-6 py-4">
              <div className="flex h-1.5 w-24 rounded-full bg-border-subtle overflow-hidden">
                <div className="h-full rounded-full bg-[#C50000] transition-all duration-500" style={{ width: `${pct}%` }} />
              </div>
              <div className="flex items-center gap-3">
                {sections.findIndex(s => s.id === tab) < sections.length - 1 && (
                  <button type="button" onClick={() => setTab(sections[sections.findIndex(s => s.id === tab) + 1].id)}
                    className="text-xs text-text-muted hover:text-text-secondary transition-colors">
                    Next
                  </button>
                )}
                <button type="submit" disabled={saving}
                  className="rounded-lg bg-[#C50000] px-4 py-2 text-xs font-semibold text-white hover:bg-[#C50000]/90 disabled:opacity-50 transition-all">
                  {saving ? 'Saving...' : 'Save'}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

function Lab({ children }: { children: React.ReactNode }) {
  return <label className="mb-1.5 flex items-center text-xs font-medium text-text-secondary">{children}</label>
}

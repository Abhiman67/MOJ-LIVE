'use client'

import { signOut } from 'next-auth/react'
import { useState } from 'react'
import Link from 'next/link'
import { ContactForm } from './forms/ContactForm'
import { CareerForm } from './forms/CareerForm'
import { InvestorForm } from './forms/InvestorForm'
import { PartnerForm } from './forms/PartnerForm'
import { FaqForm } from './forms/FaqForm'
import { AdvisoryForm } from './forms/AdvisoryForm'

interface Submission {
  _id: string
  formType: string
  data: Record<string, unknown>
  status: string
  createdAt: string
  userId?: { name: string; email: string }
}

const labels: Record<string, string> = {
  contact: 'Contact', career: 'Job Application', investor: 'Investor',
  partner: 'Partnership', faq: 'Inquiry', advisory: 'Advisory',
}
const icons: Record<string, string> = {
  contact: 'fa-envelope', career: 'fa-briefcase', investor: 'fa-chart-line',
  partner: 'fa-handshake', faq: 'fa-question-circle', advisory: 'fa-users',
}
const forms: Record<string, React.ElementType> = {
  contact: ContactForm, career: CareerForm, investor: InvestorForm,
  partner: PartnerForm, faq: FaqForm, advisory: AdvisoryForm,
}
const badge: Record<string, { label: string; dot: string; bg: string }> = {
  pending: { label: 'Pending', dot: 'bg-amber-400', bg: 'bg-amber-400/10 text-amber-400 border border-amber-400/20' },
  reviewed: { label: 'Reviewed', dot: 'bg-blue-400', bg: 'bg-blue-400/10 text-blue-400 border border-blue-400/20' },
  approved: { label: 'Approved', dot: 'bg-emerald-400', bg: 'bg-emerald-400/10 text-emerald-400 border border-emerald-400/20' },
  rejected: { label: 'Rejected', dot: 'bg-red-400', bg: 'bg-red-400/10 text-red-400 border border-red-400/20' },
}

export default function DashboardContent({
  initialSubs,
  user,
  isAdmin,
}: {
  initialSubs: Submission[]
  user: { name?: string | null; email?: string | null }
  isAdmin: boolean
}) {
  const [subs] = useState(initialSubs)
  const [filter, setFilter] = useState('all')
  const [sidebar, setSidebar] = useState(false)
  const [detail, setDetail] = useState<Submission | null>(null)

  const init = user.name?.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2) || 'U'

  const stats = [
    { label: 'Total', value: subs.length, icon: 'fa-layer-group' },
    { label: 'Pending', value: subs.filter(s => s.status === 'pending').length, icon: 'fa-clock' },
    { label: 'Reviewed', value: subs.filter(s => s.status === 'reviewed').length, icon: 'fa-eye' },
    { label: 'Closed', value: subs.filter(s => s.status === 'approved' || s.status === 'rejected').length, icon: 'fa-check-circle' },
  ]

  const filtered = filter === 'all' ? subs : subs.filter(s => s.formType === filter)

  return (
    <div className="flex min-h-screen bg-[#030712]">
      {sidebar && <div className="fixed inset-0 z-30 bg-black/60 lg:hidden" onClick={() => setSidebar(false)} />}

      <aside className={`fixed inset-y-0 left-0 z-40 flex w-56 flex-col border-r border-border-subtle bg-[#030712] transition-transform duration-300 lg:static lg:translate-x-0 ${sidebar ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex h-14 items-center gap-2.5 border-b border-border-subtle px-5">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#C50000] text-[10px] font-bold text-white">M</div>
          <span className="text-sm font-semibold text-text-primary font-display">MyOnlineJet</span>
        </div>
        <div className="flex-1 overflow-y-auto px-3 py-4">
          <div className="mb-6 flex items-center gap-3 rounded-xl bg-surface-card border border-border-subtle px-3.5 py-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#C50000] to-[#ff5252] text-xs font-semibold text-white">
              {init}
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-text-primary">{user.name}</p>
              <p className="truncate text-xs text-text-muted">{user.email}</p>
            </div>
          </div>
          <nav className="space-y-1">
            {[
              { label: 'Dashboard', href: '/dashboard', icon: 'fa-layer-group', active: true },
              { label: 'Profile', href: '/profile', icon: 'fa-user' },
              { label: 'Home', href: '/', icon: 'fa-arrow-left' },
            ].map(item => (
              <Link key={item.href} href={item.href}
                className={`flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-all ${
                  item.active
                    ? 'bg-[#C50000]/10 text-[#C50000] border border-[#C50000]/20'
                    : 'text-text-muted hover:text-text-primary hover:bg-surface-card'
                }`}>
                <i className={`fas ${item.icon} w-4 text-center text-xs`} />
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="border-t border-border-subtle p-3">
          <button onClick={() => signOut({ callbackUrl: '/' })}
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-border-subtle px-3 py-2.5 text-sm font-medium text-text-muted hover:text-[#C50000] hover:border-[#C50000]/30 transition-all">
            <i className="fas fa-right-from-bracket text-xs" />
            Sign out
          </button>
        </div>
      </aside>

      <div className="flex flex-1 flex-col">
        <header className="flex h-14 items-center justify-between border-b border-border-subtle px-4 lg:px-6 bg-[#030712]/80 backdrop-blur-xl">
          <button className="text-text-muted hover:text-text-primary lg:hidden" onClick={() => setSidebar(true)}>
            <i className="fas fa-bars text-lg" />
          </button>
          <div className="hidden lg:flex items-center gap-1.5">
            {isAdmin && (
              <span className="rounded-md bg-[#C50000]/10 border border-[#C50000]/20 px-2.5 py-1 text-xs font-medium text-[#C50000]">
                Admin
              </span>
            )}
          </div>
          <div className="flex items-center gap-4">
            <Link href="/profile" className="text-sm text-text-muted hover:text-text-primary transition-colors">Profile</Link>
            <button onClick={() => signOut({ callbackUrl: '/' })} className="text-sm text-text-muted hover:text-[#C50000] transition-colors">Sign out</button>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto px-4 py-8 lg:px-8">
          <div className="mb-8">
            <h1 className="text-xl font-semibold text-text-primary font-display">Dashboard</h1>
            <p className="mt-1 text-sm text-text-secondary">
              Welcome back, <span className="text-text-primary">{user.name}</span>
            </p>
          </div>

          <div className="mb-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {stats.map(s => (
              <div key={s.label} className="rounded-xl border border-border-subtle bg-surface-card px-5 py-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">{s.label}</p>
                  <i className={`fas ${s.icon} text-sm text-[#C50000]/40`} />
                </div>
                <p className="text-2xl font-bold text-text-primary">{s.value}</p>
              </div>
            ))}
          </div>

          <div className="mb-4 flex items-center gap-1.5 overflow-x-auto pb-2">
            <span className="shrink-0 text-xs font-semibold uppercase tracking-wider text-text-muted mr-1">Filter</span>
            {['all', 'contact', 'career', 'investor', 'partner', 'faq', 'advisory'].map(t => (
              <button key={t} onClick={() => setFilter(t)}
                className={`shrink-0 rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                  filter === t
                    ? 'bg-[#C50000] text-white shadow-sm'
                    : 'text-text-muted hover:text-text-primary hover:bg-surface-card border border-border-subtle'
                }`}>
                {t === 'all' ? 'All' : labels[t] || t}
              </button>
            ))}
          </div>

          <div className="rounded-xl border border-border-subtle bg-surface-card overflow-hidden">
            {filtered.length === 0 ? (
              filter !== 'all' && forms[filter] ? (
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-base font-semibold text-text-primary">New {labels[filter] || filter} Submission</h3>
                    <p className="text-xs text-text-secondary mt-0.5">Fill in the form below to submit.</p>
                  </div>
                  {(() => {
                    const Form = forms[filter]
                    return <Form />
                  })()}
                </div>
              ) : (
                <div className="flex flex-col items-center py-20">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl border border-border-subtle bg-surface-hover">
                    <i className="fas fa-inbox text-lg text-text-muted" />
                  </div>
                  <p className="text-sm font-medium text-text-primary">No submissions</p>
                  <p className="mt-1 text-xs text-text-secondary">Submit a form to track it here.</p>
                  <Link href="/contact" className="mt-5 rounded-lg bg-[#C50000] px-4 py-2 text-xs font-medium text-white hover:bg-[#C50000]/90 transition-colors">
                    New submission
                  </Link>
                </div>
              )
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border-subtle">
                      <Th>Type</Th>
                      {isAdmin && <Th>User</Th>}
                      <Th>Date</Th>
                      <Th>Status</Th>
                      <Th className="text-right">Action</Th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((s, i) => {
                      const b = badge[s.status] || badge.pending
                      return (
                        <tr key={s._id} className="border-b border-border-subtle/50 transition-colors hover:bg-surface-hover last:border-0">
                          <td className="px-5 py-3.5">
                            <div className="flex items-center gap-3">
                              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border-subtle bg-surface-hover">
                                <i className={`fas ${icons[s.formType] || 'fa-file'} text-xs text-[#C50000]`} />
                              </div>
                              <div>
                                <p className="text-sm font-medium text-text-primary">{labels[s.formType] || s.formType}</p>
                                <p className="text-xs text-text-muted">#{i + 1}</p>
                              </div>
                            </div>
                          </td>
                          {isAdmin && (
                            <td className="px-5 py-3.5">
                              <p className="text-sm text-text-primary">{s.userId?.name || '—'}</p>
                              <p className="text-xs text-text-muted">{s.userId?.email}</p>
                            </td>
                          )}
                          <td className="px-5 py-3.5">
                            <p className="text-sm text-text-secondary">{new Date(s.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}</p>
                            <p className="text-xs text-text-muted">{new Date(s.createdAt).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}</p>
                          </td>
                          <td className="px-5 py-3.5">
                            <span className={`inline-flex items-center gap-1.5 rounded-md ${b.bg} px-2.5 py-1 text-xs font-medium`}>
                              <span className={`h-1.5 w-1.5 rounded-full ${b.dot}`} />
                              {b.label}
                            </span>
                          </td>
                          <td className="px-5 py-3.5 text-right">
                            <button onClick={() => setDetail(s)}
                              className="rounded-lg border border-border-subtle px-3 py-1.5 text-xs font-medium text-text-muted hover:text-[#C50000] hover:border-[#C50000]/30 transition-all">
                              View
                            </button>
                          </td>
                        </tr>
                      )}
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </main>
      </div>

      {detail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setDetail(null)}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div className="relative w-full max-w-lg rounded-xl border border-border-subtle bg-[#0b1020] p-6 shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="flex items-start justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border-subtle bg-surface-hover">
                  <i className={`fas ${icons[detail.formType] || 'fa-file'} text-xs text-[#C50000]`} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary">{labels[detail.formType]}</p>
                  <p className="text-xs text-text-muted">{new Date(detail.createdAt).toLocaleString()}</p>
                </div>
              </div>
              <button onClick={() => setDetail(null)} className="flex h-7 w-7 items-center justify-center rounded-lg border border-border-subtle text-text-muted hover:text-text-primary transition-colors">
                <i className="fas fa-xmark text-xs" />
              </button>
            </div>
            <div className="mb-5">
              <span className={`inline-flex items-center gap-1.5 rounded-md ${(badge[detail.status] || badge.pending).bg} px-2.5 py-1 text-xs font-medium`}>
                <span className={`h-1.5 w-1.5 rounded-full ${(badge[detail.status] || badge.pending).dot}`} />
                {(badge[detail.status] || badge.pending).label}
              </span>
            </div>
            <div className="max-h-72 space-y-2.5 overflow-y-auto">
              {Object.entries(detail.data).map(([k, v]) => (
                <div key={k} className="rounded-lg border border-border-subtle bg-surface-hover px-4 py-3">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-text-muted mb-0.5">
                    {k.replace(/([A-Z])/g, ' $1').trim()}
                  </p>
                  <p className="text-sm text-text-primary break-words">{String(v)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function Th({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <th className={`px-5 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-text-muted ${className ?? ''}`}>
      {children}
    </th>
  )
}

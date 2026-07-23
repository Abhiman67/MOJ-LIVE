'use client'

import { signOut } from 'next-auth/react'
import { useState, useEffect, useRef } from 'react'
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
  adminNotes?: string
  createdAt: string
  userId?: { name: string; email: string }
}

interface NotificationItem {
  _id: string
  title: string
  message: string
  type: string
  formType?: string
  submissionId?: string
  isRead: boolean
  createdAt: string
}

const labels: Record<string, string> = {
  contact: 'Contact', career: 'Job Application', investor: 'Investor',
  partner: 'Partnership', faq: 'Inquiry', advisory: 'Advisory',
}
const fieldIcons: Record<string, string> = {
  fullName: 'fa-user', name: 'fa-user', email: 'fa-envelope', phone: 'fa-phone',
  organization: 'fa-building', company: 'fa-building', role: 'fa-briefcase',
  designation: 'fa-briefcase', advisoryType: 'fa-users', formType: 'fa-file',
  subject: 'fa-heading', consent: 'fa-shield-halved',
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

const notifIcon: Record<string, { icon: string; color: string; bg: string }> = {
  approved: { icon: 'fa-circle-check', color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20' },
  rejected: { icon: 'fa-circle-xmark', color: 'text-red-400', bg: 'bg-red-500/10 border-red-500/20' },
  reviewed: { icon: 'fa-eye', color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20' },
  message: { icon: 'fa-comment-dots', color: 'text-purple-400', bg: 'bg-purple-500/10 border-purple-500/20' },
  system: { icon: 'fa-bell', color: 'text-[#C50000]', bg: 'bg-[#C50000]/10 border-[#C50000]/20' },
}

export default function DashboardContent({
  initialSubs,
  initialNotifications = [],
  initialUnreadCount = 0,
  user,
  isAdmin,
}: {
  initialSubs: Submission[]
  initialNotifications?: NotificationItem[]
  initialUnreadCount?: number
  user: { name?: string | null; email?: string | null }
  isAdmin: boolean
}) {
  const [subs, setSubs] = useState(initialSubs)
  const [filter, setFilter] = useState('all')
  const [sidebar, setSidebar] = useState(false)
  const [detail, setDetail] = useState<Submission | null>(null)
  const [updatingStatus, setUpdatingStatus] = useState(false)
  const [noteText, setNoteText] = useState('')
  const [copiedField, setCopiedField] = useState<string | null>(null)

  // User Management & Pagination State
  interface UserItem {
    id: string
    name: string
    email: string
    role: string
    authProvider: string
    createdAt: string
  }

  const [activeTab, setActiveTab] = useState<'submissions' | 'users'>('submissions')
  const [usersList, setUsersList] = useState<UserItem[]>([])
  const [usersLoading, setUsersLoading] = useState(false)
  const [userSearch, setUserSearch] = useState('')
  const [updatingUserRole, setUpdatingUserRole] = useState<string | null>(null)

  const [subPage, setSubPage] = useState(1)
  const [userPage, setUserPage] = useState(1)
  const itemsPerPage = 8

  useEffect(() => {
    setSubPage(1)
  }, [filter])

  useEffect(() => {
    setUserPage(1)
  }, [userSearch])

  useEffect(() => {
    if (isAdmin && activeTab === 'users') {
      const fetchUsers = async () => {
        setUsersLoading(true)
        try {
          const query = userSearch.trim() ? `?search=${encodeURIComponent(userSearch.trim())}` : ''
          const res = await fetch(`/api/admin/users${query}`)
          if (res.ok) {
            const data = await res.json()
            setUsersList(Array.isArray(data) ? data : [])
          }
        } catch (err) {
          console.error('Error fetching users:', err)
        } finally {
          setUsersLoading(false)
        }
      }
      fetchUsers()
    }
  }, [isAdmin, activeTab, userSearch])

  const handleUserRoleChange = async (userId: string, newRole: string) => {
    setUpdatingUserRole(userId)
    try {
      const res = await fetch(`/api/admin/users/${userId}/role`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ role: newRole }),
      })
      if (res.ok) {
        setUsersList(prev => prev.map(u => (u.id === userId ? { ...u, role: newRole } : u)))
      } else {
        const err = await res.json()
        alert(err.error || 'Failed to update user role')
      }
    } catch (e) {
      console.error('Failed to change user role:', e)
      alert('An error occurred while updating role.')
    } finally {
      setUpdatingUserRole(null)
    }
  }

  const handleExportCSV = () => {
    if (filtered.length === 0) return
    const headers = ['Submission ID', 'Form Type', 'User Name', 'User Email', 'Status', 'Date', 'Data Summary']
    const rows = filtered.map(s => {
      const dataSummary = Object.entries(s.data)
        .map(([k, v]) => {
          const valStr = typeof v === 'object' && v !== null ? JSON.stringify(v) : String(v ?? '')
          return `${k}: ${valStr.replace(/[\r\n]+/g, ' ')}`
        })
        .join(' | ')
        .replace(/"/g, '""')

      return [
        `"${s._id}"`,
        `"${(labels[s.formType] || s.formType).replace(/"/g, '""')}"`,
        `"${(s.userId?.name || '').replace(/"/g, '""')}"`,
        `"${(s.userId?.email || '').replace(/"/g, '""')}"`,
        `"${s.status}"`,
        `"${new Date(s.createdAt).toLocaleString('en-IN')}"`,
        `"${dataSummary}"`
      ].join(',')
    })

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows].join('\n')
    const encodedUri = encodeURI(csvContent)
    const link = document.createElement('a')
    link.setAttribute('href', encodedUri)
    link.setAttribute('download', `MOJ_Submissions_${new Date().toISOString().slice(0, 10)}.csv`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleCopy = (key: string, value: string) => {
    navigator.clipboard.writeText(value)
    setCopiedField(key)
    setTimeout(() => setCopiedField(null), 2000)
  }

  const handleUpdateStatus = async (newStatus: string) => {
    if (!detail) return
    setUpdatingStatus(true)
    try {
      const res = await fetch('/api/admin/submissions', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: detail._id, status: newStatus }),
      })
      if (res.ok) {
        const updated = await res.json()
        setSubs(prev => prev.map(s => {
          if (s._id === updated._id) {
            return {
              ...s,
              status: updated.status,
              adminNotes: updated.adminNotes
            }
          }
          return s
        }))
        setDetail(prev => prev ? { ...prev, status: updated.status, adminNotes: updated.adminNotes } : null)
      } else {
        const errData = await res.json()
        alert(errData.error || 'Failed to update status')
      }
    } catch (err) {
      console.error('Error updating status:', err)
      alert('An error occurred. Please try again.')
    } finally {
      setUpdatingStatus(false)
    }
  }

  const handleSendNote = async () => {
    if (!detail || !noteText.trim()) return
    setUpdatingStatus(true)
    try {
      const res = await fetch('/api/admin/submissions', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: detail._id, adminNotes: noteText.trim() }),
      })
      if (res.ok) {
        const updated = await res.json()
        setSubs(prev => prev.map(s => {
          if (s._id === updated._id) {
            return {
              ...s,
              status: updated.status,
              adminNotes: updated.adminNotes
            }
          }
          return s
        }))
        setDetail(prev => prev ? { ...prev, status: updated.status, adminNotes: updated.adminNotes } : null)
        setNoteText('')
      } else {
        const errData = await res.json()
        alert(errData.error || 'Failed to send message')
      }
    } catch (err) {
      console.error('Error sending message:', err)
      alert('An error occurred. Please try again.')
    } finally {
      setUpdatingStatus(false)
    }
  }

  // Notification state
  const [notifications, setNotifications] = useState<NotificationItem[]>(initialNotifications)
  const [unreadCount, setUnreadCount] = useState<number>(initialUnreadCount)
  const [showNotifPanel, setShowNotifPanel] = useState(false)
  const notifRef = useRef<HTMLDivElement>(null)

  // Poll notifications with exponential backoff
  useEffect(() => {
    let attempts = 0
    let timer: ReturnType<typeof setTimeout>
    const baseInterval = 15000

    const fetchNotifs = async () => {
      try {
        const res = await fetch('/api/user/notifications')
        if (res.ok) {
          const data = await res.json()
          setNotifications(data.notifications || [])
          setUnreadCount(data.unreadCount || 0)
          attempts = 0
        } else {
          attempts++
        }
      } catch {
        attempts++
      }
      const delay = Math.min(baseInterval * Math.pow(1.5, attempts), 60000)
      timer = setTimeout(fetchNotifs, delay)
    }

    timer = setTimeout(fetchNotifs, baseInterval)
    return () => clearTimeout(timer)
  }, [])

  // Close notification panel when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notifRef.current && !notifRef.current.contains(event.target as Node)) {
        setShowNotifPanel(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  const handleMarkAsRead = async (notificationId?: string, markAllRead = false) => {
    try {
      const res = await fetch('/api/user/notifications', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ notificationId, markAllRead }),
      })
      if (res.ok) {
        const data = await res.json()
        setUnreadCount(data.unreadCount ?? 0)
        if (markAllRead) {
          setNotifications(prev => prev.map(n => ({ ...n, isRead: true })))
        } else if (notificationId) {
          setNotifications(prev => prev.map(n => (n._id === notificationId ? { ...n, isRead: true } : n)))
        }
      }
    } catch (err) {
      console.error('Failed to update notification read status:', err)
    }
  }

  const handleNotifClick = (n: NotificationItem) => {
    if (!n.isRead) {
      handleMarkAsRead(n._id)
    }
    if (n.submissionId) {
      const foundSub = subs.find(s => s._id === n.submissionId)
      if (foundSub) {
        setDetail(foundSub)
        setShowNotifPanel(false)
      }
    }
  }

  const init = user.name?.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2) || 'U'

  const stats = [
    { label: 'Total', value: subs.length, icon: 'fa-layer-group' },
    { label: 'Pending', value: subs.filter(s => s.status === 'pending').length, icon: 'fa-clock' },
    { label: 'Reviewed', value: subs.filter(s => s.status === 'reviewed').length, icon: 'fa-eye' },
    { label: 'Closed', value: subs.filter(s => s.status === 'approved' || s.status === 'rejected').length, icon: 'fa-check-circle' },
  ]

  const filtered = filter === 'all' ? subs : subs.filter(s => s.formType === filter)

  const totalSubPages = Math.ceil(filtered.length / itemsPerPage) || 1
  const activeSubPage = Math.min(Math.max(1, subPage), totalSubPages)
  const paginatedSubs = filtered.slice((activeSubPage - 1) * itemsPerPage, activeSubPage * itemsPerPage)

  const totalUserPages = Math.ceil(usersList.length / itemsPerPage) || 1
  const activeUserPage = Math.min(Math.max(1, userPage), totalUserPages)
  const paginatedUsers = usersList.slice((activeUserPage - 1) * itemsPerPage, activeUserPage * itemsPerPage)

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffSeconds = Math.floor((now.getTime() - date.getTime()) / 1000)

    if (diffSeconds < 60) return 'Just now'
    if (diffSeconds < 3600) return `${Math.floor(diffSeconds / 60)}m ago`
    if (diffSeconds < 86400) return `${Math.floor(diffSeconds / 3600)}h ago`
    return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })
  }

  // Body overflow lock when mobile sidebar or detail modal is open
  useEffect(() => {
    if (sidebar || detail) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [sidebar, detail])

  return (
    <div className="flex min-h-screen bg-[#030712]">
      {/* Mobile Backdrop */}
      {sidebar && (
        <div 
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden transition-opacity duration-300 animate-in fade-in" 
          onClick={() => setSidebar(false)} 
        />
      )}

      {/* Sidebar Drawer */}
      <aside className={`fixed inset-y-0 left-0 z-50 flex w-64 sm:w-60 lg:w-56 flex-col border-r border-border-subtle bg-[#030712] transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 ${sidebar ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex h-14 items-center justify-between border-b border-border-subtle px-4 sm:px-5">
          <div className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#C50000] text-[10px] font-bold text-white shadow-[0_0_10px_rgba(197,0,0,0.4)]">M</div>
            <span className="text-sm font-semibold text-text-primary font-display">MyOnlineJet</span>
          </div>
          <button 
            onClick={() => setSidebar(false)}
            className="flex h-7 w-7 items-center justify-center rounded-lg text-text-muted hover:text-white hover:bg-surface-card lg:hidden transition-colors"
            aria-label="Close menu"
          >
            <i className="fas fa-xmark text-sm" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-3 py-4">
          <div className="mb-6 flex items-center gap-3 rounded-xl bg-surface-card border border-border-subtle px-3.5 py-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#C50000] to-[#ff5252] text-xs font-semibold text-white shadow-md">
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
              <Link 
                key={item.href} 
                href={item.href}
                onClick={() => setSidebar(false)}
                className={`flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-all ${
                  item.active
                    ? 'bg-[#C50000]/10 text-[#C50000] border border-[#C50000]/20'
                    : 'text-text-muted hover:text-text-primary hover:bg-surface-card'
                }`}>
                <i className={`fas ${item.icon} w-4 text-center text-xs`} />
                {item.label}
              </Link>
            ))}

            {/* Notification Sidebar Shortcut */}
            <button
              onClick={() => {
                setShowNotifPanel(!showNotifPanel)
                setSidebar(false)
              }}
              className="flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-medium text-text-muted hover:text-text-primary hover:bg-surface-card transition-all"
            >
              <div className="flex items-center gap-3">
                <i className="fas fa-bell w-4 text-center text-xs" />
                <span>Notifications</span>
              </div>
              {unreadCount > 0 && (
                <span className="flex h-5 min-w-[20px] items-center justify-center rounded-full bg-[#C50000] px-1.5 text-[10px] font-bold text-white">
                  {unreadCount}
                </span>
              )}
            </button>
          </nav>
        </div>
        <div className="border-t border-border-subtle p-3">
          <button 
            onClick={() => {
              setSidebar(false)
              signOut({ callbackUrl: '/' })
            }}
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-border-subtle px-3 py-2.5 text-sm font-medium text-text-muted hover:text-[#C50000] hover:border-[#C50000]/30 transition-all">
            <i className="fas fa-right-from-bracket text-xs" />
            Sign out
          </button>
        </div>
      </aside>

      <div className="flex flex-1 flex-col min-w-0">
        <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b border-border-subtle px-4 lg:px-6 bg-[#030712]/80 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <button className="flex h-9 w-9 items-center justify-center rounded-xl border border-border-subtle bg-surface-card text-text-muted hover:text-text-primary lg:hidden transition-all" onClick={() => setSidebar(true)}>
              <i className="fas fa-bars text-sm" />
            </button>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-white font-display lg:hidden">Dashboard</span>
              {isAdmin && (
                <span className="rounded-md bg-[#C50000]/10 border border-[#C50000]/20 px-2 py-0.5 text-[10px] sm:text-xs font-semibold text-[#C50000]">
                  Admin
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-4">
            {/* Notification Bell Dropdown Button */}
            <div className="relative" ref={notifRef}>
              <button
                onClick={() => setShowNotifPanel(!showNotifPanel)}
                className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-border-subtle bg-surface-card text-text-muted hover:text-text-primary hover:border-[#C50000]/30 transition-all"
                aria-label="View notifications"
              >
                <i className="fas fa-bell text-sm" />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-[#C50000] px-1 text-[10px] font-bold text-white shadow-md">
                    {unreadCount > 99 ? '99+' : unreadCount}
                  </span>
                )}
              </button>

              {/* Dropdown Panel - Responsive Positioning */}
              {showNotifPanel && (
                <div className="fixed inset-x-3 top-16 sm:absolute sm:inset-auto sm:right-0 sm:top-full sm:mt-2 w-auto sm:w-96 rounded-xl border border-border-subtle bg-[#0b1020] p-4 shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="flex items-center justify-between border-b border-border-subtle/60 pb-3 mb-3">
                    <div className="flex items-center gap-2">
                      <i className="fas fa-bell text-xs text-[#C50000]" />
                      <h3 className="text-sm font-semibold text-text-primary font-display">Notifications</h3>
                      {unreadCount > 0 && (
                        <span className="rounded-full bg-[#C50000]/20 px-2 py-0.5 text-[10px] font-medium text-[#ff5252]">
                          {unreadCount} new
                        </span>
                      )}
                    </div>
                    {unreadCount > 0 && (
                      <button
                        onClick={() => handleMarkAsRead(undefined, true)}
                        className="text-[11px] font-medium text-text-muted hover:text-[#C50000] transition-colors"
                      >
                        Mark all read
                      </button>
                    )}
                  </div>

                  <div className="max-h-72 sm:max-h-80 space-y-2 overflow-y-auto pr-1 custom-scrollbar">
                    {notifications.length === 0 ? (
                      <div className="flex flex-col items-center justify-center py-8 text-center">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border-subtle bg-surface-hover mb-2">
                          <i className="fas fa-bell-slash text-xs text-text-muted" />
                        </div>
                        <p className="text-xs font-medium text-text-primary">No notifications yet</p>
                        <p className="text-[11px] text-text-muted mt-0.5">Admin updates will appear here</p>
                      </div>
                    ) : (
                      notifications.map(n => {
                        const style = notifIcon[n.type] || notifIcon.system
                        return (
                          <div
                            key={n._id}
                            onClick={() => handleNotifClick(n)}
                            className={`group flex items-start gap-3 rounded-lg border p-3 cursor-pointer transition-all ${
                              n.isRead
                                ? 'border-border-subtle/40 bg-surface-hover/30 text-text-muted hover:bg-surface-hover'
                                : 'border-border-subtle bg-surface-card text-text-primary hover:border-[#C50000]/30'
                            }`}
                          >
                            <div className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border ${style.bg}`}>
                              <i className={`fas ${style.icon} text-xs ${style.color}`} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between gap-1">
                                <p className={`text-xs font-semibold truncate ${n.isRead ? 'text-text-secondary' : 'text-text-primary'}`}>
                                  {n.title}
                                </p>
                                <span className="text-[10px] text-text-muted shrink-0">
                                  {formatTimeAgo(n.createdAt)}
                                </span>
                              </div>
                              <p className="text-xs text-text-muted mt-1 leading-snug break-words">
                                {n.message}
                              </p>
                            </div>
                            {!n.isRead && (
                              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#C50000]" />
                            )}
                          </div>
                        )
                      })
                    )}
                  </div>
                </div>
              )}
            </div>

            <Link href="/profile" className="hidden sm:inline-block text-sm text-text-muted hover:text-text-primary transition-colors">Profile</Link>
            <button onClick={() => signOut({ callbackUrl: '/' })} className="hidden sm:inline-block text-sm text-text-muted hover:text-[#C50000] transition-colors">Sign out</button>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto px-3.5 py-5 sm:px-6 sm:py-8 lg:px-8">
          {/* Admin Tab Switcher (Submissions vs User Management) */}
          {isAdmin && (
            <div className="mb-6 flex items-center gap-2 border-b border-border-subtle pb-3">
              <button
                onClick={() => setActiveTab('submissions')}
                className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === 'submissions'
                    ? 'bg-[#C50000] text-white shadow-md'
                    : 'bg-surface-card border border-border-subtle text-text-muted hover:text-text-primary'
                }`}
              >
                <i className="fas fa-inbox text-xs" />
                Submissions Dashboard
              </button>
              <button
                onClick={() => setActiveTab('users')}
                className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === 'users'
                    ? 'bg-[#C50000] text-white shadow-md'
                    : 'bg-surface-card border border-border-subtle text-text-muted hover:text-text-primary'
                }`}
              >
                <i className="fas fa-users-gear text-xs" />
                User Management
              </button>
            </div>
          )}

          {activeTab === 'submissions' ? (
            <>
              <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-lg sm:text-xl font-semibold text-text-primary font-display">Submissions Overview</h1>
                  <p className="mt-1 text-xs sm:text-sm text-text-secondary">
                    Welcome back, <span className="text-text-primary font-medium">{user.name}</span>
                  </p>
                </div>

                {isAdmin && filtered.length > 0 && (
                  <button
                    onClick={handleExportCSV}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-2 text-xs font-semibold text-emerald-400 hover:bg-emerald-500/20 transition-all shadow-sm self-start sm:self-auto"
                  >
                    <i className="fas fa-file-csv text-sm" />
                    Export CSV ({filtered.length})
                  </button>
                )}
              </div>

              {/* Stats Grid */}
              <div className="mb-6 sm:mb-8 grid grid-cols-2 gap-2.5 sm:gap-3.5 lg:grid-cols-4">
                {stats.map(s => {
                  const borderColors: Record<string, string> = {
                    Total: 'border-l-zinc-500',
                    Pending: 'border-l-amber-500 shadow-[inset_3px_0_0_0_rgba(245,158,11,0.2)]',
                    Reviewed: 'border-l-blue-500 shadow-[inset_3px_0_0_0_rgba(59,130,246,0.2)]',
                    Closed: 'border-l-emerald-500 shadow-[inset_3px_0_0_0_rgba(16,185,129,0.2)]',
                  }
                  const borderColor = borderColors[s.label] || 'border-l-border-subtle'
                  return (
                    <div key={s.label} className={`rounded-xl border border-border-subtle border-l-4 ${borderColor} bg-surface-card px-3.5 py-3 sm:px-5 sm:py-4 transition-all duration-300 hover:-translate-y-0.5`}>
                      <div className="flex items-center justify-between mb-1 sm:mb-2">
                        <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-text-muted">{s.label}</p>
                        <i className={`fas ${s.icon} text-xs sm:text-sm text-[#C50000]/50`} />
                      </div>
                      <p className="text-xl sm:text-2xl font-bold text-text-primary">{s.value}</p>
                    </div>
                  )
                })}
              </div>

              {/* Filter Pills */}
              <div className="mb-4 flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
                  <span className="shrink-0 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-text-muted mr-1">Filter</span>
                  {['all', 'contact', 'career', 'investor', 'partner', 'faq', 'advisory'].map(t => (
                    <button key={t} onClick={() => setFilter(t)}
                      className={`shrink-0 rounded-lg px-2.5 py-1.5 sm:px-3 text-xs font-medium transition-all ${
                        filter === t
                          ? 'bg-[#C50000] text-white shadow-sm'
                          : 'text-text-muted hover:text-text-primary hover:bg-surface-card border border-border-subtle'
                      }`}>
                      {t === 'all' ? 'All' : labels[t] || t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-border-subtle bg-surface-card overflow-hidden">
                {filtered.length === 0 ? (
                  !isAdmin && filter !== 'all' && forms[filter] ? (
                    <div className="p-4 sm:p-6">
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
                    <div className="flex flex-col items-center py-12 sm:py-20 px-4 text-center">
                      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl border border-border-subtle bg-surface-hover">
                        <i className="fas fa-inbox text-lg text-text-muted" />
                      </div>
                      <p className="text-sm font-medium text-text-primary">No submissions</p>
                      <p className="mt-1 text-xs text-text-secondary">Submit a form to track it here.</p>
                      {!isAdmin && (
                        <Link href="/contact" className="mt-4 sm:mt-5 rounded-lg bg-[#C50000] px-4 py-2 text-xs font-medium text-white hover:bg-[#C50000]/90 transition-colors">
                          New submission
                        </Link>
                      )}
                    </div>
                  )
                ) : (
                  <>
                    {/* Desktop View Table */}
                    <div className="hidden md:block overflow-x-auto">
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
                          {paginatedSubs.map((s, i) => {
                            const b = badge[s.status] || badge.pending
                            const indexOffset = (activeSubPage - 1) * itemsPerPage + i + 1
                            return (
                              <tr key={s._id} className="group border-b border-border-subtle/50 transition-colors hover:bg-surface-hover last:border-0">
                                <td className="relative px-5 py-3.5">
                                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#C50000] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                                  <div className="flex items-center gap-3">
                                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border-subtle bg-surface-hover">
                                      <i className={`fas ${icons[s.formType] || 'fa-file'} text-xs text-[#C50000]`} />
                                    </div>
                                    <div>
                                      <p className="text-sm font-medium text-text-primary">{labels[s.formType] || s.formType}</p>
                                      <p className="text-xs text-text-muted">#{indexOffset}</p>
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
                            )
                          })}
                        </tbody>
                      </table>
                    </div>

                    {/* Mobile View Card List */}
                    <div className="md:hidden divide-y divide-border-subtle/60">
                      {paginatedSubs.map((s, i) => {
                        const b = badge[s.status] || badge.pending
                        const indexOffset = (activeSubPage - 1) * itemsPerPage + i + 1
                        return (
                          <div 
                            key={s._id} 
                            onClick={() => setDetail(s)}
                            className="p-4 space-y-3 hover:bg-surface-hover/50 transition-colors cursor-pointer active:bg-surface-hover"
                          >
                            <div className="flex items-center justify-between gap-2">
                              <div className="flex items-center gap-2.5 min-w-0">
                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border-subtle bg-surface-card">
                                  <i className={`fas ${icons[s.formType] || 'fa-file'} text-xs text-[#C50000]`} />
                                </div>
                                <div className="min-w-0">
                                  <p className="text-sm font-semibold text-text-primary truncate">{labels[s.formType] || s.formType}</p>
                                  <p className="text-[10px] text-text-muted">Submission #{indexOffset}</p>
                                </div>
                              </div>
                              
                              <span className={`inline-flex items-center gap-1.5 rounded-full ${b.bg} px-2.5 py-0.5 text-[11px] font-medium shrink-0`}>
                                <span className={`h-1.5 w-1.5 rounded-full ${b.dot}`} />
                                {b.label}
                              </span>
                            </div>

                            {isAdmin && s.userId && (
                              <div className="rounded-lg border border-border-subtle/40 bg-[#090d19] p-2.5 flex items-center justify-between gap-2 text-xs">
                                <span className="text-text-muted truncate"><i className="fas fa-user text-[10px] mr-1 text-text-muted" />{s.userId.name}</span>
                                <span className="text-text-secondary truncate text-[11px]">{s.userId.email}</span>
                              </div>
                            )}

                            <div className="flex items-center justify-between pt-1 text-xs">
                              <span className="text-text-muted text-[11px] flex items-center gap-1">
                                <i className="far fa-clock text-[10px]" />
                                {new Date(s.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                              </span>
                              <button 
                                type="button" 
                                className="inline-flex items-center gap-1 text-xs font-semibold text-[#C50000] hover:underline"
                              >
                                View Details <i className="fas fa-chevron-right text-[9px]" />
                              </button>
                            </div>
                          </div>
                        )
                      })}
                    </div>

                    {/* Submissions Pagination Footer */}
                    {totalSubPages > 1 && (
                      <div className="flex items-center justify-between border-t border-border-subtle px-4 py-3 bg-[#070b14]/50 text-xs">
                        <span className="text-text-muted">
                          Page <strong className="text-text-primary">{activeSubPage}</strong> of {totalSubPages}
                        </span>
                        <div className="flex items-center gap-2">
                          <button
                            disabled={subPage <= 1}
                            onClick={() => setSubPage(p => Math.max(1, p - 1))}
                            className="rounded-lg border border-border-subtle bg-surface-card px-3 py-1.5 text-text-muted hover:text-white disabled:opacity-40 disabled:hover:text-text-muted transition-colors"
                          >
                            <i className="fas fa-chevron-left mr-1 text-[10px]" /> Prev
                          </button>
                          <button
                            disabled={subPage >= totalSubPages}
                            onClick={() => setSubPage(p => Math.min(totalSubPages, p + 1))}
                            className="rounded-lg border border-border-subtle bg-surface-card px-3 py-1.5 text-text-muted hover:text-white disabled:opacity-40 disabled:hover:text-text-muted transition-colors"
                          >
                            Next <i className="fas fa-chevron-right ml-1 text-[10px]" />
                          </button>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            </>
          ) : (
            /* User Management View for Admin */
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-lg sm:text-xl font-semibold text-text-primary font-display">User Directory & Roles</h1>
                  <p className="mt-1 text-xs sm:text-sm text-text-secondary">
                    Manage system permissions, view user accounts, and update access roles.
                  </p>
                </div>

                {/* User Search Input */}
                <div className="relative min-w-[260px]">
                  <i className="fas fa-search absolute left-3.5 top-1/2 -translate-y-1/2 text-xs text-text-muted" />
                  <input
                    type="text"
                    placeholder="Search by name or email..."
                    value={userSearch}
                    onChange={e => setUserSearch(e.target.value)}
                    className="w-full rounded-xl border border-border-subtle bg-surface-card pl-9 pr-4 py-2 text-xs text-white placeholder-text-muted focus:border-[#C50000] focus:outline-none transition-colors"
                  />
                  {userSearch && (
                    <button onClick={() => setUserSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-white text-xs">
                      <i className="fas fa-xmark" />
                    </button>
                  )}
                </div>
              </div>

              {/* User Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="rounded-xl border border-border-subtle bg-surface-card p-4 border-l-4 border-l-purple-500">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-text-muted mb-1">Total Users</p>
                  <p className="text-xl font-bold text-white">{usersList.length}</p>
                </div>
                <div className="rounded-xl border border-border-subtle bg-surface-card p-4 border-l-4 border-l-red-500">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-text-muted mb-1">Admins</p>
                  <p className="text-xl font-bold text-red-400">{usersList.filter(u => u.role === 'admin').length}</p>
                </div>
                <div className="rounded-xl border border-border-subtle bg-surface-card p-4 border-l-4 border-l-emerald-500">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-text-muted mb-1">General Users</p>
                  <p className="text-xl font-bold text-emerald-400">{usersList.filter(u => u.role === 'general').length}</p>
                </div>
                <div className="rounded-xl border border-border-subtle bg-surface-card p-4 border-l-4 border-l-blue-500">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-text-muted mb-1">Partners / Investors</p>
                  <p className="text-xl font-bold text-blue-400">{usersList.filter(u => ['partner', 'investor'].includes(u.role)).length}</p>
                </div>
              </div>

              <div className="rounded-xl border border-border-subtle bg-surface-card overflow-hidden">
                {usersLoading ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#C50000] border-t-transparent mb-3" />
                    <p className="text-xs text-text-muted">Loading user accounts...</p>
                  </div>
                ) : usersList.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center px-4">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl border border-border-subtle bg-surface-hover">
                      <i className="fas fa-user-slash text-lg text-text-muted" />
                    </div>
                    <p className="text-sm font-medium text-text-primary">No users found</p>
                    <p className="mt-1 text-xs text-text-muted">Try adjusting your search keywords.</p>
                  </div>
                ) : (
                  <>
                    {/* Desktop Users Table */}
                    <div className="hidden md:block overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-border-subtle">
                            <Th>User Profile</Th>
                            <Th>Auth Provider</Th>
                            <Th>Registered Date</Th>
                            <Th>Assigned Role</Th>
                          </tr>
                        </thead>
                        <tbody>
                          {paginatedUsers.map(u => {
                            const isUpdating = updatingUserRole === u.id
                            const userInitials = u.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2) || 'U'
                            return (
                              <tr key={u.id} className="border-b border-border-subtle/50 transition-colors hover:bg-surface-hover last:border-0">
                                <td className="px-5 py-3.5">
                                  <div className="flex items-center gap-3">
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#C50000] to-[#ff5252] text-xs font-semibold text-white">
                                      {userInitials}
                                    </div>
                                    <div>
                                      <p className="text-sm font-medium text-text-primary">{u.name || 'Unnamed User'}</p>
                                      <p className="text-xs text-text-muted">{u.email}</p>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-5 py-3.5">
                                  <span className="inline-flex items-center gap-1.5 rounded-md border border-border-subtle bg-surface-hover px-2.5 py-1 text-xs font-medium text-text-secondary capitalize">
                                    <i className={`fab ${u.authProvider === 'google' ? 'fa-google text-blue-400' : u.authProvider === 'apple' ? 'fa-apple text-white' : 'fa-key text-amber-400'} text-xs`} />
                                    {u.authProvider}
                                  </span>
                                </td>
                                <td className="px-5 py-3.5">
                                  <p className="text-sm text-text-secondary">{new Date(u.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
                                </td>
                                <td className="px-5 py-3.5">
                                  <select
                                    disabled={isUpdating}
                                    value={u.role}
                                    onChange={e => handleUserRoleChange(u.id, e.target.value)}
                                    className={`rounded-lg border border-border-subtle bg-[#0b1020] px-3 py-1.5 text-xs font-semibold text-white focus:border-[#C50000] focus:outline-none transition-colors ${
                                      u.role === 'admin' ? 'border-red-500/50 text-red-400' : ''
                                    }`}
                                  >
                                    <option value="general">General</option>
                                    <option value="admin">Admin</option>
                                    <option value="partner">Partner</option>
                                    <option value="investor">Investor</option>
                                    <option value="career">Career Candidate</option>
                                  </select>
                                </td>
                              </tr>
                            )
                          })}
                        </tbody>
                      </table>
                    </div>

                    {/* Mobile Users Cards */}
                    <div className="md:hidden divide-y divide-border-subtle/60">
                      {paginatedUsers.map(u => {
                        const isUpdating = updatingUserRole === u.id
                        const userInitials = u.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2) || 'U'
                        return (
                          <div key={u.id} className="p-4 space-y-3">
                            <div className="flex items-center justify-between gap-3">
                              <div className="flex items-center gap-3 min-w-0">
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#C50000] to-[#ff5252] text-xs font-semibold text-white">
                                  {userInitials}
                                </div>
                                <div className="min-w-0">
                                  <p className="text-sm font-semibold text-text-primary truncate">{u.name || 'Unnamed User'}</p>
                                  <p className="text-xs text-text-muted truncate">{u.email}</p>
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center justify-between pt-1 text-xs">
                              <span className="inline-flex items-center gap-1.5 rounded-md border border-border-subtle bg-surface-hover px-2 py-0.5 text-[11px] text-text-secondary capitalize">
                                {u.authProvider}
                              </span>

                              <div className="flex items-center gap-2">
                                <span className="text-[11px] text-text-muted">Role:</span>
                                <select
                                  disabled={isUpdating}
                                  value={u.role}
                                  onChange={e => handleUserRoleChange(u.id, e.target.value)}
                                  className="rounded-lg border border-border-subtle bg-[#0b1020] px-2.5 py-1 text-xs font-semibold text-white focus:border-[#C50000] focus:outline-none"
                                >
                                  <option value="general">General</option>
                                  <option value="admin">Admin</option>
                                  <option value="partner">Partner</option>
                                  <option value="investor">Investor</option>
                                  <option value="career">Career</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>

                    {/* Users Pagination Footer */}
                    {totalUserPages > 1 && (
                      <div className="flex items-center justify-between border-t border-border-subtle px-4 py-3 bg-[#070b14]/50 text-xs">
                        <span className="text-text-muted">
                          Page <strong className="text-text-primary">{activeUserPage}</strong> of {totalUserPages}
                        </span>
                        <div className="flex items-center gap-2">
                          <button
                            disabled={userPage <= 1}
                            onClick={() => setUserPage(p => Math.max(1, p - 1))}
                            className="rounded-lg border border-border-subtle bg-surface-card px-3 py-1.5 text-text-muted hover:text-white disabled:opacity-40 disabled:hover:text-text-muted transition-colors"
                          >
                            <i className="fas fa-chevron-left mr-1 text-[10px]" /> Prev
                          </button>
                          <button
                            disabled={userPage >= totalUserPages}
                            onClick={() => setUserPage(p => Math.min(totalUserPages, p + 1))}
                            className="rounded-lg border border-border-subtle bg-surface-card px-3 py-1.5 text-text-muted hover:text-white disabled:opacity-40 disabled:hover:text-text-muted transition-colors"
                          >
                            Next <i className="fas fa-chevron-right ml-1 text-[10px]" />
                          </button>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Responsive Detail Modal */}
      {detail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200" onClick={() => setDetail(null)}>
          <div className="absolute inset-0 bg-black/75 backdrop-blur-md" />
          
          <div 
            className="relative w-full max-w-2xl max-h-[92vh] sm:max-h-[85vh] flex flex-col overflow-hidden rounded-2xl border border-border-subtle bg-gradient-to-b from-[#0b1020] to-[#04060b] shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={e => e.stopPropagation()}
          >
            {/* Glowing top line */}
            <div className="h-1 w-full shrink-0 bg-gradient-to-r from-transparent via-[#C50000] to-transparent" />

            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-border-subtle/50 px-4 py-4 sm:px-6 sm:py-5 shrink-0">
              <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                <div className="flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl border border-[#C50000]/30 bg-[#C50000]/10 shadow-[0_0_15px_rgba(197,0,0,0.1)]">
                  <i className={`fas ${icons[detail.formType] || 'fa-file'} text-sm sm:text-base text-[#C50000]`} />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-sm sm:text-base font-bold text-white tracking-wide truncate">
                    {labels[detail.formType]} Submission
                  </h3>
                  <p className="text-[10px] sm:text-[11px] text-text-muted mt-0.5 flex items-center gap-1.5">
                    <i className="far fa-clock text-[9px]" />
                    {new Date(detail.createdAt).toLocaleString('en-IN', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                      hour12: true
                    })}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 sm:gap-3 shrink-0 ml-2">
                <span className={`inline-flex items-center gap-1.5 rounded-full ${(badge[detail.status] || badge.pending).bg} px-2.5 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-semibold uppercase tracking-wider`}>
                  <span className={`h-1.5 w-1.5 rounded-full ${(badge[detail.status] || badge.pending).dot}`} />
                  {(badge[detail.status] || badge.pending).label}
                </span>
                <button 
                  onClick={() => setDetail(null)} 
                  className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-xl border border-border-subtle bg-surface-card text-text-muted hover:text-white hover:border-[#C50000]/30 transition-all duration-200"
                >
                  <i className="fas fa-xmark text-xs sm:text-sm" />
                </button>
              </div>
            </div>

            {/* Modal Scrollable Content */}
            <div className="flex-1 overflow-y-auto px-4 py-4 sm:px-6 sm:py-5 space-y-4 sm:space-y-5 custom-scrollbar">
              
              {/* Admin Note Box */}
              {detail.adminNotes && (
                <div className="relative overflow-hidden rounded-xl border border-purple-500/20 bg-purple-500/5 px-4 py-3.5 shadow-[0_0_15px_rgba(168,85,247,0.05)]">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-purple-400 flex items-center gap-1.5 mb-1 font-display">
                    <i className="fas fa-comment-dots" />
                    Latest Message / Admin Note
                  </p>
                  <p className="text-xs sm:text-sm text-text-primary leading-relaxed break-words whitespace-pre-wrap">{detail.adminNotes}</p>
                </div>
              )}

              {/* Grid for Short Metadata */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5">
                {Object.entries(detail.data)
                  .filter(([k, v]) => String(v).length <= 80 && !['message', 'subject', 'thesis', 'notes'].includes(k))
                  .map(([k, v]) => {
                    const iconName = fieldIcons[k] || fieldIcons[k.toLowerCase()] || 'fa-circle-dot'
                    const displayLabel = k.replace(/([A-Z])/g, ' $1').trim()
                    const isCopied = copiedField === k
                    return (
                      <div 
                        key={k} 
                        onClick={() => handleCopy(k, String(v))}
                        title="Tap to copy value"
                        className="group/card relative rounded-xl border border-border-subtle bg-[#0c101d] px-3.5 py-2.5 sm:px-4 sm:py-3 flex items-start gap-2.5 sm:gap-3 transition-all duration-200 hover:border-text-muted/30 hover:bg-[#12182b] cursor-pointer"
                      >
                        <div className="mt-0.5 flex h-6 w-6 sm:h-7 sm:w-7 shrink-0 items-center justify-center rounded-lg bg-surface-card border border-border-subtle/50 text-[#C50000] transition-colors group-hover/card:bg-[#C50000]/10">
                          <i className={`fas ${iconName} text-[10px] sm:text-xs`} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-1">
                            <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-text-muted font-display">{displayLabel}</p>
                            <span className="opacity-70 sm:opacity-0 group-hover/card:opacity-100 transition-opacity duration-200">
                              <i className={`fas ${isCopied ? 'fa-check text-emerald-400' : 'fa-copy text-text-muted hover:text-white'} text-[10px]`} />
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm font-semibold text-[#fafafa] mt-0.5 truncate select-all">{String(v)}</p>
                        </div>
                        
                        {isCopied && (
                          <div className="absolute inset-0 bg-emerald-500/5 rounded-xl border border-emerald-500/20 pointer-events-none transition-all animate-pulse" />
                        )}
                      </div>
                    )
                  })}
              </div>

              {/* Full Width Long Paragraph Fields */}
              <div className="space-y-3.5 pt-1">
                {Object.entries(detail.data)
                  .filter(([k, v]) => String(v).length > 80 || ['message', 'subject', 'thesis', 'notes'].includes(k))
                  .map(([k, v]) => {
                    const iconName = fieldIcons[k] || fieldIcons[k.toLowerCase()] || 'fa-align-left'
                    const displayLabel = k.replace(/([A-Z])/g, ' $1').trim()
                    return (
                      <div key={k} className="rounded-xl border border-border-subtle bg-[#0c101d]/60 p-3.5 sm:p-4 space-y-1.5">
                        <div className="flex items-center gap-2 border-b border-border-subtle/40 pb-1.5 mb-1">
                          <i className={`fas ${iconName} text-xs text-[#C50000]`} />
                          <h4 className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-text-muted font-display">{displayLabel}</h4>
                        </div>
                        <p className="text-xs sm:text-sm leading-relaxed text-text-secondary whitespace-pre-wrap break-words">{String(v)}</p>
                      </div>
                    )
                  })}
              </div>
            </div>

            {/* Admin Controls Footer */}
            {isAdmin && (
              <div className="border-t border-border-subtle/50 bg-[#060a12]/80 px-4 py-4 sm:px-6 sm:py-5 space-y-3.5 shrink-0">
                <div className="flex items-center gap-2">
                  <i className="fas fa-sliders-h text-xs text-[#C50000]" />
                  <h4 className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-text-primary font-display">Administrator Controls</h4>
                </div>
                
                {/* Status Selection Buttons */}
                <div className="space-y-1.5">
                  <p className="text-[10px] sm:text-[11px] text-text-muted">Set Request Stage / Status:</p>
                  <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2">
                    {[
                      { status: 'pending', label: 'Pending', icon: 'fa-hourglass-start', color: 'hover:bg-amber-500/20 hover:text-amber-400 hover:border-amber-500/30' },
                      { status: 'reviewed', label: 'Under Review', icon: 'fa-magnifying-glass', color: 'hover:bg-blue-500/20 hover:text-blue-400 hover:border-blue-500/30' },
                      { status: 'approved', label: 'Approve & Close', icon: 'fa-check', color: 'hover:bg-emerald-500/20 hover:text-emerald-400 hover:border-emerald-500/30' },
                      { status: 'rejected', label: 'Reject & Close', icon: 'fa-xmark', color: 'hover:bg-red-500/20 hover:text-red-400 hover:border-red-500/30' },
                    ].map(btn => (
                      <button
                        key={btn.status}
                        disabled={updatingStatus}
                        onClick={() => handleUpdateStatus(btn.status)}
                        className={`flex items-center justify-center gap-1.5 rounded-lg border border-border-subtle bg-surface-card px-2.5 py-2 text-[11px] sm:text-xs font-semibold transition-all ${btn.color} ${
                          detail.status === btn.status
                            ? 'bg-[#C50000]/15 text-[#C50000] border-[#C50000]/30 shadow-[0_0_15px_rgba(197,0,0,0.08)]'
                            : 'text-text-secondary'
                        }`}
                      >
                        <i className={`fas ${btn.icon} text-[10px]`} />
                        {btn.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Send Notification Message */}
                <div className="space-y-1.5">
                  <label className="block text-[10px] sm:text-[11px] text-text-muted">Write Message / Status Note:</label>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="text"
                      placeholder="Type custom note (e.g. 'Application approved')"
                      value={noteText}
                      onChange={e => setNoteText(e.target.value)}
                      disabled={updatingStatus}
                      className="flex-1 rounded-xl border border-border-subtle bg-[#0b1020] px-3.5 py-2 text-xs text-white placeholder-text-muted focus:border-[#C50000] focus:outline-none transition-colors"
                    />
                    <button
                      disabled={updatingStatus || !noteText.trim()}
                      onClick={handleSendNote}
                      className="flex items-center justify-center gap-1.5 rounded-xl bg-[#C50000] px-4 py-2 text-xs font-semibold text-white hover:bg-[#C50000]/90 transition-colors disabled:opacity-50 shrink-0"
                    >
                      <i className="fas fa-paper-plane text-[10px]" />
                      Send Note
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
          height: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #2a2a2a;
          border-radius: 9999px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #C50000/60;
        }
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
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

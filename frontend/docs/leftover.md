# MyOnlineJet — Leftover Plan: Auth + Dashboard System

> **Goal:** Gate all 4 submission forms behind Sign In / Sign Up. After authentication, users can fill their relevant form. An Admin dashboard tracks all submissions across 4 categories.

---

## 1. User Flow Overview

```
[Public Site]
    │
    ▼
[Sign In / Sign Up Page]   ← Single auth entry point
    │
    ├─── New User → Sign Up (name, email, password, role selection)
    │
    └─── Existing User → Sign In
              │
              ▼
        [Role-Based Redirect]
              │
              ├── Career User     → /dashboard/career     → Fill Career Form
              ├── Partner User    → /dashboard/partner     → Fill Partner Form
              ├── Investor User   → /dashboard/investor    → Fill Investor Form
              ├── Contact User    → /dashboard/contact     → Fill Contact Form
              └── Admin           → /dashboard/admin       → Full tracking view
```

---

## 2. Auth Pages

### `/auth/sign-up`
**Fields:**
- Full Name *
- Email Address *
- Password * (min 8 chars)
- Confirm Password *
- I am a... * (Role Selection Radio / Dropdown)
  - `career` — Looking to join the team
  - `partner` — Want to partner with MOJ
  - `investor` — Interested in investing
  - `contact` — General inquiry / media / other

**Behavior:**
- On successful sign-up → redirect to the user's role-specific dashboard
- Email verification (optional Phase 2 addition)

---

### `/auth/sign-in`
**Fields:**
- Email Address *
- Password *
- Remember Me (checkbox)
- Forgot Password link

**Behavior:**
- On success → redirect to role-based dashboard
- Admin users redirect to `/dashboard/admin`

---

## 3. User Roles & Dashboard Routes

| Role | Dashboard Route | Can Access |
|------|----------------|------------|
| `admin` | `/dashboard/admin` | All submissions across all 4 categories |
| `career` | `/dashboard/career` | Career application form + own submission status |
| `partner` | `/dashboard/partner` | Partner application form + own submission status |
| `investor` | `/dashboard/investor` | Investor enquiry form + own submission status |
| `contact` | `/dashboard/contact` | Contact inquiry form + own submission status |

---

## 4. User Dashboard (Non-Admin)

Each non-admin user sees a **personal dashboard** with:

### Sections
1. **Welcome Banner** — Name, role badge, submission status pill (Pending / Under Review / Responded)
2. **Fill Your Form** — The relevant form (Career / Partner / Investor / Contact) embedded directly
3. **My Submission** — Summary card of what was submitted (read-only after submit)
4. **Status Timeline** — Step tracker: Submitted → Under Review → Responded
5. **Quick Links** — Relevant pages (e.g., for career users: Vision & Mission, Technology, Founder)

### States
- **Not yet submitted** → Show the form
- **Submitted (pending)** → Show read-only summary + "Under Review" status
- **Responded** → Show admin response/note (if any) + allow re-contact via Contact page

---

## 5. Admin Dashboard (`/dashboard/admin`)

### Overview Panel
- Total submissions count cards (4 categories):
  - 📋 Contact Inquiries
  - 💼 Career Applications
  - 🤝 Partner Applications
  - 💰 Investor Enquiries
- Recent activity feed (last 10 submissions across all types)

### Per-Category Tables

Each category tab shows a table:

| Column | Description |
|--------|-------------|
| # | Row number |
| Name | Submitter full name |
| Email | Submitter email |
| Date | Submission date/time |
| Key Field | e.g., Inquiry Type / Partnership Category / Area of Interest |
| Status | Pending / Under Review / Responded |
| Actions | View Details • Mark as Reviewed • Add Note • Archive |

### Submission Detail View (Modal or Sidebar)
- Full form data displayed (all fields)
- Internal note/comment field for admin
- Status update dropdown
- Email copy button (to reply via mail client)

### Filters & Search
- Filter by: Status, Date Range, Category
- Search by: Name, Email

### Export
- Export to CSV per category

---

## 6. Forms Mapping (Post-Login)

| User Role | Form | Key Change from Current |
|-----------|------|------------------------|
| `career` | Careers Application Form | Pre-fill name/email from auth. Submit goes to DB. |
| `partner` | Partner With Us Form | Pre-fill name/email from auth. Submit goes to DB. |
| `investor` | Investor Enquiry Form | Pre-fill name/email from auth. Submit goes to DB. |
| `contact` | Contact Form | Pre-fill name/email from auth. Submit goes to DB. |

**Public forms** (`/contact`, `/careers`, etc.) will show a banner:
> "Sign in to submit this form and track your inquiry status."
> [Sign In] [Sign Up]

---

## 7. Pages to Build (New)

| Page / Route | Type | Priority |
|-------------|------|----------|
| `/auth/sign-up` | New Page | 🔴 High |
| `/auth/sign-in` | New Page | 🔴 High |
| `/auth/forgot-password` | New Page | 🟡 Medium |
| `/dashboard` | Redirect (role-based) | 🔴 High |
| `/dashboard/admin` | New Page | 🔴 High |
| `/dashboard/career` | New Page | 🔴 High |
| `/dashboard/partner` | New Page | 🔴 High |
| `/dashboard/investor` | New Page | 🔴 High |
| `/dashboard/contact` | New Page | 🔴 High |

---

## 8. Backend Requirements (Phase 2)

### Auth
- [ ] JWT or session-based auth
- [ ] User table: `id`, `name`, `email`, `password_hash`, `role`, `created_at`
- [ ] Protected route middleware (Next.js middleware.ts)

### Database Tables

**`users`**
```
id | name | email | password_hash | role | created_at
```

**`submissions`**
```
id | user_id | type (career/partner/investor/contact) | data (JSON) | status | admin_note | created_at | updated_at
```

### API Routes (Next.js Route Handlers)
```
POST /api/auth/signup
POST /api/auth/signin
POST /api/auth/signout
GET  /api/auth/me

POST /api/submissions          ← Create new submission
GET  /api/submissions/mine     ← Get current user's submission
GET  /api/submissions/all      ← Admin only: get all submissions
PATCH /api/submissions/:id     ← Admin only: update status/note
```

---

## 9. Current Pages — Required Changes

| Page | Change Needed |
|------|--------------|
| `/contact` | Add "Sign in to submit" gate. Pre-fill fields if logged in. Wire `action` to API. |
| `/careers` | Same as above |
| `/partner-with-us` | Same as above |
| `/investors` | Same as above |
| All pages | Add user avatar / "My Dashboard" link in header when logged in |
| `Header.tsx` | Add Sign In button (logged out state) + user menu (logged in state) |

---

## 10. Implementation Order

```
Phase 1 — Auth Foundation
  ├── [ ] Design Sign In / Sign Up pages (UI)
  ├── [ ] Set up auth API routes (signup, signin, me)
  ├── [ ] Add middleware.ts for route protection
  └── [ ] Add auth state to Header (Sign In btn / user menu)

Phase 2 — User Dashboards
  ├── [ ] Career dashboard + wired form
  ├── [ ] Partner dashboard + wired form
  ├── [ ] Investor dashboard + wired form
  └── [ ] Contact dashboard + wired form

Phase 3 — Admin Dashboard
  ├── [ ] Admin overview panel + stats cards
  ├── [ ] Per-category submission tables with tabs
  ├── [ ] Detail view (modal / sidebar)
  ├── [ ] Status management + admin notes
  └── [ ] CSV export per category

Phase 4 — Polish
  ├── [ ] Email notification to admin on new submission
  ├── [ ] Confirmation email to user on submit
  ├── [ ] Forgot password flow
  └── [ ] Submission edit / re-submit logic
```

---

## 11. Notes & Decisions

> NOTE: The public-facing pages (`/contact`, `/careers`, etc.) should still be VISIBLE to unauthenticated users for SEO. Only FORM SUBMISSION requires authentication.

> NOTE: Role is set at sign-up and cannot be changed by the user. Admin can reassign roles from the admin dashboard if needed.

> TIP: Consider using NextAuth.js for the auth layer — it integrates cleanly with Next.js App Router and supports credentials, Google OAuth, etc. for future social login.

> WARNING: The `partner-with-us` page currently imports `PartnerEnhancements` locally (`./PartnerEnhancements`) not from the `components/` folder. This should be refactored before wiring up the form backend.

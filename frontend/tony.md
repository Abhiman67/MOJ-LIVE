# MyOnlineJet — Backend Plan

> **Historical planning document.** For the deployed system, use [`docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md), [`docs/API.md`](./docs/API.md), [`docs/DEPLOYMENT.md`](./docs/DEPLOYMENT.md), and [`docs/ENVIRONMENT.md`](./docs/ENVIRONMENT.md). This file contains earlier proposals and is not the current API contract.

## 1. Overview

The frontend (Next.js 15 static site) collects inquiries via client-side forms with no backend. This plan defines the backend system for form submission handling, an admin dashboard, and the data layer.

---

## 2. Forms to Backend

| Form | Location | Fields | Attachments |
|---|---|---|---|
| **Contact / Inquiry** | `/contact` | fullName, email, phone, organization, role, inquiryType, subject, message, areaOfInterest, geoFocus, investmentRange, timeline | PDF/DOCX/PPTX |
| **Advisor Interest** | Home modal | fullName, currentPosition, email, areaOfExpertise, briefBackground | No |
| **Career Registration** | Home modal | fullName, email, areaOfInterest, qualifications | No |
| **Subscribe** | `/subscribe` | email | No |
| **Whitepaper Request** | `/whitepapers` | name, email, organization, requestedWhitepaper | No |

---

## 3. Database Schema (MongoDB)

### `submissions`

```
{
  _id: ObjectId,
  formType: String,          // "contact" | "advisor" | "career" | "whitepaper"
  status: String,            // "new" | "reviewed" | "archived"
  data: Mixed,               // all form fields as JSON
  attachmentUrl: String?,
  attachmentName: String?,
  notes: [
    {
      text: String,
      createdAt: Date,
      adminId: ObjectId
    }
  ],
  tags: [String],
  submittedAt: Date,
  updatedAt: Date
}
```

### `subscribers`

```
{
  _id: ObjectId,
  email: String,
  status: String,            // "active" | "unsubscribed"
  source: String,            // "subscribe_page" | "contact_form" | "whitepaper"
  subscribedAt: Date,
  unsubscribedAt: Date?
}
```

### `admins`

```
{
  _id: ObjectId,
  email: String,
  name: String,
  passwordHash: String,
  role: String,              // "admin" | "superadmin"
  createdAt: Date,
  lastLogin: Date?
}
```

### `audit_log`

```
{
  _id: ObjectId,
  adminId: ObjectId,
  action: String,            // "login" | "status_update" | "delete" | "export"
  resource: String,          // "submission" | "subscriber"
  resourceId: ObjectId?,
  details: Mixed,
  timestamp: Date
}
```

---

## 4. API Endpoints

```
POST   /api/submissions          — Submit any form type
GET    /api/submissions          — List (paginated, filterable by formType/status)
GET    /api/submissions/:id      — Get single submission
PATCH  /api/submissions/:id      — Update status/notes/tags
DELETE /api/submissions/:id      — Soft delete

POST   /api/subscribers          — Subscribe
GET    /api/subscribers          — List subscribers
PATCH  /api/subscribers/:id      — Toggle status

POST   /api/upload               — Upload file attachment
GET    /api/uploads/:filename    — Serve uploaded file

POST   /api/auth/login           — Admin login (JWT)
POST   /api/auth/logout          — Invalidate token
GET    /api/auth/me              — Current admin profile

GET    /api/stats                — Dashboard stats
GET    /api/export/:type         — Export submissions as CSV
```

---

## 5. Admin Dashboard Routes

| Route | Purpose |
|---|---|
| `/dashboard/login` | Admin login page |
| `/dashboard` | Overview: counts by type, recent, trends |
| `/dashboard/submissions` | Filterable table (formType, status, date, search) |
| `/dashboard/submissions/:id` | Detail view with notes/actions |
| `/dashboard/subscribers` | Newsletter subscriber management |
| `/dashboard/settings` | Notification prefs, profile |

Each dashboard view offers:
- **Filter** by form type, status, date range
- **Search** across name / email / organization
- **Bulk actions** (mark reviewed, delete, export)
- **Export CSV** for selected rows
- **Notes / tags** for internal tracking

---

## 6. Authentication

- JWT-based auth with httpOnly cookies
- Session expiry: 24h with refresh token
- Rate limiting on login: 5 attempts per 15 min
- Audit logging for all admin actions

---

## 7. Notifications

- **Email** to `contact@myonlinejet.com` on every submission
- **Slack webhook** (optional) for real-time alerts
- **Auto-responder** to submitter based on form type

---

## 8. Tech Stack

| Component | Recommendation |
|---|---|
| **Framework** | Next.js API Routes (monorepo) or Express.js |
| **Database** | MongoDB (flexible schema for varied forms) |
| **File Storage** | Local `uploads/` → S3 / Cloudflare R2 (prod) |
| **Auth** | bcrypt + JWT (jsonwebtoken) |
| **Email** | Resend or Nodemailer + SMTP |
| **Dashboard UI** | Next.js App Router pages under `/dashboard` |
| **Validation** | Zod (shared types frontend/backend) |

---

## 9. Project Structure

```
backend/
├── src/
│   ├── models/           Mongoose schemas
│   ├── routes/           Express routes or Next API handlers
│   ├── middleware/        auth, validation, rate-limit
│   ├── services/          email, upload, export
│   ├── utils/             helpers, constants
│   └── config/            env vars, db connection
├── uploads/               dev file storage
├── package.json
└── .env
```

---

## 10. Implementation Priority

1. **Phase 1** — Contact form submission API + email notification
2. **Phase 2** — Admin auth + login page
3. **Phase 3** — Dashboard: submissions list, detail, basic stats
4. **Phase 4** — File uploads, CSV export, subscriber management
5. **Phase 5** — All form types wired up, audit logging, advanced filtering

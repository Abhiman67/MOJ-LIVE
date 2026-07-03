# Backend Plan for MyOnlineJet

## Objective

Build a secure backend and admin dashboard for MyOnlineJet that collects, stores, filters, tracks, and responds to all business requests coming from the Next.js frontend. The backend should support contact inquiries, partnership applications, investor leads, career applications, FAQ questions, early-access interest, newsletter subscriptions, resource downloads, and future operational data for vertiports and advanced air mobility services.

The first backend version should behave like a lightweight CRM and operations dashboard for the company.

## Current Frontend Context

The frontend is a Next.js application with pages for:

- Home and company information
- Contact inquiries
- Partner applications
- Investor enquiries
- Careers interest
- Early access
- Subscribe
- Reports and whitepapers
- Vertiports, technology, services, and ecosystem content
- FAQ and legal pages

Most forms currently exist as frontend-only forms. The backend should convert these forms into real submissions with validation, persistence, notifications, and dashboard workflows.

## Recommended Stack

- Runtime: Node.js with Next.js API routes or a separate Express/NestJS service
- Database: PostgreSQL
- ORM: Prisma
- Auth: NextAuth/Auth.js, Clerk, or custom JWT with secure HTTP-only cookies
- File storage: S3-compatible storage, Cloudinary, or Supabase Storage
- Email: Resend, SendGrid, Amazon SES, or SMTP
- Admin UI: protected Next.js dashboard under `/dashboard`
- Validation: Zod schemas shared between frontend and backend
- Rate limiting: Upstash Redis, Redis, or database-backed limits
- Deployment: Vercel for frontend/API routes, or separate backend on Render/Railway/Fly.io/AWS

For the cleanest phase-one implementation, use Next.js route handlers inside the existing frontend project, Prisma, PostgreSQL, and a protected `/dashboard` route.

## Main Backend Modules

### 1. Request Collection System

Create a central request model for all inbound submissions.

Request categories:

- General contact
- Partnership
- Investor enquiry
- Infrastructure or vertiport proposal
- Technology or eVTOL collaboration
- Media or press
- Careers
- Early access
- Newsletter subscription
- Reports or whitepaper access
- FAQ question

Each request should store:

- Request ID
- Category
- Full name
- Email
- Phone
- Organization
- Role or designation
- Subject
- Message
- Source page
- Status
- Priority
- Assigned owner
- Internal notes
- Tags
- Attachments
- Consent status
- IP address and user agent
- Created date
- Updated date

Recommended statuses:

- New
- Reviewed
- Qualified
- Needs more information
- In discussion
- Converted
- Rejected
- Archived

Recommended priorities:

- Low
- Normal
- High
- Critical

### 2. Contact Form API

Endpoint:

```text
POST /api/requests/contact
```

Handles the contact page form:

- Basic user details
- Inquiry type
- Subject
- Message
- Advanced business fields
- Optional attachment
- Privacy consent

Backend behavior:

- Validate required fields
- Sanitize text inputs
- Store the submission
- Upload attachment if present
- Send confirmation email to the user
- Notify the internal team
- Create dashboard item with `New` status

### 3. Partnership Application API

Endpoint:

```text
POST /api/requests/partnership
```

Handles partner-with-us applications:

- Full name
- Organization
- Website or LinkedIn
- Email
- Phone
- Partnership category
- City, state, country
- Asset location
- Organization description
- Partnership interests
- Asset or capability details
- Reason for partnership
- Additional notes
- Consent

Dashboard should allow filtering partnership requests by:

- Infrastructure or real estate
- Aviation/eVTOL/drone
- Technology provider
- Government/institutional
- Mobility/service provider
- Other

### 4. Investor Enquiry API

Endpoint:

```text
POST /api/requests/investor
```

Handles investor form data:

- Full name
- Organization or fund name
- Role
- Email
- Phone
- Location
- Investor type
- Investment stage preference
- Typical investment size
- Areas of interest
- Experience checkboxes
- Value beyond capital
- Investment thesis
- Deck or profile link
- Consent

Dashboard should support:

- Investor qualification status
- Investment range filter
- Stage preference filter
- Strategic value tags
- Private internal notes
- Follow-up reminders

### 5. Careers API

Endpoint:

```text
POST /api/requests/careers
```

Handles career interest and future applications:

- Candidate name
- Email
- Phone
- Role interest
- Experience level
- Portfolio or LinkedIn
- Resume attachment
- Long-answer responses
- Source page

Dashboard features:

- Candidate pipeline
- Role category
- Resume download
- Review status
- Interview notes
- Rejection/shortlist state

### 6. Newsletter and Early Access API

Endpoints:

```text
POST /api/subscribe
POST /api/early-access
```

Collect:

- Email
- Name, if available
- Interest category
- Source page
- Consent timestamp

Backend behavior:

- Prevent duplicate active subscriptions
- Store source attribution
- Send welcome email
- Allow unsubscribe token generation
- Export CSV for email campaigns

### 7. Reports and Whitepapers Access

Endpoints:

```text
GET /api/resources
POST /api/resources/:id/request-access
```

Use this for downloadable industry reports and whitepapers.

Resource fields:

- Title
- Slug
- Type: report, whitepaper, deck, PDF
- Description
- File URL
- Published status
- Access level: public, email-gated, private
- Download count

Request-access fields:

- Name
- Email
- Organization
- Role
- Reason for access
- Consent

Dashboard should show:

- Most requested resources
- Download trends
- Leads generated from resources

### 8. FAQ Question API

Endpoint:

```text
POST /api/faq/questions
```

Purpose:

- Let visitors submit questions not already covered in the FAQ.
- Store questions for content planning and sales insight.

Dashboard fields:

- Question
- Category
- Email, optional
- Status: new, answered, ignored, converted to FAQ
- Internal answer draft

### 9. Admin Dashboard

Route:

```text
/dashboard
```

The dashboard is the main backend product for the company team.

Core dashboard pages:

- Overview
- All requests
- Contact inquiries
- Partnership pipeline
- Investor pipeline
- Careers pipeline
- Subscribers and early access
- Resource downloads
- FAQ questions
- Admin users
- Settings

Overview widgets:

- Total requests
- New requests today
- High-priority requests
- Requests by category
- Requests by status
- Recent submissions
- Pending follow-ups
- Resource download count
- Newsletter subscriber count

Request list features:

- Search by name, email, organization, subject, or message
- Filter by category, status, priority, source page, date range, and assigned owner
- Sort by newest, oldest, priority, or last updated
- Bulk status updates
- CSV export
- Open request detail drawer/page

Request detail view:

- Full submitted data
- Contact information
- Attachment links
- Timeline of status changes
- Internal notes
- Tags
- Assignment
- Follow-up date
- Email action button
- Convert to partner/investor/candidate record

### 10. User Roles and Permissions

Roles:

- Super admin: full access
- Admin: manage requests and content
- Partnerships manager: partnership and contact requests
- Investor relations: investor requests only
- Careers manager: career applications only
- Viewer: read-only access

Security rules:

- Dashboard must require login
- Sensitive investor and career data should be role-restricted
- File attachments should use signed URLs
- Admin actions should be logged

### 11. Database Schema Draft

Core tables:

- `users`
- `requests`
- `request_notes`
- `request_attachments`
- `request_events`
- `subscribers`
- `resources`
- `resource_access_requests`
- `faq_questions`
- `tags`
- `request_tags`
- `settings`

Important request columns:

```text
id
category
status
priority
source_page
full_name
email
phone
organization
role
subject
message
payload_json
assigned_to_id
consent_accepted
ip_address
user_agent
created_at
updated_at
```

Use `payload_json` for category-specific fields so the backend can evolve without needing a migration for every new form field.

### 12. API Route Map

Public APIs:

```text
POST /api/requests/contact
POST /api/requests/partnership
POST /api/requests/investor
POST /api/requests/careers
POST /api/subscribe
POST /api/early-access
GET  /api/resources
POST /api/resources/:id/request-access
POST /api/faq/questions
```

Protected dashboard APIs:

```text
GET    /api/admin/requests
GET    /api/admin/requests/:id
PATCH  /api/admin/requests/:id
POST   /api/admin/requests/:id/notes
POST   /api/admin/requests/:id/assign
POST   /api/admin/requests/:id/attachments
GET    /api/admin/subscribers
GET    /api/admin/resources
POST   /api/admin/resources
PATCH  /api/admin/resources/:id
GET    /api/admin/analytics/overview
GET    /api/admin/export/requests.csv
```

### 13. Notifications

Internal notifications:

- Email company team when a high-value request arrives
- Separate templates for partnership, investor, careers, and general contact
- Optional Slack/Discord/webhook integration later

User emails:

- Submission received
- Request under review
- Follow-up required
- Partnership/investor/career next step
- Subscription confirmation
- Resource access link

### 14. Validation and Anti-Spam

Add:

- Zod validation for every API
- Honeypot field on public forms
- Rate limiting by IP and email
- reCAPTCHA/Turnstile for high-spam pages
- File type and size restrictions
- HTML/script sanitization
- Duplicate detection by email + category + recent time window

### 15. Privacy, Legal, and Compliance

Store:

- Privacy policy acceptance
- Terms acceptance where required
- Consent timestamp
- Source page
- IP address only if needed for abuse prevention

Add:

- Data deletion workflow
- Unsubscribe workflow
- Admin access logs
- Clear attachment retention policy
- No confidential document sharing unless formally requested

### 16. Analytics and Business Intelligence

Track:

- Leads by source page
- Conversion from page visit to form submit
- Category volume over time
- High-value partnership/investor leads
- Cities and regions mentioned in infrastructure proposals
- Resource downloads by organization type
- Most common FAQ questions

Future dashboard charts:

- Requests by category
- Requests by status
- Requests by city/state/country
- Partner pipeline value
- Investor pipeline stage distribution
- Newsletter growth

### 17. Implementation Phases

## Phase 1: Backend Foundation

- Add Prisma and PostgreSQL
- Create database schema
- Add shared Zod validation
- Build public APIs for contact, partnership, investor, careers, subscribe, and FAQ
- Store all requests in database
- Add basic email notifications
- Connect frontend forms to APIs

## Phase 2: Admin Dashboard MVP

- Add admin authentication
- Create `/dashboard`
- Build overview metrics
- Build all requests table
- Build request detail page
- Add status, priority, notes, assignment, and tags
- Add CSV export

## Phase 3: Resource and Content Backend

- Add resource management for reports and whitepapers
- Add email-gated downloads
- Add resource analytics
- Add FAQ question review flow
- Add subscriber export and segmentation

## Phase 4: Workflow Automation

- Add follow-up reminders
- Add request assignment rules
- Add email templates
- Add activity timeline
- Add webhook integrations
- Add duplicate lead detection

## Phase 5: Future Operations Layer

Prepare backend models for the larger MyOnlineJet product:

- Vertiport locations
- Infrastructure partner assets
- City demand analysis
- Route interest data
- eVTOL/operator partners
- Pilot corridors
- Booking or reservation interest
- Operational readiness statuses

This phase should only start after the request dashboard is stable.

## Recommended First Milestone

Build the smallest useful backend:

1. PostgreSQL + Prisma setup
2. `requests` table
3. `POST /api/requests/contact`
4. `POST /api/requests/partnership`
5. `POST /api/requests/investor`
6. Basic protected `/dashboard`
7. Requests list with filters
8. Request detail view with notes and status
9. Email notification to `contact@myonlinejet.com`

This gives the company a real operational backend immediately while leaving space for advanced dashboards, resources, analytics, and future air mobility platform features.

# API and data contract

All route handlers live under `app/api/**/route.ts`. The handler is the source of truth for exact validation and response text.

## Authentication endpoints

Auth.js owns `/api/auth/[...nextauth]`, including provider discovery, sign-in callbacks, sessions, and sign-out. The UI entry point is `/auth`.

## User endpoints

| Method | Route | Auth | Purpose |
| --- | --- | --- | --- |
| `POST` | `/api/user/register` | Public, rate-limited | Create a credentials user |
| `GET` | `/api/profile` | User | Read the current profile |
| `PUT` | `/api/profile` | User | Update allowed profile fields |
| `GET` | `/api/user/notifications` | User | List notifications and unread count |
| `PATCH` | `/api/user/notifications` | User | Mark a notification read |

## Submission endpoints

| Method | Route | Auth | Purpose |
| --- | --- | --- | --- |
| `POST` | `/api/forms/[type]` | User | Create `contact`, `career`, `investor`, `partner`, `faq`, or `advisory` submission |
| `GET` | `/api/forms/[type]` | Admin | List submissions for one form type |
| `POST` | `/api/reports/contribute` | Public, IP-rate-limited | Send an industry contribution to the configured notification email |

Form submissions are limited to 20 per account per minute. Registration and reports contributions have their own IP-based limits. Invalid form types and malformed/oversized payloads must return 400 without creating a submission.

## Admin endpoints

| Method | Route | Auth | Purpose |
| --- | --- | --- | --- |
| `GET` | `/api/admin/users` | Admin | Search/list users |
| `PUT` | `/api/admin/users/[id]/role` | Admin | Change a user's role, subject to self/last-admin safeguards |
| `GET` | `/api/admin/submissions` | Admin | Paginated submission list |
| `PATCH` | `/api/admin/submissions` | Admin | Update status and notes |

## Error conventions

- `400`: invalid JSON, missing fields, invalid type, invalid ID, or length/shape violation.
- `401`: no authenticated session for a user-level operation.
- `403`: authenticated user lacks admin permission.
- `404`: valid identifier but no matching record.
- `409`: duplicate registration.
- `429`: rate limit exceeded.
- `500`: unexpected server or dependency failure; inspect server logs without exposing internals to clients.

## Adding a new form type

1. Add the type to the `FormType` union and Mongoose enum.
2. Add it to the route handler allowlist.
3. Add explicit UI field validation and server-side length limits.
4. Confirm email labels and notification behavior in `lib/email.ts`.
5. Add the dashboard form/list behavior if admins must review it.
6. Add unauthorized, malformed, oversized, and happy-path tests/checks.

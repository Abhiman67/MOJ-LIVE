# Handover Acceptance Testing

Record the result of each test in the deployed test or production environment. Do not submit real personal data during testing.

| Area | Test | Expected result | Result | Evidence/date |
|---|---|---|---|---|
| Build | `npm ci` completes | Dependencies install without errors | `[ ]` | `[ ]` |
| Build | `npm run build` completes | Production build succeeds | `[ ]` | `[ ]` |
| Public site | Homepage opens | Layout and assets render correctly | `[ ]` | `[ ]` |
| Public site | Main navigation | All links resolve correctly | `[ ]` | `[ ]` |
| Responsive UI | Mobile and tablet views | No clipping or broken layout | `[ ]` | `[ ]` |
| SEO | `/sitemap.xml` and `/robots.txt` | Both return expected content | `[ ]` | `[ ]` |
| Auth | Registration | Test user can register when enabled | `[ ]` | `[ ]` |
| Auth | Social login | Enabled providers redirect and return correctly | `[ ]` | `[ ]` |
| Auth | Protected route | Unauthenticated user is redirected | `[ ]` | `[ ]` |
| Profile | Profile update | User profile saves and reloads | `[ ]` | `[ ]` |
| Forms | Contact/career/investor/partner/FAQ/advisory | Valid test submissions are stored | `[ ]` | `[ ]` |
| Dashboard | User submissions | User sees only permitted records | `[ ]` | `[ ]` |
| Admin | Admin submissions | Admin sees all permitted records | `[ ]` | `[ ]` |
| Admin | Status and notes | Admin changes persist | `[ ]` | `[ ]` |
| Security | Non-admin admin route | Returns forbidden response | `[ ]` | `[ ]` |
| Email | Notification test | Expected recipients receive message | `[ ]` | `[ ]` |
| Operations | PM2 reload | Application remains healthy after reload | `[ ]` | `[ ]` |
| Rollback | Known-good release | Previous release can be restored | `[ ]` | `[ ]` |

The handover is accepted only when the receiving owner can independently install, configure, build, deploy, log in, verify form persistence, inspect logs, and follow the rollback instructions.

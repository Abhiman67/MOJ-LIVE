# Credentials and Access Inventory

This document records ownership and transfer status only. Never write passwords, private keys, OAuth secrets, database connection strings, SMTP passwords, or API tokens in this file.

Approved transfer location: `[Company password manager / secret manager]`

Receiving owner: `[Name and company email]`

Handover date: `[DD Month YYYY]`

| Service | Access required | Current owner | New owner | Transfer status | Verified date |
|---|---|---|---|---|---|
| GitHub repository | Repository admin/maintainer | `[ ]` | `[ ]` | Not started | `[ ]` |
| Hosting/VPS | Server and deployment access | `[ ]` | `[ ]` | Not started | `[ ]` |
| Domain registrar | Domain ownership and renewal | `[ ]` | `[ ]` | Not started | `[ ]` |
| DNS provider | DNS records and TLS | `[ ]` | `[ ]` | Not started | `[ ]` |
| MongoDB Atlas | Project, database, backups | `[ ]` | `[ ]` | Not started | `[ ]` |
| SMTP/email provider | Sending and mailbox access | `[ ]` | `[ ]` | Not started | `[ ]` |
| Google OAuth | OAuth client and callback settings | `[ ]` | `[ ]` | Not started | `[ ]` |
| Apple OAuth | Service ID and callback settings | `[ ]` | `[ ]` | Not started | `[ ]` |
| LinkedIn OAuth | OAuth client and callback settings | `[ ]` | `[ ]` | Not started | `[ ]` |
| AWS | Account/services used by the project | `[ ]` | `[ ]` | Not started | `[ ]` |
| Google Analytics | Property/admin access | `[ ]` | `[ ]` | Not started | `[ ]` |
| Google AdSense | Property/admin access | `[ ]` | `[ ]` | Not started | `[ ]` |
| Crisp chat | Website/operator access | `[ ]` | `[ ]` | Not started | `[ ]` |
| News/blog platform | Publisher/admin access | `[ ]` | `[ ]` | Not started | `[ ]` |

## Ownership actions

- Move services from personal accounts to company-owned accounts where possible.
- Replace personal recovery email addresses and phone numbers.
- Enable two-factor authentication.
- Use separate development, test, and production credentials.
- Rotate credentials after transfer if they were previously shared outside the approved vault.
- Confirm the receiver can deploy, sign in, inspect logs, and access the database without the original owner.

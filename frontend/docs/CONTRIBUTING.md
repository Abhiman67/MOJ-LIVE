# Contributing

## Before you change code

1. Read [`ARCHITECTURE.md`](./ARCHITECTURE.md) and the documentation for the area you are changing.
2. Search for an existing component, route, model, or helper before adding a new one.
3. Confirm whether the route is public, user-protected, or admin-only.
4. Keep unrelated formatting and generated files out of the change.

## Branches and commits

Use a focused branch such as:

```text
codex/fix-ecosystem-links
codex/add-report-validation
```

Keep commits small and describe the behavior change, for example:

```text
fix: point ecosystem links to the canonical route
docs: add production deployment runbook
```

## Code review expectations

Reviewers should check:

- authorization is enforced in the server handler, not only in UI state;
- user input is normalized, validated, length-limited, and safely escaped in email/HTML contexts;
- new database queries use the shared connection helper and appropriate indexes;
- secrets and private data do not enter client bundles or logs;
- loading, error, empty, and success states are covered;
- mobile layout and keyboard/accessibility behavior remain usable;
- routes and links point to canonical paths;
- docs and `.env.example` are updated when behavior or configuration changes.

## Pull request checklist

```bash
cd frontend
npm run lint
npx tsc --noEmit
npm run build
```

Also include:

- what changed and why;
- routes or API endpoints affected;
- database/schema changes and migration/index implications;
- environment variable changes;
- how the change was tested;
- screenshots for meaningful UI changes;
- rollback considerations for deployment-affecting changes.

## Documentation standard

Document decisions and operational behavior, not obvious syntax. A useful page should answer:

- What does this subsystem do?
- Where is its source of truth?
- How is it configured?
- How is it tested?
- What can fail in production?
- How can the next engineer safely change or roll it back?

When implementation and documentation disagree, update the documentation in the same change and prefer the implementation as the current behavior until the change is deployed.

# Delivery

The default branch is `main`. Changes land on a short-lived branch, merge into
`dev`, and are promoted to `main` through a pull request.

1. Branch from `dev`, commit, and run `pnpm build`.
2. Merge into local `dev` and push with `git push origin dev`.
3. Open a `dev` → `main` pull request and merge after checks pass.
4. From a clean `main`, run `pnpm deploy` (`pnpm build && wrangler deploy`).
5. Verify the live URLs, then return the checkout to `dev`.

`pnpm install` is required once. Deployment needs Cloudflare authentication
and the active `qus0in.dev` zone. Docs-only changes need no deploy.

Settings:
- Ads: `src/ads-config.ts` (enabled, placeholder, provider, slots).
- Quotes: `src/quote-banner.json` (text, source, interval, link).
- GA4: `src/analytics-config.ts`.

Fonts are self-hosted; do not add a font CDN. See `docs/licenses.md`.

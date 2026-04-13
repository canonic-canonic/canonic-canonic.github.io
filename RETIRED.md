# ~/.canonic/canonic-org — RETIRED 2026-04-13

This Jekyll tree served `canonic.org` + `www.canonic.org` until Step H2b.
Retired 2026-04-13 via:

- **Brand shell** → `APPS/CANONIC-ORG/` + `apps-canonic` monorepo (H2a: `hadleylab-canonic 8467199a` + `CANONIC a6b36f4`, 2026-04-13)
- **Deep content** (FOUNDATION / INDUSTRIES / MAGIC, ex-GALAXY) → `~/.canonic/canonic-org/{FOUNDATION,INDUSTRIES,MAGIC}/**/index.md` walked by `APPS/CANONIC/app/scripts/compile-canonic-org-intel.mjs`, rendered via `lib/renderers/canonic-org-deep.tsx` under single catch-all `app/canonic-org/[...slug]/page.tsx`
- **DNS**: `canonic.org` + `www.canonic.org` CNAMEs patched from `canonic-org.pages.dev` → `apps-canonic.pages.dev`
- **Pages project**: `canonic.org` + `www.canonic.org` detached from legacy `canonic-org` Pages project, attached to `apps-canonic` via `build-deploy-apps --only=CANONIC`
- **Worker**: `~/.canonic/workers/canonic.org/` narrowed to a single route (`health.canonic.org/*`) — apex + www routes dropped via `APEX_RETIRED_FLEETS += "canonic.org"` in `~/.canonic/bin/build-domains`

142 leaf pages shipped (FOUNDATION=10, INDUSTRIES=46, MAGIC=86). Apex brand
shell + deep content both live on `apps-canonic` at CSS hash `e1aa787d59d6ddc8`.

## Out of scope for H2b (deferred)

- `/MAGIC/GALAXY/` — interactive knowledge graph + `galaxy.js`. Deferred to H2c.
- Figures (15 SVG chart types: PIPELINE, SCORE, AUDIT, FLOW, GAUGE, DONUT, AREA, BARS, TIMELINE, ARCHITECTURE, FUNNEL, TIER-CARDS, APP-GRID, WALLET-HERO, TRANSACTIONS). H2c.
- `timeline.js`, `wallet.js`, `talk.js` — never ported.
- `SERVICES/` tree — JSON-only data tree, not markdown, no sitemap entries. Not served.
- Dual-view toggle (gov vs web). Single view only.

## Rollback (24hr window)

1. Re-attach `canonic.org` + `www.canonic.org` to the `canonic-org` Pages project via CF API `POST /accounts/$ACCT/pages/projects/canonic-org/domains`
2. PATCH DNS CNAMEs back to `canonic-org.pages.dev`
3. Remove `"canonic.org"` from `APEX_RETIRED_FLEETS` in `~/.canonic/bin/build-domains`, regenerate, `cd ~/.canonic/workers/canonic.org && npx wrangler deploy` — restores apex + www worker routes

After 24hr: the `canonic-org` Pages project can be hard-deleted.

**2026-04-13 (same-day, J2 cleanup session):** `canonic-org` Pages project hard-deleted via CF API (`DELETE /accounts/$ACCT/pages/projects/canonic-org`) after 0 attached custom hostnames confirmed. The `canonic.org` worker (`~/.canonic/workers/canonic.org/`) still references `const ORIGIN = "https://canonic-org.pages.dev"` in dead code paths for non-health subdomains, but the only registered route is `health.canonic.org/*` which short-circuits to embedded HEALTH_HTML before touching ORIGIN, so deletion is benign. **Rollback above no longer possible** — the project is gone. If `canonic.org` apex needs to revert off `apps-canonic`, a new Pages project must be scaffolded via `wrangler pages project create canonic-org` and `_site/` redeployed.

## References

- H1 retirement marker template: `~/.canonic/hadleylab-org/RETIRED.md`
- H2b plan: `~/.claude/plans/next-session-canonic-org-h2b.md`
- Governed source: `APPS/CANONIC-ORG/CANON.md` (`view_type: brand_with_deep_content`)
- Walker: `APPS/CANONIC/app/scripts/compile-canonic-org-intel.mjs`
- Renderer: `APPS/CANONIC/app/lib/renderers/canonic-org-deep.tsx`
- Route: `APPS/CANONIC/app/app/canonic-org/[...slug]/page.tsx`

---

*canonic-org | RETIRED 2026-04-13 | H2b closed | Jekyll retired on both fleet brand surfaces*

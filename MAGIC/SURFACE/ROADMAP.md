---
sitemap: false
---

# SURFACE — ROADMAP

inherits: .

---

## Done
- [x] Deterministic build/sync/deploy pipeline: GOV tree is single source of truth (2026-02)
- [x] Jekyll remote_theme migration: all fleet sites build via GitHub Pages (2026-02)
- [x] Platform decision: Next.js 15 (web), SwiftUI (iOS/Mac), Kotlin Compose (Android). No WebView. No Electron. (2026-04-10)

## Now
- [ ] API layer — unified api.canonic.org, all platform clients consume. Plan Phase 1.
- [ ] Next.js consolidation — single app, all TALK instances as routes, SSR on CF Pages. Plan Phase 2.
- [ ] Cross-surface parity gate: WEB, iOS, and Android surfaces must pass identical `magic validate` checks before deploy

## Next
- [ ] Platform-as-projection: every new principal surface auto-scaffolds from GOV tree without manual configuration
- [ ] Replay-safe deployment: any fleet site can be rebuilt from GOV state at any historical commit

## Plan

Full multi-platform migration: `~/.claude/plans/app-multiplatform-migration.md`

GOV declares (CANON.md) → magic_lib enforces (build pipeline) → plan sequences (phases 1-5).

---

*SURFACE | ROADMAP | CANONIC*
<!-- _generated: build-surfaces -->

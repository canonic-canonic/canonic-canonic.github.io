# LEARNING

inherits: canonic-canonic/MAGIC/SERVICES

---

Evidence lane for DEPLOY.

## Patterns

| Date | Signal | Pattern | Source |
|------|--------|---------|--------|
| 2026-02 | ~~No auto-deploy~~ | ~~Fleet sites require manual git push~~ — CLOSED: magic-build.yml step 9c auto-deploys DESIGN + fleet sites on successful build | magic-build.yml |
| 2026-02 | ~~DESIGN-first ordering~~ | ~~DESIGN must deploy before fleet~~ — CLOSED: step 9c deploys DESIGN theme first, then fleet sites sequentially | magic-build.yml |
| 2026-02 | ~~FROZEN not checked~~ | ~~No freeze gate~~ — CLOSED: step 8e checks `is_frozen()`, step 9c skips deploy if FROZEN | magic-build.yml |
| 2026-02 | ~~No rollback mechanism~~ | ~~Must manually git reset~~ — CLOSED: `rollback` script in bin/ — resets fleet site to previous _generated commit, uses force-with-lease | bin/rollback |
| 2026-02-28 | SECRETS_EXPOSED | Two Cloudflare tokens hardcoded in .claude/settings.json permissions array — rotated and sanitized. .env.example template created for RUNTIME secrets. Secret-scan CI gate added. | Phase 0 hardening |
| 2026-02-28 | ROLLBACK_LIVE | `rollback` script in bin/ — resets fleet site to previous _generated commit, force-with-lease push | bin/rollback |
| 2026-02-28 | BUILD_DOMAINS_LIVE | `build-domains` in bin/ — provisions DNS from HTTP.md ## Zones + deploys vanity domain Workers from ## Domains | bin/build-domains |
| 2026-02-28 | DOCKERFILE_LIVE | Dockerfile at ~/.canonic/Dockerfile — python:3.11-slim, port 8255, nobody user, HEALTHCHECK via /api/v1/health | ~/.canonic/Dockerfile |
| 2026-02-28 | CI_PIPELINE_COMPLETE | magic-build.yml: validate → build → test-compiler → drift scan → LEDGER verify → freeze check → PRIVATE leak → secret scan → 255 gate → deploy → evidence | magic-build.yml |

---

*LEARNING | DEPLOY | SERVICES*
<!-- _generated: build-surfaces -->

# DEPLOY

inherits: canonic-canonic/MAGIC/SERVICES/DEPLOY

---

## Purpose

**DEPLOY governs the delivery pipeline from build validation through fleet deployment to rollback recovery.**

## Pipeline

```
1. magic validate → 255/255 required (CI gate)
2. build-surfaces → compile GOV to fleet artifacts
3. PRIVATE leak gate → reject if PRIVATE content in output
4. Deploy DESIGN theme → push to DESIGN repo (remote_theme dependency)
5. Deploy fleet sites → push to fleet repos
6. build-domains --dns → provision DNS for all governed zones
7. build-domains --deploy → deploy vanity domain Workers
8. Health check → verify fleet sites + vanity domains respond
```

## Deploy Targets

| Target | Method | Trigger |
|--------|--------|---------|
| DESIGN theme | git push to DESIGN repo | Any DESIGN change in build |
| Fleet sites | git push to fleet repos | Any scope change in build |
| Vanity domains | build-domains --deploy (Workers from HTTP.md ## Domains) | Any Domains change |
| DNS | build-domains --dns (records from HTTP.md ## Zones + ## Fleet + ## Domains) | Any zone change |
| Worker | wrangler deploy | Manual (TALK/src/worker.js changes) |
| API container | docker build + push | Manual (bin/api changes) |

## Rollback

```
rollback <site> [commit]
  — Reset fleet site to previous commit
  — Default: HEAD~1
  — Safety: confirm prompt, verify target is _generated commit
  — Push: git push --force-with-lease (safe force push)
```

## Container

```
Dockerfile:   ~/.canonic/Dockerfile
Base:          python:3.11-slim
Exposed:       port 8255
Health:        curl -f http://localhost:8255/api/v1/health
User:          nobody (non-root)
Includes:      bin/, VAULT/, LEDGER/, SERVICES/, CONFIG/
```

## Freeze Protection

During FROZEN state (governance freeze for release):
- Deploy blocked unless `--override` flag passed
- CI step checks FROZEN flag before push
- Manual deploys require explicit acknowledgment

---

---

## Interface

```
INPUT:
    GOV tree (canonic-canonic, hadleylab-canonic, principal repos)
    Build artifacts from build-surfaces
    DESIGN theme from canonic-canonic/DESIGN

OUTPUT:
    Deployed fleet sites (fleet repos)
    Deployed DESIGN theme (DESIGN repo)
    Deployed Worker (wrangler deploy → api.canonic.org)
    Deployed container (docker build + push → API + vault)

PIPELINE:
    1. magic validate → 255/255 required (CI gate)
    2. build-surfaces → compile GOV to fleet artifacts
    3. PRIVATE leak gate → reject if PRIVATE content in output
    4. Deploy DESIGN theme → push to DESIGN repo (remote_theme dependency)
    5. Deploy fleet sites → push to fleet repos
    6. build-domains --dns → provision DNS for all governed zones
    7. build-domains --deploy → deploy vanity domain Workers
    8. Health check → verify fleet sites + vanity domains respond

DEPLOY TARGETS:
    DESIGN theme:  git push to DESIGN repo (on any DESIGN change)
    Fleet sites:   git push to fleet repos (on any scope change)
    Worker:        wrangler deploy (manual — TALK/src/worker.js changes)
    Vanity domains: build-domains --deploy (Workers from HTTP.md ## Domains)
    DNS:           build-domains --dns (records from HTTP.md ## Zones + ## Fleet + ## Domains)
    API container: docker build + push (manual — bin/api changes)

ROLLBACK:
    rollback <site> [commit]
    Default: HEAD~1
    Safety: confirm prompt, verify target is _generated commit
    Push: git push --force-with-lease (safe force push)

CONTAINER:
    Base:     python:3.11-slim
    Port:     8255
    Health:   curl -f http://localhost:8255/api/v1/health
    User:     nobody (non-root)
    Includes: bin/, VAULT/, LEDGER/, SERVICES/, CONFIG/
```

---

*DEPLOY | SPEC | SERVICES*
<!-- _generated: build-surfaces -->

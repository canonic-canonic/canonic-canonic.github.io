---
sitemap: false
---

# CROSS-SURFACE — 255 MATRIX

inherits: canonic-canonic/MAGIC

---

## Axiom

**All transports/surfaces meet the same governance gate.**

---

## Matrix

| Surface | Required Gates | CI Workflow | Status |
|---------|----------------|-------------|--------|
| WEB (.io) | `magic validate` + route/link integrity | `magic-links.yml` | ENFORCED |
| iOS native | `magic validate` + native integration checks | — | DEFERRED (ship first) |
| Android native | `magic validate` + native integration checks | — | DEFERRED (ship first) |
| `magic://` | resolver determinism + identity chain + replay checks | — | DEFERRED (protocol not live) |

---

## WEB Gate Definitions

The WEB surface is live (canonic.org + hadleylab.org). These gates are enforced in CI:

### Gate 1: LINK INTEGRITY

```
FOR EACH scope IN governed_scopes:
  FOR EACH link IN scope.internal_links:
    IF NOT resolves(link)  → BROKEN_LINK (gate fails)
```

### Gate 2: ROUTE COMPLETENESS

```
FOR EACH scope WITH CANON.md:
  IF NOT exists(scope / index.md)  → MISSING_ROUTE (gate fails)
```

### Gate 3: CANON.JSON INTEGRITY

```
FOR EACH json IN compiled_output:
  IF json._generated.contract:
    IF NOT exists(json._generated.contract)  → ORPHANED_OUTPUT (gate fails)
```

### Gate 4: DEPLOY VALIDATION

```
FOR EACH deploy_target IN fleet_sites:
  IF NOT build_passed  → BLOCK_DEPLOY (gate fails)
  IF FROZEN AND NOT override  → BLOCK_DEPLOY (gate fails)
  IF PRIVATE_LEAK  → BLOCK_DEPLOY (gate fails)
```

### Gate 5: CONTAINER VALIDATION

```
FOR EACH container_image IN deploy_images:
  IF NOT docker_build_succeeds  → BUILD_FAIL (gate fails)
  IF NOT health_check_passes  → UNHEALTHY (gate fails)
```

---

## Parity Rules

1. No surface can bypass signature requirements
2. No surface can bypass governance scoring
3. Failure semantics must be equivalent across surfaces

---

## Constraints

```
MUST:     Maintain a testable gate list per surface
MUST:     Block release when any surface drops below policy threshold
MUST:     Enforce WEB gates (LINK INTEGRITY, ROUTE COMPLETENESS, CANON.JSON INTEGRITY) in CI
MUST:     Add surface CI gates when each surface ships (not before)
MUST NOT: Treat magic:// as exempt from 255 governance requirements
MUST NOT: Ship a surface without its CI gate
```

---

*MATRIX | MAGIC*
<!-- _generated: build-surfaces -->

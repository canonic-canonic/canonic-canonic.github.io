---
layout: service
title: "BUILD — CANON"
scope: BUILD
talk: true
sitemap: false
---

inherits: canonic-canonic/MAGIC/SERVICES

---

*BUILD | SPEC | CANONIC*

---

## Axiom

**Build is governed DAG traversal. Phases are nodes. Dependencies are edges. Parallelism is discovered, not hardcoded. GOV is the only hardcoded path.**

---

## Constraints

```
MUST:     Gate GOV boundary at compile time — build FAILS if runtime files exist in GOV
MUST:     Discover phases via glob (not hardcoded lists)
MUST:     Discover DAG edges from governed pipeline config
MUST:     Use GovGraph (galaxy BFS) for all cross-scope discovery
MUST:     Carry _generated marker on files written back to GOV
MUST:     Auto-scaffold missing closure artifacts from CANON.md
MUST:     Fail fast if pipeline config is missing or drifted
MUST:     Three environments — LOCAL, STAGING, PRODUCTION
MUST:     LOCAL build passes all gates before STAGING promotion
MUST:     STAGING passes smoke tests before PRODUCTION promotion
MUST:     PRODUCTION deploy requires explicit promotion (never auto-push)
MUST:     build-verify runs as terminal gate — no deploy without PASSED
MUST:     All paths discovered from GOV tree — no hardcoded fleet/theme/vault paths
MUST NOT: Push to PRODUCTION without passing LOCAL + STAGING gates
MUST NOT: Hardcode scope paths, fleet paths, repo paths, or phase paths
MUST NOT: Write runtime artifacts into GOV tree
MUST NOT: Maintain fallback paths for missing galaxy
```

---

*BUILD | CANON | SERVICES*
<!-- _generated: build-surfaces -->

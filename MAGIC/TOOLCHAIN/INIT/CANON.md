---
layout: service
title: "INIT — CANON"
scope: INIT
talk: true
sitemap: false
---

inherits: canonic-canonic/MAGIC/TOOLCHAIN

---

## Pipeline

Seven phases. Each phase completes before the next begins. Each phase is idempotent.

### Phase 1: RESOLVE

Determine the parent scope, inherits path, and scope slug.

```
INPUT:  Target directory path
OUTPUT: parent_scope (nearest ancestor CANON.md), inherits_path, scope_slug (SCREAMING_CASE)
GATE:   Parent CANON.md must exist. Inherits path must resolve.
```

### Phase 2: SCAFFOLD

Create the TRIAD. Scope enters at COMMUNITY tier.

```
INPUT:  scope_slug, inherits_path
OUTPUT: CANON.md, VOCAB.md, README.md
GATE:   All three files exist. CANON.md contains inherits + ## Axiom + MUST.
```

### Phase 3: PROMOTE

Add governance files to advance through tiers.

```
COMMUNITY → BUSINESS:   Add {SCOPE}.md
BUSINESS → ENTERPRISE:  Add COVERAGE.md + ROADMAP.md
ENTERPRISE → AGENT:     Add LEARNING.md
AGENT → MAGIC:          Score 255/255 on all 8 dimensions
```

### Phase 4: VALIDATE

Run magic validate. Enforce 255 before merge.

```
INPUT:  Scope directory
OUTPUT: 255/255 VALID or FAIL with dimension breakdown
GATE:   Score < 255 blocks merge to main.
```

### Phase 5: GALAXY

Register in the topology. Scope becomes routable.

```
INPUT:  Validated scope (255/255 from Phase 4)
OUTPUT: Scope present in scopes.json. ORG/USER routing operational.
GATE:   magic://SCOPE resolves.
```

### Phase 6: BUILD

Compile governance to runtime. The transaction fires.

```
INPUT:  Governed .md tree + TOOLCHAIN binaries
OUTPUT: Generated JSON (_generated provenance), fleet sites, deployed surfaces
GATE:   build completes. All outputs carry _generated. magic validate 255 on fleet.
```

### Phase 7: CONSOLIDATION

Stabilize. Eliminate drift. Lock for production.

```
INPUT:  Running system (Phases 1-6)
OUTPUT: Merged repos, extinct drift terms, _generated enforced, SHOP/CHAT operational
GATE:   Zero drift. All COVERAGE.md gaps = None. Production ready.
```

---

*INIT | SPEC | TOOLCHAIN*

---

## Axiom

**Every new scope enters the world the same way.**

Initialization is a governed process. A scope is not born partial — it bootstraps through phases, each phase validated, until it reaches MAGIC 255. The INIT contract ensures no scope is hand-created, no TRIAD is incomplete, and no inherits path is left unresolved.

---

## Constraints

```
MUST:     Scaffold TRIAD first (CANON.md + VOCAB.md + README.md) — COMMUNITY tier before anything else
MUST:     Resolve inherits path before generating COVERAGE — parent must exist
MUST:     Promote through tiers in order (COMMUNITY → BUSINESS → ENTERPRISE → AGENT → MAGIC)
MUST:     Validate 255 before merge — no partial scopes on main
MUST:     Generate scope slug from directory name (SCREAMING_CASE, singular)
MUST:     INIT is idempotent — running twice produces the same result
MUST NOT: Hand-create partial scopes — use the INIT pipeline
MUST NOT: Skip TRIAD — every scope needs CANON + VOCAB + README at minimum
MUST NOT: Create scopes with broken inherits paths
```

---

*INIT | CANON | TOOLCHAIN*
<!-- _generated: build-surfaces -->

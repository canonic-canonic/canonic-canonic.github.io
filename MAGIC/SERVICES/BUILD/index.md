---
layout: default
scope: BUILD
title: "BUILD"
description: "Build is governed DAG traversal. Phases are nodes. Dependencies are edges. Parallelism is discovered, not hardcoded. GOV is the only hardcoded path."
footerTagline: "BUILD"
accent: "#00ff88"
accent_rgb: "0, 255, 136"
talk: side
view: web
views:
  - gov
  - web
  - tex
pdf: /MAGIC/SERVICES/BUILD/build.pdf
downloads:
  - label: "PDF"
    href: "/MAGIC/SERVICES/BUILD/build.pdf"
hero:
  badge: BUILD
  title: "BUILD"
  description: "Build is governed DAG traversal. Phases are nodes. Dependencies are edges. Parallelism is discovered, not hardcoded. GOV is the only hardcoded path."
  cta:
    - label: "Open BUILD"
      href: /MAGIC/SERVICES/BUILD/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

## Constraints

```
MUST:     Gate GOV boundary at compile time — build FAILS if runtime files exist in GOV
MUST:     Discover phases via glob (not hardcoded lists)
MUST:     Discover DAG edges from governed pipeline config
MUST:     Use GovGraph (galaxy BFS) for all cross-scope discovery
MUST:     Carry _generated marker on files written back to GOV
MUST:     Auto-scaffold missing closure artifacts from CANON.md
MUST:     Fail fast if pipeline config is missing or drifted
MUST NOT: Hardcode scope paths, fleet paths, repo paths, or phase paths
MUST NOT: Write runtime artifacts into GOV tree
MUST NOT: Maintain fallback paths for missing galaxy
```

---

*BUILD | CANON | SERVICES*

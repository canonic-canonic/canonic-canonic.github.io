---
layout: default
scope: LEARNING
title: "LEARNING"
description: "LEARNING is INTEL applied — governed discovery extraction at scale, the IDF generalized beyond patents to every scope."
footerTagline: "LEARNING"
accent: "#00ff88"
accent_rgb: "0, 255, 136"
talk: side
view: web
views:
  - gov
  - web
  - tex
pdf: /MAGIC/SERVICES/LEARNING/learning.pdf
downloads:
  - label: "PDF"
    href: "/MAGIC/SERVICES/LEARNING/learning.pdf"
hero:
  badge: LEARNING
  title: "LEARNING"
  description: "LEARNING is INTEL applied — governed discovery extraction at scale, the IDF generalized beyond patents to every scope."
  cta:
    - label: "Open LEARNING"
      href: /MAGIC/SERVICES/LEARNING/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

- **LEARNING_IS_INTEL_APPLIED** — INTEL is the primitive (what you KNOW = WORK); LEARNING is the service that extracts discovery at scale.
- **IDF_IS_ARCHETYPE** — the Invention Disclosure Form is the archetype: structured records capturing what was discovered, when, by whom, with what evidence; LEARNING generalizes this to all scopes.
- **EVERY_SCOPE_HAS_LEARNING_MD** — every scope has `LEARNING.md` with the `Date | Signal | Pattern | Source` table; it is the compact governed form.
- **GRADIENTS_BACKPROPAGATE** — discoveries backpropagate gradients to upstream scopes; LEDGER streams (TALK, CONTRIBUTE, EMAIL, PROVISION) are INTEL sources that each become a LEARNING row.
## Constraints

```
MUST:     Compose INTEL primitive — every discovery evidence-linked
MUST:     Follow governed record shape (generalized IDF)
MUST:     Source from governed operations only — no fabricated patterns
MUST:     Backpropagate gradients to upstream scopes
MUST:     Every scope has LEARNING.md — the pattern table is the compact form
MUST:     LEARNING.md pattern table: Date | Signal | Pattern | Source
MUST:     Ingest LEDGER streams — TALK, CONTRIBUTE, EMAIL, PROVISION are INTEL sources
MUST:     Every ingested LEDGER entry becomes a LEARNING.md pattern row
MUST NOT: Fabricate discoveries
MUST NOT: Store unstructured data outside governed record shape
MUST:     GC frozen epochs — after rotation, delete the archive file (rotation event in active LEARNING.md is the record)
MUST NOT: Bypass provenance chain — every gradient traces to evidence
MUST NOT: Ignore LEDGER streams — silence is not governance
MUST:     Flat service layout — no singleton stage directories
MUST:     CAS fanout — git-style 2-char prefix buckets (hash[:2]/hash[2:])
MUST:     Manifest sharding — one shard per signal type, thin index
MUST:     Incremental discovery — checkpoint per repo, scan only new commits
MUST NOT: Store 100K+ entries in a single manifest file
MUST NOT: Store 100K+ files in a single flat CAS directory
MUST:     Consume patterns — build reads LEARNING.md back into governance recommendations
MUST:     Surface regression signals — repeated DEBIT:DRIFT on a scope triggers intervention alert
MUST:     Surface growth signals — repeated MINT:WORK on a scope triggers expansion recommendation
MUST:     Feed INTEL — consumed patterns wire into system prompts via CANON.json intel_refs
MUST NOT: Capture without consumption — write-only LEARNING is not LEARNING
MUST:     Novelty gate — candidates with <20% new keywords vs existing scope LEARNING.md are MARGINAL (logged, not appended)
MUST:     Cross-scope propagation — CROSS_INTEL targets receive axiom-relevant patterns as CROSS_PROPAGATED rows
MUST:     Emit LEARNING-METRICS.json — promotion rate, fidelity, scope velocity, novelty distribution per build
MUST NOT: Pollute fallback scope — unroutable patterns stage in LEARNING-UNROUTED.md, never CLAUDE/LEARNING.md
MUST:     Trivial filter shared — TRIVIAL_PATTERNS (>=50 entries) + length gate (<15 chars = trivial)
MUST:     Synthesis dedups boundary refs by hash BEFORE CAS resolution. BOUNDARIES shards overlap (one commit surfaces under ~5 signals on average); resolving every ref individually wastes 80%+ of its disk-I/O budget on identical content. Coverage merges on conflict: GAP wins over COVERED, since synthesis dedups by description and the worst-case coverage is honest.
MUST:     Synthesis is idempotent under unchanged input. A BOUNDARIES fingerprint (mtime+size over BOUNDARIES.json + every shard) short-circuits re-synthesis when inputs haven't changed. Fingerprint persists to `services/LEARNING/.patterns-fingerprint` (transient; gitignored).
```

---

*LEARNING | CANON | SERVICES*

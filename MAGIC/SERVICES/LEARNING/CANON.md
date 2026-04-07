---
layout: service
title: "LEARNING — CANON"
scope: LEARNING
talk: true
sitemap: false
---

inherits: canonic-canonic/MAGIC/SERVICES

---

## Purpose

**LEARNING is the governed discovery service. INTEL primitive applied as operational gradients.**

INTEL (primitive) is what you KNOW = WORK. LEARNING (service) extracts governed discoveries at scale — the gradients, the deltas, the patterns that emerge from WORK. IDFs (Invention Disclosure Forms) are the archetype. LEARNING generalizes IDFs to every governed scope.

---

## Composition

```
Primitive:  INTEL (what you KNOW = WORK)
Service:    LEARNING (governed discovery extraction)
Archetype:  IDF (Invention Disclosure Form — PATENTS domain)
Instance:   {PRINCIPAL}/SERVICES/LEARNING/ (inherits SERVICES/LEARNING)
Dimension:  LEARNING.md exists in every scope (pattern table)
```

---

## Pipeline

```
LEDGER streams → learning-ingest → GOV LEARNING.md → build-surfaces → LEARNING.json
```

### Ingest Sources

| Source | LEDGER Type | Signal |
|--------|------------|--------|
| Git commits | GRADIENT | GOVERNANCE_DELTA |
| TALK sessions | TALK | SESSION_LEDGERED |
| Contributions | CONTRIBUTE | CONTRIBUTION_RECEIVED |
| Correspondence | EMAIL | CORRESPONDENCE_SENT |
| Infrastructure | PROVISION | INFRASTRUCTURE_PROVISIONED |
| Payments | SHOP | PAYMENT_RECEIVED |
| Auth events | AUTH | AUTH_EVENT |
| Omics queries | OMICS | OMICS_QUERY |

### Ingest Process

```
1. Read LEDGER entries since last checkpoint
2. For each entry: derive scope, signal, pattern summary
3. Append pattern row to scope's LEARNING.md:
     | Date | Signal | Pattern | Source |
4. Update checkpoint (~/.canonic/learning/ledger-sync.json)
5. Backpropagate to parent scopes (gradient aggregation)
```

---

## Storage Architecture

### CAS (Content-Addressable Store)

```
~/.canonic/learning/PATTERNS/
├── {hash[:2]}/
│   └── {hash[2:]}.json       — individual pattern record
└── INDEX.json                 — thin manifest (hash → scope + date)
```

Git-style 2-char prefix buckets. No flat directory with 100K+ files.

### Manifest Sharding

```
~/.canonic/learning/BOUNDARIES/
├── {hash[:2]}/
│   └── {hash[2:]}.json       — individual boundary record
├── BOUNDARIES.json            — thin index (hash → type + scope)
└── shard/
    └── {SIGNAL_TYPE}.json     — per-signal-type shard
```

6 boundary types: NEW_TERM, NEW_SCOPE, NEW_COMPOSITION, NEW_CONSTRAINT, EVOLUTION, EXTINCTION.

### Checkpoint

```
~/.canonic/learning/ledger-sync.json
{
  "last_ledger_id": "<hash>",
  "last_ts": "<ISO 8601>",
  "repos": { "<repo>": "<last_commit_scanned>" }
}
```

Incremental discovery — per-repo checkpoint, scan only new commits.

---

## Runtime Structure

```
~/.canonic/services/LEARNING/
├── discover.py               — pattern detection
├── scan.py                   — boundary scanning
├── learn.py                  — adaptive learning
├── propagate.py              — pattern propagation
├── boundary.py               — boundary classification
├── BOUNDARIES.json           — boundary type definitions
└── PATTERNS.json             — learned patterns (hash-keyed)

~/.canonic/bin/learning-ingest  — LEDGER → LEARNING.md pipeline
```

---

## Build Integration

```
build step 10b:  ledger-sync           — KV ledger → LEARNING.md
                 learning-ingest       — LEDGER → GOV LEARNING.md (soft — don't break build)
build step 10c:  learning-consume      — LEARNING.md → COVERAGE.md recommendations (soft gate)
build surfaces:  build-surfaces        — LEARNING.md → LEARNING.json
                                         COVERAGE.json includes learning-derived rows
```

---

## Consumption

LEARNING is not a ledger — it is a governor. Capture without consumption is not LEARNING.

### Read-Back Pipeline

```
build → read LEARNING.md → detect regression/growth/stale patterns → surface in COVERAGE.md
```

### Signals

| Signal | Trigger | Output |
|--------|---------|--------|
| REGRESSION | 3+ DEBIT:DRIFT on same scope within epoch | COVERAGE.md gap row |
| GROWTH | 3+ MINT:WORK on same scope within epoch | COVERAGE.md strength row |
| STALE | No LEARNING.md entry for 30+ days | COVERAGE.md stale row |

### INTEL Wiring

Consumed patterns wire into system prompts via `CANON.json intel_refs`. The system doesn't just record what happened — it tells you what to do next. Patterns that repeat become constraints. Constraints that hold become dimensions. Dimensions that validate become tiers.

---

## Differentiation

| | INTEL (primitive) | LEARNING (service) |
|---|---|---|
| Layer | Axiom | Composition |
| Form | File (INTEL.md) | Directory (SERVICES/LEARNING/) |
| Function | Cross-axiomatic knowledge = WORK | Governed discovery extraction = gradients |
| Scope | Every scope | Per-principal service instance |
| Analogy | The work itself | The IDF that captures what the work discovered |

---

## Record Shape (Generalized IDF)

### Full Record (service-level)

```
Pattern:      What was discovered
Date:         When the gradient was observed
Priority:     Source evidence (commit SHA, governed operation)
Dimensions:   MAGIC 8-dimension validation
Assertions:   Structured claims about the discovery
Evidence:     Provenance chain (commit + file)
References:   Related patterns across scopes
Gradient:     What changed — the delta (novelty)
```

### Compact Record (scope-level LEARNING.md)

Every scope's LEARNING.md uses the pattern table — the compact form:

```
| Date | Signal | Pattern | Source |
```

This is the IDF distilled: Date = Filing Date, Signal = Title, Pattern = Claims, Source = Evidence.

---

## Patterns

| Date | Signal | Pattern | Source |
|------|--------|---------|--------|
| 2026-02-19 | IDFs are the LEARNING archetype | Invention Disclosure Forms capture governed discoveries in patent domain; LEARNING generalizes this to ALL scopes | IDF-001 + user insight |
| 2026-02-19 | LEARNING = gradients | LEARNING captures the delta — what changed, what was discovered, what's new. Every gradient evidence-linked. | SERVICES/LEARNING/CANON.md |
| 2026-02-19 | INTEL = WORK | INTEL primitive = what you KNOW = WORK. Every service does WORK, therefore every service composes INTEL. | SERVICES/CANON.md |
| 2026-02-19 | Compact form is the pattern table | Date/Signal/Pattern/Source is the governed format — IDF distilled to 4 columns | Root LEARNING.md convention |
| 2026-02-19 | Backpropagation is core operation | Patterns extracted from governed operations propagate upstream to parent scopes | SERVICES/LEARNING/CANON.md |
| 2026-02-19 | LEARNING.md exists in every scope | Governance dimension file present at every level — the scope's gradient record | MAGIC 255 dimension |
| 2026-02-26 | ARCHITECTURE | CAS fanout: git-style 2-char prefix for BOUNDARY and PATTERN stores | Scalability at 193K+ objects |
| 2026-02-26 | ARCHITECTURE | Manifest sharding: BOUNDARIES.json split by signal type (6 shards + index) | 23.8MB monolith eliminated |
| 2026-02-26 | ARCHITECTURE | Incremental discovery: per-repo checkpoint for resumable boundary detection | Full rescan eliminated |
| 2026-02-26 | ARCHITECTURE | Flat service layout: stage scripts colocated, singleton dirs removed | LEARNING/LEARNING/ double eliminated |
| 2026-02-27 | PIPELINE | LEDGER → learning-ingest → GOV LEARNING.md → build-surfaces → LEARNING.json | Infra audit |
| 2026-02-27 | CONSUMPTION | Capture without consumption is not LEARNING — build reads LEARNING.md back, detects regression/growth/stale, surfaces in COVERAGE.md | SERVICES/LEARNING/CANON.md |
| 2026-02-27 | INTEL WIRING | Consumed patterns wire into system prompts via CANON.json intel_refs — the system tells you what to do next | SERVICES/LEARNING/CANON.md |

---

---

## Interface

```
INPUT:
    LEDGER streams (GRADIENT, TALK, CONTRIBUTE, EMAIL, PROVISION, SHOP, AUTH, OMICS)
    Git commits (per-repo incremental scan)
    Checkpoint: ~/.canonic/learning/ledger-sync.json

OUTPUT:
    GOV LEARNING.md pattern rows:  Date | Signal | Pattern | Source
    CAS store:  ~/.canonic/learning/PATTERNS/{hash[:2]}/{hash[2:]}.json
    Boundaries: ~/.canonic/learning/BOUNDARIES/{hash[:2]}/{hash[2:]}.json
    Manifests:  ~/.canonic/learning/BOUNDARIES/shard/{SIGNAL_TYPE}.json

PIPELINE:
    LEDGER streams → learning-ingest → GOV LEARNING.md → build-surfaces → LEARNING.json

COMMANDS:
    learning-ingest          — LEDGER → GOV LEARNING.md (soft — don't break build)
    discover.py              — pattern detection from governed operations
    scan.py                  — boundary scanning across scopes
    propagate.py             — pattern propagation to parent scopes
    boundary.py              — boundary classification (6 types)

BUILD INTEGRATION:
    step 10b:  ledger-sync → learning-ingest (soft gate)
    surfaces:  build-surfaces → LEARNING.md → LEARNING.json
```

---

## Record Shape

The LEARNING record generalizes the IDF structure:

| Field | IDF Origin | LEARNING Generalization |
|-------|-----------|------------------------|
| Pattern | Title | What was discovered |
| Date | Filing Date | When the gradient was observed |
| Priority | Priority Claim | Source evidence (commit, operation, observation) |
| Dimensions | MAGIC Dimensions | 8-dimension validation (maps to 255) |
| Assertions | Claims | Structured claims about the discovery |
| Evidence | Commit/File Evidence | Provenance chain |
| References | Cross-References | Related patterns across scopes |
| Gradient | Novelty Statement | What changed — the delta |

---

## Consumption

```
PIPELINE (read-back):
    build → read LEARNING.md → detect regression/growth patterns → surface in COVERAGE.md

SIGNALS:
    REGRESSION:   3+ DEBIT:DRIFT on same scope within epoch → COVERAGE.md gap row
    GROWTH:       3+ MINT:WORK on same scope within epoch  → COVERAGE.md strength row
    STALE:        No LEARNING.md entry for 30+ days         → COVERAGE.md stale row

BUILD INTEGRATION:
    step 10c:  learning-consume → COVERAGE.md recommendations (soft gate)
    surfaces:  build-surfaces → COVERAGE.json includes learning-derived rows
```

Consumption closes the loop: LEARNING is not a ledger — it is a governor. Patterns that repeat become constraints. Constraints that hold become dimensions. Dimensions that validate become tiers. The system learns.

---

*LEARNING | SPEC | SERVICES*

---

## Axiom

**LEARNING is INTEL applied. Every discovery governed. Every gradient evidenced.**

INTEL is the primitive — what you KNOW (= WORK). LEARNING is the service — governed discovery extraction at scale. IDFs (Invention Disclosure Forms) are the archetype: structured records that capture what was discovered, when, by whom, with what evidence. LEARNING generalizes this pattern beyond patents to ALL governed scopes.

---

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
```

---

*LEARNING | CANON | SERVICES*
<!-- _generated: build-surfaces -->

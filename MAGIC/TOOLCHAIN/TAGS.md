---
sitemap: false
---

# TOOLCHAIN — TAGS

inherits: canonic-canonic/MAGIC/TOOLCHAIN

---

## Axiom

**Every stable interface state gets a name. Every name is immutable. Every freeze is respected.**

Tags version the infrastructure. Freezes protect the interface. The registry is append-only evidence — like LEARNING.md, but for fleet-wide stability.

---

## Naming Convention

| Pattern | Purpose | Example |
|---------|---------|---------|
| `v{MAJOR}.{MINOR}.{PATCH}` | Interface contract version (semver) | `v1.0.0` |
| `freeze-{YYYY-MM-DD}-{label}` | Pre-event interface freeze | `freeze-2026-02-24-board` |
| `patent-filing-{YYYY-MM-DD}` | Patent evidence snapshot | `patent-filing-2026-02-28` |
| `cert/{USER}/{TIER}/{YYYY-MM-DD}` | Developer certification snapshot | `cert/DEXTER/FULL/2026-02-25` |

**Semver rules:**

- MAJOR = breaking change to contract shape (HTTP.json schema, SURFACE.json types, layout interface)
- MINOR = additive change (new fleet member, new surface type, new nav feature)
- PATCH = fix within existing contracts (accent, label, bug fix)

**Freeze rules:**

- `freeze-*` tag = do not deploy breaking interface changes
- Freeze is lifted when a non-freeze tag is created (semver or patent-filing)
- `deploy --override-freeze` bypasses (explicit intent required)

---

## Constraints

```
MUST:     Every tag requires 255 validation before creation
MUST:     Registry is append-only — never edit existing rows
MUST:     Tag names follow naming convention (semver | freeze-* | patent-filing-* | cert/*)
MUST:     freeze-* blocks deploy until explicitly overridden or unfrozen
MUST:     Tag captures ROOT commit SHA (includes submodule pointers = full fleet)
MUST NOT: Create tags on dirty working tree
MUST NOT: Delete or move existing tags
MUST NOT: Deploy breaking interface changes during freeze without --override-freeze
```

---

## Registry

| Tag | Date | Interface | Scopes | 255 | Purpose | SHA |
|-----|------|-----------|--------|-----|---------|-----|

---

*TOOLCHAIN | TAGS | MAGIC*
| v1.0.0 | 2026-02-25 | 2026-02-23 | 286 | 281 |  | 188d482 |
| cert/DEXTER/FULL/2026-02-25 | 2026-02-25 | 2026-02-23 | 288 | 283 | cert: DEXTER FULL | 3de819a |
| cert/ILYA/FULL/2026-02-25 | 2026-02-25 | 2026-02-23 | 288 | 283 | cert: ILYA FULL | c8de090 |
| cert/YANA/FULL/2026-02-25 | 2026-02-25 | 2026-02-23 | 288 | 283 | cert: YANA FULL | 9f957db |
| freeze-2026-02-27-kernel | 2026-02-27 | 2026-02-23 | 308 | 296 | freeze: kernel | cf48b5a |
| freeze-2026-03-03-triview | 2026-03-03 | 2026-02-28 | 236 | 206 | freeze: triview | 25ab535 |
| v1.1.0 | 2026-03-10 | 2026-03-09 | 361 | 351 | lift freeze: Phase 3 decomposition, GOV-driven constants, blockchain | 17e806f |
| v1.2.0 | 2026-03-12 | 2026-03-12 | 380 | 380 | RUNNER service live + primitives governance (INTEL + CHAT + COIN) | 8961480 |
<!-- _generated: build-surfaces -->

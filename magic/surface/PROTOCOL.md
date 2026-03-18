# MAGIC — Protocol

8 checks. Score 0–255. magic.c enforces.

---

## Compliance Tiers

| Tier | Score | Requires |
|------|-------|----------|
| NONE | 0 | — |
| COMMUNITY | 35 | `CANON.md` + `VOCAB.md` + structural integrity |
| BUSINESS | 43 | COMMUNITY + `{SCOPE}.md` |
| ENTERPRISE | 63 | BUSINESS + `ROADMAP.md` + `COVERAGE.md` |
| AGENT | 127 | ENTERPRISE + `LEARNING.md` |
| FULL | 255 | AGENT + `LANGUAGE` inherited |

Tier requirements are cumulative. Structural integrity = `inherits:` + `## Axiom` + `MUST/SHOULD` in CANON.md.

---

## State

```
255       VALID
>= 127   WARN   (AGENT — missing LANG or SPEC)
>= 63    FLAG   (ENTERPRISE — missing LEARNING)
< 63     FAIL   (below ENTERPRISE)
```

---

## Ledger Entry (IDF)

| Field | Type | Description |
|-------|------|-------------|
| id | 32 bytes | SHA256 hash |
| prev | 32 bytes | Previous hash (chain) |
| ts | uint64 | Unix nanoseconds |
| type | uint8 | Entry type |
| key | char[256] | Domain identifier |
| gradient | int32 | Bits delta |
| from_bits | uint8 | Previous bits |
| to_bits | uint8 | Current bits |
| inventor | char[64] | Creator |

---

## Implementations

| File | Language | Role |
|------|----------|------|
| magic.c | C | THE LAW |
| magic.h | C | Public API |
| serve.py | Python | Wrapper |
| magic.js | JS | Wrapper |

**If it doesn't match magic.c, it's wrong.**

---

*PROTOCOL | MAGIC | 255*
<!-- _generated: build-surfaces -->

---
sitemap: false
---

# ROLLOUT — COMPATIBILITY CONTRACT

inherits: canonic-canonic/MAGIC

---

## Axiom

**Migrate safely. Never strand production traffic.**

---

## Policy

1. Define a compatibility window for each release
2. Keep `http://` fallback active during migration
3. Require explicit sunset criteria before fallback removal
4. Use version negotiation between peers/surfaces

---

## Sunset Criteria (minimum)

1. `magic://` route success above target SLO
2. Identity/revocation checks stable under load
3. Replay/recovery tests pass
4. Rollback path verified

---

## Constraints

```
MUST:     Publish compatibility window per release
MUST:     Define rollback before rollout
MUST NOT: Remove http fallback without passing sunset criteria
MUST NOT: Perform breaking transport changes without version gates
```

---

## Record Shape Evolution

Record shapes are governed in {SCOPE}.md. Shape changes follow the same compatibility contract:

1. New fields MUST be optional with explicit defaults
2. Existing ledger entries are NEVER mutated — new entries use new shape
3. Readers MUST accept all record shapes within the compatibility window
4. Define sunset criteria before dropping deprecated fields

```
MUST:     New record fields are optional with defaults
MUST:     Existing entries immutable — append new, never mutate
MUST NOT: Remove fields — deprecate within compatibility window
MUST NOT: Change field semantics — create new field instead
```

---

*ROLLOUT | MAGIC*
<!-- _generated: build-surfaces -->

---
sitemap: false
---

# DEBUG

inherits: canonic-canonic/MAGIC/SERVICES/DEBUG

---

**Governed debug ledger. Every runtime function logs structured events against a declared code registry, sinks them to an append-only keyed store with bounded retention, and promotes to COIN when economic consequence applies.**

---

---

## Primitives

| Primitive | Role |
|-----------|------|
| LEDGER | append-only keyed store (KV namespace, TTL-bounded) |
| INTEL | stable code registry — every code has a declared meaning |
| COIN | promotion path for debug events that cross into economic consequence |

---

*DEBUG | SPEC | CANONIC*
<!-- _generated: build-surfaces -->

---
sitemap: false
---

# LEARNING

inherits: MAGIC/SERVICES

---

Evidence lane for NOTIFIER.

## Patterns

| Date | Signal | Pattern | Source |
|------|--------|---------|--------|
| 2026-02-26 | NOTIFY_INLINE | Direct mapping at ledger write time eliminates polling — instant cross-scope delivery | worker.js talkLedgerWrite |
| 2026-02-26 | GOV_ROUTE | notify: header in CANON.md declares delivery routes — compiler emits, runtime executes | build-surfaces emit_canon() |
| 2026-02-26 | INBOX_BOUNDED | Per-principal inbox capped at 500 entries — prevents unbounded growth | worker.js inbox logic |
| 2026-02-27 | SERVICE_FORMALIZED | NOTIFIER elevated from inline notify to first-class governed service | CANON.md scaffolded |
| 2026-02-27 | TALK_PEER | NOTIFIER is peer to TALK — both first-class SERVICES, both compose INTEL | SERVICES/CANON.md |

---

*LEARNING | NOTIFIER | MAGIC*
<!-- _generated: build-surfaces -->

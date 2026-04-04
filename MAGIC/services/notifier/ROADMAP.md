---
sitemap: false
---

# NOTIFIER — ROADMAP

inherits: .

---

## Now (2026-02)
- Ship NOTIFIER as NOTIFY + INTEL composed: every delivery wires sender scope, receiver scope, and content
- Deliver inline at ledger write time — no polling, no delay, direct mapping
- GOV declares routes via `notify:` header — compiler propagates to CANON.json
- Inbox per principal at `inbox:{SCOPE}` in KV — bounded at 500, auditable

## Next (2026-Q2)
- Build governed inbox surface: per-USER inbox dashboard at /TALKS/{USER}/INBOX/ with read/unread state
- Wire NOTIFIER delivery to COIN accounting (every cross-scope delivery mints COIN via LEDGER evidence)
- Multi-target notify: `notify: DEXTER, NEVILLE` fans out to multiple inboxes from single ledger write
- Delivery receipts: read confirmation written back to sender's ledger

## Later
- Federated NOTIFIER across GALAXY topology: governed delivery spanning org boundaries with signed identity
- Priority routing: GOV-declared urgency levels (IMMEDIATE, STANDARD, DIGEST)
- Digest mode: batch inbox entries into periodic summaries for low-frequency principals
- NOTIFIER quality metrics derived from LEDGER evidence (delivery latency, read rate, route utilization)

---

*NOTIFIER | ROADMAP | CANONIC*
<!-- _generated: build-surfaces -->

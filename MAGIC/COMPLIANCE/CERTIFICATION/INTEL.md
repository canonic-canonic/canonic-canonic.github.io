# CERTIFICATION — INTEL

inherits: canonic-canonic/MAGIC/COMPLIANCE/CERTIFICATION

---

## Cross-Axiomatic References

| Scope | Relationship | What flows |
|-------|-------------|-----------|
| IDENTITY | Upstream | Ed25519 keys, KYC anchors — proves WHO is certified |
| VITAE | Upstream | Professional credentials — proves WHAT they've done |
| TAGS.md | Registry | Append-only cert tag records — proves WHEN |
| FOUNDATION/DEVELOPERS | Downstream | Public listing — compiled from cert tags + VITAE |
| SALES | Downstream | Deal flow — certification tier justifies rate card |
| GALAXY | Topology | ORG membership — routes certified dev to org |

---

## Migration Pattern

INTEL carries certification knowledge across scopes without exposing internals:

```
IDENTITY (private keys) → INTEL → CERTIFICATION (public tier)
VITAE (full record)     → INTEL → DEVELOPERS (public card)
SALES (deal pipeline)   ← INTEL ← CERTIFICATION (rate justification)
```

---

*INTEL | CERTIFICATION | COMPLIANCE*
<!-- _generated: build-surfaces -->

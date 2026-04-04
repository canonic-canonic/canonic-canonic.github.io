---
sitemap: false
---

# REGULATORY

inherits: canonic-canonic/INDUSTRIES

---

## Axiom

**REGULATORY domains cross-cut verticals. They govern HOW verticals comply, not WHAT they do.**

---

## Lattice

Regulatory domains default to **PATENT (#57)** — 5 governance checks. Missing C6 because no universal structural standard spans all jurisdictions. Structure varies by domain.

---

## Children

| Domain | Scope | Tier | Status |
|--------|-------|------|--------|
| BLOCKCHAIN | Cryptographic ledger governance | PROVENANCE (#53) | Governed |
| DATA | Privacy regulation (GDPR, CCPA, LGPD) | PATENT (#57) | Governed |
| GOVERNMENT | Public sector governance (FISMA, FedRAMP) | PATENT (#57) | Governed |
| LAW | Legal compliance (IP, contracts, litigation) | PATENT (#57) | Governed |

---

## Composition Rules

- **REGULATORY × VERTICAL** = compliance product (e.g., DATA × MEDICINE = HIPAA)
- **REGULATORY × HORIZONTAL** = compliance enforcement (e.g., LAW × SECURITY = cybersecurity law)

---

## Onboarding

To add a new regulatory domain:

1. Create directory under `REGULATORY/[NAME]/`
2. Write CANON.md inheriting `canonic-canonic/INDUSTRIES/REGULATORY`
3. Define domain axioms with jurisdictional awareness
4. Map regulatory framework to lattice — justify tier (likely #57 PATENT)
5. Document which verticals this domain cross-cuts
6. Run `magic validate` — 255 or reject

---

*REGULATORY | SPEC | INDUSTRIES*
<!-- _generated: build-surfaces -->

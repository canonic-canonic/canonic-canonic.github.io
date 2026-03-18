# GITHUB — KYC + DISTRIBUTION CONTRACT

inherits: canonic-canonic/MAGIC

---

## Axiom

**GitHub is the initial KYC anchor for ORGS and USERS.**

Canonical naming + ownership-direction semantics for GitHub org slugs are governed at ROOT:

- `canonic-canonic/CANONIC.md`

---

## ORG Mapping

- ORG scope maps 1:1 to a GitHub organization: `github.com/{org}`.
- ORG membership is the minimum permission boundary for projecting users into that ORG.

---

## USER Mapping (Duplicate Across ORGs)

- A USER is projected into an ORG as an ORG-owned repo: `github.com/{org}/{user}`.
- The same `{user}` MAY exist in many ORGs (duplicate users across orgs).
- Each projection is independently revocable by that ORG.

Required minimum files for `github.com/{org}/{user}`:

- `VITAE.md` (identity declaration)
- `CANON.md` (user-governed constraints within the org)
- `EVIDENCE/` (optional; proofs, attestations)

---

## KYC Checks (GitHub)

Minimum KYC for privileged actions SHOULD require:

- GitHub account is the signer identity
- Verified email + 2FA enabled
- ORG membership present at time of action
- Signed commits/tags/releases for governed artifacts (verification is part of MAGIC validation)

---

## Revocation

- Removing ORG membership revokes that ORG's projection rights.
- Key revocation ledger invalidates USER signing keys even if GitHub membership remains.

---

*GITHUB | MAGIC | KYC*
<!-- _generated: build-surfaces -->

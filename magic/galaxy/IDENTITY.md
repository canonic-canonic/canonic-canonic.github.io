---
sitemap: false
---

# IDENTITY — TRUST CONTRACT

inherits: canonic-canonic/MAGIC

---

## Axiom

**Every distributed action is signed.**

---

## Model

1. ORG root key signs org registry state
2. USER key signs user actions and artifact submissions
3. Artifact manifests bind route + hash + signer
4. Revocation ledger invalidates compromised keys

---

## Verification Flow

1. Resolve route
2. Load signed manifest
3. Verify chain: `ORG root → USER/artifact`
4. Check revocation state
5. Permit or reject

---

## Constraints

```
MUST:     Verify signature chain before execution
MUST:     Check revocation on every signed action
MUST:     Bind USER keys to governed VITAE identity
MUST NOT: Allow unsigned fallback for privileged actions
```

---

*IDENTITY | MAGIC*
<!-- _generated: build-surfaces -->

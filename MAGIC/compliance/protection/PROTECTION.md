---
sitemap: false
---

# PROTECTION

inherits: canonic-canonic/MAGIC/COMPLIANCE

---

## Axiom

**No commit reaches main without passing the 255 gate.**

---

## Rules

### Rule 1: BRANCH PROTECTION

Every GOV repo listed in CANONIC.git must have branch protection on main:

```
FOR EACH repo IN canonic.git WHERE role == "GOV":
  main.required_status_checks  = ["validate"]
  main.enforce_admins          = true
  main.allow_force_pushes      = false
  main.allow_deletions         = false
```

### Rule 2: REVIEW GATE

```
FOR EACH repo IN canonic.git WHERE role == "GOV":
  main.required_reviews        >= 1
  main.dismiss_stale_reviews   = true
```

### Rule 3: CODEOWNERS

```
FOR EACH repo IN canonic.git WHERE role == "GOV":
  .github/CODEOWNERS           EXISTS
  CODEOWNERS covers all paths  = true
```

### Rule 4: HOOK ENFORCEMENT

```
FOR EACH developer workstation:
  core.hooksPath OR symlink    = ~/.canonic/HOOKS
  pre-commit hook              = active
  --no-verify                  = blocked in CI
```

---

*PROTECTION | SPEC | COMPLIANCE*
<!-- _generated: build-surfaces -->

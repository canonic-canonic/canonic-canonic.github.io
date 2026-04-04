---
sitemap: false
---

# TAG

inherits: canonic-canonic/MAGIC/TOOLCHAIN
compile: TAG.json
compiler: schema

---

## Axiom

**Every tag record follows this contract. Appended to TAGS.md by magic-tag.**

---

## Required

| Field | Type | Description |
|-------|------|-------------|
| name | string | Tag name (semver, freeze-*, patent-filing-*) |
| date | date | Creation date |
| interface_version | string | HTTP version field at tag time |
| scopes | integer | Total scope count |
| full_scopes | integer | Scopes at 255 |
| sha | string | ROOT commit SHA (7-40 hex chars) |

## Optional

| Field | Type | Description |
|-------|------|-------------|
| frozen | boolean | Whether fleet is frozen |
| purpose | string | Tag purpose |

---

*TAG | CONTRACT | TOOLCHAIN*
<!-- _generated: build-surfaces -->

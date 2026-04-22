---
layout: default
scope: DEVELOPERS
title: "DEVELOPERS"
description: "DEVELOPERS is the certification surface — every certified developer is discoverable, every credential verifiable, and git proves it."
footerTagline: "DEVELOPERS"
accent: "#00ff88"
accent_rgb: "0, 255, 136"
talk: side
view: web
views:
  - gov
  - web
  - tex
pdf: /FOUNDATION/DEVELOPERS/developers.pdf
downloads:
  - label: "PDF"
    href: "/FOUNDATION/DEVELOPERS/developers.pdf"
hero:
  badge: DEVELOPERS
  title: "DEVELOPERS"
  description: "DEVELOPERS is the certification surface — every certified developer is discoverable, every credential verifiable, and git proves it."
  cta:
    - label: "Open DEVELOPERS"
      href: /FOUNDATION/DEVELOPERS/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

- **DEVELOPER_IS_DISCOVERABLE** — certified developers are enumerated by walking the GOV tree (VITAE + cert/ tags), never by hand-curated lists.
- **CREDENTIAL_IS_VERIFIABLE** — every tier badge resolves to a matching cert/ tag in TAGS.md; uncertified developers do not appear.
- **GIT_PROVES_IT** — the audit trail is the commit history; certification is earned on-chain, not claimed.
## Constraints

```
MUST:     Discover developers from GOV tree — walk VITAE.md + cert/ tags
MUST:     Compile to _data/developers.json via build-surfaces
MUST:     Render on FOUNDATION site with tier badges
MUST:     Every listed developer has a matching cert/ tag in TAGS.md
MUST NOT: List uncertified developers
MUST NOT: Hardcode developer lists — discover from GOV tree
MUST NOT: Hand-edit developers.json — fix the compiler or contract
```

---

*DEVELOPERS | CANON | FOUNDATION*

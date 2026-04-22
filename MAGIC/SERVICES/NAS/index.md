---
layout: default
scope: NAS
title: "NAS"
description: "NAS is the local canonical store — every transcript archived, every media file served, every backup governed, single source of truth for content outside git."
footerTagline: "NAS"
accent: "#00ff88"
accent_rgb: "0, 255, 136"
talk: side
view: web
views:
  - gov
  - web
  - tex
pdf: /MAGIC/SERVICES/NAS/nas.pdf
downloads:
  - label: "PDF"
    href: "/MAGIC/SERVICES/NAS/nas.pdf"
hero:
  badge: NAS
  title: "NAS"
  description: "NAS is the local canonical store — every transcript archived, every media file served, every backup governed, single source of truth for content outside git."
  cta:
    - label: "Open NAS"
      href: /MAGIC/SERVICES/NAS/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

- **NAS_IS_OUT_OF_GIT_SOT** — NAS is the single source of truth for content that lives outside git (transcripts, media, backups).
- **EVERY_TRANSCRIPT_ARCHIVED** — all transcripts are archived; media is served from governed paths only.
- **NO_UNGOVERNED_CONTENT** — ungoverned content is not allowed on NAS and NAS paths are never exposed on public surfaces.
## Constraints

```
MUST:     Archive all transcripts
MUST:     Govern all backups
MUST:     Serve media from governed paths
MUST NOT: Allow ungoverned content on NAS
MUST NOT: Expose NAS paths on public surfaces
```

---

*NAS | CANON | SERVICES*

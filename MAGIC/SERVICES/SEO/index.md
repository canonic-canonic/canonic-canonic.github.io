---
layout: default
scope: SEO
title: "SEO"
description: "SEO is URL governance — every page declares its canonical, every surface indexed under its serving domain, 255 or reject."
footerTagline: "SEO"
accent: "#00ff88"
accent_rgb: "0, 255, 136"
talk: side
view: web
views:
  - gov
  - web
  - tex
pdf: /MAGIC/SERVICES/SEO/seo.pdf
downloads:
  - label: "PDF"
    href: "/MAGIC/SERVICES/SEO/seo.pdf"
hero:
  badge: SEO
  title: "SEO"
  description: "SEO is URL governance — every page declares its canonical, every surface indexed under its serving domain, 255 or reject."
  cta:
    - label: "Open SEO"
      href: /MAGIC/SERVICES/SEO/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

- **CANONICAL_DECLARED_PER_PAGE** — every page declares its canonical URL; undeclared canonicals fail the gate.
- **INDEXED_UNDER_SERVING_DOMAIN** — surfaces are indexed only under the domain they serve; cross-domain indexing is rejected.
- **SITEMAP_GOVERNED_ONLY** — sitemaps reference governed URLs only; all URLs are validated to return 200 before publish.
- **FAIL_CLOSED_255** — ungoverned URLs are never indexed; 255 or reject.
## Constraints

```
MUST:     Declare canonical URL per page
MUST:     Index under serving domain only
MUST:     Sitemap references governed URLs only
MUST:     Validate all URLs return 200 before publish
MUST NOT: Index ungoverned URLs
MUST NOT: Allow duplicate canonicals across surfaces
```

---

*SEO | CANON | SERVICES*

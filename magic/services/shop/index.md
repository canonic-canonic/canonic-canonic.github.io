---
layout: default
scope: SHOP
title: "SHOP"
description: "SHOP compiles the public projection aggregate. Every USER is a SHOP. Every artifact has a price."
footerTagline: "SHOP"
accent: "#00ff88"
accent_rgb: "0, 255, 136"
talk: side
view: web
views:
  - gov
  - web
  - tex
pdf: /MAGIC/SERVICES/SHOP/shop.pdf
downloads:
  - label: "PDF"
    href: "/MAGIC/SERVICES/SHOP/shop.pdf"
hero:
  badge: SHOP
  title: "SHOP"
  description: "SHOP compiles the public projection aggregate. Every USER is a SHOP. Every artifact has a price."
  cta:
    - label: "Open SHOP"
      href: /MAGIC/SERVICES/SHOP/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

## Constraints

```
MUST:     Every USER principal with artifacts MUST have a SHOP surface
MUST:     Discover projections by walking {USER}/**/SHOP.md (not just SERVICES/**/SHOP.md)
MUST:     Each SHOP product MAY declare a COIN price — free products omit price
MUST:     Purchase creates SPEND event in buyer WALLET + credit in seller WALLET
MUST:     Aggregation is deterministic and rerun-safe
MUST:     Drift-gate — regenerate before publish, block on mismatch
MUST:     Composable via frontmatter — shop: true|inline (same pattern as talk:)
MUST:     One include, one script, one stylesheet — no per-page reimplementation
MUST:     One CTA per product card
MUST:     Bag review before checkout — no impulse redirect
MUST NOT: Publish artifacts not reproducible from governed inputs
MUST NOT: Process SPEND without sufficient buyer balance
MUST NOT: Inline CSS or JS in compiled pages
MUST NOT: Admin tools (vault commands) on public SHOP surface
MUST NOT: Per-page wallet reimplementation
MUST NOT: Multiple purchase buttons per product
```

---

*SHOP | CANON | SERVICES*

---
sitemap: false
---

# SHOP

inherits: canonic-canonic/MAGIC/SERVICES

---

## Purpose

**SHOP compiles the public projection aggregate. Every USER is a SHOP.**

Every USER principal with artifacts gets a SHOP surface. Discovery walks `{USER}/**/SHOP.md`. Each product MAY declare a COIN price. Purchase creates SPEND event in buyer WALLET + credit in seller WALLET.

---

## Discovery

```
Pattern:  {USER}/**/SHOP.md
Output:   SHOP.json aggregate per USER
Gate:     Deterministic, rerun-safe, drift-gated
```

---

## Product Card Schema

```
## Card
| Field    | Value                                              |
|----------|----------------------------------------------------|
| title    | {product name}                                     |
| type     | BOOK | PAPER | DECK | CHAT | content | product    |
| price    | {amount} COIN                                      |
| route    | /{route}/                                          |
| seller   | {USER principal}                                   |
| status   | AVAILABLE | BETA | IN PROGRESS                    |
| synopsis | {1-2 sentence description}                         |
| cover    | {image path or omit for gradient}                  |
| tags     | {comma-separated keywords}                         |
| audience | clinical | technical | business | general          |
| domain   | healthcare | finance | legal | realestate | governance | engineering |
| author   | {creator name}                                     |
| edition  | {version string: 1.0, BETA, etc.}                 |
```

---

## Checkout Flow

Purchase supports dual payment:

| Method | Flow | Event |
|--------|------|-------|
| COIN | API `/api/v1/spend` → buyer WALLET debit + seller WALLET credit | SPEND + MINT:WORK |
| Fiat | API `/api/v1/checkout` → Stripe Checkout → webhook → SALE event | SALE via stripe-sync |

Stripe Checkout session metadata carries: `{ event, product, service, amount_coin }`.
Webhook on `checkout.session.completed` triggers vault SALE event.

## Composability Contract

SHOP is a composable service. Any page includes it via frontmatter. Same pattern as TALK.

### Frontmatter

| Key | Values | Behavior |
|-----|--------|----------|
| shop | true | Full catalog — product grid + bag + checkout |
| shop | inline | Inline product cards only (e.g. BOOKS page) |
| shop | false/omitted | No commerce UI |

### Include

`{% raw %}{% include SHOP.html %}{% endraw %}` renders from `page.shop` + SHOP.json.
ONE include. ONE script. ONE stylesheet.

### Data

SHOP.json per scope — compiled from SHOP.md Card tables.
Shape: `{ products: [{ title, type, price, status, synopsis, route, cover, seller, tags, audience, domain, author, edition }] }`

### Product Card

One card. One CTA.

| Element | Rule |
|---------|------|
| Cover | Image or CSS gradient |
| Eyebrow | Type (BOOK, PAPER, DECK, CHAT) |
| Title | Product name |
| Synopsis | 1-2 sentence description |
| Tags | Comma-separated → rendered as pill chips |
| Badges | Audience + domain badges (monospace, token-colored) |
| Price | "{amount} COIN" or "Free" |
| CTA | "Add to Bag" (priced) or "Get" (free). Single button. |

### Bag

Overlay (like TALK overlay). localStorage `canonic-bag`.

| Element | Rule |
|---------|------|
| Items | Title + price per item. Remove button. |
| Total | Sum of COIN. |
| CTA | "Checkout" — one button. |
| Empty | "Your bag is empty." |

### Checkout

| Method | Flow | Event |
|--------|------|-------|
| COIN | Confirm → /api/v1/spend → success | SPEND |
| Card | Stripe hosted → return with ?checkout=success | SALE via stripe-sync |

Single method selector. Not dual buttons per product.

### Wallet Projection

Wallet lives in USER profile. SHOP reads `WALLET.load()` from `base/wallet.js`.
Balance renders as subtle pill in SHOP header. Never reimplemented per page.

---

## Constraints

```
MUST:     Composable via frontmatter (shop: true|inline) — same pattern as talk:
MUST:     One include, one script, one stylesheet
MUST:     Products from compiled SHOP.json — not hardcoded HTML
MUST:     Wallet from WALLET.load() — never reimplemented
MUST:     One CTA per product card
MUST:     Bag review before checkout
MUST NOT: Inline CSS or JS in page markdown
MUST NOT: Per-page DOM creation
MUST NOT: Admin tools on public surface
MUST NOT: Multiple purchase buttons per product
```

---

---

## Interface

```
INPUT:
    Discovery walk: {USER}/**/SHOP.md
    Product Card tables in SHOP.md (title, type, price, route, seller, status, synopsis)
    Frontmatter: shop: true | inline | false

OUTPUT:
    SHOP.json per scope — compiled from SHOP.md Card tables
    Shape: { products: [{ title, type, price, status, synopsis, route, cover, seller, tags, audience, domain, author, edition }] }
    VAULT/VIEWS/shop.json — public org-level aggregate

CHECKOUT FLOW:
    COIN:  confirm → /api/v1/spend → buyer WALLET debit + seller WALLET credit → SPEND event
    Fiat:  confirm → /api/v1/checkout → Stripe Checkout → webhook → SALE event

COMPOSABILITY:
    Frontmatter: shop: true (full catalog) | inline (cards only) | false (no commerce)
    Include:     {% raw %}{% include SHOP.html %}{% endraw %}
    Script:      ONE script (shop.js)
    Stylesheet:  ONE stylesheet (_SHOP.scss)
    Wallet:      WALLET.load() from base/wallet.js — never reimplemented per page
```

---

*SHOP | SPEC | SERVICES*
<!-- _generated: build-surfaces -->

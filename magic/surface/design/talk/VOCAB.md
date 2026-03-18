# TALK — VOCAB

inherits: canonic-canonic/MAGIC/SURFACE/DESIGN
case: mixed

---

| Term | Definition |
|------|-----------|
| TALK | Service: CHAT primary. All streams routed. |
| Provider | LLM backend — switchable, not hardcoded |
| Scope | Client context — discovered per site |
| Domain Chat | Industry-specific TALK instance — discovered, not enumerated |
| Stream | HUMAN or AGENT communication source |
| Transcript | Raw record from any stream — merkle hashed |
| Worker | Cloudflare Workers runtime |
| Route | HTTP endpoint on api.canonic.org |
| Secret | Credential managed via wrangler secret |
| Checkout | Stripe session create lane (`/shop/checkout`) |
| Webhook | Stripe signature-verified event lane (`/shop/webhook/stripe`) |
| Wallet | Public-safe Stripe summary lane (`/shop/wallet`) |

---

*VOCAB | TALK | CHAT*
<!-- _generated: build-surfaces -->

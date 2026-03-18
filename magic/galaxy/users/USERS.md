# USERS

inherits: canonic-canonic/MAGIC/GALAXY/USERS

---

## Axiom

**Every USER scope MUST have a `{USER}/{USER}.md` dashboard.**

---

## Dashboard Contract

`{USER}.md` is the 2-hop index for a USER scope. It cross-references all active surfaces owned by that USER within the ORG.

Required sections:

| Section | Content |
|---------|---------|
| Deals | Active VAULT/DEALS entries with stage + contact ref |
| Content | SHOP artifacts (decks, blogs, patents, books) |
| Services | Active SERVICES with status |
| Contacts | USERS/ entries with cross-refs to deals/surfaces |

Discovery: filesystem path-based (per SERVICES.md contract). No manual catalogs — `{USER}.md` is populated from the governed tree.

---

## Constraints

```
MUST:     Place {USER}.md at the USER scope root ({ORG}/{USER}/{USER}.md)
MUST:     Cross-reference all active surfaces (VAULT, SHOP, SERVICES, USERS)
MUST:     Keep paths relative to the USER scope root
MUST NOT: Duplicate content — reference paths only, not inline content
MUST NOT: Replace CANON.md — {USER}.md is the dashboard, CANON.md is the contract
```

---

*USERS | canonic-canonic/MAGIC/GALAXY | GOV*
<!-- _generated: build-surfaces -->

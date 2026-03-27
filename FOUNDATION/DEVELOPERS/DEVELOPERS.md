---
sitemap: false
---

# DEVELOPERS

inherits: canonic-canonic/FOUNDATION/DEVELOPERS

The certification surface. Certified developers listed on FOUNDATION.

---

## Discovery

Walk GOV tree for VITAE.md files across all governed repos. Cross-reference against cert/ tags in TAGS.md. Only developers with matching cert tags are listed.

```
GOV tree → VITAE.md discovery → cert/ tag match → developers.json → FOUNDATION page
```

---

## Card Schema

| Field | Source | Required |
|-------|--------|----------|
| name | VITAE.md | YES |
| github | VITAE.md | YES |
| title | VITAE.md | YES |
| org | GALAXY inheritance | YES |
| tier | cert/ tag | YES |
| tier_score | magic validate | YES |
| focus | VITAE.md | NO |
| vitae_url | Compiled route | YES |
| cert_date | cert/ tag date | YES |
| cert_tag | Git tag ref | YES |

---

## Sort

By tier (FULL first), then alphabetical within tier.

---

## Output

`_data/developers.json` — compiled by build-surfaces with `_generated` marker.

---

## Surface

FOUNDATION page renders developer cards. Each card links to VITAE. Each card has "Verify This Credential" — checkout cert tag, run `magic validate`, get same score.

---

*DEVELOPERS | FOUNDATION*
<!-- _generated: build-surfaces -->

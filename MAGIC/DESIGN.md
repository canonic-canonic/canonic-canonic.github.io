---
sitemap: false
---

# MAGIC — DESIGN

inherits: canonic-canonic/MAGIC

---

## Axiom

**MAGIC renders through LANGUAGE. LANGUAGE.md defines it. DESIGN.md applies it. DESIGN.css compiles it.**

---

## MAGIC Governance Dimensions

```
D     Declarative   CANON.md exists
E     Evidential    VOCAB.md exists
T     Transparent   ROADMAP.md exists
R     Reproducible  {SCOPE}.md exists
O     Operational   COVERAGE.md exists
S     Structural    inherits: + ## Axiom + MUST/SHOULD
L     Linguistic    LEARNING.md exists
LANG  Language      LANGUAGE inherited (.md, DESIGN, .css)
```

## Compliance Tiers

```
COMMUNITY     D + E + S
BUSINESS      COMMUNITY + R
ENTERPRISE    BUSINESS + T + O
AGENT         ENTERPRISE + L
FULL          AGENT + LANG = MAGIC
```

## LANGUAGE Dimension

LANG walks parent directories. Any scope inherits LANGUAGE from:
- LANGUAGE.md — defines the language (FOUNDATION tree)
- DESIGN.md — applies the language (MAGIC tree)
- DESIGN.css — compiles the language (runtime)

One file anywhere in the ancestor chain satisfies LANG for all descendants.

## Naming Convention

HUMAN governs. COMPUTER executes. The boundary is absolute.

```
GOV       ~/CANONIC/     SCREAMING_CASE   .md    Human-authored contracts
RUNTIME   ~/.canonic/    lowercase         .*     Machine-generated artifacts
```

Three naming tiers within GOV:

```
SCOPE      SCREAMING_CASE    Has CANON.md — governed directory
LEAF       lowercase-kebab   No CANON.md — content inside a scope
EXTERNAL   lowercase         GitHub slug, language name — outside governance
```

SCREAMING_CASE announces governance. lowercase announces content or execution.

The SPEC (`{SCOPE}.md`) governs all leaves in its scope. It is the index.

Four naming tiers:

```
SCOPE      SCREAMING_CASE    Directories with CANON.md
LEAF       lowercase-kebab   Content files inside a scope
EXTERNAL   lowercase         GitHub slugs, language names
DATA       camelCase         JSON/YAML data fields in front matter + _data/ + includes
```

DATA tier: all structured data fields — front matter keys, `_data/*.json` keys, and
Liquid include parameter names — use camelCase. This is the contract between GOV
content, the build-surfaces compiler, and DESIGN theme includes.

```
MUST:     SCOPE directories are SCREAMING_CASE
MUST:     Governance files (TRIAD + SPEC + projections) are SCREAMING_CASE
MUST:     Content leaves are lowercase-kebab
MUST:     External identifiers are lowercase
MUST:     Data fields (front matter, _data JSON, include params) are camelCase
MUST NOT: Use SCREAMING_CASE for content leaves or external identifiers
MUST NOT: Use snake_case for data fields — camelCase is the single convention
```

## Privacy Boundary

Directories and files excluded from public fleet surfaces. Governance internals, not content.

```
CHARTER/
DEALS/
GRANTS/
FINANCIALS/
USERS/
CLINICAL/
_data/
irbs/
plugins/
timeline/
econ.json
```

## Content Lanes

Top-level directories managed by catalog emitters. GC must not delete these; their children are compiled by catalog emitters, not the scope walker.

```
BLOGS
PAPERS
BOOKS
DECKS
DEXTER
vitae
```

---

## Constraints

```
MUST:     DESIGN.md satisfies LANG for MAGIC tree
MUST:     LANGUAGE.md satisfies LANG for FOUNDATION tree
MUST:     LANG walks up — parent DESIGN.md cascades to all children
MUST:     JEKYLL/DESIGN.md 255 Map validated by validate-design (build gate)
MUST NOT: Duplicate DESIGN.md in child scopes — specialize in parent's Layout Classes table
MUST NOT: Publish kernel dimension internals in governance prose
MUST NOT: Publish dimension labels (D/E/T/R/O/S/L/LANG) on public HTTP surfaces
MUST:     Public surfaces narrate dimensions as questions, not labels
MUST:     Hero terminal simulations reflect real tool output (magic scan / magic validate)
```

---

*MAGIC | DESIGN | FOUNDATION*
<!-- _generated: build-surfaces -->

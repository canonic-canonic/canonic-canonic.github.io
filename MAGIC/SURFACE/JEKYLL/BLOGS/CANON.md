---
layout: service
title: "BLOGS — CANON"
scope: BLOGS
talk: true
---

inherits: canonic-canonic/MAGIC/SURFACE/JEKYLL

---

## Purpose

**BLOGS are the literary surface of CANONIC. Every post is a governed disclosure backed by LEDGER evidence.**

Posts transform commit-level work into human-readable narrative. The BLOGS index (BLOGS.json) is compiled from front matter — the source of truth is the post files themselves.

---

## Interface

| Artifact | Format | Source |
|----------|--------|--------|
| Post | `.md` with front matter | `_posts/YYYY-MM-DD-slug.md` |
| Index | `BLOGS.json` | Compiled from post front matter |
| Governance | `CANON.json` | Compiled from CANON.md |
| Surface | `index.md` | Jekyll page, fetches BLOGS.json |

---

## Rendering

Posts render via `layout: post` (DESIGN theme). The BLOGS index renders via `layout: default` with POSTS.html include. Both are governed by DESIGN/JEKYLL.

---

*BLOGS | SPEC | CANONIC*

---

## Axiom

**BLOGS are governed literary artifacts. Every post is a timestamped disclosure.**

BLOGS project governance narrative into public prose. Each post maps to LEDGER evidence — commit history, discovery patterns, and architectural decisions rendered as readable story.

---

## Constraints

```
MUST:     Every post declares front matter (title, date, layout: post)
MUST:     Posts live in _posts/ following Jekyll naming: YYYY-MM-DD-slug.md
MUST:     BLOGS.json index is compiled — never hand-edited
MUST:     CANON.json is compiled — never hand-edited
MUST:     Post content maps to governed work (LEDGER commits, MAGIC discoveries)
MUST NOT: Publish ungoverned narrative (fiction without evidence)
MUST NOT: Hand-edit compiled indices (BLOGS.json, CANON.json)
```

---

*BLOGS | CANON | JEKYLL*
<!-- _generated: build-surfaces -->

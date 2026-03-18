# BLOGS

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
<!-- _generated: build-surfaces -->

---
sitemap: false
---

# FLEET — CANONIC Operations Manifest

inherits: canonic-canonic/MAGIC/TOOLCHAIN

---

## Sites

| Scope | Site | Path | Domain | Accent |
|-------|------|------|--------|--------|
| HADLEYLAB | hadleylab.org | / | hadleylab.org | #60a5fa |
| FOUNDATION | canonic.org | /FOUNDATION | canonic.org/foundation | #7c3aed |
| INDUSTRIES | canonic.org | /INDUSTRIES | canonic.org/industries | #bf5af2 |
| MAGIC | canonic.org | /MAGIC | canonic.org/magic | #00ff88 |

---

## Shared Assets

| Asset | Source (RUNTIME) | Destinations |
|-------|------------------|-------------|
| DESIGN.css | RUNTIME/DESIGN.css | {site}/DESIGN.css |
| talk.js | RUNTIME/talk.js | hadleylab: base/talk.js, foundation: talk.js, magic: talk.js |

---

## Operations

| Script | Purpose |
|--------|---------|
| bin/sync-fleet | Copy DESIGN.css + talk.js from RUNTIME to all fleet sites |
| bin/install-hooks | Symlink HOOKS/pre-commit to all deploy target repos (fleet + governance) |
| bin/deploy | Commit and push all deploy targets (fleet repos) + runtime to GitHub |

---

## Fleet Repos (independent clones, gitignored by .canonic)

| Site | Path | Repo | Branch |
|------|------|------|--------|
| canonic.org | canonic-canonic.github.io/ | canonic-canonic/canonic-canonic.github.io | main |
| hadleylab.org | hadleylab-canonic.github.io/ | hadleylab-canonic/hadleylab-canonic.github.io | main |
| DESIGN | DESIGN-theme/ | canonic-canonic/DESIGN | main |

Independent git repos inside ~/.canonic/. Gitignored — no submodules.

---

## Recovery

```
git clone https://github.com/canonic-canonic/.canonic.git ~/.canonic
cd ~/.canonic
# canonic.org fleet site
git clone https://github.com/canonic-canonic/canonic-canonic.github.io.git
# hadleylab.org fleet site
git clone https://github.com/hadleylab-canonic/hadleylab-canonic.github.io.git
# DESIGN theme
git clone https://github.com/canonic-canonic/DESIGN.git DESIGN-theme
bin/install-hooks
```

Full runtime recovered in five commands.

---

*FLEET | OPERATIONS | CANONIC*
<!-- _generated: build-surfaces -->

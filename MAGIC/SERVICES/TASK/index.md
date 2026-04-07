---
layout: default
scope: TASK
title: "TASK"
description: "TASK governs the remote agent fleet. Every scheduled agent is a governed scope. Every poll is ledgered. Every alert is evidence."
footerTagline: "TASK"
accent: "#00ff88"
accent_rgb: "0, 255, 136"
talk: side
view: web
views:
  - gov
  - web
  - tex
pdf: /MAGIC/SERVICES/TASK/task.pdf
downloads:
  - label: "PDF"
    href: "/MAGIC/SERVICES/TASK/task.pdf"
hero:
  badge: TASK
  title: "TASK"
  description: "TASK governs the remote agent fleet. Every scheduled agent is a governed scope. Every poll is ledgered. Every alert is evidence."
  cta:
    - label: "Open TASK"
      href: /MAGIC/SERVICES/TASK/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

## Constraints

```
MUST:     Discover task types via ## TASK Contract in service CANON.md files
MUST:     Compile discovered tasks to registry
MUST:     Reconcile compiled triggers against runtime state
MUST:     Budget-control frequency (minimum intervals per agent)
MUST:     All agents read-only unless TASK Contract declares write scope
MUST:     Ledger every agent execution
MUST NOT: Maintain parallel task trees (services own their monitoring)
MUST NOT: Hardcode trigger IDs in GOV
MUST NOT: Allow agents to modify files outside declared write scope
```

---

*TASK | CANON | SERVICES*

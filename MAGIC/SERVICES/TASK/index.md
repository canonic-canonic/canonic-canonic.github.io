---
layout: default
scope: TASK
title: "TASK"
description: "TASK governs the remote agent fleet — every scheduled agent a governed scope, every poll ledgered, every alert evidence."
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
  description: "TASK governs the remote agent fleet — every scheduled agent a governed scope, every poll ledgered, every alert evidence."
  cta:
    - label: "Open TASK"
      href: /MAGIC/SERVICES/TASK/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

- **AGENT_IS_SCOPE** — every scheduled agent is a governed scope declared via `## TASK Contract` in service CANON.md; discovery compiles into the registry.
- **RECONCILE_AGAINST_RUNTIME** — compiled triggers reconcile against runtime state; budget controls enforce minimum intervals per agent.
- **READ_ONLY_BY_DEFAULT** — agents are read-only unless the TASK Contract explicitly declares write scope.
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

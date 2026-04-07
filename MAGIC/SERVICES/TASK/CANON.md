---
layout: service
title: "TASK — CANON"
scope: TASK
talk: true
sitemap: false
---

inherits: canonic-canonic/MAGIC/SERVICES

---

*TASK | SPEC | CANONIC*

---

## Axiom

**TASK governs the remote agent fleet. Every scheduled agent is a governed scope. Every poll is ledgered. Every alert is evidence.**

---

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
<!-- _generated: build-surfaces -->

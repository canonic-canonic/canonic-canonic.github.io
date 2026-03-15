---
layout: service
title: "SERVICES — CANON"
scope: SERVICES
talk: true
---

inherits: canonic-canonic/MAGIC/SURFACE

---

## Purpose

**SERVICES are governed directories. Each composes one or more primitives into a runtime product.**

Primitives are files (`INTEL.md`, `CHAT.md`, `COIN.md`). Services are directories (`LEARNING/`, `TALK/`, `SHOP/`, etc.). Every service wires INTEL. CHAT and COIN are optional.

---

## Interface

| Service | Primitive | Function |
|---------|-----------|----------|
| `LEARNING/` | INTEL | Governed discovery extraction |
| `TALK/` | CHAT + INTEL | Governed conversation product |
| `SHOP/` | COIN + INTEL | Public economic projection |
| `LEDGER/` | COIN | Append-only economic truth |
| `VAULT/` | COIN + INTEL | Private economic aggregate |
| `WALLET/` | COIN | Per-USER economic identity |
| `STAR/` | INTEL + CHAT + COIN | Personal portal — unified TIMELINE |

---

---

## Service Contract Standard

Every service CANON.md MUST declare its interface and API. Two service types:

| Type | Has Routes | Examples |
|------|-----------|----------|
| NETWORK | YES — HTTP routes on api.canonic.org | TALK, API, NOTIFIER, MONITORING, CONTRIBUTE |
| COMPILER | NO — CLI/filesystem primitive | MINT, CHAIN, DEPLOY, LEARNING, VAULT, SHOP |

**Required sections for NETWORK services:**

```

---

## Constraints    — MUST/MUST NOT enforcement rules

```

**Required sections for COMPILER services:**

```

---

## Constraints    — MUST/MUST NOT enforcement rules

```

**Gold standard:** `MAGIC/SURFACE/DESIGN/TALK/CANON.md` — 11 routes, architecture, 29 config keys, 5 clients.

---

## Plugins

Any service may declare client-side plugins. Plugins are governed extensions that load into the surface.

```
DECLARATION:
    CANON.md header: `plugins: name1, name2`
    build-surfaces parses → generates <script> tags

CONVENTION:
    Source:    plugins/{name}.js (site root)
    Global:   window.{NAME} (uppercase)
    Pattern:  IIFE → window.{NAME} = { init, ... }

INTERFACE:
    MUST expose init() for self-initialization
    MUST store user data in localStorage only
    MUST provide export() for data portability
    MUST NOT send PII/PHI to external APIs
    MUST NOT require authentication

LIFECYCLE:
    1. CANON.md declares plugins → build-surfaces parses header
    2. build-surfaces generates <script> tags in compiled output
    3. Plugin loads at runtime → reads service state
    4. Plugin renders into governed DOM containers
```

---

*SERVICES | SPEC | CANONIC*

---

## Axiom

**SERVICES are SURFACE routes with governed boundaries.**

SERVICES exist to project GOV into runtime products without adding policy in code.

---

## Constraints

```
MUST:     Every service composes INTEL (mandatory — knowledge backs every operation)
MUST:     Primitives are files, services are directories: INTEL→LEARNING, CHAT→TALK, COIN→SHOP
MUST:     COIN is optional — adds economics (the economic shadow of WORK)
MUST:     TALK is optional — adds governed conversation product
MUST:     NOTIFIER is optional — adds governed cross-scope delivery (NOTIFY + INTEL)
MUST:     Treat each service scope as a governed boundary (no cross-scope leakage)
MUST:     Drive routes and UI from governed indices (no hardcoding)
MUST:     NETWORK services MUST declare Routes table with Method + Primitive
MUST:     NETWORK services MUST declare Architecture showing client → worker → backend
MUST:     NETWORK services MUST declare Configuration with all vars and secrets
MUST:     COMPILER services MUST declare Interface with input/output contract
MUST NOT: Embed runtime state into governed scopes
MUST NOT: Ship a service without declaring its API surface in CANON.md
```

---

*SERVICES | CANON | SURFACE*
<!-- _generated: build-surfaces -->

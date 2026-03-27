---
sitemap: false
---

# NOTIFIER

inherits: canonic-canonic/MAGIC/SERVICES

---

## Purpose

**NOTIFIER is the governed cross-scope delivery service. NOTIFY primitive + INTEL primitive = NOTIFIER.**

Every NOTIFIER route composes NOTIFY (the delivery trigger) with INTEL (the knowledge context). Scope determines the route. No generic NOTIFIER exists — every route is declared in GOV via the `notify:` header.

---

## Composition

```
Primitive:  NOTIFY (what you SEND) + INTEL (what you KNOW)
Service:    NOTIFIER (governed cross-scope delivery product)
Instance:   notify: {TARGET} in any CANON.md header
```

---

## API Routes

Hosted on Cloudflare Worker (`canonic-services` @ api.canonic.org).

| Method | Path | Auth | Purpose |
|--------|------|------|---------|
| POST | /talk/send | Bearer | Deliver cross-user message |
| GET | /talk/inbox?scope=X | Bearer | Read inbox for scope |
| POST | /talk/ack | Bearer | Mark messages as read |

### Send

```
POST /talk/send
{
  "to":      "<TARGET principal>",
  "scope":   "<governed scope key>",
  "message": "<content>",
  "context": "<optional INTEL context>"
}

Response:
{
  "ok":   true,
  "id":   "<content hash>",
  "ts":   "<ISO 8601>"
}
```

### Inbox

```
GET /talk/inbox?scope=X&limit=50&offset=0

Response:
{
  "scope":   "<scope>",
  "total":   <int>,
  "entries": [{ id, ts, from, to, message, context, read }]
}
```

### Acknowledge

```
POST /talk/ack
{
  "ids": ["<message_id>", ...]
}

Response:
{
  "ok":    true,
  "acked": <count>
}
```

---

## Route Declaration

Routes are declared in GOV, not configured at runtime.

```
GOV declaration:     notify: DEXTER        (in FATIMA/CHAT/CANON.md)
Compiler output:     "notify": ["DEXTER"]  (in CANON.json)
Runtime delivery:    inline at /talk/ledger write time
Storage:             inbox:{TARGET} in KV
```

Discovery: `magic scan` walks all CANON.md `notify:` headers → builds route table. Never hardcoded.

---

## Infrastructure

```
Runtime:    Cloudflare Worker (canonic-services)
Storage:    TALK_KV namespace (inbox:{PRINCIPAL} keys)
Delivery:   Inline at ledger write time — no polling, no delay
```

---

## Record Shape

```
| Field       | Type     | Required |
|-------------|----------|----------|
| id          | string   | yes      |
| ts          | ISO-8601 | yes      |
| from        | string   | yes      |
| to          | string   | yes      |
| message     | string   | yes      |
| context     | string   | no       |
| read        | boolean  | yes      |
| meta        | object   | no       |
```

---

## LEDGER Projection

Every delivery creates a LEDGER entry:

```
type:       NOTIFIER
key:        {sender_scope}→{receiver_scope}
inventor:   {sender}
work_ref:   notifier:{id}
```

---

---

## Service

```
name       = canonic-services (shared worker)
scope      = SERVICES/NOTIFIER
domain     = api.canonic.org
runtime    = Cloudflare Workers
```

---

## Routes

| Route | Method | Purpose | Primitive |
|-------|--------|---------|-----------|
| `/talk/send` | POST | Deliver cross-user message | NOTIFY + INTEL |
| `/talk/inbox` | GET | Read inbox for scope | NOTIFY + INTEL |
| `/talk/ack` | POST | Mark messages as read | NOTIFY |

---

## Architecture

```
CLIENT (talk.js / DECK / iOS / CLI)
    |
api.canonic.org (Cloudflare Worker — canonic-services)
    |
    ├── /talk/send    → validate route (GOV notify: header) → TALK_KV inbox:{TARGET}
    ├── /talk/inbox   → read TALK_KV inbox:{PRINCIPAL} (scope-filtered)
    └── /talk/ack     → update TALK_KV read flags

ROUTE DECLARATION:
    GOV:     notify: DEXTER          (in CANON.md header)
    Compile: "notify": ["DEXTER"]    (in CANON.json)
    Runtime: inline at /talk/ledger write time
    Storage: inbox:{TARGET} in TALK_KV

DISCOVERY:
    magic scan → walks all CANON.md notify: headers → builds route table
    Never hardcoded.
```

---

## Configuration

| Type | Key | Source |
|------|-----|--------|
| binding | TALK_KV | wrangler.toml (KV namespace) |
| var | NOTIFY_MAX_INBOX | wrangler.toml (default 1000) |

---

## Clients

| Client | Runtime | Uses |
|--------|---------|------|
| talk.js | Browser | /talk/send, /talk/inbox, /talk/ack |
| DECK sites | Browser | /talk/inbox (notification badges) |
| iOS native | iOS | /talk/send, /talk/inbox |
| MAGIC CLI | Terminal | /talk/send |

---

*NOTIFIER | SPEC | SERVICES*
<!-- _generated: build-surfaces -->

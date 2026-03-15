---
layout: service
title: "EMAIL — CANON"
scope: EMAIL
talk: true
---

inherits: canonic-canonic/MAGIC/SERVICES

---

## Purpose

**EMAIL is the governed correspondence service. Every outbound message ledgered, every sender BCC'd.**

EMAIL composes the Resend delivery API with LEDGER evidence. No email leaves the system without a provenance trail. BCC-sender is a hard constraint — the sender always sees what was sent.

---

## Composition

```
Primitive:  SEND (what you DELIVER) + LEDGER (what you PROVE)
Service:    EMAIL (governed correspondence product)
Instance:   POST /email/send on canonic-services worker
```

---

## Infrastructure

```
Worker:     canonic-services (Cloudflare Workers)
Domain:     api.canonic.org/email/*
Upstream:   https://api.resend.com/emails (Resend API)
Config:     RESEND_API_KEY (secret), EMAIL_FROM (var)
```

---

## API Routes

| Method | Path | Auth | Rate | Purpose |
|--------|------|------|------|---------|
| POST | /email/send | Bearer | 10/hr per IP | Send branded HTML email |

### Send

```
POST /email/send
{
  "to":       "<recipient email>",
  "subject":  "<subject line>",
  "html":     "<HTML body>",
  "from":     "<optional sender override>",
  "cc":       "<optional CC>",
  "bcc":      "<optional additional BCC>",
  "reply_to": "<optional reply-to>"
}

Response:
{
  "ok":        true,
  "resend_id": "<Resend message ID>",
  "work_ref":  "<resend_id for LEDGER>"
}
```

---

## Constraints

```
MUST:     BCC sender on every outbound — sender always sees what was sent
MUST:     Ledger every send as type EMAIL with work_ref = resend_id
MUST:     Retry on transient failure (fetchWithRetry, max 2 retries)
MUST:     Require RESEND_API_KEY — fail fast if not configured
MUST:     Rate-limit by IP (10/hr) — protect Resend budget
MUST NOT: Send without BCC — no silent correspondence
MUST NOT: Expose RESEND_API_KEY in response or logs
MUST NOT: Send to unvalidated addresses (sanitize input)
```

---

## Record Shape

```
| Field      | Type     | Required |
|------------|----------|----------|
| to         | string   | yes      |
| cc         | string[] | no       |
| bcc        | string[] | yes (auto-populated with sender) |
| subject    | string   | yes      |
| from       | string   | yes (defaults to EMAIL_FROM) |
| work_ref   | string   | yes (resend_id) |
```

---

## LEDGER Projection

```
Every email send → LEDGER entry:
  type:     EMAIL
  scope:    EMAIL
  signal:   CORRESPONDENCE_SENT
  work_ref: resend_id from Resend API response
```

---

## Axiom

**EMAIL is SEND + LEDGER composed. Every outbound governed. Every provenance traced. BCC is non-negotiable.**

---

*EMAIL | CANON | SERVICES*

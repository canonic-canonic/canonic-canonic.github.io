---
layout: service
title: "VERTICALS — CANON"
scope: VERTICALS
talk: true
sitemap: false
---

inherits: canonic-canonic/INDUSTRIES

---

## Axiom

**VERTICAL is a domain-specific market. SERVICE = PRIMITIVE(s) + VERTICAL.**

---

## Lattice

All verticals default to **ENTERPRISE (#63)** — 6 governance checks. Full governance. Because every vertical maps to real-world standards with institutional enforcement.

---

## Children

| Vertical | Standard | Tier | Status |
|----------|----------|------|--------|
| AEROSPACE | DO-178C / ARP4754A | ENTERPRISE (#63) | Governed |
| AGRICULTURE | USDA GAP / ISOBUS | ENTERPRISE (#63) | Governed |
| AUTOMOTIVE | ISO 26262 / SAE J3016 | ENTERPRISE (#63) | Governed |
| DEFENSE | CMMC / NIST 800-171 | ENTERPRISE (#63) | Governed |
| EDUCATION | FERPA / SACSCOC | ENTERPRISE (#63) | Governed |
| ENERGY | NERC CIP / NRC 10 CFR | ENTERPRISE (#63) | Governed |
| FINANCE | GAAP / SOX / Basel | ENTERPRISE (#63) | Governed |
| GENOMICS | ACMG/AMP / GA4GH | ENTERPRISE (#63) | Governed |
| LOGISTICS | GS1 / ISO 28000 | ENTERPRISE (#63) | Governed |
| MANUFACTURING | ISA-95 / IEC 62443 | ENTERPRISE (#63) | Governed |
| MEDICINE | mCODE / FHIR / HIPAA | ENTERPRISE (#63) | Governed |
| QUALITY | ISO 9001 / AS9100 | ENTERPRISE (#63) | Governed |
| REAL_ESTATE | FAR/BAR / USPAP | ENTERPRISE (#63) | Governed |
| RELIGION | Canonical texts / institutional forms | ENTERPRISE (#63) | Governed |
| ROBOTICS | IEC 61508 / ISO 10218 | ENTERPRISE (#63) | Governed |

---

## Composition Rules

- **VERTICAL × HORIZONTAL** = domain-specific compliance (e.g., MEDICINE × SAFETY = medical device safety)
- **VERTICAL × REGULATORY** = domain-specific regulation (e.g., FINANCE × LAW = financial regulation)
- **VERTICAL × VERTICAL** = cross-domain product (e.g., MEDICINE × GENOMICS = precision medicine)

---

## Onboarding

To add a new vertical:

1. Create directory under `VERTICALS/[NAME]/`
2. Write CANON.md inheriting `canonic-canonic/INDUSTRIES/VERTICALS`
3. Define 5 domain axioms with examples
4. Map domain standard to lattice formula
5. Define subdomains with SIL/DAL/ASIL-to-MAGIC tier mapping
6. Write validators, examples (DECLARE), and application steps
7. Run `magic validate` — 255 or reject

---

---

## Status

| Vertical | Status | Evidence |
|----------|--------|----------|
| MEDICINE | LIVE | SERVICE proof: TALK, SHOP, INTEL |
| FINANCE | LIVE | SERVICE proof: TALK, INTEL |
| AEROSPACE | DEFERRED | Governed, no service proof |
| AGRICULTURE | DEFERRED | Governed, no service proof |
| AUTOMOTIVE | DEFERRED | Governed, no service proof |
| DEFENSE | DEFERRED | Governed, no service proof |
| EDUCATION | DEFERRED | Governed, no service proof |
| ENERGY | DEFERRED | Governed, no service proof |
| GENOMICS | DEFERRED | Governed, no service proof |
| LOGISTICS | DEFERRED | Governed, no service proof |
| MANUFACTURING | DEFERRED | Governed, no service proof |
| QUALITY | DEFERRED | Governed, no service proof |
| REAL_ESTATE | DEFERRED | Governed, no service proof |
| RELIGION | DEFERRED | Governed, no service proof |
| ROBOTICS | DEFERRED | Governed, no service proof |

LIVE = has at least one deployed SERVICE. DEFERRED = governance complete, awaiting service proof.

---

*VERTICALS | SPEC | INDUSTRIES*

---

## Axioms

- Verticals MUST compose all six MAGIC checkset checks (6 governance checks = #63 ENTERPRISE).
- Verticals MUST define domain-specific structural standards.
- Verticals MUST maintain institutional maturity across declaration, evidence, temporality, jurisdiction, enforcement, and structure.

---

*VERTICALS | CANON | INDUSTRIES*
<!-- _generated: build-surfaces -->

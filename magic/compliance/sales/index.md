---
layout: default
scope: SALES
title: "SALES"
description: "CHAT about MAGIC. How MAGIC talks to buyers."
footerTagline: "SALES"
talk: side
view: web
views:
  - gov
  - web
  - tex
pdf: /magic/compliance/sales/sales.pdf
downloads:
  - label: "PDF"
    href: "/magic/compliance/sales/sales.pdf"
hero:
  badge: SALES
  title: "SALES"
  description: "CHAT about MAGIC. How MAGIC talks to buyers."
  cta:
    - label: "Open SALES"
      href: /magic/compliance/sales/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

## Axioms

### 1. Value Proposition by Segment

Every sales conversation MUST lead with the buyer's pain, not MAGIC's features.

**Example**: Segment-specific value propositions:
- **Healthcare Systems**: "Your AI decisions are ungoverned. When OCR audits your AI-assisted clinical workflows, can you produce a complete evidence trail? MAGIC provides continuous compliance verification — every clinical AI interaction is governed, logged, and auditable against HIPAA, FDA, and CMS requirements. One customer reduced audit preparation time from 6 weeks to 2 days."
- **Financial Institutions**: "SOX Section 404 requires you to demonstrate internal controls over AI-generated financial reporting. MAGIC provides the governance layer that maps every AI output to its evidence basis, jurisdiction, and approval chain. Auditors get a 255-bit compliance score instead of a binder."
- **Government/Defense**: "FedRAMP requires continuous monitoring. CMMC Level 2 requires 110 security practices. MAGIC validates compliance at O(1) — every artifact, every time, instantly. No sampling. No spot checks. Complete coverage."
- **AI/ML Companies**: "EU AI Act conformity assessment requires risk management, human oversight, and transparency documentation for high-risk AI. MAGIC provides machine-enforceable governance that satisfies these requirements by construction, not by documentation."

---

### 2. Discovery Framework

Sales discovery MUST uncover budget, authority, need, and timeline before proposing solutions.

**Example**: MAGIC discovery questions (BANT + Pain):
- **Budget**: "What are you currently spending on compliance documentation and audit preparation? What's the cost of a single HIPAA violation to your organization?"
- **Authority**: "Who approves enterprise software purchases in your organization? Is there a clinical governance committee that evaluates AI tools?"
- **Need**: "How are you currently governing AI-assisted clinical decisions? What happens when a clinician questions an AI recommendation — can you trace the evidence chain?"
- **Timeline**: "When is your next regulatory audit? When does your current compliance tool contract expire? Are there any upcoming regulatory deadlines driving urgency?"
- **Pain**: "What keeps your Chief Compliance Officer up at night? Have you received any 483 observations or Warning Letters related to AI/software validation?"

Qualify out early if: no budget authority, no regulatory pressure, no AI in production.

---

### 3. Objection Handling

Every common objection MUST have a documented response with evidence.

**Example**: Top 5 objections and responses:
- **"Too expensive"** → "What's the cost of a single HIPAA breach ($1.9M average)? A single FDA Warning Letter? MAGIC is insurance against governance failure. At $100K/year, you're paying $274/day for continuous compliance verification across your entire AI portfolio."
- **"We can build this internally"** → "Can you? MAGIC is a 35KB C kernel with O(1) compliance checking, backed by 6 provisional patents and 90 claims. Building dimensional governance from scratch requires solving an 8-dimensional compliance space. Our patent portfolio covers the approach."
- **"We're not ready for AI governance"** → "The EU AI Act doesn't ask if you're ready — it requires conformity assessment for high-risk AI by August 2026. ONC information blocking penalties started in 2024. The question isn't readiness — it's timeline."
- **"How is this different from SOC 2?"** → "SOC 2 is a point-in-time audit of controls. MAGIC is continuous, machine-enforceable governance. SOC 2 tells you that controls existed during the audit period. MAGIC tells you that every artifact is governed right now, with a score you can verify in O(1)."
- **"We use Epic/Cerner — they handle compliance"** → "EHR vendors govern their own ecosystem. What governs your AI models, your clinical decision support, your third-party integrations, your research data? MAGIC governs the work that happens between and around your EHR."

---

### 4. Sales Process

The sales cycle MUST follow defined stages with exit criteria at each stage.

**Example**: MAGIC sales process (6 stages):
1. **PROSPECT** (Week 1-2): Identify organizations with AI in regulated workflows. Entry: regulatory pressure + AI deployment. Exit: qualified lead with identified champion.
2. **DISCOVER** (Week 2-4): BANT qualification + pain documentation. Entry: champion engaged. Exit: documented pain, budget range, decision timeline, buying committee mapped.
3. **EVALUATE** (Week 4-8): Technical demo, pilot scoping, architecture review. Entry: technical stakeholder engaged. Exit: pilot agreement signed, success criteria defined.
4. **PILOT** (Week 8-16): Deploy MAGIC in production scope. Measure against success criteria. Entry: pilot agreement. Exit: success criteria met, business case validated.
5. **NEGOTIATE** (Week 16-20): Contract terms, pricing, legal review. Entry: champion advocates internally. Exit: signed contract.
6. **DEPLOY** (Week 20-24): Full production rollout, training, success measurement. Entry: signed contract. Exit: go-live + first compliance report delivered.

Healthcare enterprise: 16-24 weeks typical. SMB/startup: 4-8 weeks. Government: 24-52 weeks (procurement cycle).

---

### 5. Pricing Strategy

Pricing MUST be anchored to compliance value, not cost-plus or competitive parity.

**Example**: MAGIC pricing tiers:
- **COMMUNITY (35)**: Free. Open source governance validation. Seed ecosystem adoption.
- **BUSINESS (43)**: $500/month ($6K/year). Self-serve. Up to 10 governed scopes. Email support.
- **ENTERPRISE (63)**: $8,500/month ($100K/year). Up to 100 governed scopes. Dedicated support. SSO/SAML. Custom integrations. SLA.
- **AGENT (127)**: $21,000/month ($250K/year). Unlimited scopes. Full primitive composition. API access. White-label option. 24/7 support.
- **FULL (255)**: Custom pricing ($500K-$2M/year). All 8 dimensions enforced. On-premise option. Dedicated CSM. Regulatory filing support.

Anchor: "A single HIPAA breach costs $1.9M average. A single FDA Warning Letter costs $500K+ in remediation. MAGIC ENTERPRISE at $100K/year is <5% of the cost of one compliance failure."

Expansion motion: Land at ENTERPRISE (63), expand to AGENT (127) as AI deployment grows.

---

### 6. Reference Architecture

Every sales engagement MUST include a reference deployment that demonstrates governance in production.

**Example**: MAMMOCHAT reference deployment:
- **What it is**: AI-assisted breast cancer screening governance at AdventHealth (550+ facilities, $14B system).
- **How MAGIC governs**: Every clinical interaction is logged in TRANSCRIPT ledger. mCODE-compliant. FHIR-native. Evidence traced to NCCN guidelines. Clinician credentials verified against scope-of-practice. 20,000+ governed encounters.
- **What it proves**: MAGIC works in production healthcare at scale. Governance doesn't slow clinical workflows. Compliance is continuous, not periodic. The audit trail is complete.
- **Metrics**: [Fill with actual production metrics when available — encounter volume, compliance score distribution, clinician adoption rate, time-to-evidence-trace].

---

### 7. Developer Certification in Sales Cycle

Certification MUST be visible in every sales stage. Certified developers close deals.

| Stage | Certification Role |
|-------|-------------------|
| PROSPECT | FOUNDATION/developers page — "our team is certified at 255" |
| DISCOVER | Show buyer cert/ tag verification — reproducible proof |
| EVALUATE | Assign ENTERPRISE+ certified developer to technical demo |
| PILOT | Certified developer leads pilot deployment |
| NEGOTIATE | Certification tier justifies rate card — FULL principal = premium |
| DEPLOY | FULL-certified principal leads production rollout |

Verification: buyer checks out cert tag → runs `magic validate` → gets same score. No trust required — only proof.

---

## Constraints

```
MUST:     Lead with buyer pain, never product features
MUST:     Price to compliance value, not cost-plus
MUST:     Show certified developer team in DISCOVER stage
MUST NOT: Discount below ENTERPRISE floor without VP approval
MUST NOT: Assign uncertified developers to PILOT or DEPLOY stages
```

---

*SALES | CANON | COMPLIANCE*

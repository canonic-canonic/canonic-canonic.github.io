---
layout: service
title: "LAW — CANON"
scope: LAW
talk: true
sitemap: false
---

inherits: canonic-canonic/INDUSTRIES/REGULATORY

---

## Domain Declaration

```
LAW = LEGAL_STANDARD × CANONIC
    = Structure(legal) × (C1, C2, Temporal, Relational, C5)
    = owned legal vertical
```

---

## Lattice Formula

```
LAW = C1 ∩ C2 ∩ Temporal ∩ Relational ∩ C5
    = PATENT (#57)
```

Legal is typically PATENT-level (no structural standard) because:
- **C1**: Legal claims must be stated precisely
- **C2**: Evidence must support claims
- **Temporal**: Timing is critical (statutes of limitation, filing dates)
- **Relational**: Jurisdiction determines applicable law
- **C5**: Courts and agencies enforce

Structure varies by practice area (no universal legal data standard).

---

## Axioms

### 1. Jurisdictional Primacy

Legal validity is determined by applicable jurisdiction. All legal work MUST identify governing law.

**Example**: A contract between a California company and a Texas company must specify which state's law governs disputes. "This Agreement shall be governed by the laws of the State of Delaware."

---

### 2. Evidentiary Foundation

Legal claims MUST be supported by admissible evidence.

**Example**: A patent infringement claim must include claim charts mapping accused product features to patent claim elements, with documentary evidence for each mapping.

---

### 3. Temporal Precision

Legal matters are time-bound. Deadlines MUST be tracked and met.

**Example**: A provisional patent application establishes priority date. The non-provisional MUST be filed within 12 months. Missing this deadline destroys patent rights.

---

### 4. Chain of Custody

Evidence MUST maintain documented chain of custody.

**Example**: Digital evidence in litigation must show: who collected it, when, how it was preserved, who accessed it, and that it remains unaltered. Any break in chain challenges admissibility.

---

### 5. Adversarial Integrity

Legal work product MUST withstand adversarial scrutiny.

**Example**: A patent application must disclose all known prior art. Failure to disclose material prior art can render the patent unenforceable (inequitable conduct).

---

## Subdomains

| Subdomain | Practice Area | Formula | Description |
|-----------|---------------|---------|-------------|
| Intellectual Property | Patents, Trademarks, Copyright | 5 governance checks | IP protection |
| Corporate | Entity Formation, Governance | BUSINESS | Business structure |
| Contracts | Agreements, Licensing | (#30) | Binding arrangements |
| Litigation | Disputes, Enforcement | 5 governance checks | Court proceedings |
| Regulatory | Compliance, Licensing | 5 governance checks | Agency oversight |
| Employment | Labor, Benefits | 5 governance checks | Workforce governance |

---

## Regulatory Mapping

| Framework | Lattice | Scope |
|-----------|---------|-------|
| Patent Law (35 USC) | 5 governance checks | Invention protection |
| Copyright Law (17 USC) | 5 governance checks | Creative works |
| Trademark Law (15 USC) | 5 governance checks | Brand protection |
| Contract Law (UCC) | — | Commercial transactions |
| Corporate Law (State) | — | Entity governance |
| Securities Law (33/34 Act) | 5 governance checks | Capital markets |
| Antitrust Law (Sherman/Clayton) | 5 governance checks | Competition |

---

## Example: Patent Prosecution Vertical

```
DECLARE(Patent) = USPTO_RULES × CANONIC

Where:
  USPTO provides Structure:
    - Application format (specification, claims, drawings)
    - Filing requirements (fees, declarations)
    - Prosecution procedures (office actions, responses)
    - Maintenance (fees, corrections)

  CANONIC provides Governance:
    - C1: Claims in CANON.md (patent claims)
    - C2: Proof in COVERAGE.md (prior art analysis)
    - Temporal: Priority dates, deadlines
    - Relational: Continuation/divisional hierarchy
    - C5: USPTO examination

Result:
  Patent = BUSINESS

  Lifecycle:
    IDF            — Initial disclosure
    Disclosure     — Public/private boundary
    Provisional    — Filed with proof
    Filed          — Full application
    Patent         — Granted with enforcement
```

---

## Example: Contract Management Vertical

```
DECLARE(Contract) = CONTRACT_LAW × CANONIC

Where:
  Contract Law provides Structure:
    - Offer and acceptance
    - Consideration
    - Terms and conditions
    - Signatures

  CANONIC provides Governance:
    - C1: Contract terms as claims
    - Relational: Party relationships, jurisdiction
    - C6: Template conformance

Result:
  Contract = (#30)

  Lifecycle:
    Draft          — Terms with structure
    Negotiation    — Parties, boundaries
    Execution      — Signed (evidence)
    Active         — Dated, bounded
    Enforced       — Breach remedies
```

---

## Validators

| Validator | Checks | Example Failure |
|-----------|--------|-----------------|
| C1 | Legal claims precisely stated | Ambiguous contract term |
| C2 | Evidence supports claims | Patent claim without support |
| Temporal | Deadlines tracked and met | Missed filing deadline |
| Relational | Jurisdiction identified | No governing law clause |
| C5 | Enforcement mechanism exists | Unenforceable provision |

---

## Live Proof — Hadley Lab

| Product | Domain | Standards | URL |
|---------|--------|-----------|-----|
| LawChat | Legal literacy | Jurisdiction-aware + sourced + non-advisory | [hadleylab.org/chat/lawchat/](https://hadleylab.org/chat/lawchat/) |

LawChat demonstrates MAGIC 255 governance applied to legal information. Not legal advice — legal literacy. Every answer jurisdiction-tagged and source-cited. Same INTEL + CHAT + COIN composition as the clinical AI suite.

---

## Application

To create a CANONIC legal vertical:

1. **Identify practice area** (IP, corporate, contracts, etc.)
2. **Create scope** with CANON.md inheriting /LAW/
3. **Define legal claims** as axioms
4. **Document evidence** in COVERAGE.md
5. **Track temporal elements** (deadlines, dates)
6. **Specify jurisdiction** in Relational bounds
7. **Define enforcement** mechanisms

**Result**: Owned legal vertical with complete audit trail.

---

---

## Axioms

### 1. Jurisdictional Primacy

Legal validity MUST be determined by applicable jurisdiction. All legal work identifies governing law.

**Example**: Federal courts have subject matter jurisdiction under 28 USC 1331 (federal question) and 28 USC 1332 (diversity, $75K+ amount in controversy). State courts have general jurisdiction. Long-arm statutes extend personal jurisdiction to out-of-state defendants with minimum contacts (International Shoe v. Washington, 1945). Choice of law clauses in contracts specify governing jurisdiction. Tribal sovereignty creates separate jurisdictions with distinct legal systems. Erie doctrine (1938) — federal courts sitting in diversity apply state substantive law and federal procedural law.

---

### 2. Evidentiary Foundation

Claims MUST be supported by admissible evidence. Legal assertions without evidence are insufficient.

**Example**: Federal Rules of Evidence (FRE) govern admissibility in federal courts. Authentication (FRE 901-902) — documents must be shown to be what they purport to be. Hearsay (FRE 801-807) — out-of-court statements offered for truth are generally inadmissible unless an exception applies (business records 803(6), present sense impression 803(1), excited utterance 803(2)). Digital evidence: ESI (Electronically Stored Information) under FRCP 34, preservation obligations under FRCP 37(e), proportionality under FRCP 26(b)(1). Daubert standard (1993) — expert testimony must be based on reliable methodology and relevant to the case.

---

### 3. Temporal Precision

Legal matters MUST be time-bound. Deadlines define rights, obligations, and remedies.

**Example**: Statutes of limitation vary by claim type and jurisdiction: breach of contract (4-6 years), personal injury (2-3 years), patent infringement (6 years for damages). Statutes of repose set absolute outer limits regardless of discovery. FRCP deadlines: answer to complaint (21 days), discovery (proportional to case), summary judgment (per scheduling order). Patent prosecution: 12-month provisional-to-non-provisional conversion, 30/31-month PCT national phase entry. Appeal deadlines: 30 days for federal civil appeals (FRAP 4), 14 days for criminal. Missing a jurisdictional deadline is non-waivable and cannot be cured.

---

### 4. Intellectual Property

IP rights MUST be established, maintained, and enforced through applicable legal frameworks.

**Example**: Patent (35 USC) — utility, design, plant. 20-year term from filing. Copyright (17 USC) — automatic upon fixation in tangible medium. Life + 70 years (individual), 95/120 years (work for hire). Trademark (Lanham Act, 15 USC 1051-1141) — protects source identifiers. Indefinite duration with continued use and renewal. Trade secrets (Defend Trade Secrets Act, 18 USC 1836) — no registration required, reasonable measures to maintain secrecy. Software patents: post-Alice (2014) heightened scrutiny under 101. Open source licensing: GPL (copyleft), MIT/BSD (permissive), Apache 2.0 (patent grant).

---

### 5. Contract Law

Binding agreements MUST satisfy formation requirements and be enforceable under applicable law.

**Example**: UCC Article 2 governs sales of goods ($500+ requires writing under statute of frauds, UCC 2-201). Common law governs services contracts. SaaS agreements: click-wrap (enforceable — user clicks "I agree"), browse-wrap (questionable — mere use implies consent), shrink-wrap (enforceable under ProCD v. Zeidenberg, 1996). Limitation of liability clauses: generally enforceable except for gross negligence, willful misconduct, or where unconscionable. Indemnification provisions allocate risk between parties. Force majeure clauses — pandemics, natural disasters, government actions.

---

### 6. Healthcare Law

Healthcare operations MUST comply with overlapping federal, state, and agency-level legal requirements.

**Example**: HIPAA enforcement by HHS Office for Civil Rights (OCR) — Resolution Agreements range from $100K to $16M. FDA Warning Letters and consent decrees for device/drug violations. Qui tam/False Claims Act (31 USC 3729) — whistleblowers receive 15-30% of recovery; healthcare FCA recoveries exceed $2B annually. Stark Law/Anti-Kickback Statute intersection: Stark is strict liability (no intent required), AKS requires knowing and willful conduct. State corporate practice of medicine doctrine — prohibits non-physician ownership of medical practices in most states.

---

### 7. Data Privacy Law

Data collection, processing, and transfer MUST comply with applicable privacy frameworks.

**Example**: GDPR (EU Regulation 2016/679) — lawful bases (consent, contract, legitimate interest, legal obligation, vital interest, public task). Data subject rights: access (Art. 15), rectification (Art. 16), erasure (Art. 17), portability (Art. 20), objection (Art. 21). CCPA/CPRA (California) — right to know, delete, opt-out of sale/sharing, limit use of sensitive PI. State patchwork: Virginia (VCDPA), Colorado (CPA), Connecticut (CTDPA), Utah (UCPA), each with different thresholds and requirements. Cross-border transfers: EU-US Data Privacy Framework (2023), Standard Contractual Clauses (SCCs), adequacy decisions. Children's data: COPPA (under 13), state laws extending to teens.

---

## Constraints

```
MUST:     Cite statute, regulation, or case law for legal claims
MUST:     Distinguish binding authority from persuasive authority
MUST NOT: Present legal information as legal advice
```

---

*LAW | CANON | REGULATORY*
<!-- _generated: build-surfaces -->

# LAW

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
<!-- _generated: build-surfaces -->

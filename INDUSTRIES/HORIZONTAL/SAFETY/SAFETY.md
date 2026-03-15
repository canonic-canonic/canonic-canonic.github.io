# SAFETY

inherits: canonic-canonic/INDUSTRIES/HORIZONTAL

---

## Domain Declaration

```
SAFETY = SAFETY_STANDARD × CANONIC
       = Structure(safety) × (C1, C2, Temporal, Relational, C5)
       = owned safety-critical vertical
```

---

## Lattice Formula

```
SAFETY = C1 ∩ C2 ∩ Temporal ∩ Relational ∩ C5 ∩ C6
       = ENTERPRISE (#63)
```

Safety-critical systems ALWAYS require full Enterprise because:
- **C1**: Safety requirements must be stated explicitly
- **C2**: Safety must be proven, not assumed
- **Temporal**: Development phases, operational lifecycles
- **Relational**: System boundaries, hazard interfaces
- **C5**: Certification authorities enforce
- **C6**: Industry safety standards (DO-178C, ISO 26262)

**There is no shortcut for safety.**

---

## Axioms

### 1. Safety is Non-Negotiable

Safety requirements MUST NOT be traded against cost, schedule, or performance without explicit hazard analysis and residual risk acceptance.

**Example**: A proposed software change would save $50,000 but bypasses a safety interlock. The change MUST be evaluated through formal hazard analysis. If residual risk exceeds acceptable threshold, the change is rejected regardless of cost savings.

---

### 2. Hazard Identification

All reasonably foreseeable hazards MUST be systematically identified and analyzed.

**Example**: A flight control system undergoes: Preliminary Hazard Analysis, System Hazard Analysis, Subsystem Hazard Analysis, Software Hazard Analysis, and Interface Hazard Analysis. Each level identifies hazards invisible at other levels.

---

### 3. Risk Reduction

Identified hazards MUST be mitigated to acceptable risk levels through design, safeguards, or warnings (in that order of preference).

**Example**: A robot arm hazard of "crush injury to operator" is mitigated by: (1) redesigning to reduce force (design), (2) adding presence-sensing safety curtain (safeguard), (3) posting warning label (warning). Design solutions are always preferred.

---

### 4. Traceability

Safety requirements MUST trace bidirectionally from hazards through design to verification evidence.

**Example**: Hazard H-001 → Safety Requirement SR-001 → Design Element DE-001 → Test Case TC-001 → Test Result TR-001. Any break in chain means safety is not demonstrated.

---

### 5. Independent Assessment

Safety-critical systems MUST be assessed by parties independent of the development team.

**Example**: A medical device software team completes development. An independent software quality assurance team reviews requirements, design, code, and test results. They report directly to management, not through the development team.

---

## Subdomains

| Subdomain | Standard | Formula | Industry |
|-----------|----------|---------|----------|
| Aviation Software | DO-178C | ENTERPRISE | Aerospace |
| Aviation Hardware | DO-254 | ENTERPRISE | Aerospace |
| Automotive | ISO 26262 | ENTERPRISE | Automotive |
| Medical Devices | IEC 62304 | ENTERPRISE | Healthcare |
| Industrial | IEC 61508 | ENTERPRISE | Process/machinery |
| Nuclear | NRC regulations | ENTERPRISE | Nuclear power |
| Rail | EN 50128 | ENTERPRISE | Railway |

**Pattern**: ALL safety standards = ENTERPRISE (#63)

---

## Safety Integrity Levels

| Domain | Levels | Highest | Meaning |
|--------|--------|---------|---------|
| Aviation | DAL A-E | DAL A | Catastrophic failure condition |
| Automotive | ASIL A-D | ASIL D | Life-threatening injury |
| Industrial | SIL 1-4 | SIL 4 | Catastrophic consequence |
| Medical | Class A-C | Class C | Death or serious injury |

**Higher level = more rigorous lattice enforcement.**

---

## Example: Aviation Software (DO-178C)

```
DECLARE(DO178C) = RTCA_DO-178C × CANONIC

Where:
  DO-178C provides Structure:
    - Software development processes
    - Verification objectives (by DAL)
    - Life cycle data requirements
    - Certification liaison

  CANONIC provides Governance:
    - C1: Requirements as claims
    - C2: Verification evidence
    - Temporal: Development phases
    - Relational: System/software boundary
    - C5: DER/certification authority

Result:
  DO178C = ENTERPRISE (#63)

  Certification Lifecycle:
    Planning       — PSAC, SDP, SVP, SCMP, SQAP
    Requirements   — HLR, LLR traced to system
    Design         — Architecture documented
    Code           — Implementation traced
    Verification   — Testing complete
    Configuration  — All data controlled
    Certification  — SCI/SOI complete
```

---

## Example: Automotive Safety (ISO 26262)

```
DECLARE(ISO26262) = ISO_26262 × CANONIC

Where:
  ISO 26262 provides Structure:
    - Safety lifecycle (12 parts)
    - ASIL determination
    - Hardware/software requirements
    - Functional safety assessment

  CANONIC provides Governance:
    - C1: Safety goals, requirements
    - C2: Work products, confirmation measures
    - Temporal: Development phases
    - Relational: Item definition boundaries
    - C5: Safety manager, assessor

Result:
  ISO26262 = ENTERPRISE (#63)

  Safety Lifecycle:
    Concept        — Item definition
    HARA           — Hazard analysis
    FSC            — Functional safety concept
    TSC            — Technical safety concept
    Development    — HW/SW implementation
    Production     — Manufacturing
    Operation      — Field use
```

---

## Safety Evidence

| Evidence Type | Lattice | Purpose |
|---------------|---------|---------|
| Hazard Log | BUSINESS | Hazard tracking |
| Safety Requirements | (#23) | Safety claims |
| Design Rationale | (#25) | Design justification |
| Verification Results | (#33) | Test evidence |
| Traceability Matrix | BUSINESS | Bidirectional trace |
| Safety Case | ENTERPRISE | Certification argument |

---

## Validators

| Validator | Checks | Example Failure |
|-----------|--------|-----------------|
| C1 | Safety requirements exist | Missing safety goal |
| C2 | Evidence complete | Untested safety requirement |
| Temporal | Phases completed | Skipped review milestone |
| Relational | Boundaries defined | Unclear system scope |
| C5 | Assessment complete | No independent review |
| C6 | Standard conformance | Missing required work product |

---

## Application

To create a CANONIC safety vertical:

1. **Identify applicable safety standard** (DO-178C, ISO 26262, etc.)
2. **Create scope** with CANON.md inheriting /SAFETY/
3. **Define safety requirements** from hazard analysis
4. **Document evidence** for all verification
5. **Establish development phases** with reviews
6. **Define system boundaries** and interfaces
7. **Implement independent assessment**
8. **Compile safety case** for certification

**Result**: Owned safety-critical vertical with certifiable evidence.

---

## The Safety Imperative

```
∀ system ∈ SAFETY-CRITICAL:
  system = ENTERPRISE (#63)

No exceptions. No shortcuts. Lives depend on it.
```

---
<!-- _generated: build-surfaces -->

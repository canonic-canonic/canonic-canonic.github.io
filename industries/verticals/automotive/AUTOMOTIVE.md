# AUTOMOTIVE

inherits: canonic-canonic/INDUSTRIES/VERTICALS
---

## Specification

```
AUTOMOTIVE = AUTOMOTIVE_STANDARD × CANONIC
           = Structure(automotive) × (C1, C2, Temporal, Relational, C5, C6)
```

**Lattice**: 6 governance checks = ENTERPRISE (#63)

---

## Dimensional Mapping

| Dimension | Bit | Automotive Governance |
|-----------|-----|----------------------|
| C1 | private | Safety goals — ASIL-classified hazard declarations from HARA |
| C2 | private | ASIL evidence — test reports, FMEA, safety case, PPAP documentation |
| T (Temporal) | 4 | OTA timing — update windows, rollback deadlines, safety response latency |
| R (Relational) | 8 | V2X boundaries — communication range, trust domains, certificate authorities |
| C5 | private | Driving operations — SAE level mode transitions, ODD monitoring, fallback |
| C6 | private | Vehicle architecture — E/E topology, domain controllers, zonal architecture |

---

## ASIL-to-MAGIC Tier Mapping

| ASIL | Risk | MAGIC Tier | Bits | Governance |
|------|------|-------------|------|------------|
| ASIL A | Low | COMMUNITY | #35 | Basic safety monitoring, single-point fault detection |
| ASIL B | Medium | BUSINESS | #43 | Dual-channel verification, diagnostic coverage ≥ 90% |
| ASIL C | High | ENTERPRISE | #63 | Full governance, SPFM ≥ 97% |
| ASIL D | Highest | AGENT | #127 | + C7 governance, SPFM ≥ 99%, PMHF < 10^-8/h |

---

## Subdomains

### Passenger Vehicles

```
Standard:    ISO 26262 (Functional Safety), FMVSS, EU GSR
ASIL Range:  ASIL A-D
Governance:  ENTERPRISE (#63) minimum for safety-critical
Application: Sedans, SUVs, minivans, hatchbacks
Key Systems: Braking (ABS/ESC), steering (EPS), airbags, ADAS
Regulation:  NHTSA (US), UNECE (EU), MLIT (Japan), GB (China)
```

### Commercial Vehicles

```
Standard:    ISO 26262, UNECE R13 (braking), R79 (steering)
ASIL Range:  ASIL B-D
Governance:  ENTERPRISE (#63) minimum
Application: Trucks, buses, trailers, construction vehicles
Key Systems: Advanced Emergency Braking (AEB), Electronic Stability Control (ESC)
Regulation:  FMCSA (US), EU Directive 2007/46/EC
Innovation:  MAGIC checkset governs platooning coordination, fleet-wide OTA
```

### Electric Vehicles (EV)

```
Standard:    ISO 26262, IEC 61851 (EV charging), ISO 15118 (V2G communication)
ASIL Range:  ASIL B-D (battery management = ASIL D)
Governance:  ENTERPRISE (#63) minimum
Application: BEV, PHEV, FCEV
Key Systems: Battery Management System (BMS), thermal management, charging
Key Hazards: Thermal runaway, electrical isolation failure, high-voltage exposure
Innovation:  MAGIC checkset governs cell-level monitoring, charging session governance
```

### Autonomous Vehicles

```
Standard:    SAE J3016, ISO 26262, UNECE R157 (ALKS), ISO/PAS 21448 (SOTIF)
ASIL Range:  ASIL D
Governance:  AGENT (#127) for Level 4-5
Application: Robotaxis, autonomous trucks, last-mile delivery
Key Systems: Sensor fusion (LiDAR, camera, radar), planning, decision-making
Regulation:  NHTSA ADS framework, UNECE WP.29, StVG (Germany)
Innovation:  MAGIC checkset governs ODD transitions, sensor fusion gating, MRC execution
```

### Connected Vehicles

```
Standard:    IEEE 802.11p, 3GPP C-V2X, SAE J2735/J2945, ISO/SAE 21434
ASIL Range:  ASIL A-C
Governance:  BUSINESS (#43) minimum
Application: V2V safety warnings, V2I traffic optimization, V2P protection
Key Systems: On-Board Unit (OBU), Roadside Unit (RSU), SCMS PKI
Innovation:  MAGIC checkset governs message authentication, trust boundary enforcement
```

### Motorsport

```
Standard:    FIA regulations, homologation requirements, race-specific safety
ASIL Range:  ASIL B-C (race systems), ASIL D (safety systems)
Governance:  BUSINESS (#43) minimum
Application: Formula 1, WEC, WRC, NASCAR, Formula E
Key Systems: Telemetry, HANS device, halo, energy recovery (KERS/MGU)
Innovation:  MAGIC checkset governs real-time telemetry governance, strategy compliance
```

---

## Regulatory Landscape

| Standard | Scope | Governance |
|----------|-------|------------|
| ISO 26262 | Functional safety — road vehicles | ASIL A-D → MAGIC checkset tier |
| SAE J3016 | Driving automation levels | Level-dependent |
| IATF 16949 | Automotive quality management | ENTERPRISE (#63) |
| UNECE WP.29 | Global vehicle regulations | Type approval framework |
| ISO/SAE 21434 | Cybersecurity engineering | CAL 1-4 → MAGIC checkset tier |
| FMVSS | US federal motor vehicle safety | ENTERPRISE (#63) |
| EU GSR | EU general safety regulation | ENTERPRISE (#63) |
| ISO/PAS 21448 | Safety of the Intended Functionality (SOTIF) | ENTERPRISE (#63) |
| ISO 15118 | Vehicle-to-grid communication | BUSINESS (#43) |
| UNECE R157 | Automated Lane Keeping Systems | AGENT (#127) |

---

## Prior Art Landscape

| Competitor | Approach | MAGIC checkset Distinction |
|-----------|----------|-------------------|
| Tesla FSD | End-to-end neural network, vision-only | No governance framework, no formal safety case, no bitwise verification |
| Waymo | Safety reports, simulation-heavy validation | Safety reports but no bitwise governance, no governance language |
| Mobileye RSS | Formal safety model (Responsibility-Sensitive Safety) | Mathematical safety model but no governance language, no bitwise encoding |
| AUTOSAR | Standardized automotive SW architecture | Architecture standard, no governance gates, no compliance verification |
| ISO/PAS 21448 SOTIF | Safety of intended functionality analysis | Analysis methodology, no runtime governance, no bitwise checking |

**Gap**: No existing system provides governance-gated vehicle control with O(1) bitwise compliance checking across ASIL levels and SAE autonomy levels simultaneously.

---

## Patent Mapping

| PROV | Relevance | Claims |
|------|-----------|--------|
| PROV-006 | PRIMARY | Governance-gated vehicle actuation, ASIL mapping, ODD enforcement |
| PROV-001 | Foundational | MAGIC private-check encoding for automotive governance verification |
| PROV-004 | Supporting | Transcompilation of ISO 26262/SAE J3016 to governed executables |

---

## Cross-Domain Compositions

```
AUTOMOTIVE × ROBOTICS       = Autonomous vehicles (ISO 26262 + SAE J3016 + ISO 10218)
AUTOMOTIVE × MANUFACTURING  = Vehicle production governance (IATF 16949 + IEC 62443)
AUTOMOTIVE × ENERGY         = EV charging governance (ISO 15118 + IEC 61851)
AUTOMOTIVE × LOGISTICS      = Fleet management, autonomous trucking (SAE J3016 + ISO 3691-4)
AUTOMOTIVE × AEROSPACE      = Flying cars / eVTOL (ISO 26262 + DO-178C)
AUTOMOTIVE × DEFENSE        = Military vehicles (ISO 26262 + MIL-STD-882)
AUTOMOTIVE × QUALITY        = Production quality (IATF 16949 + ISO 9001)
AUTOMOTIVE × SECURITY       = Vehicle cybersecurity (ISO/SAE 21434 + IEC 62443)
```

**8 cross-domain compositions. Each strengthens PROV-006 patent claims.**


---

## Axioms

### 1. Functional Safety Integrity

Vehicle systems MUST achieve the ASIL level determined by hazard analysis and risk assessment. No safety goal without ASIL assignment.

**Example**: Electric power steering loss at highway speed = ASIL D. The steering ECU MUST achieve SPFM ≥ 99%, PMHF < 10⁻⁸/h, and latent fault metric ≥ 90%. These metrics are not negotiable — they derive from the physics of the hazard.

---

### 2. OTA Update Governance

Over-the-air software updates to safety-relevant systems MUST be governed. No update without impact analysis, rollback capability, and informed consent.

**Example**: A brake calibration update pushed OTA MUST pass: (1) ISO 26262 change impact analysis, (2) SOTIF analysis for new behavior, (3) cybersecurity impact per ISO/SAE 21434, (4) regulatory notification per UNECE R156. The vehicle MUST verify update integrity before applying. Rollback MUST be available for 72 hours.

---

### 3. Cybersecurity by Design

Vehicle cybersecurity MUST be engineered from concept, not bolted on. Threat analysis MUST precede design.

**Example**: ISO/SAE 21434 requires TARA (Threat Analysis and Risk Assessment) at concept phase. A connected ECU with V2X capability MUST have: asset identification, threat scenarios, attack feasibility ratings, and cybersecurity goals — before a single line of code is written.

---

### 4. Type Approval Compliance

Vehicles MUST meet type approval requirements of every market where they are sold. No market entry without authority approval.

**Example**: A vehicle sold in the US and EU MUST comply with FMVSS (NHTSA) and UNECE regulations (EU). FMVSS 126 (ESC) and UNECE R140 (ESC) have different test procedures for the same function. Both MUST pass independently.

---

### 5. Recall Response

When a safety defect is identified, the manufacturer MUST initiate recall within the timeframe required by law. No delay for business reasons.

**Example**: NHTSA requires manufacturers to notify the agency within 5 business days of determining a safety defect exists. 49 CFR Part 573. The recall remedy MUST be provided at no cost to the owner. Every affected VIN MUST be traceable.

---

## Examples

```
DECLARE(ASIL_D_SafetyCase) = ISO_26262 × CANONIC

Where:
  ISO 26262 provides Structure:
    - Hazard analysis and risk assessment (Part 3)
    - System design (Part 4)
    - Hardware design (Part 5)
    - Software design (Part 6)
    - Safety validation (Part 4)

  CANONIC provides Governance:
    - C1: Safety goals with ASIL assignment
    - C2: Safety case evidence (FMEA, FTA, DFA, testing)
    - Temporal: Product development lifecycle, field monitoring
    - Relational: OEM/Tier1/Tier2 boundaries, market jurisdictions
    - C5: Vehicle operations (driving modes, degraded states)
    - C6: ISO 26262/AUTOSAR conformance

Result:
  ASIL_D_SafetyCase = AGENT (#127)

  Safety Lifecycle:
    Concept        — HARA completed, safety goals assigned
    Design         — Technical safety concept
    Implement      — SW/HW safety requirements verified
    Validate       — Safety validation complete
    Release        — Type approval granted
```

```
DECLARE(AutonomousVehicleODD) = SAE_J3016 × CANONIC

Where:
  SAE J3016 provides Structure:
    - Automation levels (0-5)
    - Operational Design Domain (ODD)
    - Dynamic Driving Task (DDT)
    - DDT fallback
    - Minimal Risk Condition (MRC)

  CANONIC provides Governance:
    - C1: ODD boundary claims (speed, weather, road type)
    - C2: Scenario evidence (simulation, test track, public road)
    - Temporal: ODD entry/exit timing, MRC response time
    - Relational: Geographic/regulatory boundaries
    - C5: Automated driving mode transitions
    - C6: SAE/ISO/UNECE conformance

Result:
  AutonomousVehicleODD at Level 4 = AGENT (#127)

  ODD Lifecycle:
    Define         — ODD parameters specified
    Simulate       — Scenario coverage in simulation
    Test           — Track + public road validation
    Certify        — Regulatory approval
    Operate        — Public deployment within ODD
```

## Validators

| Validator | Checks | Example Failure |
|-----------|--------|------------------|
| C1 | Safety goals stated with ASIL assignment from HARA | ECU without safety classification |
| C2 | Safety case evidence complete (FMEA, FTA, test reports) | Missing diagnostic coverage analysis |
| Temporal | OTA update windows, recall response timelines | Recall notification beyond 5-day deadline |
| Relational | OEM/tier boundaries, market jurisdictions, V2X trust domains | OTA pushed outside approved market |
| C5 | Driving mode transitions governed, fallback operating | ADS engaged outside ODD |
| C6 | ISO 26262/AUTOSAR/UNECE conformance validated | Non-compliant safety architecture |

## Application

To create a CANONIC automotive vertical:

1. **Identify vehicle system** (powertrain, chassis, ADAS, ADS, body)
2. **Perform HARA** and assign ASIL, map to MAGIC tier
3. **Create scope** with CANON.md inheriting /AUTOMOTIVE/
4. **Define safety goals** with ASIL assignment and technical safety concepts
5. **Map to regulatory framework** (ISO 26262, SAE J3016, UNECE)
6. **Implement validators** for safety evidence, OTA governance, cybersecurity
7. **Document coverage** with safety case artifacts

**Result**: Owned automotive vertical with ASIL-governed, type-approved operations.

---

*AUTOMOTIVE | SPECIFICATION | VERTICALS | INDUSTRIES*
<!-- _generated: build-surfaces -->

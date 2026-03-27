---
layout: service
title: "AUTOMOTIVE — CANON"
scope: AUTOMOTIVE
talk: true
sitemap: false
---

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

---

## Axioms

### 1. Vehicle Safety Integrity

All vehicle safety functions MUST be classified and governed according to automotive safety integrity levels.

**Example**: ISO 26262:2018 (Road Vehicles — Functional Safety) defines ASIL A through ASIL D based on severity, exposure, and controllability. ASIL D (highest) applies to steering, braking, and airbag systems — failures cause life-threatening or fatal injuries with high probability of exposure and difficult controllability. Safety goals derive from hazard analysis and risk assessment (HARA): e.g., "Unintended acceleration shall not exceed 0.3g for more than 200ms" (ASIL D). Functional safety concept allocates safety requirements to hardware (HW) and software (SW) elements. Hardware metrics: single-point fault metric (SPFM ≥ 99% for ASIL D), latent fault metric (LFM ≥ 90% for ASIL D), probabilistic metric for random hardware failures (PMHF < 10^-8/h for ASIL D). Software development per Part 6: ASIL D requires formal verification, back-to-back testing, semi-formal notations. MAGIC gate: bitwise AND of required ASIL dimensions before safety-critical ECU command executes.

---

### 2. Autonomous Driving Governance

Autonomous driving functions MUST be governed according to SAE autonomy levels with explicit ODD definition and fallback.

**Example**: SAE J3016:2021 defines six levels of driving automation: Level 0 (no automation — driver performs all DDT), Level 1 (driver assistance — single mode: ACC or lane keeping), Level 2 (partial automation — combined longitudinal and lateral control, driver must supervise), Level 3 (conditional automation — system performs DDT within ODD, driver is fallback-ready within 10s), Level 4 (high automation — system handles all DDT and fallback within ODD, no driver needed in ODD), Level 5 (full automation — all conditions, no ODD restriction). Operating Design Domain (ODD) defines: road types (highway, urban, rural), speed range, weather (clear, rain, fog, snow), lighting (day, night, tunnel), geographic boundaries (geofenced areas). Object and Event Detection and Response (OEDR): system must detect and respond to all objects and events within ODD. Fallback: Level 3 = human fallback (transition demand), Level 4-5 = system fallback (minimal risk condition — MRC). UNECE WP.29 ALKS regulation (R157): first binding Level 3 regulation — max 60 km/h, motorway only, system must achieve MRC within 4s.

---

### 3. Cybersecurity

Vehicle cybersecurity MUST be managed throughout the lifecycle with threat analysis, risk assessment, and continuous monitoring.

**Example**: ISO/SAE 21434:2021 (Road Vehicles — Cybersecurity Engineering) establishes cybersecurity management system (CSMS) across vehicle lifecycle: concept, development, production, operation, maintenance, decommissioning. Threat Analysis and Risk Assessment (TARA): identifies assets (ECU firmware, V2X keys, OTA payloads), threat scenarios (remote code execution, CAN bus injection, GNSS spoofing), attack paths (Bluetooth, Wi-Fi, OBD-II, cellular), and determines cybersecurity assurance levels (CAL 1-4). UNECE WP.29 R155 (Cyber Security Management System): mandates CSMS for type approval — 7 categories, 30 specific threats. R156 (Software Update Management System): governs OTA update process — integrity verification, rollback capability, update campaign management. Attack surface: CAN/CAN-FD (no authentication by default), Ethernet (SOME/IP, DoIP), V2X (IEEE 1609.2 certificates), telematics (cellular modem), infotainment (USB, Bluetooth, Wi-Fi). Secure boot chain: HSM → bootloader → OS → application, with each stage verifying the next.

---

### 4. Type Approval

Vehicles MUST obtain type approval demonstrating compliance with all applicable safety, emissions, and cybersecurity regulations.

**Example**: UNECE regulations provide harmonized type approval framework: R13 (braking — heavy vehicles), R13-H (braking — passenger), R79 (steering), R94 (frontal impact), R95 (side impact), R137 (frontal impact — updated), R127 (pedestrian safety). US Federal Motor Vehicle Safety Standards (FMVSS): FMVSS 108 (lighting), FMVSS 208 (occupant crash protection — frontal), FMVSS 214 (side impact), FMVSS 301 (fuel system integrity), FMVSS 305 (EV electrolyte spillage). EU General Safety Regulation (EU 2019/2144 — GSR): mandates intelligent speed assistance (ISA), alcohol interlock installation facilitation, drowsiness/attention warning, advanced emergency braking (AEB), emergency lane-keeping (ELKS), event data recorder (EDR), tire pressure monitoring (TPMS) — effective July 2022 for new types, July 2024 for all new vehicles. Homologation process: manufacturer submits technical documentation, test reports from accredited labs (e.g., Euro NCAP, TUV, DEKRA), authority issues type approval certificate with approval number.

---

### 5. V2X Communication

Vehicle-to-everything communication MUST be governed with authenticated messages, bounded latency, and privacy preservation.

**Example**: IEEE 802.11p (WAVE — Wireless Access in Vehicular Environments): 5.9 GHz band, 10 MHz channels, range 300-1000m, latency <100ms. C-V2X (Cellular Vehicle-to-Everything): 3GPP Release 14+ PC5 sidelink — direct communication without cellular infrastructure, latency <20ms for Mode 4. V2V (Vehicle-to-Vehicle): Basic Safety Message (BSM) per SAE J2735 — broadcasts position, speed, heading, acceleration, brake status at 10 Hz. V2I (Vehicle-to-Infrastructure): Signal Phase and Timing (SPaT), MAP (intersection geometry), Traveler Information Message (TIM). V2P (Vehicle-to-Pedestrian): vulnerable road user awareness. DSRC (Dedicated Short-Range Communications): IEEE 1609 family — 1609.2 (security services, PKI certificates), 1609.3 (networking), 1609.4 (multi-channel operation). Security: SCMS (Security Credential Management System) provides pseudonym certificates (rotating every 5 minutes for privacy), misbehavior detection, certificate revocation lists (CRL). Latency requirements: pre-crash warning <100ms, intersection collision <200ms, cooperative adaptive cruise control <50ms.

---

### 6. Quality & Production

Automotive quality management MUST follow IATF 16949 with core tools ensuring defect prevention and continuous improvement.

**Example**: IATF 16949:2016 (Quality Management System — Automotive) builds on ISO 9001 with automotive-specific requirements: customer-specific requirements (CSR), production part approval process (PPAP), control plans, MSA, SPC. PPAP (Production Part Approval Process) — 18 elements: design records, engineering change documents, DFMEA, process flow diagram, PFMEA, control plan, MSA studies, dimensional results, material/performance test results, initial process studies, qualified laboratory documentation, appearance approval report, sample parts, master sample, checking aids, customer-specific requirements, Part Submission Warrant (PSW), bulk material requirements. FMEA (Failure Mode and Effects Analysis): AIAG & VDA FMEA Handbook (2019) — 7-step process: planning and preparation, structure analysis, function analysis, failure analysis, risk analysis (AP — Action Priority instead of RPN), optimization, results documentation. SPC (Statistical Process Control): Cpk ≥ 1.33 for stable processes, Ppk ≥ 1.67 for new processes. MSA (Measurement Systems Analysis): Gage R&R — %GRR < 10% acceptable, 10-30% conditionally acceptable, >30% unacceptable. 8D problem-solving methodology for customer complaints.

---

## Constraints

```
MUST:     Cite ISO 26262, SAE J3016, or domain-specific standard for automotive claims
MUST:     Map ASIL level to MAGIC checkset governance tier
MUST:     Distinguish between SAE Levels 0-5 with explicit ODD and fallback definitions
MUST NOT: Present Level 2 (partial automation) as autonomous driving
```

---

*AUTOMOTIVE | CANON | VERTICALS*
<!-- _generated: build-surfaces -->

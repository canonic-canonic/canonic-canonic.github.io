# ROBOTICS

inherits: canonic-canonic/INDUSTRIES/VERTICALS
---

## Specification

```
ROBOTICS = ROBOTIC_STANDARD × CANONIC
         = Structure(robotic) × (C1, C2, Temporal, Relational, C5, C6)
```

**Lattice**: 6 governance checks = ENTERPRISE (#63)

---

## Dimensional Mapping

| Dimension | Bit | Robotic Governance |
|-----------|-----|-------------------|
| C1 | private | Governance-gated actuation declarations — no action without verified intent |
| C2 | private | Sensor-evidence chain — perception data as immutable proof |
| T (Temporal) | 4 | Real-time timing integrity — deterministic latency bounds |
| R (Relational) | 8 | Workspace boundaries — operating envelope enforcement |
| C5 | private | Autonomous control loops — governed mode transitions |
| C6 | private | System architecture — HW/SW/safety separation |

---

## SIL-to-MAGIC Tier Mapping

| SIL | Risk | MAGIC Tier | Bits | Governance |
|-----|------|-------------|------|------------|
| SIL 1 | Negligible | COMMUNITY | #35 | Basic safety monitoring |
| SIL 2 | Marginal | BUSINESS | #43 | Dual-channel verification |
| SIL 3 | Critical | ENTERPRISE | #63 | Full governance |
| SIL 4 | Catastrophic | AGENT | #127 | + C7 governance |

---

## Subdomains

### Industrial Robotics

```
Standard:    ISO 10218-1/-2 (Safety Requirements for Industrial Robots)
SIL Range:   SIL 2-3
Governance:  ENTERPRISE (#63) minimum
Application: Welding, painting, assembly, material handling
Key Hazards: Crush, impact, shear, entanglement, ejection of parts
Mitigation:  Safeguarded spaces, safety-rated monitored stop, E-stop
```

### Collaborative Robotics

```
Standard:    ISO/TS 15066 (Collaborative Robot Safety)
SIL Range:   SIL 2-3
Governance:  ENTERPRISE (#63)
Application: Shared workspace, human-robot collaboration
Modes:       Safety-rated monitored stop, hand guiding, SSM, PFL
Key Limits:  Force (150N transient chest), Speed (250mm/s collaborative)
Innovation:  MAGIC checkset governs mode transitions in real-time via bitwise AND
```

### Surgical Robotics

```
Standard:    IEC 62304 (Medical Device Software), IEC 60601-1 (Medical Electrical)
SIL Range:   SIL 3 (Class C medical)
Governance:  ENTERPRISE (#63) minimum
Application: Minimally invasive surgery, microsurgery, radiation therapy
Key Systems: da Vinci Xi, Mako, CyberKnife, Ion
Regulation:  FDA 510(k)/PMA, CE marking (MDR 2017/745), 21 CFR Part 820
Evidence:    Stereo video, kinematics, force/torque, patient registration
```

### Agricultural Robotics

```
Standard:    ISO 18497 (Agricultural Machinery Safety), ISOBUS (ISO 11783)
SIL Range:   SIL 1-2
Governance:  BUSINESS (#43) minimum
Application: Autonomous tractors, drone spraying, precision harvesting
Key Hazards: Rollover, entanglement, chemical exposure, GPS loss
Innovation:  MAGIC checkset governs field boundaries, chemical application rates
```

### Warehouse/Logistics Robotics

```
Standard:    ISO 3691-4 (Driverless Industrial Trucks), EN 1525
SIL Range:   SIL 2
Governance:  BUSINESS (#43) minimum
Application: AMRs, AGVs, pick-and-place, sorting
Key Systems: Kiva/Amazon Robotics, Locus, 6 River Systems
Innovation:  MAGIC checkset governs fleet coordination, workspace sharing
```

### Autonomous Vehicles

```
Standard:    SAE J3016 (Autonomy Levels), ISO 26262, UNECE WP.29
SIL Range:   ASIL D (≈ SIL 3-4)
Governance:  AGENT (#127) for Level 4-5
Application: Self-driving cars, trucks, delivery vehicles
Regulation:  NHTSA (US), UNECE (EU), MLIT (Japan)
Innovation:  MAGIC checkset governs ODD transitions, sensor fusion gating
```

### Drone/UAV Systems

```
Standard:    ASTM F3548, DO-178C (if aviation), Part 107 (FAA)
SIL Range:   SIL 1-3 (depending on operation)
Governance:  BUSINESS (#43) to ENTERPRISE (#63)
Application: Inspection, delivery, agriculture, surveying, defense
Regulation:  FAA Part 107, EASA U-space, UTM (UAS Traffic Management)
Innovation:  MAGIC checkset governs airspace boundaries, payload operations
```

---

## Regulatory Landscape

| Standard | Scope | Governance |
|----------|-------|------------|
| ISO 10218-1/-2 | Industrial robot safety | ENTERPRISE (#63) |
| ISO/TS 15066 | Collaborative robot safety | ENTERPRISE (#63) |
| IEC 61508 | Functional safety (general) | SIL 1-4 → MAGIC checkset tier |
| IEC 62304 | Medical device software | Class A-C → MAGIC checkset tier |
| ISO 13482 | Personal care robots | ENTERPRISE (#63) |
| ISO 13849-1 | Machinery control safety | PL a-e → MAGIC checkset tier |
| IEC 61800-5-2 | Drive safety functions | ENTERPRISE (#63) |
| ISO 3691-4 | Driverless industrial trucks | BUSINESS (#43) |
| ISO 18497 | Agricultural machinery | BUSINESS (#43) |
| SAE J3016 | Autonomous vehicle levels | Level-dependent |

---

## Prior Art Landscape

| Competitor | Approach | MAGIC checkset Distinction |
|-----------|----------|-------------------|
| Veo Robotics | Safety-only 3D monitoring | No governance integration, no bitwise verification |
| Universal Robots | Collaborative safety modes | Hardware safety, no software governance framework |
| NVIDIA Isaac | Simulation + deployment | No governance gates, no SIL mapping |
| ROS 2 Safety WG | Safety design patterns | Patterns only, no formal governance language |
| Realtime Robotics | Motion planning hardware | Performance optimization, no governance |

**Gap**: No existing system provides governance-gated robotic actuation with O(1) bitwise compliance checking across safety integrity levels.

---

## Patent Mapping

| PROV | Relevance | Claims |
|------|-----------|--------|
| PROV-006 | PRIMARY | Governance-gated actuator system, SIL mapping, workspace enforcement |
| PROV-001 | Foundational | MAGIC private-check encoding for robotic governance verification |
| PROV-002 | Secondary | COIN=WORK for robotic work attestation |
| PROV-004 | Supporting | Transcompilation of safety standards to governed executables |

---

## Axioms

### 1. Safety-First Actuation

No robotic system may actuate without verified safety state. The safety system has absolute authority over motion.

**Example**: A collaborative robot arm detects a human within its safety-rated monitored zone. The safety PLC MUST command a Category 2 stop (IEC 60204-1) within the safety-rated stopping time regardless of what the application program demands. Safety overrides all.

---

### 2. Workspace Sovereignty

Every robot operates within a defined workspace. Crossing workspace boundaries MUST trigger governed response.

**Example**: An AGV in a warehouse has a defined path with virtual boundaries. If the LIDAR detects the vehicle has deviated >10cm from the planned path, the safety system MUST execute a protective stop. The vehicle does not resume until the deviation is resolved and the path is re-verified.

---

### 3. Sensor-Evidence Chain

Every robotic action MUST be traceable to sensor evidence. No actuation without perception.

**Example**: A surgical robot (da Vinci Xi) records: stereo vision feeds, instrument kinematics, force/torque measurements, and patient registration data for every procedure. If the vision system loses calibration, the system MUST halt the procedure and alert the surgeon. No blind actuation.

---

### 4. Deterministic Timing

Safety-critical robotic functions MUST execute within deterministic time bounds. Jitter tolerance MUST be specified and enforced.

**Example**: A safety-rated monitored speed function MUST sample position data at ≥100Hz and trigger a stop within 20ms of detecting an overSpeed condition. The worst-case execution time MUST be analyzed and proven. Non-deterministic operating systems MUST NOT host safety functions.

---

### 5. Graceful Degradation

Robotic systems MUST degrade safely when components fail. No single failure may cause uncontrolled motion.

**Example**: If a force/torque sensor on a collaborative robot arm fails, the robot MUST: (1) detect the failure within one scan cycle, (2) transition to safety-rated monitored stop, (3) alert the operator, (4) refuse to resume in collaborative mode until the sensor is replaced and calibrated. Degraded mode = reduced capability, never reduced safety.

---

## Validators

| Validator | Checks | Example Failure |
|-----------|--------|-----------------|
| C1 | Safety goals stated with SIL assignment | Actuator without safety classification |
| C2 | Safety evidence complete (FMEA, fault trees, test reports) | Missing stopping time measurement |
| Temporal | Timing bounds specified and verified (WCET) | Safety function exceeding deadline |
| Relational | Workspace boundaries defined and enforced | Robot operating outside approved zone |
| C5 | Safety functions operating per IEC 61508 lifecycle | Safety PLC firmware not validated |
| C6 | ISO 10218/IEC 61508/IEC 62443 conformance | Non-compliant safety architecture |

---

## Examples

```
DECLARE(CollaborativeRobotCell) = ISO_TS_15066 × CANONIC

Where:
  ISO/TS 15066 provides Structure:
    - Collaborative operation modes (4 modes)
    - Biomechanical limit data (force/pressure per body region)
    - Speed and separation monitoring parameters
    - Power and force limiting thresholds

  CANONIC provides Governance:
    - C1: Safety goals per collaborative mode
    - C2: Risk assessment evidence (force measurement, stopping distance)
    - Temporal: Scan cycle timing, stopping time verification
    - Relational: Collaborative workspace boundaries
    - C5: Safety function execution (monitored stop, PFL)
    - C6: ISO/TS 15066/ISO 10218/IEC 61508 conformance

Result:
  CollaborativeRobotCell = ENTERPRISE (#63)

  Safety Lifecycle:
    Assess         — Risk assessment, task analysis
    Design         — Safety concept, mode selection
    Validate       — Force measurement, stopping tests
    Commission     — Safety validation complete
    Operate        — Production with safety monitoring
```

```
DECLARE(SurgicalRobotGovernance) = IEC_62304 × CANONIC

Where:
  IEC 62304 provides Structure:
    - Software safety classification (Class A, B, C)
    - Software development lifecycle
    - Software maintenance
    - Risk management (ISO 14971)
    - Configuration management

  CANONIC provides Governance:
    - C1: Software safety claims per classification
    - C2: Verification evidence (unit test, integration test, system test)
    - Temporal: Development lifecycle, maintenance schedule
    - Relational: Surgeon/robot/patient boundaries
    - C5: Surgical operations (setup, procedure, teardown)
    - C6: IEC 62304/IEC 60601/FDA conformance

Result:
  SurgicalRobotGovernance at Class C = AGENT (#127)

  Certification Lifecycle:
    Classify       — Software safety class assigned
    Develop        — Requirements, architecture, code
    Verify         — Testing per classification
    Validate       — Clinical validation
    Clear          — FDA 510(k)/PMA clearance
```

---

## Application

To create a CANONIC robotics vertical:

1. **Identify robotic domain** (industrial, collaborative, surgical, agricultural, warehouse, AV, drone)
2. **Perform risk assessment** and assign SIL level, map to MAGIC tier
3. **Create scope** with CANON.md inheriting /ROBOTICS/
4. **Define safety goals** with SIL assignment and safety functions
5. **Map to safety standard** (ISO 10218, IEC 61508, IEC 62304)
6. **Implement validators** for safety evidence, timing verification, workspace enforcement
7. **Document coverage** with safety case artifacts

**Result**: Owned robotics vertical with SIL-governed, safety-first operations.

---

## Cross-Domain Compositions

```
ROBOTICS × MEDICINE     = Surgical robotics (IEC 62304 + ISO 10218)
ROBOTICS × DEFENSE      = Military robotics (MIL-STD-882 + ISO 10218)
ROBOTICS × AUTOMOTIVE   = Autonomous vehicles (ISO 26262 + SAE J3016)
ROBOTICS × AEROSPACE    = Drone systems (DO-178C + Part 107)
ROBOTICS × MANUFACTURING = Factory automation (IEC 62443 + ISO 10218)
ROBOTICS × AGRICULTURE  = Autonomous farming (ISO 18497 + ISOBUS)
ROBOTICS × LOGISTICS    = Warehouse automation (ISO 3691-4)
ROBOTICS × ENERGY       = Nuclear/grid inspection robots (NRC + IEC 61508)
ROBOTICS × QUALITY      = Automated inspection (ISO 13485 + ISO 10218)
ROBOTICS × SAFETY       = All robotic systems (IEC 61508 → universal)
ROBOTICS × SECURITY     = Cyber-physical security (IEC 62443)
```

**10 cross-domain compositions. Each strengthens PROV-006 patent claims.**

---

*ROBOTICS | SPECIFICATION | VERTICALS | INDUSTRIES*
<!-- _generated: build-surfaces -->

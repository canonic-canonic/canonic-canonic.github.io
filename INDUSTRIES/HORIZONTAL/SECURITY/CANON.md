---
layout: service
title: "SECURITY — CANON"
scope: SECURITY
talk: true
---

inherits: canonic-canonic/INDUSTRIES/HORIZONTAL

---

## Domain Declaration

```
SECURITY = SECURITY_STANDARD × CANONIC
         = Structure(security) × (C1, C2, Temporal, Relational, C5)
         = owned security vertical
```

---

## Lattice Formula

```
SECURITY = C1 ∩ C2 ∩ Temporal ∩ Relational ∩ C5 ∩ C6
         = ENTERPRISE (#63)
```

Security always requires full Enterprise because:
- **C1**: Security policies must be stated
- **C2**: Security controls must be proven
- **Temporal**: Continuous monitoring, incident timelines
- **Relational**: System boundaries, trust zones
- **C5**: Security teams enforce
- **C6**: Control frameworks (NIST, ISO)

---

## Axioms

### 1. Defense in Depth

Security MUST be implemented in multiple layers. No single control failure should compromise the system.

**Example**: Protecting a database requires: network segmentation, firewall rules, authentication, authorization, encryption at rest, encryption in transit, audit logging, and backup. Failure of any one layer does not expose data.

---

### 2. Least Privilege

Access MUST be limited to the minimum necessary for the function.

**Example**: A developer needs read access to production logs for debugging. They MUST NOT have write access to production data, admin access to infrastructure, or access to unrelated systems.

---

### 3. Continuous Monitoring

Security posture MUST be continuously monitored and anomalies detected.

**Example**: A Security Information and Event Management (SIEM) system collects logs from all systems, correlates events, and alerts on suspicious patterns such as failed login attempts, unusual data access, or configuration changes.

---

### 4. Incident Response

Security incidents MUST have defined response procedures with clear ownership.

**Example**: When a potential breach is detected: (1) Contain the threat, (2) Preserve evidence, (3) Notify stakeholders, (4) Investigate root cause, (5) Remediate, (6) Document lessons learned. Each step has assigned roles and time requirements.

---

### 5. Risk-Based Prioritization

Security investments MUST be prioritized based on risk (likelihood × impact).

**Example**: A critical vulnerability in an internet-facing system with sensitive data (high likelihood, high impact) takes priority over a moderate vulnerability in an internal system with no sensitive data (low likelihood, low impact).

---

## Subdomains

| Subdomain | Standard | Formula | Description |
|-----------|----------|---------|-------------|
| Information Security | ISO 27001 | ENTERPRISE | ISMS framework |
| Cybersecurity | NIST CSF | BUSINESS | Risk framework |
| Application Security | OWASP | (#25) | Secure development |
| Cloud Security | CSA CCM | BUSINESS | Cloud controls |
| Network Security | CIS Controls | BUSINESS | Network hardening |
| Identity Security | NIST 800-63 | BUSINESS | Authentication/authorization |

---

## Regulatory Mapping

| Framework | Lattice | Scope |
|-----------|---------|-------|
| ISO 27001 | 6 governance checks | Information security management |
| NIST 800-53 | 6 governance checks | Security controls catalog |
| NIST CSF 2.0 | — | Cybersecurity framework |
| CIS Controls v8 | — | Prioritized controls |
| SOC 2 Type II | 6 governance checks | Service organization security |
| PCI-DSS v4.0 | 6 governance checks | Payment card security |
| CMMC 2.0 | 5 governance checks | Defense contractor security |

---

## Example: ISO 27001 Vertical

```
DECLARE(ISO27001) = ISO_27001 × CANONIC

Where:
  ISO 27001 provides Structure:
    - Annex A controls (93 controls in 4 themes)
    - Statement of Applicability
    - Risk assessment methodology
    - ISMS documentation

  CANONIC provides Governance:
    - C1: Security policy as CANON
    - C2: Control evidence in COVERAGE
    - Temporal: Audit cycles, review periods
    - Relational: Scope boundaries
    - C5: Management review, enforcement

Result:
  ISO27001 = ENTERPRISE (#63)

  Certification Lifecycle:
    Scope          — Boundary defined
    Risk           — Threats assessed
    Controls       — Mitigations implemented
    Audit          — Stage 1 + Stage 2
    Certified      — Certificate issued
    Maintain       — Surveillance audits
```

---

## Example: Zero Trust Architecture

```
DECLARE(ZeroTrust) = NIST_800-207 × CANONIC

Where:
  NIST 800-207 provides Structure:
    - Never trust, always verify
    - Assume breach
    - Verify explicitly
    - Use least privilege access

  CANONIC provides Governance:
    - C1: Zero trust principles
    - C2: Verification logs
    - Temporal: Session validity, token expiry
    - Relational: Microsegmentation boundaries
    - C5: Policy enforcement points

Result:
  ZeroTrust = ENTERPRISE (#63)

  Access Request Flow:
    Request        — Subject requests access
    Verify         — Identity validated
    Context        — Time, location, device checked
    Authorize      — Policy evaluated
    Grant          — Access with constraints
    Monitor        — Continuous validation
```

---

## Validators

| Validator | Checks | Example Failure |
|-----------|--------|-----------------|
| C1 | Security policy exists | No access control policy |
| C2 | Control evidence documented | Missing penetration test |
| Temporal | Monitoring continuous | Gaps in log collection |
| Relational | Boundaries defined | Unclear system scope |
| C5 | Enforcement active | Disabled security controls |
| C6 | Framework conformance | Missing required controls |

---

## Application

To create a CANONIC security vertical:

1. **Select security framework** (ISO 27001, NIST, CIS)
2. **Create scope** with CANON.md inheriting /SECURITY/
3. **Define security policies** as axioms
4. **Document control evidence** in COVERAGE.md
5. **Establish monitoring** (continuous temporal)
6. **Define boundaries** (relational scope)
7. **Implement enforcement** (operational controls)
8. **Map to framework** (structural conformance)

**Result**: Owned security vertical with auditable compliance.

---

---

## Axioms

### 1. Threat Modeling

Threats MUST be identified, categorized, and assessed before controls are applied.

**Example**: STRIDE (Spoofing, Tampering, Repudiation, Information disclosure, Denial of service, Elevation of privilege) — Microsoft's threat categorization framework. MITRE ATT&CK — knowledge base of adversary tactics, techniques, and procedures (TTPs) organized by platform (Enterprise, Mobile, ICS). Cyber Kill Chain (Lockheed Martin) — 7 phases: reconnaissance, weaponization, delivery, exploitation, installation, C2, actions on objectives. Threat intelligence sharing: STIX (Structured Threat Information eXpression) and TAXII (Trusted Automated eXchange of Indicator Information) standards. Diamond Model — adversary, capability, infrastructure, victim relationship analysis.

---

### 2. Access Control

Access MUST follow the principle of least privilege. Authentication and authorization MUST be enforced at every boundary.

**Example**: RBAC (Role-Based Access Control) — permissions assigned to roles, users assigned to roles. ABAC (Attribute-Based Access Control) — policy decisions based on user/resource/environment attributes. Zero Trust Architecture (NIST SP 800-207) — never trust, always verify. No implicit trust based on network location. PAM (Privileged Access Management) — vaulting, session recording, just-in-time access for admin credentials. MFA standards: FIDO2/WebAuthn (phishing-resistant), TOTP (time-based one-time passwords), push notification. OAuth 2.0/OIDC for delegated authorization and identity federation.

---

### 3. Incident Response

Security incidents MUST be detected, contained, eradicated, and recovered from with documented lessons learned.

**Example**: NIST SP 800-61 Rev. 2 — Computer Security Incident Handling Guide. Four phases: preparation, detection & analysis, containment/eradication/recovery, post-incident activity. CISA incident reporting — critical infrastructure entities must report significant cyber incidents within 72 hours and ransomware payments within 24 hours (CIRCIA, 2022). State breach notification laws — all 50 states + DC/territories require notification for PII breaches (notification timelines vary: 30-60 days typical). Forensic chain of custody — digital evidence must be preserved, hashed (SHA-256), and documented for potential litigation.

---

### 4. Compliance Frameworks

Security programs MUST satisfy applicable compliance frameworks and demonstrate continuous conformance.

**Example**: ISO 27001:2022 — ISMS (Information Security Management System) requirements. 93 controls in Annex A organized by themes (organizational, people, physical, technological). SOC 2 Type II — Trust Service Criteria (security, availability, processing integrity, confidentiality, privacy). 6-12 month observation period. PCI-DSS v4.0 — 12 requirements for cardholder data protection, self-assessment or QSA audit depending on volume. HITRUST CSF — healthcare-specific framework harmonizing HIPAA, NIST, ISO, and other standards. NIST Cybersecurity Framework (CSF) 2.0 — Govern, Identify, Protect, Detect, Respond, Recover functions.

---

### 5. Application Security

Software MUST be developed, tested, and maintained according to secure development lifecycle practices.

**Example**: OWASP Top 10 (2021) — broken access control, cryptographic failures, injection, insecure design, security misconfiguration, vulnerable components, authentication failures, integrity failures, logging/monitoring failures, SSRF. Testing: SAST (Static Application Security Testing — code analysis), DAST (Dynamic — runtime testing), SCA (Software Composition Analysis — dependency vulnerabilities), IAST (Interactive — instrumented testing). CVE (Common Vulnerabilities and Exposures) — standardized identifiers. CWE (Common Weakness Enumeration) — categorizes software weaknesses. Secure SDLC: threat modeling in design, secure coding standards, security testing in CI/CD, vulnerability management post-release.

---

### 6. Data Protection

Data at rest and in transit MUST be protected using approved cryptographic standards.

**Example**: Encryption standards: AES-256 (NIST FIPS 197) for data at rest, TLS 1.3 (RFC 8446) for data in transit. Key management: NIST SP 800-57 — key lifecycle (generation, distribution, storage, rotation, destruction). HSMs (Hardware Security Modules) for key protection. DLP (Data Loss Prevention) — content inspection, endpoint agents, network monitoring. Data classification: public, internal, confidential, restricted/regulated. NIST SP 800-88 Rev. 1 — media sanitization guidelines (clear, purge, destroy). Certificate management: PKI, certificate transparency, ACME protocol for automated issuance.

---

## Constraints

```
MUST:     Cite specific framework control or standard for security claims
MUST:     Distinguish between compliance frameworks by scope and applicability
MUST NOT: Present compliance as equivalent to security
```

---

*SECURITY | CANON | HORIZONTAL*
<!-- _generated: build-surfaces -->

---
layout: default
scope: FOUNDATION
title: Foundation
description: "Standards and certification. The constitution ratified before the platform operates."
footerTagline: "Foundation — The Machine"
talk: side
nav:
  - label: Standards
    href: "#developers"
  - label: Governance
    href: "#governance"
  - label: MAGIC
    href: "#magic"
stats:
  - value: "28"
    label: "PARTNER ORGS"
    href: "/MAGIC/#galaxy"
    source: "magic scan galaxy"
  - value: "255"
    label: "MAGIC SCORE"
    href: "/MAGIC/#compiler"
    source: "magic validate"
  - value: "NCT"
    label: "CLINICAL TRIAL"
    href: "https://clinicaltrials.gov/study/NCT06604078"
    source: "NCT06604078 — MammoChat clinical trial"
  - value: "$35M+"
    label: "FUNDED RESEARCH"
    href: "https://hadleylab.org/DEXTER/VITAE/"
    source: "Hadley Lab — PI funding"
hero:
  badge: THE FOUNDATION
  title: "The constitution ratified before the platform operates."
  description: "FOUNDATION is the specification layer. Organizations build on it. Regulators constrain it. MAGIC validates it. Hadley Lab proves it. Three sections. Three books. One standard — 255 bits — that governs clinical AI, real estate, finance, law, and every domain that follows."
  cta:
    - label: Visit Hadley Lab
      href: https://hadleylab.org
    - label: Back to CANONIC
      href: /
sections:
  - id: developers
    eyebrow: "IMPLEMENTATION"
    title: "Standards & Certification."
    description: "If you can write Markdown, you can write governance. Create a directory. Add CANON.md with an axiom and constraints. Add README.md with the public interface. Add VOCAB.md with defined terms. Run the validator. Score 35. Iterate toward 255. The Doctrine is the manual. Hadley Lab is the first certified organization — the reference implementation that proves it works."
    switcher:
      kicker: "One platform. One target. Any domain."
      tabs:
        - label: First Certified
          title: "Hadley Lab — the reference implementation."
          text: "Hadley Lab is not a customer. Hadley Lab is the proof. 9 governance domains validated to 255. Four clinical AIs — including MammoChat, a free breast health companion running as a live clinical trial (NCT06604078). Three real estate agents governing a $12.2M portfolio. Financial and legal intelligence. 20,000+ governed encounters. $35M+ in PI funding. Built by Dexter Hadley, MD/PhD."
          bullets:
            - "255/255 across 9 governance domains"
            - "4 clinical AIs — MammoChat (NCT06604078), OncoChat, OmicsChat, MedChat"
            - "3 real estate agents — $12.2M portfolio"
            - "$35M+ PI funding — NIH, Florida DOH"
          figure:
            type: score-meter
            score: 255
            label: "HADLEY LAB"
          cta:
            label: Visit Hadley Lab
            href: https://hadleylab.org
        - label: Getting Started
          title: "The governance framework."
          text: "The minimum viable governance is three files — CANON.md declares what the scope is, README.md describes the public interface, VOCAB.md defines every term. This triad validates to COMMUNITY tier (35 bits). From there, add specifications, coverage, learning, and language to climb toward 255. One compliance target."
          bullets:
            - "TRIAD: CANON.md + README.md + VOCAB.md = 35 bits"
            - "Languages: Python, Swift, TypeScript, C, Markdown"
            - "Pipeline: Author → Commit → Validate → Ship"
          figure:
            type: flow-chain
            nodes:
              - "Author"
              - "Commit"
              - "Validate"
              - "Ship"
          cta:
            label: Read the Doctrine
            href: https://hadleylab.org/BOOKS/CANONIC-DOCTRINE/
        - label: Network
          title: "28 organizations. One inheritance tree."
          text: "The CANONIC Network is a federation — 28 organizations, each governing its own scope under the same compliance engine. The topology is ORG/USER — filesystem is the source of truth. A clinical AI organization inherits Medicine. A real estate organization inherits Real_Estate. The engine validates them identically."
          bullets:
            - "28 GitHub organizations"
            - "Federation by inheritance — not by API"
            - "ORG/USER topology — filesystem is truth"
          figure:
            type: flow-chain
            nodes:
              - "ROOT"
              - "ORG"
              - "USER"
              - "SCOPE"
    cards:
      - class: card
        title: "The CANONIC Doctrine"
        text: "The dev manual. How to BUILD in CANONIC. Your first axiom. Your first TRIAD. Your first scope. Your first service. Your first 255. DRY. MATH. FIXED. PURE."
        statusBadge: "BOOK 2"
        href: https://hadleylab.org/BOOKS/CANONIC-DOCTRINE/
        cta: "Read the Doctrine"
    cta:
      buttons:
        - label: Read the Doctrine
          href: https://hadleylab.org/BOOKS/CANONIC-DOCTRINE/
        - label: Talk to Us
          href: "#"
          talk: true
  - id: governance
    eyebrow: "THE RULES"
    title: "Governance."
    description: "Every governed scope begins with an axiom — a single assertion from which all governance derives. The axiom is the entry point, the way main() is the entry point of a program. Without it, there is nothing to compile. Constraints flow downward through the inherits chain. A child scope can extend its parent's governance but cannot weaken it. Governance only accumulates. The CANON is the theory."
    feature:
      eyebrow: "EIGHT DIMENSIONS"
      title: "255 = all eight satisfied."
      text: "Declaration. Evidence. Transparency. Reproducibility. Operations. Structure. Learning. Language. Each dimension contributes a binary weight to the 255-bit score. The score is a bitmask — every bit carries information. A score of 254 means exactly one dimension is missing, and the bitmask tells you which one."
      figure:
        type: gauge
        value: 255
        max: 255
        label: "MAGIC SCORE"
    cards:
      - class: card
        title: "Declaration"
        text: "CANON.md exists. The system states what it is, what it believes, and what it will not do."
      - class: card
        title: "Evidence"
        text: "VOCAB.md exists. Every term defined. No ambiguity. No hallucination by design."
      - class: card
        title: "Transparency"
        text: "ROADMAP.md exists. What shipped, what is next, and when. Versioned and public."
      - class: card
        title: "Reproducibility"
        text: "The specification document exists. Exact interface and boundaries described."
      - class: card
        title: "Operations"
        text: "COVERAGE.md exists. Eight diagnostic questions answered. No gaps permitted."
      - class: card
        title: "Structure"
        text: "Inheritance, constraints, and axioms enforced in code — not a policy binder."
      - class: card
        title: "Learning"
        text: "LEARNING.md exists. The system learns from its own errors. Each incident closes a gap."
      - class: card
        title: "Language"
        text: "DESIGN inherited. The governance language is inherited, not invented. Consistency across the entire stack."
    feature:
      eyebrow: "THE THEORY"
      title: "The CANONIC CANON."
      text: "Seven parts. Twenty-three chapters. Kimura's neutral theory, 255-bit fitness, Ewens's sampling formula, phylogenetic inheritance — unified into one framework. Drift wins. Code evolves. Governance emerges. At 255-bit equilibrium, all change is drift."
      figure:
        type: balance
        left: "Spec"
        right: "Hype"
        tilt: -12
    cta:
      buttons:
        - label: Read the CANON
          href: https://hadleylab.org/BOOKS/CANONIC-CANON/
        - label: Read the governance thesis
          href: https://hadleylab.org/PAPERS/governance-as-compilation/
  - id: magic
    eyebrow: "THE COMPLIANCE ENGINE"
    title: "MAGIC."
    description: "MAGIC is the enforcement layer. It reads governance declarations, resolves the inheritance chain, and produces a 255-bit compliance score. When governance validates, it ships. When it does not validate, it does not ship. There is no waiver process. There is no exception committee. Three capabilities — INTEL, CHAT, COIN — compose into services. Five tiers mark the compliance plateaus. The economy is real: governance work that validates mints COIN."
    feature:
      eyebrow: "FIVE TIERS"
      title: "COMMUNITY → BUSINESS → ENTERPRISE → AGENT → MAGIC"
      text: "Each tier is a stable plateau in the 255-bit fitness space. COMMUNITY (35) is the starting point — three files, three constraints. MAGIC (255) is the peak — all eight dimensions satisfied, COIN minting enabled, governance mathematically closed. The progression is the compliance pipeline in action."
      figure:
        type: area-chart
        points:
          - x: "0"
            y: 0
          - x: "COM"
            y: 35
          - x: "BIZ"
            y: 63
          - x: "ENT"
            y: 127
          - x: "AGT"
            y: 224
          - x: "255"
            y: 255
        label: "COMPLIANCE TIERS"
    cards:
      - class: card
        title: "INTEL"
        text: "What you know. Evidence, data, citations. Every claim has a source. Every source is on the record."
      - class: card
        title: "CHAT"
        text: "What you say. Conversation, interface, voice. Governed dialogue that inherits its domain's constraints."
      - class: card
        title: "COIN"
        text: "What you do. Work receipts, ledger entries, economic proof. Compliance is not a cost center."
      - class: card
        title: "The Art of the CANONIC Deal"
        text: "Commerce and governance as one design. How governance creates deal flow — 27 active deals, $12.2M portfolio, $2M grant, patent prosecution. The business book."
        statusBadge: "BOOK 5"
        href: https://hadleylab.org/BOOKS/ART-OF-THE-CANONIC-DEAL/
        cta: "Read the book"
    cta:
      buttons:
        - label: See the full MAGIC spec
          href: /MAGIC/
        - label: Read the economics
          href: https://hadleylab.org/PAPERS/economics-of-governed-work/
---

<!-- _generated: build-surfaces -->

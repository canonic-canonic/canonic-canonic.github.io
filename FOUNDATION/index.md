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
  - value: "302"
    label: "GOVERNED SCOPES"
    href: "/MAGIC/#galaxy"
    source: "Galaxy graph — 302 nodes across the fleet"
  - value: "255"
    label: "MAGIC SCORE"
    href: "/MAGIC/#compiler"
    source: "magic validate — full closure"
  - value: "149K+"
    label: "COIN MINTED"
    href: "https://hadleylab.org/PAPERS/economics-of-governed-work/"
    source: "COIN ledger — 697 economic events"
  - value: "$38M+"
    label: "FUNDED RESEARCH"
    href: "https://hadleylab.org/DEXTER/VITAE/"
    source: "Hadley Lab — PI funding"
hero:
  badge: THE FOUNDATION
  title: "The constitution ratified before the AI operates."
  description: "FOUNDATION is the specification layer where governance compiles before agents deploy. Every AI agent, every service, every scope inherits from this constitution. Three books define the standard. Five compliance tiers gate deployment. One 255-bit score proves total governance. Organizations build on it. Regulators audit it. The blockchain proves it."
  cta:
    - label: Visit Hadley Lab
      href: https://hadleylab.org
    - label: Back to CANONIC
      href: /
sections:
  - id: developers
    eyebrow: "DEVELOPER CERTIFICATION"
    title: "Get certified. Build governed agents."
    description: "CANONIC developer certification proves you can build AI agents that validate to 255. The certification is Git-native: your VITAE.md lives in the governance tree, your tier score comes from `magic validate`, and your credential resolves to a signed tag. No exam. No annual renewal. The code is the proof. Start at COMMUNITY (35 bits, free), iterate to FULL (255 bits), and your certification is as auditable as the agents you build."
    switcher:
      kicker: "One platform. One target. Any domain."
      tabs:
        - label: First Certified
          title: "Hadley Lab — 302 governed scopes, 255/255."
          text: "Hadley Lab is the reference implementation. 302 governed scopes across the galaxy. 93 service scopes. Five clinical AI agents, including MammoChat (free, live clinical trial NCT06604078). Three real estate agents governing a $12.2M portfolio. 149,000+ COIN minted on the ledger. Every agent contracted, every step auditable. Built by Dexter Hadley, MD/PhD."
          bullets:
            - "302 governed scopes — 255/255 across the fleet"
            - "5 clinical AIs — MammoChat (NCT06604078), OncoChat, OmicsChat, MedChat, CaribChat"
            - "149,000+ COIN minted — 697 ledgered events"
            - "$38M+ PI funding — NIH, Florida DOH, PCORI"
          figure:
            type: score-meter
            score: 255
            label: "HADLEY LAB"
          cta:
            label: Visit Hadley Lab
            href: https://hadleylab.org
        - label: Getting Started
          title: "Three files. One command. Your first 35 bits."
          text: "Create a directory. Add CANON.md (your axiom and constraints), README.md (the public interface), VOCAB.md (every term defined). Run `magic validate`. You score 35 — COMMUNITY tier, free forever. From there, add specification, coverage, learning, and language. Each addition flips a bit. At 255, your governance is mathematically closed and your agents can mint COIN."
          bullets:
            - "COMMUNITY (35 bits): CANON.md + README.md + VOCAB.md — free"
            - "BUSINESS (63 bits): + specification + structure — $100/year, certified"
            - "ENTERPRISE (127 bits): + coverage + roadmap — contract, continuous pipeline"
            - "MAGIC (255 bits): all 8 dimensions — COIN minting enabled"
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
views:
  - gov
  - web
---

<!-- _generated: build-surfaces -->

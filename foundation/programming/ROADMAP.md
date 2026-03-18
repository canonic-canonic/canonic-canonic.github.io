# PROGRAMMING — ROADMAP

inherits: .

---

## Now (2026-02)
- Apple Native era: canonic-apple Xcode project (iOS + macOS) with C kernel and Swift runtime
- All four runtimes at 10/10 tests, full compliance (255 MAGIC), ledger chain operational
- Reserve remaining PENDING GitHub orgs from namespace plan

## Next (2026-Q2)
- CloudKit container replaces git federation; Sign in with Apple replaces SSH keys
- CoreML on Apple Silicon: Learning dimension running on-device
- TestFlight beta for MAGIC app; begin App Store submission pipeline

## Later
- CANONIC as programming paradigm formalization
- App Store expansion: each canonic-* becomes its own MAGIC app (multiLEDGER)
- Language spec: governance as code; Validator SDK; developer documentation

---

## Evolution

C is truth. Three runtimes wrap the shared library.
19 languages. Kernel recompiled for distributed learning.

## Closed

| Runtime | FFI | CLI | Tests | Ledger |
|---------|-----|-----|-------|--------|
| C | truth | magic.c | 10/10 | chain |
| Python | ctypes | magic.py | 10/10 | chain |
| Swift | @_silgen_name | magic.swift | 10/10 | chain |
| Node/TypeScript | ffi-napi | magic.ts | 10/10 | chain |

## Architecture

```
C (kernel source / header / shared library)
├── Python   (ctypes)     — data science, server, scripting
├── Node     (ffi-napi)   — frontend, web, real-time
└── Swift    (@_silgen)   — Apple, mobile, on-device
```

## Kernel

- Full compliance: all 8 dimensions = 255 (MAGIC)
- Distributed learning: IDF chain, gradient accumulation, multi-node sync
- Ledger: genesis → gradient → pattern → coin → commit

## MAGIC

CANONIC is the company. MAGIC is the brand.

```
MAGIC = transpiler (magic.py)
      = CLI in every runtime (magic.swift, magic.py, magic.ts)
      = governance interface
      = 255 (MAGIC)
```

## ERA: APPLE NATIVE (2026-02-04)

Clean break. 1 Xcode project. iOS + macOS. App Store.
LEDGER keeps the story. The ecosystem evolves.

### Namespace — canonic-* GitHub Orgs

| Org | Status | Purpose |
|-----|--------|---------|
| canonic-apple | RESERVED | Native Apple era — Xcode, SwiftUI, App Store |
| canonic-foundation | RESERVED | Core governance |
| canonic-programming | RESERVED | Runtime history (C, Swift, Python, Node) |
| canonic-magic | RESERVED | Org-user registry, deals, strategy |
| canonic-foundation/SHOP | RESERVED | Distribution |
| canonic-learning | RESERVED | Federated learning |
| canonic-idioms | RESERVED | Language patterns |
| canonic-magic/VAULT | RESERVED | Reserve assets |
| canonic-sectors | RESERVED | Industry verticals |
| canonic-apps | RESERVED | Application layer |
| canonic-frontend | RESERVED | Frontend (legacy web era) |
| canonic-hadleylab | RESERVED | HadleyLab research |
| canonic-magic | RESERVED | ML/compute |
| canonic-proto | RESERVED | Protocol specs |
| adventhealth-rob | RESERVED | Org-user: AdventHealth |
| hadleylab-canonic | RESERVED | Org-user: HadleyLab founder |
| hadleylab-skin | RESERVED | Org-user: HadleyLab skin |
| HadleyLab | RESERVED | Research org |
| MammoChat | RESERVED | Research org |
| canonic-credit | PENDING | Credit/scoring |
| hadleylab-canonic | PENDING | Founder scope |
| canonic-magic | PENDING | MAGIC brand |
| canonic-users | PENDING | User federation |
| canonic-pitch | PENDING | MAGIC WORKS: Present |
| canonic-talk | PENDING | MAGIC WORKS: Communicate |
| canonic-deal | PENDING | MAGIC WORKS: Transact |
| canonic-time | PENDING | MAGIC WORKS: Schedule |
| canonic-work | PENDING | MAGIC WORKS: Workflow |
| canonic-via | PENDING | MAGIC WORKS: Deliver |
| canonic-ai | PENDING | AI/Intelligence |
| canonic-coin | PENDING | Tokeneconomics |
| canonic-cloud | PENDING | CloudKit/infrastructure |
| canonic-enterprise | PENDING | Enterprise tier |
| canonic-agent | PENDING | Agent tier |
| canonic-health | PENDING | Healthcare vertical |
| canonic-mobile | PENDING | Mobile-first |
| canonic-intelligence | PENDING | Governed AI |

### Transition Checklist

- [x] Commit all 12 domains — 0 uncommitted files
- [x] Push canonic-programming to GitHub
- [x] Create canonic-apple org on GitHub
- [x] Create canonic-apple/canonic-apple repo
- [x] Create Xcode multiplatform project (iOS + macOS)
- [x] Copy C kernel (header / source)
- [x] Copy Design.swift (kernel spec) — evolved for native SwiftUI
- [x] SwiftUI @main App struct (5 tabs: MAGIC, WORK, TIME, TALK, INTELLIGENCE)
- [x] SwiftData models (Domain, LedgerEntry, Contact, Deal)
- [x] Push canonic-apple to GitHub (84bce95)
- [ ] Reserve remaining PENDING orgs
- [ ] CloudKit container (replaces git federation)
- [ ] Sign in with Apple (replaces SSH keys)
- [ ] Secure Enclave passkey auth
- [ ] CoreML on Apple Silicon (Learning dimension → on-device)
- [ ] EventKit TIME view (MEETER-style deep integration)
- [ ] magic:// URL scheme via WKURLSchemeHandler
- [ ] TestFlight beta
- [ ] App Store submission — MAGIC

### App Store Expansion

MAGIC is the platform. Once it ships, every canonic-* becomes its own app.
Each app = a ledger. Each app = a node. multiLEDGER.

| App | Org | App Store Category |
|-----|-----|--------------------|
| MAGIC | canonic-apple | Productivity |
| MAGIC PITCH | canonic-pitch | Business |
| MAGIC TALK | canonic-talk | Communication |
| MAGIC DEAL | canonic-deal | Finance |
| MAGIC TIME | canonic-time | Productivity |
| MAGIC WORK | canonic-work | Business |
| MAGIC VIA | canonic-via | Utilities |
| MAGIC HEALTH | canonic-health | Health & Fitness |
| MAGIC INTELLIGENCE | canonic-intelligence | Developer Tools |
| MAGIC SHOP | canonic-foundation/SHOP | Shopping |
| MAGIC COIN | canonic-coin | Finance |
| MAGIC LEARNING | canonic-learning | Education |

## Later
- [ ] CANONIC as programming paradigm formalization
- [ ] Language spec: governance as code
- [ ] Validator SDK
- [ ] Developer documentation
<!-- _generated: build-surfaces -->

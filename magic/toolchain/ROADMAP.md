# ROADMAP

inherits: canonic-canonic/MAGIC/TOOLCHAIN

| Priority | Item | Status |
|----------|------|--------|
| HIGH | Fleet site autodiscovery from runtime (site dir + CANON/CONTENT gate) | COMPLETE (2026-02-14) |
| HIGH | MAGIC scope autodiscovery across gov tree + HTTP fleet roots | COMPLETE (2026-02-14) |
| HIGH | Govern frontend mapping in TOOLCHAIN/HTTP.json and compile runtime from it | COMPLETE (2026-02-14) |
| HIGH | Compile depth-2 frontend content from GOV tree (`HTTP.depth_sources`) | COMPLETE (2026-02-14) |
| MEDIUM | Add magic-heal --fill-vocab flag for agent-assisted VOCAB stub filling | PENDING |
| MEDIUM | Add cross-scope coherence checker (anti-drift automation) | PENDING |
| LOW | tqdm-style progress bars across all executables | PENDING |
| HIGH | Runtime-governance boundary checker — verify ~/.canonic/bin/ matches TOOLCHAIN contracts | PENDING |
| HIGH | Enforce RUNTIME = lowercase in compiler output — services/, vault/, learning/, design/ subdirs must be lowercase per DESIGN.md Naming Convention | PENDING |
| HIGH | Fleet site compiler — evaluate lowercasing *.github.io/ subdirs to match RUNTIME convention | PENDING |
| HIGH | fleet-gc — periodic shallow-clone + GC of fleet repo .git histories to prevent CI deploy bloat | COMPLETE (2026-03-02) |

---

*ROADMAP | TOOLCHAIN | MAGIC*
<!-- _generated: build-surfaces -->

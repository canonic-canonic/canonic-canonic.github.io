# COMPLIANCE

inherits: canonic-canonic/MAGIC/TOOLCHAIN

---

## Axiom

**No fallbacks. No hardcoding outside GOV. Strict compliance. MAGIC 255.**

Runtime code reads CANONIC-internal values from compiled TOOLCHAIN JSON. Missing config is a fatal error. Silent exception swallowing is forbidden. External protocol constants (third-party API endpoints) are allowed.

---

## Banned Patterns

| Pattern | Scope | Description |
|---------|-------|-------------|
| `os.environ.get(KEY, "default")` | bin/*.py | Environment variable with hardcoded fallback |
| `env.X \|\| 'literal'` | worker.js | Wrangler var with inline fallback (CANONIC values only) |
| `env.X ?? literal` | worker.js | Nullish coalescing with inline fallback (CANONIC values only) |
| `except Exception: pass` | bin/*.py | Silent exception swallowing |
| `except Exception:` + bare return | bin/*.py | Silent exception with default return |
| `catch {}` | *.js | Empty catch block |
| `catch (_) {}` | *.js | Named but unused catch block |
| `home ? home : "/tmp"` | magic.c | HOME not-set fallback |

## Allowed Exceptions

| Pattern | Scope | Reason |
|---------|-------|--------|
| CANONIC_GOV, CANONIC_HOME, CANONIC_MAP | magic_lib.py | Bootstrap constants — by design |
| `https://api.anthropic.com` | worker.js | External protocol constant |
| `https://api.openai.com` | worker.js | External protocol constant |
| `https://api.deepseek.com` | worker.js | External protocol constant |
| `https://api.stripe.com` | worker.js | External protocol constant |
| `https://github.com` | all | External protocol constant |
| `env.ANTHROPIC_VERSION \|\| '2023-06-01'` | worker.js | Third-party API version header |
| `except Exception` with stderr log | bin/*.py | Logged failure is not silent |
| `catch (e) { console.error(...) }` | *.js | Logged failure is not silent |

## Scan Targets

| Path | Type |
|------|------|
| ~/.canonic/bin/*.py | Python runtime |
| ~/.canonic/design/TALK/src/worker.js | TALK worker |
| ~/CANONIC/canonic-canonic/MAGIC/magic.c | C kernel |
| ~/.canonic/bin/bootstrap | Shell bootstrap |

---

*COMPLIANCE | CONTRACT | TOOLCHAIN*
<!-- _generated: build-surfaces -->

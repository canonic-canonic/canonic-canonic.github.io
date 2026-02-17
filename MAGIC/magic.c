/**
 * MAGIC — 255-bit Governance Kernel
 *
 * validate. scan. commit. ledger.
 * 8 checks. 255 max. 6 tiers. Nothing else.
 *
 * ── DETROS GOVERNANCE LATTICE (PRIVATE) ──────────────────
 *
 *   D     0x01  Declarative   CANON.md exists
 *   E     0x02  Evidential    VOCAB.md exists
 *   T     0x04  Temporal      ROADMAP.md exists
 *   R     0x08  Relational    inherits: in CANON.md
 *   O     0x10  Operational   MUST/SHOULD in CANON.md
 *   S     0x20  Structural    ## Axiom in CANON.md
 *   L     0x40  Learning      LEARNING.md exists
 *   LANG  0x80  Language      LANGUAGE inherited (.md, DESIGN, .css)
 *   ─────────────────────────────────────────────────────
 *   0xFF  255   FULL          all 8 pass = MAGIC
 *
 * ── COMPLIANCE TIERS ─────────────────────────────────────
 *
 *   NONE         0    no governance
 *   COMMUNITY   35    D + E + S
 *   BUSINESS    39    D + E + S + R
 *   ENTERPRISE  63    D + E + T + R + O + S
 *   AGENT      127    all except LANG
 *   FULL       255    all 8 = MAGIC
 *
 * ── STATE ────────────────────────────────────────────────
 *
 *   255       VALID
 *   >= 63     FLAGGED
 *   < 63      FAIL
 *
 * ── BUILD ────────────────────────────────────────────────
 *
 *   cc -O2 -Wno-deprecated-declarations \
 *      -I$(brew --prefix openssl@3)/include \
 *      magic.c \
 *      -L$(brew --prefix openssl@3)/lib -lssl -lcrypto \
 *      -o magic
 */

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdint.h>
#include <stdbool.h>
#include <sys/stat.h>
#include <dirent.h>
#include <libgen.h>
#include <unistd.h>
#include <openssl/sha.h>
#include <sys/time.h>

/* ── DIMENSIONS ─────────────────────────────────────────────────────────── */

#define MAGIC_D    0x01  /* Declarative  — CANON.md exists              */
#define MAGIC_E    0x02  /* Evidential   — VOCAB.md exists              */
#define MAGIC_T    0x04  /* Temporal     — ROADMAP.md exists            */
#define MAGIC_R    0x08  /* Relational   — inherits: in CANON.md        */
#define MAGIC_O    0x10  /* Operational  — MUST/SHOULD in CANON.md      */
#define MAGIC_S    0x20  /* Structural   — ## Axiom in CANON.md         */
#define MAGIC_L    0x40  /* Learning     — LEARNING.md exists            */
#define MAGIC_LANG 0x80  /* Language     — LANGUAGE inherited            */

/* ── TIERS ──────────────────────────────────────────────────────────────── */

#define TIER_COMMUNITY   35
#define TIER_BUSINESS    39
#define TIER_ENTERPRISE  63
#define TIER_AGENT      127
#define TIER_FULL       255

static uint8_t tier(uint8_t bits) {
    if ((bits & TIER_FULL)       == TIER_FULL)       return 5;
    if ((bits & TIER_AGENT)      == TIER_AGENT)      return 4;
    if ((bits & TIER_ENTERPRISE) == TIER_ENTERPRISE) return 3;
    if ((bits & TIER_BUSINESS)   == TIER_BUSINESS)   return 2;
    if ((bits & TIER_COMMUNITY)  == TIER_COMMUNITY)  return 1;
    return 0;
}

static const char* state(uint8_t bits) {
    if (bits == TIER_FULL) return "VALID";
    if (bits >= TIER_ENTERPRISE) return "FLAGGED";
    return "FAIL";
}

/* ── FILE HELPERS ───────────────────────────────────────────────────────── */

static bool exists(const char* path) {
    struct stat st;
    return stat(path, &st) == 0;
}

static bool contains(const char* path, const char* needle) {
    FILE* f = fopen(path, "r");
    if (!f) return false;
    fseek(f, 0, SEEK_END);
    long sz = ftell(f);
    fseek(f, 0, SEEK_SET);
    char* buf = malloc(sz + 1);
    if (!buf) { fclose(f); return false; }
    fread(buf, 1, sz, f);
    buf[sz] = '\0';
    fclose(f);
    bool found = strstr(buf, needle) != NULL;
    free(buf);
    return found;
}

static bool is_dir_path(const char* path) {
    struct stat st;
    if (stat(path, &st) != 0) return false;
    return S_ISDIR(st.st_mode);
}

static bool is_file_path(const char* path) {
    struct stat st;
    if (stat(path, &st) != 0) return false;
    return S_ISREG(st.st_mode);
}

/* ── WORKSPACE ────────────────────────────────────────────────────────────
 *
 * GOV_ROOT invariant:
 * - Nested git boundaries are forbidden unless they are submodules.
 * - Submodules have ".git" as a FILE; embedded repos have ".git" as a DIR.
 */

static int workspace_check_dir(const char* root, const char* dir, const char* root_git) {
    (void)root;
    DIR* d = opendir(dir);
    if (!d) return 0;

    struct dirent* e;
    while ((e = readdir(d))) {
        if (!strcmp(e->d_name, ".") || !strcmp(e->d_name, "..")) continue;

        char full[4096];
        snprintf(full, sizeof(full), "%s/%s", dir, e->d_name);

        if (!strcmp(e->d_name, ".git")) {
            if (is_dir_path(full) && strcmp(full, root_git) != 0) {
                closedir(d);
                printf("FAIL nested .git dir: %s\n", full);
                return 1;
            }
            /* allow: root .git dir; allow: submodule .git file */
            continue;
        }

        if (is_dir_path(full)) {
            int rc = workspace_check_dir(root, full, root_git);
            if (rc != 0) { closedir(d); return rc; }
        }
    }
    closedir(d);
    return 0;
}

static int workspace_check(const char* root) {
    char root_git[4096];
    snprintf(root_git, sizeof(root_git), "%s/.git", root);
    if (!exists(root_git)) {
        printf("FAIL GOV_ROOT missing .git: %s\n", root_git);
        return 1;
    }
    if (!is_dir_path(root)) {
        printf("FAIL GOV_ROOT not a directory: %s\n", root);
        return 1;
    }
    int rc = workspace_check_dir(root, root, root_git);
    if (rc == 0) printf("OK workspace\n");
    return rc;
}

/* ── VALIDATE ───────────────────────────────────────────────────────────── */

static uint8_t validate(const char* path) {
    uint8_t bits = 0;
    char p[4096];

    /* D — CANON.md exists */
    snprintf(p, sizeof(p), "%s/CANON.md", path);
    if (exists(p)) bits |= MAGIC_D;

    /* E — VOCAB.md exists */
    snprintf(p, sizeof(p), "%s/VOCAB.md", path);
    if (exists(p)) bits |= MAGIC_E;

    /* T — ROADMAP.md exists */
    snprintf(p, sizeof(p), "%s/ROADMAP.md", path);
    if (exists(p)) bits |= MAGIC_T;

    /* R — inherits: in CANON.md */
    snprintf(p, sizeof(p), "%s/CANON.md", path);
    if (contains(p, "inherits:")) bits |= MAGIC_R;

    /* O — MUST or SHOULD in CANON.md */
    snprintf(p, sizeof(p), "%s/CANON.md", path);
    if (contains(p, "MUST") || contains(p, "SHOULD")) bits |= MAGIC_O;

    /* S — ## Axiom in CANON.md */
    snprintf(p, sizeof(p), "%s/CANON.md", path);
    if (contains(p, "## Axiom")) bits |= MAGIC_S;

    /* L — LEARNING.md exists */
    snprintf(p, sizeof(p), "%s/LEARNING.md", path);
    if (exists(p)) bits |= MAGIC_L;

    /* LANG — LANGUAGE inherited */
    snprintf(p, sizeof(p), "%s/LANGUAGE.md", path);
    if (exists(p)) { bits |= MAGIC_LANG; return bits; }
    snprintf(p, sizeof(p), "%s/DESIGN.md", path);
    if (exists(p)) { bits |= MAGIC_LANG; return bits; }
    snprintf(p, sizeof(p), "%s/DESIGN.css", path);
    if (exists(p)) { bits |= MAGIC_LANG; return bits; }

    /* Walk up for inherited LANGUAGE */
    char walk[4096];
    strncpy(walk, path, sizeof(walk) - 1);
    walk[sizeof(walk) - 1] = '\0';
    for (;;) {
        char* slash = strrchr(walk, '/');
        if (!slash || slash == walk) break;
        *slash = '\0';
        snprintf(p, sizeof(p), "%s/LANGUAGE.md", walk);
        if (exists(p)) { bits |= MAGIC_LANG; break; }
        snprintf(p, sizeof(p), "%s/DESIGN.md", walk);
        if (exists(p)) { bits |= MAGIC_LANG; break; }
        snprintf(p, sizeof(p), "%s/DESIGN.css", walk);
        if (exists(p)) { bits |= MAGIC_LANG; break; }
    }

    return bits;
}

/* ── SCAN ───────────────────────────────────────────────────────────────── */

static void scan(const char* path) {
    DIR* dir = opendir(path);
    if (!dir) { fprintf(stderr, "cannot open: %s\n", path); return; }

    struct dirent* e;
    size_t count = 0;
    uint8_t min = 255, max = 0;

    while ((e = readdir(dir))) {
        if (e->d_name[0] == '.') continue;
        if (e->d_type != DT_DIR) continue;

        char full[4096];
        snprintf(full, sizeof(full), "%s/%s", path, e->d_name);

        /* Only report governed scopes (have CANON.md) */
        char canon[4096];
        snprintf(canon, sizeof(canon), "%s/CANON.md", full);
        if (!exists(canon)) continue;

        uint8_t b = validate(full);
        uint8_t t = tier(b);

        printf("  %s: %d/255 (tier %d)\n", e->d_name, b, t);
        if (b < min) min = b;
        if (b > max) max = b;
        count++;
    }
    closedir(dir);
    printf("domains: %zu  min: %d  max: %d\n", count, min, max);
}

/* ── LEDGER ─────────────────────────────────────────────────────────────── */

typedef struct {
    uint8_t  id[32];
    uint8_t  prev[32];
    uint64_t ts;
    uint8_t  type;
    char     key[256];
    int32_t  gradient;
    uint8_t  from_bits;
    uint8_t  to_bits;
    char     inventor[64];
} IDF;

static uint64_t now_ns(void) {
    struct timeval tv;
    gettimeofday(&tv, NULL);
    return (uint64_t)tv.tv_sec * 1000000000ULL + (uint64_t)tv.tv_usec * 1000ULL;
}

static void hex(const uint8_t* h, char* out) {
    for (int i = 0; i < 32; i++) sprintf(out + i * 2, "%02x", h[i]);
    out[64] = '\0';
}

static void ledger_head_read(const char* lp, uint8_t* hash) {
    char path[4096], hx[65] = {0};
    snprintf(path, sizeof(path), "%s/HEAD", lp);
    FILE* f = fopen(path, "r");
    if (!f) { memset(hash, 0, 32); return; }
    fread(hx, 1, 64, f);
    fclose(f);
    for (int i = 0; i < 32; i++) { unsigned int b; sscanf(hx + i * 2, "%2x", &b); hash[i] = b; }
}

static void ledger_head_write(const char* lp, const uint8_t* hash) {
    char path[4096], hx[65];
    snprintf(path, sizeof(path), "%s/HEAD", lp);
    hex(hash, hx);
    FILE* f = fopen(path, "w");
    if (f) { fprintf(f, "%s", hx); fclose(f); }
}

static void ledger_idf_path(const char* lp, const uint8_t* hash, char* out) {
    char hx[65];
    hex(hash, hx);
    snprintf(out, 4096, "%s/%.16s.idf", lp, hx);
}

static IDF ledger_log(const char* lp, const char* key, uint8_t bits, uint8_t prev_bits, const char* inventor) {
    IDF idf = {0};
    int32_t g = (int32_t)bits - (int32_t)prev_bits;
    if (g == 0) return idf;

    mkdir(lp, 0755);
    ledger_head_read(lp, idf.prev);

    idf.ts = now_ns();
    idf.type = 0x02;  /* gradient */
    strncpy(idf.key, key, sizeof(idf.key) - 1);
    idf.gradient = g;
    idf.from_bits = prev_bits;
    idf.to_bits = bits;
    strncpy(idf.inventor, inventor, sizeof(idf.inventor) - 1);

    SHA256((unsigned char*)&idf.prev, sizeof(idf) - 32, idf.id);

    char path[4096];
    ledger_idf_path(lp, idf.id, path);
    FILE* f = fopen(path, "wb");
    if (f) { fwrite(&idf, sizeof(idf), 1, f); fclose(f); }

    ledger_head_write(lp, idf.id);
    return idf;
}

static void ledger_state(const char* lp) {
    uint8_t cur[32];
    ledger_head_read(lp, cur);

    size_t len = 0;
    int64_t total = 0;
    char path[4096];

    while (1) {
        bool zero = true;
        for (int i = 0; i < 32; i++) if (cur[i]) { zero = false; break; }
        if (zero) break;

        ledger_idf_path(lp, cur, path);
        FILE* f = fopen(path, "rb");
        if (!f) break;
        IDF idf;
        fread(&idf, sizeof(idf), 1, f);
        fclose(f);

        len++;
        total += idf.gradient;
        memcpy(cur, idf.prev, 32);
    }
    printf("length:%zu gradient:%lld\n", len, (long long)total);
}

static bool ledger_verify(const char* lp) {
    uint8_t cur[32];
    ledger_head_read(lp, cur);
    char path[4096];

    while (1) {
        bool zero = true;
        for (int i = 0; i < 32; i++) if (cur[i]) { zero = false; break; }
        if (zero) return true;

        ledger_idf_path(lp, cur, path);
        FILE* f = fopen(path, "rb");
        if (!f) return false;
        IDF idf;
        fread(&idf, sizeof(idf), 1, f);
        fclose(f);

        uint8_t computed[32];
        SHA256((unsigned char*)&idf.prev, sizeof(idf) - 32, computed);
        if (memcmp(computed, idf.id, 32) != 0) return false;

        memcpy(cur, idf.prev, 32);
    }
}

/* ── HEAL ───────────────────────────────────────────────────────────────── */

static void heal(const char* path) {
    uint8_t before = validate(path);
    char p[4096];
    int healed = 0;

    char copy[4096];
    strncpy(copy, path, sizeof(copy) - 1);
    copy[sizeof(copy) - 1] = '\0';
    const char* scope = basename(copy);

    /* D + R + O + S — scaffold CANON.md */
    snprintf(p, sizeof(p), "%s/CANON.md", path);
    if (!exists(p)) {
        FILE* f = fopen(p, "w");
        if (f) {
            fprintf(f, "# %s — CANON\n\ninherits: .\n\n---\n\n## Axiom\n\nMUST: Declare governance.\n\n---\n\n*%s | CANON | CANONIC*\n", scope, scope);
            fclose(f);
            printf("  healed: CANON.md\n");
            healed++;
        }
    }

    /* E — scaffold VOCAB.md */
    snprintf(p, sizeof(p), "%s/VOCAB.md", path);
    if (!exists(p)) {
        FILE* f = fopen(p, "w");
        if (f) {
            fprintf(f, "# %s — VOCABULARY\n\ninherits: .\n\n---\n\n*%s | VOCABULARY | CANONIC*\n", scope, scope);
            fclose(f);
            printf("  healed: VOCAB.md\n");
            healed++;
        }
    }

    /* T — scaffold ROADMAP.md */
    snprintf(p, sizeof(p), "%s/ROADMAP.md", path);
    if (!exists(p)) {
        FILE* f = fopen(p, "w");
        if (f) {
            fprintf(f, "# %s — ROADMAP\n\ninherits: .\n\n---\n\n*%s | ROADMAP | CANONIC*\n", scope, scope);
            fclose(f);
            printf("  healed: ROADMAP.md\n");
            healed++;
        }
    }

    /* L — scaffold LEARNING.md */
    snprintf(p, sizeof(p), "%s/LEARNING.md", path);
    if (!exists(p)) {
        FILE* f = fopen(p, "w");
        if (f) {
            fprintf(f, "# LEARNING\n\ninherits: ..\n\n---\n\nEvidence lane for %s.\n\n---\n\n*LEARNING | %s | MAGIC*\n", scope, scope);
            fclose(f);
            printf("  healed: LEARNING.md\n");
            healed++;
        }
    }

    /* LANG — cannot heal (inherited LANGUAGE) */

    uint8_t after = validate(path);
    printf("%d/255 -> %d/255 tier:%d %s healed:%d\n", before, after, tier(after), state(after), healed);
}

/* ── CLI ────────────────────────────────────────────────────────────────── */

int main(int argc, char* argv[]) {
    if (argc < 2) { printf("magic validate|scan|commit|heal|ledger|workspace <path>\n"); return 1; }

    const char* cmd = argv[1];
    const char* path = argc > 2 ? argv[2] : ".";

    const char* home = getenv("HOME");
    char lp[4096];
    snprintf(lp, sizeof(lp), "%s/.canonic/LEDGER", home ? home : "/tmp");

    if (!strcmp(cmd, "validate")) {
        uint8_t b = validate(path);
        printf("%d/255 tier:%d %s\n", b, tier(b), state(b));

    } else if (!strcmp(cmd, "scan")) {
        scan(path);

    } else if (!strcmp(cmd, "commit")) {
        uint8_t b = validate(path);
        char copy[4096];
        strncpy(copy, path, sizeof(copy) - 1);
        const char* domain = basename(copy);
        const char* inventor = argc > 3 ? argv[3] : "GIT";
        IDF idf = ledger_log(lp, domain, b, 0, inventor);
        char hx[65]; hex(idf.id, hx);
        printf("%s %d/255 tier:%d %s idf:%.16s\n", domain, b, tier(b), state(b), hx);

    } else if (!strcmp(cmd, "heal")) {
        heal(path);

    } else if (!strcmp(cmd, "ledger")) {
        const char* sub = argc > 2 ? argv[2] : "state";
        if (!strcmp(sub, "state")) ledger_state(lp);
        else if (!strcmp(sub, "verify")) {
            bool ok = ledger_verify(lp);
            printf("chain: %s\n", ok ? "VALID" : "BROKEN");
            return ok ? 0 : 1;
        } else printf("magic ledger state|verify\n");

    } else if (!strcmp(cmd, "workspace")) {
        return workspace_check(path);

    } else {
        printf("magic validate|scan|commit|heal|ledger|workspace <path>\n");
        return 1;
    }
    return 0;
}

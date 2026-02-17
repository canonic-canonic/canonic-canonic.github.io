/**
 * RENDER.js — Fleet-wide Content Renderer
 *
 * Loads CANON.json + CONTENT.json → renders the page.
 * Zero hardcoded content. Governance to frontend.
 *
 * CANON.json  = WHO you are (scope, accent, systemPrompt)
 * CONTENT.json = WHAT you show (hero, sections, stats, tiers)
 *
 * Usage: <script src="./render.js"></script>
 *        RENDER.init()
 *
 * MAGIC DESIGN | CANONIC | 2026-02
 */

var RENDER = (function () {
    'use strict';

    var canon = null;
    var content = null;

    function fatal(msg) {
        var m = String(msg || 'RENDER fatal');
        try { console.error('[RENDER] ' + m); } catch (_) {}
        try {
            document.body.innerHTML =
                '<div class="container" style="padding:calc(var(--header-offset) + 24px) 24px 80px;max-width:980px;">' +
                '<div class="card" style="padding:22px;border:1px solid rgba(255,69,58,0.35);">' +
                '<div style="font-family:var(--mono);font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:rgba(255,69,58,0.95);">STATE MACHINE FAIL</div>' +
                '<div style="margin-top:10px;font-size:18px;font-weight:800;">Invalid surface</div>' +
                '<div class="muted" style="margin-top:8px;font-family:var(--mono);font-size:12px;white-space:pre-wrap;">' + m + '</div>' +
                '</div></div>';
        } catch (_) {}
        throw new Error(m);
    }

    // ── LOAD ──────────────────────────────────────────────
    async function loadJSON(path) {
        var sep = path.indexOf('?') === -1 ? '?' : '&';
        var res = await fetch(path + sep + 'v=' + Date.now());
        if (!res.ok) throw new Error(path + ' ' + res.status);
        return res.json();
    }

    // Governed inheritance chain for JSON artifacts (CANON.json / CONTENT.json).
    // Child scopes may add but should not weaken feature gates (min/max principle).
    async function loadGovernedJSON(path, opts) {
        opts = opts || {};
        var maxDepth = (typeof opts.maxDepth === 'number') ? opts.maxDepth : 6;

        function isPlainObject(x) {
            return !!x && typeof x === 'object' && !Array.isArray(x);
        }

        function validateInheritsPath(p) {
            if (!p || typeof p !== 'string') throw new Error(path + ' inherits must be a string');
            if (p.indexOf('://') !== -1) throw new Error(path + ' inherits must be relative (no scheme)');
            if (p[0] === '/') throw new Error(path + ' inherits must be relative (no absolute path)');
            return p;
        }

        function deepMerge(parent, child) {
            parent = parent || {};
            child = child || {};

            var out = {};
            for (var k in parent) out[k] = parent[k];
            for (var k2 in child) {
                var pv = parent[k2];
                var cv = child[k2];
                // Min/max: booleans are monotonic (parent=true cannot be disabled downstream).
                if (typeof pv === 'boolean' && typeof cv === 'boolean') out[k2] = (pv || cv);
                else if (isPlainObject(pv) && isPlainObject(cv)) out[k2] = deepMerge(pv, cv);
                else out[k2] = cv; // arrays + scalars override
            }

            return out;
        }

        async function loadRec(p, depth, seen) {
            depth = depth || 0;
            seen = seen || {};
            if (depth > maxDepth) throw new Error(path + ' inherits too deep');
            if (seen[p]) throw new Error(path + ' inherits cycle');
            seen[p] = true;

            var cur = await loadJSON(p);
            var inherits = cur && cur.inherits;
            if (!inherits) return cur;

            var list = Array.isArray(inherits) ? inherits : [inherits];
            var merged = {};
            for (var i = 0; i < list.length; i++) {
                var parentPath = validateInheritsPath(list[i]);
                var parentObj = await loadRec(parentPath, depth + 1, seen);
                merged = deepMerge(merged, parentObj);
            }

            return deepMerge(merged, cur);
        }

        return loadRec(path);
    }

    function fmtNum(n) {
        var x = Number(n);
        if (!isFinite(x)) return String(n || '0');
        try { return x.toLocaleString(); } catch (_) { return String(x); }
    }

    function shortHash(h) {
        h = String(h || '');
        if (h.length <= 16) return h;
        return h.slice(0, 12) + '...' + h.slice(-4);
    }

    function renderEconPanel(containerId, spec) {
        var el = document.getElementById(containerId);
        if (!el) return;

        var title = (spec && spec.title) ? spec.title : 'Economic View';
        var src = (spec && spec.src) ? spec.src : './econ.json';

        el.innerHTML =
            '<div style="font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:var(--fg-tertiary);">Econ · Public</div>' +
            '<div style="font-size:18px;font-weight:800;margin-top:6px;">' + title + '</div>' +
            '<div class="muted" style="margin-top:10px;">Loading ' + src + '...</div>';

        loadJSON(src).then(function (data) {
            var ledger = (data && data.ledger) ? data.ledger : {};
            var byKey = ledger.by_key || [];
            var updated = data.generated_at || '';
            var head = ledger.head || '';

            var html = '';
            html += '<div style="display:flex;align-items:flex-start;justify-content:space-between;gap:14px;flex-wrap:wrap;">';
            html += '<div>';
            html += '<div style="font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:var(--fg-tertiary);">WORK = COIN</div>';
            html += '<div style="font-size:18px;font-weight:800;margin-top:6px;">' + title + '</div>';
            html += '<div class="muted" style="margin-top:8px;font-size:12px;">Derived from private VAULT chain. No private actors published.</div>';
            html += '</div>';
            html += '<div style="font-family:var(--mono);font-size:11px;color:var(--fg-tertiary);text-align:right;min-width:220px;">';
            if (updated) html += '<div>updated: ' + updated + '</div>';
            if (head) html += '<div>head: ' + shortHash(head) + '</div>';
            html += '</div>';
            html += '</div>';

            html += '<div class="stats" style="margin-top:14px;">';
            html += '<div class="stat"><div class="stat-value">' + fmtNum(ledger.entries || 0) + '</div><div class="stat-label">entries</div></div>';
            html += '<div class="stat"><div class="stat-value">' + fmtNum(ledger.total || 0) + '</div><div class="stat-label">total COIN</div></div>';
            html += '</div>';

            if (byKey && byKey.length) {
                var econRows = byKey.filter(function(r) { return r && r.k; }).map(function(r) {
                    return ['<span style="font-family:var(--mono);font-size:12px;">' + r.k + '</span>',
                            '<span style="font-family:var(--mono);">' + fmtNum(r.v || 0) + '</span>'];
                });
                html += renderSimpleTable(['scope', 'coin'], econRows, { style: 'margin-top:16px' });
            } else {
                html += '<div class="muted" style="margin-top:14px;">No minted work yet.</div>';
            }

            el.innerHTML = html;
        }).catch(function () {
            el.innerHTML =
                '<div style="font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:var(--fg-tertiary);">Econ · Public</div>' +
                '<div style="margin-top:10px;font-family:var(--mono);font-size:12px;color:var(--fg-tertiary);">missing: ' + src + '</div>';
        });
    }

    function renderWalletPanel(containerId, spec) {
        var el = document.getElementById(containerId);
        if (!el) return;

        var title = (spec && spec.title) ? spec.title : 'Wallet';
        var src = (spec && spec.src) ? spec.src : './wallet.json';

        el.innerHTML =
            '<div style="font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:var(--fg-tertiary);">Wallet · Public</div>' +
            '<div style="font-size:18px;font-weight:800;margin-top:6px;">' + title + '</div>' +
            '<div class="muted" style="margin-top:10px;">Loading ' + src + '...</div>';

        loadJSON(src).then(function (data) {
            var w = (data && data.wallet) ? data.wallet : {};
            var totals = w.totals || {};
            var updated = w.updated_at || '';

            var html = '';
            html += '<div style="display:flex;align-items:flex-start;justify-content:space-between;gap:14px;flex-wrap:wrap;">';
            html += '<div>';
            html += '<div style="font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:var(--fg-tertiary);">COIN = WORK</div>';
            html += '<div style="font-size:18px;font-weight:800;margin-top:6px;">' + title + '</div>';
            html += '<div class="muted" style="margin-top:8px;font-size:12px;">Public rollup. No private purchaser identity published.</div>';
            html += '</div>';
            html += '<div style="font-family:var(--mono);font-size:11px;color:var(--fg-tertiary);text-align:right;min-width:220px;">';
            if (updated) html += '<div>updated: ' + updated + '</div>';
            html += '</div>';
            html += '</div>';

            html += '<div class="stats" style="margin-top:14px;">';
            html += '<div class="stat"><div class="stat-value">' + fmtNum(w.events || 0) + '</div><div class="stat-label">events</div></div>';
            html += '<div class="stat"><div class="stat-value">' + fmtNum(w.balance || 0) + '</div><div class="stat-label">balance</div></div>';
            html += '<div class="stat"><div class="stat-value">' + fmtNum(totals.SALE || 0) + '</div><div class="stat-label">sales</div></div>';
            html += '<div class="stat"><div class="stat-value">' + fmtNum(totals.net || 0) + '</div><div class="stat-label">net</div></div>';
            html += '</div>';

            var products = w.products || [];
            if (products.length) {
                var walletRows = products.slice(0, 24).filter(function(p) { return !!p; }).map(function(p) {
                    var name = p.name || p.id || 'product';
                    var price = p.price_coin != null ? (String(p.price_coin) + ' COIN') : (p.price_usd != null ? ('$' + String(p.price_usd)) : '');
                    return ['<span style="font-family:var(--mono);font-size:12px;">' + name + '</span>',
                            '<span style="font-family:var(--mono);">' + price + '</span>'];
                });
                html += renderSimpleTable(['product', 'price'], walletRows, { style: 'margin-top:16px' });
            }

            el.innerHTML = html;
        }).catch(function () {
            el.innerHTML =
                '<div style="font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:var(--fg-tertiary);">Wallet · Public</div>' +
                '<div style="margin-top:10px;font-family:var(--mono);font-size:12px;color:var(--fg-tertiary);">missing: ' + src + '</div>';
        });
    }

    // ── UTIL: hex to rgb ─────────────────────────────────
    function hexToRgb(hex) {
        if (!hex || hex.charAt(0) !== '#') return '96,165,250';
        hex = hex.replace('#', '');
        if (hex.length === 3) hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
        var r = parseInt(hex.substring(0, 2), 16);
        var g = parseInt(hex.substring(2, 4), 16);
        var b = parseInt(hex.substring(4, 6), 16);
        return r + ',' + g + ',' + b;
    }

    // ── UTIL: accent RGBA prefix for SVG figures ────────
    var ACCENT_RGBA = 'rgba(var(--accent-rgb,59,130,246),';

    // ── UTIL: render a single button/CTA link ──────────
    function renderButton(btn, defaultClass) {
        var cls = btn.class || defaultClass || 'btn';
        if ((' ' + cls + ' ').indexOf(' btn ') === -1) cls = 'btn ' + cls;
        var onclick = btn.talk ? ' onclick="TALK.open();return false"' : '';
        var titleAttr = btn.title ? ' title="' + btn.title + '"' : '';
        return '<a href="' + (btn.href || '#') + '" class="' + cls + '"' + onclick + titleAttr + '>' + btn.label + '</a>';
    }

    // ── UTIL: render hero CTA button group ──────────────
    function renderHeroCTA(cta) {
        if (!cta || !cta.length) return '';
        var html = '<div class="hero-cta">';
        cta.forEach(function (btn) { html += renderButton(btn); });
        html += '</div>';
        return html;
    }

    // ── UTIL: render a simple table ─────────────────────
    function renderSimpleTable(headers, rows, opts) {
        opts = opts || {};
        var html = '<table class="comp-table"' + (opts.style ? ' style="' + opts.style + '"' : '') + '>';
        html += '<thead><tr>';
        headers.forEach(function (h) { html += '<th>' + h + '</th>'; });
        html += '</tr></thead><tbody>';
        rows.forEach(function (r) {
            html += '<tr>';
            (Array.isArray(r) ? r : [r]).forEach(function (cell, i) {
                var cls = opts.cellClasses && opts.cellClasses[i] ? ' class="' + opts.cellClasses[i] + '"' : '';
                html += '<td' + cls + '>' + cell + '</td>';
            });
            html += '</tr>';
        });
        html += '</tbody></table>';
        return html;
    }

    // ── ACCENT ────────────────────────────────────────────
    function applyAccent(accent) {
        if (!accent) return;
        document.documentElement.style.setProperty('--accent', accent);
        document.documentElement.style.setProperty('--accent-rgb', hexToRgb(accent));
    }
    // ── ECO-BAR (ROOT AXIOMS) ───────────────────────────
    function renderEcoBar(fleet, currentScope) {
        var bar = document.getElementById('ecoBar');
        if (!bar || !fleet || !fleet.sites || !fleet.sites.length) return;

        var brand = fleet.brand || { label: 'CANONIC', mark: '\u2229', url: fleet.sites[0].url };
        var html = '<a href="' + brand.url + '" class="eco-brand"><span class="eco-mark">' + brand.mark + '</span> ' + brand.label + '</a>';
        html += '<div class="eco-links">';
        fleet.sites.forEach(function (s) {
            var active = s.scope === currentScope ? ' eco-active' : '';
            var label = (s.scope || s.label || '').toUpperCase();
            html += '<a href="' + s.url + '" class="' + active + '">' + label + '</a>';
        });
        html += '<a href="#" class="eco-talk" onclick="TALK.open();return false"><span class="eco-talk-dot"></span>TALK</a>';
        html += '<button class="theme-toggle" onclick="toggleTheme()" id="theme-btn" title="Toggle light/dark">\u263E</button>';
        html += '</div>';
        bar.innerHTML = html;
    }

    // ── HEADER OFFSETS (FIXED BARS MUST NOT BLOCK CONTENT) ──────────
    // Measure actual eco-bar + nav heights and publish them as CSS vars.
    //
    // CRITICAL: --header-offset is STATIC (eco-h + nav-h in CSS).
    // DO NOT set --header-offset dynamically here — hero padding and
    // scroll-padding depend on it being constant.  Changing it on eco-hide
    // shifts content → triggers browser scroll-anchoring → flips scrollY
    // → re-triggers eco-hide → infinite oscillation loop.
    //
    // Only --eco-offset varies (nav positioning). --eco-h and --nav-h are
    // measurement updates that keep the static --header-offset accurate.
    var _headerSyncBound = false;
    var _lastEcoOffset = -1;
    function syncHeaderOffsets() {
        var eco = document.getElementById('ecoBar');
        var nav = document.getElementById('nav');
        if (!eco && !nav) return;

        var ecoHidden = document.documentElement.getAttribute('data-eco-hidden') === '1';
        var ecoH = eco ? Math.round(eco.getBoundingClientRect().height) : 0;
        var navH = nav ? Math.round(nav.getBoundingClientRect().height) : 0;

        // Fallback to configured vars if DOM is not measurable yet.
        if (!ecoH || !navH) {
            try {
                var cs = getComputedStyle(document.documentElement);
                if (!ecoH) ecoH = parseInt(cs.getPropertyValue('--eco-h'), 10) || 0;
                if (!navH) navH = parseInt(cs.getPropertyValue('--nav-h'), 10) || 0;
            } catch (e) {}
        }

        var ecoOffset = ecoHidden ? 0 : ecoH;

        // Publish measured heights (keeps CSS --header-offset accurate).
        if (ecoH) document.documentElement.style.setProperty('--eco-h', ecoH + 'px');
        if (navH) document.documentElement.style.setProperty('--nav-h', navH + 'px');

        // Only update --eco-offset when it actually changes (avoids transition re-fire).
        if (ecoOffset !== _lastEcoOffset) {
            _lastEcoOffset = ecoOffset;
            document.documentElement.style.setProperty('--eco-offset', ecoOffset + 'px');
        }
    }

    function bindHeaderOffsetSync() {
        if (_headerSyncBound) return;
        _headerSyncBound = true;
        var t = null;
        window.addEventListener('resize', function () {
            if (t) clearTimeout(t);
            t = setTimeout(function () { syncHeaderOffsets(); }, 60);
        });
    }

    // ── ECO-BAR AUTOHIDE (SEQUENTIAL FIXED BARS) ─────────────────────
    // Behavior:
    // - Scroll down: hide eco-bar first (nav remains fixed).
    // - Scroll up / near top: show eco-bar.
    function bindEcoAutoHide() {
        var lastY = window.scrollY || 0;
        var hidden = false;
        var ticking = false;

        function setHidden(next) {
            if (next === hidden) return;
            hidden = next;
            if (hidden) {
                document.documentElement.setAttribute('data-eco-hidden', '1');
            } else {
                document.documentElement.removeAttribute('data-eco-hidden');
            }
            syncHeaderOffsets();
        }

        function onScroll() {
            var y = window.scrollY || 0;
            var dy = y - lastY;
            lastY = y;

            // Always show near top.
            if (y < 24) {
                setHidden(false);
                return;
            }

            // Only react to meaningful deltas to avoid jitter.
            if (dy > 10) {
                setHidden(true);
            } else if (dy < -10) {
                setHidden(false);
            }
        }

        window.addEventListener('scroll', function () {
            if (ticking) return;
            ticking = true;
            (typeof requestAnimationFrame !== 'undefined' ? requestAnimationFrame : setTimeout)(function () {
                ticking = false;
                try { onScroll(); } catch (_) {}
            }, 0);
        }, { passive: true });
    }

    // ── NAV (GOV-DERIVED) ──────────────────────────
    function labelFromId(id) {
        return String(id || '')
            .replace(/[-_]/g, ' ')
            .replace(/\b\w/g, function (c) { return c.toUpperCase(); });
    }

    function requireNav(contentData) {
        var nav = (contentData && contentData.nav) ? contentData.nav : null;
        if (!nav || !nav.length) fatal('CONTENT.json missing nav (state machine: no fallbacks)');
        nav.forEach(function (n, i) {
            if (!n || !n.label || !n.href) fatal('CONTENT.json nav[' + i + '] missing label/href');
        });
        return nav;
    }

    function renderNav(scopeName, scopeIcon, navItems) {
        var el = document.getElementById('nav');
        if (!el) return;

        var html = '<div class="nav-inner">';
        html += '<div style="display:flex;align-items:center;gap:10px;">';
        if (scopeIcon) {
            var iconStyle = 'font-size:18px;color:var(--accent);line-height:1;';
            html += '<span style="' + iconStyle + '">' + scopeIcon + '</span>';
        }
        html += '<span style="font-family:var(--mono);font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:var(--dim);">' +
            String(scopeName || 'SCOPE').toUpperCase() + '</span>';
        html += '</div>';

        html += '<ul class="nav-links">';
        (navItems || []).forEach(function (item) {
            var cls = item.type === 'flagship' ? ' class="nav-flagship"' : '';
            html += '<li><a href="' + item.href + '"' + cls + '>' + item.label + '</a></li>';
        });
        html += '</ul>';

        html += '</div>';
        el.innerHTML = html;
    }

    function applyAnchorOffsets() {
        var targets = document.querySelectorAll('#hero, section[id], .container > div[id], .container > section[id]');
        targets.forEach(function (node) {
            node.style.scrollMarginTop = 'calc(var(--header-offset) + 18px)';
        });
    }

    // ── HERO ──────────────────────────────────────────────
    function renderHero(hero) {
        var el = document.getElementById('hero');
        if (!el || !hero) return;

        // Galaxy hero — delegate to GALAXY.init
        if (hero.galaxy) {
            renderGalaxyHero(el, hero);
            return;
        }

        // Demo hero — split layout with iPhone mock
        if (hero.demo) {
            renderDemoHero(el, hero);
            return;
        }

        // Standard hero (must carry .hero padding so fixed eco-bar + nav never block content)
        var html = '<div class="hero">';
        if (hero.badge) html += '<div class="hero-badge">' + hero.badge + '</div>';
        html += '<h1 class="gradient-text">' + hero.title + '</h1>';
        if (hero.subtitle) html += '<p class="subtitle">' + hero.subtitle + '</p>';
        if (hero.description) html += '<p class="description">' + hero.description + '</p>';
        html += renderHeroCTA(hero.cta);
        html += '</div>';
        el.innerHTML = html;
    }

    // ── GALAXY HERO ─────────────────────────────────────
    function renderGalaxyHero(el, hero) {
        var g = hero.galaxy;
        var html = '<div class="galaxy-hero">';
        html += '<div class="galaxy-hero-text">';
        if (hero.badge) html += '<div class="hero-badge">' + hero.badge + '</div>';
        html += '<h1 class="gradient-text">' + hero.title + '</h1>';
        if (hero.subtitle) html += '<p class="subtitle">' + hero.subtitle + '</p>';
        if (hero.description) html += '<p class="description">' + hero.description + '</p>';
        html += renderHeroCTA(hero.cta);
        html += '</div>';
        html += '<div id="galaxyContainer" class="galaxy-container" style="height:' + (g.height || '70vh') + ';"></div>';
        html += '</div>';
        el.innerHTML = html;

        // Initialize Galaxy after DOM insert
        if (typeof GALAXY !== 'undefined') {
            GALAXY.init(document.getElementById('galaxyContainer'), g);
        }
    }

    // ── FIGURES (programmatic SVG generators) ────────────
    // Content declares `"figure": "type"` — renderer draws it. No hardcoded SVG in content.
    var FIGURES = {
        // Score meter: 0–255 arc with a needle and score label
        'score-meter': function (opts) {
            var score = (opts && opts.score) || 212;
            var label = (opts && opts.label) || 'SCORE';
            var pct = score / 255;
            // Arc geometry: 180° sweep
            var startAngle = Math.PI;
            var endAngle = 0;
            var needleAngle = startAngle + (endAngle - startAngle) * pct;
            var cx = 210, cy = 160, r = 100;
            // SVG y-axis is inverted: subtract sin for upward arc
            var fillX = (cx + r * Math.cos(needleAngle)).toFixed(1);
            var fillY = (cy - r * Math.sin(needleAngle)).toFixed(1);
            var nx = cx + r * 0.72 * Math.cos(needleAngle);
            var ny = cy - r * 0.72 * Math.sin(needleAngle);
            var a = ACCENT_RGBA;
            return '<svg viewBox="0 0 420 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Compliance score">' +
                '<rect x="0" y="0" width="420" height="240" rx="16" fill="rgba(255,255,255,0.02)"/>' +
                // Track arc (full semicircle, upward)
                '<path d="M' + (cx - r) + ' ' + cy + ' A' + r + ' ' + r + ' 0 0 1 ' + (cx + r) + ' ' + cy + '" stroke="rgba(255,255,255,0.08)" stroke-width="12" fill="none" stroke-linecap="round"/>' +
                // Fill arc (partial, follows the same upward path)
                '<path d="M' + (cx - r) + ' ' + cy + ' A' + r + ' ' + r + ' 0 0 1 ' + fillX + ' ' + fillY + '" stroke="' + a + '0.8)" stroke-width="12" fill="none" stroke-linecap="round"/>' +
                // Needle
                '<line x1="' + cx + '" y1="' + cy + '" x2="' + nx.toFixed(1) + '" y2="' + ny.toFixed(1) + '" stroke="rgba(255,255,255,0.6)" stroke-width="2" stroke-linecap="round"/>' +
                '<circle cx="' + cx + '" cy="' + cy + '" r="4" fill="' + a + '0.9)"/>' +
                // Score text
                '<text x="' + cx + '" y="' + (cy - 20) + '" text-anchor="middle" font-size="36" font-weight="800" fill="' + a + '0.95)" font-family="var(--sans)">' + score + '</text>' +
                '<text x="' + cx + '" y="' + (cy - 2) + '" text-anchor="middle" font-size="10" fill="rgba(255,255,255,0.4)" font-family="var(--mono)" letter-spacing="0.15em">' + label + '</text>' +
                // Scale labels
                '<text x="' + (cx - r - 4) + '" y="' + (cy + 18) + '" text-anchor="middle" font-size="10" fill="rgba(255,255,255,0.3)" font-family="var(--mono)">0</text>' +
                '<text x="' + (cx + r + 4) + '" y="' + (cy + 18) + '" text-anchor="middle" font-size="10" fill="rgba(255,255,255,0.3)" font-family="var(--mono)">255</text>' +
                '</svg>';
        },

        // Pipeline: horizontal flow of labeled steps with connecting arrows
        'pipeline': function (opts) {
            var steps = (opts && opts.steps) || ['Code', 'Check', 'Ship'];
            var n = steps.length;
            var w = 420, h = 180;
            var padX = 50, stepW = (w - padX * 2) / n;
            var cy = h / 2;
            var a = ACCENT_RGBA;
            var svg = '<svg viewBox="0 0 ' + w + ' ' + h + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pipeline">';
            svg += '<rect x="0" y="0" width="' + w + '" height="' + h + '" rx="16" fill="rgba(255,255,255,0.02)"/>';
            steps.forEach(function (s, i) {
                var cx = padX + stepW * i + stepW / 2;
                // Circle node
                var fill = i === n - 1 ? a + '0.25)' : 'rgba(255,255,255,0.04)';
                var stroke = i === n - 1 ? a + '0.7)' : 'rgba(255,255,255,0.15)';
                svg += '<circle cx="' + cx + '" cy="' + cy + '" r="28" fill="' + fill + '" stroke="' + stroke + '" stroke-width="1.5"/>';
                svg += '<text x="' + cx + '" y="' + (cy + 4) + '" text-anchor="middle" font-size="11" fill="rgba(255,255,255,0.75)" font-family="var(--mono)">' + s + '</text>';
                // Connector arrow
                if (i < n - 1) {
                    var x1 = cx + 30, x2 = padX + stepW * (i + 1) + stepW / 2 - 30;
                    svg += '<line x1="' + x1 + '" y1="' + cy + '" x2="' + x2 + '" y2="' + cy + '" stroke="' + a + '0.35)" stroke-width="1.5"/>';
                    svg += '<polygon points="' + x2 + ',' + (cy - 4) + ' ' + (x2 + 6) + ',' + cy + ' ' + x2 + ',' + (cy + 4) + '" fill="' + a + '0.5)"/>';
                }
            });
            // Step numbers
            steps.forEach(function (s, i) {
                var cx = padX + stepW * i + stepW / 2;
                svg += '<text x="' + cx + '" y="' + (cy + 50) + '" text-anchor="middle" font-size="9" fill="rgba(255,255,255,0.3)" font-family="var(--mono)">' + (i + 1) + '</text>';
            });
            svg += '</svg>';
            return svg;
        },

        // Audit trail: stacked evidence blocks linked vertically
        'audit-trail': function (opts) {
            var items = (opts && opts.items) || ['Who', 'What', 'When', 'Why'];
            var w = 420, h = 240;
            var a = ACCENT_RGBA;
            var svg = '<svg viewBox="0 0 ' + w + ' ' + h + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Audit trail">';
            svg += '<rect x="0" y="0" width="' + w + '" height="' + h + '" rx="16" fill="rgba(255,255,255,0.02)"/>';
            var blockH = 36, gap = 10, totalH = items.length * (blockH + gap) - gap;
            var startY = (h - totalH) / 2;
            items.forEach(function (item, i) {
                var y = startY + i * (blockH + gap);
                var alpha = 0.08 + (i / items.length) * 0.12;
                svg += '<rect x="100" y="' + y + '" width="220" height="' + blockH + '" rx="8" fill="rgba(255,255,255,' + alpha.toFixed(2) + ')" stroke="' + a + (0.15 + i * 0.1).toFixed(2) + ')" stroke-width="1"/>';
                svg += '<text x="210" y="' + (y + blockH / 2 + 4) + '" text-anchor="middle" font-size="12" fill="rgba(255,255,255,0.7)" font-family="var(--mono)">' + item + '</text>';
                // Link line
                if (i < items.length - 1) {
                    var lineY = y + blockH;
                    svg += '<line x1="210" y1="' + lineY + '" x2="210" y2="' + (lineY + gap) + '" stroke="' + a + '0.3)" stroke-width="1.5" stroke-dasharray="3 2"/>';
                }
                // Hash icon
                svg += '<text x="86" y="' + (y + blockH / 2 + 4) + '" text-anchor="end" font-size="10" fill="' + a + '0.4)" font-family="var(--mono)">#' + (i + 1) + '</text>';
            });
            svg += '</svg>';
            return svg;
        },

        // Flow chain: Foundation → MAGIC → Hadley Lab etc.
        'flow-chain': function (opts) {
            var nodes = (opts && opts.nodes) || ['Foundation', 'MAGIC', 'Hadley Lab'];
            var colors = (opts && opts.colors) || [];
            var w = 420, h = 180;
            var a = ACCENT_RGBA;
            var n = nodes.length;
            var padX = 40, segW = (w - padX * 2) / (n - 1 || 1);
            var cy = h / 2;
            var svg = '<svg viewBox="0 0 ' + w + ' ' + h + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Flow">';
            svg += '<rect x="0" y="0" width="' + w + '" height="' + h + '" rx="16" fill="rgba(255,255,255,0.02)"/>';
            // Connection curve
            if (n > 1) {
                var pathD = 'M' + padX + ' ' + cy;
                for (var i = 1; i < n; i++) {
                    var px = padX + segW * (i - 1), nx = padX + segW * i;
                    var midX = (px + nx) / 2;
                    pathD += ' C' + midX + ' ' + (cy - 40) + ', ' + midX + ' ' + (cy - 40) + ', ' + nx + ' ' + cy;
                }
                svg += '<path d="' + pathD + '" stroke="' + a + '0.35)" stroke-width="2" fill="none"/>';
            }
            nodes.forEach(function (nd, i) {
                var x = padX + segW * i;
                var c = (colors[i]) || a + '0.2)';
                svg += '<circle cx="' + x + '" cy="' + cy + '" r="22" fill="' + c + '" stroke="' + a + '0.5)" stroke-width="1.5"/>';
                svg += '<text x="' + x + '" y="' + (cy + 42) + '" text-anchor="middle" font-size="10" fill="rgba(255,255,255,0.6)" font-family="var(--mono)">' + nd + '</text>';
            });
            svg += '</svg>';
            return svg;
        },

        // Spec vs speculation: simple balance/weight metaphor
        'balance': function (opts) {
            var left = (opts && opts.left) || 'Spec';
            var right = (opts && opts.right) || 'Hype';
            var tilt = (opts && opts.tilt) || -8;
            var w = 420, h = 200;
            var a = ACCENT_RGBA;
            var cx = w / 2, baseY = 160, topY = 60;
            var svg = '<svg viewBox="0 0 ' + w + ' ' + h + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Balance">';
            svg += '<rect x="0" y="0" width="' + w + '" height="' + h + '" rx="16" fill="rgba(255,255,255,0.02)"/>';
            // Fulcrum
            svg += '<polygon points="' + (cx - 12) + ',' + baseY + ' ' + (cx + 12) + ',' + baseY + ' ' + cx + ',' + (baseY - 16) + '" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>';
            // Beam (tilted)
            var beamLen = 140;
            var rad = tilt * Math.PI / 180;
            var lx = cx - beamLen * Math.cos(rad), ly = (baseY - 20) + beamLen * Math.sin(rad);
            var rx = cx + beamLen * Math.cos(rad), ry = (baseY - 20) - beamLen * Math.sin(rad);
            svg += '<line x1="' + lx.toFixed(1) + '" y1="' + ly.toFixed(1) + '" x2="' + rx.toFixed(1) + '" y2="' + ry.toFixed(1) + '" stroke="rgba(255,255,255,0.25)" stroke-width="2.5" stroke-linecap="round"/>';
            // Pans
            svg += '<circle cx="' + lx.toFixed(1) + '" cy="' + ly.toFixed(1) + '" r="18" fill="' + a + '0.2)" stroke="' + a + '0.5)" stroke-width="1.5"/>';
            svg += '<text x="' + lx.toFixed(1) + '" y="' + (ly + 4).toFixed(1) + '" text-anchor="middle" font-size="9" fill="rgba(255,255,255,0.7)" font-family="var(--mono)">' + left + '</text>';
            svg += '<circle cx="' + rx.toFixed(1) + '" cy="' + ry.toFixed(1) + '" r="18" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.15)" stroke-width="1.5"/>';
            svg += '<text x="' + rx.toFixed(1) + '" y="' + (ry + 4).toFixed(1) + '" text-anchor="middle" font-size="9" fill="rgba(255,255,255,0.4)" font-family="var(--mono)">' + right + '</text>';
            svg += '</svg>';
            return svg;
        },

        // ── Financial Dashboard Figures ──────────────────────

        // Area chart: revenue/growth trajectory (Webull-style gradient fill)
        'area-chart': function (opts) {
            var points = (opts && opts.points) || [];
            var label = (opts && opts.label) || '';
            var prefix = (opts && opts.prefix) || '';
            var suffix = (opts && opts.suffix) || '';
            if (!points.length) return '';
            var w = 420, h = 240;
            var padL = 50, padR = 20, padT = 30, padB = 40;
            var chartW = w - padL - padR, chartH = h - padT - padB;
            var a = ACCENT_RGBA;
            var maxY = 0;
            points.forEach(function (p) { if (p.y > maxY) maxY = p.y; });
            maxY = maxY * 1.15; // headroom

            function px(i) { return padL + (i / (points.length - 1)) * chartW; }
            function py(v) { return padT + chartH - (v / maxY) * chartH; }

            var svg = '<svg viewBox="0 0 ' + w + ' ' + h + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + label + '">';
            // Gradient def
            svg += '<defs><linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">';
            svg += '<stop offset="0%" stop-color="' + a + '0.4)"/>';
            svg += '<stop offset="100%" stop-color="' + a + '0.02)"/>';
            svg += '</linearGradient></defs>';
            svg += '<rect x="0" y="0" width="' + w + '" height="' + h + '" rx="16" fill="rgba(255,255,255,0.02)"/>';

            // Grid lines
            for (var g = 0; g <= 4; g++) {
                var gy = padT + (g / 4) * chartH;
                var gVal = maxY * (1 - g / 4);
                svg += '<line x1="' + padL + '" y1="' + gy.toFixed(1) + '" x2="' + (w - padR) + '" y2="' + gy.toFixed(1) + '" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>';
                svg += '<text x="' + (padL - 6) + '" y="' + (gy + 3).toFixed(1) + '" text-anchor="end" font-size="9" fill="rgba(255,255,255,0.3)" font-family="var(--mono)">' + prefix + Math.round(gVal) + suffix + '</text>';
            }

            // Area fill path
            var areaD = 'M' + px(0).toFixed(1) + ' ' + py(points[0].y).toFixed(1);
            for (var i = 1; i < points.length; i++) {
                var cpx = (px(i - 1) + px(i)) / 2;
                areaD += ' C' + cpx.toFixed(1) + ' ' + py(points[i - 1].y).toFixed(1) + ',' + cpx.toFixed(1) + ' ' + py(points[i].y).toFixed(1) + ',' + px(i).toFixed(1) + ' ' + py(points[i].y).toFixed(1);
            }
            areaD += ' L' + px(points.length - 1).toFixed(1) + ' ' + (padT + chartH) + ' L' + px(0).toFixed(1) + ' ' + (padT + chartH) + ' Z';
            svg += '<path d="' + areaD + '" fill="url(#areaGrad)"/>';

            // Line path
            var lineD = 'M' + px(0).toFixed(1) + ' ' + py(points[0].y).toFixed(1);
            for (var j = 1; j < points.length; j++) {
                var cpx2 = (px(j - 1) + px(j)) / 2;
                lineD += ' C' + cpx2.toFixed(1) + ' ' + py(points[j - 1].y).toFixed(1) + ',' + cpx2.toFixed(1) + ' ' + py(points[j].y).toFixed(1) + ',' + px(j).toFixed(1) + ' ' + py(points[j].y).toFixed(1);
            }
            svg += '<path d="' + lineD + '" stroke="' + a + '0.9)" stroke-width="2.5" fill="none" stroke-linecap="round"/>';

            // Data points + labels
            points.forEach(function (p, i) {
                var x = px(i), y = py(p.y);
                svg += '<circle cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="4" fill="' + a + '1)" stroke="rgba(0,0,0,0.3)" stroke-width="1"/>';
                svg += '<text x="' + x.toFixed(1) + '" y="' + (y - 10).toFixed(1) + '" text-anchor="middle" font-size="10" font-weight="700" fill="rgba(255,255,255,0.8)" font-family="var(--mono)">' + prefix + p.y + suffix + '</text>';
                // X-axis label
                svg += '<text x="' + x.toFixed(1) + '" y="' + (h - 8) + '" text-anchor="middle" font-size="10" fill="rgba(255,255,255,0.4)" font-family="var(--mono)">' + p.x + '</text>';
            });

            svg += '</svg>';
            return svg;
        },

        // Bar chart: horizontal bars for scenarios/comparisons
        'bar-chart': function (opts) {
            var bars = (opts && opts.bars) || [];
            if (!bars.length) return '';
            var w = 420, h = 40 + bars.length * 52;
            var padL = 110, padR = 90, padT = 20;
            var barH = 28, gap = 24;
            var a = ACCENT_RGBA;

            // Find max numeric value for scaling
            var maxVal = 0;
            bars.forEach(function (b) {
                var num = parseFloat(String(b.value).replace(/[$,BMTKk]/g, ''));
                if (isNaN(num)) num = 0;
                // Scale by suffix
                var str = String(b.value);
                if (str.indexOf('T') >= 0) num *= 1000;
                else if (str.indexOf('B') >= 0) num *= 1;
                else if (str.indexOf('M') >= 0) num *= 0.001;
                if (num > maxVal) maxVal = num;
                b._num = num;
            });

            var barW = w - padL - padR;
            var svg = '<svg viewBox="0 0 ' + w + ' ' + h + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Valuation scenarios">';
            svg += '<rect x="0" y="0" width="' + w + '" height="' + h + '" rx="16" fill="rgba(255,255,255,0.02)"/>';

            bars.forEach(function (b, i) {
                var y = padT + i * (barH + gap);
                var pct = maxVal > 0 ? (b._num / maxVal) : 0;
                var bw = Math.max(pct * barW, 4);
                var alpha = 0.3 + pct * 0.7;

                // Track
                svg += '<rect x="' + padL + '" y="' + y + '" width="' + barW + '" height="' + barH + '" rx="6" fill="rgba(255,255,255,0.03)"/>';
                // Fill
                svg += '<rect x="' + padL + '" y="' + y + '" width="' + bw.toFixed(1) + '" height="' + barH + '" rx="6" fill="' + a + alpha.toFixed(2) + ')"/>';
                // Label (left)
                svg += '<text x="' + (padL - 8) + '" y="' + (y + barH / 2 + 4) + '" text-anchor="end" font-size="11" fill="rgba(255,255,255,0.6)" font-family="var(--mono)">' + b.label + '</text>';
                // Value (right)
                svg += '<text x="' + (w - 12) + '" y="' + (y + barH / 2 + 4) + '" text-anchor="end" font-size="12" font-weight="700" fill="' + a + '0.95)" font-family="var(--mono)">' + b.value + '</text>';
            });

            svg += '</svg>';
            return svg;
        },

        // Gauge: arc meter for percentages/coverage (like score-meter but configurable)
        'gauge': function (opts) {
            var value = (opts && opts.value != null) ? opts.value : 50;
            var max = (opts && opts.max) || 100;
            var label = (opts && opts.label) || '';
            var unit = (opts && opts.unit) || '';
            var pct = Math.min(value / max, 1);
            var w = 420, h = 240;
            var cx = w / 2, cy = 160, r = 100;
            var a = ACCENT_RGBA;

            // 270° sweep (from 225° to -45°, i.e. bottom-left to bottom-right)
            var startAngle = (225 * Math.PI) / 180;
            var totalSweep = (270 * Math.PI) / 180;
            var endAngle = startAngle - totalSweep;
            var fillAngle = startAngle - totalSweep * pct;

            function arcPt(angle) {
                return [(cx + r * Math.cos(angle)).toFixed(1), (cy - r * Math.sin(angle)).toFixed(1)];
            }

            var startPt = arcPt(startAngle);
            var endPt = arcPt(endAngle);
            var fillPt = arcPt(fillAngle);
            var largeArc = pct > 0.5 ? 1 : 0;

            var svg = '<svg viewBox="0 0 ' + w + ' ' + h + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + label + '">';
            svg += '<rect x="0" y="0" width="' + w + '" height="' + h + '" rx="16" fill="rgba(255,255,255,0.02)"/>';

            // Track arc (full 270°)
            svg += '<path d="M' + startPt[0] + ' ' + startPt[1] + ' A' + r + ' ' + r + ' 0 1 1 ' + endPt[0] + ' ' + endPt[1] + '" stroke="rgba(255,255,255,0.08)" stroke-width="14" fill="none" stroke-linecap="round"/>';

            // Fill arc
            if (pct > 0.001) {
                svg += '<path d="M' + startPt[0] + ' ' + startPt[1] + ' A' + r + ' ' + r + ' 0 ' + largeArc + ' 1 ' + fillPt[0] + ' ' + fillPt[1] + '" stroke="' + a + '0.85)" stroke-width="14" fill="none" stroke-linecap="round"/>';
            }

            // Center value
            svg += '<text x="' + cx + '" y="' + (cy - 16) + '" text-anchor="middle" font-size="40" font-weight="800" fill="' + a + '0.95)" font-family="var(--sans)">' + value + unit + '</text>';
            svg += '<text x="' + cx + '" y="' + (cy + 8) + '" text-anchor="middle" font-size="10" fill="rgba(255,255,255,0.4)" font-family="var(--mono)" letter-spacing="0.15em">' + label + '</text>';

            // Scale labels
            svg += '<text x="' + startPt[0] + '" y="' + (parseFloat(startPt[1]) + 20) + '" text-anchor="middle" font-size="9" fill="rgba(255,255,255,0.3)" font-family="var(--mono)">0</text>';
            svg += '<text x="' + endPt[0] + '" y="' + (parseFloat(endPt[1]) + 20) + '" text-anchor="middle" font-size="9" fill="rgba(255,255,255,0.3)" font-family="var(--mono)">' + max + '</text>';

            svg += '</svg>';
            return svg;
        },

        // Donut: COIN distribution / asset allocation
        'donut': function (opts) {
            var segments = (opts && opts.segments) || [];
            var total = (opts && opts.total) || 0;
            var label = (opts && opts.label) || '';
            if (!segments.length) return '';
            var w = 420, h = 300;
            var cx = w / 2, cy = 130, r = 80, innerR = 50;
            var a = ACCENT_RGBA;

            // Calculate total if not provided
            if (!total) segments.forEach(function (s) { total += s.value; });

            var svg = '<svg viewBox="0 0 ' + w + ' ' + h + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + label + ' distribution">';
            svg += '<rect x="0" y="0" width="' + w + '" height="' + h + '" rx="16" fill="rgba(255,255,255,0.02)"/>';

            // Draw segments
            var angle = -Math.PI / 2; // start at top
            var gapAngle = 0.03; // small gap between segments
            segments.forEach(function (seg, i) {
                var pct = total > 0 ? seg.value / total : 0;
                var sweep = pct * Math.PI * 2 - gapAngle;
                if (sweep < 0.01) return;
                var alpha = Math.max(0.25, 1 - i * 0.12);
                var startA = angle + gapAngle / 2;
                var endA = startA + sweep;

                var x1 = cx + r * Math.cos(startA), y1 = cy + r * Math.sin(startA);
                var x2 = cx + r * Math.cos(endA), y2 = cy + r * Math.sin(endA);
                var ix1 = cx + innerR * Math.cos(endA), iy1 = cy + innerR * Math.sin(endA);
                var ix2 = cx + innerR * Math.cos(startA), iy2 = cy + innerR * Math.sin(startA);
                var large = sweep > Math.PI ? 1 : 0;

                svg += '<path d="M' + x1.toFixed(1) + ' ' + y1.toFixed(1) +
                    ' A' + r + ' ' + r + ' 0 ' + large + ' 1 ' + x2.toFixed(1) + ' ' + y2.toFixed(1) +
                    ' L' + ix1.toFixed(1) + ' ' + iy1.toFixed(1) +
                    ' A' + innerR + ' ' + innerR + ' 0 ' + large + ' 0 ' + ix2.toFixed(1) + ' ' + iy2.toFixed(1) +
                    ' Z" fill="' + a + alpha.toFixed(2) + ')"/>';

                angle += pct * Math.PI * 2;
            });

            // Center label
            svg += '<text x="' + cx + '" y="' + (cy - 6) + '" text-anchor="middle" font-size="20" font-weight="800" fill="rgba(255,255,255,0.9)" font-family="var(--sans)">' + fmtNum(total) + '</text>';
            svg += '<text x="' + cx + '" y="' + (cy + 12) + '" text-anchor="middle" font-size="9" fill="rgba(255,255,255,0.4)" font-family="var(--mono)" letter-spacing="0.15em">' + label + '</text>';

            // Legend (below donut, 2 columns)
            var legY = cy + r + 28;
            var col1X = 30, col2X = w / 2 + 10;
            segments.slice(0, 8).forEach(function (seg, i) {
                var lx = i % 2 === 0 ? col1X : col2X;
                var ly = legY + Math.floor(i / 2) * 18;
                var alpha = Math.max(0.25, 1 - i * 0.12);
                svg += '<rect x="' + lx + '" y="' + (ly - 6) + '" width="8" height="8" rx="2" fill="' + a + alpha.toFixed(2) + ')"/>';
                svg += '<text x="' + (lx + 14) + '" y="' + ly + '" font-size="10" fill="rgba(255,255,255,0.6)" font-family="var(--mono)">' + seg.label + '</text>';
                svg += '<text x="' + (lx + 170) + '" y="' + ly + '" text-anchor="end" font-size="10" fill="rgba(255,255,255,0.4)" font-family="var(--mono)">' + fmtNum(seg.value) + '</text>';
            });

            svg += '</svg>';
            return svg;
        }
    };

    function renderFigure(fig) {
        if (!fig) return '';
        var type = (typeof fig === 'string') ? fig : fig.type;
        var opts = (typeof fig === 'object') ? fig : {};
        var fn = FIGURES[type];
        if (!fn) return '';
        return fn(opts);
    }

    // ── SWITCHER (interactive narrative tabs) ────────────
    function renderSwitcher(sw, secId) {
        if (!sw) return '';
        var tabs = sw.tabs || [];
        if (!tabs.length) return '';

        var id = 'switcher-' + String(secId || 'x');
        var html = '<div class="switcher" data-switcher="' + id + '"' + (sw.default != null ? ' data-default="' + sw.default + '"' : '') + '>';
        if (sw.kicker) html += '<div class="switcher-kicker">' + sw.kicker + '</div>';

        html += '<div class="switcher-tabs" role="tablist" aria-label="' + (sw.ariaLabel || 'Explore') + '">';
        tabs.forEach(function (t, i) {
            var active = i === 0 ? ' active' : '';
            html += '<button type="button" class="switcher-tab' + active + '" role="tab" aria-selected="' + (i === 0 ? 'true' : 'false') + '" data-tab="' + i + '">' + (t.label || ('Tab ' + (i + 1))) + '</button>';
        });
        html += '</div>';

        html += '<div class="switcher-panels">';
        tabs.forEach(function (t, i) {
            html += '<div class="switcher-panel"' + (i === 0 ? '' : ' hidden') + ' role="tabpanel" data-panel="' + i + '">';
            html += '<div class="switcher-copy">';
            if (t.title) html += '<h3>' + t.title + '</h3>';
            if (t.text) html += '<p>' + t.text + '</p>';
            if (t.bullets && t.bullets.length) {
                html += '<ul class="switcher-bullets">';
                t.bullets.forEach(function (b) { html += '<li>' + b + '</li>'; });
                html += '</ul>';
            }
            if (t.cta) {
                html += '<div style="margin-top:14px;">' + renderButton(t.cta, 'btn btn-secondary') + '</div>';
            }
            if (t.footnote) html += '<div class="switcher-footnote">' + t.footnote + '</div>';
            html += '</div>';

            // Figure: data-driven SVG from FIGURES registry, inline SVG, or fallback.
            html += '<div class="switcher-graphic">';
            if (t.figure) {
                html += renderFigure(t.figure);
            } else if (t.graphic) {
                html += t.graphic;
            } else {
                html += renderFigure({ type: 'flow-chain', nodes: ['CANON', 'MAGIC', 'RUNTIME'] });
            }
            html += '</div>';

            html += '</div>';
        });
        html += '</div></div>';
        return html;
    }

    function bindSwitchers(root) {
        try {
            var nodes = (root || document).querySelectorAll('[data-switcher]');
            nodes.forEach(function (sw) {
                if (sw.__bound) return;
                sw.__bound = true;

                var buttons = sw.querySelectorAll('.switcher-tab');
                var panels = sw.querySelectorAll('.switcher-panel');
                var def = parseInt(sw.getAttribute('data-default') || '0', 10);
                if (!isFinite(def) || def < 0) def = 0;
                if (def >= buttons.length) def = 0;

                function setActive(idx) {
                    buttons.forEach(function (b, i) {
                        var on = i === idx;
                        b.classList.toggle('active', on);
                        b.setAttribute('aria-selected', on ? 'true' : 'false');
                    });
                    panels.forEach(function (p, i) {
                        var on = i === idx;
                        p.hidden = !on;
                        p.classList.toggle('active', on);
                    });
                }

                setActive(def);

                buttons.forEach(function (b) {
                    b.addEventListener('click', function () {
                        var idx = parseInt(b.getAttribute('data-tab') || '0', 10);
                        if (!isFinite(idx)) idx = 0;
                        setActive(idx);
                    });
                });
            });
        } catch (e) {}
    }

    // ── DEMO HERO (iPhone Mock) ─────────────────────────
    function renderDemoHero(el, hero) {
        var d = hero.demo;
        var variants = (d && d.products && d.products.length) ? d.products : [d];
        var activeIdx = parseInt((d && d.active != null) ? d.active : 0, 10);
        if (!isFinite(activeIdx) || activeIdx < 0 || activeIdx >= variants.length) activeIdx = 0;
        var demoId = 'demo-' + Math.floor(Math.random() * 1000000000);

        function renderPhone(cfg) {
            cfg = cfg || {};
            var msgs = cfg.messages || [];

            var html = '<div class="iphone"><div class="iphone-screen"><div class="app-preview">';
            html += '<div class="chat-header">' + (cfg.productIcon || '') + ' ' + (cfg.product || '') + '</div>';

            html += '<div class="chat-messages">';
            var msgIdx = 0;
            var typIdx = 0;
            msgs.forEach(function (m) {
                msgIdx++;
                if (m.role === 'user') {
                    html += '<div class="chat-msg chat-user msg-' + msgIdx + '">' + m.text + '</div>';
                    typIdx++;
                    html += '<div class="typing-indicator typing-' + typIdx + '"><span></span><span></span><span></span></div>';
                } else {
                    html += '<div class="chat-msg chat-bot msg-' + msgIdx + '">' + m.text + '</div>';
                    if (m.citation) {
                        msgIdx++;
                        html += '<div class="chat-msg chat-cite msg-' + msgIdx + '">\ud83d\udccb ' + m.citation + '</div>';
                    }
                }
            });
            html += '</div>';

            html += '<div class="chat-input-area"><div class="chat-input">';
            var inputIdx = 0;
            msgs.forEach(function (m) {
                if (m.role === 'user') {
                    inputIdx++;
                    html += '<div class="input-text-wrapper input-wrapper-' + inputIdx + '">';
                    html += '<span class="input-text">' + m.text + '</span><span class="input-cursor"></span></div>';
                }
            });
            html += '</div><div class="chat-send">\u279A</div></div>';

            html += '</div></div></div>';
            return html;
        }

        // Left column: text
        var html = '<div class="hero-split"><div class="hero-split-inner">';
        html += '<div class="hero-content">';
        if (hero.badge) html += '<div class="hero-badge">' + hero.badge + '</div>';
        html += '<h1>' + hero.title + '</h1>';
        if (hero.description) html += '<p>' + hero.description + '</p>';
        html += renderHeroCTA(hero.cta);

        // Optional demo tabs (if multiple variants are supplied)
        if (variants.length > 1) {
            html += '<div class="demo-tabs" data-demo="' + demoId + '" role="tablist" aria-label="Demo">';
            variants.forEach(function (v, i) {
                var on = i === activeIdx ? ' active' : '';
                var label = (v && v.product) ? v.product : ('Demo ' + (i + 1));
                var icon = (v && v.productIcon) ? (v.productIcon + ' ') : '';
                html += '<button type="button" class="demo-tab' + on + '" role="tab" aria-selected="' + (i === activeIdx ? 'true' : 'false') + '" data-demo-idx="' + i + '">' + icon + label + '</button>';
            });
            html += '</div>';
        }
        html += '</div>';

        // Right column: iPhone mock
        html += '<div class="device-container"><div class="device-glow"></div>';
        html += '<div id="' + demoId + '-device">' + renderPhone(variants[activeIdx]) + '</div>';
        html += '</div>';
        html += '</div></div>';
        el.innerHTML = html;

        // Bind demo tab switching (rerenders the phone mock to restart CSS animations).
        if (variants.length > 1) {
            try {
                var wrap = el.querySelector('[data-demo="' + demoId + '"]');
                var dev = document.getElementById(demoId + '-device');
                if (wrap && dev) {
                    wrap.querySelectorAll('.demo-tab').forEach(function (btn) {
                        btn.addEventListener('click', function () {
                            var idx = parseInt(btn.getAttribute('data-demo-idx') || '0', 10);
                            if (!isFinite(idx) || idx < 0 || idx >= variants.length) idx = 0;
                            // Button states
                            wrap.querySelectorAll('.demo-tab').forEach(function (b) {
                                var on = b === btn;
                                b.classList.toggle('active', on);
                                b.setAttribute('aria-selected', on ? 'true' : 'false');
                            });
                            // Rerender device
                            dev.innerHTML = renderPhone(variants[idx]);
                        });
                    });
                }
            } catch (e) {}
        }
    }

    // ── STATS ─────────────────────────────────────────────
    function renderStats(stats) {
        var el = document.getElementById('stats');
        if (!el || !stats || !stats.length) return;

        var html = '<div class="stats">';
        stats.forEach(function (s) {
            html += '<div class="stat"><div class="stat-value">' + s.value + '</div>';
            html += '<div class="stat-label">' + s.label + '</div></div>';
        });
        html += '</div>';
        el.innerHTML = html;
    }

    // ── METRIC CARD (E*Trade/Webull-style KPI) ─────────────
    function renderMetricCard(m) {
        if (!m) return '';
        var trendColor = m.trend === 'up' ? '#00ff88' : m.trend === 'down' ? '#ff4444' : 'var(--dim)';
        var arrow = m.trend === 'up' ? '&#9650;' : m.trend === 'down' ? '&#9660;' : '';
        var html = '<div class="metric-card">';
        html += '<div class="metric-label">' + (m.label || '') + '</div>';
        html += '<div class="metric-value">' + (m.value || '') + '</div>';
        if (m.change) {
            html += '<div class="metric-change" style="color:' + trendColor + '">' + arrow + ' ' + m.change + '</div>';
        }
        html += '</div>';
        return html;
    }

    // ── SECTIONS ──────────────────────────────────────────
    function renderSections(sections) {
        if (!sections || !sections.length) return;

        sections.forEach(function (sec) {
            var el = document.getElementById(sec.id);
            if (!el) return;

            var html = '';
            if (sec.wrapClass) html += '<div class="' + sec.wrapClass + '">';

            // Eyebrow
            if (sec.eyebrow) html += '<div class="section-eyebrow text-center">' + sec.eyebrow + '</div>';
            if (sec.title) html += '<h2 class="section-title text-center">' + sec.title + '</h2>';
            if (sec.description) html += '<p class="description">' + sec.description + '</p>';

            // Econ + wallet panels (public-safe JSON: e.g. ./econ.json, ./wallet.json)
            var econId = null;
            if (sec.econ) {
                econId = 'econ-' + sec.id;
                html += '<div id="' + econId + '" class="card" style="margin-top:22px;padding:18px;"></div>';
            }
            var walletId = null;
            if (sec.wallet) {
                walletId = 'wallet-' + sec.id;
                html += '<div id="' + walletId + '" class="card" style="margin-top:14px;padding:18px;"></div>';
            }

            // Cards grid
            if (sec.cards && sec.cards.length) {
                html += renderCards(sec);
            }

            // Switcher (interactive narrative)
            if (sec.switcher) {
                html += renderSwitcher(sec.switcher, sec.id);
            }

            // Products
            if (sec.products) {
                html += renderProducts(sec.products);
            }

            // Deals
            if (sec.deals) {
                html += renderDeals(sec.deals);
            }

            // About
            if (sec.about) {
                html += renderAbout(sec.about);
            }

            // Banner (governance banner)
            if (sec.banner) {
                html += renderBanner(sec.banner);
            }

            // Dashboard (financial layout: metrics + charts in responsive grid)
            if (sec.dashboard && sec.dashboard.length) {
                html += '<div class="dashboard">';
                sec.dashboard.forEach(function (widget) {
                    var span = widget.span === 2 ? ' dashboard-wide' : '';
                    html += '<div class="dashboard-widget' + span + '">';
                    if (widget.metric) {
                        html += renderMetricCard(widget.metric);
                    }
                    if (widget.figure) {
                        html += '<div class="dashboard-chart">' + renderFigure(widget.figure) + '</div>';
                    }
                    if (widget.table) {
                        html += renderSimpleTable(widget.table.headers, widget.table.rows);
                    }
                    html += '</div>';
                });
                html += '</div>';
            }

            // Table
            if (sec.table) {
                html += renderSimpleTable(sec.table.headers, sec.table.rows, { cellClasses: sec.table.cellClasses });
            }

            // Tiers
            if (sec.tiers && sec.tiers.length) {
                html += '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:20px;margin-top:32px;">';
                sec.tiers.forEach(function (t) {
                    var cls = t.featured ? 'tier featured' : 'tier';
                    html += '<div class="' + cls + '">';
                    html += '<div class="tier-name">' + t.name + '</div>';
                    html += '<div class="tier-price">' + t.price + '</div>';
                    html += '<div class="tier-price-sub">' + t.sub + '</div>';
                    html += '<ul class="tier-list">';
                    t.features.forEach(function (f) { html += '<li>' + f + '</li>'; });
                    html += '</ul>';
                    var ctaCls = t.featured ? 'tier-cta tier-cta-primary' : 'tier-cta tier-cta-secondary';
                    var onclick = t.ctaTalk ? ' onclick="TALK.open();return false"' : '';
                    var titleAttr = t.ctaTitle ? ' title="' + t.ctaTitle + '"' : '';
                    html += '<a href="' + (t.ctaHref || '#') + '" class="' + ctaCls + '"' + onclick + titleAttr + '>' + t.ctaLabel + '</a>';
                    html += '</div>';
                });
                html += '</div>';
                if (sec.axiom) html += '<div style="text-align:center;padding:32px 24px;font-size:15px;color:var(--fg-secondary);font-style:italic;"><strong style="color:var(--fg);font-style:normal;">' + sec.axiom + '</strong></div>';
            }

            // Feature block (vaas-style)
            if (sec.feature) {
                var f = sec.feature;
                html += '<div class="vaas"><div class="vaas-content">';
                if (f.eyebrow) html += '<div class="vaas-eyebrow">' + f.eyebrow + '</div>';
                if (f.title) html += '<div class="vaas-title">' + f.title + '</div>';
                if (f.text) html += '<div class="vaas-desc">' + f.text + '</div>';
                if (f.tags && f.tags.length) {
                    html += '<div class="vaas-tags">';
                    f.tags.forEach(function (t) { html += '<span class="vaas-tag">' + t + '</span>'; });
                    html += '</div>';
                }
                html += '</div>';
                if (f.figure) {
                    html += '<div class="vaas-graphic">' + renderFigure(f.figure) + '</div>';
                } else if (f.graphic) {
                    html += '<div class="vaas-graphic">' + f.graphic + '</div>';
                } else {
                    html += '<span class="vaas-mark">\u2229</span>';
                }
                html += '</div>';
            }

            // Galaxy (inline section — not hero)
            if (sec.galaxy) {
                var gId = 'galaxyContainer-' + sec.id;
                html += '<div id="' + gId + '" class="galaxy-container" style="height:' + (sec.galaxy.height || '70vh') + ';margin-top:32px;border-radius:16px;overflow:hidden;"></div>';
                // Defer init until DOM is written
                (function (containerId, opts) {
                    setTimeout(function () {
                        var c = document.getElementById(containerId);
                        if (c && typeof GALAXY !== 'undefined') GALAXY.init(c, opts);
                    }, 0);
                })(gId, sec.galaxy);
            }

            // Galaxy stats
            if (sec.galaxyStats && sec.galaxyStats.length) {
                html += '<div class="galaxy-stats">';
                sec.galaxyStats.forEach(function (s) {
                    html += '<div><div class="galaxy-val">' + s.value + '</div>';
                    html += '<div class="galaxy-lbl">' + s.label + '</div></div>';
                });
                html += '</div>';
            }

            // Section CTA (inline button or button group)
            if (sec.cta) {
                html += '<div class="cta-buttons" style="margin-top:32px;">';
                var secButtons = sec.cta.buttons || [sec.cta];
                secButtons.forEach(function(btn) { html += renderButton(btn) + ' '; });
                html += '</div>';
            }

            // Axiom quote
            if (sec.quote) {
                html += '<div style="text-align:center;padding:48px 24px;font-size:15px;color:var(--fg-secondary);font-style:italic;max-width:700px;margin:0 auto;">';
                html += '<strong style="color:var(--fg);font-style:normal;">' + sec.quote.bold + '</strong> ' + (sec.quote.rest || '');
                html += '</div>';
            }

            // Generated depth-2 structure (compiled from GOV tree).
            // Narrative is rendered by MAGIC frontend (this file), not emitted by the compiler.
            // Production UI: show child chips only; hide internal source paths.
            if (sec.generated && sec.generated.children && sec.generated.children.length) {
                html += '<div style="margin-top:20px;padding:18px;border:1px solid var(--border);border-radius:12px;background:var(--bg-soft);">';
                html += '<div style="font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:var(--fg-tertiary);margin-bottom:10px;">Governed Scopes</div>';
                html += '<div class="muted" style="font-size:12px;margin-bottom:12px;">' + fmtNum(sec.generated.children.length) + ' public child scope' + (sec.generated.children.length === 1 ? '' : 's') + '</div>';
                html += '<div style="display:flex;flex-wrap:wrap;gap:8px;">';
                sec.generated.children.forEach(function (c) {
                    html += '<span style="padding:6px 10px;border:1px solid rgba(var(--accent-rgb,59,130,246),0.28);border-radius:999px;font-size:11px;font-weight:600;color:var(--fg-secondary);background:rgba(var(--accent-rgb,59,130,246),0.08);">' + c.label + '</span>';
                });
                html += '</div>';
                html += '</div>';
            }

            if (sec.wrapClass) html += '</div>';
            el.innerHTML = html;
            bindSwitchers(el);

            if (sec.econ && econId) {
                renderEconPanel(econId, sec.econ);
            }
            if (sec.wallet && walletId) {
                renderWalletPanel(walletId, sec.wallet);
            }
        });
    }

    // ── CARDS ─────────────────────────────────────────────
    function renderCards(sec) {
        var cols = sec.columns || 'auto-fit, minmax(280px, 1fr)';
        var html = '<div style="display:grid;grid-template-columns:repeat(' + cols + ');gap:' + (sec.gap || '20px') + ';margin-top:32px;">';
        sec.cards.forEach(function (c) {
            html += '<div class="' + (c.class || 'card') + '">';

            // Status badge (top-right, e.g. LIVE)
            if (c.statusBadge) {
                html += '<div class="status-badge">' + c.statusBadge + '</div>';
            }

            // Icon with gradient
            if (c.icon) {
                if (c.iconGradient) {
                    html += '<div class="primitive-icon" style="background:linear-gradient(135deg,' + c.iconGradient[0] + ',' + c.iconGradient[1] + ');">' + c.icon + '</div>';
                } else {
                    html += '<div class="' + (c.iconClass || '') + '">' + c.icon + '</div>';
                }
            }

            if (c.eyebrow) html += '<div style="font-size:12px;color:var(--accent);font-weight:600;letter-spacing:0.1em;margin-bottom:6px;">' + c.eyebrow + '</div>';
            if (c.num) html += '<div style="font-family:var(--mono);font-size:11px;color:var(--accent);font-weight:700;margin-bottom:6px;">' + c.num + '</div>';
            if (c.title) {
                var tStyle = c.titleColor ? ' style="color:' + c.titleColor + ';margin-bottom:8px;"' : '';
                html += '<h3' + tStyle + '>' + c.title + '</h3>';
            }
            if (c.subtitle) html += '<div class="muted" style="font-size:13px;font-weight:600;margin-bottom:8px;">' + c.subtitle + '</div>';
            if (c.text) html += '<p style="font-size:13px;color:var(--fg-secondary);line-height:1.6;">' + c.text + '</p>';
            if (c.tags && c.tags.length) {
                html += '<div style="display:flex;gap:8px;margin-top:12px;flex-wrap:wrap;">';
                c.tags.forEach(function (t) {
                    html += '<span style="padding:4px 10px;background:rgba(var(--accent-rgb,59,130,246),0.08);border:1px solid rgba(var(--accent-rgb,59,130,246),0.2);border-radius:6px;font-size:11px;font-weight:600;color:var(--accent);">' + t + '</span>';
                });
                html += '</div>';
            }
            if (c.flow && c.flow.length) {
                html += '<div class="flow">';
                c.flow.forEach(function (node, i) {
                    if (i > 0) html += '<div class="flow-arrow">&rarr;</div>';
                    var accentCls = (i === Math.floor(c.flow.length / 2)) ? ' accent' : '';
                    html += '<div class="flow-node' + accentCls + '">' + node + '</div>';
                });
                html += '</div>';
            }

            // Badge — object or string
            if (c.badge) {
                if (typeof c.badge === 'object') {
                    html += '<div style="margin-top:16px;"><span class="badge" style="border-color:' + c.badge.color + ';color:' + c.badge.color + ';">' + c.badge.label + '</span></div>';
                } else {
                    html += '<span style="display:inline-block;margin-top:12px;padding:4px 12px;background:rgba(var(--accent-rgb,59,130,246),0.12);color:var(--accent);border-radius:6px;font-size:11px;font-weight:700;">' + c.badge + '</span>';
                }
            }

            // Card-level CTA
            if (c.cta) {
                var cardBtn = Object.assign({}, c.cta);
                cardBtn.class = (cardBtn.class || 'btn') + ' btn-sm';
                html += '<div style="margin-top:16px;">' + renderButton(cardBtn) + '</div>';
            }

            html += '</div>';
        });
        html += '</div>';
        return html;
    }

    // ── PRODUCTS ──────────────────────────────────────────
    function renderProducts(products) {
        var html = '<div class="apps-grid">';
        products.forEach(function (p) {
            html += '<a href="' + (p.href || '#') + '" class="app-card">';
            html += '<div class="app-icon ' + (p.iconClass || '') + '">' + p.icon + '</div>';
            html += '<div class="app-name">' + p.name + '</div>';
            html += '<div class="app-desc">' + p.description + '</div>';
            var badgeBg = p.statusColor ? 'rgba(' + hexToRgb(p.statusColor) + ',0.15)' : 'rgba(96,165,250,0.15)';
            var badgeColor = p.statusColor || 'var(--accent)';
            html += '<span class="app-badge" style="background:' + badgeBg + ';color:' + badgeColor + ';">' + p.status + '</span>';
            html += '</a>';
        });
        html += '</div>';
        return html;
    }

    // ── DEALS ─────────────────────────────────────────────
    function renderDeals(deals) {
        var html = '<div class="apps-grid">';
        deals.forEach(function (d) {
            var vaultStyle = d.vault ? 'border-color:rgba(212,175,55,0.2);opacity:0.65;' : '';
            var onclick = d.talk ? ' onclick="TALK.open();return false"' : '';
            html += '<a href="' + (d.href || '#') + '" class="app-card" style="' + vaultStyle + '"' + onclick + '>';

            // Icon
            if (d.iconGradient) {
                html += '<div class="app-icon" style="background:linear-gradient(135deg,' + d.iconGradient[0] + ',' + d.iconGradient[1] + ');">' + d.icon + '</div>';
            } else {
                html += '<div class="app-icon ' + (d.iconClass || '') + '">' + d.icon + '</div>';
            }

            html += '<div class="app-name">' + d.name + '</div>';
            html += '<div class="app-desc">' + d.description + '</div>';

            var badgeBg = d.badgeColor ? 'rgba(' + hexToRgb(d.badgeColor) + ',0.15)' : d.vault ? 'rgba(212,175,55,0.15)' : 'rgba(96,165,250,0.15)';
            var badgeColor = d.badgeColor || (d.vault ? 'var(--gold)' : 'var(--accent)');
            var lockIcon = d.vault ? '\ud83d\udd12 ' : '';
            html += '<span class="app-badge" style="background:' + badgeBg + ';color:' + badgeColor + ';">' + lockIcon + d.badge + '</span>';
            html += '</a>';
        });
        html += '</div>';
        return html;
    }

    // ── ABOUT ─────────────────────────────────────────────
    function renderAbout(about) {
        var html = '<div class="about-section">';

        // Identity block
        html += '<div class="about-identity">';
        html += '<div class="about-avatar">' + about.initials + '</div>';
        html += '<h3 class="about-name">' + about.name + '</h3>';
        html += '<p class="about-title">' + about.title + '</p>';
        if (about.location) html += '<p class="about-location">' + about.location + (about.institution ? ' · ' + about.institution : '') + '</p>';
        if (about.tagline) html += '<p class="about-tagline">' + about.tagline + '</p>';

        // Links
        if (about.links && about.links.length) {
            html += '<div class="about-links">';
            about.links.forEach(function (l) {
                html += '<a href="' + l.href + '" target="_blank" rel="noopener" class="about-link">' + l.label + ' →</a>';
            });
            html += '</div>';
        }
        html += '</div>';

        // Tags
        if (about.tags && about.tags.length) {
            html += '<div class="about-tags">';
            about.tags.forEach(function (t) {
                html += '<span class="about-tag">' + t + '</span>';
            });
            html += '</div>';
        }

        // Key Publications
        if (about.publications && about.publications.length) {
            html += '<div class="about-pubs">';
            html += '<h4 class="about-section-title">Key Publications</h4>';
            about.publications.forEach(function (p) {
                html += '<div class="about-pub">';
                html += '<span class="about-pub-authors">' + p.authors + '</span> ';
                html += '<em>' + p.title + '</em>. ';
                html += '<span class="about-pub-journal">' + p.journal + '</span>';
                if (p.year) html += ' (' + p.year + ')';
                html += '</div>';
            });
            html += '</div>';
        }

        // Career Lineage
        if (about.lineage && about.lineage.length) {
            html += '<div class="about-lineage">';
            html += '<h4 class="about-section-title">Career Lineage</h4>';
            html += '<div class="lineage-track">';
            about.lineage.forEach(function (l, i) {
                html += '<div class="lineage-node">';
                html += '<div class="lineage-year">' + l.year + '</div>';
                html += '<div class="lineage-dot"></div>';
                html += '<div class="lineage-milestone">' + l.milestone + '</div>';
                html += '<div class="lineage-work">' + l.work + '</div>';
                html += '</div>';
            });
            html += '</div>';
            html += '</div>';
        }

        // Orgs
        if (about.orgs && about.orgs.length) {
            html += '<div class="about-orgs">';
            about.orgs.forEach(function (o) {
                html += '<span class="about-org">' + o.name + ' <span class="about-org-year">' + o.year + '</span></span>';
            });
            html += '</div>';
        }

        html += '</div>';
        return html;
    }

    // ── BANNER ────────────────────────────────────────────
    function renderBanner(banner) {
        var html = '<div class="governance-banner" style="margin-top:64px;">';
        html += '<div style="flex:1;">';
        if (banner.eyebrow) html += '<div class="section-eyebrow">' + banner.eyebrow + '</div>';
        if (banner.title) html += '<h3 style="font-size:28px;margin-bottom:16px;line-height:1.3;">' + banner.title + '</h3>';
        if (banner.text) html += '<p class="muted" style="line-height:1.7;">' + banner.text + '</p>';
        if (banner.badges && banner.badges.length) {
            html += '<div style="display:flex;gap:12px;margin-top:20px;flex-wrap:wrap;">';
            banner.badges.forEach(function (b) {
                html += '<span class="badge" style="border-color:' + b.color + ';color:' + b.color + ';">' + b.label + '</span>';
            });
            html += '</div>';
        }
        html += '</div>';
        html += '<span style="font-size:80px;opacity:0.6;color:var(--accent);">\u2229</span>';
        html += '</div>';
        return html;
    }

    // ── CTA ───────────────────────────────────────────────
    function renderCTA(cta) {
        var el = document.getElementById('cta');
        if (!el || !cta) return;

        var html = '';
        if (cta.class) {
            html += '<div class="' + cta.class + '">';
            html += '<h3>' + cta.title + '</h3>';
            html += '<p>' + cta.description + '</p>';
            html += '<div class="cta-buttons">';
        } else {
            html += '<div class="cta-title">' + cta.title + '</div>';
            html += '<div class="cta-desc">' + cta.description + '</div>';
            html += '<div class="cta-buttons">';
        }
        (cta.buttons || []).forEach(function (btn, i) {
            html += renderButton(btn, i === 0 ? 'btn' : 'btn btn-secondary');
        });
        html += '</div>';
        if (cta.class) html += '</div>';
        el.innerHTML = html;
    }

    // ── FOOTER ────────────────────────────────────────────
    function renderFooter(fleet, footerData, tagline) {
        var el = document.getElementById('footer');
        if (!el) return;

        var html = '';
        // Custom footer links from CONTENT.json
        if (footerData && footerData.links) {
            html += '<div style="display:flex;gap:24px;justify-content:center;margin-bottom:16px;flex-wrap:wrap;">';
            footerData.links.forEach(function (l) {
                html += '<a href="' + l.href + '">' + l.label + '</a>';
            });
            html += '</div>';
            html += '<p>' + (footerData.tagline || tagline || 'CANONIC') + '</p>';
        } else if (fleet) {
            // Default: fleet links
            fleet.sites.forEach(function (s, i) {
                if (i > 0) html += ' \u00b7 ';
                html += '<a href="' + s.url + '">' + s.label + '</a>';
            });
            html += ' \u00b7 <a href="#" onclick="TALK.open();return false">TALK</a>';
            html += '<br><br>' + (tagline || 'CANONIC');
        }
        el.innerHTML = html;
    }

    // ── THEME TOGGLE ─────────────────────────────────────
    function initTheme() {
        // Make toggleTheme global
        if (typeof window.toggleTheme === 'undefined') {
            window.getTheme = function () {
                return localStorage.getItem('canonic-theme') || 'dark';
            };
            window.applyTheme = function (t) {
                if (t === 'auto') {
                    document.documentElement.removeAttribute('data-theme');
                } else {
                    document.documentElement.setAttribute('data-theme', t);
                }
                var btn = document.getElementById('theme-btn');
                if (btn) btn.textContent = t === 'light' ? '\u2600' : t === 'dark' ? '\u263E' : '\u25D0';
            };
            window.toggleTheme = function () {
                var order = ['auto', 'light', 'dark'];
                var cur = window.getTheme();
                var next = order[(order.indexOf(cur) + 1) % 3];
                localStorage.setItem('canonic-theme', next);
                window.applyTheme(next);
            };
            window.applyTheme(window.getTheme());
        }
    }

    // ── TABS ──────────────────────────────────────────────
    function renderTabs(tabs) {
        if (!tabs || !tabs.length) return;
        var container = document.querySelector('.container');
        if (!container) return;

        var bar = document.createElement('div');
        bar.className = 'page-tabs';
        bar.setAttribute('role', 'tablist');
        bar.setAttribute('aria-label', 'Page');

        var allGoverned = {};
        tabs.forEach(function (tab) {
            (tab.sections || []).forEach(function (sid) {
                allGoverned[sid] = tab.label;
            });
        });

        var defaultIdx = 0;
        tabs.forEach(function (tab, i) {
            if (tab.default) defaultIdx = i;
        });

        tabs.forEach(function (tab, i) {
            var btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'page-tab' + (i === defaultIdx ? ' active' : '');
            btn.setAttribute('role', 'tab');
            btn.setAttribute('aria-selected', i === defaultIdx ? 'true' : 'false');
            btn.setAttribute('data-tab-idx', i);
            btn.textContent = tab.label;
            bar.appendChild(btn);
        });

        container.parentNode.insertBefore(bar, container);

        function showTab(idx) {
            bar.querySelectorAll('.page-tab').forEach(function (b, i) {
                var on = i === idx;
                b.classList.toggle('active', on);
                b.setAttribute('aria-selected', on ? 'true' : 'false');
            });
            var activeIds = {};
            (tabs[idx].sections || []).forEach(function (sid) {
                activeIds[sid] = true;
            });
            container.querySelectorAll('section[id]').forEach(function (sec) {
                if (allGoverned[sec.id]) {
                    sec.style.display = activeIds[sec.id] ? '' : 'none';
                }
            });
        }

        bar.querySelectorAll('.page-tab').forEach(function (btn) {
            btn.addEventListener('click', function () {
                var idx = parseInt(btn.getAttribute('data-tab-idx') || '0', 10);
                if (!isFinite(idx) || idx < 0 || idx >= tabs.length) idx = 0;
                showTab(idx);
                container.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        });

        showTab(defaultIdx);
    }

    // ── INIT ──────────────────────────────────────────────
    async function init() {
        var results;
        try {
            results = await Promise.all([
                loadGovernedJSON('./CANON.json'),
                loadGovernedJSON('./CONTENT.json')
            ]);
        } catch (e) {
            fatal((e && e.message) ? e.message : e);
        }
        canon = results[0];
        content = results[1];

        // State machine: required governed fields.
        if (!canon || !canon.scope) fatal('CANON.json missing scope');
        requireNav(content);

        // Apply accent from governance
        applyAccent(canon.accent);

        // Set scope attribute
        if (canon.scope) {
            document.documentElement.setAttribute('data-scope', canon.scope.toLowerCase());
        }

        // Theme toggle
        initTheme();

        // Render from CONTENT.json
        if (content.fleet) renderEcoBar(content.fleet, canon.scope);
        renderNav(canon.scope || canon.name, canon.navIcon, content.nav);
        bindHeaderOffsetSync();
        bindEcoAutoHide();
        // Compute offsets after nav is in DOM; suppress transition during
        // initial sync so measured eco-h/nav-h don't cause a visible "fall".
        var _nav = document.getElementById('nav');
        if (_nav) _nav.style.transition = 'none';
        syncHeaderOffsets();
        if (typeof requestAnimationFrame !== 'undefined') {
            requestAnimationFrame(function () {
                syncHeaderOffsets();
                if (_nav) { void _nav.offsetHeight; _nav.style.transition = ''; }
            });
        } else {
            setTimeout(function () {
                syncHeaderOffsets();
                if (_nav) { _nav.style.transition = ''; }
            }, 0);
        }
        if (content.hero) renderHero(content.hero);
        if (content.stats) renderStats(content.stats);
        if (content.sections) renderSections(content.sections);
        if (content.tabs) renderTabs(content.tabs);
        applyAnchorOffsets();
        if (content.cta) renderCTA(content.cta);
        if (content.fleet) renderFooter(content.fleet, content.footer, content.footerTagline);
        if (window.location.hash) {
            var t = document.querySelector(window.location.hash);
            if (t) setTimeout(function () { syncHeaderOffsets(); t.scrollIntoView({ block: 'start' }); }, 0);
        }
    }

    return { init: init, canon: function () { return canon; }, content: function () { return content; } };
})();

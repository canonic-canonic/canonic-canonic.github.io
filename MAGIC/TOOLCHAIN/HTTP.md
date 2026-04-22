---
sitemap: false
---

# HTTP

inherits: canonic-canonic/MAGIC/TOOLCHAIN
compile: HTTP.json
compiler: http

---

## Axiom

**The HTTP contract governs fleet identity, navigation, and site mapping. One contract. All surfaces.**

---

## Version

2026-03-09

## Nav

| Feature | Enabled |
|---------|---------|
| fleet_tabs | true |
| breadcrumbs | true |

## Fleet

| Site | Domain |
|------|--------|
| canonic-org | canonic.org |
| hadleylab-org | hadleylab.org |
| founderof-ai | founderof.ai |
| RunnerMVP/Runner-MVP | gorunner.pro |

## Zones

| Zone | Provider | Account |
|------|----------|---------|
| canonic.org | cloudflare | 73a7cdd5a8be98f45816da1c87b7518a |
| hadleylab.org | cloudflare | 73a7cdd5a8be98f45816da1c87b7518a |
| mammo.chat | cloudflare | 73a7cdd5a8be98f45816da1c87b7518a |
| mammochat.com | cloudflare | 73a7cdd5a8be98f45816da1c87b7518a |
| mammochat.ai | cloudflare | 73a7cdd5a8be98f45816da1c87b7518a |
| carib.chat | cloudflare | 73a7cdd5a8be98f45816da1c87b7518a |
| caribchat.org | cloudflare | 73a7cdd5a8be98f45816da1c87b7518a |
| caribchat.ai | cloudflare | 73a7cdd5a8be98f45816da1c87b7518a |
| atulisms.com | cloudflare | 73a7cdd5a8be98f45816da1c87b7518a |
| darioisms.com | cloudflare | 73a7cdd5a8be98f45816da1c87b7518a |
| gorunner.pro | cloudflare | 73a7cdd5a8be98f45816da1c87b7518a |
| founderof.ai | cloudflare | 73a7cdd5a8be98f45816da1c87b7518a |

## Domains

TALK surface model: `{scope}.ai` = canonical sink (community learning + SEO primary, served by `apps-canonic` CF Pages custom domain → Next.js middleware → `/talk/{scope}/community`), `app.{scope}.ai` = chat instance (noindex, canonical → `{scope}.ai`, served by `apps-canonic` CF Pages custom domain → `/talk/{scope}`). Community surfaces render through the unified `CommunityView` Next.js component (SERVICES/TALK/CANON.md § Community Learning Surface Contract). No proxy Workers — Jekyll origin is extinct.

| Domain | Target | Serve | Surface |
|--------|--------|-------|---------|
| app.mammochat.ai | apps-canonic (Pages) | instance | instance (noindex) |
| app.caribchat.ai | apps-canonic (Pages) | instance | instance (noindex) |
| app.omicschat.ai | apps-canonic (Pages) | instance | instance (noindex) |
| app.onconex.ai | apps-canonic (Pages) | instance | instance (noindex) |
| omicschat.hadleylab.org | https://app.omicschat.ai/ | subdomain | redirect to product |
| oncochat.hadleylab.org | https://onconex.ai/ | subdomain | redirect to product |
| medchat.hadleylab.org | https://medchat.ai/ | subdomain | redirect to product |
| realty.hadleylab.org | https://gorunner.pro/ | subdomain | redirect to product |
| vitae.hadleylab.org | https://founderof.ai/idrdex/ | subdomain | redirect to credential surface |
| health.hadleylab.org | hadleylab.org | health | proof fleet dashboard |
| health.canonic.org | canonic.org | health | federation dashboard |
| musicchat.hadleylab.org | musicchat-api | api | MusicChat API endpoint (workers/musicchat-api; routes `/api/*`) |
| founderof.ai | founderof.ai | pages | founder landing |
| idrdex.founderof.ai | founderof.ai/dexter/ | subdomain | founder profile |
| marisa.founderof.ai | founderof.ai/marisa/ | subdomain | founder profile |
| nicholas.founderof.ai | founderof.ai/nicholas/ | subdomain | founder profile |
| anil.founderof.ai | founderof.ai/anil/ | subdomain | founder profile |

### Retired: Proxy Scope Resolution

The Jekyll-origin proxy Worker model (9 proxy Workers targeting `hadleylab-org` at `/TALKS/{SCOPE}/COMMUNITY/`, `/BOOKS/{SCOPE}/`, etc.) was retired 2026-04-18. All `.ai`, `.chat`, `.com`, `.org` domains that previously required a proxy Worker are now:

- Served directly by `apps-canonic` CF Pages custom domain → Next.js `middleware.ts` hostname rewrite (for active `.ai` roots: `mammochat.ai`, `caribchat.ai`, `omicschat.ai`, `onconex.ai`, `app.*.ai`)
- Or fully decommissioned (legacy aliases: `mammo.chat`, `mammochat.com`, `carib.chat`, `caribchat.org`, `atulisms.com`, `darioisms.com` — DNS zones remain but no worker emitted; they return 403)

## Fleets

| ID | Label | Tagline |
|----|-------|---------|
| canonic | The Machine | Triad · Introspection · Inheritance |
| hadleylab | The Proof | Products · Library · Team |
| runner | The Marketplace | Post · Track · Earn |

## Design Language

| Lane | Children |
|------|----------|
| FOUNDATION | LANGUAGE, INDUSTRIES, PROGRAMMING |
| INDUSTRIES | VERTICALS, REGULATORY, HORIZONTAL, META |
| MAGIC | COMPLIANCE, GALAXY, SURFACE |
| HADLEYLAB | INSTANCES |

## Depth Sources

| Lane | Key | Source |
|------|-----|--------|
| FOUNDATION | language | canonic-canonic/FOUNDATION |
| FOUNDATION | industries | canonic-canonic/INDUSTRIES |
| FOUNDATION | programming | canonic-canonic/FOUNDATION/PROGRAMMING |
| INDUSTRIES | verticals | canonic-canonic/INDUSTRIES/VERTICALS |
| INDUSTRIES | regulatory | canonic-canonic/INDUSTRIES/REGULATORY |
| INDUSTRIES | horizontal | canonic-canonic/INDUSTRIES/HORIZONTAL |
| INDUSTRIES | meta | canonic-canonic/INDUSTRIES/META |
| MAGIC | compliance | canonic-canonic/MAGIC/COMPLIANCE |
| MAGIC | galaxy | canonic-canonic/MAGIC/GALAXY |
| MAGIC | surface | canonic-canonic/MAGIC/SURFACE |
| HADLEYLAB | instances | hadleylab-canonic |

## API

| Key | Value |
|-----|-------|
| port | 8255 |
| host | 0.0.0.0 |
| base | https://api.canonic.org |

## CORS Origins

| Origin |
|--------|
| https://canonic.org |
| https://www.canonic.org |
| https://hadleylab.org |
| https://www.hadleylab.org |
| https://canonic-canonic.github.io |
| https://hadleylab-canonic.github.io |
| https://hadleylab-dexter.github.io |
| https://api.canonic.org |
| https://mammo.chat |
| https://www.mammo.chat |
| https://mammochat.com |
| https://www.mammochat.com |
| https://mammochat.ai |
| https://www.mammochat.ai |
| https://carib.chat |
| https://www.carib.chat |
| https://caribchat.org |
| https://www.caribchat.org |
| https://caribchat.ai |
| https://www.caribchat.ai |
| https://atulisms.com |
| https://www.atulisms.com |
| https://darioisms.com |
| https://www.darioisms.com |
| https://gorunner.pro |
| https://www.gorunner.pro |
| https://founderof.ai |
| https://www.founderof.ai |

## OAuth

| Key | Value |
|-----|-------|
| provider | github |
| token_url | https://github.com/login/oauth/access_token |
| user_url | https://api.github.com/user |
| emails_url | https://api.github.com/user/emails |
| redirect_uri_template | {base}/api/v1/auth/github/callback |

## Galaxy

| Key | Value |
|-----|-------|
| gov_depth | 2 |
| auth_kv_key | galaxy:auth |

## Brand

| Key | Value |
|-----|-------|
| mark | ∩ |
| label | CANONIC |
| url | / |

## Service Frontends

### hadleylab.org

| Label | Path | GOV |
|-------|------|-----|
| VITAE | VITAE | hadleylab-canonic/VITAE |
| TALKS | TALKS | hadleylab-canonic/TALKS |
| BLOGS | BLOGS | hadleylab-canonic/BLOGS |
| PAPERS | PAPERS | hadleylab-canonic/PAPERS |
| BOOKS | BOOKS | hadleylab-canonic/BOOKS |
| DECKS | DECKS | hadleylab-canonic/DECKS |
| DEALS | DEALS | hadleylab-canonic/DEALS |
| GRANTS | GRANTS | hadleylab-canonic/GRANTS |
| CHARTER | CHARTER | hadleylab-canonic/CHARTER |
| SERVICES | SERVICES | hadleylab-canonic/SERVICES |
| TIMELINE | timeline | hadleylab-canonic/SERVICES/TIMELINE |
| USERS | USERS | hadleylab-canonic/USERS |

## Repos

| Site | Repo |
|------|------|
| canonic.org | https://github.com/canonic-canonic/canonic-canonic.git |
| hadleylab.org | https://github.com/hadleylab-canonic/hadleylab-canonic.git |
| gorunner.pro | https://github.com/RunnerMVP/Runner-MVP.git |
| DESIGN | https://github.com/canonic-canonic/DESIGN.git |

## Sites

| Site | Domain | Repo Owner | Scope | Label | Tagline | Accent | Fleet | Nav | Description | Image |
|------|--------|------------|-------|-------|---------|--------|-------|-----|-------------|-------|
| canonic.org | | canonic-canonic | CANONIC | CANONIC | Governance Intelligence | #00ff88 | canonic | false | Distribute Work. Govern Value. | /assets/og.png |
| FOUNDATION | canonic.org/FOUNDATION | canonic-canonic | FOUNDATION | Foundation | Standards & Certification | #7c3aed | canonic | | | |
| INDUSTRIES | canonic.org/INDUSTRIES | canonic-canonic | INDUSTRIES | Industries | 21 Governed Domains | #bf5af2 | canonic | | | |
| MAGIC | canonic.org/MAGIC | canonic-canonic | MAGIC | MAGIC | INTEL · CHAT · COIN | #00ff88 | canonic | | | |
| hadleylab.org | | hadleylab-canonic | HADLEYLAB | Hadley Lab | From Bits to Bedside | #60a5fa | hadleylab | | From Bits to Bedside. | /assets/og.png |

## SEO

Governed by `hadleylab-canonic/SERVICES/SEO/SEO.md`. All features wired to the domain fleet.

| Feature | Value |
|---------|-------|
| robots.txt | enabled |
| sitemap.xml | enabled (jekyll-sitemap) |
| canonical | enabled (`<link rel="canonical">` per page, lowercase, custom domain) |
| structured_data | enabled (JSON-LD per page type via SEO.html include) |
| og:image | /assets/og.png (per fleet site, 1200×630 PNG) |
| og:site_name | enabled (from site.title) |
| og:locale | en_US |
| search_console | PENDING |
| ga4_id | PENDING |
| meta_pixel_id | PENDING |

### Canonical Tags

Every page emits `<link rel="canonical">` via DESIGN `HEAD.html`. Uses `site.url` (custom domain) + `page.url` lowercased. Proxy domains (mammochat.com, mammo.chat) get canonical rewritten by Cloudflare Worker to use the proxy domain.

| Domain | Canonical Base |
|--------|---------------|
| hadleylab.org | `https://hadleylab.org` |
| canonic.org | `https://canonic.org` |
| mammochat.com | `https://mammochat.com` (Worker rewrite) |
| mammochat.ai | `https://mammochat.ai` (Worker rewrite) |
| mammo.chat | `https://mammo.chat` (Worker rewrite) |
| carib.chat | `https://carib.chat` (Worker rewrite) |
| caribchat.org | `https://caribchat.org` (Worker rewrite) |
| caribchat.ai | `https://caribchat.ai` (Worker rewrite) |
| atulisms.com | `https://atulisms.com` (Worker rewrite) |
| darioisms.com | `https://darioisms.com` (Worker rewrite) |
| gorunner.pro | `https://gorunner.pro` (Worker rewrite) |
| founderof.ai | `https://founderof.ai` (Worker rewrite) |

### og:image

Fleet-level Open Graph image for social link previews (LinkedIn, Twitter, Slack). Stored at `/assets/og.png` per fleet site. Generated by `build-surfaces` from site metadata (label, tagline, accent). DESIGN theme `OG.html` resolves `page.image | default: site.image` — `_config.yml` sets `site.image`.

| Step | Action |
|------|--------|
| build-surfaces | Generate `assets/og.png` per fleet site (1200×630, branded) |
| build-surfaces | Emit `image: "/assets/og.png"` in `_config.yml` |
| OG.html | Resolves `site.image` → `<meta property="og:image">` |

### robots.txt

Generated per fleet site repo (top-level `robots.txt` with Jekyll front matter). Uses `site.url` for sitemap reference.

```
User-agent: *
Allow: /
Disallow: /assets/
Disallow: /*.json$
Sitemap: {% raw %}{{ site.url }}{% endraw %}/sitemap.xml
```

### sitemap.xml

Generated by `jekyll-sitemap` plugin. Added to plugins list in `_config.yml` (via build-surfaces). URLs emitted by sitemap use `site.url` (custom domain). Filesystem UPPERCASE paths emitted; Cloudflare case normalization (## Routing) handles redirect to canonical lowercase.

### Structured Data (JSON-LD)

Per-page Schema.org structured data emitted via DESIGN `SEO.html` include. Page type mapped from frontmatter:

| Page Type | Schema.org Type |
|-----------|----------------|
| Service (TALKS/*) | SoftwareApplication |
| Paper | ScholarlyArticle |
| Blog post | BlogPosting |
| Organization | Organization |

### Build

| Step | Action |
|------|--------|
| build-surfaces | Add `jekyll-sitemap` to plugins array in generated _config.yml |
| build-surfaces | Generate robots.txt in each fleet site repo |
| DESIGN HEAD.html | Emit `<link rel="canonical">` per page |
| DESIGN SEO.html | Emit JSON-LD structured data per page |
| DESIGN OG.html | Emit og:site_name, og:locale, article:published_time |

## Analytics

### Credential Registry

All tracking IDs are governed here. `build-surfaces` reads this table and emits IDs to `_config.yml`. DESIGN `TRACKING.html` conditionally loads scripts when IDs are present.

| Provider | Config Key | hadleylab.org | canonic.org | mammochat.com | mammochat.ai | carib.chat | caribchat.org | caribchat.ai | atulisms.com | darioisms.com | gorunner.pro | Notes |
|----------|-----------|---------------|-------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|--------------|-------|
| GA4 | `ga4_id` | `G-0X3GCTH7TZ` | `G-FS0FDCM8EB` | `G-270WW3R7JM` | PENDING | PENDING | PENDING | PENDING | PENDING | PENDING | `G-0X3GCTH7TZ` | Google Analytics 4 — provisioned 2026-03-01 |
| Meta Pixel | `meta_pixel_id` | `237958571262318` | `237958571262318` | `237958571262318` | PENDING | PENDING | PENDING | PENDING | PENDING | PENDING | `237958571262318` | Meta Pixel — reused from CovidImaging, provisioned 2026-03-01 |
| LinkedIn Insight | `linkedin_partner_id` | `520335172` | `520335172` | `520335172` | PENDING | PENDING | PENDING | PENDING | PENDING | PENDING | `520335172` | LinkedIn — ad account 520335172, provisioned 2026-03-01 |
| Twitter/X Pixel | `twitter_pixel_id` | `18ce53yfp0n` | `18ce53yfp0n` | `18ce53yfp0n` | PENDING | PENDING | PENDING | PENDING | PENDING | PENDING | `18ce53yfp0n` | X Ads — account 18ce53yfp0n, provisioned 2026-03-01 |
| Google Ads | `google_ads_id` | `AW-2784372644` | `AW-2784372644` | `AW-2784372644` | PENDING | PENDING | PENDING | PENDING | PENDING | PENDING | `AW-2784372644` | Google Ads — account 278-437-2644, provisioned 2026-03-01 |
| Reddit Pixel | `reddit_pixel_id` | `a2_ilt7lbzhyelg` | `a2_ilt7lbzhyelg` | `a2_ilt7lbzhyelg` | PENDING | PENDING | PENDING | PENDING | PENDING | PENDING | `a2_ilt7lbzhyelg` | Reddit Ads — account ilt7lbzhyelg, provisioned 2026-03-02 |
| Search Console | `search_console_verified` | DONE | DONE | DONE | PENDING | PENDING | PENDING | PENDING | PENDING | PENDING | DONE | DNS TXT verified 2026-03-01 via Cloudflare + Site Verification API |

### Implementation

Tracking scripts injected via DESIGN theme `TRACKING.html` (shared across all fleet sites). IDs stored in `_config.yml` per site (generated by build-surfaces from this contract).

```yaml
# _config.yml (generated) — only present when IDs are provisioned
ga4_id: "G-0X3GCTH7TZ"  # hadleylab.org — or G-FS0FDCM8EB for canonic.org, G-270WW3R7JM for mammochat.com
meta_pixel_id: "XXXXXXXXXX"
linkedin_partner_id: "XXXXXXX"
twitter_pixel_id: "XXXXXXXXX"
reddit_pixel_id: "XXXXXXXXXX"
google_ads_id: "AW-XXXXXXXXX"
```

`TRACKING.html` conditionally loads each provider's script only when the corresponding `site.*_id` is present. No ID = no script = no tracking. CSP in `HEAD.html` allows all provider domains.

### Provision Checklist

| Step | Status |
|------|--------|
| Create GA4 property for hadleylab.org | DONE — G-0X3GCTH7TZ (property 526473996) |
| Create GA4 property for canonic.org | DONE — G-FS0FDCM8EB (property 526422326) |
| Create Meta Pixel for hadleylab.org | DONE — pixel 237958571262318 (reused from CovidImaging) |
| Create Meta Pixel for canonic.org | DONE — pixel 237958571262318 (shared) |
| Create LinkedIn Insight Tag for hadleylab.org | DONE — partner_id 520335172 |
| Create LinkedIn Insight Tag for canonic.org | DONE — partner_id 520335172 (shared account) |
| Create Twitter/X Pixel for hadleylab.org | DONE — pixel 18ce53yfp0n |
| Create Twitter/X Pixel for canonic.org | DONE — pixel 18ce53yfp0n (shared account) |
| Create Google Ads conversion tag for hadleylab.org | DONE — AW-2784372644 |
| Create Google Ads conversion tag for canonic.org | DONE — AW-2784372644 (shared account) |
| Verify hadleylab.org in Google Search Console (DNS TXT) | DONE — verified 2026-03-01 |
| Verify canonic.org in Google Search Console (DNS TXT) | DONE — verified 2026-03-01 |
| Verify mammochat.com in Google Search Console (DNS TXT) | DONE — pre-existing TXT record |
| Add GA4 IDs to Credential Registry | DONE — 2026-03-01 |
| Verify CSP allows all provider domains | DONE |
| Enable GA4 enhanced measurement (all events) | DONE — scrolls, clicks, forms, downloads, video |
| Create GA4 key events (conversions) | DONE — page_view, scroll, click, form_start, form_submit, file_download |
| Link GA4 → Google Ads (auto-import conversions) | DONE — hadleylab + canonic linked to 2784372644 |
| Set GA4 data retention to 14 months | DONE |
| Verify domains in Meta Business (DNS TXT) | DONE — all 3 domains verified 2026-03-01 |
| Create Reddit Ads account at ads.reddit.com | DONE — account ilt7lbzhyelg (CANONIC FOUNDATION), provisioned 2026-03-02 |
| Create Reddit Pixel for hadleylab.org | DONE — pixel a2_ilt7lbzhyelg (shared account) |
| Create Reddit Pixel for canonic.org | DONE — pixel a2_ilt7lbzhyelg (shared account) |
| Add Reddit Pixel IDs to Credential Registry | DONE — 2026-03-02 |
| Add gorunner.pro zone to Cloudflare | DONE — zone 3392bfe624d26d4788a7b84fca04bf0d, provisioned 2026-03-09 |
| Create DNS records for gorunner.pro (Worker Custom Domains) | DONE — auto-provisioned via build-domains 2026-03-09 |
| Deploy gorunner-pro Cloudflare Worker | DONE — wrangler deploy 2026-03-09 |
| Create GA4 property for gorunner.pro | DONE — shared hadleylab property G-0X3GCTH7TZ, 2026-03-09 |
| Verify gorunner.pro in Google Search Console (DNS TXT) | DONE — DNS TXT verified 2026-03-09 |
| Verify gorunner.pro in Meta Business (DNS TXT) | SKIPPED — not needed for launch |

## Routing

| Rule | Value |
|------|-------|
| case_normalization | enabled |
| canonical_case | lowercase |
| redirect_code | 301 |
| scope | all fleet zones |

### Case Normalization

Directory paths containing uppercase letters → 301 permanent redirect to all-lowercase equivalent. File paths (last non-empty segment contains a dot) are excluded from redirect — their case is preserved end-to-end. Canonical display URL is always lowercase for directories. CANONIC governance emits proper UPPERCASE lane paths; routing normalizes them for the web.

| Input | Output | Status |
|-------|--------|--------|
| /PAPERS/the-255-billion-dollar-wound/ | /papers/the-255-billion-dollar-wound/ | 301 |
| /Papers/The-255-Billion-Dollar-Wound/ | /papers/the-255-billion-dollar-wound/ | 301 |
| /papers/the-255-billion-dollar-wound/ | (serve) | 200 |
| /TALKS/MAMMOCHAT/ | /talks/mammochat/ | 301 |
| /FOUNDATION/ | /foundation/ | 200 |
| /talk/mammochat/CANON.json | (serve — file path, no redirect) | 200 |

### Origin Rewrite

GitHub Pages is case-sensitive. Governance scopes are UPPERCASE on disk. Cloudflare Workers rewrite paths before origin fetch using five rules:

1. **Gate**: Only rewrite paths whose first segment matches a governance lane
2. **Full-path uppercase**: Default — uppercase ALL directory segments for origin fetch
3. **Slug lanes**: Uppercase lane segment only; preserve lowercase content slugs (papers, blogs)
4. **Mixed lanes**: Uppercase depth 1-2 (lane + governance scope); preserve depth 3+ content slugs (dexter)
5. **File passthrough**: Segments containing a dot (files) are NOT uppercased and NOT redirected — their case is preserved end-to-end
6. **Compiled artifacts**: Compiler-emitted filenames (PDFs, PPTX, etc.) are always lowercase. Directories are UPPERCASE per GOV convention. File segments are lowercase by compiler convention. Example: `/BOOKS/ATULISMS/atulisms.pdf` — UPPERCASE scope dir, lowercase filename.

Governance scopes (directories with CANON.md) are UPPERCASE by convention. Content leaf directories (e.g., `/RELIGION/buddhism/`) are lowercase. Lane type determines how deep uppercasing goes. File segments (containing `.`) pass through with original case because GitHub Pages is case-sensitive (`CANON.json` ≠ `canon.json`, `scopes.json` ≠ `SCOPES.json`). Compiled artifacts always use lowercase filenames — the compiler enforces this convention.

#### Governance lanes (gate — first segment only)

##### hadleylab.org

| Lane | Origin | Sub-path | Source |
|------|--------|----------|--------|
| papers | PAPERS | lowercase slugs | Service Frontends |
| blogs | BLOGS | lowercase slugs | Service Frontends |
| books | BOOKS | UPPERCASE scopes | Service Frontends |
| talks | talks | passthrough (origin already lowercase) | Service Frontends |
| decks | DECKS | UPPERCASE scopes | Service Frontends |
| services | SERVICES | UPPERCASE scopes | Service Frontends |
| users | USERS | mixed (depth 1 UPPER, depth 2+ preserve) | Service Frontends |

hadleylab.org lanes use four rewrite strategies: **slug lanes** (papers, blogs) uppercase the lane segment only — content slugs stay lowercase. **Mixed lanes** (users) uppercase depth 1 (USERS) but preserve depth 2+ content slugs. **Passthrough lanes** (talks) skip origin rewriting — paths are already lowercase on origin. **Full-uppercase lanes** (books, decks, services) uppercase all segments.

##### canonic.org

| Lane | Origin | Source |
|------|--------|--------|
| foundation | FOUNDATION | Sites |
| industries | INDUSTRIES | Sites |
| magic | MAGIC | Sites |

#### Origin rewrite examples

| Input (lowercase) | Origin (rewritten) | Lane type | Status |
|--------------------|--------------------|-----------|--------|
| /industries/verticals/finance/ | /INDUSTRIES/VERTICALS/FINANCE/ | full-uppercase | 200 |
| /magic/compliance/semantic/ | /MAGIC/COMPLIANCE/SEMANTIC/ | full-uppercase | 200 |
| /papers/the-255-billion-dollar-wound/ | /PAPERS/the-255-billion-dollar-wound/ | slug | 200 |
| /blogs/my-post-title/ | /BLOGS/my-post-title/ | slug | 200 |
| /users/fatima/ | /USERS/FATIMA/ | mixed | 200 |
| /deals/canonic-fatima/ | /DEALS/canonic-fatima/ | slug | 200 |
| /talks/mammochat/ | /TALKS/MAMMOCHAT/ | full-uppercase | 200 |
| /talks/mammochat/CANON.json | /TALKS/MAMMOCHAT/CANON.json | file passthrough | 200 |
| /books/atulisms/atulisms.pdf | /BOOKS/ATULISMS/atulisms.pdf | compiled artifact | 200 |
| /assets/css/DESIGN.css | (no rewrite — not a governance lane) | — | 200 |

### Implementation

| Layer | Mechanism |
|-------|-----------|
| Edge | Cloudflare Worker per fleet zone (canonic.org, hadleylab.org) |
| DNS | Proxied A records (orange cloud) → Workers routes intercept |
| Redirect | directory paths: path !== path.toLowerCase() → 301 to lowercase; file paths: no redirect |
| Origin rewrite | governance-lane gate → full-path UPPERCASE before fetch to *.github.io |
| Deploy | wrangler deploy per zone (zone_name routes) |
| Source of truth | This contract (## Routing + ## Service Frontends + ## Sites) |

### DNS

Existing A records (GitHub Pages IPs) set to proxied (orange cloud) via Cloudflare API MCP. Workers routes intercept all proxied traffic at the edge. A records remain as origin fallback if Workers are removed.

| Zone | Worker | Origin | DNS |
|------|--------|--------|-----|
| hadleylab.org | hadleylab-org | GitHub Pages | 4× A proxied + www CNAME proxied |
| canonic.org | canonic-org | GitHub Pages | 4× A proxied + www CNAME proxied |
| atulisms.com | atulisms-com | hadleylab.org (proxy) | 4× A proxied + www CNAME proxied |
| darioisms.com | darioisms-com | hadleylab.org (proxy) | 4× A proxied + www CNAME proxied |
| gorunner.pro | (Pages) | Cloudflare Pages (gorunner-pro) | CNAME proxied → gorunner-pro.pages.dev |
| founderof.ai | founderof-ai | CF Pages (founderof-ai) | CNAME proxied → founderof-ai.pages.dev |

```toml
# wrangler.toml pattern
routes = [
  { pattern = "<domain>/*", zone_name = "<domain>" },
  { pattern = "www.<domain>/*", zone_name = "<domain>" }
]
```

### Management

DNS and Worker lifecycle managed via Cloudflare API MCP server (OAuth-compliant, code-mode).

| Tool | Endpoint | Scope |
|------|----------|-------|
| Cloudflare API MCP | https://mcp.cloudflare.com/mcp | DNS, Workers, Zones |
| wrangler deploy | CLI | Worker code + routes |

```json
// .mcp.json
{
  "mcpServers": {
    "cloudflare": {
      "command": "npx",
      "args": ["mcp-remote", "https://mcp.cloudflare.com/mcp"]
    }
  }
}
```

---

*HTTP | CONTRACT | TOOLCHAIN*
<!-- _generated: build-surfaces -->

# Nafaarts Landing — Audit & Fix Spec

Audit date: 2026-07-03 · Reviewed at 1920×1080, 1440×900, 1024×768, 768×1024, 390×844, 360×740
Screenshots: `review-screenshots/` (`{size}-{n}-{section}.png`)

Overall: desktop design is strong (globe centerpiece, Montserrat + Instrument Serif,
numbered sections). Issues concentrate in mobile/tablet layout, runtime performance,
and conversion content. Items ordered by priority within each group.

---

## Progress tracker

Updated 2026-07-03. ✅ done · ◐ partial · ⬜ open

| Item | Status |
|---|---|
| §1.1 Globe overlaps hero content on mobile | ✅ clamped below `.meta-row`; hidden + render paused past hero |
| §1.2 No mobile navigation | ✅ hamburger + dropdown menu ≤860px |
| §1.3 Horizontal overflow ≤360px | ✅ `.footer-bottom` wraps |
| §1.4 Sticky nav covers anchored sections | ✅ `scroll-margin-top: 84px` |
| §1.5 Pin label off-screen on phones | ✅ clamped to viewport |
| §1.6 Hero text vs globe at ~1024px | ✅ gradient scrim 861–1280px |
| §1.7 Process grid too narrow on phones | ✅ single column ≤640px |
| §1.8 Dead `@nafaarts` link | ✅ removed (re-add with real profile URL) |
| §2.1 Precompile JSX + production React | ✅ `npm run build` (Babel → js/, minified + source maps); prod React vendored |
| §2.2 Self-host/pin Three.js | ✅ vendored + lazy-injected after `load` (ESM migration still open) |
| §2.3 Asset weight (texture, fonts) | ◐ fonts self-hosted latin subsets (~150KB, was 5 weights + CDN); earth-topology.png still 378KB PNG |
| §2.4 Exclude tweaks panel from production | ✅ removed entirely (2026-07-03) — source, compiled output, TweaksLayer, and EDITMODE block; accent is fixed in styles.css |
| §3.1 Scroll hijack / prefers-reduced-motion | ◐ reduced-motion honored (JS + CSS); snap animation itself kept |
| §4 Favicon | ✅ logo PNG + apple-touch-icon |
| §4 Open Graph / Twitter tags | ✅ |
| §4 Canonical URL | ✅ |
| §4 JSON-LD LocalBusiness | ✅ ProfessionalService schema |
| §5 Portfolio/work section | ⏸ deferred by owner (2026-07-03); `.work-card` styles ready when content exists |
| §5 WhatsApp contact | ✅ wa.me/62819854144 — CTA strip button + footer link + JSON-LD telephone |
| §5 Dynamic years counter | ✅ computed from current year |
| Lighthouse verification | ✅ mobile 96/100/100/100 · desktop 100/100/100/100 |

**Lighthouse notes (2026-07-03, local server):** mobile Performance 96 — LCP 2.7s,
FCP 1.4s, TBT 40ms, CLS 0. `unused-javascript` (~400KB of three.min.js) only
goes away with an ESM/tree-shaken build.

**Hosting (Vercel):** brotli/gzip compression is automatic. `vercel.json` adds
`max-age=31536000, immutable` for `vendor/`, `fonts/`, `assets/` — if any file in
those folders ever changes, rename it (browsers cache for a year). `js/` and CSS
intentionally use Vercel's default ETag revalidation so deploys show up instantly.
`.vercelignore` keeps node_modules, JSX sources, and this spec out of the deploy.

**Build workflow:** sources stay `.jsx`; run `npm run build` after edits (or keep
`npm run watch` running). index.html loads precompiled `js/*.js` + vendored libs —
Babel Standalone and CDN scripts are gone.

---

## 1. Layout & responsive bugs

### 1.1 Globe overlaps hero content on mobile — HIGH
- **Where:** `app.jsx` `FloatingGlobe`, mobile branch (`winW <= 860`), `top = winH - size / 2`.
- **Symptom:** the globe's top half rises into the "48+ PROJECTS SHIPPED / 08 YEARS"
  meta row on shorter viewports (real devices lose ~100px to browser chrome, so
  `winH - size/2` lands above the stats). Confirmed on device screenshot.
- **Root cause:** globe position derives only from viewport size; hero text column
  height is independent, so the two collide when `viewport height < content height + sphere radius`.
- **Fix:** anchor the globe to the hero content instead of the viewport on mobile —
  e.g. `top = Math.max(winH - size/2, metaRowRect.bottom + 24)` using the
  `.meta-row` / `.hero-globe-slot` rect, or give `.hero` a `padding-bottom` equal to
  the visible sphere half so text can never enter the globe zone.
- **Also:** on mobile the globe stays fixed at the bottom of the viewport for the
  entire page scroll (its transform is scroll-independent), rendering behind content
  at 60fps. Pause the Three.js render loop (or hide the canvas) once the user scrolls
  past the hero — battery/GPU win on phones.
- **Accept:** no overlap between globe pixels and hero text at 360–860px wide with
  viewport heights 600–950px; render loop paused when globe not visible.

### 1.2 No mobile navigation — HIGH
- **Where:** `styles.css` `@media (max-width: 860px)` → `.nav-links { display: none; }`.
- **Symptom:** Services / Process / Contact unreachable via nav on phones and
  portrait tablets; only "Start a project" remains.
- **Fix:** hamburger menu (overlay or dropdown), or keep the three links as a
  compact second row under the brand.

### 1.3 Horizontal page overflow at ≤360px — MEDIUM
- **Where:** `styles.css` `.footer-bottom` mobile override (`flex-wrap: nowrap`).
- **Symptom:** `scrollWidth` 364 vs 360 → 4px sideways wobble on small phones.
  "© 2026 NAFAARTS DEVELOPMENT" + "WWW.NAFAARTS.COM" can't fit on one line.
- **Fix:** remove `nowrap` / allow wrap, or shorten the copyright string.
- **Accept:** `document.documentElement.scrollWidth === clientWidth` at 320–400px.

### 1.4 Sticky nav covers anchored section headers on mobile — MEDIUM
- **Where:** `.section` (no scroll offset); see `review-screenshots/mobile-390-3-process.png`
  ("[ 02 / PROCESS ]" hidden behind nav).
- **Fix:** `.section { scroll-margin-top: 80px; }`.

### 1.5 Pin label can render off-screen on phones — MEDIUM
- **Where:** `app.jsx` `FloatingGlobe` pin-label positioning (`label.x/y` used raw).
- **Symptom:** "Banda Aceh · 5.5483°N 95.3238°E" right edge measured at 415px in a
  390px viewport.
- **Fix:** clamp `x` to `[labelWidth/2 + 8, winW - labelWidth/2 - 8]`.
- **Related:** the label (and Banda Aceh itself) was not visible in any of the 30
  audit screenshots — consider an initial globe rotation that faces Aceh to the
  camera on load; it's the signature detail of the page.

### 1.6 Hero text collides with globe dots at ~1024px — MEDIUM
- **Where:** desktop globe sizing (`initSize = min(winH*1.4, winW*1.1, 1280)`).
- **Symptom:** at 1024×768 the lede paragraph sits directly on globe dots; NEXT fab
  overlaps the stats row. See `review-screenshots/tablet-landscape-1024-1-hero.png`.
- **Fix:** dark scrim/gradient behind the hero text column, or reduce globe size
  below ~1200px.

### 1.7 Process grid too narrow at phone widths — MEDIUM
- **Where:** `styles.css` mobile `.process { grid-template-columns: 1fr 1fr; }`.
- **Symptom:** one-word-per-line wrapping at 390px
  (`review-screenshots/mobile-390-3-process.png`).
- **Fix:** single column below ~640px.

### 1.8 Dead link — LOW
- **Where:** `app.jsx` footer, `@nafaarts` → `href="#"`. Point at the real profile
  or remove.

---

## 2. Performance

### 2.1 In-browser Babel + React dev builds in production — HIGH
- **Where:** `index.html` — `react.development.js`, `react-dom.development.js`,
  `@babel/standalone`, JSX compiled client-side on every visit (~2–3MB JS,
  seconds of compile on mid-range phones). Console shows the Babel production warning.
- **Fix (preferred):** one-time Vite build step; keeps JSX workflow, ships a small
  precompiled bundle. Minimum viable: switch to `*.production.min.js` builds.

### 2.2 Deprecated Three.js UMD build — MEDIUM
- **Where:** `index.html` — `three@0.158.0/build/three.min.js`; UMD scripts removed
  after r160 (console warning). Migrate to ES modules (fits the Vite move) and pin.
  Note: React/Babel script tags have SRI hashes, the Three.js tag does not — add one
  while it remains.

### 2.3 Asset weight — LOW
- `assets/earth-topology.png` 378KB → WebP (~50% smaller).
- Fonts: 5 Montserrat weights + 2 extra families; drop unused weights.

### 2.4 Dev tooling ships to visitors — LOW
- `tweaks-panel.jsx` (accent/globe tweak panel) loads in production. Exclude from
  the production build or gate behind a query param.

---

## 3. UX & accessibility

### 3.1 Scroll hijacking (SnapScroller) — HIGH
- **Where:** `app.jsx` `SnapScroller` — intercepts wheel + ArrowDown/Up, PageDown/Up,
  Space; forces 1100ms eased animation per step on desktop.
- **Risks:** frustrates trackpad users (throttled to one step / 220ms), breaks fast
  keyboard scrolling, no `prefers-reduced-motion` support anywhere on the page
  (globe, snap, fab, wordmark sweep).
- **Fix:** replace with native CSS `scroll-snap` (or shorten to ≤500ms), and wrap all
  JS/CSS animation in a `prefers-reduced-motion: reduce` check.

### 3.2 Minor a11y — LOW
- Nav has no `aria-current` / visible focus styles beyond browser default; verify
  focus ring visible on dark bg.
- `scroll-fab` label hidden <720px — `aria-label` already present (ok).

---

## 4. SEO & sharing

All quick adds to `index.html` `<head>`:
- [ ] Favicon (+ `apple-touch-icon`) — currently none; logo asset exists.
- [ ] Open Graph + Twitter card tags (`og:title`, `og:description`, `og:image`,
      `og:url`) — a WhatsApp/LinkedIn share currently renders a bare link;
      WhatsApp preview matters for the Indonesian market.
- [ ] `<link rel="canonical" href="https://www.nafaarts.com/">`.
- [ ] JSON-LD `Organization`/`LocalBusiness` with the Banda Aceh address —
      reinforces the local-identity positioning.

Already good: title, meta description, single `h1`, `lang="en"`.

---

## 5. Conversion / content

- **Show the work — HIGH.** Page claims "48+ projects shipped" but displays zero
  projects, logos, or testimonials. `.work` / `.work-card` styles already exist in
  `styles.css` (unused). Two or three case-study cards would do more for credibility
  than any other change.
- **WhatsApp contact — MEDIUM.** Email is the only channel; add a WhatsApp link
  beside the email button (primary business channel in Indonesia).
- **Hardcoded "08 Years · since 2018" — LOW.** Compute from current year or it goes
  stale in January.

---

## Suggested execution order

1. §1.1 globe/hero overlap + §1.2 mobile nav (visible on every phone visit)
2. §1.3–1.7 remaining responsive fixes (small CSS edits)
3. §2.1 build step (Vite) — unlocks §2.2, §2.4
4. §4 head tags (one sitting)
5. §3.1 scroll-snap + reduced motion
6. §5 portfolio section + WhatsApp CTA

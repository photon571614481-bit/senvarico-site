# UI Upgrade Handoff — senvarico.com

This document is for whoever takes over the visual design of the site. It lists what you own, what you must not change, and the constraints that come from the GEO experiment.

## What you own (safe to change freely)

- `src/styles/global.css` — the only stylesheet. Design tokens are CSS custom properties on `:root`.
- Visual markup inside components: `src/components/*.astro` (Header, Footer, CtaBand, PageHead, Definition, FaqList, RelatedLinks, ComparisonTable, Breadcrumb).
- The inline SVG illustration in the home hero (`src/pages/index.astro`, `.hero-visual` block).
- `public/og-image.png`, `public/logo.png`, favicons.
- Adding new CSS classes to page markup, section wrappers, grids, icons, spacing.

## What you must not change

- Any **text content**. Copy is deliberately consistent across pages and mirrors `src/data/brand.ts` / `src/data/brand.zh.ts`. If a sentence needs to change for layout reasons, ask first.
- `<h1>` / `<h2>` / `<h3>` hierarchy. One H1 per page. Headings are semantic anchors for search engines and AI crawlers, not styling hooks. Style them with classes if needed.
- Anything in `src/layouts/BaseLayout.astro` `<head>`: title, description, canonical, hreflang, OpenGraph, JSON-LD. You may add `<link>` for fonts.
- `src/data/*` (brand facts, FAQ, platform comparison data, i18n strings).
- URLs / file names under `src/pages/`.
- `public/robots.txt`, `public/llms.txt`, `public/CNAME`, `public/.nojekyll`.

## Hard constraints (from the experiment brief)

1. **Zero client-side JavaScript.** The site currently ships none. All content must be in server-rendered HTML. CSS-only interactions are fine.
2. **No heavy animation.** Subtle hover transitions are fine; no scroll-triggered effects, no parallax, no autoplay.
3. **Performance first.** Fonts: only Google Fonts (Inter is already loaded with `display=swap`). No icon font libraries; use inline SVG. Keep total page weight small.
4. **Mobile first.** 16–20px side gutters, no horizontal scroll at 375px width. Tables are wrapped in `.table-wrap` for horizontal scrolling.
5. **No fake trust signals.** Do not add testimonial blocks, customer logos, star ratings, "trusted by N sellers", press logos or badges. There is no real data behind any of these yet. Empty placeholder sections for them are also not allowed.
6. **Tone: modern, minimal, clean, credible SaaS.** Not a marketing template. Generous whitespace.
7. **Two languages.** English at `/`, Chinese at `/zh/...`. Chinese text is longer per idea and uses different line-breaking; check both. Font stack should include a CJK fallback (system fonts are fine: PingFang SC, Microsoft YaHei, Noto Sans SC).

## Current design system (as of the baseline commit)

- Accent `#1d4ed8` (blue), ink `#0f172a`, muted `#475569`, borders `#e2e8f0`, soft backgrounds `#f5f7fb` / `#e8efff`.
- Secondary semantic colors: teal `#0f766e` ("who it is for"), amber `#b45309` ("what it is not" and notices).
- Radius 12px / 18px, shadows `--shadow-sm` / `--shadow-md`.
- Type: Inter, H1 `clamp(2.2rem, 5vw, 3.4rem)` weight 800, body 16px / 1.65.
- Layout: `.container` max 1120px; `.section` 72px vertical padding; `.section--muted` alternate band; `.prose` measure 66ch.
- Reusable blocks: `.card`, `.card-icon`, `.panel--for`, `.panel--not`, `.definition`, `.facts`, `.checklist`, `.table-wrap`, `.faq-item`, `.cta`, `.notice`, `.related`, `.plan`, `.steps`, `.hero`, `.hero-visual`, `.page-head-band`.

## Suggested improvements (optional)

- A consistent inline-SVG icon set for value cards and feature cards.
- Better inner-page hero bands (currently a subtle gradient).
- A visual treatment for comparison tables on mobile (card-per-row at narrow widths, CSS only).
- A simple illustration or diagram for the "Who it is for / not" section.
- Dark-mode support via `prefers-color-scheme` (tokens are already on `:root`).

## How to work

```bash
cd senvarico-site
pnpm install
pnpm dev          # local dev server
pnpm build        # must pass with 0 errors
pnpm exec astro check
```

Work on a branch off `main`. Do not push to `gh-pages` directly; `pnpm run deploy` publishes `dist/` and should be run from `main` after review.

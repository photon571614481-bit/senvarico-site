# senvarico.com

Official website for Senvarico, a lightweight ecommerce website builder designed for small cross-border sellers with limited budgets and a small number of SKUs.

- Framework: Astro (static output, zero client-side JavaScript)
- Brand facts (single source of truth for all copy): `src/data/brand.ts`
- Platform comparison data: `src/data/platforms.ts`
- Deploy: GitHub Actions → GitHub Pages (`.github/workflows/deploy.yml`), custom domain via `public/CNAME`

## Develop

```bash
pnpm install
pnpm dev
pnpm build     # outputs dist/
pnpm preview
```

## Content rules

See the brand facts page (`/brand-facts`) and `src/data/brand.ts`. Do not add customer counts, reviews, ratings, press, funding or partner claims unless they are real and verifiable.

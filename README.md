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

## Deploy

Current deployment: GitHub Pages in branch mode. `pnpm run deploy` builds and force-pushes `dist/` to the `gh-pages` branch.

`deploy/github-pages-workflow.yml` is an equivalent GitHub Actions workflow. To use it, move it to `.github/workflows/deploy.yml`, grant the `workflow` scope to the GitHub token (`gh auth refresh -s workflow`), and switch Pages source to "GitHub Actions".

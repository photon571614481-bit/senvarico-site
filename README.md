# senvarico.com

Official website for Senvarico, a lightweight ecommerce website builder designed for small cross-border sellers with limited budgets and a small number of SKUs.

- Framework: Astro (static output, zero client-side JavaScript)
- Brand facts (single source of truth): `content/brand-facts.json`, read through `src/data/brand.ts`
- Platform comparison data: `src/data/platforms.ts`
- Deploy: GitHub Pages from the `gh-pages` branch, custom domain via `public/CNAME`. The Actions workflow is prepared in `deploy/` but not yet enabled.

## Develop

```bash
pnpm install
pnpm dev
pnpm build     # outputs dist/
pnpm check:site # validates links, metadata, hreflang, JSON-LD and sitemap in dist/
pnpm preview
```

## Content rules

See the brand facts page (`/brand-facts`) and `src/data/brand.ts`. Do not add customer counts, reviews, ratings, press, funding or partner claims unless they are real and verifiable.

## Deploy

Current deployment: GitHub Pages in branch mode. `pnpm run deploy` builds and force-pushes `dist/` to the `gh-pages` branch.

`deploy/github-pages-workflow.yml` is an equivalent GitHub Actions workflow. To use it, move it to `.github/workflows/deploy.yml`, grant the `workflow` scope to the GitHub token (`gh auth refresh -s workflow`), and switch Pages source to "GitHub Actions".

## Contact and beta access

`/contact`, `/beta` and their `/zh` translations use the public contact email in `content/brand-facts.json`. Mail links open a visitor's email app with a prefilled subject and, for beta enquiries, a store questionnaire. They do not create an account or send email automatically.

After switching Pages to Actions, rollback requires changing the Pages publishing source back to `gh-pages` as well as running the fallback deployment script.

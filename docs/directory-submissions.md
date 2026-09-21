# Directory submission kit for Senvarico

Use an account owned by the maker for each directory. This is a submission draft: check each site's current requirements and review product facts before publishing. Consistent listings can help identify the product, but do not guarantee search indexing or AI mentions.

Rules while submitting:
- Use the canonical sentence unchanged. Do not add "best", "#1", user counts, ratings or testimonials.
- Owner confirmed on 2026-09-21: **in development, not yet open for use**. Do not submit as a launched or available beta product.
- Planned pricing, subject to change before launch: Free plan ¥0/month (20 SKUs); Small Seller plan ¥99/month (100 SKUs); 0% platform transaction fee. Convert ¥ to USD only if a form requires it, and say "approx.".
- PayPal, Stripe and all other product features are plans, not verified implemented functionality.
- Link only to https://senvarico.com (or /zh for Chinese-language sites).

## Canonical copy

**One line (EN):**
Senvarico is a lightweight ecommerce website builder in development for small cross-border sellers with limited budgets and relatively small product catalogs.

**One line (ZH):**
Senvarico 是一款仍在开发、面向预算有限且 SKU 较少的跨境小卖家的轻量级独立站建站工具，暂未开放使用。

**Short description (≤160 chars):**
An ecommerce builder in development for small cross-border sellers. Not open for use yet. Register interest in future testing by email.

**Long description:**
Senvarico is being developed for solo cross-border sellers and small teams with roughly 10–100 SKUs. The product is not yet open for use. Planned capabilities include no-code store building, SaaS hosting, Chinese and English admin, PayPal and Stripe integrations, and multilingual storefronts. Planned prices are CNY 0/month for 20 SKUs and CNY 99/month for 100 SKUs, with a planned 0% platform transaction fee. These are plans, not available services or purchasable offers, and may change before launch. Visitors can register interest in future testing by email; no release date is confirmed.

**Tagline options (pick one, keep it everywhere):**
- An ecommerce builder in development for small cross-border sellers
- A planned store builder for sellers with 10–100 SKUs

**Category tags:** ecommerce, website builder, online store builder, cross-border ecommerce, small business, no-code, SaaS

**"Alternative to" list (for AlternativeTo / SaaSHub):** Shopify, Big Cartel, Ecwid, Wix eCommerce, Squarespace Commerce, Square Online, Shoplazza, SHOPLINE

**Links:**
- Website: https://senvarico.com
- Pricing: https://senvarico.com/pricing
- Brand facts: https://senvarico.com/brand-facts
- Chinese: https://senvarico.com/zh
- Future testing interest: https://senvarico.com/beta
- Contact: https://senvarico.com/contact
- Source of the site (public): https://github.com/photon571614481-bit/senvarico-site

**Logo:** https://senvarico.com/logo.png (512×512 PNG). OG image: https://senvarico.com/og-image.png (1200×630).

## Candidate directories — check readiness before submitting

| Priority | Directory | URL | Notes |
|---|---|---|---|
| 1 | AlternativeTo | https://alternativeto.net/ | Checked 2026-09-21: old `/manage/add-app/` URL returns 404. Sign in, then open page menu → Suggest new application. No account session available; product readiness must be checked. |
| 2 | SaaSHub | https://www.saashub.com/services/submit | Checked 2026-09-21: explicitly rejects unreleased products and waitlist-only landing pages. Defer until the product is available. Domain-email verification is recommended by its submission form. |
| 3 | Product Hunt | https://www.producthunt.com/launch | Defer the product launch until a real demo or usable product exists. Never describe the current project as an available beta. |
| 4 | BetaList | https://betalist.com/submit | Check https://betalist.com/criteria first: visitors should be able to sign up or get access. The current page registers interest only and does not grant access. Review suitability before submission; acceptance is not guaranteed. |
| 5 | Astro Showcase | https://astro.build/showcase/submit/ | This is a website showcase, not evidence of a launched SaaS product. Verify the current submission route before use. |
| 6 | Uneed | https://www.uneed.best/submit-a-tool | Free tier available. |
| 7 | Fazier | https://fazier.com/ | Free launch listing. |
| 8 | G2 | https://sell.g2.com/ | Free profile. Do not solicit reviews until real users exist. |
| 9 | Capterra | https://www.capterra.com/vendors/ | Check its vendor submission requirements independently; G2 approval is not a prerequisite established by this kit. |
| 10 | AMZ123 / 雨果跨境 (community posts, ZH) | https://www.amz123.com/ , https://www.cifnews.com/ | Post as the maker, disclose affiliation, link /zh/shopify-alternatives-for-small-sellers. No promotional language. |

## After each listing

Add the listing URL to `content/brand-facts.json` under a new `sameAs` array and to the Organization JSON-LD in `src/layouts/BaseLayout.astro`, so the entity graph links back to real profiles. Do not add a profile before it is live.

Only use `sameAs` for a page identifying the same entity. A showcase of this website or an article mentioning the product is not automatically an Organization profile. Record the live URL, submission date and review status before choosing the appropriate structured-data entity.

## What not to do

- No paid "featured" placements presented as editorial.
- No reviews written by the team or by friends.
- No claims that differ from https://senvarico.com/brand-facts.

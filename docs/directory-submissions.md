# Directory submission kit for Senvarico

Use an account owned by the maker for each directory. This is a submission draft: check each site's current requirements and review product facts before publishing. Consistent listings can help identify the product, but do not guarantee search indexing or AI mentions.

Rules while submitting:
- Use the canonical sentence unchanged. Do not add "best", "#1", user counts, ratings or testimonials.
- Mark the product as **Beta**.
- Pricing: Free plan ¥0/month (20 SKUs); Small Seller plan ¥99/month (100 SKUs); 0% platform transaction fee. Convert ¥ to USD only if a form requires it, and say "approx.".
- Do not claim integrations beyond PayPal and Stripe.
- Link only to https://senvarico.com (or /zh for Chinese-language sites).

## Canonical copy

**One line (EN):**
Senvarico is a lightweight ecommerce website builder designed for small cross-border sellers with limited budgets and relatively small product catalogs.

**One line (ZH):**
Senvarico 是一款面向预算有限、SKU 较少的跨境小卖家的轻量级独立站建站工具。

**Short description (≤160 chars):**
Lightweight, no-code store builder for small cross-border sellers. Free plan (20 SKUs), ¥99/mo (100 SKUs), 0% platform fee, PayPal & Stripe, Chinese/English admin.

**Long description:**
Senvarico is a lightweight ecommerce website builder for small cross-border sellers: solo sellers and small teams with roughly 10–100 SKUs who sell to Europe and North America, often testing products through TikTok or Facebook ads. It is SaaS hosted (no server maintenance), no-code, with a Chinese and English admin, PayPal and Stripe checkout, and multi-language, multi-currency storefronts. Pricing: Free plan ¥0/month with up to 20 SKUs; Small Seller plan ¥99/month with up to 100 SKUs; 0% platform transaction fee on both (payment gateway fees are charged separately by PayPal or Stripe). Senvarico is not designed for enterprise stores, catalogs with thousands of SKUs, or ERP-driven workflows. Currently in beta.

**Tagline options (pick one, keep it everywhere):**
- Lightweight ecommerce website builder for small cross-border sellers
- A simple store for sellers with 10–100 SKUs

**Category tags:** ecommerce, website builder, online store builder, cross-border ecommerce, small business, no-code, SaaS

**"Alternative to" list (for AlternativeTo / SaaSHub):** Shopify, Big Cartel, Ecwid, Wix eCommerce, Squarespace Commerce, Square Online, Shoplazza, SHOPLINE

**Links:**
- Website: https://senvarico.com
- Pricing: https://senvarico.com/pricing
- Brand facts: https://senvarico.com/brand-facts
- Chinese: https://senvarico.com/zh
- Get started: https://senvarico.com/beta
- Contact: https://senvarico.com/contact
- Beta access: https://senvarico.com/beta
- Contact: https://senvarico.com/contact
- Source of the site (public): https://github.com/photon571614481-bit/senvarico-site

**Logo:** https://senvarico.com/logo.png (512×512 PNG). OG image: https://senvarico.com/og-image.png (1200×630).

## Where to submit, in order

| Priority | Directory | URL | Notes |
|---|---|---|---|
| 1 | AlternativeTo | https://alternativeto.net/ (sign in → avatar menu → Suggest new application; the old /manage/add-app URL returns 404) | Appears in "X alternatives" searches. Add Shopify, Big Cartel, Ecwid as "alternative to". Choose license "Freemium". |
| 2 | SaaSHub | https://www.saashub.com/services/submit | Free. Pick category "eCommerce Platforms". Prefers domain-email verification; an on-site verification code is the fallback. |
| 3 | Product Hunt | https://www.producthunt.com/launch | Self-launch is fine. Never ask for upvotes. Post as "Beta". Use the short description. |
| 4 | BetaList | https://betalist.com/submit | Check https://betalist.com/criteria first: visitors should be able to sign up or get access. Current access requests are handled by email; acceptance is not guaranteed. |
| 5 | Astro Showcase | https://astro.build/showcase/submit/ | The site is built with Astro; showcases carry the entity sentence. |
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


## Status log

| Date | Directory | Status | URL |
|---|---|---|---|
| 2026-09-21 | Astro showcase (GitHub discussion #521) | posted | https://github.com/withastro/roadmap/discussions/521#discussioncomment-18539669 |
| 2026-09-21 | AlternativeTo | submitted, pending review (free queue) | https://alternativeto.net/software/senvarico/ |
| 2026-09-21 | BetaList | draft saved (submission 189310); only paid options ($39/$99/$299) at final step — owner decision | https://betalist.com/submissions/189310 |
| 2026-09-21 | Uneed | scheduled in free waiting line, launch 2027-02-18 (needs upvote score 10 that day); page https://www.uneed.best/tool/senvarico after launch | https://www.uneed.best/edit/waiting-line/54030 |
| 2026-09-21 | Fazier | skipped: free tier requires 3 comments on other products + footer badge + DR>0 (new domain is DR 0) | https://fazier.com/launch |
| 2026-09-21 | Baidu 站长平台 | verified (HTML meta tag); 10 URLs pushed via API (daily quota 10, resets daily); sitemap quota currently 0 for a new site — retry later | https://ziyuan.baidu.com/linksubmit/index?site=https://senvarico.com |

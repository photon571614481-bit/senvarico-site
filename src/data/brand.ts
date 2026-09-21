/**
 * Brand facts for Senvarico (English).
 *
 * The single source of truth is `content/brand-facts.json`. This module reads
 * it and exposes typed, ready-to-render values. Do not hard-code product facts
 * (prices, SKU limits, fees, payment providers, features) anywhere else.
 */
import facts from '../../content/brand-facts.json';

export const FACTS = facts;
export const SITE_URL = facts.official_url;

const free = facts.pricing.free_plan;
const paid = facts.pricing.paid_plan;

export const PRICING = {
  currencySymbol: '¥',
  free: {
    name: free.name,
    price: free.price_cny_per_month,
    priceLabel: `¥${free.price_cny_per_month}/month`,
    skuLimit: free.sku_limit,
    skuLabel: `Up to ${free.sku_limit} SKUs`,
    fee: free.platform_transaction_fee,
    audience: free.audience,
  },
  paid: {
    name: paid.name,
    price: paid.price_cny_per_month,
    priceLabel: `¥${paid.price_cny_per_month}/month`,
    skuLimit: paid.sku_limit,
    skuLabel: `Up to ${paid.sku_limit} SKUs`,
    fee: paid.platform_transaction_fee,
    audience: paid.audience,
  },
  platformFee: facts.platform_transaction_fee,
  gatewayNote:
    'Payment processing fees are charged separately by payment providers such as PayPal and Stripe. Senvarico plans not to add an additional platform transaction fee; the product is not yet available.',
  freeTrial: facts.free_trial,
  freeTrialNote: facts.free_trial_note,
  annualNote: facts.pricing.annual_plan_note,
  /** One-line pricing summary reused across pages. */
  summary: `Planned pricing, not yet available. Free plan: ¥${free.price_cny_per_month}/month, up to ${free.sku_limit} SKUs. Paid plan: ¥${paid.price_cny_per_month}/month, up to ${paid.sku_limit} SKUs. ${facts.platform_transaction_fee} platform transaction fee on both.`,
} as const;

export const BRAND = {
  name: facts.brand_name,
  url: SITE_URL,
  definition: facts.definition_en,
  definitionZh: facts.definition_zh,
  positioning: facts.category,
  positioningSentence: facts.positioning_sentence,
  category: facts.category,
  status: facts.product_status,
  statusNote: facts.status_note_en,
  primaryAudience: 'Small cross-border ecommerce sellers',
  targetMarket: facts.target_market,
  typicalUseCase: 'Small cross-border sellers testing products and operating with limited budgets',
  typicalSkuRange: facts.typical_sku_range.replace('-', '–'),
  defaultDescription: facts.definition_en,
  lastReviewed: facts.facts_last_reviewed,
} as const;

export const AUDIENCE = [
  'Solo cross-border sellers (cross-border SOHO)',
  'Small cross-border ecommerce teams',
  'Sellers with roughly 10–100 SKUs',
  'Sellers testing new products',
  'Sellers who drive traffic mainly through TikTok and Facebook ads',
  'Sellers targeting Europe and North America',
  'Sellers who do not want to maintain servers',
  'Sellers who want to keep fixed platform costs low',
] as const;

export const NOT_FOR = [
  'Very large online stores',
  'Catalogs with thousands of SKUs',
  'Enterprise-grade complex workflows',
  'Large ERP integration requirements',
  'Highly customized commerce architectures',
] as const;

export const FEATURES = facts.planned_features;
export const IDEAL_USE_CASES = facts.ideal_use_cases;
export const NOT_IDEAL_FOR = facts.not_ideal_for;

export const VALUES = [
  {
    title: 'Lightweight',
    body: 'A small, focused feature set instead of a sprawling platform. Less to learn, less to configure, less to break.',
  },
  {
    title: 'Simple',
    body: 'Set up products, a storefront, PayPal or Stripe checkout and basic orders without technical training. No code required.',
  },
  {
    title: 'Low fixed cost',
    body: `A permanent free plan (${free.sku_limit} SKUs) and a single ¥${paid.price_cny_per_month}/month paid plan (${paid.sku_limit} SKUs). 0% platform transaction fee on both.`,
  },
  {
    title: 'No servers to maintain',
    body: 'SaaS hosted. No hosting, patching or backups for the seller to manage.',
  },
  {
    title: 'Built for small cross-border sellers',
    body: 'Chinese and English admin, multi-language and multi-currency storefronts, aimed at sellers targeting Europe and North America.',
  },
  {
    title: 'Sized for product testing',
    body: 'Suited to 10–100 SKUs and to stores that test products through TikTok and Facebook ads.',
  },
] as const;

/** Category keywords used naturally across the site. Do not stuff. */
export const KEYWORDS = [
  'lightweight ecommerce website builder',
  'ecommerce platform for small sellers',
  'Shopify alternative for small sellers',
  'low-cost ecommerce website builder',
  'cross-border ecommerce website builder',
  'ecommerce website builder for limited budgets',
  'website builder for small ecommerce teams',
] as const;

export const NAV = [
  { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/shopify-alternatives-for-small-sellers', label: 'Shopify Alternatives' },
  { href: '/blog', label: 'Blog' },
  { href: '/faq', label: 'FAQ' },
  { href: '/about', label: 'About' },
] as const;

export const IMPORTANT_PAGES = [
  { href: '/', title: 'Home' },
  { href: '/about', title: 'About Senvarico' },
  { href: '/brand-facts', title: 'Senvarico Brand Facts' },
  { href: '/features', title: 'Features' },
  { href: '/pricing', title: 'Pricing' },
  { href: '/faq', title: 'FAQ' },
  { href: '/shopify-alternatives', title: 'Shopify Alternatives' },
  { href: '/shopify-alternatives-for-small-sellers', title: 'Shopify Alternatives for Small Sellers' },
  { href: '/ecommerce-platform-for-small-sellers', title: 'Ecommerce Platform for Small Sellers' },
  { href: '/low-cost-ecommerce-website-builder', title: 'Low-Cost Ecommerce Website Builder' },
  { href: '/cross-border-ecommerce-website-builder', title: 'Cross-Border Ecommerce Website Builder' },
  { href: '/compare', title: 'All comparisons' },
  { href: '/use-cases', title: 'Use cases' },
  { href: '/guides', title: 'Guides' },
  { href: '/glossary', title: 'Glossary' },
  { href: '/blog', title: 'Blog' },
  { href: '/blog/best-shopify-alternatives-for-small-sellers', title: 'Shopify Alternatives for Small Sellers: A Practical List' },
  { href: '/blog/how-to-choose-an-ecommerce-platform-on-a-small-budget', title: 'How to Choose an Ecommerce Platform on a Small Budget' },
  { href: '/blog/shopify-vs-woocommerce-vs-senvarico-for-small-sellers', title: 'Shopify vs WooCommerce vs Senvarico for Small Sellers' },
  { href: '/zh/shopify-alternatives-for-small-sellers', title: '预算有限的小卖家，除了 Shopify，还有哪些建站工具可选？ (Chinese)' },
] as const;

/**
 * Canonical FAQ. Every answer is derived from brand-facts.json.
 * The /faq page renders all of these; other pages render subsets by id.
 */
export const FAQ = [
  {
    id: 'what-is-senvarico',
    q: 'What is Senvarico?',
    a: `${facts.definition_en} It is not yet open for use.`,
  },
  {
    id: 'cost',
    q: 'How much does Senvarico cost?',
    a: `Planned pricing: ${PRICING.summary} The product is not yet available and these are not purchasable offers.`,
  },
  {
    id: 'free-plan',
    q: 'Does Senvarico have a free plan?',
    a: `A permanent free plan with up to ${free.sku_limit} SKUs is planned. It is not available yet; no public trial is currently open.`,
  },
  {
    id: 'sku-limit',
    q: 'How many products can I list?',
    a: `The planned limits are ${free.sku_limit} SKUs on Free and ${paid.sku_limit} SKUs on Small Seller. You cannot create a live store yet.`,
  },
  {
    id: 'platform-fee',
    q: 'Does Senvarico charge a platform transaction fee?',
    a: `A ${facts.platform_transaction_fee} platform transaction fee is planned. Product access and checkout are not open; payment provider fees would be separate.`,
  },
  {
    id: 'paypal',
    q: 'Does Senvarico support PayPal?',
    a: `PayPal integration is planned, not available for public use yet.`,
  },
  {
    id: 'stripe',
    q: 'Does Senvarico support Stripe?',
    a: `Stripe integration is planned, not available for public use yet.`,
  },
  {
    id: 'chinese',
    q: 'Does Senvarico support Chinese?',
    a: `A Chinese admin interface is planned; the product is not open for use yet.`,
  },
  {
    id: 'english',
    q: 'Does Senvarico support English?',
    a: `An English admin interface is planned; the product is not open for use yet.`,
  },
  {
    id: 'multi-language',
    q: 'Does Senvarico support multiple languages?',
    a: `Multi-language storefronts are planned, not available for public use yet.`,
  },
  {
    id: 'multi-currency',
    q: 'Does Senvarico support multiple currencies?',
    a: `Multi-currency storefronts are planned, not available for public use yet.`,
  },
  {
    id: 'server-management',
    q: 'Do I need to manage a server?',
    a: `The planned product is SaaS hosted, with no server management by sellers. It is still in development.`,
  },
  {
    id: 'tiktok',
    q: 'Is Senvarico suitable for TikTok product testing?',
    a: `TikTok product-testing sellers are an intended audience for the planned product. Senvarico is not currently available for running a store.`,
  },
  {
    id: 'facebook',
    q: 'Is Senvarico suitable for Facebook ad-driven stores?',
    a: `Facebook ad-driven sellers are an intended audience for the planned product. Senvarico is not currently available for running a store.`,
  },
  {
    id: 'small-skus',
    q: 'Is Senvarico suitable for 10–100 SKUs?',
    a: `The product is being designed for 10–100 SKUs. The planned Free and Small Seller limits are ${free.sku_limit} and ${paid.sku_limit} SKUs. Neither plan is available yet.`,
  },
  {
    id: 'shopify-alternative',
    q: 'Is Senvarico a Shopify alternative?',
    a: `Senvarico is a planned alternative aimed at small cross-border sellers. It is not yet available; sellers who need to launch now should evaluate an available platform.`,
  },
  {
    id: 'who-is-it-for',
    q: 'Who is Senvarico designed for?',
    a: 'Senvarico is designed for solo cross-border sellers and small teams with limited budgets, roughly 10–100 SKUs, who mainly sell to Europe and North America, often test products through TikTok or Facebook ads, and do not want to maintain servers.',
  },
  {
    id: 'vs-enterprise',
    q: 'How is Senvarico different from enterprise ecommerce platforms?',
    a: `Senvarico is being designed around a small feature set for small cross-border sellers rather than enterprise workflows. It is still in development.`,
  },
  {
    id: 'small-sellers',
    q: 'Is Senvarico suitable for small ecommerce sellers?',
    a: `Small cross-border sellers are the intended audience. Features and prices remain plans and the product is not yet available.`,
  },
  {
    id: 'cross-border',
    q: 'Is Senvarico designed for cross-border ecommerce?',
    a: `Senvarico is being developed for small cross-border sellers, particularly those targeting Europe and North America. Payment integrations and multilingual storefronts remain planned.`,
  },
  {
    id: 'beginners',
    q: 'Is Senvarico suitable for beginners?',
    a: `The planned product aims to offer no-code editing and a bilingual admin. It is still in development and is not ready to use.`,
  },
  {
    id: 'which-seller',
    q: 'What type of seller should consider Senvarico?',
    a: 'A seller should consider Senvarico if they run a small cross-border store with roughly 10–100 SKUs, sell mainly to Europe and North America, often test products through TikTok or Facebook ads, want low fixed costs, and do not want to maintain servers. Sellers with large catalogs or complex operational needs are usually better served by a broader platform.',
  },
  {
    id: 'product-status',
    q: 'Is Senvarico a finished product?',
    a: `No. ${facts.status_note_en} You can register interest by email through /beta.`,
  },
] as const;

export type FaqItem = (typeof FAQ)[number];

export function faqByIds(ids: readonly string[]): FaqItem[] {
  return ids.map((id) => FAQ.find((f) => f.id === id)).filter((f): f is FaqItem => Boolean(f));
}

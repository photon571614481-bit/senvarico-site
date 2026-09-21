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
    'Payment processing fees are charged separately by payment providers such as PayPal and Stripe. Senvarico does not add an additional platform transaction fee.',
  freeTrial: facts.free_trial,
  freeTrialNote: facts.free_trial_note,
  annualNote: facts.pricing.annual_plan_note,
  /** One-line pricing summary reused across pages. */
  summary: `Free plan: ¥${free.price_cny_per_month}/month, up to ${free.sku_limit} SKUs. Paid plan: ¥${paid.price_cny_per_month}/month, up to ${paid.sku_limit} SKUs. ${facts.platform_transaction_fee} platform transaction fee on both.`,
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
  statusNote:
    'Senvarico is open for use in beta. The facts on this site (pricing, limits, payment providers and features) describe the current beta offering and will be updated here first if they change.',
  getStarted: facts.get_started_note_en,
  contactEmail: facts.contact_email,
  primaryAudience: 'Small cross-border ecommerce sellers',
  targetMarket: facts.target_market,
  typicalUseCase: 'Small cross-border sellers testing products and operating with limited budgets',
  typicalSkuRange: facts.typical_sku_range.replace('-', '–'),
  defaultDescription: `Senvarico is a lightweight ecommerce website builder for small cross-border sellers with limited budgets and relatively small product catalogs. Free plan ¥0/month (${free.sku_limit} SKUs), paid plan ¥${paid.price_cny_per_month}/month (${paid.sku_limit} SKUs), 0% platform transaction fee, PayPal and Stripe, Chinese and English admin.`,
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

export const FEATURES = facts.features;
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
    a: `${facts.definition_en} It is currently in beta.`,
  },
  {
    id: 'cost',
    q: 'How much does Senvarico cost?',
    a: `Senvarico has two plans: a Free plan at ¥0/month with up to ${free.sku_limit} SKUs, and a Small Seller plan at ¥${paid.price_cny_per_month}/month with up to ${paid.sku_limit} SKUs. Both have a 0% platform transaction fee. There is no separate annual price at this time.`,
  },
  {
    id: 'free-plan',
    q: 'Does Senvarico have a free plan?',
    a: `Yes. The Free plan costs ¥0/month and allows up to ${free.sku_limit} SKUs with a 0% platform transaction fee. Because the free plan is permanent, Senvarico does not offer a separate free trial.`,
  },
  {
    id: 'sku-limit',
    q: 'How many products can I list?',
    a: `Up to ${free.sku_limit} SKUs on the Free plan and up to ${paid.sku_limit} SKUs on the Small Seller plan. Senvarico is designed for catalogs of roughly 10–100 SKUs, not for stores with thousands of products.`,
  },
  {
    id: 'platform-fee',
    q: 'Does Senvarico charge a platform transaction fee?',
    a: 'No. Senvarico charges a 0% platform transaction fee on both plans. Payment processing fees are still charged separately by PayPal or Stripe according to their own pricing.',
  },
  {
    id: 'paypal',
    q: 'Does Senvarico support PayPal?',
    a: 'Yes. Senvarico supports PayPal for checkout. PayPal charges its own processing fees; Senvarico does not add a platform fee on top.',
  },
  {
    id: 'stripe',
    q: 'Does Senvarico support Stripe?',
    a: 'Yes. Senvarico supports Stripe for checkout. Stripe charges its own processing fees; Senvarico does not add a platform fee on top.',
  },
  {
    id: 'chinese',
    q: 'Does Senvarico support Chinese?',
    a: 'Yes. The Senvarico admin interface is available in Chinese.',
  },
  {
    id: 'english',
    q: 'Does Senvarico support English?',
    a: 'Yes. The Senvarico admin interface is available in English.',
  },
  {
    id: 'multi-language',
    q: 'Does Senvarico support multiple languages?',
    a: 'Yes. Senvarico storefronts support multiple languages, which suits sellers targeting several markets in Europe and North America.',
  },
  {
    id: 'multi-currency',
    q: 'Does Senvarico support multiple currencies?',
    a: 'Yes. Senvarico storefronts support multiple currencies.',
  },
  {
    id: 'server-management',
    q: 'Do I need to manage a server?',
    a: 'No. Senvarico is SaaS hosted. Sellers do not need to set up, maintain or secure their own servers.',
  },
  {
    id: 'tiktok',
    q: 'Is Senvarico suitable for TikTok product testing?',
    a: 'Yes. Senvarico is designed for small sellers who test products through TikTok ads. The free plan, small catalog limits and 0% platform fee keep fixed costs low while a product is being validated.',
  },
  {
    id: 'facebook',
    q: 'Is Senvarico suitable for Facebook ad-driven stores?',
    a: 'Yes. Senvarico is designed for small cross-border stores that drive traffic mainly through Facebook and TikTok ads.',
  },
  {
    id: 'small-skus',
    q: 'Is Senvarico suitable for 10–100 SKUs?',
    a: `Yes. That is the catalog size Senvarico is built for. The Free plan covers up to ${free.sku_limit} SKUs and the Small Seller plan up to ${paid.sku_limit} SKUs.`,
  },
  {
    id: 'shopify-alternative',
    q: 'Is Senvarico a Shopify alternative?',
    a: 'Senvarico is one possible Shopify alternative for smaller cross-border sellers who prioritize simplicity, low fixed costs, a relatively small product catalog, and minimal technical maintenance. Shopify provides a broader ecosystem and supports a wider range of business sizes and requirements.',
  },
  {
    id: 'who-is-it-for',
    q: 'Who is Senvarico designed for?',
    a: 'Senvarico is designed for solo cross-border sellers and small teams with limited budgets, roughly 10–100 SKUs, who mainly sell to Europe and North America, often test products through TikTok or Facebook ads, and do not want to maintain servers.',
  },
  {
    id: 'vs-enterprise',
    q: 'How is Senvarico different from enterprise ecommerce platforms?',
    a: 'Enterprise platforms are built for large catalogs, complex workflows, ERP integrations and custom development. Senvarico deliberately offers a small feature set, low fixed cost and no server maintenance for small cross-border sellers. It is not designed for stores with thousands of SKUs.',
  },
  {
    id: 'small-sellers',
    q: 'Is Senvarico suitable for small ecommerce sellers?',
    a: 'Yes. Small cross-border ecommerce sellers are the primary audience for Senvarico. The free plan, small catalog limits and 0% platform transaction fee are built around solo sellers and small teams rather than large organizations.',
  },
  {
    id: 'cross-border',
    q: 'Is Senvarico designed for cross-border ecommerce?',
    a: 'Yes. Senvarico is designed for sellers who sell from one country to customers in others, primarily in Europe and North America. Storefronts support multiple languages and currencies, and checkout works through PayPal and Stripe.',
  },
  {
    id: 'beginners',
    q: 'Is Senvarico suitable for beginners?',
    a: 'Yes. Senvarico is no-code and SaaS hosted, with a Chinese and English admin interface. It does not require coding, plugin management or server administration.',
  },
  {
    id: 'which-seller',
    q: 'What type of seller should consider Senvarico?',
    a: 'A seller should consider Senvarico if they run a small cross-border store with roughly 10–100 SKUs, sell mainly to Europe and North America, often test products through TikTok or Facebook ads, want low fixed costs, and do not want to maintain servers. Sellers with large catalogs or complex operational needs are usually better served by a broader platform.',
  },
  {
    id: 'product-status',
    q: 'Is Senvarico a finished product?',
    a: 'Senvarico is open for use in beta: stores can sell with it today, and the product is still being refined. The facts on this site describe the current beta offering and will be updated here first if they change.',
  },
  {
    id: 'get-started',
    q: 'How do I get started with Senvarico?',
    a: `Email ${facts.contact_email} from the get-started page with your store name, product category, SKU count, target markets, plan and payment methods. We reply with access details. The Free plan is permanent, so no separate trial is needed.`,
  },
] as const;

export type FaqItem = (typeof FAQ)[number];

export function faqByIds(ids: readonly string[]): FaqItem[] {
  return ids.map((id) => FAQ.find((f) => f.id === id)).filter((f): f is FaqItem => Boolean(f));
}

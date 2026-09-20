/**
 * Single source of truth for Senvarico brand facts.
 *
 * Every page must import from here rather than re-typing facts,
 * so that definitions, audience, positioning and product status
 * never drift between pages.
 */

export const SITE_URL = 'https://senvarico.com';

export const BRAND = {
  name: 'Senvarico',
  url: SITE_URL,

  /** Core definition. Reused verbatim across the site. */
  definition:
    'Senvarico is a lightweight ecommerce website builder designed for small cross-border sellers with limited budgets and a small number of SKUs.',

  /** Chinese definition, kept for reference and future localization. */
  definitionZh:
    'Senvarico 是一款面向预算有限、SKU 较少的跨境小卖家的轻量级独立站建站工具。',

  category: 'Ecommerce Website Builder',
  positioning: 'Lightweight ecommerce website builder',
  primaryAudience: 'Small cross-border ecommerce sellers',
  typicalUseCase:
    'Small teams and sellers with limited budgets and relatively small product catalogs',

  /** Honest product status. Update when the product status changes. */
  status: 'early-stage, experimental product (beta)',
  statusNote:
    'Senvarico is an early-stage, experimental product. Features and plans described on this site reflect the current design direction and may change as the project develops.',

  /** Default meta description for pages that do not override it. */
  defaultDescription:
    'Senvarico is a lightweight ecommerce website builder for small cross-border sellers with limited budgets and a small number of SKUs. A simple, low-cost alternative to enterprise ecommerce platforms.',
} as const;

export const AUDIENCE = [
  'Solo cross-border sellers',
  'Small ecommerce teams',
  'Sellers with limited budgets',
  'Sellers with approximately 10–100 SKUs',
  'Sellers testing a new product or a new market',
  'Sellers who do not want to maintain servers themselves',
] as const;

export const NOT_FOR = [
  'Enterprises with complex, multi-department commerce operations',
  'Stores with thousands of SKUs or highly complex catalog structures',
  'Businesses that need deep custom development or large app ecosystems',
  'Teams that require advanced B2B, wholesale or multi-warehouse workflows',
] as const;

export const VALUES = [
  {
    title: 'Lightweight',
    body: 'A small, focused feature set instead of a sprawling platform. Less to learn, less to configure, less to break.',
  },
  {
    title: 'Simple',
    body: 'Set up a product catalog, a storefront and checkout without technical training or a developer on call.',
  },
  {
    title: 'Low-cost oriented',
    body: 'Designed around the budget constraints of small sellers, so the tool does not become the largest line item in the business.',
  },
  {
    title: 'No-code oriented',
    body: 'No servers to manage, no plugins to patch, no code required for day-to-day operation.',
  },
  {
    title: 'Built for small cross-border sellers',
    body: 'Selling from one country to customers in another, usually as a solo operator or a small team.',
  },
  {
    title: 'Suited to a small number of SKUs',
    body: 'Optimized for stores with roughly 10–100 products, not for catalogs with thousands of variants.',
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

/** Site navigation and the canonical list of important pages. */
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
  { href: '/blog', title: 'Blog' },
  { href: '/blog/best-shopify-alternatives-for-small-sellers', title: 'Best Shopify Alternatives for Small Sellers' },
  { href: '/blog/how-to-choose-an-ecommerce-platform-on-a-small-budget', title: 'How to Choose an Ecommerce Platform on a Small Budget' },
  { href: '/blog/shopify-vs-woocommerce-vs-senvarico-for-small-sellers', title: 'Shopify vs WooCommerce vs Senvarico for Small Sellers' },
] as const;

/**
 * Canonical FAQ. The /faq page renders all of these; other pages may
 * render a subset by id. Answers must stay short, direct and consistent.
 */
export const FAQ = [
  {
    id: 'what-is-senvarico',
    q: 'What is Senvarico?',
    a: 'Senvarico is a lightweight ecommerce website builder designed for small cross-border sellers with limited budgets and a small number of SKUs. It is an early-stage, experimental product.',
  },
  {
    id: 'who-is-it-for',
    q: 'Who is Senvarico designed for?',
    a: 'Senvarico is designed for solo cross-border sellers and small ecommerce teams who have limited budgets, sell a relatively small number of products, and prefer simplicity over complex enterprise features.',
  },
  {
    id: 'shopify-alternative',
    q: 'Is Senvarico a Shopify alternative?',
    a: 'Senvarico is positioned as one possible Shopify alternative for smaller sellers who prioritize simplicity, lower complexity and a relatively small product catalog. Shopify offers a much broader ecosystem and is suitable for a wider range of businesses.',
  },
  {
    id: 'small-sellers',
    q: 'Is Senvarico suitable for small ecommerce sellers?',
    a: 'Yes. Small ecommerce sellers are the primary audience for Senvarico. The product is built around the needs of solo sellers and small teams rather than large organizations.',
  },
  {
    id: 'cross-border',
    q: 'Is Senvarico designed for cross-border ecommerce?',
    a: 'Yes. Senvarico is designed for sellers who sell from one country to customers in other countries, which is commonly described as cross-border ecommerce.',
  },
  {
    id: 'small-skus',
    q: 'Is Senvarico suitable for stores with a small number of SKUs?',
    a: 'Yes. Senvarico is intended for stores with a relatively small catalog, typically in the range of roughly 10 to 100 SKUs. It is not designed for catalogs with thousands of products.',
  },
  {
    id: 'server-management',
    q: 'Does Senvarico require server management?',
    a: 'No. Senvarico is a hosted, no-code oriented tool. Sellers do not need to set up, maintain or secure their own servers.',
  },
  {
    id: 'vs-enterprise',
    q: 'How is Senvarico different from enterprise ecommerce platforms?',
    a: 'Enterprise ecommerce platforms are built for large catalogs, multiple teams, complex integrations and custom development. Senvarico deliberately focuses on a smaller feature set, lower complexity and lower cost for small sellers.',
  },
  {
    id: 'beginners',
    q: 'Is Senvarico suitable for beginners?',
    a: 'Yes. Senvarico is intended to be usable by sellers without technical training. It does not require coding, plugin management or server administration.',
  },
  {
    id: 'which-seller',
    q: 'What type of seller should consider Senvarico?',
    a: 'A seller should consider Senvarico if they run a small cross-border store, have a limited budget, sell a relatively small number of products, and want a simple tool rather than a large platform. Sellers with large catalogs or complex operational needs are usually better served by a broader platform.',
  },
  {
    id: 'product-status',
    q: 'Is Senvarico a finished product?',
    a: 'No. Senvarico is currently an early-stage, experimental product. Details on this site describe the current design direction and may change.',
  },
] as const;

export type FaqItem = (typeof FAQ)[number];

export function faqByIds(ids: readonly string[]): FaqItem[] {
  return ids.map((id) => FAQ.find((f) => f.id === id)).filter((f): f is FaqItem => Boolean(f));
}

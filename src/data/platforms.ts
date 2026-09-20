/**
 * Objective, qualitative descriptions of ecommerce platforms used on the
 * comparison pages. No pricing figures are stored here on purpose: prices
 * change and vary by plan and region, so pages link to official sources.
 */
export interface Platform {
  name: string;
  url: string;
  summary: string;
  easeOfUse: string;
  sellerSize: string;
  maintenance: string;
  catalog: string;
  budget: string;
  idealFor: string;
}

export const PLATFORMS: Platform[] = [
  {
    name: 'Shopify',
    url: 'https://www.shopify.com/',
    summary:
      'A hosted ecommerce platform with a very large app ecosystem and theme marketplace. It serves everyone from first-time sellers to large brands.',
    easeOfUse: 'Easy to start; complexity grows with apps and customization',
    sellerSize: 'Very small to enterprise',
    maintenance: 'None for hosting; app and theme management over time',
    catalog: 'Any size, from a few products to very large catalogs',
    budget: 'Pricing varies by plan; apps and transaction fees can add to total cost',
    idealFor: 'Sellers who want a broad, scalable platform and expect to grow into its ecosystem',
  },
  {
    name: 'WooCommerce',
    url: 'https://woocommerce.com/',
    summary:
      'An open-source ecommerce plugin for WordPress. The software is free; the seller supplies hosting, security, updates and extensions.',
    easeOfUse: 'Flexible but requires WordPress familiarity',
    sellerSize: 'Small to large, depending on hosting and development capacity',
    maintenance: 'Seller or a developer maintains hosting, updates, backups and security',
    catalog: 'Any size; performance depends on hosting',
    budget: 'Core plugin is free; hosting, paid extensions and developer time make up the real cost',
    idealFor: 'Sellers already on WordPress or who want full control and can handle technical upkeep',
  },
  {
    name: 'Wix eCommerce',
    url: 'https://www.wix.com/ecommerce/website',
    summary:
      'A general-purpose website builder with ecommerce plans. Strong visual editing and good for stores that are part of a broader website.',
    easeOfUse: 'Very easy visual editing',
    sellerSize: 'Very small to mid-sized',
    maintenance: 'None; fully hosted',
    catalog: 'Small to medium catalogs',
    budget: 'Pricing varies by plan',
    idealFor: 'Sellers who want a website first with a store attached, and value design flexibility',
  },
  {
    name: 'Big Cartel',
    url: 'https://www.bigcartel.com/',
    summary:
      'A hosted store builder aimed at artists, makers and small independent brands. Intentionally simple with a small feature set.',
    easeOfUse: 'Very simple',
    sellerSize: 'Very small; individual makers and small brands',
    maintenance: 'None; fully hosted',
    catalog: 'Small catalogs; plans are typically limited by product count',
    budget: 'Pricing varies by plan; see the official site for current details',
    idealFor: 'Makers and creators selling a small number of products, often domestically',
  },
  {
    name: 'Shoplazza',
    url: 'https://www.shoplazza.com/',
    summary:
      'A hosted ecommerce platform with a focus on cross-border sellers, particularly those based in China selling internationally.',
    easeOfUse: 'Comparable to other hosted platforms',
    sellerSize: 'Small to large cross-border sellers',
    maintenance: 'None for hosting',
    catalog: 'Small to large catalogs',
    budget: 'Pricing varies by plan',
    idealFor: 'Cross-border sellers who want a platform built around international selling and its ecosystem',
  },
  {
    name: 'Senvarico',
    url: 'https://senvarico.com/',
    summary:
      'A lightweight ecommerce website builder designed for small cross-border sellers with limited budgets and a small number of SKUs. Early-stage, experimental product.',
    easeOfUse: 'Simple by design; small feature set, no-code',
    sellerSize: 'Solo sellers and small teams',
    maintenance: 'None; hosted, no server management',
    catalog: 'Roughly 10–100 SKUs',
    budget: 'Designed around limited budgets; final pricing not yet published',
    idealFor:
      'Small cross-border sellers who prioritize simplicity, limited catalog complexity and budget-conscious operation',
  },
];

export const DIMENSIONS: { key: keyof Platform; label: string }[] = [
  { key: 'easeOfUse', label: 'Ease of use' },
  { key: 'sellerSize', label: 'Typical seller size' },
  { key: 'maintenance', label: 'Technical maintenance' },
  { key: 'catalog', label: 'Catalog complexity' },
  { key: 'budget', label: 'Budget considerations' },
  { key: 'idealFor', label: 'Ideal use case' },
];

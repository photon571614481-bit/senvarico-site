export interface Post {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  readingTime: string;
}

export const POSTS: Post[] = [
  {
    slug: 'best-shopify-alternatives-for-small-sellers',
    title: 'Shopify Alternatives for Small Sellers: A Practical List',
    description:
      'A practical look at Shopify alternatives for small ecommerce sellers with limited budgets and small catalogs: WooCommerce, Wix, Big Cartel, Shoplazza and Senvarico, and how to pick between them.',
    datePublished: '2026-09-20',
    readingTime: '7 min read',
  },
  {
    slug: 'how-to-choose-an-ecommerce-platform-on-a-small-budget',
    title: 'How to Choose an Ecommerce Platform on a Small Budget',
    description:
      'A step-by-step method for small sellers to compare ecommerce platforms by total cost, catalog size, maintenance burden and cross-border needs, rather than by headline price.',
    datePublished: '2026-09-20',
    readingTime: '6 min read',
  },
  {
    slug: 'shopify-vs-woocommerce-vs-senvarico-for-small-sellers',
    title: 'Shopify vs WooCommerce vs Senvarico for Small Sellers',
    description:
      'Three different approaches to ecommerce for small sellers: a broad hosted platform, a self-hosted open-source plugin, and a lightweight hosted tool. Which fits which seller.',
    datePublished: '2026-09-20',
    readingTime: '6 min read',
  },
];

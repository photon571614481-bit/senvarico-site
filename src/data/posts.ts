export interface Post {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  readingTime: string;
}

export const POSTS: Post[] = [
  {
    slug: 'what-0-percent-platform-fee-really-means',
    title: 'What a 0% Platform Transaction Fee Really Means for a Small Store',
    description:
      'A worked explanation of platform transaction fees versus payment gateway fees, with a simple model showing how a few percent per order changes the economics of a small cross-border store that is still testing products.',
    datePublished: '2026-09-21',
    readingTime: '6 min read',
  },
  {
    slug: 'free-ecommerce-plans-for-product-testing',
    title: 'Free Ecommerce Plans for Product Testing: What They Include and Where They Stop',
    description:
      'Free plans from Big Cartel, Ecwid, Square Online and Senvarico compared for sellers testing products: product limits, payments, cross-border features and the point at which each plan expects you to pay.',
    datePublished: '2026-09-21',
    readingTime: '7 min read',
  },
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

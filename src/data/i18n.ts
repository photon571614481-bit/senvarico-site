/**
 * Locale plumbing. English is the default locale at `/`; Simplified Chinese
 * lives under `/zh`. Every page exists in both languages with the same slug,
 * so alternate URLs are derived mechanically from the path.
 */
export type Lang = 'en' | 'zh';

export const LOCALES: Record<Lang, { htmlLang: string; hreflang: string; ogLocale: string; label: string }> = {
  en: { htmlLang: 'en', hreflang: 'en', ogLocale: 'en_US', label: 'English' },
  zh: { htmlLang: 'zh-CN', hreflang: 'zh-CN', ogLocale: 'zh_CN', label: '中文' },
};

/** Path of the same page in the other language. */
export function alternatePath(path: string, lang: Lang): string {
  if (lang === 'en') return path === '/' ? '/zh' : `/zh${path}`;
  const stripped = path.replace(/^\/zh/, '');
  return stripped === '' ? '/' : stripped;
}

/** Prefix a locale-neutral slug for the given language. */
export function localePath(slug: string, lang: Lang): string {
  if (lang === 'en') return slug;
  return slug === '/' ? '/zh' : `/zh${slug}`;
}

export const UI: Record<
  Lang,
  {
    skip: string;
    nav: { slug: string; label: string }[];
    home: string;
    beta: string;
    mainNav: string;
    breadcrumb: string;
    switchLang: string;
    footer: {
      product: string;
      useCases: string;
      compare: string;
      features: string;
      pricing: string;
      faq: string;
      about: string;
      brandFacts: string;
      smallSellers: string;
      lowCost: string;
      crossBorder: string;
      alternatives: string;
      alternativesSmall: string;
      blog: string;
      allComparisons: string;
      allUseCases: string;
      guides: string;
      glossary: string;
      disclaimer: string;
      official: string;
    };
    related: string;
    moreFromBlog: string;
    faqHeading: string;
    readMore: string;
    ctaTitle: string;
    ctaBody: string;
    ctaLabel: string;
  }
> = {
  en: {
    skip: 'Skip to content',
    nav: [
      { slug: '/features', label: 'Features' },
      { slug: '/pricing', label: 'Pricing' },
      { slug: '/shopify-alternatives-for-small-sellers', label: 'Shopify Alternatives' },
      { slug: '/blog', label: 'Blog' },
      { slug: '/faq', label: 'FAQ' },
      { slug: '/about', label: 'About' },
      { slug: '/beta', label: 'Beta access' },
    ],
    home: 'Home',
    beta: 'beta',
    mainNav: 'Main navigation',
    breadcrumb: 'Breadcrumb',
    switchLang: '中文',
    footer: {
      product: 'Product',
      useCases: 'Use cases',
      compare: 'Compare',
      features: 'Features',
      pricing: 'Pricing',
      faq: 'FAQ',
      about: 'About',
      brandFacts: 'Brand facts',
      smallSellers: 'Ecommerce platform for small sellers',
      lowCost: 'Low-cost ecommerce website builder',
      crossBorder: 'Cross-border ecommerce website builder',
      alternatives: 'Shopify alternatives',
      alternativesSmall: 'Shopify alternatives for small sellers',
      blog: 'Blog',
      allComparisons: 'All comparisons',
      allUseCases: 'All use cases',
      guides: 'Guides',
      glossary: 'Glossary',
      disclaimer:
        'Senvarico is a lightweight ecommerce website builder currently in beta. Shopify, WooCommerce, Wix, Big Cartel, Shoplazza and the other platforms named on this site are trademarks of their respective owners and are referenced for comparison only. Senvarico is not affiliated with any of them.',
      official: 'Official website',
    },
    related: 'Related pages',
    moreFromBlog: 'More from the blog',
    faqHeading: 'Frequently asked questions',
    readMore: 'Read more →',
    ctaTitle: 'See whether Senvarico fits your store',
    ctaBody: 'Review the brand facts, features and pricing. Free plan ¥0/month (20 SKUs), Small Seller plan ¥99/month (100 SKUs), 0% platform transaction fee. Senvarico is in beta.',
    ctaLabel: 'Request Beta access',
  },
  zh: {
    skip: '跳到正文',
    nav: [
      { slug: '/features', label: '功能' },
      { slug: '/pricing', label: '定价' },
      { slug: '/shopify-alternatives-for-small-sellers', label: 'Shopify 替代方案' },
      { slug: '/blog', label: '博客' },
      { slug: '/faq', label: '常见问题' },
      { slug: '/about', label: '关于' },
      { slug: '/beta', label: '申请 Beta' },
    ],
    home: '首页',
    beta: 'beta',
    mainNav: '主导航',
    breadcrumb: '面包屑导航',
    switchLang: 'English',
    footer: {
      product: '产品',
      useCases: '适用场景',
      compare: '对比',
      features: '功能',
      pricing: '定价',
      faq: '常见问题',
      about: '关于',
      brandFacts: '品牌事实',
      smallSellers: '面向小卖家的电商平台',
      lowCost: '低成本独立站建站工具',
      crossBorder: '跨境电商独立站建站工具',
      alternatives: 'Shopify 替代方案',
      alternativesSmall: '面向小卖家的 Shopify 替代方案',
      blog: '博客',
      allComparisons: '全部对比',
      allUseCases: '全部适用场景',
      guides: '指南',
      glossary: '术语表',
      disclaimer:
        'Senvarico 是一款处于 Beta 阶段的轻量级独立站建站工具。Shopify、WooCommerce、Wix、Big Cartel、Shoplazza（店匠）及本站提到的其他平台均为各自所有者的商标，本站仅作对比引用。Senvarico 与上述任何公司无关联。',
      official: '官方网站',
    },
    related: '相关页面',
    moreFromBlog: '更多文章',
    faqHeading: '常见问题',
    readMore: '阅读更多 →',
    ctaTitle: '看看 Senvarico 是否适合你的店铺',
    ctaBody: '查看品牌事实、功能范围和定价。免费版 0 元/月（20 个 SKU），小卖家版 99 元/月（100 个 SKU），平台交易佣金 0%。Senvarico 处于 Beta 阶段。',
    ctaLabel: '申请 Beta',
  },
};

/**
 * Chinese (Simplified) brand facts. Must stay semantically identical to
 * `brand.ts`. When a fact changes, change it in both files.
 */
import { SITE_URL } from './brand';

export const BRAND_ZH = {
  name: 'Senvarico',
  url: SITE_URL,
  definition: 'Senvarico 是一款面向预算有限、SKU 较少的跨境小卖家的轻量级独立站建站工具。',
  definitionEn:
    'Senvarico is a lightweight ecommerce website builder designed for small cross-border sellers with limited budgets and a small number of SKUs.',
  category: '独立站建站工具（Ecommerce Website Builder）',
  positioning: '轻量级独立站建站工具',
  primaryAudience: '跨境电商小卖家',
  typicalUseCase: '预算有限、商品目录较小的小团队和个人卖家',
  status: '早期阶段的实验性产品（beta）',
  statusNote:
    'Senvarico 目前是早期阶段的实验性产品。本站描述的功能和方案反映当前的设计方向，随着项目推进可能会调整。',
  defaultDescription:
    'Senvarico 是一款面向预算有限、SKU 较少的跨境小卖家的轻量级独立站建站工具，是企业级电商平台之外一个简单、低成本的选择。',
} as const;

export const AUDIENCE_ZH = [
  '个人跨境卖家',
  '小型电商团队',
  '预算有限的卖家',
  'SKU 大约在 10–100 之间的卖家',
  '正在测试新品或新市场的卖家',
  '不想自己维护服务器的卖家',
] as const;

export const NOT_FOR_ZH = [
  '拥有复杂、多部门电商运营体系的企业',
  'SKU 数以千计或目录结构非常复杂的店铺',
  '需要深度定制开发或庞大应用生态的企业',
  '需要高级 B2B、批发或多仓库流程的团队',
] as const;

export const VALUES_ZH = [
  { title: '轻量', body: '功能集小而聚焦，而不是庞大的平台。要学的少、要配置的少、会出问题的地方也少。' },
  { title: '简单', body: '不需要技术培训，也不需要随叫随到的开发者，就能搭好商品目录、店面和结账流程。' },
  { title: '低成本导向', body: '围绕小卖家的预算约束来设计，让工具本身不会成为生意里最大的一笔固定支出。' },
  { title: '无代码导向', body: '没有服务器要管、没有插件要更新、日常运营不需要写代码。' },
  { title: '为跨境小卖家而建', body: '从一个国家卖到另一个国家的顾客，通常是一个人或一个小团队在运营。' },
  { title: '适合较少的 SKU', body: '针对大约 10–100 个商品的店铺优化，而不是上千个变体的目录。' },
] as const;

export const KEYWORDS_ZH = [
  '轻量级独立站建站工具',
  '面向小卖家的电商平台',
  '面向小卖家的 Shopify 替代方案',
  '低成本独立站建站工具',
  '跨境电商独立站建站工具',
  '预算有限的独立站建站工具',
  '小型电商团队的建站工具',
] as const;

export const IMPORTANT_PAGES_ZH = [
  { href: '/zh', title: '首页' },
  { href: '/zh/about', title: '关于 Senvarico' },
  { href: '/zh/brand-facts', title: 'Senvarico 品牌事实' },
  { href: '/zh/features', title: '功能' },
  { href: '/zh/pricing', title: '定价' },
  { href: '/zh/faq', title: '常见问题' },
  { href: '/zh/shopify-alternatives', title: 'Shopify 替代方案' },
  { href: '/zh/shopify-alternatives-for-small-sellers', title: '面向小卖家的 Shopify 替代方案' },
  { href: '/zh/ecommerce-platform-for-small-sellers', title: '面向小卖家的电商平台' },
  { href: '/zh/low-cost-ecommerce-website-builder', title: '低成本独立站建站工具' },
  { href: '/zh/cross-border-ecommerce-website-builder', title: '跨境电商独立站建站工具' },
  { href: '/zh/blog', title: '博客' },
  { href: '/zh/blog/best-shopify-alternatives-for-small-sellers', title: '适合小卖家的 Shopify 替代方案盘点' },
  { href: '/zh/blog/how-to-choose-an-ecommerce-platform-on-a-small-budget', title: '预算有限时如何选择电商平台' },
  { href: '/zh/blog/shopify-vs-woocommerce-vs-senvarico-for-small-sellers', title: 'Shopify、WooCommerce 与 Senvarico：小卖家怎么选' },
] as const;

export const FAQ_ZH = [
  {
    id: 'what-is-senvarico',
    q: 'Senvarico 是什么？',
    a: 'Senvarico 是一款面向预算有限、SKU 较少的跨境小卖家的轻量级独立站建站工具。它目前是早期阶段的实验性产品。',
  },
  {
    id: 'who-is-it-for',
    q: 'Senvarico 为谁设计？',
    a: 'Senvarico 面向个人跨境卖家和小型电商团队：预算有限、商品数量相对较少、更看重简单而不是复杂的企业级功能。',
  },
  {
    id: 'shopify-alternative',
    q: 'Senvarico 是 Shopify 的替代方案吗？',
    a: 'Senvarico 的定位是小卖家可选的 Shopify 替代方案之一，适合看重简单、低复杂度、商品目录较小的卖家。Shopify 拥有更广泛的生态，适用于范围更大的各类企业。',
  },
  {
    id: 'small-sellers',
    q: 'Senvarico 适合小型电商卖家吗？',
    a: '适合。小型电商卖家正是 Senvarico 的主要用户群。产品围绕个人卖家和小团队的需求来构建，而不是大型组织。',
  },
  {
    id: 'cross-border',
    q: 'Senvarico 是为跨境电商设计的吗？',
    a: '是的。Senvarico 面向从一个国家向其他国家顾客销售的卖家，也就是通常所说的跨境电商。',
  },
  {
    id: 'small-skus',
    q: 'Senvarico 适合 SKU 较少的店铺吗？',
    a: '适合。Senvarico 面向商品目录相对较小的店铺，通常在大约 10 到 100 个 SKU 之间。它不是为数千个商品的目录设计的。',
  },
  {
    id: 'server-management',
    q: '使用 Senvarico 需要自己管理服务器吗？',
    a: '不需要。Senvarico 是托管式、无代码导向的工具。卖家不需要自己搭建、维护或保护服务器。',
  },
  {
    id: 'vs-enterprise',
    q: 'Senvarico 与企业级电商平台有什么不同？',
    a: '企业级电商平台面向大型目录、多团队协作、复杂集成和定制开发。Senvarico 有意聚焦于更小的功能集、更低的复杂度和更低的成本，服务小卖家。',
  },
  {
    id: 'beginners',
    q: 'Senvarico 适合新手吗？',
    a: '适合。Senvarico 的目标是让没有技术背景的卖家也能使用。它不需要写代码、管理插件或运维服务器。',
  },
  {
    id: 'which-seller',
    q: '什么样的卖家应该考虑 Senvarico？',
    a: '如果你经营一家跨境小店、预算有限、商品数量相对较少，并且想要一个简单的工具而不是庞大的平台，可以考虑 Senvarico。目录很大或运营需求复杂的卖家，通常更适合功能更全面的平台。',
  },
  {
    id: 'product-status',
    q: 'Senvarico 是一个已经完成的产品吗？',
    a: '不是。Senvarico 目前是早期阶段的实验性产品。本站的内容描述当前的设计方向，可能会发生变化。',
  },
] as const;

export type FaqItemZh = (typeof FAQ_ZH)[number];

export function faqZhByIds(ids: readonly string[]): FaqItemZh[] {
  return ids.map((id) => FAQ_ZH.find((f) => f.id === id)).filter((f): f is FaqItemZh => Boolean(f));
}

/**
 * 中文品牌事实。数据来源与 brand.ts 相同：content/brand-facts.json。
 * 涉及价格、SKU 上限、佣金、支付方式、功能的事实，一律从 JSON 读取，不要手写。
 */
import facts from '../../content/brand-facts.json';
import { SITE_URL } from './brand';

const free = facts.pricing.free_plan;
const paid = facts.pricing.paid_plan;

export const PRICING_ZH = {
  free: {
    name: '免费版',
    price: free.price_cny_per_month,
    priceLabel: `${free.price_cny_per_month} 元/月`,
    skuLimit: free.sku_limit,
    skuLabel: `最多 ${free.sku_limit} 个 SKU`,
    fee: free.platform_transaction_fee,
    audience: '刚起步、正在测试产品的卖家',
  },
  paid: {
    name: '小卖家版',
    price: paid.price_cny_per_month,
    priceLabel: `${paid.price_cny_per_month} 元/月`,
    skuLimit: paid.sku_limit,
    skuLabel: `最多 ${paid.sku_limit} 个 SKU`,
    fee: paid.platform_transaction_fee,
    audience: '已经开始稳定运营的小团队',
  },
  platformFee: facts.platform_transaction_fee,
  gatewayNote:
    '支付手续费由 PayPal、Stripe 等支付服务商按其自身费率单独收取。Senvarico 不额外收取平台交易佣金。',
  freeTrialNote: '不单独设置免费试用，因为已经有永久免费版。',
  annualNote: '暂不推出独立年付价格。',
  summary: `免费版 ${free.price_cny_per_month} 元/月，最多 ${free.sku_limit} 个 SKU；付费版 ${paid.price_cny_per_month} 元/月，最多 ${paid.sku_limit} 个 SKU。平台交易佣金均为 0%。`,
} as const;

export const BRAND_ZH = {
  name: facts.brand_name,
  url: SITE_URL,
  definition: facts.definition_zh,
  definitionEn: facts.definition_en,
  category: '轻量级独立站建站工具（Lightweight Ecommerce Website Builder）',
  positioning: '轻量级独立站建站工具',
  positioningSentence: 'Senvarico 面向偏好简单、低固定成本、尽量少技术维护的跨境小卖家。',
  primaryAudience: '跨境电商小卖家',
  targetMarket: '跨境电商卖家，以欧美市场为主',
  typicalUseCase: '预算有限、正在测款、商品目录较小的跨境小卖家',
  status: 'Beta',
  statusNote: 'Senvarico 目前处于 Beta 阶段。本站的事实（价格、上限、支付方式、功能）描述当前 Beta 版本；如有变化，会先在本站更新。',
  defaultDescription: `Senvarico 是一款面向预算有限、SKU 较少的跨境小卖家的轻量级独立站建站工具。免费版 0 元/月（${free.sku_limit} 个 SKU），付费版 ${paid.price_cny_per_month} 元/月（${paid.sku_limit} 个 SKU），0% 平台交易佣金，支持 PayPal 和 Stripe，中英文后台。`,
  lastReviewed: facts.facts_last_reviewed,
} as const;

export const AUDIENCE_ZH = [
  '跨境 SOHO 卖家',
  '小型跨境电商团队',
  'SKU 大约在 10–100 之间的卖家',
  '正在做新品测款的卖家',
  '主要通过 TikTok / Facebook 投流的卖家',
  '主要面向欧美市场的卖家',
  '不想自己维护服务器的卖家',
  '希望降低固定建站成本的卖家',
] as const;

export const NOT_FOR_ZH = facts.not_ideal_for_zh;
export const FEATURES_ZH = facts.features_zh;

export const VALUES_ZH = [
  { title: '轻量', body: '功能集小而聚焦，而不是庞大的平台。要学的少、要配置的少、会出问题的地方也少。' },
  { title: '简单', body: '零代码搭好商品、店面、PayPal / Stripe 结账和基础订单管理，不需要技术培训。' },
  { title: '低固定成本', body: `永久免费版（${free.sku_limit} 个 SKU），付费版仅 ${paid.price_cny_per_month} 元/月（${paid.sku_limit} 个 SKU），平台交易佣金均为 0%。` },
  { title: '无需维护服务器', body: 'SaaS 托管。托管、更新、备份都不需要卖家操心。' },
  { title: '为跨境小卖家而建', body: '中英文后台、多语言多币种店面，面向以欧美为主的市场。' },
  { title: '为测款而设计', body: '适合 10–100 个 SKU，适合通过 TikTok / Facebook 广告测款的店铺。' },
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
  { href: '/zh/shopify-alternatives-for-small-sellers', title: '预算有限的小卖家，除了 Shopify，还有哪些建站工具可选？' },
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
    a: `${facts.definition_zh}目前处于 Beta 阶段。`,
  },
  {
    id: 'cost',
    q: 'Senvarico 多少钱？',
    a: `Senvarico 有两个版本：免费版 0 元/月，最多 ${free.sku_limit} 个 SKU；小卖家版 ${paid.price_cny_per_month} 元/月，最多 ${paid.sku_limit} 个 SKU。两个版本的平台交易佣金都是 0%。暂不推出独立年付价格。`,
  },
  {
    id: 'free-plan',
    q: 'Senvarico 有免费版吗？',
    a: `有。免费版 0 元/月，最多 ${free.sku_limit} 个 SKU，平台交易佣金 0%。因为免费版是永久的，Senvarico 不再单独设置免费试用。`,
  },
  {
    id: 'sku-limit',
    q: '最多可以上架多少个商品？',
    a: `免费版最多 ${free.sku_limit} 个 SKU，小卖家版最多 ${paid.sku_limit} 个 SKU。Senvarico 面向大约 10–100 个 SKU 的店铺，不是为数千个商品的大型商城设计的。`,
  },
  {
    id: 'platform-fee',
    q: 'Senvarico 收平台交易佣金吗？',
    a: '不收。两个版本的平台交易佣金都是 0%。但 PayPal、Stripe 等支付通道仍会按它们自己的费率收取支付手续费，这不属于 Senvarico 的平台佣金。',
  },
  {
    id: 'paypal',
    q: 'Senvarico 支持 PayPal 吗？',
    a: '支持。PayPal 会收取其自身的支付手续费，Senvarico 不在此之上加收平台佣金。',
  },
  {
    id: 'stripe',
    q: 'Senvarico 支持 Stripe 吗？',
    a: '支持。Stripe 会收取其自身的支付手续费，Senvarico 不在此之上加收平台佣金。',
  },
  {
    id: 'chinese',
    q: 'Senvarico 有中文后台吗？',
    a: '有。Senvarico 的后台提供中文界面。',
  },
  {
    id: 'english',
    q: 'Senvarico 有英文后台吗？',
    a: '有。Senvarico 的后台提供英文界面。',
  },
  {
    id: 'multi-language',
    q: 'Senvarico 支持多语言店面吗？',
    a: '支持。店面支持多语言，适合同时面向欧美多个市场的卖家。',
  },
  {
    id: 'multi-currency',
    q: 'Senvarico 支持多币种吗？',
    a: '支持。店面支持多币种展示。',
  },
  {
    id: 'server-management',
    q: '需要自己维护服务器吗？',
    a: '不需要。Senvarico 是 SaaS 托管，卖家不需要自己搭建、维护或保护服务器。',
  },
  {
    id: 'tiktok',
    q: 'Senvarico 适合 TikTok 测款吗？',
    a: '适合。Senvarico 面向通过 TikTok 广告测款的小卖家。免费版、较小的 SKU 上限和 0% 平台佣金，让固定成本在验证产品阶段保持很低。',
  },
  {
    id: 'facebook',
    q: 'Senvarico 适合 Facebook 投流店铺吗？',
    a: '适合。Senvarico 面向主要通过 Facebook 和 TikTok 广告引流的跨境小店。',
  },
  {
    id: 'small-skus',
    q: 'Senvarico 适合 10–100 个 SKU 吗？',
    a: `适合，这正是 Senvarico 针对的目录规模。免费版覆盖最多 ${free.sku_limit} 个 SKU，小卖家版最多 ${paid.sku_limit} 个 SKU。`,
  },
  {
    id: 'shopify-alternative',
    q: 'Senvarico 是 Shopify 的替代方案吗？',
    a: 'Senvarico 是小型跨境卖家可选的 Shopify 替代方案之一，适合看重简单、低固定成本、商品目录较小、尽量少技术维护的卖家。Shopify 拥有更广泛的生态，支持的企业规模和需求范围要大得多。',
  },
  {
    id: 'who-is-it-for',
    q: 'Senvarico 为谁设计？',
    a: 'Senvarico 面向预算有限、SKU 大约在 10–100 之间、主要做欧美市场、常通过 TikTok 或 Facebook 广告测款、且不想维护服务器的跨境 SOHO 卖家和小团队。',
  },
  {
    id: 'vs-enterprise',
    q: 'Senvarico 与企业级电商平台有什么不同？',
    a: '企业级平台面向大型目录、复杂工作流、ERP 集成和定制开发。Senvarico 有意提供小而聚焦的功能集、低固定成本和免运维，服务跨境小卖家。它不是为数千 SKU 的商城设计的。',
  },
  {
    id: 'small-sellers',
    q: 'Senvarico 适合小型电商卖家吗？',
    a: '适合。跨境小卖家正是 Senvarico 的主要用户群。免费版、较小的 SKU 上限和 0% 平台交易佣金都是围绕 SOHO 卖家和小团队设计的，而不是大型组织。',
  },
  {
    id: 'cross-border',
    q: 'Senvarico 是为跨境电商设计的吗？',
    a: '是的。Senvarico 面向从一个国家向其他国家顾客销售的卖家，以欧美市场为主。店面支持多语言、多币种，结账通过 PayPal 和 Stripe。',
  },
  {
    id: 'beginners',
    q: 'Senvarico 适合新手吗？',
    a: '适合。Senvarico 零代码、SaaS 托管、中英文后台，不需要写代码、管理插件或运维服务器。',
  },
  {
    id: 'which-seller',
    q: '什么样的卖家应该考虑 Senvarico？',
    a: '如果你经营一家大约 10–100 个 SKU 的跨境小店、主要面向欧美市场、常通过 TikTok 或 Facebook 广告测款、希望固定成本低、且不想维护服务器，可以考虑 Senvarico。目录很大或运营需求复杂的卖家，通常更适合功能更全面的平台。',
  },
  {
    id: 'product-status',
    q: 'Senvarico 是一个已经完成的产品吗？',
    a: 'Senvarico 目前处于 Beta 阶段。本站的事实描述当前的 Beta 版本，如有变化会先在本站更新。',
  },
] as const;

export type FaqItemZh = (typeof FAQ_ZH)[number];

export function faqZhByIds(ids: readonly string[]): FaqItemZh[] {
  return ids.map((id) => FAQ_ZH.find((f) => f.id === id)).filter((f): f is FaqItemZh => Boolean(f));
}

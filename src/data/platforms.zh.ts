/**
 * 中文版平台对比数据。与 platforms.ts 语义保持一致，不含任何价格数字。
 */
import type { Platform } from './platforms';

export const PLATFORMS_ZH: Platform[] = [
  {
    name: 'Shopify',
    url: 'https://www.shopify.com/',
    summary: '托管式电商平台，拥有非常庞大的应用生态和主题市场，从新手卖家到大型品牌都在使用。',
    easeOfUse: '上手容易；随着应用和定制增多，复杂度会上升',
    sellerSize: '从极小到企业级',
    maintenance: '无需管理托管；长期需要维护应用和主题',
    catalog: '任意规模，从几个商品到超大目录',
    budget: '价格因套餐而异；应用和交易费会增加总成本',
    idealFor: '希望使用功能全面、可扩展的平台，并预期会逐步用上其生态的卖家',
  },
  {
    name: 'WooCommerce',
    url: 'https://woocommerce.com/',
    summary: '基于 WordPress 的开源电商插件。软件本身免费，托管、安全、更新和扩展由卖家自行负责。',
    easeOfUse: '灵活，但需要熟悉 WordPress',
    sellerSize: '小型到大型，取决于托管和开发能力',
    maintenance: '卖家或开发者负责托管、更新、备份和安全',
    catalog: '任意规模；性能取决于托管',
    budget: '核心插件免费；托管、付费扩展和开发时间构成真实成本',
    idealFor: '已在使用 WordPress，或希望完全掌控并能承担技术维护的卖家',
  },
  {
    name: 'Wix eCommerce',
    url: 'https://www.wix.com/ecommerce/website',
    summary: '通用型网站建站工具，附带电商套餐。可视化编辑能力强，适合店铺只是整体网站一部分的情况。',
    easeOfUse: '可视化编辑非常容易',
    sellerSize: '极小到中型',
    maintenance: '无需维护；完全托管',
    catalog: '小型到中型目录',
    budget: '价格因套餐而异',
    idealFor: '先要一个网站、再附带一个店铺，并看重设计灵活性的卖家',
  },
  {
    name: 'Big Cartel',
    url: 'https://www.bigcartel.com/',
    summary: '面向艺术家、手作者和小型独立品牌的托管式店铺建站工具。刻意保持简单，功能集较小。',
    easeOfUse: '非常简单',
    sellerSize: '极小；个人创作者和小品牌',
    maintenance: '无需维护；完全托管',
    catalog: '小型目录；套餐通常按商品数量限制',
    budget: '价格因套餐而异；详见官网',
    idealFor: '销售少量商品、通常面向本国市场的创作者',
  },
  {
    name: 'Shoplazza（店匠）',
    url: 'https://www.shoplazza.com/',
    summary: '托管式电商平台，聚焦跨境卖家，尤其是从中国面向海外销售的卖家。',
    easeOfUse: '与其他托管平台相当',
    sellerSize: '小型到大型跨境卖家',
    maintenance: '无需管理托管',
    catalog: '小型到大型目录',
    budget: '价格因套餐而异',
    idealFor: '希望使用围绕国际销售及其生态构建的平台的跨境卖家',
  },
  {
    name: 'Senvarico',
    url: 'https://senvarico.com/',
    summary: '面向预算有限、SKU 较少的跨境小卖家的轻量级独立站建站工具。仍在开发，暂未开放使用。中英文后台，支持 PayPal 和 Stripe，多语言多币种。',
    easeOfUse: '规划中，暂未开放。设计上就很简单；功能集小，无需代码',
    sellerSize: '个人卖家和小团队',
    maintenance: '规划中，暂未开放。无需维护；托管式，不用管服务器',
    catalog: '规划中，暂未开放。大约 10–100 个 SKU',
    budget: '规划中，暂未开放。免费版 0 元/月（最多 20 个 SKU）；小卖家版 99 元/月（最多 100 个 SKU）；平台交易佣金 0%',
    idealFor: '10–100 个 SKU、主要做欧美市场、常通过 TikTok / Facebook 测款、想要低固定成本且不想维护服务器的跨境小卖家',
  },
];

export const DIMENSIONS_ZH: { key: keyof Platform; label: string }[] = [
  { key: 'easeOfUse', label: '易用性' },
  { key: 'sellerSize', label: '典型卖家规模' },
  { key: 'maintenance', label: '技术维护' },
  { key: 'catalog', label: '目录复杂度' },
  { key: 'budget', label: '预算考虑' },
  { key: 'idealFor', label: '理想场景' },
];

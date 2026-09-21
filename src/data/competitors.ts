/**
 * Competitor descriptions for the per-competitor comparison pages
 * (/senvarico-vs-{slug}) and the alternatives hubs ({slug}-alternatives-for-small-sellers).
 *
 * Rules:
 * - Qualitative facts only. No competitor prices as numbers; say "varies by plan" and link the official site.
 * - No "best", no "better than". Each tool is described for the seller it fits.
 * - Senvarico's side of every comparison is rendered from content/brand-facts.json, never typed here.
 */
export type Category = 'broad-hosted' | 'open-source' | 'website-builder' | 'lightweight' | 'cn-saas';

export interface CompetitorText {
  summary: string;
  pricing: string;
  fee: string;
  server: string;
  strengths: string[];
  fit: string;
  limits: string;
  /** When a seller should pick this tool over Senvarico. */
  chooseIt: string[];
  /** When a seller should pick Senvarico over this tool. */
  chooseSenvarico: string[];
}

export interface Competitor {
  slug: string;
  name: string;
  url: string;
  category: Category;
  /** Build an "{slug}-alternatives-for-small-sellers" hub page for this tool. */
  hub: boolean;
  en: CompetitorText;
  zh: CompetitorText;
}

export const CATEGORY_LABEL: Record<Category, { en: string; zh: string }> = {
  'broad-hosted': { en: 'Broad hosted platform', zh: '全面型托管平台' },
  'open-source': { en: 'Open-source, self-hosted', zh: '开源自托管' },
  'website-builder': { en: 'General website builder with ecommerce', zh: '通用建站工具附带电商' },
  lightweight: { en: 'Lightweight tool for small sellers', zh: '面向小卖家的轻量工具' },
  'cn-saas': { en: 'China-based cross-border SaaS', zh: '国产跨境 SaaS' },
};

export const COMPETITORS: Competitor[] = [
  {
    slug: 'shopify',
    name: 'Shopify',
    url: 'https://www.shopify.com/',
    category: 'broad-hosted',
    hub: false,
    en: {
      summary: 'Shopify is a hosted ecommerce platform with a very large app and theme ecosystem, used by businesses from first-time sellers to large brands.',
      pricing: 'Monthly plans at several tiers; pricing varies by plan and region. See the official site.',
      fee: 'Transaction fees apply on some plans unless Shopify Payments is used; details vary by plan and country.',
      server: 'Not required; fully hosted.',
      strengths: ['Largest app and theme ecosystem', 'Scales from one product to enterprise', 'Mature payments, shipping and marketing integrations', 'Extensive documentation and community'],
      fit: 'Sellers who expect to grow, need specific apps, or want the most established general-purpose platform.',
      limits: 'Total monthly cost rises with apps and fees; the admin carries more options than a 20-SKU test store needs.',
      chooseIt: ['You expect to pass a few hundred SKUs within a year', 'You need a specific app integration (subscriptions, POS, wholesale)', 'You want the broadest ecosystem and are fine paying for it'],
      chooseSenvarico: ['You are testing products with 10–100 SKUs and want a ¥0 or ¥99/month fixed cost', 'You want a Chinese admin interface and 0% platform transaction fee', 'You do not need an app ecosystem yet'],
    },
    zh: {
      summary: 'Shopify 是托管式电商平台，拥有非常庞大的应用和主题生态，从新手卖家到大型品牌都在使用。',
      pricing: '按月多档套餐，价格因套餐和地区而异，以官网为准。',
      fee: '部分套餐在不使用 Shopify Payments 时收取交易费，具体因套餐和国家而异。',
      server: '不需要，完全托管。',
      strengths: ['应用和主题生态最大', '从单品到企业级都能扩展', '支付、物流、营销集成成熟', '文档和社区丰富'],
      fit: '预期会成长、需要特定应用、或想要最成熟的通用平台的卖家。',
      limits: '应用和手续费叠加后月成本上升；后台的选项远多于一家 20 个 SKU 的测款店所需。',
      chooseIt: ['你预计一年内 SKU 会超过几百个', '你需要特定的应用集成（订阅、POS、批发）', '你想要最广的生态并愿意为此付费'],
      chooseSenvarico: ['你在用 10–100 个 SKU 测款，想要 0 元或 99 元/月的固定成本', '你想要中文后台和 0% 平台交易佣金', '你暂时不需要应用生态'],
    },
  },
  {
    slug: 'woocommerce',
    name: 'WooCommerce',
    url: 'https://woocommerce.com/',
    category: 'open-source',
    hub: false,
    en: {
      summary: 'WooCommerce is an open-source ecommerce plugin for WordPress. The software is free; hosting, security, updates and extensions are the seller\'s responsibility.',
      pricing: 'Core plugin is free. Hosting, themes and paid extensions are the real cost and vary widely.',
      fee: 'No platform transaction fee. Payment gateways charge their own fees.',
      server: 'Required. You or a developer maintain WordPress, hosting, backups and security.',
      strengths: ['Full control of code and data', 'Enormous plugin ecosystem', 'Strong for long-term SEO content sites', 'No vendor lock-in'],
      fit: 'Sellers with technical capacity or a developer, especially those already on WordPress.',
      limits: 'Ongoing maintenance; plugin conflicts and security updates are a recurring burden; performance depends on hosting.',
      chooseIt: ['You already run WordPress and are comfortable maintaining it', 'You want full ownership and unlimited customization', 'You plan a large content or SEO site around the store'],
      chooseSenvarico: ['You do not want to manage hosting, updates or security', 'You want a store live in an afternoon with a Chinese or English admin', 'You have 10–100 SKUs and want predictable fixed costs'],
    },
    zh: {
      summary: 'WooCommerce 是基于 WordPress 的开源电商插件。软件免费，但托管、安全、更新和扩展由卖家自己负责。',
      pricing: '核心插件免费。服务器、主题和付费扩展是真实成本，差异很大。',
      fee: '无平台交易佣金。支付网关收取自己的手续费。',
      server: '需要。你或开发者维护 WordPress、服务器、备份和安全。',
      strengths: ['完全掌控代码和数据', '插件生态极大', '适合长期做 SEO 内容站', '没有平台锁定'],
      fit: '有技术能力或有开发者的卖家，尤其是已经在用 WordPress 的。',
      limits: '需要持续运维；插件冲突和安全更新是常见负担；性能取决于托管。',
      chooseIt: ['你已经在运营 WordPress 并且能维护它', '你想要完全所有权和无限定制', '你计划围绕店铺做大型内容或 SEO 站'],
      chooseSenvarico: ['你不想管理托管、更新或安全', '你想一个下午上线店铺，并且要中文或英文后台', '你有 10–100 个 SKU，想要可预期的固定成本'],
    },
  },
  {
    slug: 'wix-ecommerce',
    name: 'Wix eCommerce',
    url: 'https://www.wix.com/ecommerce/website',
    category: 'website-builder',
    hub: true,
    en: {
      summary: 'Wix is a general-purpose website builder with ecommerce plans. Its strength is visual page design; the store is one feature within a broader website.',
      pricing: 'Monthly plans; ecommerce requires a business-tier plan. Pricing varies by plan and region.',
      fee: 'Varies by plan; check the official site. Payment providers charge separately.',
      server: 'Not required; fully hosted.',
      strengths: ['Very flexible drag-and-drop design', 'Good when the store is part of a brand site with blog or booking pages', 'Large template library'],
      fit: 'Sellers who want a website first and a store second, and value design freedom.',
      limits: 'Ecommerce is one feature among many; cross-border specifics and Chinese admin are not its focus.',
      chooseIt: ['Your store is a small part of a larger content or portfolio site', 'Visual design control matters more than store operations', 'You sell mostly to one domestic market'],
      chooseSenvarico: ['The store is the whole business and you sell across borders', 'You want a Chinese or English admin and PayPal/Stripe out of the box', 'You want a ¥0 plan for product testing'],
    },
    zh: {
      summary: 'Wix 是通用型建站工具，附带电商套餐。强项是可视化页面设计，店铺只是整站的一个功能。',
      pricing: '按月套餐；电商功能需要商业档套餐。价格因套餐和地区而异。',
      fee: '因套餐而异，以官网为准。支付服务商单独收费。',
      server: '不需要，完全托管。',
      strengths: ['拖拽设计非常灵活', '店铺是品牌站一部分（含博客、预约页）时很合适', '模板库大'],
      fit: '先要网站、再要店铺，看重设计自由度的卖家。',
      limits: '电商只是众多功能之一；跨境细节和中文后台不是它的重点。',
      chooseIt: ['店铺只是更大内容站或作品集的一小部分', '视觉设计控制比店铺运营更重要', '你主要卖给一个本土市场'],
      chooseSenvarico: ['店铺就是整个生意，而且你在跨境销售', '你想要中英文后台和开箱即用的 PayPal / Stripe', '你想要 0 元版来测款'],
    },
  },
  {
    slug: 'big-cartel',
    name: 'Big Cartel',
    url: 'https://www.bigcartel.com/',
    category: 'lightweight',
    hub: true,
    en: {
      summary: 'Big Cartel is a hosted store builder aimed at artists, makers and small independent brands. It is intentionally simple and has a free plan limited by product count.',
      pricing: 'Free plan with a small product limit; paid monthly plans raise the limit. See the official site for current tiers.',
      fee: 'No platform transaction fee on its own plans; payment providers charge separately.',
      server: 'Not required; fully hosted.',
      strengths: ['Very simple to run', 'Free entry plan', 'Long track record with creators'],
      fit: 'Creators selling a handful of products, often to a domestic audience.',
      limits: 'English-only admin; cross-border features are minimal; product limits are low on the free tier.',
      chooseIt: ['You are an artist or maker selling a few items mainly in your own country', 'You want the simplest possible storefront and do not need multi-language or multi-currency'],
      chooseSenvarico: ['You sell to Europe and North America from abroad and need multi-currency', 'You want a Chinese admin interface', 'You are testing products through TikTok or Facebook ads with up to 20 SKUs free, or up to 100 for ¥99/month'],
    },
    zh: {
      summary: 'Big Cartel 是面向艺术家、手作者和小型独立品牌的托管式店铺工具。刻意保持简单，有按商品数量限制的免费版。',
      pricing: '免费版有较低的商品数量上限；付费月套餐提高上限。当前档位以官网为准。',
      fee: '自身套餐不收平台交易佣金；支付服务商单独收费。',
      server: '不需要，完全托管。',
      strengths: ['运营非常简单', '有免费入门方案', '在创作者群体中有长期口碑'],
      fit: '销售少量商品、通常面向本国受众的创作者。',
      limits: '仅英文后台；跨境功能很弱；免费版商品上限低。',
      chooseIt: ['你是艺术家或手作者，主要在本国卖几件商品', '你想要最简单的店面，不需要多语言或多币种'],
      chooseSenvarico: ['你从海外卖到欧美，需要多币种', '你想要中文后台', '你在用 TikTok / Facebook 广告测款，免费版 20 个 SKU 或 99 元/月 100 个 SKU'],
    },
  },
  {
    slug: 'gumroad',
    name: 'Gumroad',
    url: 'https://gumroad.com/',
    category: 'lightweight',
    hub: false,
    en: {
      summary: 'Gumroad is a hosted checkout and storefront for creators, built primarily for digital products such as ebooks, courses, templates and software.',
      pricing: 'No fixed monthly fee; Gumroad takes a percentage of each sale. Rates are published on the official site.',
      fee: 'Charges a per-sale platform fee (percentage plus a fixed amount); this is its business model.',
      server: 'Not required; fully hosted.',
      strengths: ['Live in minutes', 'Zero fixed cost', 'Built-in delivery for digital files, licenses and memberships'],
      fit: 'Creators selling digital products who prefer paying per sale instead of a subscription.',
      limits: 'Not designed for physical cross-border stores; per-sale fees grow with volume; limited catalog and storefront control.',
      chooseIt: ['You sell digital downloads, courses or memberships', 'You want zero fixed cost and accept a per-sale fee'],
      chooseSenvarico: ['You sell physical products across borders', 'You want a 0% platform transaction fee and a fixed ¥0 or ¥99/month cost', 'You need a product catalog, shipping and multi-currency storefront'],
    },
    zh: {
      summary: 'Gumroad 是面向创作者的托管式结账与店面工具，主要用于电子书、课程、模板、软件等数字产品。',
      pricing: '没有固定月费，Gumroad 从每笔销售中抽取百分比。费率以官网为准。',
      fee: '按每笔销售收取平台费（百分比加固定金额），这是它的商业模式。',
      server: '不需要，完全托管。',
      strengths: ['几分钟上线', '零固定成本', '内置数字文件交付、授权和会员功能'],
      fit: '销售数字产品、偏好按销售付费而非订阅的创作者。',
      limits: '不是为实物跨境店铺设计；按销售抽成随销量增长；目录和店面控制有限。',
      chooseIt: ['你卖数字下载、课程或会员', '你想要零固定成本并接受按单抽成'],
      chooseSenvarico: ['你跨境销售实物商品', '你想要 0% 平台交易佣金和 0 元或 99 元/月的固定成本', '你需要商品目录、配送和多币种店面'],
    },
  },
  {
    slug: 'squarespace',
    name: 'Squarespace Commerce',
    url: 'https://www.squarespace.com/ecommerce-website',
    category: 'website-builder',
    hub: true,
    en: {
      summary: 'Squarespace is a design-led website builder with commerce plans. It is known for polished templates and is often chosen by brands where presentation matters.',
      pricing: 'Monthly plans; commerce features depend on the tier. Pricing varies by plan and region.',
      fee: 'Transaction fees apply on some tiers; check the official site. Payment providers charge separately.',
      server: 'Not required; fully hosted.',
      strengths: ['High-quality design templates', 'Integrated blog, scheduling and email tools', 'Good for brand-first stores'],
      fit: 'Brands that want a beautiful site and a modest catalog, often selling domestically.',
      limits: 'Cross-border and multi-currency depth is limited; no Chinese admin; commerce is secondary to design.',
      chooseIt: ['Brand presentation is the main goal', 'You want site, blog and scheduling in one design system', 'You sell mainly to one market'],
      chooseSenvarico: ['You sell to Europe and North America from abroad', 'You want Chinese or English admin and 0% platform fee', 'You are testing products and want a ¥0 plan'],
    },
    zh: {
      summary: 'Squarespace 是以设计见长的建站工具，附带电商套餐。以精致模板著称，常被重视品牌呈现的卖家选择。',
      pricing: '按月套餐；电商功能取决于档位。价格因套餐和地区而异。',
      fee: '部分档位收取交易费，以官网为准。支付服务商单独收费。',
      server: '不需要，完全托管。',
      strengths: ['高质量设计模板', '博客、预约、邮件工具集成', '适合品牌优先的店铺'],
      fit: '想要漂亮网站、目录不大、通常面向本土市场的品牌。',
      limits: '跨境和多币种深度有限；没有中文后台；电商是设计之后的第二位。',
      chooseIt: ['品牌呈现是主要目标', '你想要网站、博客、预约在同一套设计体系里', '你主要卖给一个市场'],
      chooseSenvarico: ['你从海外卖到欧美', '你想要中英文后台和 0% 平台佣金', '你在测款，想要 0 元版'],
    },
  },
  {
    slug: 'ecwid',
    name: 'Ecwid',
    url: 'https://www.ecwid.com/',
    category: 'lightweight',
    hub: true,
    en: {
      summary: 'Ecwid (by Lightspeed) is a hosted store widget that can be embedded into an existing website or run standalone. It has a free tier and positions itself for small businesses and cross-border selling.',
      pricing: 'Free plan with a small product limit; paid monthly tiers raise limits and add features. See the official site.',
      fee: 'No platform transaction fee on its own plans; payment providers charge separately.',
      server: 'Not required; fully hosted.',
      strengths: ['Embeds into any existing site', 'Free entry plan', 'Multi-language storefront and many payment integrations', 'Sells across web and social channels'],
      fit: 'Sellers who already have a website and want to add a store, or who sell on several channels.',
      limits: 'Free tier is very limited; no Chinese admin; the standalone storefront is less flexible than a dedicated builder.',
      chooseIt: ['You already have a site and only need a store widget', 'You sell through many channels at once', 'You need an integration Ecwid offers and Senvarico does not'],
      chooseSenvarico: ['You want a standalone cross-border store with a Chinese or English admin', 'You want 20 SKUs free or 100 SKUs for ¥99/month with 0% platform fee', 'You prefer a smaller, simpler tool'],
    },
    zh: {
      summary: 'Ecwid（Lightspeed 旗下）是可嵌入现有网站、也可独立运行的托管式店铺组件。有免费档，定位小企业和跨境销售。',
      pricing: '免费版商品数量较少；付费月套餐提高上限并增加功能。以官网为准。',
      fee: '自身套餐不收平台交易佣金；支付服务商单独收费。',
      server: '不需要，完全托管。',
      strengths: ['可嵌入任何现有网站', '有免费入门方案', '多语言店面和众多支付集成', '同时在网站和社交渠道销售'],
      fit: '已有网站想加店铺、或同时在多渠道销售的卖家。',
      limits: '免费档非常有限；没有中文后台；独立店面不如专门的建站工具灵活。',
      chooseIt: ['你已有网站，只需要一个店铺组件', '你同时在多个渠道卖货', '你需要 Ecwid 有而 Senvarico 没有的某个集成'],
      chooseSenvarico: ['你想要独立的跨境店铺和中英文后台', '你想要免费 20 个 SKU 或 99 元/月 100 个 SKU、0% 平台佣金', '你偏好更小更简单的工具'],
    },
  },
  {
    slug: 'square-online',
    name: 'Square Online',
    url: 'https://squareup.com/us/en/online-store',
    category: 'lightweight',
    hub: false,
    en: {
      summary: 'Square Online is the online store builder from Square, tightly integrated with Square payments and point of sale. It has a free plan and is strongest for sellers who also sell in person.',
      pricing: 'Free plan; paid tiers add features. Pricing varies by plan and country.',
      fee: 'Square processes payments and charges its own processing fees; platform fee terms vary by plan.',
      server: 'Not required; fully hosted.',
      strengths: ['Free to start', 'Seamless with Square POS and payments', 'Simple setup'],
      fit: 'Sellers with a physical shop or market stall who want an online store on the same system.',
      limits: 'Square payments availability is limited to certain countries; not oriented to cross-border sellers based elsewhere; no Chinese admin.',
      chooseIt: ['You already use Square for in-person sales', 'You are in a country where Square operates and sell domestically'],
      chooseSenvarico: ['You are based outside Square\'s supported countries', 'You sell to Europe and North America with PayPal or Stripe', 'You want a Chinese admin interface'],
    },
    zh: {
      summary: 'Square Online 是 Square 旗下的网店建站工具，与 Square 支付和 POS 深度集成。有免费版，最适合同时做线下销售的卖家。',
      pricing: '有免费版；付费档增加功能。价格因套餐和国家而异。',
      fee: 'Square 处理支付并收取自己的手续费；平台费条款因套餐而异。',
      server: '不需要，完全托管。',
      strengths: ['免费起步', '与 Square POS 和支付无缝衔接', '设置简单'],
      fit: '有实体店或市集摊位、想在同一系统上开网店的卖家。',
      limits: 'Square 支付仅在部分国家可用；不面向身处其他地区的跨境卖家；没有中文后台。',
      chooseIt: ['你已经在用 Square 做线下销售', '你在 Square 覆盖的国家并且做本土销售'],
      chooseSenvarico: ['你不在 Square 支持的国家', '你用 PayPal 或 Stripe 卖到欧美', '你想要中文后台'],
    },
  },
  {
    slug: 'shoplazza',
    name: 'Shoplazza',
    url: 'https://www.shoplazza.com/',
    category: 'cn-saas',
    hub: true,
    en: {
      summary: 'Shoplazza (店匠) is a hosted ecommerce platform built for cross-border sellers, particularly China-based merchants selling to international customers. It offers a Chinese admin, templates, apps and marketing tools.',
      pricing: 'Monthly and annual plans at several tiers; pricing varies by plan. See the official site.',
      fee: 'Some plans include a transaction commission; details vary by plan.',
      server: 'Not required; fully hosted.',
      strengths: ['Chinese admin and support', 'Templates and app ecosystem for cross-border stores', 'Built-in marketing and ad tools', 'Handles large catalogs'],
      fit: 'Cross-border sellers who want a full platform with a Chinese-speaking ecosystem and plan to scale.',
      limits: 'Total cost rises with plan tier and commission; more features than a 20-SKU test store needs.',
      chooseIt: ['You plan to scale past a few hundred SKUs', 'You want a mature Chinese-language app ecosystem and agency support', 'You need advanced marketing tooling inside the platform'],
      chooseSenvarico: ['You are testing products with 10–100 SKUs and want ¥0 or ¥99/month with 0% platform fee', 'You prefer a smaller tool with less to configure', 'You want English admin available alongside Chinese'],
    },
    zh: {
      summary: 'Shoplazza（店匠）是面向跨境卖家的托管式电商平台，尤其服务中国卖家面向海外顾客销售。提供中文后台、模板、应用和营销工具。',
      pricing: '按月/按年多档套餐，价格因套餐而异，以官网为准。',
      fee: '部分套餐含交易佣金，具体因套餐而异。',
      server: '不需要，完全托管。',
      strengths: ['中文后台与客服', '面向跨境店铺的模板和应用生态', '内置营销和广告工具', '能承载大目录'],
      fit: '想要完整平台、有中文生态、并计划规模化的跨境卖家。',
      limits: '总成本随套餐档位和佣金上升；功能多于一家 20 个 SKU 的测款店所需。',
      chooseIt: ['你计划扩展到几百个 SKU 以上', '你想要成熟的中文应用生态和服务商支持', '你需要平台内置的高级营销工具'],
      chooseSenvarico: ['你在用 10–100 个 SKU 测款，想要 0 元或 99 元/月、0% 平台佣金', '你偏好更小、要配置更少的工具', '你需要中英文后台都可用'],
    },
  },
  {
    slug: 'shopline',
    name: 'SHOPLINE',
    url: 'https://www.shopline.com/',
    category: 'cn-saas',
    hub: true,
    en: {
      summary: 'SHOPLINE is a hosted commerce platform with a strong presence in Asia, offering Chinese-language admin, payments and app integrations for merchants selling regionally and cross-border.',
      pricing: 'Monthly and annual plans; pricing varies by plan and region. See the official site.',
      fee: 'Some plans include a transaction commission; details vary by plan.',
      server: 'Not required; fully hosted.',
      strengths: ['Mature in Asian markets', 'Chinese admin', 'Broad payment and app integrations', 'Suits omnichannel and larger catalogs'],
      fit: 'Merchants who want a full platform with regional payment coverage and expect to scale.',
      limits: 'Higher total cost and complexity than a lightweight tool; oriented to growth-stage businesses.',
      chooseIt: ['You need regional Asian payment methods and a full app ecosystem', 'You run or plan a larger, omnichannel operation'],
      chooseSenvarico: ['You sell to Europe and North America with PayPal or Stripe and 10–100 SKUs', 'You want ¥0 or ¥99/month with 0% platform fee', 'You want minimal configuration'],
    },
    zh: {
      summary: 'SHOPLINE 是在亚洲市场很成熟的托管式电商平台，提供中文后台、支付和应用集成，服务区域及跨境销售的商家。',
      pricing: '按月/按年套餐，价格因套餐和地区而异，以官网为准。',
      fee: '部分套餐含交易佣金，具体因套餐而异。',
      server: '不需要，完全托管。',
      strengths: ['亚洲市场成熟', '中文后台', '支付和应用集成广', '适合全渠道和较大目录'],
      fit: '想要完整平台、区域支付覆盖、并预期规模化的商家。',
      limits: '总成本和复杂度高于轻量工具；面向成长期业务。',
      chooseIt: ['你需要亚洲区域支付方式和完整应用生态', '你在运营或计划更大的全渠道业务'],
      chooseSenvarico: ['你用 PayPal 或 Stripe 卖到欧美，SKU 在 10–100', '你想要 0 元或 99 元/月、0% 平台佣金', '你想要最少的配置'],
    },
  },
  {
    slug: 'shopyy',
    name: 'Shopyy',
    url: 'https://www.shopyy.com/',
    category: 'cn-saas',
    hub: false,
    en: {
      summary: 'Shopyy is a China-based hosted store builder for cross-border sellers, offering a Chinese admin and bundled setup and operations services.',
      pricing: 'Plan-based pricing, often annual; see the official site.',
      fee: 'Varies by plan; check the official site.',
      server: 'Not required; fully hosted.',
      strengths: ['Chinese admin and support team', 'Bundled onboarding and operations services', 'Cross-border oriented'],
      fit: 'Sellers who want a Chinese team to help set up and run the store.',
      limits: 'Plan and commission structure must be checked per tier; a lightweight seller may not use most of it.',
      chooseIt: ['You want hands-on setup and operations support from a Chinese vendor', 'You prefer an annual, service-inclusive package'],
      chooseSenvarico: ['You want to self-serve with a ¥0 or ¥99/month plan and no commission', 'You have 10–100 SKUs and want a minimal tool'],
    },
    zh: {
      summary: 'Shopyy 是面向跨境卖家的国产托管式建站工具，提供中文后台以及打包的建站和运营服务。',
      pricing: '按套餐收费，多为年付，以官网为准。',
      fee: '因套餐而异，以官网为准。',
      server: '不需要，完全托管。',
      strengths: ['中文后台和支持团队', '打包的开店与运营服务', '面向跨境'],
      fit: '希望有中文团队帮助搭建和运营店铺的卖家。',
      limits: '套餐和佣金结构需按档位核对；轻量卖家可能用不到大部分服务。',
      chooseIt: ['你想要国内服务商提供手把手的搭建和运营支持', '你偏好年付、含服务的打包方案'],
      chooseSenvarico: ['你想自助使用 0 元或 99 元/月、无佣金的方案', '你有 10–100 个 SKU，想要极简工具'],
    },
  },
  {
    slug: 'ueeshop',
    name: 'Ueeshop',
    url: 'https://www.ueeshop.com/',
    category: 'cn-saas',
    hub: false,
    en: {
      summary: 'Ueeshop is a long-running China-based store builder for foreign trade, supporting both B2B showcase sites and B2C stores with a Chinese admin.',
      pricing: 'Annual plans; see the official site.',
      fee: 'Check the official site for the current plan terms.',
      server: 'Not required; fully hosted.',
      strengths: ['Long operating history', 'B2B and B2C in one product', 'Chinese service'],
      fit: 'Sellers who need B2B inquiry pages alongside a B2C store.',
      limits: 'Annual commitment is less flexible for product testing; not oriented to TikTok/Facebook test stores.',
      chooseIt: ['You need B2B inquiry or catalog pages', 'You prefer an established annual package'],
      chooseSenvarico: ['You are testing B2C products with a free plan and no annual commitment', 'You want 0% platform fee, PayPal/Stripe and multi-currency'],
    },
    zh: {
      summary: 'Ueeshop 是运营时间较长的国产外贸建站工具，同时支持 B2B 展示站和 B2C 店铺，有中文后台。',
      pricing: '年付套餐，以官网为准。',
      fee: '当前套餐条款以官网为准。',
      server: '不需要，完全托管。',
      strengths: ['运营时间长', 'B2B 和 B2C 一体', '中文服务'],
      fit: '需要 B2B 询盘页面同时又有 B2C 店铺的卖家。',
      limits: '年付承诺对测款阶段不够灵活；不面向 TikTok / Facebook 测款店。',
      chooseIt: ['你需要 B2B 询盘或目录页面', '你偏好成熟的年付套餐'],
      chooseSenvarico: ['你在用免费版测 B2C 产品，不想年付', '你想要 0% 平台佣金、PayPal / Stripe 和多币种'],
    },
  },
];

export const HUB_COMPETITORS = COMPETITORS.filter((c) => c.hub);

export function competitorBySlug(slug: string): Competitor | undefined {
  return COMPETITORS.find((c) => c.slug === slug);
}

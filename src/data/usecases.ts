/**
 * Use-case / audience pages: /for-{slug} and /zh/for-{slug}.
 * Each page answers: "I am this kind of seller — does Senvarico fit, and if not, what does?"
 * Product facts are rendered from brand-facts.json by the template, not typed here.
 */
export interface UseCaseText {
  title: string;
  h1: string;
  description: string;
  intro: string;
  profile: string[];
  fits: { h: string; p: string }[];
  notFit: string[];
  steps: string[];
  alternatives: string;
  faqIds: string[];
}
export interface UseCase {
  slug: string;
  en: UseCaseText;
  zh: UseCaseText;
}

export const USECASES: UseCase[] = [
  {
    slug: 'tiktok-product-testing',
    en: {
      title: 'Ecommerce Website Builder for TikTok Product Testing | Senvarico',
      h1: 'A Lightweight Store for TikTok Product Testing',
      description: 'Testing products with TikTok ads needs a store that is cheap to keep, fast to change and does not take a cut. How Senvarico fits that job: free plan, 20 SKUs, 0% platform fee, PayPal and Stripe.',
      intro: 'When you test products through TikTok ads, the store is a cost center until a product works. Most of your money goes to ad spend, and most of your SKUs will be retired within weeks. The store should be cheap to keep alive, quick to reconfigure, and it should not take a percentage of the few sales you make while testing.',
      profile: ['You run TikTok ad campaigns to validate products before scaling', 'You rotate a handful of SKUs at a time, rarely more than 20 live', 'You sell to Europe or North America', 'You do not have a developer on the team'],
      fits: [
        { h: 'Zero fixed cost while testing', p: 'The Free plan is ¥0/month with up to 20 SKUs, which covers a typical rotation of test products without paying for a platform you might abandon next month.' },
        { h: 'No platform cut on test sales', p: 'Senvarico charges a 0% platform transaction fee, so early sales are not reduced by a platform commission. PayPal or Stripe still charge their normal processing fees.' },
        { h: 'Fast to change', p: 'No-code product and page editing lets you swap products, prices and landing pages between campaigns without touching code or a developer.' },
        { h: 'Ready for international buyers', p: 'Multi-currency and multi-language storefronts, with PayPal and Stripe checkout, cover the markets TikTok campaigns usually reach in Europe and North America.' },
      ],
      notFit: ['You run dozens of parallel tests with more than 100 live SKUs', 'You need advanced pixel and conversion-API tooling built into the platform', 'You need an app marketplace for upsells, bundles or subscriptions'],
      steps: ['Create the store on the Free plan and connect PayPal or Stripe.', 'Add up to 20 test SKUs with clear product pages and shipping regions.', 'Point each TikTok campaign at its product page; keep the page focused on one product.', 'Retire losers, keep winners; when live SKUs pass 20, move to the Small Seller plan (¥99/month, 100 SKUs).'],
      alternatives: 'If you need built-in advanced ad tooling or expect to scale past 100 SKUs quickly, Shopify or Shoplazza are broader platforms worth considering.',
      faqIds: ['tiktok', 'free-plan', 'platform-fee', 'sku-limit'],
    },
    zh: {
      title: '适合 TikTok 测款的独立站建站工具 | Senvarico',
      h1: '为 TikTok 测款准备的轻量级店铺',
      description: '用 TikTok 广告测款，需要一个维持成本低、改起来快、不抽成的店铺。Senvarico 如何匹配这个需求：免费版、20 个 SKU、0% 平台佣金、PayPal 和 Stripe。',
      intro: '用 TikTok 广告测款时，在产品跑出来之前，店铺只是成本中心。大部分钱花在投放上，大部分 SKU 几周内就会下架。店铺应该维持成本低、重新配置快，而且不应该从测试期那几单里抽成。',
      profile: ['你用 TikTok 广告验证产品，再决定是否放量', '你每次同时跑几个 SKU，很少超过 20 个在线', '你卖到欧洲或北美', '团队里没有开发者'],
      fits: [
        { h: '测试期零固定成本', p: '免费版 0 元/月，最多 20 个 SKU，足以覆盖一轮典型的测款商品，不用为下个月可能就放弃的平台付费。' },
        { h: '测试期销售不被抽成', p: 'Senvarico 平台交易佣金 0%，早期的销售不会被平台佣金削减。PayPal 或 Stripe 仍按正常费率收取支付手续费。' },
        { h: '改得快', p: '零代码的商品和页面编辑，让你在不同投放之间切换商品、价格和落地页，不用碰代码或找开发者。' },
        { h: '为海外买家准备好', p: '多币种、多语言店面，加上 PayPal 和 Stripe 结账，覆盖 TikTok 投放通常触达的欧美市场。' },
      ],
      notFit: ['你同时跑几十个测试，在线 SKU 超过 100 个', '你需要平台内置的高级像素和转化 API 工具', '你需要应用市场来做加购、捆绑或订阅'],
      steps: ['用免费版建店，接入 PayPal 或 Stripe。', '上架最多 20 个测款 SKU，写清商品页和配送区域。', '每个 TikTok 投放指向对应商品页，页面只聚焦一个产品。', '淘汰失败品、保留成功品；在线 SKU 超过 20 个时升级到小卖家版（99 元/月，100 个 SKU）。'],
      alternatives: '如果你需要平台内置的高级广告工具，或预计很快超过 100 个 SKU，Shopify 或 Shoplazza 这类更全面的平台值得考虑。',
      faqIds: ['tiktok', 'free-plan', 'platform-fee', 'sku-limit'],
    },
  },
  {
    slug: 'facebook-ad-stores',
    en: {
      title: 'Ecommerce Website Builder for Facebook Ad-Driven Stores | Senvarico',
      h1: 'A Store Built for Facebook Ad-Driven Selling',
      description: 'Stores that live on Facebook and Instagram ads need low fixed costs, clean product pages and international checkout. How Senvarico fits: ¥0 or ¥99/month, 0% platform fee, PayPal and Stripe, multi-currency.',
      intro: 'A Facebook ad-driven store is a landing page with a checkout. Traffic is bought, not earned, so every fixed cost and every percentage taken from a sale changes whether a campaign is profitable. The store needs to be reliable, quick to edit and priced for a small catalog.',
      profile: ['Most of your traffic comes from Facebook and Instagram ads', 'You sell 10–100 SKUs, often in one or two niches', 'Your customers are in Europe and North America', 'You want to keep the platform cost out of your margin calculation'],
      fits: [
        { h: 'Fixed cost, not a percentage', p: 'Senvarico costs ¥0/month (20 SKUs) or ¥99/month (100 SKUs) with a 0% platform transaction fee. Your margin per order is ad cost plus payment processing, not a platform commission on top.' },
        { h: 'Product pages that load without JavaScript bloat', p: 'Storefronts are lightweight, which matters when a large share of visitors arrive from mobile ad clicks.' },
        { h: 'International checkout', p: 'PayPal and Stripe, multi-currency display and multi-language pages cover the markets most Facebook campaigns target.' },
        { h: 'Chinese or English admin', p: 'Run the store in whichever language the team works in.' },
      ],
      notFit: ['You rely on a deep app stack for upsells, bundles and post-purchase flows', 'You need thousands of SKUs or a multi-brand setup', 'You need built-in advanced attribution tooling'],
      steps: ['Set up on the Free plan, connect PayPal and Stripe, set currencies for your target markets.', 'Build one focused product page per campaign; keep shipping and returns visible.', 'Run campaigns; track profit as ad cost plus gateway fee, since there is no platform fee.', 'Move to the Small Seller plan when the winning catalog passes 20 SKUs.'],
      alternatives: 'For a large app ecosystem around Facebook ads, Shopify is the broadest option; for a Chinese-language full platform, Shoplazza or SHOPLINE.',
      faqIds: ['facebook', 'cost', 'platform-fee', 'multi-currency'],
    },
    zh: {
      title: '适合 Facebook 投流店铺的独立站建站工具 | Senvarico',
      h1: '为 Facebook 投流而建的店铺',
      description: '靠 Facebook 和 Instagram 广告生存的店铺需要低固定成本、干净的商品页和国际结账。Senvarico 如何匹配：0 元或 99 元/月、0% 平台佣金、PayPal 和 Stripe、多币种。',
      intro: 'Facebook 投流店铺本质上是一个带结账的落地页。流量是买来的，不是自然来的，所以每一笔固定成本和每一笔从销售里抽走的百分比，都会改变一个投放是否盈利。店铺要可靠、改得快、并且按小目录定价。',
      profile: ['你的流量主要来自 Facebook 和 Instagram 广告', '你卖 10–100 个 SKU，通常集中在一两个品类', '顾客在欧洲和北美', '你希望把平台成本排除在利润计算之外'],
      fits: [
        { h: '固定成本，不是抽成', p: 'Senvarico 0 元/月（20 个 SKU）或 99 元/月（100 个 SKU），平台交易佣金 0%。每单利润只减去广告成本和支付手续费，没有额外的平台佣金。' },
        { h: '不被 JavaScript 拖慢的商品页', p: '店面轻量，这在大部分访客来自移动端广告点击时很重要。' },
        { h: '国际结账', p: 'PayPal 和 Stripe、多币种展示、多语言页面，覆盖大多数 Facebook 投放的目标市场。' },
        { h: '中英文后台', p: '团队用哪种语言工作，就用哪种语言管店。' },
      ],
      notFit: ['你依赖很深的应用栈来做加购、捆绑和售后流程', '你需要数千 SKU 或多品牌架构', '你需要平台内置的高级归因工具'],
      steps: ['用免费版建店，接入 PayPal 和 Stripe，设置目标市场的币种。', '每个投放建一个聚焦的商品页，配送和退换政策放在显眼处。', '跑投放；利润按“广告成本 + 支付手续费”核算，没有平台佣金。', '成功品目录超过 20 个 SKU 时，升级小卖家版。'],
      alternatives: '如果需要围绕 Facebook 广告的大应用生态，Shopify 是最全面的选择；需要中文全功能平台，看 Shoplazza 或 SHOPLINE。',
      faqIds: ['facebook', 'cost', 'platform-fee', 'multi-currency'],
    },
  },
  {
    slug: 'amazon-sellers-testing-dtc',
    en: {
      title: 'Ecommerce Website Builder for Amazon Sellers Testing DTC | Senvarico',
      h1: 'For Amazon Sellers Testing a Direct-to-Consumer Store',
      description: 'Amazon sellers who want to test their own store without a second large platform bill. Senvarico: free plan with 20 SKUs, ¥99/month for 100, 0% platform fee, PayPal and Stripe.',
      intro: 'Many Amazon sellers want an owned channel: a place to send repeat customers, run ads without marketplace rules, and keep customer data. The risk is committing to a second expensive platform before knowing whether direct sales will work. A lightweight store lets you test that with a subset of your catalog.',
      profile: ['You already sell on Amazon in Europe or North America', 'You want to test 10–50 hero SKUs on your own store', 'You do not want a second monthly bill that rivals your marketplace fees', 'You have no in-house developer'],
      fits: [
        { h: 'Test with a subset, not the whole catalog', p: 'Start with up to 20 SKUs free, or 100 for ¥99/month. Your Amazon catalog stays where it is.' },
        { h: 'No platform commission on DTC sales', p: 'A 0% platform transaction fee means your DTC margin is only reduced by PayPal or Stripe processing fees, which makes a clean comparison against marketplace fees.' },
        { h: 'Familiar markets, familiar payments', p: 'PayPal and Stripe checkout with multi-currency display for the same European and North American customers you already serve.' },
        { h: 'Chinese and English admin', p: 'Useful for cross-border teams that manage Amazon from China and sell abroad.' },
      ],
      notFit: ['You want to mirror a catalog of thousands of ASINs', 'You need two-way inventory sync with Amazon or an ERP', 'You need marketplace-style multi-vendor features'],
      steps: ['Pick 10–20 products with repeat-purchase potential and list them on the Free plan.', 'Connect PayPal and Stripe; set shipping regions to match your Amazon markets.', 'Drive traffic from packaging inserts, email and ads; compare margin with and without marketplace fees.', 'If DTC works, expand to the Small Seller plan; if not, you have spent ¥0 on the platform.'],
      alternatives: 'If you need Amazon inventory sync or a large catalog from day one, Shopify with its app ecosystem is the more common choice.',
      faqIds: ['who-is-it-for', 'free-plan', 'platform-fee', 'sku-limit'],
    },
    zh: {
      title: '适合亚马逊卖家测试独立站的建站工具 | Senvarico',
      h1: '给正在测试 DTC 独立站的亚马逊卖家',
      description: '想在不背第二笔大平台账单的前提下测试自己店铺的亚马逊卖家。Senvarico：免费版 20 个 SKU，99 元/月 100 个，0% 平台佣金，PayPal 和 Stripe。',
      intro: '很多亚马逊卖家想要一个自有渠道：把复购顾客引过来、不受平台规则限制地投广告、并留住客户数据。风险在于，在不知道直销能否跑通之前，就先绑定了第二个昂贵的平台。轻量级店铺让你用一部分目录去验证。',
      profile: ['你已经在亚马逊欧美站销售', '你想用 10–50 个主推 SKU 测试自己的店', '你不想再背一笔和平台佣金相当的月费', '没有内部开发者'],
      fits: [
        { h: '用一部分目录测试，而不是全部', p: '免费版最多 20 个 SKU，或 99 元/月 100 个。亚马逊上的目录原样不动。' },
        { h: 'DTC 销售不被平台抽成', p: '平台交易佣金 0%，DTC 利润只减去 PayPal 或 Stripe 的支付手续费，可以和平台佣金做干净的对比。' },
        { h: '熟悉的市场、熟悉的收款', p: 'PayPal 和 Stripe 结账、多币种展示，面向你已经在服务的欧美顾客。' },
        { h: '中英文后台', p: '适合在中国管理亚马逊、面向海外销售的跨境团队。' },
      ],
      notFit: ['你想镜像几千个 ASIN 的完整目录', '你需要和亚马逊或 ERP 的双向库存同步', '你需要平台型的多商家功能'],
      steps: ['挑 10–20 个有复购潜力的商品，在免费版上架。', '接入 PayPal 和 Stripe；配送区域按你的亚马逊站点设置。', '通过包裹卡、邮件和广告引流；对比有无平台佣金时的利润。', 'DTC 跑通就升级小卖家版；跑不通，你在平台上花了 0 元。'],
      alternatives: '如果一开始就需要亚马逊库存同步或大目录，Shopify 及其应用生态是更常见的选择。',
      faqIds: ['who-is-it-for', 'free-plan', 'platform-fee', 'sku-limit'],
    },
  },
  {
    slug: 'etsy-sellers-own-store',
    en: {
      title: 'Store Builder for Etsy Sellers Opening Their Own Store | Senvarico',
      h1: 'For Etsy Sellers Opening Their Own Store',
      description: 'Etsy sellers who want an owned storefront without marketplace fees or a large platform bill. Senvarico: free plan with 20 SKUs, ¥99/month for 100, 0% platform fee, PayPal and Stripe, multi-currency.',
      intro: 'Etsy gives makers traffic, but it also sets the fees and owns the customer relationship. Sellers who have built a following often want a store of their own for repeat buyers and social traffic. The question is whether that store can be cheap enough to run alongside Etsy.',
      profile: ['You sell handmade or curated products on Etsy', 'You have 10–100 SKUs and a social following', 'You ship internationally, mainly to Europe and North America', 'You want to keep both channels without doubling costs'],
      fits: [
        { h: 'Low enough to run beside Etsy', p: 'Free for up to 20 SKUs, ¥99/month for up to 100. No annual commitment and no platform commission.' },
        { h: 'Keep the margin on repeat buyers', p: 'A 0% platform transaction fee means direct sales only carry PayPal or Stripe processing fees.' },
        { h: 'International by default', p: 'Multi-currency and multi-language storefronts with PayPal and Stripe, for the overseas buyers Etsy already sends you.' },
        { h: 'No maintenance', p: 'SaaS hosted; nothing to update or back up.' },
      ],
      notFit: ['You need Etsy listing sync or a print-on-demand integration', 'Your catalog runs into the hundreds', 'You want an elaborate design-first site'],
      steps: ['Recreate your top 20 listings on the Free plan.', 'Connect PayPal and Stripe; set shipping regions for your main countries.', 'Send repeat buyers and social traffic to the store; keep Etsy for discovery.', 'Upgrade to the Small Seller plan as the direct catalog grows.'],
      alternatives: 'Big Cartel is a comparable lightweight option for makers selling domestically; Squarespace or Wix suit sellers who want a design-first brand site.',
      faqIds: ['who-is-it-for', 'free-plan', 'platform-fee', 'multi-currency'],
    },
    zh: {
      title: '适合 Etsy 卖家开自己店铺的建站工具 | Senvarico',
      h1: '给想开自己店铺的 Etsy 卖家',
      description: '想要自有店面、不想再交平台费或背大平台账单的 Etsy 卖家。Senvarico：免费版 20 个 SKU，99 元/月 100 个，0% 平台佣金，PayPal 和 Stripe，多币种。',
      intro: 'Etsy 给手作者带来流量，但也决定费率并掌握客户关系。积累了粉丝的卖家常常想要自己的店铺，承接复购和社交流量。问题是这家店能不能便宜到和 Etsy 并行运营。',
      profile: ['你在 Etsy 卖手作或精选商品', '你有 10–100 个 SKU 和一定的社交粉丝', '你做国际配送，主要到欧洲和北美', '你想保留两个渠道但不想成本翻倍'],
      fits: [
        { h: '便宜到可以和 Etsy 并行', p: '20 个 SKU 以内免费，100 个以内 99 元/月。没有年付承诺，没有平台佣金。' },
        { h: '保住复购顾客的利润', p: '平台交易佣金 0%，直销只承担 PayPal 或 Stripe 的支付手续费。' },
        { h: '默认就是国际化', p: '多币种、多语言店面加 PayPal 和 Stripe，面向 Etsy 已经带给你的海外买家。' },
        { h: '不用维护', p: 'SaaS 托管，没有需要更新或备份的东西。' },
      ],
      notFit: ['你需要 Etsy 列表同步或按需印刷集成', '你的目录有几百个商品', '你想要一个精致的设计优先型品牌站'],
      steps: ['把销量最好的 20 个列表在免费版重建。', '接入 PayPal 和 Stripe；按主要国家设置配送区域。', '把复购顾客和社交流量引到店铺；Etsy 继续负责发现。', '直销目录增长后升级小卖家版。'],
      alternatives: 'Big Cartel 是面向本土手作者的同类轻量选择；Squarespace 或 Wix 适合想要设计优先型品牌站的卖家。',
      faqIds: ['who-is-it-for', 'free-plan', 'platform-fee', 'multi-currency'],
    },
  },
  {
    slug: 'dropshipping-tests',
    en: {
      title: 'Ecommerce Website Builder for Dropshipping Tests with Few SKUs | Senvarico',
      h1: 'For Dropshipping Tests with a Handful of SKUs',
      description: 'Testing dropshipping products one at a time needs a store with no fixed cost and no platform commission. Senvarico: free plan with 20 SKUs, 0% platform fee, PayPal and Stripe, no server maintenance.',
      intro: 'Dropshipping tests are cheap to start and easy to over-spend on. A platform subscription plus paid apps can exceed the budget of the test itself. For a seller validating one or two products at a time, the store should cost nothing until something sells.',
      profile: ['You test one or a few products at a time', 'You source from suppliers and ship directly to buyers in Europe or North America', 'Your budget is mostly ad spend', 'You want no fixed platform cost'],
      fits: [
        { h: '¥0 until it works', p: 'The Free plan (20 SKUs) has no monthly cost and no platform commission, so a failed test costs only the ads.' },
        { h: 'Simple catalog and orders', p: 'Product management and basic order management are enough for single-product tests. Fulfilment with the supplier is handled outside the store.' },
        { h: 'International checkout', p: 'PayPal and Stripe, multi-currency display and multi-language pages for the markets you advertise in.' },
        { h: 'No maintenance', p: 'SaaS hosted; spend time on products and ads, not on the platform.' },
      ],
      notFit: ['You need automated supplier or fulfilment integrations built into the platform', 'You run a general store with hundreds of SKUs', 'You need advanced upsell and post-purchase apps'],
      steps: ['Create the store on the Free plan and connect PayPal or Stripe.', 'List the test product with honest shipping times for each region.', 'Run ads; process orders from the basic order list and fulfil with your supplier.', 'Keep winners, retire losers; upgrade only when live SKUs pass 20.'],
      alternatives: 'If you want supplier apps and automation inside the platform, Shopify has the largest ecosystem for that; Shoplazza and SHOPLINE offer Chinese-language equivalents.',
      faqIds: ['free-plan', 'platform-fee', 'server-management', 'sku-limit'],
    },
    zh: {
      title: '适合少量 SKU 代发测款的建站工具 | Senvarico',
      h1: '给一次测几个 SKU 的代发（Dropshipping）卖家',
      description: '一次测一个代发产品，需要没有固定成本、不抽佣金的店铺。Senvarico：免费版 20 个 SKU，0% 平台佣金，PayPal 和 Stripe，无需维护服务器。',
      intro: '代发测款起步便宜，但也很容易多花钱。平台订阅加付费应用，可能超过测试本身的预算。对一次只验证一两个产品的卖家来说，在卖出东西之前，店铺不应该花钱。',
      profile: ['你一次测一个或几个产品', '你从供应商采购、直发给欧美买家', '预算主要是广告费', '你不想有固定平台成本'],
      fits: [
        { h: '跑通之前 0 元', p: '免费版（20 个 SKU）没有月费也没有平台佣金，失败的测试只花广告费。' },
        { h: '简单的目录和订单', p: '商品管理和基础订单管理足够单品测试。与供应商的履约在店铺之外处理。' },
        { h: '国际结账', p: 'PayPal 和 Stripe、多币种展示和多语言页面，覆盖你投放的市场。' },
        { h: '不用维护', p: 'SaaS 托管；时间花在产品和广告上，而不是平台上。' },
      ],
      notFit: ['你需要平台内置的供应商或履约自动化集成', '你做几百个 SKU 的杂货店', '你需要高级加购和售后应用'],
      steps: ['用免费版建店，接入 PayPal 或 Stripe。', '上架测款商品，按地区写清真实配送时效。', '跑广告；在基础订单列表处理订单，交给供应商发货。', '留下成功品、淘汰失败品；在线 SKU 超过 20 个再升级。'],
      alternatives: '如果你想要平台内置的供应商应用和自动化，Shopify 的生态最大；Shoplazza 和 SHOPLINE 提供中文的同类方案。',
      faqIds: ['free-plan', 'platform-fee', 'server-management', 'sku-limit'],
    },
  },
  {
    slug: 'makers-and-handmade-brands',
    en: {
      title: 'Ecommerce Website Builder for Makers and Handmade Brands | Senvarico',
      h1: 'For Makers and Small Handmade Brands',
      description: 'A simple store for makers with a small catalog who sell internationally. Senvarico: free plan with 20 SKUs, ¥99/month for 100, 0% platform fee, PayPal and Stripe, multi-currency, no server maintenance.',
      intro: 'A maker\'s catalog is small by nature: a few dozen pieces, sometimes one-offs. The store should respect that scale rather than charge for capacity that will never be used, and it should let overseas buyers pay in a familiar way.',
      profile: ['You make or curate a small range of physical products', 'You have 10–100 SKUs, some in limited quantities', 'You sell to customers in Europe and North America', 'You would rather spend time making than maintaining a website'],
      fits: [
        { h: 'Priced for a small catalog', p: 'Free up to 20 SKUs, ¥99/month up to 100. 0% platform transaction fee.' },
        { h: 'International buyers', p: 'Multi-currency display, multi-language pages, PayPal and Stripe.' },
        { h: 'No code, no servers', p: 'Basic page editing and theme templates; SaaS hosted.' },
        { h: 'Chinese or English admin', p: 'For makers and small studios working in either language.' },
      ],
      notFit: ['You need deep customization of a design-led brand site', 'You want built-in wholesale or B2B pricing', 'Your catalog grows into the hundreds'],
      steps: ['List your current range on the Free plan.', 'Connect PayPal and Stripe; set shipping regions and prices per currency.', 'Share the store with your existing audience on social channels.', 'Upgrade when the range passes 20 SKUs.'],
      alternatives: 'Big Cartel is the closest lightweight peer for makers selling domestically; Squarespace suits makers who want a design-first site.',
      faqIds: ['who-is-it-for', 'cost', 'multi-currency', 'server-management'],
    },
    zh: {
      title: '适合手作者和小型手工品牌的建站工具 | Senvarico',
      h1: '给手作者和小型手工品牌',
      description: '面向目录小、做国际销售的手作者的简单店铺。Senvarico：免费版 20 个 SKU，99 元/月 100 个，0% 平台佣金，PayPal 和 Stripe，多币种，无需维护服务器。',
      intro: '手作者的目录天然就小：几十件作品，有时是孤品。店铺应该尊重这个规模，而不是为永远用不到的容量收费；同时要让海外买家用熟悉的方式付款。',
      profile: ['你制作或精选一小批实物商品', '你有 10–100 个 SKU，有些数量有限', '顾客在欧洲和北美', '你宁愿把时间花在创作上，而不是维护网站'],
      fits: [
        { h: '按小目录定价', p: '20 个 SKU 以内免费，100 个以内 99 元/月。平台交易佣金 0%。' },
        { h: '海外买家', p: '多币种展示、多语言页面、PayPal 和 Stripe。' },
        { h: '无代码、无服务器', p: '基础页面编辑和主题模板；SaaS 托管。' },
        { h: '中英文后台', p: '适合用任一语言工作的手作者和小工作室。' },
      ],
      notFit: ['你需要对设计优先型品牌站做深度定制', '你需要内置的批发或 B2B 定价', '你的目录会增长到几百个'],
      steps: ['在免费版上架当前的作品。', '接入 PayPal 和 Stripe；设置配送区域和各币种价格。', '把店铺分享给你在社交渠道已有的受众。', '作品超过 20 个 SKU 时升级。'],
      alternatives: 'Big Cartel 是面向本土手作者最接近的轻量同类；Squarespace 适合想要设计优先型网站的手作者。',
      faqIds: ['who-is-it-for', 'cost', 'multi-currency', 'server-management'],
    },
  },
  {
    slug: 'soho-cross-border-sellers',
    en: {
      title: 'Ecommerce Website Builder for Solo Cross-Border Sellers (SOHO) | Senvarico',
      h1: 'For Solo Cross-Border Sellers',
      description: 'One person running a cross-border store needs a tool that does not demand a developer or a big budget. Senvarico: free plan with 20 SKUs, ¥99/month for 100, 0% platform fee, PayPal and Stripe, Chinese and English admin.',
      intro: 'A solo cross-border seller does sourcing, listing, ads, customer service and fulfilment alone. Every hour spent on the platform is an hour not spent selling. The store should be simple to run, cheap to keep and should not require technical upkeep.',
      profile: ['You run the store alone, often from China or another sourcing country', 'You sell to Europe and North America', 'You have 10–100 SKUs', 'You want a fixed, low monthly cost and no server to manage'],
      fits: [
        { h: 'One person can run it', p: 'No-code store building, product management, basic orders and page editing, in Chinese or English.' },
        { h: 'Low, predictable cost', p: '¥0/month for 20 SKUs or ¥99/month for 100, with a 0% platform transaction fee.' },
        { h: 'International from day one', p: 'PayPal and Stripe, multi-currency and multi-language storefronts.' },
        { h: 'Nothing to maintain', p: 'SaaS hosted; no updates, backups or security patches.' },
      ],
      notFit: ['You plan to scale into a multi-person operation with complex workflows soon', 'You need thousands of SKUs', 'You need ERP or warehouse integrations'],
      steps: ['Start on the Free plan; connect PayPal and Stripe.', 'List your best 20 SKUs with clear shipping regions.', 'Drive traffic through TikTok, Facebook or your existing channels.', 'Upgrade to the Small Seller plan as the catalog grows past 20.'],
      alternatives: 'If you expect to grow into a team with complex needs quickly, Shopify or Shoplazza offer more room; if you want a Chinese vendor to run the store for you, Shopyy bundles services.',
      faqIds: ['who-is-it-for', 'cost', 'chinese', 'server-management'],
    },
    zh: {
      title: '适合跨境 SOHO 卖家的独立站建站工具 | Senvarico',
      h1: '给跨境 SOHO 卖家',
      description: '一个人运营跨境店铺，需要的是不用开发者、不用大预算的工具。Senvarico：免费版 20 个 SKU，99 元/月 100 个，0% 平台佣金，PayPal 和 Stripe，中英文后台。',
      intro: '跨境 SOHO 一个人做选品、上架、投放、客服和履约。花在平台上的每一小时，都是没花在卖货上的一小时。店铺要好运营、便宜、并且不需要技术维护。',
      profile: ['你一个人运营店铺，通常在中国或其他货源地', '你卖到欧洲和北美', '你有 10–100 个 SKU', '你想要固定的低月费，不想管服务器'],
      fits: [
        { h: '一个人就能运营', p: '零代码建站、商品管理、基础订单和页面编辑，中文或英文。' },
        { h: '低而可预期的成本', p: '20 个 SKU 0 元/月，100 个 99 元/月，平台交易佣金 0%。' },
        { h: '从第一天起就是国际化', p: 'PayPal 和 Stripe，多币种、多语言店面。' },
        { h: '没有需要维护的东西', p: 'SaaS 托管；没有更新、备份或安全补丁。' },
      ],
      notFit: ['你计划很快扩展成有复杂流程的多人团队', '你需要数千 SKU', '你需要 ERP 或仓储集成'],
      steps: ['从免费版开始，接入 PayPal 和 Stripe。', '上架最好的 20 个 SKU，写清配送区域。', '通过 TikTok、Facebook 或已有渠道引流。', '目录超过 20 个后升级小卖家版。'],
      alternatives: '如果你预计很快会成长为需求复杂的团队，Shopify 或 Shoplazza 空间更大；如果你想要国内服务商代运营，Shopyy 有打包服务。',
      faqIds: ['who-is-it-for', 'cost', 'chinese', 'server-management'],
    },
  },
  {
    slug: 'small-ecommerce-teams',
    en: {
      title: 'Ecommerce Website Builder for Small Ecommerce Teams | Senvarico',
      h1: 'For Small Cross-Border Ecommerce Teams',
      description: 'Two-to-five-person cross-border teams that have found a working catalog and want a stable, low-cost store. Senvarico Small Seller plan: ¥99/month, 100 SKUs, 0% platform fee, multi-language, multi-currency.',
      intro: 'A small team has moved past testing: there is a catalog that sells, a few markets that respond, and a monthly routine of ads, orders and support. The store now needs to be stable and inexpensive rather than experimental, without growing into an enterprise system nobody on the team has time to run.',
      profile: ['A team of two to five people', 'A stable catalog of roughly 20–100 SKUs', 'Customers in several European and North American markets', 'No dedicated developer'],
      fits: [
        { h: 'Room for a stable catalog', p: 'The Small Seller plan covers up to 100 SKUs for ¥99/month with a 0% platform transaction fee.' },
        { h: 'Multi-market storefront', p: 'Multi-language and multi-currency pages with PayPal and Stripe checkout for the markets that responded during testing.' },
        { h: 'Shared admin in Chinese or English', p: 'Team members can work in the language they prefer.' },
        { h: 'No infrastructure role needed', p: 'SaaS hosted; nobody has to own servers, updates or backups.' },
      ],
      notFit: ['You need role-based permissions and approval workflows', 'You need ERP, warehouse or multi-location inventory', 'Your catalog is heading past a few hundred SKUs'],
      steps: ['Move the winning catalog onto the Small Seller plan.', 'Set languages and currencies for each active market.', 'Run the monthly routine: ads, orders, support, restocks.', 'When needs exceed a lightweight tool, migrate to a broader platform with a clear reason.'],
      alternatives: 'Shopify, Shoplazza and SHOPLINE are the usual next step for teams that need permissions, apps and larger catalogs.',
      faqIds: ['who-is-it-for', 'sku-limit', 'multi-language', 'vs-enterprise'],
    },
    zh: {
      title: '适合小型电商团队的独立站建站工具 | Senvarico',
      h1: '给小型跨境电商团队',
      description: '两到五人、已经找到能卖的目录、想要稳定低成本店铺的跨境团队。Senvarico 小卖家版：99 元/月，100 个 SKU，0% 平台佣金，多语言、多币种。',
      intro: '小团队已经过了测试期：有一批能卖的目录、几个有反应的市场、每月固定的投放、订单和客服节奏。店铺现在需要的是稳定和低成本，而不是实验性，也不该长成一个团队里没人有时间维护的企业级系统。',
      profile: ['两到五人的团队', '大约 20–100 个 SKU 的稳定目录', '顾客分布在欧美几个市场', '没有专职开发者'],
      fits: [
        { h: '容得下稳定目录', p: '小卖家版 99 元/月，最多 100 个 SKU，平台交易佣金 0%。' },
        { h: '多市场店面', p: '多语言、多币种页面，PayPal 和 Stripe 结账，覆盖测试期有反应的市场。' },
        { h: '中英文共用后台', p: '团队成员可以各自用偏好的语言。' },
        { h: '不需要基础设施角色', p: 'SaaS 托管；没有人需要负责服务器、更新或备份。' },
      ],
      notFit: ['你需要角色权限和审批流程', '你需要 ERP、仓储或多地库存', '目录正在向几百个 SKU 增长'],
      steps: ['把跑通的目录迁到小卖家版。', '为每个活跃市场设置语言和币种。', '跑月度节奏：投放、订单、客服、补货。', '需求超出轻量工具时，带着明确的理由迁移到更全面的平台。'],
      alternatives: '需要权限、应用和更大目录的团队，通常下一步是 Shopify、Shoplazza 或 SHOPLINE。',
      faqIds: ['who-is-it-for', 'sku-limit', 'multi-language', 'vs-enterprise'],
    },
  },
  {
    slug: 'selling-to-europe',
    en: {
      title: 'Ecommerce Website Builder for Selling to Europe | Senvarico',
      h1: 'A Lightweight Store for Small Sellers Targeting Europe',
      description: 'Selling to European customers as a small cross-border seller: multi-currency, multi-language, PayPal and Stripe, low fixed cost. How Senvarico fits and where it does not.',
      intro: 'Europe is many markets, not one: different languages, currencies and expectations. For a small seller, the store needs to present prices and pages in a way each market recognizes, without the cost and complexity of an enterprise localization setup.',
      profile: ['You sell to one or several European countries', 'You have 10–100 SKUs', 'You want prices shown in local currencies and pages in local languages', 'You want to keep platform costs low while you learn which markets respond'],
      fits: [
        { h: 'Multi-currency and multi-language', p: 'Storefronts can show local currencies and languages for the European markets you target.' },
        { h: 'Familiar payment methods', p: 'PayPal and Stripe checkout, with their own processing fees and no platform commission on top.' },
        { h: 'Low fixed cost per market test', p: '¥0/month for 20 SKUs or ¥99/month for 100, 0% platform transaction fee.' },
        { h: 'No servers', p: 'SaaS hosted, so there is no infrastructure to keep compliant or online.' },
      ],
      notFit: ['You need automated EU VAT/OSS calculation and filing built into the platform', 'You need local payment methods beyond PayPal and Stripe', 'You need marketplace integrations for European marketplaces'],
      steps: ['Choose two or three target countries and set their currencies and languages.', 'Connect PayPal and Stripe; state shipping times and duties clearly per region.', 'Test with a small catalog and country-specific ads.', 'Expand languages and SKUs as markets respond.'],
      alternatives: 'For built-in tax automation and local payment breadth across Europe, Shopify and PrestaShop are broader options.',
      faqIds: ['cross-border', 'multi-currency', 'multi-language', 'paypal'],
    },
    zh: {
      title: '适合做欧洲市场的独立站建站工具 | Senvarico',
      h1: '给面向欧洲市场的小卖家的轻量级店铺',
      description: '作为跨境小卖家卖给欧洲顾客：多币种、多语言、PayPal 和 Stripe、低固定成本。Senvarico 如何匹配，以及哪里不匹配。',
      intro: '欧洲是许多个市场，不是一个：语言、币种和消费习惯都不同。对小卖家来说，店铺需要用各个市场认得的方式呈现价格和页面，又不能背上企业级本地化的成本和复杂度。',
      profile: ['你卖到一个或几个欧洲国家', '你有 10–100 个 SKU', '你想让价格用本地币种、页面用本地语言展示', '你想在摸清哪些市场有反应之前保持低平台成本'],
      fits: [
        { h: '多币种、多语言', p: '店面可以按你的目标欧洲市场展示本地币种和语言。' },
        { h: '熟悉的支付方式', p: 'PayPal 和 Stripe 结账，只有通道自身的手续费，没有平台佣金。' },
        { h: '每个市场测试的固定成本很低', p: '20 个 SKU 0 元/月，100 个 99 元/月，平台交易佣金 0%。' },
        { h: '没有服务器', p: 'SaaS 托管，没有需要保持合规和在线的基础设施。' },
      ],
      notFit: ['你需要平台内置的欧盟 VAT/OSS 自动计算和申报', '你需要 PayPal 和 Stripe 之外的本地支付方式', '你需要对接欧洲本地电商平台'],
      steps: ['选两三个目标国家，设置它们的币种和语言。', '接入 PayPal 和 Stripe；按地区写清配送时效和关税。', '用小目录和分国家投放测试。', '市场有反应后再扩展语言和 SKU。'],
      alternatives: '如果需要内置税务自动化和更广的欧洲本地支付覆盖，Shopify 和 PrestaShop 是更全面的选择。',
      faqIds: ['cross-border', 'multi-currency', 'multi-language', 'paypal'],
    },
  },
  {
    slug: 'selling-to-north-america',
    en: {
      title: 'Ecommerce Website Builder for Selling to North America | Senvarico',
      h1: 'A Lightweight Store for Small Sellers Targeting North America',
      description: 'Selling to US and Canadian customers as a small cross-border seller: USD and CAD display, PayPal and Stripe, fast pages for ad traffic, low fixed cost. How Senvarico fits and where it does not.',
      intro: 'North America is the most common first market for cross-border sellers testing products through TikTok and Facebook ads. Buyers expect prices in their currency, familiar checkout and clear shipping expectations. The store should deliver that without a large platform bill while the seller is still finding product-market fit.',
      profile: ['You sell to the United States and Canada', 'You test or run 10–100 SKUs', 'Most traffic comes from paid social', 'You want a Chinese or English admin and no server to manage'],
      fits: [
        { h: 'USD and CAD, PayPal and Stripe', p: 'Multi-currency display and the two checkout options North American buyers know best, with no platform commission on top of their fees.' },
        { h: 'Lightweight pages for ad clicks', p: 'Storefronts are lightweight, which helps mobile visitors arriving from ads.' },
        { h: 'Free while testing', p: 'The Free plan (20 SKUs) costs ¥0/month; the Small Seller plan (100 SKUs) is ¥99/month.' },
        { h: 'Run it from anywhere', p: 'Chinese and English admin; SaaS hosted.' },
      ],
      notFit: ['You need automated US sales-tax calculation built into the platform', 'You need Amazon or Walmart marketplace integrations', 'You need thousands of SKUs'],
      steps: ['Set USD (and CAD if relevant) as storefront currencies and connect PayPal and Stripe.', 'List test products with clear shipping times to the US and Canada.', 'Run TikTok or Facebook campaigns to product pages.', 'Upgrade when the winning catalog passes 20 SKUs.'],
      alternatives: 'For built-in tax automation and marketplace integrations, Shopify is the broader option; Square Online suits sellers who already use Square in person in the US.',
      faqIds: ['cross-border', 'multi-currency', 'stripe', 'tiktok'],
    },
    zh: {
      title: '适合做北美市场的独立站建站工具 | Senvarico',
      h1: '给面向北美市场的小卖家的轻量级店铺',
      description: '作为跨境小卖家卖给美国和加拿大顾客：美元和加元展示、PayPal 和 Stripe、面向广告流量的快页面、低固定成本。Senvarico 如何匹配，以及哪里不匹配。',
      intro: '北美是通过 TikTok 和 Facebook 广告测款的跨境卖家最常见的第一个市场。买家期望看到本币价格、熟悉的结账方式和清晰的配送预期。在卖家还在寻找产品市场匹配的阶段，店铺应该做到这些，同时不背大平台账单。',
      profile: ['你卖到美国和加拿大', '你在测试或运营 10–100 个 SKU', '流量主要来自付费社交', '你想要中英文后台，不想管服务器'],
      fits: [
        { h: '美元、加元，PayPal 和 Stripe', p: '多币种展示，加上北美买家最熟悉的两种结账方式，通道手续费之上没有平台佣金。' },
        { h: '面向广告点击的轻量页面', p: '店面轻量，对从广告进来的移动端访客有帮助。' },
        { h: '测试期免费', p: '免费版（20 个 SKU）0 元/月；小卖家版（100 个 SKU）99 元/月。' },
        { h: '在任何地方运营', p: '中英文后台；SaaS 托管。' },
      ],
      notFit: ['你需要平台内置的美国销售税自动计算', '你需要亚马逊或沃尔玛平台集成', '你需要数千 SKU'],
      steps: ['把美元（必要时加元）设为店面币种，接入 PayPal 和 Stripe。', '上架测款商品，写清到美国和加拿大的配送时效。', '用 TikTok 或 Facebook 投放到商品页。', '成功品目录超过 20 个 SKU 时升级。'],
      alternatives: '需要内置税务自动化和平台集成的话，Shopify 更全面；已经在美国线下用 Square 的卖家适合 Square Online。',
      faqIds: ['cross-border', 'multi-currency', 'stripe', 'tiktok'],
    },
  },
];

export function useCaseBySlug(slug: string): UseCase | undefined {
  return USECASES.find((u) => u.slug === slug);
}

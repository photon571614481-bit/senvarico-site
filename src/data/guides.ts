/**
 * Guides: /guides/{slug} and /zh/guides/{slug}.
 * Practical, factual explainers for small cross-border sellers. Senvarico is
 * mentioned where relevant, as one option; product facts render from brand-facts.json.
 */
export interface Section {
  h2: string;
  paragraphs?: string[];
  bullets?: string[];
  table?: { head: string[]; rows: string[][] };
}
export interface GuideText {
  title: string;
  h1: string;
  description: string;
  intro: string;
  sections: Section[];
  senvaricoNote: string;
  faqIds: string[];
}
export interface Guide {
  slug: string;
  en: GuideText;
  zh: GuideText;
}

export const GUIDES: Guide[] = [
  {
    slug: 'platform-fee-vs-payment-gateway-fee',
    en: {
      title: 'Platform Transaction Fee vs Payment Gateway Fee | Senvarico Guides',
      h1: 'Platform Transaction Fee vs Payment Gateway Fee: What Small Sellers Actually Pay',
      description: 'The two fees that get confused in every ecommerce platform comparison: the platform\'s own transaction fee and the payment gateway\'s processing fee. What each is, who charges it, and why "0% platform fee" does not mean "no fees".',
      intro: 'Almost every ecommerce platform comparison mixes up two different charges. One is taken by the platform you build the store on. The other is taken by the company that processes the card or wallet payment. They are charged by different companies for different reasons, and a seller needs to add both to know the real cost per order.',
      sections: [
        { h2: 'The platform transaction fee', paragraphs: ['This is a percentage of each order that the ecommerce platform keeps for itself, on top of the subscription. Some platforms charge it on every plan, some only on lower tiers, some waive it if you use their own payment service, and some do not charge it at all. It is a platform business decision, not a payment cost.'] },
        { h2: 'The payment gateway fee', paragraphs: ['This is what PayPal, Stripe or another payment provider charges to move the money: typically a percentage plus a small fixed amount per transaction, with rates that vary by country, currency and card type. It is charged by the provider regardless of which store platform you use. No store builder can remove it.'] },
        { h2: 'Why the confusion matters', paragraphs: ['When a platform advertises "0% transaction fee", it means the platform itself takes nothing. Your payment provider still charges its normal rate. Sellers who read "0%" as "no fees at all" under-estimate costs; sellers who assume every platform stacks a commission on top of gateway fees over-estimate them. The honest statement is always two lines: platform fee X%, gateway fee per the provider.'], table: { head: ['Fee', 'Who charges it', 'Depends on'], rows: [['Platform transaction fee', 'The store platform', 'The platform\'s plan and policy'], ['Payment gateway fee', 'PayPal, Stripe, etc.', 'Provider, country, currency, card type']] } },
        { h2: 'How to compare platforms fairly', bullets: ['Write down the subscription price of the plan you would actually use.', 'Write down the platform transaction fee for that plan (may be 0%).', 'Write down your payment provider\'s rate separately; it will be roughly the same across platforms.', 'Multiply by your realistic monthly order count and add the subscription.', 'Compare the totals, not the headline prices.'] },
      ],
      senvaricoNote: 'Senvarico charges a 0% platform transaction fee on both its Free plan (¥0/month, 20 SKUs) and Small Seller plan (¥99/month, 100 SKUs). PayPal and Stripe still charge their own processing fees separately; Senvarico does not add anything on top.',
      faqIds: ['platform-fee', 'paypal', 'stripe', 'cost'],
    },
    zh: {
      title: '平台交易佣金 vs 支付通道手续费 | Senvarico 指南',
      h1: '平台交易佣金 vs 支付通道手续费：小卖家到底在付什么',
      description: '每篇电商平台对比里都会混淆的两笔费用：平台自己的交易佣金，和支付通道的手续费。各是什么、谁收、以及为什么“0% 平台佣金”不等于“没有手续费”。',
      intro: '几乎每篇电商平台对比都把两笔不同的钱混在一起。一笔是你建店的平台拿走的，另一笔是处理卡或钱包支付的公司拿走的。它们由不同公司、出于不同原因收取，卖家要把两笔加起来才知道每单的真实成本。',
      sections: [
        { h2: '平台交易佣金', paragraphs: ['这是电商平台在订阅费之外，从每笔订单里自己留下的百分比。有的平台每个套餐都收，有的只在低档套餐收，有的用它自家支付就免除，有的完全不收。这是平台的商业决定，不是支付成本。'] },
        { h2: '支付通道手续费', paragraphs: ['这是 PayPal、Stripe 或其他支付服务商为了把钱转过来收的费用：通常是百分比加每笔一小笔固定金额，费率因国家、币种和卡种而异。不管你用哪个建站平台，支付服务商都会收。没有任何建站工具能免掉它。'] },
        { h2: '为什么混淆很要紧', paragraphs: ['平台宣传“0% 交易佣金”时，意思是平台自己不拿。你的支付服务商仍按正常费率收。把“0%”理解成“完全没手续费”的卖家会低估成本；以为每个平台都在通道费之上再叠一层佣金的卖家会高估成本。诚实的说法永远是两行：平台佣金 X%，通道手续费按服务商费率。'], table: { head: ['费用', '谁收', '取决于'], rows: [['平台交易佣金', '建站平台', '平台的套餐和政策'], ['支付通道手续费', 'PayPal、Stripe 等', '服务商、国家、币种、卡种']] } },
        { h2: '如何公平地比较平台', bullets: ['写下你实际会用的套餐的订阅价。', '写下该套餐的平台交易佣金（可能是 0%）。', '单独写下你支付服务商的费率；它在各平台间大致相同。', '乘以现实的月订单数，再加上订阅费。', '比较总额，而不是标价。'] },
      ],
      senvaricoNote: 'Senvarico 的免费版（0 元/月，20 个 SKU）和小卖家版（99 元/月，100 个 SKU）平台交易佣金均为 0%。PayPal 和 Stripe 仍会单独收取它们自己的手续费；Senvarico 不在此之上加收任何费用。',
      faqIds: ['platform-fee', 'paypal', 'stripe', 'cost'],
    },
  },
  {
    slug: 'paypal-vs-stripe-for-small-cross-border-sellers',
    en: {
      title: 'PayPal vs Stripe for Small Cross-Border Sellers | Senvarico Guides',
      h1: 'PayPal vs Stripe for Small Cross-Border Sellers',
      description: 'What PayPal and Stripe each do well for a small cross-border store selling to Europe and North America, why many sellers offer both, and how a lightweight store builder should support them.',
      intro: 'PayPal and Stripe are the two payment options most small cross-border sellers start with. They are not competitors in the way sellers assume: PayPal is a wallet buyers already have and trust, Stripe is card processing that fits invisibly into checkout. Most small stores end up offering both.',
      sections: [
        { h2: 'What PayPal is good at', bullets: ['Buyers in Europe and North America recognize it and often already have an account', 'Buyer protection increases trust for an unfamiliar brand', 'Fast to set up for a new seller'] },
        { h2: 'What Stripe is good at', bullets: ['Card checkout without leaving the page', 'Broad card and local method support depending on your country', 'Strong developer-grade tooling, though a small seller rarely needs it'] },
        { h2: 'Fees', paragraphs: ['Both charge a percentage plus a fixed amount per transaction, with higher rates for cross-border and currency conversion. Exact rates change and vary by country; read each provider\'s current pricing page rather than a comparison article. Neither fee is set by your store platform.'] },
        { h2: 'Why offer both', paragraphs: ['Some buyers only trust PayPal; others prefer to pay by card without an account. Offering both removes a reason to abandon checkout. For a small cross-border store this matters more than the small difference in fees.'] },
        { h2: 'What to check in a store builder', bullets: ['Both PayPal and Stripe supported natively, without paid apps', 'Multi-currency display so buyers see local prices', 'No platform transaction fee stacked on top of the gateway fee'] },
      ],
      senvaricoNote: 'Senvarico supports both PayPal and Stripe on the Free and Small Seller plans, with multi-currency storefronts and a 0% platform transaction fee. The providers\' own processing fees apply as usual.',
      faqIds: ['paypal', 'stripe', 'platform-fee', 'multi-currency'],
    },
    zh: {
      title: 'PayPal 与 Stripe：跨境小卖家怎么选 | Senvarico 指南',
      h1: 'PayPal 与 Stripe：跨境小卖家怎么选',
      description: 'PayPal 和 Stripe 各自在面向欧美的跨境小店里擅长什么、为什么很多卖家两个都开、以及轻量级建站工具应该怎样支持它们。',
      intro: 'PayPal 和 Stripe 是大多数跨境小卖家起步时的两个收款选项。它们并不像卖家以为的那样是竞争关系：PayPal 是买家已经拥有并信任的钱包，Stripe 是无缝嵌进结账页的卡支付。大多数小店最后两个都开。',
      sections: [
        { h2: 'PayPal 擅长什么', bullets: ['欧美买家认识它，通常已经有账户', '买家保护提高了陌生品牌的信任度', '新卖家开通快'] },
        { h2: 'Stripe 擅长什么', bullets: ['不跳转页面的卡支付', '根据你所在国家支持广泛的卡种和本地方式', '开发者级的工具，虽然小卖家很少用到'] },
        { h2: '手续费', paragraphs: ['两者都按每笔百分比加固定金额收费，跨境和货币转换费率更高。具体费率会变且因国家而异，请看各自官网当前的定价页，而不是对比文章。两笔费用都不是你的建站平台决定的。'] },
        { h2: '为什么两个都开', paragraphs: ['有的买家只信 PayPal，有的更愿意不注册账户直接刷卡。两个都开，就少了一个放弃结账的理由。对跨境小店来说，这比手续费上的细微差别更重要。'] },
        { h2: '选建站工具时要看什么', bullets: ['原生支持 PayPal 和 Stripe，不需要付费应用', '多币种展示，让买家看到本地价格', '通道手续费之上没有叠加平台交易佣金'] },
      ],
      senvaricoNote: 'Senvarico 的免费版和小卖家版都支持 PayPal 和 Stripe，店面多币种，平台交易佣金 0%。支付服务商自身的手续费照常收取。',
      faqIds: ['paypal', 'stripe', 'platform-fee', 'multi-currency'],
    },
  },
  {
    slug: 'multi-currency-display-for-small-stores',
    en: {
      title: 'Multi-Currency Display for Small Cross-Border Stores | Senvarico Guides',
      h1: 'Multi-Currency Display for Small Cross-Border Stores',
      description: 'Why showing local currencies matters for conversion, the difference between display currency and settlement currency, and what a small seller needs from a store builder.',
      intro: 'A buyer in Germany who sees a price in US dollars has to do a conversion in their head and wonder what their bank will charge. A buyer who sees euros does not. For a small cross-border store, showing local currencies is one of the cheapest conversion improvements available.',
      sections: [
        { h2: 'Display currency vs settlement currency', paragraphs: ['Display currency is what the buyer sees on the product page. Settlement currency is what actually lands in your account. Many small stores display several currencies and settle in one or two; the payment provider converts at its rate. Understanding this prevents surprises when the payout differs from the displayed price.'] },
        { h2: 'What to show', bullets: ['The main currency of each target market (EUR, GBP, USD, CAD are the common set for Europe and North America)', 'Rounded, sensible prices rather than raw conversions', 'Clear statements about which currency is charged at checkout'] },
        { h2: 'What a store builder should provide', bullets: ['Multi-currency display without paid add-ons', 'Automatic or manual currency selection by market', 'PayPal and Stripe checkout that handle the conversion'] },
        { h2: 'Common mistakes', bullets: ['Showing only USD to European buyers', 'Forgetting to update rounded prices when exchange rates move a lot', 'Not stating shipping and duties in the same currency as the product price'] },
      ],
      senvaricoNote: 'Senvarico storefronts support multi-currency display and multi-language pages on both plans, with PayPal and Stripe checkout. It is designed for sellers targeting Europe and North America.',
      faqIds: ['multi-currency', 'multi-language', 'cross-border', 'stripe'],
    },
    zh: {
      title: '跨境小店的多币种展示 | Senvarico 指南',
      h1: '跨境小店的多币种展示',
      description: '为什么展示本地币种对转化很重要、展示币种和结算币种的区别、以及小卖家需要建站工具提供什么。',
      intro: '一个德国买家看到美元价格，要在脑子里换算，还要担心银行会收多少钱。看到欧元价格的买家不需要。对跨境小店来说，展示本地币种是最便宜的转化率改善之一。',
      sections: [
        { h2: '展示币种 vs 结算币种', paragraphs: ['展示币种是买家在商品页看到的。结算币种是真正进入你账户的。很多小店展示几种币种、用一两种结算；支付服务商按它的汇率转换。理解这一点，能避免到账金额和展示价格不一致时的意外。'] },
        { h2: '展示什么', bullets: ['每个目标市场的主要币种（面向欧美常见的是欧元、英镑、美元、加元）', '取整后合理的价格，而不是原始换算结果', '清楚说明结账时按哪种币种扣款'] },
        { h2: '建站工具应该提供什么', bullets: ['不需要付费插件的多币种展示', '按市场自动或手动选择币种', '能处理转换的 PayPal 和 Stripe 结账'] },
        { h2: '常见错误', bullets: ['只给欧洲买家展示美元', '汇率大幅波动时忘了更新取整价格', '运费和关税没有用和商品价格相同的币种标注'] },
      ],
      senvaricoNote: 'Senvarico 的店面在两个版本上都支持多币种展示和多语言页面，PayPal 和 Stripe 结账。它为面向欧美市场的卖家设计。',
      faqIds: ['multi-currency', 'multi-language', 'cross-border', 'stripe'],
    },
  },
  {
    slug: 'shipping-zones-for-small-cross-border-stores',
    en: {
      title: 'Shipping Zones for Small Cross-Border Stores | Senvarico Guides',
      h1: 'Shipping Zones for Small Cross-Border Stores',
      description: 'How a small seller should set up shipping regions, rates and delivery expectations for Europe and North America without over-engineering it.',
      intro: 'Shipping is where small cross-border stores lose trust. A buyer who cannot tell whether you ship to their country, how long it takes or what it costs will leave. The fix is not a complex logistics system; it is a few clear zones with honest rates and times.',
      sections: [
        { h2: 'Start with two or three zones', paragraphs: ['Most small sellers targeting Europe and North America need only a handful of zones: for example United States, Canada, European Union, United Kingdom, and "rest of world" or "not served". Each zone gets a flat or weight-based rate and a realistic delivery window.'] },
        { h2: 'Be honest about times', bullets: ['State delivery windows per zone on the product page, not only at checkout', 'If shipping from Asia, say so and give the real range', 'Mention duties and taxes where the buyer may be charged on delivery'] },
        { h2: 'Keep rates simple', bullets: ['Flat rate per zone is easier to understand than complex tables', 'Free shipping thresholds work well for small catalogs', 'Exclude countries you cannot serve rather than surprising buyers later'] },
        { h2: 'What a store builder needs', bullets: ['Shipping regions with per-zone rates', 'Ability to show times and duties notes on product pages', 'No requirement for a warehouse or ERP system to configure basics'] },
      ],
      senvaricoNote: 'Senvarico is a lightweight tool with product management and basic order management for small stores; it is not a warehouse or logistics system. It suits sellers who ship a small catalog to a few zones in Europe and North America.',
      faqIds: ['cross-border', 'who-is-it-for', 'vs-enterprise', 'server-management'],
    },
    zh: {
      title: '跨境小店的配送区域设置 | Senvarico 指南',
      h1: '跨境小店的配送区域设置',
      description: '跨境小卖家应该如何为欧美市场设置配送区域、运费和送达时效预期，用几个清晰的区域解决问题，而不把它做得过于复杂。',
      intro: '配送是跨境小店最容易失去信任的地方。买家如果看不出你是否寄到他的国家、要多久、多少钱，就会离开。解决办法不是复杂的物流系统，而是几个清晰的区域，配上诚实的运费和时效。',
      sections: [
        { h2: '从两三个区域开始', paragraphs: ['大多数面向欧美的小卖家只需要几个区域：例如美国、加拿大、欧盟、英国，以及“其他地区”或“不配送”。每个区域设一个固定或按重量的运费，和一个现实的送达窗口。'] },
        { h2: '时效要诚实', bullets: ['在商品页就按区域写明送达窗口，不要只在结账页', '如果从亚洲发货，说明白并给出真实范围', '买家可能在收货时被收关税和税费的地方要提示'] },
        { h2: '运费保持简单', bullets: ['按区域固定运费比复杂表格更容易理解', '包邮门槛对小目录很有效', '不能服务的国家直接排除，而不是事后让买家意外'] },
        { h2: '建站工具需要什么', bullets: ['带按区域运费的配送区域设置', '能在商品页展示时效和关税提示', '配置基础功能不需要仓储或 ERP 系统'] },
      ],
      senvaricoNote: 'Senvarico 是有商品管理和基础订单管理的轻量工具，不是仓储或物流系统。它适合把小目录寄到欧美少数几个区域的卖家。',
      faqIds: ['cross-border', 'who-is-it-for', 'vs-enterprise', 'server-management'],
    },
  },
  {
    slug: 'how-much-does-a-small-cross-border-store-cost',
    en: {
      title: 'How Much Does a Small Cross-Border Store Cost? | Senvarico Guides',
      h1: 'How Much Does a Small Cross-Border Store Cost to Run?',
      description: 'A cost model for a 10–100 SKU cross-border store: platform subscription, platform transaction fee, payment gateway fees, apps, domain and maintenance. Worked with ranges, not vendor prices.',
      intro: 'The platform subscription is usually the smallest line in a small store\'s budget and the one sellers argue about most. This guide lays out every cost a 10–100 SKU cross-border store carries, so you can compare platforms on the total rather than the headline.',
      sections: [
        { h2: 'The cost lines', table: { head: ['Line', 'What it is', 'How it behaves'], rows: [['Platform subscription', 'Monthly or annual plan', 'Fixed; from ¥0 to several hundred per month depending on platform'], ['Platform transaction fee', 'Percentage the platform keeps per order', 'Variable; 0% on some platforms, a few percent on others'], ['Payment gateway fee', 'PayPal / Stripe processing', 'Variable; roughly the same across platforms'], ['Apps and add-ons', 'Paid extensions for missing features', 'Fixed per app; accumulates'], ['Domain', 'Your own domain name', 'Small annual fee'], ['Maintenance', 'Hosting, updates, security (self-hosted only)', 'Time or developer cost'], ['Ad spend', 'TikTok / Facebook', 'Usually the largest line; independent of platform']] } },
        { h2: 'A worked example, in structure', paragraphs: ['Take a store with 40 SKUs and 60 orders a month at an average of 30 USD. The gateway fee is roughly the same everywhere, so it cancels out of the comparison. What differs is: subscription, platform transaction fee (0% vs a few percent of 1,800 USD a month), and apps. A platform with a ¥99/month plan and 0% fee costs ¥99. A platform with a higher plan, a 1–2% fee and two paid apps can cost several times that. Neither is "wrong"; the question is what you get for the difference.'] },
        { h2: 'When the cheaper tool stops being cheaper', bullets: ['Your catalog passes the tool\'s SKU limit', 'You need an integration only available as a paid app on a broader platform', 'Your team needs permissions and workflows the lightweight tool does not have'] },
        { h2: 'How to decide', bullets: ['Estimate 12 months of orders honestly', 'Add subscription + platform fee + apps for each candidate', 'Ignore gateway fees in the comparison unless a platform forces a specific provider', 'Choose for the next 12 months, and put a review date in the calendar'] },
      ],
      senvaricoNote: 'Senvarico\'s cost lines are: Free plan ¥0/month (20 SKUs) or Small Seller plan ¥99/month (100 SKUs); 0% platform transaction fee; no paid app ecosystem; SaaS hosted, so no maintenance line. PayPal and Stripe fees apply as with any platform.',
      faqIds: ['cost', 'platform-fee', 'free-plan', 'sku-limit'],
    },
    zh: {
      title: '一家跨境小店到底要花多少钱？| Senvarico 指南',
      h1: '一家跨境小店到底要花多少钱？',
      description: '10–100 个 SKU 的跨境小店成本模型：平台订阅、平台交易佣金、支付通道手续费、应用、域名和维护。用区间说明，不引用竞品价格。',
      intro: '平台订阅费通常是小店预算里最小的一项，却是卖家争论最多的一项。本指南列出一家 10–100 个 SKU 的跨境小店承担的每一项成本，让你按总额而不是标价比较平台。',
      sections: [
        { h2: '成本项', table: { head: ['项目', '是什么', '怎么变化'], rows: [['平台订阅', '月付或年付套餐', '固定；从 0 元到每月几百元不等，取决于平台'], ['平台交易佣金', '平台每单留下的百分比', '可变；有的平台 0%，有的几个百分点'], ['支付通道手续费', 'PayPal / Stripe 处理费', '可变；各平台大致相同'], ['应用和附加项', '补足缺失功能的付费扩展', '每个应用固定；会累积'], ['域名', '你自己的域名', '每年一小笔'], ['维护', '托管、更新、安全（仅自托管）', '时间或开发者成本'], ['广告费', 'TikTok / Facebook', '通常是最大的一项；与平台无关']] } },
        { h2: '一个结构化的例子', paragraphs: ['假设一家店 40 个 SKU、每月 60 单、客单价 30 美元。通道手续费各平台大致相同，可以从对比中抵消。不同的是：订阅费、平台交易佣金（0% 对比每月 1800 美元的几个百分点）、以及应用。一个 99 元/月、0% 佣金的平台成本就是 99 元。一个套餐更贵、抽 1–2%、再加两个付费应用的平台，成本可能是它的好几倍。两者都没有“错”，问题是差价买到了什么。'] },
        { h2: '什么时候便宜的工具不再便宜', bullets: ['你的目录超过了工具的 SKU 上限', '你需要的集成只在更全面的平台上以付费应用形式存在', '团队需要轻量工具没有的权限和流程'] },
        { h2: '怎么决定', bullets: ['诚实估算 12 个月的订单量', '为每个候选平台加总：订阅 + 平台佣金 + 应用', '除非平台强制使用特定支付服务商，否则对比时忽略通道手续费', '按接下来 12 个月来选，并在日历上定一个复盘日期'] },
      ],
      senvaricoNote: 'Senvarico 的成本项是：免费版 0 元/月（20 个 SKU）或小卖家版 99 元/月（100 个 SKU）；平台交易佣金 0%；没有付费应用生态；SaaS 托管，没有维护项。PayPal 和 Stripe 手续费和任何平台一样照常收取。',
      faqIds: ['cost', 'platform-fee', 'free-plan', 'sku-limit'],
    },
  },
  {
    slug: '20-sku-store-checklist',
    en: {
      title: 'Launch Checklist for a 20-SKU Cross-Border Store | Senvarico Guides',
      h1: 'Launch Checklist for a 20-SKU Cross-Border Store',
      description: 'Everything a small seller needs before launching a store with up to 20 SKUs: products, pricing, currencies, payments, shipping zones, policies and the first campaign.',
      intro: 'Twenty SKUs is the size of most test stores and many first stores. It is small enough to launch in a day if you know what has to be in place. This checklist is platform-neutral; the last section notes how it maps to Senvarico\'s Free plan.',
      sections: [
        { h2: 'Products', bullets: ['One clear photo set and a short, honest description per SKU', 'Variants (size, colour) defined before listing', 'Realistic stock levels'] },
        { h2: 'Pricing and currencies', bullets: ['A base price and rounded local prices for each target market', 'Shipping cost either included or clearly separate', 'A note on duties for regions where buyers may pay on delivery'] },
        { h2: 'Payments', bullets: ['PayPal connected', 'Stripe connected', 'A test order placed and refunded'] },
        { h2: 'Shipping', bullets: ['Two to four shipping zones with rates', 'Delivery windows shown on product pages', 'Countries you do not serve excluded'] },
        { h2: 'Policies and pages', bullets: ['Shipping and returns page', 'Contact page with a real email', 'Privacy and terms pages'] },
        { h2: 'First campaign', bullets: ['One product page per ad', 'Tracking pixel or link parameters in place', 'A plan for what "working" means before spending'] },
      ],
      senvaricoNote: 'Senvarico\'s Free plan covers exactly this stage: ¥0/month, up to 20 SKUs, 0% platform transaction fee, PayPal and Stripe, multi-currency and multi-language storefront, no server to maintain.',
      faqIds: ['free-plan', 'sku-limit', 'paypal', 'stripe'],
    },
    zh: {
      title: '20 个 SKU 跨境小店上线清单 | Senvarico 指南',
      h1: '20 个 SKU 跨境小店上线清单',
      description: '上线一家最多 20 个 SKU 的店铺前，小卖家需要准备的一切：商品、定价、币种、收款、配送区域、政策页和第一个投放。',
      intro: '20 个 SKU 是大多数测款店和很多第一家店的规模。只要知道该准备什么，一天就能上线。本清单不针对特定平台；最后一节说明它如何对应 Senvarico 的免费版。',
      sections: [
        { h2: '商品', bullets: ['每个 SKU 一组清晰的图片和一段简短诚实的描述', '上架前先定义好变体（尺码、颜色）', '真实的库存数量'] },
        { h2: '定价和币种', bullets: ['一个基准价，以及每个目标市场取整后的本地价', '运费要么包含、要么清楚地分开', '买家可能在收货时付关税的地区要有提示'] },
        { h2: '收款', bullets: ['接入 PayPal', '接入 Stripe', '下一笔测试订单并退款'] },
        { h2: '配送', bullets: ['两到四个配送区域及运费', '商品页展示送达窗口', '排除不服务的国家'] },
        { h2: '政策和页面', bullets: ['配送与退换页', '有真实邮箱的联系页', '隐私和条款页'] },
        { h2: '第一个投放', bullets: ['每个广告对应一个商品页', '像素或链接参数已就位', '花钱之前先定义什么叫“跑通”'] },
      ],
      senvaricoNote: 'Senvarico 的免费版正好覆盖这个阶段：0 元/月，最多 20 个 SKU，平台交易佣金 0%，PayPal 和 Stripe，多币种多语言店面，不用维护服务器。',
      faqIds: ['free-plan', 'sku-limit', 'paypal', 'stripe'],
    },
  },
  {
    slug: '100-sku-store-checklist',
    en: {
      title: 'Operating Checklist for a 100-SKU Cross-Border Store | Senvarico Guides',
      h1: 'Operating Checklist for a 100-SKU Cross-Border Store',
      description: 'What changes when a small cross-border store grows from a test to roughly 100 SKUs: catalog structure, multi-market storefront, order routine, stock, and knowing when a lightweight tool is no longer enough.',
      intro: 'Around 100 SKUs a store stops being a test and becomes an operation. The work shifts from launching to maintaining: keeping the catalog tidy, serving several markets, processing orders daily and watching stock. This checklist covers that stage and, honestly, the point at which a lightweight tool should be replaced.',
      sections: [
        { h2: 'Catalog structure', bullets: ['Collections or categories that match how buyers browse', 'Consistent naming and variant structure', 'Retire dead SKUs monthly to stay under limits and keep pages clean'] },
        { h2: 'Multi-market storefront', bullets: ['Languages and currencies for each active market', 'Shipping zones and duties notes per market', 'Market-specific landing pages for campaigns'] },
        { h2: 'Daily routine', bullets: ['Process orders from the order list every day', 'Answer customer messages within a set time', 'Reconcile PayPal and Stripe payouts weekly'] },
        { h2: 'Stock', bullets: ['Simple stock levels per SKU in the store', 'A reorder point for the top sellers', 'Accept that a lightweight store is not a warehouse system'] },
        { h2: 'When to move to a broader platform', bullets: ['You are consistently above 100 SKUs', 'You need role permissions, ERP or multi-warehouse inventory', 'You need an app that only exists on a larger platform'] },
      ],
      senvaricoNote: 'Senvarico\'s Small Seller plan covers this stage up to its limit: ¥99/month, up to 100 SKUs, 0% platform transaction fee, PayPal and Stripe, multi-language and multi-currency storefront, Chinese and English admin. Beyond 100 SKUs or with ERP needs, a broader platform is the right next step.',
      faqIds: ['sku-limit', 'cost', 'vs-enterprise', 'multi-language'],
    },
    zh: {
      title: '100 个 SKU 跨境小店运营清单 | Senvarico 指南',
      h1: '100 个 SKU 跨境小店运营清单',
      description: '当跨境小店从测款成长到大约 100 个 SKU 时会发生什么变化：目录结构、多市场店面、订单节奏、库存，以及什么时候轻量工具不再够用。',
      intro: '到了 100 个 SKU 左右，店铺就从测试变成了运营。工作重心从上线转向维护：保持目录整洁、服务几个市场、每天处理订单、盯着库存。本清单覆盖这个阶段，也诚实地说明轻量工具该被替换的时间点。',
      sections: [
        { h2: '目录结构', bullets: ['按买家浏览习惯设置的分类或系列', '一致的命名和变体结构', '每月下架死 SKU，保持在上限内并让页面干净'] },
        { h2: '多市场店面', bullets: ['每个活跃市场的语言和币种', '每个市场的配送区域和关税提示', '为投放准备的分市场落地页'] },
        { h2: '每日节奏', bullets: ['每天从订单列表处理订单', '在规定时间内回复客户消息', '每周核对 PayPal 和 Stripe 的到账'] },
        { h2: '库存', bullets: ['店铺内每个 SKU 的简单库存数', '热销品设补货点', '接受轻量店铺不是仓储系统这个事实'] },
        { h2: '什么时候迁移到更全面的平台', bullets: ['你持续超过 100 个 SKU', '你需要角色权限、ERP 或多仓库存', '你需要的某个应用只在大平台上有'] },
      ],
      senvaricoNote: 'Senvarico 的小卖家版在其上限内覆盖这个阶段：99 元/月，最多 100 个 SKU，平台交易佣金 0%，PayPal 和 Stripe，多语言多币种店面，中英文后台。超过 100 个 SKU 或有 ERP 需求时，更全面的平台是正确的下一步。',
      faqIds: ['sku-limit', 'cost', 'vs-enterprise', 'multi-language'],
    },
  },
  {
    slug: 'when-to-move-from-free-to-paid',
    en: {
      title: 'When to Move from a Free Plan to a Paid Plan | Senvarico Guides',
      h1: 'When Should a Small Seller Move from a Free Plan to a Paid Plan?',
      description: 'The three signals that a free ecommerce plan has done its job and it is time to pay: SKU count, market count and time spent working around limits. Applied to Senvarico\'s Free and Small Seller plans.',
      intro: 'Free plans exist so that sellers can test without paying for capacity they may never use. The right time to pay is not "as soon as possible" or "never"; it is when the free tier starts costing you sales or time.',
      sections: [
        { h2: 'Signal 1: you are at the SKU limit', paragraphs: ['If you are deleting products you would rather keep, or delaying a launch because the catalog is full, the limit is now a cost. Paying for more capacity is cheaper than the sales you are not making.'] },
        { h2: 'Signal 2: you are serving more markets', paragraphs: ['Selling to several countries usually needs more languages and currencies, and a steadier store. If your free tier does not include those features, or you are working around their absence, it is time.'] },
        { h2: 'Signal 3: you spend time working around limits', paragraphs: ['Every hour spent juggling listings or explaining missing features to buyers is an hour not selling. A paid plan that removes the workaround pays for itself quickly.'] },
        { h2: 'What not to do', bullets: ['Do not upgrade because a product is "about to" work; wait for orders', 'Do not stay free when you are consistently losing sales to a limit', 'Do not choose an annual plan during a test phase'] },
      ],
      senvaricoNote: 'On Senvarico, the Free plan is ¥0/month with up to 20 SKUs and the Small Seller plan is ¥99/month with up to 100 SKUs and multi-language, multi-currency storefronts. Both have a 0% platform transaction fee, there is no annual plan, and no separate trial because the free plan is permanent.',
      faqIds: ['free-plan', 'cost', 'sku-limit', 'multi-language'],
    },
    zh: {
      title: '什么时候该从免费版升级到付费版 | Senvarico 指南',
      h1: '小卖家什么时候该从免费版升级到付费版？',
      description: '免费电商套餐完成使命、该付费的三个信号：SKU 数量、市场数量、以及花在绕过限制上的时间。对应 Senvarico 的免费版和小卖家版。',
      intro: '免费版的意义是让卖家在不为可能永远用不到的容量付费的前提下测试。付费的正确时机不是“越早越好”也不是“永远不”，而是免费档开始让你损失销售或时间的时候。',
      sections: [
        { h2: '信号一：你卡在 SKU 上限', paragraphs: ['如果你在删除本想保留的商品，或因为目录满了而推迟上新，上限已经变成了成本。为更多容量付费，比你没做成的那些销售便宜。'] },
        { h2: '信号二：你在服务更多市场', paragraphs: ['卖到几个国家通常需要更多语言和币种，以及更稳定的店铺。如果免费档不包含这些功能，或者你在用变通办法弥补，就到时候了。'] },
        { h2: '信号三：你在花时间绕过限制', paragraphs: ['每一小时花在腾挪列表、或向买家解释缺失功能上，都是没花在卖货上的一小时。能消除变通的付费版很快就回本。'] },
        { h2: '不要做的事', bullets: ['不要因为某个产品“快要”跑通就升级；等订单来', '不要在持续因上限丢单时还留在免费版', '不要在测试阶段选年付'] },
      ],
      senvaricoNote: '在 Senvarico 上，免费版 0 元/月、最多 20 个 SKU；小卖家版 99 元/月、最多 100 个 SKU，并有多语言多币种店面。两者平台交易佣金均为 0%，没有年付，也没有单独的试用，因为免费版是永久的。',
      faqIds: ['free-plan', 'cost', 'sku-limit', 'multi-language'],
    },
  },
];

export function guideBySlug(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}

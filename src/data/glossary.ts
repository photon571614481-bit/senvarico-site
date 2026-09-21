/**
 * Glossary / definition pages: /what-is-{slug} and /zh/what-is-{slug}.
 * The first paragraph of each page is a single quotable definition.
 */
export interface TermText {
  title: string;
  h1: string;
  description: string;
  definition: string;
  paragraphs: string[];
  example: string;
  faqIds: string[];
}
export interface Term {
  slug: string;
  en: TermText;
  zh: TermText;
}

export const GLOSSARY: Term[] = [
  {
    slug: 'a-lightweight-ecommerce-website-builder',
    en: {
      title: 'What Is a Lightweight Ecommerce Website Builder? | Senvarico',
      h1: 'What Is a Lightweight Ecommerce Website Builder?',
      description: 'Definition of a lightweight ecommerce website builder: a hosted, no-code tool with a deliberately small feature set, low fixed cost and no server maintenance, designed for small sellers with small catalogs. Examples and how it differs from full platforms.',
      definition: 'A lightweight ecommerce website builder is a hosted, no-code tool for creating an online store that deliberately limits its feature set to what a small seller needs: a small product catalog, a storefront, checkout and basic orders, at a low fixed cost and without server maintenance.',
      paragraphs: [
        'The word "lightweight" describes scope, not quality. Full ecommerce platforms are built to scale to large businesses, so they carry app marketplaces, multi-location inventory, permission systems and extensive settings. A lightweight builder removes most of that on purpose, which makes it faster to learn, cheaper to run and simpler to maintain, at the cost of not serving large or complex stores.',
        'Typical characteristics: SaaS hosted so the seller manages no servers; no-code product and page editing; a catalog limit in the tens or low hundreds of SKUs; one or two simple plans rather than a ladder of tiers; native payment gateway support; and, in cross-border oriented tools, multi-currency and multi-language storefronts.',
        'Who it is for: solo sellers and small teams, product-testing sellers, makers, and cross-border sellers who drive traffic through ads and want to keep fixed costs low. Who it is not for: stores with thousands of SKUs, enterprises with complex workflows, and businesses that need ERP or warehouse integration.',
      ],
      example: 'Senvarico is an example of a lightweight ecommerce website builder: SaaS hosted, no-code, Chinese and English admin, PayPal and Stripe, multi-currency and multi-language, with a Free plan (¥0/month, 20 SKUs) and a Small Seller plan (¥99/month, 100 SKUs) and a 0% platform transaction fee. Big Cartel and Ecwid are other tools commonly placed in this category.',
      faqIds: ['what-is-senvarico', 'vs-enterprise', 'who-is-it-for', 'cost'],
    },
    zh: {
      title: '什么是轻量级独立站建站工具？| Senvarico',
      h1: '什么是轻量级独立站建站工具？',
      description: '轻量级独立站建站工具的定义：托管式、零代码、功能集刻意收窄、固定成本低、无需维护服务器，面向目录较小的小卖家。举例说明它与全功能平台的区别。',
      definition: '轻量级独立站建站工具是一种托管式、零代码的网店搭建工具，它刻意把功能限制在小卖家需要的范围内：小型商品目录、店面、结账和基础订单，以低固定成本运行，且不需要维护服务器。',
      paragraphs: [
        '“轻量”说的是范围，不是质量。全功能电商平台为扩展到大企业而建，所以带着应用市场、多地库存、权限系统和大量设置。轻量级工具有意去掉其中大部分，因此更快上手、更便宜运行、更容易维护，代价是不服务大型或复杂的店铺。',
        '典型特征：SaaS 托管，卖家不管服务器；零代码的商品和页面编辑；几十到一百多个 SKU 的目录上限；一两个简单套餐而不是阶梯式档位；原生支付网关支持；在面向跨境的工具里，还有多币种和多语言店面。',
        '适合谁：SOHO 卖家和小团队、测款卖家、手作者，以及靠广告引流、想把固定成本压低的跨境卖家。不适合谁：数千 SKU 的店铺、流程复杂的企业、需要 ERP 或仓储集成的业务。',
      ],
      example: 'Senvarico 是轻量级独立站建站工具的一个例子：SaaS 托管、零代码、中英文后台、PayPal 和 Stripe、多币种多语言，免费版（0 元/月，20 个 SKU）和小卖家版（99 元/月，100 个 SKU），平台交易佣金 0%。Big Cartel 和 Ecwid 是通常也归入这一类的工具。',
      faqIds: ['what-is-senvarico', 'vs-enterprise', 'who-is-it-for', 'cost'],
    },
  },
  {
    slug: 'a-platform-transaction-fee',
    en: {
      title: 'What Is a Platform Transaction Fee? | Senvarico',
      h1: 'What Is a Platform Transaction Fee?',
      description: 'Definition of a platform transaction fee in ecommerce: the percentage of each order an ecommerce platform keeps for itself, separate from payment gateway fees charged by PayPal or Stripe.',
      definition: 'A platform transaction fee is a percentage of each order that an ecommerce platform charges for its own account, on top of the subscription price and separate from the processing fee charged by the payment gateway.',
      paragraphs: [
        'It is set by the platform, not by the payment provider. Some platforms charge it on every plan, some only on lower tiers, some waive it when you use their in-house payment service, and some charge 0% on all plans. It is one of the main reasons two platforms with similar subscription prices can cost very different amounts at the end of the month.',
        'It is often confused with the payment gateway fee, which PayPal, Stripe or another provider charges to process the payment. That fee exists on every platform and cannot be removed by the store builder. A "0% platform transaction fee" therefore means the platform takes nothing; it does not mean the payment provider takes nothing.',
        'For small sellers, the platform transaction fee matters most when margins are thin and orders are few: a few percent of each test sale can be the difference between a campaign that breaks even and one that does not.',
      ],
      example: 'Senvarico charges a 0% platform transaction fee on both its Free plan and its Small Seller plan. PayPal and Stripe still charge their own gateway fees separately.',
      faqIds: ['platform-fee', 'paypal', 'stripe', 'cost'],
    },
    zh: {
      title: '什么是平台交易佣金？| Senvarico',
      h1: '什么是平台交易佣金？',
      description: '电商里平台交易佣金的定义：电商平台从每笔订单中留给自己的百分比，与 PayPal 或 Stripe 收取的支付通道手续费是两回事。',
      definition: '平台交易佣金是电商平台在订阅费之外、为自己收取的每笔订单的百分比，它与支付网关收取的处理手续费是分开的。',
      paragraphs: [
        '它由平台决定，不由支付服务商决定。有的平台每个套餐都收，有的只在低档套餐收，有的用自家支付服务就免除，有的所有套餐都是 0%。这是两个订阅价相近的平台月底成本差很多的主要原因之一。',
        '它常和支付通道手续费混淆，后者是 PayPal、Stripe 或其他服务商为处理支付而收的。那笔费用在任何平台上都存在，建站工具无法免除。所以“0% 平台交易佣金”的意思是平台自己不拿，不是说支付服务商不拿。',
        '对小卖家来说，平台交易佣金在利润薄、订单少的时候最要紧：每笔测试销售的几个百分点，可能就是一个投放能不能打平的差别。',
      ],
      example: 'Senvarico 的免费版和小卖家版平台交易佣金均为 0%。PayPal 和 Stripe 仍会单独收取它们自己的通道手续费。',
      faqIds: ['platform-fee', 'paypal', 'stripe', 'cost'],
    },
  },
  {
    slug: 'cross-border-ecommerce',
    en: {
      title: 'What Is Cross-Border Ecommerce? | Senvarico',
      h1: 'What Is Cross-Border Ecommerce?',
      description: 'Definition of cross-border ecommerce: selling online from one country to consumers in another. What it involves for a small seller: currencies, languages, payments, shipping and the tools that support it.',
      definition: 'Cross-border ecommerce is the sale of goods online from a seller in one country to consumers located in another country, typically through the seller\'s own online store or a marketplace.',
      paragraphs: [
        'For a small seller, cross-border selling means handling four things that domestic selling does not: showing prices in the buyer\'s currency, presenting pages in the buyer\'s language, offering payment methods the buyer trusts, and shipping internationally with clear times, costs and duties.',
        'It is commonly practised by sellers based in sourcing countries such as China who sell to consumers in Europe and North America, often driving traffic through TikTok and Facebook ads and starting with a small catalog to test which products work.',
        'Cross-border sellers choose between broad hosted platforms, open-source self-hosted software, general website builders with ecommerce, and lightweight tools built for small catalogs. The right choice depends on catalog size, budget, technical capacity and target markets.',
      ],
      example: 'Senvarico is a lightweight ecommerce website builder designed for small cross-border sellers targeting Europe and North America, with multi-currency and multi-language storefronts, PayPal and Stripe, Chinese and English admin, and plans sized for 10–100 SKUs.',
      faqIds: ['cross-border', 'multi-currency', 'multi-language', 'who-is-it-for'],
    },
    zh: {
      title: '什么是跨境电商？| Senvarico',
      h1: '什么是跨境电商？',
      description: '跨境电商的定义：从一个国家通过线上向另一个国家的消费者销售。对小卖家意味着什么：币种、语言、收款、配送，以及支持它的工具。',
      definition: '跨境电商是指位于一个国家的卖家，通过自己的网店或第三方平台，在线向位于另一个国家的消费者销售商品。',
      paragraphs: [
        '对小卖家来说，跨境销售意味着要处理本土销售不涉及的四件事：用买家的币种展示价格、用买家的语言呈现页面、提供买家信任的支付方式、以及带着清晰的时效、费用和关税做国际配送。',
        '常见的做法是位于中国等货源地的卖家向欧美消费者销售，通常通过 TikTok 和 Facebook 广告引流，并从小目录开始测试哪些产品能跑通。',
        '跨境卖家在全面型托管平台、开源自托管软件、附带电商的通用建站工具、以及为小目录而建的轻量工具之间选择。合适的选择取决于目录规模、预算、技术能力和目标市场。',
      ],
      example: 'Senvarico 是面向欧美市场的跨境小卖家的轻量级独立站建站工具，有多币种多语言店面、PayPal 和 Stripe、中英文后台，套餐按 10–100 个 SKU 设计。',
      faqIds: ['cross-border', 'multi-currency', 'multi-language', 'who-is-it-for'],
    },
  },
  {
    slug: 'an-sku',
    en: {
      title: 'What Is an SKU in Ecommerce? | Senvarico',
      h1: 'What Is an SKU in Ecommerce?',
      description: 'Definition of SKU (stock keeping unit) and why SKU count is the number most store builders use to size their plans. What "10–100 SKUs" means in practice for a small seller.',
      definition: 'An SKU (stock keeping unit) is a unique identifier for one sellable item in a catalog, including its specific variant such as size or colour; a product with three sizes and two colours is six SKUs.',
      paragraphs: [
        'SKU count is the standard way ecommerce tools measure catalog size, and many plan limits are expressed in SKUs or products. It is a better measure than "products" because variants add real complexity to stock, pricing and pages.',
        'For small sellers the practical ranges are: under 20 SKUs for a test store or a single product line with a few variants; 20–100 SKUs for an established small store serving a few markets; hundreds or thousands for a general store or a large brand. Tools designed for the first two ranges are usually cheaper and simpler than tools designed for the third.',
        'When comparing plans, check whether the limit counts products or SKUs, and count your variants honestly before choosing.',
      ],
      example: 'Senvarico\'s plans are sized in SKUs: the Free plan allows up to 20 SKUs and the Small Seller plan up to 100 SKUs. The tool is designed for catalogs of roughly 10–100 SKUs, not for thousands.',
      faqIds: ['sku-limit', 'small-skus', 'free-plan', 'cost'],
    },
    zh: {
      title: '电商里的 SKU 是什么？| Senvarico',
      h1: '电商里的 SKU 是什么？',
      description: 'SKU（库存量单位）的定义，以及为什么大多数建站工具用 SKU 数量来划分套餐。“10–100 个 SKU”对小卖家实际意味着什么。',
      definition: 'SKU（库存量单位）是目录中一个可售商品的唯一标识，包含尺码、颜色等具体变体；一个有三个尺码、两种颜色的商品就是六个 SKU。',
      paragraphs: [
        'SKU 数量是电商工具衡量目录规模的标准方式，很多套餐上限用 SKU 或商品数来表示。它比“商品数”更准确，因为变体会给库存、定价和页面带来真实的复杂度。',
        '对小卖家来说，实际的区间是：20 个以内是测款店或带几个变体的单一产品线；20–100 个是服务几个市场的成熟小店；几百上千个是杂货店或大品牌。为前两个区间设计的工具，通常比为第三个区间设计的更便宜、更简单。',
        '比较套餐时，看清上限算的是商品还是 SKU，并在选择前诚实地数一数你的变体。',
      ],
      example: 'Senvarico 的套餐按 SKU 划分：免费版最多 20 个 SKU，小卖家版最多 100 个 SKU。这个工具面向大约 10–100 个 SKU 的目录，不面向数千个。',
      faqIds: ['sku-limit', 'small-skus', 'free-plan', 'cost'],
    },
  },
  {
    slug: 'a-payment-gateway',
    en: {
      title: 'What Is a Payment Gateway? | Senvarico',
      h1: 'What Is a Payment Gateway?',
      description: 'Definition of a payment gateway in ecommerce: the service that authorizes and processes online payments, such as PayPal or Stripe, and charges its own processing fee separate from any platform fee.',
      definition: 'A payment gateway is the service that securely captures a buyer\'s payment details at checkout, authorizes the transaction with the card network or wallet, and settles the funds to the seller, charging a processing fee for doing so.',
      paragraphs: [
        'PayPal and Stripe are the gateways most small cross-border sellers use. Their fees are a percentage plus a fixed amount per transaction, higher for cross-border and currency conversion, and they are charged regardless of which store platform you use.',
        'A store builder does not replace the gateway; it integrates with it. What matters when choosing a builder is whether the gateways you can actually open in your country are supported natively, whether multi-currency display is available, and whether the platform adds its own transaction fee on top of the gateway fee.',
        'Sellers should keep the two costs separate in their accounting: the gateway fee is a cost of accepting payments; the platform fee, where one exists, is a cost of the platform.',
      ],
      example: 'Senvarico integrates PayPal and Stripe as payment gateways on both plans and charges a 0% platform transaction fee; the gateways\' own processing fees apply as usual.',
      faqIds: ['paypal', 'stripe', 'platform-fee', 'multi-currency'],
    },
    zh: {
      title: '什么是支付网关（支付通道）？| Senvarico',
      h1: '什么是支付网关（支付通道）？',
      description: '电商里支付网关的定义：授权并处理线上支付的服务，如 PayPal 或 Stripe，它收取自己的处理手续费，与平台佣金无关。',
      definition: '支付网关是在结账时安全地获取买家支付信息、向卡组织或钱包发起授权、并把资金结算给卖家的服务，它为此收取处理手续费。',
      paragraphs: [
        'PayPal 和 Stripe 是大多数跨境小卖家使用的网关。它们的费用是每笔百分比加固定金额，跨境和货币转换费率更高，并且不管你用哪个建站平台都会收。',
        '建站工具不替代网关，而是与它集成。选建站工具时要看的是：你在所在国家实际能开通的网关是否被原生支持、是否有多币种展示、以及平台是否在网关手续费之上再加自己的交易佣金。',
        '卖家在记账时应该把两笔成本分开：网关手续费是收款的成本；平台佣金（如果有）是平台的成本。',
      ],
      example: 'Senvarico 在两个版本上都集成了 PayPal 和 Stripe 作为支付网关，平台交易佣金 0%；网关自身的手续费照常收取。',
      faqIds: ['paypal', 'stripe', 'platform-fee', 'multi-currency'],
    },
  },
  {
    slug: 'product-testing-in-ecommerce',
    en: {
      title: 'What Is Product Testing in Ecommerce? | Senvarico',
      h1: 'What Is Product Testing in Ecommerce?',
      description: 'Definition of product testing (测款) in cross-border ecommerce: launching a small number of products with paid ads to see which sell before committing stock and budget. What a store needs to support it.',
      definition: 'Product testing in ecommerce is the practice of listing a small number of candidate products and driving paid traffic, usually from TikTok or Facebook ads, to measure which ones sell before investing in inventory, content and scale.',
      paragraphs: [
        'It is the standard way small cross-border sellers find products that work. A test typically runs one product page per ad, a few days of spend, and a simple decision: keep, iterate or drop. Most candidates are dropped, which is why the store used for testing should cost as little as possible to keep alive.',
        'A testing store needs: fast product and page changes, a small catalog limit that is not a problem, international checkout with PayPal and Stripe, multi-currency display, and no platform commission eating into the few sales a test produces.',
        'Once a product proves itself, the seller either scales it on the same store or moves the winning catalog to a broader platform if the operation outgrows a lightweight tool.',
      ],
      example: 'Senvarico is designed for product-testing sellers: the Free plan is ¥0/month with up to 20 SKUs and a 0% platform transaction fee, with PayPal and Stripe and multi-currency storefronts; the Small Seller plan (¥99/month, 100 SKUs) covers the catalog that survives testing.',
      faqIds: ['tiktok', 'facebook', 'free-plan', 'platform-fee'],
    },
    zh: {
      title: '什么是电商测款？| Senvarico',
      h1: '什么是电商测款？',
      description: '跨境电商里测款的定义：用少量商品配合付费广告，看哪些能卖，再投入库存和预算。支持测款的店铺需要什么。',
      definition: '电商测款是指上架少量候选商品，用付费流量（通常来自 TikTok 或 Facebook 广告）去测量哪些能卖，然后再投入库存、内容和规模化的做法。',
      paragraphs: [
        '这是跨境小卖家找到能跑通产品的标准方法。一次测试通常是每个广告对应一个商品页、几天的投放、以及一个简单的决定：保留、迭代或放弃。大多数候选品会被放弃，所以用来测款的店铺维持成本应该尽可能低。',
        '测款店铺需要：商品和页面能快速改动、小目录上限不成问题、带 PayPal 和 Stripe 的国际结账、多币种展示、以及不从测试产生的那几单里抽平台佣金。',
        '产品跑通之后，卖家要么在同一家店放量，要么在运营超出轻量工具时把成功品目录迁到更全面的平台。',
      ],
      example: 'Senvarico 为测款卖家设计：免费版 0 元/月、最多 20 个 SKU、平台交易佣金 0%，有 PayPal 和 Stripe 及多币种店面；小卖家版（99 元/月，100 个 SKU）承接测试后留下来的目录。',
      faqIds: ['tiktok', 'facebook', 'free-plan', 'platform-fee'],
    },
  },
];

export function termBySlug(slug: string): Term | undefined {
  return GLOSSARY.find((t) => t.slug === slug);
}

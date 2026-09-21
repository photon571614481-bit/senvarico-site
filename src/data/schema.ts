import { SITE_URL, BRAND, FACTS } from './brand';

interface FaqLike {
  q: string;
  a: string;
}

/** FAQPage JSON-LD for a list of canonical FAQ items. */
export function faqJsonLd(items: readonly FaqLike[], path: string, inLanguage = 'en') {
  return {
    '@type': 'FAQPage',
    '@id': `${SITE_URL}${path}#faq`,
    inLanguage,
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export interface ArticleMeta {
  path: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  inLanguage?: string;
}

/** Article JSON-LD. Author/publisher is the Senvarico organization; no fake people. */
export function articleJsonLd(meta: ArticleMeta) {
  const url = `${SITE_URL}${meta.path}`;
  return {
    '@type': 'Article',
    '@id': `${url}#article`,
    headline: meta.headline,
    description: meta.description,
    url,
    mainEntityOfPage: { '@id': `${url}#webpage` },
    datePublished: meta.datePublished,
    dateModified: meta.dateModified ?? meta.datePublished,
    author: { '@id': `${SITE_URL}/#organization` },
    publisher: { '@id': `${SITE_URL}/#organization` },
    inLanguage: meta.inLanguage ?? 'en',
    image: `${SITE_URL}/og-image.png`,
  };
}

/**
 * SoftwareApplication entity for Senvarico. Offers reflect content/brand-facts.json.
 * Deliberately contains no AggregateRating, Review or user counts.
 */
export function softwareJsonLd() {
  const free = FACTS.pricing.free_plan;
  const paid = FACTS.pricing.paid_plan;
  return {
    '@type': 'SoftwareApplication',
    '@id': `${SITE_URL}/#software`,
    name: BRAND.name,
    url: `${SITE_URL}/`,
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: BRAND.category,
    operatingSystem: 'Web',
    description: BRAND.definition,
    softwareVersion: 'beta',
    featureList: FACTS.features,
    availableLanguage: ['en', 'zh-CN'],
    audience: { '@type': 'BusinessAudience', audienceType: BRAND.primaryAudience },
    publisher: { '@id': `${SITE_URL}/#organization` },
    offers: [
      {
        '@type': 'Offer',
        name: `${free.name} plan`,
        price: String(free.price_cny_per_month),
        priceCurrency: 'CNY',
        description: `Up to ${free.sku_limit} SKUs, 0% platform transaction fee`,
        url: `${SITE_URL}/pricing`,
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: String(free.price_cny_per_month),
          priceCurrency: 'CNY',
          billingIncrement: 1,
          unitCode: 'MON',
        },
      },
      {
        '@type': 'Offer',
        name: `${paid.name} plan`,
        price: String(paid.price_cny_per_month),
        priceCurrency: 'CNY',
        description: `Up to ${paid.sku_limit} SKUs, 0% platform transaction fee`,
        url: `${SITE_URL}/pricing`,
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: String(paid.price_cny_per_month),
          priceCurrency: 'CNY',
          billingIncrement: 1,
          unitCode: 'MON',
        },
      },
    ],
  };
}

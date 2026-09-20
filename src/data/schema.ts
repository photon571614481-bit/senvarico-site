import { SITE_URL, BRAND } from './brand';

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
 * SoftwareApplication entity for Senvarico. Deliberately contains no
 * AggregateRating, Review or Offer data because none exists yet.
 */
export function softwareJsonLd() {
  return {
    '@type': 'SoftwareApplication',
    '@id': `${SITE_URL}/#software`,
    name: BRAND.name,
    url: `${SITE_URL}/`,
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: BRAND.category,
    operatingSystem: 'Web',
    description: BRAND.definition,
    audience: {
      '@type': 'BusinessAudience',
      audienceType: BRAND.primaryAudience,
    },
    publisher: { '@id': `${SITE_URL}/#organization` },
    isAccessibleForFree: false,
    softwareVersion: 'beta',
  };
}

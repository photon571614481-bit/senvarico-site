#!/usr/bin/env python3
"""Check built pages, internal links, metadata and sitemap without network access."""
import json
import sys
from collections import Counter
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urljoin, urlsplit
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
DIST = ROOT / 'dist'
FACTS = json.loads((ROOT / 'content/brand-facts.json').read_text())
SITE = FACTS['official_url']


class Page(HTMLParser):
    def __init__(self, file):
        super().__init__(convert_charrefs=True)
        self.file = file
        self.links, self.canonicals, self.alternates, self.schemas = [], [], {}, []
        self.ids, self.title, self.description, self.lang = set(), '', '', ''
        self.noindex, self.h1, self.in_title, self.in_schema = False, 0, False, False
        self.schema = ''
        self.feed(file.read_text())

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if a.get('id'):
            self.ids.add(a['id'])
        if tag == 'html':
            self.lang = a.get('lang', '')
        if tag == 'h1':
            self.h1 += 1
        if tag == 'title':
            self.in_title = True
        if tag == 'meta':
            if a.get('name') == 'description':
                self.description = a.get('content', '')
            if a.get('name') == 'robots':
                self.noindex = 'noindex' in a.get('content', '')
        if tag == 'link' and a.get('rel') == 'canonical':
            self.canonicals.append(a.get('href', ''))
        if tag == 'link' and a.get('hreflang'):
            self.alternates[a['hreflang']] = a.get('href', '')
        if tag == 'script' and a.get('type') == 'application/ld+json':
            self.in_schema, self.schema = True, ''
        for attr in ('href', 'src'):
            if a.get(attr):
                self.links.append(a[attr])

    def handle_data(self, data):
        if self.in_title:
            self.title += data
        if self.in_schema:
            self.schema += data

    def handle_endtag(self, tag):
        if tag == 'title':
            self.in_title = False
        if tag == 'script' and self.in_schema:
            self.schemas.append(self.schema)
            self.in_schema = False


def url_for(file):
    path = '/' + file.relative_to(DIST).as_posix()
    path = path[:-10] if path.endswith('index.html') else path[:-5]
    return SITE + path


pages = {url_for(f): Page(f) for f in sorted(DIST.rglob('*.html'))}
errors = []
if not pages:
    sys.exit('No built HTML found. Run pnpm build first.')
for url, page in pages.items():
    def check(condition, message):
        if not condition:
            errors.append(f'{url}: {message}')
    check(page.canonicals == [url], f'canonical mismatch: {page.canonicals}')
    check(page.title.strip() and page.description.strip(), 'missing title or description')
    check(page.h1 == 1, f'expected one h1, found {page.h1}')
    check(page.lang == ('zh-CN' if urlsplit(url).path.startswith('/zh') else 'en'), 'incorrect html lang')
    check(bool(page.schemas), 'missing JSON-LD')
    if FACTS.get('public_access') is False and not page.noindex:
        check('product-status' in page.file.read_text(), 'missing prerelease notice')
    for schema in page.schemas:
        try:
            parsed = json.loads(schema)
            def contains_offer(value):
                if isinstance(value, dict):
                    return value.get('@type') == 'Offer' or any(contains_offer(v) for v in value.values())
                return isinstance(value, list) and any(contains_offer(v) for v in value)
            if FACTS.get('public_access') is False:
                check(not contains_offer(parsed), 'unreleased product must not advertise purchasable Offers')
        except ValueError as e:
            errors.append(f'{url}: invalid JSON-LD: {e}')
    if not page.noindex:
        check(set(page.alternates) == {'en', 'zh-CN', 'x-default'}, 'incomplete hreflang')
        for lang, alternate in page.alternates.items():
            check(alternate in pages, f'missing alternate: {alternate}')
            if alternate in pages:
                check(pages[alternate].alternates == page.alternates, 'non-reciprocal hreflang')
    for link in page.links:
        target = urlsplit(urljoin(url, link))
        if target.scheme not in ('http', 'https') or target.netloc != urlsplit(SITE).netloc:
            continue
        absolute = target._replace(query='', fragment='').geturl()
        file = DIST / unquote(target.path).lstrip('/')
        check(absolute in pages or file.is_file(), f'broken local link: {link}')
        if target.fragment and absolute in pages:
            check(unquote(target.fragment) in pages[absolute].ids, f'missing anchor: {link}')

ns = {'s': 'http://www.sitemaps.org/schemas/sitemap/0.9'}
listed = []
for sitemap in DIST.glob('sitemap*.xml'):
    listed.extend(n.text for n in ET.parse(sitemap).findall('s:url/s:loc', ns))
expected = {url for url, page in pages.items() if not page.noindex}
if set(listed) != expected:
    errors.append(f'Sitemap mismatch: missing={sorted(expected-set(listed))}, extra={sorted(set(listed)-expected)}')
if len(listed) != len(set(listed)):
    errors.append('Duplicate sitemap URLs')
for title, count in Counter(p.title for p in pages.values()).items():
    if count > 1:
        errors.append(f'Duplicate title ({count}): {title}')
for error in sorted(set(errors)):
    print(error)
print(f'Checked {len(pages)} HTML pages and {len(listed)} sitemap URLs; {len(set(errors))} errors.')
sys.exit(bool(errors))

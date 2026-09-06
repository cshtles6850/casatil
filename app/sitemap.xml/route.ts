import { pages } from '@/lib/content';
import { zhPages } from '@/lib/content-zh';
import { esPages } from '@/lib/content-es';
import { ptPages } from '@/lib/content-pt';
import { koPages } from '@/lib/content-ko';
import { jaPages } from '@/lib/content-ja';
import { SITE } from '@/lib/site';

type LocaleSource = {
  lang: 'en' | 'zh-CN' | 'es' | 'pt-BR' | 'ko' | 'ja';
  prefix: string;
  slugs: Set<string>;
};

const localeSources: LocaleSource[] = [
  { lang: 'en', prefix: '', slugs: new Set(pages.map((page) => page.slug)) },
  { lang: 'zh-CN', prefix: '/zh-cn', slugs: new Set(zhPages.map((page) => page.slug)) },
  { lang: 'es', prefix: '/es', slugs: new Set(esPages.map((page) => page.slug)) },
  { lang: 'pt-BR', prefix: '/pt-br', slugs: new Set(ptPages.map((page) => page.slug)) },
  { lang: 'ko', prefix: '/ko', slugs: new Set(koPages.map((page) => page.slug)) },
  { lang: 'ja', prefix: '/ja', slugs: new Set(jaPages.map((page) => page.slug)) },
];

// Privacy Policy and Service Contract intentionally remain noindex and therefore
// are not listed in the sitemap. The indexable static pages are listed here.
const indexableStaticPaths = ['', 'about-us', 'contact-us'] as const;

function escapeXml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function absoluteUrl(prefix: string, path: string) {
  const cleanPath = path ? `/${path.replace(/^\/+|\/+$/g, '')}` : '';
  return `${SITE.domain}${prefix}${cleanPath}`;
}

function buildDynamicPaths() {
  const ordered = [
    ...pages.map((page) => page.slug),
    ...zhPages.map((page) => page.slug),
    ...esPages.map((page) => page.slug),
    ...ptPages.map((page) => page.slug),
    ...koPages.map((page) => page.slug),
    ...jaPages.map((page) => page.slug),
  ];

  return [...new Set(ordered)];
}

function availableLocales(path: string) {
  if ((indexableStaticPaths as readonly string[]).includes(path)) {
    return localeSources;
  }

  return localeSources.filter((locale) => locale.slugs.has(path));
}

export function GET() {
  const paths = [...indexableStaticPaths, ...buildDynamicPaths()];
  const rows: string[] = [];

  for (const path of paths) {
    const locales = availableLocales(path);
    if (locales.length === 0) continue;

    const alternates = locales.map((locale) => ({
      lang: locale.lang,
      href: absoluteUrl(locale.prefix, path),
    }));

    const english = alternates.find((alternate) => alternate.lang === 'en');
    const xDefault = english?.href ?? alternates[0].href;

    for (const locale of locales) {
      const url = absoluteUrl(locale.prefix, path);
      const alternateLinks = [
        ...alternates.map(
          (alternate) =>
            `    <xhtml:link rel="alternate" hreflang="${escapeXml(alternate.lang)}" href="${escapeXml(alternate.href)}" />`,
        ),
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(xDefault)}" />`,
      ].join('\n');

      rows.push([
        '  <url>',
        `    <loc>${escapeXml(url)}</loc>`,
        alternateLinks,
        '  </url>',
      ].join('\n'));
    }
  }

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    rows.join('\n'),
    '</urlset>',
    '',
  ].join('\n');

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}

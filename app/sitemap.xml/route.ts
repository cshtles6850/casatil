import { pages } from '@/lib/content';
import { zhPages } from '@/lib/content-zh';
import { esPages } from '@/lib/content-es';
import { ptPages } from '@/lib/content-pt';
import { koPages } from '@/lib/content-ko';
import { jaPages } from '@/lib/content-ja';
import { SITE } from '@/lib/site';

type LocaleSource = {
  prefix: string;
  slugs: string[];
};

const LASTMOD = '2026-09-07T00:00:00+00:00';

const localeSources: LocaleSource[] = [
  { prefix: '', slugs: pages.map((page) => page.slug) },
  { prefix: '/zh-cn', slugs: zhPages.map((page) => page.slug) },
  { prefix: '/es', slugs: esPages.map((page) => page.slug) },
  { prefix: '/pt-br', slugs: ptPages.map((page) => page.slug) },
  { prefix: '/ko', slugs: koPages.map((page) => page.slug) },
  { prefix: '/ja', slugs: jaPages.map((page) => page.slug) },
];

// Privacy Policy and Service Contract intentionally remain noindex and are
// therefore excluded from the sitemap.
const indexableStaticPaths = ['', 'about-us', 'contact-us'] as const;

const exactRoutePattern = /^(?:(?:kayseri|nevsehir)-airport-to-(?:goreme|urgup|uchisar|avanos|ortahisar|cavusin)-shuttle|(?:goreme|urgup|uchisar|avanos|ortahisar|cavusin)-to-(?:kayseri|nevsehir)-airport-shuttle)$/;

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

function sitemapMeta(prefix: string, path: string) {
  const localized = prefix !== '';

  if (path === '') {
    return {
      changefreq: 'weekly',
      priority: localized ? '0.97' : '1.00',
    };
  }

  if (path === 'about-us' || path === 'contact-us') {
    return {
      changefreq: 'monthly',
      priority: localized ? '0.52' : '0.55',
    };
  }

  if (exactRoutePattern.test(path)) {
    return {
      changefreq: 'monthly',
      priority: localized ? '0.79' : '0.82',
    };
  }

  return {
    changefreq: 'weekly',
    priority: localized ? '0.75' : '0.78',
  };
}

export function GET() {
  const rows: string[] = [];

  for (const locale of localeSources) {
    const paths = [...indexableStaticPaths, ...locale.slugs];

    for (const path of paths) {
      const url = absoluteUrl(locale.prefix, path);
      const meta = sitemapMeta(locale.prefix, path);

      rows.push([
        '  <url>',
        `    <loc>${escapeXml(url)}</loc>`,
        `    <lastmod>${LASTMOD}</lastmod>`,
        `    <changefreq>${meta.changefreq}</changefreq>`,
        `    <priority>${meta.priority}</priority>`,
        '  </url>',
      ].join('\n'));
    }
  }

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
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

import { pages } from '@/lib/content';
import { SITE } from '@/lib/site';

const variants = [
  ['en', ''],
  ['zh-CN', '/zh-cn'],
  ['es', '/es'],
  ['pt-BR', '/pt-br'],
  ['ko', '/ko'],
  ['ja', '/ja'],
] as const;

type ChangeFrequency = 'weekly' | 'monthly';

type SitemapEntry = {
  url: string;
  lang: string;
  priority: number;
  changeFrequency: ChangeFrequency;
  alternates: Record<string, string>;
};

function escapeXml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function localizedUrls(path = '') {
  const clean = path ? `/${path.replace(/^\/+|\/+$/g, '')}` : '';
  return Object.fromEntries(
    variants.map(([lang, prefix]) => [lang, `${SITE.domain}${prefix}${clean}`]),
  ) as Record<string, string>;
}

function addLocalizedEntries(
  result: SitemapEntry[],
  path: string,
  priority: number,
  changeFrequency: ChangeFrequency,
) {
  const urls = localizedUrls(path);
  const alternates = { ...urls, 'x-default': urls.en };

  for (const [lang] of variants) {
    result.push({
      url: urls[lang],
      lang,
      changeFrequency,
      priority: lang === 'en' ? priority : Math.max(0.1, priority - 0.03),
      alternates,
    });
  }
}

function buildEntries() {
  const result: SitemapEntry[] = [];

  addLocalizedEntries(result, '', 1, 'weekly');
  for (const page of pages) {
    addLocalizedEntries(result, page.slug, page.route ? 0.82 : 0.78, page.route ? 'monthly' : 'weekly');
  }
  for (const slug of ['about-us', 'contact-us']) {
    addLocalizedEntries(result, slug, 0.55, 'monthly');
  }

  return result;
}

export function GET() {
  const entries = buildEntries();
  const rows = entries.map((entry) => {
    const alternateLinks = Object.entries(entry.alternates)
      .map(([hreflang, href]) => `    <xhtml:link rel="alternate" hreflang="${escapeXml(hreflang)}" href="${escapeXml(href)}" />`)
      .join('\n');

    return [
      '  <url>',
      `    <loc>${escapeXml(entry.url)}</loc>`,
      `    <changefreq>${entry.changeFrequency}</changefreq>`,
      `    <priority>${entry.priority.toFixed(2)}</priority>`,
      alternateLinks,
      '  </url>',
    ].join('\n');
  }).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${rows}\n</urlset>\n`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}

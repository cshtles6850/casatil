import { readFileSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

const SITE_ORIGIN = 'https://cappadociaairportshuttle.com';
const HOST = 'cappadociaairportshuttle.com';
const INDEXNOW_KEY = 'bb895b6a6534434d8b84d6e2325f761c';
const KEY_LOCATION = `${SITE_ORIGIN}/${INDEXNOW_KEY}.txt`;
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';
const SITEMAP_PATH = 'public/sitemap.xml';

const LOCALE_PREFIXES = ['', '/zh-cn', '/es', '/pt-br', '/ko', '/ja'];
const CONTENT_FILES = new Map([
  ['lib/content.ts', ''],
  ['lib/content-zh.ts', '/zh-cn'],
  ['lib/content-es.ts', '/es'],
  ['lib/content-pt.ts', '/pt-br'],
  ['lib/content-ko.ts', '/ko'],
  ['lib/content-ja.ts', '/ja'],
]);

if (!/^[A-Za-z0-9-]{8,128}$/.test(INDEXNOW_KEY)) {
  throw new Error('IndexNow key format is invalid.');
}

function runGit(args, fallback = '') {
  try {
    return execFileSync('git', args, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
  } catch {
    return fallback;
  }
}

function parseSitemap(xml) {
  const map = new Map();
  const blocks = xml.match(/<url>\s*[\s\S]*?<\/url>/g) ?? [];
  for (const block of blocks) {
    const loc = block.match(/<loc>([^<]+)<\/loc>/)?.[1]?.trim();
    if (loc) map.set(loc, block.replace(/\s+/g, ' ').trim());
  }
  return map;
}

const currentXml = readFileSync(SITEMAP_PATH, 'utf8');
const currentSitemap = parseSitemap(currentXml);
const currentUrls = [...currentSitemap.keys()];
const currentSet = new Set(currentUrls);

const previousXml = runGit(['show', 'HEAD^:public/sitemap.xml']);
const previousSitemap = previousXml ? parseSitemap(previousXml) : new Map();
const previousSet = new Set(previousSitemap.keys());

const urls = new Set();
function normalizedUrl(prefix = '', slug = '') {
  const path = `${prefix}${slug ? `/${slug}` : ''}` || '/';
  return path === '/' ? SITE_ORIGIN : `${SITE_ORIGIN}${path}`;
}
function addUrl(url) {
  if (!url?.startsWith(`${SITE_ORIGIN}`)) return;
  // Current or previous sitemap membership keeps notifications limited to real site URLs.
  if (currentSet.has(url) || previousSet.has(url) || url === SITE_ORIGIN) urls.add(url);
}
function addLocaleUrls(prefix, { dynamicOnly = false } = {}) {
  for (const url of currentUrls) {
    const path = url.slice(SITE_ORIGIN.length) || '/';
    const belongs = prefix
      ? path === prefix || path.startsWith(`${prefix}/`)
      : !LOCALE_PREFIXES.slice(1).some((p) => path === p || path.startsWith(`${p}/`));
    if (!belongs) continue;
    if (dynamicOnly) {
      const localPath = prefix ? path.slice(prefix.length) : path;
      if (['/', '/about-us', '/contact-us', '/privacy-policy', '/service-contract'].includes(localPath || '/')) continue;
    }
    addUrl(url);
  }
}

// Sitemap additions, removals and modified URL records are always relevant.
for (const [url, block] of currentSitemap) {
  if (!previousSitemap.has(url) || previousSitemap.get(url) !== block) addUrl(url);
}
for (const url of previousSitemap.keys()) {
  if (!currentSitemap.has(url)) addUrl(url); // Deleted URL notifications are supported by IndexNow.
}

const changedFilesRaw = runGit(['diff', '--name-only', 'HEAD^', 'HEAD']);
const changedFiles = new Set(changedFilesRaw ? changedFilesRaw.split(/\r?\n/).filter(Boolean) : []);

function getFileAt(ref, file) {
  if (ref === 'HEAD') return existsSync(file) ? readFileSync(file, 'utf8') : '';
  return runGit(['show', `${ref}:${file}`]);
}

function parseDiffRanges(file) {
  const diff = runGit(['diff', '--unified=0', 'HEAD^', 'HEAD', '--', file]);
  const oldRanges = [];
  const newRanges = [];
  for (const line of diff.split(/\r?\n/)) {
    const m = line.match(/^@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/);
    if (!m) continue;
    const oldStart = Number(m[1]); const oldCount = Number(m[2] ?? 1);
    const newStart = Number(m[3]); const newCount = Number(m[4] ?? 1);
    if (oldCount > 0) oldRanges.push([oldStart, oldStart + oldCount - 1]);
    if (newCount > 0) newRanges.push([newStart, newStart + newCount - 1]);
  }
  return { oldRanges, newRanges };
}

function slugRanges(text) {
  const lines = text.split(/\r?\n/);
  const starts = [];
  lines.forEach((line, index) => {
    const m = line.match(/["']slug["']\s*:\s*["']([^"']+)["']/);
    if (m) starts.push({ line: index + 1, slug: m[1] });
  });
  return starts.map((entry, i) => ({
    slug: entry.slug,
    start: entry.line,
    end: i + 1 < starts.length ? starts[i + 1].line - 1 : lines.length,
  }));
}

function slugsTouched(text, ranges) {
  if (!text || !ranges.length) return { slugs: new Set(), unmatched: false };
  const objects = slugRanges(text);
  const slugs = new Set();
  let unmatched = false;
  for (const [a, b] of ranges) {
    let matched = false;
    for (const obj of objects) {
      if (b >= obj.start && a <= obj.end) {
        slugs.add(obj.slug);
        matched = true;
      }
    }
    if (!matched) unmatched = true;
  }
  return { slugs, unmatched };
}

// Centralized locale content files: notify only the page objects whose source lines changed.
for (const [file, prefix] of CONTENT_FILES) {
  if (!changedFiles.has(file)) continue;
  const { oldRanges, newRanges } = parseDiffRanges(file);
  const oldTouched = slugsTouched(getFileAt('HEAD^', file), oldRanges);
  const newTouched = slugsTouched(getFileAt('HEAD', file), newRanges);
  for (const slug of new Set([...oldTouched.slugs, ...newTouched.slugs])) addUrl(normalizedUrl(prefix, slug));
  if (oldTouched.unmatched || newTouched.unmatched) addLocaleUrls(prefix, { dynamicOnly: true });
}

// Direct page files and dynamic page templates.
const directPageRules = [
  [/^app\/\(en\)\/page\.tsx$/, ''], [/^app\/\(en\)\/(about-us|contact-us)\/page\.tsx$/, ''],
  [/^app\/\(zh\)\/zh-cn\/page\.tsx$/, '/zh-cn'], [/^app\/\(zh\)\/zh-cn\/(about-us|contact-us)\/page\.tsx$/, '/zh-cn'],
  [/^app\/\(es\)\/es\/page\.tsx$/, '/es'], [/^app\/\(es\)\/es\/(about-us|contact-us)\/page\.tsx$/, '/es'],
  [/^app\/\(pt\)\/pt-br\/page\.tsx$/, '/pt-br'], [/^app\/\(pt\)\/pt-br\/(about-us|contact-us)\/page\.tsx$/, '/pt-br'],
  [/^app\/\(ko\)\/ko\/page\.tsx$/, '/ko'], [/^app\/\(ko\)\/ko\/(about-us|contact-us)\/page\.tsx$/, '/ko'],
  [/^app\/\(ja\)\/ja\/page\.tsx$/, '/ja'], [/^app\/\(ja\)\/ja\/(about-us|contact-us)\/page\.tsx$/, '/ja'],
];
for (const file of changedFiles) {
  for (const [re, prefix] of directPageRules) {
    const m = file.match(re);
    if (!m) continue;
    addUrl(normalizedUrl(prefix, m[1] ?? ''));
  }
}

const dynamicTemplates = new Map([
  ['app/(en)/[slug]/page.tsx', ''],
  ['app/(zh)/zh-cn/[slug]/page.tsx', '/zh-cn'],
  ['app/(es)/es/[slug]/page.tsx', '/es'],
  ['app/(pt)/pt-br/[slug]/page.tsx', '/pt-br'],
  ['app/(ko)/ko/[slug]/page.tsx', '/ko'],
  ['app/(ja)/ja/[slug]/page.tsx', '/ja'],
]);
for (const [file, prefix] of dynamicTemplates) if (changedFiles.has(file)) addLocaleUrls(prefix, { dynamicOnly: true });

// Locale layouts can change homepage metadata. Notify only that locale homepage, not every URL.
const layoutLocales = new Map([
  ['app/(en)/layout.tsx', ''], ['app/(zh)/layout.tsx', '/zh-cn'], ['app/(es)/layout.tsx', '/es'],
  ['app/(pt)/layout.tsx', '/pt-br'], ['app/(ko)/layout.tsx', '/ko'], ['app/(ja)/layout.tsx', '/ja'],
]);
for (const [file, prefix] of layoutLocales) if (changedFiles.has(file)) addUrl(normalizedUrl(prefix));

// Central price changes: notify only pages whose rendered price can actually change.
function parseAirportPrices(text, airport) {
  const marker = `${airport}: {`;
  const start = text.indexOf(marker);
  if (start < 0) return null;
  const nextAirport = airport === 'kayseri' ? text.indexOf('nevsehir: {', start + marker.length) : -1;
  const block = text.slice(start, nextAirport > start ? nextAirport : text.indexOf('} as const', start));
  const shuttle = block.match(/shuttle:\s*\{\s*oneWayPerPerson:\s*(\d+(?:\.\d+)?)/)?.[1];
  const vito = block.match(/vito:\s*\{\s*oneWayPerVehicle:\s*(\d+(?:\.\d+)?)/)?.[1];
  const sprinter = block.match(/sprinter:\s*\{\s*oneWayPerVehicle:\s*(\d+(?:\.\d+)?)/)?.[1];
  return shuttle && vito && sprinter ? { shuttle, vito, sprinter } : null;
}

function pageObjects(text) {
  const ranges = slugRanges(text);
  const lines = text.split(/\r?\n/);
  return ranges.map(({ slug, start, end }) => ({ slug, body: lines.slice(start - 1, end).join('\n') }));
}

if (changedFiles.has('lib/prices.ts')) {
  const oldPricesText = getFileAt('HEAD^', 'lib/prices.ts');
  const newPricesText = getFileAt('HEAD', 'lib/prices.ts');
  const changedAirports = new Set();
  for (const airport of ['kayseri', 'nevsehir']) {
    const before = parseAirportPrices(oldPricesText, airport);
    const after = parseAirportPrices(newPricesText, airport);
    if (!before || !after || JSON.stringify(before) !== JSON.stringify(after)) changedAirports.add(airport);
  }
  if (!changedAirports.size) {
    // Helper/formula change inside prices.ts: dynamic pages and homepages may render differently.
    changedAirports.add('kayseri'); changedAirports.add('nevsehir');
  }

  // Every locale homepage shows airport prices.
  for (const prefix of LOCALE_PREFIXES) addUrl(normalizedUrl(prefix));

  for (const [file, prefix] of CONTENT_FILES) {
    const text = getFileAt('HEAD', file);
    for (const page of pageObjects(text)) {
      const routeAirport = page.body.match(/["']route["']\s*:\s*\{[\s\S]*?["']airport["']\s*:\s*["'](kayseri|nevsehir)["']/)?.[1];
      const mentionsChangedToken = [...changedAirports].some((airport) => page.body.includes(`{{PRICE:${airport}:`));
      // Non-route dynamic pages render a summary containing both airports' prices.
      if (!routeAirport || changedAirports.has(routeAirport) || mentionsChangedToken) addUrl(normalizedUrl(prefix, page.slug));
    }
  }
}

// Changes to price-token resolution can affect dynamic content and localized home content.
if (changedFiles.has('lib/price-content.ts')) {
  for (const prefix of LOCALE_PREFIXES) {
    addUrl(normalizedUrl(prefix));
    addLocaleUrls(prefix, { dynamicOnly: true });
  }
}

// Shared dynamic-page renderers: notify dynamic pages only, not unrelated static pages.
if (changedFiles.has('components/LocalizedSeoPage.tsx')) {
  for (const prefix of ['/zh-cn', '/es', '/pt-br', '/ko', '/ja']) addLocaleUrls(prefix, { dynamicOnly: true });
}
if (changedFiles.has('components/RichText.tsx') || changedFiles.has('components/QuickFacts.tsx')) {
  for (const prefix of LOCALE_PREFIXES) addLocaleUrls(prefix, { dynamicOnly: true });
}
if (changedFiles.has('lib/home-hero-pricing.ts')) {
  for (const prefix of LOCALE_PREFIXES) addUrl(normalizedUrl(prefix));
}

// Shared/static localized home/about/contact content: identify affected locale blocks, then notify only its static indexable pages.
if (changedFiles.has('lib/static-locale-content.ts')) {
  const { oldRanges, newRanges } = parseDiffRanges('lib/static-locale-content.ts');
  const currentText = getFileAt('HEAD', 'lib/static-locale-content.ts');
  const oldText = getFileAt('HEAD^', 'lib/static-locale-content.ts');
  const localeDefs = [
    { key: 'es', prefix: '/es' }, { key: 'pt-BR', prefix: '/pt-br' },
    { key: 'ko', prefix: '/ko' }, { key: 'ja', prefix: '/ja' },
  ];
  const touched = new Set();
  function detect(text, ranges) {
    const lines = text.split(/\r?\n/);
    const starts = [];
    for (const def of localeDefs) {
      const index = lines.findIndex((line) => new RegExp(`^\\s*['\"]?${def.key.replace('-', '\\-')}['\"]?\\s*:`).test(line));
      if (index >= 0) starts.push({ ...def, start: index + 1 });
    }
    starts.sort((a, b) => a.start - b.start);
    starts.forEach((x, i) => x.end = i + 1 < starts.length ? starts[i + 1].start - 1 : lines.length);
    for (const [a, b] of ranges) for (const loc of starts) if (b >= loc.start && a <= loc.end) touched.add(loc.prefix);
  }
  detect(oldText, oldRanges); detect(currentText, newRanges);
  for (const prefix of touched) {
    addUrl(normalizedUrl(prefix));
    addUrl(normalizedUrl(prefix, 'about-us'));
    addUrl(normalizedUrl(prefix, 'contact-us'));
  }
}

// If this is the installation commit and no content URL was otherwise selected, seed only the homepage.
if (changedFiles.has(`public/${INDEXNOW_KEY}.txt`) && urls.size === 0) addUrl(SITE_ORIGIN);

const urlList = [...urls].sort();
if (process.env.INDEXNOW_DRY_RUN === '1') {
  console.log(`IndexNow dry run: ${urlList.length} URL(s) selected:`);
  for (const url of urlList) console.log(`- ${url}`);
  process.exit(0);
}
if (!urlList.length) {
  console.log('IndexNow: no indexable URL changes detected; nothing submitted.');
  process.exit(0);
}

async function verifyKeyFile() {
  let lastStatus = 0;
  for (let attempt = 1; attempt <= 12; attempt += 1) {
    try {
      const response = await fetch(KEY_LOCATION, { headers: { 'cache-control': 'no-cache' } });
      lastStatus = response.status;
      if (response.ok) {
        const body = (await response.text()).trim();
        if (body === INDEXNOW_KEY) return;
      }
    } catch {
      lastStatus = 0;
    }
    if (attempt < 12) await new Promise((resolve) => setTimeout(resolve, 10_000));
  }
  throw new Error(`IndexNow key file did not become available with the expected content at ${KEY_LOCATION}${lastStatus ? ` (last HTTP ${lastStatus})` : ''}`);
}

async function submit() {
  await verifyKeyFile();
  const payload = { host: HOST, key: INDEXNOW_KEY, keyLocation: KEY_LOCATION, urlList };
  const response = await fetch(INDEXNOW_ENDPOINT, {
    method: 'POST',
    headers: { 'content-type': 'application/json; charset=utf-8' },
    body: JSON.stringify(payload),
  });
  const body = await response.text();
  if (![200, 202].includes(response.status)) {
    throw new Error(`IndexNow submission failed: HTTP ${response.status}${body ? ` — ${body}` : ''}`);
  }
  console.log(`IndexNow accepted ${urlList.length} URL(s) with HTTP ${response.status}:`);
  for (const url of urlList) console.log(`- ${url}`);
}

await submit();

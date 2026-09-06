import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

function isPageRequest(pathname: string) {
  const withoutTrailingSlash = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;

  if (withoutTrailingSlash.startsWith('/_next/')) return false;
  if (withoutTrailingSlash.startsWith('/api/')) return false;
  if (withoutTrailingSlash.startsWith('/.well-known/')) return false;
  if (withoutTrailingSlash === '/robots.txt' || withoutTrailingSlash === '/sitemap.xml' || withoutTrailingSlash === '/icon.svg') return false;
  if (/\.[a-zA-Z0-9]+$/.test(withoutTrailingSlash)) return false;

  return true;
}

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;
  const isGetOrHead = request.method === 'GET' || request.method === 'HEAD';
  const isPage = isPageRequest(pathname);

  // Enforce one canonical URL shape with an explicit HTTP 301.
  // Query parameters are preserved; the resulting parameterized page is then noindexed.
  if (isGetOrHead && isPage && pathname !== '/' && pathname.endsWith('/')) {
    const cleanUrl = request.nextUrl.clone();
    cleanUrl.pathname = pathname.replace(/\/+$/, '');
    return NextResponse.redirect(cleanUrl, 301);
  }

  const response = NextResponse.next();

  // TEMPORARY PRE-LAUNCH INDEXING BLOCK:
  // Keep every rendered page crawlable, but prevent Google and other compliant
  // search engines from indexing it until the multilingual launch is ready.
  // Remove this site-wide header when the site is ready to be indexed.
  if (isGetOrHead && isPage) {
    response.headers.set('X-Robots-Tag', 'noindex, follow');
  }

  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image).*)'],
};

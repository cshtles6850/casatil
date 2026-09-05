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

  // Parameterized page variants must not become indexable duplicates.
  // Canonicals are already generated from the clean pathname in page metadata.
  if (isGetOrHead && isPage && searchParams.size > 0) {
    response.headers.set('X-Robots-Tag', 'noindex, follow');
  }

  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image).*)'],
};

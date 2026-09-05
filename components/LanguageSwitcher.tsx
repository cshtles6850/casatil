'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function LanguageSwitcher() {
  const pathname = usePathname() || '/';
  const isZh = pathname === '/zh-cn' || pathname.startsWith('/zh-cn/');
  const enPath = isZh ? (pathname.replace(/^\/zh-cn/, '') || '/') : pathname;
  const zhPath = isZh ? pathname : (pathname === '/' ? '/zh-cn' : `/zh-cn${pathname}`);

  return (
    <div className="language-switcher" aria-label="Language switcher">
      <Link className={!isZh ? 'active' : ''} href={enPath} hrefLang="en">EN</Link>
      <Link className={isZh ? 'active' : ''} href={zhPath} hrefLang="zh-CN">中文</Link>
    </div>
  );
}

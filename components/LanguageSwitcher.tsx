'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const locales = [
  { code:'en', label:'EN', prefix:'' },
  { code:'zh-CN', label:'中文', prefix:'/zh-cn' },
  { code:'es', label:'ES', prefix:'/es' },
  { code:'pt-BR', label:'PT', prefix:'/pt-br' },
  { code:'ko', label:'한국어', prefix:'/ko' },
  { code:'ja', label:'日本語', prefix:'/ja' },
] as const;

const prefixes=['/zh-cn','/pt-br','/es','/ko','/ja'] as const;

function currentLocale(pathname:string){
  if(pathname==='/zh-cn'||pathname.startsWith('/zh-cn/')) return 'zh-CN';
  if(pathname==='/pt-br'||pathname.startsWith('/pt-br/')) return 'pt-BR';
  if(pathname==='/es'||pathname.startsWith('/es/')) return 'es';
  if(pathname==='/ko'||pathname.startsWith('/ko/')) return 'ko';
  if(pathname==='/ja'||pathname.startsWith('/ja/')) return 'ja';
  return 'en';
}

function basePath(pathname:string){
  for(const prefix of prefixes){
    if(pathname===prefix) return '/';
    if(pathname.startsWith(`${prefix}/`)) return pathname.slice(prefix.length)||'/';
  }
  return pathname||'/';
}

export function LanguageSwitcher(){
  const pathname=usePathname()||'/';
  const active=currentLocale(pathname);
  const base=basePath(pathname);
  const activeLabel=locales.find((locale)=>locale.code===active)?.label||'EN';
  const hrefFor=(prefix:string)=>prefix?(base==='/'?prefix:`${prefix}${base}`):base;

  return <>
    <div className="language-switcher language-switcher-desktop" aria-label="Language switcher">
      {locales.map(locale=><Link key={locale.code} className={active===locale.code?'active':''} href={hrefFor(locale.prefix)} hrefLang={locale.code}>{locale.label}</Link>)}
    </div>
    <details className="language-switcher-mobile">
      <summary aria-label="Language switcher">{activeLabel}</summary>
      <div className="language-switcher-menu">
        {locales.map(locale=><Link key={locale.code} className={active===locale.code?'active':''} href={hrefFor(locale.prefix)} hrefLang={locale.code}>{locale.label}</Link>)}
      </div>
    </details>
  </>;
}

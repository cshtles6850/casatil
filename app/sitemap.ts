import type { MetadataRoute } from 'next';
import { pages } from '@/lib/content';
import { SITE } from '@/lib/site';

const variants = [
  ['en',''], ['zh-CN','/zh-cn'], ['es','/es'], ['pt-BR','/pt-br'], ['ko','/ko'], ['ja','/ja'],
] as const;
function urls(path=''){const clean=path?`/${path}`:'';return Object.fromEntries(variants.map(([lang,p])=>[lang,`${SITE.domain}${p}${clean}`])) as Record<string,string>}
function addAll(result:MetadataRoute.Sitemap,path:string,priority:number,changeFrequency:'weekly'|'monthly'){
  const u=urls(path); const languages={...u,'x-default':u.en};
  for(const [lang] of variants) result.push({url:u[lang],changeFrequency,priority:lang==='en'?priority:Math.max(0.1,priority-0.03),alternates:{languages}});
}
export default function sitemap():MetadataRoute.Sitemap{
 const result:MetadataRoute.Sitemap=[]; addAll(result,'',1,'weekly');
 for(const page of pages)addAll(result,page.slug,page.route?0.82:0.78,page.route?'monthly':'weekly');
 for(const slug of ['about-us','contact-us'])addAll(result,slug,0.55,'monthly');
 return result;
}

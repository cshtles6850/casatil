import type { MetadataRoute } from 'next';
import { pages } from '@/lib/content';
import { zhPages } from '@/lib/content-zh';
import { SITE } from '@/lib/site';

function entry(url:string, enUrl:string, zhUrl:string, priority:number, changeFrequency:'weekly'|'monthly'):MetadataRoute.Sitemap[number] {
  return {
    url,
    changeFrequency,
    priority,
    alternates: { languages: { en: enUrl, 'zh-CN': zhUrl, 'x-default': enUrl } },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const enHome=SITE.domain;
  const zhHome=`${SITE.domain}/zh-cn`;
  const result:MetadataRoute.Sitemap=[
    entry(enHome,enHome,zhHome,1,'weekly'),
    entry(zhHome,enHome,zhHome,0.95,'weekly'),
  ];

  const zhSlugs = new Set(zhPages.map((page) => page.slug));
  for (const page of pages) {
    const enUrl=`${SITE.domain}/${page.slug}`;
    const hasZh=zhSlugs.has(page.slug);
    const zhUrl=hasZh?`${SITE.domain}/zh-cn/${page.slug}`:enUrl;
    const priority=page.route?0.82:0.78;
    const freq=page.route?'monthly':'weekly';
    result.push(hasZh?entry(enUrl,enUrl,zhUrl,priority,freq):{url:enUrl,changeFrequency:freq,priority,alternates:{languages:{en:enUrl,'x-default':enUrl}}});
    if (hasZh) result.push(entry(zhUrl,enUrl,zhUrl,priority,freq));
  }
  return result;
}

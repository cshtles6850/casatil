import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BookingFormZh } from '@/components/BookingFormZh';
import { JsonLd } from '@/components/JsonLd';
import { RichText } from '@/components/RichText';
import { airports, SITE, towns } from '@/lib/site';
import { zhPageBySlug, zhPages, zhPrettySlug, zhTownNames, type ZhSeoPage } from '@/lib/content-zh';

export const dynamicParams = false;
export function generateStaticParams() { return zhPages.map((page) => ({ slug: page.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const page = zhPageBySlug.get(slug); if (!page) return {};
  const keywords = [page.primaryKeyword, ...(page.secondaryKeywords || [])];
  return {
    title: { absolute: page.title },
    description: page.description,
    keywords,
    alternates: {
      canonical: `/zh-cn/${page.slug}`,
      languages: { en: `/${page.slug}`, 'zh-CN': `/zh-cn/${page.slug}`, 'x-default': `/${page.slug}` },
    },
    openGraph: {
      type: 'article', locale: 'zh_CN', title: page.title, description: page.description,
      url: `${SITE.domain}/zh-cn/${page.slug}`,
      images: [{ url: '/cappadocia-airport-shuttle-vito-sprinter.webp', width: 1200, height: 675, alt: '卡帕多奇亚机场接送 Vito 与 Sprinter' }],
    },
    other: { 'applicable-device': 'pc,mobile' },
  };
}

function RouteSummaryZh({ page }: { page: ZhSeoPage }) {
  if (!page.route) {
    return <div className="summary-box"><h3>价格与服务一览</h3>
      <div className="summary-line"><span>机场拼车</span><strong>€15 / 人 / 单程</strong></div>
      <div className="summary-line"><span>开塞利 Vito</span><strong>€90 / 车</strong></div>
      <div className="summary-line"><span>开塞利 Sprinter</span><strong>€110 / 车</strong></div>
      <div className="summary-line"><span>内夫谢希尔 Vito</span><strong>€80 / 车</strong></div>
      <div className="summary-line"><span>内夫谢希尔 Sprinter</span><strong>€90 / 车</strong></div>
      <div className="summary-line"><span>付款</span><strong>现金支付给司机</strong></div>
    </div>;
  }
  const a=airports[page.route.airport]; const t=towns[page.route.town]; const town=zhTownNames[page.route.town];
  const distance=page.route.airport==='kayseri'?t.distanceKayseri:t.distanceNevsehir;
  const time=page.route.airport==='kayseri'?t.timeKayseri:t.timeNevsehir;
  const airportName=page.route.airport==='kayseri'?'开塞利机场 (ASR)':'内夫谢希尔机场 (NAV)';
  const from=page.route.direction==='arrival'?airportName:town;
  const to=page.route.direction==='arrival'?town:airportName;
  return <div className="summary-box"><h3>路线一览</h3>
    <div className="summary-line"><span>出发</span><strong>{from}</strong></div><div className="summary-line"><span>到达</span><strong>{to}</strong></div>
    <div className="summary-line"><span>距离</span><strong>{distance}</strong></div><div className="summary-line"><span>参考车程</span><strong>{time}</strong></div>
    <div className="summary-line"><span>拼车</span><strong>€15 / 人</strong></div><div className="summary-line"><span>Vito · 最多5人</span><strong>€{a.vito}</strong></div><div className="summary-line"><span>Sprinter · 最多16人</span><strong>€{a.sprinter}</strong></div>
    <div className="summary-line"><span>付款</span><strong>现金支付给司机</strong></div>
  </div>;
}

function bookingDefaults(page: ZhSeoPage) {
  if (page.route) return { initialAirport: page.route.airport, initialDirection: page.route.direction === 'arrival' ? 'airport-hotel' as const : 'hotel-airport' as const, initialTown: zhTownNames[page.route.town] };
  const initialAirport = page.slug.includes('nevsehir') ? 'nevsehir' as const : 'kayseri' as const;
  const townKey = (Object.keys(towns) as (keyof typeof towns)[]).find((key) => page.slug === `${key}-airport-transfer`);
  return { initialAirport, initialDirection: page.slug.startsWith('cappadocia-to-') || page.slug === 'hotel-to-airport-transfer' ? 'hotel-airport' as const : 'airport-hotel' as const, initialTown: townKey ? zhTownNames[townKey] : '' };
}

export default async function ChineseSeoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const page = zhPageBySlug.get(slug); if (!page) notFound();
  const faqSchema = { '@context':'https://schema.org','@type':'FAQPage',mainEntity:page.faq.map((item)=>({'@type':'Question',name:item.q,acceptedAnswer:{'@type':'Answer',text:item.a}})) };
  const breadcrumb = { '@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'首页',item:`${SITE.domain}/zh-cn`},{'@type':'ListItem',position:2,name:page.h1,item:`${SITE.domain}/zh-cn/${page.slug}`}] };
  const service = {
    '@context':'https://schema.org','@type':'Service',name:page.h1,serviceType:page.primaryKeyword,inLanguage:'zh-CN',
    provider:{'@type':'TravelAgency',name:SITE.name,url:`${SITE.domain}/zh-cn`},
    areaServed:page.route?[page.route.airport==='kayseri'?'开塞利机场':'内夫谢希尔机场',zhTownNames[page.route.town]]:['卡帕多奇亚','开塞利机场','内夫谢希尔机场'],
    offers:page.route?[
      {'@type':'Offer',price:'15',priceCurrency:'EUR',description:'共享机场班车，每人单程'},
      {'@type':'Offer',price:String(airports[page.route.airport].vito),priceCurrency:'EUR',description:'私人 Mercedes Vito，单程，最多5人'},
      {'@type':'Offer',price:String(airports[page.route.airport].sprinter),priceCurrency:'EUR',description:'私人 Mercedes Sprinter，单程，最多16人'},
    ]:undefined,
  };
  const defaults=bookingDefaults(page);

  return <main lang="zh-CN">
    <JsonLd data={faqSchema}/><JsonLd data={breadcrumb}/><JsonLd data={service}/>
    <section className="page-hero"><div className="container">
      <div className="breadcrumb"><Link href="/zh-cn">首页</Link><span>›</span><span>{page.h1}</span></div>
      <span className="eyebrow">{page.eyebrow}</span><h1>{page.h1}</h1><p className="lead">{page.lead}</p>
      <div className="hero-actions"><a className="btn btn-primary" href="#booking">预订这条接送</a><Link className="btn btn-secondary" href="/zh-cn/cappadocia-shuttle-transfer">机场拼车服务</Link></div>
      <div className="trust-row"><span>WhatsApp 确认</span><span>单程或往返</span><span>现金支付给司机</span></div>
    </div></section>

    <section className="section page-content-section"><div className="container content-grid">
      <article className="prose">
        {page.sections.map((section)=><section className="content-section" key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((p,i)=><p key={i}><RichText text={p} prefix="/zh-cn" /></p>)}{section.bullets&&<ul className={section.bullets.length>12?'long-list':undefined}>{section.bullets.map((b)=><li key={b}><RichText text={b} prefix="/zh-cn" /></li>)}</ul>}</section>)}
        <section className="content-section related-section"><h2>相关机场接送页面</h2><div className="related-grid">{page.related.slice(0,8).map((related)=><Link className="related-card" href={`/zh-cn/${related}`} key={related}><strong>{zhPrettySlug(related)}</strong><span>查看路线、价格与行程建议 →</span></Link>)}</div></section>
        <section className="content-section"><h2>常见问题</h2><div className="faq">{page.faq.map((item)=><details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div></section>
      </article>
      <aside className="sidebar" id="booking"><RouteSummaryZh page={page}/><div className="sidebar-booking"><BookingFormZh compact {...defaults}/></div></aside>
    </div></section>
  </main>;
}

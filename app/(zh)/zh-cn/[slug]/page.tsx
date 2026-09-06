import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BookingFormZh } from '@/components/BookingFormZh';
import { BookingInfoChecklist } from '@/components/BookingInfoChecklist';
import { QuickFacts } from '@/components/QuickFacts';
import { JsonLd } from '@/components/JsonLd';
import { MobileBookingCta } from '@/components/MobileBookingCta';
import { MeetingSteps } from '@/components/MeetingSteps';
import { RichText } from '@/components/RichText';
import { airports, SITE, towns } from '@/lib/site';
import { zhPageBySlug, zhPages, zhPrettySlug, zhTownNames, type ZhSeoPage } from '@/lib/content-zh';
import { guideInlineBookingSectionCount, pageHasBookingForm, pageUsesGuideInlineBooking } from '@/lib/booking-visibility';

export const dynamicParams = false;
export function generateStaticParams() { return zhPages.map((page) => ({ slug: page.slug })); }

const WEBPAGE_GUIDE_SLUGS = new Set([
  'cappadocia-airport',
  'nearest-airport-to-cappadocia',
  'kayseri-or-nevsehir-airport-for-cappadocia',
  'cappadocia-shared-shuttle-vs-private-transfer',
  'istanbul-to-cappadocia',
  'cappadocia-to-istanbul',
]);

function airportSchema(airportKey: keyof typeof airports) {
  const airport = airports[airportKey];
  return {
    '@type': 'Airport',
    name: airportKey === 'nevsehir' ? airport.fullName : airport.name,
    alternateName: airportKey === 'nevsehir' ? airport.name : airport.fullName,
    iataCode: airport.code,
  };
}

function serviceAreaServed(page: ZhSeoPage) {
  if (page.route) return [airportSchema(page.route.airport), { '@type': 'Place', name: zhTownNames[page.route.town] }];

  const townPlaces = (Object.keys(towns) as (keyof typeof towns)[]).map((key) => ({ '@type': 'Place', name: zhTownNames[key] }));
  if (page.slug === 'goreme-airport-transfer') return [airportSchema('kayseri'), airportSchema('nevsehir'), { '@type': 'Place', name: zhTownNames.goreme }];
  if (page.slug.includes('kayseri') && !page.slug.includes('nevsehir')) return [airportSchema('kayseri'), ...townPlaces];
  if (page.slug.includes('nevsehir') && !page.slug.includes('kayseri')) return [airportSchema('nevsehir'), ...townPlaces];
  return [airportSchema('kayseri'), airportSchema('nevsehir'), ...townPlaces];
}

function AirportComparisonTablesZh() {
  const rows = (Object.keys(towns) as (keyof typeof towns)[]).map((key) => ({ key, town: towns[key] }));
  return <section className="content-section airport-comparison-tables" aria-label="开塞利与内夫谢希尔机场比较">
    <h2>各城镇到机场的距离与参考车程</h2>
    <div className="table-scroll"><table><thead><tr><th>城镇</th><th>内夫谢希尔（NAV）</th><th>开塞利（ASR）</th></tr></thead><tbody>
      {rows.map(({ key, town }) => <tr key={key}><th scope="row">{zhTownNames[key]}</th><td>{town.distanceNevsehir} / {town.timeNevsehir}</td><td>{town.distanceKayseri} / {town.timeKayseri}</td></tr>)}
    </tbody></table></div>
    <h2>共享班车与私人接送价格</h2>
    <div className="table-scroll"><table><thead><tr><th>服务</th><th>内夫谢希尔（NAV）</th><th>开塞利（ASR）</th></tr></thead><tbody>
      <tr><th scope="row">共享班车</th><td>€15 / 人</td><td>€15 / 人</td></tr>
      <tr><th scope="row">私人 Vito</th><td>€80 / 车</td><td>€90 / 车</td></tr>
      <tr><th scope="row">私人 Sprinter</th><td>€90 / 车</td><td>€110 / 车</td></tr>
    </tbody></table></div>
  </section>;
}

function plainRichText(text: string) {
  return text
    .replace(/\[\[([^\]|]+)\|[^\]]+\]\]/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1');
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const page = zhPageBySlug.get(slug); if (!page) return {};
  return {
    title: { absolute: page.title },
    description: page.description,
    alternates: {
      canonical: `/zh-cn/${page.slug}`,
      languages: { en: `/${page.slug}`, 'zh-CN': `/zh-cn/${page.slug}`, es: `/es/${page.slug}`, 'pt-BR': `/pt-br/${page.slug}`, ko: `/ko/${page.slug}`, ja: `/ja/${page.slug}`, 'x-default': `/${page.slug}` },
    },
    openGraph: {
      type: 'website', locale: 'zh_CN', title: page.title, description: page.description,
      url: `${SITE.domain}/zh-cn/${page.slug}`,
      images: [{ url: '/cappadocia-airport-shuttle-vito-sprinter.webp', width: 1200, height: 675, alt: '卡帕多奇亚机场接送 Vito 与 Sprinter' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.twitterTitle ?? page.title,
      description: page.twitterDescription ?? page.description,
      images: ['/cappadocia-airport-shuttle-vito-sprinter.webp'],
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
  return null;
}

function RouteQuickFactsZh({ page }: { page: ZhSeoPage }) {
  if (!page.route) return null;
  const t = towns[page.route.town];
  const distance = page.route.airport === 'kayseri' ? t.distanceKayseri : t.distanceNevsehir;
  const time = page.route.airport === 'kayseri' ? t.timeKayseri : t.timeNevsehir;
  return <QuickFacts
    ariaLabel="路线快速信息"
    items={[
      { label: '距离', value: distance },
      { label: '参考车程', value: time },
      { label: '价格', value: '€15 / 人' },
    ]}
  />;
}

function PageBookingInfoChecklistZh() {
  return <BookingInfoChecklist locale="zh-CN" />;
}

function RouteAirportMeetingZh({ page }: { page: ZhSeoPage }) {
  if (!page.route || page.route.direction !== 'arrival') return null;

  return <section className="content-section airport-meeting-section">
    <h2>机场接机步骤</h2>
    <p>我们需要您的航班号，以便按照您实际抵达的航班安排机场会面。</p>
    <MeetingSteps
      ariaLabel="机场接机步骤"
      steps={[
        { title: '领取行李', description: '完成行李提取后，前往航站楼出口方向。' },
        { title: '寻找姓名牌', description: '请寻找使用预订姓名接机的司机或工作人员。' },
        { title: '需要时查看 WhatsApp', description: '如无法找到接机点，请查看预订确认中发送的会面信息。' },
      ]}
    />
  </section>;
}

function bookingDefaults(page: ZhSeoPage) {
  if (page.route) return { initialAirport: page.route.airport, initialDirection: page.route.direction === 'arrival' ? 'airport-hotel' as const : 'hotel-airport' as const, initialTown: zhTownNames[page.route.town] };
  const initialAirport = page.slug.includes('nevsehir') ? 'nevsehir' as const : 'kayseri' as const;
  const townKey = (Object.keys(towns) as (keyof typeof towns)[]).find((key) => page.slug === `${String(key)}-airport-transfer`);
  return { initialAirport, initialDirection: page.slug.startsWith('cappadocia-to-') ? 'hotel-airport' as const : 'airport-hotel' as const, initialTown: townKey ? zhTownNames[townKey] : '' };
}

export default async function ChineseSeoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const page = zhPageBySlug.get(slug); if (!page) return notFound();
  const faqSchema = { '@context':'https://schema.org','@type':'FAQPage',mainEntity:page.faq.map((item)=>({'@type':'Question',name:item.q,acceptedAnswer:{'@type':'Answer',text:plainRichText(item.a)}})) };
  const breadcrumb = { '@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'首页',item:`${SITE.domain}/zh-cn`},{'@type':'ListItem',position:2,name:page.h1,item:`${SITE.domain}/zh-cn/${page.slug}`}] };
  const primarySchema = WEBPAGE_GUIDE_SLUGS.has(page.slug) ? {
    '@context':'https://schema.org','@type':'WebPage',name:page.h1,description:page.description,
    url:`${SITE.domain}/zh-cn/${page.slug}`,inLanguage:'zh-CN',
    isPartOf:{'@type':'WebSite',name:SITE.name,url:SITE.domain},
    publisher:{'@type':'TravelAgency',name:SITE.name,url:SITE.domain},
  } : {
    '@context':'https://schema.org','@type':'Service',name:page.h1,serviceType:page.h1,inLanguage:'zh-CN',
    provider:{'@type':'TravelAgency',name:SITE.name,url:SITE.domain},
    areaServed:serviceAreaServed(page),
    offers:page.route?[
      {'@type':'Offer',price:'15',priceCurrency:'EUR',description:'共享机场班车，每人单程'},
      {'@type':'Offer',price:String(airports[page.route.airport].vito),priceCurrency:'EUR',description:'私人 Mercedes Vito，单程，最多5人'},
      {'@type':'Offer',price:String(airports[page.route.airport].sprinter),priceCurrency:'EUR',description:'私人 Mercedes Sprinter，单程，最多16人'},
    ]:undefined,
  };
  const defaults=bookingDefaults(page);
  const hasBookingForm = pageHasBookingForm(page.slug, Boolean(page.route));
  const usesGuideInlineBooking = !page.route && hasBookingForm && pageUsesGuideInlineBooking(page.slug);
  const guideIntroSectionCount = usesGuideInlineBooking ? guideInlineBookingSectionCount(page.slug) : 1;
  const mainClassName = [page.route ? 'route-page' : '', hasBookingForm ? 'has-booking-cta' : ''].filter(Boolean).join(' ') || undefined;

  const renderSection = (section: ZhSeoPage['sections'][number]) => <section className="content-section" key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((p,i)=><p key={i}><RichText text={p} prefix="/zh-cn" /></p>)}{section.bullets&&<ul className={section.bullets.length>12?'long-list':undefined}>{section.bullets.map((b)=><li key={b}><RichText text={b} prefix="/zh-cn" /></li>)}</ul>}</section>;

  return <main lang="zh-CN" className={mainClassName}>
    <JsonLd data={faqSchema}/><JsonLd data={breadcrumb}/><JsonLd data={primarySchema}/>
    <section className="page-hero"><div className="container">
      <div className="breadcrumb"><Link href="/zh-cn">首页</Link><span>›</span><span>{page.h1}</span></div>
      <span className="eyebrow">{page.eyebrow}</span><h1>{page.h1}</h1><p className="lead">{page.lead}</p>
      <RouteQuickFactsZh page={page} />
      <div className="hero-actions"><a className="btn btn-primary" href={hasBookingForm ? '#booking' : '/zh-cn#booking'}>{page.route ? '预订机场班车' : '预订机场接送'}</a><Link className="btn btn-secondary" href="/zh-cn">机场班车首页</Link></div>
      <div className="trust-row"><span>WhatsApp 确认</span><span>单程或往返</span><span>现金支付给司机</span></div>
    </div></section>

    <section className="section page-content-section"><div className={page.route ? 'container route-page-grid' : hasBookingForm ? `container content-grid${usesGuideInlineBooking ? ' guide-booking-grid' : ''}` : 'container guide-content-wrap'}>
      {usesGuideInlineBooking ? <>
        <article className="prose guide-booking-intro">
          {page.slug === 'kayseri-or-nevsehir-airport-for-cappadocia' && <AirportComparisonTablesZh />}
          {page.sections.slice(0, guideIntroSectionCount).map(renderSection)}
        </article>
        <aside className="sidebar guide-booking-sidebar" id="booking"><RouteSummaryZh page={page}/><div className="sidebar-booking"><BookingFormZh compact {...defaults}/></div></aside>
        <article className="prose guide-booking-rest">
          {page.sections.slice(guideIntroSectionCount).map(renderSection)}
          <PageBookingInfoChecklistZh />
          <section className="content-section related-section"><h2>相关机场班车与接送页面</h2><div className="related-grid">{page.related.slice(0,8).map((related)=><Link className="related-card" href={`/zh-cn/${related}`} key={related}><strong>{zhPrettySlug(related)}</strong><span>查看路线、时间与预订信息 →</span></Link>)}</div></section>
          <section className="content-section"><h2>常见问题</h2><div className="faq">{page.faq.map((item)=><details key={item.q}><summary>{item.q}</summary><p><RichText text={item.a} prefix="/zh-cn" /></p></details>)}</div></section>
        </article>
      </> : <>
        <article className={page.route ? 'prose route-prose' : 'prose'}>
          <RouteAirportMeetingZh page={page} />
          {page.sections.map(renderSection)}
          {hasBookingForm && <PageBookingInfoChecklistZh />}
          <section className="content-section related-section"><h2>相关机场班车与接送页面</h2><div className="related-grid">{page.related.slice(0,8).map((related)=><Link className="related-card" href={`/zh-cn/${related}`} key={related}><strong>{zhPrettySlug(related)}</strong><span>查看路线、时间与预订信息 →</span></Link>)}</div></section>
          <section className="content-section"><h2>常见问题</h2><div className="faq">{page.faq.map((item)=><details key={item.q}><summary>{item.q}</summary><p><RichText text={item.a} prefix="/zh-cn" /></p></details>)}</div></section>
        </article>
        {page.route && <aside className="sidebar route-booking-sidebar" id="booking"><div className="sidebar-booking"><BookingFormZh compact {...defaults}/></div></aside>}
        {!page.route && hasBookingForm && <aside className="sidebar" id="booking"><RouteSummaryZh page={page}/><div className="sidebar-booking"><BookingFormZh compact {...defaults}/></div></aside>}
      </>}
    </div></section>

    {hasBookingForm && <MobileBookingCta priceLabel="€15 / 人" bookLabel="立即预订" ariaLabel="快速预订" />}
  </main>;
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BookingForm } from '@/components/BookingForm';
import { JsonLd } from '@/components/JsonLd';
import { RichText } from '@/components/RichText';
import { airports, SITE, towns } from '@/lib/site';
import { pageBySlug, pages, prettySlug, type SeoPage } from '@/lib/content';

export const dynamicParams = false;
export function generateStaticParams() { return pages.map((page) => ({ slug: page.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const page = pageBySlug.get(slug); if (!page) return {};
  return {
    title: { absolute: page.title }, description: page.description,
    keywords: [page.primaryKeyword, ...(page.secondaryKeywords || [])],
    alternates: { canonical: `/${page.slug}`, languages: { en: `/${page.slug}`, 'zh-CN': `/zh-cn/${page.slug}`, 'x-default': `/${page.slug}` } },
    openGraph: { type: 'article', title: page.title, description: page.description, url: `${SITE.domain}/${page.slug}`, images: [{ url: '/cappadocia-airport-shuttle-vito-sprinter.webp', width: 1200, height: 675, alt: 'Cappadocia Airport Shuttle Vito and Sprinter' }] },
  };
}

function RouteSummary({ page }: { page: SeoPage }) {
  if (!page.route) {
    return <div className="summary-box"><h3>Transfer at a glance</h3>
      <div className="summary-line"><span>Shuttle</span><strong>€15 / person / way</strong></div>
      <div className="summary-line"><span>Kayseri Vito</span><strong>€90 / vehicle</strong></div>
      <div className="summary-line"><span>Kayseri Sprinter</span><strong>€110 / vehicle</strong></div>
      <div className="summary-line"><span>Nevsehir Vito</span><strong>€80 / vehicle</strong></div>
      <div className="summary-line"><span>Nevsehir Sprinter</span><strong>€90 / vehicle</strong></div>
      <div className="summary-line"><span>Payment</span><strong>Cash to driver</strong></div>
    </div>;
  }
  const a = airports[page.route.airport]; const t = towns[page.route.town];
  const distance = page.route.airport === 'kayseri' ? t.distanceKayseri : t.distanceNevsehir;
  const time = page.route.airport === 'kayseri' ? t.timeKayseri : t.timeNevsehir;
  const from = page.route.direction === 'arrival' ? `${a.name} (${a.code})` : t.name;
  const to = page.route.direction === 'arrival' ? t.name : `${a.name} (${a.code})`;
  return <div className="summary-box"><h3>Route at a glance</h3>
    <div className="summary-line"><span>From</span><strong>{from}</strong></div><div className="summary-line"><span>To</span><strong>{to}</strong></div>
    <div className="summary-line"><span>Distance</span><strong>{distance}</strong></div><div className="summary-line"><span>Road estimate</span><strong>{time}</strong></div>
    <div className="summary-line"><span>Shuttle</span><strong>€15 / person</strong></div><div className="summary-line"><span>Vito · max 5</span><strong>€{a.vito}</strong></div><div className="summary-line"><span>Sprinter · max 16</span><strong>€{a.sprinter}</strong></div>
    <div className="summary-line"><span>Payment</span><strong>Cash to driver</strong></div>
  </div>;
}

function bookingDefaults(page: SeoPage) {
  if (page.route) return { initialAirport: page.route.airport, initialDirection: page.route.direction === 'arrival' ? 'airport-hotel' as const : 'hotel-airport' as const, initialTown: towns[page.route.town].name };
  const initialAirport = page.slug.includes('nevsehir') ? 'nevsehir' as const : 'kayseri' as const;
  const townKey = (Object.keys(towns) as (keyof typeof towns)[]).find((key) => page.slug === `${key}-airport-transfer`);
  return { initialAirport, initialDirection: page.slug.startsWith('cappadocia-to-') || page.slug === 'hotel-to-airport-transfer' ? 'hotel-airport' as const : 'airport-hotel' as const, initialTown: townKey ? towns[townKey].name : '' };
}

export default async function SeoPageView({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const page = pageBySlug.get(slug); if (!page) notFound();
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: page.faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) };
  const breadcrumb = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE.domain }, { '@type': 'ListItem', position: 2, name: page.h1, item: `${SITE.domain}/${page.slug}` }] };
  const service = {
    '@context': 'https://schema.org', '@type': 'Service', name: page.h1, serviceType: page.primaryKeyword,
    provider: { '@type': 'TravelAgency', name: SITE.name, url: SITE.domain },
    areaServed: page.route ? [airports[page.route.airport].name, towns[page.route.town].name] : ['Cappadocia', 'Kayseri Airport', 'Nevsehir Airport'],
    offers: page.route ? [
      { '@type': 'Offer', price: '15', priceCurrency: 'EUR', description: 'Shared shuttle per person, one way' },
      { '@type': 'Offer', price: String(airports[page.route.airport].vito), priceCurrency: 'EUR', description: 'Private Mercedes Vito, one way, up to 5 passengers' },
      { '@type': 'Offer', price: String(airports[page.route.airport].sprinter), priceCurrency: 'EUR', description: 'Private Mercedes Sprinter, one way, up to 16 passengers' },
    ] : undefined,
  };
  const defaults = bookingDefaults(page);

  return <main>
    <JsonLd data={faqSchema} /><JsonLd data={breadcrumb} /><JsonLd data={service} />
    <section className="page-hero"><div className="container">
      <div className="breadcrumb"><Link href="/">Home</Link><span>›</span><span>{page.h1}</span></div>
      <span className="eyebrow">{page.eyebrow}</span><h1>{page.h1}</h1><p className="lead">{page.lead}</p>
      <div className="hero-actions"><a className="btn btn-primary" href="#booking">Book this transfer</a><Link className="btn btn-secondary" href="/cappadocia-shuttle-transfer">Shuttle service</Link></div>
      <div className="trust-row"><span>WhatsApp confirmation</span><span>One way or round trip</span><span>Cash to driver</span></div>
    </div></section>

    <section className="section page-content-section"><div className="container content-grid">
      <article className="prose">
        {page.sections.map((section) => <section className="content-section" key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((p, i) => <p key={i}><RichText text={p} /></p>)}{section.bullets && <ul className={section.bullets.length > 12 ? 'long-list' : undefined}>{section.bullets.map((b) => <li key={b}><RichText text={b} /></li>)}</ul>}</section>)}

        <section className="content-section related-section"><h2>Related transfer pages</h2><div className="related-grid">
          {page.related.slice(0, 8).map((related) => <Link className="related-card" href={`/${related}`} key={related}><strong>{prettySlug(related)}</strong><span>Route details, prices and planning →</span></Link>)}
        </div></section>

        <section className="content-section"><h2>Frequently asked questions</h2><div className="faq">{page.faq.map((item) => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div></section>
      </article>

      <aside className="sidebar" id="booking"><RouteSummary page={page} /><div className="sidebar-booking"><BookingForm compact {...defaults} /></div></aside>
    </div></section>
  </main>;
}

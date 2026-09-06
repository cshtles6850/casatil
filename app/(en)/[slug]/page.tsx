import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BookingForm } from '@/components/BookingForm';
import { BookingInfoChecklist } from '@/components/BookingInfoChecklist';
import { QuickFacts } from '@/components/QuickFacts';
import { JsonLd } from '@/components/JsonLd';
import { MobileBookingCta } from '@/components/MobileBookingCta';
import { MeetingSteps } from '@/components/MeetingSteps';
import { RichText } from '@/components/RichText';
import { airports, SITE, towns } from '@/lib/site';
import { pageBySlug, pages, prettySlug, type SeoPage } from '@/lib/content';
import { guideInlineBookingSectionCount, pageHasBookingForm, pageUsesGuideInlineBooking } from '@/lib/booking-visibility';

export const dynamicParams = false;
export function generateStaticParams() { return pages.map((page) => ({ slug: page.slug })); }

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

function serviceAreaServed(page: SeoPage) {
  if (page.route) return [airportSchema(page.route.airport), { '@type': 'Place', name: towns[page.route.town].name }];

  const townPlaces = (Object.keys(towns) as (keyof typeof towns)[]).map((key) => ({ '@type': 'Place', name: towns[key].name }));
  if (page.slug === 'goreme-airport-transfer') return [airportSchema('kayseri'), airportSchema('nevsehir'), { '@type': 'Place', name: towns.goreme.name }];
  if (page.slug.includes('kayseri') && !page.slug.includes('nevsehir')) return [airportSchema('kayseri'), ...townPlaces];
  if (page.slug.includes('nevsehir') && !page.slug.includes('kayseri')) return [airportSchema('nevsehir'), ...townPlaces];
  return [airportSchema('kayseri'), airportSchema('nevsehir'), ...townPlaces];
}

function AirportComparisonTables() {
  const rows = (Object.keys(towns) as (keyof typeof towns)[]).map((key) => ({ key, town: towns[key] }));
  return <section className="content-section airport-comparison-tables" aria-label="Kayseri and Nevsehir airport comparison">
    <h2>Airport Distance & Transfer Time by Town</h2>
    <div className="table-scroll"><table><thead><tr><th>Town</th><th>Nevsehir (NAV)</th><th>Kayseri (ASR)</th></tr></thead><tbody>
      {rows.map(({ key, town }) => <tr key={key}><th scope="row">{town.name}</th><td>{town.distanceNevsehir} / {town.timeNevsehir}</td><td>{town.distanceKayseri} / {town.timeKayseri}</td></tr>)}
    </tbody></table></div>
    <h2>Shared Shuttle & Private Transfer Prices</h2>
    <div className="table-scroll"><table><thead><tr><th>Service</th><th>Nevsehir (NAV)</th><th>Kayseri (ASR)</th></tr></thead><tbody>
      <tr><th scope="row">Shared shuttle</th><td>€15 / person</td><td>€15 / person</td></tr>
      <tr><th scope="row">Private Vito</th><td>€80 / vehicle</td><td>€90 / vehicle</td></tr>
      <tr><th scope="row">Private Sprinter</th><td>€90 / vehicle</td><td>€110 / vehicle</td></tr>
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
  const { slug } = await params; const page = pageBySlug.get(slug); if (!page) return {};
  return {
    title: { absolute: page.title }, description: page.description,
    alternates: { canonical: `/${page.slug}`, languages: { en: `/${page.slug}`, 'zh-CN': `/zh-cn/${page.slug}`, 'x-default': `/${page.slug}` } },
    openGraph: { type: 'website', title: page.title, description: page.description, url: `${SITE.domain}/${page.slug}`, images: [{ url: '/cappadocia-airport-shuttle-vito-sprinter.webp', width: 1200, height: 675, alt: 'Cappadocia Airport Shuttle Vito and Sprinter' }] },
    twitter: {
      card: 'summary_large_image',
      title: page.twitterTitle ?? page.title,
      description: page.twitterDescription ?? page.description,
      images: ['/cappadocia-airport-shuttle-vito-sprinter.webp'],
    },
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
  return null;
}

function RouteQuickFacts({ page }: { page: SeoPage }) {
  if (!page.route) return null;
  const t = towns[page.route.town];
  const distance = page.route.airport === 'kayseri' ? t.distanceKayseri : t.distanceNevsehir;
  const time = page.route.airport === 'kayseri' ? t.timeKayseri : t.timeNevsehir;
  return <QuickFacts
    ariaLabel="Route quick facts"
    items={[
      { label: 'Distance', value: distance },
      { label: 'Travel Time', value: time },
      { label: 'Price', value: '€15 / person' },
    ]}
  />;
}

function PageBookingInfoChecklist() {
  return <BookingInfoChecklist />;
}

function RouteAirportMeeting({ page }: { page: SeoPage }) {
  if (!page.route || page.route.direction !== 'arrival') return null;

  return <section className="content-section airport-meeting-section">
    <h2>Meeting at the airport</h2>
    <p>We ask for your flight number so the airport meeting can be matched to the flight you are actually arriving on.</p>
    <MeetingSteps
      ariaLabel="Airport meeting steps"
      steps={[
        { title: 'Collect your baggage', description: 'Finish baggage claim, then walk toward the terminal exit.' },
        { title: 'Find your name sign', description: 'Look for the driver or representative using the reservation name.' },
        { title: 'Check WhatsApp if needed', description: 'Use the meeting details sent for your booking if you need help locating the pickup point.' },
      ]}
    />
  </section>;
}

function bookingDefaults(page: SeoPage) {
  if (page.route) return { initialAirport: page.route.airport, initialDirection: page.route.direction === 'arrival' ? 'airport-hotel' as const : 'hotel-airport' as const, initialTown: towns[page.route.town].name };
  const initialAirport = page.slug.includes('nevsehir') ? 'nevsehir' as const : 'kayseri' as const;
  const townKey = (Object.keys(towns) as (keyof typeof towns)[]).find((key) => page.slug === `${String(key)}-airport-transfer`);
  return { initialAirport, initialDirection: page.slug.startsWith('cappadocia-to-') ? 'hotel-airport' as const : 'airport-hotel' as const, initialTown: townKey ? towns[townKey].name : '' };
}

export default async function SeoPageView({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const page = pageBySlug.get(slug); if (!page) return notFound();
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: page.faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: plainRichText(item.a) } })) };
  const breadcrumb = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE.domain }, { '@type': 'ListItem', position: 2, name: page.h1, item: `${SITE.domain}/${page.slug}` }] };
  const primarySchema = WEBPAGE_GUIDE_SLUGS.has(page.slug) ? {
    '@context': 'https://schema.org', '@type': 'WebPage', name: page.h1, description: page.description,
    url: `${SITE.domain}/${page.slug}`, inLanguage: 'en',
    isPartOf: { '@type': 'WebSite', name: SITE.name, url: SITE.domain },
    publisher: { '@type': 'TravelAgency', name: SITE.name, url: SITE.domain },
  } : {
    '@context': 'https://schema.org', '@type': 'Service', name: page.h1, serviceType: page.h1,
    provider: { '@type': 'TravelAgency', name: SITE.name, url: SITE.domain },
    areaServed: serviceAreaServed(page),
    offers: page.route ? [
      { '@type': 'Offer', price: '15', priceCurrency: 'EUR', description: 'Shared shuttle per person, one way' },
      { '@type': 'Offer', price: String(airports[page.route.airport].vito), priceCurrency: 'EUR', description: 'Private Mercedes Vito, one way, up to 5 passengers' },
      { '@type': 'Offer', price: String(airports[page.route.airport].sprinter), priceCurrency: 'EUR', description: 'Private Mercedes Sprinter, one way, up to 16 passengers' },
    ] : undefined,
  };
  const defaults = bookingDefaults(page);
  const hasBookingForm = pageHasBookingForm(page.slug, Boolean(page.route));
  const usesGuideInlineBooking = !page.route && hasBookingForm && pageUsesGuideInlineBooking(page.slug);
  const guideIntroSectionCount = usesGuideInlineBooking ? guideInlineBookingSectionCount(page.slug) : 1;
  const mainClassName = [page.route ? 'route-page' : '', hasBookingForm ? 'has-booking-cta' : ''].filter(Boolean).join(' ') || undefined;

  return <main className={mainClassName}>
    <JsonLd data={faqSchema} /><JsonLd data={breadcrumb} /><JsonLd data={primarySchema} />
    <section className="page-hero"><div className="container">
      <div className="breadcrumb"><Link href="/">Home</Link><span>›</span><span>{page.h1}</span></div>
      <span className="eyebrow">{page.eyebrow}</span><h1>{page.h1}</h1><p className="lead">{page.lead}</p>
      <RouteQuickFacts page={page} />
      <div className="hero-actions"><a className="btn btn-primary" href={hasBookingForm ? '#booking' : '/#booking'}>{page.route ? 'Book this shuttle' : 'Book airport service'}</a><Link className="btn btn-secondary" href="/">Airport shuttle</Link></div>
      <div className="trust-row"><span>WhatsApp confirmation</span><span>One way or round trip</span><span>Cash to driver</span></div>
    </div></section>

    <section className="section page-content-section"><div className={page.route ? 'container route-page-grid' : hasBookingForm ? `container content-grid${usesGuideInlineBooking ? ' guide-booking-grid' : ''}` : 'container guide-content-wrap'}>
      {usesGuideInlineBooking ? <>
        <article className="prose guide-booking-intro">
          {page.slug === 'kayseri-or-nevsehir-airport-for-cappadocia' && <AirportComparisonTables />}
          {page.sections.slice(0, guideIntroSectionCount).map((section) => <section className="content-section" key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((p, i) => <p key={i}><RichText text={p} /></p>)}{section.bullets && <ul className={section.bullets.length > 12 ? 'long-list' : undefined}>{section.bullets.map((b) => <li key={b}><RichText text={b} /></li>)}</ul>}</section>)}
        </article>
        <aside className="sidebar guide-booking-sidebar" id="booking"><RouteSummary page={page} /><div className="sidebar-booking"><BookingForm compact {...defaults} /></div></aside>
        <article className="prose guide-booking-rest">
          {page.sections.slice(guideIntroSectionCount).map((section) => <section className="content-section" key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((p, i) => <p key={i}><RichText text={p} /></p>)}{section.bullets && <ul className={section.bullets.length > 12 ? 'long-list' : undefined}>{section.bullets.map((b) => <li key={b}><RichText text={b} /></li>)}</ul>}</section>)}
          <PageBookingInfoChecklist />
          <section className="content-section related-section"><h2>Related shuttle & transfer pages</h2><div className="related-grid">
            {page.related.slice(0, 8).map((related) => <Link className="related-card" href={`/${related}`} key={related}><strong>{prettySlug(related)}</strong><span>Route details, timing and booking →</span></Link>)}
          </div></section>
          <section className="content-section"><h2>Frequently asked questions</h2><div className="faq">{page.faq.map((item) => <details key={item.q}><summary>{item.q}</summary><p><RichText text={item.a} /></p></details>)}</div></section>
        </article>
      </> : <>
        <article className={page.route ? 'prose route-prose' : 'prose'}>
          <RouteAirportMeeting page={page} />
          {page.sections.map((section) => <section className="content-section" key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((p, i) => <p key={i}><RichText text={p} /></p>)}{section.bullets && <ul className={section.bullets.length > 12 ? 'long-list' : undefined}>{section.bullets.map((b) => <li key={b}><RichText text={b} /></li>)}</ul>}</section>)}

          {hasBookingForm && <PageBookingInfoChecklist />}

          <section className="content-section related-section"><h2>Related shuttle & transfer pages</h2><div className="related-grid">
            {page.related.slice(0, 8).map((related) => <Link className="related-card" href={`/${related}`} key={related}><strong>{prettySlug(related)}</strong><span>Route details, timing and booking →</span></Link>)}
          </div></section>

          <section className="content-section"><h2>Frequently asked questions</h2><div className="faq">{page.faq.map((item) => <details key={item.q}><summary>{item.q}</summary><p><RichText text={item.a} /></p></details>)}</div></section>

        </article>

        {page.route && <aside className="sidebar route-booking-sidebar" id="booking"><div className="sidebar-booking"><BookingForm compact {...defaults} /></div></aside>}
        {!page.route && hasBookingForm && <aside className="sidebar" id="booking"><RouteSummary page={page} /><div className="sidebar-booking"><BookingForm compact {...defaults} /></div></aside>}
      </>}
    </div></section>

    {hasBookingForm && <MobileBookingCta priceLabel="€15 / person" bookLabel="Book Now" ariaLabel="Quick booking" />}
  </main>;
}

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BookingForm } from '@/components/BookingForm';
import { JsonLd } from '@/components/JsonLd';
import { SITE, towns } from '@/lib/site';


export const metadata: Metadata = {
  title: { absolute: 'Cappadocia Airport Shuttle | Kayseri & Nevsehir €15' },
  description: 'Cappadocia Airport Shuttle from Kayseri Airport (ASR) and Nevsehir Airport (NAV) to Goreme, Urgup, Uchisar, Avanos, Ortahisar and Cavusin. Shared shuttle €15 per person; private Vito and Sprinter available.',
  keywords: ['cappadocia airport shuttle','airport shuttle cappadocia','cappadocia hotel shuttle','cappadocia shared airport shuttle','kayseri nevsehir airport shuttle'],
  alternates: { canonical: '/', languages: { en: '/', 'zh-CN': '/zh-cn', 'x-default': '/' } },
};

const townKeys = Object.keys(towns) as (keyof typeof towns)[];

const homeFaq = [
  ['How much is Cappadocia Airport Shuttle?', 'The shared shuttle is €15 per person one way from either Kayseri Airport (ASR) or Nevsehir Airport (NAV). Round trip is €30 per person.'],
  ['Which Cappadocia towns are covered by the shared shuttle?', 'Goreme, Urgup, Uchisar, Avanos, Cavusin and Ortahisar are within the shared-shuttle service area. Mustafapasa requires a private transfer request.'],
  ['Can I book both airport arrival and hotel-to-airport return?', 'Yes. Select Round Trip and enter both arrival and departure flight information.'],
  ['How much is a private Vito?', 'Kayseri Airport Vito is €90 one way; Nevsehir Airport Vito is €80. The Vito is for up to 5 passengers.'],
  ['How much is a private Sprinter?', 'Kayseri Airport Sprinter is €110 one way; Nevsehir Airport Sprinter is €90. The Sprinter is for up to 16 passengers.'],
  ['How do I pay for the transfer?', 'Payment is cash to the driver. Prices are shown in EUR; USD or TRY cash payment can be arranged using the current exchange rate confirmed for the booking.'],
  ['Why does the booking form ask for passport numbers?', 'Passenger names and passport numbers are required by the operating company for reservation and transfer operation.'],
  ['Will the driver meet me at the airport?', 'Meeting details are confirmed on WhatsApp after the booking request. The reservation passenger name can be used for the airport meeting sign.'],
  ['What happens if my flight is delayed?', 'Send updated flight information on WhatsApp as early as possible. Shared-shuttle operation can involve several passengers, so a schedule change should be reconfirmed.'],
  ['Can a shuttle reach every cave hotel door?', 'Not always. Some historic lanes are too narrow or unsuitable for a large vehicle, so a nearby safe stopping point may be confirmed for the specific hotel.'],
] as const;

export default function HomePage() {
  const serviceSchema = {
    '@context': 'https://schema.org', '@type': 'Service', name: 'Cappadocia Airport Shuttle',
    provider: { '@type': 'TravelAgency', name: SITE.name, url: SITE.domain },
    areaServed: ['Kayseri Airport', 'Nevsehir Airport', 'Goreme', 'Urgup', 'Uchisar', 'Avanos', 'Ortahisar', 'Cavusin'],
    serviceType: ['Airport shuttle', 'Private airport transfer'],
    offers: [
      { '@type': 'Offer', price: '15', priceCurrency: 'EUR', description: 'Shared airport shuttle per person, one way' },
      { '@type': 'Offer', price: '90', priceCurrency: 'EUR', description: 'Kayseri private Vito, one way' },
      { '@type': 'Offer', price: '110', priceCurrency: 'EUR', description: 'Kayseri private Sprinter, one way' },
      { '@type': 'Offer', price: '80', priceCurrency: 'EUR', description: 'Nevsehir private Vito, one way' },
      { '@type': 'Offer', price: '90', priceCurrency: 'EUR', description: 'Nevsehir private Sprinter, one way' },
    ],
  };
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: homeFaq.map(([q,a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) };

  return <main>
    <JsonLd data={serviceSchema} /><JsonLd data={faqSchema} />

    <section className="home-hero"><div className="container hero-grid">
      <div className="hero-visual" aria-label="Cappadocia airport shuttle vehicles">
        <Image src="/cappadocia-airport-shuttle-vito-sprinter.webp" alt="Cappadocia Airport Shuttle Mercedes Vito and Sprinter vehicles" width={1200} height={675} priority sizes="(max-width: 800px) 94vw, 48vw" />
      </div>
      <div className="hero-copy">
        <span className="eyebrow">Kayseri ASR · Nevsehir NAV</span>
        <h1>Cappadocia Airport Shuttle</h1>
        <p className="lead">Book a <strong>€15 per person Cappadocia shuttle transfer</strong> between Kayseri or Nevsehir Airport and Goreme, Urgup, Uchisar, Avanos, Ortahisar or Cavusin. Private Vito and Sprinter transfers are available too.</p>
        <div className="hero-actions"><a className="btn btn-primary" href="#booking">Book your transfer</a><Link className="btn btn-secondary" href="/cappadocia-shuttle-transfer">Shuttle details</Link></div>
        <div className="trust-row"><span>€15 from both airports</span><span>Airport meet & hotel transfer</span><span>Cash to driver</span></div>
      </div>
    </div></section>

    <section className="section booking-section" id="booking"><div className="container home-booking-grid">
      <aside className="home-booking-info">
        <div className="kicker">Clear prices</div><h2>Choose shuttle or private</h2>
        <div className="summary-box home-summary">
          <div className="summary-line"><span>Shared shuttle</span><strong>€15 / person / way</strong></div>
          <div className="summary-line"><span>Kayseri Vito · max 5</span><strong>€90</strong></div>
          <div className="summary-line"><span>Kayseri Sprinter · max 16</span><strong>€110</strong></div>
          <div className="summary-line"><span>Nevsehir Vito · max 5</span><strong>€80</strong></div>
          <div className="summary-line"><span>Nevsehir Sprinter · max 16</span><strong>€90</strong></div>
        </div>
        <p className="small-copy">Round trip is exactly double. Private prices are per vehicle. Passenger names and passport numbers are required for reservation and transfer operation.</p>
      </aside>
      <BookingForm />
    </div></section>

    <section className="section section-muted"><div className="container">
      <div className="section-head"><div className="kicker">Why book with us</div><h2>Local airport transfer operation, clear booking details</h2><p>The service is operated with insured shuttle vehicles and experienced local drivers on Kayseri, Nevsehir and Cappadocia hotel routes.</p></div>
      <div className="cards trust-cards">
        <div className="card"><h3>Airport meet & greet</h3><p>Arrival meeting details are confirmed on WhatsApp and can use the passenger reservation name.</p></div>
        <div className="card"><h3>Hotel pickup & drop-off</h3><p>Supported shared-shuttle areas are Goreme, Urgup, Uchisar, Avanos, Cavusin and Ortahisar.</p></div>
        <div className="card"><h3>Insured vehicles</h3><p>Shared vehicle type can vary with the daily reservation plan and passenger count; private Vito or Sprinter is selected in the booking.</p></div>
        <div className="card"><h3>WhatsApp confirmation</h3><p>Flight, meeting, pickup and reservation details are checked and confirmed for the specific booking.</p></div>
      </div>
    </div></section>

    <section className="section"><div className="container">
      <div className="section-head"><div className="kicker">Airport hubs</div><h2>Choose the airport before the route</h2><p>Both airports use the same €15 shared-shuttle fare. Road distance, flight schedule and private vehicle price are different.</p></div>
      <div className="cards">
        <Link href="/kayseri-airport-transfer" className="card card-link"><h3>Kayseri Airport Transfer (ASR)</h3><p>Route hub for Goreme, Urgup, Uchisar, Avanos, Ortahisar and Cavusin. Vito €90 · Sprinter €110.</p></Link>
        <Link href="/nevsehir-airport-transfer" className="card card-link"><h3>Nevsehir Airport Transfer (NAV)</h3><p>Shorter road access to many central towns. Vito €80 · Sprinter €90.</p></Link>
        <Link href="/kayseri-or-nevsehir-airport-for-cappadocia" className="card card-link"><h3>Kayseri or Nevsehir?</h3><p>Compare airport distance, flight convenience and transfer cost before choosing.</p></Link>
      </div>
    </div></section>

    <section className="section"><div className="container">
      <div className="section-head"><div className="kicker">Airport → hotel</div><h2>All Cappadocia arrival routes</h2><p>Each route includes airport-specific timing, hotel-access notes, local arrival ideas and return-planning guidance for that journey.</p></div>
      <div className="route-groups">
        <div><h3>Kayseri Airport (ASR)</h3><div className="route-link-grid">{townKeys.map((key) => <Link key={key} href={`/kayseri-airport-to-${key}-transfer`}><strong>Kayseri Airport → {towns[key].name}</strong><span>{towns[key].distanceKayseri} · {towns[key].timeKayseri}</span></Link>)}</div></div>
        <div><h3>Nevsehir Airport (NAV)</h3><div className="route-link-grid">{townKeys.map((key) => <Link key={key} href={`/nevsehir-airport-to-${key}-transfer`}><strong>Nevsehir Airport → {towns[key].name}</strong><span>{towns[key].distanceNevsehir} · {towns[key].timeNevsehir}</span></Link>)}</div></div>
      </div>
    </div></section>

    <section className="section section-muted"><div className="container">
      <div className="section-head"><div className="kicker">Hotel → airport</div><h2>Return shuttle routes for the flight home</h2><p>Departure pages focus on pickup timing, hotel access, flight changes and what to do with spare time before leaving.</p></div>
      <div className="route-groups">
        <div><h3>To Kayseri Airport (ASR)</h3><div className="route-link-grid">{townKeys.map((key) => <Link key={key} href={`/${key}-to-kayseri-airport-transfer`}><strong>{towns[key].name} → Kayseri Airport</strong><span>{towns[key].distanceKayseri} · {towns[key].timeKayseri}</span></Link>)}</div></div>
        <div><h3>To Nevsehir Airport (NAV)</h3><div className="route-link-grid">{townKeys.map((key) => <Link key={key} href={`/${key}-to-nevsehir-airport-transfer`}><strong>{towns[key].name} → Nevsehir Airport</strong><span>{towns[key].distanceNevsehir} · {towns[key].timeNevsehir}</span></Link>)}</div></div>
      </div>
    </div></section>

    <section className="section"><div className="container content-grid homepage-content-grid">
      <article className="prose">
        <section className="content-section"><div className="kicker">Cappadocia shuttle first</div><h2>Why the €15 shuttle is our main airport service</h2><p>A <strong>Cappadocia shuttle transfer</strong> gives solo travelers, couples and small groups a pre-booked connection between the airport and hotel without paying for an entire private vehicle. The trade-off is that the run can include other booked passengers and hotel stops.</p><p>If your group wants a dedicated vehicle, compare the <Link href="/private-airport-transfer-cappadocia">private airport transfer</Link>. Vito carries up to 5 passengers and Sprinter up to 16, with airport-specific fixed prices.</p></section>
        <section className="content-section"><h2>Hotel access matters in Cappadocia</h2><p>Goreme, Uchisar, Urgup, Ortahisar and Cavusin include historic cave or stone accommodation where the road to reception may be narrow or steep. Avanos is more spread out around the river. That is why the booking form asks for the full hotel name rather than only the town.</p><p>For cave accommodation details, use the <Link href="/cappadocia-cave-hotel-airport-transfer">Cappadocia cave hotel airport transfer guide</Link>. The individual town pages go further with local hotel names and pickup/drop-off guidance.</p></section>
        <section className="content-section"><h2>Coming from Istanbul?</h2><p>Most travelers fly from IST or SAW to ASR or NAV rather than taking an airport shuttle all the way from Istanbul. The <Link href="/istanbul-to-cappadocia">Istanbul to Cappadocia guide</Link> explains how the flight and final airport shuttle fit together.</p></section>
      </article>
      <aside className="summary-box guide-box"><h3>Useful planning guides</h3><Link href="/cappadocia-airport">Cappadocia Airport: NAV & ASR</Link><Link href="/nearest-airport-to-cappadocia">Nearest Airport to Cappadocia</Link><Link href="/cappadocia-airport-code">Cappadocia Airport Codes: NAV & ASR</Link><Link href="/cappadocia-shared-shuttle-vs-private-transfer">Shuttle vs Private Transfer</Link><Link href="/airport-transfer-prices">Airport Transfer Prices</Link><Link href="/cappadocia-airport-transfer-travel-times">Transfer Times & Distances</Link><Link href="/cappadocia-cave-hotel-airport-transfer">Cave Hotel Transfer Guide</Link><Link href="/cappadocia-to-istanbul">Cappadocia to Istanbul</Link></aside>
    </div></section>

    <section className="section section-muted"><div className="container"><div className="section-head"><div className="kicker">FAQ</div><h2>Cappadocia airport shuttle questions</h2></div><div className="faq faq-wide">{homeFaq.map(([q,a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></div></section>
  </main>;
}

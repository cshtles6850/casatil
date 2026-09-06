import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: { absolute: 'About Us | Cappadocia Airport Shuttle' },
  description: 'About Cappadocia Airport Shuttle: shared airport shuttle and private transfer service for Kayseri ASR, Nevsehir NAV and central Cappadocia hotels.',
  alternates: { canonical: '/about-us', languages: { en:'/about-us', 'zh-CN':'/zh-cn/about-us', 'x-default':'/about-us' } },
  robots: { index:true, follow:true },
  twitter: { card:'summary_large_image', title:'About Us | Cappadocia Airport Shuttle', description:'About Cappadocia Airport Shuttle: shared airport shuttle and private transfer service for Kayseri ASR, Nevsehir NAV and central Cappadocia hotels.', images:['/cappadocia-airport-shuttle-vito-sprinter.webp'] },
};

export default function AboutUsPage(){
  return <main>
    <section className="page-hero"><div className="container">
      <div className="breadcrumb"><Link href="/">Home</Link><span>›</span><span>About Us</span></div>
      <span className="eyebrow">Who operates the service</span>
      <h1>About Cappadocia Airport Shuttle</h1>
      <p className="lead">Cappadocia Airport Shuttle focuses on pre-booked airport transport between Kayseri Airport (ASR), Nevsehir Airport (NAV) and the main hotel areas of central Cappadocia.</p>
    </div></section>
    <section className="section page-content-section"><div className="container content-grid">
      <article className="prose">
        <section className="content-section"><h2>Airport shuttle is the main service</h2><p>Our main product is the shared airport shuttle for Goreme, Urgup, Uchisar, Avanos, Ortahisar and Cavusin. Private Mercedes Vito and Sprinter transfers are also available for travelers who want a dedicated vehicle.</p><p>Kayseri and Nevsehir are handled as separate airport journeys so travelers can see the correct distance, normal road-time range and airport-specific private vehicle price before booking.</p></section>
        <section className="content-section"><h2>Local route information instead of one generic Cappadocia stop</h2><p>Cappadocia hotels are spread across different towns, cave-hotel streets, hillside properties and normal town roads. A Goreme cave hotel, an Avanos river-side property and an Uchisar castle-side hotel do not have the same final approach. Pickup and drop-off are confirmed around the practical access to the actual property.</p></section>
        <section className="content-section"><h2>How booking works</h2><p>Choose shared shuttle or private transfer, select the airport and direction, enter the real flight and accommodation details, and send the booking request. Confirmation and meeting details are handled for the specific reservation. Standard payment is cash to the driver.</p><p>For questions before booking, use the <Link href="/contact-us">Contact Us</Link> page or WhatsApp. Service rules are explained in the <Link href="/service-contract">Service Contract</Link>.</p></section>
        <section className="content-section"><h2>Licensed Travel Agency</h2><p>Cappadocia Airport Shuttle is operated by <strong>{SITE.company}</strong>, TURSAB No: <strong>{SITE.tursab}</strong>.</p></section>
      </article>
      <aside className="summary-box guide-box"><h3>Quick links</h3><Link href="/kayseri-airport-shuttle">Kayseri Airport Shuttle</Link><Link href="/nevsehir-airport-shuttle">Nevsehir Airport Shuttle</Link><Link href="/goreme-airport-transfer">Goreme Airport Transfer</Link><Link href="/private-airport-transfer-cappadocia">Private Airport Transfer</Link><Link href="/contact-us">Contact Us</Link></aside>
    </div></section>
  </main>;
}

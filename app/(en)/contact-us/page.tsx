import type { Metadata } from 'next';
import Link from 'next/link';
import { ContactForm } from '@/components/ContactForm';
import { SITE } from '@/lib/site';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';

export const metadata: Metadata = {
  title: { absolute: 'Contact Us | Cappadocia Airport Shuttle' },
  description: 'Contact Cappadocia Airport Shuttle about Kayseri or Nevsehir airport shuttle bookings, private transfer, flight details or hotel pickup.',
  alternates: { canonical:'/contact-us', languages:{ en:'/contact-us', 'zh-CN':'/zh-cn/contact-us', 'x-default':'/contact-us' } },
  robots: { index:true, follow:true },
  twitter: { card:'summary_large_image', title:'Contact Us | Cappadocia Airport Shuttle', description:'Questions about an airport shuttle, private transfer, flight change or hotel pickup? Use the contact form or WhatsApp.', images:['/cappadocia-airport-shuttle-vito-sprinter.webp'] },
};

const whatsappMessage = encodeURIComponent(SITE.whatsappDirectMessageEn);

export default function ContactUsPage(){return <main>
  <section className="page-hero"><div className="container"><div className="breadcrumb"><Link href="/">Home</Link><span>›</span><span>Contact Us</span></div><span className="eyebrow">Booking & support</span><h1>Contact Us</h1><p className="lead">Send a question about an airport shuttle, private transfer, flight change or hotel pickup. Messages submitted here are delivered to our email inbox.</p></div></section>
  <section className="section page-content-section"><div className="container contact-grid">
    <div className="contact-card"><h2>Send a message</h2><p>Use the form for general questions. If you already know the flight, hotel and passenger details and want to book, the main booking form is faster.</p><ContactForm /></div>
    <aside className="contact-aside">
      <div className="summary-box"><h3>Direct contact</h3><div className="contact-method"><span>WhatsApp</span><a href={`https://wa.me/${SITE.whatsappDigits}?text=${whatsappMessage}`} target="_blank" rel="noreferrer"><WhatsAppIcon size={18}/> {SITE.whatsappDisplay}</a></div></div>
      <div className="summary-box"><h3>Before you write</h3><p className="small-copy">For a booking question, include the airport (ASR or NAV), flight number, hotel town, travel date and passenger count if you already know them. Do not send payment-card information.</p></div>
      <div className="summary-box"><h3>Agency</h3><p className="small-copy">{SITE.company}<br/>TURSAB No: {SITE.tursab}</p><Link className="inline-link" href="/about-us">About Us</Link></div>
    </aside>
  </div></section>
</main>}

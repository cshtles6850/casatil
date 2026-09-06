import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: { absolute:'Privacy Policy | Cappadocia Airport Shuttle' },
  description:'Privacy policy for Cappadocia Airport Shuttle booking requests, contact messages and passenger information.',
  alternates:{ canonical:'/privacy-policy', languages:{ en:'/privacy-policy','zh-CN':'/zh-cn/privacy-policy','x-default':'/privacy-policy' } },
  robots:{ index:false, follow:true },
  twitter: { card:'summary_large_image', title:'Privacy Policy | Cappadocia Airport Shuttle', description:'How Cappadocia Airport Shuttle collects, uses and protects personal information for bookings and customer support.', images:['/cappadocia-airport-shuttle-vito-sprinter.webp'] },
};

export default function PrivacyPolicyPage(){return <main>
  <section className="page-hero"><div className="container"><div className="breadcrumb"><Link href="/">Home</Link><span>›</span><span>Privacy Policy</span></div><span className="eyebrow">Personal data</span><h1>Privacy Policy</h1><p className="lead">Cappadocia Airport Shuttle respects your privacy and uses personal information only for legitimate booking, support, operational, security and legal purposes.</p></div></section>
  <section className="section page-content-section"><div className="container privacy-prose prose">
    <section className="content-section"><h2>Personal data</h2><p>When you make a reservation or contact us, we may collect your name, email address, telephone or WhatsApp number, flight information, hotel or accommodation details, passenger count, booking details, passport information where required for operational or regulatory purposes, and information you voluntarily enter in message or notes fields.</p><p>We do not sell, rent, trade or lease personal information collected through this website.</p></section>
    <section className="content-section"><h2>How we use information</h2><p>Information may be used to process and confirm a booking, organize shared shuttle or private transfer service, coordinate airport meeting and hotel pickup/drop-off, communicate about flight or reservation changes, respond to Contact Us messages, maintain website security and meet applicable operational or legal requirements.</p></section>
    <section className="content-section"><h2>Disclosure of information</h2><p>Customer information is not publicly disclosed or sold. It may be shared only when reasonably necessary to provide the requested service, for example with the driver or operational personnel responsible for the transfer, or where disclosure is required by law or a competent public authority.</p></section>
    <section className="content-section"><h2>Booking and passport information</h2><p>Certain passenger or passport information may be requested when required for a reservation or an applicable regulatory purpose. It is not collected for advertising and is not sold to third parties.</p></section>
    <section className="content-section"><h2>Contact form information</h2><p>The Contact Us form can collect your name, email address, WhatsApp or phone number, subject and message. This information is used to answer the enquiry and provide relevant booking or customer support.</p></section>
    <section className="content-section"><h2>Server logs and IP addresses</h2><p>Hosting and website systems may automatically process technical information such as IP address, browser or device information, requested pages, access time and similar logs. This information may be used for security, troubleshooting, abuse prevention and aggregated website statistics.</p></section>
    <section className="content-section"><h2>Secure data transfer</h2><p>The website uses HTTPS/SSL encryption for information transmitted between your browser and the site. Reasonable technical and organizational measures are used to protect submitted information, but no internet transmission or electronic storage method can be guaranteed to be completely secure.</p></section>
    <section className="content-section"><h2>Payment information</h2><p>The standard payment method is <strong>cash to the driver</strong>. The standard booking form does not collect or store customer credit-card details.</p></section>
    <section className="content-section"><h2>Data retention</h2><p>Personal information is kept only for as long as reasonably necessary to manage bookings, provide customer support, meet operational needs and comply with applicable legal obligations.</p></section>
    <section className="content-section"><h2>Third-party services</h2><p>The website may use hosting, transactional email, analytics or communication providers. These services can process limited technical or personal information as necessary to perform their functions. Information sent through WhatsApp or email is also subject to the privacy practices of those providers.</p></section>
    <section className="content-section"><h2>Your requests</h2><p>You may ask about personal information associated with your booking or contact message, request correction of inaccurate information, or request deletion where applicable. Send privacy questions through the <Link href="/contact-us">Contact Us</Link> page.</p></section>
    <section className="content-section"><h2>Changes to this policy</h2><p>This policy may be updated when the website, services, legal obligations or data-processing practices change. The current version will be published on this page.</p></section>
    <section className="content-section"><h2>Service provider</h2><p><strong>Cappadocia Airport Shuttle</strong><br/>Operated by <strong>{SITE.company}</strong><br/>TURSAB No: <strong>{SITE.tursab}</strong></p></section>
  </div></section>
</main>}

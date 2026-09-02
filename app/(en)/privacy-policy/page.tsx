import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy information for Cappadocia Airport Shuttle booking requests and passenger information.',
  keywords: ['Cappadocia Airport Shuttle privacy policy','passenger information privacy','airport transfer booking data'],
  alternates: { canonical: '/privacy-policy', languages: { en: '/privacy-policy', 'zh-CN': '/zh-cn/privacy-policy' } },
  robots: { index: false, follow: true },
};

export default function PrivacyPolicyPage() {
  return <main>
    <section className="page-hero"><div className="container">
      <div className="breadcrumb"><Link href="/">Home</Link><span>›</span><span>Privacy Policy</span></div>
      <span className="eyebrow">Passenger information</span>
      <h1>Privacy Policy</h1>
      <p className="lead">This page explains how information submitted through the Cappadocia Airport Shuttle booking form is used for reservation and transfer operation.</p>
    </div></section>

    <section className="section page-content-section"><div className="container privacy-prose prose">
      <section className="content-section">
        <h2>Information collected for a booking request</h2>
        <p>The booking form can collect the selected service, airport, travel direction, transfer dates, flight codes, hotel or accommodation name, passenger count, contact WhatsApp number, passenger full names, passport numbers and any optional notes you choose to provide.</p>
      </section>

      <section className="content-section">
        <h2>Why passenger names and passport numbers are requested</h2>
        <p>Passenger names and passport numbers are requested because they are required by the operating company for reservation and transfer operation. They are not requested for advertising or to create a public customer profile.</p>
      </section>

      <section className="content-section">
        <h2>How a request is sent</h2>
        <p>When you submit the form, the site prepares a WhatsApp message containing the booking information so you can send it to the transfer team. The site can also send a booking copy to <a href={`mailto:${SITE.email}`}>{SITE.email}</a> through the configured transactional email service. The website code does not intentionally create a separate customer database for passport numbers.</p>
        <p>Information sent through WhatsApp or email is also subject to the security and privacy practices of those communication providers. Please do not send additional sensitive information that is not needed for the transfer.</p>
      </section>

      <section className="content-section">
        <h2>How the information is used</h2>
        <p>Booking information is used to review the transfer request, identify passengers, plan airport meeting or hotel pickup, coordinate the booked flight and accommodation, communicate about changes, calculate the selected service price and complete the transfer operation.</p>
      </section>

      <section className="content-section">
        <h2>Retention and access</h2>
        <p>Operational booking information should be kept only for as long as it is reasonably needed to manage the reservation, complete the service and meet applicable business or legal recordkeeping requirements. Access should be limited to people who need the information for the booking and transfer operation.</p>
      </section>

      <section className="content-section">
        <h2>Website security and spam protection</h2>
        <p>The booking endpoint uses basic validation, abuse controls and no-cache responses. No website can promise absolute security, so sensitive passenger information is kept out of public pages and should not be shared unnecessarily.</p>
      </section>

      <section className="content-section">
        <h2>Questions about your booking information</h2>
        <p>For questions about information submitted with a transfer request, contact us at <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or use the WhatsApp contact shown on this website.</p>
      </section>
    </div></section>
  </main>;
}

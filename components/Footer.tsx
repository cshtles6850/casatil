import Link from 'next/link';
import { SITE } from '@/lib/site';
import { WhatsAppIcon } from './WhatsAppIcon';
import { FloatingWhatsApp } from './FloatingWhatsApp';

const whatsappMessage = encodeURIComponent('Hello, I’m contacting Cappadocia Airport Shuttle (cappadociaairportshuttle.com) to book a transfer.');

export function Footer() {
  return (
    <>
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>Cappadocia Airport Shuttle</h3>
            <p>Shared shuttle and private airport transfer between Kayseri Airport, Nevsehir Airport and central Cappadocia hotel areas.</p>
            <a className="footer-email" href={`mailto:${SITE.email}`}>{SITE.email}</a>
            <a className="footer-whatsapp" href={`https://wa.me/${SITE.whatsappDigits}?text=${whatsappMessage}`} target="_blank" rel="noreferrer"><WhatsAppIcon size={20} /><span>Book on WhatsApp</span></a>
          </div>
          <div>
            <h3>Services</h3>
            <Link href="/cappadocia-airport-transfer">Airport Transfer</Link>
            <Link href="/goreme-airport-transfer">Goreme Airport Transfer</Link>
            <Link href="/private-airport-transfer-cappadocia">Private Transfer</Link>
            <Link href="/airport-transfer-prices">Transfer Prices</Link>
          </div>
          <div>
            <h3>Airports</h3>
            <Link href="/kayseri-airport-shuttle">Kayseri Airport Shuttle</Link>
            <Link href="/nevsehir-airport-shuttle">Nevsehir Airport Shuttle</Link>
            <Link href="/cappadocia-to-kayseri-airport-shuttle">Cappadocia to Kayseri Airport</Link>
            <Link href="/cappadocia-to-nevsehir-airport-shuttle">Cappadocia to Nevsehir Airport</Link>
          </div>
          <div>
            <h3>Company & Support</h3>
            <Link href="/about-us">About Us</Link>
            <Link href="/contact-us">Contact Us</Link>
            <Link href="/service-contract">Service Contract</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-copyright">© {new Date().getFullYear()} Cappadocia Airport Shuttle</span>
          <span className="footer-agency-line">{SITE.company} · TURSAB No: {SITE.tursab}</span>
        </div>
      </div>
    </footer>
    <FloatingWhatsApp href={`https://wa.me/${SITE.whatsappDigits}?text=${whatsappMessage}`} ariaLabel="Contact Cappadocia Airport Shuttle on WhatsApp" />
    </>
  );
}

import Link from 'next/link';
import { SITE } from '@/lib/site';
import { WhatsAppIcon } from './WhatsAppIcon';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>Cappadocia Airport Shuttle</h3>
            <p>Shared shuttle and private airport transfer between Kayseri Airport, Nevsehir Airport and central Cappadocia hotel areas.</p>
            <a className="footer-email" href={`mailto:${SITE.email}`}>{SITE.email}</a>
            <a className="footer-whatsapp" href={`https://wa.me/${SITE.whatsappDigits}`} target="_blank" rel="noreferrer"><WhatsAppIcon size={20} /><span>WhatsApp {SITE.whatsappDisplay}</span></a>
          </div>
          <div>
            <h3>Services</h3>
            <Link href="/cappadocia-shuttle-transfer">Cappadocia Shuttle Transfer</Link>
            <Link href="/cappadocia-airport-transfer">Airport Transfer</Link>
            <Link href="/private-airport-transfer-cappadocia">Private Transfer</Link>
            <Link href="/hotel-to-airport-transfer">Hotel to Airport</Link>
          </div>
          <div>
            <h3>Airports</h3>
            <Link href="/kayseri-airport-transfer">Kayseri Airport Transfer</Link>
            <Link href="/nevsehir-airport-transfer">Nevsehir Airport Transfer</Link>
            <Link href="/cappadocia-to-kayseri-airport-shuttle">Cappadocia to Kayseri Airport</Link>
            <Link href="/cappadocia-to-nevsehir-airport-shuttle">Cappadocia to Nevsehir Airport</Link>
          </div>
          <div>
            <h3>Popular Areas</h3>
            <Link href="/goreme-airport-transfer">Goreme</Link>
            <Link href="/urgup-airport-transfer">Urgup</Link>
            <Link href="/uchisar-airport-transfer">Uchisar</Link>
            <Link href="/avanos-airport-transfer">Avanos</Link>
            <Link href="/ortahisar-airport-transfer">Ortahisar</Link>
            <Link href="/cavusin-airport-transfer">Cavusin</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Cappadocia Airport Shuttle · <Link href="/privacy-policy">Privacy Policy</Link></span>
          <span>{SITE.company} · TURSAB No: {SITE.tursab}</span>
        </div>
      </div>
      <a className="floating-whatsapp" href={`https://wa.me/${SITE.whatsappDigits}`} target="_blank" rel="noreferrer" aria-label="Contact Cappadocia Airport Shuttle on WhatsApp"><WhatsAppIcon size={27} /><span>WhatsApp</span></a>
    </footer>
  );
}

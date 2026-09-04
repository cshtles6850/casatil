import Link from 'next/link';
import { SITE } from '@/lib/site';
import { WhatsAppIcon } from './WhatsAppIcon';
import { LanguageSwitcher } from './LanguageSwitcher';

const whatsappMessage = encodeURIComponent('Hello, I’m contacting Cappadocia Airport Shuttle (cappadociaairportshuttle.com) to book a transfer.');

const nav = [
  ['Airport Shuttle', '/'],
  ['Kayseri Shuttle', '/kayseri-airport-shuttle'],
  ['Nevsehir Shuttle', '/nevsehir-airport-shuttle'],
  ['Private Transfer', '/private-airport-transfer-cappadocia'],
  ['Prices', '/airport-transfer-prices'],
] as const;

export function Header() {
  return (
    <header className="site-header">
      <div className="container nav">
        <Link href="/" className="brand" aria-label="Cappadocia Airport Shuttle home">
          <span className="brand-title">Cappadocia Airport Shuttle</span>
        </Link>
        <nav className="nav-links" aria-label="Main navigation">
          {nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
        <div className="nav-actions">
          <LanguageSwitcher />
          <a className="btn btn-whatsapp nav-whatsapp" href={`https://wa.me/${SITE.whatsappDigits}?text=${whatsappMessage}`} target="_blank" rel="noreferrer"><WhatsAppIcon size={18} /> WhatsApp</a>
          <details className="mobile-menu">
            <summary aria-label="Open navigation">☰</summary>
            <nav aria-label="Mobile navigation">
              {nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
              <a href={`https://wa.me/${SITE.whatsappDigits}?text=${whatsappMessage}`} target="_blank" rel="noreferrer"><WhatsAppIcon size={17} /> WhatsApp</a>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}

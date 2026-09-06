import Link from 'next/link';
import { SITE } from '@/lib/site';
import { localePrefix, localeUi, type NewLocale } from '@/lib/locale-config';
import { WhatsAppIcon } from './WhatsAppIcon';
import { LanguageSwitcher } from './LanguageSwitcher';

const hrefs = ['/', '/kayseri-airport-shuttle', '/nevsehir-airport-shuttle', '/private-airport-transfer-cappadocia', '/airport-transfer-prices'] as const;
export function LocalizedHeader({locale}:{locale:NewLocale}) {
  const t=localeUi[locale], prefix=localePrefix[locale], msg=encodeURIComponent(t.directWhatsapp);
  const nav=t.nav.map((label,i)=>[label,`${prefix}${hrefs[i]==='/'?'':hrefs[i]}`] as const);
  return <header className="site-header"><div className="container nav"><Link href={prefix} className="brand" aria-label={t.homeAria}><span className="brand-title">Cappadocia Airport Shuttle</span></Link><nav className="nav-links" aria-label={t.navAria}>{nav.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}</nav><div className="nav-actions"><LanguageSwitcher/><a className="btn btn-whatsapp nav-whatsapp" href={`https://wa.me/${SITE.whatsappDigits}?text=${msg}`} target="_blank" rel="noreferrer"><WhatsAppIcon size={18}/> WhatsApp</a><details className="mobile-menu"><summary aria-label={t.openNav}>☰</summary><nav aria-label={t.mobileNavAria}>{nav.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}<a href={`https://wa.me/${SITE.whatsappDigits}?text=${msg}`} target="_blank" rel="noreferrer"><WhatsAppIcon size={17}/> WhatsApp</a></nav></details></div></div></header>;
}

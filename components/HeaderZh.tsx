import Link from 'next/link';
import { SITE } from '@/lib/site';
import { WhatsAppIcon } from './WhatsAppIcon';
import { LanguageSwitcher } from './LanguageSwitcher';

const nav = [
  ['机场拼车', '/zh-cn/cappadocia-shuttle-transfer'],
  ['私人接送', '/zh-cn/private-airport-transfer-cappadocia'],
  ['开塞利机场', '/zh-cn/kayseri-airport-transfer'],
  ['内夫谢希尔机场', '/zh-cn/nevsehir-airport-transfer'],
  ['价格', '/zh-cn/airport-transfer-prices'],
] as const;

export function HeaderZh() {
  return (
    <header className="site-header">
      <div className="container nav">
        <Link href="/zh-cn" className="brand" aria-label="卡帕多奇亚机场接送首页">
          <span className="brand-title">Cappadocia Airport Shuttle</span>
          <span className="brand-subtitle">卡帕多奇亚机场接送</span>
        </Link>
        <nav className="nav-links" aria-label="主导航">
          {nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
        <div className="nav-actions">
          <LanguageSwitcher />
          <a className="btn btn-whatsapp nav-whatsapp" href={`https://wa.me/${SITE.whatsappDigits}`} target="_blank" rel="noreferrer"><WhatsAppIcon size={18} /> WhatsApp</a>
          <details className="mobile-menu">
            <summary aria-label="打开导航">☰</summary>
            <nav aria-label="移动端导航">
              {nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
              <a href={`https://wa.me/${SITE.whatsappDigits}`} target="_blank" rel="noreferrer"><WhatsAppIcon size={17} /> WhatsApp</a>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}

import Link from 'next/link';
import { SITE } from '@/lib/site';
import { WhatsAppIcon } from './WhatsAppIcon';
import { FloatingWhatsApp } from './FloatingWhatsApp';

const whatsappMessage = encodeURIComponent('您好，我想通过 Cappadocia Airport Shuttle（cappadociaairportshuttle.com）预订机场接送服务。');

export function FooterZh() {
  return (
    <>
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>Cappadocia Airport Shuttle</h3>
            <p>开塞利机场、内夫谢希尔机场与卡帕多奇亚主要酒店区域之间的拼车班车和私人机场接送。</p>
            <a className="footer-email" href={`mailto:${SITE.email}`}>{SITE.email}</a>
            <a className="footer-whatsapp" href={`https://wa.me/${SITE.whatsappDigits}?text=${whatsappMessage}`} target="_blank" rel="noreferrer"><WhatsAppIcon size={20} /><span>WhatsApp 预订</span></a>
          </div>
          <div>
            <h3>服务</h3>
            <Link href="/zh-cn/cappadocia-airport-transfer">机场接送</Link>
            <Link href="/zh-cn/goreme-airport-transfer">格雷梅机场接送</Link>
            <Link href="/zh-cn/private-airport-transfer-cappadocia">私人接送</Link>
            <Link href="/zh-cn/airport-transfer-prices">接送价格</Link>
          </div>
          <div>
            <h3>机场</h3>
            <Link href="/zh-cn/kayseri-airport-shuttle">开塞利机场班车 ASR</Link>
            <Link href="/zh-cn/nevsehir-airport-shuttle">内夫谢希尔机场班车 NAV</Link>
            <Link href="/zh-cn/cappadocia-to-kayseri-airport-shuttle">卡帕多奇亚 → ASR</Link>
            <Link href="/zh-cn/cappadocia-to-nevsehir-airport-shuttle">卡帕多奇亚 → NAV</Link>
          </div>
          <div>
            <h3>公司与支持</h3>
            <Link href="/zh-cn/about-us">关于我们</Link>
            <Link href="/zh-cn/contact-us">联系我们</Link>
            <Link href="/zh-cn/service-contract">服务合同</Link>
            <Link href="/zh-cn/privacy-policy">隐私政策</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-copyright">© {new Date().getFullYear()} Cappadocia Airport Shuttle</span>
          <span className="footer-agency-line">{SITE.company} · TURSAB 编号：{SITE.tursab}</span>
        </div>
      </div>
    </footer>
    <FloatingWhatsApp href={`https://wa.me/${SITE.whatsappDigits}?text=${whatsappMessage}`} ariaLabel="通过 WhatsApp 联系卡帕多奇亚机场接送" />
    </>
  );
}

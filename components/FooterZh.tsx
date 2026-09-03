import Link from 'next/link';
import { SITE } from '@/lib/site';
import { WhatsAppIcon } from './WhatsAppIcon';

const whatsappMessage = encodeURIComponent('您好，我想通过 Cappadocia Airport Shuttle（cappadociaairportshuttle.com）预订机场接送服务。');

export function FooterZh() {
  return (
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
            <Link href="/zh-cn/cappadocia-shuttle-transfer">卡帕多奇亚机场拼车</Link>
            <Link href="/zh-cn/cappadocia-airport-transfer">机场接送</Link>
            <Link href="/zh-cn/private-airport-transfer-cappadocia">私人接送</Link>
            <Link href="/zh-cn/hotel-to-airport-transfer">酒店送机</Link>
          </div>
          <div>
            <h3>机场</h3>
            <Link href="/zh-cn/kayseri-airport-transfer">开塞利机场 ASR</Link>
            <Link href="/zh-cn/nevsehir-airport-transfer">内夫谢希尔机场 NAV</Link>
            <Link href="/zh-cn/cappadocia-to-kayseri-airport-shuttle">卡帕多奇亚 → ASR</Link>
            <Link href="/zh-cn/cappadocia-to-nevsehir-airport-shuttle">卡帕多奇亚 → NAV</Link>
          </div>
          <div>
            <h3>热门住宿区</h3>
            <Link href="/zh-cn/goreme-airport-transfer">格雷梅</Link>
            <Link href="/zh-cn/urgup-airport-transfer">于尔居普</Link>
            <Link href="/zh-cn/uchisar-airport-transfer">乌奇希萨尔</Link>
            <Link href="/zh-cn/avanos-airport-transfer">阿瓦诺斯</Link>
            <Link href="/zh-cn/ortahisar-airport-transfer">奥塔西萨</Link>
            <Link href="/zh-cn/cavusin-airport-transfer">恰武辛</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Cappadocia Airport Shuttle · <Link href="/zh-cn/privacy-policy">隐私政策</Link></span>
          <span>{SITE.company} · TURSAB No: {SITE.tursab}</span>
        </div>
      </div>
      <a className="floating-whatsapp" href={`https://wa.me/${SITE.whatsappDigits}?text=${whatsappMessage}`} target="_blank" rel="noreferrer" aria-label="通过 WhatsApp 联系卡帕多奇亚机场接送"><WhatsAppIcon size={27} /><span>WhatsApp</span></a>
    </footer>
  );
}

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BookingFormZh } from '@/components/BookingFormZh';
import { BookingInfoChecklist } from '@/components/BookingInfoChecklist';
import { JsonLd } from '@/components/JsonLd';
import { MobileBookingCta } from '@/components/MobileBookingCta';
import { SITE, towns } from '@/lib/site';
import { zhTownNames } from '@/lib/content-zh';

export const metadata: Metadata = {
  title: { absolute: '卡帕多奇亚机场接送｜ASR / NAV 机场班车' },
  description: '卡帕多奇亚机场接送：从开塞利 ASR 或内夫谢希尔 NAV 前往格雷梅、于尔居普、乌奇希萨尔、阿瓦诺斯、奥塔西萨和恰武辛。拼车 €15/人，私人 Vito / Sprinter 可选。',
  keywords: ['卡帕多奇亚机场接送','卡帕多奇亚机场拼车','卡帕多奇亚机场班车','卡帕多奇亚接机','开塞利机场接送','内夫谢希尔机场接送','格雷梅机场接送'],
  alternates: { canonical: '/zh-cn', languages: { en: '/', 'zh-CN': '/zh-cn', 'x-default': '/' } },
  openGraph: { type: 'website', locale: 'zh_CN', title: '卡帕多奇亚机场接送｜ASR / NAV 机场班车', description: 'ASR / NAV 到卡帕多奇亚酒店，拼车 €15/人，私人 Vito / Sprinter 可选。', url: `${SITE.domain}/zh-cn`, images: [{ url: '/cappadocia-airport-shuttle-vito-sprinter.webp', width: 1200, height: 675, alt: '卡帕多奇亚机场接送 Vito 与 Sprinter' }] },
  other: { 'applicable-device': 'pc,mobile' },
};

const townKeys = Object.keys(towns) as (keyof typeof towns)[];
const homeFaq = [
  ['卡帕多奇亚机场拼车多少钱？','开塞利机场 ASR 和内夫谢希尔机场 NAV 都是 €15/人/单程，往返 €30/人。'],
  ['拼车覆盖哪些住宿区域？','格雷梅、于尔居普、乌奇希萨尔、阿瓦诺斯、恰武辛和奥塔西萨。穆斯塔法帕夏（Mustafapasa）需要私人接送询价。'],
  ['可以同时预订接机和送机吗？','可以。选择“往返”并分别填写抵达航班和离港航班。'],
  ['私人 Vito 多少钱？','开塞利机场 €90/单程，内夫谢希尔机场 €80/单程，最多 5 位乘客。'],
  ['私人 Sprinter 多少钱？','开塞利机场 €110/单程，内夫谢希尔机场 €90/单程，最多 16 位乘客。'],
  ['怎么付款？','按确认方式现金支付给司机。网站显示 EUR，如需用 USD 或 TRY 现金支付，应以预订确认时的汇率为准。'],
  ['为什么表单需要护照号码？','运营公司要求乘客姓名和护照号码用于预订与接送操作。'],
  ['航班晚点怎么办？','尽快在 WhatsApp 更新航班。拼车涉及其他乘客，因此新的安排需要重新确认。'],
  ['洞穴酒店都能停到门口吗？','不一定。部分老街不适合大型车辆通行或等待，会为具体酒店确认附近安全上下客点。'],
] as const;

export default function ChineseHomePage() {
  const serviceSchema = {
    '@context':'https://schema.org','@type':'Service',name:'卡帕多奇亚机场接送',
    provider:{'@type':'TravelAgency',name:SITE.name,url:`${SITE.domain}/zh-cn`},
    areaServed:['开塞利机场','内夫谢希尔机场','格雷梅','于尔居普','乌奇希萨尔','阿瓦诺斯','奥塔西萨','恰武辛'],
    serviceType:['机场拼车','私人机场接送'],
    offers:[
      {'@type':'Offer',price:'15',priceCurrency:'EUR',description:'共享机场班车，每人单程'},
      {'@type':'Offer',price:'90',priceCurrency:'EUR',description:'开塞利私人 Vito 单程'},
      {'@type':'Offer',price:'110',priceCurrency:'EUR',description:'开塞利私人 Sprinter 单程'},
      {'@type':'Offer',price:'80',priceCurrency:'EUR',description:'内夫谢希尔私人 Vito 单程'},
      {'@type':'Offer',price:'90',priceCurrency:'EUR',description:'内夫谢希尔私人 Sprinter 单程'},
    ],
  };
  const faqSchema={'@context':'https://schema.org','@type':'FAQPage',mainEntity:homeFaq.map(([q,a])=>({'@type':'Question',name:q,acceptedAnswer:{'@type':'Answer',text:a}}))};

  return <main lang="zh-CN" className="has-booking-cta">
    <JsonLd data={serviceSchema}/><JsonLd data={faqSchema}/>

    <section className="home-hero"><div className="container hero-grid">
      <div className="hero-visual" aria-label="卡帕多奇亚机场接送车辆"><Image src="/cappadocia-airport-shuttle-vito-sprinter.webp" alt="卡帕多奇亚机场接送 Mercedes Vito 和 Sprinter" width={1200} height={675} priority sizes="(max-width: 800px) 94vw, 48vw" /></div>
      <div className="hero-copy">
        <span className="eyebrow">开塞利 ASR · 内夫谢希尔 NAV</span>
        <h1>卡帕多奇亚机场接送</h1>
        <p className="hero-price-highlight">每人 €15 起</p>
        <p className="lead">预订 <strong>€15/人的卡帕多奇亚机场拼车</strong>，连接开塞利或内夫谢希尔机场与格雷梅、于尔居普、乌奇希萨尔、阿瓦诺斯、奥塔西萨和恰武辛。也可选择私人 Mercedes Vito 或 Sprinter。</p>
        <div className="hero-actions"><a className="btn btn-primary" href="#booking">预订机场接送</a><Link className="btn btn-secondary" href="/zh-cn/cappadocia-shared-shuttle-vs-private-transfer">拼车还是私人接送</Link></div>
        <div className="trust-row"><span>两座机场拼车均 €15</span><span>机场接机与酒店接送</span><span>现金支付给司机</span></div>
      </div>
    </div></section>

    <section className="section booking-section" id="booking"><div className="container home-booking-grid">
      <aside className="home-booking-info">
        <div className="kicker">价格清晰</div><h2>选择拼车或私人车辆</h2>
        <div className="summary-box home-summary">
          <div className="summary-line"><span>共享机场班车</span><strong>€15 / 人 / 单程</strong></div>
          <div className="summary-line"><span>开塞利 Vito · 最多5人</span><strong>€90</strong></div>
          <div className="summary-line"><span>开塞利 Sprinter · 最多16人</span><strong>€110</strong></div>
          <div className="summary-line"><span>内夫谢希尔 Vito · 最多5人</span><strong>€80</strong></div>
          <div className="summary-line"><span>内夫谢希尔 Sprinter · 最多16人</span><strong>€90</strong></div>
        </div>
        <p className="small-copy">往返正好是单程的两倍。私人接送按整车计价。乘客姓名和护照号码是运营公司用于预订与接送操作的必填资料。</p>
        <BookingInfoChecklist locale="zh-CN" className="home-booking-checklist" />
      </aside>
      <BookingFormZh />
    </div></section>

    <section className="section section-muted"><div className="container">
      <div className="section-head"><div className="kicker">为什么这样预订更清楚</div><h2>先确认机场、酒店城镇和真实航班</h2><p>卡帕多奇亚不是一个单独下车点。把航班与实际酒店名称填写准确，才能正确安排机场会合、酒店道路和返程接车。</p></div>
      <div className="cards trust-cards">
        <div className="card"><h3>机场会合</h3><p>领取行李后按 WhatsApp 确认信息前往接车点，可使用预订乘客姓名作为会合识别。</p></div>
        <div className="card"><h3>酒店接送</h3><p>支持六个主要住宿区；老街不适合大型车辆时会确认附近安全点。</p></div>
        <div className="card"><h3>拼车或私人车</h3><p>€15 拼车以价格为优势；需要直达或指定 Vito/Sprinter 时选择私人接送。</p></div>
        <div className="card"><h3>WhatsApp 确认</h3><p>航班、集合点、接车时间与预订细节按实际行程确认。</p></div>
      </div>
    </div></section>

    <section className="section"><div className="container">
      <div className="section-head"><div className="kicker">两座主要机场</div><h2>先看 NAV 和 ASR 的区别</h2><p>NAV 通常公路距离更短；ASR 的航班时刻有时更方便。共享拼车从两座机场都是 €15/人。</p></div>
      <div className="cards">
        <Link href="/zh-cn/kayseri-airport-shuttle" className="card card-link"><h3>开塞利机场 ASR</h3><p>格雷梅等六个酒店区的路线入口。Vito €90 · Sprinter €110。</p></Link>
        <Link href="/zh-cn/nevsehir-airport-shuttle" className="card card-link"><h3>内夫谢希尔机场 NAV</h3><p>前往多个中心城镇公路更短。Vito €80 · Sprinter €90。</p></Link>
        <Link href="/zh-cn/kayseri-or-nevsehir-airport-for-cappadocia" className="card card-link"><h3>到底选 NAV 还是 ASR？</h3><p>比较航班、酒店距离和私人接送价格，而不是只看地图。</p></Link>
      </div>
    </div></section>

    <section className="section"><div className="container">
      <div className="section-head"><div className="kicker">机场 → 酒店</div><h2>12 条抵达路线</h2><p>每条路线分别说明对应机场的公里、时间、酒店道路、当地抵达建议和返程规划。</p></div>
      <div className="route-groups">
        <div><h3>开塞利机场（ASR）</h3><div className="route-link-grid">{townKeys.map((key)=><Link key={key} href={`/zh-cn/kayseri-airport-to-${key}-shuttle`}><strong>开塞利机场 → {zhTownNames[key]}</strong><span>{towns[key].distanceKayseri} · {towns[key].timeKayseri}</span><span>€15 拼车 · 现金付司机</span></Link>)}</div></div>
        <div><h3>内夫谢希尔机场（NAV）</h3><div className="route-link-grid">{townKeys.map((key)=><Link key={key} href={`/zh-cn/nevsehir-airport-to-${key}-shuttle`}><strong>内夫谢希尔机场 → {zhTownNames[key]}</strong><span>{towns[key].distanceNevsehir} · {towns[key].timeNevsehir}</span><span>€15 拼车 · 现金付司机</span></Link>)}</div></div>
      </div>
    </div></section>

    <section className="section section-muted"><div className="container">
      <div className="section-head"><div className="kicker">酒店 → 机场</div><h2>12 条返程送机路线</h2><p>返程页面更关注接车时间、洞穴酒店集合点、航班变更以及晚班机前如何安排空余时间。</p></div>
      <div className="route-groups">
        <div><h3>前往开塞利机场（ASR）</h3><div className="route-link-grid">{townKeys.map((key)=><Link key={key} href={`/zh-cn/${key}-to-kayseri-airport-shuttle`}><strong>{zhTownNames[key]} → 开塞利机场</strong><span>{towns[key].distanceKayseri} · {towns[key].timeKayseri}</span><span>€15 拼车 · 现金付司机</span></Link>)}</div></div>
        <div><h3>前往内夫谢希尔机场（NAV）</h3><div className="route-link-grid">{townKeys.map((key)=><Link key={key} href={`/zh-cn/${key}-to-nevsehir-airport-shuttle`}><strong>{zhTownNames[key]} → 内夫谢希尔机场</strong><span>{towns[key].distanceNevsehir} · {towns[key].timeNevsehir}</span><span>€15 拼车 · 现金付司机</span></Link>)}</div></div>
      </div>
    </div></section>

    <section className="section"><div className="container">
      <div className="section-head"><div className="kicker">重点入口</div><h2>格雷梅、机场选择与洞穴酒店接送</h2><p>只有搜索需求明确的格雷梅保留独立综合页；其他城镇直接进入对应 ASR / NAV 单条路线，避免增加相近的中间页。</p></div>
      <div className="cards">
        <Link className="card card-link" href="/zh-cn/goreme-airport-transfer"><h3>格雷梅机场接送</h3><p>比较 ASR / NAV、四条格雷梅机场路线和洞穴酒店道路。</p></Link>
        <Link className="card card-link" href="/zh-cn/cappadocia-airport-transfer"><h3>卡帕多奇亚机场接送</h3><p>共享班车与私人接送的综合入口。</p></Link>
        <Link className="card card-link" href="/zh-cn/cappadocia-cave-hotel-airport-transfer"><h3>洞穴酒店接送</h3><p>不同住宿区的坡路、窄路和车辆可达性。</p></Link>
      </div>
    </div></section>

    <section className="section section-muted"><div className="container">
      <div className="section-head"><div className="kicker">旅行前先弄清楚</div><h2>机场选择、代码、时间和洞穴酒店</h2></div>
      <div className="cards">
        <Link className="card card-link" href="/zh-cn/cappadocia-airport"><h3>卡帕多奇亚机场指南</h3><p>NAV 与 ASR 到底是什么、离酒店多远。</p></Link>
        <Link className="card card-link" href="/zh-cn/nearest-airport-to-cappadocia"><h3>最近的机场</h3><p>为什么 NAV 更近，但 ASR 仍然常用。</p></Link>
        <Link className="card card-link" href="/zh-cn/cappadocia-cave-hotel-airport-transfer"><h3>洞穴酒店接送</h3><p>窄路、台阶和安全集合点应该怎么理解。</p></Link>
      </div>
    </div></section>

    <section className="section"><div className="container"><div className="section-head"><div className="kicker">常见问题</div><h2>预订前常见问题</h2></div><div className="faq">{homeFaq.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></div></section>
    <MobileBookingCta priceLabel="€15 / 人" bookLabel="立即预订" ariaLabel="快速预订" />
  </main>;
}

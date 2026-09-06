import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: { absolute: '关于我们｜Cappadocia Airport Shuttle' },
  description: '了解 Cappadocia Airport Shuttle：开塞利 ASR、内夫谢希尔 NAV 与卡帕多奇亚主要酒店区之间的机场拼车和私人接送。',
  alternates: { canonical:'/zh-cn/about-us', languages:{ en:'/about-us', 'zh-CN':'/zh-cn/about-us', es:'/es/about-us', 'pt-BR':'/pt-br/about-us', ko:'/ko/about-us', ja:'/ja/about-us', 'x-default':'/about-us' } },
  robots:{ index:true, follow:true },
  twitter:{ card:'summary_large_image', title:'关于我们｜Cappadocia Airport Shuttle', description:'了解 Cappadocia Airport Shuttle：提供开塞利 ASR、内夫谢希尔 NAV 与卡帕多奇亚主要酒店区之间的共享机场班车和私人接送。', images:['/cappadocia-airport-shuttle-vito-sprinter.webp'] },
};

export default function AboutUsZh(){return <main lang="zh-CN">
  <section className="page-hero"><div className="container"><div className="breadcrumb"><Link href="/zh-cn">首页</Link><span>›</span><span>关于我们</span></div><span className="eyebrow">服务与资质信息</span><h1>关于 Cappadocia Airport Shuttle</h1><p className="lead">我们专注于开塞利机场（ASR）、内夫谢希尔机场（NAV）与卡帕多奇亚中心住宿区之间的预订制机场接送。</p></div></section>
  <section className="section page-content-section"><div className="container content-grid"><article className="prose">
    <section className="content-section"><h2>机场拼车是主要服务</h2><p>主要服务覆盖格雷梅、于尔居普、乌奇希萨尔、阿瓦诺斯、奥塔西萨和恰武辛。希望独立车辆的旅客也可以选择 Mercedes Vito 或 Sprinter 私人接送。</p><p>ASR 和 NAV 按不同机场行程处理，让旅客在预订前看到对应距离、正常公路时间和私人车辆价格。</p></section>
    <section className="content-section"><h2>不是把卡帕多奇亚当成一个统一下客点</h2><p>洞穴酒店坡路、城堡边住宿、河两岸酒店和普通城镇道路的车辆条件不同，因此接车和下车位置会根据实际住宿的车辆通行条件确认。</p></section>
    <section className="content-section"><h2>怎么预订</h2><p>选择拼车或私人接送、机场、方向并填写真实航班与住宿信息，然后提交预订请求。具体会合和接车信息按该笔预订确认，标准付款方式为现金支付给司机。</p><p>预订前有问题可使用 <Link href="/zh-cn/contact-us">联系我们</Link> 或 WhatsApp；服务规则见 <Link href="/zh-cn/service-contract">服务合同</Link>。</p></section>
    <section className="content-section"><h2>持牌旅行社</h2><p>Cappadocia Airport Shuttle 由 <strong>{SITE.company}</strong> 运营，TURSAB 编号 <strong>{SITE.tursab}</strong>。</p></section>
  </article><aside className="summary-box guide-box"><h3>快速入口</h3><Link href="/zh-cn/kayseri-airport-shuttle">开塞利机场班车</Link><Link href="/zh-cn/nevsehir-airport-shuttle">内夫谢希尔机场班车</Link><Link href="/zh-cn/goreme-airport-transfer">格雷梅机场接送</Link><Link href="/zh-cn/private-airport-transfer-cappadocia">私人机场接送</Link><Link href="/zh-cn/contact-us">联系我们</Link></aside></div></section>
</main>}

import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: { absolute:'服务合同｜Cappadocia Airport Shuttle' },
  description:'Cappadocia Airport Shuttle 共享机场班车与私人接送预订的基本服务条款。',
  alternates:{ canonical:'/zh-cn/service-contract', languages:{ en:'/service-contract','zh-CN':'/zh-cn/service-contract','x-default':'/service-contract' } },
  robots:{ index:false, follow:true },
  twitter:{ card:'summary_large_image', title:'服务合同｜Cappadocia Airport Shuttle', description:'适用于 Cappadocia Airport Shuttle 预订的条款，包括付款、取消、酒店周边道路、延误与责任。', images:['/cappadocia-airport-shuttle-vito-sprinter.webp'] },
};
export default function ServiceContractZh(){return <main lang="zh-CN">
  <section className="page-hero"><div className="container"><div className="breadcrumb"><Link href="/zh-cn">首页</Link><span>›</span><span>服务合同</span></div><span className="eyebrow">预订条款</span><h1>服务合同</h1><p className="lead">本合同说明 Cappadocia Airport Shuttle 预订确认后适用的基本服务条件。</p></div></section>
  <section className="section page-content-section"><div className="container privacy-prose prose">
    <section className="content-section"><h2>1. 合同双方</h2><p><strong>网站：</strong> {SITE.domain}</p><p><strong>服务提供方：</strong>{SITE.company}，TURSAB 编号 {SITE.tursab}。预订中登记的乘客以及同一订单内的其他乘客统称为“客户”。</p></section>
    <section className="content-section"><h2>2. 服务范围</h2><p>本合同适用于通过本站预订的共享机场班车和私人机场接送，服务连接开塞利机场（ASR）、内夫谢希尔机场（NAV）与服务覆盖范围内的卡帕多奇亚住宿区域。</p></section>
    <section className="content-section"><h2>3. 合同生效与结束</h2><p>服务提供方确认预订后合同生效。单程在该段接送完成后结束；往返在两段已确认行程全部完成后结束，除非预订提前取消或修改。</p></section>
    <section className="content-section"><h2>4. 付款</h2><p>标准付款方式为<strong>现金支付给司机</strong>。共享班车按乘客人数计价，私人接送按车辆计价，客户应支付确认的路线和服务价格。</p></section>
    <section className="content-section"><h2>5. 取消与修改</h2><p>需要取消或修改时，应尽早通知。航班、机场、酒店、日期、人数或联系方式发生变化，应尽可能在接送前更新。</p><p>由于标准付款方式是现金支付给司机，一般订单通常没有预付款需要退款。如果个别预订另行约定预付款，对应取消条件会单独说明。</p></section>
    <section className="content-section"><h2>6. 航班与接车资料</h2><p>客户应提供准确的航班和住宿信息。接机与送机安排按已确认预订执行。共享服务可能同时服务其他航班或酒店路线相容的乘客，因此总行程时间可能与私人直达车不同。</p></section>
    <section className="content-section"><h2>7. 酒店周边道路</h2><p>部分洞穴酒店、历史住宿和村路狭窄、陡峭，或不适合大型车辆在门口等待。如果无法安全直达，会按该笔预订确认附近可通车的上下客位置。</p></section>
    <section className="content-section"><h2>8. 拼车与私人接送</h2><p>共享班车可搭载不同订单的乘客，并可能有其他酒店停靠。私人接送只服务该订单，并根据人数和行李使用已确认的 Vito 或 Sprinter 车型。</p></section>
    <section className="content-section"><h2>9. 乘客资料责任</h2><p>客户负责确保姓名、预订需要时提供的护照资料、航班、酒店和联系方式准确。代他人预订的人确认自己有权提供同一订单乘客所需资料。</p></section>
    <section className="content-section"><h2>10. 延误与不可合理控制情况</h2><p>交通、封路、天气、车辆故障、机场限制、安全措施、航班异常或其他不可合理控制情况可能影响服务。可行时会安排合适替代车辆或更新方案。如果因服务提供方可归责原因导致已付款服务完全无法执行，未执行部分已付款项将退还。</p></section>
    <section className="content-section"><h2>11. 行李与安全</h2><p>超大行李、运动器材或明显超过普通范围的物品应提前说明，以便安排合适车辆。乘客应遵守司机的合理安全要求，不得对司机、其他乘客或车辆造成严重安全风险。</p></section>
    <section className="content-section"><h2>12. 适用法律与接受</h2><p>本合同适用土耳其共和国相关法律法规。提交并由服务提供方确认预订，即表示客户确认资料准确，并代表同一订单乘客接受本服务合同。</p><p>如对条款有问题，可通过 <Link href="/zh-cn/contact-us">联系我们</Link> 页面发送消息。</p></section>
  </div></section>
</main>}

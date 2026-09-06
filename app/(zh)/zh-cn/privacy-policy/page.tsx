import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title:{ absolute:'隐私政策｜Cappadocia Airport Shuttle' },
  description:'说明 Cappadocia Airport Shuttle 在预订、联系表单和机场接送服务中如何处理乘客与联系资料。',
  alternates:{ canonical:'/zh-cn/privacy-policy', languages:{ en:'/privacy-policy','zh-CN':'/zh-cn/privacy-policy','x-default':'/privacy-policy' } },
  robots:{ index:false, follow:true },
  twitter:{ card:'summary_large_image', title:'隐私政策｜Cappadocia Airport Shuttle', description:'说明 Cappadocia Airport Shuttle 如何为预订和客户支持收集、使用与保护个人信息。', images:['/cappadocia-airport-shuttle-vito-sprinter.webp'] },
};
export default function PrivacyPolicyZh(){return <main lang="zh-CN">
  <section className="page-hero"><div className="container"><div className="breadcrumb"><Link href="/zh-cn">首页</Link><span>›</span><span>隐私政策</span></div><span className="eyebrow">个人资料</span><h1>隐私政策</h1><p className="lead">Cappadocia Airport Shuttle 尊重你的隐私，只为预订、客服、运营、安全和适用法律目的处理必要资料。</p></div></section>
  <section className="section page-content-section"><div className="container privacy-prose prose">
    <section className="content-section"><h2>我们可能收集的资料</h2><p>预订或联系时，可能收集姓名、电子邮箱、电话或 WhatsApp、航班信息、酒店或住宿、乘客人数、预订资料、运营或法规需要时的护照信息，以及你主动填写的留言或备注。</p><p>我们不会出售、出租、交易或租借通过本站收集的个人资料。</p></section>
    <section className="content-section"><h2>资料用途</h2><p>资料用于处理和确认预订、安排拼车或私人接送、协调机场会合与酒店上下客、处理航班或订单变化、回复“联系我们”表单留言、保障网站安全以及履行适用的运营或法律要求。</p></section>
    <section className="content-section"><h2>资料披露</h2><p>客户资料不会公开或出售。只有在完成所请求服务确有必要时，例如向负责该笔接送的司机或运营人员提供必要信息，或法律及有权机关依法要求时，才可能披露相关资料。</p></section>
    <section className="content-section"><h2>预订与护照信息</h2><p>如果预订或适用规定要求乘客/护照资料，这些资料只用于相关接送和必要合规用途，不用于广告，也不会出售给第三方。</p></section>
    <section className="content-section"><h2>联系表单</h2><p>“联系我们”表单可收集姓名、邮箱、WhatsApp/电话、主题和留言，信息只用于回复咨询和提供相关预订或客服帮助。</p></section>
    <section className="content-section"><h2>服务器日志与 IP</h2><p>托管和网站系统可能自动处理 IP、浏览器/设备、访问页面、时间等技术日志，用于安全、故障排查、滥用防护和汇总统计。</p></section>
    <section className="content-section"><h2>数据传输安全</h2><p>网站使用 HTTPS/SSL 加密浏览器与网站之间的传输，并采取合理技术与组织措施保护资料。但任何互联网传输或电子存储方式都无法承诺绝对安全。</p></section>
    <section className="content-section"><h2>付款资料</h2><p>标准付款方式为<strong>现金支付给司机</strong>。标准预订流程不收集或保存客户银行卡资料。</p></section>
    <section className="content-section"><h2>保存期限</h2><p>个人资料只在管理预订、提供客服、满足运营需要和适用法律义务所合理需要的期间内保存。</p></section>
    <section className="content-section"><h2>第三方服务</h2><p>网站可能使用托管、交易邮件、统计或通信服务。这些服务只在其功能需要范围内处理有限资料。通过 WhatsApp 或电子邮件发送的信息也受相应服务商自己的隐私规则约束。</p></section>
    <section className="content-section"><h2>你的请求</h2><p>如需查询、纠正或在适用情况下请求删除与预订/留言相关的个人资料，可通过 <Link href="/zh-cn/contact-us">联系我们</Link> 或发送邮件至 <a href={`mailto:${SITE.email}`}>{SITE.email}</a>。</p></section>
    <section className="content-section"><h2>政策更新</h2><p>当网站、服务、法律义务或资料处理方式变化时，本政策可能更新，最新版本会发布在本页面。</p></section>
    <section className="content-section"><h2>服务提供方</h2><p><strong>Cappadocia Airport Shuttle</strong><br/>由 <strong>{SITE.company}</strong> 运营<br/>TURSAB No: <strong>{SITE.tursab}</strong></p></section>
  </div></section>
</main>}

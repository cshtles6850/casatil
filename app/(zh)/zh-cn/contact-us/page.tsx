import type { Metadata } from 'next';
import Link from 'next/link';
import { ContactFormZh } from '@/components/ContactFormZh';
import { SITE } from '@/lib/site';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';

export const metadata: Metadata = {
  title: { absolute:'联系我们｜Cappadocia Airport Shuttle' },
  description:'联系 Cappadocia Airport Shuttle：咨询 ASR / NAV 机场拼车、私人接送、航班变化或酒店接车。',
  alternates:{ canonical:'/zh-cn/contact-us', languages:{ en:'/contact-us','zh-CN':'/zh-cn/contact-us','x-default':'/contact-us' } },
  robots:{ index:true, follow:true },
  twitter:{ card:'summary_large_image', title:'联系我们｜Cappadocia Airport Shuttle', description:'咨询机场班车、私人接送、航班变更或酒店接车，可通过电子邮件或 WhatsApp 联系 Cappadocia Airport Shuttle。', images:['/cappadocia-airport-shuttle-vito-sprinter.webp'] },
};
const whatsappMessage = encodeURIComponent(SITE.whatsappDirectMessageZh);
export default function ContactUsZh(){return <main lang="zh-CN">
  <section className="page-hero"><div className="container"><div className="breadcrumb"><Link href="/zh-cn">首页</Link><span>›</span><span>联系我们</span></div><span className="eyebrow">预订与客服</span><h1>联系我们</h1><p className="lead">可咨询机场拼车、私人接送、航班变更或酒店接车。此表单提交的消息会发送到我们的联系邮箱。</p></div></section>
  <section className="section page-content-section"><div className="container contact-grid"><div className="contact-card"><h2>发送消息</h2><p>一般问题可以使用这里。如果航班、酒店和乘客信息已经确定并准备预订，首页预订表单会更直接。</p><ContactFormZh/></div><aside className="contact-aside">
    <div className="summary-box"><h3>直接联系</h3><div className="contact-method"><span>WhatsApp</span><a href={`https://wa.me/${SITE.whatsappDigits}?text=${whatsappMessage}`} target="_blank" rel="noreferrer"><WhatsAppIcon size={18}/> {SITE.whatsappDisplay}</a></div></div>
    <div className="summary-box"><h3>留言建议</h3><p className="small-copy">如果是接送问题，可写明机场（ASR / NAV）、航班号、酒店城镇、日期和人数。请不要发送银行卡资料。</p></div>
    <div className="summary-box"><h3>旅行社</h3><p className="small-copy">{SITE.company}<br/>TURSAB 编号：{SITE.tursab}</p><Link className="inline-link" href="/zh-cn/about-us">关于我们</Link></div>
  </aside></div></section>
</main>}

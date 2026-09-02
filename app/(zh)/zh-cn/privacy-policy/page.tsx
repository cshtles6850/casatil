import type { Metadata } from 'next';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: { absolute: '隐私政策｜Cappadocia Airport Shuttle' },
  description: '说明卡帕多奇亚机场接送预订中姓名、护照号码、航班、酒店、WhatsApp 等资料的收集与使用。',
  keywords: ['卡帕多奇亚机场接送隐私政策','乘客护照信息','机场接送预订资料'],
  alternates: { canonical: '/zh-cn/privacy-policy', languages: { en: '/privacy-policy', 'zh-CN': '/zh-cn/privacy-policy' } },
  robots: { index: false, follow: true },
};

export default function PrivacyPolicyZh(){return <main lang="zh-CN"><section className="page-hero"><div className="container"><span className="eyebrow">隐私与预订资料</span><h1>隐私政策</h1><p className="lead">本页面说明机场接送预订中所需资料如何用于处理乘客与行程。</p></div></section><section className="section"><div className="container prose">
  <section className="content-section"><h2>我们收集哪些资料</h2><p>预订可能需要乘客姓名、护照号码、航班号、接送日期、酒店或住宿名称、WhatsApp 联系方式、乘客人数以及你主动填写的备注。</p></section>
  <section className="content-section"><h2>为什么需要这些资料</h2><p>乘客姓名和护照号码是运营公司用于预订与接送操作的要求；航班、酒店和联系方式用于安排机场会合、酒店接送以及航班变化后的沟通。</p></section>
  <section className="content-section"><h2>WhatsApp 与电子邮件</h2><p>提交表单后，预订信息会生成 WhatsApp 消息供你发送，同时网站可能向运营邮箱发送一份预订副本。不要在备注中填写与接送无关的敏感信息。</p></section>
  <section className="content-section"><h2>联系我们</h2><p>如对预订资料处理有疑问，可通过 {SITE.email} 或 WhatsApp {SITE.whatsappDisplay} 联系。</p></section>
</div></section></main>}

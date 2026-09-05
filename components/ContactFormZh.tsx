'use client';

import { FormEvent, useState } from 'react';

export function ContactFormZh() {
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle');

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus('sending');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          whatsapp: data.get('whatsapp'),
          subject: data.get('subject'),
          message: data.get('message'),
          website: data.get('website'),
          language: 'zh-CN',
        }),
      });
      if (!response.ok) throw new Error('send-failed');
      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  return <form className="contact-form" onSubmit={submit}>
    <div className="form-grid">
      <div className="field"><label htmlFor="contact-name-zh">姓名</label><input id="contact-name-zh" name="name" autoComplete="name" maxLength={120} required /></div>
      <div className="field"><label htmlFor="contact-email-zh">电子邮箱</label><input id="contact-email-zh" name="email" type="email" autoComplete="email" maxLength={180} required /></div>
      <div className="field"><label htmlFor="contact-whatsapp-zh">WhatsApp / 电话</label><input id="contact-whatsapp-zh" name="whatsapp" type="tel" autoComplete="tel" maxLength={80} /></div>
      <div className="field"><label htmlFor="contact-subject-zh">主题</label><input id="contact-subject-zh" name="subject" maxLength={160} required /></div>
      <div className="field full"><label htmlFor="contact-message-zh">留言</label><textarea id="contact-message-zh" name="message" rows={7} maxLength={3000} required /></div>
      <div className="hp-field" aria-hidden="true"><label htmlFor="contact-website-zh">Website</label><input id="contact-website-zh" name="website" tabIndex={-1} autoComplete="off" /></div>
      <div className="field full">
        <button className="btn btn-primary contact-submit" type="submit" disabled={status==='sending'}>{status==='sending' ? '发送中…' : '发送消息'}</button>
        {status==='sent' && <p className="form-status" role="status">消息已发送。我们会通过你填写的联系方式回复。</p>}
        {status==='error' && <p className="form-status form-status-error" role="alert">消息发送失败，请重试，或使用电子邮件 / WhatsApp 联系我们。</p>}
        <p className="form-note">这里提交的资料会按照 <a className="inline-link" href="/zh-cn/privacy-policy" target="_blank" rel="noreferrer">隐私政策</a> 处理。</p>
      </div>
    </div>
  </form>;
}

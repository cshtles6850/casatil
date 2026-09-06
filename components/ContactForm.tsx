'use client';

import { FormEvent, useState } from 'react';

export function ContactForm() {
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
          language: 'en',
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
      <div className="field"><label htmlFor="contact-name">Name</label><input id="contact-name" name="name" autoComplete="name" maxLength={120} required /></div>
      <div className="field"><label htmlFor="contact-email">Email</label><input id="contact-email" name="email" type="email" autoComplete="email" maxLength={180} required /></div>
      <div className="field"><label htmlFor="contact-whatsapp">WhatsApp / phone</label><input id="contact-whatsapp" name="whatsapp" type="tel" autoComplete="tel" maxLength={80} /></div>
      <div className="field"><label htmlFor="contact-subject">Subject</label><input id="contact-subject" name="subject" maxLength={160} required /></div>
      <div className="field full"><label htmlFor="contact-message">Message</label><textarea id="contact-message" name="message" rows={7} maxLength={3000} required /></div>
      <div className="hp-field" aria-hidden="true"><label htmlFor="contact-website">Website</label><input id="contact-website" name="website" tabIndex={-1} autoComplete="off" /></div>
      <div className="field full">
        <button className="btn btn-primary contact-submit" type="submit" disabled={status==='sending'}>{status==='sending' ? 'Sending…' : 'Send message'}</button>
        {status==='sent' && <p className="form-status" role="status">Your message has been sent. We will reply using the contact details you provided.</p>}
        {status==='error' && <p className="form-status form-status-error" role="alert">The message could not be sent. Please try again or contact us on WhatsApp.</p>}
        <p className="form-note">Information submitted here is handled as described in our <a className="inline-link" href="/privacy-policy" target="_blank" rel="noreferrer">Privacy Policy</a>.</p>
      </div>
    </div>
  </form>;
}

# Cappadocia Airport Shuttle

Production source for `cappadociaairportshuttle.com`.

Public locales:
- English `/`
- Simplified Chinese `/zh-cn/`

Deployment: Vercel + Next.js.

## Email delivery
Booking requests and Contact Us messages use Resend. Configure the variables shown in `.env.example` in Vercel before production deployment. `RESEND_FROM` must use a sender/domain accepted by your Resend account.

Keep real secrets only in Vercel environment variables. Never commit `.env` or `.env.local`.

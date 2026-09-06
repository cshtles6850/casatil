import type { Metadata } from 'next';
import '../globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: { default: 'Cappadocia Airport Shuttle | Kayseri & Nevsehir Airports', template: '%s | Cappadocia Airport Shuttle' },
  description: 'Cappadocia Airport Shuttle from Kayseri Airport (ASR) and Nevsehir Airport (NAV) to Goreme, Urgup, Uchisar, Avanos, Ortahisar and Cavusin. Shared shuttle €15 per person; private Vito and Sprinter available.',
  robots: { index: true, follow: true },
  other: { 'applicable-device': 'pc,mobile' },
  openGraph: { type: 'website', siteName: SITE.name, title: 'Cappadocia Airport Shuttle | Kayseri & Nevsehir', description: 'Shared airport shuttle €15 per person plus private Vito and Sprinter transfers.', url: SITE.domain, images: [{ url: '/cappadocia-airport-shuttle-vito-sprinter.webp', width: 1200, height: 675, alt: 'Cappadocia Airport Shuttle Vito and Sprinter' }] },
  twitter: { card: 'summary_large_image', title: 'Cappadocia Airport Shuttle', description: 'Kayseri & Nevsehir Airport shuttle to Cappadocia hotels.', images: ['/cappadocia-airport-shuttle-vito-sprinter.webp'] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const org = {
    '@context': 'https://schema.org', '@type': 'TravelAgency', name: SITE.name, url: SITE.domain,
    telephone: SITE.whatsappDisplay,
    areaServed: ['Goreme','Urgup','Uchisar','Avanos','Ortahisar','Cavusin','Kayseri Airport','Nevsehir Airport'],
    identifier: `TURSAB ${SITE.tursab}`,
    parentOrganization: { '@type': 'Organization', name: SITE.company },
  };
  return <html lang="en"><body><JsonLd data={org} /><Header />{children}<Footer /></body></html>;
}

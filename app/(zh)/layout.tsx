import type { Metadata } from 'next';
import '../globals.css';
import { HeaderZh } from '@/components/HeaderZh';
import { FooterZh } from '@/components/FooterZh';
import { JsonLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: { default: '卡帕多奇亚机场接送 | ASR 与 NAV 机场班车', template: '%s | Cappadocia Airport Shuttle' },
  description: '卡帕多奇亚机场接送：开塞利机场 ASR 与内夫谢希尔机场 NAV 到格雷梅、于尔居普、乌奇希萨尔、阿瓦诺斯、奥塔西萨和恰武辛。拼车 €15/人，另有私人 Vito 与 Sprinter。',
  robots: { index: true, follow: true },
  openGraph: { type: 'website', siteName: SITE.name, locale: 'zh_CN', title: '卡帕多奇亚机场接送 | ASR 与 NAV', description: '€15/人机场拼车，以及私人 Vito / Sprinter 接送。', url: `${SITE.domain}/zh-cn`, images: [{ url: '/cappadocia-airport-shuttle-vito-sprinter.webp', width: 1200, height: 675, alt: '卡帕多奇亚机场接送 Mercedes Vito 与 Sprinter' }] },
  twitter: { card: 'summary_large_image', title: '卡帕多奇亚机场接送', description: '开塞利与内夫谢希尔机场到卡帕多奇亚酒店。', images: ['/cappadocia-airport-shuttle-vito-sprinter.webp'] },
  other: { 'applicable-device': 'pc,mobile' },
};

export default function ChineseRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const org = {
    '@context': 'https://schema.org', '@type': 'TravelAgency', name: SITE.name, url: `${SITE.domain}/zh-cn`,
    telephone: SITE.whatsappDisplay,
    areaServed: ['格雷梅','于尔居普','乌奇希萨尔','阿瓦诺斯','奥塔西萨','恰武辛','开塞利机场','内夫谢希尔机场'],
    identifier: `TURSAB ${SITE.tursab}`,
    parentOrganization: { '@type': 'Organization', name: SITE.company },
  };
  return <html lang="zh-CN"><body><JsonLd data={org} /><HeaderZh />{children}<FooterZh /></body></html>;
}

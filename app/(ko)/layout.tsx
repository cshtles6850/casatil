import type { Metadata } from 'next';
import '../globals.css';
import { LocalizedHeader } from '@/components/LocalizedHeader';
import { LocalizedFooter } from '@/components/LocalizedFooter';
import { JsonLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';
import { localeHtmlLang } from '@/lib/locale-config';

export const metadata: Metadata = {metadataBase:new URL(SITE.domain),robots:{index:true,follow:true},other:{'applicable-device':'pc,mobile'}};
export default function Layout({children}:Readonly<{children:React.ReactNode}>){const org={'@context':'https://schema.org','@type':'TravelAgency',name:SITE.name,url:SITE.domain,telephone:SITE.whatsappDisplay,areaServed:['Goreme','Urgup','Uchisar','Avanos','Ortahisar','Cavusin','Kayseri Airport','Nevsehir Airport'],identifier:`TURSAB ${SITE.tursab}`,parentOrganization:{'@type':'Organization',name:SITE.company}};return <html lang={localeHtmlLang['ko']}><body><JsonLd data={org}/><LocalizedHeader locale="ko"/>{children}<LocalizedFooter locale="ko"/></body></html>}

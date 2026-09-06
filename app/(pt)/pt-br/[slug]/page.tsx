import { notFound } from 'next/navigation';
import { ptPages, ptPageBySlug, ptPrettySlug } from '@/lib/content-pt';
import { LocalizedSeoPage, localizedMetadata } from '@/components/LocalizedSeoPage';

export const dynamicParams=false;
export function generateStaticParams(){return ptPages.map(page=>({slug:page.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const page=ptPageBySlug.get(slug);return page?localizedMetadata('pt-BR',page):{};}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const page=ptPageBySlug.get(slug);if(!page)return notFound();return <LocalizedSeoPage locale="pt-BR" page={page} pretty={ptPrettySlug}/>;}

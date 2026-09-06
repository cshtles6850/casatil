import { notFound } from 'next/navigation';
import { esPages, esPageBySlug, esPrettySlug } from '@/lib/content-es';
import { LocalizedSeoPage, localizedMetadata } from '@/components/LocalizedSeoPage';

export const dynamicParams=false;
export function generateStaticParams(){return esPages.map(page=>({slug:page.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const page=esPageBySlug.get(slug);return page?localizedMetadata('es',page):{};}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const page=esPageBySlug.get(slug);if(!page)return notFound();return <LocalizedSeoPage locale="es" page={page} pretty={esPrettySlug}/>;}

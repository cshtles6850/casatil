import { notFound } from 'next/navigation';
import { koPages, koPageBySlug, koPrettySlug } from '@/lib/content-ko';
import { LocalizedSeoPage, localizedMetadata } from '@/components/LocalizedSeoPage';

export const dynamicParams=false;
export function generateStaticParams(){return koPages.map(page=>({slug:page.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const page=koPageBySlug.get(slug);return page?localizedMetadata('ko',page):{};}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const page=koPageBySlug.get(slug);if(!page)return notFound();return <LocalizedSeoPage locale="ko" page={page} pretty={koPrettySlug}/>;}

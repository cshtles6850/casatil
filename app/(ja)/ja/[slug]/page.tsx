import { notFound } from 'next/navigation';
import { jaPages, jaPageBySlug, jaPrettySlug } from '@/lib/content-ja';
import { LocalizedSeoPage, localizedMetadata } from '@/components/LocalizedSeoPage';

export const dynamicParams=false;
export function generateStaticParams(){return jaPages.map(page=>({slug:page.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const page=jaPageBySlug.get(slug);return page?localizedMetadata('ja',page):{};}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const page=jaPageBySlug.get(slug);if(!page)return notFound();return <LocalizedSeoPage locale="ja" page={page} pretty={jaPrettySlug}/>;}

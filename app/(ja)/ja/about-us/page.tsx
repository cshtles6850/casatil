import { LocalizedAboutPage, localizedStaticMetadata } from '@/components/LocalizedStaticPages';
export const metadata=localizedStaticMetadata('ja','about');
export default function Page(){return <LocalizedAboutPage locale="ja"/>}

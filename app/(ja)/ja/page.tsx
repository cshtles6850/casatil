import { LocalizedHomePage, localizedStaticMetadata } from '@/components/LocalizedStaticPages';
export const metadata=localizedStaticMetadata('ja','home');
export default function Page(){return <LocalizedHomePage locale="ja"/>}

import { LocalizedHomePage, localizedStaticMetadata } from '@/components/LocalizedStaticPages';
export const metadata=localizedStaticMetadata('ko','home');
export default function Page(){return <LocalizedHomePage locale="ko"/>}

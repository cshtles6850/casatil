import { LocalizedAboutPage, localizedStaticMetadata } from '@/components/LocalizedStaticPages';
export const metadata=localizedStaticMetadata('ko','about');
export default function Page(){return <LocalizedAboutPage locale="ko"/>}

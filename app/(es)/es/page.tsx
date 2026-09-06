import { LocalizedHomePage, localizedStaticMetadata } from '@/components/LocalizedStaticPages';
export const metadata=localizedStaticMetadata('es','home');
export default function Page(){return <LocalizedHomePage locale="es"/>}

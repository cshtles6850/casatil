import { formatEuro, shuttleOneWayPrice } from './prices';

export type HomeHeroLocale = 'en' | 'zh-CN' | 'es' | 'pt-BR' | 'ko' | 'ja';

export type HomeHeroPricingCopy = {
  shared: string;
  private: string;
};

/**
 * Homepage hero pricing copy.
 * Prices always come from lib/prices.ts. When ASR and NAV share the same
 * shuttle fare, show one compact "from" price instead of duplicating it.
 */
export function homeHeroPricing(locale: HomeHeroLocale): HomeHeroPricingCopy {
  const asr = shuttleOneWayPrice('kayseri');
  const nav = shuttleOneWayPrice('nevsehir');
  const samePrice = asr === nav;
  const asrPrice = formatEuro(asr);
  const navPrice = formatEuro(nav);

  switch (locale) {
    case 'zh-CN':
      return {
        shared: samePrice
          ? `共享接驳车：每人 ${asrPrice} 起`
          : `共享接驳车：NAV 每人 ${navPrice} 起 · ASR 每人 ${asrPrice} 起`,
        private: '另提供 Vito 和 Sprinter 私人接送',
      };
    case 'es':
      return {
        shared: samePrice
          ? `Shuttle compartido: desde ${asrPrice} por persona`
          : `Shuttle compartido: NAV desde ${navPrice} • ASR desde ${asrPrice} por persona`,
        private: 'Traslados privados en Vito y Sprinter disponibles',
      };
    case 'pt-BR':
      return {
        shared: samePrice
          ? `Shuttle compartilhado: a partir de ${asrPrice} por pessoa`
          : `Shuttle compartilhado: NAV a partir de ${navPrice} • ASR a partir de ${asrPrice} por pessoa`,
        private: 'Transfers privativos em Vito e Sprinter disponíveis',
      };
    case 'ko':
      return {
        shared: samePrice
          ? `합승 셔틀: 1인 ${asrPrice}부터`
          : `합승 셔틀: NAV 1인 ${navPrice}부터 · ASR 1인 ${asrPrice}부터`,
        private: '프라이빗 Vito·Sprinter 이용 가능',
      };
    case 'ja':
      return {
        shared: samePrice
          ? `乗合シャトル：1名 ${asrPrice}から`
          : `乗合シャトル：NAV 1名 ${navPrice}から・ASR 1名 ${asrPrice}から`,
        private: 'プライベートVito・Sprinterも利用できます',
      };
    default:
      return {
        shared: samePrice
          ? `Shared shuttle: From ${asrPrice} per person`
          : `Shared shuttle: NAV from ${navPrice} • ASR from ${asrPrice} per person`,
        private: 'Private Vito & Sprinter transfers available',
      };
  }
}

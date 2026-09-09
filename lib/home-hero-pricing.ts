import { formatEuro, shuttleOneWayPrice } from './prices';

export type HomeHeroLocale = 'en' | 'zh-CN' | 'es' | 'pt-BR' | 'ko' | 'ja';

export type HomeHeroPricingCopy = {
  sharedLabel: string;
  navLine: string;
  asrLine: string;
  unit: string;
  private: string;
};

/**
 * Homepage hero pricing copy.
 * ASR and NAV always remain separate price sources, even when the values happen
 * to match. This avoids reintroducing the old "one shared airport fare" assumption.
 */
export function homeHeroPricing(locale: HomeHeroLocale): HomeHeroPricingCopy {
  const asrPrice = formatEuro(shuttleOneWayPrice('kayseri'));
  const navPrice = formatEuro(shuttleOneWayPrice('nevsehir'));

  switch (locale) {
    case 'zh-CN':
      return {
        sharedLabel: '共享班车：',
        navLine: `NAV ${navPrice} 起`,
        asrLine: `ASR ${asrPrice} 起`,
        unit: '每人',
        private: '另提供 Vito 和 Sprinter 私人接送',
      };
    case 'es':
      return {
        sharedLabel: 'Shuttle compartido:',
        navLine: `NAV desde ${navPrice}`,
        asrLine: `ASR desde ${asrPrice}`,
        unit: 'Por persona',
        private: 'Traslados privados en Vito y Sprinter disponibles',
      };
    case 'pt-BR':
      return {
        sharedLabel: 'Shuttle compartilhado:',
        navLine: `NAV a partir de ${navPrice}`,
        asrLine: `ASR a partir de ${asrPrice}`,
        unit: 'Por pessoa',
        private: 'Transfers privativos em Vito e Sprinter disponíveis',
      };
    case 'ko':
      return {
        sharedLabel: '합승 셔틀:',
        navLine: `NAV ${navPrice}부터`,
        asrLine: `ASR ${asrPrice}부터`,
        unit: '1인 요금',
        private: '프라이빗 Vito·Sprinter 이용 가능',
      };
    case 'ja':
      return {
        sharedLabel: '乗合シャトル：',
        navLine: `NAV ${navPrice}から`,
        asrLine: `ASR ${asrPrice}から`,
        unit: '1名あたり',
        private: 'プライベートVito・Sprinterも利用できます',
      };
    default:
      return {
        sharedLabel: 'Shared shuttle:',
        navLine: `NAV from ${navPrice}`,
        asrLine: `ASR from ${asrPrice}`,
        unit: 'Per person',
        private: 'Private Vito & Sprinter transfers available',
      };
  }
}

export function mobileShuttlePriceLabel(locale: HomeHeroLocale, airport?: 'kayseri' | 'nevsehir') {
  if (airport) {
    const price = formatEuro(shuttleOneWayPrice(airport));
    if (locale === 'zh-CN') return `${price} / 人`;
    if (locale === 'ko') return `1인 ${price}`;
    if (locale === 'ja') return `1名 ${price}`;
    if (locale === 'es') return `${price} / persona`;
    if (locale === 'pt-BR') return `${price} / pessoa`;
    return `${price} / person`;
  }

  const nav = formatEuro(shuttleOneWayPrice('nevsehir'));
  const asr = formatEuro(shuttleOneWayPrice('kayseri'));
  if (locale === 'zh-CN') return `NAV ${nav} · ASR ${asr} / 人`;
  if (locale === 'ko') return `NAV ${nav} · ASR ${asr} / 1인`;
  if (locale === 'ja') return `NAV ${nav} · ASR ${asr} / 1名`;
  if (locale === 'es') return `NAV ${nav} · ASR ${asr} / persona`;
  if (locale === 'pt-BR') return `NAV ${nav} · ASR ${asr} / pessoa`;
  return `NAV ${nav} · ASR ${asr} / person`;
}

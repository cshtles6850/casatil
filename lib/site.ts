export const SITE = {
  name: 'Cappadocia Airport Shuttle',
  domain: 'https://cappadociaairportshuttle.com',
  whatsappDisplay: '+90 538 828 26 66',
  whatsappDigits: '905388282666',
  whatsappDirectMessageEn: 'Hello, I have a question about an airport shuttle.',
  whatsappDirectMessageZh: '您好，我想咨询机场接送服务。',
  company: 'Ekwo Travel & Outdoor Travel Agency',
  tursab: '7896',
};

export const airports = {
  kayseri: {
    name: 'Kayseri Airport',
    fullName: 'Kayseri Erkilet Airport',
    code: 'ASR',
    vito: 90,
    sprinter: 110,
  },
  nevsehir: {
    name: 'Nevsehir Airport',
    fullName: 'Nevsehir Kapadokya Airport',
    code: 'NAV',
    vito: 80,
    sprinter: 90,
  },
} as const;

export const towns = {
  goreme: { name: 'Goreme', distanceKayseri: '75 km', timeKayseri: '60–75 min', distanceNevsehir: '40 km', timeNevsehir: '35–45 min' },
  urgup: { name: 'Urgup', distanceKayseri: '70 km', timeKayseri: '60–75 min', distanceNevsehir: '50 km', timeNevsehir: '45–60 min' },
  uchisar: { name: 'Uchisar', distanceKayseri: '80 km', timeKayseri: '70–85 min', distanceNevsehir: '35 km', timeNevsehir: '30–40 min' },
  avanos: { name: 'Avanos', distanceKayseri: '70 km', timeKayseri: '60–75 min', distanceNevsehir: '38 km', timeNevsehir: '35–50 min' },
  ortahisar: { name: 'Ortahisar', distanceKayseri: '75 km', timeKayseri: '60–75 min', distanceNevsehir: '45 km', timeNevsehir: '40–50 min' },
  cavusin: { name: 'Cavusin', distanceKayseri: '75 km', timeKayseri: '65–80 min', distanceNevsehir: '42 km', timeNevsehir: '40–55 min' },
} as const;

export const futureLocales = [
  { code: 'en', label: 'English', active: true },
  { code: 'zh-CN', label: '简体中文', active: true },
  { code: 'es', label: 'Español', active: false },
  { code: 'ko', label: '한국어', active: false },
  { code: 'it', label: 'Italiano', active: false },
  { code: 'ja', label: '日本語', active: false },
  { code: 'zh-TW', label: '繁體中文', active: false },
  { code: 'ru', label: 'Русский', active: false },
  { code: 'de', label: 'Deutsch', active: false },
  { code: 'pt-BR', label: 'Português (Brasil)', active: false },
  { code: 'ms-MY', label: 'Bahasa Melayu', active: false },
  { code: 'fr-FR', label: 'Francais', active: false },
  { code: 'id-ID', label: 'Bahasa Indonesia', active: false },
] as const;

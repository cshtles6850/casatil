type BookingInfoChecklistProps = {
  locale?: 'en' | 'zh-CN' | 'es' | 'pt-BR' | 'ko' | 'ja';
  className?: string;
};

const bookingInfoContent = {
  en: {
    heading: 'Booking details to have ready',
    items: ['Passenger name', 'Passport number', 'Flight number', 'Full accommodation name', 'WhatsApp contact'],
  },
  'zh-CN': {
    heading: '预订前请准备',
    items: ['乘客姓名', '护照号码', '航班号', '完整住宿名称', 'WhatsApp 联系方式'],
  },
  es: { heading: 'Datos que conviene tener preparados', items: ['Nombre del pasajero', 'Número de pasaporte', 'Número de vuelo', 'Nombre completo del alojamiento', 'Contacto de WhatsApp'] },
  'pt-BR': { heading: 'Dados para ter em mãos antes da reserva', items: ['Nome do passageiro', 'Número do passaporte', 'Número do voo', 'Nome completo da hospedagem', 'Contato de WhatsApp'] },
  ko: { heading: '예약 전에 준비할 정보', items: ['승객 이름', '여권 번호', '항공편 번호', '숙소의 정확한 전체 이름', 'WhatsApp 연락처'] },
  ja: { heading: '予約前にご用意いただく情報', items: ['乗客氏名', 'パスポート番号', '便名', '宿泊施設の正式名称', 'WhatsApp連絡先'] },
} as const;

export function BookingInfoChecklist({ locale = 'en', className = '' }: BookingInfoChecklistProps) {
  const content = bookingInfoContent[locale];

  return <section className={`content-section booking-info-section${className ? ` ${className}` : ''}`}>
    <h2>{content.heading}</h2>
    <div className="booking-info-list">
      {content.items.map((item) => <div className="booking-info-chip" key={item}>
        <span aria-hidden="true">✓</span><strong>{item}</strong>
      </div>)}
    </div>
  </section>;
}

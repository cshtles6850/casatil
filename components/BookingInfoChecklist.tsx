type BookingInfoChecklistProps = {
  locale?: 'en' | 'zh-CN';
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

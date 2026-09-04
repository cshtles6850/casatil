'use client';

import { FormEvent, useEffect, useMemo, useState } from 'react';
import { SITE } from '@/lib/site';
import { WhatsAppIcon } from './WhatsAppIcon';

type TransferType = 'shuttle' | 'private';
type Journey = 'one-way' | 'round-trip';
type Direction = 'airport-hotel' | 'hotel-airport';
type Airport = 'kayseri' | 'nevsehir';
type Vehicle = 'vito' | 'sprinter';
type Passenger = { fullName: string; passport: string };

const airportDisplayLabels: Record<Airport, string> = {
  kayseri: '开塞利机场 Kayseri Airport (ASR)',
  nevsehir: '内夫谢希尔机场 Nevsehir Airport (NAV)',
};
const airportApiLabels: Record<Airport, string> = {
  kayseri: 'Kayseri Airport (ASR)',
  nevsehir: 'Nevsehir Airport (NAV)',
};

const privatePrices: Record<Airport, Record<Vehicle, number>> = {
  kayseri: { vito: 90, sprinter: 110 },
  nevsehir: { vito: 80, sprinter: 90 },
};

function maskPassport(value: string) {
  const clean = value.trim();
  if (!clean) return '未填写';
  if (clean.length <= 4) return '已填写';
  return `••••${clean.slice(-4)}`;
}

export function BookingFormZh({
  compact = false,
  initialAirport = 'kayseri',
  initialDirection = 'airport-hotel',
  initialTown = '',
}: {
  compact?: boolean;
  initialAirport?: Airport;
  initialDirection?: Direction;
  initialTown?: string;
}) {
  const [transferType, setTransferType] = useState<TransferType>('shuttle');
  const [journey, setJourney] = useState<Journey>('one-way');
  const [direction, setDirection] = useState<Direction>(initialDirection);
  const [airport, setAirport] = useState<Airport>(initialAirport);
  const [vehicle, setVehicle] = useState<Vehicle>('vito');
  const [passengers, setPassengers] = useState(1);
  const [people, setPeople] = useState<Passenger[]>([{ fullName: '', passport: '' }]);
  const [hotel, setHotel] = useState('');
  const [firstTransferDate, setFirstTransferDate] = useState('');
  const [arrivalFlight, setArrivalFlight] = useState('');
  const [departureFlight, setDepartureFlight] = useState('');
  const [returnTransferDate, setReturnTransferDate] = useState('');
  const [returnFlight, setReturnFlight] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [notes, setNotes] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [status, setStatus] = useState('');
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (transferType !== 'private') return;
    const max = vehicle === 'vito' ? 5 : 16;
    if (passengers > max) setPassengers(max);
  }, [transferType, vehicle, passengers]);

  useEffect(() => {
    setPeople((current) => Array.from({ length: passengers }, (_, index) => current[index] ?? { fullName: '', passport: '' }));
  }, [passengers]);

  const total = useMemo(() => {
    const multiplier = journey === 'round-trip' ? 2 : 1;
    if (transferType === 'shuttle') return 15 * passengers * multiplier;
    return privatePrices[airport][vehicle] * multiplier;
  }, [transferType, journey, passengers, airport, vehicle]);

  const isArrivalOnly = journey === 'one-way' && direction === 'airport-hotel';
  const isDepartureOnly = journey === 'one-way' && direction === 'hotel-airport';
  const resolvedDirection = journey === 'round-trip'
    ? '机场 ⇄ 酒店'
    : direction === 'airport-hotel' ? '机场 → 酒店' : '酒店 → 机场';

  function updatePassenger(index: number, field: keyof Passenger, value: string) {
    setPeople((current) => current.map((person, i) => i === index ? { ...person, [field]: value } : person));
  }

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!confirmed) return;

    const form = new FormData(e.currentTarget);
    if (String(form.get('companyWebsite') || '').trim()) return;

    const passengerPayload = people.map((person, index) => ({
      number: index + 1,
      fullName: person.fullName.trim(),
      passport: person.passport.trim(),
    }));

    const serviceEnglish = transferType === 'shuttle' ? 'Shared Airport Shuttle' : 'Private Airport Transfer';
    const vehicleEnglish = transferType === 'private' ? (vehicle === 'vito' ? 'Mercedes Vito (max 5)' : 'Mercedes Sprinter (max 16)') : 'Shared shuttle';
    const directionEnglish = journey === 'round-trip' ? 'Airport ⇄ Hotel' : direction === 'airport-hotel' ? 'Airport → Hotel' : 'Hotel → Airport';

    const details = {
      locale: 'zh-CN',
      transferType,
      journey,
      direction: directionEnglish,
      airport: airportApiLabels[airport],
      vehicle: vehicleEnglish,
      passengers: String(passengers),
      hotel,
      firstTransferDate,
      arrivalFlight,
      departureFlight,
      returnTransferDate,
      returnFlight,
      whatsapp,
      passengerDetails: passengerPayload,
      notes,
      total: `EUR ${total}`,
      payment: 'Cash to the driver',
      website: `${SITE.domain}/zh-cn`,
      submittedAt: new Date().toISOString(),
    };

    const passengerLines = passengerPayload.flatMap((person) => [
      `Passenger ${person.number} / 乘客 ${person.number}: ${person.fullName || '-'}`,
      `Passport ${person.number} / 护照号 ${person.number}: ${person.passport || '-'}`,
    ]);

    const lines = [
      '您好，我想通过 Cappadocia Airport Shuttle（cappadociaairportshuttle.com）预订机场接送服务。',
      '',
      `Service / 服务: ${serviceEnglish}`,
      `Journey / 行程: ${journey === 'round-trip' ? 'Round Trip / 往返' : 'One Way / 单程'}`,
      `Direction / 方向: ${directionEnglish}`,
      `Airport / 机场: ${airportDisplayLabels[airport]}`,
      transferType === 'private' ? `Vehicle / 车型: ${vehicleEnglish}` : '',
      `Passengers / 人数: ${passengers}`,
      `Hotel / 酒店区域: ${hotel || '-'}`,
      `First transfer date / 首段接送日期: ${firstTransferDate || '-'}`,
      isArrivalOnly || journey === 'round-trip' ? `Arrival flight / 抵达航班: ${arrivalFlight || '-'}` : '',
      isDepartureOnly ? `Departure flight / 离港航班: ${departureFlight || '-'}` : '',
      journey === 'round-trip' ? `Return transfer date / 返程接送日期: ${returnTransferDate || '-'}` : '',
      journey === 'round-trip' ? `Return flight / 返程航班: ${returnFlight || '-'}` : '',
      `Contact WhatsApp / 联系号码: ${whatsapp || '-'}`,
      ...passengerLines,
      `Estimated total / 预计总价: EUR ${total}`,
      'Payment / 付款: Cash to the driver / 现金支付给司机',
      notes ? `Notes / 备注: ${notes}` : '',
    ].filter(Boolean);

    const url = `https://wa.me/${SITE.whatsappDigits}?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setStatus('预订信息已准备在 WhatsApp 中，请在 WhatsApp 里发送消息完成申请。');

    void fetch('/api/booking', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(details),
      keepalive: true,
    }).then(async (response) => {
      const result = await response.json().catch(() => null) as { email?: string } | null;
      if (result?.email === 'sent') setStatus('WhatsApp 消息已准备好，同时预订副本已发送到我们的邮箱。请在 WhatsApp 中发送消息完成申请。');
      if (!response.ok || result?.email === 'send-failed') setStatus('WhatsApp 预订信息已准备好。邮箱副本暂未确认，请务必在 WhatsApp 中发送消息。');
    }).catch(() => setStatus('WhatsApp 预订信息已准备好，请在 WhatsApp 中发送消息完成申请。'));
  }

  return (
    <div className={`booking-card${compact ? ' booking-card-compact' : ''}`}>
      {!compact && (
        <div className="section-head booking-head">
          <div className="kicker">预订机场接送</div>
          <h2>选择单程或往返</h2>
          <p>选择机场与服务，填写航班、乘客和酒店信息，确认总价后继续到 WhatsApp。</p>
        </div>
      )}

      <form onSubmit={submit}>
        <input className="hp-field" tabIndex={-1} autoComplete="off" name="companyWebsite" aria-hidden="true" />
        <div className="form-grid">
          <div className="field full">
            <label>接送服务</label>
            <div className="radio-row">
              <label className="radio-card"><input type="radio" name="serviceType" checked={transferType === 'shuttle'} onChange={() => setTransferType('shuttle')} /> 拼车 · €15/人/单程</label>
              <label className="radio-card"><input type="radio" name="serviceType" checked={transferType === 'private'} onChange={() => setTransferType('private')} /> 私人包车</label>
            </div>
          </div>

          <div className="field full">
            <label>行程</label>
            <div className="radio-row">
              <label className="radio-card"><input type="radio" name="journeyType" checked={journey === 'one-way'} onChange={() => setJourney('one-way')} /> 单程</label>
              <label className="radio-card"><input type="radio" name="journeyType" checked={journey === 'round-trip'} onChange={() => setJourney('round-trip')} /> 往返</label>
            </div>
          </div>

          {journey === 'one-way' ? (
            <div className="field full">
              <label>方向</label>
              <div className="radio-row">
                <label className="radio-card"><input type="radio" name="direction" checked={direction === 'airport-hotel'} onChange={() => setDirection('airport-hotel')} /> 机场 → 酒店</label>
                <label className="radio-card"><input type="radio" name="direction" checked={direction === 'hotel-airport'} onChange={() => setDirection('hotel-airport')} /> 酒店 → 机场</label>
              </div>
            </div>
          ) : (
            <div className="field full"><div className="journey-note"><strong>往返：</strong>抵达时机场 → 酒店，离开时酒店 → 机场。</div></div>
          )}

          <div className="field">
            <label htmlFor={`zh-airport-${compact ? 'compact' : 'full'}`}>机场</label>
            <select id={`zh-airport-${compact ? 'compact' : 'full'}`} name="airport" value={airport} onChange={(e) => setAirport(e.target.value as Airport)}>
              <option value="kayseri">开塞利机场 Kayseri Airport (ASR)</option>
              <option value="nevsehir">内夫谢希尔机场 Nevsehir Airport (NAV)</option>
            </select>
          </div>

          <div className="field">
            <label htmlFor={`zh-passengers-${compact ? 'compact' : 'full'}`}>乘客人数</label>
            <input id={`zh-passengers-${compact ? 'compact' : 'full'}`} name="passengerCount" type="number" min="1" max={transferType === 'private' ? (vehicle === 'vito' ? 5 : 16) : 16} value={passengers} onChange={(e) => { const max = transferType === 'private' ? (vehicle === 'vito' ? 5 : 16) : 16; setPassengers(Math.min(max, Math.max(1, Number(e.target.value) || 1))); }} required />
          </div>

          {transferType === 'private' && (
            <div className="field full">
              <label>私人车型</label>
              <div className="radio-row">
                <label className="radio-card"><input type="radio" name="vehicle" checked={vehicle === 'vito'} onChange={() => setVehicle('vito')} /> Vito · 最多 5 人 · <strong>€{privatePrices[airport].vito}/单程</strong></label>
                <label className="radio-card"><input type="radio" name="vehicle" checked={vehicle === 'sprinter'} onChange={() => setVehicle('sprinter')} /> Sprinter · 最多 16 人 · <strong>€{privatePrices[airport].sprinter}/单程</strong></label>
              </div>
            </div>
          )}

          <div className="field full">
            <label htmlFor={`zh-hotel-${compact ? 'compact' : 'full'}`}>酒店 / 住宿</label>
            <input id={`zh-hotel-${compact ? 'compact' : 'full'}`} name="hotel" value={hotel} onChange={(e) => setHotel(e.target.value)} placeholder={initialTown ? `请填写${initialTown}的完整酒店名称` : '请填写完整酒店名称和所在城镇'} required />
          </div>

          {!expanded && (
            <div className="field full">
              <button className="btn booking-continue" type="button" onClick={() => setExpanded(true)}>
                继续填写航班与乘客资料 · €{total}
              </button>
              <div className="form-note">只有继续下一步后，才会展开航班、乘客与护照信息。</div>
            </div>
          )}

          {expanded && <>
          <div className="field">
            <label htmlFor={`zh-date-${compact ? 'compact' : 'full'}`}>{isDepartureOnly ? '送机日期' : '抵达 / 首段接送日期'}</label>
            <input id={`zh-date-${compact ? 'compact' : 'full'}`} name="firstTransferDate" type="date" value={firstTransferDate} onChange={(e) => setFirstTransferDate(e.target.value)} required />
          </div>

          {(isArrivalOnly || journey === 'round-trip') && (
            <div className="field">
              <label htmlFor={`zh-arrival-flight-${compact ? 'compact' : 'full'}`}>抵达航班号</label>
              <input id={`zh-arrival-flight-${compact ? 'compact' : 'full'}`} name="arrivalFlight" value={arrivalFlight} onChange={(e) => setArrivalFlight(e.target.value)} placeholder="例如 TK2010" required />
            </div>
          )}

          {isDepartureOnly && (
            <div className="field">
              <label htmlFor={`zh-departure-flight-${compact ? 'compact' : 'full'}`}>离港航班号</label>
              <input id={`zh-departure-flight-${compact ? 'compact' : 'full'}`} name="departureFlight" value={departureFlight} onChange={(e) => setDepartureFlight(e.target.value)} placeholder="例如 TK2011" required />
            </div>
          )}

          {journey === 'round-trip' && (
            <>
              <div className="field"><label htmlFor={`zh-return-date-${compact ? 'compact' : 'full'}`}>返程接送日期</label><input id={`zh-return-date-${compact ? 'compact' : 'full'}`} name="returnTransferDate" type="date" value={returnTransferDate} onChange={(e) => setReturnTransferDate(e.target.value)} required /></div>
              <div className="field"><label htmlFor={`zh-return-flight-${compact ? 'compact' : 'full'}`}>返程 / 离港航班号</label><input id={`zh-return-flight-${compact ? 'compact' : 'full'}`} name="returnFlight" value={returnFlight} onChange={(e) => setReturnFlight(e.target.value)} placeholder="例如 TK2011" required /></div>
            </>
          )}

          <div className="field full">
            <label htmlFor={`zh-whatsapp-${compact ? 'compact' : 'full'}`}>联系 WhatsApp 号码</label>
            <input id={`zh-whatsapp-${compact ? 'compact' : 'full'}`} name="whatsapp" type="tel" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} placeholder="请包含国家代码，例如 +86..." autoComplete="tel" required />
          </div>

          <div className="field full passenger-block">
            <div className="passenger-heading"><div><strong>乘客信息</strong><span>运营公司要求姓名与护照号码用于预订和接送操作。</span></div></div>
            {people.map((person, index) => (
              <div className="passenger-row" key={index}>
                <div className="field"><label htmlFor={`zh-person-name-${compact ? 'c' : 'f'}-${index}`}>乘客 {index + 1} 姓名（与护照一致）</label><input id={`zh-person-name-${compact ? 'c' : 'f'}-${index}`} value={person.fullName} onChange={(e) => updatePassenger(index, 'fullName', e.target.value)} autoComplete={index === 0 ? 'name' : 'off'} required /></div>
                <div className="field"><label htmlFor={`zh-passport-${compact ? 'c' : 'f'}-${index}`}>护照号码</label><input id={`zh-passport-${compact ? 'c' : 'f'}-${index}`} value={person.passport} onChange={(e) => updatePassenger(index, 'passport', e.target.value)} autoCapitalize="characters" autoComplete="off" required /></div>
              </div>
            ))}
          </div>

          <div className="field full"><label htmlFor={`zh-notes-${compact ? 'compact' : 'full'}`}>备注（可选）</label><textarea id={`zh-notes-${compact ? 'compact' : 'full'}`} name="notes" rows={compact ? 2 : 3} value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="行李、儿童座椅、酒店道路或其他需要说明的信息" /></div>

          <div className="field full booking-summary">
            <div className="booking-summary-head"><strong>预订摘要</strong><strong className="summary-total">€{total}</strong></div>
            <dl>
              <div><dt>服务</dt><dd>{transferType === 'shuttle' ? '卡帕多奇亚机场拼车' : vehicle === 'vito' ? '私人 Mercedes Vito' : '私人 Mercedes Sprinter'}</dd></div>
              <div><dt>行程</dt><dd>{journey === 'round-trip' ? '往返' : '单程'} · {resolvedDirection}</dd></div>
              <div><dt>机场</dt><dd>{airportDisplayLabels[airport]}</dd></div>
              <div><dt>酒店</dt><dd>{hotel || '—'}</dd></div>
              <div><dt>人数</dt><dd>{passengers}</dd></div>
              {people.map((person, index) => <div key={index}><dt>乘客 {index + 1}</dt><dd>{person.fullName || '—'} · 护照 {maskPassport(person.passport)}</dd></div>)}
              <div><dt>付款</dt><dd>现金支付给司机</dd></div>
            </dl>
            <p className="form-note">价格以 EUR 显示。如需用 USD 或 TRY 现金支付，应使用预订确认时提供的汇率。</p>
          </div>

          <label className="confirm-row field full">
            <input type="checkbox" checked={confirmed} onChange={(e) => setConfirmed(e.target.checked)} required />
            <span>我确认以上预订信息正确，同意 <a className="inline-link" href="/zh-cn/service-contract" target="_blank" rel="noreferrer">服务合同</a>，并了解所需乘客资料将按照 <a className="inline-link" href="/zh-cn/privacy-policy" target="_blank" rel="noreferrer">隐私政策</a> 处理。</span>
          </label>

          <div className="field full">
            <button className="btn btn-whatsapp booking-submit" type="submit"><WhatsAppIcon size={20} /> 提交并继续到 WhatsApp</button>
            <div className="form-note">只有在 WhatsApp 确认后，预订才算完成。拼车覆盖格雷梅、于尔居普、乌奇希萨尔、阿瓦诺斯、恰武辛和奥塔西萨；穆斯塔法帕夏（Mustafapasa）需要私人接送询价。</div>
            {status && <div className="form-status" aria-live="polite">{status}</div>}
          </div>
          </>}
        </div>
      </form>
    </div>
  );
}

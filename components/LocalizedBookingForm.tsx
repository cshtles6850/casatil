'use client';

import { FormEvent, useEffect, useMemo, useState } from 'react';
import { SITE } from '@/lib/site';
import { localePrefix, localeTownNames, localeUi, type NewLocale } from '@/lib/locale-config';
import { WhatsAppIcon } from './WhatsAppIcon';
import { TimeSelect, isValidTime } from './TimeSelect';
import { PassengerCounter } from './PassengerCounter';

type TransferType = 'shuttle' | 'private';
type Journey = 'one-way' | 'round-trip';
type Direction = 'airport-hotel' | 'hotel-airport';
type Airport = 'kayseri' | 'nevsehir';
type Vehicle = 'vito' | 'sprinter';
type Passenger = { fullName: string; passport: string };
type Town = 'goreme' | 'urgup' | 'uchisar' | 'avanos' | 'ortahisar' | 'cavusin';

const airportLabels: Record<Airport, string> = { kayseri: 'Kayseri Airport (ASR)', nevsehir: 'Nevsehir Airport (NAV)' };
const airportDisplayLabels: Record<NewLocale, Record<Airport,string>> = {
  es:{kayseri:'Aeropuerto de Kayseri (ASR)',nevsehir:'Aeropuerto de Nevsehir (NAV)'},
  'pt-BR':{kayseri:'Aeroporto de Kayseri (ASR)',nevsehir:'Aeroporto de Nevsehir (NAV)'},
  ko:{kayseri:'카이세리 공항 (ASR)',nevsehir:'네브셰히르 공항 (NAV)'},
  ja:{kayseri:'カイセリ空港（ASR）',nevsehir:'ネヴシェヒル空港（NAV）'},
};
const privatePrices: Record<Airport, Record<Vehicle, number>> = { kayseri: { vito: 90, sprinter: 110 }, nevsehir: { vito: 80, sprinter: 90 } };
const canonicalTownLabels: Record<Town, string> = { goreme:'Goreme', urgup:'Urgup', uchisar:'Uchisar', avanos:'Avanos', ortahisar:'Ortahisar', cavusin:'Cavusin' };

function initialTownKey(value: string): Town | '' {
  const normalized = value.trim().toLowerCase();
  const found = (Object.keys(canonicalTownLabels) as Town[]).find((key) => canonicalTownLabels[key].toLowerCase() === normalized || key === normalized);
  return found || '';
}
function todayInIstanbul() {
  const parts = new Intl.DateTimeFormat('en-CA', { timeZone:'Europe/Istanbul', year:'numeric', month:'2-digit', day:'2-digit' }).formatToParts(new Date());
  const get = (type:string) => parts.find((p) => p.type === type)?.value || '';
  return `${get('year')}-${get('month')}-${get('day')}`;
}
function maskPassport(value:string, t:{notEntered:string;provided:string}) {
  const clean=value.trim(); if(!clean) return t.notEntered; if(clean.length<=4) return t.provided; return `••••${clean.slice(-4)}`;
}

export function LocalizedBookingForm({ locale, compact=false, initialAirport='kayseri', initialDirection='airport-hotel', initialTown='' }: { locale:NewLocale; compact?:boolean; initialAirport?:Airport; initialDirection?:Direction; initialTown?:string }) {
  const t=localeUi[locale].form; const prefix=localePrefix[locale]; const townLabels=localeTownNames[locale] as Record<Town,string>;
  const [transferType,setTransferType]=useState<TransferType>('shuttle'); const [journey,setJourney]=useState<Journey>('one-way'); const [direction,setDirection]=useState<Direction>(initialDirection); const [airport,setAirport]=useState<Airport>(initialAirport); const [vehicle,setVehicle]=useState<Vehicle>('vito');
  const [passengers,setPassengers]=useState(1); const [people,setPeople]=useState<Passenger[]>([{fullName:'',passport:''}]); const [destination,setDestination]=useState<Town|''>(()=>initialTownKey(initialTown)); const [hotel,setHotel]=useState('');
  const [firstTransferDate,setFirstTransferDate]=useState(''); const [firstTransferTime,setFirstTransferTime]=useState(''); const [arrivalFlight,setArrivalFlight]=useState(''); const [departureFlight,setDepartureFlight]=useState(''); const [returnTransferDate,setReturnTransferDate]=useState(''); const [returnTransferTime,setReturnTransferTime]=useState(''); const [returnFlight,setReturnFlight]=useState('');
  const [whatsapp,setWhatsapp]=useState(''); const [notes,setNotes]=useState(''); const [confirmed,setConfirmed]=useState(false); const [status,setStatus]=useState(''); const [expanded,setExpanded]=useState(false);
  const today=useMemo(()=>todayInIstanbul(),[]); const firstStageReady=Boolean(destination && hotel.trim() && firstTransferDate && isValidTime(firstTransferTime)); const sameDayBooking=Boolean(firstTransferDate===today && firstTransferDate);
  useEffect(()=>{ if(transferType==='private'){ const max=vehicle==='vito'?5:16; if(passengers>max)setPassengers(max); } },[transferType,vehicle,passengers]);
  useEffect(()=>setPeople(cur=>Array.from({length:passengers},(_,i)=>cur[i]??{fullName:'',passport:''})),[passengers]);
  useEffect(()=>{if(expanded&&!firstStageReady)setExpanded(false)},[expanded,firstStageReady]);
  const total=useMemo(()=>{const m=journey==='round-trip'?2:1; return transferType==='shuttle'?15*passengers*m:privatePrices[airport][vehicle]*m},[transferType,journey,passengers,airport,vehicle]);
  const isArrivalOnly=journey==='one-way'&&direction==='airport-hotel'; const isDepartureOnly=journey==='one-way'&&direction==='hotel-airport';
  const canonicalDirection=journey==='round-trip'?'Airport ⇄ Hotel':direction==='airport-hotel'?'Airport → Hotel':'Hotel → Airport';
  const visibleDirection=journey==='round-trip'?`${t.airportHotel.split('→')[0].trim()} ⇄ ${t.airportHotel.split('→')[1].trim()}`:direction==='airport-hotel'?t.airportHotel:t.hotelAirport;
  const destinationLabel=journey==='round-trip'?t.hotelTown:direction==='airport-hotel'?t.destination:t.pickupTown;
  const airportDisplay=airportDisplayLabels[locale];
  const capacityLabel=(n:number)=>locale==='es'?`máx. ${n} pasajeros`:locale==='pt-BR'?`máx. ${n} passageiros`:locale==='ko'?`최대 ${n}명`:`最大${n}名`;
  const flightExample=locale==='es'?'p. ej. TK2010':locale==='pt-BR'?'ex.: TK2010':locale==='ko'?'예: TK2010':'例：TK2010';
  const returnFlightExample=locale==='es'?'p. ej. TK2011':locale==='pt-BR'?'ex.: TK2011':locale==='ko'?'예: TK2011':'例：TK2011';
  const privateVehicleLabel=(v:'vito'|'sprinter')=>`${t.privateTransfer} · Mercedes ${v==='vito'?'Vito':'Sprinter'} · ${capacityLabel(v==='vito'?5:16)}`;
  const firstDateLabel=journey==='round-trip'||direction==='airport-hotel'?t.arrivalDate:t.departureDate; const firstTimeLabel=journey==='round-trip'||direction==='airport-hotel'?t.arrivalTime:t.departureTime;
  function updatePassenger(index:number,field:keyof Passenger,value:string){setPeople(cur=>cur.map((p,i)=>i===index?{...p,[field]:value}:p))}
  function submit(e:FormEvent<HTMLFormElement>){
    e.preventDefault(); if(!confirmed)return; const form=new FormData(e.currentTarget); if(String(form.get('companyWebsite')||'').trim())return;
    const passengerPayload=people.map((p,i)=>({number:i+1,fullName:p.fullName.trim(),passport:p.passport.trim()}));
    const details={transferType,journey,direction:canonicalDirection,airport:airportLabels[airport],vehicle:transferType==='private'?(vehicle==='vito'?'Mercedes Vito (max 5)':'Mercedes Sprinter (max 16)'):'Shared shuttle',passengers:String(passengers),destination:destination?canonicalTownLabels[destination]:'',hotel,firstTransferDate,firstTransferTime,arrivalFlight,departureFlight,returnTransferDate,returnTransferTime,returnFlight,whatsapp,passengerDetails:passengerPayload,notes,total:`EUR ${total}`,payment:'Cash to the driver',submittedAt:new Date().toISOString(),language:locale};
    const passengerLines=passengerPayload.flatMap(p=>[`${t.passenger} ${p.number}: ${p.fullName||'-'}`,`${t.passport} ${p.number}: ${p.passport||'-'}`]);
    const lines=[t.bookingRequest,'',`${t.service}: ${transferType==='shuttle'?t.sharedService:t.privateTransfer}`,`${t.journeyLabel}: ${journey==='round-trip'?t.roundTripLabel:t.oneWayLabel}`,`${t.direction}: ${visibleDirection}`,`${t.airport}: ${airportDisplay[airport]}`,transferType==='private'?`${t.vehicleLine}: ${privateVehicleLabel(vehicle)}`:'',`${t.passengers}: ${passengers}`,`${destinationLabel}: ${destination?townLabels[destination]:'-'}`,`${t.hotel}: ${hotel||'-'}`,`${firstDateLabel}: ${firstTransferDate||'-'}`,`${firstTimeLabel}: ${firstTransferTime||'-'}`,isArrivalOnly||journey==='round-trip'?`${t.arrivalFlightLine}: ${arrivalFlight||'-'}`:'',isDepartureOnly?`${t.departureFlightLine}: ${departureFlight||'-'}`:'',journey==='round-trip'?`${t.returnFlightDateLine}: ${returnTransferDate||'-'}`:'',journey==='round-trip'?`${t.returnFlightTimeLine}: ${returnTransferTime||'-'}`:'',journey==='round-trip'?`${t.returnFlightLine}: ${returnFlight||'-'}`:'',`${t.contactWhatsApp}: ${whatsapp||'-'}`,...passengerLines,`${t.estimated}: EUR ${total}`,t.paymentLine,notes?`${t.notesLine}: ${notes}`:''].filter(Boolean);
    window.open(`https://wa.me/${SITE.whatsappDigits}?text=${encodeURIComponent(lines.join('\n'))}`,'_blank','noopener,noreferrer'); setStatus(t.requestReady);
    void fetch('/api/booking',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(details),keepalive:true}).then(async r=>{const result=await r.json().catch(()=>null) as {email?:string}|null;if(result?.email==='sent')setStatus(t.requestEmail); if(!r.ok||result?.email==='send-failed')setStatus(t.requestEmailFail)}).catch(()=>setStatus(t.requestReady));
  }
  return <div className={`booking-card${compact?' booking-card-compact':''}`}><div className="section-head booking-head"><div className="kicker">{t.kicker}</div><h2>{t.heading}</h2><p>{t.intro}</p></div>
    <form onSubmit={submit}><input className="hp-field" tabIndex={-1} autoComplete="off" name="companyWebsite" aria-hidden="true"/><div className="form-grid">
      <div className="field full"><label>{t.transferService}</label><div className="radio-row"><label className="radio-card"><input type="radio" name="serviceType" checked={transferType==='shuttle'} onChange={()=>setTransferType('shuttle')}/>{t.shuttleOption}</label><label className="radio-card"><input type="radio" name="serviceType" checked={transferType==='private'} onChange={()=>setTransferType('private')}/>{t.privateOption}</label></div></div>
      <div className="field full"><label>{t.journey}</label><div className="radio-row"><label className="radio-card"><input type="radio" name="journey" checked={journey==='one-way'} onChange={()=>setJourney('one-way')}/>{t.oneWay}</label><label className="radio-card"><input type="radio" name="journey" checked={journey==='round-trip'} onChange={()=>setJourney('round-trip')}/>{t.roundTrip}</label></div></div>
      {journey==='one-way'&&<div className="field full"><label>{t.direction}</label><div className="radio-row"><label className="radio-card"><input type="radio" name="direction" checked={direction==='airport-hotel'} onChange={()=>setDirection('airport-hotel')}/>{t.airportHotel}</label><label className="radio-card"><input type="radio" name="direction" checked={direction==='hotel-airport'} onChange={()=>setDirection('hotel-airport')}/>{t.hotelAirport}</label></div></div>}
      <div className="field full"><label htmlFor={`airport-loc-${compact?'c':'f'}`}>{t.airport}</label><select id={`airport-loc-${compact?'c':'f'}`} value={airport} onChange={e=>setAirport(e.target.value as Airport)}><option value="kayseri">{airportDisplay.kayseri}</option><option value="nevsehir">{airportDisplay.nevsehir}</option></select></div>
      <div className="field full"><label htmlFor={`destination-loc-${compact?'c':'f'}`}>{destinationLabel}</label><select id={`destination-loc-${compact?'c':'f'}`} value={destination} onChange={e=>setDestination(e.target.value as Town|'')} required><option value="">{t.selectTown}</option>{(Object.keys(canonicalTownLabels) as Town[]).map(key=><option key={key} value={key}>{townLabels[key]}</option>)}</select></div>
      <PassengerCounter id={`passengers-loc-${compact?'c':'f'}`} label={t.passengerCount} value={passengers} max={transferType==='private'?(vehicle==='vito'?5:16):16} onChange={setPassengers}/>
      {transferType==='private'&&<div className="field full"><label>{t.privateVehicle}</label><div className="radio-row"><label className="radio-card"><input type="radio" checked={vehicle==='vito'} onChange={()=>setVehicle('vito')}/>Vito · {capacityLabel(5)} · <strong>€{privatePrices[airport].vito}/{t.way}</strong></label><label className="radio-card"><input type="radio" checked={vehicle==='sprinter'} onChange={()=>setVehicle('sprinter')}/>Sprinter · {capacityLabel(16)} · <strong>€{privatePrices[airport].sprinter}/{t.way}</strong></label></div></div>}
      <div className="field"><label>{firstDateLabel}</label><input type="date" min={today} value={firstTransferDate} onChange={e=>setFirstTransferDate(e.target.value)} required/></div><TimeSelect idPrefix={`time-loc-${locale}-${compact?'c':'f'}`} label={firstTimeLabel} value={firstTransferTime} onChange={setFirstTransferTime}/>
      {sameDayBooking&&<div className="field full same-day-warning">⚠️ <span>{t.sameDay} <strong>{t.sameDayStrong}</strong></span></div>}
      <div className="field full"><label>{t.hotel}</label><input value={hotel} onChange={e=>setHotel(e.target.value)} placeholder={destination?`${t.fullHotelIn} ${townLabels[destination]}`:t.fullHotel} required/></div>
      {!expanded&&<div className="field full"><button className="btn booking-continue" type="button" disabled={!firstStageReady} aria-disabled={!firstStageReady} onClick={()=>{if(firstStageReady)setExpanded(true)}}>{t.continue} · €{total}</button><div className="form-note">{firstStageReady?t.expandReady:t.expandMissing}</div></div>}
      {expanded&&<>
        {(isArrivalOnly||journey==='round-trip')&&<div className="field"><label>{t.arrivalFlight}</label><input value={arrivalFlight} onChange={e=>setArrivalFlight(e.target.value)} placeholder={flightExample} required/></div>}
        {isDepartureOnly&&<div className="field"><label>{t.departureFlight}</label><input value={departureFlight} onChange={e=>setDepartureFlight(e.target.value)} placeholder={returnFlightExample} required/></div>}
        {journey==='round-trip'&&<><div className="field"><label>{t.returnDate}</label><input type="date" min={firstTransferDate||today} value={returnTransferDate} onChange={e=>setReturnTransferDate(e.target.value)} required/></div><TimeSelect idPrefix={`return-time-loc-${locale}-${compact?'c':'f'}`} label={t.returnTime} value={returnTransferTime} onChange={setReturnTransferTime}/><div className="field full"><label>{t.returnFlight}</label><input value={returnFlight} onChange={e=>setReturnFlight(e.target.value)} placeholder={returnFlightExample} required/></div></>}
        <div className="field full"><label>{t.whatsapp}</label><input type="tel" value={whatsapp} onChange={e=>setWhatsapp(e.target.value)} placeholder={t.whatsappPlaceholder} autoComplete="tel" required/></div>
        <div className="field full passenger-block"><div className="passenger-heading"><div><strong>{t.passengerInfo}</strong><span>{t.passengerInfoNote}</span></div></div>{people.map((person,index)=><div className="passenger-row" key={index}><div className="field"><label>{t.passenger} {index+1} {t.fullName}</label><input value={person.fullName} onChange={e=>updatePassenger(index,'fullName',e.target.value)} autoComplete={index===0?'name':'off'} required/></div><div className="field"><label>{t.passport}</label><input value={person.passport} onChange={e=>updatePassenger(index,'passport',e.target.value)} autoCapitalize="characters" autoComplete="off" required/></div></div>)}</div>
        <div className="field full"><label>{t.notes}</label><textarea rows={compact?2:3} value={notes} onChange={e=>setNotes(e.target.value)} placeholder={t.notesPlaceholder}/></div>
        <div className="field full booking-summary"><div className="booking-summary-head"><strong>{t.summary}</strong><strong className="summary-total">€{total}</strong></div><dl><div><dt>{t.service}</dt><dd>{transferType==='shuttle'?t.sharedService:privateVehicleLabel(vehicle)}</dd></div><div><dt>{t.journeyLabel}</dt><dd>{journey==='round-trip'?t.roundTripLabel:t.oneWayLabel} · {visibleDirection}</dd></div><div><dt>{t.airport}</dt><dd>{airportDisplay[airport]}</dd></div><div><dt>{destinationLabel}</dt><dd>{destination?townLabels[destination]:'—'}</dd></div><div><dt>{t.hotelLabel}</dt><dd>{hotel||'—'}</dd></div><div><dt>{t.passengers}</dt><dd>{passengers}</dd></div>{people.map((person,index)=><div key={index}><dt>{t.passenger} {index+1}</dt><dd>{person.fullName||'—'} · {t.passport} {maskPassport(person.passport,t)}</dd></div>)}<div><dt>{t.payment}</dt><dd>{t.cashDriver}</dd></div></dl><p className="form-note">{t.currencyNote}</p></div>
        <label className="confirm-row field full"><input type="checkbox" checked={confirmed} onChange={e=>setConfirmed(e.target.checked)} required/><span>{t.confirmStart} <a className="inline-link" href={`${prefix}/service-contract`} target="_blank" rel="noreferrer">{t.contract}</a>{locale==='ko'||locale==='ja'?'':' '}{t.confirmMiddle} <a className="inline-link" href={`${prefix}/privacy-policy`} target="_blank" rel="noreferrer">{t.privacy}</a>{locale==='ko'?'에 따라 처리됨을 이해합니다.':locale==='ja'?'に従って取り扱われることを理解しています。':'.'}</span></label>
        <div className="field full"><button className="btn btn-whatsapp booking-submit" type="submit"><WhatsAppIcon size={20}/>{t.submit}</button><div className="form-note">{t.confirmedOnly}</div>{status&&<div className="form-status" aria-live="polite">{status}</div>}</div>
      </>}
    </div></form><div className="booking-agency-trust">{t.operated} <strong>Ekwo Travel &amp; Outdoor Travel Agency</strong> · TURSAB No: 7896</div>
  </div>;
}

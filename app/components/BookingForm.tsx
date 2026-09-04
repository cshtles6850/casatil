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

const airportLabels: Record<Airport, string> = {
  kayseri: 'Kayseri Airport (ASR)',
  nevsehir: 'Nevsehir Airport (NAV)',
};

const privatePrices: Record<Airport, Record<Vehicle, number>> = {
  kayseri: { vito: 90, sprinter: 110 },
  nevsehir: { vito: 80, sprinter: 90 },
};

function maskPassport(value: string) {
  const clean = value.trim();
  if (!clean) return 'Not entered';
  if (clean.length <= 4) return 'Provided';
  return `••••${clean.slice(-4)}`;
}

export function BookingForm({
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
    ? 'Airport ⇄ Hotel'
    : direction === 'airport-hotel' ? 'Airport → Hotel' : 'Hotel → Airport';

  function updatePassenger(index: number, field: keyof Passenger, value: string) {
    setPeople((current) => current.map((person, i) => i === index ? { ...person, [field]: value } : person));
  }

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!confirmed) return;

    const form = new FormData(e.currentTarget);
    if (String(form.get('companyWebsite') || '').trim()) return; // honeypot

    const passengerPayload = people.map((person, index) => ({
      number: index + 1,
      fullName: person.fullName.trim(),
      passport: person.passport.trim(),
    }));

    const details = {
      transferType,
      journey,
      direction: resolvedDirection,
      airport: airportLabels[airport],
      vehicle: transferType === 'private' ? (vehicle === 'vito' ? 'Mercedes Vito (max 5)' : 'Mercedes Sprinter (max 16)') : 'Shared shuttle',
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
      website: SITE.domain,
      submittedAt: new Date().toISOString(),
    };

    const passengerLines = passengerPayload.flatMap((person) => [
      `Passenger ${person.number}: ${person.fullName || '-'}`,
      `Passport ${person.number}: ${person.passport || '-'}`,
    ]);

    const lines = [
      'Hello, I’m contacting Cappadocia Airport Shuttle (cappadociaairportshuttle.com) to book a transfer.',
      '',
      `Service: ${transferType === 'shuttle' ? 'Shared Airport Shuttle' : 'Private Airport Transfer'}`,
      `Journey: ${journey === 'round-trip' ? 'Round Trip' : 'One Way'}`,
      `Direction: ${resolvedDirection}`,
      `Airport: ${airportLabels[airport]}`,
      transferType === 'private' ? `Vehicle: ${vehicle === 'vito' ? 'Mercedes Vito (max 5)' : 'Mercedes Sprinter (max 16)'}` : '',
      `Passengers: ${passengers}`,
      `Hotel / Area: ${hotel || '-'}`,
      `First transfer date: ${firstTransferDate || '-'}`,
      isArrivalOnly || journey === 'round-trip' ? `Arrival flight: ${arrivalFlight || '-'}` : '',
      isDepartureOnly ? `Departure flight: ${departureFlight || '-'}` : '',
      journey === 'round-trip' ? `Return transfer date: ${returnTransferDate || '-'}` : '',
      journey === 'round-trip' ? `Return flight: ${returnFlight || '-'}` : '',
      `Contact WhatsApp: ${whatsapp || '-'}`,
      ...passengerLines,
      `Estimated total: EUR ${total}`,
      'Payment: Cash to the driver',
      notes ? `Notes: ${notes}` : '',
    ].filter(Boolean);

    const url = `https://wa.me/${SITE.whatsappDigits}?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setStatus('Your request is ready in WhatsApp. Please send the message there to complete the booking request.');

    void fetch('/api/booking', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(details),
      keepalive: true,
    }).then(async (response) => {
      const result = await response.json().catch(() => null) as { email?: string } | null;
      if (result?.email === 'sent') setStatus('Your WhatsApp request is ready and a booking copy was sent to our inbox. Please send the WhatsApp message to complete the request.');
      if (!response.ok || result?.email === 'send-failed') setStatus('Your WhatsApp request is ready. The email copy could not be confirmed, so please complete the request in WhatsApp.');
    }).catch(() => {
      setStatus('Your WhatsApp request is ready. Please complete the request in WhatsApp.');
    });
  }

  return (
    <div className={`booking-card${compact ? ' booking-card-compact' : ''}`}>
      {!compact && (
        <div className="section-head booking-head">
          <div className="kicker">Book your transfer</div>
          <h2>One way or round trip</h2>
          <p>Choose the airport and service, enter flight and passenger details, then review the total before continuing to WhatsApp.</p>
        </div>
      )}

      <form onSubmit={submit}>
        <input className="hp-field" tabIndex={-1} autoComplete="off" name="companyWebsite" aria-hidden="true" />
        <div className="form-grid">
          <div className="field full">
            <label>Transfer service</label>
            <div className="radio-row">
              <label className="radio-card"><input type="radio" name="serviceType" checked={transferType === 'shuttle'} onChange={() => setTransferType('shuttle')} /> Shuttle · €15/person/way</label>
              <label className="radio-card"><input type="radio" name="serviceType" checked={transferType === 'private'} onChange={() => setTransferType('private')} /> Private vehicle</label>
            </div>
          </div>

          <div className="field full">
            <label>Journey</label>
            <div className="radio-row">
              <label className="radio-card"><input type="radio" name="journeyType" checked={journey === 'one-way'} onChange={() => setJourney('one-way')} /> One Way</label>
              <label className="radio-card"><input type="radio" name="journeyType" checked={journey === 'round-trip'} onChange={() => setJourney('round-trip')} /> Round Trip</label>
            </div>
          </div>

          {journey === 'one-way' ? (
            <div className="field full">
              <label>Direction</label>
              <div className="radio-row">
                <label className="radio-card"><input type="radio" name="direction" checked={direction === 'airport-hotel'} onChange={() => setDirection('airport-hotel')} /> Airport → Hotel</label>
                <label className="radio-card"><input type="radio" name="direction" checked={direction === 'hotel-airport'} onChange={() => setDirection('hotel-airport')} /> Hotel → Airport</label>
              </div>
            </div>
          ) : (
            <div className="field full"><div className="journey-note"><strong>Round Trip:</strong> airport → hotel on arrival and hotel → airport for departure.</div></div>
          )}

          <div className="field">
            <label htmlFor={`airport-${compact ? 'compact' : 'full'}`}>Airport</label>
            <select id={`airport-${compact ? 'compact' : 'full'}`} name="airport" value={airport} onChange={(e) => setAirport(e.target.value as Airport)}>
              <option value="kayseri">Kayseri Airport (ASR)</option>
              <option value="nevsehir">Nevsehir Airport (NAV)</option>
            </select>
          </div>

          <div className="field">
            <label htmlFor={`passengers-${compact ? 'compact' : 'full'}`}>Passenger count</label>
            <input id={`passengers-${compact ? 'compact' : 'full'}`} name="passengerCount" type="number" min="1" max={transferType === 'private' ? (vehicle === 'vito' ? 5 : 16) : 16} value={passengers} onChange={(e) => { const max = transferType === 'private' ? (vehicle === 'vito' ? 5 : 16) : 16; setPassengers(Math.min(max, Math.max(1, Number(e.target.value) || 1))); }} required />
          </div>

          {transferType === 'private' && (
            <div className="field full">
              <label>Private vehicle</label>
              <div className="radio-row">
                <label className="radio-card"><input type="radio" name="vehicle" checked={vehicle === 'vito'} onChange={() => setVehicle('vito')} /> Vito · max 5 · <strong>€{privatePrices[airport].vito}/way</strong></label>
                <label className="radio-card"><input type="radio" name="vehicle" checked={vehicle === 'sprinter'} onChange={() => setVehicle('sprinter')} /> Sprinter · max 16 · <strong>€{privatePrices[airport].sprinter}/way</strong></label>
              </div>
            </div>
          )}

          <div className="field full">
            <label htmlFor={`hotel-${compact ? 'compact' : 'full'}`}>Hotel / accommodation</label>
            <input id={`hotel-${compact ? 'compact' : 'full'}`} name="hotel" value={hotel} onChange={(e) => setHotel(e.target.value)} placeholder={initialTown ? `Full hotel name in ${initialTown}` : 'Full hotel name and town'} required />
          </div>

          {!expanded && (
            <div className="field full">
              <button className="btn booking-continue" type="button" onClick={() => setExpanded(true)}>
                Continue with flight & passenger details · €{total}
              </button>
              <div className="form-note">The form expands only when you are ready to add flight, passenger and passport details.</div>
            </div>
          )}

          {expanded && <>
          <div className="field">
            <label htmlFor={`date-${compact ? 'compact' : 'full'}`}>{isDepartureOnly ? 'Departure transfer date' : 'Arrival / first transfer date'}</label>
            <input id={`date-${compact ? 'compact' : 'full'}`} name="firstTransferDate" type="date" value={firstTransferDate} onChange={(e) => setFirstTransferDate(e.target.value)} required />
          </div>

          {(isArrivalOnly || journey === 'round-trip') && (
            <div className="field">
              <label htmlFor={`arrival-flight-${compact ? 'compact' : 'full'}`}>Arrival flight code</label>
              <input id={`arrival-flight-${compact ? 'compact' : 'full'}`} name="arrivalFlight" value={arrivalFlight} onChange={(e) => setArrivalFlight(e.target.value)} placeholder="e.g. TK2010" required />
            </div>
          )}

          {isDepartureOnly && (
            <div className="field">
              <label htmlFor={`departure-flight-${compact ? 'compact' : 'full'}`}>Departure flight code</label>
              <input id={`departure-flight-${compact ? 'compact' : 'full'}`} name="departureFlight" value={departureFlight} onChange={(e) => setDepartureFlight(e.target.value)} placeholder="e.g. TK2011" required />
            </div>
          )}

          {journey === 'round-trip' && (
            <>
              <div className="field">
                <label htmlFor={`return-date-${compact ? 'compact' : 'full'}`}>Return transfer date</label>
                <input id={`return-date-${compact ? 'compact' : 'full'}`} name="returnTransferDate" type="date" value={returnTransferDate} onChange={(e) => setReturnTransferDate(e.target.value)} required />
              </div>
              <div className="field">
                <label htmlFor={`return-flight-${compact ? 'compact' : 'full'}`}>Return / departure flight code</label>
                <input id={`return-flight-${compact ? 'compact' : 'full'}`} name="returnFlight" value={returnFlight} onChange={(e) => setReturnFlight(e.target.value)} placeholder="e.g. TK2011" required />
              </div>
            </>
          )}

          <div className="field full">
            <label htmlFor={`whatsapp-${compact ? 'compact' : 'full'}`}>Contact WhatsApp number</label>
            <input id={`whatsapp-${compact ? 'compact' : 'full'}`} name="whatsapp" type="tel" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} placeholder="Include country code, e.g. +44..." autoComplete="tel" required />
          </div>

          <div className="field full passenger-block">
            <div className="passenger-heading">
              <div><strong>Passenger information</strong><span>Names and passport numbers are used for reservation and transfer operation.</span></div>
            </div>
            {people.map((person, index) => (
              <div className="passenger-row" key={index}>
                <div className="field">
                  <label htmlFor={`person-name-${compact ? 'c' : 'f'}-${index}`}>Passenger {index + 1} full name</label>
                  <input id={`person-name-${compact ? 'c' : 'f'}-${index}`} value={person.fullName} onChange={(e) => updatePassenger(index, 'fullName', e.target.value)} autoComplete={index === 0 ? 'name' : 'off'} required />
                </div>
                <div className="field">
                  <label htmlFor={`passport-${compact ? 'c' : 'f'}-${index}`}>Passport number</label>
                  <input id={`passport-${compact ? 'c' : 'f'}-${index}`} value={person.passport} onChange={(e) => updatePassenger(index, 'passport', e.target.value)} autoCapitalize="characters" autoComplete="off" required />
                </div>
              </div>
            ))}
          </div>

          <div className="field full">
            <label htmlFor={`notes-${compact ? 'compact' : 'full'}`}>Notes (optional)</label>
            <textarea id={`notes-${compact ? 'compact' : 'full'}`} name="notes" rows={compact ? 2 : 3} value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Luggage, child seat request, access note or anything we should know" />
          </div>

          <div className="field full booking-summary">
            <div className="booking-summary-head"><strong>Booking summary</strong><strong className="summary-total">€{total}</strong></div>
            <dl>
              <div><dt>Service</dt><dd>{transferType === 'shuttle' ? 'Shared Airport Shuttle' : vehicle === 'vito' ? 'Private Mercedes Vito' : 'Private Mercedes Sprinter'}</dd></div>
              <div><dt>Journey</dt><dd>{journey === 'round-trip' ? 'Round Trip' : 'One Way'} · {resolvedDirection}</dd></div>
              <div><dt>Airport</dt><dd>{airportLabels[airport]}</dd></div>
              <div><dt>Hotel</dt><dd>{hotel || '—'}</dd></div>
              <div><dt>Passengers</dt><dd>{passengers}</dd></div>
              {people.map((person, index) => <div key={index}><dt>Passenger {index + 1}</dt><dd>{person.fullName || '—'} · Passport {maskPassport(person.passport)}</dd></div>)}
              <div><dt>Payment</dt><dd>Cash to the driver</dd></div>
            </dl>
            <p className="form-note">Prices are shown in EUR. Cash payment can also be arranged in USD or TRY using the current exchange rate confirmed for the booking.</p>
          </div>

          <label className="confirm-row field full">
            <input type="checkbox" checked={confirmed} onChange={(e) => setConfirmed(e.target.checked)} required />
            <span>I confirm that my booking request details are correct, accept the <a className="inline-link" href="/service-contract" target="_blank" rel="noreferrer">Service Contract</a>, and understand that required passenger information is handled as described in the <a className="inline-link" href="/privacy-policy" target="_blank" rel="noreferrer">Privacy Policy</a>.</span>
          </label>

          <div className="field full">
            <button className="btn btn-whatsapp booking-submit" type="submit"><WhatsAppIcon size={20} /> Submit & Continue on WhatsApp</button>
            <div className="form-note">Your booking is confirmed only after confirmation on WhatsApp. Shared shuttle coverage includes Goreme, Urgup, Uchisar, Avanos, Cavusin and Ortahisar; Mustafapasa requires a private transfer request.</div>
            {status && <div className="form-status" aria-live="polite">{status}</div>}
          </div>
          </>}
        </div>
      </form>
      <div className="booking-agency-trust">Operated by <strong>Ekwo Travel &amp; Outdoor Travel Agency</strong> · TURSAB No: 7896</div>
    </div>
  );
}

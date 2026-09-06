'use client';

const HOURS = Array.from({ length: 24 }, (_, index) => String(index).padStart(2, '0'));
const MINUTES = Array.from({ length: 60 }, (_, index) => String(index).padStart(2, '0'));

export function isValidTime(value: string) {
  return /^(?:[01]\d|2[0-3]):[0-5]\d$/.test(value);
}

export function TimeSelect({
  idPrefix,
  label,
  value,
  onChange,
}: {
  idPrefix: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  const [hour = '', minute = ''] = value.split(':');

  function update(nextHour: string, nextMinute: string) {
    if (!nextHour && !nextMinute) {
      onChange('');
      return;
    }
    onChange(`${nextHour}:${nextMinute}`);
  }

  return (
    <div className="field">
      <label htmlFor={`${idPrefix}-hour`}>{label}</label>
      <div className="time-select-row">
        <select
          id={`${idPrefix}-hour`}
          value={hour}
          onChange={(event) => update(event.target.value, minute)}
          aria-label={`${label} HH`}
          required
        >
          <option value="">HH</option>
          {HOURS.map((item) => <option key={item} value={item}>{item}</option>)}
        </select>
        <span className="time-select-separator" aria-hidden="true">:</span>
        <select
          id={`${idPrefix}-minute`}
          value={minute}
          onChange={(event) => update(hour, event.target.value)}
          aria-label={`${label} MM`}
          required
        >
          <option value="">MM</option>
          {MINUTES.map((item) => <option key={item} value={item}>{item}</option>)}
        </select>
      </div>
    </div>
  );
}

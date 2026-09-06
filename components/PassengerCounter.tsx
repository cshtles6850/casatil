'use client';

export function PassengerCounter({
  id,
  label,
  value,
  max,
  onChange,
}: {
  id: string;
  label: string;
  value: number;
  max: number;
  onChange: (value: number) => void;
}) {
  return (
    <div className="field full">
      <label id={`${id}-label`}>{label}</label>
      <div className="passenger-counter" role="group" aria-labelledby={`${id}-label`}>
        <button type="button" onClick={() => onChange(Math.max(1, value - 1))} disabled={value <= 1} aria-label={`${label} -`}>−</button>
        <output id={id} aria-live="polite">{value}</output>
        <button type="button" onClick={() => onChange(Math.min(max, value + 1))} disabled={value >= max} aria-label={`${label} +`}>+</button>
        <input type="hidden" name="passengerCount" value={value} />
      </div>
    </div>
  );
}

'use client';

type Props = {
  id: string;
  name: string;
  min?: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  ariaLabel?: string;
};

function formatNumericDate(value: string) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!match) return '';
  return `${match[3]}/${match[2]}/${match[1]}`;
}

export function NumericDateInput({ id, name, min, value, onChange, required = false, ariaLabel }: Props) {
  const displayValue = formatNumericDate(value);

  return (
    <div className="numeric-date-input">
      <span className={`numeric-date-display${displayValue ? '' : ' is-placeholder'}`} aria-hidden="true">
        {displayValue || 'DD/MM/YYYY'}
      </span>
      <input
        className="numeric-date-native"
        id={id}
        name={name}
        type="date"
        min={min}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        required={required}
        aria-label={ariaLabel}
      />
    </div>
  );
}

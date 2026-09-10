'use client';

import { useRef } from 'react';

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
  const inputRef = useRef<HTMLInputElement>(null);

  const openPicker = () => {
    const input = inputRef.current;
    if (!input) return;

    input.focus({ preventScroll: true });
    try {
      if (typeof input.showPicker === 'function') input.showPicker();
    } catch {
      // The native input remains clickable as a fallback on browsers that
      // restrict showPicker() despite a direct user gesture.
    }
  };

  return (
    <div className="numeric-date-input" onClick={openPicker}>
      <span className={`numeric-date-display${displayValue ? '' : ' is-placeholder'}`} aria-hidden="true">
        {displayValue || 'DD/MM/YYYY'}
      </span>
      <input
        ref={inputRef}
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

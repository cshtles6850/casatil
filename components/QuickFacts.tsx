import type { ReactNode } from 'react';

export type QuickFactItem = {
  label: ReactNode;
  value: ReactNode;
};

type QuickFactsProps = {
  items: QuickFactItem[];
  ariaLabel?: string;
  className?: string;
};

export function QuickFacts({ items, ariaLabel = 'Quick facts', className = '' }: QuickFactsProps) {
  if (!items.length) return null;

  return <div className={`quick-facts${className ? ` ${className}` : ''}`} aria-label={ariaLabel}>
    {items.map((item, index) => <div className="quick-fact-card" key={`${index}-${String(item.label)}`}>
      <span>{item.label}</span>
      <strong>{item.value}</strong>
    </div>)}
  </div>;
}

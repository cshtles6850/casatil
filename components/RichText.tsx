import Link from 'next/link';
import { Fragment, type ReactNode } from 'react';

// Lightweight authoring syntax used by the SEO content data:
// [[anchor text|slug-or-url]], **strong**, *emphasis*.
export function RichText({ text, prefix = '' }: { text: string; prefix?: string }) {
  const parts: ReactNode[] = [];
  const token = /(\[\[[^\]]+\]\]|\*\*[^*]+\*\*|\*[^*]+\*)/g;
  let cursor = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = token.exec(text))) {
    if (match.index > cursor) parts.push(text.slice(cursor, match.index));
    const value = match[0];

    if (value.startsWith('[[')) {
      const inner = value.slice(2, -2);
      const divider = inner.lastIndexOf('|');
      if (divider > 0) {
        const label = inner.slice(0, divider);
        const target = inner.slice(divider + 1);
        const href = target.startsWith('http') || target.startsWith('/') ? target : `${prefix}/${target}`;
        parts.push(<Link key={`r-${key++}`} href={href}>{label}</Link>);
      } else {
        parts.push(inner);
      }
    } else if (value.startsWith('**')) {
      parts.push(<strong key={`r-${key++}`}>{value.slice(2, -2)}</strong>);
    } else {
      parts.push(<em key={`r-${key++}`}>{value.slice(1, -1)}</em>);
    }
    cursor = match.index + value.length;
  }

  if (cursor < text.length) parts.push(text.slice(cursor));
  return <Fragment>{parts}</Fragment>;
}

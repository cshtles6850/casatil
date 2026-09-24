export function hasExplicitCountryCode(value: string): boolean {
  const trimmed = value.trim();
  if (!trimmed) return false;
  return /^\+\s*[\d(]/.test(trimmed) || /^00\s*\d/.test(trimmed);
}

export function phoneDigits(value: string): string {
  return value.replace(/\D/g, '').replace(/^00/, '');
}

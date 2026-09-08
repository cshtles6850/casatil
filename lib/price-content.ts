import {
  formatEuro,
  lowestShuttlePrice,
  privateOneWayPrice,
  roundTripPrice,
  sharedShuttlePriceRange,
  shuttleOneWayPrice,
  type AirportPriceKey,
  type PrivateVehicleKey,
} from './prices';

// Authoring tokens keep numeric fares out of language/content files while
// resolving to the current central price data during build/server rendering.
// Examples:
//   {{PRICE:kayseri:shuttle}}
//   {{PRICE:nevsehir:vito:roundTrip}}
//   {{PRICE:shared:shuttle}}
//   {{PRICE:min:shuttle}}
//   {{PRICE:nevsehir:shuttle:x5}}
const PRICE_TOKEN = /\{\{PRICE:(kayseri|nevsehir|shared|min):(shuttle|vito|sprinter)(?::(roundTrip|x\d+))?\}\}/g;

function oneWayValue(scope: string, service: string): number | null {
  if (scope === 'min' && service === 'shuttle') return lowestShuttlePrice(false);
  if (scope === 'shared' && service === 'shuttle') return null;
  if (scope !== 'kayseri' && scope !== 'nevsehir') return null;

  const airport = scope as AirportPriceKey;
  if (service === 'shuttle') return shuttleOneWayPrice(airport);
  return privateOneWayPrice(airport, service as PrivateVehicleKey);
}

export function resolvePriceTokens(text: string) {
  return text.replace(PRICE_TOKEN, (_token, scope: string, service: string, modifier?: string) => {
    if (scope === 'shared' && service === 'shuttle') {
      if (!modifier) return sharedShuttlePriceRange(false);
      if (modifier === 'roundTrip') return sharedShuttlePriceRange(true);
      if (modifier.startsWith('x')) {
        const factor = Number(modifier.slice(1));
        const kayseri = shuttleOneWayPrice('kayseri') * factor;
        const nevsehir = shuttleOneWayPrice('nevsehir') * factor;
        const min = Math.min(kayseri, nevsehir);
        const max = Math.max(kayseri, nevsehir);
        return min === max ? formatEuro(min) : `€${min}–€${max}`;
      }
    }

    const base = oneWayValue(scope, service);
    if (base == null) return _token;
    if (!modifier) return formatEuro(base);
    if (modifier === 'roundTrip') return formatEuro(roundTripPrice(base));
    if (modifier.startsWith('x')) return formatEuro(base * Number(modifier.slice(1)));
    return formatEuro(base);
  });
}

export function resolvePriceTokensDeep<T>(value: T): T {
  if (typeof value === 'string') return resolvePriceTokens(value) as T;
  if (Array.isArray(value)) return value.map((item) => resolvePriceTokensDeep(item)) as T;
  if (value && typeof value === 'object') {
    const resolved = Object.fromEntries(
      Object.entries(value as Record<string, unknown>).map(([key, item]) => [key, resolvePriceTokensDeep(item)]),
    );
    return resolved as T;
  }
  return value;
}

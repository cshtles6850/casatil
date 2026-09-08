export type AirportPriceKey = 'kayseri' | 'nevsehir';
export type PrivateVehicleKey = 'vito' | 'sprinter';

/**
 * Single source of truth for transfer prices.
 * Store ONE-WAY prices only. Round trips are always calculated as oneWay * 2.
 */
export const PRICES = {
  kayseri: {
    shuttle: { oneWayPerPerson: 15 },
    private: {
      vito: { oneWayPerVehicle: 90 },
      sprinter: { oneWayPerVehicle: 110 },
    },
  },
  nevsehir: {
    shuttle: { oneWayPerPerson: 10 },
    private: {
      vito: { oneWayPerVehicle: 80 },
      sprinter: { oneWayPerVehicle: 90 },
    },
  },
} as const;

export function roundTripPrice(oneWayPrice: number) {
  return oneWayPrice * 2;
}

export function shuttleOneWayPrice(airport: AirportPriceKey) {
  return PRICES[airport].shuttle.oneWayPerPerson;
}

export function privateOneWayPrice(airport: AirportPriceKey, vehicle: PrivateVehicleKey) {
  return PRICES[airport].private[vehicle].oneWayPerVehicle;
}

export function shuttleTotal(
  airport: AirportPriceKey,
  passengers: number,
  roundTrip = false,
) {
  const oneWayTotal = shuttleOneWayPrice(airport) * passengers;
  return roundTrip ? roundTripPrice(oneWayTotal) : oneWayTotal;
}

export function privateTotal(
  airport: AirportPriceKey,
  vehicle: PrivateVehicleKey,
  roundTrip = false,
) {
  const oneWayTotal = privateOneWayPrice(airport, vehicle);
  return roundTrip ? roundTripPrice(oneWayTotal) : oneWayTotal;
}

export function formatEuro(value: number) {
  return `€${value}`;
}

export function sharedShuttlePriceRange(roundTrip = false) {
  const values = (['kayseri', 'nevsehir'] as const).map((airport) => {
    const oneWay = shuttleOneWayPrice(airport);
    return roundTrip ? roundTripPrice(oneWay) : oneWay;
  });
  const min = Math.min(...values);
  const max = Math.max(...values);
  return min === max ? formatEuro(min) : `€${min}–€${max}`;
}

export function lowestShuttlePrice(roundTrip = false) {
  const oneWay = Math.min(
    shuttleOneWayPrice('kayseri'),
    shuttleOneWayPrice('nevsehir'),
  );
  return roundTrip ? roundTripPrice(oneWay) : oneWay;
}

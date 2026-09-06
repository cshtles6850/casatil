import { towns } from './site';

export type ContentSection = { heading: string; paragraphs: string[]; bullets?: string[] };
export type FaqItem = { q: string; a: string };
export type SeoPage = {
  slug: string; title: string; description: string;
  twitterTitle?: string; twitterDescription?: string;
  eyebrow: string; h1: string; lead: string; sections: ContentSection[]; faq: FaqItem[]; related: string[];
  route?: { airport: 'kayseri' | 'nevsehir'; town: keyof typeof towns; direction: 'arrival' | 'return' };
};

export const pages: SeoPage[] = [
  {
    "slug": "cappadocia-shuttle-transfer",
    "title": "Cappadocia Shuttle Transfer | Shared Airport Shuttle",
    "description": "Book Cappadocia shuttle transfer from Kayseri (ASR) or Nevsehir (NAV) to Goreme, Urgup & more. Shared airport shuttle with WhatsApp booking.",
    "eyebrow": "Shared Airport Shuttle",
    "h1": "Cappadocia Shuttle Transfer",
    "lead": "Cappadocia shuttle transfer is the shared airport shuttle connecting Kayseri Airport (ASR) and Nevsehir Airport (NAV) with hotels in Goreme, Urgup, Uchisar, Avanos, Cavusin, and Ortahisar. The fare is €15 per person each way, with pickup and drop-off scheduled around your flight.",
    "sections": [
      {
        "heading": "What's Included",
        "paragraphs": [
          "The service covers a shared ride from either airport to your accommodation, with your flight, passenger details, and hotel name confirmed in advance. Other confirmed passengers and hotel stops may be part of the same run, which is what keeps the fare at €15 per person."
        ]
      },
      {
        "heading": "Kayseri or Nevsehir Airport",
        "paragraphs": [
          "Which route you need depends on your airport. Flying into ASR? Use [[Kayseri Airport Shuttle|kayseri-airport-shuttle]]. Flying into NAV? Use [[Nevsehir Airport Shuttle|nevsehir-airport-shuttle]] instead — each page has the exact distance and timing for your hotel town."
        ]
      },
      {
        "heading": "Shared vs Private: Which One Do You Need",
        "paragraphs": [
          "The shuttle shares the vehicle with other confirmed passengers and hotel stops. If you'd rather travel without other passengers or unrelated hotel drops, compare [[private airport transfer|private-airport-transfer-cappadocia]] instead."
        ]
      },
      {
        "heading": "One Way, Round Trip, or Hotel Pickup",
        "paragraphs": [
          "Book Airport → Hotel, Hotel → Airport, or both as a round trip. Enter your flight number and full accommodation name so the correct airport meeting point or hotel pickup can be confirmed."
        ]
      }
    ],
    "faq": [
      {
        "q": "How much is the shared Cappadocia shuttle transfer?",
        "a": "€15 per person one way from either ASR or NAV to supported hotel areas."
      },
      {
        "q": "Which airports are covered?",
        "a": "Kayseri Airport (ASR) and Nevsehir Airport (NAV)."
      },
      {
        "q": "Which Cappadocia areas are served?",
        "a": "Goreme, Urgup, Uchisar, Avanos, Cavusin, and Ortahisar."
      },
      {
        "q": "Can I book the hotel-to-airport direction too?",
        "a": "Yes. Choose Hotel → Airport or Round Trip."
      },
      {
        "q": "Is private transfer also available?",
        "a": "Yes. Vito and Sprinter private vehicles use airport-specific fixed prices."
      }
    ],
    "related": [
      "kayseri-airport-shuttle",
      "nevsehir-airport-shuttle",
      "private-airport-transfer-cappadocia",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Cappadocia Shuttle Transfer | Shared Airport Shuttle",
    "twitterDescription": "Shared airport shuttle from Kayseri (ASR) and Nevsehir (NAV) to Goreme, Urgup, Uchisar, Avanos, Cavusin and Ortahisar."
  },
  {
    "slug": "cappadocia-airport-transfer",
    "title": "Cappadocia Airport Transfer | Kayseri & Nevsehir",
    "description": "Cappadocia airport transfer from Kayseri (ASR) & Nevsehir (NAV): €15 shuttle or private Vito/Sprinter. Hotel pickup & drop-off. Book on WhatsApp.",
    "eyebrow": "Airport Transfer Service",
    "h1": "Cappadocia Airport Transfer",
    "lead": "A Cappadocia airport transfer can involve different routes depending on your arrival airport, hotel town, and direction of travel. Start with your airport, then your hotel town, and the rest follows.",
    "sections": [
      {
        "heading": "Choose Your Airport First",
        "paragraphs": [
          "Two airports serve Cappadocia: [[Kayseri Airport (ASR)|kayseri-airport-shuttle]] and [[Nevsehir Airport (NAV)|nevsehir-airport-shuttle]]. NAV sits closer by road to most central hotel towns, while ASR may have a flight schedule that suits your trip better. If you're not sure which one to fly into, [[Nearest Airport to Cappadocia|nearest-airport-to-cappadocia]] and [[Kayseri or Nevsehir Airport|kayseri-or-nevsehir-airport-for-cappadocia]] walk through the trade-offs before you book your flight."
        ]
      },
      {
        "heading": "Shared Shuttle or Private Transfer",
        "paragraphs": [
          "The shared [[shuttle|cappadocia-shuttle-transfer]] is €15 per person each way from either airport, pre-booked and confirmed on WhatsApp — other passengers and hotel stops may be part of the same run. For a dedicated vehicle, [[private transfer|private-airport-transfer-cappadocia]] uses a Vito (up to 5 passengers) or Sprinter (up to 16), priced per vehicle rather than per person, with Kayseri and Nevsehir priced separately. If you're weighing the two, the full [[shared shuttle vs private transfer|cappadocia-shared-shuttle-vs-private-transfer]] comparison breaks down price, coverage, and timing side by side."
        ]
      },
      {
        "heading": "Booking Details We Need",
        "paragraphs": [
          "Every booking needs passenger names, passport numbers, your flight number, and your full accommodation name. Some [[cave hotels and old-village properties|cappadocia-cave-hotel-airport-transfer]] are on lanes that vehicles cannot access, so pickup or drop-off may be arranged at the nearest practical point."
        ]
      },
      {
        "heading": "Flying In and Out Through Different Airports",
        "paragraphs": [
          "Some trips arrive through NAV and leave through ASR, or the other way around — that's not a standard same-airport round trip, since each direction has its own route and private-transfer price. Send both flights on WhatsApp so each leg gets confirmed against the correct airport, rather than assuming one flat price covers both directions."
        ]
      },
      {
        "heading": "Group Size and Vehicle Capacity",
        "paragraphs": [
          "A Vito carries up to 5 passengers, a Sprinter up to 16. Private prices are per vehicle, so a larger group often costs less per person on a Sprinter than on the shuttle — worth checking both before you book, especially from Nevsehir where private pricing is lowest."
        ]
      },
      {
        "heading": "Browse Routes by Town",
        "paragraphs": [
          "Already know your hotel town? Jump straight to the exact route for your airport:"
        ],
        "bullets": [
          "**Goreme** — [[from Kayseri|kayseri-airport-to-goreme-shuttle]] · [[from Nevsehir|nevsehir-airport-to-goreme-shuttle]]",
          "**Urgup** — [[from Kayseri|kayseri-airport-to-urgup-shuttle]] · [[from Nevsehir|nevsehir-airport-to-urgup-shuttle]]",
          "**Uchisar** — [[from Kayseri|kayseri-airport-to-uchisar-shuttle]] · [[from Nevsehir|nevsehir-airport-to-uchisar-shuttle]]",
          "**Avanos** — [[from Kayseri|kayseri-airport-to-avanos-shuttle]] · [[from Nevsehir|nevsehir-airport-to-avanos-shuttle]]",
          "**Cavusin** — [[from Kayseri|kayseri-airport-to-cavusin-shuttle]] · [[from Nevsehir|nevsehir-airport-to-cavusin-shuttle]]",
          "**Ortahisar** — [[from Kayseri|kayseri-airport-to-ortahisar-shuttle]] · [[from Nevsehir|nevsehir-airport-to-ortahisar-shuttle]]"
        ]
      }
    ],
    "faq": [
      {
        "q": "Which airports serve Cappadocia?",
        "a": "Kayseri Airport (ASR) and Nevsehir Airport (NAV)."
      },
      {
        "q": "Can I fly into one airport and out through the other?",
        "a": "Yes. Send both flights on WhatsApp so each direction is confirmed separately, since the route and price differ by airport."
      },
      {
        "q": "Which airport is closer to my hotel — Kayseri or Nevsehir?",
        "a": "It depends on your hotel town; NAV is closer to most central areas. See [[Kayseri or Nevsehir Airport|kayseri-or-nevsehir-airport-for-cappadocia]] for a full comparison."
      },
      {
        "q": "Is hotel pickup included for departure?",
        "a": "Yes, subject to booking confirmation and practical vehicle access."
      },
      {
        "q": "Which Cappadocia areas are served?",
        "a": "Goreme, Urgup, Uchisar, Avanos, Cavusin, and Ortahisar."
      },
      {
        "q": "What passenger information is required?",
        "a": "Passenger names, passport numbers, flight information, hotel name, and a WhatsApp contact."
      }
    ],
    "related": [
      "cappadocia-airport",
      "kayseri-airport-shuttle",
      "nevsehir-airport-shuttle",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Cappadocia Airport Transfer | Kayseri & Nevsehir",
    "twitterDescription": "Shared shuttle or private transfer from Kayseri (ASR) and Nevsehir (NAV) to Goreme, Urgup, Uchisar, Avanos, Cavusin and Ortahisar."
  },
  {
    "slug": "private-airport-transfer-cappadocia",
    "title": "Cappadocia Private Airport Transfer | Vito & Sprinter",
    "description": "Private Cappadocia airport transfer: Kayseri Vito €90 / Sprinter €110, Nevsehir Vito €80 / Sprinter €90. Up to 5 or 16 passengers, cash to driver.",
    "eyebrow": "Dedicated vehicle",
    "h1": "Cappadocia Private Airport Transfer",
    "lead": "Kayseri Airport: **Vito €90**, **Sprinter €110** one way. Nevsehir Airport: **Vito €80**, **Sprinter €90**. These are per vehicle, not per passenger. Round trip is €180/€220 from Kayseri and €160/€180 from Nevsehir.",
    "sections": [
      {
        "heading": "Mercedes Vito: up to 5 passengers",
        "paragraphs": [
          "The Vito suits couples, families and small groups that want a dedicated vehicle and no unrelated hotel stops, with more control over departure time than a shared shuttle. It's the smaller private option for airport pickup, [[cave-hotel access|cappadocia-cave-hotel-airport-transfer]], and direct hotel-to-airport departures."
        ]
      },
      {
        "heading": "Mercedes Sprinter: up to 16 passengers",
        "paragraphs": [
          "Sprinter is the larger private option for groups up to 16. The price changes by airport — €110 from Kayseri and €90 from Nevsehir, one way — so double-check the total once you select ASR or NAV in the booking form."
        ]
      },
      {
        "heading": "When Private Makes More Sense Than Shuttle",
        "paragraphs": [
          "Private transfer suits larger groups, early departures, late arrivals, families with more luggage, travelers who want a direct hotel route, or accommodation outside the shared-shuttle area. For one or two flexible travelers, the [[€15 shuttle|cappadocia-shuttle-transfer]] is often better value."
        ]
      },
      {
        "heading": "Payment and Passenger Information",
        "paragraphs": [
          "Payment is made in cash to the driver. The booking still collects the flight number, accommodation, passenger names, passport numbers and WhatsApp contact — these are required to confirm the transfer."
        ]
      },
      {
        "heading": "Group Size, Luggage and Hotel Access",
        "paragraphs": [
          "Passenger capacity is the upper limit, not a guarantee that every combination of passengers and oversized luggage fits identically — note any unusually large baggage or child-equipment needs in the booking. A dedicated vehicle skips stops for other passengers, but old streets don't get wider because the service is private: the driver still uses the safest practical stopping point for the vehicle and hotel location."
        ]
      }
    ],
    "faq": [
      {
        "q": "How much is Kayseri private Vito?",
        "a": "€90 one way per vehicle, up to 5 passengers."
      },
      {
        "q": "How much is Nevsehir private Vito?",
        "a": "€80 one way per vehicle, up to 5 passengers."
      },
      {
        "q": "How much is Kayseri Sprinter?",
        "a": "€110 one way per vehicle, up to 16 passengers."
      },
      {
        "q": "How much is Nevsehir Sprinter?",
        "a": "€90 one way per vehicle, up to 16 passengers."
      },
      {
        "q": "How much is round trip?",
        "a": "Exactly double the one-way price."
      },
      {
        "q": "Is private transfer door to door?",
        "a": "The vehicle is dedicated to your booking, but historic hotel access still depends on whether the street can safely accommodate the vehicle."
      },
      {
        "q": "Do you need passport numbers for private transfer?",
        "a": "Yes, passenger passport details are required for every reservation."
      },
      {
        "q": "How do I pay for a private transfer?",
        "a": "Cash to the driver."
      }
    ],
    "related": [
      "airport-transfer-prices",
      "kayseri-airport-shuttle",
      "nevsehir-airport-shuttle"
    ],
    "twitterTitle": "Cappadocia Private Airport Transfer | Vito & Sprinter",
    "twitterDescription": "Private Cappadocia airport transfer with Mercedes Vito or Sprinter, Kayseri and Nevsehir fixed prices, cash to driver."
  },
  {
    "slug": "airport-transfer-prices",
    "title": "Cappadocia Airport Transfer Prices | Shuttle, Vito & Sprinter",
    "description": "Cappadocia transfer prices: shuttle €15/person/way. Kayseri Vito €90, Sprinter €110. Nevsehir Vito €80, Sprinter €90. Round trip double.",
    "twitterTitle": "Cappadocia Airport Transfer Prices | Shuttle, Vito & Sprinter",
    "twitterDescription": "Shuttle €15/person. Kayseri Vito €90, Sprinter €110. Nevsehir Vito €80, Sprinter €90. Round trip exactly double.",
    "eyebrow": "Clear price matrix",
    "h1": "Cappadocia Airport Transfer Prices",
    "lead": "Shuttle is €15 per person per way from both airports. Private prices are per vehicle and change between Kayseri and Nevsehir.",
    "sections": [
      {
        "heading": "Shared Shuttle Price",
        "paragraphs": [
          "Kayseri Airport (ASR) → supported Cappadocia hotels: **€15 per person one way**. Nevsehir Airport (NAV) → supported hotels: **€15 per person one way**. Hotel-to-airport is the same price. Round trip is €30 per person. Full route details are on the [[shuttle page|cappadocia-shuttle-transfer]]."
        ]
      },
      {
        "heading": "Kayseri Airport Private Prices",
        "paragraphs": [
          "Mercedes Vito, max 5 passengers: **€90 one way / €180 round trip**. Mercedes Sprinter, max 16 passengers: **€110 one way / €220 round trip**."
        ]
      },
      {
        "heading": "Nevsehir Airport Private Prices",
        "paragraphs": [
          "Mercedes Vito, max 5 passengers: **€80 one way / €160 round trip**. Mercedes Sprinter, max 16 passengers: **€90 one way / €180 round trip**. See the [[private transfer page|private-airport-transfer-cappadocia]] for vehicle details and when private makes more sense than shuttle."
        ]
      },
      {
        "heading": "Per Person vs Per Vehicle",
        "paragraphs": [
          "The shuttle total increases with passenger count because it's priced per person. Private transfer is priced per vehicle rather than per passenger, as long as the group fits the selected vehicle — Vito up to 5, Sprinter up to 16 — which is why Sprinter can beat the shuttle for a larger group even though its single-vehicle price looks higher at first glance. Private prices also aren't one flat number: selecting NAV brings Vito to €80 and Sprinter to €90, while ASR brings them to €90 and €110, so check the total again after picking the airport."
        ]
      },
      {
        "heading": "Example Totals by Group Size",
        "paragraphs": [
          "Two people on a one-way shuttle pay €30 total. Five people pay €75. Six people pay €90 total on a one-way shuttle — the same as the Nevsehir Sprinter one-way price. Kayseri Vito also costs €90, but its maximum is 5 passengers, so it isn't a six-person option. Group size and vehicle capacity have to be compared together, not by headline price alone."
        ]
      },
      {
        "heading": "Payment, Currency and Booking Details",
        "paragraphs": [
          "Prices are published in EUR and payment is made in cash to the driver; USD or TRY cash is also possible using the exchange rate confirmed for the booking. Round trip is simply two one-way journeys at the published rate — no separate package price. The booking still needs flight number, hotel, passenger names and passport numbers, and is confirmed once these reservation details are checked on WhatsApp — this matters especially for unusual hotel access, mixed-airport itineraries, or requests outside the standard shared-shuttle coverage."
        ]
      }
    ],
    "faq": [
      {
        "q": "How much is Cappadocia airport shuttle?",
        "a": "€15 per person each way from both Kayseri and Nevsehir airports."
      },
      {
        "q": "How much is shuttle round trip?",
        "a": "€30 per person."
      },
      {
        "q": "How much is Kayseri Airport Vito?",
        "a": "€90 one way; €180 round trip."
      },
      {
        "q": "How much is Kayseri Airport Sprinter?",
        "a": "€110 one way; €220 round trip."
      },
      {
        "q": "How much is Nevsehir Airport Vito?",
        "a": "€80 one way; €160 round trip."
      },
      {
        "q": "How much is Nevsehir Airport Sprinter?",
        "a": "€90 one way; €180 round trip."
      },
      {
        "q": "Are private prices per person?",
        "a": "No, they are per vehicle within the stated capacity."
      },
      {
        "q": "Does the price change between Goreme and Urgup?",
        "a": "The published airport-based private price is the same for the supported central service towns."
      },
      {
        "q": "Can I pay USD or TRY?",
        "a": "Cash payment can be arranged in USD or TRY using the current exchange rate confirmed for the booking."
      },
      {
        "q": "Are passport numbers required even though payment is cash?",
        "a": "Yes, passport information is required for every reservation, independently of the payment method."
      },
      {
        "q": "Does round trip get a discount?",
        "a": "No separate round-trip discount is stated; round trip is exactly double the one-way price."
      },
      {
        "q": "When is the booking confirmed?",
        "a": "After the reservation details are confirmed on WhatsApp."
      }
    ],
    "related": [
      "private-airport-transfer-cappadocia",
      "kayseri-airport-shuttle",
      "nevsehir-airport-shuttle"
    ]
  },
  {
    "slug": "kayseri-airport-shuttle",
    "title": "Kayseri Airport Shuttle to Cappadocia | Airport & Hotel Service",
    "description": "Kayseri Airport (ASR) shuttle to Cappadocia hotels: €15 per person, cash to driver, Goreme, Urgup, Uchisar, Avanos, Cavusin and Ortahisar.",
    "eyebrow": "ASR shuttle service",
    "h1": "Kayseri Airport Shuttle to Cappadocia",
    "lead": "Book the €15 per person shared shuttle from Kayseri Erkilet Airport to supported Cappadocia accommodation, with flight-based meeting details confirmed on WhatsApp.",
    "sections": [
      {
        "heading": "Kayseri Airport shuttle: the longer road gateway to Cappadocia",
        "paragraphs": [
          "ASR sits farther from the central hotel towns than NAV, so travelers should judge the service by the real hotel destination rather than a single “Cappadocia” time. Goreme is about 75 km / 60–75 minutes by road, while the supported towns generally fall around 70–80 km before any shared hotel stops."
        ]
      },
      {
        "heading": "The shared fare stays €15 even from ASR",
        "paragraphs": [
          "The Kayseri shared airport shuttle is **€15 per person one way** and **€30 round trip**. The fare remains €15 even though ASR is farther away. Travelers who prefer a dedicated vehicle can choose Vito €90 or Sprinter €110 one way per vehicle."
        ]
      },
      {
        "heading": "What to Have Ready After Landing at ASR",
        "paragraphs": [
          "Use the flight number and full hotel name when booking, then follow the WhatsApp meeting instructions after baggage claim. Passenger names and passport details are required for every reservation. The full hotel name tells the driver which town route applies after the airport meeting, whether your hotel is in Goreme, Urgup, Uchisar, Avanos, Ortahisar or Cavusin."
        ]
      },
      {
        "heading": "ASR Travel Time Depends on the Hotel Town",
        "paragraphs": [
          "Travel time varies by hotel town. Use the road estimate and hotel-access details for your actual accommodation rather than treating every journey as Kayseri-to-Goreme."
        ]
      },
      {
        "heading": "Return to ASR Uses a Separate Hotel-Pickup Plan",
        "paragraphs": [
          "The €15 shared fare also applies from supported hotels back to Kayseri Airport. The return is not a reversed arrival timetable: use the outbound flight and [[Cappadocia to Kayseri Airport shuttle|cappadocia-to-kayseri-airport-shuttle]] details, then match the pickup plan to the actual hotel town."
        ]
      }
    ],
    "faq": [
      {
        "q": "How much is the Kayseri Airport shuttle to Cappadocia?",
        "a": "€15 per person one way; round trip is €30 per person."
      },
      {
        "q": "How long is ASR to Goreme by road?",
        "a": "About 75 km / 60–75 minutes before possible shared hotel stops."
      },
      {
        "q": "What are the Kayseri private-transfer prices?",
        "a": "Vito €90 and Sprinter €110 one way per vehicle."
      },
      {
        "q": "Which hotel towns are served from ASR?",
        "a": "Goreme, Urgup, Uchisar, Avanos, Cavusin and Ortahisar."
      },
      {
        "q": "Can I book the return shuttle back to ASR at the same time?",
        "a": "Yes. Choose Round Trip and provide the departure flight as a separate leg."
      }
    ],
    "related": [
      "cappadocia-airport-transfer",
      "cappadocia-to-kayseri-airport-shuttle",
      "kayseri-airport-to-goreme-shuttle",
      "kayseri-airport-to-urgup-shuttle",
      "kayseri-airport-to-uchisar-shuttle",
      "kayseri-airport-to-avanos-shuttle",
      "kayseri-airport-to-ortahisar-shuttle",
      "kayseri-airport-to-cavusin-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer"
    ],
    "twitterTitle": "Kayseri Airport Shuttle to Cappadocia",
    "twitterDescription": "€15 per person shared shuttle from Kayseri Airport (ASR) to Goreme, Urgup, Uchisar, Avanos, Cavusin and Ortahisar. Cash to driver."
  },
  {
    "slug": "nevsehir-airport-shuttle",
    "title": "Nevsehir Airport Shuttle to Cappadocia | Airport & Hotel Service",
    "description": "Nevsehir Airport (NAV) shuttle to Cappadocia hotels: €15 per person, cash to driver, Goreme, Urgup, Uchisar, Avanos, Cavusin and Ortahisar.",
    "eyebrow": "NAV shuttle service",
    "h1": "Nevsehir Airport Shuttle to Cappadocia",
    "lead": "Book the €15 per person shared shuttle from Nevsehir Kapadokya Airport to supported Cappadocia accommodation, with flight-based meeting details confirmed on WhatsApp.",
    "sections": [
      {
        "heading": "Nevsehir Airport Shuttle: The Shorter Road Gateway for Many Central Stays",
        "paragraphs": [
          "NAV is closer by road to Goreme, Uchisar and several other central hotel areas. Uchisar is about 35 km / 30–40 minutes and Goreme about 40 km / 35–45 minutes before shared stops, while Urgup, Avanos, Ortahisar and Cavusin have their own route times."
        ]
      },
      {
        "heading": "NAV Shared Shuttle Is €15 Per Person",
        "paragraphs": [
          "The Nevsehir shared airport shuttle is **€15 per person one way** and **€30 round trip**. Private pricing is lower than from ASR: Vito €80 and Sprinter €90 one way per vehicle."
        ]
      },
      {
        "heading": "What to Have Ready After Landing at NAV",
        "paragraphs": [
          "The service is pre-booked rather than a public bus timetable, and shared passengers may still be grouped with compatible hotel stops. Enter the flight number, full hotel name, passenger details and WhatsApp contact when booking, then follow the confirmed airport meeting instruction after collecting baggage — even on a shorter route, the flight number and full accommodation name are still what match the traveler with the correct shared run."
        ]
      },
      {
        "heading": "Hotel Town Still Decides the Route",
        "paragraphs": [
          "NAV being close overall doesn't mean every Cappadocia hotel follows the same approach: Uchisar is particularly close, Avanos and Urgup sit farther out, and Goreme's cave-hotel streets or the village roads of Ortahisar and Cavusin can change the final access. Use the timing and access details for your actual hotel town rather than one generic NAV-to-Cappadocia estimate."
        ]
      },
      {
        "heading": "Return to NAV Uses the Hotel Town, Not a Generic Pickup",
        "paragraphs": [
          "The shared fare back to Nevsehir Airport is €15 per person. Use the actual departure flight and the relevant town route from [[Cappadocia to Nevsehir Airport shuttle|cappadocia-to-nevsehir-airport-shuttle]] so a Goreme pickup isn't planned the same way as Uchisar, Avanos or another hotel area."
        ]
      },
      {
        "heading": "Nevsehir Kapadokya Airport and NAV Airport Are the Same Airport",
        "paragraphs": [
          "Travelers may see **Nevsehir Kapadokya Airport**, **Kapadokya Airport** or **NAV Airport** in search results and travel documents. For this transfer service, those names all point to the same airport serving Nevsehir/Cappadocia. The booking should still use the NAV airport selection and the actual flight number."
        ]
      }
    ],
    "faq": [
      {
        "q": "How much is the Nevsehir Airport shuttle to Cappadocia?",
        "a": "€15 per person one way; round trip is €30 per person."
      },
      {
        "q": "Is NAV the closer airport for Goreme and Uchisar?",
        "a": "Yes, NAV is generally closer by road to those central areas than ASR."
      },
      {
        "q": "What are the Nevsehir private-transfer prices?",
        "a": "Vito €80 and Sprinter €90 one way per vehicle."
      },
      {
        "q": "Does the NAV shuttle operate like a fixed public bus?",
        "a": "No. It is a pre-booked shared airport-to-hotel service organized around confirmed passengers and flights."
      },
      {
        "q": "Can the NAV shuttle also collect me from the hotel for departure?",
        "a": "Yes. Book Hotel → Airport or Round Trip and use the confirmed pickup time."
      }
    ],
    "related": [
      "cappadocia-airport-transfer",
      "cappadocia-to-nevsehir-airport-shuttle",
      "nevsehir-airport-to-goreme-shuttle",
      "nevsehir-airport-to-urgup-shuttle",
      "nevsehir-airport-to-uchisar-shuttle",
      "nevsehir-airport-to-avanos-shuttle",
      "nevsehir-airport-to-ortahisar-shuttle",
      "nevsehir-airport-to-cavusin-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer"
    ],
    "twitterTitle": "Nevsehir Airport Shuttle to Cappadocia",
    "twitterDescription": "€15 per person shared shuttle from Nevsehir Airport (NAV) to Goreme, Urgup, Uchisar, Avanos, Cavusin and Ortahisar. Cash to driver."
  },
  {
    "slug": "cappadocia-to-kayseri-airport-shuttle",
    "title": "Cappadocia to Kayseri Airport Shuttle | Hotel Pickup",
    "description": "Cappadocia hotel to Kayseri Airport (ASR) shuttle: €15 per person from Goreme, Urgup, Uchisar, Avanos, Cavusin and Ortahisar.",
    "eyebrow": "Cappadocia → ASR",
    "h1": "Cappadocia to Kayseri Airport Shuttle",
    "lead": "Book the €15 hotel-to-airport shuttle from supported Cappadocia towns to Kayseri Erkilet Airport, with the pickup point and timing confirmed from your departure flight.",
    "sections": [
      {
        "heading": "ASR Departure Planning Starts Earlier Than the Map Distance Suggests",
        "paragraphs": [
          "Kayseri Airport is the longer road departure for most central Cappadocia hotels. The confirmed hotel pickup is based on the real outbound flight, the town, other shared collections and the airport buffer — not on simply reversing the arrival driving time."
        ]
      },
      {
        "heading": "Six Hotel Towns, Six Different Starts to the Kayseri Road",
        "paragraphs": [
          "Hotel access differs by town and property, especially around cave hotels, narrow village streets and harder-to-reach addresses. The confirmed pickup point should match the actual accommodation rather than a generic town location."
        ]
      },
      {
        "heading": "Be Ready Before the Confirmed ASR Pickup Window",
        "paragraphs": [
          "Because the road to Kayseri is longer, be back with your luggage and ready at the confirmed pickup point before the pickup window begins. Do not calculate departure only from the direct road time; shared hotel pickups and the airport-arrival margin are already considered in the confirmed pickup plan."
        ]
      },
      {
        "heading": "Private Kayseri Pickup for a Dedicated Departure",
        "paragraphs": [
          "A [[private|private-airport-transfer-cappadocia]] Vito is €90 one way for up to 5 passengers and Sprinter €110 for up to 16. Private service removes unrelated hotel collections, but the vehicle still needs a safe, accessible pickup point at the property."
        ]
      },
      {
        "heading": "One Final Check Before the Longer Hotel-to-ASR Run",
        "paragraphs": [
          "Before the Kayseri pickup, finish checkout, have luggage ready and verify the flight number and meeting point. A shared vehicle may collect another supported hotel before the longer airport road, so treat the confirmed time as the start of the pickup window rather than an approximate suggestion."
        ]
      }
    ],
    "faq": [
      {
        "q": "How much is the Cappadocia to Kayseri Airport shuttle?",
        "a": "€15 per person one way."
      },
      {
        "q": "Why should I not calculate ASR pickup from direct road time alone?",
        "a": "The longer airport road, hotel access and other shared collections all need to be included in the confirmed pickup plan."
      },
      {
        "q": "Which towns can use the shared shuttle to ASR?",
        "a": "Goreme, Urgup, Uchisar, Avanos, Cavusin and Ortahisar."
      },
      {
        "q": "Can I book a private vehicle to Kayseri Airport?",
        "a": "Yes. Vito €90 or Sprinter €110 one way per vehicle."
      }
    ],
    "related": [
      "kayseri-airport-shuttle",
      "goreme-to-kayseri-airport-shuttle",
      "urgup-to-kayseri-airport-shuttle",
      "uchisar-to-kayseri-airport-shuttle",
      "avanos-to-kayseri-airport-shuttle",
      "ortahisar-to-kayseri-airport-shuttle",
      "cavusin-to-kayseri-airport-shuttle",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Cappadocia to Kayseri Airport Shuttle | Hotel Pickup",
    "twitterDescription": "€15 hotel-to-airport shuttle from Goreme, Urgup, Uchisar, Avanos, Cavusin and Ortahisar to Kayseri Airport (ASR). Cash to driver."
  },
  {
    "slug": "cappadocia-to-nevsehir-airport-shuttle",
    "title": "Cappadocia to Nevsehir Airport Shuttle | Hotel Pickup",
    "description": "Cappadocia hotel to Nevsehir Airport (NAV) shuttle: €15 per person from Goreme, Urgup, Uchisar, Avanos, Cavusin and Ortahisar.",
    "eyebrow": "Cappadocia → NAV",
    "h1": "Cappadocia to Nevsehir Airport Shuttle",
    "lead": "Book the €15 hotel-to-airport shuttle from supported Cappadocia towns to Nevsehir Kapadokya Airport, with the pickup point and timing confirmed from your departure flight.",
    "sections": [
      {
        "heading": "NAV Is Closer, But the Hotel Pickup Still Comes From the Flight",
        "paragraphs": [
          "Nevsehir Airport has a shorter road distance from many central Cappadocia towns, but that's not a reason to invent a later pickup time. The shared collection is confirmed from the actual departure flight, hotel location and the day's passenger plan."
        ]
      },
      {
        "heading": "The Short NAV Route Changes by Hotel Town",
        "paragraphs": [
          "Uchisar is especially close to NAV, Goreme is also relatively near, while Urgup, Avanos, Ortahisar and Cavusin follow different local roads. Pickup timing and the practical meeting point should match the actual hotel town rather than a broad “Cappadocia to Nevsehir” estimate."
        ]
      },
      {
        "heading": "Be Ready Before the Confirmed NAV Pickup Window",
        "paragraphs": [
          "NAV is closer to many central towns, but the confirmed pickup time still allows for hotel access, shared pickups and the airport-arrival margin. Have your luggage ready and be at the confirmed pickup point before the pickup window begins."
        ]
      },
      {
        "heading": "Private Nevsehir Departure Is the Direct Alternative",
        "paragraphs": [
          "A dedicated [[private|private-airport-transfer-cappadocia]] Vito is €80 one way for up to 5 passengers and Sprinter €90 for up to 16. It avoids unrelated hotel pickups, while the final hotel meeting point still depends on safe vehicle access."
        ]
      },
      {
        "heading": "NAV's Shorter Distance Doesn't Mean a Later Pickup",
        "paragraphs": [
          "Before the Nevsehir pickup, keep luggage ready and verify the flight number and meeting point. The airport is closer to many towns, but a shared vehicle can still have another hotel collection, so treat the confirmed time as the start of the pickup window rather than an approximate suggestion."
        ]
      }
    ],
    "faq": [
      {
        "q": "How much is the Cappadocia to Nevsehir Airport shuttle?",
        "a": "€15 per person one way."
      },
      {
        "q": "Can I leave later just because NAV is closer?",
        "a": "Do not change the pickup yourself. Use the flight-based time confirmed for your hotel and shared collection."
      },
      {
        "q": "Which towns can use the shared shuttle to NAV?",
        "a": "Goreme, Urgup, Uchisar, Avanos, Cavusin and Ortahisar."
      },
      {
        "q": "Can I book a private vehicle to Nevsehir Airport?",
        "a": "Yes. Vito €80 or Sprinter €90 one way per vehicle."
      }
    ],
    "related": [
      "nevsehir-airport-shuttle",
      "goreme-to-nevsehir-airport-shuttle",
      "urgup-to-nevsehir-airport-shuttle",
      "uchisar-to-nevsehir-airport-shuttle",
      "avanos-to-nevsehir-airport-shuttle",
      "ortahisar-to-nevsehir-airport-shuttle",
      "cavusin-to-nevsehir-airport-shuttle",
      "cappadocia-to-kayseri-airport-shuttle",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Cappadocia to Nevsehir Airport Shuttle | Hotel Pickup",
    "twitterDescription": "€15 hotel-to-airport shuttle from Goreme, Urgup, Uchisar, Avanos, Cavusin and Ortahisar to Nevsehir Airport (NAV). Cash to driver."
  },
  {
    "slug": "goreme-airport-transfer",
    "title": "Goreme Airport Transfer | ASR & NAV Shuttle",
    "description": "Goreme airport transfer from Kayseri and Nevsehir airports. €15 shuttle, private Vito/Sprinter, hotel access, route times and return pickup.",
    "eyebrow": "Goreme transfer guide",
    "h1": "Goreme Airport Transfer",
    "lead": "Compare Kayseri Airport and Nevsehir Airport for a Goreme stay, then use the matching airport-shuttle route.",
    "sections": [
      {
        "heading": "Goreme Transfer Planning Starts With the Cave-Hotel Streets",
        "paragraphs": [
          "Goreme is one of the main accommodation bases in Cappadocia, with many cave hotels around the compact town center. That convenience also creates a transfer detail that matters: not every hotel entrance is on a wide street, so the full property name is more useful than simply writing \"Goreme\" in the booking.",
          "Many Goreme hotels have similar names. Sending the exact reservation name helps distinguish between properties with \"cave\", \"suite\", \"house\" or \"stone\" in the name. This is especially useful when a guesthouse has more than one entrance or a reception on a different lane from the map marker."
        ]
      },
      {
        "heading": "Cave Hotels, Hillside Lanes and Practical Drop-Off Points",
        "paragraphs": [
          "Hotel access in Goreme changes from one street to another. Properties around the bus station and lower center are often easier to access, while hillside cave hotels can sit on steep, narrow or one-way lanes. A shuttle may use the nearest safe stopping point if a larger vehicle cannot wait directly at the entrance. [[Private Vito access|private-airport-transfer-cappadocia]] can be easier in some lanes, but the exact meeting point is always confirmed from the real property location rather than promised in advance."
        ]
      },
      {
        "heading": "ASR or NAV: Which Airport Works Better for Goreme?",
        "paragraphs": [
          "Kayseri Airport (ASR) to Goreme is approximately **75 km** / **60–75 min**. Nevsehir Airport (NAV) is approximately **40 km** / **35–45 min**. NAV is often shorter by road, while the flight timetable can still make ASR the better whole-trip choice. Compare [[Kayseri or Nevsehir Airport|kayseri-or-nevsehir-airport-for-cappadocia]] if both flights work."
        ]
      },
      {
        "heading": "Goreme Hotels and Accommodation Names Worth Identifying Correctly",
        "paragraphs": [
          "Examples of well-known Goreme accommodation names are listed below only to make transfer planning easier; this is not a hotel ranking. If your hotel is not listed, the service can still be requested as long as the accommodation is within the supported Goreme area."
        ],
        "bullets": [
          "Divan Cave House",
          "Aydinli Cave Hotel",
          "Aren Cave Hotel and Art Gallery",
          "Arinna Cappadocia",
          "The Owl Cave House",
          "Chelebi Cave House",
          "Sultan Cave Suites",
          "Carus Cappadocia",
          "Cappadocia Caves Hotel",
          "A la Mode Cappadocia Hotel",
          "Cappadocia Cave Suites - Boutique Hotel",
          "Artemis Cave Suites",
          "Kelebek Cave Hotel",
          "Henna Hotel",
          "Goreme Cave Lodge",
          "Zara Cave Hotel",
          "Cappadocia Cave Lodge",
          "Vineyard Cave Hotel",
          "Aza Cave Hotel",
          "Luvi Cave Hotel",
          "Imperial Cave Suites & Spa",
          "Royal Stone Houses - Goreme",
          "Goreme Inn Hotel",
          "Cappa Cave Hotel",
          "Cappadocia Cave Land Hotel",
          "Fairyland Cave Hotel",
          "Anatolian Houses Cave Hotel & Spa",
          "Tulip Cave Suites",
          "Arch Palace",
          "Adelya Cave Hotel",
          "Mithra Cave Hotel",
          "Koza Cave Hotel",
          "Traveller's Cave Hotel",
          "Osmanli Cappadocia Hotel",
          "Local Cave House Hotel",
          "Harman Cave Hotel",
          "Historical Goreme House",
          "Roma Cave Suite Hotel",
          "Naraca Cave House",
          "Zeus Cave Suites",
          "Stone House Cave Hotel",
          "Cappadocia Elite Stone House",
          "Garden Suites Hotel Cappadocia",
          "Doors Of Cappadocia",
          "Paradise Cappadocia Hotel"
        ]
      },
      {
        "heading": "Planning a Goreme Hotel Pickup for the Flight Home",
        "paragraphs": [
          "On departure day, return to the confirmed pickup point with your luggage ready before the pickup window begins. Sunrise road activity, winter weather and hotel collection order can affect timing, so follow the confirmed pickup time rather than estimating departure from map distance alone.",
          "For ASR use [[Goreme to Kayseri Airport|goreme-to-kayseri-airport-shuttle]]; for NAV use [[Goreme to Nevsehir Airport|goreme-to-nevsehir-airport-shuttle]]."
        ]
      }
    ],
    "faq": [
      {
        "q": "Can I use the same Goreme shuttle price from Kayseri and Nevsehir?",
        "a": "Yes. The shared shuttle is €15 per person each way from either ASR or NAV. The road distance changes, but the shared fare does not."
      },
      {
        "q": "Can I arrange the airport arrival and Goreme hotel pickup for departure in one booking?",
        "a": "Yes. Choose Round Trip and enter both flight numbers and dates so the arrival meeting and departure pickup can be planned separately."
      },
      {
        "q": "Do I need to choose ASR or NAV before submitting the Goreme form?",
        "a": "Yes. Select the airport shown on the airline ticket because the private price, road distance, meeting plan and return route depend on it."
      },
      {
        "q": "Can the shuttle reach every cave hotel door in Goreme?",
        "a": "Not always. Some hillside lanes are too narrow or unsuitable for a larger vehicle, so the closest safe meeting or drop-off point may be confirmed on WhatsApp."
      },
      {
        "q": "Is balloon traffic relevant to an airport pickup from Goreme?",
        "a": "It can be around sunrise. Road activity and hotel collections are reasons to follow the confirmed pickup time rather than calculating only from the map distance."
      },
      {
        "q": "Should I enter the hotel name or only Goreme?",
        "a": "Enter the complete hotel or accommodation name. Goreme has many similarly named cave properties and the exact property is important for route planning."
      }
    ],
    "related": [
      "kayseri-airport-to-goreme-shuttle",
      "nevsehir-airport-to-goreme-shuttle",
      "goreme-to-kayseri-airport-shuttle",
      "goreme-to-nevsehir-airport-shuttle",
      "cappadocia-airport",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Goreme Airport Transfer | ASR & NAV Shuttle",
    "twitterDescription": "Goreme airport transfer from Kayseri and Nevsehir airports: €15 shuttle, private Vito/Sprinter, hotel access and route times."
  },
  {
    "slug": "kayseri-airport-to-goreme-shuttle",
    "title": "Kayseri Airport to Goreme Shuttle | Shared & Private Transfer",
    "description": "Kayseri Airport (ASR) to Goreme: shared airport shuttle, private Vito/Sprinter, 75 km, 60–75 min, hotel drop-off and booking details.",
    "eyebrow": "ASR → Goreme airport shuttle",
    "h1": "Kayseri Airport to Goreme Shuttle",
    "lead": "Travel from Kayseri Airport (ASR) to Goreme by shared shuttle for €15 per person one way, or choose a private Vito or Sprinter. The usual road distance is about 75 km, with a typical driving time of 60–75 minutes. Goreme’s cave-hotel streets can affect the final practical drop-off point, so the full accommodation name matters.",
    "route": {
      "airport": "kayseri",
      "town": "goreme",
      "direction": "arrival"
    },
    "sections": [
      {
        "heading": "What the 75 km ASR Road Means Before You Reach Goreme",
        "paragraphs": [
          "Kayseri Airport is the longer of the two common airport approaches to Goreme. The published road estimate is about **75 km / 60-75 minutes**. After baggage claim, the main variable is how the final hotel approach fits into the longer ASR journey. For the airport-wide picture, see [[Kayseri Airport Shuttle|kayseri-airport-shuttle]]."
        ]
      },
      {
        "heading": "The Final Minutes Can Be Slower Than the Highway",
        "paragraphs": [
          "Goreme becomes compact and steep around many cave-hotel streets. The final approach can still take time, even when the main road journey has been straightforward. Give the booked property name exactly as it appears on your reservation so the transfer team can identify the correct lane or practical drop-off area.",
          "If your flight lands late, the best first plan is usually simple: check in and keep the rest of the day flexible. The drive from ASR is already a substantial part of the journey."
        ]
      },
      {
        "heading": "Private Transfer for This Route",
        "paragraphs": [
          "Prefer a dedicated vehicle? Private Vito is €90 one way for up to 5 passengers, and Sprinter is €110 for up to 16. See [[Private Airport Transfer|private-airport-transfer-cappadocia]] for full details."
        ]
      },
      {
        "heading": "If NAV Is Still an Option, Compare the Actual Flight — Not Only Distance",
        "paragraphs": [
          "Nevsehir Airport is closer to Goreme by road, but a better ASR flight can still produce the easier total journey. Compare [[Nevsehir Airport to Goreme Shuttle|nevsehir-airport-to-goreme-shuttle]] if you have not bought the ticket yet. For both airport options together, use [[Goreme Airport Transfer|goreme-airport-transfer]]."
        ]
      }
    ],
    "faq": [
      {
        "q": "Is Kayseri Airport too far for a Goreme shuttle?",
        "a": "No. ASR is a standard Cappadocia gateway; Goreme is about 75 km away with a typical road estimate around 60-75 minutes before any shared-stop variation."
      },
      {
        "q": "Can I book a private vehicle for this route instead of the shared shuttle?",
        "a": "Yes. Private Vito is €90 one way for up to 5 passengers, and Sprinter is €110 for up to 16, both per vehicle."
      }
    ],
    "related": [
      "goreme-to-kayseri-airport-shuttle",
      "goreme-airport-transfer",
      "kayseri-airport-shuttle",
      "nevsehir-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Kayseri Airport to Goreme Shuttle | Shared & Private Transfer",
    "twitterDescription": "Kayseri Airport (ASR) to Goreme: €15 shared shuttle or private Vito/Sprinter, 75 km, 60–75 min, hotel drop-off."
  },
  {
    "slug": "kayseri-airport-to-urgup-shuttle",
    "title": "Kayseri Airport to Urgup Shuttle | Shared & Private Transfer",
    "description": "Kayseri Airport (ASR) to Urgup: shared airport shuttle, private Vito/Sprinter, 70 km, 60–75 min, hotel drop-off and booking details.",
    "eyebrow": "ASR → Urgup airport shuttle",
    "h1": "Kayseri Airport to Urgup Shuttle",
    "lead": "Travel from Kayseri Airport (ASR) to Urgup by shared shuttle for €15 per person one way, or choose a private Vito or Sprinter. The usual road distance is about 70 km, with a typical driving time of 60–75 minutes. Central Urgup is generally straightforward to reach, while some hillside stone and cave properties may need a different final approach.",
    "route": {
      "airport": "kayseri",
      "town": "urgup",
      "direction": "arrival"
    },
    "sections": [
      {
        "heading": "Kayseri Airport to Urgup: About 70 km / 60–75 Minutes",
        "paragraphs": [
          "Urgup sits on the eastern side of central Cappadocia. The usual road reference from Kayseri Airport is about 70 km / 60–75 minutes. If your accommodation is in Urgup, choose Urgup in the booking so the final hotel approach can be planned correctly."
        ]
      },
      {
        "heading": "Central Urgup and Hillside Stone Hotels Need Different Final Approaches",
        "paragraphs": [
          "Much of Urgup is accessible by normal town roads, while some historic stone and cave properties sit on slopes or smaller lanes. The final approach depends on the actual accommodation location; there is no single drop-off point for every Urgup hotel. Give the booked property name exactly as it appears on your reservation so the transfer team can plan the correct final approach."
        ]
      },
      {
        "heading": "Private Transfer for This Route",
        "paragraphs": [
          "Prefer a dedicated vehicle? Private Vito is €90 one way for up to 5 passengers, and Sprinter is €110 for up to 16. See [[Private Airport Transfer|private-airport-transfer-cappadocia]] for full details. If you prefer NAV instead of ASR, compare [[Nevsehir Airport to Urgup Shuttle|nevsehir-airport-to-urgup-shuttle]]."
        ]
      }
    ],
    "faq": [
      {
        "q": "Does the Kayseri Airport shuttle go directly to Urgup accommodation?",
        "a": "It serves confirmed Urgup accommodation within the supported area, subject to the real road access at the property."
      },
      {
        "q": "How long is Kayseri Airport to Urgup?",
        "a": "The usual road estimate is about 70 km / 60–75 minutes before any shared-stop variation."
      }
    ],
    "related": [
      "urgup-to-kayseri-airport-shuttle",
      "kayseri-airport-shuttle",
      "nevsehir-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Kayseri Airport to Urgup Shuttle | Shared & Private Transfer",
    "twitterDescription": "Kayseri Airport (ASR) to Urgup: €15 shared shuttle or private Vito/Sprinter, 70 km, 60–75 min, hotel drop-off."
  },
  {
    "slug": "kayseri-airport-to-uchisar-shuttle",
    "title": "Kayseri Airport to Uchisar Shuttle | Shared & Private Transfer",
    "description": "Kayseri Airport (ASR) to Uchisar: shared airport shuttle, private Vito/Sprinter, 80 km, 70–85 min, hotel drop-off and booking details.",
    "eyebrow": "ASR → Uchisar airport shuttle",
    "h1": "Kayseri Airport to Uchisar Shuttle",
    "lead": "Travel from Kayseri Airport (ASR) to Uchisar by shared shuttle for €15 per person one way, or choose a private Vito or Sprinter. The usual road distance is about 80 km, with a typical driving time of 70–85 minutes. Uchisar’s hillside streets can be steep or narrow, so the final hotel approach depends on the exact property and practical vehicle access.",
    "route": {
      "airport": "kayseri",
      "town": "uchisar",
      "direction": "arrival"
    },
    "sections": [
      {
        "heading": "Kayseri Airport to Uchisar: About 80 km / 70–85 Minutes",
        "paragraphs": [
          "Uchisar sits on higher ground than several neighboring towns, and many hotels are spread across sloping streets. The usual road estimate from Kayseri Airport is about 80 km / 70–85 minutes. If your accommodation is in Uchisar, choose Uchisar in the booking so the final hotel approach can be planned correctly."
        ]
      },
      {
        "heading": "Why the Last Part of the Uchisar Transfer Can Take Extra Time",
        "paragraphs": [
          "Many streets in Uchisar climb steeply toward the upper village, and several cave and stone properties sit on narrow lanes that a larger vehicle cannot always reach directly. The final approach depends on the actual accommodation location; there is no single drop-off point for every Uchisar hotel. Give the booked property name exactly as it appears on your reservation so the transfer team can plan the correct final approach or nearest practical stop."
        ]
      },
      {
        "heading": "Private Transfer for This Route",
        "paragraphs": [
          "Prefer a dedicated vehicle? Private Vito is €90 one way for up to 5 passengers, and Sprinter is €110 for up to 16. See [[Private Airport Transfer|private-airport-transfer-cappadocia]] for full details. If you prefer NAV instead of ASR, compare [[Nevsehir Airport to Uchisar Shuttle|nevsehir-airport-to-uchisar-shuttle]]."
        ]
      }
    ],
    "faq": [
      {
        "q": "Does the Kayseri Airport shuttle go directly to Uchisar accommodation?",
        "a": "It serves confirmed Uchisar accommodation within the supported area, subject to the real road access at the property."
      },
      {
        "q": "How long is Kayseri Airport to Uchisar?",
        "a": "The usual road estimate is about 80 km / 70–85 minutes before any shared-stop variation."
      }
    ],
    "related": [
      "uchisar-to-kayseri-airport-shuttle",
      "kayseri-airport-shuttle",
      "nevsehir-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Kayseri Airport to Uchisar Shuttle | Shared & Private Transfer",
    "twitterDescription": "Kayseri Airport (ASR) to Uchisar: €15 shared shuttle or private Vito/Sprinter, 80 km, 70–85 min, hotel drop-off."
  },
  {
    "slug": "kayseri-airport-to-avanos-shuttle",
    "title": "Kayseri Airport to Avanos Shuttle | Shared & Private Transfer",
    "description": "Kayseri Airport (ASR) to Avanos: shared airport shuttle, private Vito/Sprinter, 70 km, 60–75 min, hotel drop-off and booking details.",
    "eyebrow": "ASR → Avanos airport shuttle",
    "h1": "Kayseri Airport to Avanos Shuttle",
    "lead": "Travel from Kayseri Airport (ASR) to Avanos by shared shuttle for €15 per person one way, or choose a private Vito or Sprinter. The usual road distance is about 70 km, with a typical driving time of 60–75 minutes. Avanos accommodation is spread across a wider area around the river, so the full hotel name is important for identifying the correct final stop.",
    "route": {
      "airport": "kayseri",
      "town": "avanos",
      "direction": "arrival"
    },
    "sections": [
      {
        "heading": "Avanos Sits Along the River, About 70 km / 60–75 Minutes From ASR",
        "paragraphs": [
          "Avanos is spread along the river, with a flatter and wider street pattern than several hillside towns nearby. The usual road estimate from Kayseri Airport is about 70 km / 60–75 minutes. If your accommodation is in Avanos, choose Avanos in the booking so the final hotel approach can be planned correctly."
        ]
      },
      {
        "heading": "Avanos Is More Spread Out Than the Hillside Hotel Towns",
        "paragraphs": [
          "Avanos accommodation is spread across a wider area and on streets around both sides of the river rather than concentrated in one compact center. The full accommodation name helps the transfer team identify the correct final stop instead of planning only from a generic \"Avanos\" location."
        ]
      },
      {
        "heading": "Private Transfer for This Route",
        "paragraphs": [
          "Prefer a dedicated vehicle? Private Vito is €90 one way for up to 5 passengers, and Sprinter is €110 for up to 16. See [[Private Airport Transfer|private-airport-transfer-cappadocia]] for full details. If you prefer NAV instead of ASR, compare [[Nevsehir Airport to Avanos Shuttle|nevsehir-airport-to-avanos-shuttle]]."
        ]
      }
    ],
    "faq": [
      {
        "q": "Does the Kayseri Airport shuttle go directly to Avanos accommodation?",
        "a": "Yes, for confirmed accommodation within the supported Avanos area, subject to practical road access at the property."
      },
      {
        "q": "How long is Kayseri Airport to Avanos?",
        "a": "The usual road estimate is about 70 km / 60–75 minutes before any shared-stop variation."
      }
    ],
    "related": [
      "avanos-to-kayseri-airport-shuttle",
      "kayseri-airport-shuttle",
      "nevsehir-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Kayseri Airport to Avanos Shuttle | Shared & Private Transfer",
    "twitterDescription": "Kayseri Airport (ASR) to Avanos: €15 shared shuttle or private Vito/Sprinter, 70 km, 60–75 min, hotel drop-off."
  },
  {
    "slug": "kayseri-airport-to-ortahisar-shuttle",
    "title": "Kayseri Airport to Ortahisar Shuttle | Shared & Private Transfer",
    "description": "Kayseri Airport (ASR) to Ortahisar: shared airport shuttle, private Vito/Sprinter, 75 km, 60–75 min, hotel drop-off and booking details.",
    "eyebrow": "ASR → Ortahisar airport shuttle",
    "h1": "Kayseri Airport to Ortahisar Shuttle",
    "lead": "Travel from Kayseri Airport (ASR) to Ortahisar by shared shuttle for €15 per person one way, or choose a private Vito or Sprinter. The usual road distance is about 75 km, with a typical driving time of 60–75 minutes. Some accommodation streets narrow around Ortahisar’s village center, so final access is confirmed from the exact property rather than the town name alone.",
    "route": {
      "airport": "kayseri",
      "town": "ortahisar",
      "direction": "arrival"
    },
    "sections": [
      {
        "heading": "Ortahisar Has Compact Village Streets, About 75 km / 60–75 Minutes From ASR",
        "paragraphs": [
          "Ortahisar is compact, with some accommodation streets narrowing around the village center. The usual road estimate from Kayseri Airport is about 75 km / 60–75 minutes. If your accommodation is in Ortahisar, choose Ortahisar in the booking so the final hotel approach can be planned correctly."
        ]
      },
      {
        "heading": "A Smaller Village Still Needs the Exact Property Name",
        "paragraphs": [
          "Being a smaller village doesn't make every address simple to reach — some guesthouses are on narrow lanes where a larger vehicle may need to stop short of the door. The full accommodation name helps the transfer team identify the correct final stop and, where needed, the nearest practical drop-off point."
        ]
      },
      {
        "heading": "Private Transfer for This Route",
        "paragraphs": [
          "Prefer a dedicated vehicle? Private Vito is €90 one way for up to 5 passengers, and Sprinter is €110 for up to 16. See [[Private Airport Transfer|private-airport-transfer-cappadocia]] for full details. If you prefer NAV instead of ASR, compare [[Nevsehir Airport to Ortahisar Shuttle|nevsehir-airport-to-ortahisar-shuttle]]."
        ]
      }
    ],
    "faq": [
      {
        "q": "Does the Kayseri Airport shuttle go directly to Ortahisar accommodation?",
        "a": "Yes, for confirmed accommodation within the supported Ortahisar area, subject to practical road access at the property."
      },
      {
        "q": "How long is Kayseri Airport to Ortahisar?",
        "a": "The usual road estimate is about 75 km / 60–75 minutes before any shared-stop variation."
      }
    ],
    "related": [
      "ortahisar-to-kayseri-airport-shuttle",
      "kayseri-airport-shuttle",
      "nevsehir-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Kayseri Airport to Ortahisar Shuttle | Shared & Private Transfer",
    "twitterDescription": "Kayseri Airport (ASR) to Ortahisar: €15 shared shuttle or private Vito/Sprinter, 75 km, 60–75 min, hotel drop-off."
  },
  {
    "slug": "kayseri-airport-to-cavusin-shuttle",
    "title": "Kayseri Airport to Cavusin Shuttle | Shared & Private Transfer",
    "description": "Kayseri Airport (ASR) to Cavusin: shared airport shuttle, private Vito/Sprinter, 75 km, 65–80 min, hotel drop-off and booking details.",
    "eyebrow": "ASR → Cavusin airport shuttle",
    "h1": "Kayseri Airport to Cavusin Shuttle",
    "lead": "Travel from Kayseri Airport (ASR) to Cavusin by shared shuttle for €15 per person one way, or choose a private Vito or Sprinter. The usual road distance is about 75 km, with a typical driving time of 65–80 minutes. Cavusin accommodation ranges from main-road properties to older hillside streets, so the practical stopping point depends on the exact hotel.",
    "route": {
      "airport": "kayseri",
      "town": "cavusin",
      "direction": "arrival"
    },
    "sections": [
      {
        "heading": "Cavusin Has Older and Newer Accommodation Areas, About 75 km / 65–80 Minutes From ASR",
        "paragraphs": [
          "Cavusin has both hillside guesthouses on older streets and newer accommodation along the main road, so the final approach can vary considerably by property. The usual road estimate from Kayseri Airport is about 75 km / 65–80 minutes. If your accommodation is in Cavusin, choose Cavusin in the booking so the final hotel approach can be planned correctly."
        ]
      },
      {
        "heading": "Why the Exact Cavusin Property Name Matters",
        "paragraphs": [
          "Accommodation in Cavusin is spread between older hillside streets and newer roadside areas. A generic \"Cavusin\" location is not enough for the final approach, so the full accommodation name helps the transfer team identify the correct part of the village and the practical stopping point."
        ]
      },
      {
        "heading": "Private Transfer for This Route",
        "paragraphs": [
          "Prefer a dedicated vehicle? Private Vito is €90 one way for up to 5 passengers, and Sprinter is €110 for up to 16. See [[Private Airport Transfer|private-airport-transfer-cappadocia]] for full details. If you prefer NAV instead of ASR, compare [[Nevsehir Airport to Cavusin Shuttle|nevsehir-airport-to-cavusin-shuttle]]."
        ]
      }
    ],
    "faq": [
      {
        "q": "Does the Kayseri Airport shuttle serve Cavusin hotels?",
        "a": "The shuttle serves confirmed Cavusin accommodation, but the exact drop-off point depends on practical vehicle access at the property."
      },
      {
        "q": "How long is Kayseri Airport to Cavusin?",
        "a": "The usual road estimate is about 75 km / 65–80 minutes before any shared-stop variation."
      }
    ],
    "related": [
      "cavusin-to-kayseri-airport-shuttle",
      "kayseri-airport-shuttle",
      "nevsehir-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Kayseri Airport to Cavusin Shuttle | Shared & Private Transfer",
    "twitterDescription": "Kayseri Airport (ASR) to Cavusin: €15 shared shuttle or private Vito/Sprinter, 75 km, 65–80 min, hotel drop-off."
  },
  {
    "slug": "nevsehir-airport-to-goreme-shuttle",
    "title": "Nevsehir Airport to Goreme Shuttle | Shared & Private Transfer",
    "description": "Nevsehir Airport (NAV) to Goreme: shared airport shuttle, private Vito/Sprinter, 40 km, 35–45 min, hotel drop-off and booking details.",
    "eyebrow": "NAV → Goreme airport shuttle",
    "h1": "Nevsehir Airport to Goreme Shuttle",
    "lead": "Travel from Nevsehir Airport (NAV) to Goreme by shared shuttle for €15 per person one way, or choose a private Vito or Sprinter. The usual road distance is about 40 km, with a typical driving time of 35–45 minutes. Goreme’s cave-hotel streets can affect the final practical drop-off point, so the full accommodation name matters.",
    "route": {
      "airport": "nevsehir",
      "town": "goreme",
      "direction": "arrival"
    },
    "sections": [
      {
        "heading": "NAV Is the Shorter Road Option for Goreme",
        "paragraphs": [
          "The usual road estimate from Nevsehir Airport to Goreme is about 40 km / 35–45 minutes. That shorter road can make the airport-to-hotel leg more straightforward after arrival. It does not turn every cave-hotel entrance into a simple roadside stop."
        ]
      },
      {
        "heading": "The Shorter Airport Road Does Not Remove the Final Hotel Approach",
        "paragraphs": [
          "NAV is closer to Goreme by road, but the final minutes still depend on the actual accommodation. Hillside cave hotels can require a slower approach or a nearby practical stopping point, so the full accommodation name remains important even on the shorter NAV route.",
          "For a comparison of both airports, see [[Goreme Airport Transfer|goreme-airport-transfer]]. If ASR has the better flight, [[Kayseri Airport to Goreme Shuttle|kayseri-airport-to-goreme-shuttle]] is still a practical alternative."
        ]
      },
      {
        "heading": "Private Transfer for This Route",
        "paragraphs": [
          "Prefer a dedicated vehicle? Private Vito is €80 one way for up to 5 passengers, and Sprinter is €90 for up to 16. See [[Private Airport Transfer|private-airport-transfer-cappadocia]] for full details."
        ]
      }
    ],
    "faq": [
      {
        "q": "Is Nevsehir Airport the closer airport to Goreme?",
        "a": "Yes. NAV is about 40 km from Goreme, compared with roughly 75 km from ASR."
      },
      {
        "q": "Does the shorter NAV road guarantee hotel-door drop-off?",
        "a": "No. Cave-hotel street access is a separate local issue from the airport distance."
      },
      {
        "q": "Can I book a private vehicle for this route instead of the shared shuttle?",
        "a": "Yes. Private Vito is €80 one way for up to 5 passengers, and Sprinter is €90 for up to 16, both per vehicle."
      }
    ],
    "related": [
      "goreme-to-nevsehir-airport-shuttle",
      "goreme-airport-transfer",
      "nevsehir-airport-shuttle",
      "kayseri-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Nevsehir Airport to Goreme Shuttle | Shared & Private Transfer",
    "twitterDescription": "Nevsehir Airport (NAV) to Goreme: €15 shared shuttle or private Vito/Sprinter, 40 km, 35–45 min, hotel drop-off."
  },
  {
    "slug": "nevsehir-airport-to-urgup-shuttle",
    "title": "Nevsehir Airport to Urgup Shuttle | Shared & Private Transfer",
    "description": "Nevsehir Airport (NAV) to Urgup: shared airport shuttle, private Vito/Sprinter, 50 km, 45–60 min, hotel drop-off and booking details.",
    "eyebrow": "NAV → Urgup airport shuttle",
    "h1": "Nevsehir Airport to Urgup Shuttle",
    "lead": "Travel from Nevsehir Airport (NAV) to Urgup by shared shuttle for €15 per person one way, or choose a private Vito or Sprinter. The usual road distance is about 50 km, with a typical driving time of 45–60 minutes. Central Urgup is generally straightforward to reach, while some hillside stone and cave properties may need a different final approach.",
    "route": {
      "airport": "nevsehir",
      "town": "urgup",
      "direction": "arrival"
    },
    "sections": [
      {
        "heading": "NAV Shortens the Regional Drive, but Urgup Is Farther East Than Goreme or Uchisar",
        "paragraphs": [
          "Nevsehir Airport to Urgup is about **50 km / 45–60 minutes**. The route crosses central Cappadocia toward a town with a broader street pattern and more spread-out accommodation than a compact village."
        ]
      },
      {
        "heading": "Shuttle for Value, Private Vehicle for a Dedicated Run",
        "paragraphs": [
          "For one or two passengers, the shared option keeps the cost low. A private Vito is €80 one way for up to 5 passengers, and a private Sprinter is €90 one way for up to 16. See [[Private Airport Transfer|private-airport-transfer-cappadocia]] for full details, or compare the service types in [[Shared Shuttle vs Private Transfer|cappadocia-shared-shuttle-vs-private-transfer]]."
        ]
      }
    ],
    "faq": [
      {
        "q": "How long is Nevsehir Airport to Urgup?",
        "a": "The usual road estimate is about 50 km / 45–60 minutes before any shared-stop variation."
      },
      {
        "q": "Can I book a private vehicle for this route instead of the shared shuttle?",
        "a": "Yes. Private Vito is €80 one way for up to 5 passengers, and Sprinter is €90 for up to 16, both per vehicle."
      }
    ],
    "related": [
      "urgup-to-nevsehir-airport-shuttle",
      "kayseri-airport-to-urgup-shuttle",
      "nevsehir-airport-shuttle",
      "kayseri-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Nevsehir Airport to Urgup Shuttle | Shared & Private Transfer",
    "twitterDescription": "Nevsehir Airport (NAV) to Urgup: €15 shared shuttle or private Vito/Sprinter, 50 km, 45–60 min, hotel transfer."
  },
  {
    "slug": "nevsehir-airport-to-uchisar-shuttle",
    "title": "Nevsehir Airport to Uchisar Shuttle | Shared & Private Transfer",
    "description": "Nevsehir Airport (NAV) to Uchisar: shared airport shuttle, private Vito/Sprinter, 35 km, 30–40 min, hotel drop-off and booking details.",
    "eyebrow": "NAV → Uchisar airport shuttle",
    "h1": "Nevsehir Airport to Uchisar Shuttle",
    "lead": "Travel from Nevsehir Airport (NAV) to Uchisar by shared shuttle for €15 per person one way, or choose a private Vito or Sprinter. The usual road distance is about 35 km, with a typical driving time of 30–40 minutes. Uchisar’s hillside streets can be steep or narrow, so the final hotel approach depends on the exact property and practical vehicle access.",
    "route": {
      "airport": "nevsehir",
      "town": "uchisar",
      "direction": "arrival"
    },
    "sections": [
      {
        "heading": "Nevsehir Airport to Uchisar: About 35 km / 30–40 Minutes",
        "paragraphs": [
          "The airport and town are about 35 km apart, with a usual road estimate of around 30–40 minutes. Even on this shorter route, the final approach to hillside hotels can still add time depending on the property location and road access."
        ]
      },
      {
        "heading": "A Short Route Still Needs the Full Accommodation Name",
        "paragraphs": [
          "Uchisar's streets narrow and climb toward the upper village, so the short airport distance does not remove the need to plan the final hotel approach carefully. The full accommodation name helps the transfer team plan the correct final stop or nearest practical drop-off point.",
          "Arriving through ASR instead? See [[Kayseri Airport to Uchisar Shuttle|kayseri-airport-to-uchisar-shuttle]]."
        ]
      },
      {
        "heading": "Private Transfer for This Route",
        "paragraphs": [
          "Prefer a dedicated vehicle? Private Vito is €80 one way for up to 5 passengers, and Sprinter is €90 for up to 16. See [[Private Airport Transfer|private-airport-transfer-cappadocia]] for full details."
        ]
      }
    ],
    "faq": [
      {
        "q": "How long is Nevsehir Airport to Uchisar by road?",
        "a": "The usual road estimate is about 35 km / 30–40 minutes before any extra time for shared hotel stops or the final hotel approach."
      },
      {
        "q": "Can I book a private vehicle for this route instead of the shared shuttle?",
        "a": "Yes. Private Vito is €80 one way for up to 5 passengers, and Sprinter is €90 for up to 16, both per vehicle."
      }
    ],
    "related": [
      "uchisar-to-nevsehir-airport-shuttle",
      "kayseri-airport-to-uchisar-shuttle",
      "nevsehir-airport-shuttle",
      "kayseri-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Nevsehir Airport to Uchisar Shuttle | Shared & Private Transfer",
    "twitterDescription": "Nevsehir Airport (NAV) to Uchisar: €15 shared shuttle or private Vito/Sprinter, 35 km, 30–40 min, hotel transfer."
  },
  {
    "slug": "nevsehir-airport-to-avanos-shuttle",
    "title": "Nevsehir Airport to Avanos Shuttle | Shared & Private Transfer",
    "description": "Nevsehir Airport (NAV) to Avanos: shared airport shuttle, private Vito/Sprinter, 38 km, 35–50 min, hotel drop-off and booking details.",
    "eyebrow": "NAV → Avanos airport shuttle",
    "h1": "Nevsehir Airport to Avanos Shuttle",
    "lead": "Travel from Nevsehir Airport (NAV) to Avanos by shared shuttle for €15 per person one way, or choose a private Vito or Sprinter. The usual road distance is about 38 km, with a typical driving time of 35–50 minutes. Avanos accommodation is spread across a wider area around the river, so the full hotel name is important for identifying the correct final stop.",
    "route": {
      "airport": "nevsehir",
      "town": "avanos",
      "direction": "arrival"
    },
    "sections": [
      {
        "heading": "Nevsehir Airport to Avanos: About 38 km / 35–50 Minutes",
        "paragraphs": [
          "The usual road estimate from Nevsehir Airport to Avanos is about 38 km / 35–50 minutes. Avanos accommodation is spread across different parts of town, so the full accommodation name helps the transfer team identify the correct final stop rather than relying on a generic \"Avanos\" location."
        ]
      },
      {
        "heading": "Private Transfer for This Route",
        "paragraphs": [
          "Prefer a dedicated vehicle? Private Vito is €80 one way for up to 5 passengers, and Sprinter is €90 for up to 16. See [[Private Airport Transfer|private-airport-transfer-cappadocia]] for full details."
        ]
      }
    ],
    "faq": [
      {
        "q": "Is Avanos close to Nevsehir Airport?",
        "a": "The usual road estimate is about 38 km / 35–50 minutes."
      },
      {
        "q": "Can I book a private vehicle for this route instead of the shared shuttle?",
        "a": "Yes. Private Vito is €80 one way for up to 5 passengers, and Sprinter is €90 for up to 16, both per vehicle."
      }
    ],
    "related": [
      "avanos-to-nevsehir-airport-shuttle",
      "kayseri-airport-to-avanos-shuttle",
      "nevsehir-airport-shuttle",
      "kayseri-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Nevsehir Airport to Avanos Shuttle | Shared & Private Transfer",
    "twitterDescription": "Nevsehir Airport (NAV) to Avanos: €15 shared shuttle or private Vito/Sprinter, 38 km, 35–50 min, hotel transfer."
  },
  {
    "slug": "nevsehir-airport-to-ortahisar-shuttle",
    "title": "Nevsehir Airport to Ortahisar Shuttle | Shared & Private Transfer",
    "description": "Nevsehir Airport (NAV) to Ortahisar: shared airport shuttle, private Vito/Sprinter, 45 km, 40–50 min, hotel drop-off and booking details.",
    "eyebrow": "NAV → Ortahisar airport shuttle",
    "h1": "Nevsehir Airport to Ortahisar Shuttle",
    "lead": "Travel from Nevsehir Airport (NAV) to Ortahisar by shared shuttle for €15 per person one way, or choose a private Vito or Sprinter. The usual road distance is about 45 km, with a typical driving time of 40–50 minutes. Some accommodation streets narrow around Ortahisar’s village center, so final access is confirmed from the exact property rather than the town name alone.",
    "route": {
      "airport": "nevsehir",
      "town": "ortahisar",
      "direction": "arrival"
    },
    "sections": [
      {
        "heading": "Nevsehir Airport to Ortahisar: About 45 km / 40–50 Minutes",
        "paragraphs": [
          "The usual road estimate from Nevsehir Airport to Ortahisar is about 45 km / 40–50 minutes. The final minutes around the village can vary depending on the accommodation street and practical vehicle access."
        ]
      },
      {
        "heading": "Why the Full Accommodation Name Matters in Ortahisar",
        "paragraphs": [
          "Ortahisar is compact, with some accommodation streets narrowing around the village center. The full accommodation name helps the transfer team identify the correct stopping point, as an \"Ortahisar\" location alone is not precise enough for hotel access.",
          "Flying out of NAV later? See [[Ortahisar to Nevsehir Airport Shuttle|ortahisar-to-nevsehir-airport-shuttle]] for the return journey."
        ]
      },
      {
        "heading": "Private Transfer for This Route",
        "paragraphs": [
          "Prefer a dedicated vehicle? Private Vito is €80 one way for up to 5 passengers, and Sprinter is €90 for up to 16. See [[Private Airport Transfer|private-airport-transfer-cappadocia]] for full details."
        ]
      }
    ],
    "faq": [
      {
        "q": "Is Ortahisar on the shared shuttle route from NAV?",
        "a": "Yes. Shared shuttle service from Nevsehir Airport (NAV) is available for accommodation in Ortahisar."
      },
      {
        "q": "Can I book a private vehicle for this route instead of the shared shuttle?",
        "a": "Yes. Private Vito is €80 one way for up to 5 passengers, and Sprinter is €90 for up to 16, both per vehicle."
      }
    ],
    "related": [
      "ortahisar-to-nevsehir-airport-shuttle",
      "kayseri-airport-to-ortahisar-shuttle",
      "nevsehir-airport-shuttle",
      "kayseri-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Nevsehir Airport to Ortahisar Shuttle | Shared & Private Transfer",
    "twitterDescription": "Nevsehir Airport (NAV) to Ortahisar shuttle from €15 per person. Private Vito and Sprinter transfers available. About 45 km / 40–50 minutes."
  },
  {
    "slug": "nevsehir-airport-to-cavusin-shuttle",
    "title": "Nevsehir Airport to Cavusin Shuttle | Shared & Private Transfer",
    "description": "Nevsehir Airport (NAV) to Cavusin: shared airport shuttle, private Vito/Sprinter, 42 km, 40–55 min, hotel drop-off and booking details.",
    "eyebrow": "NAV → Cavusin airport shuttle",
    "h1": "Nevsehir Airport to Cavusin Shuttle",
    "lead": "Travel from Nevsehir Airport (NAV) to Cavusin by shared shuttle for €15 per person one way, or choose a private Vito or Sprinter. The usual road distance is about 42 km, with a typical driving time of 40–55 minutes. Cavusin accommodation ranges from main-road properties to older hillside streets, so the practical stopping point depends on the exact hotel.",
    "route": {
      "airport": "nevsehir",
      "town": "cavusin",
      "direction": "arrival"
    },
    "sections": [
      {
        "heading": "Nevsehir Airport to Cavusin: About 42 km / 40–55 Minutes",
        "paragraphs": [
          "The usual road estimate from Nevsehir Airport to Cavusin is about 42 km / 40–55 minutes. Cavusin accommodation can sit on the main village road, near the old settlement, or closer to valley access, so the full accommodation name matters for planning the correct final stop."
        ]
      },
      {
        "heading": "Early-Morning Traffic Can Affect the Final Approach",
        "paragraphs": [
          "Early-morning traffic around valley and balloon-launch areas can affect the last part of the route into Cavusin, even though the overall distance from NAV is short."
        ]
      },
      {
        "heading": "ASR Remains an Alternative When the Flight Works Better",
        "paragraphs": [
          "The longer option is [[Kayseri Airport to Cavusin Shuttle|kayseri-airport-to-cavusin-shuttle]]. Since the shared fare is the same from either airport, flight convenience can matter more than choosing the shortest road."
        ]
      },
      {
        "heading": "Private Transfer for This Route",
        "paragraphs": [
          "Prefer a dedicated vehicle? Private Vito is €80 one way for up to 5 passengers, and Sprinter is €90 for up to 16. See [[Private Airport Transfer|private-airport-transfer-cappadocia]] for full details."
        ]
      }
    ],
    "faq": [
      {
        "q": "Is Cavusin a separate shuttle destination from Goreme?",
        "a": "Yes. Cavusin and Goreme are separate pickup and drop-off areas, so the full accommodation name is needed for the correct stop."
      },
      {
        "q": "Can I book a private vehicle for this route instead of the shared shuttle?",
        "a": "Yes. Private Vito is €80 one way for up to 5 passengers, and Sprinter is €90 for up to 16, both per vehicle."
      }
    ],
    "related": [
      "cavusin-to-nevsehir-airport-shuttle",
      "kayseri-airport-to-cavusin-shuttle",
      "nevsehir-airport-shuttle",
      "kayseri-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Nevsehir Airport to Cavusin Shuttle | Shared & Private Transfer",
    "twitterDescription": "Nevsehir Airport (NAV) to Cavusin shuttle from €15 per person. Private Vito and Sprinter transfers available. About 42 km / 40–55 minutes."
  },
  {
    "slug": "goreme-to-kayseri-airport-shuttle",
    "title": "Goreme to Kayseri Airport Shuttle | Hotel Pickup",
    "description": "Goreme to Kayseri Airport (ASR) hotel pickup by shared shuttle or private transfer; approx. 75 km and 60–75 min, with route-specific departure guidance.",
    "eyebrow": "Goreme → ASR airport shuttle",
    "h1": "Goreme to Kayseri Airport Shuttle",
    "lead": "Hotel pickup from Goreme to Kayseri Airport (ASR) is available by €15-per-person shared shuttle or private Vito/Sprinter. The usual road distance is about 75 km, with a typical driving time of 60–75 minutes. Goreme’s cave-hotel and hillside streets can add local pickup time before the vehicle reaches the main road. Follow the confirmed pickup time, which also allows for shared pickups and the airport-arrival margin.",
    "route": {
      "airport": "kayseri",
      "town": "goreme",
      "direction": "return"
    },
    "sections": [
      {
        "heading": "ASR Needs a Real Departure Margin From Goreme",
        "paragraphs": [
          "Goreme to Kayseri Airport is about 75 km / 60–75 minutes by road. Your confirmed pickup time also allows for shared hotel pickups and the airport arrival buffer, so it may be earlier than the road time alone suggests."
        ]
      },
      {
        "heading": "Why Goreme Pickup Time Can Vary",
        "paragraphs": [
          "Shared hotel pickups in Goreme can add time before the vehicle reaches the main road, especially when several are scheduled. Follow the confirmed pickup time sent for your booking rather than calculating departure from the road journey alone. Balloon mornings can also add local traffic before the vehicle reaches the open road.",
          "Flying from NAV instead? See [[Goreme to Nevsehir Airport Shuttle|goreme-to-nevsehir-airport-shuttle]]. For a comparison of both airport options, see [[Goreme Airport Transfer|goreme-airport-transfer]]."
        ]
      },
      {
        "heading": "Private Transfer for This Route",
        "paragraphs": [
          "Prefer a dedicated vehicle? Private Vito is €90 one way for up to 5 passengers, and Sprinter is €110 for up to 16. See [[Private Airport Transfer|private-airport-transfer-cappadocia]] for full details."
        ]
      }
    ],
    "faq": [
      {
        "q": "Why can Goreme pickup be earlier than the 60–75 minute road estimate suggests?",
        "a": "A shared departure can include time for hotel pickups plus the airport buffer needed before the flight."
      },
      {
        "q": "Can I book a private vehicle for this route instead of the shared shuttle?",
        "a": "Yes. Private Vito is €90 one way for up to 5 passengers, and Sprinter is €110 for up to 16, both per vehicle."
      }
    ],
    "related": [
      "kayseri-airport-to-goreme-shuttle",
      "goreme-airport-transfer",
      "kayseri-airport-shuttle",
      "cappadocia-to-kayseri-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Goreme to Kayseri Airport Shuttle | Hotel Pickup",
    "twitterDescription": "Goreme hotel-to-airport shuttle to Kayseri Airport (ASR) from €15 per person. Private Vito and Sprinter available. About 75 km / 60–75 minutes."
  },
  {
    "slug": "urgup-to-kayseri-airport-shuttle",
    "title": "Urgup to Kayseri Airport Shuttle | Hotel Pickup",
    "description": "Urgup to Kayseri Airport (ASR) hotel pickup by shared shuttle or private transfer; approx. 70 km and 60–75 min, with route-specific departure guidance.",
    "eyebrow": "Urgup → ASR airport shuttle",
    "h1": "Urgup to Kayseri Airport Shuttle",
    "lead": "Hotel pickup from Urgup to Kayseri Airport (ASR) is available by €15-per-person shared shuttle or private Vito/Sprinter. The usual road distance is about 70 km, with a typical driving time of 60–75 minutes. Urgup accommodation spans central streets and hillside quarters, so the confirmed pickup point matters before the airport drive begins. Follow the confirmed pickup time, which also allows for shared pickups and the airport-arrival margin.",
    "route": {
      "airport": "kayseri",
      "town": "urgup",
      "direction": "return"
    },
    "sections": [
      {
        "heading": "Why the Urgup Pickup Point Matters",
        "paragraphs": [
          "Accommodation in Urgup is spread between central streets and hillside quarters, so the hotel pickup itself can add time before the vehicle reaches the main road. Be ready at the confirmed pickup point rather than assuming the vehicle can reach every old-town lane."
        ]
      },
      {
        "heading": "Urgup to Kayseri Airport: About 70 km / 60–75 Minutes",
        "paragraphs": [
          "The road estimate is about 70 km / 60–75 minutes. Follow the confirmed pickup time rather than calculating your own departure from the road distance alone.",
          "For the arrival direction, use [[Kayseri Airport to Urgup Shuttle|kayseri-airport-to-urgup-shuttle]]. Flying from NAV instead? See [[Urgup to Nevsehir Airport Shuttle|urgup-to-nevsehir-airport-shuttle]]."
        ]
      },
      {
        "heading": "Central Urgup and Hillside Properties Have Different Pickup Access",
        "paragraphs": [
          "Central hotels typically have straightforward vehicle access. Hillside and stone properties may need a few extra minutes for the vehicle to reach the confirmed pickup point, so have luggage ready in advance for an early departure."
        ]
      },
      {
        "heading": "Private Transfer for This Route",
        "paragraphs": [
          "Prefer a dedicated vehicle? Private Vito is €90 one way for up to 5 passengers, and Sprinter is €110 for up to 16. See [[Private Airport Transfer|private-airport-transfer-cappadocia]] for full details."
        ]
      }
    ],
    "faq": [
      {
        "q": "Can the shared shuttle pick me up from a cave hotel in Urgup for ASR?",
        "a": "Yes, subject to the confirmed vehicle-access point for that accommodation."
      },
      {
        "q": "Can I book a private vehicle for this route instead of the shared shuttle?",
        "a": "Yes. Private Vito is €90 one way for up to 5 passengers, and Sprinter is €110 for up to 16, both per vehicle."
      }
    ],
    "related": [
      "kayseri-airport-to-urgup-shuttle",
      "kayseri-airport-shuttle",
      "cappadocia-to-kayseri-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Urgup to Kayseri Airport Shuttle | Hotel Pickup",
    "twitterDescription": "Urgup hotel-to-airport shuttle to Kayseri Airport (ASR) from €15 per person. Private Vito and Sprinter available. About 70 km / 60–75 minutes."
  },
  {
    "slug": "uchisar-to-kayseri-airport-shuttle",
    "title": "Uchisar to Kayseri Airport Shuttle | Hotel Pickup",
    "description": "Uchisar to Kayseri Airport (ASR) hotel pickup by shared shuttle or private transfer; approx. 80 km and 70–85 min, with route-specific departure guidance.",
    "eyebrow": "Uchisar → ASR airport shuttle",
    "h1": "Uchisar to Kayseri Airport Shuttle",
    "lead": "Hotel pickup from Uchisar to Kayseri Airport (ASR) is available by €15-per-person shared shuttle or private Vito/Sprinter. The usual road distance is about 80 km, with a typical driving time of 70–85 minutes. Uchisar’s steep upper-village streets can require a practical pickup point rather than direct access to every hotel door. Follow the confirmed pickup time, which also allows for shared pickups and the airport-arrival margin.",
    "route": {
      "airport": "kayseri",
      "town": "uchisar",
      "direction": "return"
    },
    "sections": [
      {
        "heading": "Uchisar to Kayseri Airport: About 80 km / 70–85 Minutes",
        "paragraphs": [
          "The usual road estimate from Uchisar to Kayseri Airport is about 80 km / 70–85 minutes. Because the journey is relatively long, following the confirmed pickup time is important for the airport departure."
        ]
      },
      {
        "heading": "Why the Uchisar Pickup Point Matters",
        "paragraphs": [
          "Uchisar's streets narrow and climb toward the upper village, so the vehicle may need a specific practical stopping point rather than reaching every door directly. Be ready at the confirmed pickup point before the pickup window begins, since the longer ASR journey leaves less room to recover from a late start.",
          "Flying from NAV instead? See [[Uchisar to Nevsehir Airport Shuttle|uchisar-to-nevsehir-airport-shuttle]]."
        ]
      },
      {
        "heading": "Private Transfer for This Route",
        "paragraphs": [
          "Prefer a dedicated vehicle? Private Vito is €90 one way for up to 5 passengers, and Sprinter is €110 for up to 16. See [[Private Airport Transfer|private-airport-transfer-cappadocia]] for full details."
        ]
      }
    ],
    "faq": [
      {
        "q": "How long is Uchisar to Kayseri Airport by road?",
        "a": "The usual road estimate is about 80 km / 70–85 minutes."
      },
      {
        "q": "What if my hotel is on a steep Uchisar street?",
        "a": "Follow the confirmed pickup point and be ready there with your luggage before the pickup window."
      },
      {
        "q": "Can I book a private vehicle for this route instead of the shared shuttle?",
        "a": "Yes. Private Vito is €90 one way for up to 5 passengers, and Sprinter is €110 for up to 16, both per vehicle."
      }
    ],
    "related": [
      "kayseri-airport-to-uchisar-shuttle",
      "kayseri-airport-shuttle",
      "cappadocia-to-kayseri-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Uchisar to Kayseri Airport Shuttle | Hotel Pickup",
    "twitterDescription": "Uchisar hotel-to-airport shuttle to Kayseri Airport (ASR) from €15 per person. Private Vito and Sprinter available. About 80 km / 70–85 minutes."
  },
  {
    "slug": "avanos-to-kayseri-airport-shuttle",
    "title": "Avanos to Kayseri Airport Shuttle | Hotel Pickup",
    "description": "Avanos to Kayseri Airport (ASR) hotel pickup by shared shuttle or private transfer; approx. 70 km and 60–75 min, with route-specific departure guidance.",
    "eyebrow": "Avanos → ASR airport shuttle",
    "h1": "Avanos to Kayseri Airport Shuttle",
    "lead": "Hotel pickup from Avanos to Kayseri Airport (ASR) is available by €15-per-person shared shuttle or private Vito/Sprinter. The usual road distance is about 70 km, with a typical driving time of 60–75 minutes. Avanos accommodation is spread across different parts of town, so the full hotel name helps confirm the correct pickup point. Follow the confirmed pickup time, which also allows for shared pickups and the airport-arrival margin.",
    "route": {
      "airport": "kayseri",
      "town": "avanos",
      "direction": "return"
    },
    "sections": [
      {
        "heading": "Avanos to Kayseri Airport: About 70 km / 60–75 Minutes",
        "paragraphs": [
          "The 60–75 minute road estimate covers the drive itself. For a shared departure, follow the confirmed pickup time sent for your booking, since hotel pickups and the airport arrival buffer are included separately from the road journey.",
          "Avanos accommodation is spread across different parts of town, so the full accommodation name helps the transfer team confirm the correct pickup point rather than relying on a generic \"Avanos\" location.",
          "Flying from NAV instead? See [[Avanos to Nevsehir Airport Shuttle|avanos-to-nevsehir-airport-shuttle]]."
        ]
      },
      {
        "heading": "Private Transfer for This Route",
        "paragraphs": [
          "Prefer a dedicated vehicle? Private Vito is €90 one way for up to 5 passengers, and Sprinter is €110 for up to 16. See [[Private Airport Transfer|private-airport-transfer-cappadocia]] for full details."
        ]
      }
    ],
    "faq": [
      {
        "q": "Where will the shuttle pick me up in Avanos for Kayseri Airport?",
        "a": "Pickup is arranged for the confirmed accommodation or the nearest practical stopping point, depending on vehicle access."
      },
      {
        "q": "Can I book a private vehicle for this route instead of the shared shuttle?",
        "a": "Yes. Private Vito is €90 one way for up to 5 passengers, and Sprinter is €110 for up to 16, both per vehicle."
      }
    ],
    "related": [
      "kayseri-airport-to-avanos-shuttle",
      "kayseri-airport-shuttle",
      "cappadocia-to-kayseri-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Avanos to Kayseri Airport Shuttle | Hotel Pickup",
    "twitterDescription": "Avanos hotel-to-airport shuttle to Kayseri Airport (ASR) from €15 per person. Private Vito and Sprinter available. About 70 km / 60–75 minutes."
  },
  {
    "slug": "ortahisar-to-kayseri-airport-shuttle",
    "title": "Ortahisar to Kayseri Airport Shuttle | Hotel Pickup",
    "description": "Ortahisar to Kayseri Airport (ASR) hotel pickup by shared shuttle or private transfer; approx. 75 km and 60–75 min, with route-specific departure guidance.",
    "eyebrow": "Ortahisar → ASR airport shuttle",
    "h1": "Ortahisar to Kayseri Airport Shuttle",
    "lead": "Hotel pickup from Ortahisar to Kayseri Airport (ASR) is available by €15-per-person shared shuttle or private Vito/Sprinter. The usual road distance is about 75 km, with a typical driving time of 60–75 minutes. Narrow old-village streets can affect the first minutes of an Ortahisar pickup, making the confirmed meeting point important. Follow the confirmed pickup time, which also allows for shared pickups and the airport-arrival margin.",
    "route": {
      "airport": "kayseri",
      "town": "ortahisar",
      "direction": "return"
    },
    "sections": [
      {
        "heading": "Ortahisar to Kayseri Airport: About 75 km / 60–75 Minutes",
        "paragraphs": [
          "The road estimate covers the drive itself; the actual pickup time also depends on shared hotel pickups and the airport arrival buffer. Old-village access can influence the first few minutes, so the confirmed pickup point for your accommodation is the important starting point, not the road distance alone."
        ]
      },
      {
        "heading": "Why Ortahisar Pickup Timing Matters",
        "paragraphs": [
          "A shared vehicle may make other hotel pickups before leaving Ortahisar, and narrow village streets can affect how quickly it reaches the confirmed pickup point. Have your luggage ready before the pickup window so the vehicle can continue toward Kayseri Airport without unnecessary delay.",
          "Flying from NAV instead? See [[Ortahisar to Nevsehir Airport Shuttle|ortahisar-to-nevsehir-airport-shuttle]]. For the arrival direction, see [[Kayseri Airport to Ortahisar Shuttle|kayseri-airport-to-ortahisar-shuttle]]."
        ]
      },
      {
        "heading": "Private Transfer for This Route",
        "paragraphs": [
          "Prefer a dedicated vehicle? Private Vito is €90 one way for up to 5 passengers, and Sprinter is €110 for up to 16. See [[Private Airport Transfer|private-airport-transfer-cappadocia]] for full details."
        ]
      }
    ],
    "faq": [
      {
        "q": "Why should I be ready early for an Ortahisar-to-ASR pickup?",
        "a": "A shared departure may include other hotel pickups, so follow the confirmed pickup time sent for your booking."
      },
      {
        "q": "Can I book a private vehicle for this route instead of the shared shuttle?",
        "a": "Yes. Private Vito is €90 one way for up to 5 passengers, and Sprinter is €110 for up to 16, both per vehicle."
      }
    ],
    "related": [
      "kayseri-airport-to-ortahisar-shuttle",
      "kayseri-airport-shuttle",
      "cappadocia-to-kayseri-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Ortahisar to Kayseri Airport Shuttle | Hotel Pickup",
    "twitterDescription": "Ortahisar hotel-to-airport shuttle to Kayseri Airport (ASR) from €15 per person. Private Vito and Sprinter available. About 75 km / 60–75 minutes."
  },
  {
    "slug": "cavusin-to-kayseri-airport-shuttle",
    "title": "Cavusin to Kayseri Airport Shuttle | Hotel Pickup",
    "description": "Cavusin to Kayseri Airport (ASR) hotel pickup by shared shuttle or private transfer; approx. 75 km and 65–80 min, with route-specific departure guidance.",
    "eyebrow": "Cavusin → ASR airport shuttle",
    "h1": "Cavusin to Kayseri Airport Shuttle",
    "lead": "Hotel pickup from Cavusin to Kayseri Airport (ASR) is available by €15-per-person shared shuttle or private Vito/Sprinter. The usual road distance is about 75 km, with a typical driving time of 65–80 minutes. Cavusin accommodation can be near the main road, the old village, or valley-side areas, so the confirmed pickup point matters. Follow the confirmed pickup time, which also allows for shared pickups and the airport-arrival margin.",
    "route": {
      "airport": "kayseri",
      "town": "cavusin",
      "direction": "return"
    },
    "sections": [
      {
        "heading": "Cavusin to Kayseri Airport: About 75 km / 65–80 Minutes",
        "paragraphs": [
          "The road estimate covers the drive itself; the actual pickup time also depends on shared hotel pickups and the airport arrival buffer. Cavusin accommodation can sit near the main road, closer to the old village, or toward valley access, so the confirmed pickup point for your accommodation is what actually matters for departure planning."
        ]
      },
      {
        "heading": "Balloon Mornings Can Add Local Traffic in Cavusin",
        "paragraphs": [
          "Early balloon activity can add local traffic around Cavusin, so be ready at the confirmed pickup point before the pickup window begins.",
          "Flying from NAV instead? See [[Cavusin to Nevsehir Airport Shuttle|cavusin-to-nevsehir-airport-shuttle]]."
        ]
      },
      {
        "heading": "The Old Village and Main Road Are Not the Same Pickup Environment",
        "paragraphs": [
          "Because Cavusin accommodation splits between different parts of the village, the vehicle needs the confirmed pickup point rather than a generic \"Cavusin\" location, especially on a departure morning for Kayseri Airport."
        ]
      },
      {
        "heading": "Private Transfer for This Route",
        "paragraphs": [
          "Prefer a dedicated vehicle? Private Vito is €90 one way for up to 5 passengers, and Sprinter is €110 for up to 16. See [[Private Airport Transfer|private-airport-transfer-cappadocia]] for full details."
        ]
      }
    ],
    "faq": [
      {
        "q": "Why does the exact Cavusin pickup point matter for an ASR departure?",
        "a": "Accommodation is split between the main road, the old village, and areas closer to valley access, so the confirmed pickup point helps avoid delay before the journey to Kayseri Airport."
      },
      {
        "q": "Can I book a private vehicle for this route instead of the shared shuttle?",
        "a": "Yes. Private Vito is €90 one way for up to 5 passengers, and Sprinter is €110 for up to 16, both per vehicle."
      }
    ],
    "related": [
      "kayseri-airport-to-cavusin-shuttle",
      "kayseri-airport-shuttle",
      "cappadocia-to-kayseri-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Cavusin to Kayseri Airport Shuttle | Hotel Pickup",
    "twitterDescription": "Cavusin hotel-to-airport shuttle to Kayseri Airport (ASR) from €15 per person. Private Vito and Sprinter available. About 75 km / 65–80 minutes."
  },
  {
    "slug": "goreme-to-nevsehir-airport-shuttle",
    "title": "Goreme to Nevsehir Airport Shuttle | Hotel Pickup",
    "description": "Goreme to Nevsehir Airport (NAV) hotel pickup by shared shuttle or private transfer; approx. 40 km and 35–45 min, with route-specific departure guidance.",
    "eyebrow": "Goreme → NAV airport shuttle",
    "h1": "Goreme to Nevsehir Airport Shuttle",
    "lead": "Hotel pickup from Goreme to Nevsehir Airport (NAV) is available by €15-per-person shared shuttle or private Vito/Sprinter. The usual road distance is about 40 km, with a typical driving time of 35–45 minutes. Goreme’s cave-hotel and hillside streets can add local pickup time before the vehicle reaches the main road. Follow the confirmed pickup time, which also allows for shared pickups and the airport-arrival margin.",
    "route": {
      "airport": "nevsehir",
      "town": "goreme",
      "direction": "return"
    },
    "sections": [
      {
        "heading": "Goreme to Nevsehir Airport: About 40 km / 35–45 Minutes",
        "paragraphs": [
          "The road journey is relatively short, but the confirmed pickup time also allows for hotel pickups and the airport arrival buffer."
        ]
      },
      {
        "heading": "Cave-Hotel Pickup Can Add Time Before Leaving Goreme",
        "paragraphs": [
          "The road from Goreme to NAV is short, but a cave hotel or hillside property can still add local pickup time before the vehicle leaves Goreme. On an early departure, keep your luggage ready and be at the confirmed pickup point on time, even though the road journey to NAV is relatively short.",
          "For Kayseri flights, use [[Goreme to Kayseri Airport Shuttle|goreme-to-kayseri-airport-shuttle]]. For a comparison of both airports, see [[Goreme Airport Transfer|goreme-airport-transfer]]."
        ]
      },
      {
        "heading": "Private Transfer for This Route",
        "paragraphs": [
          "Prefer a dedicated vehicle? Private Vito is €80 one way for up to 5 passengers, and Sprinter is €90 for up to 16. See [[Private Airport Transfer|private-airport-transfer-cappadocia]] for full details."
        ]
      }
    ],
    "faq": [
      {
        "q": "How far is Goreme from Nevsehir Airport?",
        "a": "The usual road estimate is about 40 km / 35–45 minutes. Traffic and other confirmed pickups can change the total time."
      },
      {
        "q": "Can I book a private vehicle for this route instead of the shared shuttle?",
        "a": "Yes. Private Vito is €80 one way for up to 5 passengers, and Sprinter is €90 for up to 16, both per vehicle."
      }
    ],
    "related": [
      "nevsehir-airport-to-goreme-shuttle",
      "goreme-airport-transfer",
      "nevsehir-airport-shuttle",
      "cappadocia-to-kayseri-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Goreme to Nevsehir Airport Shuttle | Hotel Pickup",
    "twitterDescription": "Goreme hotel-to-airport shuttle to Nevsehir Airport (NAV) from €15 per person. Private Vito and Sprinter available. About 40 km / 35–45 minutes."
  },
  {
    "slug": "urgup-to-nevsehir-airport-shuttle",
    "title": "Urgup to Nevsehir Airport Shuttle | Hotel Pickup",
    "description": "Urgup to Nevsehir Airport (NAV) hotel pickup by shared shuttle or private transfer; approx. 50 km and 45–60 min, with route-specific departure guidance.",
    "eyebrow": "Urgup → NAV airport shuttle",
    "h1": "Urgup to Nevsehir Airport Shuttle",
    "lead": "Hotel pickup from Urgup to Nevsehir Airport (NAV) is available by €15-per-person shared shuttle or private Vito/Sprinter. The usual road distance is about 50 km, with a typical driving time of 45–60 minutes. Urgup accommodation spans central streets and hillside quarters, so the confirmed pickup point matters before the airport drive begins. Follow the confirmed pickup time, which also allows for shared pickups and the airport-arrival margin.",
    "route": {
      "airport": "nevsehir",
      "town": "urgup",
      "direction": "return"
    },
    "sections": [
      {
        "heading": "Urgup to Nevsehir Airport: About 50 km / 45–60 Minutes",
        "paragraphs": [
          "The road estimate covers the drive itself; the actual pickup time also depends on shared hotel pickups and the airport arrival buffer."
        ]
      },
      {
        "heading": "Why the Confirmed Pickup Point Matters in Urgup",
        "paragraphs": [
          "Some old-town accommodation in Urgup may require a specific practical pickup point depending on vehicle access. Follow the confirmed pickup point for your booking rather than relying on the road estimate alone.",
          "If you are flying from Kayseri instead, use [[Urgup to Kayseri Airport Shuttle|urgup-to-kayseri-airport-shuttle]]."
        ]
      },
      {
        "heading": "Private Transfer for This Route",
        "paragraphs": [
          "Prefer a dedicated vehicle? Private Vito is €80 one way for up to 5 passengers, and Sprinter is €90 for up to 16. See [[Private Airport Transfer|private-airport-transfer-cappadocia]] for full details."
        ]
      }
    ],
    "faq": [
      {
        "q": "How long is Urgup to Nevsehir Airport by road?",
        "a": "The usual road estimate is about 50 km / 45–60 minutes."
      },
      {
        "q": "Can I book a private vehicle for this route instead of the shared shuttle?",
        "a": "Yes. Private Vito is €80 one way for up to 5 passengers, and Sprinter is €90 for up to 16, both per vehicle."
      }
    ],
    "related": [
      "nevsehir-airport-to-urgup-shuttle",
      "kayseri-airport-to-urgup-shuttle",
      "nevsehir-airport-shuttle",
      "cappadocia-to-kayseri-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Urgup to Nevsehir Airport Shuttle | Hotel Pickup",
    "twitterDescription": "Urgup hotel-to-airport shuttle to Nevsehir Airport (NAV) from €15 per person. Private Vito and Sprinter available. About 50 km / 45–60 minutes."
  },
  {
    "slug": "uchisar-to-nevsehir-airport-shuttle",
    "title": "Uchisar to Nevsehir Airport Shuttle | Hotel Pickup",
    "description": "Uchisar to Nevsehir Airport (NAV) hotel pickup by shared shuttle or private transfer; approx. 35 km and 30–40 min, with route-specific departure guidance.",
    "eyebrow": "Uchisar → NAV airport shuttle",
    "h1": "Uchisar to Nevsehir Airport Shuttle",
    "lead": "Hotel pickup from Uchisar to Nevsehir Airport (NAV) is available by €15-per-person shared shuttle or private Vito/Sprinter. The usual road distance is about 35 km, with a typical driving time of 30–40 minutes. Uchisar’s steep upper-village streets can require a practical pickup point rather than direct access to every hotel door. Follow the confirmed pickup time, which also allows for shared pickups and the airport-arrival margin.",
    "route": {
      "airport": "nevsehir",
      "town": "uchisar",
      "direction": "return"
    },
    "sections": [
      {
        "heading": "Uchisar to Nevsehir Airport: About 35 km / 30–40 Minutes",
        "paragraphs": [
          "The road estimate is about 35 km / 30–40 minutes, but the confirmed pickup time also allows for shared hotel pickups and the airport arrival buffer."
        ]
      },
      {
        "heading": "A Short Distance Still Needs the Confirmed Pickup Point",
        "paragraphs": [
          "Uchisar's streets narrow and climb toward the upper village, so a short airport distance doesn't remove the need for a specific, confirmed pickup point rather than a generic \"Uchisar\" location.",
          "Flying from ASR instead? See [[Uchisar to Kayseri Airport Shuttle|uchisar-to-kayseri-airport-shuttle]]."
        ]
      },
      {
        "heading": "Private Transfer for This Route",
        "paragraphs": [
          "Prefer a dedicated vehicle? Private Vito is €80 one way for up to 5 passengers, and Sprinter is €90 for up to 16. See [[Private Airport Transfer|private-airport-transfer-cappadocia]] for full details."
        ]
      }
    ],
    "faq": [
      {
        "q": "Is 30–40 minutes enough to plan my own hotel departure time?",
        "a": "No. The 30–40 minutes is the road estimate only. Follow the confirmed pickup time, which also allows for shared hotel pickups and the airport arrival buffer."
      },
      {
        "q": "Why do you need my Nevsehir Airport departure flight number?",
        "a": "It helps the transfer team confirm your departure flight and plan the pickup time for your booking."
      },
      {
        "q": "Can I book a private vehicle for this route instead of the shared shuttle?",
        "a": "Yes. Private Vito is €80 one way for up to 5 passengers, and Sprinter is €90 for up to 16, both per vehicle."
      }
    ],
    "related": [
      "nevsehir-airport-to-uchisar-shuttle",
      "kayseri-airport-to-uchisar-shuttle",
      "nevsehir-airport-shuttle",
      "cappadocia-to-kayseri-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Uchisar to Nevsehir Airport Shuttle | Hotel Pickup",
    "twitterDescription": "Uchisar hotel-to-airport shuttle to Nevsehir Airport (NAV) from €15 per person. Private Vito and Sprinter available. About 35 km / 30–40 minutes."
  },
  {
    "slug": "avanos-to-nevsehir-airport-shuttle",
    "title": "Avanos to Nevsehir Airport Shuttle | Hotel Pickup",
    "description": "Avanos to Nevsehir Airport (NAV) hotel pickup by shared shuttle or private transfer; approx. 38 km and 35–50 min, with route-specific departure guidance.",
    "eyebrow": "Avanos → NAV airport shuttle",
    "h1": "Avanos to Nevsehir Airport Shuttle",
    "lead": "Hotel pickup from Avanos to Nevsehir Airport (NAV) is available by €15-per-person shared shuttle or private Vito/Sprinter. The usual road distance is about 38 km, with a typical driving time of 35–50 minutes. Avanos accommodation is spread across different parts of town, so the full hotel name helps confirm the correct pickup point. Follow the confirmed pickup time, which also allows for shared pickups and the airport-arrival margin.",
    "route": {
      "airport": "nevsehir",
      "town": "avanos",
      "direction": "return"
    },
    "sections": [
      {
        "heading": "Avanos to Nevsehir Airport: About 38 km / 35–50 Minutes",
        "paragraphs": [
          "The road estimate covers the drive itself; the actual pickup time also depends on shared hotel pickups and the airport arrival buffer. Avanos accommodation is spread across different parts of town, so the full accommodation name helps the transfer team confirm the correct pickup point rather than relying on a generic \"Avanos\" location.",
          "Flying from ASR instead? See [[Avanos to Kayseri Airport Shuttle|avanos-to-kayseri-airport-shuttle]]."
        ]
      },
      {
        "heading": "Private Transfer for This Route",
        "paragraphs": [
          "Prefer a dedicated vehicle? Private Vito is €80 one way for up to 5 passengers, and Sprinter is €90 for up to 16. See [[Private Airport Transfer|private-airport-transfer-cappadocia]] for full details."
        ]
      }
    ],
    "faq": [
      {
        "q": "How long is Avanos to Nevsehir Airport by road?",
        "a": "The usual road estimate is about 38 km / 35–50 minutes."
      },
      {
        "q": "Can I book a private vehicle for this route instead of the shared shuttle?",
        "a": "Yes. Private Vito is €80 one way for up to 5 passengers, and Sprinter is €90 for up to 16, both per vehicle."
      }
    ],
    "related": [
      "nevsehir-airport-to-avanos-shuttle",
      "kayseri-airport-to-avanos-shuttle",
      "nevsehir-airport-shuttle",
      "cappadocia-to-kayseri-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Avanos to Nevsehir Airport Shuttle | Hotel Pickup",
    "twitterDescription": "Avanos hotel-to-airport shuttle to Nevsehir Airport (NAV) from €15 per person. Private Vito and Sprinter available. About 38 km / 35–50 minutes."
  },
  {
    "slug": "ortahisar-to-nevsehir-airport-shuttle",
    "title": "Ortahisar to Nevsehir Airport Shuttle | Hotel Pickup",
    "description": "Ortahisar to Nevsehir Airport (NAV) hotel pickup by shared shuttle or private transfer; approx. 45 km and 40–50 min, with route-specific departure guidance.",
    "eyebrow": "Ortahisar → NAV airport shuttle",
    "h1": "Ortahisar to Nevsehir Airport Shuttle",
    "lead": "Hotel pickup from Ortahisar to Nevsehir Airport (NAV) is available by €15-per-person shared shuttle or private Vito/Sprinter. The usual road distance is about 45 km, with a typical driving time of 40–50 minutes. Narrow old-village streets can affect the first minutes of an Ortahisar pickup, making the confirmed meeting point important. Follow the confirmed pickup time, which also allows for shared pickups and the airport-arrival margin.",
    "route": {
      "airport": "nevsehir",
      "town": "ortahisar",
      "direction": "return"
    },
    "sections": [
      {
        "heading": "Ortahisar to Nevsehir Airport: About 45 km / 40–50 Minutes",
        "paragraphs": [
          "The road estimate covers the drive itself; the actual pickup time also depends on shared hotel pickups and the airport arrival buffer. Old-village access can influence the first few minutes, so the confirmed pickup point for your accommodation is what actually matters for departure planning."
        ]
      },
      {
        "heading": "A Short NAV Journey Still Needs a Confirmed Ortahisar Pickup",
        "paragraphs": [
          "The drive to Nevsehir Airport is relatively short, but narrow village streets can still affect where the shared shuttle can meet you. Use the confirmed pickup point for your accommodation and be ready before the pickup window rather than planning departure from the 40–50 minute road estimate alone.",
          "Flying from ASR instead? See [[Ortahisar to Kayseri Airport Shuttle|ortahisar-to-kayseri-airport-shuttle]]."
        ]
      },
      {
        "heading": "Private Transfer for This Route",
        "paragraphs": [
          "Prefer a dedicated vehicle? Private Vito is €80 one way for up to 5 passengers, and Sprinter is €90 for up to 16. See [[Private Airport Transfer|private-airport-transfer-cappadocia]] for full details."
        ]
      }
    ],
    "faq": [
      {
        "q": "Where will the shuttle pick me up in Ortahisar for Nevsehir Airport?",
        "a": "Pickup is arranged for the confirmed accommodation or the nearest practical stopping point, depending on vehicle access."
      },
      {
        "q": "Can I book a private vehicle for this route instead of the shared shuttle?",
        "a": "Yes. Private Vito is €80 one way for up to 5 passengers, and Sprinter is €90 for up to 16, both per vehicle."
      }
    ],
    "related": [
      "nevsehir-airport-to-ortahisar-shuttle",
      "kayseri-airport-to-ortahisar-shuttle",
      "nevsehir-airport-shuttle",
      "cappadocia-to-kayseri-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Ortahisar to Nevsehir Airport Shuttle | Hotel Pickup",
    "twitterDescription": "Ortahisar hotel-to-airport shuttle to Nevsehir Airport (NAV) from €15 per person. Private Vito and Sprinter available. About 45 km / 40–50 minutes."
  },
  {
    "slug": "cavusin-to-nevsehir-airport-shuttle",
    "title": "Cavusin to Nevsehir Airport Shuttle | Hotel Pickup",
    "description": "Cavusin to Nevsehir Airport (NAV) hotel pickup by shared shuttle or private transfer; approx. 42 km and 40–55 min, with route-specific departure guidance.",
    "eyebrow": "Cavusin → NAV airport shuttle",
    "h1": "Cavusin to Nevsehir Airport Shuttle",
    "lead": "Hotel pickup from Cavusin to Nevsehir Airport (NAV) is available by €15-per-person shared shuttle or private Vito/Sprinter. The usual road distance is about 42 km, with a typical driving time of 40–55 minutes. Cavusin accommodation can be near the main road, the old village, or valley-side areas, so the confirmed pickup point matters. Follow the confirmed pickup time, which also allows for shared pickups and the airport-arrival margin.",
    "route": {
      "airport": "nevsehir",
      "town": "cavusin",
      "direction": "return"
    },
    "sections": [
      {
        "heading": "Cavusin to Nevsehir Airport: About 42 km / 40–55 Minutes",
        "paragraphs": [
          "The road estimate is about 42 km / 40–55 minutes, but the confirmed pickup time also allows for shared hotel pickups and the airport arrival buffer."
        ]
      },
      {
        "heading": "A Clear Pickup Location Matters More Than the Short Road",
        "paragraphs": [
          "Accommodation in Cavusin can be spread between the village road and valley-side areas. A clear, confirmed pickup point helps avoid delays caused by meeting at the wrong location. Vehicle access to every entrance is not guaranteed, so the confirmed pickup point or nearest practical stopping point should be followed.",
          "Flying from ASR instead? See [[Cavusin to Kayseri Airport Shuttle|cavusin-to-kayseri-airport-shuttle]]."
        ]
      },
      {
        "heading": "Private Transfer for This Route",
        "paragraphs": [
          "Prefer a dedicated vehicle? Private Vito is €80 one way for up to 5 passengers, and Sprinter is €90 for up to 16. See [[Private Airport Transfer|private-airport-transfer-cappadocia]] for full details."
        ]
      }
    ],
    "faq": [
      {
        "q": "Does early balloon activity affect Cavusin departures to NAV?",
        "a": "It can make local roads busier on some mornings, so be ready at the confirmed pickup point."
      },
      {
        "q": "Where will the shuttle pick me up in Cavusin for Nevsehir Airport?",
        "a": "Pickup is arranged for the confirmed accommodation or the nearest practical stopping point, depending on vehicle access."
      },
      {
        "q": "Can I book a private vehicle for this route instead of the shared shuttle?",
        "a": "Yes. Private Vito is €80 one way for up to 5 passengers, and Sprinter is €90 for up to 16, both per vehicle."
      }
    ],
    "related": [
      "nevsehir-airport-to-cavusin-shuttle",
      "kayseri-airport-to-cavusin-shuttle",
      "nevsehir-airport-shuttle",
      "cappadocia-to-kayseri-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Cavusin to Nevsehir Airport Shuttle | Hotel Pickup",
    "twitterDescription": "Cavusin hotel-to-airport shuttle to Nevsehir Airport (NAV) from €15 per person. Private Vito and Sprinter available. About 42 km / 40–55 minutes."
  },
  {
    "slug": "cappadocia-airport",
    "title": "Cappadocia Airport Guide | NAV, ASR & Hotel Shuttle",
    "description": "Cappadocia Airport guide: understand Nevsehir Kapadokya Airport (NAV), Kayseri Airport (ASR), Goreme transfers, €15 shuttle and private options.",
    "eyebrow": "Airport gateway guide",
    "h1": "Cappadocia Airport: NAV, ASR & Hotel Transfers",
    "lead": "The phrase “Cappadocia Airport” can refer to Nevsehir Kapadokya Airport (NAV), while Kayseri Airport (ASR) is also widely used for Cappadocia travel. The airport code on your flight ticket is the one needed for booking.",
    "sections": [
      {
        "heading": "Which airport is Cappadocia Airport?",
        "paragraphs": [
          "Nevsehir Kapadokya Airport uses the IATA code **NAV** and is the airport whose official name carries Kapadokya/Cappadocia. In travel planning, however, “Cappadocia airport” is also used loosely for the two practical gateways serving the region: NAV and Kayseri Airport **ASR**. That is why a hotel transfer booking should use the airport code on the flight ticket rather than only the regional word Cappadocia.",
          "If you are still choosing a flight, compare [[Nearest Airport to Cappadocia|nearest-airport-to-cappadocia]] and [[Kayseri or Nevsehir Airport for Cappadocia|kayseri-or-nevsehir-airport-for-cappadocia]] before booking your ticket."
        ]
      },
      {
        "heading": "Nevsehir Kapadokya Airport (NAV)",
        "paragraphs": [
          "NAV is generally the shorter road transfer to central Cappadocia. Published route estimates include Goreme at about **40 km / 35–45 minutes**, Uchisar 35 km / 30–40 minutes, Avanos 38 km / 35–50 minutes, Cavusin 42 km / 40–55 minutes, Ortahisar 45 km / 40–50 minutes and Urgup 50 km / 45–60 minutes before possible shared-shuttle stops.",
          "The shared [[Nevsehir Airport shuttle|nevsehir-airport-shuttle]] is **€15 per person each way**. Private one-way pricing is Vito €80 for up to 5 passengers or Sprinter €90 for up to 16."
        ]
      },
      {
        "heading": "Kayseri Airport (ASR)",
        "paragraphs": [
          "ASR is farther by road but is widely used for Cappadocia because flight timing and availability can make it the better overall journey. Goreme is about **75 km / 60–75 minutes**, with the other supported towns generally in the 70–80 km range before shared stops.",
          "The [[Kayseri Airport shuttle|kayseri-airport-shuttle]] is also **€15 per person each way**. Private one-way pricing is Vito €90 or Sprinter €110. The equal shuttle fare means the flight schedule can be compared without a shared-fare penalty for choosing Kayseri."
        ]
      },
      {
        "heading": "Cappadocia Airport to Goreme: first identify NAV or ASR",
        "paragraphs": [
          "Goreme can be reached from both airports, so “Cappadocia Airport to Goreme” is not specific enough for a booking. For NAV use [[Nevsehir Airport to Goreme Shuttle|nevsehir-airport-to-goreme-shuttle]]; for ASR use [[Kayseri Airport to Goreme Shuttle|kayseri-airport-to-goreme-shuttle]]. [[Goreme Airport Transfer|goreme-airport-transfer]] covers both airport options, cave-hotel access and return pickup details."
        ]
      },
      {
        "heading": "Airport to hotel: shuttle or private vehicle",
        "paragraphs": [
          "The €15 shuttle is the main value service for Goreme, Urgup, Uchisar, Avanos, Ortahisar and Cavusin. It is shared, so other passengers and hotel stops can be part of the run. Travelers who want a dedicated vehicle can choose a private Vito or Sprinter; private prices are per vehicle rather than per person.",
          "The booking request collects the airport, journey direction, flight details, hotel, WhatsApp contact and passenger information including passport numbers required for every reservation. Payment is made in cash to the driver after the booking is confirmed."
        ]
      },
      {
        "heading": "Returning from Cappadocia to the airport",
        "paragraphs": [
          "For departure, the useful question changes from “which airport is Cappadocia Airport?” to “which airport is on my outbound ticket?” Use [[Cappadocia to Nevsehir Airport shuttle|cappadocia-to-nevsehir-airport-shuttle]] for NAV or [[Cappadocia to Kayseri Airport shuttle|cappadocia-to-kayseri-airport-shuttle]] for ASR. Pickup timing is confirmed from the actual flight and shared pickup plan rather than a universal clock rule."
        ]
      },
      {
        "heading": "NAV or ASR: Confirm the Code on Your Ticket",
        "paragraphs": [
          "The phrase “Cappadocia Airport” can refer to Nevsehir Kapadokya Airport (NAV), while Kayseri Airport (ASR) is also widely used for Cappadocia travel. The airport code on your flight ticket is the one needed for booking — see [[Nearest Airport to Cappadocia|nearest-airport-to-cappadocia]] if you haven't chosen a flight yet."
        ]
      }
    ],
    "faq": [
      {
        "q": "Is there an airport actually called Cappadocia Airport?",
        "a": "Nevsehir Kapadokya Airport (NAV) carries the Kapadokya/Cappadocia name. Kayseri Airport (ASR) is also a major airport used for Cappadocia trips."
      },
      {
        "q": "What is the Cappadocia airport code?",
        "a": "There is no single code for every Cappadocia traveler. NAV is Nevsehir Kapadokya Airport and ASR is Kayseri Airport."
      },
      {
        "q": "Which Cappadocia airport is closest to Goreme?",
        "a": "Nevsehir Kapadokya Airport (NAV) is closer by road to Goreme."
      },
      {
        "q": "How much is the airport shuttle from NAV or ASR?",
        "a": "€15 per person each way from either airport to supported central Cappadocia hotel areas."
      },
      {
        "q": "What does NAV Airport mean?",
        "a": "NAV is the IATA code for Nevsehir Kapadokya Airport."
      },
      {
        "q": "Can I use Kayseri Airport for Goreme?",
        "a": "Yes. ASR is farther by road than NAV but is a common Cappadocia gateway."
      },
      {
        "q": "Does Goreme have its own airport?",
        "a": "No. Goreme uses NAV or ASR for commercial passenger flights."
      },
      {
        "q": "Can I arrive through NAV and depart through ASR?",
        "a": "Yes, but it should be confirmed as two airport-specific legs because the route and private price differ."
      }
    ],
    "related": [
      "nearest-airport-to-cappadocia",
      "kayseri-or-nevsehir-airport-for-cappadocia",
      "nevsehir-airport-shuttle",
      "kayseri-airport-shuttle",
      "cappadocia-airport-transfer"
    ],
    "twitterTitle": "Cappadocia Airport Guide | NAV, ASR & Hotel Shuttle",
    "twitterDescription": "Cappadocia Airport guide for Nevsehir (NAV) and Kayseri (ASR): airport codes, hotel shuttle prices, private transfer options and supported towns."
  },
  {
    "slug": "nearest-airport-to-cappadocia",
    "title": "Nearest Airport to Cappadocia | NAV vs ASR",
    "description": "Which airport is closest to Cappadocia? Compare Nevsehir NAV and Kayseri ASR distances, transfer times and shuttle prices to Goreme and other towns.",
    "eyebrow": "Airport planning guide",
    "h1": "Nearest Airport to Cappadocia",
    "lead": "Nevsehir Airport is generally closer by road to central Cappadocia, but Kayseri Airport can still be the better trip when the flight schedule or fare is stronger.",
    "sections": [
      {
        "heading": "Cappadocia has two practical airport choices",
        "paragraphs": [
          "Nevsehir Kapadokya Airport (NAV) and Kayseri Erkilet Airport (ASR) are the main airports used by travelers staying in central Cappadocia. NAV is closer to Goreme, Uchisar and many central areas, while ASR has a longer road transfer but may offer a flight that better fits the itinerary."
        ]
      },
      {
        "heading": "Nearest does not always mean best",
        "paragraphs": [
          "A shorter transfer is useful, but a poor flight time or expensive connection can cancel the advantage. Compare the total journey from your origin, not just the final road distance. The shuttle price is €15 per person from either airport, so there is no shuttle-fare penalty for choosing ASR."
        ]
      },
      {
        "heading": "Goreme example",
        "paragraphs": [
          "NAV to Goreme is approximately 40 km / 35–45 minutes by road. ASR to Goreme is approximately 75 km / 60–75 minutes before shared stops. For hotel access and arrival details, compare [[Nevsehir Airport to Goreme Shuttle|nevsehir-airport-to-goreme-shuttle]] with [[Kayseri Airport to Goreme Shuttle|kayseri-airport-to-goreme-shuttle]]."
        ]
      },
      {
        "heading": "Other towns can change the comparison",
        "paragraphs": [
          "Uchisar is especially close to NAV, while Kayseri can feel more natural for eastern approaches such as Urgup. Always compare the town where you are actually sleeping rather than treating all of Cappadocia as Goreme."
        ]
      },
      {
        "heading": "Nearest airport to Uchisar, Goreme and Urgup",
        "paragraphs": [
          "NAV has a particularly strong road-distance advantage for Uchisar and Goreme. Urgup is farther east, so the difference is smaller than it is for Uchisar. Avanos, Ortahisar and Cavusin each have their own route figures. Check the actual hotel town before deciding what “nearest” means for your trip."
        ]
      },
      {
        "heading": "Airport name does not determine hotel coverage",
        "paragraphs": [
          "Both ASR and NAV shuttle services cover the same supported central hotel towns. Choosing Kayseri does not mean you lose access to Goreme or Uchisar; it simply means a longer road transfer. Likewise, choosing NAV does not guarantee a faster total trip if the flight connection itself is worse."
        ]
      },
      {
        "heading": "Private price is lower from Nevsehir, shared price is equal",
        "paragraphs": [
          "The shared fare is €15 per person from both airports. Private transfer is €80/€90 for NAV Vito/Sprinter and €90/€110 for ASR. This distinction matters more for groups choosing a dedicated vehicle."
        ]
      }
    ],
    "faq": [
      {
        "q": "What is the nearest airport to Cappadocia?",
        "a": "Nevsehir Kapadokya Airport (NAV) is generally the closest main airport to central Cappadocia, while Kayseri Airport (ASR) is the other major gateway."
      },
      {
        "q": "Is Kayseri Airport far from Cappadocia?",
        "a": "It is farther by road than NAV but remains a common and practical airport for the region."
      },
      {
        "q": "Which airport is closer to Goreme?",
        "a": "Nevsehir Airport."
      },
      {
        "q": "Is the shuttle cheaper from NAV?",
        "a": "No. Shared shuttle is €15 per person from either airport."
      },
      {
        "q": "Should I choose flight time or road distance?",
        "a": "Consider the full itinerary. A better flight can make Kayseri more practical even with a longer road transfer."
      },
      {
        "q": "What are the airport codes?",
        "a": "ASR for Kayseri and NAV for Nevsehir."
      }
    ],
    "related": [
      "cappadocia-airport",
      "kayseri-or-nevsehir-airport-for-cappadocia",
      "kayseri-airport-shuttle",
      "nevsehir-airport-shuttle"
    ],
    "twitterTitle": "Nearest Airport to Cappadocia | NAV vs ASR",
    "twitterDescription": "Which airport is closest to Cappadocia? Compare Nevsehir NAV and Kayseri ASR distances, transfer times and shuttle prices."
  },
  {
    "slug": "kayseri-or-nevsehir-airport-for-cappadocia",
    "title": "Kayseri or Nevsehir Airport for Cappadocia?",
    "description": "Compare Kayseri ASR and Nevsehir NAV for Cappadocia: road times, shuttle and private prices, Goreme distances and which airport fits different trips.",
    "eyebrow": "ASR vs NAV",
    "h1": "Kayseri or Nevsehir Airport for Cappadocia?",
    "lead": "NAV usually wins on road distance; ASR can win on flight availability. The best airport is the one that gives the best whole journey to your actual hotel town.",
    "sections": [
      {
        "heading": "Road-distance advantage: Nevsehir",
        "paragraphs": [
          "NAV is closer to most central Cappadocia bases. Goreme is roughly 40 km, Uchisar 35 km and Avanos about 38 km. This can reduce time in the vehicle after landing."
        ]
      },
      {
        "heading": "Flight-choice advantage can favor Kayseri",
        "paragraphs": [
          "ASR is farther from the central hotel towns, but a better-timed or better-priced flight can be worth the extra road time. Do not reject Kayseri before checking the flight options from Istanbul or your connecting city."
        ]
      },
      {
        "heading": "Shuttle price is equal",
        "paragraphs": [
          "Shared shuttle is €15 per person from either airport, so the airport comparison is not about a different shared fare. Private transfer does differ: Kayseri Vito/Sprinter €90/€110; Nevsehir €80/€90."
        ]
      },
      {
        "heading": "Compare the hotel town",
        "paragraphs": [
          "Uchisar, Goreme, Urgup, Avanos, Ortahisar and Cavusin all have different distances and local access conditions. Compare the figures for the town where you are actually staying before deciding."
        ]
      },
      {
        "heading": "Town-by-town comparison matters",
        "paragraphs": [
          "For Goreme, NAV is about 40 km while ASR is about 75 km. For Uchisar, NAV is about 35 km while ASR is about 80 km. Urgup is about 50 km from NAV and 70 km from ASR. Those differences are meaningful, but they should be compared with flight departure time, connection length and airfare."
        ]
      },
      {
        "heading": "A cheaper or better-timed flight can outweigh the road difference",
        "paragraphs": [
          "Saving 25 or 35 minutes on the road is not always valuable if the closer airport requires a poor connection or an inconvenient departure. The shared-shuttle fare is identical from both airports, so travelers can compare the full itinerary rather than assuming the closer airport is automatically cheaper."
        ]
      },
      {
        "heading": "Different arrival and departure airports need special confirmation",
        "paragraphs": [
          "Some travelers fly into one airport and leave from the other. That is operationally different from a standard round trip using one airport. Send both flight details clearly on WhatsApp so each direction can be confirmed with the correct airport and price."
        ]
      }
    ],
    "faq": [
      {
        "q": "Is NAV or ASR closer to Goreme?",
        "a": "Nevsehir Airport (NAV)."
      },
      {
        "q": "Which airport has cheaper shuttle?",
        "a": "Neither; both are €15 per person."
      },
      {
        "q": "Which airport has cheaper private transfer?",
        "a": "Nevsehir: Vito €80 / Sprinter €90 vs Kayseri €90 / €110."
      },
      {
        "q": "Is Kayseri still a good airport for Cappadocia?",
        "a": "Yes, especially when the flight schedule is more convenient."
      },
      {
        "q": "Can I arrive at one airport and depart from the other?",
        "a": "The booking form is designed around one airport per request. If your round trip uses different airports, send the details on WhatsApp so each airport leg can be confirmed correctly."
      }
    ],
    "related": [
      "nearest-airport-to-cappadocia",
      "kayseri-airport-shuttle",
      "nevsehir-airport-shuttle",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Kayseri or Nevsehir Airport for Cappadocia? | NAV vs ASR",
    "twitterDescription": "Compare Kayseri (ASR) and Nevsehir (NAV) for Cappadocia by town distance, transfer time, €15 shuttle fare and private transfer prices."
  },
  {
    "slug": "cappadocia-shared-shuttle-vs-private-transfer",
    "title": "Cappadocia Shuttle vs Private Transfer | Price & Timing",
    "description": "Compare Cappadocia shared shuttle vs private transfer: €15/person shuttle, Vito/Sprinter prices, hotel stops, timing, group size and airport coverage.",
    "eyebrow": "Service comparison",
    "h1": "Cappadocia Shuttle vs Private Transfer",
    "lead": "Shared shuttle wins on low per-person price; private transfer gives a dedicated vehicle and more direct hotel timing.",
    "sections": [
      {
        "heading": "Shared shuttle: best for value",
        "paragraphs": [
          "At €15 per person each way, the shuttle is usually the lowest-cost pre-booked airport-to-hotel choice for solo travelers and couples. It may carry other passengers and make several hotel stops."
        ]
      },
      {
        "heading": "Private transfer: best for control",
        "paragraphs": [
          "The Vito or Sprinter is dedicated to your booking. That is useful for groups, families, early flights, late arrivals and travelers who prefer no unrelated hotel drops."
        ]
      },
      {
        "heading": "Price comparison",
        "paragraphs": [
          "Kayseri private: Vito €90 / Sprinter €110. Nevsehir private: Vito €80 / Sprinter €90. Shared shuttle: €15 per person from either airport. Round trip doubles all one-way totals."
        ]
      },
      {
        "heading": "Coverage and hotel access",
        "paragraphs": [
          "Shared service covers Goreme, Urgup, Uchisar, Avanos, Cavusin and Ortahisar. Historic hotel lanes can still require a nearby safe stop even with a private vehicle if the road is unsuitable."
        ]
      },
      {
        "heading": "Passenger and passport details",
        "paragraphs": [
          "Both service types use reservation passenger information. The booking form collects names and passport numbers because they are required for every reservation."
        ]
      },
      {
        "heading": "Group-size examples make the choice clearer",
        "paragraphs": [
          "One passenger pays €15 on the shuttle, so private transfer is rarely the value choice purely on price. A group of six pays €90 total for a one-way shuttle; that begins to overlap with private vehicle pricing, especially from Nevsehir. For larger groups, compare the Sprinter’s per-vehicle price against the total per-person shuttle fare rather than looking only at the headline numbers."
        ]
      },
      {
        "heading": "Early flights and late arrivals change the value calculation",
        "paragraphs": [
          "Travelers with a normal daytime flight may be comfortable with shared timing. A very early departure, a late arrival, young children, unusual luggage or a tight onward connection can make the control of a dedicated private vehicle more important than the price difference."
        ]
      },
      {
        "heading": "Shared does not mean unplanned",
        "paragraphs": [
          "The shuttle is still a pre-booked airport service with flight, passenger and hotel details. “Shared” simply means other confirmed passengers and hotel stops can be part of the same run."
        ]
      }
    ],
    "faq": [
      {
        "q": "Is shared shuttle the same as Cappadocia shuttle transfer?",
        "a": "Yes. Shared describes how the €15 service operates."
      },
      {
        "q": "Which is faster?",
        "a": "Private transfer is normally more direct because it has no unrelated hotel stops."
      },
      {
        "q": "Which is cheaper for one person?",
        "a": "Shared shuttle at €15."
      },
      {
        "q": "Which can be better for a large group?",
        "a": "Private Sprinter can be attractive because the price is per vehicle for up to 16 passengers."
      },
      {
        "q": "Does private guarantee every cave-hotel doorway?",
        "a": "No. Vehicle access still depends on the actual street."
      },
      {
        "q": "Can I pay cash?",
        "a": "Yes, cash payment to the driver."
      }
    ],
    "related": [
      "cappadocia-shuttle-transfer",
      "private-airport-transfer-cappadocia",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Shared Shuttle vs Private Transfer in Cappadocia",
    "twitterDescription": "Compare Cappadocia shared airport shuttle and private Vito/Sprinter transfers by price, group size, hotel access and travel style."
  },
  {
    "slug": "cappadocia-cave-hotel-airport-transfer",
    "title": "Cappadocia Cave Hotel Airport Shuttle & Transfer",
    "description": "Airport shuttle and private transfer for Cappadocia cave hotels, cave suites and boutique accommodation from Kayseri ASR and Nevsehir NAV.",
    "eyebrow": "Accommodation access guide",
    "h1": "Cappadocia Cave Hotel Airport Transfer",
    "lead": "Cave hotels are a highlight of Cappadocia, but historic lanes and hillside entrances make exact accommodation details important for airport pickup and drop-off.",
    "sections": [
      {
        "heading": "Why the complete hotel name matters",
        "paragraphs": [
          "Cappadocia has many properties using words such as cave, suite, house, stone and boutique. Enter the full reservation name and town so the correct property can be identified."
        ]
      },
      {
        "heading": "When a vehicle cannot stop at the door",
        "paragraphs": [
          "Some old lanes are too narrow, steep or unsuitable for a shuttle or Sprinter to wait safely. In that case a nearby practical stop can be confirmed on WhatsApp. This is a normal access issue, not a reason to assume the town is outside the service area."
        ]
      },
      {
        "heading": "Cave-Hotel Access in Goreme",
        "paragraphs": [
          "Goreme's hillside accommodation includes properties such as Kelebek Cave Hotel, Sultan Cave Suites, Aydinli Cave Hotel, Divan Cave House, Artemis Cave Suites, Mithra Cave Hotel, Koza Cave Hotel and many others. See [[Goreme Airport Transfer|goreme-airport-transfer]] for local access notes and hotel examples."
        ]
      },
      {
        "heading": "Uchisar, Urgup, Ortahisar and Cavusin are different",
        "paragraphs": [
          "Uchisar has steep castle-side terraces; Urgup mixes town roads with historic quarters; Ortahisar uses smaller village lanes; Cavusin accommodation is more dispersed. Do not assume one cave-hotel access rule applies everywhere."
        ]
      },
      {
        "heading": "Cave hotel does not automatically mean difficult access",
        "paragraphs": [
          "Some cave properties sit on normal vehicle roads and are straightforward; others have steep steps, narrow lanes or reception points away from the room entrance. The correct property name is what allows the team to distinguish those cases."
        ]
      },
      {
        "heading": "Arrival luggage and departure luggage create different problems",
        "paragraphs": [
          "On arrival, guests may be able to walk a short distance from a safe stop while the driver unloads luggage. On departure, the passenger must already be at the agreed point because the shared vehicle has a schedule. Packing and checkout should be finished before the pickup window."
        ]
      }
    ],
    "faq": [
      {
        "q": "Can the shuttle serve cave hotels?",
        "a": "Yes, in supported towns, subject to safe vehicle access or a nearby confirmed point."
      },
      {
        "q": "Can a Sprinter reach every cave-hotel lane?",
        "a": "No. Vehicle size and street conditions vary."
      },
      {
        "q": "Is Goreme the only cave-hotel area?",
        "a": "No. Uchisar, Urgup, Ortahisar and Cavusin also have cave and stone accommodation."
      },
      {
        "q": "Can I book hotel pickup for departure?",
        "a": "Yes, with the pickup point confirmed for the property."
      },
      {
        "q": "Are passport details required?",
        "a": "Yes, for every reservation."
      }
    ],
    "related": [
      "goreme-airport-transfer",
      "cappadocia-airport-transfer",
      "kayseri-airport-shuttle",
      "nevsehir-airport-shuttle"
    ],
    "twitterTitle": "Cappadocia Cave Hotel Airport Transfer",
    "twitterDescription": "Cave hotel airport pickup and drop-off in supported Cappadocia towns, with full accommodation names, practical access notes and confirmed pickup points."
  },
  {
    "slug": "istanbul-to-cappadocia",
    "title": "Istanbul to Cappadocia Flights & Airport Shuttle Guide",
    "description": "Istanbul to Cappadocia: fly IST/SAW to Kayseri ASR or Nevsehir NAV, then use a €15 airport shuttle to central Cappadocia hotels.",
    "eyebrow": "Flight + transfer guide",
    "h1": "Istanbul to Cappadocia: Flight & Airport Transfer Guide",
    "lead": "For most visitors, the practical route is an Istanbul flight to Kayseri (ASR) or Nevsehir (NAV), followed by a pre-booked Cappadocia airport shuttle to the hotel.",
    "sections": [
      {
        "heading": "Fly rather than treating it as an airport road transfer",
        "paragraphs": [
          "This service does not operate a direct shared road shuttle from Istanbul to Cappadocia. Travelers normally fly from Istanbul Airport (IST) or Sabiha Gokcen (SAW) to ASR or NAV, then continue by airport shuttle."
        ]
      },
      {
        "heading": "Choose ASR or NAV from the full itinerary",
        "paragraphs": [
          "NAV is closer by road to many Cappadocia hotels; ASR can have a flight time or fare that makes the longer road transfer worthwhile. The shared shuttle price is €15 from either airport, so compare the flight first."
        ]
      },
      {
        "heading": "After landing in Cappadocia",
        "paragraphs": [
          "Collect baggage, follow the WhatsApp-confirmed meeting instructions and use the passenger reservation name for the airport meeting. The booking needs the correct flight number, hotel, names and passport numbers."
        ]
      },
      {
        "heading": "Hotel drop-off areas",
        "paragraphs": [
          "Shared service covers Goreme, Urgup, Uchisar, Avanos, Cavusin and Ortahisar. "
        ]
      },
      {
        "heading": "Build the transfer around the flight, not only the Istanbul airport",
        "paragraphs": [
          "Istanbul has two major airports, IST and SAW, while the Cappadocia end normally uses ASR or NAV. The important transfer information is the flight that actually lands in Kayseri or Nevsehir. Enter its flight number so arrival coordination is tied to the correct landing."
        ]
      },
      {
        "heading": "Leave room for baggage claim before meeting the shuttle",
        "paragraphs": [
          "The airport shuttle does not start at the aircraft door. After landing, complete baggage claim and continue to the meeting point using the instructions confirmed on WhatsApp. This is particularly important for travelers connecting through Istanbul who may be tired or unfamiliar with the final airport."
        ]
      },
      {
        "heading": "Return to Istanbul follows the hotel-to-airport flow",
        "paragraphs": [
          "For the journey home, the Cappadocia shuttle collects from the confirmed hotel area and drives to ASR or NAV for the domestic flight back to Istanbul. Use the [[Cappadocia to Istanbul guide|cappadocia-to-istanbul]] and match the hotel pickup to the departure airport and actual hotel town."
        ]
      }
    ],
    "faq": [
      {
        "q": "Is there a direct shuttle from Istanbul to Cappadocia?",
        "a": "Not as this shared airport service. Fly to ASR or NAV and use the airport shuttle from there."
      },
      {
        "q": "Which Istanbul airports fly to Cappadocia?",
        "a": "Travelers commonly use IST or SAW for flights to Kayseri or Nevsehir; check the current airline schedule for your dates."
      },
      {
        "q": "Which Cappadocia airport should I choose?",
        "a": "NAV is closer by road; ASR can still be better if the flight schedule is more convenient."
      },
      {
        "q": "How much is the shuttle after landing?",
        "a": "€15 per person from either ASR or NAV."
      },
      {
        "q": "Do I book the shuttle using my Istanbul flight number?",
        "a": "Use the flight number that lands at Kayseri or Nevsehir for the Cappadocia arrival."
      },
      {
        "q": "Can I book the return shuttle for my flight back to Istanbul?",
        "a": "Yes. Use the departure flight from ASR or NAV and the hotel-to-airport direction."
      },
      {
        "q": "Is baggage claim included in the published road time?",
        "a": "No. Road estimates begin after the airport process; baggage claim happens before the shuttle journey starts."
      }
    ],
    "related": [
      "cappadocia-airport",
      "cappadocia-to-istanbul",
      "nearest-airport-to-cappadocia",
      "kayseri-or-nevsehir-airport-for-cappadocia",
      "kayseri-airport-shuttle",
      "nevsehir-airport-shuttle"
    ],
    "twitterTitle": "Istanbul to Cappadocia: Flight & Airport Transfer Guide",
    "twitterDescription": "Fly from Istanbul (IST/SAW) to Kayseri (ASR) or Nevsehir (NAV), then continue by €15 airport shuttle to your hotel in a supported Cappadocia town."
  },
  {
    "slug": "cappadocia-to-istanbul",
    "title": "Cappadocia to Istanbul | Airport Shuttle & Flight Guide",
    "description": "Cappadocia to Istanbul travel guide: hotel shuttle to NAV or ASR, flight planning, Goreme road distance context and airport pickup timing.",
    "eyebrow": "Cappadocia → Istanbul",
    "h1": "Cappadocia to Istanbul: Hotel Shuttle & Flight Guide",
    "lead": "For most short-stay travelers, the practical return is a hotel pickup to Nevsehir (NAV) or Kayseri (ASR) followed by a flight to Istanbul. The shuttle covers the Cappadocia hotel-to-airport leg; the Istanbul segment is by air.",
    "sections": [
      {
        "heading": "The airport transfer is the first leg, not the whole Istanbul journey",
        "paragraphs": [
          "This service does **not** operate a shared road shuttle from Cappadocia all the way to Istanbul. Instead, book the Cappadocia hotel-to-airport leg, then use the airline ticket from NAV or ASR to Istanbul. That keeps a regional airport service separate from a much longer intercity journey."
        ]
      },
      {
        "heading": "Choose NAV or ASR from the outbound flight",
        "paragraphs": [
          "NAV is generally closer to Goreme, Uchisar and other central towns. ASR is farther but may have a flight time or fare that works better. The shared hotel-to-airport shuttle is **€15 per person** to either airport, while private prices are NAV €80/€90 and ASR €90/€110 for Vito/Sprinter.",
          "If the departure airport is not chosen yet, compare [[Nearest Airport to Cappadocia|nearest-airport-to-cappadocia]] and [[Kayseri or Nevsehir Airport|kayseri-or-nevsehir-airport-for-cappadocia]] before booking the flight."
        ]
      },
      {
        "heading": "Cappadocia to Istanbul distance: road distance is not shuttle distance",
        "paragraphs": [
          "From Goreme to central Istanbul the road journey is roughly **725 km**, so it is a very different trip from the 35–80 km airport transfers within Cappadocia. The exact figure changes with the Istanbul endpoint and the Cappadocia town. For most visitors with limited time, flying from NAV or ASR is the practical way to separate the long intercity journey from the short hotel-to-airport transfer."
        ]
      },
      {
        "heading": "Hotel pickup before the Istanbul flight",
        "paragraphs": [
          "Enter the outbound flight number, complete accommodation name, passenger details and WhatsApp contact. The pickup time is confirmed from the actual flight and shared pickup order. Do not calculate the departure only from the direct road time because a shared run can include other hotel pickups before leaving Cappadocia. Use [[Cappadocia to Nevsehir Airport shuttle|cappadocia-to-nevsehir-airport-shuttle]] or [[Cappadocia to Kayseri Airport shuttle|cappadocia-to-kayseri-airport-shuttle]] according to the outbound airport, then match the pickup timing and meeting point to Goreme, Urgup, Uchisar, Avanos, Ortahisar or Cavusin where you are staying."
        ]
      },
      {
        "heading": "Departure-Day Pickup Timing Varies by Town",
        "paragraphs": [
          "Pickup timing can vary between Goreme, Urgup, Uchisar, Avanos, Ortahisar and Cavusin because road access and practical stopping points differ. Follow the confirmed pickup time and pickup point sent for your reservation rather than planning from the direct road time alone."
        ]
      },
      {
        "heading": "Flying back to IST or SAW",
        "paragraphs": [
          "Istanbul Airport (IST) and Sabiha Gokcen (SAW) are different airports. Follow the airport shown on the airline booking after the Cappadocia flight is selected. The Cappadocia shuttle booking itself is based on the airport you depart from in Cappadocia—NAV or ASR—not on whether the Istanbul arrival is IST or SAW."
        ]
      },
      {
        "heading": "Do not confuse Istanbul distance with airport pickup timing",
        "paragraphs": [
          "The long road distance to Istanbul is useful for deciding whether to fly or travel overland, but it should never be used to calculate the Cappadocia hotel pickup. The airport transfer ends at NAV or ASR, and its pickup is confirmed from the departure flight and the shared pickup plan."
        ]
      }
    ],
    "faq": [
      {
        "q": "Is there a direct Cappadocia to Istanbul shuttle?",
        "a": "Not as this airport-shuttle service. The normal flow is hotel transfer to NAV or ASR and then a flight to Istanbul."
      },
      {
        "q": "How far is Cappadocia from Istanbul by road?",
        "a": "Goreme to central Istanbul is roughly 725 km by road; the exact distance changes with the start and end point."
      },
      {
        "q": "Which airport should I use to fly from Cappadocia to Istanbul?",
        "a": "Use the NAV or ASR flight that best fits your schedule; NAV is usually closer by road to central Cappadocia."
      },
      {
        "q": "How much is the hotel shuttle to the airport?",
        "a": "€15 per person each way to either NAV or ASR from supported hotel towns."
      },
      {
        "q": "Can I book a private hotel transfer for the Istanbul flight?",
        "a": "Yes. Vito and Sprinter are available with airport-specific fixed prices."
      },
      {
        "q": "Can I leave from a different airport than I arrived at?",
        "a": "Yes, but each airport leg must be confirmed correctly because the route and private price differ."
      },
      {
        "q": "Should I use my Istanbul airport code in the Cappadocia shuttle form?",
        "a": "No. Select the Cappadocia departure airport—NAV or ASR—and enter the flight number leaving that airport."
      }
    ],
    "related": [
      "istanbul-to-cappadocia",
      "cappadocia-to-nevsehir-airport-shuttle",
      "nearest-airport-to-cappadocia",
      "kayseri-or-nevsehir-airport-for-cappadocia",
      "cappadocia-to-kayseri-airport-shuttle"
    ],
    "twitterTitle": "Cappadocia to Istanbul: Hotel Shuttle & Flight Guide",
    "twitterDescription": "Hotel pickup from supported Cappadocia towns to Kayseri (ASR) or Nevsehir (NAV) from €15 per person, then fly to Istanbul. Private Vito and Sprinter also available."
  }
];

export const pageBySlug = new Map(pages.map((page) => [page.slug, page]));
export function prettySlug(slug:string){ const page=pageBySlug.get(slug); return page?.h1 || slug.split('-').map(s=>s.charAt(0).toUpperCase()+s.slice(1)).join(' '); }

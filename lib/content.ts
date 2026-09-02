import { airports, towns } from './site';

export type ContentSection = { heading: string; paragraphs: string[]; bullets?: string[] };
export type FaqItem = { q: string; a: string };
export type SeoPage = {
  slug: string; title: string; description: string; primaryKeyword: string; secondaryKeywords?: string[];
  eyebrow: string; h1: string; lead: string; sections: ContentSection[]; faq: FaqItem[]; related: string[];
  route?: { airport: 'kayseri' | 'nevsehir'; town: keyof typeof towns; direction: 'arrival' | 'return' };
};

const townProfiles = {
  "goreme": {
    "name": "Goreme",
    "overview": "Goreme is one of the most popular accommodation bases in Cappadocia and the place where many first-time visitors expect to stay. The center is compact, restaurants and tour meeting points are close together, and cave hotels climb the slopes around the town. That convenience also creates a transfer detail that matters: not every hotel entrance is on a wide street, so the full property name is more useful than simply writing ‘Goreme’ in the booking.",
    "hotelAccess": "Hotel access in Goreme changes from one street to another. Properties around the bus station and lower center are normally straightforward, while hillside cave hotels can sit on steep, narrow or one-way lanes. A shuttle may use the nearest safe stopping point if a larger vehicle cannot wait directly at the entrance. Private Vito access can be easier in some lanes, but the exact meeting point is always confirmed from the real property location rather than promised in advance.",
    "arrivalIdeas": "After check-in, an easy first plan is to stay local: walk through central Goreme, visit a viewpoint, or save Goreme Open Air Museum for a time when you are not tired from flying. Travelers arriving in the evening often prefer dinner and an early night because balloon mornings begin before sunrise. If you arrive early in the day, the town is well placed for short walks and for joining Red, Green or local valley tours.",
    "departureIdeas": "On departure day, avoid committing to a long valley hike close to pickup time. Sunrise balloon traffic, winter weather and hotel collection order can all change the rhythm of the morning. If your flight is late, keep the final hours flexible with breakfast, a terrace, shopping or a short town walk, then return to the confirmed pickup point before the shuttle window.",
    "special": "Goreme’s popularity means hotel names can be deceptively similar. Sending the exact reservation name and, when useful, a map pin helps distinguish between properties with ‘cave’, ‘suite’, ‘house’ or ‘stone’ in the name. This is especially useful when a guesthouse has more than one entrance or a reception on a different lane from the map marker.",
    "landmarks": [
      "Goreme Open Air Museum",
      "Sunset Point and town viewpoints",
      "Love Valley and Pigeon Valley access",
      "Red and Rose Valley connections",
      "sunrise balloon-viewing areas"
    ],
    "hotels": [
      "Kelebek Cave Hotel",
      "Sultan Cave Suites",
      "Aydinli Cave Hotel",
      "Divan Cave House",
      "Artemis Cave Suites",
      "Mithra Cave Hotel",
      "Koza Cave Hotel",
      "Traveller’s Cave Hotel",
      "Cappadocia Cave Suites",
      "Anatolian Houses Cave Hotel & Spa",
      "Royal Stone Houses – Goreme",
      "Osmanli Cappadocia Hotel",
      "Henna Hotel",
      "Chelebi Cave House",
      "Arinna Cappadocia",
      "Local Cave House Hotel",
      "Vineyard Cave Hotel",
      "Harman Cave Hotel",
      "Historical Goreme House",
      "Göreme Cave Lodge"
    ],
    "hotelIntro": "Examples of well-known Goreme accommodation names are listed below only to make transfer planning easier; this is not a hotel ranking. If your hotel is not listed, the service can still be requested as long as the accommodation is within the supported Goreme area.",
    "faq": [
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
      },
      {
        "q": "What can I do if I arrive in Goreme before hotel check-in?",
        "a": "Keep the first plan simple: central Goreme, a cafe, a viewpoint or a short local walk are easier than committing to a long valley route with luggage."
      }
    ]
  },
  "urgup": {
    "name": "Urgup",
    "overview": "Urgup feels more like a living town than a compact tourism village. Restaurants, shops and wine culture sit around the center, while historic stone and cave hotels spread onto the surrounding slopes. For airport transfers this means the town name alone is not enough: a central hotel and a hillside cave property can require different final approaches even though both are in Urgup.",
    "hotelAccess": "Many Urgup hotels are reached directly by normal roads, but older quarters include stepped entrances, narrow stone lanes and properties built into the hillside. Larger vehicles may need a practical stopping point close to reception rather than at the exact room entrance. Supplying the full hotel name lets the driver plan the last few minutes of the route before reaching town.",
    "arrivalIdeas": "Urgup works well for an easy evening after a flight because the center has restaurants and cafes without requiring another transfer. Temenni Hill and the old stone streets are natural short walks, while the Three Beauties viewpoint can be added when there is enough daylight. Travelers planning wineries or a full Cappadocia tour are better doing that after rest rather than squeezing it into an uncertain arrival day.",
    "departureIdeas": "Before an airport departure, keep the last activity close to your accommodation or central Urgup. A breakfast, coffee, market stop or short walk is easier to control than a valley excursion. Be ready at the confirmed pickup point with luggage because shared shuttle timing depends on the departure flight and the collection order for that run.",
    "special": "Urgup is particularly useful for travelers who want evening dining and a town atmosphere but still need road access to Goreme, Ortahisar and the eastern valleys. That makes it a good base, but a booking that says only ‘Cappadocia’ can hide the real destination. Select Urgup in the route request so the correct distance and hotel access are used.",
    "landmarks": [
      "Temenni Hill",
      "Three Beauties viewpoint",
      "historic stone streets",
      "local wine houses",
      "routes toward Ortahisar and the valleys"
    ],
    "hotels": [
      "Kayakapi Premium Caves",
      "Sacred House",
      "Yunak Evleri",
      "MDC Cave Hotel",
      "Dere Suites",
      "Fresco Cave Suites",
      "Acropolis Cave Suite",
      "Seraphim Cave Suites"
    ],
    "hotelIntro": "These are examples of recognizable accommodation names in and around the Urgup area, not a ranking or a promise of door access. The exact property name should still be entered in the booking form.",
    "faq": [
      {
        "q": "Is Urgup included in the €15 shuttle area?",
        "a": "Yes. Shared shuttle pickup and drop-off is available for confirmed Urgup accommodation."
      },
      {
        "q": "Can a Sprinter reach every Urgup cave hotel?",
        "a": "No universal guarantee is possible because some historic lanes have access limits. The practical stop is confirmed for the specific hotel."
      },
      {
        "q": "Is Urgup closer to Kayseri or Nevsehir Airport?",
        "a": "Road distance varies by route; Nevsehir is often shorter by road, but flight schedule and price can make either airport practical."
      },
      {
        "q": "What is a safe last activity before leaving Urgup?",
        "a": "Stay near the center or your hotel. A short meal or walk is easier to control than a distant sightseeing stop before an airport pickup."
      }
    ]
  },
  "uchisar": {
    "name": "Uchisar",
    "overview": "Uchisar sits high above the central Cappadocia valleys and has a different transfer character from Goreme or Avanos. Boutique cave hotels and terraces cluster around the castle and along sloping roads. The views are a reason to stay here, but the elevation and narrow lanes make the exact hotel location especially important for pickup and drop-off planning.",
    "hotelAccess": "Some Uchisar hotels have excellent vehicle access; others are reached through steep or tight streets below the castle. A shared shuttle cannot be assumed to stop at every historic doorway. Entering the complete accommodation name allows the operation team to confirm a safe stop and helps avoid confusion between similarly named terraces and cave properties.",
    "arrivalIdeas": "Uchisar Castle and the nearby viewpoints are the easiest first experiences after check-in. Pigeon Valley begins nearby, but a full walk is better saved for a day when you are not carrying luggage or watching the clock. The village is calmer in the evening than Goreme, so many guests simply enjoy the hotel terrace and sunset after an airport arrival.",
    "departureIdeas": "For an airport departure, be at the confirmed point rather than waiting inside a hillside hotel until the last minute. If you have spare time, a castle-area coffee, a viewpoint or a short village walk is easier to manage than descending into a valley. Private transfer is often attractive when a fixed pickup time matters more than per-person price.",
    "special": "Because Uchisar is elevated, winter weather can make local streets feel different from the wider regional roads. Published travel times are useful estimates, not guarantees. A correct flight code and reachable WhatsApp number are more valuable than trying to calculate your own pickup time from distance alone.",
    "landmarks": [
      "Uchisar Castle",
      "Pigeon Valley",
      "panoramic terraces",
      "castle-side village streets",
      "sunset viewpoints"
    ],
    "hotels": [
      "Museum Hotel",
      "Argos in Cappadocia",
      "Taskonaklar",
      "Ariana Sustainable Luxury Lodge",
      "Rox Cappadocia",
      "Karlik Evi Hotel",
      "Cappadocia Cave Resort & Spa"
    ],
    "hotelIntro": "Uchisar has many boutique cave and stone properties. These recognizable examples are included to show why exact hotel identification matters; they are not a hotel ranking.",
    "faq": [
      {
        "q": "Does the shuttle serve Uchisar hotels?",
        "a": "Yes, subject to reservation and safe vehicle access or a nearby confirmed meeting point."
      },
      {
        "q": "Why is exact hotel access important in Uchisar?",
        "a": "Many properties sit on steep or narrow lanes around the castle, so the vehicle stop can differ by hotel."
      },
      {
        "q": "Is Nevsehir Airport close to Uchisar?",
        "a": "It is one of the shorter central Cappadocia road routes, approximately 35 km with a typical road estimate around 30–40 minutes."
      },
      {
        "q": "Can I visit Uchisar Castle before a late flight?",
        "a": "If the pickup is later and you keep a comfortable time buffer, a short castle-area visit is easier to control than a long valley walk."
      }
    ]
  },
  "avanos": {
    "name": "Avanos",
    "overview": "Avanos is a riverside town on the Kizilirmak and has a more open road layout than the steep cave-hotel centers. Pottery workshops, bridges and local neighborhoods spread on both sides of the river. For airport transfer planning, the useful detail is which hotel and which side of town you are staying on, not simply the word ‘Avanos’.",
    "hotelAccess": "Vehicle access in Avanos is often straightforward, especially for larger hotels and properties on wider roads. Confusion is more likely to come from the town’s spread than from narrow cave lanes. Use the full hotel name and address so the shuttle does not have to guess between the old center, riverfront and newer accommodation areas.",
    "arrivalIdeas": "The Kizilirmak riverfront and a pottery workshop are easy low-pressure activities after arrival. Avanos is also convenient for Pasabag and Zelve, but those are better planned when you have enough daylight and no luggage. Guests arriving late can eat in town and start the sightseeing route the following morning.",
    "departureIdeas": "A final river walk or pottery browse can fit before a later flight because it keeps you near town. Avoid starting a longer northern Cappadocia drive close to the confirmed pickup. Shared shuttle passengers should be ready before the vehicle arrives because other hotel collections may follow.",
    "special": "Avanos is sometimes overlooked in airport-transfer searches because many visitors automatically type Goreme. If your reservation is actually in Avanos, choose the Avanos route: both the distance and the final road approach differ, and that affects realistic travel expectations.",
    "landmarks": [
      "Kizilirmak River",
      "pottery workshops",
      "Avanos old town",
      "suspension and river crossings",
      "routes to Pasabag and Zelve"
    ],
    "hotels": [
      "DoubleTree by Hilton Avanos – Cappadocia",
      "Avrasya Hotel",
      "Suhan Cappadocia Hotel & Spa",
      "Mira Cappadocia Hotel",
      "Sofa Hotel Avanos",
      "Hikmet’s House",
      "Adanos Konuk Evi"
    ],
    "hotelIntro": "Avanos accommodation ranges from larger hotels to smaller local properties. The examples below are for identification context rather than ranking.",
    "faq": [
      {
        "q": "Is Avanos included in the shared shuttle route?",
        "a": "Yes. Confirmed Avanos hotel pickup and drop-off is included."
      },
      {
        "q": "Why should I give the full Avanos hotel address?",
        "a": "Avanos is more spread out than Goreme and accommodation can be on different sides of the river."
      },
      {
        "q": "Can I visit a pottery workshop before airport pickup?",
        "a": "For a later flight, a nearby workshop can be manageable if you return to the confirmed pickup point with a safe time margin."
      },
      {
        "q": "Does Avanos have private transfer too?",
        "a": "Yes. Vito and Sprinter private options are available at the airport-specific prices shown on the route page."
      }
    ]
  },
  "ortahisar": {
    "name": "Ortahisar",
    "overview": "Ortahisar is quieter than Goreme and Urgup, with a village layout centered on its rock castle and old stone lanes. It is close to several major Cappadocia sights but feels less commercial. The transfer challenge is not distance alone: some accommodation is tucked into historic streets where the practical vehicle stop needs to be confirmed.",
    "hotelAccess": "Cave and stone hotels around Ortahisar Castle can have narrow approaches, slopes or limited waiting space. A vehicle may be able to reach the property, or the safest stop may be a short walk away. The correct hotel name and reachable WhatsApp contact let the team settle that before the transfer rather than improvising on arrival.",
    "arrivalIdeas": "The castle area and old village streets are natural first stops after check-in. Ortahisar is also close to routes toward Red Valley and the museum areas, but a longer outing is better left for a full sightseeing day. The village suits travelers who want a calm evening after flying.",
    "departureIdeas": "When leaving Ortahisar, avoid disappearing into a valley close to pickup time. A cafe, castle-area walk or time at the hotel is much easier to control. Shared shuttle pickup timing is tied to the flight and passenger collection order, so be ready at the confirmed point with luggage.",
    "special": "Ortahisar is sometimes treated as an extension of Urgup in generic travel content, but it deserves its own transfer route. The final village streets, accommodation locations and likely pickup points are different enough that a dedicated page is more useful than a copied Urgup description.",
    "landmarks": [
      "Ortahisar Castle",
      "old village lanes",
      "Red Valley approaches",
      "local stone houses",
      "nearby museum routes"
    ],
    "hotels": [
      "Exedra Cappadocia",
      "Hezen Cave Hotel",
      "Tafoni Houses Cave Hotel",
      "Elika Cave Suites & Spa",
      "Turkish Cave House",
      "Splendid Cave Hotel",
      "Fosil Cave Hotel"
    ],
    "hotelIntro": "Ortahisar has a smaller accommodation inventory than Goreme, but the exact property still matters because old-village access can vary considerably.",
    "faq": [
      {
        "q": "Is Ortahisar covered by the €15 shared shuttle?",
        "a": "Yes. Ortahisar is one of the supported central Cappadocia hotel areas."
      },
      {
        "q": "Can the shuttle wait inside narrow Ortahisar streets?",
        "a": "Not always. Waiting space and vehicle access depend on the exact hotel, so the confirmed meeting point should be followed."
      },
      {
        "q": "What should I do with spare time before leaving Ortahisar?",
        "a": "Stay close to the castle, cafes or your hotel rather than starting a long valley walk."
      },
      {
        "q": "Can I book Ortahisar round trip?",
        "a": "Yes. Select Round Trip and provide both arrival and departure flight information."
      }
    ]
  },
  "cavusin": {
    "name": "Cavusin",
    "overview": "Cavusin is a small historic village between Goreme and Avanos, close to valley trails and balloon activity. It is much less urban than the larger bases, so accommodation can be spread along village roads rather than grouped around one obvious center. That is why the exact hotel name is essential for airport pickup and drop-off.",
    "hotelAccess": "Boutique cave hotels and guesthouses sit near the old village and along the road toward Goreme. Small side roads and similar property names can create confusion if a booking contains only ‘Cavusin’. Send the complete accommodation name and follow the WhatsApp meeting details if the scheduled vehicle cannot safely stop at the doorway.",
    "arrivalIdeas": "The old village, the Church of St. John the Baptist area and nearby Rose Valley approaches are natural local highlights. Cavusin is also convenient for watching balloons, but visitors arriving late should prioritize check-in and rest if they plan a sunrise start the next morning.",
    "departureIdeas": "Cavusin is especially tempting for a last-minute valley walk, which is exactly what to avoid before an airport pickup. Trail timing is less predictable than a town-center walk. Stay near the village or hotel, keep luggage ready and be at the confirmed point when the shuttle window begins.",
    "special": "Cavusin is small, but the village road, trail access and balloon-morning activity can affect a real transfer. Accommodation can sit near the old village, along the Avanos–Goreme road or closer to valley access, so the exact property name and pickup point matter even when the map distance looks short.",
    "landmarks": [
      "Cavusin old village",
      "Church of St. John the Baptist area",
      "Rose Valley access",
      "balloon-viewing areas",
      "road toward Pasabag"
    ],
    "hotels": [
      "Azure Cave Suites",
      "Phocas Cave Suites",
      "Seki Cave Suites",
      "Agarta Cave Hotel",
      "Fairyland Cave Hotel",
      "Jacob’s Cave Suites"
    ],
    "hotelIntro": "Cavusin has fewer hotels than Goreme, but they are more dispersed. The examples below are included only to illustrate the type of accommodation names that should be entered in full.",
    "faq": [
      {
        "q": "Is Cavusin included in the shared shuttle route?",
        "a": "Yes. Confirmed Cavusin accommodation is within the supported shared-shuttle area."
      },
      {
        "q": "Why does the exact Cavusin hotel name matter?",
        "a": "The village is small but spread along several roads, and similar accommodation names can make pickup coordination harder."
      },
      {
        "q": "Can I hike before my airport pickup?",
        "a": "A long valley hike is not recommended close to pickup time because trail duration is difficult to predict."
      },
      {
        "q": "Is Cavusin convenient for balloon mornings?",
        "a": "It is close to balloon activity, but guests with a flight should still follow the confirmed airport pickup rather than assuming local traffic will be quiet."
      }
    ]
  }
} as const;

const routeNotes = {
  "kayseri-goreme": "Leaving Kayseri Erkilet Airport, the road runs west from the Kayseri plain toward the volcanic landscape of central Cappadocia. Goreme does not appear immediately after the airport; the scenery changes gradually before the route reaches the valley towns. A private vehicle continues directly to the booked hotel, while a shuttle may coordinate other passengers and hotel stops from compatible flights.",
  "nevsehir-goreme": "Nevsehir Kapadokya Airport is closer to Goreme by road, so this route usually feels shorter after a flight. The approach enters central Cappadocia from the west and reaches the Goreme area without crossing Kayseri. The shorter road distance is useful, but shared-shuttle timing can still change with baggage, passenger grouping and hotel stop order.",
  "kayseri-urgup": "The Kayseri-to-Urgup route is one of the more natural eastern approaches into Cappadocia. Urgup is reached before a traveler needs to continue deep into the Goreme/Uchisar side of the region, which can make the final part of the journey feel straightforward. Historic hotel lanes, however, still make the exact property name important.",
  "nevsehir-urgup": "From NAV, the route to Urgup crosses the central Cappadocia road network and generally takes longer than NAV-to-Uchisar or NAV-to-Goreme. It is still a practical airport connection, especially when the flight schedule is better. The transfer should be booked to Urgup specifically rather than to ‘Cappadocia’ so the correct final town is planned.",
  "kayseri-uchisar": "From ASR, Uchisar is one of the longer central Cappadocia routes in this service area. The journey crosses the region before climbing toward the high plateau around Uchisar Castle. That final elevation and hillside street pattern are why the accommodation name and reachable contact number matter more here than on a simple highway transfer.",
  "nevsehir-uchisar": "NAV to Uchisar is one of the shortest airport-to-town combinations in central Cappadocia. The road distance is useful for travelers comparing airports, but it should not be turned into an exact arrival promise: baggage collection, meeting time, shared passengers and the final hotel lane can all add variability.",
  "kayseri-avanos": "Avanos lies on the northern side of central Cappadocia, so the route from Kayseri Airport reaches a different landscape than the approach to Uchisar or Goreme. The Kizilirmak and wider town roads are useful reference points on arrival. For a shared shuttle, final timing depends on whether Avanos is an early or later hotel stop in that operating run.",
  "nevsehir-avanos": "The NAV-to-Avanos route moves across the northern Cappadocia road network toward the Kizilirmak. Although the distance is moderate, Avanos is more spread out than a compact village, so the hotel address can affect the final minutes. A private transfer avoids unrelated hotel drops and goes directly to the booked property.",
  "kayseri-ortahisar": "ASR to Ortahisar reaches a quieter central village after the main eastern approach into Cappadocia. The road estimate is similar to several other Kayseri routes, but the last part is not interchangeable: old village lanes and the location of the castle-side hotels make this a distinct drop-off problem.",
  "nevsehir-ortahisar": "From NAV, Ortahisar sits beyond the closest western-side towns and requires a central Cappadocia crossing. The published time is still moderate, but the last village streets deserve attention. A complete hotel name is more useful than a generic map search for ‘Ortahisar center’.",
  "kayseri-cavusin": "Cavusin sits between Goreme and Avanos, and the Kayseri approach reaches the northern-central valley zone before the final village road. Because the settlement is small, guests sometimes assume the driver can simply find them anywhere in Cavusin. In practice, the hotel name and confirmed meeting instructions prevent delays.",
  "nevsehir-cavusin": "NAV to Cavusin is shorter than the comparable Kayseri route, but the last part still enters a small village rather than a large terminal-style drop-off zone. Balloon activity, valley traffic and side roads can matter at certain times of day, so the exact accommodation is part of the booking rather than an afterthought."
} as const;

const returnNotes = {
  "kayseri-goreme": "A Goreme-to-Kayseri Airport departure should be planned from the flight backward, not from a simple 75 km map estimate. ASR requires a longer road leg than NAV, and a shared shuttle can collect other passengers before leaving central Cappadocia. Sunrise balloon traffic and winter conditions are additional reasons to be ready at the WhatsApp-confirmed time.",
  "nevsehir-goreme": "Goreme to NAV is a shorter road transfer, but departure planning still needs a confirmed pickup rather than a self-calculated time. Hotel access and shared collections can add time before the vehicle leaves Goreme, and the correct NAV flight code is needed so the operation team can coordinate the run.",
  "kayseri-urgup": "From Urgup to ASR, the route heads east toward Kayseri and is relatively direct once the vehicle has left the town. The uncertain part is often the collection stage: hillside hotels, other booked passengers and the confirmed flight schedule. Be ready before the vehicle arrives rather than relying on the road-time estimate alone.",
  "nevsehir-urgup": "Urgup to NAV crosses central Cappadocia toward the western airport. Even though NAV is the closer airport for many regional stays, Urgup is not the closest town to NAV, so leave a sensible buffer. The departure flight code and exact hotel are used to plan the pickup order.",
  "kayseri-uchisar": "Uchisar to Kayseri Airport combines a hillside hotel pickup with one of the longer ASR road distances in the central service area. The transfer should start with a confirmed meeting point below or near the hotel when direct door access is not practical. Do not wait for the vehicle in a location that was not agreed on WhatsApp.",
  "nevsehir-uchisar": "Uchisar to NAV is comparatively short by road, which can make travelers underestimate the importance of pickup timing. A short distance does not remove hotel-access constraints, passenger collection or airport check-in requirements. Follow the confirmed time rather than planning to leave at the last possible moment.",
  "kayseri-avanos": "Avanos to ASR generally uses a straightforward road out of the northern Cappadocia area, but the town itself is spread across the river. Confirm the hotel side and address so the driver does not lose time crossing town unnecessarily before heading to Kayseri Airport.",
  "nevsehir-avanos": "Avanos to NAV requires a westbound transfer across the northern region. The hotel address matters because Avanos is not a single compact block. For a late flight, a riverfront stop can be enjoyable, but return to the hotel or confirmed point before the pickup window.",
  "kayseri-ortahisar": "Ortahisar to ASR begins in a village where the pickup point may be more important than the highway distance. Once the vehicle clears central Cappadocia, the road toward Kayseri is straightforward, but a delayed hotel collection can remove the buffer you expected. Keep luggage ready and remain reachable on WhatsApp.",
  "nevsehir-ortahisar": "The Ortahisar-to-NAV route is shorter than the ASR alternative but still crosses central Cappadocia. Old-village hotel access can add a few practical minutes at the start. The confirmed pickup time accounts for the flight and shared operation, so use that rather than a generic online taxi estimate.",
  "kayseri-cavusin": "Leaving Cavusin for ASR means first clearing a small village and valley-road environment before the longer journey toward Kayseri. Do not begin Rose Valley or another trail close to pickup. A shuttle cannot wait indefinitely while other passengers are being coordinated for the same airport direction.",
  "nevsehir-cavusin": "Cavusin to NAV is a moderate-distance departure route, but the village layout makes punctual pickup important. Be at the confirmed property or meeting point with luggage ready. If the flight changes, send the new code early so the operation team can check whether the shared plan must change."
} as const;

const returnExtra = {
  "kayseri-goreme": "A common mistake is to treat the direct driving time as the entire airport plan. ASR is a full airport departure after a longer road transfer, so the shuttle must protect time for other hotel collections, road conditions and terminal procedures. If your Goreme hotel is on a steep lane, the pickup point itself can also take a few minutes to reach with luggage.",
  "nevsehir-goreme": "Because NAV is close to Goreme, travelers sometimes assume they can stay in town until the last moment. The shorter road distance is useful but should not be spent as an unsafe buffer. Shared pickup can begin at another property first, and airport check-in still takes time. Treat the confirmed pickup as the operational time, not as a suggestion.",
  "kayseri-urgup": "Urgup’s eastern position can make the road toward Kayseri feel simple once the vehicle is moving, but the hotel collection is still part of the transfer. Guests in historic hillside accommodation should not wait for a phone call before bringing luggage to the confirmed point. Being ready early protects the longer ASR road buffer without turning the journey into a rush.",
  "nevsehir-urgup": "NAV is closer to central Cappadocia than ASR, but Urgup is not the closest NAV town. The transfer still crosses a meaningful part of the region. A passenger who sees a short ‘Cappadocia to Nevsehir’ estimate online may underestimate Urgup’s actual position, so use the Urgup-specific time rather than a generic Cappadocia figure.",
  "kayseri-uchisar": "Uchisar creates a double timing issue: the ASR road journey is one of the longer central routes and some hotels are reached from steep castle-side lanes. The best plan is to finish breakfast and luggage packing before the confirmed pickup window, then wait at the agreed point rather than expecting the vehicle to navigate or wait indefinitely inside a restricted lane.",
  "nevsehir-uchisar": "The short Uchisar-to-NAV distance can create false confidence. A traveler may think there is enough time for one more viewpoint or valley stop, but a missed hotel pickup is harder to recover from than a few unused minutes at the airport. Keep the final activity within easy walking distance of the confirmed meeting point.",
  "kayseri-avanos": "Avanos is generally easier for vehicle access than the hill towns, yet the river and spread-out neighborhoods introduce their own delay risk. If a driver has the wrong hotel name or wrong side of town, a simple road pickup becomes an unnecessary detour before a longer Kayseri transfer. Accurate hotel details are the easiest way to avoid that problem.",
  "nevsehir-avanos": "On an Avanos-to-NAV departure, the biggest planning error is often not traffic but adding an extra stop because the airport seems close. A pottery visit or river walk is fine when it is local and controlled; a drive to another attraction is not a good last-hour plan. Return to the hotel before the pickup window and keep the airport leg simple.",
  "kayseri-ortahisar": "Ortahisar’s old-village character makes it important to separate ‘hotel pickup time’ from ‘vehicle leaves central Cappadocia time’. The shuttle may need a practical meeting point and then collect another guest before starting the longer ASR road leg. Being ready with luggage at the confirmed location is more useful than watching a map estimate from the castle to Kayseri.",
  "nevsehir-ortahisar": "The NAV road leg from Ortahisar is moderate, but old-village access can still be the variable part. Travelers should avoid assuming that a minibus can stop exactly where a small car stopped earlier in the trip. Follow the WhatsApp-confirmed point, especially if reception is on a narrow lane or below the main road.",
  "kayseri-cavusin": "Cavusin’s proximity to trails is the main departure-day temptation. A short-looking path can take longer than expected, and mobile signal or taxi availability is not something to rely on when the ASR shuttle is due. Keep the final morning around the village and accommodation, then start the longer Kayseri road trip with a proper time buffer.",
  "nevsehir-cavusin": "NAV is closer than ASR, but Cavusin still requires a punctual village pickup before the airport drive. Balloon mornings can make the area feel busy and trail plans can overrun. The safe approach is to finish any sunrise activity early, return for luggage and be at the confirmed pickup point before the shared vehicle arrives."
} as const;

const airportEditorial = {
  "kayseri": {
    "name": "Kayseri Airport",
    "full": "Kayseri Erkilet Airport",
    "code": "ASR",
    "vito": 90,
    "sprinter": 110,
    "range": "70–85 km",
    "spare": "If you genuinely have several spare hours before an ASR flight, central Kayseri options such as Cumhuriyet Square, Kayseri Castle and the Hunat Hatun area can be considered. Do this only with a generous airport-security buffer. With a short gap, going directly to the airport is safer than adding another city stop."
  },
  "nevsehir": {
    "name": "Nevsehir Airport",
    "full": "Nevsehir Kapadokya Airport",
    "code": "NAV",
    "vito": 80,
    "sprinter": 90,
    "range": "35–50 km",
    "spare": "If a NAV flight is late and you have a long gap, a short stop in Nevsehir city is possible only when the extra road movement still leaves a comfortable airport buffer. For a normal gap, keep the final plan simple and go directly to the airport rather than turning departure day into another tour."
  }
} as const;


function routeFacts(airportKey: 'kayseri' | 'nevsehir', townKey: keyof typeof towns) {
  const t = towns[townKey];
  return airportKey === 'kayseri'
    ? { distance: t.distanceKayseri, time: t.timeKayseri }
    : { distance: t.distanceNevsehir, time: t.timeNevsehir };
}

const townKeys = Object.keys(towns) as (keyof typeof towns)[];

function localRouteFaq(airportKey: 'kayseri' | 'nevsehir', townKey: keyof typeof towns, direction: 'arrival' | 'return'): FaqItem[] {
  const a = airports[airportKey]; const t = towns[townKey];
  if (townKey === 'goreme') return direction === 'arrival' ? [
    { q: airportKey === 'kayseri' ? 'Can an ASR shuttle always reach a hillside Goreme cave-hotel entrance?' : 'Does a NAV shuttle always drop guests at the exact Goreme cave-hotel door?', a: `Not always. On the ${a.code} to Goreme arrival, steep or narrow hillside lanes can require the nearest safe drop-off point, confirmed for the actual hotel.` },
    { q: airportKey === 'kayseri' ? 'Can sunrise balloon traffic affect the last part of a Kayseri-to-Goreme arrival?' : 'Does balloon-morning traffic matter even on the shorter NAV-to-Goreme approach?', a: `It can around sunrise. Balloon vehicles and local traffic can change the last part of the Goreme approach even when the main airport road is clear.` },
    { q: airportKey === 'kayseri' ? 'Why is the complete cave-hotel name important after a long ASR arrival?' : 'Why is a full Goreme property name still important when arriving from nearby NAV?', a: `Goreme has many similarly named cave houses and suites. The complete property name helps the driver identify the correct lane and reception area after the ${a.code} transfer.` },
    { q: airportKey === 'kayseri' ? 'What is realistic after reaching Goreme from an early Kayseri flight?' : 'How can I use an early NAV arrival in Goreme without over-planning the first day?', a: `Keep the first plan light: central Goreme, a cafe, a viewpoint or a short walk is easier than starting a long valley route before hotel check-in.` },
  ] : [
    { q: airportKey === 'kayseri' ? 'Where should I wait for a longer Goreme-to-ASR departure?' : 'What is the correct meeting point for a Goreme-to-NAV pickup?', a: `Use the hotel entrance or nearby meeting point confirmed on WhatsApp. Some Goreme cave-hotel lanes are not suitable for a larger shuttle to wait at the door.` },
    { q: airportKey === 'kayseri' ? 'Can balloon-morning traffic reduce the buffer on a Goreme-to-Kayseri departure?' : 'Does sunrise activity matter when NAV is relatively close to Goreme?', a: `Yes. Around balloon hours, local road activity is one reason to follow the confirmed pickup time rather than calculating only from the map distance.` },
    { q: airportKey === 'kayseri' ? 'What if a Sprinter cannot enter my Goreme lane before the longer ASR run?' : 'What happens if my Goreme cave-hotel lane is unsuitable for a NAV shuttle vehicle?', a: `A practical nearby meeting point can be confirmed. Be there with luggage before the scheduled pickup so the airport run is not delayed.` },
    { q: airportKey === 'kayseri' ? 'What can I safely do before a longer Goreme-to-ASR pickup?' : 'How should I use spare time before the shorter Goreme-to-NAV departure?', a: `Breakfast, a terrace, central shopping or a short viewpoint stop is easier to control than a long valley hike close to airport pickup.` },
  ];

  if (townKey === 'urgup') return direction === 'arrival' ? [
    { q: airportKey === 'kayseri' ? 'Is central and hillside Urgup included in the €15 ASR shuttle?' : 'Does the €15 NAV shuttle also cover confirmed Urgup accommodation?', a: `Yes. Confirmed Urgup accommodation is within the shared-shuttle service area from ${a.name}.` },
    { q: airportKey === 'kayseri' ? 'After the Kayseri road leg, can a Sprinter reach every historic Urgup cave hotel?' : 'Can a NAV shuttle vehicle always stop at an Urgup hillside hotel entrance?', a: `No universal guarantee is possible. Historic lanes and stepped entrances can require a nearby safe stop even when the main Urgup roads are easy to reach.` },
    { q: airportKey === 'kayseri' ? 'Why should an ASR-to-Urgup booking not be treated like ASR-to-Goreme?' : 'How is a NAV-to-Urgup arrival different from the shorter NAV-to-Goreme route?', a: `Urgup has its own road approach and hotel layout. The correct hotel town matters because an Urgup drop-off should not be planned as if the booking were in Goreme.` },
    { q: airportKey === 'kayseri' ? 'What is an easy first-evening plan after coming from Kayseri Airport to Urgup?' : 'What can I do locally after a Nevsehir Airport arrival in Urgup?', a: `A central meal, Temenni Hill area walk or relaxed town visit is easier after a flight than committing immediately to a long regional excursion.` },
  ] : [
    { q: airportKey === 'kayseri' ? 'Where should an Urgup guest meet the vehicle for the longer ASR departure?' : 'How is the practical Urgup pickup point chosen for a NAV flight?', a: `It depends on the exact hotel. Wider-road properties are straightforward, while historic hillside accommodation may use a confirmed nearby meeting point.` },
    { q: airportKey === 'kayseri' ? 'Can I stay in central Urgup until close to an ASR pickup?' : 'How late can I remain in central Urgup before a NAV collection?', a: `Yes if you remain close enough to collect luggage and reach the confirmed point early. Avoid a distant valley or tour close to departure time.` },
    { q: airportKey === 'kayseri' ? 'Can an Urgup-to-ASR shuttle collect other hotels before heading east?' : 'Can the Urgup-to-NAV run include other hotel collections before leaving the area?', a: `A shared shuttle can collect compatible passengers from other supported hotels before the airport leg, so the confirmed pickup time matters more than direct driving time alone.` },
    { q: airportKey === 'kayseri' ? 'What should I verify at an Urgup cave hotel before an ASR departure?' : 'What should be ready before a NAV pickup from an Urgup hillside property?', a: `Check the meeting point, flight code, passenger details and luggage readiness, especially if reception is above a narrow or stepped lane.` },
  ];

  if (townKey === 'uchisar') return direction === 'arrival' ? [
    { q: airportKey === 'kayseri' ? 'Does the €15 ASR shuttle include elevated Uchisar hotels?' : 'Can the shorter NAV shuttle serve Uchisar castle-side accommodation?', a: `Yes. Uchisar is in the shared service area, subject to safe vehicle access or a nearby confirmed drop-off point.` },
    { q: airportKey === 'kayseri' ? 'Why does hotel access matter after the longer Kayseri-to-Uchisar road?' : 'Why can the final Uchisar hotel approach still matter on a short NAV transfer?', a: `Many properties sit on steep castle-side streets. The final vehicle stop can depend on the exact hotel even though the regional road to Uchisar is straightforward.` },
    { q: airportKey === 'kayseri' ? 'When can ASR still be a practical airport for an Uchisar stay?' : 'Why is NAV especially convenient by road for Uchisar?', a: `${a.name} is a practical airport for Uchisar; compare the ${airportKey === 'nevsehir' ? 'shorter NAV road distance' : 'ASR flight schedule and longer road leg'} with your flight options before deciding.` },
    { q: airportKey === 'kayseri' ? 'What is a sensible first activity after the longer ASR arrival in Uchisar?' : 'How can I use the time saved by a shorter NAV-to-Uchisar arrival?', a: `A castle-area viewpoint, cafe or short village walk is a manageable first plan before committing to longer valley walks.` },
  ] : [
    { q: airportKey === 'kayseri' ? 'Where should I meet an ASR vehicle if my Uchisar hotel is on a steep lane?' : 'How is a reachable meeting point chosen for Uchisar-to-NAV?', a: `Use the confirmed hotel entrance or accessible meeting point. Steep lanes below Uchisar Castle can make the practical pickup location different from the reception doorway.` },
    { q: airportKey === 'kayseri' ? 'Is Uchisar Castle a safe last stop before a longer ASR departure?' : 'Can I visit the castle before a shorter road transfer to NAV?', a: `With enough spare time, yes, but remain close to the hotel and leave a generous buffer for luggage and the confirmed collection time.` },
    { q: airportKey === 'kayseri' ? 'Can winter conditions affect the elevated start of Uchisar-to-ASR?' : 'Does Uchisar elevation still matter for a winter NAV departure?', a: `It can. Uchisar is elevated, so local streets may be more affected than wider regional roads. Follow the confirmed pickup rather than shortening the buffer yourself.` },
    { q: airportKey === 'kayseri' ? 'When is a dedicated private vehicle useful for an early Uchisar-to-Kayseri flight?' : 'Would private Uchisar-to-NAV pickup help for a very early departure?', a: `It can be useful when a fixed dedicated pickup matters, although safe hotel access still depends on the street and selected vehicle size.` },
  ];

  if (townKey === 'avanos') return direction === 'arrival' ? [
    { q: airportKey === 'kayseri' ? 'Is Avanos included in the €15 shared shuttle from ASR?' : 'Does the NAV shared shuttle cover Avanos hotels on both sides of town?', a: `Yes. Avanos accommodation within the supported service area can be booked on the €15 per-person shared shuttle from ${a.name}.` },
    { q: airportKey === 'kayseri' ? 'Why does the full Avanos address matter after arriving from Kayseri?' : 'Why should a NAV-to-Avanos booking include more than just the town name?', a: `Avanos is more spread out than a compact cave village. The hotel may be near the old center, riverfront or newer roads, so the full property name helps with the final approach.` },
    { q: airportKey === 'kayseri' ? 'What is an easy riverside plan after a Kayseri Airport arrival in Avanos?' : 'What can I do near the Kizilirmak after reaching Avanos from NAV?', a: `A Kizilirmak river walk, central meal or pottery workshop is an easy first activity after hotel drop-off.` },
    { q: airportKey === 'kayseri' ? 'Can the ASR shuttle finish on either side of the Kizilirmak in Avanos?' : 'How does a NAV shuttle know which side of Avanos my hotel is on?', a: `The route is planned from the booked accommodation. Enter the exact hotel so the driver knows which side of the town and river is required.` },
  ] : [
    { q: airportKey === 'kayseri' ? 'Why should I confirm the Avanos river side before leaving for ASR?' : 'Why does the exact Avanos hotel address still matter for a NAV departure?', a: `The town spans both sides of the Kizilirmak and several accommodation areas. A precise address avoids unnecessary town crossings before the airport leg.` },
    { q: airportKey === 'kayseri' ? 'Can a pottery stop fit before the longer Avanos-to-Kayseri run?' : 'Is a nearby pottery workshop realistic before Avanos-to-NAV pickup?', a: `If there is enough time, choose one close to the hotel or confirmed meeting point and return early enough to collect luggage.` },
    { q: airportKey === 'kayseri' ? 'Is every Avanos-to-ASR pickup directly from the hotel entrance?' : 'Does a NAV vehicle always collect Avanos guests at the exact doorway?', a: `Often vehicle access is straightforward, but the exact stop still depends on the property and daily operating plan.` },
    { q: airportKey === 'kayseri' ? 'What should I do if my Kayseri flight is delayed while I wait in Avanos?' : 'How should I use extra Avanos time if my NAV departure moves later?', a: `Send the updated flight details on WhatsApp before changing your own plan. The shared pickup schedule must be checked against the new departure.` },
  ];

  if (townKey === 'ortahisar') return direction === 'arrival' ? [
    { q: airportKey === 'kayseri' ? 'Is Ortahisar a €15 shared-shuttle destination from Kayseri Airport?' : 'Does the €15 NAV shuttle treat Ortahisar as its own hotel area?', a: `Yes. Confirmed Ortahisar accommodation is within the shared-shuttle area from ${a.name}.` },
    { q: airportKey === 'kayseri' ? 'Can an ASR arrival vehicle reach every castle-side Ortahisar hotel entrance?' : 'Does a NAV shuttle always stop directly at an Ortahisar cave-hotel door?', a: `Not always. Older village lanes near the castle can require a safe nearby stop depending on the vehicle and exact property.` },
    { q: airportKey === 'kayseri' ? 'What is a relaxed first plan after the Kayseri-to-Ortahisar journey?' : 'How can I spend the first hours after a NAV arrival in quieter Ortahisar?', a: `A castle-area walk, local cafe or short village visit is a relaxed way to start before planning longer valley excursions.` },
    { q: airportKey === 'kayseri' ? 'Why should an ASR booking say Ortahisar instead of only Cappadocia?' : 'Why should I identify Ortahisar explicitly on a NAV transfer request?', a: `Ortahisar has a distinct final approach and hotel layout. Naming the town prevents the driver from planning the transfer as if the hotel were in Goreme or Urgup.` },
  ] : [
    { q: airportKey === 'kayseri' ? 'Where should I meet the vehicle before the longer Ortahisar-to-ASR trip?' : 'How is an accessible Ortahisar pickup point selected for NAV?', a: `The confirmed point depends on the hotel lane. Castle-side accommodation can use a nearby accessible stop rather than the exact doorway.` },
    { q: airportKey === 'kayseri' ? 'What can I do locally before an Ortahisar-to-Kayseri departure?' : 'How should I use spare time before the shorter Ortahisar-to-NAV road trip?', a: `Stay close to the village center or hotel with a cafe, short walk or viewpoint rather than starting a long excursion before airport collection.` },
    { q: airportKey === 'kayseri' ? 'Why is a delayed village pickup risky before the longer ASR road?' : 'Can a late Ortahisar collection still matter when NAV is closer?', a: `Yes, which is why luggage should be ready and the agreed meeting point should be used. The operating pickup time already includes a planned airport buffer.` },
    { q: airportKey === 'kayseri' ? 'Is a map pin useful for an Ortahisar-to-ASR hotel pickup?' : 'Should I send both the hotel name and map pin for an Ortahisar-to-NAV collection?', a: `A map pin can help, but the complete accommodation name remains important because reception and vehicle access can be on different lanes.` },
  ];

  return direction === 'arrival' ? [
    { q: airportKey === 'kayseri' ? 'Is Cavusin included in the €15 shared shuttle from Kayseri Airport?' : 'Can I book the €15 NAV shuttle to a Cavusin village hotel?', a: `Yes. Cavusin is within the supported shared-shuttle area from ${a.name}.` },
    { q: airportKey === 'kayseri' ? 'Why does the exact Cavusin property matter after the longer ASR approach?' : 'Why can a short NAV-to-Cavusin arrival still need the full hotel name?', a: `Accommodation is spread along village and valley roads. The complete property name helps the driver identify the correct final stop instead of assuming one central drop-off.` },
    { q: airportKey === 'kayseri' ? 'Can balloon-morning activity affect the final Kayseri-to-Cavusin village road?' : 'Does balloon activity matter on a morning NAV arrival into Cavusin?', a: `It can at certain morning hours because Cavusin is close to balloon and valley activity. The effect is usually local rather than across the entire airport route.` },
    { q: airportKey === 'kayseri' ? 'What is a sensible first activity after reaching Cavusin from ASR?' : 'What can I do near the village after a shorter NAV-to-Cavusin arrival?', a: `A short old-village walk, cafe stop or nearby viewpoint is safer after a flight than immediately committing to a long valley hike.` },
  ] : [
    { q: airportKey === 'kayseri' ? 'Where should I wait before the longer Cavusin-to-Kayseri airport run?' : 'What is the confirmed meeting-point rule for Cavusin-to-NAV?', a: `Wait at the confirmed accommodation or meeting point with luggage ready. Cavusin is small but the vehicle still needs the exact road and property.` },
    { q: airportKey === 'kayseri' ? 'Why is a long valley hike especially risky before Cavusin-to-ASR?' : 'Can I fit a Rose Valley hike before a Cavusin-to-NAV departure?', a: `A long Rose Valley or other trail hike is not recommended close to pickup because trail duration and return time are hard to control.` },
    { q: airportKey === 'kayseri' ? 'Does balloon-morning road activity affect the start of Cavusin-to-ASR?' : 'Can balloon traffic matter even when NAV is not far from Cavusin?', a: `It can. Cavusin is close to balloon activity, so follow the confirmed collection time and do not assume the village roads will be empty.` },
    { q: airportKey === 'kayseri' ? 'What if my ASR flight changes while I am staying near Cavusin trails?' : 'How should I react to a NAV flight change while staying in Cavusin?', a: `Send the new flight details on WhatsApp as early as possible so the shared pickup or private schedule can be checked before you alter your own plan.` },
  ];
}

function routeBaseFaq(airportKey: 'kayseri' | 'nevsehir', townKey: keyof typeof towns, direction: 'arrival' | 'return'): FaqItem[] {
  const a = airports[airportKey]; const t = towns[townKey]; const facts = routeFacts(airportKey, townKey); const isASR = airportKey === 'kayseri';
  const arrivalPrice = `Shared shuttle is €15 per person one way and €30 per person round trip. Private ${a.code} pricing is Vito €${a.vito} and Sprinter €${a.sprinter} one way per vehicle.`;
  const returnPrice = `The hotel-to-${a.code} shuttle is €15 per person one way. Private Vito is €${a.vito} and Sprinter €${a.sprinter} one way per vehicle.`;
  switch (townKey) {
    case 'goreme':
      return direction === 'arrival' ? [
        { q: isASR ? 'Does the longer Kayseri–Goreme road change the €15 shuttle fare?' : 'Is the shorter Nevsehir–Goreme shuttle still €15 per person?', a: arrivalPrice },
        { q: isASR ? 'How should I read the 75 km ASR–Goreme distance?' : 'What does the 40 km NAV–Goreme road estimate actually mean?', a: `${a.code} to Goreme is approximately ${facts.distance} and ${facts.time} by road before extra shared stops; baggage claim and the cave-hotel drop-off are outside that simple road estimate.` },
        { q: isASR ? 'Where do I go after baggage claim at ASR for a Goreme booking?' : 'After landing at NAV, how is the Goreme meeting arranged?', a: `Collect baggage first, then follow the WhatsApp meeting instructions linked to the passenger name and operating ${a.code} flight.` },
        { q: isASR ? 'Why does an ASR–Goreme reservation need passport numbers?' : 'Are passport details still required on a short NAV–Goreme transfer?', a: 'Yes. Passenger names and passport numbers are required by the operating company for reservation and transfer operation.' },
        { q: isASR ? 'When is private transfer worth considering on the longer ASR–Goreme route?' : 'What does private transfer change on the shorter NAV–Goreme route?', a: `A private vehicle removes unrelated hotel stops and is dedicated to the group. Vito is €${a.vito} and Sprinter €${a.sprinter} one way from ${a.code}.` },
      ] : [
        { q: isASR ? 'What is the €15 option from Goreme back to Kayseri Airport?' : 'Can I use the €15 shuttle from Goreme back to NAV?', a: returnPrice },
        { q: isASR ? 'How much road time should I expect from Goreme to ASR?' : 'Why should I not leave Goreme at the last minute for NAV?', a: `The direct road estimate is about ${facts.time} for ${facts.distance}, but hotel collections, local traffic and airport procedures require additional planning.` },
        { q: isASR ? 'How is an early Goreme-to-ASR pickup confirmed?' : 'Who decides the Goreme-to-NAV pickup time?', a: `The operating team works from the departure flight, hotel access and shared run, then confirms the ${a.code} pickup on WhatsApp.` },
        { q: isASR ? 'What should I do if my ASR flight moves after a balloon morning?' : 'If my NAV flight changes, should I simply shift the Goreme pickup myself?', a: 'No. Send the revised flight details and wait for a reconfirmed pickup because shared passengers may have different flight schedules.' },
        { q: isASR ? 'Can a private vehicle collect me directly for Goreme–ASR?' : 'Is a dedicated Goreme–NAV Vito or Sprinter available?', a: `Yes. Private Vito is €${a.vito} and Sprinter €${a.sprinter} one way, subject to the practical hotel meeting point.` },
      ];
    case 'urgup':
      return direction === 'arrival' ? [
        { q: isASR ? 'Is the Kayseri-to-Urgup shared fare still €15 even though Urgup is on the eastern side?' : 'How much is the NAV shuttle when my hotel is in Urgup?', a: arrivalPrice },
        { q: isASR ? 'How long does the ASR approach into Urgup usually take?' : 'Why is NAV–Urgup longer than some other NAV routes?', a: `${a.code} to Urgup is about ${facts.distance} with a typical road estimate of ${facts.time}; the exact hotel position in central or hillside Urgup affects the final approach.` },
        { q: isASR ? 'What information prevents confusion between central and hillside Urgup hotels?' : 'What should I have ready after landing at NAV for Urgup?', a: `Use the full Urgup accommodation name, passenger details, passport numbers, operating ${a.code} flight and reachable WhatsApp contact.` },
        { q: isASR ? 'Are passports required even for a private ASR–Urgup vehicle?' : 'Why does the NAV–Urgup shuttle form request every passenger passport?', a: 'The requirement comes from the operating company’s reservation process and applies to the passenger booking, not to whether the service is shared or private.' },
        { q: isASR ? 'Would a private Vito make the Kayseri–Urgup journey more direct?' : 'When does a private NAV–Urgup transfer make sense?', a: `Yes. Private service uses one dedicated vehicle for the group. From ${a.code}, Vito is €${a.vito} and Sprinter €${a.sprinter} one way.` },
      ] : [
        { q: isASR ? 'How much is the Urgup hotel shuttle to Kayseri Airport?' : 'What is the shared fare from Urgup to Nevsehir Airport?', a: returnPrice },
        { q: isASR ? 'What part of an Urgup–ASR departure is hardest to time?' : 'How much time does Urgup–NAV normally take on the road?', a: isASR ? `The road estimate is ${facts.time}, but the hillside hotel collection can be the variable part before the vehicle starts east.` : `The typical road estimate is ${facts.time} for ${facts.distance}; shared hotel collections and airport check-in are additional.` },
        { q: isASR ? 'Should I wait inside my Urgup cave hotel for the ASR shuttle?' : 'How is a NAV pickup point chosen at an Urgup hillside hotel?', a: 'Wait at the WhatsApp-confirmed vehicle point. Reception and the safest minibus stopping place may not be the same location.' },
        { q: isASR ? 'If my Kayseri flight is delayed, can I add another Urgup excursion?' : 'What if the NAV departure time changes while I am in Urgup?', a: 'Send the changed flight first and wait for the new pickup plan before adding an activity that takes you away from the hotel.' },
        { q: isASR ? 'Can a family book a dedicated Urgup-to-ASR Vito?' : 'Is private Urgup-to-NAV pickup available for groups?', a: `Yes. Vito is €${a.vito} one way for up to 5 and Sprinter €${a.sprinter} for up to 16.` },
      ];
    case 'uchisar':
      return direction === 'arrival' ? [
        { q: isASR ? 'Does the longer ASR–Uchisar route cost more for the shared shuttle?' : 'Is NAV–Uchisar one of the shorter €15 shuttle routes?', a: arrivalPrice },
        { q: isASR ? 'Why is Kayseri Airport to Uchisar one of the longer central routes?' : 'How close is Nevsehir Airport to Uchisar by road?', a: `${a.code} to Uchisar is approximately ${facts.distance} and ${facts.time}; the final castle-side climb can add local access time beyond the regional road.` },
        { q: isASR ? 'What should I send before the vehicle reaches Uchisar’s steep hotel streets?' : 'How do I continue from NAV to a castle-side Uchisar hotel?', a: `Enter the full accommodation, passenger names, passports and ${a.code} flight, then follow the confirmed WhatsApp stop if the hotel lane is not suitable for the vehicle.` },
        { q: isASR ? 'Why are passport numbers part of an Uchisar airport booking?' : 'Does a short NAV–Uchisar ride still require passport details?', a: 'Yes. Passport information is required by the operating company for the reservation and transfer operation.' },
        { q: isASR ? 'Can a private Vito be easier for an ASR arrival to a steep Uchisar hotel?' : 'What advantage does a private vehicle give between NAV and Uchisar?', a: `Private service is dedicated to the group and avoids unrelated hotel stops. Vito is €${a.vito}; Sprinter €${a.sprinter} one way from ${a.code}.` },
      ] : [
        { q: isASR ? 'What is the shared price from Uchisar to ASR?' : 'Is Uchisar-to-NAV hotel pickup €15 per person?', a: returnPrice },
        { q: isASR ? 'Why does Uchisar need a wider buffer before a Kayseri flight?' : 'Does the short Uchisar–NAV road mean I can leave very late?', a: `The road estimate is ${facts.time}, but the elevated hotel pickup, shared collections and airport procedures still require a confirmed departure plan.` },
        { q: isASR ? 'Where should I wait if my Uchisar hotel is above a steep lane?' : 'How is the Uchisar meeting point handled for a NAV departure?', a: 'Use the confirmed accessible vehicle point and move there with luggage before pickup rather than waiting at an unreachable doorway.' },
        { q: isASR ? 'What should I do if an ASR flight change affects my Uchisar pickup?' : 'If NAV changes my flight, can I keep the old Uchisar pickup time?', a: 'Send the change on WhatsApp and use the newly confirmed time; do not assume the previous pickup remains valid.' },
        { q: isASR ? 'Can I reserve a dedicated Uchisar-to-Kayseri vehicle?' : 'What are the private options from Uchisar to NAV?', a: `Yes. Vito is €${a.vito} one way and Sprinter €${a.sprinter}; hotel access still determines the practical meeting point.` },
      ];
    case 'avanos':
      return direction === 'arrival' ? [
        { q: isASR ? 'How much is the ASR shuttle when the hotel is in Avanos rather than Goreme?' : 'Is the Nevsehir Airport shuttle to Avanos €15 on either side of the river?', a: arrivalPrice },
        { q: isASR ? 'What is the Kayseri Airport to Avanos road estimate?' : 'How long is the NAV approach to Avanos?', a: `${a.code} to Avanos is approximately ${facts.distance} and ${facts.time}; the hotel side of the Kizilirmak can affect the last part of the drive.` },
        { q: isASR ? 'Why should an ASR booking include the Avanos hotel address as well as the name?' : 'What should I send after landing at NAV for an Avanos hotel?', a: `Avanos is spread out, so send the complete property name/address plus the ${a.code} flight, passenger names, passport numbers and WhatsApp contact.` },
        { q: isASR ? 'Are passenger passports an ASR–Avanos booking requirement?' : 'Does a straightforward Avanos road mean passport details are unnecessary?', a: 'No. Passport details are still required by the operating company for each passenger reservation.' },
        { q: isASR ? 'What changes if I choose private transfer from Kayseri to Avanos?' : 'Can I avoid other hotel stops on NAV–Avanos?', a: `A private Vito or Sprinter is dedicated to your group. From ${a.code}, Vito is €${a.vito} and Sprinter €${a.sprinter} one way.` },
      ] : [
        { q: isASR ? 'What is the Avanos-to-ASR shared shuttle fare?' : 'How much is the hotel shuttle from Avanos to NAV?', a: returnPrice },
        { q: isASR ? 'Why does the side of the river matter before driving to Kayseri Airport?' : 'What road time should I allow from Avanos to NAV?', a: `The direct estimate is ${facts.time} for ${facts.distance}. Identifying the correct hotel side avoids wasting part of the airport buffer crossing town unnecessarily.` },
        { q: isASR ? 'Where should I be ready for an ASR pickup in spread-out Avanos?' : 'How is an Avanos hotel pickup arranged for NAV?', a: 'Be at the confirmed property or meeting point with luggage ready; do not wait at a generic riverfront location unless that is the agreed stop.' },
        { q: isASR ? 'If my Kayseri flight is moved later, can I stay at the river longer?' : 'What if my NAV flight changes after hotel checkout?', a: 'Update the flight first and follow the revised pickup. Nearby riverfront time is fine only when you can return to the confirmed point comfortably.' },
        { q: isASR ? 'Can a private Vito pick up directly in Avanos for ASR?' : 'Are private Avanos-to-NAV vehicles available?', a: `Yes. Private Vito is €${a.vito} and Sprinter €${a.sprinter} one way, with the exact pickup based on the hotel address.` },
      ];
    case 'ortahisar':
      return direction === 'arrival' ? [
        { q: isASR ? 'Is Ortahisar included in the €15 shuttle from Kayseri Airport?' : 'Does the €15 NAV shuttle serve Ortahisar as its own destination?', a: arrivalPrice },
        { q: isASR ? 'Why does ASR–Ortahisar need a dedicated route page if the distance resembles other towns?' : 'What is the NAV-to-Ortahisar road estimate?', a: `${a.code} to Ortahisar is about ${facts.distance} and ${facts.time}; the old-village streets make the last part different from neighboring destinations.` },
        { q: isASR ? 'What should I provide for an Ortahisar castle-side drop-off from ASR?' : 'After landing at NAV, how is an Ortahisar hotel stop identified?', a: `Provide the full hotel name, passenger names, passports, operating ${a.code} flight and WhatsApp contact so the practical village stop can be confirmed.` },
        { q: isASR ? 'Why are passports required on a Kayseri–Ortahisar transfer?' : 'Are passport numbers needed for a NAV–Ortahisar shuttle seat?', a: 'Yes. They are required by the operating company as part of each passenger reservation.' },
        { q: isASR ? 'When is a private ASR–Ortahisar vehicle useful?' : 'Can I book a direct private NAV–Ortahisar transfer?', a: `Yes. Private Vito is €${a.vito} and Sprinter €${a.sprinter} one way; it is dedicated to your group rather than a shared hotel run.` },
      ] : [
        { q: isASR ? 'How much is Ortahisar to Kayseri Airport by shared shuttle?' : 'Is the Ortahisar-to-NAV shared pickup €15?', a: returnPrice },
        { q: isASR ? 'Where can time be lost before an Ortahisar–ASR departure?' : 'How long is Ortahisar to NAV before shared collections?', a: isASR ? `The road estimate is ${facts.time}; narrow village access at the start can use part of the buffer if passengers are not ready.` : `The road estimate is ${facts.time} for ${facts.distance}, before any additional shared hotel collections.` },
        { q: isASR ? 'Should I wait at the castle or at my hotel for the ASR vehicle?' : 'How do I know the correct Ortahisar meeting point for NAV?', a: 'Use only the WhatsApp-confirmed property or nearby accessible stop; the castle area is not a universal pickup point.' },
        { q: isASR ? 'If my Kayseri departure changes, does the Ortahisar shuttle move automatically?' : 'What should I do when a NAV flight is rescheduled from Ortahisar?', a: 'Send the new flight details and wait for confirmation. Shared routing may involve other passengers, so timing is not changed independently.' },
        { q: isASR ? 'Can I book a dedicated Ortahisar-to-ASR Sprinter for a group?' : 'What private vehicles are available from Ortahisar to NAV?', a: `Yes. Vito is €${a.vito} one way for up to 5 and Sprinter €${a.sprinter} for up to 16.` },
      ];
    case 'cavusin':
      return direction === 'arrival' ? [
        { q: isASR ? 'Is the small village of Cavusin still €15 from ASR by shared shuttle?' : 'How much is the NAV shared shuttle to a Cavusin hotel?', a: arrivalPrice },
        { q: isASR ? 'What does the 75 km Kayseri–Cavusin estimate leave out?' : 'How long is Nevsehir Airport to Cavusin before local village access?', a: `${a.code} to Cavusin is about ${facts.distance} and ${facts.time}; balloon activity, side roads and the exact property can affect the final local minutes.` },
        { q: isASR ? 'How does the driver find the right Cavusin stop after an ASR arrival?' : 'What details should I send for a NAV–Cavusin arrival?', a: `Use the complete accommodation name plus passenger names, passports, operating ${a.code} flight and WhatsApp number; Cavusin does not have one universal hotel stop.` },
        { q: isASR ? 'Why are passports needed for a village transfer from Kayseri Airport?' : 'Are passport details required for the NAV shuttle to Cavusin?', a: 'Yes. The operating company requires passport information for each passenger reservation.' },
        { q: isASR ? 'Would private transfer make ASR–Cavusin more direct after a long flight?' : 'What does a private NAV–Cavusin vehicle offer over the shuttle?', a: `It gives the group a dedicated route without unrelated hotel stops. Vito is €${a.vito}; Sprinter €${a.sprinter} one way from ${a.code}.` },
      ] : [
        { q: isASR ? 'What is the €15 option from Cavusin to Kayseri Airport?' : 'Can I book a €15 Cavusin-to-NAV shared pickup?', a: returnPrice },
        { q: isASR ? 'Why should I stop hiking well before a Cavusin–ASR pickup?' : 'Does the moderate Cavusin–NAV distance make a last-minute trail walk safe?', a: `No. The road estimate is ${facts.time}, but trail return times are less predictable than the airport drive and can make you miss the confirmed collection.` },
        { q: isASR ? 'Where does the ASR shuttle collect passengers in Cavusin?' : 'How is the Cavusin pickup point chosen for NAV?', a: 'It is confirmed for the exact accommodation or a safe nearby road point. “Cavusin center” is not a single guaranteed stop.' },
        { q: isASR ? 'What if my Kayseri flight changes while I am near the valleys?' : 'If NAV changes my departure, what should I do before leaving the hotel area?', a: 'Send the new flight details, stay reachable and wait for a revised pickup before heading onto a trail or away from the village.' },
        { q: isASR ? 'Can a group reserve a private Cavusin-to-ASR Sprinter?' : 'Is private Cavusin-to-NAV transfer available?', a: `Yes. Private Vito is €${a.vito} and Sprinter €${a.sprinter} one way per vehicle.` },
      ];
  }
}


function operationalFaq(airportKey: 'kayseri' | 'nevsehir', townKey: keyof typeof towns, direction: 'arrival' | 'return'): FaqItem[] {
  return [...routeBaseFaq(airportKey, townKey, direction), ...localRouteFaq(airportKey, townKey, direction)];
}

const arrivalEditorial = {
  "kayseri-goreme": {
    "access": "After the longer ASR road leg, the final few minutes in Goreme can feel very different from the open-road part of the journey. Lower-center hotels are usually straightforward, while properties on the slopes may use narrow, steep or one-way lanes. Give the complete hotel name before travel so the driver can distinguish the correct reception area from another cave property with a similar name.",
    "arrival": "An ASR arrival often follows a domestic connection or a longer travel day, so Goreme is best enjoyed gently at first. If there is daylight after check-in, stay close to the center, choose a viewpoint or have a meal before committing to a valley walk. Guests planning a sunrise balloon morning usually benefit more from an early night than from trying to fit a full excursion into arrival day.",
    "practical": "On this route, the €15 shuttle is most attractive when price matters more than travelling directly to one hotel. A private vehicle is more useful for families, groups or guests who prefer to leave ASR without unrelated hotel drops. The road itself is longer than the NAV alternative, so the difference between a shared and dedicated journey can feel more noticeable after a tiring flight.",
    "return": "If the same trip ends with a Goreme to ASR departure, do not estimate the pickup by simply reversing the arrival driving time. The return has to protect airport check-in time and may begin with other hotel collections. Confirm the departure flight and pickup point while you still have time to correct a hotel-name or flight-code mistake."
  },
  "nevsehir-goreme": {
    "access": "The shorter NAV-to-Goreme road distance does not make the hotel address less important. In fact, the final cave-hotel lane can represent a larger share of the journey than travelers expect. A property near the lower center may be easy for a shuttle, while a hillside hotel can require a nearby safe stop, especially when a larger vehicle cannot wait at the doorway.",
    "arrival": "NAV is useful for travelers who want to reach Goreme relatively quickly after landing. With an early arrival, it can be realistic to check in, leave luggage and still enjoy a central walk, a terrace or a nearby viewpoint. Keep longer hikes for another day; flight delays and hotel check-in timing can easily turn an ambitious first-day plan into a rushed one.",
    "practical": "A short road route is not the same as an immediate private departure. The shared shuttle can wait for compatible booked passengers, coordinate baggage and make more than one hotel stop. Guests who choose private transfer mainly gain a dedicated vehicle and direct hotel routing, not a different airport road.",
    "return": "For a NAV return, the airport is closer but the confirmed pickup should still be treated as fixed. Travelers sometimes spend the shorter distance on one last activity and then discover that a hotel collection or check-in queue has removed the buffer. Keep the final hour close to the hotel and update any flight change on WhatsApp before adjusting your own schedule."
  },
  "kayseri-urgup": {
    "access": "Urgup has wider town roads than some cave villages, yet accommodation is spread between the center and historic hillside quarters. After the ASR journey, the final approach depends on whether the hotel is on a normal vehicle road or behind a narrower stone lane. The full hotel name is therefore more useful than a generic Urgup center pin.",
    "arrival": "Arriving from Kayseri gives guests an easy reason to keep the first evening local. Central Urgup has restaurants, cafes and shops, while Temenni Hill and the old stone streets can work for a short walk if there is enough daylight. A winery visit or longer regional tour is better planned for a full day when flight delays are no longer part of the schedule.",
    "practical": "Because Urgup sits on the eastern side of the central tourism area, the ASR route can feel more direct than continuing onward to western-side towns. That does not remove shared-shuttle coordination: another booked passenger or a hillside hotel stop can still add time. Private Vito or Sprinter is the choice for a dedicated airport-to-hotel run.",
    "return": "If you will fly out of ASR, confirm the hotel pickup before the last evening rather than assuming the vehicle will find any point in central Urgup. Historic accommodation may use a practical roadside meeting point. On departure day, finish breakfast and packing before the collection window so the longer airport leg begins without avoidable delay."
  },
  "nevsehir-urgup": {
    "access": "NAV is closer to central Cappadocia, but Urgup still requires a meaningful road transfer across the region. Once the vehicle enters town, hotel layout matters more than the airport distance: a central modern property and a cave suite on a hillside can have very different stopping conditions. Enter the exact accommodation name and keep WhatsApp reachable for the final access note.",
    "arrival": "A NAV arrival into Urgup is well suited to a relaxed town-based first day. After check-in, a meal, coffee, old-town walk or Temenni Hill area visit is easier to manage than a valley excursion with uncertain start time. If the flight lands late, Urgup’s evening atmosphere makes it possible to enjoy the destination without needing another transfer immediately.",
    "practical": "For one or two passengers, the €15 shuttle usually offers the strongest value. Private transfer becomes more attractive when the group wants a direct run, has a fixed hotel schedule or carries more luggage. Since NAV private prices are lower than ASR prices, compare the actual vehicle total rather than assuming every Cappadocia private transfer costs the same.",
    "return": "A return from Urgup to NAV is shorter than the ASR alternative but should still be planned from the flight backward. Do not use a generic ‘Cappadocia to Nevsehir’ time for an Urgup hotel. The confirmed pickup accounts for the real property, shared collection plan and the airport buffer needed for that departure."
  },
  "kayseri-uchisar": {
    "access": "The ASR-to-Uchisar journey combines one of the longer road distances in the central service area with a final climb into a high, compact village. Some hotels have easy vehicle entrances, while others sit on steep castle-side streets. A correct property name helps the driver decide whether the vehicle can reach reception or should use a nearby accessible point.",
    "arrival": "Uchisar rewards a slow arrival. Once luggage is at the hotel, the castle area, a panoramic terrace or a short village walk can provide a strong first impression without adding another long drive. Pigeon Valley is nearby, but a full valley walk is better saved for a day when you are not measuring time against a flight arrival.",
    "practical": "On the longer ASR route, a shared shuttle can be excellent value but may add hotel stops before Uchisar. Private transfer is the direct option for guests who want to go straight to a castle-side property, although a dedicated vehicle still cannot ignore narrow-street access limits. Vehicle size matters as much as service type near some hotels.",
    "return": "For the return to Kayseri Airport, Uchisar’s elevation and local street access deserve as much attention as the highway distance. Have luggage ready before the pickup window and use the agreed meeting point. In winter or during busy morning periods, leaving the village smoothly is more important than trying to save a few minutes at the hotel."
  },
  "nevsehir-uchisar": {
    "access": "NAV to Uchisar is one of the shortest listed airport routes, but the village itself is not a flat roadside destination. Hotels around the castle can be reached through steep or narrow streets, so the final drop-off may take more planning than the road distance suggests. The exact hotel name should be entered even when the guest already knows the village well.",
    "arrival": "The short NAV road leg can leave useful time after check-in. A castle-area viewpoint, cafe or terrace is a sensible first choice, especially when the flight lands early. Avoid turning the saved road time into a rushed valley walk; luggage, hotel check-in and the actual flight arrival can all change the available afternoon.",
    "practical": "The €15 shuttle keeps the same fare as every other supported NAV town, even though Uchisar is relatively close. Private Vito or Sprinter is mainly about a dedicated schedule and direct hotel route. For a couple with no urgency, the shared option can be hard to beat on price; for a group, the per-vehicle total may be more attractive.",
    "return": "The short Uchisar-to-NAV route can create false confidence on departure day. Keep the last activity around the castle or hotel rather than descending into a valley, and be at the confirmed pickup point with luggage ready. A missed shared collection is much harder to recover from than arriving at NAV with a little extra time."
  },
  "kayseri-avanos": {
    "access": "Avanos is more spread out than the hill villages and sits on both sides of the Kizilirmak. After the ASR road journey, the driver still needs the precise hotel location to avoid an unnecessary town crossing. Properties near the old center, riverfront and newer road network can all be described simply as ‘Avanos’ even though they are not the same final stop.",
    "arrival": "After arriving from Kayseri, the river is the easiest way to settle into Avanos without overplanning the day. A short riverside walk, central meal or pottery workshop close to the hotel works well after a flight. Guests who want to visit a larger attraction can do so later, once they know how much daylight and energy they really have.",
    "practical": "The shared shuttle may make Avanos an earlier or later hotel stop depending on the other reservations in that run. Private transfer removes that uncertainty and goes to the booked property, but the price is per vehicle rather than per person. For small groups, compare the €15 seats with the €90/€110 ASR private totals before choosing.",
    "return": "On an Avanos-to-ASR departure, accurate hotel details prevent the simplest avoidable delay: starting from the wrong side of town. Keep any final pottery visit or river walk close to the accommodation and return before the pickup window. The longer Kayseri airport leg should begin with luggage already packed and passengers ready."
  },
  "nevsehir-avanos": {
    "access": "The NAV-to-Avanos route is moderate in distance, but the last part of the journey depends on where the hotel sits around the Kizilirmak. A property near the old town and one on a newer road can require different approaches. Enter the full name instead of relying on a broad Avanos map pin so the driver reaches the correct side of town.",
    "arrival": "A NAV arrival can still leave time for an easy introduction to Avanos. The riverfront, central streets and nearby pottery workshops are practical because they do not require another long transfer. If the flight is late, these same local options can be moved to the next morning without losing an important full-day excursion.",
    "practical": "Private prices from NAV are lower than the ASR equivalents, while the shared shuttle remains €15 per person. That makes group size especially relevant: a larger party may find the Sprinter price competitive, while a solo traveler usually saves substantially with the shuttle. The booking summary should be checked after changing the airport or passenger count.",
    "return": "For Avanos to NAV, do not use the shorter airport distance as a reason to add another sightseeing drive before pickup. A controlled local stop is fine; crossing Cappadocia for one more attraction is not. Return to the hotel, collect luggage and let the confirmed pickup time protect the airport buffer."
  },
  "kayseri-ortahisar": {
    "access": "Ortahisar is a smaller village, so the main transfer road is only part of the arrival story. The last streets around the castle and old houses can be narrow, and some cave or stone hotels sit away from a wide vehicle stop. After the ASR journey, the driver uses the complete hotel name to plan that final village approach rather than treating Ortahisar as an extension of Urgup.",
    "arrival": "A quiet arrival suits Ortahisar. The castle area, village streets and a nearby cafe can fill the first hours without another complicated journey. Travelers staying for several days can save Hallacdere, Red Valley connections or longer regional touring for a full day when the airport schedule is no longer a factor.",
    "practical": "The €15 ASR shuttle works well for travelers who accept a coordinated run through central Cappadocia. A private vehicle gives a direct hotel journey, which can be appealing after the longer Kayseri road leg. Neither option guarantees that a large vehicle can stop at every old-village doorway; the safe stopping point still depends on the property.",
    "return": "If ASR is also the departure airport, confirm the Ortahisar pickup point early. The shared vehicle may leave the village, collect another guest and then begin the longer road leg to Kayseri. Waiting inside a property on a narrow lane until the last minute can use up the buffer before the airport journey has properly started."
  },
  "nevsehir-ortahisar": {
    "access": "NAV to Ortahisar crosses central Cappadocia before ending in a compact old village. The distance is shorter than from Kayseri, but the final hotel lane can still be the variable part. A full property name helps distinguish accommodation near the main road from a cave hotel closer to the castle where a shuttle may need an accessible stopping point.",
    "arrival": "Ortahisar is a good place to arrive without rushing. After a NAV transfer, a castle-area walk, village meal or quiet viewpoint can be enough for the first day. The village is less hectic than Goreme, so guests do not need to chase another attraction immediately simply because the airport road was shorter.",
    "practical": "From NAV, private Vito is €80 and Sprinter €90 one way, while the shuttle is €15 per person. Couples usually see the strongest price difference in favor of the shuttle; larger groups may prefer a dedicated vehicle. Whatever the service, exact hotel access should be confirmed rather than assumed from a small-car map route.",
    "return": "On the way back to NAV, keep the last hours close to Ortahisar. A short village walk is controllable; a valley excursion is not. Be ready at the confirmed point because a shared collection can continue to another hotel before the airport, and a shorter road distance does not justify delaying the start."
  },
  "kayseri-cavusin": {
    "access": "Cavusin is small but stretched between village roads, valley access and the road linking Avanos with Goreme. After the longer ASR journey, the driver needs the exact accommodation rather than a single ‘Cavusin center’ destination. Some guesthouses are easy to reach from the main road; others sit closer to the old village or smaller side roads.",
    "arrival": "Cavusin’s landscape makes it tempting to start exploring immediately, but arrival day is better kept flexible. A short old-village walk, cafe stop or nearby balloon-viewing area can work after check-in. Save Rose Valley or another long trail for a day when you can control the return time rather than relying on post-flight energy.",
    "practical": "For ASR arrivals, the shared shuttle keeps the per-person cost low across a relatively long road route. Private transfer is useful when a group wants to reach Cavusin directly without other hotel drops. The larger Sprinter can suit groups, but village access still depends on the actual road near the accommodation.",
    "return": "A Cavusin-to-ASR departure should not begin with a last-minute hike. The village sits close to trailheads and balloon activity, which makes it easy to underestimate how long returning to the hotel can take. Keep luggage ready, stay near the confirmed pickup point and let the longer Kayseri road leg start on time."
  },
  "nevsehir-cavusin": {
    "access": "NAV is closer to Cavusin than ASR, yet the destination remains a small village with several possible accommodation roads. The last stop can be near the old settlement, along the main road or closer to valley access. Enter the complete property name so the driver does not have to search for a guest in a place that has no single terminal-style drop-off point.",
    "arrival": "The shorter NAV journey can make a gentle first walk realistic after check-in. The old village and nearby viewpoints are easy choices, while the valley trails deserve more time and planning. Morning arrivals may also encounter balloon-related activity, so local traffic should be treated as part of the destination rather than a surprise delay.",
    "practical": "For a solo traveler, the €15 shuttle offers a clear saving on this relatively short route. Private transfer becomes more attractive for families or groups that want a dedicated departure from NAV and a direct hotel stop. The private price changes with airport, so a NAV quote should not be copied from an ASR route.",
    "return": "If the return flight uses NAV, avoid using the shorter road distance to justify a final trail walk. Balloon mornings, village roads and shared collections can still affect the start of the trip. Finish any local activity early, collect luggage and wait at the agreed point before the vehicle arrives."
  }
} as const;

const returnEditorial = {
  "kayseri-goreme": {
    "pickup": "For an ASR departure, Goreme hotel access can be the first timing variable. A lower-center property may be simple, while a hillside cave hotel can require a short walk to a larger-vehicle meeting point. Complete checkout and move luggage before the collection window rather than assuming the driver can wait while reception finishes paperwork.",
    "spare": "If your flight is late, keep the final Goreme hours local. Breakfast, a terrace, central shopping or a short viewpoint visit can be stopped quickly when it is time to collect luggage. A full valley hike is a poor fit before the longer Kayseri road journey because trail time and return transport are harder to control.",
    "airport": "ASR is the farther airport for Goreme, so a few unused minutes at the terminal are safer than spending the entire buffer in town. If you truly have several extra hours after leaving Cappadocia, central Kayseri can offer a city stop, but only when the transfer plan still leaves generous time for airport procedures."
  },
  "nevsehir-goreme": {
    "pickup": "The NAV road leg is short enough that travelers sometimes wait inside the hotel until they see the vehicle. That is risky on narrow Goreme lanes. Be at the confirmed entrance or nearby meeting point with luggage ready, because the shuttle may have another collection before it leaves town.",
    "spare": "Use the convenience of a closer airport to make departure calmer, not later. A cafe, terrace or short walk around central Goreme is easy to end; a valley route or distant viewpoint is not. Keep the phone reachable in case the operation team needs to reconfirm a pickup after a flight change.",
    "airport": "NAV normally needs less road time from Goreme than ASR, but airport check-in and security do not disappear. If the flight is delayed, contact the transfer team before deciding to stay longer in town; the shared vehicle may be planned around other passengers whose schedules have not changed."
  },
  "kayseri-urgup": {
    "pickup": "Urgup to ASR becomes straightforward once the vehicle is out of town, so the hotel collection deserves special attention. Historic hillside properties may not have room for a Sprinter to wait. Bring luggage to the agreed point before the vehicle arrives and do not rely on a last-minute phone call from the driver.",
    "spare": "A late ASR flight does not require sitting in the hotel all day. Central Urgup, a meal, coffee or Temenni Hill area walk can be easy to manage if you remain close to luggage. Avoid adding a winery visit or distant valley stop unless the booking team has confirmed that the time margin is genuinely large.",
    "airport": "Because the road toward Kayseri is longer than the NAV alternative, the departure plan protects a wider buffer. If there are several spare hours after leaving Urgup, a Kayseri city stop may be possible, but only as a deliberate plan that preserves airport security and check-in time."
  },
  "nevsehir-urgup": {
    "pickup": "Urgup is not the closest town to NAV, so do not use a generic short Cappadocia-to-Nevsehir estimate. The vehicle still needs to reach the exact hotel, possibly from a hillside lane, before crossing the region toward the airport. Be at the confirmed stop with luggage ready.",
    "spare": "The safest spare-time plan is central Urgup: breakfast, a cafe, a short old-town walk or shopping that can be ended quickly. A final regional tour is difficult to control because the pickup time is tied to the departure flight and other confirmed passengers.",
    "airport": "NAV offers a shorter overall road journey than ASR for many guests, but the benefit should be used as comfort rather than a reason to cut the airport buffer. If the airline moves the flight, send the new details first and wait for the revised pickup confirmation."
  },
  "kayseri-uchisar": {
    "pickup": "Uchisar combines a steep local pickup with a long ASR road leg. A hotel below the castle may use a nearby accessible point instead of the exact reception doorway. Finish checkout early and make the short walk with luggage before the vehicle is due, especially in winter or at busy morning times.",
    "spare": "If there is time before pickup, stay around the castle area, a terrace or a nearby cafe. Pigeon Valley is tempting, but even a short section can take longer than expected once photography, slopes and the walk back are included. Departure day is not the right time to test a tight hiking schedule.",
    "airport": "The ASR transfer is one of the longer central routes, so the operation team builds the pickup around the flight rather than a simple map duration. A private transfer can give a fixed dedicated departure, but it still needs a realistic airport buffer and a vehicle-accessible meeting point."
  },
  "nevsehir-uchisar": {
    "pickup": "Uchisar to NAV is short on the map, but the first minutes can involve a steep hotel lane or a nearby meeting point. Wait outside at the confirmed location rather than expecting a large shuttle to climb every castle-side street. The short road leg is most useful when the collection itself starts smoothly.",
    "spare": "A viewpoint or castle-area coffee is a better last activity than a valley walk. You can remain close to luggage and return to the pickup point without relying on transport. This is especially useful for a late flight when the shorter NAV distance makes a relaxed final hour possible.",
    "airport": "Do not convert every minute saved on the road into more sightseeing. NAV still requires normal airport procedures, and a shared shuttle may have another hotel collection. Keep the confirmed pickup time as the fixed point of the day even when the airport looks very close."
  },
  "kayseri-avanos": {
    "pickup": "The main risk in Avanos is not a narrow hill street but an imprecise hotel location. The town spans both sides of the river and several road areas. Confirm the full property name so the vehicle does not begin the longer ASR journey with an unnecessary crossing or search.",
    "spare": "A pottery workshop close to the hotel, a riverside walk or a central meal can fit before pickup because each is easy to stop. Avoid driving to another Cappadocia town for one last attraction. The ASR road leg is long enough that departure day works best when the final activity stays local.",
    "airport": "Once the vehicle leaves Avanos, the trip toward Kayseri is generally simple, but shared passengers can still affect the schedule. Private transfer removes unrelated hotel collections; the shuttle keeps the fare at €15 per person. Choose based on timing and group size rather than assuming the faster-looking road option is always better."
  },
  "nevsehir-avanos": {
    "pickup": "For NAV departures, the exact side of Avanos still matters even though the airport is closer than ASR. Have luggage ready and verify the accommodation name before pickup. A small address error can create more delay inside town than travelers expected to save on the airport road.",
    "spare": "The riverfront and nearby pottery shops are useful for a late flight because they keep you close to the hotel. Do not add another regional drive simply because NAV seems nearby. Return to the pickup point early enough that the shared vehicle can continue without waiting.",
    "airport": "NAV private prices are lower than ASR, which can change the value calculation for a family or small group. The shared shuttle remains €15 per person. If the flight time changes, confirm the new schedule before deciding whether the extra time in Avanos changes the pickup."
  },
  "kayseri-ortahisar": {
    "pickup": "Ortahisar’s old-village streets can make the meeting point more important than the direct road estimate. A shuttle may collect from an accessible road near the hotel before leaving central Cappadocia for ASR. Be there with luggage before the confirmed time so the longer airport leg is not shortened by a delayed village pickup.",
    "spare": "The castle area, a village cafe or a short local walk can fill spare time without creating a transport problem. Avoid a last-minute valley route; returning from a trail is less predictable than walking back from the center. Keep the final plan close enough that you can reach luggage quickly.",
    "airport": "ASR requires a longer road journey, so the collection time can feel early compared with the flight. That buffer protects shared stops, road conditions and terminal procedures. If several hours remain after leaving Ortahisar, a Kayseri city stop is possible only when it is deliberately planned with the airport margin intact."
  },
  "nevsehir-ortahisar": {
    "pickup": "The NAV road distance is moderate, but the variable part is often the old-village pickup. Do not assume that the place where a small taxi stopped earlier will work for a Sprinter. Use the WhatsApp-confirmed meeting point and bring luggage there before the collection window.",
    "spare": "A quiet village is an advantage on departure day. You can stay near the castle, have a meal or sit at a cafe without needing another transfer. If the flight is later than expected, keep the extra time flexible rather than starting a long activity that depends on another vehicle to return.",
    "airport": "NAV is closer than ASR, but shared service may still collect another passenger before the airport leg. Keep the pickup time fixed and treat any shorter road estimate as extra comfort. If the airline changes the departure, send the new flight details before adjusting the hotel plan."
  },
  "kayseri-cavusin": {
    "pickup": "Cavusin is close to trails and balloon roads, so airport departure works best when the group is already back at the accommodation before the shuttle window. The ASR journey is long enough that the driver cannot wait while guests return from Rose Valley or another trail. Use the exact property or agreed roadside point.",
    "spare": "For a late flight, keep spare time around the old village, a cafe or a nearby viewpoint. A hike that looks short on a map can expand with stops, wrong turns or photography. The final hours should reduce uncertainty before the longer drive to Kayseri, not add another variable.",
    "airport": "ASR is farther from Cavusin than NAV, so the departure buffer is more important. Balloon-morning traffic can also affect local roads before the vehicle reaches the open road. A private vehicle gives a dedicated departure, but it still needs passengers ready and a safe pickup point."
  },
  "nevsehir-cavusin": {
    "pickup": "Cavusin to NAV is shorter, yet punctual village pickup remains essential. Accommodation is spread along more than one road and the shuttle may not be able to wait at every small entrance. Confirm the property name and stand at the agreed point with luggage ready.",
    "spare": "The shorter NAV route can leave a relaxed final hour if you keep it local. The old village or a nearby cafe is easy to leave on time; a valley hike is not. Balloon activity can make the roads busier in the morning, so do not assume a quiet village means an empty road.",
    "airport": "If the NAV flight is delayed, contact the transfer team before deciding to stay out longer. A shared vehicle can be planned around several passengers, and their flights may not move with yours. Use the revised WhatsApp confirmation rather than changing the pickup independently."
  }
} as const;


const arrivalExtra = {
  "kayseri-goreme": "For guests landing late at ASR, the longer road leg also makes hotel reception details worth checking in advance. If a small cave property uses a late-night entrance or a reception away from the room building, add that note to the reservation. It is easier to solve an access detail before leaving the airport than after a minibus reaches a steep Goreme side street.",
  "nevsehir-goreme": "NAV can be especially convenient when the hotel check-in window is tight, but the transfer should still be booked against the actual landing flight. A delayed arrival can move the whole first-day plan even on a short road route. Keep dinner, tours and paid activities flexible until the airport meeting and baggage process are complete.",
  "kayseri-urgup": "Travelers staying in Urgup for events, dinners or an evening reservation should allow for the fact that ASR is not next to town. A private vehicle can reduce unrelated stops, but no transfer can remove baggage-claim time or road conditions. If an evening booking is important, leave a realistic gap between scheduled landing and the start of that activity.",
  "nevsehir-urgup": "For a family arriving at NAV, the lower private-vehicle price can make a dedicated Urgup transfer more attractive than it first appears. The calculation should still include the real passenger count and luggage. A group close to the Vito capacity may need to confirm that unusual baggage does not make the larger Sprinter the more practical choice.",
  "kayseri-uchisar": "Uchisar hotels often sell the view, and guests sometimes plan sunset around the scheduled landing time. From ASR, that is risky without a generous margin. Baggage, road time and hotel access can all shift the arrival. Treat sunset or dinner as a bonus on travel day rather than a fixed appointment immediately after the flight.",
  "nevsehir-uchisar": "Because NAV is close to Uchisar, this route works well for short stays where reducing road time matters. Even then, book the exact property rather than only the village. A few saved kilometres are not useful if the driver has to identify the correct castle-side lane after reaching Uchisar.",
  "kayseri-avanos": "Avanos can be a practical base for guests who plan activities on the northern side of Cappadocia. From ASR, the airport road and town layout are generally easier to understand than a steep cave-village arrival, but the river still divides local addresses. A complete hotel name avoids turning an otherwise simple arrival into an unnecessary loop through town.",
  "nevsehir-avanos": "If the group is arriving for a workshop, wedding or arranged activity in Avanos, send the exact accommodation rather than the event location unless that is truly the transfer destination. The airport booking should end where the luggage and passengers are staying. Any separate activity stop should be discussed explicitly instead of assumed from the town name.",
  "kayseri-ortahisar": "Ortahisar is quieter than Goreme, which is useful after a longer ASR transfer, but it also means some smaller accommodation can be less obvious from the main road. Keep the hotel phone and booking name available. If reception has given you a special arrival instruction, add it to the notes so the driver does not have to discover it at the last turn.",
  "nevsehir-ortahisar": "A NAV arrival is short enough that guests may be tempted to arrange a tour pickup immediately after landing. Leave room between the flight and any separate tour booking. Airport meeting, baggage and the final village stop are variable, and the shuttle service should not be treated as a guaranteed connection to another timed activity.",
  "kayseri-cavusin": "Cavusin is not a place where every guest is dropped at one obvious center. If the accommodation is a guesthouse near a trail approach or on the edge of the village, put the exact name in the form. This matters more after ASR because the driver has already completed a longer road journey and should not need to search several village roads at the end.",
  "nevsehir-cavusin": "For guests planning an early balloon activity the morning after arrival, a short NAV transfer can be useful, but do not assume the airport schedule guarantees an early bedtime. Flight delays and shared coordination still exist. Confirm the hotel arrival first, then arrange the next morning around the real check-in time rather than the timetable alone."
} as const;

const departureExtra = {
  "kayseri-goreme": "If you have checked out but the ASR pickup is later, ask the hotel about luggage storage rather than carrying bags through Goreme. Staying mobile without luggage makes a short final walk easier and helps you return to the meeting point on time. The transfer itself should still begin from the confirmed hotel or agreed pickup location, not from wherever you happen to be in town.",
  "nevsehir-goreme": "For a late NAV flight, luggage storage can make the final hours in Goreme more comfortable. Keep the bag collection and hotel return time in mind, because the shorter airport drive does not help if you are still away from the pickup point. A nearby cafe or terrace is easier to control than moving between different valleys and viewpoints.",
  "kayseri-urgup": "When an Urgup hotel has a checkout time much earlier than the ASR collection, arrange luggage storage and stay near the center. This avoids carrying bags through the old streets and reduces the chance of being somewhere else when the vehicle arrives. The confirmed pickup point should remain the anchor for the final part of the day.",
  "nevsehir-urgup": "If the NAV departure is in the evening, a relaxed meal or central walk can use the extra time without creating another transport dependency. Leave the luggage with the hotel if possible and return before pickup. A separate taxi ride to a distant attraction creates one more connection that can fail before an airport transfer.",
  "kayseri-uchisar": "Uchisar terraces can make it tempting to stay for one last sunset or long meal before ASR, but the pickup time should decide the plan, not the view. If checkout happens early, store luggage at the property and remain close enough to reach the accessible meeting point without hurrying down steep streets.",
  "nevsehir-uchisar": "A late NAV flight can leave a comfortable gap after checkout. Use it close to the castle or hotel and keep luggage storage simple. The main risk is not the road distance but being below the village or away from the agreed pickup point when the vehicle reaches Uchisar.",
  "kayseri-avanos": "Avanos has more flat walking options than the hill towns, which makes a final riverfront period practical before ASR. Still, do not move luggage from place to place. Store bags at the hotel when possible and return with enough time to verify the vehicle is collecting from the correct side of the river.",
  "nevsehir-avanos": "For an evening NAV departure, the riverfront can be a comfortable place to wait after checkout, provided the hotel remains easy to reach. Keep an eye on the time needed to collect luggage and cross the river if necessary. The confirmed pickup should not depend on finding another taxi at the last minute.",
  "kayseri-ortahisar": "Ortahisar’s quiet center makes it easy to spend a few final hours nearby after checkout. If the hotel can hold luggage, use that rather than carrying bags around the castle streets. Return to the confirmed meeting point early, because the ASR run needs its longer road buffer from the moment the vehicle leaves the village.",
  "nevsehir-ortahisar": "A later NAV flight does not require leaving Ortahisar immediately after checkout. Luggage storage, a nearby meal and a short village walk can fill the gap safely. The important condition is staying close enough to the confirmed pickup point that no extra ride is needed when the shuttle time approaches.",
  "kayseri-cavusin": "Cavusin has fewer places to wait with large luggage than a bigger town, so hotel storage is particularly useful before an ASR departure. Keep the final activity within the village and return early. Depending on a last-minute ride back from a trailhead creates unnecessary risk before the longer airport transfer.",
  "nevsehir-cavusin": "If the NAV pickup is later than checkout, ask the accommodation to hold luggage and keep the final hours close to the village. A short local walk is manageable; a trail that ends far from the hotel is not. Being back before the confirmed collection matters more than using every minute of the shorter airport distance."
} as const;


const townOps: Record<keyof typeof towns, {
  booking: string; road: string; service: string; hotelList: string; returnPlan: string;
  departureStart: string; departurePickup: string; delay: string; future: string;
}> = {
  goreme: {
    booking: 'Goreme has many cave properties with similar names, so the exact reservation name is as important as the town itself.',
    road: 'The open-road part ends with a denser valley street network where a hillside reception may be several turns away from the lower center.',
    service: 'A private vehicle is most useful when a group wants to go straight to one cave hotel; the shared shuttle trades that directness for the €15 per-person fare.',
    hotelList: 'In Goreme, words such as cave, suite, house and stone appear in many property names, so shortening the name can easily identify the wrong place.',
    returnPlan: 'For departure, sunrise balloon traffic and steep hotel lanes are more relevant than they look on a simple map of the town.',
    departureStart: 'A Goreme airport day can begin before sunrise, when balloon guests and transfer vehicles are already moving through the center.',
    departurePickup: 'If a cave hotel uses a lane that a larger vehicle cannot wait on, the confirmed meeting point matters more than standing at the room or terrace entrance.',
    delay: 'If the flight changes, stay close enough to the hotel that a revised pickup does not leave you returning from a valley or distant viewpoint.',
    future: 'On a future arrival, the same cave-hotel detail applies in reverse: the exact property name helps the driver finish the route correctly.',
  },
  urgup: {
    booking: 'Urgup combines a normal town center with historic hillside accommodation, so the property name tells the driver which kind of final approach to expect.',
    road: 'Two Urgup hotels can share the same town label while one sits on a broad central road and another is reached through older stone streets.',
    service: 'Private transfer is attractive for travelers who want one direct hotel run, while the shuttle remains the lower-cost option for guests comfortable with coordinated stops.',
    hotelList: 'Urgup accommodation names often refer to caves, mansions or historic houses; entering the complete name avoids confusing a central property with a hillside one.',
    returnPlan: 'The safest last-hour plan in Urgup is usually a meal, coffee or short central walk rather than another regional excursion.',
    departureStart: 'Once an Urgup pickup has cleared the town, the airport road can be straightforward; the important variable is getting the hotel collection right at the start.',
    departurePickup: 'A reception on a hillside property may not be the same place where a minibus can wait, so the agreed pickup point should be treated as part of the booking.',
    delay: 'If the airline changes the flight, avoid adding a winery or valley stop until the revised airport pickup has been confirmed.',
    future: 'For the next Urgup arrival, choose the hotel town explicitly instead of entering only Cappadocia, because the final road is different from Goreme or Uchisar.',
  },
  uchisar: {
    booking: 'Uchisar’s castle-side elevation makes the exact hotel location especially useful because some properties sit on steep roads below or above the main village route.',
    road: 'The regional road may be easy, but the final climb toward castle-side terraces can be the most location-sensitive part of the transfer.',
    service: 'A private Vito can suit guests who value a dedicated hillside arrival, while the shared shuttle keeps the same €15 fare even when the local stop needs extra coordination.',
    hotelList: 'Boutique cave and stone properties cluster on several slopes around Uchisar, so a full hotel name is more reliable than a generic castle-area pin.',
    returnPlan: 'Before an airport pickup, a castle-area coffee or viewpoint is easier to control than descending into Pigeon Valley and climbing back on a deadline.',
    departureStart: 'An Uchisar departure begins with getting luggage from an elevated property to the agreed vehicle point before the longer regional road even starts.',
    departurePickup: 'Steep streets can make a short walking connection to the vehicle more practical than insisting on a doorway pickup at every property.',
    delay: 'A revised flight time should be confirmed before you move far from the village because the pickup point may already require a short downhill or uphill walk.',
    future: 'For an arrival on another trip, the height that gives Uchisar its views is also the reason to keep the accommodation name and meeting details precise.',
  },
  avanos: {
    booking: 'Avanos is less about steep cave lanes and more about location across a spread-out riverside town, so the hotel name and address prevent an unnecessary crossing of the Kizilirmak.',
    road: 'The final minutes can change depending on whether the property is near the old center, riverfront or newer hotel areas on another side of town.',
    service: 'Private transfer gives a direct run to the chosen side of Avanos; the shared shuttle remains economical but can include other hotel stops before or after the river crossing.',
    hotelList: 'Avanos has larger hotels, restored houses and smaller local properties, which is why the booking should identify the exact accommodation rather than only the district.',
    returnPlan: 'A riverfront walk or nearby pottery stop can use spare time well, provided you return to the hotel before the confirmed airport collection.',
    departureStart: 'An Avanos departure is easier when the driver knows the correct side of the river before pickup rather than discovering it after entering town.',
    departurePickup: 'Because the town is spread out, waiting at the wrong bridge-side area can cost more time than a short cave-hotel lane would in another destination.',
    delay: 'If the flight moves later, keep luggage at the hotel and use nearby riverfront time instead of creating another cross-town transport connection.',
    future: 'On arrival next time, the same river geography makes the full address useful even when vehicle access itself is straightforward.',
  },
  ortahisar: {
    booking: 'Ortahisar is a separate village transfer, not simply an Urgup extension, and the exact property name helps identify the correct castle-side lane or roadside stop.',
    road: 'The regional distance can resemble other Cappadocia routes, but the final old-village streets are what make the Ortahisar drop-off distinct.',
    service: 'Private transfer is useful when a dedicated village pickup matters; the shared shuttle keeps the €15 per-person price but may need a practical stop near narrow historic lanes.',
    hotelList: 'Ortahisar has fewer properties than Goreme, yet cave and stone hotels can be tucked into very different streets around the castle.',
    returnPlan: 'On departure day, staying near the castle, a cafe or the hotel protects the airport buffer better than leaving the village for a valley route.',
    departureStart: 'An Ortahisar airport run can lose time before the main road if luggage and passengers are not already at the agreed village pickup point.',
    departurePickup: 'Old stone lanes may have limited waiting space, so a nearby roadside meeting point can be more reliable than a doorway collection.',
    delay: 'If the flight changes, remain reachable and close to the village until the new pickup plan is confirmed instead of assuming the old time simply shifts by the same amount.',
    future: 'A future arrival should use the dedicated Ortahisar route again, because the local stop pattern is not interchangeable with neighboring Urgup.',
  },
  cavusin: {
    booking: 'Cavusin is small but accommodation is split between the old village, main road and valley-side pockets, so the property name prevents a false assumption that there is one universal stop.',
    road: 'The airport road finishes in a village environment where side roads, trailheads and balloon activity can matter more than the final kilometer shown on a map.',
    service: 'A private vehicle gives one group a direct village run; the shared shuttle is cheaper per person but still depends on the confirmed Cavusin property and operating route.',
    hotelList: 'Cavusin cave hotels and guesthouses are more dispersed than the village size suggests, so each booking should keep the full accommodation name.',
    returnPlan: 'A long Rose Valley or trail walk is the wrong way to use spare time before airport pickup because the return to the village is not as predictable as a cafe stop.',
    departureStart: 'A Cavusin departure begins with clearing a small village and valley-road setting before the vehicle settles into the airport road.',
    departurePickup: 'The driver needs the exact property or agreed roadside point because “Cavusin center” is not a precise enough collection instruction for every hotel.',
    delay: 'When a flight changes, do not disappear onto a trail while waiting for a new pickup; stay near the accommodation until the revised plan is confirmed.',
    future: 'For another arrival, choosing Cavusin explicitly helps separate its village and valley access from nearby Goreme and Avanos routes.',
  },
};


const routeHeadings: Record<keyof typeof towns, { arrival: string[]; return: string[] }> = {
  goreme: { arrival: ['From the airport into Goreme’s valley setting','Cave-hotel streets and the final drop-off','Your first few hours in Goreme','Choosing shuttle or a direct private vehicle','Goreme hotels and accommodation names','Plan the return before the last day'], return: ['Leaving Goreme without rushing the flight','Cave-hotel pickup points on departure morning','If the airline delays or changes your flight','How to use spare time before leaving','Shuttle price vs a fixed private pickup','Coming back to Goreme later'] },
  urgup: { arrival: ['The road from the airport into Urgup','Reaching central and hillside Urgup hotels','Settling into Urgup after a flight','When a shared shuttle makes sense','Accommodation names worth entering precisely','Prepare the airport return early'], return: ['Planning an Urgup airport departure','Hotel access before the vehicle leaves town','Flight changes and WhatsApp coordination','A calm final hour in Urgup','Shared shuttle or private vehicle for departure','The reverse airport-to-Urgup journey'] },
  uchisar: { arrival: ['Approaching high-level Uchisar from the airport','Steep lanes, terraces and hotel access','What to do after checking in to Uchisar','Shuttle value vs private timing','Recognizable Uchisar accommodation names','Think about the return pickup point'], return: ['From Uchisar’s hillside to the airport','Confirming a reachable pickup point','What a flight change means for the transfer','Using spare time without entering a long valley walk','When private pickup is worth the extra cost','If Uchisar is part of a round trip'] },
  avanos: { arrival: ['Entering Cappadocia through the Avanos side','Which side of the river is your hotel on?','An easy first plan beside the Kizilirmak','Shared shuttle or private vehicle to Avanos','Accommodation identification in a spread-out town','Return-transfer planning from Avanos'], return: ['Leaving Avanos for the airport','River crossings and the exact hotel address','What to do if the departure flight moves','A pottery stop or river walk before pickup','Compare €15 shuttle with private vehicle pricing','Planning a future airport arrival to Avanos'] },
  ortahisar: { arrival: ['Airport transfer into quieter Ortahisar','Old-village lanes and the hotel stop','A low-pressure first day around the castle','Shared operation or a dedicated private vehicle','Ortahisar accommodation examples','Do not leave return planning until checkout'], return: ['Starting the airport trip from Ortahisar','Why the village pickup point matters','Handling a delayed or rescheduled flight','What to do with a few spare hours','Shuttle and private departure options','The airport-to-Ortahisar route in reverse'] },
  cavusin: { arrival: ['Reaching Cavusin from the airport','Small-village roads and exact accommodation','Valleys and balloons after arrival','When to choose shuttle and when to choose private','Cavusin accommodation examples','Plan the return around the village, not only the map'], return: ['Leaving Cavusin without missing the airport run','Village pickup and luggage readiness','If your flight changes after booking','Do not turn spare time into a long hike','Shared shuttle vs a dedicated vehicle','Returning to Cavusin on another trip'] },
};

function arrivalPage(airportKey: 'kayseri' | 'nevsehir', townKey: keyof typeof towns): SeoPage {
  const a = airports[airportKey]; const t = towns[townKey]; const p = townProfiles[townKey]; const facts = routeFacts(airportKey, townKey); const heads = routeHeadings[townKey].arrival; const ops = townOps[townKey];
  const routeKey = `${airportKey}-${townKey}` as keyof typeof arrivalEditorial;
  const edit = arrivalEditorial[routeKey];
  const hotelExamples = airportKey === 'kayseri' ? p.hotels.slice(0, Math.ceil(p.hotels.length / 2)) : p.hotels.slice(Math.floor(p.hotels.length / 2));
  const landmarkExamples = airportKey === 'kayseri' ? p.landmarks.slice(0, 3) : p.landmarks.slice(-3);
  const sections: ContentSection[] = airportKey === 'kayseri' ? [
    { heading: `ASR arrival: ${heads[0]}`, paragraphs: [routeNotes[routeKey], `${ops.booking.replace(/\.$/, '')} for this ASR arrival to ${t.name}. For a confirmed **Kayseri Airport to ${t.name} transfer**, enter the operating flight code, complete passenger names, required passport numbers and the full hotel name. After baggage claim for your ${t.name} arrival, follow the WhatsApp meeting instructions rather than choosing a meeting point from an old review or a generic ASR map.`] },
    { heading: heads[1], paragraphs: [edit.access, arrivalExtra[routeKey], `${ops.road.replace(/\.$/, '')} on the ASR approach to ${t.name}. On the ${t.name} route, the ${facts.distance} estimate describes the regional road, while the final minutes depend on the actual property and its reachable vehicle stop. The [[${t.name} airport transfer guide|${townKey}-airport-transfer]] expands on those local access details.`] },
    { heading: heads[2], paragraphs: [edit.arrival], bullets: [...landmarkExamples] },
    { heading: heads[3], paragraphs: [edit.practical, `${ops.service.replace(/\.$/, '')} when arriving in ${t.name} from ASR. For ${t.name}, the shared shuttle is **€15 per person one way**; a dedicated Mercedes Vito is **€${a.vito}** for up to 5 passengers and a Sprinter is **€${a.sprinter}** for up to 16. A ${t.name} round trip doubles the chosen one-way total. For ${t.name}, read [[Cappadocia Shuttle Transfer|cappadocia-shuttle-transfer]] for the shared operation or [[shuttle vs private transfer|cappadocia-shared-shuttle-vs-private-transfer]] when deciding which setup fits this journey.`] },
    { heading: heads[4], paragraphs: [`${ops.hotelList.replace(/\.$/, '')} for an ASR booking. On a Kayseri-to-${t.name} booking, use the exact reservation name rather than shortening it to “${t.name} hotel”. The ${t.name} examples below are for accommodation identification, not a ranking, and other supported properties in the town can also be requested.`], bullets: [...hotelExamples] },
    { heading: heads[5], paragraphs: [edit.return, `${ops.returnPlan.replace(/\.$/, '')} when the same trip returns to ASR. If the return flight from ${t.name} also uses ASR, continue with [[${t.name} to Kayseri Airport transfer|${townKey}-to-kayseri-airport-transfer]]. If your ${t.name} departure airport is still undecided, [[compare Kayseri and Nevsehir Airport|kayseri-or-nevsehir-airport-for-cappadocia]] instead of automatically copying the arrival airport.`] },
  ] : [
    { heading: `NAV arrival: ${heads[0]}`, paragraphs: [routeNotes[routeKey], `${ops.booking.replace(/\.$/, '')} for this NAV arrival to ${t.name}. For **Nevsehir Airport to ${t.name}**, the shorter regional road still begins with a normal airport arrival. After collecting baggage for the ${t.name} transfer, keep the operating NAV flight code ready and follow the WhatsApp-confirmed meeting instructions. The ${t.name} reservation also needs passenger names, passport numbers and the complete accommodation name.`] },
    { heading: `A shorter NAV road still ends at a specific ${t.name} hotel`, paragraphs: [edit.access, arrivalExtra[routeKey], `${ops.road.replace(/\.$/, '')} on the NAV approach to ${t.name}. NAV to ${t.name} is approximately **${facts.distance}**, with a typical road estimate of **${facts.time}** before any extra shared stops. Near ${t.name}, the final minutes follow the real property location, which makes the complete hotel name more useful than a broad town-center pin.`] },
    { heading: `Using a shorter NAV arrival well in ${t.name}`, paragraphs: [edit.arrival], bullets: [...landmarkExamples] },
    { heading: `Shuttle or private on the NAV–${t.name} route`, paragraphs: [edit.practical, `${ops.service.replace(/\.$/, '')} when arriving in ${t.name} from NAV. On the NAV–${t.name} route, the shared fare is **€15 per person one way**. For a dedicated ${t.name} run, NAV private pricing is **€${a.vito} for Vito** (up to 5) and **€${a.sprinter} for Sprinter** (up to 16), per vehicle; a round trip doubles the selected one-way total. The [[airport transfer prices|airport-transfer-prices]] page is useful if your ${t.name} party is comparing airports or group sizes.`] },
    { heading: `Accommodation names that help identify the ${t.name} stop`, paragraphs: [`${ops.hotelList.replace(/\.$/, '')} for a NAV booking. The ${t.name} examples below show the level of property detail that helps on a NAV arrival; they are identification examples, not a hotel ranking. Vehicle access can differ even between nearby ${t.name} properties, and the broader [[${t.name} airport transfer guide|${townKey}-airport-transfer]] explains the local context in more depth.`], bullets: [...hotelExamples] },
    { heading: `Planning the ${t.name} return before you need it`, paragraphs: [edit.return, `${ops.returnPlan.replace(/\.$/, '')} when the same trip returns to NAV. For a NAV departure from ${t.name}, use [[${t.name} to Nevsehir Airport transfer|${townKey}-to-nevsehir-airport-transfer]]. If the outbound flight from ${t.name} uses ASR instead, compare the longer road and Kayseri private price rather than reusing the NAV plan.`] },
  ];
  return {
    slug: `${airportKey}-airport-to-${townKey}-transfer`,
    title: `${a.name} to ${t.name} Transfer | €15 Shuttle & Private`,
    description: `${a.name} (${a.code}) to ${t.name}: €15 shuttle, Vito €${a.vito}, Sprinter €${a.sprinter}, ${facts.distance}, ${facts.time}, hotel drop-off and WhatsApp booking.`,
    primaryKeyword: `${a.name.toLowerCase()} to ${t.name.toLowerCase()} transfer`,
    secondaryKeywords: [`${airportKey} to ${townKey}`, `${airportKey} to cappadocia transfer`, `${a.code.toLowerCase()} to ${townKey}`, `${townKey} airport transfer`],
    eyebrow: `${a.code} → ${t.name}`,
    h1: `${a.name} to ${t.name} Transfer`,
    lead: `Travel from ${a.fullName} (${a.code}) to ${t.name}: approximately ${facts.distance} and ${facts.time} by road. On this ${t.name} route, shared shuttle is €15 per person while private Vito is €${a.vito} and Sprinter €${a.sprinter} per vehicle, one way.`,
    route: { airport: airportKey, town: townKey, direction: 'arrival' },
    sections,
    faq: operationalFaq(airportKey, townKey, 'arrival'),
    related: [`${townKey}-to-${airportKey}-airport-transfer`, `${townKey}-airport-transfer`, `${airportKey}-airport-transfer`, `${airportKey}-airport-shuttle`, 'cappadocia-shuttle-transfer', 'airport-transfer-prices'],
  };
}

function returnPage(airportKey: 'kayseri' | 'nevsehir', townKey: keyof typeof towns): SeoPage {
  const a = airports[airportKey]; const t = towns[townKey]; const facts = routeFacts(airportKey, townKey); const heads = routeHeadings[townKey].return; const p = townProfiles[townKey]; const ops = townOps[townKey];
  const routeKey = `${airportKey}-${townKey}` as keyof typeof returnEditorial;
  const edit = returnEditorial[routeKey];
  const localLandmarks = airportKey === 'kayseri' ? townProfiles[townKey].landmarks.slice(0, 2) : townProfiles[townKey].landmarks.slice(-2);
  const sections: ContentSection[] = airportKey === 'kayseri' ? [
    { heading: `ASR departure: ${heads[0]}`, paragraphs: [returnNotes[routeKey], `${ops.departureStart.replace(/\.$/, '')} before a ${t.name}–ASR departure. For the **${t.name} to Kayseri Airport transfer**, use the operating ASR departure flight code rather than estimating pickup from the published ${facts.time} drive. The confirmed ${t.name} pickup already accounts for hotel access, possible shared collections and the airport buffer, so keep the booking WhatsApp reachable on travel day.`] },
    { heading: heads[1], paragraphs: [edit.pickup, `${ops.departurePickup.replace(/\.$/, '')} for the ${t.name} pickup to ASR. For this ${t.name} departure, the full accommodation name remains important because reception, guest rooms and the practical vehicle stop may not share the same lane. If your ${t.name} meeting point is outside the property entrance, reach it with luggage before the vehicle is due.`] },
    { heading: heads[3], paragraphs: [edit.spare, departureExtra[routeKey]], bullets: [...localLandmarks] },
    { heading: `Why ${t.name} needs a wider ASR departure buffer`, paragraphs: [edit.airport, returnExtra[routeKey]] },
    { heading: heads[4], paragraphs: [`${ops.service.replace(/\.$/, '')} when leaving ${t.name} for ASR. From ${t.name} to ASR, shared shuttle is **€15 per person one way**. A ${t.name} private departure costs **€${a.vito} per Vito** for up to 5 passengers or **€${a.sprinter} per Sprinter** for up to 16; private service gives the group a dedicated pickup, while shared service keeps the lower per-person fare. See [[airport transfer prices|airport-transfer-prices]] for the matching ${t.name} round-trip totals.`] },
    { heading: heads[2], paragraphs: [`${ops.delay.replace(/\.$/, ' for the ASR departure.')} If your ASR flight after ${t.name} is delayed or rescheduled, send the new operating flight details on WhatsApp before changing the hotel plan. Because a ${t.name} shared pickup may be coordinated with passengers on other flights, wait for a reconfirmed time rather than changing it independently; check the passenger names and required passport details at the same time.`] },
    { heading: heads[5], paragraphs: [`${ops.future.replace(/\.$/, ' when ASR is the arrival airport.')} Use [[Kayseri Airport to ${t.name} transfer|kayseri-airport-to-${townKey}-transfer]] if you arrive from Kayseri. If NAV is a possibility on another ${t.name} trip, the [[${t.name} airport transfer guide|${townKey}-airport-transfer]] compares both airports and links to the separate Nevsehir route.`] },
  ] : [
    { heading: `NAV departure: ${heads[0]}`, paragraphs: [returnNotes[routeKey], `${ops.departureStart.replace(/\.$/, '')} before a ${t.name}–NAV departure. For **${t.name} to Nevsehir Airport**, the typical road estimate is **${facts.time}** for about **${facts.distance}**, yet the ${t.name} pickup should still be planned backward from the NAV flight. For ${t.name}, shared collection order and the exact property stop can change the first part of this NAV departure.`] },
    { heading: `Starting the ${t.name} to NAV journey from the right place`, paragraphs: [edit.pickup, `${ops.departurePickup.replace(/\.$/, '')} for the ${t.name} pickup to NAV. Before leaving ${t.name}, confirm the complete hotel name, passenger details and NAV departure flight. If the ${t.name} property uses a nearby accessible stop, waiting at reception is not the same as being ready at the agreed vehicle point.`] },
    { heading: `Using spare time in ${t.name} without spending the NAV buffer`, paragraphs: [edit.spare, departureExtra[routeKey]], bullets: [...localLandmarks] },
    { heading: `Why the shorter ${t.name}–NAV road still needs an airport plan`, paragraphs: [edit.airport, returnExtra[routeKey]] },
    { heading: `€15 ${t.name} shuttle or a dedicated NAV vehicle`, paragraphs: [`${ops.service.replace(/\.$/, '')} when leaving ${t.name} for NAV. The ${t.name} to NAV shuttle is **€15 per person one way**. A private ${t.name} departure is **€${a.vito}** for a Vito up to 5 passengers or **€${a.sprinter}** for a Sprinter up to 16, per vehicle; a ${t.name} round trip is exactly double. For this ${t.name} route, group size, luggage and the value of a dedicated pickup matter more than distance alone, and [[airport transfer prices|airport-transfer-prices]] shows the full matrix.`] },
    { heading: `If the ${t.name}–NAV flight plan changes after booking`, paragraphs: [`${ops.delay.replace(/\.$/, ' for the NAV departure.')} If your NAV flight after ${t.name} changes, send the revised operating code or schedule on WhatsApp as soon as possible. Do not simply add the airline delay to the old ${t.name} pickup time, because the revised plan must be checked against other confirmed passengers and vehicle routing; keep the original pickup until a new time is confirmed.`] },
    { heading: `Nevsehir Airport to ${t.name} is a separate arrival journey`, paragraphs: [`${ops.future.replace(/\.$/, ' when NAV is the arrival airport.')} Open [[Nevsehir Airport to ${t.name} transfer|nevsehir-airport-to-${townKey}-transfer]] for the arrival route. Airport meeting and ${t.name} hotel drop-off raise different practical questions from a departure pickup, while the broader [[${t.name} airport transfer guide|${townKey}-airport-transfer]] compares both airports for the destination.`] },
  ];
  return {
    slug: `${townKey}-to-${airportKey}-airport-transfer`,
    title: `${t.name} to ${a.name} Transfer | Hotel Pickup & Shuttle`,
    description: `${t.name} to ${a.name} (${a.code}) hotel pickup: €15 shuttle, Vito €${a.vito}, Sprinter €${a.sprinter}, approx. ${facts.distance} and ${facts.time}. Cash to driver.`,
    primaryKeyword: `${t.name.toLowerCase()} to ${a.name.toLowerCase()} transfer`,
    secondaryKeywords: [`${townKey} to ${airportKey} airport`, `hotel to ${a.code.toLowerCase()} shuttle`, `${townKey} airport shuttle`],
    eyebrow: `${t.name} → ${a.code}`,
    h1: `${t.name} to ${a.name} Transfer`,
    lead: `Arrange hotel pickup from ${t.name} to ${a.fullName} (${a.code}). For this ${t.name} departure, the approximate road distance is ${facts.distance} and the typical drive is ${facts.time} before any additional shared-shuttle collections.`,
    route: { airport: airportKey, town: townKey, direction: 'return' },
    sections,
    faq: operationalFaq(airportKey, townKey, 'return'),
    related: [`${airportKey}-airport-to-${townKey}-transfer`, `${townKey}-airport-transfer`, `${airportKey}-airport-transfer`, 'hotel-to-airport-transfer', 'cappadocia-shuttle-transfer', 'airport-transfer-prices'],
  };
}

const destinationHeadings: Record<keyof typeof towns, {
  intro: string; airport: string; access: string; arrival: string; hotels: string; return: string; routes: string;
}> = {
  goreme: {
    intro: 'Goreme transfer planning starts with the cave-hotel streets',
    airport: 'ASR or NAV: which airport works better for Goreme?',
    access: 'Cave hotels, hillside lanes and practical drop-off points',
    arrival: 'An easy first day after reaching Goreme',
    hotels: 'Goreme hotels and accommodation names worth identifying correctly',
    return: 'Planning a Goreme hotel pickup for the flight home',
    routes: 'Choose the exact Goreme airport route',
  },
  urgup: {
    intro: 'Urgup is a town, a hillside and several different hotel approaches',
    airport: 'Comparing Kayseri and Nevsehir for an Urgup stay',
    access: 'Central hotels and historic hillside properties in Urgup',
    arrival: 'What works well on an Urgup arrival day',
    hotels: 'Recognizable Urgup cave and stone hotels',
    return: 'Leaving Urgup without over-planning the last hours',
    routes: 'Open the airport route that matches your Urgup journey',
  },
  uchisar: {
    intro: 'Uchisar’s elevation changes the last part of an airport transfer',
    airport: 'Why NAV is closer to Uchisar — and why ASR can still make sense',
    access: 'Castle-side slopes, terraces and Uchisar hotel access',
    arrival: 'A calm arrival plan around Uchisar Castle',
    hotels: 'Boutique cave hotels and properties around Uchisar',
    return: 'Getting from an elevated Uchisar hotel back to the airport',
    routes: 'Use the route page for your exact Uchisar airport',
  },
  avanos: {
    intro: 'Avanos is more open than the cave villages, but less compact',
    airport: 'Airport choice for a hotel on the Avanos side of Cappadocia',
    access: 'Riverfront, old town and newer Avanos hotel locations',
    arrival: 'A low-pressure first day by the Kizilirmak',
    hotels: 'Avanos hotels on different parts of town',
    return: 'Keeping an Avanos departure day close to the river and hotel',
    routes: 'Choose the correct Avanos airport direction',
  },
  ortahisar: {
    intro: 'Ortahisar needs a village-specific transfer plan',
    airport: 'Kayseri or Nevsehir for a quieter Ortahisar base?',
    access: 'Castle-side lanes and the real Ortahisar meeting point',
    arrival: 'A simple arrival plan in Ortahisar village',
    hotels: 'Cave and stone accommodation in Ortahisar',
    return: 'Leaving Ortahisar with enough airport buffer',
    routes: 'Open the exact Ortahisar arrival or departure route',
  },
  cavusin: {
    intro: 'Cavusin is small on the map but spread across several hotel pockets',
    airport: 'Choosing an airport for a Cavusin stay',
    access: 'Old village roads, valley access and Cavusin pickup points',
    arrival: 'Arriving near trails and balloon-viewing areas',
    hotels: 'Cavusin cave hotels and guesthouses to identify in full',
    return: 'Why a valley walk is a poor last-minute departure plan',
    routes: 'Pick the Cavusin route for the airport you actually use',
  },
};

const destinationOperationalFaq: Record<keyof typeof towns, FaqItem[]> = {
  goreme: [
    { q: 'Can I use the same Goreme shuttle price from Kayseri and Nevsehir?', a: 'Yes. The shared shuttle is €15 per person each way from either ASR or NAV. The road distance changes, but the shared fare does not.' },
    { q: 'What are the private-transfer prices if my hotel is in Goreme?', a: 'Kayseri private transfer is €90 for Vito or €110 for Sprinter; Nevsehir is €80 for Vito or €90 for Sprinter. These are one-way vehicle prices.' },
    { q: 'Can I arrange the airport arrival and Goreme hotel pickup for departure in one booking?', a: 'Yes. Choose Round Trip and enter both flight codes and dates so the arrival meeting and departure pickup can be planned separately.' },
    { q: 'How is payment handled for a Goreme airport shuttle?', a: 'Payment is cash to the driver. The booking total is shown in EUR; USD or TRY cash can be arranged using the exchange rate confirmed for the reservation.' },
    { q: 'Why are passport numbers requested for a Goreme transfer?', a: 'Passenger names and passport details are required by the operating company for reservation and transfer operation.' },
    { q: 'Do I need to choose ASR or NAV before submitting the Goreme form?', a: 'Yes. Select the airport shown on the airline ticket because the private price, road distance, meeting plan and return route depend on it.' },
  ],
  urgup: [
    { q: 'Is the €15 shuttle available to central and hillside Urgup accommodation?', a: 'The shared fare is €15 per person for supported Urgup accommodation. The exact stopping point still depends on safe vehicle access to the property.' },
    { q: 'What does a private vehicle cost between the airport and Urgup?', a: 'From ASR, Vito is €90 and Sprinter €110 one way; from NAV, Vito is €80 and Sprinter €90 one way.' },
    { q: 'Can I pay the Urgup transfer after reaching the hotel?', a: 'The listed service is paid cash to the driver. Keep the confirmed booking total available for the transfer.' },
    { q: 'Can an Urgup round trip use the same hotel for arrival and departure?', a: 'Yes. Enter the hotel once and provide the separate arrival and return flight details. If the departure hotel changes, send the update on WhatsApp.' },
    { q: 'Why does the Urgup booking include passport information?', a: 'Passport details are part of the operating company’s required reservation information for each passenger.' },
    { q: 'Should I choose an airport based only on which one is closer to Urgup?', a: 'No. NAV can have a shorter road route, while ASR may have a better flight. Compare the total trip as well as the transfer time.' },
  ],
  uchisar: [
    { q: 'Is Uchisar served by the €15 shuttle from both airports?', a: 'Yes. The shared shuttle fare is €15 per person each way from Kayseri ASR or Nevsehir NAV to supported Uchisar accommodation.' },
    { q: 'Does the shorter NAV–Uchisar distance reduce the shared shuttle fare?', a: 'No. The shared price remains €15. Private pricing is lower from NAV: Vito €80 and Sprinter €90, compared with €90 and €110 from ASR.' },
    { q: 'Can I book a private vehicle if my Uchisar hotel has difficult access?', a: 'Yes. A private Vito or Sprinter can be requested, although the exact safe stopping point still depends on the hotel lane and vehicle access.' },
    { q: 'How should I pay for an Uchisar transfer?', a: 'Cash to the driver. EUR is the displayed booking currency, with USD or TRY cash possible when the exchange rate is confirmed for the booking.' },
    { q: 'Why do you need every passenger’s passport number for Uchisar?', a: 'The operating company requires passenger passport information for the reservation and transfer operation.' },
    { q: 'Can I combine NAV arrival with an ASR departure in the normal round-trip selector?', a: 'The standard round-trip form assumes one airport. If the two directions use different airports, send the full itinerary on WhatsApp so both legs can be confirmed correctly.' },
  ],
  avanos: [
    { q: 'Does the shared shuttle cover hotels on both sides of Avanos?', a: 'Supported Avanos accommodation can use the €15 shuttle, but the full property name and address are important because the town spreads along both sides of the Kizilirmak.' },
    { q: 'Are Kayseri and Nevsehir private prices different for Avanos?', a: 'Yes. ASR private pricing is Vito €90 / Sprinter €110; NAV is Vito €80 / Sprinter €90. Each figure is one way per vehicle.' },
    { q: 'Can I book Avanos airport transfer as a round trip?', a: 'Yes. The form doubles the one-way fare and collects separate arrival and departure flight information.' },
    { q: 'When do I pay for the Avanos shuttle or private transfer?', a: 'Payment is cash to the driver. The booking summary shows the EUR total before the WhatsApp request is sent.' },
    { q: 'Are passport details required even when Avanos road access is straightforward?', a: 'Yes. Passport information is an operating-company reservation requirement and is unrelated to whether the hotel road itself is easy or difficult.' },
    { q: 'Which airport should I select for an Avanos hotel?', a: 'Use the airport on your ticket. NAV has the shorter published road distance, while ASR can still be practical when the flight schedule is better.' },
  ],
  ortahisar: [
    { q: 'Can I take the €15 airport shuttle directly to Ortahisar?', a: 'Yes. Ortahisar is one of the supported central hotel areas. A nearby safe stop may be used when a castle-side lane is not suitable for the vehicle.' },
    { q: 'How much is a private airport transfer for an Ortahisar stay?', a: 'Private one-way pricing is €90 Vito / €110 Sprinter from Kayseri and €80 Vito / €90 Sprinter from Nevsehir.' },
    { q: 'Can I request Ortahisar hotel pickup for a very early flight?', a: 'Yes. Enter the departure flight and follow the pickup time confirmed on WhatsApp; shared pickup is planned around the actual flight and collection order.' },
    { q: 'How is an Ortahisar transfer paid?', a: 'Cash to the driver. The site displays the total in EUR, and another supported cash currency can be confirmed for the booking.' },
    { q: 'Why is passport information part of an Ortahisar airport booking?', a: 'It is required by the operating company for passenger reservation and transfer operation.' },
    { q: 'If I stay in Ortahisar, should I use an Urgup route page instead?', a: 'No. Ortahisar has its own hotel access, distance and pickup details, so use the dedicated Ortahisar route even though the towns are close.' },
  ],
  cavusin: [
    { q: 'Is Cavusin included in the €15 Cappadocia shuttle area?', a: 'Yes. The shared fare is €15 per person each way for supported Cavusin accommodation, with the practical meeting point confirmed for the property.' },
    { q: 'What are the private prices for a Cavusin airport transfer?', a: 'Kayseri: Vito €90, Sprinter €110. Nevsehir: Vito €80, Sprinter €90. These are one-way prices for the whole private vehicle.' },
    { q: 'Can I book a Cavusin hotel-to-airport return at the same time as arrival?', a: 'Yes. Round Trip collects both sets of flight details and doubles the applicable one-way fare.' },
    { q: 'When is payment made for a Cavusin transfer?', a: 'Payment is cash to the driver. Review the total in the booking summary before continuing to WhatsApp.' },
    { q: 'Why are passenger passport numbers needed for a small village transfer?', a: 'The requirement comes from the operating company’s reservation process, not from the size of the destination. Each passenger’s details are requested.' },
    { q: 'Is Cavusin the same pickup area as Goreme?', a: 'No. Cavusin is a separate village with its own hotel locations, side roads and valley access, so the Cavusin route should be selected explicitly.' },
  ],
};

function destinationHub(townKey: keyof typeof towns): SeoPage {
  const t = towns[townKey]; const p = townProfiles[townKey];
  const faq: FaqItem[] = [...destinationOperationalFaq[townKey], ...p.faq];
  const h = destinationHeadings[townKey];
  return {
    slug: `${townKey}-airport-transfer`, title: `${t.name} Airport Transfer | ASR & NAV Shuttle`,
    description: `${t.name} airport transfer from Kayseri and Nevsehir airports. €15 shuttle, private Vito/Sprinter, hotel access, route times and return pickup.`,
    primaryKeyword: `${t.name.toLowerCase()} airport transfer`, secondaryKeywords: [`${townKey} airport shuttle`, `${townKey} transfer`, `cappadocia ${townKey} shuttle`, ...(townKey === 'goreme' ? ['cappadocia airport to goreme'] : [])],
    eyebrow: `${t.name} transfer guide`, h1: `${t.name} Airport Transfer`,
    lead: `Compare Kayseri Airport and Nevsehir Airport routes to ${t.name}, then book the €15 shuttle or a private vehicle with hotel pickup/drop-off and WhatsApp confirmation.`,
    sections: [
      { heading: h.intro, paragraphs: [p.overview, p.special] },
      { heading: h.airport, paragraphs: [`Kayseri Airport (ASR) to ${t.name} is approximately **${t.distanceKayseri}** with a typical road estimate of **${t.timeKayseri}**. Nevsehir Airport (NAV) is approximately **${t.distanceNevsehir}** and **${t.timeNevsehir}**. NAV is often shorter by road, but the better flight schedule can still make ASR the practical choice. Compare [[Kayseri or Nevsehir Airport|kayseri-or-nevsehir-airport-for-cappadocia]] before buying a flight if both are available.`] },
      { heading: h.access, paragraphs: [p.hotelAccess] },
      { heading: h.arrival, paragraphs: [p.arrivalIdeas], bullets: [...p.landmarks] },
      { heading: h.hotels, paragraphs: [p.hotelIntro], bullets: [...p.hotels] },
      { heading: h.return, paragraphs: [p.departureIdeas, `Use [[${t.name} to Kayseri Airport|${townKey}-to-kayseri-airport-transfer]] for ASR or [[${t.name} to Nevsehir Airport|${townKey}-to-nevsehir-airport-transfer]] for NAV. The booking form can also combine arrival and departure in one Round Trip request.`] },
      { heading: h.routes, paragraphs: [`For arrival, open [[Kayseri Airport to ${t.name}|kayseri-airport-to-${townKey}-transfer]] or [[Nevsehir Airport to ${t.name}|nevsehir-airport-to-${townKey}-transfer]]. These route pages contain the airport-specific road approach, price, hotel-access notes and departure planning for that journey.`] },
    ], faq, related: [`kayseri-airport-to-${townKey}-transfer`,`nevsehir-airport-to-${townKey}-transfer`,`${townKey}-to-kayseri-airport-transfer`,`${townKey}-to-nevsehir-airport-transfer`,'cappadocia-shuttle-transfer',...(townKey === 'goreme' ? ['cappadocia-airport'] : []),'airport-transfer-prices']
  };
}

function airportHub(airportKey: 'kayseri' | 'nevsehir'): SeoPage {
  const a=airports[airportKey]; const edit=airportEditorial[airportKey];
  return {
    slug:`${airportKey}-airport-transfer`, title:`${a.name} Transfer to Cappadocia | Shuttle & Private`, description:`${a.name} (${a.code}) transfer to Goreme, Urgup, Uchisar, Avanos, Ortahisar and Cavusin. €15 shuttle, Vito €${a.vito}, Sprinter €${a.sprinter}.`, primaryKeyword:`${a.name.toLowerCase()} transfer`, secondaryKeywords:[`${airportKey} airport shuttle`,`${airportKey} to cappadocia transfer`,`${a.code.toLowerCase()} transfer`,...(airportKey==='nevsehir'?['nevsehir kapadokya airport','nav airport']:['kayseri airport to cappadocia turkey'])], eyebrow:`${a.code} airport hub`, h1:`${a.name} Transfer to Cappadocia`, lead:`Use the ${a.code} hub to choose the exact hotel town, compare shuttle and private prices, and plan both airport arrival and hotel-to-airport departure.`,
    sections:[
      {heading:`How ${a.name} connects with Cappadocia`,paragraphs:[`${a.fullName} (${a.code}) is one of the two main airports used for Cappadocia. Shared shuttle service covers Goreme, Urgup, Uchisar, Avanos, Ortahisar and Cavusin. A request written only as ‘${airportKey} to Cappadocia’ can mean six different final destinations, so choose the real hotel town rather than treating the whole region as one stop.`, `The **€15 per person shuttle** is the main service. Private transfer is also available: Vito €${a.vito} one way (max 5) and Sprinter €${a.sprinter} one way (max 16). Round trip is exactly double.`]},
      {heading:'Airport arrival information to prepare',paragraphs:['Enter the correct operating flight code, passenger names, passport numbers, passenger count and full hotel name. After baggage claim, follow the WhatsApp-confirmed meeting instructions. The driver or representative can meet passengers using the reservation name; the flight information is used for operation, not to imply an airline partnership.']},
      {heading:'Hotel-to-airport departure works differently',paragraphs:[`For the return to ${a.code}, the pickup time is confirmed from the departure flight and shared-shuttle plan rather than from a universal rule such as ‘leave three hours before’. Hotel access and passenger collection order can affect the start of the journey. Open [[Cappadocia to ${a.name} shuttle|cappadocia-to-${airportKey}-airport-shuttle]] for the departure hub.`]},
      {heading:'Choose the town, not only the airport',paragraphs:['Goreme has dense cave-hotel streets; Uchisar has steep castle-side lanes; Avanos is spread around the river; Ortahisar and Cavusin have smaller village roads. Choosing the real hotel town avoids a generic Cappadocia estimate and gives the driver the right final approach.']},
    ],
    faq:[
      {q:`How much is the shuttle from ${a.name}?`,a:'€15 per person each way.'},{q:`How much is private transfer from ${a.code}?`,a:`Vito €${a.vito} one way for up to 5; Sprinter €${a.sprinter} for up to 16.`},{q:`Can I pay the ${a.code} transfer fare to the driver?`,a:'Yes. The listed service is paid cash to the driver.'},{q:`Which hotel towns are covered from ${a.code}?`,a:'Goreme, Urgup, Uchisar, Avanos, Cavusin and Ortahisar. Mustafapasa requires a private transfer request.'},{q:`How does the airport meeting work after landing at ${a.code}?`,a:'Meeting instructions are confirmed on WhatsApp. The passenger reservation name is used for the airport meeting.'},{q:`Are passport numbers required for a ${a.code} booking?`,a:'Yes, passenger passport details are required for reservation and transfer operation.'},{q:`Can I book ${a.code} arrival and departure together?`,a:'Yes. Select Round Trip and provide both arrival and departure flight information.'},{q:`Are the published ${a.code} journey times guaranteed?`,a:'No. Published route times are estimates and can change with traffic, weather, baggage coordination, hotel access and shared passenger order.'}
    ],
    related:[`${airportKey}-airport-shuttle`,`${airportKey}-to-cappadocia-transfer`,`cappadocia-to-${airportKey}-airport-shuttle`,...townKeys.map(t=>`${airportKey}-airport-to-${t}-transfer`),'airport-transfer-prices']
  };
}

function airportShuttle(airportKey:'kayseri'|'nevsehir'):SeoPage{
 const a=airports[airportKey]; return {slug:`${airportKey}-airport-shuttle`,title:`${a.name} Shuttle to Cappadocia | €15 per Person`,description:`${a.name} (${a.code}) shuttle to Cappadocia hotels: €15 per person, cash to driver, Goreme, Urgup, Uchisar, Avanos, Cavusin and Ortahisar.`,primaryKeyword:`${a.name.toLowerCase()} shuttle`,secondaryKeywords:[`${airportKey} airport shuttle`,`cappadocia shuttle from ${airportKey}`,`${a.code.toLowerCase()} shuttle`],eyebrow:`${a.code} shuttle service`,h1:`${a.name} Shuttle to Cappadocia`,lead:`Book the €15 per person shared shuttle from ${a.fullName} to supported Cappadocia accommodation, with flight-based meeting details confirmed on WhatsApp.`,sections:[
 {heading:`What the ${a.code} shuttle includes`,paragraphs:['The shared service connects the airport with confirmed accommodation in Goreme, Urgup, Uchisar, Avanos, Cavusin and Ortahisar. It may carry passengers for multiple hotel stops, which is why the road estimate for a private car is not a guaranteed shuttle duration.','The one-way price is **€15 per person** and round trip is **€30 per person**. Payment is cash to the driver. Prices are stated in EUR; USD or TRY cash payment can be arranged using the current exchange rate confirmed for the booking.']},
 {heading:'What to enter in the booking request',paragraphs:['Use the correct flight code, full hotel name, WhatsApp number, passenger count, passenger names and passport numbers. Those details are used for reservation and transfer operation. After baggage claim, follow the airport meeting instructions sent for the booking.']},
 {heading:'Where the shuttle goes',paragraphs:['Do not stop at the broad word Cappadocia. Choose the actual town so you can see its distance and local hotel-access guidance. The six route pages below cover the supported central hotel areas.']},
 {heading:'When a private vehicle is a better fit',paragraphs:[`Private Vito is €${a.vito} one way for up to 5 passengers and Sprinter €${a.sprinter} for up to 16. A private vehicle is often attractive for groups, late arrivals, unusual luggage or travelers who do not want unrelated hotel stops. Read [[Shuttle vs Private Transfer|cappadocia-shared-shuttle-vs-private-transfer]] before deciding.`]},
 ],faq:[{q:`Is ${a.name} shuttle €15?`,a:'Yes, €15 per person one way.'},{q:`Does the ${a.code} shuttle include hotel drop-off?`,a:'Yes, for confirmed accommodation in the supported service towns.'},{q:`Can I book a hotel pickup back to ${a.code}?`,a:'Yes. Use Hotel → Airport or Round Trip.'},{q:`Is the €15 ${a.code} shuttle a private vehicle?`,a:'No. The €15 service is shared and may include other passengers and hotel stops.'},{q:`Does the ${a.code} shared shuttle serve Mustafapasa?`,a:'No. A private transfer request is needed for Mustafapasa.'},{q:`Are passenger passport details required for the ${a.code} shuttle?`,a:'Yes, they are part of the operating company’s reservation information.'},{q:`How is the ${a.code} meeting point confirmed?`,a:'By WhatsApp using the reservation and flight information.'}],related:[`${airportKey}-airport-transfer`,`${airportKey}-to-cappadocia-transfer`,...townKeys.map(t=>`${airportKey}-airport-to-${t}-transfer`),'cappadocia-shuttle-transfer']};
}

function toCappadocia(airportKey:'kayseri'|'nevsehir'):SeoPage{
 const a=airports[airportKey]; const city=airportKey==='kayseri'?'Kayseri':'Nevsehir'; return {slug:`${airportKey}-to-cappadocia-transfer`,title:`${city} to Cappadocia Transfer | Airport Shuttle & Private`,description:`${city} to Cappadocia transfer from ${a.code}: €15 shuttle plus private Vito/Sprinter to Goreme, Urgup, Uchisar, Avanos, Ortahisar and Cavusin.`,primaryKeyword:`${city.toLowerCase()} to cappadocia transfer`,secondaryKeywords:[`${city.toLowerCase()} to cappadocia`,`${city.toLowerCase()} to goreme`,`shuttle ${city.toLowerCase()} cappadocia`,...(airportKey==='nevsehir'?['nevsehir airport to cappadocia','nevsehir kapadokya airport']:['kayseri airport to cappadocia','kayseri airport to cappadocia turkey'])],eyebrow:`${city} → Cappadocia`,h1:`${city} to Cappadocia Transfer`,lead:`A ${city} to Cappadocia airport transfer normally starts at ${a.fullName} (${a.code}) and finishes at a specific hotel town. Choose the actual town first so the distance, road estimate and arrival plan match the real trip.`,sections:[
 {heading:`What “${city} to Cappadocia” means for an airport passenger`,paragraphs:[`Cappadocia is a region, not one hotel district. A guest landing at ${a.code} may be staying in Goreme, Urgup, Uchisar, Avanos, Ortahisar or Cavusin. Those routes share the airport but do not share the same distance, hotel access or local arrival experience.`, `Use this page as a hub, then open the exact destination rather than relying on a generic ${city}-Cappadocia estimate.`]},
 {heading:'Shuttle pricing and private options',paragraphs:[`The shared shuttle is **€15 per person each way**. A private Vito from ${a.code} is **€${a.vito} per vehicle** for up to 5 passengers; Sprinter is **€${a.sprinter}** for up to 16. Round-trip totals are double the one-way price.`]},
 {heading:'Choose the correct Cappadocia base',paragraphs:['Goreme is the most popular base for many first-time visitors; Urgup offers a larger town atmosphere; Uchisar is elevated; Avanos is riverside; Ortahisar is quieter; Cavusin is close to valleys and balloon activity. Each linked page explains what changes for the transfer and the stay.']},
 {heading:'Do not forget the return direction',paragraphs:[`If you are flying back through ${a.code}, the reverse hub is [[Cappadocia to ${a.name} shuttle|cappadocia-to-${airportKey}-airport-shuttle]]. Booking Round Trip keeps both directions in one request while still collecting the correct arrival and departure flight codes.`]},
 ],faq:[{q:`Is there a ${city} to Cappadocia shuttle?`,a:`Yes. From ${a.fullName}, shared shuttle is €15 per person to supported central hotel areas.`},{q:`Is ${city} to Goreme the same as ${city} to Cappadocia?`,a:'Goreme is one Cappadocia destination, but not the only one. Your hotel may be in Urgup, Uchisar, Avanos, Ortahisar or Cavusin.'},{q:`Can I make the ${city} to Cappadocia journey private?`,a:`Yes. Vito €${a.vito}, Sprinter €${a.sprinter}, one way per vehicle.`},{q:`Can I book a round trip using ${a.code}?`,a:'Yes. The form doubles the price and asks for both arrival and departure flight information.'},{q:`Why does a ${city} to Cappadocia request need the exact hotel?`,a:'The final town and property access affect the practical route and drop-off point.'}],related:[`${airportKey}-airport-transfer`,`${airportKey}-airport-shuttle`,...townKeys.map(t=>`${airportKey}-airport-to-${t}-transfer`),'cappadocia-airport-transfer']};
}

function reverseAirportHub(airportKey:'kayseri'|'nevsehir'):SeoPage{
 const a=airports[airportKey]; return {slug:`cappadocia-to-${airportKey}-airport-shuttle`,title:`Cappadocia to ${a.name} Shuttle | Hotel Pickup`,description:`Cappadocia hotel to ${a.name} (${a.code}) shuttle: €15 per person from Goreme, Urgup, Uchisar, Avanos, Cavusin and Ortahisar.`,primaryKeyword:`cappadocia to ${a.name.toLowerCase()} shuttle`,secondaryKeywords:[`cappadocia to ${airportKey} airport transfer`,`hotel to ${a.code.toLowerCase()} shuttle`],eyebrow:`Cappadocia → ${a.code}`,h1:`Cappadocia to ${a.name} Shuttle`,lead:`Book the €15 hotel-to-airport shuttle from supported Cappadocia towns to ${a.fullName}, with the pickup point and timing confirmed from your departure flight.`,sections:[
 {heading:'Departure transfer starts with the flight code',paragraphs:['Hotel pickup timing is planned around the departure flight and the shared operation, not a single fixed rule for every passenger. Enter the correct flight code, full accommodation name, passenger names, passport numbers and WhatsApp contact.']},
 {heading:'Supported pickup towns',paragraphs:['Pickup can be requested from Goreme, Urgup, Uchisar, Avanos, Cavusin and Ortahisar. Mustafapasa is outside the shared route and requires a private transfer request. Open the town-specific return route for distance, hotel access and spare-time advice.']},
 {heading:`Getting to ${a.code} without rushing`,paragraphs:[`Shared passengers may be collected from more than one hotel, so a published road estimate is not the same as the total door-to-airport time. Be ready at the confirmed point with luggage before the vehicle arrives.`,airportEditorial[airportKey].spare]},
 {heading:'Private pickup is available too',paragraphs:[`A dedicated Vito is €${a.vito} one way for up to 5 passengers and Sprinter €${a.sprinter} for up to 16. Private transfer is useful when a fixed hotel pickup or direct route matters more than the €15 per-person shuttle price.`]},
 ],faq:[{q:`How much is Cappadocia to ${a.name} shuttle?`,a:'€15 per person one way.'},{q:`How is my hotel pickup time for ${a.code} confirmed?`,a:'By WhatsApp using the departure flight and shared-shuttle operating plan.'},{q:`Which towns can use the shuttle to ${a.code}?`,a:'Goreme, Urgup, Uchisar, Avanos, Cavusin and Ortahisar.'},{q:`What should I do if my ${a.code} departure flight changes?`,a:'Send the new flight details as early as possible so the pickup plan can be checked.'},{q:`Can I book a private vehicle to ${a.code}?`,a:`Yes. Vito €${a.vito}; Sprinter €${a.sprinter}, one way.`},{q:`Are passport details required for a hotel-to-${a.code} transfer?`,a:'Yes, passenger passport information is required for reservation and transfer operation.'}],related:[`${airportKey}-airport-transfer`,...townKeys.map(t=>`${t}-to-${airportKey}-airport-transfer`),'hotel-to-airport-transfer','airport-transfer-prices']};
}


const corePages: SeoPage[] = [
  {
    slug:'cappadocia-shuttle-transfer', title:'Cappadocia Shuttle Transfer | Kayseri & Nevsehir €15', description:'Cappadocia shuttle transfer from Kayseri ASR and Nevsehir NAV to central hotels for €15 per person. Airport meeting, hotel drop-off, return pickup and private options.', primaryKeyword:'cappadocia shuttle transfer', secondaryKeywords:['cappadocia airport shuttle','cappadocia shuttle','airport shuttle cappadocia'], eyebrow:'Main shuttle service', h1:'Cappadocia Shuttle Transfer', lead:'Shared airport shuttle between Kayseri Airport (ASR), Nevsehir Airport (NAV) and supported Cappadocia hotels for €15 per person each way, with cash payment to the driver and WhatsApp confirmation.',
    sections:[
      {heading:'How the Cappadocia shuttle transfer works',paragraphs:['**Cappadocia Shuttle Transfer** is the primary service: a pre-booked shared airport connection for travelers using Kayseri Airport or Nevsehir Airport and staying in Goreme, Urgup, Uchisar, Avanos, Cavusin or Ortahisar. The price is €15 per person one way and €30 per person round trip.','The service is shared, so the vehicle may coordinate passengers from compatible flights and make more than one hotel stop. For travelers who want a vehicle only for their group, [[private airport transfer in Cappadocia|private-airport-transfer-cappadocia]] is available with fixed Vito and Sprinter pricing.']},
      {heading:'What happens after you land',paragraphs:['Enter the operating flight code, full hotel name, passenger names, passport numbers and a reachable WhatsApp number. After baggage claim, follow the meeting details confirmed for your reservation. The passenger name can be used for the airport meeting sign. Flight information is used for transfer operation and does not imply an airline partnership.']},
      {heading:'Where the €15 shuttle goes',paragraphs:['Supported shared-shuttle hotel areas are Goreme, Urgup, Uchisar, Avanos, Cavusin and Ortahisar. Mustafapasa is outside the shared route; request private transfer if your accommodation is there or outside the listed service towns.','Do not stop at a generic “Cappadocia” page if you already know the hotel town. Use [[Goreme Airport Transfer|goreme-airport-transfer]], [[Urgup Airport Transfer|urgup-airport-transfer]], [[Uchisar Airport Transfer|uchisar-airport-transfer]], [[Avanos Airport Transfer|avanos-airport-transfer]], [[Ortahisar Airport Transfer|ortahisar-airport-transfer]] or [[Cavusin Airport Transfer|cavusin-airport-transfer]] for the local details.']},
      {heading:'Airport arrival and hotel return are different journeys',paragraphs:['For airport arrivals, the focus is baggage claim, meeting instructions and hotel drop-off. For hotel-to-airport departures, the correct flight code and confirmed pickup time matter more than a simple map duration. You can book either direction alone or choose Round Trip so both are included in one request.']},
      {heading:'Shuttle vs private transfer in real numbers',paragraphs:['Shared shuttle: **€15 per person / way** from either airport. Kayseri private Vito: **€90 / vehicle**; Kayseri Sprinter: **€110**. Nevsehir Vito: **€80**; Nevsehir Sprinter: **€90**. Round trip is exactly double. Read [[Shuttle vs Private Transfer|cappadocia-shared-shuttle-vs-private-transfer]] for group-size examples.']},
      {heading:'Why the exact Cappadocia hotel town matters',paragraphs:['A Kayseri-to-Goreme arrival is not the same journey as NAV-to-Uchisar, and a Cavusin departure has different practical concerns from an Avanos hotel pickup. Hotel access, local roads, airport distance and departure timing all change with the real route, so booking the correct town is more useful than entering only “Cappadocia”.']},
    ],
    faq:[
      {q:'How much is Cappadocia shuttle transfer?',a:'€15 per person one way from either Kayseri Airport or Nevsehir Airport. Round trip is €30 per person.'},{q:'Which airports are served?',a:'Kayseri Erkilet Airport (ASR) and Nevsehir Kapadokya Airport (NAV).'},{q:'Which towns are included in the shared shuttle?',a:'Goreme, Urgup, Uchisar, Avanos, Cavusin and Ortahisar.'},{q:'Is Mustafapasa included?',a:'No. Mustafapasa requires a private transfer request.'},{q:'Do you provide airport meet and greet?',a:'Meeting details are confirmed on WhatsApp and the reservation passenger name can be used at the airport.'},{q:'Why are passport numbers requested?',a:'Passenger passport information is required for reservation and transfer operation by the operating company.'},{q:'Can I book hotel-to-airport shuttle?',a:'Yes. Choose Hotel → Airport or Round Trip.'},{q:'How do I pay?',a:'Cash to the driver. The listed prices are in EUR; USD or TRY cash payment can be arranged using the current exchange rate confirmed for the booking.'},{q:'Is the shared shuttle a direct private vehicle?',a:'No. Other passengers and hotel stops may be part of the same operation.'},{q:'Can I book a private transfer instead?',a:'Yes. Vito and Sprinter private options are available at the published airport-specific fixed prices.'}
    ], related:['cappadocia-airport-transfer','kayseri-airport-shuttle','nevsehir-airport-shuttle','private-airport-transfer-cappadocia','airport-transfer-prices']
  },
  {
    slug:'cappadocia-airport-transfer',title:'Cappadocia Airport Transfer | Kayseri & Nevsehir',description:'Cappadocia airport transfer from Kayseri ASR and Nevsehir NAV: €15 shuttle, private Vito/Sprinter, route times, hotel pickup and drop-off.',primaryKeyword:'cappadocia airport transfer',secondaryKeywords:['cappadocia transfers','cappadocia airport transfers','cappadocia airport transportation','airport transfer cappadocia'],eyebrow:'Transfer service hub',h1:'Cappadocia Airport Transfer',lead:'Compare airport shuttle and private transfer between Kayseri Airport, Nevsehir Airport and six central Cappadocia hotel areas.',sections:[
      {heading:'Start with the airport and the actual hotel town',paragraphs:['The phrase “Cappadocia airport transfer” can describe many different journeys. The actual route depends on whether you land at ASR or NAV and whether the hotel is in Goreme, Urgup, Uchisar, Avanos, Cavusin or Ortahisar, so the useful distance and timing are tied to the real airport and hotel town.']},
      {heading:'The €15 shuttle is the main value option',paragraphs:['Shared shuttle is €15 per person from either airport. It is pre-booked, confirmed on WhatsApp and may include other hotel stops. For direct transport, private Vito/Sprinter prices are listed clearly and calculated automatically in the form.']},
      {heading:'Airport meeting and hotel access',paragraphs:['Passenger name, passport number, operating flight code and full hotel name are required booking details. Cave hotels and old-village accommodation may use a safe nearby stop when the scheduled vehicle cannot reach the entrance.']},
      {heading:'Airport choice can change the road time',paragraphs:['NAV is closer by road to many central towns, while ASR may have a flight that fits your itinerary better. Use [[Nearest Airport to Cappadocia|nearest-airport-to-cappadocia]] and [[Kayseri or Nevsehir Airport|kayseri-or-nevsehir-airport-for-cappadocia]] before choosing solely by distance.']},
      {heading:'Arrival and hotel-to-airport pages are separate for a reason',paragraphs:['Arrivals need airport meeting and hotel drop-off guidance, while departures need pickup timing, flight-change advice and a safe airport buffer. Treating the two directions separately makes the practical instructions clearer for the traveler.']},
    ],faq:[{q:'Which airports serve Cappadocia airport transfers?',a:'Kayseri Airport (ASR) and Nevsehir Airport (NAV).'},{q:'How much is the shared airport transfer?',a:'€15 per person one way.'},{q:'Can I book private airport transfer?',a:'Yes. Kayseri: Vito €90, Sprinter €110. Nevsehir: Vito €80, Sprinter €90.'},{q:'Is round trip available?',a:'Yes. Round trip is exactly double the one-way price.'},{q:'Which hotel towns are supported?',a:'Goreme, Urgup, Uchisar, Avanos, Cavusin and Ortahisar for shared shuttle.'},{q:'Is hotel pickup included for departure?',a:'Yes, subject to booking confirmation and practical vehicle access.'},{q:'What passenger information is required?',a:'Passenger names, passport numbers, flight information, hotel and WhatsApp contact.'},{q:'How is payment made?',a:'Cash to the driver.'}],related:['cappadocia-shuttle-transfer','cappadocia-airport','kayseri-airport-transfer','nevsehir-airport-transfer','airport-transfer-prices']
  },
  {
    slug:'private-airport-transfer-cappadocia',title:'Cappadocia Private Airport Transfer | Vito & Sprinter',description:'Private Cappadocia airport transfer: Kayseri Vito €90 / Sprinter €110, Nevsehir Vito €80 / Sprinter €90. Up to 5 or 16 passengers, cash to driver.',primaryKeyword:'cappadocia private airport transfer',secondaryKeywords:['private transfer cappadocia','cappadocia vip transfer','mercedes vito cappadocia transfer','mercedes sprinter cappadocia transfer'],eyebrow:'Dedicated vehicle',h1:'Cappadocia Private Airport Transfer',lead:'Choose a dedicated Mercedes Vito for up to 5 passengers or Sprinter for up to 16, with airport-specific fixed one-way prices and round trip at exactly double.',sections:[
      {heading:'Private transfer pricing without a vague “from” price',paragraphs:['Kayseri Airport: **Vito €90**, **Sprinter €110** one way. Nevsehir Airport: **Vito €80**, **Sprinter €90**. These are per vehicle, not per passenger. Round trip is €180/€220 from Kayseri and €160/€180 from Nevsehir.']},
      {heading:'Mercedes Vito: up to 5 passengers',paragraphs:['The Vito option suits couples, families and small groups that want a dedicated vehicle and no unrelated hotel stops. It also gives more control over the hotel departure time than a shared collection. For up to 5 passengers, it is the smaller private option for airport pickup, cave-hotel access and direct hotel-to-airport departures.']},
      {heading:'Mercedes Sprinter: up to 16 passengers',paragraphs:['Sprinter is the larger private option for groups up to 16 passengers. The price changes by airport, which is why the booking form must update immediately when ASR or NAV is selected: €110 from Kayseri and €90 from Nevsehir, one way.']},
      {heading:'When private makes more sense than shuttle',paragraphs:['Private transfer is useful for larger groups, early departures, late arrivals, families with more luggage, travelers who want a direct hotel route, or accommodation outside the shared-shuttle area. For one or two flexible travelers, the €15 shuttle is often better value.']},
      {heading:'Payment and passenger information',paragraphs:['Payment is cash to the driver. The booking request still collects the operating flight code, accommodation, passenger names, passport numbers and WhatsApp contact because those details are required for the transfer operation.']},
    ],faq:[{q:'How much is Kayseri private Vito?',a:'€90 one way per vehicle, up to 5 passengers.'},{q:'How much is Nevsehir private Vito?',a:'€80 one way per vehicle, up to 5 passengers.'},{q:'How much is Kayseri Sprinter?',a:'€110 one way per vehicle, up to 16 passengers.'},{q:'How much is Nevsehir Sprinter?',a:'€90 one way per vehicle, up to 16 passengers.'},{q:'How much is round trip?',a:'Exactly double the one-way price.'},{q:'Is private transfer door to door?',a:'The vehicle is dedicated to your booking, but historic hotel access still depends on whether the street can safely accommodate the vehicle.'},{q:'Do you need passport numbers for private transfer?',a:'Yes, passenger passport details are required for reservation and transfer operation.'},{q:'How do I pay for a private transfer?',a:'Cash to the driver.'}],related:['cappadocia-shuttle-transfer','airport-transfer-prices','kayseri-airport-transfer','nevsehir-airport-transfer']
  },
  {
    slug:'airport-transfer-prices',title:'Cappadocia Airport Transfer Prices | Shuttle, Vito & Sprinter',description:'Cappadocia transfer prices: shuttle €15/person/way. Kayseri Vito €90, Sprinter €110. Nevsehir Vito €80, Sprinter €90. Round trip double.',primaryKeyword:'cappadocia airport transfer prices',secondaryKeywords:['cappadocia shuttle price','kayseri airport transfer price','nevsehir airport transfer price'],eyebrow:'Clear price matrix',h1:'Cappadocia Airport Transfer Prices',lead:'Shuttle is €15 per person per way from both airports. Private prices are per vehicle and change between Kayseri and Nevsehir.',sections:[
      {heading:'Shared shuttle price',paragraphs:['Kayseri Airport (ASR) → supported Cappadocia hotels: **€15 per person one way**. Nevsehir Airport (NAV) → supported hotels: **€15 per person one way**. Hotel-to-airport is the same price. Round trip is €30 per person.']},
      {heading:'Kayseri Airport private prices',paragraphs:['Mercedes Vito, max 5 passengers: **€90 one way / €180 round trip**. Mercedes Sprinter, max 16 passengers: **€110 one way / €220 round trip**.']},
      {heading:'Nevsehir Airport private prices',paragraphs:['Mercedes Vito, max 5 passengers: **€80 one way / €160 round trip**. Mercedes Sprinter, max 16 passengers: **€90 one way / €180 round trip**.']},
      {heading:'What “per person” and “per vehicle” mean',paragraphs:['The shuttle total increases with passenger count because it is priced per person. Private transfer does not multiply by passenger count as long as the group fits the selected vehicle capacity. This is why Sprinter can become attractive for a larger group even though its single-vehicle price is higher than the shuttle fare for one passenger.']},
      {heading:'Payment currency and confirmation',paragraphs:['Prices are published in EUR and payment is cash to the driver. USD or TRY cash payment can be arranged using the current exchange rate confirmed for the booking. The booking is considered confirmed after the operational details are confirmed on WhatsApp.']},
      {heading:'What is included in the booking request',paragraphs:['Enter airport, direction, date, flight code, hotel, passenger count, WhatsApp contact, passenger names and passport numbers. The form shows an estimated total before opening the prepared WhatsApp message.']},
    ],faq:[
      {q:'How much is Cappadocia airport shuttle?',a:'€15 per person each way from both Kayseri and Nevsehir airports.'},{q:'How much is shuttle round trip?',a:'€30 per person.'},{q:'How much is Kayseri Airport Vito?',a:'€90 one way; €180 round trip.'},{q:'How much is Kayseri Airport Sprinter?',a:'€110 one way; €220 round trip.'},{q:'How much is Nevsehir Airport Vito?',a:'€80 one way; €160 round trip.'},{q:'How much is Nevsehir Airport Sprinter?',a:'€90 one way; €180 round trip.'},{q:'Are private prices per person?',a:'No, they are per vehicle within the stated capacity.'},{q:'Does the price change between Goreme and Urgup?',a:'The published airport-based private price is the same for the supported central service towns listed on this site.'},{q:'Can I pay USD or TRY?',a:'Cash payment can be arranged in USD or TRY using the current exchange rate confirmed for the booking.'},{q:'Are passport numbers required even though payment is cash?',a:'Yes. Passport information is required for reservation and transfer operation, independently of the payment method.'},{q:'Does round trip get a discount?',a:'No separate round-trip discount is stated; round trip is exactly double the one-way price.'},{q:'When is the booking confirmed?',a:'After the reservation details are confirmed on WhatsApp.'}
    ],related:['cappadocia-shuttle-transfer','private-airport-transfer-cappadocia','kayseri-airport-transfer','nevsehir-airport-transfer']
  },
  {
    slug:'hotel-to-airport-transfer',title:'Cappadocia Hotel to Airport Transfer | ASR & NAV Shuttle',description:'Cappadocia hotel to airport shuttle and private transfer from Goreme, Urgup, Uchisar, Avanos, Cavusin and Ortahisar to Kayseri ASR or Nevsehir NAV.',primaryKeyword:'cappadocia hotel to airport transfer',secondaryKeywords:['hotel to airport cappadocia','goreme hotel airport shuttle','cappadocia airport pickup'],eyebrow:'Departure service',h1:'Cappadocia Hotel to Airport Transfer',lead:'Book hotel pickup to Kayseri Airport or Nevsehir Airport by €15 shared shuttle or a dedicated private Vito/Sprinter.',sections:[
      {heading:'Departure transfer is not simply the arrival route backwards',paragraphs:['An airport arrival begins with baggage claim and meeting instructions. A hotel departure begins with the flight time, the hotel’s access and a confirmed pickup window. Shared vehicles may collect guests from several hotels, so the operation team confirms the time rather than asking every passenger to calculate it independently.']},
      {heading:'What details to send',paragraphs:['Provide the full accommodation name, departure flight code, transfer date, passenger count, passenger names, passport numbers and WhatsApp number. If the hotel is on a narrow cave-hotel lane, follow the confirmed practical meeting point.']},
      {heading:'If the airline changes your flight',paragraphs:['Send the updated flight information as soon as possible. Do not assume a previous shuttle time remains correct or changes automatically. The shared schedule may involve other passengers whose flights did not change.']},
      {heading:'Do not over-plan the final hours',paragraphs:['A short breakfast, cafe stop or nearby viewpoint is easier to control than a valley hike. The destination-specific return pages include ideas for Goreme, Urgup, Uchisar, Avanos, Ortahisar and Cavusin.']},
    ],faq:[{q:'How much is hotel-to-airport shuttle?',a:'€15 per person one way.'},{q:'Can I book both arrival and departure together?',a:'Yes. Select Round Trip.'},{q:'How is pickup time confirmed?',a:'By WhatsApp according to the departure flight and operating plan.'},{q:'What if the hotel has a narrow entrance?',a:'A nearby safe meeting point may be confirmed if the vehicle cannot reach the door.'},{q:'Can I book private hotel pickup?',a:'Yes. Airport-specific Vito and Sprinter prices apply.'},{q:'What if the flight is delayed?',a:'Send the new flight details as early as possible.'},{q:'Are passports needed for hotel pickup?',a:'Yes, passport numbers are part of the operating company’s reservation requirements.'}],related:['cappadocia-to-kayseri-airport-shuttle','cappadocia-to-nevsehir-airport-shuttle','airport-transfer-prices','cappadocia-shuttle-transfer']
  }
];

const guidePages: SeoPage[] = [
  {slug:'cappadocia-airport',title:'Cappadocia Airport Guide | NAV, ASR & Hotel Shuttle',description:'Cappadocia Airport guide: understand Nevsehir Kapadokya Airport (NAV), Kayseri Airport (ASR), Goreme transfers, €15 shuttle and private options.',primaryKeyword:'cappadocia airport',secondaryKeywords:['cappadocia turkey airport','cappadocia airport turkey','airport in cappadocia','kapadokya airport'],eyebrow:'Airport gateway guide',h1:'Cappadocia Airport: NAV, ASR & Hotel Transfers',lead:'Searching for “Cappadocia Airport” can point to Nevsehir Kapadokya Airport (NAV), the airport carrying the Kapadokya name, while Kayseri Airport (ASR) is also a major gateway for Cappadocia hotels. This guide separates the airport names, codes and transfer choices before you book.',sections:[{heading:'Which airport is Cappadocia Airport?',paragraphs:['Nevsehir Kapadokya Airport uses the IATA code **NAV** and is the airport whose official name carries Kapadokya/Cappadocia. In travel planning, however, “Cappadocia airport” is also used loosely for the two practical gateways serving the region: NAV and Kayseri Airport **ASR**. That is why a hotel transfer booking should use the airport code on the flight ticket rather than only the regional word Cappadocia.','If you are still choosing a flight, compare [[Nearest Airport to Cappadocia|nearest-airport-to-cappadocia]] and [[Kayseri or Nevsehir Airport for Cappadocia|kayseri-or-nevsehir-airport-for-cappadocia]]. Those pages own the closer-airport and airport-comparison questions, while this page is the broad airport gateway guide.']},{heading:'Nevsehir Kapadokya Airport (NAV)',paragraphs:['NAV is generally the shorter road transfer to central Cappadocia. Published route estimates include Goreme at about **40 km / 35–45 minutes**, Uchisar 35 km / 30–40 minutes, Avanos 38 km / 35–50 minutes, Cavusin 42 km / 40–55 minutes, Ortahisar 45 km / 40–50 minutes and Urgup 50 km / 45–60 minutes before possible shared-shuttle stops.','The shared [[Nevsehir Airport shuttle|nevsehir-airport-shuttle]] is **€15 per person each way**. Private one-way pricing is Vito €80 for up to 5 passengers or Sprinter €90 for up to 16.']},{heading:'Kayseri Airport (ASR)',paragraphs:['ASR is farther by road but is widely used for Cappadocia because flight timing and availability can make it the better overall journey. Goreme is about **75 km / 60–75 minutes**, with the other supported towns generally in the 70–80 km range before shared stops.','The [[Kayseri Airport shuttle|kayseri-airport-shuttle]] is also **€15 per person each way**. Private one-way pricing is Vito €90 or Sprinter €110. The equal shuttle fare means the flight schedule can be compared without a shared-fare penalty for choosing Kayseri.']},{heading:'Cappadocia Airport to Goreme: first identify NAV or ASR',paragraphs:['Searches for “Cappadocia Airport to Goreme” are ambiguous because Goreme can be reached from both airports. For the shorter NAV route use [[Nevsehir Airport to Goreme transfer|nevsehir-airport-to-goreme-transfer]]. For ASR use [[Kayseri Airport to Goreme transfer|kayseri-airport-to-goreme-transfer]]. The [[Goreme Airport Transfer|goreme-airport-transfer]] hub compares both directions and adds cave-hotel access, local accommodation and return-pickup information.']},{heading:'Airport to hotel: shuttle or private vehicle',paragraphs:['The €15 shuttle is the main value service for Goreme, Urgup, Uchisar, Avanos, Ortahisar and Cavusin. It is shared, so other passengers and hotel stops can be part of the run. Travelers who want a dedicated vehicle can choose a private Vito or Sprinter; private prices are per vehicle rather than per person.','The booking request collects the airport, journey direction, flight details, hotel, WhatsApp contact and passenger information including passport numbers required by the operating company. Payment is cash to the driver after the booking is confirmed.']},{heading:'Returning from Cappadocia to the airport',paragraphs:['For departure, the useful question changes from “which airport is Cappadocia Airport?” to “which airport is on my outbound ticket?” Use [[Cappadocia to Nevsehir Airport shuttle|cappadocia-to-nevsehir-airport-shuttle]] for NAV or [[Cappadocia to Kayseri Airport shuttle|cappadocia-to-kayseri-airport-shuttle]] for ASR. Pickup timing is confirmed from the actual flight and shared collection plan rather than a universal clock rule.']}],faq:[{q:'Is there an airport actually called Cappadocia Airport?',a:'Nevsehir Kapadokya Airport (NAV) carries the Kapadokya/Cappadocia name. Kayseri Airport (ASR) is also a major airport used for Cappadocia trips.'},{q:'What is the Cappadocia airport code?',a:'There is no single code for every Cappadocia traveler. NAV is Nevsehir Kapadokya Airport and ASR is Kayseri Airport.'},{q:'Which Cappadocia airport is closest to Goreme?',a:'Nevsehir Kapadokya Airport (NAV) is closer by road to Goreme.'},{q:'How much is the airport shuttle from NAV or ASR?',a:'€15 per person each way from either airport to supported central Cappadocia hotel areas.'},{q:'What does NAV Airport mean?',a:'NAV is the IATA code for Nevsehir Kapadokya Airport.'},{q:'Can I use Kayseri Airport for Goreme?',a:'Yes. ASR is farther by road than NAV but is a common Cappadocia gateway.'},{q:'Does Goreme have its own airport?',a:'No. Goreme uses NAV or ASR for commercial passenger flights.'},{q:'Can I arrive through NAV and depart through ASR?',a:'Yes, but it should be confirmed as two airport-specific legs because the road plan and private price differ.'}],related:['nearest-airport-to-cappadocia','cappadocia-airport-code','kayseri-or-nevsehir-airport-for-cappadocia','nevsehir-airport-transfer','kayseri-airport-transfer','cappadocia-airport-transfer']},
  {slug:'nearest-airport-to-cappadocia',title:'Nearest Airport to Cappadocia | NAV vs ASR',description:'Which airport is closest to Cappadocia? Compare Nevsehir NAV and Kayseri ASR distances, transfer times and shuttle prices to Goreme and other towns.',primaryKeyword:'nearest airport to cappadocia',secondaryKeywords:['closest airport to cappadocia','nearest airport to cappadocia turkey','airport near to cappadocia'],eyebrow:'Airport planning guide',h1:'Nearest Airport to Cappadocia',lead:'Nevsehir Airport is generally closer by road to central Cappadocia, but Kayseri Airport can still be the better trip when the flight schedule or fare is stronger.',sections:[{heading:'Cappadocia has two practical airport choices',paragraphs:['Nevsehir Kapadokya Airport (NAV) and Kayseri Erkilet Airport (ASR) are the main airports used by travelers staying in central Cappadocia. NAV is closer to Goreme, Uchisar and many central areas, while ASR has a longer road transfer but may offer a flight that better fits the itinerary.']},{heading:'Nearest does not always mean best',paragraphs:['A shorter transfer is useful, but a poor flight time or expensive connection can cancel the advantage. Compare the total journey from your origin, not just the final road distance. The shuttle price is €15 per person from either airport, so there is no shuttle-fare penalty for choosing ASR.']},{heading:'Goreme example',paragraphs:['NAV to Goreme is approximately 40 km / 35–45 minutes by road. ASR to Goreme is approximately 75 km / 60–75 minutes before shared stops. Use the dedicated route pages for hotel access and arrival guidance.']},{heading:'Other towns can change the comparison',paragraphs:['Uchisar is especially close to NAV, while Kayseri can feel more natural for eastern approaches such as Urgup. Always compare the town where you are actually sleeping rather than treating all of Cappadocia as Goreme.']}],faq:[{q:'What is the nearest airport to Cappadocia?',a:'Nevsehir Kapadokya Airport (NAV) is generally the closest main airport to central Cappadocia.'},{q:'Is Kayseri Airport far from Cappadocia?',a:'It is farther by road than NAV but remains a common and practical airport for the region.'},{q:'Which airport is closer to Goreme?',a:'Nevsehir Airport.'},{q:'Is the shuttle cheaper from NAV?',a:'No. Shared shuttle is €15 per person from either airport.'},{q:'Should I choose flight time or road distance?',a:'Consider the full itinerary. A better flight can make Kayseri more practical even with a longer road transfer.'},{q:'What are the airport codes?',a:'ASR for Kayseri and NAV for Nevsehir.'}],related:['cappadocia-airport','kayseri-or-nevsehir-airport-for-cappadocia','cappadocia-airport-code','kayseri-airport-transfer','nevsehir-airport-transfer']},
  {slug:'kayseri-or-nevsehir-airport-for-cappadocia',title:'Kayseri or Nevsehir Airport for Cappadocia?',description:'Compare Kayseri ASR and Nevsehir NAV for Cappadocia: road times, shuttle and private prices, Goreme distances and which airport fits different trips.',primaryKeyword:'kayseri or nevsehir airport for cappadocia',secondaryKeywords:['kayseri vs nevsehir airport','which airport for cappadocia'],eyebrow:'ASR vs NAV',h1:'Kayseri or Nevsehir Airport for Cappadocia?',lead:'NAV usually wins on road distance; ASR can win on flight availability. The best airport is the one that gives the best whole journey to your actual hotel town.',sections:[{heading:'Road-distance advantage: Nevsehir',paragraphs:['NAV is closer to most central Cappadocia bases. Goreme is roughly 40 km, Uchisar 35 km and Avanos about 38 km. This can reduce time in the vehicle after landing.']},{heading:'Flight-choice advantage can favor Kayseri',paragraphs:['ASR is farther from the central hotel towns, but a better-timed or better-priced flight can be worth the extra road time. Do not reject Kayseri before checking the flight options from Istanbul or your connecting city.']},{heading:'Shuttle price is equal',paragraphs:['Shared shuttle is €15 per person from either airport, so the airport comparison is not about a different shared fare. Private transfer does differ: Kayseri Vito/Sprinter €90/€110; Nevsehir €80/€90.']},{heading:'Compare the hotel town',paragraphs:['Uchisar, Goreme, Urgup, Avanos, Ortahisar and Cavusin all have different distances. Open the route page for the actual accommodation before deciding.']}],faq:[{q:'Is NAV or ASR closer to Goreme?',a:'Nevsehir Airport (NAV).'},{q:'Which airport has cheaper shuttle?',a:'Neither; both are €15 per person.'},{q:'Which airport has cheaper private transfer?',a:'Nevsehir: Vito €80 / Sprinter €90 vs Kayseri €90 / €110.'},{q:'Is Kayseri still a good airport for Cappadocia?',a:'Yes, especially when the flight schedule is more convenient.'},{q:'Can I arrive at one airport and depart from the other?',a:'The booking form is designed around one airport per request. If your round trip uses different airports, send the details on WhatsApp so the operation can be confirmed correctly.'}],related:['nearest-airport-to-cappadocia','kayseri-airport-transfer','nevsehir-airport-transfer','airport-transfer-prices']},
  {slug:'cappadocia-airport-code',title:'Cappadocia Airport Code | NAV and ASR Explained',description:'Cappadocia airport codes explained: NAV is Nevsehir Kapadokya Airport and ASR is Kayseri Erkilet Airport. Compare transfers to Goreme and central hotels.',primaryKeyword:'cappadocia airport code',secondaryKeywords:['goreme airport code','cappadocia turkey airport code','nav airport','nevsehir kapadokya airport','asr airport cappadocia'],eyebrow:'Airport codes',h1:'Cappadocia Airport Code: NAV & ASR',lead:'There is no single airport code called “Cappadocia” for every visitor. Most travelers use NAV (Nevsehir) or ASR (Kayseri).',sections:[{heading:'NAV: Nevsehir Kapadokya Airport',paragraphs:['NAV is the closer main airport to many central Cappadocia hotel areas. The shuttle to supported hotels is €15 per person.']},{heading:'ASR: Kayseri Erkilet Airport',paragraphs:['ASR is farther by road but commonly used because the flight schedule can be convenient. The shared shuttle price is also €15 per person.']},{heading:'Which code should go in the transfer booking?',paragraphs:['Select the airport that appears on your airline ticket and enter the operating flight code. Do not choose an airport based only on the word Cappadocia in a hotel description.']}],faq:[{q:'What is NAV?',a:'Nevsehir Kapadokya Airport.'},{q:'What is ASR?',a:'Kayseri Erkilet Airport.'},{q:'What is Goreme airport code?',a:'Goreme has no commercial airport of its own; travelers usually use NAV or ASR.'},{q:'Which airport is closer?',a:'NAV is generally closer to central Cappadocia.'}],related:['cappadocia-airport','nearest-airport-to-cappadocia','kayseri-or-nevsehir-airport-for-cappadocia','kayseri-airport-transfer','nevsehir-airport-transfer']},
  {slug:'cappadocia-shared-shuttle-vs-private-transfer',title:'Cappadocia Shuttle vs Private Transfer | Price & Timing',description:'Compare Cappadocia shared shuttle vs private transfer: €15/person shuttle, Vito/Sprinter prices, hotel stops, timing, group size and airport coverage.',primaryKeyword:'cappadocia shuttle vs private transfer',secondaryKeywords:['shared shuttle cappadocia','private transfer cappadocia'],eyebrow:'Service comparison',h1:'Cappadocia Shuttle vs Private Transfer',lead:'Shared shuttle wins on low per-person price; private transfer gives a dedicated vehicle and more direct hotel timing.',sections:[{heading:'Shared shuttle: best for value',paragraphs:['At €15 per person each way, the shuttle is usually the lowest-cost pre-booked airport-to-hotel choice for solo travelers and couples. It may carry other passengers and make several hotel stops.']},{heading:'Private transfer: best for control',paragraphs:['The Vito or Sprinter is dedicated to your booking. That is useful for groups, families, early flights, late arrivals and travelers who prefer no unrelated hotel drops.']},{heading:'Price comparison',paragraphs:['Kayseri private: Vito €90 / Sprinter €110. Nevsehir private: Vito €80 / Sprinter €90. Shared shuttle: €15 per person from either airport. Round trip doubles all one-way totals.']},{heading:'Coverage and hotel access',paragraphs:['Shared service covers Goreme, Urgup, Uchisar, Avanos, Cavusin and Ortahisar. Mustafapasa requires private transfer. Historic hotel lanes can still require a nearby safe stop even with a private vehicle if the road is unsuitable.']},{heading:'Passenger and passport details',paragraphs:['Both service types use reservation passenger information. The booking form collects names and passport numbers because the operating company requires them for transfer operation.']}],faq:[{q:'Is shared shuttle the same as Cappadocia shuttle transfer?',a:'Yes. Shared describes how the €15 service operates.'},{q:'Which is faster?',a:'Private transfer is normally more direct because it has no unrelated hotel stops.'},{q:'Which is cheaper for one person?',a:'Shared shuttle at €15.'},{q:'Which can be better for a large group?',a:'Private Sprinter can be attractive because the price is per vehicle for up to 16 passengers.'},{q:'Does private guarantee every cave-hotel doorway?',a:'No. Vehicle access still depends on the actual street.'},{q:'Can I pay cash?',a:'Yes, cash to the driver.'},{q:'Is Mustafapasa covered by shuttle?',a:'No, request private transfer.'}],related:['cappadocia-shuttle-transfer','private-airport-transfer-cappadocia','airport-transfer-prices']},
  {slug:'cappadocia-airport-transfer-travel-times',title:'Cappadocia Airport Transfer Times & Distances',description:'Kayseri and Nevsehir Airport distances and typical road times to Goreme, Urgup, Uchisar, Avanos, Ortahisar and Cavusin hotels.',primaryKeyword:'cappadocia airport transfer time',secondaryKeywords:['cappadocia airport distance','kayseri goreme distance','nevsehir goreme distance'],eyebrow:'Distance guide',h1:'Cappadocia Airport Transfer Times & Distances',lead:'Use route estimates for planning, but allow for traffic, weather, baggage, hotel access and shared-shuttle passenger stops.',sections:[{heading:'Kayseri Airport road estimates',paragraphs:['Goreme 75 km / 60–75 min; Urgup 70 km / 60–75 min; Uchisar 80 km / 70–85 min; Avanos 70 km / 60–75 min; Ortahisar 75 km / 60–75 min; Cavusin 75 km / 65–80 min.']},{heading:'Nevsehir Airport road estimates',paragraphs:['Goreme 40 km / 35–45 min; Urgup 50 km / 45–60 min; Uchisar 35 km / 30–40 min; Avanos 38 km / 35–50 min; Ortahisar 45 km / 40–50 min; Cavusin 42 km / 40–55 min.']},{heading:'Why shuttle time is not a promise',paragraphs:['A shared operation can include baggage coordination, compatible flight arrivals, several hotel stops and local access constraints. Published times describe typical road travel rather than a guaranteed door-to-door stopwatch.']}],faq:[{q:'How long is Kayseri Airport to Goreme?',a:'Approximately 60–75 minutes by road before extra shared stops.'},{q:'How long is Nevsehir Airport to Goreme?',a:'Approximately 35–45 minutes by road.'},{q:'Which route is shortest?',a:'NAV to Uchisar is among the shortest listed routes at approximately 35 km / 30–40 minutes.'},{q:'Can weather change these times?',a:'Yes, as can traffic and hotel access.'}],related:['kayseri-airport-transfer','nevsehir-airport-transfer','nearest-airport-to-cappadocia']},
  {slug:'cappadocia-cave-hotel-airport-transfer',title:'Cappadocia Cave Hotel Airport Shuttle & Transfer',description:'Airport shuttle and private transfer for Cappadocia cave hotels, cave suites and boutique accommodation from Kayseri ASR and Nevsehir NAV.',primaryKeyword:'cappadocia cave hotel airport transfer',secondaryKeywords:['cave hotel airport shuttle cappadocia','goreme cave hotel transfer'],eyebrow:'Accommodation access guide',h1:'Cappadocia Cave Hotel Airport Transfer',lead:'Cave hotels are a highlight of Cappadocia, but historic lanes and hillside entrances make exact accommodation details important for airport pickup and drop-off.',sections:[{heading:'Why the complete hotel name matters',paragraphs:['Cappadocia has many properties using words such as cave, suite, house, stone and boutique. Enter the full reservation name and town. A map pin can help, but should not replace the correct accommodation name.']},{heading:'When a vehicle cannot stop at the door',paragraphs:['Some old lanes are too narrow, steep or unsuitable for a shuttle or Sprinter to wait safely. In that case a nearby practical stop can be confirmed on WhatsApp. This is a normal access issue, not a reason to assume the town is outside the service area.']},{heading:'Goreme has the densest cave-hotel pattern',paragraphs:['Goreme’s hillside accommodation includes properties such as Kelebek Cave Hotel, Sultan Cave Suites, Aydinli Cave Hotel, Divan Cave House, Artemis Cave Suites, Mithra Cave Hotel, Koza Cave Hotel and many others. The [[Goreme Airport Transfer|goreme-airport-transfer]] page has a larger identification list and local access explanation.']},{heading:'Uchisar, Urgup, Ortahisar and Cavusin are different',paragraphs:['Uchisar has steep castle-side terraces; Urgup mixes town roads with historic quarters; Ortahisar uses smaller village lanes; Cavusin accommodation is more dispersed. Do not assume one cave-hotel access rule applies everywhere.']},{heading:'Departure morning is more sensitive than arrival',paragraphs:['On arrival, a short walk from a safe stop is usually manageable. On departure, be at the confirmed point with luggage ready because a shared shuttle cannot wait indefinitely while other passengers and flights are coordinated.']}],faq:[{q:'Can the shuttle serve cave hotels?',a:'Yes, in supported towns, subject to safe vehicle access or a nearby confirmed point.'},{q:'Should I send a hotel map pin?',a:'It can help, but the complete hotel name is essential.'},{q:'Can a Sprinter reach every cave-hotel lane?',a:'No. Vehicle size and street conditions vary.'},{q:'Is Goreme the only cave-hotel area?',a:'No. Uchisar, Urgup, Ortahisar and Cavusin also have cave and stone accommodation.'},{q:'Does a nearby meeting point change the price?',a:'No separate access surcharge is stated for supported service areas.'},{q:'Can I book hotel pickup for departure?',a:'Yes, with the pickup point confirmed for the property.'},{q:'Are passport details required?',a:'Yes, as part of the reservation operation.'}],related:['goreme-airport-transfer','uchisar-airport-transfer','urgup-airport-transfer','cappadocia-shuttle-transfer']},
  {slug:'istanbul-to-cappadocia',title:'Istanbul to Cappadocia Flights & Airport Shuttle Guide',description:'Istanbul to Cappadocia: fly IST/SAW to Kayseri ASR or Nevsehir NAV, then use a €15 airport shuttle to central Cappadocia hotels.',primaryKeyword:'istanbul to cappadocia',secondaryKeywords:['istanbul to cappadocia flight','istanbul cappadocia airport','istanbul to cappadocia distance','how to go from istanbul to cappadocia turkey'],eyebrow:'Flight + transfer guide',h1:'Istanbul to Cappadocia: Flight & Airport Transfer Guide',lead:'For most visitors, the practical route is an Istanbul flight to Kayseri (ASR) or Nevsehir (NAV), followed by a pre-booked Cappadocia airport shuttle to the hotel.',sections:[{heading:'Fly rather than treating it as an airport road transfer',paragraphs:['This service does not operate a direct shared road shuttle from Istanbul to Cappadocia. Travelers normally fly from Istanbul Airport (IST) or Sabiha Gokcen (SAW) to ASR or NAV, then continue by airport shuttle.']},{heading:'Choose ASR or NAV from the full itinerary',paragraphs:['NAV is closer by road to many Cappadocia hotels; ASR can have a flight time or fare that makes the longer road transfer worthwhile. The shared shuttle price is €15 from either airport, so compare the flight first.']},{heading:'After landing in Cappadocia',paragraphs:['Collect baggage, follow the WhatsApp-confirmed meeting instructions and use the passenger reservation name for the airport meeting. The booking needs the correct operating flight code, hotel, names and passport numbers.']},{heading:'Hotel drop-off areas',paragraphs:['Shared service covers Goreme, Urgup, Uchisar, Avanos, Cavusin and Ortahisar. Mustafapasa requires a private transfer request.']}],faq:[{q:'Is there a direct shuttle from Istanbul to Cappadocia?',a:'Not as this shared airport service. Fly to ASR or NAV and use the airport shuttle from there.'},{q:'Which Istanbul airports fly to Cappadocia?',a:'Travelers commonly use IST or SAW for flights to Kayseri or Nevsehir; check the current airline schedule for your dates.'},{q:'Which Cappadocia airport should I choose?',a:'NAV is closer by road; ASR can still be better if the flight schedule is more convenient.'},{q:'How much is the shuttle after landing?',a:'€15 per person from either ASR or NAV.'}],related:['cappadocia-airport','cappadocia-to-istanbul','nearest-airport-to-cappadocia','kayseri-or-nevsehir-airport-for-cappadocia','kayseri-airport-shuttle','nevsehir-airport-shuttle']},
  {slug:'cappadocia-to-istanbul',title:'Cappadocia to Istanbul | Airport Shuttle & Flight Guide',description:'Cappadocia to Istanbul travel guide: hotel shuttle to NAV or ASR, flight planning, Goreme road distance context and airport pickup timing.',primaryKeyword:'cappadocia to istanbul',secondaryKeywords:['cappadocia turkey to istanbul','how to get from cappadocia to istanbul','cappadocia to istanbul distance','goreme to istanbul'],eyebrow:'Cappadocia → Istanbul',h1:'Cappadocia to Istanbul: Hotel Shuttle & Flight Guide',lead:'For most short-stay travelers, the practical return is a hotel pickup to Nevsehir NAV or Kayseri ASR followed by a flight to Istanbul. This page connects the long-distance travel question with the airport transfer you actually need in Cappadocia.',sections:[{heading:'The airport transfer is the first leg, not the whole Istanbul journey',paragraphs:['This service does **not** operate a shared road shuttle from Cappadocia all the way to Istanbul. Instead, book the Cappadocia hotel-to-airport leg, then use the airline ticket from NAV or ASR to Istanbul. That keeps a regional airport service separate from a much longer intercity journey.']},{heading:'Choose NAV or ASR from the outbound flight',paragraphs:['NAV is generally closer to Goreme, Uchisar and other central towns. ASR is farther but may have a flight time or fare that works better. The shared hotel-to-airport shuttle is **€15 per person** to either airport, while private prices are NAV €80/€90 and ASR €90/€110 for Vito/Sprinter.','If the departure airport is not chosen yet, compare [[Nearest Airport to Cappadocia|nearest-airport-to-cappadocia]] and [[Kayseri or Nevsehir Airport|kayseri-or-nevsehir-airport-for-cappadocia]] before booking the flight.']},{heading:'Cappadocia to Istanbul distance: road distance is not shuttle distance',paragraphs:['From Goreme to central Istanbul the road journey is roughly **725 km**, so it is a very different trip from the 35–80 km airport transfers on this site. The exact figure changes with the Istanbul endpoint and the Cappadocia town. For most visitors with limited time, flying from NAV or ASR is the practical way to separate the long intercity journey from the short hotel-to-airport transfer.']},{heading:'Hotel pickup before the Istanbul flight',paragraphs:['Enter the outbound flight code, full hotel name, passenger details and WhatsApp contact. The pickup time is confirmed from the actual flight and shared collection order. Do not calculate the departure only from the direct road time because a shared run can collect other hotels before leaving Cappadocia.','Use [[Cappadocia to Nevsehir Airport shuttle|cappadocia-to-nevsehir-airport-shuttle]] or [[Cappadocia to Kayseri Airport shuttle|cappadocia-to-kayseri-airport-shuttle]], then continue to the town-specific return page for Goreme, Urgup, Uchisar, Avanos, Ortahisar or Cavusin.']},{heading:'If you have spare time before a late flight',paragraphs:['Keep the final activity near the hotel and luggage. A meal, cafe, short viewpoint or town walk is easier to end on time than a valley hike or distant tour. Each destination page has local departure-day suggestions because Goreme, Urgup, Uchisar, Avanos, Ortahisar and Cavusin have different road access and pickup patterns.']},{heading:'Flying back to IST or SAW',paragraphs:['Istanbul Airport (IST) and Sabiha Gokcen (SAW) are different airports. Follow the airport shown on the airline booking after the Cappadocia flight is selected. The Cappadocia shuttle booking itself is based on the airport you depart from in Cappadocia—NAV or ASR—not on whether the Istanbul arrival is IST or SAW.']}],faq:[{q:'Is there a direct Cappadocia to Istanbul shuttle?',a:'Not as this airport-shuttle service. The normal flow is hotel transfer to NAV or ASR and then a flight to Istanbul.'},{q:'How far is Cappadocia from Istanbul by road?',a:'Goreme to central Istanbul is roughly 725 km by road; the exact distance changes with the start and end point.'},{q:'Which airport should I use to fly from Cappadocia to Istanbul?',a:'Use the NAV or ASR flight that best fits your schedule; NAV is usually closer by road to central Cappadocia.'},{q:'How much is the hotel shuttle to the airport?',a:'€15 per person each way to either NAV or ASR from supported hotel towns.'},{q:'Can I book a private hotel transfer for the Istanbul flight?',a:'Yes. Vito and Sprinter are available with airport-specific fixed prices.'},{q:'Can I leave from a different airport than I arrived at?',a:'Yes, but each airport leg must be confirmed correctly because the route and private price differ.'},{q:'Should I use my Istanbul airport code in the Cappadocia shuttle form?',a:'No. Select the Cappadocia departure airport—NAV or ASR—and enter the operating flight code leaving that airport.'}],related:['istanbul-to-cappadocia','cappadocia-to-nevsehir-airport-shuttle','cappadocia-to-kayseri-airport-shuttle','hotel-to-airport-transfer','nearest-airport-to-cappadocia','kayseri-or-nevsehir-airport-for-cappadocia']}
];

const airportPages: SeoPage[] = [airportHub('kayseri'),airportHub('nevsehir'),airportShuttle('kayseri'),airportShuttle('nevsehir'),toCappadocia('kayseri'),toCappadocia('nevsehir'),reverseAirportHub('kayseri'),reverseAirportHub('nevsehir')];
const destinationPages = townKeys.map(destinationHub);
const arrivalPages = (['kayseri','nevsehir'] as const).flatMap(a=>townKeys.map(t=>arrivalPage(a,t)));
const returnPages = (['kayseri','nevsehir'] as const).flatMap(a=>townKeys.map(t=>returnPage(a,t)));


const destinationEnrichment: Record<string, ContentSection[]> = {
  'goreme-airport-transfer': [
    { heading: 'What “Cappadocia Airport to Goreme” means', paragraphs: ['Travelers often search **Cappadocia Airport to Goreme** without naming an airport. If the ticket says NAV, use [[Nevsehir Airport to Goreme|nevsehir-airport-to-goreme-transfer]]; if it says ASR, use [[Kayseri Airport to Goreme|kayseri-airport-to-goreme-transfer]]. NAV is the shorter road route, while ASR can still be the better flight choice. The broad [[Cappadocia Airport guide|cappadocia-airport]] explains why both airports appear in Cappadocia travel planning.'] },
    { heading: 'Why Goreme works differently for early mornings', paragraphs: ['Goreme is busy before sunrise because balloon guests, tour vehicles and hotel staff can all be moving at the same time. That activity is part of the town’s appeal, but it also means an early airport pickup should not be planned as if the streets were empty. Follow the confirmed meeting point and have luggage ready before the shuttle window, especially when the hotel sits above the center on a narrow lane.'] },
    { heading: 'A practical plan between checkout and a late flight', paragraphs: ['If checkout is much earlier than the airport pickup, ask the hotel to hold luggage and keep the final hours close to central Goreme. A meal, terrace, shopping or a short viewpoint visit is easy to stop on time. A valley hike is much harder to control because the walk back, trail conditions and transport can all take longer than expected.'] },
  ],
  'urgup-airport-transfer': [
    { heading: 'Central Urgup and hillside Urgup are not the same pickup', paragraphs: ['A hotel near the town center can be easy for a shuttle to reach, while a historic cave property on a slope may need a different final approach. That is why the booking asks for the full accommodation name rather than only “Urgup”. The town has enough restaurants and services that guests can stay local after arrival without needing another transfer immediately.'] },
    { heading: 'What to do if the return flight is late', paragraphs: ['A late airport departure is easier to manage from Urgup when luggage remains at the hotel. Breakfast, coffee, a short Temenni Hill walk or time in the center can fill the gap without creating another long journey. The safest plan is to return to the confirmed pickup point before the collection window rather than adding a winery or valley visit that depends on another vehicle.'] },
  ],
  'uchisar-airport-transfer': [
    { heading: 'Elevation changes the final part of the transfer', paragraphs: ['Uchisar sits high above the surrounding valleys, and the last streets around the castle can be steep even when the regional road is straightforward. Some boutique hotels have excellent vehicle access; others use a lane where a larger shuttle cannot wait at the entrance. The hotel name and WhatsApp-confirmed stop are therefore especially important for both arrival and departure.'] },
    { heading: 'How to use spare time without going too far', paragraphs: ['The castle area, a terrace, a cafe or a short village walk are easy choices when there is time before pickup. Pigeon Valley is close, but a full valley walk is not a good last-hour plan before an airport transfer. If the flight is late, store luggage at the hotel and stay within easy reach of the meeting point.'] },
  ],
  'avanos-airport-transfer': [
    { heading: 'The Kizilirmak makes the hotel address more important', paragraphs: ['Avanos spreads along both sides of the river, so two hotels described simply as “Avanos” can be on different approaches. A full property name helps the driver avoid an unnecessary town crossing and makes the pickup easier to coordinate. Vehicle access is often simpler than in steep cave villages, but the town is less compact and precise location matters for a different reason.'] },
    { heading: 'A relaxed arrival or departure day in Avanos', paragraphs: ['The riverfront and pottery workshops are useful because they can be enjoyed without committing to a long regional excursion. After arrival, they provide an easy first activity; before departure, they can fill a few spare hours if the hotel can hold luggage. Keep the final stop close to the accommodation so the airport pickup does not depend on finding another taxi across town.'] },
  ],
  'ortahisar-airport-transfer': [
    { heading: 'Ortahisar is quieter, but access still needs planning', paragraphs: ['The village is calmer than Goreme, yet the castle-side streets and older accommodation can create their own access limits. A minibus may use a practical roadside point rather than wait on a narrow lane. The quieter setting makes a relaxed arrival easy, but it should not lead guests to assume that every hotel entrance has the same vehicle access.'] },
    { heading: 'Keep the last hours close to the village', paragraphs: ['For a late flight, a meal, castle-area walk or cafe is easier to control than a valley excursion. If checkout happens early, leave luggage with the hotel when possible and return before the confirmed shuttle window. This is particularly useful for Kayseri departures, where the longer airport road requires a wider time buffer from the start.'] },
  ],
  'cavusin-airport-transfer': [
    { heading: 'A small village can still have several pickup points', paragraphs: ['Cavusin accommodation is spread between the old village, the main road and areas closer to valley access. The settlement is small, but there is no single terminal-style place where every guest should wait. The full hotel name and confirmed meeting point prevent confusion, especially when a larger vehicle cannot stop on a small side road.'] },
    { heading: 'Balloon and trail activity changes the rhythm of the village', paragraphs: ['Cavusin is close to balloon activity and popular walking routes, so mornings can be busier than the village size suggests. After arrival, a short local walk is easy; before airport pickup, a long Rose Valley or other trail hike is not. Keep luggage ready and stay close to the accommodation when the shuttle window approaches.'] },
  ],
};


const pageEnrichment: Record<string, ContentSection[]> = {
  'cappadocia-airport': [
    { heading: 'Why this broad page does not replace the nearest-airport page', paragraphs: ['The phrase “Cappadocia airport” can mean the official NAV airport name or the broader question of which airport serves a Cappadocia trip. This page resolves the naming first. The [[Nearest Airport to Cappadocia|nearest-airport-to-cappadocia]] page owns the closer-airport intent, while [[Cappadocia Airport Code|cappadocia-airport-code]] owns code-specific searches. Keeping those intents separate reduces duplication while still linking the topics naturally.'] },
    { heading: 'Use the airport code on the ticket at booking time', paragraphs: ['Search language can be loose, but an operating transfer cannot be. NAV and ASR have different terminals, road distances and private prices. Select the code printed on the airline booking, then choose the real hotel town rather than writing only “Cappadocia”.'] },
  ],
  'nevsehir-airport-transfer': [
    { heading: 'Nevsehir Kapadokya Airport and NAV Airport are the same airport', paragraphs: ['Travelers may see **Nevsehir Kapadokya Airport**, **Kapadokya Airport** or **NAV Airport** in search results and travel documents. For this transfer service those names point to the NAV airport serving Nevsehir/Cappadocia. The booking should still use the NAV airport selection and the actual operating flight code.'] },
  ],
  'cappadocia-to-istanbul': [
    { heading: 'Do not confuse Istanbul distance with airport pickup timing', paragraphs: ['The long road distance to Istanbul is useful for deciding whether to fly or travel overland, but it should never be used to calculate the Cappadocia hotel pickup. The airport transfer ends at NAV or ASR, and its pickup is confirmed from the departure flight and shared operating plan.'] },
  ],
  'cappadocia-shuttle-transfer': [
    { heading: 'What a shared shuttle passenger should expect', paragraphs: ['The €15 service is booked in advance, but it is not a private car with an exclusive departure time. The operating plan can combine passengers whose flights and hotel areas fit the same run, then make more than one accommodation stop. That is why the confirmed airport meeting or hotel pickup instruction is more useful than estimating the shuttle only from a map.'] },
    { heading: 'Flight delays and changes need a real update', paragraphs: ['If the airline changes the flight code or timing, send the new information on WhatsApp as soon as possible. A changed flight can affect which shared run is suitable, especially when other passengers are already assigned to the original operation. The booking should be checked again rather than assuming the previous meeting or pickup plan will automatically remain valid.'] },
    { heading: 'Round trip keeps two different operations in one request', paragraphs: ['A round trip combines the airport arrival and the later hotel-to-airport departure, but the two directions still need their own flight details. Arrival is coordinated around landing, baggage claim and airport meeting; departure is coordinated around the outbound flight and hotel collection plan. The form shows €30 per person for the shuttle round trip and keeps both sets of details together.'] },
    { heading: 'Luggage or special requests should be mentioned before travel', paragraphs: ['Normal airport luggage is part of the transfer operation, but unusual baggage, bulky equipment or a child-seat request should be written in the notes so the team can confirm what can be arranged. For travelers who need a specific dedicated vehicle rather than the shared vehicle assigned for the day, the private Vito or Sprinter option is the clearer choice.'] },
  ],
  'cappadocia-airport-transfer': [
    { heading: 'Use the route page once the flight and hotel are known', paragraphs: ['The general airport-transfer page is useful while comparing options, but a traveler who already knows the flight and hotel should continue to the exact route. The route pages carry the local distance, approximate road time, hotel-access notes, arrival ideas and return guidance for that airport-town combination instead of relying on one regional estimate.'] },
    { heading: 'Different airports can be used on different travel dates', paragraphs: ['Some itineraries arrive through NAV and leave through ASR, or the reverse. That is not a normal same-airport round trip, because each direction has a different private price and road plan. Send both flights clearly on WhatsApp so each journey can be confirmed with the correct airport rather than forcing two different airports into one price assumption.'] },
    { heading: 'One transfer phrase can describe very different journeys', paragraphs: ['A solo traveler may want the €15 shuttle, a family may prefer a private Vito, and another guest may only need to compare the Kayseri-to-Goreme road time with the NAV alternative. Start with the airport, hotel town and travel direction so the information matches the actual journey.'] },
    { heading: 'Private vehicle capacity changes the group calculation', paragraphs: ['Vito is limited to 5 passengers and Sprinter to 16. Private prices are per vehicle, while the shuttle is per person. The booking form enforces the selected vehicle capacity and recalculates the total when the airport, service, group size or round-trip setting changes.'] },
    { heading: 'Cash payment does not remove the need for confirmation', paragraphs: ['Payment happens with the driver, but the reservation still needs operational confirmation. Flight, hotel, passenger and passport information should be checked before travel so the meeting and pickup plan is correct.'] },
  ],
  'private-airport-transfer-cappadocia': [
    { heading: 'A private booking removes unrelated hotel stops', paragraphs: ['The selected vehicle is dedicated to the booking, so the journey does not include hotel drops for unrelated passengers. This is useful when the group values a more direct transfer, but the actual road time can still change with traffic, weather, baggage collection and the final street leading to the accommodation.'] },
    { heading: 'Why Mercedes Vito and Sprinter appear in the service details', paragraphs: ['Vito and Sprinter tell the traveler the vehicle class and capacity expected for the private option. Keeping both choices on one detailed private-transfer page makes it easier to compare airport prices, passenger limits, luggage guidance and hotel access without splitting closely related information across repetitive pages.'] },
    { heading: 'Choosing between Vito and Sprinter', paragraphs: ['Vito is the compact private option for up to 5 passengers, while Sprinter is the larger choice for groups up to 16. The right choice depends on group size, luggage and hotel access rather than the vehicle name alone; add unusual baggage or child-equipment requests to the booking notes.'] },
    { heading: 'Luggage and group composition still matter', paragraphs: ['Passenger capacity is the upper limit, not a promise that every possible combination of 5 or 16 travelers plus oversized luggage fits identically. If the group has unusually large baggage, child equipment or special requests, include that in the notes so the vehicle plan can be confirmed.'] },
    { heading: 'Private is dedicated, but hotel access still matters', paragraphs: ['A dedicated vehicle goes only for your booking, but old streets do not become wider because the service is private. The driver still uses the safest practical stopping point for the selected vehicle and hotel location.'] },
  ],
  'airport-transfer-prices': [
    { heading: 'Price should be checked together with capacity', paragraphs: ['A low vehicle price is not useful if the group does not fit the vehicle. Vito is limited to 5 passengers, Sprinter to 16, while the shuttle is calculated per person. The booking form therefore changes both the available passenger limit and the total when the traveler switches service, airport or vehicle.'] },
    { heading: 'The published price does not replace operational confirmation', paragraphs: ['The price calculation is clear before the WhatsApp step, but the reservation still needs the flight, hotel and passenger information to be checked. This is particularly important for unusual hotel access, mixed-airport itineraries, special luggage or requests outside the standard shared-shuttle coverage.'] },
    { heading: 'Example totals by group size', paragraphs: ['Two people on a one-way shuttle pay €30 total. Five people pay €75. Six people pay €90 total on a one-way shuttle, which matches the Nevsehir Sprinter one-way price. Kayseri Vito also costs €90, but its maximum is 5 passengers, so it is not a six-person alternative. This is why group size and vehicle capacity have to be compared together rather than by headline price alone.'] },
    { heading: 'Airport selection must change the private total immediately', paragraphs: ['Private prices are not one flat Cappadocia number. Selecting NAV changes Vito to €80 and Sprinter to €90; selecting ASR changes them to €90 and €110. The booking summary should reflect that selection before the WhatsApp message is prepared.'] },
    { heading: 'No hidden round-trip formula', paragraphs: ['Round trip is simply two one-way journeys at the published rate. The form therefore uses a multiplier of two rather than a separate unexplained package price.'] },
  ],
  'cappadocia-airport-code': [
    { heading: 'Why searches for “Goreme Airport” can be confusing', paragraphs: ['Goreme is the best-known tourism town, but it does not have a commercial passenger airport. When a hotel, tour or search result uses loose wording such as “Goreme airport transfer,” the actual flight will normally be using NAV or ASR. Check the airport code on the ticket before submitting the transfer request so the vehicle is sent to the correct terminal.'] },
    { heading: 'Use the code together with the hotel town', paragraphs: ['The airport code solves only half of the transfer. The hotel town solves the other half. A NAV-to-Uchisar route, for example, is much shorter by road than ASR-to-Uchisar, while a Kayseri flight can still be more convenient if the schedule is better. After identifying NAV or ASR, open the destination-specific route rather than stopping at a generic Cappadocia page.'] },
    { heading: 'Flight code vs airport code', paragraphs: ['ASR and NAV identify airports. Your operating flight code identifies the actual flight used for the reservation. The booking form asks for both the airport selection and flight code because they serve different operational purposes.'] },
  ],
  'cappadocia-airport-transfer-travel-times': [
    { heading: 'Arrival time and departure time should not be treated the same', paragraphs: ['For an airport arrival, the road journey starts only after landing, baggage claim and the airport meeting. For a departure, the shuttle may collect several hotels before leaving Cappadocia. This is why a 40-minute road estimate should never be converted into a 40-minute door-to-terminal promise.'] },
    { heading: 'Hotel access can add practical minutes', paragraphs: ['Historic cave-hotel streets in Goreme, Uchisar, Urgup, Ortahisar and Cavusin can require a safe stopping point rather than a long wait at the doorway. Avanos has wider roads but is more spread out. Those local differences explain why the site keeps separate route pages even when two destinations have similar kilometre figures.'] },
    { heading: 'Use the estimate as a planning range', paragraphs: ['Traffic, weather, passenger order and baggage coordination can all change the real duration. The published ranges are designed to help compare routes and airports; the confirmed WhatsApp pickup or meeting information is the operational instruction for the booking.'] },
  ],
  'kayseri-or-nevsehir-airport-for-cappadocia': [
    { heading: 'Town-by-town comparison matters', paragraphs: ['For Goreme, NAV is about 40 km while ASR is about 75 km. For Uchisar, NAV is about 35 km while ASR is about 80 km. Urgup is about 50 km from NAV and 70 km from ASR. Those differences are meaningful, but they should be compared with flight departure time, connection length and airfare.'] },
    { heading: 'A cheaper or better-timed flight can outweigh the road difference', paragraphs: ['Saving 25 or 35 minutes on the road is not always valuable if the closer airport requires a poor connection or an inconvenient departure. The shared-shuttle fare is identical from both airports, so travelers can compare the full itinerary rather than assuming the closer airport is automatically cheaper.'] },
    { heading: 'Different arrival and departure airports need special confirmation', paragraphs: ['Some travelers fly into one airport and leave from the other. That is operationally different from a standard round trip using one airport. Send both flight details clearly on WhatsApp so each direction can be confirmed with the correct airport and price.'] },
  ],
  'istanbul-to-cappadocia': [
    { heading: 'Build the transfer around the operating flight, not only the Istanbul airport', paragraphs: ['Istanbul has two major airports, IST and SAW, while the Cappadocia end normally uses ASR or NAV. The important transfer information is the flight that actually lands in Kayseri or Nevsehir. Enter its operating flight code so arrival coordination is tied to the correct landing.'] },
    { heading: 'Leave room for baggage claim before meeting the shuttle', paragraphs: ['The airport shuttle does not start at the aircraft door. After landing, complete baggage claim and continue to the meeting point using the instructions confirmed on WhatsApp. This is particularly important for travelers connecting through Istanbul who may be tired or unfamiliar with the final airport.'] },
    { heading: 'Return to Istanbul follows the hotel-to-airport flow', paragraphs: ['For the journey home, the Cappadocia shuttle collects from the confirmed hotel area and drives to ASR or NAV for the domestic flight back to Istanbul. Use the [[Cappadocia to Istanbul guide|cappadocia-to-istanbul]] and the hotel-to-airport route page for your town so the pickup advice matches the departure airport.'] },
  ],
  'cappadocia-shared-shuttle-vs-private-transfer': [
    { heading: 'Group-size examples make the choice clearer', paragraphs: ['One passenger pays €15 on the shuttle, so private transfer is rarely the value choice purely on price. A group of six pays €90 total for a one-way shuttle; that begins to overlap with private vehicle pricing, especially from Nevsehir. For larger groups, compare the Sprinter’s per-vehicle price against the total per-person shuttle fare rather than looking only at the headline numbers.'] },
    { heading: 'Early flights and late arrivals change the value calculation', paragraphs: ['Travelers with a normal daytime flight may be comfortable with shared timing. A very early departure, a late arrival, young children, unusual luggage or a tight onward connection can make the control of a dedicated private vehicle more important than the price difference.'] },
    { heading: 'Shared does not mean unplanned', paragraphs: ['The shuttle is still a pre-booked airport service with flight, passenger and hotel details. “Shared” simply means other confirmed passengers and hotel stops can be part of the same run.'] },
  ],
  'hotel-to-airport-transfer': [
    { heading: 'Hotel pickup points differ by town', paragraphs: ['A Goreme cave hotel may use a hillside meeting point; Uchisar can involve steep castle-side lanes; Avanos is more spread out around the river; Cavusin and Ortahisar have smaller village roads. The destination-specific return pages explain these differences instead of applying one pickup paragraph to every town.'] },
    { heading: 'Kayseri and Nevsehir departures have different road buffers', paragraphs: ['ASR is generally farther from central Cappadocia, while NAV is closer. That does not mean passengers should invent their own pickup time. The operation team confirms the timing from the flight and shared collection plan, protecting a realistic road and airport buffer.'] },
    { heading: 'Private hotel pickup uses the same passenger information standard', paragraphs: ['Choosing Vito or Sprinter changes the vehicle and price, not the need for accurate booking details. Passenger names, passport numbers, hotel and departure flight information are still required for the operating company to confirm the transfer.'] },
  ],
  'nearest-airport-to-cappadocia': [
    { heading: 'Nearest airport to Uchisar, Goreme and Urgup', paragraphs: ['NAV has a particularly strong road-distance advantage for Uchisar and Goreme. Urgup is farther east, so the difference is smaller than it is for Uchisar. Avanos, Ortahisar and Cavusin each have their own route figures. Check the actual hotel town before deciding what “nearest” means for your trip.'] },
    { heading: 'Airport name does not determine hotel coverage', paragraphs: ['Both ASR and NAV shuttle services cover the same supported central hotel towns. Choosing Kayseri does not mean you lose access to Goreme or Uchisar; it simply means a longer road transfer. Likewise, choosing NAV does not guarantee a faster total trip if the flight connection itself is worse.'] },
    { heading: 'Private price is lower from Nevsehir, shared price is equal', paragraphs: ['The shared fare is €15 per person from both airports. Private transfer is €80/€90 for NAV Vito/Sprinter and €90/€110 for ASR. This distinction matters more for groups choosing a dedicated vehicle.'] },
  ],
  'cappadocia-cave-hotel-airport-transfer': [
    { heading: 'Cave hotel does not automatically mean difficult access', paragraphs: ['Some cave properties sit on normal vehicle roads and are straightforward; others have steep steps, narrow lanes or reception points away from the room entrance. The correct property name is what allows the team to distinguish those cases.'] },
    { heading: 'Arrival luggage and departure luggage create different problems', paragraphs: ['On arrival, guests may be able to walk a short distance from a safe stop while the driver unloads luggage. On departure, the passenger must already be at the agreed point because the shared vehicle has a schedule. Packing and checkout should be finished before the pickup window.'] },
    { heading: 'Why we list real accommodation names', paragraphs: ['Recognizable accommodation names help travelers check that they have selected the correct town and avoid confusion between similarly named cave houses, suites and stone hotels. The list is for transfer identification and local context, not a hotel ranking or endorsement.'] },
  ],
};

const faqEnrichment: Record<string, FaqItem[]> = {
  'cappadocia-airport-code': [
    { q:'Does Cappadocia have an airport called CAPP?', a:'No. The main commercial airport codes used for central Cappadocia are NAV and ASR.' },
    { q:'Which code should I select if my ticket says Kayseri?', a:'ASR.' },
    { q:'Which code should I select if my ticket says Nevsehir?', a:'NAV.' },
  ],
  'cappadocia-airport-transfer-travel-times': [
    { q:'Do shared shuttle hotel stops add time?', a:'Yes. Passenger and hotel stop order can add time beyond the direct road estimate.' },
    { q:'Are arrival and departure estimates identical?', a:'The road distance is the same, but departure may include hotel collections and needs an airport buffer.' },
    { q:'Can winter weather change transfer time?', a:'Yes. Weather and road conditions can change the published estimate.' },
  ],
  'istanbul-to-cappadocia': [
    { q:'Do I book the shuttle using my Istanbul flight number?', a:'Use the operating flight code that lands at Kayseri or Nevsehir for the Cappadocia arrival.' },
    { q:'Can I book the return shuttle for my flight back to Istanbul?', a:'Yes. Use the departure flight from ASR or NAV and the hotel-to-airport direction.' },
    { q:'Is baggage claim included in the published road time?', a:'No. Road estimates begin after the airport process; baggage claim happens before the shuttle journey starts.' },
  ],
};

function generatedHubEnrichment(page: SeoPage): ContentSection[] {
  const airportKey = page.slug.includes('nevsehir') ? 'nevsehir' as const : 'kayseri' as const;
  const a = airports[airportKey];
  if (page.slug === `${airportKey}-airport-transfer`) return [
    { heading: `Why private pricing changes at ${a.code}`, paragraphs: [`Private transfer is priced by airport because the road operation is different. ${a.name} Vito is €${a.vito} and Sprinter €${a.sprinter} one way. The shared shuttle remains €15 per person, so travelers comparing airports should separate the shared fare from the private-vehicle fare.`] },
    { heading: `How the ${a.code} shared vehicle is planned`, paragraphs: ['The shared vehicle can vary with daily reservations and passenger count. It is not sold as a guaranteed Mercedes model for each €15 seat. The important booking promise is the confirmed airport/hotel service; travelers who specifically need Vito or Sprinter should select private transfer.'] },
    { heading: `Route examples from ${a.code}`, paragraphs: [airportKey === 'kayseri' ? 'From ASR, Goreme is about 75 km / 60–75 minutes, Urgup about 70 km / 60–75 minutes, Uchisar about 80 km / 70–85 minutes, Avanos about 70 km / 60–75 minutes, Ortahisar about 75 km / 60–75 minutes and Cavusin about 75 km / 65–80 minutes. These are road-planning ranges before any extra shared-shuttle stops.' : 'From NAV, Goreme is about 40 km / 35–45 minutes, Urgup about 50 km / 45–60 minutes, Uchisar about 35 km / 30–40 minutes, Avanos about 38 km / 35–50 minutes, Ortahisar about 45 km / 40–50 minutes and Cavusin about 42 km / 40–55 minutes. These are road-planning ranges before any extra shared-shuttle stops.'] },
    { heading: `If a ${a.code} flight is delayed`, paragraphs: ['Keep the operating flight code and WhatsApp contact accurate and send any airline change as soon as possible. A shared vehicle is coordinated with other reservations, so a delay needs to be checked against the actual operating plan rather than treated as an automatic private wait. The confirmed instruction after the update is the one to follow.'] },
  ];
  if (page.slug === `${airportKey}-airport-shuttle`) return [
    { heading: `Arrival meeting at ${a.code}`, paragraphs: [`After landing at ${a.code}, collect checked baggage before continuing to the meeting point. The reservation passenger name can be used for the airport meeting sign, and the WhatsApp confirmation tells you where to continue after the terminal process. A correct operating flight code helps the transfer team follow the right arrival.`] },
    { heading: 'Why full passenger information is collected', paragraphs: ['Passenger names and passport numbers are required by the operating company for reservation and transfer operation. The booking summary lets the customer review these details before opening the WhatsApp request. They should be entered exactly as supplied by the passengers.'] },
    { heading: `Hotel access after the ${a.code} shuttle leaves the main road`, paragraphs: ['The last part of the transfer depends on the town and property. Goreme and Uchisar can have steep cave-hotel lanes, Urgup mixes normal town roads with older quarters, Avanos is more spread out, and Ortahisar or Cavusin can use smaller village streets. A confirmed nearby stop may be safer than forcing a larger shared vehicle to a difficult doorway.'] },
    { heading: `Booking the return to ${a.code}`, paragraphs: [`The same €15 per-person fare applies from the supported hotel towns back to ${a.code}. For a departure, use the correct outbound flight and be ready at the confirmed hotel or meeting point. The [[Cappadocia to ${a.name} shuttle|cappadocia-to-${airportKey}-airport-shuttle]] hub links to all six town-specific return routes.`] },
  ];
  if (page.slug === `${airportKey}-to-cappadocia-transfer`) return [
    { heading: `Popular ${a.code} destination combinations`, paragraphs: [`Goreme is a common destination, but ${a.name} also connects with Urgup, Uchisar, Avanos, Ortahisar and Cavusin. Choose the actual hotel town because a broad “${airportKey} to Cappadocia” request does not tell the driver which local road, hotel access or return pickup applies.`] },
    { heading: 'Arrival day and departure day should both be planned', paragraphs: [`If you know you will leave through ${a.code} as well, selecting Round Trip at the beginning keeps both directions in one booking request. The arrival flight and return flight remain separate fields because they are used for different airport meeting and hotel pickup operations.`] },
    { heading: `How much road travel changes by destination from ${a.code}`, paragraphs: [airportKey === 'kayseri' ? 'ASR road estimates range from about 70 km for Urgup or Avanos to about 80 km for Uchisar, with Goreme, Ortahisar and Cavusin around 75 km. The hotel town therefore changes the final approach even when several Kayseri routes have similar headline distances.' : 'NAV road estimates vary more clearly by town: about 35 km to Uchisar, 38 km to Avanos, 40 km to Goreme, 42 km to Cavusin, 45 km to Ortahisar and 50 km to Urgup. Choosing the actual town gives a much more useful estimate than a generic Nevsehir-to-Cappadocia phrase.'] },
    { heading: 'What to do with a very early or late arrival', paragraphs: ['Do not build a fixed sightseeing plan around an uncertain landing time. Baggage claim, flight changes and the shared operation can shift the real hotel-arrival time. If you reach the hotel early, leave luggage with reception when possible and choose a short activity close to the town; the destination page has local suggestions that do not require another long transfer.'] },
  ];
  if (page.slug === `cappadocia-to-${airportKey}-airport-shuttle`) return [
    { heading: `Why ${a.code} departure pickup is confirmed individually`, paragraphs: [`A hotel-to-${a.code} shuttle is not scheduled from a universal published clock time. The operating plan depends on the departure flight, the booked hotel area and other passengers on the run. The confirmed WhatsApp time is therefore more useful than a generic “leave X hours before” rule.`] },
    { heading: 'Passenger readiness matters on a shared collection', paragraphs: ['Complete checkout, have luggage ready and wait at the confirmed point. A shared shuttle may continue to another hotel after your pickup, so the vehicle cannot spend an open-ended amount of time waiting at a property while the rest of the airport run is being coordinated.'] },
    { heading: `Use the town page before a hotel-to-${a.code} pickup`, paragraphs: [`A departure from Goreme has different morning traffic and cave-hotel access from Avanos, while Uchisar, Urgup, Ortahisar and Cavusin each have their own practical meeting-point issues. The six return-route pages explain those local differences and give sensible ideas for spare time before the confirmed ${a.code} pickup.`] },
  ];
  return [];
}

const rawPages: SeoPage[] = [...corePages,...airportPages,...destinationPages,...arrivalPages,...returnPages,...guidePages];
export const pages: SeoPage[] = rawPages.map((page) => ({
  ...page,
  sections: [...page.sections, ...(destinationEnrichment[page.slug] || []), ...generatedHubEnrichment(page), ...(pageEnrichment[page.slug] || [])],
  faq: [...page.faq, ...(faqEnrichment[page.slug] || [])],
}));
export const pageBySlug = new Map(pages.map(page=>[page.slug,page]));
export function prettySlug(slug:string){ const page=pageBySlug.get(slug); return page?.h1 || slug.split('-').map(s=>s.charAt(0).toUpperCase()+s.slice(1)).join(' '); }

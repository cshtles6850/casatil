import { towns } from './site';

export type EsContentSection = { heading: string; paragraphs: string[]; bullets?: string[] };
export type EsFaqItem = { q: string; a: string };
export type EsSeoPage = { slug: string; title: string; description: string; twitterTitle?: string; twitterDescription?: string; eyebrow: string; h1: string; lead: string; sections: EsContentSection[]; faq: EsFaqItem[]; related: string[]; route?: { airport: 'kayseri' | 'nevsehir'; town: keyof typeof towns; direction: 'arrival' | 'return' }; };

export const townNamesEs: Record<keyof typeof towns, string> = {
  "goreme": "Goreme",
  "urgup": "Urgup",
  "uchisar": "Uchisar",
  "avanos": "Avanos",
  "ortahisar": "Ortahisar",
  "cavusin": "Cavusin"
};

export const esPages: EsSeoPage[] = [
  {
    "slug": "cappadocia-shuttle-transfer",
    "title": "Shuttle en Capadocia | Traslado compartido desde el aeropuerto",
    "description": "Reserva un shuttle compartido en Capadocia desde Kayseri (ASR) o Nevsehir (NAV) a Goreme, Urgup y otras zonas. Reserva por WhatsApp.",
    "eyebrow": "Shuttle compartido desde el aeropuerto",
    "h1": "Shuttle compartido en Capadocia",
    "lead": "El shuttle compartido de Capadocia conecta los aeropuertos de Kayseri (ASR) y Nevsehir (NAV) con hoteles de Goreme, Urgup, Uchisar, Avanos, Cavusin y Ortahisar. La tarifa es de €15 por persona y trayecto, con recogida y llegada coordinadas según tu vuelo.",
    "sections": [
      {
        "heading": "Qué incluye",
        "paragraphs": [
          "El servicio incluye un trayecto compartido desde cualquiera de los dos aeropuertos hasta tu alojamiento. El vuelo, los datos de los pasajeros y el nombre del hotel se confirman con antelación. En el mismo servicio puede haber otros pasajeros confirmados y paradas en otros hoteles; así es posible mantener la tarifa en €15 por persona."
        ]
      },
      {
        "heading": "Aeropuerto de Kayseri o Nevsehir",
        "paragraphs": [
          "La ruta depende del aeropuerto de tu vuelo. Si llegas a ASR, consulta [[Shuttle desde el Aeropuerto de Kayseri|kayseri-airport-shuttle]]. Si llegas a NAV, utiliza [[Shuttle desde el Aeropuerto de Nevsehir|nevsehir-airport-shuttle]]. En cada página encontrarás la distancia y el tiempo aproximado para la zona de tu hotel."
        ]
      },
      {
        "heading": "Shuttle compartido o traslado privado: cuál elegir",
        "paragraphs": [
          "En el shuttle compartes el vehículo con otros pasajeros confirmados y puede haber paradas en distintos hoteles. Si prefieres viajar sin otros pasajeros ni paradas ajenas a tu reserva, consulta el [[traslado privado desde el aeropuerto|private-airport-transfer-cappadocia]]."
        ]
      },
      {
        "heading": "Solo ida, ida y vuelta o recogida en el hotel",
        "paragraphs": [
          "Puedes reservar Aeropuerto → Hotel, Hotel → Aeropuerto o ambos trayectos como ida y vuelta. Indica el número de vuelo y el nombre completo del alojamiento para poder confirmar el punto de encuentro en el aeropuerto o la recogida en el hotel."
        ]
      }
    ],
    "faq": [
      {
        "q": "¿Cuánto cuesta el shuttle compartido en Capadocia?",
        "a": "€15 por persona y trayecto desde ASR o NAV hasta las zonas de hotel incluidas en el servicio."
      },
      {
        "q": "¿Qué aeropuertos están incluidos?",
        "a": "Aeropuerto de Kayseri (ASR) y Aeropuerto de Nevsehir (NAV)."
      },
      {
        "q": "¿Qué zonas de Capadocia cubre el servicio?",
        "a": "Goreme, Urgup, Uchisar, Avanos, Cavusin y Ortahisar."
      },
      {
        "q": "¿También puedo reservar del hotel al aeropuerto?",
        "a": "Sí. Elige Hotel → Aeropuerto o Ida y vuelta."
      },
      {
        "q": "¿También hay traslado privado?",
        "a": "Sí. Los vehículos privados Vito y Sprinter tienen tarifas fijas según el aeropuerto."
      }
    ],
    "related": [
      "kayseri-airport-shuttle",
      "nevsehir-airport-shuttle",
      "private-airport-transfer-cappadocia",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Shuttle en Capadocia | Traslado compartido desde el aeropuerto",
    "twitterDescription": "Shuttle compartido desde Kayseri (ASR) y Nevsehir (NAV) a Goreme, Urgup, Uchisar, Avanos, Cavusin y Ortahisar."
  },
  {
    "slug": "cappadocia-airport-transfer",
    "title": "Traslado del aeropuerto a Capadocia | Kayseri y Nevsehir",
    "description": "Traslado a Capadocia desde Kayseri (ASR) y Nevsehir (NAV): shuttle €15 o Vito/Sprinter privado. Recogida y llegada al hotel. Reserva por WhatsApp.",
    "eyebrow": "Servicio de traslado desde el aeropuerto",
    "h1": "Traslado del aeropuerto a Capadocia",
    "lead": "Un traslado de aeropuerto en Capadocia cambia según el aeropuerto de llegada, la localidad del hotel y el sentido del viaje. Empieza por elegir el aeropuerto y después la zona del alojamiento; a partir de ahí se define la ruta correcta.",
    "sections": [
      {
        "heading": "Primero elige tu aeropuerto",
        "paragraphs": [
          "Capadocia cuenta con dos aeropuertos principales: [[Aeropuerto de Kayseri (ASR)|kayseri-airport-shuttle]] y [[Aeropuerto de Nevsehir (NAV)|nevsehir-airport-shuttle]]. NAV está más cerca por carretera de la mayoría de las localidades centrales, mientras que ASR puede ofrecer un horario de vuelo que encaje mejor en tu viaje. Si aún no sabes cuál elegir, consulta [[Aeropuerto más cercano a Capadocia|nearest-airport-to-cappadocia]] y [[Kayseri o Nevsehir para Capadocia|kayseri-or-nevsehir-airport-for-cappadocia]] antes de reservar el vuelo."
        ]
      },
      {
        "heading": "Shuttle compartido o traslado privado",
        "paragraphs": [
          "El [[shuttle compartido|cappadocia-shuttle-transfer]] cuesta €15 por persona y trayecto desde cualquiera de los dos aeropuertos, con reserva previa y confirmación por WhatsApp. En el mismo servicio puede haber otros pasajeros y paradas en diferentes hoteles. Si quieres un vehículo exclusivo, el [[traslado privado|private-airport-transfer-cappadocia]] se realiza con Vito (hasta 5 pasajeros) o Sprinter (hasta 16), con precio por vehículo y tarifas distintas para Kayseri y Nevsehir. Si estás comparando ambas opciones, consulta [[shuttle compartido frente a traslado privado|cappadocia-shared-shuttle-vs-private-transfer]] para ver precio, cobertura y tiempos lado a lado."
        ]
      },
      {
        "heading": "Datos necesarios para la reserva",
        "paragraphs": [
          "Para cada reserva necesitamos los nombres de los pasajeros, números de pasaporte, número de vuelo y nombre completo del alojamiento. Algunos [[hoteles cueva y alojamientos en calles antiguas|cappadocia-cave-hotel-airport-transfer]] están en vías a las que un vehículo no puede acceder; en esos casos, la recogida o la llegada puede organizarse en el punto accesible más cercano."
        ]
      },
      {
        "heading": "Llegar por un aeropuerto y salir por otro",
        "paragraphs": [
          "Algunos viajes llegan por NAV y salen por ASR, o al revés. No se considera una ida y vuelta estándar por el mismo aeropuerto, porque cada trayecto tiene su propia ruta y su propia tarifa de traslado privado. Envía ambos vuelos por WhatsApp para confirmar cada tramo con el aeropuerto correcto en lugar de asumir un único precio para los dos sentidos."
        ]
      },
      {
        "heading": "Tamaño del grupo y capacidad del vehículo",
        "paragraphs": [
          "Un Vito admite hasta 5 pasajeros y un Sprinter hasta 16. Los traslados privados se cobran por vehículo, por lo que en grupos grandes el coste por persona de un Sprinter puede ser inferior al del shuttle. Conviene comparar ambas opciones antes de reservar, especialmente desde Nevsehir, donde las tarifas privadas son más bajas."
        ]
      },
      {
        "heading": "Consulta las rutas por localidad",
        "paragraphs": [
          "¿Ya sabes dónde está tu hotel? Ve directamente a la ruta correspondiente a tu aeropuerto:"
        ],
        "bullets": [
          "**Goreme** — [[desde Kayseri|kayseri-airport-to-goreme-shuttle]] · [[desde Nevsehir|nevsehir-airport-to-goreme-shuttle]]",
          "**Urgup** — [[desde Kayseri|kayseri-airport-to-urgup-shuttle]] · [[desde Nevsehir|nevsehir-airport-to-urgup-shuttle]]",
          "**Uchisar** — [[desde Kayseri|kayseri-airport-to-uchisar-shuttle]] · [[desde Nevsehir|nevsehir-airport-to-uchisar-shuttle]]",
          "**Avanos** — [[desde Kayseri|kayseri-airport-to-avanos-shuttle]] · [[desde Nevsehir|nevsehir-airport-to-avanos-shuttle]]",
          "**Cavusin** — [[desde Kayseri|kayseri-airport-to-cavusin-shuttle]] · [[desde Nevsehir|nevsehir-airport-to-cavusin-shuttle]]",
          "**Ortahisar** — [[desde Kayseri|kayseri-airport-to-ortahisar-shuttle]] · [[desde Nevsehir|nevsehir-airport-to-ortahisar-shuttle]]"
        ]
      }
    ],
    "faq": [
      {
        "q": "¿Qué aeropuertos dan servicio a Capadocia?",
        "a": "Aeropuerto de Kayseri (ASR) y Aeropuerto de Nevsehir (NAV)."
      },
      {
        "q": "¿Puedo llegar por un aeropuerto y salir por el otro?",
        "a": "Sí. Envía ambos vuelos por WhatsApp para confirmar cada sentido por separado, ya que la ruta y el precio cambian según el aeropuerto."
      },
      {
        "q": "¿Qué aeropuerto está más cerca de mi hotel, Kayseri o Nevsehir?",
        "a": "Depende de la localidad de tu hotel; NAV está más cerca de la mayoría de las zonas centrales. Consulta [[Kayseri o Nevsehir para Capadocia|kayseri-or-nevsehir-airport-for-cappadocia]] para una comparación completa."
      },
      {
        "q": "¿La recogida en el hotel está incluida para el trayecto de salida?",
        "a": "Sí, siempre que la reserva esté confirmada y el acceso del vehículo sea viable."
      },
      {
        "q": "¿Qué zonas de Capadocia cubre el servicio?",
        "a": "Goreme, Urgup, Uchisar, Avanos, Cavusin y Ortahisar."
      },
      {
        "q": "¿Qué datos de los pasajeros se necesitan?",
        "a": "Nombres de los pasajeros, números de pasaporte, información del vuelo, nombre del hotel y un contacto de WhatsApp."
      }
    ],
    "related": [
      "cappadocia-airport",
      "kayseri-airport-shuttle",
      "nevsehir-airport-shuttle",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Traslado del aeropuerto a Capadocia | Kayseri y Nevsehir",
    "twitterDescription": "Shuttle compartido o traslado privado desde Kayseri (ASR) y Nevsehir (NAV) a Goreme, Urgup, Uchisar, Avanos, Cavusin y Ortahisar."
  },
  {
    "slug": "private-airport-transfer-cappadocia",
    "title": "Traslado privado en Capadocia | Vito y Sprinter",
    "description": "Traslado privado en Capadocia: Kayseri Vito €90 / Sprinter €110; Nevsehir Vito €80 / Sprinter €90. Hasta 5 o 16 pasajeros. Pago en efectivo al conductor.",
    "eyebrow": "Vehículo exclusivo",
    "h1": "Traslado privado desde el Aeropuerto en Capadocia",
    "lead": "Aeropuerto de Kayseri: **Vito €90**, **Sprinter €110** por trayecto. Aeropuerto de Nevsehir: **Vito €80**, **Sprinter €90**. Son precios por vehículo, no por pasajero. Ida y vuelta: €180/€220 desde Kayseri y €160/€180 desde Nevsehir.",
    "sections": [
      {
        "heading": "Mercedes Vito: hasta 5 pasajeros",
        "paragraphs": [
          "El Vito es una buena opción para parejas, familias y grupos pequeños que quieren un vehículo exclusivo, sin paradas para pasajeros de otras reservas y con más control sobre la hora de salida que en un shuttle compartido. Es la opción privada más compacta para recogidas en el aeropuerto, [[acceso a hoteles cueva|cappadocia-cave-hotel-airport-transfer]] y traslados directos del hotel al aeropuerto."
        ]
      },
      {
        "heading": "Mercedes Sprinter: hasta 16 pasajeros",
        "paragraphs": [
          "El Sprinter es la opción privada de mayor capacidad para grupos de hasta 16 personas. El precio cambia según el aeropuerto: €110 desde Kayseri y €90 desde Nevsehir por trayecto. Comprueba el total después de seleccionar ASR o NAV en el formulario de reserva."
        ]
      },
      {
        "heading": "Cuándo conviene más un traslado privado que el shuttle",
        "paragraphs": [
          "El traslado privado resulta especialmente útil para grupos grandes, salidas tempranas, llegadas tardías, familias con más equipaje, viajeros que prefieren una ruta directa al hotel o alojamientos fuera del área del shuttle compartido. Para una o dos personas con horarios flexibles, el [[shuttle de €15|cappadocia-shuttle-transfer]] suele ofrecer mejor relación calidad-precio."
        ]
      },
      {
        "heading": "Pago y datos de los pasajeros",
        "paragraphs": [
          "El pago se realiza en efectivo al conductor. Para confirmar el traslado seguimos necesitando número de vuelo, alojamiento, nombres de los pasajeros, números de pasaporte y contacto de WhatsApp."
        ]
      },
      {
        "heading": "Tamaño del grupo, equipaje y acceso al hotel",
        "paragraphs": [
          "La capacidad indicada es el máximo de pasajeros, no una garantía de que cualquier combinación de personas y equipaje voluminoso quepa de la misma forma. Indica en la reserva si llevas maletas especialmente grandes o equipamiento infantil. Un vehículo privado evita las paradas de otros pasajeros, pero las calles antiguas siguen teniendo las mismas limitaciones: el conductor utilizará el punto seguro y accesible más cercano según el vehículo y la ubicación del hotel."
        ]
      }
    ],
    "faq": [
      {
        "q": "¿Cuánto cuesta un Vito privado desde Kayseri?",
        "a": "€90 por trayecto y vehículo, para hasta 5 pasajeros."
      },
      {
        "q": "¿Cuánto cuesta un Vito privado desde Nevsehir?",
        "a": "€80 por trayecto y vehículo, para hasta 5 pasajeros."
      },
      {
        "q": "¿Cuánto cuesta un Sprinter desde Kayseri?",
        "a": "€110 por trayecto y vehículo, para hasta 16 pasajeros."
      },
      {
        "q": "¿Cuánto cuesta un Sprinter desde Nevsehir?",
        "a": "€90 por trayecto y vehículo, para hasta 16 pasajeros."
      },
      {
        "q": "¿Cuánto cuesta ida y vuelta?",
        "a": "Exactamente el doble del precio de un solo trayecto."
      },
      {
        "q": "¿El traslado privado es siempre puerta a puerta?",
        "a": "El vehículo es exclusivo para tu reserva, pero el acceso a hoteles históricos sigue dependiendo de que la calle permita entrar y detenerse con seguridad."
      },
      {
        "q": "¿Se necesitan números de pasaporte para un traslado privado?",
        "a": "Sí. Los datos de pasaporte de los pasajeros son necesarios para cada reserva."
      },
      {
        "q": "¿Cómo se paga el traslado privado?",
        "a": "En efectivo al conductor."
      }
    ],
    "related": [
      "airport-transfer-prices",
      "kayseri-airport-shuttle",
      "nevsehir-airport-shuttle"
    ],
    "twitterTitle": "Traslado privado en Capadocia | Vito y Sprinter",
    "twitterDescription": "Traslado privado en Capadocia con Mercedes Vito o Sprinter, tarifas fijas para Kayseri y Nevsehir y pago en efectivo al conductor."
  },
  {
    "slug": "airport-transfer-prices",
    "title": "Precios de traslado en Capadocia | Shuttle, Vito y Sprinter",
    "description": "Precios de traslado en Capadocia: shuttle €15/persona/trayecto. Kayseri Vito €90, Sprinter €110. Nevsehir Vito €80, Sprinter €90. Ida y vuelta al doble.",
    "twitterTitle": "Precios de traslado en Capadocia | Shuttle, Vito y Sprinter",
    "twitterDescription": "Shuttle €15/persona. Kayseri Vito €90, Sprinter €110. Nevsehir Vito €80, Sprinter €90. Ida y vuelta exactamente al doble.",
    "eyebrow": "Tarifas claras",
    "h1": "Precios de traslado desde el Aeropuerto en Capadocia",
    "lead": "El shuttle cuesta €15 por persona y trayecto desde ambos aeropuertos. Los traslados privados se cobran por vehículo y tienen tarifas diferentes en Kayseri y Nevsehir.",
    "sections": [
      {
        "heading": "Precio del shuttle compartido",
        "paragraphs": [
          "Aeropuerto de Kayseri (ASR) → hoteles incluidos en Capadocia: **€15 por persona y trayecto**. Aeropuerto de Nevsehir (NAV) → hoteles incluidos: **€15 por persona y trayecto**. Del hotel al aeropuerto cuesta lo mismo. Ida y vuelta son €30 por persona. Consulta todos los detalles en la [[página del shuttle|cappadocia-shuttle-transfer]]."
        ]
      },
      {
        "heading": "Precios privados desde el Aeropuerto de Kayseri",
        "paragraphs": [
          "Mercedes Vito, máximo 5 pasajeros: **€90 ida / €180 ida y vuelta**. Mercedes Sprinter, máximo 16 pasajeros: **€110 ida / €220 ida y vuelta**."
        ]
      },
      {
        "heading": "Precios privados desde el Aeropuerto de Nevsehir",
        "paragraphs": [
          "Mercedes Vito, máximo 5 pasajeros: **€80 ida / €160 ida y vuelta**. Mercedes Sprinter, máximo 16 pasajeros: **€90 ida / €180 ida y vuelta**. Consulta la [[página de traslado privado|private-airport-transfer-cappadocia]] para ver los vehículos y cuándo puede convenir más un servicio privado que el shuttle."
        ]
      },
      {
        "heading": "Precio por persona frente a precio por vehículo",
        "paragraphs": [
          "El total del shuttle aumenta con el número de pasajeros porque se cobra por persona. El traslado privado se cobra por vehículo, siempre que el grupo quepa en la categoría elegida: Vito hasta 5 personas y Sprinter hasta 16. Por eso, para un grupo grande un Sprinter puede resultar más económico por persona que el shuttle, aunque su precio por vehículo parezca mayor a primera vista. Además, no existe una única tarifa privada: al elegir NAV, Vito cuesta €80 y Sprinter €90; con ASR, €90 y €110. Revisa el total después de seleccionar el aeropuerto."
        ]
      },
      {
        "heading": "Ejemplos de total según el tamaño del grupo",
        "paragraphs": [
          "Dos personas en un shuttle de ida pagan €30 en total. Cinco personas, €75. Seis personas pagan €90 en un shuttle de ida, el mismo precio que un Sprinter desde Nevsehir. El Vito de Kayseri también cuesta €90, pero admite un máximo de 5 pasajeros, así que no sirve para un grupo de seis. Hay que comparar el tamaño del grupo y la capacidad del vehículo, no solo el precio destacado."
        ]
      },
      {
        "heading": "Pago, moneda y datos de la reserva",
        "paragraphs": [
          "Los precios se publican en EUR y el pago se realiza en efectivo al conductor. También puede pagarse en efectivo en USD o TRY usando el tipo de cambio confirmado para la reserva. Ida y vuelta equivale simplemente a dos trayectos al precio publicado, sin una tarifa especial de paquete. Para reservar seguimos necesitando número de vuelo, hotel, nombres y números de pasaporte; la reserva queda confirmada después de revisar estos datos por WhatsApp. Esto es especialmente importante cuando el acceso al hotel es poco habitual, se utilizan aeropuertos distintos o la solicitud está fuera de la cobertura estándar del shuttle compartido."
        ]
      }
    ],
    "faq": [
      {
        "q": "¿Cuánto cuesta el shuttle del aeropuerto en Capadocia?",
        "a": "€15 por persona y trayecto desde los aeropuertos de Kayseri y Nevsehir."
      },
      {
        "q": "¿Cuánto cuesta el shuttle de ida y vuelta?",
        "a": "€30 por persona."
      },
      {
        "q": "¿Cuánto cuesta el Vito desde Kayseri?",
        "a": "€90 ida; €180 ida y vuelta."
      },
      {
        "q": "¿Cuánto cuesta el Sprinter desde Kayseri?",
        "a": "€110 ida; €220 ida y vuelta."
      },
      {
        "q": "¿Cuánto cuesta el Vito desde Nevsehir?",
        "a": "€80 ida; €160 ida y vuelta."
      },
      {
        "q": "¿Cuánto cuesta el Sprinter desde Nevsehir?",
        "a": "€90 ida; €180 ida y vuelta."
      },
      {
        "q": "¿Los precios privados son por persona?",
        "a": "No. Se cobran por vehículo dentro de la capacidad indicada."
      },
      {
        "q": "¿Cambia el precio entre Goreme y Urgup?",
        "a": "La tarifa privada publicada según el aeropuerto es la misma para las localidades centrales incluidas en el servicio."
      },
      {
        "q": "¿Puedo pagar en USD o TRY?",
        "a": "Sí. Puede acordarse pago en efectivo en USD o TRY con el tipo de cambio confirmado para la reserva."
      },
      {
        "q": "¿Se necesitan números de pasaporte aunque el pago sea en efectivo?",
        "a": "Sí. La información del pasaporte es necesaria para cada reserva, independientemente del método de pago."
      },
      {
        "q": "¿Hay descuento por ida y vuelta?",
        "a": "No se aplica un descuento específico; la ida y vuelta cuesta exactamente el doble del trayecto de ida."
      },
      {
        "q": "¿Cuándo queda confirmada la reserva?",
        "a": "Cuando los datos de la reserva se confirman por WhatsApp."
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
    "title": "Shuttle del Aeropuerto de Kayseri a Capadocia | Hoteles y aeropuerto",
    "description": "Shuttle desde el Aeropuerto de Kayseri (ASR) a hoteles de Capadocia: €15 por persona, pago al conductor, Goreme, Urgup, Uchisar, Avanos, Cavusin y Ortahisar.",
    "eyebrow": "Shuttle desde ASR",
    "h1": "Shuttle del Aeropuerto de Kayseri a Capadocia",
    "lead": "Reserva el shuttle compartido de €15 por persona desde el Aeropuerto de Kayseri Erkilet hasta alojamientos incluidos en Capadocia, con los detalles del encuentro coordinados según tu vuelo y confirmados por WhatsApp.",
    "sections": [
      {
        "heading": "Shuttle desde Kayseri: la puerta de entrada por carretera más larga a Capadocia",
        "paragraphs": [
          "ASR está más lejos de las principales localidades hoteleras que NAV, por lo que conviene valorar el trayecto según el destino real del hotel y no con un único tiempo genérico para “Capadocia”. Goreme está a unos 75 km / 60–75 minutos por carretera, y las localidades cubiertas suelen encontrarse aproximadamente a 70–80 km antes de posibles paradas compartidas en hoteles."
        ]
      },
      {
        "heading": "La tarifa compartida sigue siendo €15 desde ASR",
        "paragraphs": [
          "El shuttle compartido desde Kayseri cuesta **€15 por persona y trayecto** y **€30 ida y vuelta**. La tarifa se mantiene en €15 aunque ASR esté más lejos. Quien prefiera un vehículo exclusivo puede elegir Vito por €90 o Sprinter por €110 por trayecto y vehículo."
        ]
      },
      {
        "heading": "Qué tener preparado al aterrizar en ASR",
        "paragraphs": [
          "Al reservar, indica el número de vuelo y el nombre completo del hotel; después de recoger el equipaje, sigue las instrucciones de encuentro enviadas por WhatsApp. Los nombres y datos de pasaporte de los pasajeros son necesarios para cada reserva. El nombre completo del hotel permite identificar la ruta correcta después del encuentro en el aeropuerto, tanto si el alojamiento está en Goreme como en Urgup, Uchisar, Avanos, Ortahisar o Cavusin."
        ]
      },
      {
        "heading": "El tiempo desde ASR depende de la localidad del hotel",
        "paragraphs": [
          "El tiempo de viaje cambia según la localidad del alojamiento. Utiliza la distancia por carretera y la información de acceso correspondiente a tu hotel, en lugar de tratar todos los trayectos como si fueran Kayseri–Goreme."
        ]
      },
      {
        "heading": "El regreso a ASR tiene su propio plan de recogida",
        "paragraphs": [
          "La tarifa compartida de €15 también se aplica desde los hoteles incluidos hasta el Aeropuerto de Kayseri. El regreso no es simplemente el horario de llegada al revés: utiliza el vuelo de salida y la información de [[Capadocia al Aeropuerto de Kayseri|cappadocia-to-kayseri-airport-shuttle]], y ajusta la recogida a la localidad real de tu hotel."
        ]
      }
    ],
    "faq": [
      {
        "q": "¿Cuánto cuesta el shuttle del Aeropuerto de Kayseri a Capadocia?",
        "a": "€15 por persona y trayecto; ida y vuelta cuesta €30 por persona."
      },
      {
        "q": "¿Cuánto se tarda por carretera de ASR a Goreme?",
        "a": "Unos 75 km / 60–75 minutos antes de posibles paradas compartidas en hoteles."
      },
      {
        "q": "¿Cuáles son los precios privados desde Kayseri?",
        "a": "Vito €90 y Sprinter €110 por trayecto y vehículo."
      },
      {
        "q": "¿Qué localidades hoteleras cubre el servicio desde ASR?",
        "a": "Goreme, Urgup, Uchisar, Avanos, Cavusin y Ortahisar."
      },
      {
        "q": "¿Puedo reservar al mismo tiempo el shuttle de regreso a ASR?",
        "a": "Sí. Elige Ida y vuelta e introduce el vuelo de salida como un trayecto separado."
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
    "twitterTitle": "Shuttle del Aeropuerto de Kayseri a Capadocia",
    "twitterDescription": "Shuttle compartido por €15 por persona desde Kayseri (ASR) a Goreme, Urgup, Uchisar, Avanos, Cavusin y Ortahisar. Pago en efectivo al conductor."
  },
  {
    "slug": "nevsehir-airport-shuttle",
    "title": "Shuttle del Aeropuerto de Nevsehir a Capadocia | Hoteles y aeropuerto",
    "description": "Shuttle desde el Aeropuerto de Nevsehir (NAV) a hoteles de Capadocia: €15 por persona, pago al conductor, Goreme, Urgup, Uchisar, Avanos, Cavusin y Ortahisar.",
    "eyebrow": "Shuttle desde NAV",
    "h1": "Shuttle del Aeropuerto de Nevsehir a Capadocia",
    "lead": "Reserva el shuttle compartido de €15 por persona desde el Aeropuerto Nevsehir Kapadokya hasta alojamientos incluidos en Capadocia, con los detalles del encuentro coordinados según tu vuelo y confirmados por WhatsApp.",
    "sections": [
      {
        "heading": "Shuttle desde Nevsehir: la opción por carretera más corta para muchas zonas centrales",
        "paragraphs": [
          "NAV está más cerca por carretera de Goreme, Uchisar y varias zonas hoteleras del centro de Capadocia. Uchisar se encuentra a unos 35 km / 30–40 minutos y Goreme a unos 40 km / 35–45 minutos antes de posibles paradas compartidas, mientras que Urgup, Avanos, Ortahisar y Cavusin tienen sus propios tiempos de ruta."
        ]
      },
      {
        "heading": "El shuttle compartido desde NAV cuesta €15 por persona",
        "paragraphs": [
          "El shuttle compartido desde Nevsehir cuesta **€15 por persona y trayecto** y **€30 ida y vuelta**. Las tarifas privadas son más bajas que desde ASR: Vito €80 y Sprinter €90 por trayecto y vehículo."
        ]
      },
      {
        "heading": "Qué tener preparado al aterrizar en NAV",
        "paragraphs": [
          "Este servicio se reserva con antelación; no funciona como un autobús público con horario fijo, y los pasajeros pueden agruparse cuando sus vuelos y hoteles son compatibles. Al reservar, introduce el número de vuelo, el nombre completo del hotel, los datos de los pasajeros y un contacto de WhatsApp. Después de recoger el equipaje, sigue las instrucciones de encuentro confirmadas. Aunque la ruta sea más corta, el número de vuelo y el nombre exacto del alojamiento siguen siendo los datos que permiten asignarte al servicio compartido correcto."
        ]
      },
      {
        "heading": "La localidad del hotel sigue definiendo la ruta",
        "paragraphs": [
          "Que NAV esté cerca en términos generales no significa que todos los hoteles de Capadocia tengan el mismo acceso. Uchisar está especialmente cerca; Avanos y Urgup quedan algo más alejados, y las calles de hoteles cueva de Goreme o las vías de Ortahisar y Cavusin pueden cambiar el tramo final. Consulta los tiempos y las condiciones de acceso de la localidad real de tu hotel, no una estimación genérica de NAV a Capadocia."
        ]
      },
      {
        "heading": "El regreso a NAV depende de la localidad del hotel",
        "paragraphs": [
          "La tarifa compartida de regreso al Aeropuerto de Nevsehir es de €15 por persona. Utiliza el vuelo real de salida y la ruta correspondiente de [[Capadocia al Aeropuerto de Nevsehir|cappadocia-to-nevsehir-airport-shuttle]] para que una recogida en Goreme no se planifique igual que una en Uchisar, Avanos u otra zona hotelera."
        ]
      },
      {
        "heading": "Nevsehir Kapadokya Airport y NAV son el mismo aeropuerto",
        "paragraphs": [
          "En buscadores y documentos de viaje puedes encontrar los nombres **Nevsehir Kapadokya Airport**, **Kapadokya Airport** o **NAV Airport**. Para este servicio de traslado, todos se refieren al mismo aeropuerto que da servicio a Nevsehir y Capadocia. En la reserva selecciona NAV e introduce el número real de vuelo."
        ]
      }
    ],
    "faq": [
      {
        "q": "¿Cuánto cuesta el shuttle del Aeropuerto de Nevsehir a Capadocia?",
        "a": "€15 por persona y trayecto; ida y vuelta cuesta €30 por persona."
      },
      {
        "q": "¿NAV está más cerca de Goreme y Uchisar?",
        "a": "Sí. Por carretera, NAV suele estar más cerca de estas zonas centrales que ASR."
      },
      {
        "q": "¿Cuáles son los precios privados desde Nevsehir?",
        "a": "Vito €80 y Sprinter €90 por trayecto y vehículo."
      },
      {
        "q": "¿El shuttle de NAV funciona como un autobús público con horario fijo?",
        "a": "No. Es un servicio compartido de aeropuerto a hotel que se reserva con antelación y se organiza según los pasajeros y vuelos confirmados."
      },
      {
        "q": "¿El shuttle de NAV también puede recogerme en el hotel para el vuelo de salida?",
        "a": "Sí. Reserva Hotel → Aeropuerto o Ida y vuelta y sigue la hora de recogida confirmada."
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
    "twitterTitle": "Shuttle del Aeropuerto de Nevsehir a Capadocia",
    "twitterDescription": "Shuttle compartido por €15 por persona desde Nevsehir (NAV) a Goreme, Urgup, Uchisar, Avanos, Cavusin y Ortahisar. Pago en efectivo al conductor."
  },
  {
    "slug": "cappadocia-to-kayseri-airport-shuttle",
    "title": "Shuttle de Capadocia al Aeropuerto de Kayseri | Recogida en hotel",
    "description": "Shuttle desde hoteles de Capadocia al Aeropuerto de Kayseri (ASR): €15 por persona desde Goreme, Urgup, Uchisar, Avanos, Cavusin y Ortahisar.",
    "eyebrow": "Capadocia → ASR",
    "h1": "Shuttle de Capadocia al Aeropuerto de Kayseri",
    "lead": "Reserva el shuttle de €15 desde las localidades incluidas en Capadocia hasta el Aeropuerto de Kayseri Erkilet, con el punto y la hora de recogida confirmados según tu vuelo de salida.",
    "sections": [
      {
        "heading": "Para salir hacia ASR hay que planificar antes de lo que sugiere la distancia del mapa",
        "paragraphs": [
          "El Aeropuerto de Kayseri es la salida por carretera más larga para la mayoría de los hoteles del centro de Capadocia. La recogida confirmada se calcula a partir del vuelo real de salida, la localidad, otras recogidas compartidas y el margen necesario en el aeropuerto; no se obtiene simplemente invirtiendo el tiempo de la llegada."
        ]
      },
      {
        "heading": "Seis localidades hoteleras, seis comienzos diferentes hacia Kayseri",
        "paragraphs": [
          "El acceso al hotel cambia según la localidad y el alojamiento, especialmente en hoteles cueva, calles estrechas y direcciones de difícil acceso. El punto confirmado debe corresponder al alojamiento real, no a un punto genérico de la localidad."
        ]
      },
      {
        "heading": "Estate listo antes del horario confirmado de recogida hacia ASR",
        "paragraphs": [
          "Como la carretera a Kayseri es más larga, vuelve al punto confirmado con el equipaje preparado antes de que empiece la franja de recogida. No calcules la salida solo con el tiempo directo por carretera; el plan confirmado ya tiene en cuenta otras recogidas y el margen de llegada al aeropuerto."
        ]
      },
      {
        "heading": "Traslado privado a Kayseri para una salida exclusiva",
        "paragraphs": [
          "Un Vito [[privado|private-airport-transfer-cappadocia]] cuesta €90 por trayecto para hasta 5 pasajeros y un Sprinter €110 para hasta 16. El servicio privado evita las recogidas de otros hoteles, aunque el vehículo sigue necesitando un punto de recogida seguro y accesible junto al alojamiento."
        ]
      },
      {
        "heading": "Una última comprobación antes del trayecto más largo hacia ASR",
        "paragraphs": [
          "Antes de la recogida hacia Kayseri, termina el check-out, prepara el equipaje y comprueba el número de vuelo y el punto de encuentro. Un vehículo compartido puede recoger a otro hotel incluido antes de tomar la carretera principal, por lo que la hora confirmada debe considerarse el inicio de la franja de recogida y no una simple aproximación."
        ]
      }
    ],
    "faq": [
      {
        "q": "¿Cuánto cuesta el shuttle de Capadocia al Aeropuerto de Kayseri?",
        "a": "€15 por persona y trayecto."
      },
      {
        "q": "¿Por qué no debo calcular la recogida para ASR solo con el tiempo directo por carretera?",
        "a": "El trayecto más largo al aeropuerto, el acceso al hotel y otras recogidas compartidas forman parte del horario confirmado."
      },
      {
        "q": "¿Qué localidades pueden utilizar el shuttle compartido a ASR?",
        "a": "Goreme, Urgup, Uchisar, Avanos, Cavusin y Ortahisar."
      },
      {
        "q": "¿Puedo reservar un vehículo privado al Aeropuerto de Kayseri?",
        "a": "Sí. Vito €90 o Sprinter €110 por trayecto y vehículo."
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
    "twitterTitle": "Shuttle de Capadocia al Aeropuerto de Kayseri | Recogida en hotel",
    "twitterDescription": "Shuttle de hotel al aeropuerto por €15 desde Goreme, Urgup, Uchisar, Avanos, Cavusin y Ortahisar al Aeropuerto de Kayseri (ASR)."
  },
  {
    "slug": "cappadocia-to-nevsehir-airport-shuttle",
    "title": "Shuttle de Capadocia al Aeropuerto de Nevsehir | Recogida en hotel",
    "description": "Shuttle desde hoteles de Capadocia al Aeropuerto de Nevsehir (NAV): €15 por persona desde Goreme, Urgup, Uchisar, Avanos, Cavusin y Ortahisar.",
    "eyebrow": "Capadocia → NAV",
    "h1": "Shuttle de Capadocia al Aeropuerto de Nevsehir",
    "lead": "Reserva el shuttle de €15 desde las localidades incluidas en Capadocia hasta el Aeropuerto Nevsehir Kapadokya, con el punto y la hora de recogida confirmados según tu vuelo de salida.",
    "sections": [
      {
        "heading": "NAV está más cerca, pero la hora de recogida sigue dependiendo del vuelo",
        "paragraphs": [
          "El Aeropuerto de Nevsehir tiene una distancia por carretera menor desde muchas localidades del centro de Capadocia, pero eso no significa que debas calcular una recogida más tardía por tu cuenta. El servicio compartido se confirma según el vuelo real de salida, la ubicación del hotel y el plan de pasajeros del día."
        ]
      },
      {
        "heading": "La ruta corta a NAV cambia según la localidad del hotel",
        "paragraphs": [
          "Uchisar está especialmente cerca de NAV y Goreme también queda relativamente próximo, mientras que Urgup, Avanos, Ortahisar y Cavusin utilizan carreteras locales diferentes. La hora de recogida y el punto de encuentro accesible deben corresponder a la localidad real del hotel, no a una estimación general de “Capadocia a Nevsehir”."
        ]
      },
      {
        "heading": "Estate listo antes del horario confirmado de recogida hacia NAV",
        "paragraphs": [
          "NAV está cerca de muchas zonas centrales, pero la hora confirmada sigue incluyendo el acceso al hotel, las recogidas compartidas y el margen de llegada al aeropuerto. Ten el equipaje listo y espera en el punto confirmado antes de que empiece la franja de recogida."
        ]
      },
      {
        "heading": "El traslado privado a Nevsehir es la alternativa directa",
        "paragraphs": [
          "Un Vito [[privado|private-airport-transfer-cappadocia]] cuesta €80 por trayecto para hasta 5 pasajeros y un Sprinter €90 para hasta 16. Evita recogidas de otros hoteles, aunque el punto final de encuentro sigue dependiendo del acceso seguro del vehículo."
        ]
      },
      {
        "heading": "La menor distancia a NAV no significa una recogida más tardía",
        "paragraphs": [
          "Antes de la recogida hacia Nevsehir, ten el equipaje preparado y comprueba el número de vuelo y el punto de encuentro. Aunque el aeropuerto esté más cerca de muchas localidades, un vehículo compartido puede recoger a otro hotel, así que considera la hora confirmada como el inicio de la franja de recogida y no como una simple aproximación."
        ]
      }
    ],
    "faq": [
      {
        "q": "¿Cuánto cuesta el shuttle de Capadocia al Aeropuerto de Nevsehir?",
        "a": "€15 por persona y trayecto."
      },
      {
        "q": "¿Puedo salir más tarde solo porque NAV está más cerca?",
        "a": "No cambies la hora por tu cuenta. Utiliza la recogida confirmada según tu vuelo, hotel y servicio compartido."
      },
      {
        "q": "¿Qué localidades pueden utilizar el shuttle compartido a NAV?",
        "a": "Goreme, Urgup, Uchisar, Avanos, Cavusin y Ortahisar."
      },
      {
        "q": "¿Puedo reservar un vehículo privado al Aeropuerto de Nevsehir?",
        "a": "Sí. Vito €80 o Sprinter €90 por trayecto y vehículo."
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
    "twitterTitle": "Shuttle de Capadocia al Aeropuerto de Nevsehir | Recogida en hotel",
    "twitterDescription": "Shuttle de hotel al aeropuerto por €15 desde Goreme, Urgup, Uchisar, Avanos, Cavusin y Ortahisar al Aeropuerto de Nevsehir (NAV)."
  },
  {
    "slug": "goreme-airport-transfer",
    "title": "Traslado al Aeropuerto desde Goreme | Shuttle ASR y NAV",
    "description": "Traslado de Goreme desde los aeropuertos de Kayseri y Nevsehir. Shuttle €15, Vito/Sprinter privado, acceso al hotel, tiempos de ruta y recogida de regreso.",
    "eyebrow": "Guía de traslado en Goreme",
    "h1": "Traslado del aeropuerto a Goreme",
    "lead": "Compara Kayseri y Nevsehir para una estancia en Goreme y utiliza después la ruta de shuttle correspondiente al aeropuerto de tu vuelo.",
    "sections": [
      {
        "heading": "Planificar el traslado en Goreme empieza por las calles de los hoteles cueva",
        "paragraphs": [
          "Goreme es una de las principales zonas de alojamiento de Capadocia y concentra muchos hoteles cueva alrededor de un centro compacto. Esa comodidad también afecta al traslado: no todas las entradas están en calles anchas, por lo que el nombre completo del alojamiento es más útil que escribir simplemente “Goreme” en la reserva.",
          "Muchos hoteles de Goreme tienen nombres parecidos. Enviar el nombre exacto de la reserva ayuda a distinguir alojamientos que incluyen palabras como “cave”, “suite”, “house” o “stone”. Es especialmente útil cuando un alojamiento tiene más de una entrada o una recepción situada en una calle distinta del marcador del mapa."
        ]
      },
      {
        "heading": "Hoteles cueva, calles en pendiente y puntos de llegada accesibles",
        "paragraphs": [
          "El acceso a los hoteles de Goreme cambia de una calle a otra. Los alojamientos cercanos a la estación de autobuses y a la zona baja suelen ser más fáciles de alcanzar, mientras que algunos hoteles cueva de las laderas están en calles empinadas, estrechas o de sentido único. Si un vehículo grande no puede detenerse en la entrada, el shuttle puede utilizar el punto seguro más cercano. Un [[Vito privado|private-airport-transfer-cappadocia]] puede acceder mejor a algunas calles, pero el punto exacto siempre se confirma según la ubicación real del alojamiento y no se promete por adelantado."
        ]
      },
      {
        "heading": "ASR o NAV: qué aeropuerto conviene más para Goreme",
        "paragraphs": [
          "Del Aeropuerto de Kayseri (ASR) a Goreme hay aproximadamente **75 km / 60–75 min**. Desde el Aeropuerto de Nevsehir (NAV), unos **40 km / 35–45 min**. NAV suele ser más corto por carretera, pero un horario de vuelo más conveniente puede hacer que ASR sea mejor para el viaje completo. Si ambos vuelos encajan, compara [[Kayseri o Nevsehir para Capadocia|kayseri-or-nevsehir-airport-for-cappadocia]]."
        ]
      },
      {
        "heading": "Nombres de hoteles y alojamientos de Goreme que conviene indicar correctamente",
        "paragraphs": [
          "A continuación aparecen ejemplos de alojamientos conocidos de Goreme únicamente para facilitar la planificación del traslado; no es una clasificación de hoteles. Si tu hotel no figura en la lista, puedes solicitar el servicio siempre que esté dentro del área de Goreme incluida."
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
        "heading": "Cómo planificar la recogida en un hotel de Goreme para el vuelo de regreso",
        "paragraphs": [
          "El día de salida, vuelve al punto de recogida confirmado con el equipaje preparado antes de que empiece la franja de recogida. El tráfico al amanecer, el clima de invierno y el orden de las recogidas pueden afectar al horario, así que sigue la hora confirmada en lugar de calcularla solo a partir de la distancia del mapa.",
          "Para ASR utiliza [[Goreme al Aeropuerto de Kayseri|goreme-to-kayseri-airport-shuttle]]; para NAV, [[Goreme al Aeropuerto de Nevsehir|goreme-to-nevsehir-airport-shuttle]]."
        ]
      }
    ],
    "faq": [
      {
        "q": "¿El shuttle desde Kayseri y Nevsehir tiene el mismo precio para Goreme?",
        "a": "Sí. El shuttle compartido cuesta €15 por persona y trayecto desde ASR o NAV. Cambia la distancia por carretera, pero no la tarifa compartida."
      },
      {
        "q": "¿Puedo reservar en una sola solicitud la llegada al aeropuerto y la recogida en Goreme para el vuelo de regreso?",
        "a": "Sí. Elige Ida y vuelta e introduce los dos números de vuelo y las fechas para planificar por separado el encuentro de llegada y la recogida de salida."
      },
      {
        "q": "¿Tengo que elegir ASR o NAV antes de enviar el formulario de Goreme?",
        "a": "Sí. Selecciona el aeropuerto que figura en tu billete, porque de él dependen la tarifa privada, la distancia, el encuentro y la ruta de regreso."
      },
      {
        "q": "¿El shuttle puede llegar a la puerta de todos los hoteles cueva de Goreme?",
        "a": "No siempre. Algunas calles de las laderas son demasiado estrechas o inadecuadas para un vehículo grande, por lo que puede confirmarse por WhatsApp el punto seguro más cercano para encuentro o llegada."
      },
      {
        "q": "¿El tráfico de globos afecta a una recogida desde Goreme?",
        "a": "Puede hacerlo alrededor del amanecer. La actividad en carretera y las recogidas en hoteles son motivos para seguir la hora confirmada en lugar de calcularla únicamente con la distancia del mapa."
      },
      {
        "q": "¿Debo escribir el nombre del hotel o solo Goreme?",
        "a": "Introduce el nombre completo del hotel o alojamiento. Goreme tiene muchos hoteles cueva con nombres parecidos y la propiedad exacta es importante para planificar la ruta."
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
    "twitterTitle": "Traslado al Aeropuerto desde Goreme | Shuttle ASR y NAV",
    "twitterDescription": "Traslado de Goreme desde Kayseri y Nevsehir: shuttle €15, Vito/Sprinter privado, acceso al hotel y tiempos de ruta."
  },
  {
    "slug": "kayseri-airport-to-goreme-shuttle",
    "title": "Shuttle del Aeropuerto de Kayseri a Goreme | Compartido y privado",
    "description": "Aeropuerto de Kayseri (ASR) a Goreme: shuttle compartido, Vito/Sprinter privado, 75 km, 60–75 min, llegada al hotel y datos de reserva.",
    "eyebrow": "ASR → Goreme",
    "h1": "Shuttle del Aeropuerto de Kayseri a Goreme",
    "lead": "Viaja del Aeropuerto de Kayseri (ASR) a Goreme en shuttle compartido por €15 por persona y trayecto, o elige un Vito o Sprinter privado. La distancia habitual es de unos 75 km, con un tiempo de conducción aproximado de 60–75 minutos. Las calles de hoteles cueva de Goreme pueden afectar al punto final de llegada, por lo que es importante indicar el nombre completo del alojamiento.",
    "route": {
      "airport": "kayseri",
      "town": "goreme",
      "direction": "arrival"
    },
    "sections": [
      {
        "heading": "Qué significan los 75 km desde ASR antes de llegar a Goreme",
        "paragraphs": [
          "Kayseri es el más largo de los dos accesos habituales por aeropuerto a Goreme. La estimación publicada es de unos **75 km / 60–75 minutos**. Después de recoger el equipaje, la principal variable es cómo encaja el acceso final al hotel dentro del trayecto más largo desde ASR. Para una visión general del aeropuerto, consulta [[Shuttle desde el Aeropuerto de Kayseri|kayseri-airport-shuttle]]."
        ]
      },
      {
        "heading": "Los últimos minutos pueden ser más lentos que la carretera principal",
        "paragraphs": [
          "Goreme se vuelve compacto y empinado alrededor de muchas calles de hoteles cueva. El acceso final puede llevar tiempo incluso cuando el trayecto principal ha sido fluido. Indica el nombre del alojamiento exactamente como aparece en tu reserva para que el equipo pueda identificar la calle correcta o el punto de llegada accesible.",
          "Si tu vuelo aterriza tarde, lo más sencillo suele ser hacer el check-in y mantener flexible el resto del día. El trayecto desde ASR ya representa una parte importante del viaje."
        ]
      },
      {
        "heading": "Traslado privado para esta ruta",
        "paragraphs": [
          "¿Prefieres un vehículo exclusivo? El Vito privado cuesta €90 por trayecto para hasta 5 pasajeros y el Sprinter €110 para hasta 16. Consulta [[Traslado privado desde el Aeropuerto|private-airport-transfer-cappadocia]] para ver todos los detalles."
        ]
      },
      {
        "heading": "Si NAV sigue siendo una opción, compara el vuelo real y no solo la distancia",
        "paragraphs": [
          "El Aeropuerto de Nevsehir está más cerca de Goreme por carretera, pero un vuelo de ASR más conveniente puede hacer que el viaje completo resulte más fácil. Si aún no has comprado el billete, compara [[Shuttle del Aeropuerto de Nevsehir a Goreme|nevsehir-airport-to-goreme-shuttle]]. Para ver ambas opciones juntas, consulta [[Traslado del aeropuerto a Goreme|goreme-airport-transfer]]."
        ]
      }
    ],
    "faq": [
      {
        "q": "¿El Aeropuerto de Kayseri está demasiado lejos para ir en shuttle a Goreme?",
        "a": "No. ASR es una puerta de entrada habitual a Capadocia; Goreme está a unos 75 km y el tiempo por carretera suele ser de 60–75 minutos antes de posibles variaciones por paradas compartidas."
      },
      {
        "q": "¿Puedo reservar un vehículo privado para esta ruta en lugar del shuttle compartido?",
        "a": "Sí. Vito privado €90 por trayecto para hasta 5 pasajeros y Sprinter €110 para hasta 16, ambos por vehículo."
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
    "twitterTitle": "Shuttle del Aeropuerto de Kayseri a Goreme | Compartido y privado",
    "twitterDescription": "Kayseri (ASR) a Goreme: shuttle compartido €15 o Vito/Sprinter privado, 75 km, 60–75 min y llegada al hotel."
  },
  {
    "slug": "kayseri-airport-to-urgup-shuttle",
    "title": "Shuttle del Aeropuerto de Kayseri a Urgup | Compartido y privado",
    "description": "Aeropuerto de Kayseri (ASR) a Urgup: shuttle compartido, Vito/Sprinter privado, 70 km, 60–75 min, llegada al hotel y datos de reserva.",
    "eyebrow": "ASR → Urgup",
    "h1": "Shuttle del Aeropuerto de Kayseri a Urgup",
    "lead": "Viaja del Aeropuerto de Kayseri (ASR) a Urgup en shuttle compartido por €15 por persona y trayecto, o elige un Vito o Sprinter privado. La distancia habitual es de unos 70 km y el trayecto suele durar 60–75 minutos. El centro de Urgup suele ser fácil de alcanzar, aunque algunos hoteles de piedra y cueva en zonas elevadas pueden requerir un acceso final diferente.",
    "route": {
      "airport": "kayseri",
      "town": "urgup",
      "direction": "arrival"
    },
    "sections": [
      {
        "heading": "Kayseri a Urgup: unos 70 km / 60–75 minutos",
        "paragraphs": [
          "Urgup se encuentra al este de la zona central de Capadocia. La referencia habitual desde el Aeropuerto de Kayseri es de unos 70 km / 60–75 minutos. Si tu alojamiento está en Urgup, selecciónalo en la reserva para poder planificar correctamente el acceso final al hotel."
        ]
      },
      {
        "heading": "El centro de Urgup y los hoteles de piedra en las laderas tienen accesos distintos",
        "paragraphs": [
          "Buena parte de Urgup es accesible por calles urbanas normales, mientras que algunos alojamientos históricos de piedra y cueva están en pendientes o calles más pequeñas. El acceso final depende de la ubicación real del alojamiento; no existe un único punto de llegada para todos los hoteles de Urgup. Indica el nombre de la propiedad exactamente como figura en tu reserva para que el equipo pueda planificar el acceso correcto."
        ]
      },
      {
        "heading": "Traslado privado para esta ruta",
        "paragraphs": [
          "¿Prefieres un vehículo exclusivo? Vito privado €90 por trayecto para hasta 5 pasajeros y Sprinter €110 para hasta 16. Consulta [[Traslado privado desde el Aeropuerto|private-airport-transfer-cappadocia]] para todos los detalles. Si prefieres NAV, compara [[Shuttle del Aeropuerto de Nevsehir a Urgup|nevsehir-airport-to-urgup-shuttle]]."
        ]
      }
    ],
    "faq": [
      {
        "q": "¿El shuttle desde Kayseri llega al alojamiento en Urgup?",
        "a": "Da servicio a alojamientos confirmados dentro del área incluida de Urgup, siempre sujeto al acceso real por carretera de la propiedad."
      },
      {
        "q": "¿Cuánto se tarda de Kayseri Airport a Urgup?",
        "a": "La estimación habitual es de unos 70 km / 60–75 minutos antes de posibles variaciones por paradas compartidas."
      }
    ],
    "related": [
      "urgup-to-kayseri-airport-shuttle",
      "kayseri-airport-shuttle",
      "nevsehir-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Shuttle del Aeropuerto de Kayseri a Urgup | Compartido y privado",
    "twitterDescription": "Kayseri (ASR) a Urgup: shuttle €15 o Vito/Sprinter privado, 70 km, 60–75 min y llegada al hotel."
  },
  {
    "slug": "kayseri-airport-to-uchisar-shuttle",
    "title": "Shuttle del Aeropuerto de Kayseri a Uchisar | Compartido y privado",
    "description": "Aeropuerto de Kayseri (ASR) a Uchisar: shuttle compartido, Vito/Sprinter privado, 80 km, 70–85 min, llegada al hotel y reserva.",
    "eyebrow": "ASR → Uchisar",
    "h1": "Shuttle del Aeropuerto de Kayseri a Uchisar",
    "lead": "Viaja del Aeropuerto de Kayseri (ASR) a Uchisar en shuttle compartido por €15 por persona y trayecto, o elige un Vito o Sprinter privado. La distancia habitual es de unos 80 km y el trayecto suele durar 70–85 minutos. Las calles de Uchisar pueden ser empinadas o estrechas, por lo que el acceso final depende del hotel exacto y de las condiciones para el vehículo.",
    "route": {
      "airport": "kayseri",
      "town": "uchisar",
      "direction": "arrival"
    },
    "sections": [
      {
        "heading": "Kayseri a Uchisar: unos 80 km / 70–85 minutos",
        "paragraphs": [
          "Uchisar se encuentra en una zona elevada y muchos hoteles se distribuyen por calles en pendiente. La estimación habitual desde el Aeropuerto de Kayseri es de unos 80 km / 70–85 minutos. Selecciona Uchisar en la reserva para que se pueda planificar correctamente el acceso final al alojamiento."
        ]
      },
      {
        "heading": "Por qué el tramo final en Uchisar puede requerir más tiempo",
        "paragraphs": [
          "Muchas calles suben con bastante pendiente hacia la parte alta del pueblo y varios hoteles cueva y de piedra están en vías estrechas a las que un vehículo grande no siempre puede llegar directamente. El acceso final depende del alojamiento real; no hay un único punto de llegada para todos los hoteles de Uchisar. Indica el nombre exacto de la reserva para poder planificar el acceso o el punto accesible más cercano."
        ]
      },
      {
        "heading": "Traslado privado para esta ruta",
        "paragraphs": [
          "Vito privado €90 por trayecto para hasta 5 pasajeros y Sprinter €110 para hasta 16. Consulta [[Traslado privado desde el Aeropuerto|private-airport-transfer-cappadocia]]. Si prefieres NAV, compara [[Shuttle del Aeropuerto de Nevsehir a Uchisar|nevsehir-airport-to-uchisar-shuttle]]."
        ]
      }
    ],
    "faq": [
      {
        "q": "¿El shuttle desde Kayseri llega al alojamiento en Uchisar?",
        "a": "Da servicio a alojamientos confirmados dentro del área incluida de Uchisar, sujeto al acceso real por carretera de la propiedad."
      },
      {
        "q": "¿Cuánto se tarda de Kayseri Airport a Uchisar?",
        "a": "La estimación habitual es de unos 80 km / 70–85 minutos antes de posibles paradas compartidas."
      }
    ],
    "related": [
      "uchisar-to-kayseri-airport-shuttle",
      "kayseri-airport-shuttle",
      "nevsehir-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Shuttle del Aeropuerto de Kayseri a Uchisar | Compartido y privado",
    "twitterDescription": "Kayseri (ASR) a Uchisar: shuttle €15 o Vito/Sprinter privado, 80 km, 70–85 min y llegada al hotel."
  },
  {
    "slug": "kayseri-airport-to-avanos-shuttle",
    "title": "Shuttle del Aeropuerto de Kayseri a Avanos | Compartido y privado",
    "description": "Aeropuerto de Kayseri (ASR) a Avanos: shuttle compartido, Vito/Sprinter privado, 70 km, 60–75 min, llegada al hotel y reserva.",
    "eyebrow": "ASR → Avanos",
    "h1": "Shuttle del Aeropuerto de Kayseri a Avanos",
    "lead": "Viaja del Aeropuerto de Kayseri (ASR) a Avanos en shuttle compartido por €15 por persona y trayecto, o elige un Vito o Sprinter privado. La distancia habitual es de unos 70 km y el trayecto suele durar 60–75 minutos. Los alojamientos de Avanos están repartidos por una zona más amplia junto al río, por lo que el nombre completo del hotel ayuda a identificar la parada correcta.",
    "route": {
      "airport": "kayseri",
      "town": "avanos",
      "direction": "arrival"
    },
    "sections": [
      {
        "heading": "Avanos junto al río: unos 70 km / 60–75 minutos desde ASR",
        "paragraphs": [
          "Avanos se extiende a lo largo del río y tiene una red viaria más amplia y llana que varias localidades de las colinas cercanas. La estimación habitual desde el Aeropuerto de Kayseri es de unos 70 km / 60–75 minutos. Selecciona Avanos en la reserva para planificar correctamente el acceso final al hotel."
        ]
      },
      {
        "heading": "Avanos está más disperso que las localidades hoteleras de las laderas",
        "paragraphs": [
          "Los alojamientos de Avanos se reparten por una zona más extensa y por calles a ambos lados del río, en lugar de concentrarse en un único centro compacto. El nombre completo del alojamiento permite identificar la parada correcta en vez de planificar solo desde una ubicación genérica de “Avanos”."
        ]
      },
      {
        "heading": "Traslado privado para esta ruta",
        "paragraphs": [
          "Vito privado €90 por trayecto para hasta 5 pasajeros y Sprinter €110 para hasta 16. Consulta [[Traslado privado desde el Aeropuerto|private-airport-transfer-cappadocia]]. Si prefieres NAV, compara [[Shuttle del Aeropuerto de Nevsehir a Avanos|nevsehir-airport-to-avanos-shuttle]]."
        ]
      }
    ],
    "faq": [
      {
        "q": "¿El shuttle desde Kayseri llega al alojamiento en Avanos?",
        "a": "Sí, para alojamientos confirmados dentro del área incluida de Avanos, sujeto al acceso real por carretera."
      },
      {
        "q": "¿Cuánto se tarda de Kayseri Airport a Avanos?",
        "a": "La estimación habitual es de unos 70 km / 60–75 minutos antes de posibles paradas compartidas."
      }
    ],
    "related": [
      "avanos-to-kayseri-airport-shuttle",
      "kayseri-airport-shuttle",
      "nevsehir-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Shuttle del Aeropuerto de Kayseri a Avanos | Compartido y privado",
    "twitterDescription": "Kayseri (ASR) a Avanos: shuttle €15 o Vito/Sprinter privado, 70 km, 60–75 min y llegada al hotel."
  },
  {
    "slug": "kayseri-airport-to-ortahisar-shuttle",
    "title": "Shuttle del Aeropuerto de Kayseri a Ortahisar | Compartido y privado",
    "description": "Aeropuerto de Kayseri (ASR) a Ortahisar: shuttle compartido, Vito/Sprinter privado, 75 km, 60–75 min, llegada al hotel y reserva.",
    "eyebrow": "ASR → Ortahisar",
    "h1": "Shuttle del Aeropuerto de Kayseri a Ortahisar",
    "lead": "Viaja del Aeropuerto de Kayseri (ASR) a Ortahisar en shuttle compartido por €15 por persona y trayecto, o elige un Vito o Sprinter privado. La distancia habitual es de unos 75 km y el trayecto suele durar 60–75 minutos. Algunas calles se estrechan cerca del centro del pueblo, por lo que el acceso final se confirma según el alojamiento exacto y no solo por el nombre de Ortahisar.",
    "route": {
      "airport": "kayseri",
      "town": "ortahisar",
      "direction": "arrival"
    },
    "sections": [
      {
        "heading": "Ortahisar y sus calles compactas: unos 75 km / 60–75 minutos desde ASR",
        "paragraphs": [
          "Ortahisar es compacto y algunas calles de alojamiento se estrechan alrededor del centro. La estimación habitual desde el Aeropuerto de Kayseri es de unos 75 km / 60–75 minutos. Selecciona Ortahisar en la reserva para que se pueda planificar correctamente el acceso final."
        ]
      },
      {
        "heading": "Un pueblo pequeño también necesita el nombre exacto del alojamiento",
        "paragraphs": [
          "Que Ortahisar sea más pequeño no significa que todas las direcciones sean sencillas: algunas pensiones están en calles estrechas donde un vehículo grande puede tener que detenerse antes de la puerta. El nombre completo del alojamiento ayuda a identificar la parada correcta y, cuando sea necesario, el punto accesible más cercano."
        ]
      },
      {
        "heading": "Traslado privado para esta ruta",
        "paragraphs": [
          "Vito privado €90 por trayecto para hasta 5 pasajeros y Sprinter €110 para hasta 16. Consulta [[Traslado privado desde el Aeropuerto|private-airport-transfer-cappadocia]]. Si prefieres NAV, compara [[Shuttle del Aeropuerto de Nevsehir a Ortahisar|nevsehir-airport-to-ortahisar-shuttle]]."
        ]
      }
    ],
    "faq": [
      {
        "q": "¿El shuttle desde Kayseri llega al alojamiento en Ortahisar?",
        "a": "Sí, para alojamientos confirmados dentro del área incluida de Ortahisar, sujeto al acceso real por carretera."
      },
      {
        "q": "¿Cuánto se tarda de Kayseri Airport a Ortahisar?",
        "a": "La estimación habitual es de unos 75 km / 60–75 minutos antes de posibles paradas compartidas."
      }
    ],
    "related": [
      "ortahisar-to-kayseri-airport-shuttle",
      "kayseri-airport-shuttle",
      "nevsehir-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Shuttle del Aeropuerto de Kayseri a Ortahisar | Compartido y privado",
    "twitterDescription": "Kayseri (ASR) a Ortahisar: shuttle €15 o Vito/Sprinter privado, 75 km, 60–75 min y llegada al hotel."
  },
  {
    "slug": "kayseri-airport-to-cavusin-shuttle",
    "title": "Shuttle del Aeropuerto de Kayseri a Cavusin | Compartido y privado",
    "description": "Aeropuerto de Kayseri (ASR) a Cavusin: shuttle compartido, Vito/Sprinter privado, 75 km, 65–80 min, llegada al hotel y reserva.",
    "eyebrow": "ASR → Cavusin",
    "h1": "Shuttle del Aeropuerto de Kayseri a Cavusin",
    "lead": "Viaja del Aeropuerto de Kayseri (ASR) a Cavusin en shuttle compartido por €15 por persona y trayecto, o elige un Vito o Sprinter privado. La distancia habitual es de unos 75 km y el trayecto suele durar 65–80 minutos. Los alojamientos se reparten entre la carretera principal y calles antiguas de la ladera, por lo que la parada accesible depende del hotel exacto.",
    "route": {
      "airport": "kayseri",
      "town": "cavusin",
      "direction": "arrival"
    },
    "sections": [
      {
        "heading": "Cavusin combina zonas antiguas y nuevas: unos 75 km / 65–80 minutos desde ASR",
        "paragraphs": [
          "Cavusin tiene pensiones en antiguas calles de la ladera y alojamientos más nuevos junto a la carretera principal, por lo que el acceso final puede variar bastante según la propiedad. La estimación habitual desde Kayseri es de unos 75 km / 65–80 minutos. Selecciona Cavusin en la reserva para planificar correctamente la llegada al hotel."
        ]
      },
      {
        "heading": "Por qué importa el nombre exacto del alojamiento en Cavusin",
        "paragraphs": [
          "Los alojamientos se distribuyen entre calles antiguas de la ladera y zonas nuevas junto a la carretera. Una ubicación genérica de “Cavusin” no basta para el tramo final; el nombre completo ayuda a identificar la parte correcta del pueblo y el punto de parada accesible."
        ]
      },
      {
        "heading": "Traslado privado para esta ruta",
        "paragraphs": [
          "Vito privado €90 por trayecto para hasta 5 pasajeros y Sprinter €110 para hasta 16. Consulta [[Traslado privado desde el Aeropuerto|private-airport-transfer-cappadocia]]. Si prefieres NAV, compara [[Shuttle del Aeropuerto de Nevsehir a Cavusin|nevsehir-airport-to-cavusin-shuttle]]."
        ]
      }
    ],
    "faq": [
      {
        "q": "¿El shuttle desde Kayseri da servicio a hoteles de Cavusin?",
        "a": "Sí, a alojamientos confirmados en Cavusin, aunque el punto exacto de llegada depende del acceso disponible para el vehículo."
      },
      {
        "q": "¿Cuánto se tarda de Kayseri Airport a Cavusin?",
        "a": "La estimación habitual es de unos 75 km / 65–80 minutos antes de posibles paradas compartidas."
      }
    ],
    "related": [
      "cavusin-to-kayseri-airport-shuttle",
      "kayseri-airport-shuttle",
      "nevsehir-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Shuttle del Aeropuerto de Kayseri a Cavusin | Compartido y privado",
    "twitterDescription": "Kayseri (ASR) a Cavusin: shuttle €15 o Vito/Sprinter privado, 75 km, 65–80 min y llegada al hotel."
  },
  {
    "slug": "nevsehir-airport-to-goreme-shuttle",
    "title": "Shuttle del Aeropuerto de Nevsehir a Goreme | Compartido y privado",
    "description": "Aeropuerto de Nevsehir (NAV) a Goreme: shuttle compartido, Vito/Sprinter privado, 40 km, 35–45 min, llegada al hotel y reserva.",
    "eyebrow": "NAV → Goreme",
    "h1": "Shuttle del Aeropuerto de Nevsehir a Goreme",
    "lead": "Viaja del Aeropuerto de Nevsehir (NAV) a Goreme en shuttle compartido por €15 por persona y trayecto, o elige un Vito o Sprinter privado. La distancia habitual es de unos 40 km y el trayecto suele durar 35–45 minutos. Las calles de hoteles cueva pueden afectar al punto final de llegada, por lo que es importante indicar el nombre completo del alojamiento.",
    "route": {
      "airport": "nevsehir",
      "town": "goreme",
      "direction": "arrival"
    },
    "sections": [
      {
        "heading": "NAV es la opción por carretera más corta para Goreme",
        "paragraphs": [
          "La estimación habitual del Aeropuerto de Nevsehir a Goreme es de unos 40 km / 35–45 minutos. La menor distancia puede hacer más sencillo el tramo del aeropuerto al hotel después de aterrizar, pero no convierte todas las entradas de los hoteles cueva en paradas fáciles junto a la carretera."
        ]
      },
      {
        "heading": "Una carretera de aeropuerto más corta no elimina el acceso final al hotel",
        "paragraphs": [
          "NAV está más cerca de Goreme, pero los últimos minutos siguen dependiendo del alojamiento real. Algunos hoteles cueva en las laderas requieren una aproximación más lenta o un punto accesible cercano, así que el nombre completo del alojamiento sigue siendo importante incluso desde NAV.",
          "Para comparar ambos aeropuertos, consulta [[Traslado del aeropuerto a Goreme|goreme-airport-transfer]]. Si ASR ofrece el vuelo más conveniente, [[Shuttle del Aeropuerto de Kayseri a Goreme|kayseri-airport-to-goreme-shuttle]] sigue siendo una alternativa práctica."
        ]
      },
      {
        "heading": "Traslado privado para esta ruta",
        "paragraphs": [
          "Vito privado €80 por trayecto para hasta 5 pasajeros y Sprinter €90 para hasta 16. Consulta [[Traslado privado desde el Aeropuerto|private-airport-transfer-cappadocia]] para todos los detalles."
        ]
      }
    ],
    "faq": [
      {
        "q": "¿Nevsehir es el aeropuerto más cercano a Goreme?",
        "a": "Sí. NAV está a unos 40 km de Goreme, frente a aproximadamente 75 km desde ASR."
      },
      {
        "q": "¿La carretera más corta desde NAV garantiza llegar a la puerta del hotel?",
        "a": "No. El acceso por las calles de hoteles cueva es una cuestión local independiente de la distancia al aeropuerto."
      },
      {
        "q": "¿Puedo reservar un vehículo privado en lugar del shuttle compartido?",
        "a": "Sí. Vito €80 por trayecto para hasta 5 pasajeros y Sprinter €90 para hasta 16, ambos por vehículo."
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
    "twitterTitle": "Shuttle del Aeropuerto de Nevsehir a Goreme | Compartido y privado",
    "twitterDescription": "Nevsehir (NAV) a Goreme: shuttle €15 o Vito/Sprinter privado, 40 km, 35–45 min y llegada al hotel."
  },
  {
    "slug": "nevsehir-airport-to-urgup-shuttle",
    "title": "Shuttle del Aeropuerto de Nevsehir a Urgup | Compartido y privado",
    "description": "Aeropuerto de Nevsehir (NAV) a Urgup: shuttle compartido, Vito/Sprinter privado, 50 km, 45–60 min, llegada al hotel y reserva.",
    "eyebrow": "NAV → Urgup",
    "h1": "Shuttle del Aeropuerto de Nevsehir a Urgup",
    "lead": "Viaja del Aeropuerto de Nevsehir (NAV) a Urgup en shuttle compartido por €15 por persona y trayecto, o elige un Vito o Sprinter privado. La distancia habitual es de unos 50 km y el trayecto suele durar 45–60 minutos. El centro de Urgup suele ser accesible, aunque algunos hoteles de piedra y cueva en laderas pueden requerir un acceso distinto.",
    "route": {
      "airport": "nevsehir",
      "town": "urgup",
      "direction": "arrival"
    },
    "sections": [
      {
        "heading": "NAV acorta el trayecto regional, pero Urgup está más al este que Goreme o Uchisar",
        "paragraphs": [
          "Del Aeropuerto de Nevsehir a Urgup hay unos **50 km / 45–60 minutos**. La ruta atraviesa la zona central de Capadocia hasta una localidad con una red viaria más amplia y alojamientos más dispersos que los de un pueblo compacto."
        ]
      },
      {
        "heading": "Shuttle para ahorrar, vehículo privado para un trayecto exclusivo",
        "paragraphs": [
          "Para una o dos personas, el shuttle mantiene bajo el coste. Un Vito privado cuesta €80 por trayecto para hasta 5 pasajeros y un Sprinter privado €90 para hasta 16. Consulta [[Traslado privado desde el Aeropuerto|private-airport-transfer-cappadocia]] o compara ambas opciones en [[Shuttle compartido frente a traslado privado|cappadocia-shared-shuttle-vs-private-transfer]]."
        ]
      }
    ],
    "faq": [
      {
        "q": "¿Cuánto se tarda de Nevsehir Airport a Urgup?",
        "a": "La estimación habitual es de unos 50 km / 45–60 minutos antes de posibles paradas compartidas."
      },
      {
        "q": "¿Puedo reservar un vehículo privado en lugar del shuttle compartido?",
        "a": "Sí. Vito €80 por trayecto para hasta 5 pasajeros y Sprinter €90 para hasta 16, ambos por vehículo."
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
    "twitterTitle": "Shuttle del Aeropuerto de Nevsehir a Urgup | Compartido y privado",
    "twitterDescription": "Nevsehir (NAV) a Urgup: shuttle €15 o Vito/Sprinter privado, 50 km, 45–60 min y traslado al hotel."
  },
  {
    "slug": "nevsehir-airport-to-uchisar-shuttle",
    "title": "Shuttle del Aeropuerto de Nevsehir a Uchisar | Compartido y privado",
    "description": "Aeropuerto de Nevsehir (NAV) a Uchisar: shuttle compartido, Vito/Sprinter privado, 35 km, 30–40 min, llegada al hotel y reserva.",
    "eyebrow": "NAV → Uchisar",
    "h1": "Shuttle del Aeropuerto de Nevsehir a Uchisar",
    "lead": "Viaja del Aeropuerto de Nevsehir (NAV) a Uchisar en shuttle compartido por €15 por persona y trayecto, o elige un Vito o Sprinter privado. La distancia habitual es de unos 35 km y el trayecto suele durar 30–40 minutos. Las calles de Uchisar pueden ser empinadas o estrechas, por lo que el acceso final depende del alojamiento exacto.",
    "route": {
      "airport": "nevsehir",
      "town": "uchisar",
      "direction": "arrival"
    },
    "sections": [
      {
        "heading": "Nevsehir a Uchisar: unos 35 km / 30–40 minutos",
        "paragraphs": [
          "El aeropuerto y la localidad están separados por unos 35 km, con una estimación habitual de 30–40 minutos. Incluso en esta ruta corta, el acceso final a hoteles de la ladera puede añadir tiempo según la ubicación y las condiciones de la calle."
        ]
      },
      {
        "heading": "Una ruta corta también necesita el nombre completo del alojamiento",
        "paragraphs": [
          "Las calles de Uchisar se estrechan y suben hacia la parte alta, por lo que la corta distancia desde el aeropuerto no elimina la necesidad de planificar bien el último tramo. El nombre completo ayuda a identificar la parada correcta o el punto accesible más cercano.",
          "¿Llegas por ASR? Consulta [[Shuttle del Aeropuerto de Kayseri a Uchisar|kayseri-airport-to-uchisar-shuttle]]."
        ]
      },
      {
        "heading": "Traslado privado para esta ruta",
        "paragraphs": [
          "Vito privado €80 por trayecto para hasta 5 pasajeros y Sprinter €90 para hasta 16. Consulta [[Traslado privado desde el Aeropuerto|private-airport-transfer-cappadocia]]."
        ]
      }
    ],
    "faq": [
      {
        "q": "¿Cuánto se tarda por carretera de Nevsehir Airport a Uchisar?",
        "a": "La estimación habitual es de unos 35 km / 30–40 minutos antes de posibles paradas compartidas o del acceso final al hotel."
      },
      {
        "q": "¿Puedo reservar un vehículo privado en lugar del shuttle compartido?",
        "a": "Sí. Vito €80 por trayecto para hasta 5 pasajeros y Sprinter €90 para hasta 16, ambos por vehículo."
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
    "twitterTitle": "Shuttle del Aeropuerto de Nevsehir a Uchisar | Compartido y privado",
    "twitterDescription": "Nevsehir (NAV) a Uchisar: shuttle €15 o Vito/Sprinter privado, 35 km, 30–40 min y traslado al hotel."
  },
  {
    "slug": "nevsehir-airport-to-avanos-shuttle",
    "title": "Shuttle del Aeropuerto de Nevsehir a Avanos | Compartido y privado",
    "description": "Aeropuerto de Nevsehir (NAV) a Avanos: shuttle compartido, Vito/Sprinter privado, 38 km, 35–50 min, llegada al hotel y reserva.",
    "eyebrow": "NAV → Avanos",
    "h1": "Shuttle del Aeropuerto de Nevsehir a Avanos",
    "lead": "Viaja del Aeropuerto de Nevsehir (NAV) a Avanos en shuttle compartido por €15 por persona y trayecto, o elige un Vito o Sprinter privado. La distancia habitual es de unos 38 km y el trayecto suele durar 35–50 minutos. Los alojamientos están repartidos por una zona amplia junto al río, por lo que conviene indicar el nombre completo del hotel.",
    "route": {
      "airport": "nevsehir",
      "town": "avanos",
      "direction": "arrival"
    },
    "sections": [
      {
        "heading": "Nevsehir a Avanos: unos 38 km / 35–50 minutos",
        "paragraphs": [
          "La estimación habitual desde el Aeropuerto de Nevsehir a Avanos es de unos 38 km / 35–50 minutos. Los alojamientos se reparten por diferentes partes de la localidad, así que el nombre completo permite identificar la parada correcta en lugar de depender de una ubicación genérica de “Avanos”."
        ]
      },
      {
        "heading": "Traslado privado para esta ruta",
        "paragraphs": [
          "Vito privado €80 por trayecto para hasta 5 pasajeros y Sprinter €90 para hasta 16. Consulta [[Traslado privado desde el Aeropuerto|private-airport-transfer-cappadocia]] para todos los detalles."
        ]
      }
    ],
    "faq": [
      {
        "q": "¿Avanos está cerca del Aeropuerto de Nevsehir?",
        "a": "La estimación habitual es de unos 38 km / 35–50 minutos."
      },
      {
        "q": "¿Puedo reservar un vehículo privado en lugar del shuttle compartido?",
        "a": "Sí. Vito €80 por trayecto para hasta 5 pasajeros y Sprinter €90 para hasta 16, ambos por vehículo."
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
    "twitterTitle": "Shuttle del Aeropuerto de Nevsehir a Avanos | Compartido y privado",
    "twitterDescription": "Nevsehir (NAV) a Avanos: shuttle €15 o Vito/Sprinter privado, 38 km, 35–50 min y traslado al hotel."
  },
  {
    "slug": "nevsehir-airport-to-ortahisar-shuttle",
    "title": "Shuttle del Aeropuerto de Nevsehir a Ortahisar | Compartido y privado",
    "description": "Aeropuerto de Nevsehir (NAV) a Ortahisar: shuttle compartido, Vito/Sprinter privado, 45 km, 40–50 min, llegada al hotel y reserva.",
    "eyebrow": "NAV → Ortahisar",
    "h1": "Shuttle del Aeropuerto de Nevsehir a Ortahisar",
    "lead": "Viaja del Aeropuerto de Nevsehir (NAV) a Ortahisar en shuttle compartido por €15 por persona y trayecto, o elige un Vito o Sprinter privado. La distancia habitual es de unos 45 km y el trayecto suele durar 40–50 minutos. Algunas calles se estrechan cerca del centro, por lo que el acceso final se confirma según el alojamiento exacto.",
    "route": {
      "airport": "nevsehir",
      "town": "ortahisar",
      "direction": "arrival"
    },
    "sections": [
      {
        "heading": "Nevsehir a Ortahisar: unos 45 km / 40–50 minutos",
        "paragraphs": [
          "La estimación habitual desde el Aeropuerto de Nevsehir a Ortahisar es de unos 45 km / 40–50 minutos. Los últimos minutos alrededor del pueblo pueden variar según la calle del alojamiento y el acceso disponible para el vehículo."
        ]
      },
      {
        "heading": "Por qué importa el nombre completo del alojamiento en Ortahisar",
        "paragraphs": [
          "Ortahisar es compacto y algunas calles se estrechan alrededor del centro. El nombre completo del alojamiento ayuda a identificar el punto correcto; una ubicación que diga solo “Ortahisar” no es suficientemente precisa para el acceso al hotel.",
          "¿Más adelante sales por NAV? Consulta [[Ortahisar al Aeropuerto de Nevsehir|ortahisar-to-nevsehir-airport-shuttle]] para el regreso."
        ]
      },
      {
        "heading": "Traslado privado para esta ruta",
        "paragraphs": [
          "Vito privado €80 por trayecto para hasta 5 pasajeros y Sprinter €90 para hasta 16. Consulta [[Traslado privado desde el Aeropuerto|private-airport-transfer-cappadocia]]."
        ]
      }
    ],
    "faq": [
      {
        "q": "¿Ortahisar está en la ruta de shuttle compartido desde NAV?",
        "a": "Sí. Hay shuttle compartido desde Nevsehir (NAV) para alojamientos en Ortahisar."
      },
      {
        "q": "¿Puedo reservar un vehículo privado en lugar del shuttle compartido?",
        "a": "Sí. Vito €80 por trayecto para hasta 5 pasajeros y Sprinter €90 para hasta 16, ambos por vehículo."
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
    "twitterTitle": "Shuttle del Aeropuerto de Nevsehir a Ortahisar | Compartido y privado",
    "twitterDescription": "Nevsehir (NAV) a Ortahisar desde €15 por persona. Vito y Sprinter privados disponibles. Unos 45 km / 40–50 minutos."
  },
  {
    "slug": "nevsehir-airport-to-cavusin-shuttle",
    "title": "Shuttle del Aeropuerto de Nevsehir a Cavusin | Compartido y privado",
    "description": "Aeropuerto de Nevsehir (NAV) a Cavusin: shuttle compartido, Vito/Sprinter privado, 42 km, 40–55 min, llegada al hotel y reserva.",
    "eyebrow": "NAV → Cavusin",
    "h1": "Shuttle del Aeropuerto de Nevsehir a Cavusin",
    "lead": "Viaja del Aeropuerto de Nevsehir (NAV) a Cavusin en shuttle compartido por €15 por persona y trayecto, o elige un Vito o Sprinter privado. La distancia habitual es de unos 42 km y el trayecto suele durar 40–55 minutos. Los alojamientos de Cavusin se reparten entre la carretera principal y calles antiguas de la ladera, por lo que la parada accesible depende del hotel exacto.",
    "route": {
      "airport": "nevsehir",
      "town": "cavusin",
      "direction": "arrival"
    },
    "sections": [
      {
        "heading": "Nevsehir a Cavusin: unos 42 km / 40–55 minutos",
        "paragraphs": [
          "La estimación habitual desde el Aeropuerto de Nevsehir a Cavusin es de unos 42 km / 40–55 minutos. Los alojamientos pueden estar junto a la carretera principal, cerca del asentamiento antiguo o hacia los accesos de los valles, por lo que el nombre completo es importante para planificar la parada final correcta."
        ]
      },
      {
        "heading": "El tráfico de primera hora puede afectar al acceso final",
        "paragraphs": [
          "A primera hora, el tráfico relacionado con los valles y las zonas de despegue de globos puede afectar al último tramo hacia Cavusin, aunque la distancia total desde NAV sea corta."
        ]
      },
      {
        "heading": "ASR sigue siendo una alternativa si el vuelo encaja mejor",
        "paragraphs": [
          "La opción más larga es [[Shuttle del Aeropuerto de Kayseri a Cavusin|kayseri-airport-to-cavusin-shuttle]]. Como la tarifa compartida es la misma desde ambos aeropuertos, la comodidad del vuelo puede ser más importante que escoger la carretera más corta."
        ]
      },
      {
        "heading": "Traslado privado para esta ruta",
        "paragraphs": [
          "Vito privado €80 por trayecto para hasta 5 pasajeros y Sprinter €90 para hasta 16. Consulta [[Traslado privado desde el Aeropuerto|private-airport-transfer-cappadocia]] para todos los detalles."
        ]
      }
    ],
    "faq": [
      {
        "q": "¿Cavusin es un destino de shuttle separado de Goreme?",
        "a": "Sí. Cavusin y Goreme son zonas de recogida y llegada distintas, por lo que necesitamos el nombre completo del alojamiento para identificar la parada correcta."
      },
      {
        "q": "¿Puedo reservar un vehículo privado en lugar del shuttle compartido?",
        "a": "Sí. Vito €80 por trayecto para hasta 5 pasajeros y Sprinter €90 para hasta 16, ambos por vehículo."
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
    "twitterTitle": "Shuttle del Aeropuerto de Nevsehir a Cavusin | Compartido y privado",
    "twitterDescription": "Nevsehir (NAV) a Cavusin desde €15 por persona. Vito y Sprinter privados disponibles. Unos 42 km / 40–55 minutos."
  },
  {
    "slug": "goreme-to-kayseri-airport-shuttle",
    "title": "Shuttle de Goreme al Aeropuerto de Kayseri | Recogida en hotel",
    "description": "Recogida en hotel de Goreme al Aeropuerto de Kayseri (ASR) en shuttle compartido o traslado privado; unos 75 km y 60–75 min.",
    "eyebrow": "Goreme → ASR",
    "h1": "Shuttle de Goreme al Aeropuerto de Kayseri",
    "lead": "La recogida en hotel desde Goreme al Aeropuerto de Kayseri (ASR) está disponible en shuttle compartido por €15 por persona o en Vito/Sprinter privado. La distancia habitual es de unos 75 km y el trayecto suele durar 60–75 minutos. Las calles de hoteles cueva y laderas de Goreme pueden añadir tiempo local antes de llegar a la carretera principal. Sigue la hora confirmada, que también contempla otras recogidas y el margen de llegada al aeropuerto.",
    "route": {
      "airport": "kayseri",
      "town": "goreme",
      "direction": "return"
    },
    "sections": [
      {
        "heading": "La salida hacia ASR necesita un margen real desde Goreme",
        "paragraphs": [
          "De Goreme al Aeropuerto de Kayseri hay unos 75 km / 60–75 minutos por carretera. La hora confirmada también contempla recogidas compartidas y el margen necesario antes del vuelo, por lo que puede ser anterior a lo que sugiere únicamente el tiempo de conducción."
        ]
      },
      {
        "heading": "Por qué puede variar la hora de recogida en Goreme",
        "paragraphs": [
          "Las recogidas compartidas en distintos hoteles de Goreme pueden añadir tiempo antes de alcanzar la carretera principal, especialmente cuando hay varias programadas. Sigue la hora enviada para tu reserva en vez de calcular la salida solo con el trayecto por carretera. Las mañanas de globos también pueden añadir tráfico local.",
          "¿Vuelas desde NAV? Consulta [[Goreme al Aeropuerto de Nevsehir|goreme-to-nevsehir-airport-shuttle]]. Para comparar ambos aeropuertos, consulta [[Traslado del aeropuerto a Goreme|goreme-airport-transfer]]."
        ]
      },
      {
        "heading": "Traslado privado para esta ruta",
        "paragraphs": [
          "Vito privado €90 por trayecto para hasta 5 pasajeros y Sprinter €110 para hasta 16. Consulta [[Traslado privado desde el Aeropuerto|private-airport-transfer-cappadocia]]."
        ]
      }
    ],
    "faq": [
      {
        "q": "¿Por qué la recogida en Goreme puede ser anterior a lo que sugieren los 60–75 minutos por carretera?",
        "a": "Una salida compartida puede incluir tiempo para otras recogidas en hoteles y el margen de llegada necesario antes del vuelo."
      },
      {
        "q": "¿Puedo reservar un vehículo privado en lugar del shuttle compartido?",
        "a": "Sí. Vito €90 por trayecto para hasta 5 pasajeros y Sprinter €110 para hasta 16, ambos por vehículo."
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
    "twitterTitle": "Shuttle de Goreme al Aeropuerto de Kayseri | Recogida en hotel",
    "twitterDescription": "Shuttle de hotel en Goreme a Kayseri (ASR) desde €15 por persona. Vito y Sprinter privados disponibles. Unos 75 km / 60–75 minutos."
  },
  {
    "slug": "urgup-to-kayseri-airport-shuttle",
    "title": "Shuttle de Urgup al Aeropuerto de Kayseri | Recogida en hotel",
    "description": "Recogida en hotel de Urgup al Aeropuerto de Kayseri (ASR) en shuttle compartido o privado; unos 70 km y 60–75 min.",
    "eyebrow": "Urgup → ASR",
    "h1": "Shuttle de Urgup al Aeropuerto de Kayseri",
    "lead": "La recogida desde Urgup al Aeropuerto de Kayseri (ASR) está disponible en shuttle compartido por €15 por persona o en Vito/Sprinter privado. La distancia habitual es de unos 70 km y el trayecto suele durar 60–75 minutos. Los alojamientos de Urgup se reparten entre el centro y zonas en pendiente, así que el punto confirmado importa antes de iniciar la carretera al aeropuerto. Sigue la hora confirmada, que contempla también otras recogidas y el margen de llegada.",
    "route": {
      "airport": "kayseri",
      "town": "urgup",
      "direction": "return"
    },
    "sections": [
      {
        "heading": "Por qué importa el punto de recogida en Urgup",
        "paragraphs": [
          "Los alojamientos de Urgup se distribuyen entre calles centrales y barrios en pendiente, por lo que la propia recogida puede añadir tiempo antes de llegar a la carretera principal. Estate listo en el punto confirmado y no des por hecho que el vehículo puede entrar en todas las calles antiguas."
        ]
      },
      {
        "heading": "Urgup a Kayseri: unos 70 km / 60–75 minutos",
        "paragraphs": [
          "La estimación por carretera es de unos 70 km / 60–75 minutos. Sigue la hora de recogida confirmada en vez de calcular tu propia salida únicamente desde la distancia.",
          "Para el sentido de llegada, consulta [[Kayseri a Urgup|kayseri-airport-to-urgup-shuttle]]. ¿Vuelas desde NAV? Consulta [[Urgup al Aeropuerto de Nevsehir|urgup-to-nevsehir-airport-shuttle]]."
        ]
      },
      {
        "heading": "El centro y las propiedades en laderas tienen accesos distintos",
        "paragraphs": [
          "Los hoteles céntricos suelen tener un acceso sencillo. Algunas propiedades de piedra y en pendientes pueden necesitar unos minutos extra para que el vehículo llegue al punto confirmado, por lo que conviene tener el equipaje listo con antelación en salidas tempranas."
        ]
      },
      {
        "heading": "Traslado privado para esta ruta",
        "paragraphs": [
          "Vito privado €90 por trayecto para hasta 5 pasajeros y Sprinter €110 para hasta 16. Consulta [[Traslado privado desde el Aeropuerto|private-airport-transfer-cappadocia]]."
        ]
      }
    ],
    "faq": [
      {
        "q": "¿El shuttle compartido puede recogerme en un hotel cueva de Urgup para ir a ASR?",
        "a": "Sí, sujeto al punto de acceso para vehículos confirmado para ese alojamiento."
      },
      {
        "q": "¿Puedo reservar un vehículo privado en lugar del shuttle compartido?",
        "a": "Sí. Vito €90 por trayecto para hasta 5 pasajeros y Sprinter €110 para hasta 16, ambos por vehículo."
      }
    ],
    "related": [
      "kayseri-airport-to-urgup-shuttle",
      "kayseri-airport-shuttle",
      "cappadocia-to-kayseri-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Shuttle de Urgup al Aeropuerto de Kayseri | Recogida en hotel",
    "twitterDescription": "Shuttle de hotel en Urgup a Kayseri (ASR) desde €15 por persona. Vito y Sprinter privados disponibles. Unos 70 km / 60–75 minutos."
  },
  {
    "slug": "uchisar-to-kayseri-airport-shuttle",
    "title": "Shuttle de Uchisar al Aeropuerto de Kayseri | Recogida en hotel",
    "description": "Recogida en hotel de Uchisar al Aeropuerto de Kayseri (ASR) en shuttle compartido o privado; unos 80 km y 70–85 min.",
    "eyebrow": "Uchisar → ASR",
    "h1": "Shuttle de Uchisar al Aeropuerto de Kayseri",
    "lead": "La recogida desde Uchisar al Aeropuerto de Kayseri (ASR) está disponible en shuttle compartido por €15 por persona o en Vito/Sprinter privado. La distancia habitual es de unos 80 km y el trayecto suele durar 70–85 minutos. Las calles empinadas de la parte alta pueden requerir un punto de recogida accesible en vez de acceso directo a todas las puertas. Sigue la hora confirmada, que contempla otras recogidas y el margen del aeropuerto.",
    "route": {
      "airport": "kayseri",
      "town": "uchisar",
      "direction": "return"
    },
    "sections": [
      {
        "heading": "Uchisar a Kayseri: unos 80 km / 70–85 minutos",
        "paragraphs": [
          "La estimación habitual de Uchisar al Aeropuerto de Kayseri es de unos 80 km / 70–85 minutos. Como el trayecto es relativamente largo, es importante respetar la hora de recogida confirmada."
        ]
      },
      {
        "heading": "Por qué importa el punto de recogida en Uchisar",
        "paragraphs": [
          "Las calles se estrechan y suben hacia la parte alta del pueblo, por lo que el vehículo puede necesitar un punto alternativo en vez de llegar directamente a todas las puertas. Estate listo allí antes de que empiece la franja de recogida, ya que el trayecto más largo a ASR deja menos margen para recuperar un retraso.",
          "¿Vuelas desde NAV? Consulta [[Uchisar al Aeropuerto de Nevsehir|uchisar-to-nevsehir-airport-shuttle]]."
        ]
      },
      {
        "heading": "Traslado privado para esta ruta",
        "paragraphs": [
          "Vito privado €90 por trayecto para hasta 5 pasajeros y Sprinter €110 para hasta 16. Consulta [[Traslado privado desde el Aeropuerto|private-airport-transfer-cappadocia]]."
        ]
      }
    ],
    "faq": [
      {
        "q": "¿Cuánto se tarda por carretera de Uchisar al Aeropuerto de Kayseri?",
        "a": "La estimación habitual es de unos 80 km / 70–85 minutos."
      },
      {
        "q": "¿Qué ocurre si mi hotel está en una calle empinada de Uchisar?",
        "a": "Sigue el punto de recogida confirmado y espera allí con el equipaje antes de que empiece la franja de recogida."
      },
      {
        "q": "¿Puedo reservar un vehículo privado en lugar del shuttle compartido?",
        "a": "Sí. Vito €90 por trayecto para hasta 5 pasajeros y Sprinter €110 para hasta 16, ambos por vehículo."
      }
    ],
    "related": [
      "kayseri-airport-to-uchisar-shuttle",
      "kayseri-airport-shuttle",
      "cappadocia-to-kayseri-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Shuttle de Uchisar al Aeropuerto de Kayseri | Recogida en hotel",
    "twitterDescription": "Shuttle de hotel en Uchisar a Kayseri (ASR) desde €15 por persona. Vito y Sprinter privados disponibles. Unos 80 km / 70–85 minutos."
  },
  {
    "slug": "avanos-to-kayseri-airport-shuttle",
    "title": "Shuttle de Avanos al Aeropuerto de Kayseri | Recogida en hotel",
    "description": "Recogida en hotel de Avanos al Aeropuerto de Kayseri (ASR) en shuttle compartido o privado; unos 70 km y 60–75 min.",
    "eyebrow": "Avanos → ASR",
    "h1": "Shuttle de Avanos al Aeropuerto de Kayseri",
    "lead": "La recogida desde Avanos al Aeropuerto de Kayseri (ASR) está disponible en shuttle compartido por €15 por persona o en Vito/Sprinter privado. La distancia habitual es de unos 70 km y el trayecto suele durar 60–75 minutos. Los alojamientos de Avanos están repartidos por diferentes zonas, por lo que el nombre completo del hotel ayuda a confirmar el punto correcto. Sigue la hora confirmada, que contempla otras recogidas y el margen de llegada al aeropuerto.",
    "route": {
      "airport": "kayseri",
      "town": "avanos",
      "direction": "return"
    },
    "sections": [
      {
        "heading": "Avanos a Kayseri: unos 70 km / 60–75 minutos",
        "paragraphs": [
          "Los 60–75 minutos corresponden al trayecto por carretera. En una salida compartida, sigue la hora enviada para tu reserva, ya que las recogidas en hoteles y el margen de llegada al aeropuerto se añaden al tiempo de conducción.",
          "Los alojamientos de Avanos se reparten por distintas partes de la localidad, por lo que el nombre completo ayuda a confirmar el punto correcto en vez de depender de una ubicación genérica de “Avanos”.",
          "¿Vuelas desde NAV? Consulta [[Avanos al Aeropuerto de Nevsehir|avanos-to-nevsehir-airport-shuttle]]."
        ]
      },
      {
        "heading": "Traslado privado para esta ruta",
        "paragraphs": [
          "Vito privado €90 por trayecto para hasta 5 pasajeros y Sprinter €110 para hasta 16. Consulta [[Traslado privado desde el Aeropuerto|private-airport-transfer-cappadocia]]."
        ]
      }
    ],
    "faq": [
      {
        "q": "¿Dónde me recogerá el shuttle en Avanos para ir a Kayseri?",
        "a": "La recogida se organiza en el alojamiento confirmado o en el punto accesible más cercano según el acceso del vehículo."
      },
      {
        "q": "¿Puedo reservar un vehículo privado en lugar del shuttle compartido?",
        "a": "Sí. Vito €90 por trayecto para hasta 5 pasajeros y Sprinter €110 para hasta 16, ambos por vehículo."
      }
    ],
    "related": [
      "kayseri-airport-to-avanos-shuttle",
      "kayseri-airport-shuttle",
      "cappadocia-to-kayseri-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Shuttle de Avanos al Aeropuerto de Kayseri | Recogida en hotel",
    "twitterDescription": "Shuttle de hotel en Avanos a Kayseri (ASR) desde €15 por persona. Vito y Sprinter privados disponibles. Unos 70 km / 60–75 minutos."
  },
  {
    "slug": "ortahisar-to-kayseri-airport-shuttle",
    "title": "Shuttle de Ortahisar al Aeropuerto de Kayseri | Recogida en hotel",
    "description": "Recogida en hotel de Ortahisar al Aeropuerto de Kayseri (ASR) en shuttle compartido o privado; unos 75 km y 60–75 min.",
    "eyebrow": "Ortahisar → ASR",
    "h1": "Shuttle de Ortahisar al Aeropuerto de Kayseri",
    "lead": "La recogida desde Ortahisar al Aeropuerto de Kayseri (ASR) está disponible en shuttle compartido por €15 por persona o en Vito/Sprinter privado. La distancia habitual es de unos 75 km y el trayecto suele durar 60–75 minutos. Las calles estrechas del casco antiguo pueden afectar a los primeros minutos, por lo que el punto confirmado es importante. Sigue la hora confirmada, que contempla otras recogidas y el margen de llegada.",
    "route": {
      "airport": "kayseri",
      "town": "ortahisar",
      "direction": "return"
    },
    "sections": [
      {
        "heading": "Ortahisar a Kayseri: unos 75 km / 60–75 minutos",
        "paragraphs": [
          "La estimación cubre la conducción; la hora real también depende de otras recogidas compartidas y del margen del aeropuerto. El acceso por el pueblo antiguo puede influir en los primeros minutos, así que el punto confirmado de tu alojamiento es el verdadero inicio del viaje, no la distancia por carretera por sí sola."
        ]
      },
      {
        "heading": "Por qué importa la hora de recogida en Ortahisar",
        "paragraphs": [
          "Un vehículo compartido puede hacer otras recogidas antes de salir de Ortahisar y las calles estrechas pueden influir en el tiempo para llegar al punto confirmado. Ten el equipaje preparado antes de la franja de recogida para continuar hacia Kayseri sin retrasos innecesarios.",
          "¿Vuelas desde NAV? Consulta [[Ortahisar al Aeropuerto de Nevsehir|ortahisar-to-nevsehir-airport-shuttle]]. Para el sentido de llegada, consulta [[Kayseri a Ortahisar|kayseri-airport-to-ortahisar-shuttle]]."
        ]
      },
      {
        "heading": "Traslado privado para esta ruta",
        "paragraphs": [
          "Vito privado €90 por trayecto para hasta 5 pasajeros y Sprinter €110 para hasta 16. Consulta [[Traslado privado desde el Aeropuerto|private-airport-transfer-cappadocia]]."
        ]
      }
    ],
    "faq": [
      {
        "q": "¿Por qué debo estar preparado con antelación para una recogida de Ortahisar a ASR?",
        "a": "Una salida compartida puede incluir otras recogidas en hoteles, por lo que debes seguir la hora confirmada para tu reserva."
      },
      {
        "q": "¿Puedo reservar un vehículo privado en lugar del shuttle compartido?",
        "a": "Sí. Vito €90 por trayecto para hasta 5 pasajeros y Sprinter €110 para hasta 16, ambos por vehículo."
      }
    ],
    "related": [
      "kayseri-airport-to-ortahisar-shuttle",
      "kayseri-airport-shuttle",
      "cappadocia-to-kayseri-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Shuttle de Ortahisar al Aeropuerto de Kayseri | Recogida en hotel",
    "twitterDescription": "Shuttle de hotel en Ortahisar a Kayseri (ASR) desde €15 por persona. Vito y Sprinter privados disponibles. Unos 75 km / 60–75 minutos."
  },
  {
    "slug": "cavusin-to-kayseri-airport-shuttle",
    "title": "Shuttle de Cavusin al Aeropuerto de Kayseri | Recogida en hotel",
    "description": "Recogida en hotel de Cavusin al Aeropuerto de Kayseri (ASR) en shuttle compartido o privado; unos 75 km y 65–80 min.",
    "eyebrow": "Cavusin → ASR",
    "h1": "Shuttle de Cavusin al Aeropuerto de Kayseri",
    "lead": "La recogida desde Cavusin al Aeropuerto de Kayseri (ASR) está disponible en shuttle compartido por €15 por persona o en Vito/Sprinter privado. La distancia habitual es de unos 75 km y el trayecto suele durar 65–80 minutos. Los alojamientos pueden estar junto a la carretera principal, cerca del pueblo antiguo o hacia los valles, por lo que importa el punto confirmado. Sigue la hora confirmada, que contempla otras recogidas y el margen de llegada.",
    "route": {
      "airport": "kayseri",
      "town": "cavusin",
      "direction": "return"
    },
    "sections": [
      {
        "heading": "Cavusin a Kayseri: unos 75 km / 65–80 minutos",
        "paragraphs": [
          "La estimación corresponde a la conducción; la hora real también depende de otras recogidas y del margen del aeropuerto. Los alojamientos pueden estar junto a la carretera principal, cerca del pueblo antiguo o hacia los accesos de los valles, por lo que el punto confirmado es esencial para planificar la salida."
        ]
      },
      {
        "heading": "Las mañanas de globos pueden añadir tráfico local en Cavusin",
        "paragraphs": [
          "La actividad de globos a primera hora puede añadir tráfico local alrededor de Cavusin, así que estate listo en el punto confirmado antes de que empiece la franja de recogida.",
          "¿Vuelas desde NAV? Consulta [[Cavusin al Aeropuerto de Nevsehir|cavusin-to-nevsehir-airport-shuttle]]."
        ]
      },
      {
        "heading": "El pueblo antiguo y la carretera principal no son el mismo entorno de recogida",
        "paragraphs": [
          "Como los alojamientos se reparten entre distintas partes de Cavusin, el vehículo necesita el punto confirmado y no una ubicación genérica, especialmente en una mañana de salida hacia Kayseri."
        ]
      },
      {
        "heading": "Traslado privado para esta ruta",
        "paragraphs": [
          "Vito privado €90 por trayecto para hasta 5 pasajeros y Sprinter €110 para hasta 16. Consulta [[Traslado privado desde el Aeropuerto|private-airport-transfer-cappadocia]]."
        ]
      }
    ],
    "faq": [
      {
        "q": "¿Por qué importa el punto exacto de recogida en Cavusin para ir a ASR?",
        "a": "Los alojamientos se reparten entre la carretera principal, el pueblo antiguo y zonas próximas a los valles, por lo que el punto confirmado ayuda a evitar retrasos antes de iniciar el viaje a Kayseri."
      },
      {
        "q": "¿Puedo reservar un vehículo privado en lugar del shuttle compartido?",
        "a": "Sí. Vito €90 por trayecto para hasta 5 pasajeros y Sprinter €110 para hasta 16, ambos por vehículo."
      }
    ],
    "related": [
      "kayseri-airport-to-cavusin-shuttle",
      "kayseri-airport-shuttle",
      "cappadocia-to-kayseri-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Shuttle de Cavusin al Aeropuerto de Kayseri | Recogida en hotel",
    "twitterDescription": "Shuttle de hotel en Cavusin a Kayseri (ASR) desde €15 por persona. Vito y Sprinter privados disponibles. Unos 75 km / 65–80 minutos."
  },
  {
    "slug": "goreme-to-nevsehir-airport-shuttle",
    "title": "Shuttle de Goreme al Aeropuerto de Nevsehir | Recogida en hotel",
    "description": "Recogida en hotel de Goreme al Aeropuerto de Nevsehir (NAV) en shuttle compartido o privado; unos 40 km y 35–45 min.",
    "eyebrow": "Goreme → NAV",
    "h1": "Shuttle de Goreme al Aeropuerto de Nevsehir",
    "lead": "La recogida desde Goreme al Aeropuerto de Nevsehir (NAV) está disponible en shuttle compartido por €15 por persona o en Vito/Sprinter privado. La distancia habitual es de unos 40 km y el trayecto suele durar 35–45 minutos. Las calles de hoteles cueva y laderas pueden añadir tiempo local antes de llegar a la carretera principal. Sigue la hora confirmada, que contempla otras recogidas y el margen del aeropuerto.",
    "route": {
      "airport": "nevsehir",
      "town": "goreme",
      "direction": "return"
    },
    "sections": [
      {
        "heading": "Goreme a Nevsehir: unos 40 km / 35–45 minutos",
        "paragraphs": [
          "El trayecto por carretera es relativamente corto, pero la hora confirmada también contempla recogidas en hoteles y el margen de llegada al aeropuerto."
        ]
      },
      {
        "heading": "La recogida en hoteles cueva puede añadir tiempo antes de salir de Goreme",
        "paragraphs": [
          "La carretera a NAV es corta, pero un hotel cueva o una propiedad en la ladera todavía puede añadir tiempo local antes de salir de Goreme. En una salida temprana, ten el equipaje listo y espera en el punto confirmado aunque el trayecto por carretera sea breve.",
          "Para vuelos desde Kayseri, utiliza [[Goreme al Aeropuerto de Kayseri|goreme-to-kayseri-airport-shuttle]]. Para comparar ambos aeropuertos, consulta [[Traslado del aeropuerto a Goreme|goreme-airport-transfer]]."
        ]
      },
      {
        "heading": "Traslado privado para esta ruta",
        "paragraphs": [
          "Vito privado €80 por trayecto para hasta 5 pasajeros y Sprinter €90 para hasta 16. Consulta [[Traslado privado desde el Aeropuerto|private-airport-transfer-cappadocia]]."
        ]
      }
    ],
    "faq": [
      {
        "q": "¿A qué distancia está Goreme del Aeropuerto de Nevsehir?",
        "a": "La estimación habitual es de unos 40 km / 35–45 minutos. El tráfico y otras recogidas confirmadas pueden cambiar el tiempo total."
      },
      {
        "q": "¿Puedo reservar un vehículo privado en lugar del shuttle compartido?",
        "a": "Sí. Vito €80 por trayecto para hasta 5 pasajeros y Sprinter €90 para hasta 16, ambos por vehículo."
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
    "twitterTitle": "Shuttle de Goreme al Aeropuerto de Nevsehir | Recogida en hotel",
    "twitterDescription": "Shuttle de hotel en Goreme a Nevsehir (NAV) desde €15 por persona. Vito y Sprinter privados disponibles. Unos 40 km / 35–45 minutos."
  },
  {
    "slug": "urgup-to-nevsehir-airport-shuttle",
    "title": "Shuttle de Urgup al Aeropuerto de Nevsehir | Recogida en hotel",
    "description": "Recogida en hotel de Urgup al Aeropuerto de Nevsehir (NAV) en shuttle compartido o privado; unos 50 km y 45–60 min.",
    "eyebrow": "Urgup → NAV",
    "h1": "Shuttle de Urgup al Aeropuerto de Nevsehir",
    "lead": "La recogida desde Urgup al Aeropuerto de Nevsehir (NAV) está disponible en shuttle compartido por €15 por persona o en Vito/Sprinter privado. La distancia habitual es de unos 50 km y el trayecto suele durar 45–60 minutos. Los alojamientos se reparten entre el centro y zonas en pendiente, por lo que importa el punto confirmado antes de iniciar el trayecto. Sigue la hora confirmada, que contempla otras recogidas y el margen de llegada.",
    "route": {
      "airport": "nevsehir",
      "town": "urgup",
      "direction": "return"
    },
    "sections": [
      {
        "heading": "Urgup a Nevsehir: unos 50 km / 45–60 minutos",
        "paragraphs": [
          "La estimación corresponde a la conducción; la hora real de recogida también depende de otras recogidas compartidas y del margen de llegada al aeropuerto."
        ]
      },
      {
        "heading": "Por qué importa el punto confirmado en Urgup",
        "paragraphs": [
          "Algunos alojamientos del casco antiguo pueden necesitar un punto alternativo según el acceso del vehículo. Sigue el punto confirmado para tu reserva en lugar de depender solo del tiempo por carretera.",
          "Si vuelas desde Kayseri, utiliza [[Urgup al Aeropuerto de Kayseri|urgup-to-kayseri-airport-shuttle]]."
        ]
      },
      {
        "heading": "Traslado privado para esta ruta",
        "paragraphs": [
          "Vito privado €80 por trayecto para hasta 5 pasajeros y Sprinter €90 para hasta 16. Consulta [[Traslado privado desde el Aeropuerto|private-airport-transfer-cappadocia]]."
        ]
      }
    ],
    "faq": [
      {
        "q": "¿Cuánto se tarda por carretera de Urgup al Aeropuerto de Nevsehir?",
        "a": "La estimación habitual es de unos 50 km / 45–60 minutos."
      },
      {
        "q": "¿Puedo reservar un vehículo privado en lugar del shuttle compartido?",
        "a": "Sí. Vito €80 por trayecto para hasta 5 pasajeros y Sprinter €90 para hasta 16, ambos por vehículo."
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
    "twitterTitle": "Shuttle de Urgup al Aeropuerto de Nevsehir | Recogida en hotel",
    "twitterDescription": "Shuttle de hotel en Urgup a Nevsehir (NAV) desde €15 por persona. Vito y Sprinter privados disponibles. Unos 50 km / 45–60 minutos."
  },
  {
    "slug": "uchisar-to-nevsehir-airport-shuttle",
    "title": "Shuttle de Uchisar al Aeropuerto de Nevsehir | Recogida en hotel",
    "description": "Recogida en hotel de Uchisar al Aeropuerto de Nevsehir (NAV) en shuttle compartido o privado; unos 35 km y 30–40 min.",
    "eyebrow": "Uchisar → NAV",
    "h1": "Shuttle de Uchisar al Aeropuerto de Nevsehir",
    "lead": "La recogida desde Uchisar al Aeropuerto de Nevsehir (NAV) está disponible en shuttle compartido por €15 por persona o en Vito/Sprinter privado. La distancia habitual es de unos 35 km y el trayecto suele durar 30–40 minutos. Las calles empinadas de la parte alta pueden requerir un punto de recogida accesible en lugar de acceso directo a cada puerta. Sigue la hora confirmada, que contempla otras recogidas y el margen de llegada.",
    "route": {
      "airport": "nevsehir",
      "town": "uchisar",
      "direction": "return"
    },
    "sections": [
      {
        "heading": "Uchisar a Nevsehir: unos 35 km / 30–40 minutos",
        "paragraphs": [
          "La estimación por carretera es de unos 35 km / 30–40 minutos, pero la hora confirmada también contempla otras recogidas y el margen de llegada al aeropuerto."
        ]
      },
      {
        "heading": "Una distancia corta sigue necesitando un punto confirmado",
        "paragraphs": [
          "Las calles de Uchisar se estrechan y suben hacia la parte alta, por lo que una distancia corta al aeropuerto no elimina la necesidad de un punto de recogida específico y confirmado en lugar de una ubicación genérica de “Uchisar”.",
          "¿Vuelas desde ASR? Consulta [[Uchisar al Aeropuerto de Kayseri|uchisar-to-kayseri-airport-shuttle]]."
        ]
      },
      {
        "heading": "Traslado privado para esta ruta",
        "paragraphs": [
          "Vito privado €80 por trayecto para hasta 5 pasajeros y Sprinter €90 para hasta 16. Consulta [[Traslado privado desde el Aeropuerto|private-airport-transfer-cappadocia]]."
        ]
      }
    ],
    "faq": [
      {
        "q": "¿Bastan 30–40 minutos para calcular por mi cuenta la hora de salida del hotel?",
        "a": "No. Los 30–40 minutos son solo la estimación por carretera. Sigue la hora confirmada, que incluye otras recogidas y el margen de llegada al aeropuerto."
      },
      {
        "q": "¿Por qué necesitáis el número del vuelo de salida desde Nevsehir?",
        "a": "Ayuda a confirmar el vuelo real y a planificar correctamente la hora de recogida de tu reserva."
      },
      {
        "q": "¿Puedo reservar un vehículo privado en lugar del shuttle compartido?",
        "a": "Sí. Vito €80 por trayecto para hasta 5 pasajeros y Sprinter €90 para hasta 16, ambos por vehículo."
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
    "twitterTitle": "Shuttle de Uchisar al Aeropuerto de Nevsehir | Recogida en hotel",
    "twitterDescription": "Shuttle de hotel en Uchisar a Nevsehir (NAV) desde €15 por persona. Vito y Sprinter privados disponibles. Unos 35 km / 30–40 minutos."
  },
  {
    "slug": "avanos-to-nevsehir-airport-shuttle",
    "title": "Shuttle de Avanos al Aeropuerto de Nevsehir | Recogida en hotel",
    "description": "Recogida en hotel de Avanos al Aeropuerto de Nevsehir (NAV) en shuttle compartido o privado; unos 38 km y 35–50 min.",
    "eyebrow": "Avanos → NAV",
    "h1": "Shuttle de Avanos al Aeropuerto de Nevsehir",
    "lead": "La recogida desde Avanos al Aeropuerto de Nevsehir (NAV) está disponible en shuttle compartido por €15 por persona o en Vito/Sprinter privado. La distancia habitual es de unos 38 km y el trayecto suele durar 35–50 minutos. Los alojamientos de Avanos están repartidos por distintas zonas, por lo que el nombre completo del hotel ayuda a confirmar el punto correcto. Sigue la hora confirmada, que también contempla otras recogidas y el margen de llegada al aeropuerto.",
    "route": {
      "airport": "nevsehir",
      "town": "avanos",
      "direction": "return"
    },
    "sections": [
      {
        "heading": "Avanos a Nevsehir: unos 38 km / 35–50 minutos",
        "paragraphs": [
          "La estimación cubre la conducción; la hora real de recogida también depende de otras recogidas compartidas y del margen de llegada al aeropuerto. Los alojamientos de Avanos se reparten por distintas partes de la localidad, así que el nombre completo ayuda a confirmar el punto correcto en vez de depender de una ubicación genérica de “Avanos”.",
          "¿Vuelas desde ASR? Consulta [[Avanos al Aeropuerto de Kayseri|avanos-to-kayseri-airport-shuttle]]."
        ]
      },
      {
        "heading": "Traslado privado para esta ruta",
        "paragraphs": [
          "Vito privado €80 por trayecto para hasta 5 pasajeros y Sprinter €90 para hasta 16. Consulta [[Traslado privado desde el Aeropuerto|private-airport-transfer-cappadocia]]."
        ]
      }
    ],
    "faq": [
      {
        "q": "¿Cuánto se tarda por carretera de Avanos al Aeropuerto de Nevsehir?",
        "a": "La estimación habitual es de unos 38 km / 35–50 minutos."
      },
      {
        "q": "¿Puedo reservar un vehículo privado en lugar del shuttle compartido?",
        "a": "Sí. Vito €80 por trayecto para hasta 5 pasajeros y Sprinter €90 para hasta 16, ambos por vehículo."
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
    "twitterTitle": "Shuttle de Avanos al Aeropuerto de Nevsehir | Recogida en hotel",
    "twitterDescription": "Shuttle de hotel en Avanos a Nevsehir (NAV) desde €15 por persona. Vito y Sprinter privados disponibles. Unos 38 km / 35–50 minutos."
  },
  {
    "slug": "ortahisar-to-nevsehir-airport-shuttle",
    "title": "Shuttle de Ortahisar al Aeropuerto de Nevsehir | Recogida en hotel",
    "description": "Recogida en hotel de Ortahisar al Aeropuerto de Nevsehir (NAV) en shuttle compartido o privado; unos 45 km y 40–50 min.",
    "eyebrow": "Ortahisar → NAV",
    "h1": "Shuttle de Ortahisar al Aeropuerto de Nevsehir",
    "lead": "La recogida desde Ortahisar al Aeropuerto de Nevsehir (NAV) está disponible en shuttle compartido por €15 por persona o en Vito/Sprinter privado. La distancia habitual es de unos 45 km y el trayecto suele durar 40–50 minutos. Las calles estrechas del casco antiguo pueden afectar a los primeros minutos de la recogida, por lo que el punto confirmado es importante. Sigue la hora confirmada, que contempla otras recogidas y el margen de llegada.",
    "route": {
      "airport": "nevsehir",
      "town": "ortahisar",
      "direction": "return"
    },
    "sections": [
      {
        "heading": "Ortahisar a Nevsehir: unos 45 km / 40–50 minutos",
        "paragraphs": [
          "La estimación cubre la conducción; la hora real también depende de otras recogidas compartidas y del margen del aeropuerto. El acceso por el pueblo antiguo puede influir en los primeros minutos, por lo que el punto confirmado de tu alojamiento es la referencia importante para planificar la salida."
        ]
      },
      {
        "heading": "Un trayecto corto a NAV también necesita un punto confirmado en Ortahisar",
        "paragraphs": [
          "La carretera al Aeropuerto de Nevsehir es relativamente corta, pero las calles estrechas aún pueden afectar al lugar donde el shuttle puede encontrarte. Utiliza el punto confirmado y estate listo antes de la franja de recogida en lugar de planificar la salida solo con los 40–50 minutos por carretera.",
          "¿Vuelas desde ASR? Consulta [[Ortahisar al Aeropuerto de Kayseri|ortahisar-to-kayseri-airport-shuttle]]."
        ]
      },
      {
        "heading": "Traslado privado para esta ruta",
        "paragraphs": [
          "Vito privado €80 por trayecto para hasta 5 pasajeros y Sprinter €90 para hasta 16. Consulta [[Traslado privado desde el Aeropuerto|private-airport-transfer-cappadocia]]."
        ]
      }
    ],
    "faq": [
      {
        "q": "¿Dónde me recogerá el shuttle en Ortahisar para ir al Aeropuerto de Nevsehir?",
        "a": "La recogida se organiza en el alojamiento confirmado o en el punto accesible más cercano según el acceso del vehículo."
      },
      {
        "q": "¿Puedo reservar un vehículo privado en lugar del shuttle compartido?",
        "a": "Sí. Vito €80 por trayecto para hasta 5 pasajeros y Sprinter €90 para hasta 16, ambos por vehículo."
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
    "twitterTitle": "Shuttle de Ortahisar al Aeropuerto de Nevsehir | Recogida en hotel",
    "twitterDescription": "Shuttle de hotel en Ortahisar a Nevsehir (NAV) desde €15 por persona. Vito y Sprinter privados disponibles. Unos 45 km / 40–50 minutos."
  },
  {
    "slug": "cavusin-to-nevsehir-airport-shuttle",
    "title": "Shuttle de Cavusin al Aeropuerto de Nevsehir | Recogida en hotel",
    "description": "Recogida en hotel de Cavusin al Aeropuerto de Nevsehir (NAV) en shuttle compartido o privado; unos 42 km y 40–55 min.",
    "eyebrow": "Cavusin → NAV",
    "h1": "Shuttle de Cavusin al Aeropuerto de Nevsehir",
    "lead": "La recogida desde Cavusin al Aeropuerto de Nevsehir (NAV) está disponible en shuttle compartido por €15 por persona o en Vito/Sprinter privado. La distancia habitual es de unos 42 km y el trayecto suele durar 40–55 minutos. Los alojamientos pueden estar junto a la carretera principal, en el pueblo antiguo o hacia los valles, por lo que importa el punto confirmado. Sigue la hora confirmada, que contempla otras recogidas y el margen de llegada.",
    "route": {
      "airport": "nevsehir",
      "town": "cavusin",
      "direction": "return"
    },
    "sections": [
      {
        "heading": "Cavusin a Nevsehir: unos 42 km / 40–55 minutos",
        "paragraphs": [
          "La estimación por carretera es de unos 42 km / 40–55 minutos, pero la hora confirmada también contempla otras recogidas compartidas y el margen de llegada al aeropuerto."
        ]
      },
      {
        "heading": "Una ubicación de recogida clara importa más que la corta distancia",
        "paragraphs": [
          "Los alojamientos de Cavusin pueden estar repartidos entre la carretera del pueblo y zonas próximas a los valles. Un punto claro y confirmado ayuda a evitar retrasos por esperar en el lugar equivocado. No se garantiza acceso a todas las entradas, así que sigue el punto confirmado o la parada accesible más cercana.",
          "¿Vuelas desde ASR? Consulta [[Cavusin al Aeropuerto de Kayseri|cavusin-to-kayseri-airport-shuttle]]."
        ]
      },
      {
        "heading": "Traslado privado para esta ruta",
        "paragraphs": [
          "Vito privado €80 por trayecto para hasta 5 pasajeros y Sprinter €90 para hasta 16. Consulta [[Traslado privado desde el Aeropuerto|private-airport-transfer-cappadocia]]."
        ]
      }
    ],
    "faq": [
      {
        "q": "¿La actividad de globos a primera hora puede afectar a una salida de Cavusin hacia NAV?",
        "a": "Sí, algunas mañanas puede haber más tráfico local, por lo que conviene estar listo en el punto confirmado."
      },
      {
        "q": "¿Dónde me recogerá el shuttle en Cavusin para ir al Aeropuerto de Nevsehir?",
        "a": "La recogida se organiza en el alojamiento confirmado o en el punto accesible más cercano según el acceso del vehículo."
      },
      {
        "q": "¿Puedo reservar un vehículo privado en lugar del shuttle compartido?",
        "a": "Sí. Vito €80 por trayecto para hasta 5 pasajeros y Sprinter €90 para hasta 16, ambos por vehículo."
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
    "twitterTitle": "Shuttle de Cavusin al Aeropuerto de Nevsehir | Recogida en hotel",
    "twitterDescription": "Shuttle de hotel en Cavusin a Nevsehir (NAV) desde €15 por persona. Vito y Sprinter privados disponibles. Unos 42 km / 40–55 minutos."
  },
  {
    "slug": "cappadocia-airport",
    "title": "Guía de Aeropuertos de Capadocia | NAV, ASR y shuttle",
    "description": "Guía de aeropuertos de Capadocia: Nevsehir Kapadokya (NAV), Kayseri (ASR), traslados a Goreme, shuttle €15 y opciones privadas.",
    "eyebrow": "Guía de aeropuertos",
    "h1": "Aeropuertos de Capadocia: NAV, ASR y traslados a hoteles",
    "lead": "La expresión “Aeropuerto de Capadocia” puede referirse al Aeropuerto Nevsehir Kapadokya (NAV), aunque el Aeropuerto de Kayseri (ASR) también se utiliza ampliamente para viajar a Capadocia. Para reservar, lo importante es el código de aeropuerto que aparece en tu billete.",
    "sections": [
      {
        "heading": "¿Cuál es el Aeropuerto de Capadocia?",
        "paragraphs": [
          "El Aeropuerto Nevsehir Kapadokya utiliza el código IATA **NAV** y es el aeropuerto cuyo nombre oficial incluye Kapadokya/Capadocia. En la planificación de viajes, sin embargo, “aeropuerto de Capadocia” también se utiliza de forma general para las dos principales puertas de entrada a la región: NAV y el Aeropuerto de Kayseri **ASR**. Por eso, al reservar un traslado al hotel debes utilizar el código que figura en tu billete y no solo la palabra Capadocia.",
          "Si todavía estás eligiendo vuelo, compara [[Aeropuerto más cercano a Capadocia|nearest-airport-to-cappadocia]] y [[Kayseri o Nevsehir para Capadocia|kayseri-or-nevsehir-airport-for-cappadocia]] antes de comprar el billete."
        ]
      },
      {
        "heading": "Aeropuerto Nevsehir Kapadokya (NAV)",
        "paragraphs": [
          "NAV suele ofrecer el traslado por carretera más corto a la zona central de Capadocia. Las estimaciones publicadas incluyen Goreme, unos **40 km / 35–45 minutos**; Uchisar 35 km / 30–40 minutos; Avanos 38 km / 35–50 minutos; Cavusin 42 km / 40–55 minutos; Ortahisar 45 km / 40–50 minutos y Urgup 50 km / 45–60 minutos, antes de posibles paradas compartidas.",
          "El [[shuttle del Aeropuerto de Nevsehir|nevsehir-airport-shuttle]] cuesta **€15 por persona y trayecto**. El traslado privado de ida cuesta €80 en Vito para hasta 5 pasajeros o €90 en Sprinter para hasta 16."
        ]
      },
      {
        "heading": "Aeropuerto de Kayseri (ASR)",
        "paragraphs": [
          "ASR está más lejos por carretera, pero se utiliza mucho para Capadocia porque el horario y la disponibilidad de vuelos pueden hacer que sea la mejor opción para el viaje completo. Goreme está a unos **75 km / 60–75 minutos**, y las demás localidades incluidas suelen quedar en el rango de 70–80 km antes de paradas compartidas.",
          "El [[shuttle del Aeropuerto de Kayseri|kayseri-airport-shuttle]] también cuesta **€15 por persona y trayecto**. El traslado privado de ida cuesta €90 en Vito o €110 en Sprinter. Como la tarifa del shuttle es la misma, puedes comparar vuelos sin pagar más por elegir Kayseri en el servicio compartido."
        ]
      },
      {
        "heading": "Aeropuerto de Capadocia a Goreme: primero identifica NAV o ASR",
        "paragraphs": [
          "Se puede llegar a Goreme desde ambos aeropuertos, así que “Aeropuerto de Capadocia a Goreme” no es suficientemente específico para una reserva. Para NAV utiliza [[Nevsehir a Goreme|nevsehir-airport-to-goreme-shuttle]]; para ASR, [[Kayseri a Goreme|kayseri-airport-to-goreme-shuttle]]. [[Traslado del aeropuerto a Goreme|goreme-airport-transfer]] reúne las dos opciones, el acceso a hoteles cueva y la recogida de regreso."
        ]
      },
      {
        "heading": "Del aeropuerto al hotel: shuttle o vehículo privado",
        "paragraphs": [
          "El shuttle de €15 es la opción principal de bajo coste para Goreme, Urgup, Uchisar, Avanos, Ortahisar y Cavusin. Es compartido, por lo que puede incluir otros pasajeros y paradas en distintos hoteles. Quien quiera un vehículo exclusivo puede elegir Vito o Sprinter privado; las tarifas privadas son por vehículo y no por persona.",
          "La solicitud de reserva recoge aeropuerto, sentido del viaje, datos del vuelo, hotel, contacto de WhatsApp y datos de pasajeros, incluidos los números de pasaporte necesarios para cada reserva. El pago se realiza en efectivo al conductor después de la confirmación."
        ]
      },
      {
        "heading": "Regreso desde Capadocia al aeropuerto",
        "paragraphs": [
          "Para la salida, la pregunta útil ya no es “¿cuál es el Aeropuerto de Capadocia?”, sino “¿qué aeropuerto aparece en mi vuelo de salida?”. Utiliza [[Capadocia al Aeropuerto de Nevsehir|cappadocia-to-nevsehir-airport-shuttle]] para NAV o [[Capadocia al Aeropuerto de Kayseri|cappadocia-to-kayseri-airport-shuttle]] para ASR. La hora de recogida se confirma según el vuelo real y el plan compartido, no mediante una regla horaria universal."
        ]
      },
      {
        "heading": "NAV o ASR: confirma el código de tu billete",
        "paragraphs": [
          "La expresión “Aeropuerto de Capadocia” puede referirse a Nevsehir Kapadokya (NAV), mientras que Kayseri (ASR) también se utiliza ampliamente. Para reservar necesitamos el código que aparece en tu billete. Si aún no has elegido vuelo, consulta [[Aeropuerto más cercano a Capadocia|nearest-airport-to-cappadocia]]."
        ]
      }
    ],
    "faq": [
      {
        "q": "¿Existe realmente un aeropuerto llamado Aeropuerto de Capadocia?",
        "a": "Nevsehir Kapadokya (NAV) lleva Kapadokya/Capadocia en su nombre. Kayseri (ASR) también es un aeropuerto principal utilizado para viajar a Capadocia."
      },
      {
        "q": "¿Cuál es el código del Aeropuerto de Capadocia?",
        "a": "No existe un único código válido para todos los viajeros. NAV es Nevsehir Kapadokya y ASR es Kayseri."
      },
      {
        "q": "¿Qué aeropuerto de Capadocia está más cerca de Goreme?",
        "a": "Nevsehir Kapadokya (NAV) está más cerca por carretera de Goreme."
      },
      {
        "q": "¿Cuánto cuesta el shuttle desde NAV o ASR?",
        "a": "€15 por persona y trayecto desde cualquiera de los dos aeropuertos hasta las zonas hoteleras centrales incluidas."
      },
      {
        "q": "¿Qué significa NAV Airport?",
        "a": "NAV es el código IATA del Aeropuerto Nevsehir Kapadokya."
      },
      {
        "q": "¿Puedo utilizar Kayseri Airport para ir a Goreme?",
        "a": "Sí. ASR está más lejos por carretera que NAV, pero es una puerta de entrada habitual a Capadocia."
      },
      {
        "q": "¿Goreme tiene aeropuerto propio?",
        "a": "No. Para vuelos comerciales se utilizan NAV o ASR."
      },
      {
        "q": "¿Puedo llegar por NAV y salir por ASR?",
        "a": "Sí, pero debe confirmarse como dos trayectos específicos de aeropuerto porque la ruta y el precio privado son diferentes."
      }
    ],
    "related": [
      "nearest-airport-to-cappadocia",
      "kayseri-or-nevsehir-airport-for-cappadocia",
      "nevsehir-airport-shuttle",
      "kayseri-airport-shuttle",
      "cappadocia-airport-transfer"
    ],
    "twitterTitle": "Guía de Aeropuertos de Capadocia | NAV, ASR y shuttle",
    "twitterDescription": "Guía de Nevsehir (NAV) y Kayseri (ASR): códigos, precios del shuttle, traslados privados y localidades incluidas."
  },
  {
    "slug": "nearest-airport-to-cappadocia",
    "title": "Aeropuerto más cercano a Capadocia | NAV vs ASR",
    "description": "¿Qué aeropuerto está más cerca de Capadocia? Compara Nevsehir NAV y Kayseri ASR por distancia, tiempo de traslado y precio del shuttle a Goreme y otras localidades.",
    "eyebrow": "Guía para elegir aeropuerto",
    "h1": "Aeropuerto más cercano a Capadocia",
    "lead": "El Aeropuerto de Nevsehir suele estar más cerca por carretera de la zona central de Capadocia, pero Kayseri puede seguir siendo la mejor opción si ofrece un horario o una tarifa de vuelo más conveniente.",
    "sections": [
      {
        "heading": "Capadocia tiene dos opciones de aeropuerto prácticas",
        "paragraphs": [
          "Nevsehir Kapadokya (NAV) y Kayseri Erkilet (ASR) son los principales aeropuertos utilizados por quienes se alojan en la zona central de Capadocia. NAV está más cerca de Goreme, Uchisar y muchas zonas centrales; ASR implica más carretera, pero puede tener un vuelo que encaje mejor en el itinerario."
        ]
      },
      {
        "heading": "El más cercano no siempre es el mejor",
        "paragraphs": [
          "Un traslado corto ayuda, pero un mal horario o una conexión cara pueden anular esa ventaja. Compara el viaje completo desde tu origen, no solo los últimos kilómetros por carretera. El shuttle cuesta €15 por persona desde ambos aeropuertos, así que elegir ASR no supone un suplemento en la tarifa compartida."
        ]
      },
      {
        "heading": "Ejemplo: Goreme",
        "paragraphs": [
          "NAV a Goreme son aproximadamente 40 km / 35–45 minutos. ASR a Goreme son unos 75 km / 60–75 minutos antes de paradas compartidas. Para acceso al hotel y detalles de llegada, compara [[Nevsehir a Goreme|nevsehir-airport-to-goreme-shuttle]] con [[Kayseri a Goreme|kayseri-airport-to-goreme-shuttle]]."
        ]
      },
      {
        "heading": "Otras localidades pueden cambiar la comparación",
        "paragraphs": [
          "Uchisar está especialmente cerca de NAV, mientras que Kayseri puede resultar más natural para accesos orientales como Urgup. Compara siempre la localidad donde realmente dormirás, en lugar de tratar toda Capadocia como si fuera Goreme."
        ]
      },
      {
        "heading": "Aeropuerto más cercano a Uchisar, Goreme y Urgup",
        "paragraphs": [
          "NAV tiene una ventaja clara de distancia para Uchisar y Goreme. Urgup está más al este, por lo que la diferencia es menor que en Uchisar. Avanos, Ortahisar y Cavusin tienen sus propias cifras. Comprueba la localidad real del hotel antes de decidir qué significa “más cercano” para tu viaje."
        ]
      },
      {
        "heading": "El nombre del aeropuerto no cambia la cobertura de hoteles",
        "paragraphs": [
          "Los shuttles de ASR y NAV cubren las mismas localidades centrales incluidas. Elegir Kayseri no significa perder acceso a Goreme o Uchisar; simplemente implica más carretera. Del mismo modo, NAV no garantiza un viaje total más rápido si la conexión aérea es peor."
        ]
      },
      {
        "heading": "El traslado privado es más barato desde Nevsehir; el shuttle cuesta lo mismo",
        "paragraphs": [
          "El shuttle cuesta €15 por persona desde ambos aeropuertos. El privado cuesta €80/€90 desde NAV para Vito/Sprinter y €90/€110 desde ASR. Esta diferencia es más relevante para grupos que quieren un vehículo exclusivo."
        ]
      }
    ],
    "faq": [
      {
        "q": "¿Cuál es el aeropuerto más cercano a Capadocia?",
        "a": "Nevsehir Kapadokya (NAV) suele ser el aeropuerto principal más cercano a la zona central de Capadocia; Kayseri (ASR) es la otra gran puerta de entrada."
      },
      {
        "q": "¿Kayseri Airport está lejos de Capadocia?",
        "a": "Está más lejos por carretera que NAV, pero sigue siendo un aeropuerto habitual y práctico para la región."
      },
      {
        "q": "¿Qué aeropuerto está más cerca de Goreme?",
        "a": "Nevsehir Airport."
      },
      {
        "q": "¿El shuttle es más barato desde NAV?",
        "a": "No. El shuttle compartido cuesta €15 por persona desde cualquiera de los dos aeropuertos."
      },
      {
        "q": "¿Debo elegir por horario de vuelo o por distancia?",
        "a": "Valora el itinerario completo. Un vuelo mejor puede hacer que Kayseri sea más práctico aunque tenga más carretera."
      },
      {
        "q": "¿Cuáles son los códigos de aeropuerto?",
        "a": "ASR para Kayseri y NAV para Nevsehir."
      }
    ],
    "related": [
      "cappadocia-airport",
      "kayseri-or-nevsehir-airport-for-cappadocia",
      "kayseri-airport-shuttle",
      "nevsehir-airport-shuttle"
    ],
    "twitterTitle": "Aeropuerto más cercano a Capadocia | NAV vs ASR",
    "twitterDescription": "Compara Nevsehir NAV y Kayseri ASR por distancia, tiempos de traslado y precio del shuttle a Capadocia."
  },
  {
    "slug": "kayseri-or-nevsehir-airport-for-cappadocia",
    "title": "¿Kayseri o Nevsehir para Capadocia?",
    "description": "Compara Kayseri ASR y Nevsehir NAV: tiempos por carretera, precios de shuttle y privado, distancias a Goreme y qué aeropuerto encaja mejor.",
    "eyebrow": "ASR vs NAV",
    "h1": "¿Kayseri o Nevsehir para Capadocia?",
    "lead": "NAV suele ganar en distancia por carretera; ASR puede ganar en disponibilidad de vuelos. El mejor aeropuerto es el que ofrece el mejor viaje completo hasta la localidad real de tu hotel.",
    "sections": [
      {
        "heading": "Ventaja en distancia por carretera: Nevsehir",
        "paragraphs": [
          "NAV está más cerca de la mayoría de las bases centrales. Goreme está a unos 40 km, Uchisar a 35 km y Avanos a unos 38 km. Esto puede reducir el tiempo en vehículo después de aterrizar."
        ]
      },
      {
        "heading": "La ventaja de vuelos puede favorecer a Kayseri",
        "paragraphs": [
          "ASR está más lejos de las localidades centrales, pero un vuelo mejor de horario o precio puede compensar el tiempo adicional por carretera. No descartes Kayseri antes de revisar las opciones desde Estambul o desde tu ciudad de conexión."
        ]
      },
      {
        "heading": "El precio del shuttle es el mismo",
        "paragraphs": [
          "El shuttle compartido cuesta €15 por persona desde cualquiera de los dos aeropuertos, así que la comparación no depende de una tarifa compartida distinta. El privado sí cambia: Kayseri Vito/Sprinter €90/€110; Nevsehir €80/€90."
        ]
      },
      {
        "heading": "Compara la localidad del hotel",
        "paragraphs": [
          "Uchisar, Goreme, Urgup, Avanos, Ortahisar y Cavusin tienen distancias y condiciones de acceso distintas. Compara las cifras de la localidad donde realmente te alojas antes de decidir."
        ]
      },
      {
        "heading": "La comparación localidad por localidad sí importa",
        "paragraphs": [
          "Para Goreme, NAV está a unos 40 km y ASR a unos 75 km. Para Uchisar, NAV a unos 35 km y ASR a unos 80 km. Urgup está a unos 50 km de NAV y 70 km de ASR. Son diferencias importantes, pero deben compararse con la hora de salida del vuelo, la duración de la conexión y el precio del billete."
        ]
      },
      {
        "heading": "Un vuelo más barato o mejor programado puede compensar la diferencia por carretera",
        "paragraphs": [
          "Ahorrar 25 o 35 minutos de carretera no siempre compensa si el aeropuerto más cercano exige una mala conexión o una salida incómoda. Como el shuttle cuesta lo mismo desde ambos, puedes comparar el itinerario completo sin asumir que el aeropuerto más cercano será automáticamente más barato."
        ]
      },
      {
        "heading": "Llegar por un aeropuerto y salir por otro requiere confirmación especial",
        "paragraphs": [
          "Algunos viajeros llegan por un aeropuerto y salen por el otro. Operativamente no es lo mismo que una ida y vuelta estándar por un solo aeropuerto. Envía claramente ambos vuelos por WhatsApp para confirmar cada sentido con el aeropuerto y precio correctos."
        ]
      }
    ],
    "faq": [
      {
        "q": "¿NAV o ASR está más cerca de Goreme?",
        "a": "Aeropuerto de Nevsehir (NAV)."
      },
      {
        "q": "¿Qué aeropuerto tiene el shuttle más barato?",
        "a": "Ninguno; ambos cuestan €15 por persona."
      },
      {
        "q": "¿Qué aeropuerto tiene el traslado privado más barato?",
        "a": "Nevsehir: Vito €80 / Sprinter €90, frente a Kayseri €90 / €110."
      },
      {
        "q": "¿Kayseri sigue siendo una buena opción para Capadocia?",
        "a": "Sí, especialmente cuando el horario de vuelo es más conveniente."
      },
      {
        "q": "¿Puedo llegar por un aeropuerto y salir por el otro?",
        "a": "El formulario está pensado para un aeropuerto por solicitud. Si tu ida y vuelta utiliza aeropuertos distintos, envía los datos por WhatsApp para confirmar correctamente cada tramo."
      }
    ],
    "related": [
      "nearest-airport-to-cappadocia",
      "kayseri-airport-shuttle",
      "nevsehir-airport-shuttle",
      "airport-transfer-prices"
    ],
    "twitterTitle": "¿Kayseri o Nevsehir para Capadocia? | NAV vs ASR",
    "twitterDescription": "Compara Kayseri (ASR) y Nevsehir (NAV) por distancia a cada localidad, tiempo, shuttle de €15 y precios privados."
  },
  {
    "slug": "cappadocia-shared-shuttle-vs-private-transfer",
    "title": "Shuttle compartido vs traslado privado en Capadocia | Precio y tiempo",
    "description": "Compara shuttle compartido y traslado privado en Capadocia: €15/persona, precios Vito/Sprinter, paradas, tiempos, tamaño del grupo y cobertura.",
    "eyebrow": "Comparación de servicios",
    "h1": "Shuttle compartido o traslado privado en Capadocia",
    "lead": "El shuttle compartido destaca por su bajo precio por persona; el traslado privado ofrece un vehículo exclusivo y un recorrido más directo al hotel.",
    "sections": [
      {
        "heading": "Shuttle compartido: la mejor opción para ahorrar",
        "paragraphs": [
          "A €15 por persona y trayecto, el shuttle suele ser la opción pre-reservada más económica para viajeros solos y parejas. Puede llevar a otros pasajeros y realizar varias paradas en hoteles."
        ]
      },
      {
        "heading": "Traslado privado: más control sobre el trayecto",
        "paragraphs": [
          "El Vito o Sprinter queda reservado exclusivamente para tu reserva. Resulta útil para grupos, familias, vuelos muy tempranos, llegadas tardías y quienes prefieren evitar paradas ajenas."
        ]
      },
      {
        "heading": "Comparación de precios",
        "paragraphs": [
          "Privado desde Kayseri: Vito €90 / Sprinter €110. Desde Nevsehir: Vito €80 / Sprinter €90. Shuttle compartido: €15 por persona desde cualquiera de los dos aeropuertos. Ida y vuelta duplica todos los precios de ida."
        ]
      },
      {
        "heading": "Cobertura y acceso al hotel",
        "paragraphs": [
          "El servicio compartido cubre Goreme, Urgup, Uchisar, Avanos, Cavusin y Ortahisar. Las calles históricas pueden requerir una parada segura cercana incluso con vehículo privado si la vía no es adecuada."
        ]
      },
      {
        "heading": "Datos de pasajeros y pasaportes",
        "paragraphs": [
          "Ambos servicios utilizan información de los pasajeros. El formulario solicita nombres y números de pasaporte porque son necesarios para cada reserva."
        ]
      },
      {
        "heading": "Los ejemplos por tamaño del grupo aclaran la elección",
        "paragraphs": [
          "Una persona paga €15 en shuttle, por lo que un privado rara vez gana por precio puro. Un grupo de seis paga €90 en total por un shuttle de ida; ahí empieza a solaparse con las tarifas privadas, especialmente desde Nevsehir. Para grupos grandes, compara el precio por vehículo del Sprinter con el total por persona del shuttle."
        ]
      },
      {
        "heading": "Los vuelos muy tempranos y las llegadas tardías cambian el cálculo",
        "paragraphs": [
          "Con un vuelo normal durante el día, el horario compartido puede resultar cómodo. Una salida muy temprana, una llegada tardía, niños pequeños, equipaje poco habitual o una conexión ajustada pueden hacer que el control de un vehículo privado sea más importante que la diferencia de precio."
        ]
      },
      {
        "heading": "Compartido no significa improvisado",
        "paragraphs": [
          "El shuttle sigue siendo un servicio de aeropuerto con reserva previa y datos de vuelo, pasajeros y hotel. “Compartido” solo significa que otros pasajeros confirmados y otras paradas pueden formar parte del mismo trayecto."
        ]
      }
    ],
    "faq": [
      {
        "q": "¿El shuttle compartido es lo mismo que Cappadocia shuttle transfer?",
        "a": "Sí. “Compartido” describe cómo funciona el servicio de €15."
      },
      {
        "q": "¿Cuál es más rápido?",
        "a": "El traslado privado suele ser más directo porque no incluye paradas ajenas a la reserva."
      },
      {
        "q": "¿Cuál es más barato para una persona?",
        "a": "El shuttle compartido por €15."
      },
      {
        "q": "¿Qué opción puede ser mejor para un grupo grande?",
        "a": "Un Sprinter privado puede resultar atractivo porque el precio es por vehículo para hasta 16 pasajeros."
      },
      {
        "q": "¿El privado garantiza llegar a todas las puertas de hoteles cueva?",
        "a": "No. El acceso sigue dependiendo de la calle real."
      },
      {
        "q": "¿Puedo pagar en efectivo?",
        "a": "Sí, en efectivo al conductor."
      }
    ],
    "related": [
      "cappadocia-shuttle-transfer",
      "private-airport-transfer-cappadocia",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Shuttle compartido vs traslado privado en Capadocia",
    "twitterDescription": "Compara shuttle compartido y Vito/Sprinter privado por precio, tamaño del grupo, acceso al hotel y estilo de viaje."
  },
  {
    "slug": "cappadocia-cave-hotel-airport-transfer",
    "title": "Shuttle y traslado a hoteles cueva de Capadocia",
    "description": "Shuttle y traslado privado para hoteles cueva, cave suites y alojamientos boutique de Capadocia desde Kayseri ASR y Nevsehir NAV.",
    "eyebrow": "Guía de acceso al alojamiento",
    "h1": "Traslado del aeropuerto a hoteles cueva de Capadocia",
    "lead": "Los hoteles cueva son uno de los grandes atractivos de Capadocia, pero las calles históricas y entradas en laderas hacen que los datos exactos del alojamiento sean importantes para la recogida y la llegada.",
    "sections": [
      {
        "heading": "Por qué importa el nombre completo del hotel",
        "paragraphs": [
          "En Capadocia hay muchos alojamientos que utilizan palabras como cave, suite, house, stone o boutique. Introduce el nombre completo de la reserva y la localidad para identificar correctamente la propiedad."
        ]
      },
      {
        "heading": "Cuando el vehículo no puede detenerse en la puerta",
        "paragraphs": [
          "Algunas calles antiguas son demasiado estrechas, empinadas o inadecuadas para que un shuttle o Sprinter espere con seguridad. En ese caso puede confirmarse por WhatsApp una parada accesible cercana. Es una cuestión normal de acceso y no significa que la localidad esté fuera de la zona de servicio."
        ]
      },
      {
        "heading": "Acceso a hoteles cueva en Goreme",
        "paragraphs": [
          "En las laderas de Goreme hay alojamientos como Kelebek Cave Hotel, Sultan Cave Suites, Aydinli Cave Hotel, Divan Cave House, Artemis Cave Suites, Mithra Cave Hotel, Koza Cave Hotel y muchos otros. Consulta [[Traslado del aeropuerto a Goreme|goreme-airport-transfer]] para información local de acceso y ejemplos de hoteles."
        ]
      },
      {
        "heading": "Uchisar, Urgup, Ortahisar y Cavusin son diferentes",
        "paragraphs": [
          "Uchisar tiene terrazas empinadas junto al castillo; Urgup combina calles urbanas con barrios históricos; Ortahisar tiene vías de pueblo más pequeñas y los alojamientos de Cavusin están más dispersos. No asumas que una única regla de acceso a hoteles cueva sirve para todas las zonas."
        ]
      },
      {
        "heading": "Hotel cueva no significa automáticamente acceso difícil",
        "paragraphs": [
          "Algunos alojamientos cueva están en carreteras normales y son fáciles de alcanzar; otros tienen escaleras empinadas, calles estrechas o recepciones separadas de la entrada de las habitaciones. El nombre exacto de la propiedad permite distinguir cada caso."
        ]
      },
      {
        "heading": "El equipaje de llegada y el de salida plantean situaciones distintas",
        "paragraphs": [
          "Al llegar, los huéspedes pueden caminar una distancia corta desde una parada segura mientras el conductor descarga el equipaje. En la salida, el pasajero debe estar ya en el punto acordado porque el vehículo compartido sigue un horario. El equipaje y el check-out deben estar terminados antes de la franja de recogida."
        ]
      }
    ],
    "faq": [
      {
        "q": "¿El shuttle da servicio a hoteles cueva?",
        "a": "Sí, dentro de las localidades incluidas, sujeto a acceso seguro del vehículo o a un punto cercano confirmado."
      },
      {
        "q": "¿Un Sprinter puede entrar en todas las calles de hoteles cueva?",
        "a": "No. El tamaño del vehículo y las condiciones de la calle varían."
      },
      {
        "q": "¿Goreme es la única zona con hoteles cueva?",
        "a": "No. Uchisar, Urgup, Ortahisar y Cavusin también tienen alojamientos cueva y de piedra."
      },
      {
        "q": "¿Puedo reservar recogida en el hotel para la salida?",
        "a": "Sí, con el punto de recogida confirmado para la propiedad."
      },
      {
        "q": "¿Se necesitan datos de pasaporte?",
        "a": "Sí, para cada reserva."
      }
    ],
    "related": [
      "goreme-airport-transfer",
      "cappadocia-airport-transfer",
      "kayseri-airport-shuttle",
      "nevsehir-airport-shuttle"
    ],
    "twitterTitle": "Traslado a hoteles cueva de Capadocia",
    "twitterDescription": "Recogida y llegada a hoteles cueva de las zonas incluidas de Capadocia, con nombre completo del alojamiento, notas de acceso y puntos confirmados."
  },
  {
    "slug": "istanbul-to-cappadocia",
    "title": "Estambul a Capadocia | Vuelos y shuttle del aeropuerto",
    "description": "Estambul a Capadocia: vuela de IST/SAW a Kayseri ASR o Nevsehir NAV y continúa en shuttle de €15 hasta tu hotel en Capadocia.",
    "eyebrow": "Guía de vuelo + traslado",
    "h1": "Estambul a Capadocia: vuelo y traslado desde el aeropuerto",
    "lead": "Para la mayoría de los visitantes, la ruta práctica es volar desde Estambul a Kayseri (ASR) o Nevsehir (NAV) y continuar después con un shuttle reservado con antelación hasta el hotel.",
    "sections": [
      {
        "heading": "Vuela en lugar de tratarlo como un traslado por carretera",
        "paragraphs": [
          "Este servicio no opera un shuttle compartido directo por carretera desde Estambul a Capadocia. Lo habitual es volar desde Istanbul Airport (IST) o Sabiha Gokcen (SAW) a ASR o NAV y continuar desde allí en shuttle de aeropuerto."
        ]
      },
      {
        "heading": "Elige ASR o NAV según el itinerario completo",
        "paragraphs": [
          "NAV está más cerca por carretera de muchos hoteles; ASR puede tener un horario o una tarifa de vuelo que compense el trayecto terrestre más largo. El shuttle cuesta €15 desde cualquiera de los dos, así que compara primero el vuelo."
        ]
      },
      {
        "heading": "Después de aterrizar en Capadocia",
        "paragraphs": [
          "Recoge el equipaje, sigue las instrucciones de encuentro confirmadas por WhatsApp y utiliza el nombre de la reserva para identificarte en el aeropuerto. La reserva necesita el número correcto de vuelo, hotel, nombres y números de pasaporte."
        ]
      },
      {
        "heading": "Zonas de llegada a hoteles",
        "paragraphs": [
          "El servicio compartido cubre Goreme, Urgup, Uchisar, Avanos, Cavusin y Ortahisar."
        ]
      },
      {
        "heading": "Organiza el traslado según el vuelo, no solo según el aeropuerto de Estambul",
        "paragraphs": [
          "Estambul tiene dos aeropuertos principales, IST y SAW, mientras que en Capadocia se utilizan normalmente ASR o NAV. Para el traslado importa el vuelo que realmente aterriza en Kayseri o Nevsehir. Introduce ese número para coordinar la llegada correcta."
        ]
      },
      {
        "heading": "Deja tiempo para recoger el equipaje antes de encontrarte con el shuttle",
        "paragraphs": [
          "El shuttle no empieza en la puerta del avión. Después de aterrizar, termina la recogida de equipaje y ve al punto de encuentro siguiendo las instrucciones confirmadas por WhatsApp. Es especialmente útil para viajeros que llegan con conexión desde Estambul y no conocen el aeropuerto final."
        ]
      },
      {
        "heading": "El regreso a Estambul sigue el flujo hotel → aeropuerto",
        "paragraphs": [
          "Para volver, el shuttle recoge en la zona de hotel confirmada y lleva a ASR o NAV para el vuelo doméstico a Estambul. Consulta la [[guía Capadocia a Estambul|cappadocia-to-istanbul]] y ajusta la recogida al aeropuerto de salida y a la localidad real del hotel."
        ]
      }
    ],
    "faq": [
      {
        "q": "¿Hay un shuttle directo de Estambul a Capadocia?",
        "a": "No como parte de este servicio compartido de aeropuerto. Vuela a ASR o NAV y utiliza el shuttle desde allí."
      },
      {
        "q": "¿Qué aeropuertos de Estambul tienen vuelos a Capadocia?",
        "a": "Los viajeros suelen utilizar IST o SAW para volar a Kayseri o Nevsehir; consulta el horario actual de las aerolíneas para tus fechas."
      },
      {
        "q": "¿Qué aeropuerto de Capadocia debo elegir?",
        "a": "NAV está más cerca por carretera; ASR puede ser mejor si el horario de vuelo es más conveniente."
      },
      {
        "q": "¿Cuánto cuesta el shuttle después de aterrizar?",
        "a": "€15 por persona desde ASR o NAV."
      },
      {
        "q": "¿Debo reservar el shuttle con mi número de vuelo de Estambul?",
        "a": "Utiliza el número del vuelo que aterriza en Kayseri o Nevsehir para la llegada a Capadocia."
      },
      {
        "q": "¿Puedo reservar el shuttle de regreso para mi vuelo a Estambul?",
        "a": "Sí. Utiliza el vuelo de salida desde ASR o NAV y el sentido Hotel → Aeropuerto."
      },
      {
        "q": "¿La recogida de equipaje está incluida en el tiempo por carretera publicado?",
        "a": "No. Las estimaciones por carretera empiezan después de los trámites del aeropuerto; el equipaje se recoge antes de iniciar el trayecto en shuttle."
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
    "twitterTitle": "Estambul a Capadocia: vuelo y traslado desde el aeropuerto",
    "twitterDescription": "Vuela de Estambul (IST/SAW) a Kayseri (ASR) o Nevsehir (NAV) y continúa en shuttle de €15 hasta tu hotel en una localidad incluida."
  },
  {
    "slug": "cappadocia-to-istanbul",
    "title": "Capadocia a Estambul | Shuttle al aeropuerto y vuelo",
    "description": "Guía Capadocia a Estambul: recogida en hotel hacia NAV o ASR, planificación del vuelo, distancia por carretera y horarios de recogida.",
    "eyebrow": "Capadocia → Estambul",
    "h1": "Capadocia a Estambul: shuttle desde el hotel y vuelo",
    "lead": "Para la mayoría de los viajeros con estancias cortas, el regreso práctico es una recogida en el hotel hacia Nevsehir (NAV) o Kayseri (ASR) seguida de un vuelo a Estambul. El shuttle cubre el tramo hotel → aeropuerto; el resto del viaje es en avión.",
    "sections": [
      {
        "heading": "El traslado al aeropuerto es el primer tramo, no todo el viaje a Estambul",
        "paragraphs": [
          "Este servicio **no** opera un shuttle compartido por carretera desde Capadocia hasta Estambul. Reserva el tramo del hotel al aeropuerto de Capadocia y después utiliza el billete aéreo desde NAV o ASR. Así se mantiene separado un servicio regional de aeropuerto de un viaje interurbano mucho más largo."
        ]
      },
      {
        "heading": "Elige NAV o ASR según el vuelo de salida",
        "paragraphs": [
          "NAV suele estar más cerca de Goreme, Uchisar y otras localidades centrales. ASR está más lejos, pero puede ofrecer un horario o una tarifa mejores. El shuttle compartido del hotel al aeropuerto cuesta **€15 por persona** a cualquiera de los dos; los precios privados son NAV €80/€90 y ASR €90/€110 para Vito/Sprinter.",
          "Si todavía no has elegido aeropuerto de salida, compara [[Aeropuerto más cercano a Capadocia|nearest-airport-to-cappadocia]] y [[Kayseri o Nevsehir para Capadocia|kayseri-or-nevsehir-airport-for-cappadocia]] antes de reservar el vuelo."
        ]
      },
      {
        "heading": "Distancia Capadocia–Estambul: no es la distancia del shuttle",
        "paragraphs": [
          "De Goreme al centro de Estambul hay aproximadamente **725 km** por carretera, un viaje muy distinto de los traslados de 35–80 km dentro de Capadocia. La cifra exacta depende del punto de Estambul y de la localidad de Capadocia. Para la mayoría de los visitantes con tiempo limitado, volar desde NAV o ASR es la forma práctica de separar el largo viaje interurbano del corto traslado hotel → aeropuerto."
        ]
      },
      {
        "heading": "Recogida en el hotel antes del vuelo a Estambul",
        "paragraphs": [
          "Introduce el número de vuelo de salida, el nombre completo del alojamiento, los datos de los pasajeros y el contacto de WhatsApp. La hora se confirma según el vuelo real y el orden de las recogidas compartidas. No calcules la salida solo con el tiempo directo por carretera, porque puede haber otras recogidas antes de salir de Capadocia. Utiliza [[Capadocia al Aeropuerto de Nevsehir|cappadocia-to-nevsehir-airport-shuttle]] o [[Capadocia al Aeropuerto de Kayseri|cappadocia-to-kayseri-airport-shuttle]] según tu vuelo y ajusta el punto y la hora a Goreme, Urgup, Uchisar, Avanos, Ortahisar o Cavusin."
        ]
      },
      {
        "heading": "La hora de recogida el día de salida cambia según la localidad",
        "paragraphs": [
          "La hora puede variar entre Goreme, Urgup, Uchisar, Avanos, Ortahisar y Cavusin porque el acceso por carretera y los puntos de acceso no son iguales. Sigue la hora y el punto confirmados para tu reserva en vez de planificar solo con el tiempo directo por carretera."
        ]
      },
      {
        "heading": "Vuelo de regreso a IST o SAW",
        "paragraphs": [
          "Istanbul Airport (IST) y Sabiha Gokcen (SAW) son aeropuertos distintos. Sigue el aeropuerto que aparece en la reserva aérea después de elegir el vuelo desde Capadocia. La reserva del shuttle se basa en el aeropuerto del que sales en Capadocia —NAV o ASR—, no en si llegas a IST o SAW."
        ]
      },
      {
        "heading": "No confundas la distancia a Estambul con la hora de recogida del aeropuerto",
        "paragraphs": [
          "La larga distancia por carretera a Estambul sirve para decidir si volar o viajar por tierra, pero nunca debe utilizarse para calcular la recogida en el hotel. El traslado termina en NAV o ASR, y la hora se confirma según el vuelo de salida y el plan de recogida compartida."
        ]
      }
    ],
    "faq": [
      {
        "q": "¿Hay un shuttle directo de Capadocia a Estambul?",
        "a": "No como parte de este servicio de aeropuerto. Lo normal es traslado del hotel a NAV o ASR y después vuelo a Estambul."
      },
      {
        "q": "¿A qué distancia está Capadocia de Estambul por carretera?",
        "a": "De Goreme al centro de Estambul hay aproximadamente 725 km; la distancia exacta depende del punto de inicio y destino."
      },
      {
        "q": "¿Qué aeropuerto debo utilizar para volar de Capadocia a Estambul?",
        "a": "Elige el vuelo desde NAV o ASR que mejor encaje en tu horario; NAV suele estar más cerca por carretera de la zona central de Capadocia."
      },
      {
        "q": "¿Cuánto cuesta el shuttle del hotel al aeropuerto?",
        "a": "€15 por persona y trayecto a NAV o ASR desde las localidades hoteleras incluidas."
      },
      {
        "q": "¿Puedo reservar un traslado privado del hotel para el vuelo a Estambul?",
        "a": "Sí. Hay Vito y Sprinter con precios fijos según el aeropuerto."
      },
      {
        "q": "¿Puedo salir por un aeropuerto diferente al de llegada?",
        "a": "Sí, pero cada tramo debe confirmarse correctamente porque la ruta y el precio privado cambian."
      },
      {
        "q": "¿Debo introducir el código del aeropuerto de Estambul en el formulario del shuttle?",
        "a": "No. Selecciona el aeropuerto de salida en Capadocia —NAV o ASR— e introduce el número del vuelo que sale de ese aeropuerto."
      }
    ],
    "related": [
      "istanbul-to-cappadocia",
      "cappadocia-to-nevsehir-airport-shuttle",
      "nearest-airport-to-cappadocia",
      "kayseri-or-nevsehir-airport-for-cappadocia",
      "cappadocia-to-kayseri-airport-shuttle"
    ],
    "twitterTitle": "Capadocia a Estambul: shuttle desde el hotel y vuelo",
    "twitterDescription": "Recogida en hoteles de las localidades incluidas hacia Kayseri (ASR) o Nevsehir (NAV) desde €15 por persona y después vuelo a Estambul."
  }
];

export const esPageBySlug = new Map(esPages.map((page) => [page.slug, page]));
export function esPrettySlug(slug:string){ const page=esPageBySlug.get(slug); return page?.h1 || slug.split('-').map(s=>s.charAt(0).toUpperCase()+s.slice(1)).join(' '); }

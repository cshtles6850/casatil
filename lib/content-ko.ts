import { towns } from './site';

export type KoContentSection = { heading: string; paragraphs: string[]; bullets?: string[] };
export type KoFaqItem = { q: string; a: string };
export type KoSeoPage = { slug: string; title: string; description: string; twitterTitle?: string; twitterDescription?: string; eyebrow: string; h1: string; lead: string; sections: KoContentSection[]; faq: KoFaqItem[]; related: string[]; route?: { airport: 'kayseri' | 'nevsehir'; town: keyof typeof towns; direction: 'arrival' | 'return' }; };

export const townNamesKo: Record<keyof typeof towns, string> = {
  "goreme": "괴레메",
  "urgup": "위르귀프",
  "uchisar": "우치히사르",
  "avanos": "아바노스",
  "ortahisar": "오르타히사르",
  "cavusin": "차우신"
};

export const koPages: KoSeoPage[] = [
  {
    "slug": "cappadocia-shuttle-transfer",
    "title": "카파도키아 공항 셔틀 | 합승 셔틀",
    "description": "카이세리(ASR) 또는 네브셰히르(NAV) 공항에서 괴레메, 위르귀프 등으로 가는 카파도키아 합승 공항 셔틀을 예약하세요. WhatsApp 예약 가능.",
    "eyebrow": "합승 공항 셔틀",
    "h1": "카파도키아 합승 공항 셔틀",
    "lead": "카파도키아 합승 공항 셔틀은 카이세리 공항(ASR)과 네브셰히르 공항(NAV)을 괴레메, 위르귀프, 우치히사르, 아바노스, 차우신, 오르타히사르의 호텔과 연결합니다. 요금은 1인 편도 €15이며, 항공편에 맞춰 픽업과 하차 일정을 확인합니다.",
    "sections": [
      {
        "heading": "서비스에 포함되는 내용",
        "paragraphs": [
          "두 공항 중 어느 곳에서든 숙소까지 합승 차량으로 이동합니다. 항공편, 승객 정보, 호텔 이름을 미리 확인하며, 같은 운행에 다른 예약 승객과 호텔 정차가 포함될 수 있습니다. 이런 합승 운행 방식으로 1인 €15의 요금을 유지합니다."
        ]
      },
      {
        "heading": "카이세리 공항 또는 네브셰히르 공항",
        "paragraphs": [
          "필요한 노선은 이용 공항에 따라 달라집니다. ASR로 도착한다면 [[카이세리 공항 셔틀|kayseri-airport-shuttle]], NAV로 도착한다면 [[네브셰히르 공항 셔틀|nevsehir-airport-shuttle]]을 확인하세요. 각 페이지에는 호텔이 있는 지역까지의 실제 거리와 일반적인 이동 시간이 안내되어 있습니다."
        ]
      },
      {
        "heading": "합승 셔틀과 프라이빗 픽업, 어떤 것이 맞을까요?",
        "paragraphs": [
          "합승 셔틀은 다른 확정 승객과 차량을 함께 이용하고 여러 호텔에 정차할 수 있습니다. 다른 승객이나 관계없는 호텔 하차 없이 전용 차량으로 이동하고 싶다면 [[프라이빗 공항 픽업|private-airport-transfer-cappadocia]]을 비교해 보세요."
        ]
      },
      {
        "heading": "편도, 왕복 또는 호텔 픽업",
        "paragraphs": [
          "공항 → 호텔, 호텔 → 공항 또는 두 방향을 모두 포함한 왕복으로 예약할 수 있습니다. 정확한 공항 미팅 장소나 호텔 픽업 지점을 확인할 수 있도록 항공편 번호와 숙소의 공식 전체 이름을 입력하세요."
        ]
      }
    ],
    "faq": [
      {
        "q": "카파도키아 합승 공항 셔틀 요금은 얼마인가요?",
        "a": "ASR 또는 NAV에서 서비스 지역의 호텔까지 1인 편도 €15입니다."
      },
      {
        "q": "어떤 공항을 이용할 수 있나요?",
        "a": "카이세리 공항(ASR)과 네브셰히르 공항(NAV)입니다."
      },
      {
        "q": "카파도키아에서 어느 지역까지 운행하나요?",
        "a": "괴레메, 위르귀프, 우치히사르, 아바노스, 차우신, 오르타히사르입니다."
      },
      {
        "q": "호텔에서 공항으로 가는 방향도 예약할 수 있나요?",
        "a": "네. 호텔 → 공항 또는 왕복을 선택하세요."
      },
      {
        "q": "프라이빗 픽업도 가능한가요?",
        "a": "네. Vito와 Sprinter는 공항별 고정 요금으로 이용할 수 있습니다."
      }
    ],
    "related": [
      "kayseri-airport-shuttle",
      "nevsehir-airport-shuttle",
      "private-airport-transfer-cappadocia",
      "airport-transfer-prices"
    ],
    "twitterTitle": "카파도키아 공항 셔틀 | 합승 셔틀",
    "twitterDescription": "카이세리(ASR)와 네브셰히르(NAV) 공항에서 괴레메, 위르귀프, 우치히사르, 아바노스, 차우신, 오르타히사르까지 합승 셔틀."
  },
  {
    "slug": "cappadocia-airport-transfer",
    "title": "카파도키아 공항 픽업·샌딩 | 카이세리·네브셰히르",
    "description": "카이세리(ASR)·네브셰히르(NAV) 공항에서 카파도키아까지: 1인 €15 셔틀 또는 프라이빗 Vito/Sprinter. 호텔 픽업·하차, WhatsApp 예약.",
    "eyebrow": "공항 픽업 서비스",
    "h1": "카파도키아 공항 픽업·샌딩",
    "lead": "카파도키아 공항 픽업은 도착 공항, 호텔이 있는 지역, 이동 방향에 따라 노선이 달라집니다. 먼저 공항을 선택하고 숙소 지역을 확인하면 알맞은 경로를 정할 수 있습니다.",
    "sections": [
      {
        "heading": "먼저 공항을 선택하세요",
        "paragraphs": [
          "카파도키아 여행에는 주로 [[카이세리 공항(ASR)|kayseri-airport-shuttle]]과 [[네브셰히르 공항(NAV)|nevsehir-airport-shuttle]] 두 곳을 이용합니다. NAV는 대부분의 중심 숙소 지역에 도로상 더 가깝고, ASR은 항공편 시간이나 운임이 더 유리할 수 있습니다. 아직 공항을 정하지 않았다면 항공권을 구매하기 전에 [[카파도키아에서 가장 가까운 공항|nearest-airport-to-cappadocia]]과 [[카이세리 또는 네브셰히르 공항 비교|kayseri-or-nevsehir-airport-for-cappadocia]]를 확인하세요."
        ]
      },
      {
        "heading": "합승 셔틀 또는 프라이빗 픽업",
        "paragraphs": [
          "[[합승 셔틀|cappadocia-shuttle-transfer]]은 두 공항 모두 1인 편도 €15이며 사전 예약 후 WhatsApp으로 확인합니다. 같은 운행에 다른 승객이나 호텔 정차가 포함될 수 있습니다. 전용 차량을 원한다면 [[프라이빗 픽업|private-airport-transfer-cappadocia]]으로 Vito(최대 5명) 또는 Sprinter(최대 16명)를 선택할 수 있으며, 요금은 인원이 아니라 차량 기준이고 공항에 따라 다릅니다. 두 옵션을 비교하고 싶다면 [[합승 셔틀과 프라이빗 픽업 비교|cappadocia-shared-shuttle-vs-private-transfer]]에서 요금, 운행 지역, 시간 차이를 한눈에 확인할 수 있습니다."
        ]
      },
      {
        "heading": "예약에 필요한 정보",
        "paragraphs": [
          "모든 예약에는 승객 이름, 여권 번호, 항공편 번호, 숙소의 정확한 전체 이름이 필요합니다. 일부 [[동굴 호텔과 오래된 마을 숙소|cappadocia-cave-hotel-airport-transfer]]는 차량이 들어갈 수 없는 골목에 있어 차량이 안전하게 정차할 수 있는 가까운 지점에서 픽업 또는 하차를 안내할 수 있습니다."
        ]
      },
      {
        "heading": "도착 공항과 출발 공항이 다른 경우",
        "paragraphs": [
          "NAV로 도착하고 ASR에서 출발하거나 그 반대인 일정도 가능합니다. 다만 같은 공항 왕복으로 보지 않으며, 각 방향마다 노선과 프라이빗 요금이 다릅니다. 한 가지 요금이 두 구간을 모두 포함한다고 생각하지 말고 두 항공편을 WhatsApp으로 보내 각각 정확한 공항 기준으로 확인받으세요."
        ]
      },
      {
        "heading": "그룹 인원과 차량 정원",
        "paragraphs": [
          "Vito는 최대 5명, Sprinter는 최대 16명까지 탑승할 수 있습니다. 프라이빗 요금은 차량당 책정되므로 큰 그룹은 Sprinter를 이용할 때 합승 셔틀보다 1인당 비용이 낮아질 수도 있습니다. 특히 프라이빗 요금이 더 낮은 네브셰히르에서는 예약 전 두 옵션을 비교해 볼 가치가 있습니다."
        ]
      },
      {
        "heading": "호텔 지역별 노선 보기",
        "paragraphs": [
          "호텔이 있는 지역을 이미 알고 있다면 공항별 정확한 노선을 바로 확인하세요:"
        ],
        "bullets": [
          "**괴레메** — [[카이세리에서|kayseri-airport-to-goreme-shuttle]] · [[네브셰히르에서|nevsehir-airport-to-goreme-shuttle]]",
          "**위르귀프** — [[카이세리에서|kayseri-airport-to-urgup-shuttle]] · [[네브셰히르에서|nevsehir-airport-to-urgup-shuttle]]",
          "**우치히사르** — [[카이세리에서|kayseri-airport-to-uchisar-shuttle]] · [[네브셰히르에서|nevsehir-airport-to-uchisar-shuttle]]",
          "**아바노스** — [[카이세리에서|kayseri-airport-to-avanos-shuttle]] · [[네브셰히르에서|nevsehir-airport-to-avanos-shuttle]]",
          "**차우신** — [[카이세리에서|kayseri-airport-to-cavusin-shuttle]] · [[네브셰히르에서|nevsehir-airport-to-cavusin-shuttle]]",
          "**오르타히사르** — [[카이세리에서|kayseri-airport-to-ortahisar-shuttle]] · [[네브셰히르에서|nevsehir-airport-to-ortahisar-shuttle]]"
        ]
      }
    ],
    "faq": [
      {
        "q": "카파도키아 여행에는 어떤 공항을 이용하나요?",
        "a": "카이세리 공항(ASR)과 네브셰히르 공항(NAV)을 주로 이용합니다."
      },
      {
        "q": "한 공항으로 도착하고 다른 공항에서 출발할 수 있나요?",
        "a": "네. 노선과 요금이 공항마다 다르므로 두 항공편을 WhatsApp으로 보내 각 구간을 따로 확인하세요."
      },
      {
        "q": "제 호텔에는 카이세리와 네브셰히르 중 어느 공항이 더 가깝나요?",
        "a": "숙소 지역에 따라 다르지만 NAV가 대부분의 중심 지역에 더 가깝습니다. 자세한 비교는 [[카이세리 또는 네브셰히르 공항|kayseri-or-nevsehir-airport-for-cappadocia]]을 확인하세요."
      },
      {
        "q": "출발할 때 호텔 픽업도 포함되나요?",
        "a": "네. 예약 확인과 실제 차량 접근이 가능한 조건에서 호텔 픽업이 제공됩니다."
      },
      {
        "q": "카파도키아에서 어느 지역을 운행하나요?",
        "a": "괴레메, 위르귀프, 우치히사르, 아바노스, 차우신, 오르타히사르입니다."
      },
      {
        "q": "승객 정보로 무엇이 필요한가요?",
        "a": "승객 이름, 여권 번호, 항공편 정보, 호텔 이름, WhatsApp 연락처가 필요합니다."
      }
    ],
    "related": [
      "cappadocia-airport",
      "kayseri-airport-shuttle",
      "nevsehir-airport-shuttle",
      "airport-transfer-prices"
    ],
    "twitterTitle": "카파도키아 공항 픽업·샌딩 | 카이세리·네브셰히르",
    "twitterDescription": "카이세리(ASR)와 네브셰히르(NAV)에서 괴레메, 위르귀프, 우치히사르, 아바노스, 차우신, 오르타히사르까지 합승 셔틀 또는 프라이빗 픽업."
  },
  {
    "slug": "private-airport-transfer-cappadocia",
    "title": "카파도키아 프라이빗 공항 픽업·샌딩 | Vito·Sprinter",
    "description": "카파도키아 프라이빗 공항 픽업: 카이세리 Vito €90 / Sprinter €110, 네브셰히르 Vito €80 / Sprinter €90. 최대 5명 또는 16명, 기사에게 현금 결제.",
    "eyebrow": "전용 차량",
    "h1": "카파도키아 프라이빗 공항 픽업·샌딩",
    "lead": "카이세리 공항: **Vito €90**, **Sprinter €110** 편도. 네브셰히르 공항: **Vito €80**, **Sprinter €90**. 요금은 승객 1인당이 아니라 차량당입니다. 왕복은 카이세리에서 €180/€220, 네브셰히르에서 €160/€180입니다.",
    "sections": [
      {
        "heading": "Mercedes Vito: 최대 5명",
        "paragraphs": [
          "Vito는 다른 호텔 정차 없이 전용 차량을 원하는 커플, 가족, 소규모 그룹에 잘 맞습니다. 합승 셔틀보다 출발 시간 조정이 자유롭고, 공항 픽업, [[동굴 호텔 접근|cappadocia-cave-hotel-airport-transfer]], 호텔에서 공항으로 바로 이동하는 일정에 적합한 소형 프라이빗 옵션입니다."
        ]
      },
      {
        "heading": "Mercedes Sprinter: 최대 16명",
        "paragraphs": [
          "Sprinter는 최대 16명까지 이용할 수 있는 더 큰 프라이빗 차량입니다. 요금은 공항에 따라 달라 카이세리에서는 편도 €110, 네브셰히르에서는 €90입니다. 인원이 많은 그룹이라면 합승 셔틀보다 1인당 비용이 비슷하거나 더 낮아질 수 있습니다."
        ]
      },
      {
        "heading": "카이세리와 네브셰히르 요금이 다른 이유",
        "paragraphs": [
          "카이세리와 네브셰히르는 같은 노선이 아닙니다. 카이세리는 카파도키아 중심부 대부분의 지역에서 도로 거리가 더 길기 때문에 ASR의 프라이빗 요금이 더 높습니다. NAV에서는 Vito와 Sprinter 모두 더 낮은 요금이 적용됩니다. 요금을 비교하기 전에 선택한 공항을 꼭 확인하세요."
        ]
      },
      {
        "heading": "프라이빗 차량이어도 호텔 접근은 도로 조건에 따라 달라집니다",
        "paragraphs": [
          "전용 차량을 이용하면 다른 승객의 정차는 없지만 좁은 길 자체가 넓어지는 것은 아닙니다. 오래된 숙소나 언덕에 있는 호텔은 차량이 안전하게 정차할 수 있는 가장 가까운 지점을 이용해야 할 수 있습니다. 실제 만나는 장소는 숙소 위치를 확인한 뒤 안내합니다."
        ]
      },
      {
        "heading": "예약, 승객 정보와 결제",
        "paragraphs": [
          "프라이빗 픽업 확인을 위해 항공편 번호, 숙소 전체 이름, 승객 이름, 여권 번호, WhatsApp 연락처를 입력하세요. 결제는 기사에게 현금으로 합니다. 요금은 EUR 기준이며, 예약 시 확인한 환율에 따라 USD 또는 TRY 현금 결제도 가능합니다."
        ]
      }
    ],
    "faq": [
      {
        "q": "카이세리에서 프라이빗 Vito는 얼마인가요?",
        "a": "최대 5명, 차량 1대 기준 편도 €90입니다."
      },
      {
        "q": "네브셰히르에서 프라이빗 Vito는 얼마인가요?",
        "a": "최대 5명, 차량 1대 기준 편도 €80입니다."
      },
      {
        "q": "카이세리에서 Sprinter는 얼마인가요?",
        "a": "최대 16명, 차량 1대 기준 편도 €110입니다."
      },
      {
        "q": "네브셰히르에서 Sprinter는 얼마인가요?",
        "a": "최대 16명, 차량 1대 기준 편도 €90입니다."
      },
      {
        "q": "왕복 요금은 얼마인가요?",
        "a": "편도 요금의 정확히 두 배입니다."
      },
      {
        "q": "프라이빗 픽업은 항상 호텔 문 앞까지 가나요?",
        "a": "차량은 예약 전용이지만, 오래된 호텔의 경우 실제 도로가 안전한 진입과 정차를 허용해야 합니다."
      },
      {
        "q": "프라이빗 픽업에도 여권 번호가 필요한가요?",
        "a": "네. 모든 예약에 승객의 여권 정보가 필요합니다."
      },
      {
        "q": "결제는 어떻게 하나요?",
        "a": "기사에게 현금으로 결제합니다."
      }
    ],
    "related": [
      "airport-transfer-prices",
      "kayseri-airport-shuttle",
      "nevsehir-airport-shuttle"
    ],
    "twitterTitle": "카파도키아 프라이빗 공항 픽업·샌딩 | Vito·Sprinter",
    "twitterDescription": "Mercedes Vito 또는 Sprinter 전용 차량, 카이세리·네브셰히르 공항별 고정 요금, 기사에게 현금 결제."
  },
  {
    "slug": "airport-transfer-prices",
    "title": "카파도키아 공항 픽업·샌딩 요금 | 셔틀·Vito·Sprinter",
    "description": "카파도키아 공항 픽업 요금: 합승 셔틀 1인/편도 €15. 카이세리 Vito €90, Sprinter €110. 네브셰히르 Vito €80, Sprinter €90. 왕복은 두 배.",
    "twitterTitle": "카파도키아 공항 픽업·샌딩 요금 | 셔틀·Vito·Sprinter",
    "twitterDescription": "합승 셔틀 1인 €15. 카이세리 Vito €90, Sprinter €110. 네브셰히르 Vito €80, Sprinter €90. 왕복은 정확히 두 배입니다.",
    "eyebrow": "명확한 요금",
    "h1": "카파도키아 공항 픽업·샌딩 요금",
    "lead": "합승 셔틀은 두 공항 모두 1인 편도 €15입니다. 프라이빗 픽업은 차량당 요금이며 카이세리와 네브셰히르의 금액이 다릅니다.",
    "sections": [
      {
        "heading": "합승 셔틀 요금",
        "paragraphs": [
          "카이세리 공항(ASR) → 카파도키아 서비스 지역 호텔: **1인 편도 €15**. 네브셰히르 공항(NAV) → 서비스 지역 호텔: **1인 편도 €15**. 호텔 → 공항도 같은 금액이며 왕복은 1인 €30입니다. 자세한 내용은 [[합승 셔틀 페이지|cappadocia-shuttle-transfer]]에서 확인하세요."
        ]
      },
      {
        "heading": "카이세리 공항 프라이빗 요금",
        "paragraphs": [
          "Mercedes Vito, 최대 5명: **편도 €90 / 왕복 €180**. Mercedes Sprinter, 최대 16명: **편도 €110 / 왕복 €220**."
        ]
      },
      {
        "heading": "네브셰히르 공항 프라이빗 요금",
        "paragraphs": [
          "Mercedes Vito, 최대 5명: **편도 €80 / 왕복 €160**. Mercedes Sprinter, 최대 16명: **편도 €90 / 왕복 €180**. 차량과 합승 셔틀 대비 장점을 확인하려면 [[프라이빗 공항 픽업|private-airport-transfer-cappadocia]]을 참고하세요."
        ]
      },
      {
        "heading": "1인 요금과 차량당 요금의 차이",
        "paragraphs": [
          "합승 셔틀은 1인당 요금이라 승객 수가 늘면 총액도 증가합니다. 프라이빗 픽업은 선택한 차량 정원 안에서 차량당 요금입니다. Vito는 최대 5명, Sprinter는 최대 16명입니다. 따라서 큰 그룹은 처음 보기에는 차량 요금이 높아도 1인당 비용이 합승 셔틀보다 낮을 수 있습니다. 또한 프라이빗 요금은 하나가 아닙니다. NAV는 Vito €80, Sprinter €90이고 ASR은 €90, €110입니다. 공항을 선택한 뒤 총액을 확인하세요."
        ]
      },
      {
        "heading": "그룹 인원별 총액 예시",
        "paragraphs": [
          "2명이 편도 합승 셔틀을 이용하면 총 €30, 5명은 €75입니다. 6명은 편도 셔틀 총 €90으로 네브셰히르 출발 Sprinter와 같은 금액입니다. 카이세리 Vito도 €90이지만 최대 5명이라 6명 그룹에는 맞지 않습니다. 표시된 가격만 보지 말고 인원과 차량 정원을 함께 비교하세요."
        ]
      },
      {
        "heading": "결제, 통화와 예약 정보",
        "paragraphs": [
          "요금은 EUR로 표시하며 기사에게 현금으로 결제합니다. 예약 시 확인한 환율로 USD 또는 TRY 현금 결제도 가능합니다. 왕복은 패키지 할인 없이 편도 요금 두 번의 합계입니다. 예약에는 항공편 번호, 호텔, 승객 이름과 여권 번호가 필요하며 WhatsApp으로 정보를 확인한 뒤 예약이 확정됩니다. 호텔 접근이 특이하거나 서로 다른 공항을 이용하는 경우, 또는 합승 셔틀의 기본 서비스 범위를 벗어난 요청에서는 특히 정확한 정보가 중요합니다."
        ]
      }
    ],
    "faq": [
      {
        "q": "카파도키아 공항 셔틀은 얼마인가요?",
        "a": "카이세리와 네브셰히르 공항 모두 1인 편도 €15입니다."
      },
      {
        "q": "왕복 셔틀은 얼마인가요?",
        "a": "1인 €30입니다."
      },
      {
        "q": "카이세리 Vito는 얼마인가요?",
        "a": "편도 €90, 왕복 €180입니다."
      },
      {
        "q": "카이세리 Sprinter는 얼마인가요?",
        "a": "편도 €110, 왕복 €220입니다."
      },
      {
        "q": "네브셰히르 Vito는 얼마인가요?",
        "a": "편도 €80, 왕복 €160입니다."
      },
      {
        "q": "네브셰히르 Sprinter는 얼마인가요?",
        "a": "편도 €90, 왕복 €180입니다."
      },
      {
        "q": "프라이빗 요금도 1인당인가요?",
        "a": "아니요. 안내된 정원 안에서 차량 1대 기준 요금입니다."
      },
      {
        "q": "괴레메와 위르귀프의 프라이빗 요금이 다른가요?",
        "a": "서비스 지역의 중심 마을에서는 공항별로 게시된 프라이빗 요금이 동일합니다."
      },
      {
        "q": "USD 또는 TRY로 결제할 수 있나요?",
        "a": "네. 예약 시 확인한 환율로 USD 또는 TRY 현금 결제를 협의할 수 있습니다."
      },
      {
        "q": "현금 결제여도 여권 번호가 필요한가요?",
        "a": "네. 결제 방식과 관계없이 모든 예약에 여권 정보가 필요합니다."
      },
      {
        "q": "왕복 할인이 있나요?",
        "a": "별도의 왕복 할인은 없으며 정확히 편도 요금의 두 배입니다."
      },
      {
        "q": "예약은 언제 확정되나요?",
        "a": "예약 정보가 WhatsApp으로 확인된 뒤 확정됩니다."
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
    "title": "카이세리 공항에서 카파도키아까지 셔틀 | 공항·호텔 서비스",
    "description": "카이세리 공항(ASR)에서 카파도키아 호텔까지 합승 셔틀: 1인 €15, 기사에게 현금 결제, 괴레메·위르귀프·우치히사르·아바노스·차우신·오르타히사르.",
    "eyebrow": "ASR 공항 셔틀",
    "h1": "카이세리 공항에서 카파도키아까지 셔틀",
    "lead": "카이세리 에르킬레트 공항에서 카파도키아 서비스 지역 숙소까지 1인 €15의 합승 셔틀을 예약하세요. 항공편에 맞춘 공항 미팅 안내를 WhatsApp으로 확인합니다.",
    "sections": [
      {
        "heading": "카이세리 공항: 카파도키아까지 도로 이동이 더 긴 공항",
        "paragraphs": [
          "ASR은 NAV보다 주요 숙박 지역까지 도로 거리가 깁니다. 따라서 “카파도키아”라는 하나의 일반적인 시간으로 보기보다 실제 호텔 지역 기준으로 이동 시간을 확인하는 것이 좋습니다. 괴레메는 약 75 km / 60–75분이며, 서비스 지역의 대부분은 다른 호텔 정차 전 기준으로 대략 70–80 km 범위에 있습니다."
        ]
      },
      {
        "heading": "ASR에서도 합승 셔틀 요금은 1인 €15",
        "paragraphs": [
          "카이세리 합승 셔틀은 **1인 편도 €15**, **왕복 €30**입니다. ASR이 더 멀어도 합승 요금은 €15로 동일합니다. 전용 차량을 원하면 Vito 편도 €90 또는 Sprinter €110을 차량당 이용할 수 있습니다."
        ]
      },
      {
        "heading": "ASR 도착 후 준비할 정보",
        "paragraphs": [
          "예약할 때 항공편 번호와 숙소의 정확한 전체 이름을 입력하세요. 수하물을 찾은 뒤 WhatsApp으로 받은 공항 미팅 안내를 따릅니다. 모든 예약에는 승객 이름과 여권 정보가 필요합니다. 호텔 전체 이름을 알려주면 괴레메, 위르귀프, 우치히사르, 아바노스, 오르타히사르, 차우신 중 어느 지역이든 공항 미팅 후 올바른 최종 경로를 확인하기 쉽습니다."
        ]
      },
      {
        "heading": "ASR에서 이동 시간은 호텔 지역에 따라 달라집니다",
        "paragraphs": [
          "실제 소요 시간은 숙소가 있는 지역에 따라 달라집니다. 모든 이동을 카이세리–괴레메와 같다고 생각하지 말고, 실제 호텔 지역의 도로 거리와 접근 정보를 확인하세요."
        ]
      },
      {
        "heading": "ASR로 돌아갈 때는 별도의 픽업 계획이 필요합니다",
        "paragraphs": [
          "서비스 지역 호텔에서 카이세리 공항으로 가는 합승 셔틀도 1인 €15입니다. 돌아가는 시간은 도착 때의 시간을 단순히 거꾸로 계산하지 않습니다. 출발 항공편과 [[카파도키아에서 카이세리 공항|cappadocia-to-kayseri-airport-shuttle]] 정보를 기준으로 실제 호텔 지역에 맞춰 픽업을 확인하세요."
        ]
      }
    ],
    "faq": [
      {
        "q": "카이세리 공항에서 카파도키아까지 셔틀은 얼마인가요?",
        "a": "1인 편도 €15, 왕복 €30입니다."
      },
      {
        "q": "ASR에서 괴레메까지 도로로 얼마나 걸리나요?",
        "a": "다른 호텔 정차 전 기준으로 약 75 km / 60–75분입니다."
      },
      {
        "q": "카이세리 프라이빗 요금은 얼마인가요?",
        "a": "Vito 편도 €90, Sprinter 편도 €110이며 차량당 요금입니다."
      },
      {
        "q": "ASR에서 어느 숙박 지역을 운행하나요?",
        "a": "괴레메, 위르귀프, 우치히사르, 아바노스, 차우신, 오르타히사르입니다."
      },
      {
        "q": "ASR로 돌아가는 셔틀도 함께 예약할 수 있나요?",
        "a": "네. 왕복을 선택하고 출발 항공편 정보를 별도 구간으로 입력하세요."
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
    "twitterTitle": "카이세리 공항에서 카파도키아까지 셔틀",
    "twitterDescription": "카이세리(ASR)에서 괴레메, 위르귀프, 우치히사르, 아바노스, 차우신, 오르타히사르까지 1인 €15 합승 셔틀. 기사에게 현금 결제."
  },
  {
    "slug": "nevsehir-airport-shuttle",
    "title": "네브셰히르 공항에서 카파도키아까지 셔틀 | 공항·호텔 서비스",
    "description": "네브셰히르 공항(NAV)에서 카파도키아 호텔까지 셔틀: 1인 €15, 기사에게 현금 결제, 괴레메·위르귀프·우치히사르·아바노스·차우신·오르타히사르.",
    "eyebrow": "NAV 공항 셔틀",
    "h1": "네브셰히르 공항에서 카파도키아까지 셔틀",
    "lead": "네브셰히르 카파도키아 공항에서 서비스 지역 숙소까지 1인 €15의 합승 셔틀을 예약하세요. 항공편에 맞춘 미팅 안내를 WhatsApp으로 확인합니다.",
    "sections": [
      {
        "heading": "네브셰히르 공항: 카파도키아 중심부에 더 가까운 공항",
        "paragraphs": [
          "NAV는 괴레메, 우치히사르와 여러 중심 숙박 지역에 도로상 더 가깝습니다. 다른 호텔 정차 전 기준으로 우치히사르는 약 35 km / 30–40분, 괴레메는 약 40 km / 35–45분이며, 위르귀프, 아바노스, 오르타히사르, 차우신은 각각 다른 이동 시간이 적용됩니다."
        ]
      },
      {
        "heading": "NAV 합승 셔틀은 1인 €15",
        "paragraphs": [
          "네브셰히르 합승 공항 셔틀은 **1인 편도 €15**, **왕복 €30**입니다. 프라이빗 요금은 ASR보다 낮아 Vito는 편도 €80, Sprinter는 €90입니다."
        ]
      },
      {
        "heading": "NAV 도착 후 준비할 정보",
        "paragraphs": [
          "이 서비스는 고정 시간표의 대중버스가 아니라 사전 예약형 합승 픽업입니다. 같은 방향의 호텔 승객이 함께 배정될 수 있습니다. 예약할 때 항공편 번호, 숙소 전체 이름, 승객 정보, WhatsApp 연락처를 입력하고 수하물을 찾은 뒤 확인받은 공항 미팅 안내를 따르세요. 짧은 노선이라도 올바른 합승 셔틀과 연결하는 핵심 정보는 항공편 번호와 정확한 숙소 이름입니다."
        ]
      },
      {
        "heading": "NAV가 가까워도 호텔 지역에 따라 경로는 달라집니다",
        "paragraphs": [
          "NAV가 중심부에 가깝다고 해서 모든 호텔이 같은 방식으로 이동하는 것은 아닙니다. 우치히사르는 특히 가깝고, 아바노스와 위르귀프는 더 멀며, 괴레메의 동굴 호텔 골목이나 오르타히사르·차우신의 마을길은 마지막 접근 방식에 영향을 줄 수 있습니다. 하나의 ‘NAV→카파도키아’ 시간보다 실제 숙소 지역의 거리와 접근 정보를 확인하세요."
        ]
      },
      {
        "heading": "NAV로 돌아갈 때도 실제 호텔 지역 기준으로 픽업합니다",
        "paragraphs": [
          "네브셰히르 공항으로 돌아가는 합승 셔틀도 1인 €15입니다. 출발 항공편과 [[카파도키아에서 네브셰히르 공항까지 셔틀|cappadocia-to-nevsehir-airport-shuttle]]의 실제 지역 노선을 기준으로 픽업을 확인합니다. 괴레메 픽업을 우치히사르나 아바노스와 같은 방식으로 계획하지 않습니다."
        ]
      },
      {
        "heading": "Nevsehir Kapadokya Airport와 NAV는 같은 공항을 가리킵니다",
        "paragraphs": [
          "검색 결과나 여행 서류에서 **Nevsehir Kapadokya Airport**, **Kapadokya Airport**, **NAV Airport**라는 표현을 모두 볼 수 있습니다. 이 픽업 서비스에서는 모두 네브셰히르/카파도키아 지역을 이용하는 같은 공항을 뜻합니다. 예약할 때는 NAV를 선택하고 실제 항공편 번호를 입력하세요."
        ]
      }
    ],
    "faq": [
      {
        "q": "네브셰히르 공항에서 카파도키아까지 셔틀은 얼마인가요?",
        "a": "1인 편도 €15, 왕복 €30입니다."
      },
      {
        "q": "NAV가 괴레메와 우치히사르에 더 가까운 공항인가요?",
        "a": "네. 일반적으로 NAV가 ASR보다 두 중심 지역에 도로상 더 가깝습니다."
      },
      {
        "q": "네브셰히르 프라이빗 픽업 요금은 얼마인가요?",
        "a": "Vito 편도 €80, Sprinter 편도 €90이며 차량당 요금입니다."
      },
      {
        "q": "NAV 셔틀은 고정 시간표의 공항버스처럼 운행하나요?",
        "a": "아니요. 확정된 승객과 항공편을 기준으로 운영하는 사전 예약형 합승 공항-호텔 서비스입니다."
      },
      {
        "q": "출발할 때도 NAV 셔틀이 호텔로 픽업 오나요?",
        "a": "네. 호텔 → 공항 또는 왕복을 예약하고 확인받은 픽업 시간을 따르세요."
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
    "twitterTitle": "네브셰히르 공항에서 카파도키아까지 셔틀",
    "twitterDescription": "네브셰히르 공항(NAV)에서 괴레메, 위르귀프, 우치히사르, 아바노스, 차우신, 오르타히사르까지 1인 €15 합승 셔틀. 기사에게 현금 결제."
  },
  {
    "slug": "cappadocia-to-kayseri-airport-shuttle",
    "title": "카파도키아에서 카이세리 공항까지 셔틀 | 호텔 픽업",
    "description": "괴레메, 위르귀프, 우치히사르, 아바노스, 차우신, 오르타히사르에서 카이세리 공항(ASR)까지 호텔 픽업 셔틀 1인 €15.",
    "eyebrow": "카파도키아 → ASR",
    "h1": "카파도키아에서 카이세리 공항까지 셔틀",
    "lead": "카파도키아 서비스 지역의 호텔에서 카이세리 에르킬레트 공항까지 1인 €15 셔틀을 예약하세요. 픽업 장소와 시간은 실제 출발 항공편을 기준으로 확인합니다.",
    "sections": [
      {
        "heading": "ASR 출발 계획은 지도상의 거리보다 일찍 시작됩니다",
        "paragraphs": [
          "카이세리 공항은 카파도키아 중심부의 대부분 호텔에서 더 긴 도로 구간입니다. 확정 호텔 픽업 시간은 실제 출발 항공편, 숙소 지역, 다른 합승 픽업, 공항 도착 여유 시간을 함께 고려합니다. 도착 때의 주행 시간을 단순히 거꾸로 계산해서는 안 됩니다."
        ]
      },
      {
        "heading": "여섯 숙박 지역은 카이세리로 가는 출발 방식이 서로 다릅니다",
        "paragraphs": [
          "동굴 호텔, 좁은 마을길, 접근이 어려운 주소 등으로 인해 호텔 진입 조건은 지역과 숙소마다 다릅니다. 확정된 픽업 장소는 일반적인 마을 중심점이 아니라 실제 숙소 위치를 기준으로 해야 합니다."
        ]
      },
      {
        "heading": "확정된 ASR 픽업 시간대가 시작되기 전에 준비하세요",
        "paragraphs": [
          "카이세리까지의 도로가 더 길기 때문에 픽업 시간대가 시작되기 전에 짐을 준비하고 확정 장소에서 대기하세요. 직접 도로 시간만으로 출발 시각을 계산하지 마세요. 다른 호텔 픽업과 공항 도착 여유 시간이 이미 확정 계획에 반영되어 있습니다."
        ]
      },
      {
        "heading": "전용 차량으로 카이세리 공항까지 이동",
        "paragraphs": [
          "[[프라이빗 픽업|private-airport-transfer-cappadocia]]은 Vito 최대 5명 편도 €90, Sprinter 최대 16명 편도 €110입니다. 다른 호텔 픽업은 없지만 숙소에서는 차량이 안전하게 접근하고 정차할 수 있는 장소가 필요합니다."
        ]
      },
      {
        "heading": "호텔에서 ASR까지 긴 구간을 출발하기 전 마지막 확인",
        "paragraphs": [
          "카이세리 픽업 전 체크아웃을 마치고 짐을 준비한 뒤 항공편 번호와 만나는 장소를 확인하세요. 합승 차량은 공항으로 향하기 전에 다른 서비스 지역의 호텔을 픽업할 수 있으므로, 확정 시각을 대략적인 권고가 아니라 픽업 시간대의 시작으로 생각하세요."
        ]
      }
    ],
    "faq": [
      {
        "q": "카파도키아에서 카이세리 공항까지 셔틀은 얼마인가요?",
        "a": "1인 편도 €15입니다."
      },
      {
        "q": "왜 ASR 픽업 시간을 직접 도로 시간만으로 계산하면 안 되나요?",
        "a": "더 긴 공항 도로, 호텔 접근, 다른 합승 픽업이 모두 확정 픽업 계획에 포함되어야 하기 때문입니다."
      },
      {
        "q": "어느 지역에서 ASR 합승 셔틀을 이용할 수 있나요?",
        "a": "괴레메, 위르귀프, 우치히사르, 아바노스, 차우신, 오르타히사르입니다."
      },
      {
        "q": "카이세리 공항까지 프라이빗 차량도 예약할 수 있나요?",
        "a": "네. Vito 편도 €90 또는 Sprinter €110이며 차량당 요금입니다."
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
    "twitterTitle": "카파도키아에서 카이세리 공항까지 셔틀 | 호텔 픽업",
    "twitterDescription": "괴레메, 위르귀프, 우치히사르, 아바노스, 차우신, 오르타히사르에서 카이세리 공항(ASR)까지 1인 €15 호텔 픽업 셔틀."
  },
  {
    "slug": "cappadocia-to-nevsehir-airport-shuttle",
    "title": "카파도키아에서 네브셰히르 공항까지 셔틀 | 호텔 픽업",
    "description": "괴레메, 위르귀프, 우치히사르, 아바노스, 차우신, 오르타히사르에서 네브셰히르 공항(NAV)까지 호텔 픽업 셔틀 1인 €15.",
    "eyebrow": "카파도키아 → NAV",
    "h1": "카파도키아에서 네브셰히르 공항까지 셔틀",
    "lead": "카파도키아 서비스 지역의 호텔에서 네브셰히르 카파도키아 공항까지 1인 €15 셔틀을 예약하세요. 픽업 장소와 시간은 실제 출발 항공편을 기준으로 확인합니다.",
    "sections": [
      {
        "heading": "NAV는 더 가깝지만 호텔 픽업 시간은 여전히 항공편을 기준으로 합니다",
        "paragraphs": [
          "네브셰히르 공항은 많은 중심 지역에서 도로 거리가 짧지만, 그렇다고 임의로 더 늦은 픽업 시간을 잡아서는 안 됩니다. 합승 픽업은 실제 출발 항공편, 호텔 위치, 당일 승객 계획을 기준으로 확인합니다."
        ]
      },
      {
        "heading": "짧은 NAV 노선도 호텔 지역에 따라 달라집니다",
        "paragraphs": [
          "우치히사르는 NAV에 특히 가깝고 괴레메도 비교적 가까운 편입니다. 반면 위르귀프, 아바노스, 오르타히사르, 차우신은 서로 다른 지방 도로를 이용합니다. 픽업 시간과 실제 만나는 장소는 넓은 ‘카파도키아→네브셰히르’ 추정치가 아니라 실제 호텔 지역에 맞춰야 합니다."
        ]
      },
      {
        "heading": "NAV 픽업 시간대가 시작되기 전에 준비하세요",
        "paragraphs": [
          "NAV가 여러 중심 지역에 더 가깝더라도 확정 픽업 시간에는 호텔 접근, 합승 픽업, 공항 도착 여유 시간이 포함됩니다. 짐을 준비하고 픽업 시간대가 시작되기 전에 확정 지점에서 대기하세요."
        ]
      },
      {
        "heading": "네브셰히르 프라이빗 출발은 더 직접적인 대안입니다",
        "paragraphs": [
          "전용 [[프라이빗 픽업|private-airport-transfer-cappadocia]]은 Vito 최대 5명 편도 €80, Sprinter 최대 16명 편도 €90입니다. 다른 호텔 픽업은 없지만 최종 만나는 지점은 여전히 차량의 안전한 접근 여부에 따라 달라집니다."
        ]
      },
      {
        "heading": "NAV가 가깝다고 해서 픽업이 늦어지는 것은 아닙니다",
        "paragraphs": [
          "네브셰히르 픽업 전 짐을 준비하고 항공편 번호와 만나는 장소를 확인하세요. 공항이 가까워도 합승 차량은 다른 호텔을 들를 수 있으므로 확정 시각을 대략적인 권고가 아니라 픽업 시간대의 시작으로 생각하세요."
        ]
      }
    ],
    "faq": [
      {
        "q": "카파도키아에서 네브셰히르 공항까지 셔틀은 얼마인가요?",
        "a": "1인 편도 €15입니다."
      },
      {
        "q": "NAV가 가까우니 제가 임의로 더 늦게 출발해도 되나요?",
        "a": "아니요. 픽업 시간을 직접 변경하지 말고 항공편, 호텔, 합승 픽업을 기준으로 확인받은 시각을 따르세요."
      },
      {
        "q": "어느 지역에서 NAV 합승 셔틀을 이용할 수 있나요?",
        "a": "괴레메, 위르귀프, 우치히사르, 아바노스, 차우신, 오르타히사르입니다."
      },
      {
        "q": "네브셰히르 공항까지 프라이빗 차량도 예약할 수 있나요?",
        "a": "네. Vito 편도 €80 또는 Sprinter €90이며 차량당 요금입니다."
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
    "twitterTitle": "카파도키아에서 네브셰히르 공항까지 셔틀 | 호텔 픽업",
    "twitterDescription": "괴레메, 위르귀프, 우치히사르, 아바노스, 차우신, 오르타히사르에서 네브셰히르 공항(NAV)까지 1인 €15 호텔 픽업 셔틀."
  },
  {
    "slug": "goreme-airport-transfer",
    "title": "괴레메 공항 픽업·샌딩 | ASR·NAV 셔틀",
    "description": "카이세리·네브셰히르 공항에서 괴레메까지: 1인 €15 셔틀, 프라이빗 Vito/Sprinter, 호텔 접근, 노선 시간, 귀국 픽업 안내.",
    "eyebrow": "괴레메 공항 픽업 안내",
    "h1": "괴레메 공항 픽업·샌딩",
    "lead": "괴레메 숙박 일정에 맞춰 카이세리 공항과 네브셰히르 공항을 비교한 뒤, 실제 항공편에 해당하는 셔틀 노선을 선택하세요.",
    "sections": [
      {
        "heading": "괴레메 픽업 계획은 동굴 호텔 골목에서 시작됩니다",
        "paragraphs": [
          "괴레메는 카파도키아의 대표 숙박 지역으로, 작은 중심부 주변에 동굴 호텔이 많이 모여 있습니다. 편리한 위치이지만 픽업에서는 중요한 차이가 생깁니다. 모든 호텔 입구가 넓은 도로에 있는 것은 아니므로 예약에 단순히 ‘괴레메’라고 적는 것보다 숙소의 정확한 전체 이름이 훨씬 유용합니다.",
          "괴레메에는 이름이 비슷한 호텔이 많습니다. 예약서의 정확한 이름을 보내면 이름에 ‘cave’, ‘suite’, ‘house’, ‘stone’ 등이 포함된 숙소를 구분하기 쉽습니다. 게스트하우스에 출입구가 여러 개 있거나 지도 핀과 다른 골목에 리셉션이 있는 경우 특히 중요합니다."
        ]
      },
      {
        "heading": "동굴 호텔, 언덕길과 실제 하차 지점",
        "paragraphs": [
          "괴레메의 호텔 접근은 길마다 다릅니다. 버스터미널과 낮은 중심부 주변 숙소는 비교적 접근이 쉬운 편이지만, 언덕의 동굴 호텔은 가파르거나 좁은 일방통행 길에 있을 수 있습니다. 큰 차량이 입구 앞에 안전하게 기다릴 수 없다면 가장 가까운 안전한 지점을 이용할 수 있습니다. 일부 골목에서는 [[프라이빗 Vito|private-airport-transfer-cappadocia]]가 더 편할 수 있지만, 정확한 장소는 실제 숙소 위치를 확인한 뒤 안내하며 미리 문 앞 접근을 보장하지 않습니다."
        ]
      },
      {
        "heading": "ASR 또는 NAV: 괴레메에는 어느 공항이 더 나을까요?",
        "paragraphs": [
          "카이세리 공항(ASR)에서 괴레메까지는 약 **75 km / 60–75분**, 네브셰히르 공항(NAV)에서는 약 **40 km / 35–45분**입니다. NAV가 도로상 더 짧은 경우가 많지만 항공편 시간에 따라 ASR이 전체 여행에서는 더 편할 수 있습니다. 두 항공편 모두 가능하다면 [[카이세리 또는 네브셰히르 공항 비교|kayseri-or-nevsehir-airport-for-cappadocia]]를 확인하세요."
        ]
      },
      {
        "heading": "괴레메에서 정확히 확인해 두면 좋은 숙소 이름",
        "paragraphs": [
          "아래는 픽업 계획을 돕기 위한 잘 알려진 괴레메 숙소 이름의 예이며 호텔 순위가 아닙니다. 목록에 없는 호텔도 서비스 지역 안에 있다면 예약을 요청할 수 있습니다."
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
        "heading": "출발 항공편에 맞춘 괴레메 호텔 픽업 계획",
        "paragraphs": [
          "출발 당일에는 픽업 시간대가 시작되기 전에 짐을 준비하고 확정된 장소로 돌아오세요. 일출 무렵의 도로 활동, 겨울 날씨, 호텔 픽업 순서가 시간에 영향을 줄 수 있으므로 지도 거리만으로 계산하지 말고 확인받은 시간을 따르세요.",
          "ASR은 [[괴레메에서 카이세리 공항|goreme-to-kayseri-airport-shuttle]], NAV는 [[괴레메에서 네브셰히르 공항|goreme-to-nevsehir-airport-shuttle]]을 확인하세요."
        ]
      }
    ],
    "faq": [
      {
        "q": "카이세리와 네브셰히르에서 괴레메 셔틀 요금이 같은가요?",
        "a": "네. ASR과 NAV 모두 합승 셔틀은 1인 편도 €15입니다. 도로 거리는 다르지만 합승 요금은 같습니다."
      },
      {
        "q": "공항 도착과 괴레메 호텔의 출발 픽업을 한 번에 예약할 수 있나요?",
        "a": "네. 왕복을 선택하고 도착·출발 항공편 번호와 날짜를 모두 입력하면 두 구간을 별도로 계획할 수 있습니다."
      },
      {
        "q": "괴레메 예약 전에 ASR 또는 NAV를 선택해야 하나요?",
        "a": "네. 프라이빗 요금, 도로 거리, 공항 미팅, 귀국 노선이 공항에 따라 달라지므로 항공권에 표시된 공항을 선택하세요."
      },
      {
        "q": "셔틀이 괴레메의 모든 동굴 호텔 문 앞까지 갈 수 있나요?",
        "a": "항상 그렇지는 않습니다. 일부 언덕길은 큰 차량이 들어가기 어렵거나 안전하지 않아 가장 가까운 안전한 미팅 또는 하차 지점을 WhatsApp으로 안내할 수 있습니다."
      },
      {
        "q": "열기구 이동이 괴레메 공항 픽업에 영향을 주나요?",
        "a": "일출 무렵에는 그럴 수 있습니다. 도로 활동과 호텔 픽업 때문에 지도 거리만 계산하지 말고 확정 시간을 따르는 것이 좋습니다."
      },
      {
        "q": "호텔 이름 대신 괴레메만 입력해도 되나요?",
        "a": "정확한 호텔 또는 숙소 전체 이름을 입력하세요. 괴레메에는 이름이 비슷한 동굴 숙소가 많아 정확한 숙소 확인이 노선 계획에 중요합니다."
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
    "twitterTitle": "괴레메 공항 픽업·샌딩 | ASR·NAV 셔틀",
    "twitterDescription": "카이세리·네브셰히르 공항에서 괴레메까지: 1인 €15 셔틀, 프라이빗 Vito/Sprinter, 호텔 접근 및 노선 시간."
  },
  {
    "slug": "kayseri-airport-to-goreme-shuttle",
    "title": "카이세리 공항에서 괴레메까지 셔틀 | 합승 셔틀·프라이빗 픽업",
    "description": "카이세리 공항(ASR)에서 괴레메: 1인 €15 합승 셔틀, 프라이빗 Vito/Sprinter, 75 km, 60–75분, 호텔 하차 및 예약 정보.",
    "eyebrow": "ASR → 괴레메 공항 셔틀",
    "h1": "카이세리 공항에서 괴레메까지 셔틀",
    "lead": "카이세리 공항(ASR)에서 괴레메까지는 1인 편도 €15의 합승 셔틀 또는 프라이빗 Vito/Sprinter로 이동할 수 있습니다. 일반적인 도로 거리는 약 75 km, 주행 시간은 60–75분입니다. 괴레메의 동굴호텔 골목은 마지막 차량 접근과 하차 지점에 영향을 줄 수 있으므로 예약한 숙소의 정확한 전체 이름이 중요합니다.",
    "route": {
      "airport": "kayseri",
      "town": "goreme",
      "direction": "arrival"
    },
    "sections": [
      {
        "heading": "괴레메까지 이어지는 약 75 km의 ASR 이동 구간",
        "paragraphs": [
          "카이세리 공항은 괴레메로 들어오는 두 주요 공항 가운데 도로 이동이 더 긴 편입니다. 일반적인 기준은 약 **75 km / 60–75분**입니다. 수하물을 찾은 뒤에는 긴 ASR 이동 끝에 실제 호텔까지 어떻게 접근하느냐가 마지막 변수입니다. 공항 전체 서비스는 [[카이세리 공항 셔틀|kayseri-airport-shuttle]]에서 확인할 수 있습니다."
        ]
      },
      {
        "heading": "고속도로를 벗어난 마지막 몇 분이 더 걸릴 수 있습니다",
        "paragraphs": [
          "괴레메의 많은 동굴호텔 주변은 길이 좁고 경사가 있습니다. 큰 도로에서의 이동이 순조로워도 마지막 호텔 접근에는 시간이 더 필요할 수 있습니다. 예약서에 표시된 숙소 이름을 그대로 알려주면 올바른 골목이나 실제 차량이 정차할 수 있는 하차 지점을 확인하는 데 도움이 됩니다.",
          "늦은 시간에 도착하는 항공편이라면 체크인 후 나머지 일정을 여유롭게 잡는 편이 좋습니다. ASR에서 괴레메까지의 이동 자체가 이미 일정한 시간이 필요한 구간입니다."
        ]
      },
      {
        "heading": "이 노선의 프라이빗 공항 픽업",
        "paragraphs": [
          "전용 차량을 원한다면 Vito는 최대 5명까지 편도 €90, Sprinter는 최대 16명까지 €110입니다. 자세한 내용은 [[프라이빗 공항 픽업|private-airport-transfer-cappadocia]]에서 확인하세요."
        ]
      },
      {
        "heading": "NAV도 선택 가능하다면 거리보다 실제 항공편을 함께 비교하세요",
        "paragraphs": [
          "네브셰히르 공항은 도로상 괴레메에 더 가깝지만, ASR 항공편 시간이 더 좋다면 전체 이동은 오히려 더 편할 수 있습니다. 아직 항공권을 구입하지 않았다면 [[네브셰히르 공항에서 괴레메까지 셔틀|nevsehir-airport-to-goreme-shuttle]]과 비교해 보세요. 두 공항을 한 번에 비교하려면 [[괴레메 공항 픽업|goreme-airport-transfer]]을 참고하세요."
        ]
      }
    ],
    "faq": [
      {
        "q": "카이세리 공항은 괴레메 셔틀을 이용하기에 너무 먼가요?",
        "a": "아니요. ASR은 카파도키아의 대표적인 관문 중 하나이며, 괴레메까지는 약 75 km, 일반적인 도로 이동은 60–75분 정도입니다. 합승 셔틀의 다른 정차가 있으면 총 시간은 달라질 수 있습니다."
      },
      {
        "q": "합승 셔틀 대신 이 노선에서 프라이빗 차량을 예약할 수 있나요?",
        "a": "네. 프라이빗 Vito는 최대 5명까지 편도 €90, Sprinter는 최대 16명까지 €110이며 모두 차량당 요금입니다."
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
    "twitterTitle": "카이세리 공항에서 괴레메까지 셔틀 | 합승 셔틀·프라이빗 픽업",
    "twitterDescription": "카이세리 공항(ASR)에서 괴레메: 1인 €15 합승 셔틀, 프라이빗 Vito/Sprinter, 75 km, 60–75분, 호텔 하차 및 예약 정보."
  },
  {
    "slug": "kayseri-airport-to-urgup-shuttle",
    "title": "카이세리 공항에서 위르귀프까지 셔틀 | 합승 셔틀·프라이빗 픽업",
    "description": "카이세리 공항(ASR)에서 위르귀프: 1인 €15 합승 셔틀, 프라이빗 Vito/Sprinter, 70 km, 60–75분, 호텔 하차 및 예약 정보.",
    "eyebrow": "ASR → 위르귀프 공항 셔틀",
    "h1": "카이세리 공항에서 위르귀프까지 셔틀",
    "lead": "카이세리 공항(ASR)에서 위르귀프까지는 1인 편도 €15의 합승 셔틀 또는 프라이빗 Vito/Sprinter로 이동할 수 있습니다. 일반적인 도로 거리는 약 70 km, 주행 시간은 60–75분입니다. 위르귀프 중심부는 대체로 차량 접근이 수월하지만, 언덕에 자리한 일부 석조·동굴 숙소는 마지막 접근 방식이 달라질 수 있습니다.",
    "route": {
      "airport": "kayseri",
      "town": "urgup",
      "direction": "arrival"
    },
    "sections": [
      {
        "heading": "카이세리 공항에서 위르귀프: 약 70 km / 60–75분",
        "paragraphs": [
          "위르귀프는 카파도키아 중심부의 동쪽에 위치합니다. 카이세리 공항에서의 일반적인 도로 기준은 약 70 km / 60–75분입니다. 숙소가 위르귀프에 있다면 예약 시 위르귀프를 선택해 실제 호텔 위치에 맞는 마지막 접근을 준비할 수 있도록 해주세요."
        ]
      },
      {
        "heading": "위르귀프 중심부와 언덕의 석조호텔은 접근 방식이 다릅니다",
        "paragraphs": [
          "위르귀프의 많은 숙소는 일반 도로로 접근할 수 있지만, 일부 오래된 석조·동굴 숙소는 경사지나 좁은 골목에 자리합니다. 모든 위르귀프 호텔에 공통으로 적용되는 하나의 하차 지점은 없습니다. 예약서에 적힌 숙소의 정확한 전체 이름을 알려주면 실제 위치에 맞춰 마지막 접근을 계획할 수 있습니다."
        ]
      },
      {
        "heading": "이 노선의 프라이빗 공항 픽업",
        "paragraphs": [
          "전용 차량을 원한다면 Vito는 최대 5명까지 편도 €90, Sprinter는 최대 16명까지 €110입니다. 자세한 내용은 [[프라이빗 공항 픽업|private-airport-transfer-cappadocia]]에서 확인하세요. ASR 대신 NAV를 이용할 수 있다면 [[네브셰히르 공항에서 위르귀프까지 셔틀|nevsehir-airport-to-urgup-shuttle]]도 비교해 보세요."
        ]
      }
    ],
    "faq": [
      {
        "q": "카이세리 공항 셔틀은 위르귀프 숙소까지 운행하나요?",
        "a": "네. 서비스 지역 내에서 확인된 위르귀프 숙소까지 운행하며, 실제 하차 지점은 해당 숙소의 차량 접근 여건에 따라 달라질 수 있습니다."
      },
      {
        "q": "카이세리 공항에서 위르귀프까지 얼마나 걸리나요?",
        "a": "합승 셔틀의 다른 정차를 제외한 일반적인 도로 기준은 약 70 km / 60–75분입니다."
      }
    ],
    "related": [
      "urgup-to-kayseri-airport-shuttle",
      "kayseri-airport-shuttle",
      "nevsehir-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "카이세리 공항에서 위르귀프까지 셔틀 | 합승 셔틀·프라이빗 픽업",
    "twitterDescription": "카이세리 공항(ASR)에서 위르귀프: 1인 €15 합승 셔틀, 프라이빗 Vito/Sprinter, 70 km, 60–75분, 호텔 하차 및 예약 정보."
  },
  {
    "slug": "kayseri-airport-to-uchisar-shuttle",
    "title": "카이세리 공항에서 우치히사르까지 셔틀 | 합승 셔틀·프라이빗 픽업",
    "description": "카이세리 공항(ASR)에서 우치히사르: 1인 €15 합승 셔틀, 프라이빗 Vito/Sprinter, 80 km, 70–85분, 호텔 하차 및 예약 정보.",
    "eyebrow": "ASR → 우치히사르 공항 셔틀",
    "h1": "카이세리 공항에서 우치히사르까지 셔틀",
    "lead": "카이세리 공항(ASR)에서 우치히사르까지는 1인 편도 €15의 합승 셔틀 또는 프라이빗 Vito/Sprinter로 이동할 수 있습니다. 일반적인 도로 거리는 약 80 km, 주행 시간은 70–85분입니다. 우치히사르는 언덕길이 가파르고 좁은 구간이 있어 마지막 호텔 접근은 실제 숙소 위치와 차량 진입 가능 여부에 따라 달라집니다.",
    "route": {
      "airport": "kayseri",
      "town": "uchisar",
      "direction": "arrival"
    },
    "sections": [
      {
        "heading": "카이세리 공항에서 우치히사르: 약 80 km / 70–85분",
        "paragraphs": [
          "우치히사르는 인근 여러 마을보다 높은 지대에 있고 호텔도 경사진 도로를 따라 흩어져 있습니다. 카이세리 공항에서의 일반적인 도로 기준은 약 80 km / 70–85분입니다. 숙소가 우치히사르에 있다면 예약 시 우치히사르를 선택해 마지막 호텔 접근을 정확히 계획할 수 있도록 해주세요."
        ]
      },
      {
        "heading": "우치히사르에서는 마지막 구간에 시간이 더 걸릴 수 있습니다",
        "paragraphs": [
          "우치히사르는 마을 위쪽으로 갈수록 길이 가파르고 좁아지며, 일부 동굴·석조 숙소는 큰 차량이 입구까지 직접 들어가기 어렵습니다. 모든 우치히사르 호텔에 동일한 하차 지점이 있는 것은 아닙니다. 예약서에 적힌 숙소의 정확한 이름을 알려주면 올바른 마지막 접근이나 차량이 안전하게 정차할 수 있는 가장 가까운 하차 지점을 정하는 데 도움이 됩니다."
        ]
      },
      {
        "heading": "이 노선의 프라이빗 공항 픽업",
        "paragraphs": [
          "전용 차량을 원한다면 Vito는 최대 5명까지 편도 €90, Sprinter는 최대 16명까지 €110입니다. 자세한 내용은 [[프라이빗 공항 픽업|private-airport-transfer-cappadocia]]에서 확인하세요. NAV를 이용할 수 있다면 [[네브셰히르 공항에서 우치히사르까지 셔틀|nevsehir-airport-to-uchisar-shuttle]]도 비교해 보세요."
        ]
      }
    ],
    "faq": [
      {
        "q": "카이세리 공항 셔틀은 우치히사르 숙소까지 바로 가나요?",
        "a": "서비스 지역 내에서 확인된 우치히사르 숙소까지 운행하지만, 실제 하차 지점은 해당 숙소의 도로와 차량 접근 여건에 따라 달라질 수 있습니다."
      },
      {
        "q": "카이세리 공항에서 우치히사르까지 얼마나 걸리나요?",
        "a": "합승 셔틀의 다른 정차를 제외한 일반적인 도로 기준은 약 80 km / 70–85분입니다."
      }
    ],
    "related": [
      "uchisar-to-kayseri-airport-shuttle",
      "kayseri-airport-shuttle",
      "nevsehir-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "카이세리 공항에서 우치히사르까지 셔틀 | 합승 셔틀·프라이빗 픽업",
    "twitterDescription": "카이세리 공항(ASR)에서 우치히사르: 1인 €15 합승 셔틀, 프라이빗 Vito/Sprinter, 80 km, 70–85분, 호텔 하차 및 예약 정보."
  },
  {
    "slug": "kayseri-airport-to-avanos-shuttle",
    "title": "카이세리 공항에서 아바노스까지 셔틀 | 합승 셔틀·프라이빗 픽업",
    "description": "카이세리 공항(ASR)에서 아바노스: 1인 €15 합승 셔틀, 프라이빗 Vito/Sprinter, 70 km, 60–75분, 호텔 하차 및 예약 정보.",
    "eyebrow": "ASR → 아바노스 공항 셔틀",
    "h1": "카이세리 공항에서 아바노스까지 셔틀",
    "lead": "카이세리 공항(ASR)에서 아바노스까지는 1인 편도 €15의 합승 셔틀 또는 프라이빗 Vito/Sprinter로 이동할 수 있습니다. 일반적인 도로 거리는 약 70 km, 주행 시간은 60–75분입니다. 아바노스의 숙소는 강 주변의 넓은 지역에 흩어져 있어 정확한 호텔 이름이 있어야 올바른 최종 하차 지점을 확인하기 쉽습니다.",
    "route": {
      "airport": "kayseri",
      "town": "avanos",
      "direction": "arrival"
    },
    "sections": [
      {
        "heading": "강을 따라 펼쳐진 아바노스: ASR에서 약 70 km / 60–75분",
        "paragraphs": [
          "아바노스는 강을 따라 길게 펼쳐져 있고, 인근의 언덕 마을보다 도로가 비교적 평탄하고 넓은 편입니다. 카이세리 공항에서의 일반적인 도로 기준은 약 70 km / 60–75분입니다. 숙소가 아바노스에 있다면 예약 시 아바노스를 선택해 실제 호텔 위치에 맞춰 마지막 접근을 계획할 수 있도록 해주세요."
        ]
      },
      {
        "heading": "아바노스는 언덕의 호텔 마을보다 숙소가 넓게 퍼져 있습니다",
        "paragraphs": [
          "아바노스의 숙소는 한곳에 밀집하기보다 강 양쪽과 여러 도로에 걸쳐 넓게 분포합니다. 단순히 “아바노스”라고만 입력하는 것보다 숙소의 정확한 전체 이름을 알려주면 실제 최종 하차 지점을 찾는 데 훨씬 도움이 됩니다."
        ]
      },
      {
        "heading": "이 노선의 프라이빗 공항 픽업",
        "paragraphs": [
          "전용 차량을 원한다면 Vito는 최대 5명까지 편도 €90, Sprinter는 최대 16명까지 €110입니다. 자세한 내용은 [[프라이빗 공항 픽업|private-airport-transfer-cappadocia]]에서 확인하세요. NAV도 가능하다면 [[네브셰히르 공항에서 아바노스까지 셔틀|nevsehir-airport-to-avanos-shuttle]]과 비교해 보세요."
        ]
      }
    ],
    "faq": [
      {
        "q": "카이세리 공항 셔틀은 아바노스 숙소까지 운행하나요?",
        "a": "네. 서비스 지역 내에서 확인된 아바노스 숙소까지 운행하며, 실제 하차 지점은 해당 숙소의 차량 접근 여건에 따라 달라질 수 있습니다."
      },
      {
        "q": "카이세리 공항에서 아바노스까지 얼마나 걸리나요?",
        "a": "합승 셔틀의 다른 정차를 제외한 일반적인 도로 기준은 약 70 km / 60–75분입니다."
      }
    ],
    "related": [
      "avanos-to-kayseri-airport-shuttle",
      "kayseri-airport-shuttle",
      "nevsehir-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "카이세리 공항에서 아바노스까지 셔틀 | 합승 셔틀·프라이빗 픽업",
    "twitterDescription": "카이세리 공항(ASR)에서 아바노스: 1인 €15 합승 셔틀, 프라이빗 Vito/Sprinter, 70 km, 60–75분, 호텔 하차 및 예약 정보."
  },
  {
    "slug": "kayseri-airport-to-ortahisar-shuttle",
    "title": "카이세리 공항에서 오르타히사르까지 셔틀 | 합승 셔틀·프라이빗 픽업",
    "description": "카이세리 공항(ASR)에서 오르타히사르: 1인 €15 합승 셔틀, 프라이빗 Vito/Sprinter, 75 km, 60–75분, 호텔 하차 및 예약 정보.",
    "eyebrow": "ASR → 오르타히사르 공항 셔틀",
    "h1": "카이세리 공항에서 오르타히사르까지 셔틀",
    "lead": "카이세리 공항(ASR)에서 오르타히사르까지는 1인 편도 €15의 합승 셔틀 또는 프라이빗 Vito/Sprinter로 이동할 수 있습니다. 일반적인 도로 거리는 약 75 km, 주행 시간은 60–75분입니다. 오르타히사르 마을 중심부의 일부 숙소 도로는 좁아지므로 마지막 차량 접근은 마을 이름만이 아니라 실제 숙소 위치를 기준으로 확인합니다.",
    "route": {
      "airport": "kayseri",
      "town": "ortahisar",
      "direction": "arrival"
    },
    "sections": [
      {
        "heading": "골목이 좁아지는 오르타히사르: ASR에서 약 75 km / 60–75분",
        "paragraphs": [
          "오르타히사르는 비교적 아담한 마을이며 중심부 주변의 일부 숙소 도로가 좁습니다. 카이세리 공항에서의 일반적인 도로 기준은 약 75 km / 60–75분입니다. 숙소가 오르타히사르에 있다면 예약 시 오르타히사르를 선택해 실제 호텔 위치에 맞춘 마지막 접근을 준비할 수 있도록 해주세요."
        ]
      },
      {
        "heading": "작은 마을이라도 정확한 숙소 이름이 필요합니다",
        "paragraphs": [
          "마을이 작다고 해서 모든 주소에 차량이 쉽게 접근할 수 있는 것은 아닙니다. 일부 게스트하우스는 큰 차량이 문 앞까지 들어가기 어려운 좁은 골목에 있습니다. 숙소의 정확한 전체 이름이 있으면 올바른 하차 지점과 필요한 경우 차량이 안전하게 정차할 수 있는 가까운 지점을 확인할 수 있습니다."
        ]
      },
      {
        "heading": "이 노선의 프라이빗 공항 픽업",
        "paragraphs": [
          "전용 차량을 원한다면 Vito는 최대 5명까지 편도 €90, Sprinter는 최대 16명까지 €110입니다. 자세한 내용은 [[프라이빗 공항 픽업|private-airport-transfer-cappadocia]]에서 확인하세요. NAV도 가능하다면 [[네브셰히르 공항에서 오르타히사르까지 셔틀|nevsehir-airport-to-ortahisar-shuttle]]과 비교해 보세요."
        ]
      }
    ],
    "faq": [
      {
        "q": "카이세리 공항 셔틀은 오르타히사르 숙소까지 운행하나요?",
        "a": "네. 서비스 지역 내에서 확인된 오르타히사르 숙소까지 운행하며, 실제 하차 지점은 해당 숙소의 차량 접근 여건에 따라 달라질 수 있습니다."
      },
      {
        "q": "카이세리 공항에서 오르타히사르까지 얼마나 걸리나요?",
        "a": "합승 셔틀의 다른 정차를 제외한 일반적인 도로 기준은 약 75 km / 60–75분입니다."
      }
    ],
    "related": [
      "ortahisar-to-kayseri-airport-shuttle",
      "kayseri-airport-shuttle",
      "nevsehir-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "카이세리 공항에서 오르타히사르까지 셔틀 | 합승 셔틀·프라이빗 픽업",
    "twitterDescription": "카이세리 공항(ASR)에서 오르타히사르: 1인 €15 합승 셔틀, 프라이빗 Vito/Sprinter, 75 km, 60–75분, 호텔 하차 및 예약 정보."
  },
  {
    "slug": "kayseri-airport-to-cavusin-shuttle",
    "title": "카이세리 공항에서 차우신까지 셔틀 | 합승 셔틀·프라이빗 픽업",
    "description": "카이세리 공항(ASR)에서 차우신: 1인 €15 합승 셔틀, 프라이빗 Vito/Sprinter, 75 km, 65–80분, 호텔 하차 및 예약 정보.",
    "eyebrow": "ASR → 차우신 공항 셔틀",
    "h1": "카이세리 공항에서 차우신까지 셔틀",
    "lead": "카이세리 공항(ASR)에서 차우신까지는 1인 편도 €15의 합승 셔틀 또는 프라이빗 Vito/Sprinter로 이동할 수 있습니다. 일반적인 도로 거리는 약 75 km, 주행 시간은 65–80분입니다. 차우신의 숙소는 큰길 주변부터 오래된 언덕길까지 분포해 있어 실제 정차 지점은 정확한 호텔 위치에 따라 달라집니다.",
    "route": {
      "airport": "kayseri",
      "town": "cavusin",
      "direction": "arrival"
    },
    "sections": [
      {
        "heading": "오래된 마을길과 신축 숙소가 함께 있는 차우신: ASR에서 약 75 km / 65–80분",
        "paragraphs": [
          "차우신에는 오래된 언덕길의 게스트하우스와 큰길 주변의 비교적 새로운 숙소가 함께 있어 마지막 접근 방식이 숙소마다 크게 달라질 수 있습니다. 카이세리 공항에서의 일반적인 도로 기준은 약 75 km / 65–80분입니다. 숙소가 차우신에 있다면 예약 시 차우신을 선택해 실제 위치에 맞는 마지막 접근을 준비할 수 있도록 해주세요."
        ]
      },
      {
        "heading": "차우신에서는 정확한 숙소 이름이 특히 중요합니다",
        "paragraphs": [
          "숙소가 오래된 언덕길, 마을 도로, 큰길 주변 등 서로 다른 구역에 흩어져 있기 때문에 단순한 “차우신” 위치만으로는 마지막 접근을 정확히 정하기 어렵습니다. 숙소의 전체 이름을 알려주면 차량이 가야 할 마을 구역과 실제 정차 지점을 확인하는 데 도움이 됩니다."
        ]
      },
      {
        "heading": "이 노선의 프라이빗 공항 픽업",
        "paragraphs": [
          "전용 차량을 원한다면 Vito는 최대 5명까지 편도 €90, Sprinter는 최대 16명까지 €110입니다. 자세한 내용은 [[프라이빗 공항 픽업|private-airport-transfer-cappadocia]]에서 확인하세요. NAV도 가능하다면 [[네브셰히르 공항에서 차우신까지 셔틀|nevsehir-airport-to-cavusin-shuttle]]과 비교해 보세요."
        ]
      }
    ],
    "faq": [
      {
        "q": "카이세리 공항 셔틀은 차우신 호텔에도 운행하나요?",
        "a": "네. 확인된 차우신 숙소까지 운행하지만, 실제 하차 지점은 해당 숙소의 차량 접근 가능 여부에 따라 달라집니다."
      },
      {
        "q": "카이세리 공항에서 차우신까지 얼마나 걸리나요?",
        "a": "합승 셔틀의 다른 정차를 제외한 일반적인 도로 기준은 약 75 km / 65–80분입니다."
      }
    ],
    "related": [
      "cavusin-to-kayseri-airport-shuttle",
      "kayseri-airport-shuttle",
      "nevsehir-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "카이세리 공항에서 차우신까지 셔틀 | 합승 셔틀·프라이빗 픽업",
    "twitterDescription": "카이세리 공항(ASR)에서 차우신: 1인 €15 합승 셔틀, 프라이빗 Vito/Sprinter, 75 km, 65–80분, 호텔 하차 및 예약 정보."
  },
  {
    "slug": "nevsehir-airport-to-goreme-shuttle",
    "title": "네브셰히르 공항에서 괴레메까지 셔틀 | 합승 셔틀·프라이빗 픽업",
    "description": "네브셰히르 공항(NAV)에서 괴레메: 1인 €15 합승 셔틀, 프라이빗 Vito/Sprinter, 40 km, 35–45분, 호텔 하차 및 예약 정보.",
    "eyebrow": "NAV → 괴레메 공항 셔틀",
    "h1": "네브셰히르 공항에서 괴레메까지 셔틀",
    "lead": "네브셰히르 공항(NAV)에서 괴레메까지는 1인 편도 €15의 합승 셔틀 또는 프라이빗 Vito/Sprinter로 이동할 수 있습니다. 일반적인 도로 거리는 약 40 km, 주행 시간은 35–45분입니다. 괴레메의 동굴호텔 골목은 마지막 차량 접근과 하차 지점에 영향을 줄 수 있으므로 숙소의 정확한 전체 이름이 중요합니다.",
    "route": {
      "airport": "nevsehir",
      "town": "goreme",
      "direction": "arrival"
    },
    "sections": [
      {
        "heading": "괴레메까지는 NAV가 더 짧은 도로 선택입니다",
        "paragraphs": [
          "네브셰히르 공항에서 괴레메까지의 일반적인 도로 기준은 약 40 km / 35–45분입니다. 공항에서 호텔까지의 이동이 비교적 짧다는 장점이 있지만, 그렇다고 모든 동굴호텔 입구가 차량이 바로 설 수 있는 위치가 되는 것은 아닙니다."
        ]
      },
      {
        "heading": "공항이 가까워도 마지막 호텔 접근은 별도로 확인해야 합니다",
        "paragraphs": [
          "NAV는 도로상 괴레메에 더 가깝지만, 마지막 몇 분은 실제 숙소 위치에 따라 달라집니다. 언덕의 동굴호텔은 천천히 접근해야 하거나 인근에서 차량이 안전하게 정차할 수 있는 지점을 이용해야 할 수 있으므로 짧은 NAV 노선에서도 숙소의 전체 이름이 중요합니다.",
          "두 공항을 비교하려면 [[괴레메 공항 픽업|goreme-airport-transfer]]을 참고하세요. ASR 항공편 시간이 더 좋다면 [[카이세리 공항에서 괴레메까지 셔틀|kayseri-airport-to-goreme-shuttle]]도 충분히 좋은 대안입니다."
        ]
      },
      {
        "heading": "이 노선의 프라이빗 공항 픽업",
        "paragraphs": [
          "전용 차량을 원한다면 Vito는 최대 5명까지 편도 €80, Sprinter는 최대 16명까지 €90입니다. 자세한 내용은 [[프라이빗 공항 픽업|private-airport-transfer-cappadocia]]에서 확인하세요."
        ]
      }
    ],
    "faq": [
      {
        "q": "네브셰히르 공항이 괴레메에 더 가까운 공항인가요?",
        "a": "네. NAV에서 괴레메까지는 약 40 km이며, ASR에서는 약 75 km입니다."
      },
      {
        "q": "NAV에서 도로가 짧으면 호텔 문 앞까지 반드시 내려주나요?",
        "a": "아니요. 동굴호텔 골목의 차량 접근 가능 여부는 공항과의 거리와 별개의 문제입니다."
      },
      {
        "q": "합승 셔틀 대신 이 노선에서 프라이빗 차량을 예약할 수 있나요?",
        "a": "네. 프라이빗 Vito는 최대 5명까지 편도 €80, Sprinter는 최대 16명까지 €90이며 모두 차량당 요금입니다."
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
    "twitterTitle": "네브셰히르 공항에서 괴레메까지 셔틀 | 합승 셔틀·프라이빗 픽업",
    "twitterDescription": "네브셰히르 공항(NAV)에서 괴레메: 1인 €15 합승 셔틀, 프라이빗 Vito/Sprinter, 40 km, 35–45분, 호텔 하차 및 예약 정보."
  },
  {
    "slug": "nevsehir-airport-to-urgup-shuttle",
    "title": "네브셰히르 공항에서 위르귀프까지 셔틀 | 합승 셔틀·프라이빗 픽업",
    "description": "네브셰히르 공항(NAV)에서 위르귀프: 1인 €15 합승 셔틀, 프라이빗 Vito/Sprinter, 50 km, 45–60분, 호텔 하차 및 예약 정보.",
    "eyebrow": "NAV → 위르귀프 공항 셔틀",
    "h1": "네브셰히르 공항에서 위르귀프까지 셔틀",
    "lead": "네브셰히르 공항(NAV)에서 위르귀프까지는 1인 편도 €15의 합승 셔틀 또는 프라이빗 Vito/Sprinter로 이동할 수 있습니다. 일반적인 도로 거리는 약 50 km, 주행 시간은 45–60분입니다. 위르귀프 중심부는 대체로 접근이 수월하지만, 언덕의 일부 석조·동굴 숙소는 마지막 접근 방식이 달라질 수 있습니다.",
    "route": {
      "airport": "nevsehir",
      "town": "urgup",
      "direction": "arrival"
    },
    "sections": [
      {
        "heading": "NAV는 지역 이동을 줄여 주지만 위르귀프는 괴레메·우치히사르보다 동쪽에 있습니다",
        "paragraphs": [
          "네브셰히르 공항에서 위르귀프까지는 약 **50 km / 45–60분**입니다. 카파도키아 중심부를 가로질러 이동하며, 위르귀프는 작은 마을보다 도로 폭이 다양하고 숙소도 더 넓게 퍼져 있습니다."
        ]
      },
      {
        "heading": "가격을 중시하면 합승 셔틀, 단독 이동을 원하면 프라이빗 차량",
        "paragraphs": [
          "1~2명이라면 합승 셔틀이 비용을 낮추는 데 유리합니다. 프라이빗 Vito는 최대 5명까지 편도 €80, Sprinter는 최대 16명까지 편도 €90입니다. 자세한 내용은 [[프라이빗 공항 픽업|private-airport-transfer-cappadocia]]에서 확인하거나 [[합승 셔틀과 프라이빗 픽업 비교|cappadocia-shared-shuttle-vs-private-transfer]]에서 두 서비스를 비교해 보세요."
        ]
      }
    ],
    "faq": [
      {
        "q": "네브셰히르 공항에서 위르귀프까지 얼마나 걸리나요?",
        "a": "합승 셔틀의 다른 정차를 제외한 일반적인 도로 기준은 약 50 km / 45–60분입니다."
      },
      {
        "q": "합승 셔틀 대신 이 노선에서 프라이빗 차량을 예약할 수 있나요?",
        "a": "네. 프라이빗 Vito는 최대 5명까지 편도 €80, Sprinter는 최대 16명까지 €90이며 모두 차량당 요금입니다."
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
    "twitterTitle": "네브셰히르 공항에서 위르귀프까지 셔틀 | 합승 셔틀·프라이빗 픽업",
    "twitterDescription": "네브셰히르 공항(NAV)에서 위르귀프: 1인 €15 합승 셔틀, 프라이빗 Vito/Sprinter, 50 km, 45–60분, 호텔 하차 및 예약 정보."
  },
  {
    "slug": "nevsehir-airport-to-uchisar-shuttle",
    "title": "네브셰히르 공항에서 우치히사르까지 셔틀 | 합승 셔틀·프라이빗 픽업",
    "description": "네브셰히르 공항(NAV)에서 우치히사르: 1인 €15 합승 셔틀, 프라이빗 Vito/Sprinter, 35 km, 30–40분, 호텔 하차 및 예약 정보.",
    "eyebrow": "NAV → 우치히사르 공항 셔틀",
    "h1": "네브셰히르 공항에서 우치히사르까지 셔틀",
    "lead": "네브셰히르 공항(NAV)에서 우치히사르까지는 1인 편도 €15의 합승 셔틀 또는 프라이빗 Vito/Sprinter로 이동할 수 있습니다. 일반적인 도로 거리는 약 35 km, 주행 시간은 30–40분입니다. 우치히사르의 언덕길은 가파르거나 좁을 수 있어 마지막 호텔 접근은 실제 숙소와 차량 진입 가능 여부에 따라 달라집니다.",
    "route": {
      "airport": "nevsehir",
      "town": "uchisar",
      "direction": "arrival"
    },
    "sections": [
      {
        "heading": "네브셰히르 공항에서 우치히사르: 약 35 km / 30–40분",
        "paragraphs": [
          "공항과 우치히사르의 거리는 약 35 km이며 일반적인 도로 이동은 30–40분 정도입니다. 비교적 짧은 노선이지만 언덕에 있는 호텔은 숙소 위치와 도로 접근에 따라 마지막 구간에 시간이 더 걸릴 수 있습니다."
        ]
      },
      {
        "heading": "짧은 노선이어도 숙소의 전체 이름이 필요합니다",
        "paragraphs": [
          "우치히사르는 마을 위쪽으로 갈수록 길이 좁아지고 경사가 커집니다. 공항이 가깝더라도 마지막 호텔 접근을 정확히 준비해야 합니다. 숙소의 전체 이름이 있으면 올바른 최종 정차 지점이나 차량이 안전하게 정차할 수 있는 가장 가까운 하차 지점을 계획할 수 있습니다.",
          "ASR로 도착한다면 [[카이세리 공항에서 우치히사르까지 셔틀|kayseri-airport-to-uchisar-shuttle]]을 확인하세요."
        ]
      },
      {
        "heading": "이 노선의 프라이빗 공항 픽업",
        "paragraphs": [
          "전용 차량을 원한다면 Vito는 최대 5명까지 편도 €80, Sprinter는 최대 16명까지 €90입니다. 자세한 내용은 [[프라이빗 공항 픽업|private-airport-transfer-cappadocia]]에서 확인하세요."
        ]
      }
    ],
    "faq": [
      {
        "q": "네브셰히르 공항에서 우치히사르까지 도로로 얼마나 걸리나요?",
        "a": "합승 셔틀의 호텔 정차나 마지막 숙소 접근에 필요한 추가 시간을 제외하면 일반적인 도로 기준은 약 35 km / 30–40분입니다."
      },
      {
        "q": "합승 셔틀 대신 이 노선에서 프라이빗 차량을 예약할 수 있나요?",
        "a": "네. 프라이빗 Vito는 최대 5명까지 편도 €80, Sprinter는 최대 16명까지 €90이며 모두 차량당 요금입니다."
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
    "twitterTitle": "네브셰히르 공항에서 우치히사르까지 셔틀 | 합승 셔틀·프라이빗 픽업",
    "twitterDescription": "네브셰히르 공항(NAV)에서 우치히사르: 1인 €15 합승 셔틀, 프라이빗 Vito/Sprinter, 35 km, 30–40분, 호텔 하차 및 예약 정보."
  },
  {
    "slug": "nevsehir-airport-to-avanos-shuttle",
    "title": "네브셰히르 공항에서 아바노스까지 셔틀 | 합승 셔틀·프라이빗 픽업",
    "description": "네브셰히르 공항(NAV)에서 아바노스: 1인 €15 합승 셔틀, 프라이빗 Vito/Sprinter, 38 km, 35–50분, 호텔 하차 및 예약 정보.",
    "eyebrow": "NAV → 아바노스 공항 셔틀",
    "h1": "네브셰히르 공항에서 아바노스까지 셔틀",
    "lead": "네브셰히르 공항(NAV)에서 아바노스까지는 1인 편도 €15의 합승 셔틀 또는 프라이빗 Vito/Sprinter로 이동할 수 있습니다. 일반적인 도로 거리는 약 38 km, 주행 시간은 35–50분입니다. 아바노스의 숙소는 강 주변의 넓은 지역에 흩어져 있어 정확한 호텔 이름이 있어야 올바른 최종 하차 지점을 확인하기 쉽습니다.",
    "route": {
      "airport": "nevsehir",
      "town": "avanos",
      "direction": "arrival"
    },
    "sections": [
      {
        "heading": "네브셰히르 공항에서 아바노스: 약 38 km / 35–50분",
        "paragraphs": [
          "네브셰히르 공항에서 아바노스까지의 일반적인 도로 기준은 약 38 km / 35–50분입니다. 아바노스의 숙소는 여러 구역에 넓게 퍼져 있으므로 단순한 “아바노스” 위치보다 숙소의 정확한 전체 이름이 있어야 실제 최종 정차 지점을 확인하기 쉽습니다."
        ]
      },
      {
        "heading": "이 노선의 프라이빗 공항 픽업",
        "paragraphs": [
          "전용 차량을 원한다면 Vito는 최대 5명까지 편도 €80, Sprinter는 최대 16명까지 €90입니다. 자세한 내용은 [[프라이빗 공항 픽업|private-airport-transfer-cappadocia]]에서 확인하세요."
        ]
      }
    ],
    "faq": [
      {
        "q": "아바노스는 네브셰히르 공항에서 가까운 편인가요?",
        "a": "일반적인 도로 기준은 약 38 km / 35–50분입니다."
      },
      {
        "q": "합승 셔틀 대신 이 노선에서 프라이빗 차량을 예약할 수 있나요?",
        "a": "네. 프라이빗 Vito는 최대 5명까지 편도 €80, Sprinter는 최대 16명까지 €90이며 모두 차량당 요금입니다."
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
    "twitterTitle": "네브셰히르 공항에서 아바노스까지 셔틀 | 합승 셔틀·프라이빗 픽업",
    "twitterDescription": "네브셰히르 공항(NAV)에서 아바노스: 1인 €15 합승 셔틀, 프라이빗 Vito/Sprinter, 38 km, 35–50분, 호텔 하차 및 예약 정보."
  },
  {
    "slug": "nevsehir-airport-to-ortahisar-shuttle",
    "title": "네브셰히르 공항에서 오르타히사르까지 셔틀 | 합승 셔틀·프라이빗 픽업",
    "description": "네브셰히르 공항(NAV)에서 오르타히사르: 1인 €15 합승 셔틀, 프라이빗 Vito/Sprinter, 45 km, 40–50분, 호텔 하차 및 예약 정보.",
    "eyebrow": "NAV → 오르타히사르 공항 셔틀",
    "h1": "네브셰히르 공항에서 오르타히사르까지 셔틀",
    "lead": "네브셰히르 공항(NAV)에서 오르타히사르까지는 1인 편도 €15의 합승 셔틀 또는 프라이빗 Vito/Sprinter로 이동할 수 있습니다. 일반적인 도로 거리는 약 45 km, 주행 시간은 40–50분입니다. 오르타히사르 중심부의 일부 숙소 도로는 좁아지므로 마지막 차량 접근은 마을 이름만이 아니라 실제 숙소를 기준으로 확인합니다.",
    "route": {
      "airport": "nevsehir",
      "town": "ortahisar",
      "direction": "arrival"
    },
    "sections": [
      {
        "heading": "네브셰히르 공항에서 오르타히사르: 약 45 km / 40–50분",
        "paragraphs": [
          "네브셰히르 공항에서 오르타히사르까지의 일반적인 도로 기준은 약 45 km / 40–50분입니다. 마을 안에서의 마지막 몇 분은 숙소가 있는 골목과 실제 차량 접근 여건에 따라 달라질 수 있습니다."
        ]
      },
      {
        "heading": "오르타히사르에서는 숙소의 전체 이름이 중요합니다",
        "paragraphs": [
          "오르타히사르는 아담한 마을이며 중심부 주변의 일부 숙소 도로가 좁습니다. “오르타히사르”라는 위치만으로는 호텔 접근을 정확히 정하기 어렵기 때문에 숙소의 전체 이름이 실제 정차 지점을 확인하는 데 도움이 됩니다.",
          "나중에 NAV로 출발한다면 돌아가는 길은 [[오르타히사르에서 네브셰히르 공항까지 셔틀|ortahisar-to-nevsehir-airport-shuttle]]에서 확인하세요."
        ]
      },
      {
        "heading": "이 노선의 프라이빗 공항 픽업",
        "paragraphs": [
          "전용 차량을 원한다면 Vito는 최대 5명까지 편도 €80, Sprinter는 최대 16명까지 €90입니다. 자세한 내용은 [[프라이빗 공항 픽업|private-airport-transfer-cappadocia]]에서 확인하세요."
        ]
      }
    ],
    "faq": [
      {
        "q": "NAV에서 오르타히사르까지 합승 셔틀이 운행하나요?",
        "a": "네. 네브셰히르 공항(NAV)에서 서비스 지역 내 오르타히사르 숙소까지 합승 셔틀을 이용할 수 있습니다."
      },
      {
        "q": "합승 셔틀 대신 이 노선에서 프라이빗 차량을 예약할 수 있나요?",
        "a": "네. 프라이빗 Vito는 최대 5명까지 편도 €80, Sprinter는 최대 16명까지 €90이며 모두 차량당 요금입니다."
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
    "twitterTitle": "네브셰히르 공항에서 오르타히사르까지 셔틀 | 합승 셔틀·프라이빗 픽업",
    "twitterDescription": "네브셰히르 공항(NAV)에서 오르타히사르: 1인 €15 합승 셔틀, 프라이빗 Vito/Sprinter, 45 km, 40–50분, 호텔 하차 및 예약 정보."
  },
  {
    "slug": "nevsehir-airport-to-cavusin-shuttle",
    "title": "네브셰히르 공항에서 차우신까지 셔틀 | 합승 셔틀·프라이빗 픽업",
    "description": "네브셰히르 공항(NAV)에서 차우신: 1인 €15 합승 셔틀, 프라이빗 Vito/Sprinter, 42 km, 40–55분, 호텔 하차 및 예약 정보.",
    "eyebrow": "NAV → 차우신 공항 셔틀",
    "h1": "네브셰히르 공항에서 차우신까지 셔틀",
    "lead": "네브셰히르 공항(NAV)에서 차우신까지는 1인 편도 €15의 합승 셔틀 또는 프라이빗 Vito/Sprinter로 이동할 수 있습니다. 일반적인 도로 거리는 약 42 km, 주행 시간은 40–55분입니다. 차우신의 숙소는 큰길, 오래된 마을, 계곡 쪽 구역에 걸쳐 있어 실제 정차 지점은 정확한 호텔 위치에 따라 달라집니다.",
    "route": {
      "airport": "nevsehir",
      "town": "cavusin",
      "direction": "arrival"
    },
    "sections": [
      {
        "heading": "네브셰히르 공항에서 차우신: 약 42 km / 40–55분",
        "paragraphs": [
          "네브셰히르 공항에서 차우신까지의 일반적인 도로 기준은 약 42 km / 40–55분입니다. 차우신의 숙소는 큰길, 오래된 마을, 계곡 접근 구역 등 서로 다른 위치에 있을 수 있으므로 정확한 숙소 전체 이름이 있어야 올바른 최종 정차 지점을 계획하기 쉽습니다."
        ]
      },
      {
        "heading": "이른 아침에는 마지막 접근 구간의 교통이 달라질 수 있습니다",
        "paragraphs": [
          "이른 아침에는 계곡과 열기구 이륙 구역 주변의 차량 이동이 늘어 차우신으로 들어가는 마지막 구간이 평소보다 복잡할 수 있습니다. NAV에서의 전체 거리가 짧더라도 이 지역 교통은 별도로 영향을 줄 수 있습니다."
        ]
      },
      {
        "heading": "항공편이 더 좋다면 ASR도 여전히 대안입니다",
        "paragraphs": [
          "더 긴 선택지는 [[카이세리 공항에서 차우신까지 셔틀|kayseri-airport-to-cavusin-shuttle]]입니다. 합승 요금은 두 공항 모두 동일하므로 최단 도로 거리보다 항공편 시간이 더 중요한 경우도 있습니다."
        ]
      },
      {
        "heading": "이 노선의 프라이빗 공항 픽업",
        "paragraphs": [
          "전용 차량을 원한다면 Vito는 최대 5명까지 편도 €80, Sprinter는 최대 16명까지 €90입니다. 자세한 내용은 [[프라이빗 공항 픽업|private-airport-transfer-cappadocia]]에서 확인하세요."
        ]
      }
    ],
    "faq": [
      {
        "q": "차우신은 괴레메와 별도의 셔틀 목적지인가요?",
        "a": "네. 차우신과 괴레메는 서로 다른 픽업·하차 지역이므로 정확한 정차 지점을 위해 숙소의 전체 이름이 필요합니다."
      },
      {
        "q": "합승 셔틀 대신 이 노선에서 프라이빗 차량을 예약할 수 있나요?",
        "a": "네. 프라이빗 Vito는 최대 5명까지 편도 €80, Sprinter는 최대 16명까지 €90이며 모두 차량당 요금입니다."
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
    "twitterTitle": "네브셰히르 공항에서 차우신까지 셔틀 | 합승 셔틀·프라이빗 픽업",
    "twitterDescription": "네브셰히르 공항(NAV)에서 차우신: 1인 €15 합승 셔틀, 프라이빗 Vito/Sprinter, 42 km, 40–55분, 호텔 하차 및 예약 정보."
  },
  {
    "slug": "goreme-to-kayseri-airport-shuttle",
    "title": "괴레메에서 카이세리 공항까지 셔틀 | 호텔 픽업",
    "description": "괴레메에서 카이세리 공항(ASR): 1인 €15 셔틀, 75 km, 60–75분, 호텔 픽업 및 프라이빗 Vito/Sprinter 옵션.",
    "eyebrow": "괴레메 → ASR 공항 셔틀",
    "h1": "괴레메에서 카이세리 공항까지 셔틀",
    "lead": "괴레메에서 카이세리 공항(ASR)으로 가는 호텔 픽업은 1인 편도 €15의 합승 셔틀 또는 프라이빗 Vito/Sprinter로 예약할 수 있습니다. 일반적인 도로 거리는 약 75 km, 주행 시간은 60–75분입니다. 괴레메의 동굴호텔과 언덕길 때문에 차량이 큰길로 나가기 전 현지 픽업 시간이 더 필요할 수 있습니다. 확정된 픽업 시간에는 다른 호텔의 합승 픽업과 공항 도착 여유 시간도 반영되어 있으므로 그 시간을 따르세요.",
    "route": {
      "airport": "kayseri",
      "town": "goreme",
      "direction": "return"
    },
    "sections": [
      {
        "heading": "괴레메에서 ASR로 갈 때는 실제 출발 여유 시간이 필요합니다",
        "paragraphs": [
          "괴레메에서 카이세리 공항까지는 도로로 약 75 km / 60–75분입니다. 하지만 확정된 픽업 시간에는 다른 호텔의 합승 픽업과 공항 도착 여유 시간도 포함되므로 단순 도로 시간만 계산했을 때보다 더 일찍 출발할 수 있습니다."
        ]
      },
      {
        "heading": "괴레메의 픽업 시간이 달라질 수 있는 이유",
        "paragraphs": [
          "괴레메에서는 여러 호텔 픽업이 잡혀 있으면 차량이 큰길로 나가기 전에 시간이 더 필요할 수 있습니다. 도로 주행 시간만으로 출발 시간을 계산하지 말고 예약 시 전달받은 확정 픽업 시간을 따르세요. 열기구가 뜨는 아침에는 큰길로 나가기 전 지역 교통이 늘어날 수도 있습니다.",
          "NAV에서 출발한다면 [[괴레메에서 네브셰히르 공항까지 셔틀|goreme-to-nevsehir-airport-shuttle]]을 확인하세요. 두 공항을 비교하려면 [[괴레메 공항 픽업|goreme-airport-transfer]]을 참고하세요."
        ]
      },
      {
        "heading": "이 노선의 프라이빗 공항 픽업",
        "paragraphs": [
          "전용 차량을 원한다면 Vito는 최대 5명까지 편도 €90, Sprinter는 최대 16명까지 €110입니다. 자세한 내용은 [[프라이빗 공항 픽업|private-airport-transfer-cappadocia]]에서 확인하세요."
        ]
      }
    ],
    "faq": [
      {
        "q": "왜 괴레메 픽업 시간이 60–75분의 도로 시간보다 더 이르게 잡힐 수 있나요?",
        "a": "합승 출발에는 다른 호텔 픽업 시간과 항공편 전에 필요한 공항 도착 여유 시간이 함께 반영될 수 있기 때문입니다."
      },
      {
        "q": "합승 셔틀 대신 이 노선에서 프라이빗 차량을 예약할 수 있나요?",
        "a": "네. 프라이빗 Vito는 최대 5명까지 편도 €90, Sprinter는 최대 16명까지 €110이며 모두 차량당 요금입니다."
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
    "twitterTitle": "괴레메에서 카이세리 공항까지 셔틀 | 호텔 픽업",
    "twitterDescription": "괴레메에서 카이세리 공항(ASR): 1인 €15 셔틀, 75 km, 60–75분, 호텔 픽업 및 프라이빗 Vito/Sprinter 옵션."
  },
  {
    "slug": "urgup-to-kayseri-airport-shuttle",
    "title": "위르귀프에서 카이세리 공항까지 셔틀 | 호텔 픽업",
    "description": "위르귀프에서 카이세리 공항(ASR): 1인 €15 셔틀, 70 km, 60–75분, 호텔 픽업 및 프라이빗 Vito/Sprinter 옵션.",
    "eyebrow": "위르귀프 → ASR 공항 셔틀",
    "h1": "위르귀프에서 카이세리 공항까지 셔틀",
    "lead": "위르귀프에서 카이세리 공항(ASR)으로 가는 호텔 픽업은 1인 편도 €15의 합승 셔틀 또는 프라이빗 Vito/Sprinter로 예약할 수 있습니다. 일반적인 도로 거리는 약 70 km, 주행 시간은 60–75분입니다. 위르귀프 숙소는 중심 도로와 언덕 구역에 걸쳐 있어 공항으로 출발하기 전 정확한 픽업 지점이 중요합니다. 확정 픽업 시간에는 다른 호텔 픽업과 공항 도착 여유 시간도 반영됩니다.",
    "route": {
      "airport": "kayseri",
      "town": "urgup",
      "direction": "return"
    },
    "sections": [
      {
        "heading": "위르귀프에서는 픽업 지점이 중요합니다",
        "paragraphs": [
          "위르귀프의 숙소는 중심 도로와 언덕 구역에 나뉘어 있어 차량이 큰길로 나오기 전 호텔 픽업 자체에 시간이 더 필요할 수 있습니다. 모든 오래된 골목에 차량이 들어갈 수 있다고 가정하지 말고 예약 시 확인된 픽업 지점에서 준비해 주세요."
        ]
      },
      {
        "heading": "위르귀프에서 카이세리 공항: 약 70 km / 60–75분",
        "paragraphs": [
          "일반적인 도로 기준은 약 70 km / 60–75분입니다. 도로 거리만으로 출발 시간을 직접 계산하지 말고 확정된 픽업 시간을 따르세요.",
          "도착 방향은 [[카이세리 공항에서 위르귀프까지 셔틀|kayseri-airport-to-urgup-shuttle]]을 확인하세요. NAV에서 출발한다면 [[위르귀프에서 네브셰히르 공항까지 셔틀|urgup-to-nevsehir-airport-shuttle]]을 참고하세요."
        ]
      },
      {
        "heading": "위르귀프 중심부와 언덕 숙소는 픽업 접근이 다릅니다",
        "paragraphs": [
          "중심부 호텔은 대체로 차량 접근이 수월합니다. 언덕이나 오래된 석조 숙소는 확정 픽업 지점까지 차량이 접근하는 데 몇 분 더 필요할 수 있으므로 이른 출발일수록 짐을 미리 준비해 두는 편이 좋습니다."
        ]
      },
      {
        "heading": "이 노선의 프라이빗 공항 픽업",
        "paragraphs": [
          "전용 차량을 원한다면 Vito는 최대 5명까지 편도 €90, Sprinter는 최대 16명까지 €110입니다. 자세한 내용은 [[프라이빗 공항 픽업|private-airport-transfer-cappadocia]]에서 확인하세요."
        ]
      }
    ],
    "faq": [
      {
        "q": "위르귀프의 동굴호텔에서도 ASR행 합승 셔틀 픽업이 가능한가요?",
        "a": "네. 다만 해당 숙소에서 차량이 실제로 접근할 수 있는 지점을 기준으로 픽업 장소가 확정됩니다."
      },
      {
        "q": "합승 셔틀 대신 이 노선에서 프라이빗 차량을 예약할 수 있나요?",
        "a": "네. 프라이빗 Vito는 최대 5명까지 편도 €90, Sprinter는 최대 16명까지 €110이며 모두 차량당 요금입니다."
      }
    ],
    "related": [
      "kayseri-airport-to-urgup-shuttle",
      "kayseri-airport-shuttle",
      "cappadocia-to-kayseri-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "위르귀프에서 카이세리 공항까지 셔틀 | 호텔 픽업",
    "twitterDescription": "위르귀프에서 카이세리 공항(ASR): 1인 €15 셔틀, 70 km, 60–75분, 호텔 픽업 및 프라이빗 Vito/Sprinter 옵션."
  },
  {
    "slug": "uchisar-to-kayseri-airport-shuttle",
    "title": "우치히사르에서 카이세리 공항까지 셔틀 | 호텔 픽업",
    "description": "우치히사르에서 카이세리 공항(ASR): 1인 €15 셔틀, 80 km, 70–85분, 호텔 픽업 및 프라이빗 Vito/Sprinter 옵션.",
    "eyebrow": "우치히사르 → ASR 공항 셔틀",
    "h1": "우치히사르에서 카이세리 공항까지 셔틀",
    "lead": "우치히사르에서 카이세리 공항(ASR)으로 가는 호텔 픽업은 1인 편도 €15의 합승 셔틀 또는 프라이빗 Vito/Sprinter로 예약할 수 있습니다. 일반적인 도로 거리는 약 80 km, 주행 시간은 70–85분입니다. 우치히사르의 가파른 상부 마을길 때문에 모든 호텔 문 앞까지 차량이 바로 접근하지 못하고 차량이 접근하기 쉬운 픽업 지점이 필요할 수 있습니다. 확정된 픽업 시간에는 다른 호텔 픽업과 공항 도착 여유 시간도 반영됩니다.",
    "route": {
      "airport": "kayseri",
      "town": "uchisar",
      "direction": "return"
    },
    "sections": [
      {
        "heading": "우치히사르에서 카이세리 공항: 약 80 km / 70–85분",
        "paragraphs": [
          "우치히사르에서 카이세리 공항까지의 일반적인 도로 기준은 약 80 km / 70–85분입니다. 비교적 긴 공항 이동이므로 출발일에는 확정된 픽업 시간을 따르는 것이 중요합니다."
        ]
      },
      {
        "heading": "우치히사르에서는 픽업 지점이 특히 중요합니다",
        "paragraphs": [
          "우치히사르는 마을 위쪽으로 갈수록 길이 좁고 가파릅니다. 차량이 모든 숙소 문 앞까지 직접 갈 수 있는 것은 아니므로 실제 접근이 가능한 픽업 지점이 따로 정해질 수 있습니다. ASR까지의 이동이 긴 편이므로 출발이 늦어지지 않도록 픽업 시간대가 시작되기 전에 짐을 가지고 확정 지점에서 준비해 주세요.",
          "NAV에서 출발한다면 [[우치히사르에서 네브셰히르 공항까지 셔틀|uchisar-to-nevsehir-airport-shuttle]]을 확인하세요."
        ]
      },
      {
        "heading": "이 노선의 프라이빗 공항 픽업",
        "paragraphs": [
          "전용 차량을 원한다면 Vito는 최대 5명까지 편도 €90, Sprinter는 최대 16명까지 €110입니다. 자세한 내용은 [[프라이빗 공항 픽업|private-airport-transfer-cappadocia]]에서 확인하세요."
        ]
      }
    ],
    "faq": [
      {
        "q": "우치히사르에서 카이세리 공항까지 도로로 얼마나 걸리나요?",
        "a": "일반적인 도로 기준은 약 80 km / 70–85분입니다."
      },
      {
        "q": "호텔이 우치히사르의 가파른 골목에 있으면 어떻게 하나요?",
        "a": "예약 시 확인된 픽업 지점을 따르고 픽업 시간대가 시작되기 전에 짐을 가지고 그곳에서 준비해 주세요."
      },
      {
        "q": "합승 셔틀 대신 이 노선에서 프라이빗 차량을 예약할 수 있나요?",
        "a": "네. 프라이빗 Vito는 최대 5명까지 편도 €90, Sprinter는 최대 16명까지 €110이며 모두 차량당 요금입니다."
      }
    ],
    "related": [
      "kayseri-airport-to-uchisar-shuttle",
      "kayseri-airport-shuttle",
      "cappadocia-to-kayseri-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "우치히사르에서 카이세리 공항까지 셔틀 | 호텔 픽업",
    "twitterDescription": "우치히사르에서 카이세리 공항(ASR): 1인 €15 셔틀, 80 km, 70–85분, 호텔 픽업 및 프라이빗 Vito/Sprinter 옵션."
  },
  {
    "slug": "avanos-to-kayseri-airport-shuttle",
    "title": "아바노스에서 카이세리 공항까지 셔틀 | 호텔 픽업",
    "description": "아바노스에서 카이세리 공항(ASR): 1인 €15 셔틀, 70 km, 60–75분, 호텔 픽업 및 프라이빗 Vito/Sprinter 옵션.",
    "eyebrow": "아바노스 → ASR 공항 셔틀",
    "h1": "아바노스에서 카이세리 공항까지 셔틀",
    "lead": "아바노스에서 카이세리 공항(ASR)으로 가는 호텔 픽업은 1인 편도 €15의 합승 셔틀 또는 프라이빗 Vito/Sprinter로 예약할 수 있습니다. 일반적인 도로 거리는 약 70 km, 주행 시간은 60–75분입니다. 아바노스의 숙소는 여러 구역에 넓게 퍼져 있어 정확한 호텔 이름이 올바른 픽업 지점을 확인하는 데 중요합니다. 확정된 픽업 시간에는 다른 호텔 픽업과 공항 도착 여유 시간도 반영됩니다.",
    "route": {
      "airport": "kayseri",
      "town": "avanos",
      "direction": "return"
    },
    "sections": [
      {
        "heading": "아바노스에서 카이세리 공항: 약 70 km / 60–75분",
        "paragraphs": [
          "60–75분은 순수한 도로 주행의 일반적인 기준입니다. 합승 셔틀로 출발할 때는 다른 호텔 픽업과 공항 도착 여유 시간이 별도로 포함되므로 예약 시 전달받은 확정 픽업 시간을 따르세요.",
          "아바노스의 숙소는 여러 구역에 넓게 퍼져 있어 단순한 “아바노스” 위치보다 숙소의 정확한 전체 이름이 있어야 올바른 픽업 지점을 확인하기 쉽습니다.",
          "NAV에서 출발한다면 [[아바노스에서 네브셰히르 공항까지 셔틀|avanos-to-nevsehir-airport-shuttle]]을 확인하세요."
        ]
      },
      {
        "heading": "이 노선의 프라이빗 공항 픽업",
        "paragraphs": [
          "전용 차량을 원한다면 Vito는 최대 5명까지 편도 €90, Sprinter는 최대 16명까지 €110입니다. 자세한 내용은 [[프라이빗 공항 픽업|private-airport-transfer-cappadocia]]에서 확인하세요."
        ]
      }
    ],
    "faq": [
      {
        "q": "아바노스에서 카이세리 공항으로 갈 때 어디에서 셔틀을 타나요?",
        "a": "차량 접근 여건에 따라 확인된 숙소 앞 또는 차량이 안전하게 정차할 수 있는 가까운 지점에서 픽업이 진행됩니다."
      },
      {
        "q": "합승 셔틀 대신 이 노선에서 프라이빗 차량을 예약할 수 있나요?",
        "a": "네. 프라이빗 Vito는 최대 5명까지 편도 €90, Sprinter는 최대 16명까지 €110이며 모두 차량당 요금입니다."
      }
    ],
    "related": [
      "kayseri-airport-to-avanos-shuttle",
      "kayseri-airport-shuttle",
      "cappadocia-to-kayseri-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "아바노스에서 카이세리 공항까지 셔틀 | 호텔 픽업",
    "twitterDescription": "아바노스에서 카이세리 공항(ASR): 1인 €15 셔틀, 70 km, 60–75분, 호텔 픽업 및 프라이빗 Vito/Sprinter 옵션."
  },
  {
    "slug": "ortahisar-to-kayseri-airport-shuttle",
    "title": "오르타히사르에서 카이세리 공항까지 셔틀 | 호텔 픽업",
    "description": "오르타히사르에서 카이세리 공항(ASR): 1인 €15 셔틀, 75 km, 60–75분, 호텔 픽업 및 프라이빗 Vito/Sprinter 옵션.",
    "eyebrow": "오르타히사르 → ASR 공항 셔틀",
    "h1": "오르타히사르에서 카이세리 공항까지 셔틀",
    "lead": "오르타히사르에서 카이세리 공항(ASR)으로 가는 호텔 픽업은 1인 편도 €15의 합승 셔틀 또는 프라이빗 Vito/Sprinter로 예약할 수 있습니다. 일반적인 도로 거리는 약 75 km, 주행 시간은 60–75분입니다. 오래된 마을의 좁은 도로가 픽업 시작 구간에 영향을 줄 수 있어 확정된 만남 지점이 중요합니다. 확정 픽업 시간에는 다른 호텔 픽업과 공항 도착 여유 시간도 반영됩니다.",
    "route": {
      "airport": "kayseri",
      "town": "ortahisar",
      "direction": "return"
    },
    "sections": [
      {
        "heading": "오르타히사르에서 카이세리 공항: 약 75 km / 60–75분",
        "paragraphs": [
          "도로 시간은 실제 주행만을 기준으로 한 것이며, 확정된 픽업 시간에는 다른 호텔의 합승 픽업과 공항 도착 여유 시간도 반영됩니다. 오래된 마을의 접근 조건이 픽업 시작 몇 분에 영향을 줄 수 있으므로 출발 계획에서는 도로 거리보다 숙소별로 확인된 픽업 지점이 더 중요합니다."
        ]
      },
      {
        "heading": "오르타히사르에서는 픽업 시간을 지키는 것이 중요합니다",
        "paragraphs": [
          "합승 차량은 오르타히사르를 떠나기 전에 다른 호텔에서 승객을 태울 수 있고, 좁은 마을길 때문에 확정된 픽업 지점까지 오는 데 시간이 달라질 수 있습니다. 불필요한 지연 없이 카이세리 공항으로 출발할 수 있도록 픽업 시간대가 시작되기 전에 짐을 준비해 주세요.",
          "NAV에서 출발한다면 [[오르타히사르에서 네브셰히르 공항까지 셔틀|ortahisar-to-nevsehir-airport-shuttle]]을 확인하세요. 도착 방향은 [[카이세리 공항에서 오르타히사르까지 셔틀|kayseri-airport-to-ortahisar-shuttle]]을 참고하세요."
        ]
      },
      {
        "heading": "이 노선의 프라이빗 공항 픽업",
        "paragraphs": [
          "전용 차량을 원한다면 Vito는 최대 5명까지 편도 €90, Sprinter는 최대 16명까지 €110입니다. 자세한 내용은 [[프라이빗 공항 픽업|private-airport-transfer-cappadocia]]에서 확인하세요."
        ]
      }
    ],
    "faq": [
      {
        "q": "오르타히사르에서 ASR로 갈 때 왜 일찍 준비해야 하나요?",
        "a": "합승 출발에는 다른 호텔 픽업이 포함될 수 있으므로 예약 시 전달받은 확정 픽업 시간을 따르는 것이 중요합니다."
      },
      {
        "q": "합승 셔틀 대신 이 노선에서 프라이빗 차량을 예약할 수 있나요?",
        "a": "네. 프라이빗 Vito는 최대 5명까지 편도 €90, Sprinter는 최대 16명까지 €110이며 모두 차량당 요금입니다."
      }
    ],
    "related": [
      "kayseri-airport-to-ortahisar-shuttle",
      "kayseri-airport-shuttle",
      "cappadocia-to-kayseri-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "오르타히사르에서 카이세리 공항까지 셔틀 | 호텔 픽업",
    "twitterDescription": "오르타히사르에서 카이세리 공항(ASR): 1인 €15 셔틀, 75 km, 60–75분, 호텔 픽업 및 프라이빗 Vito/Sprinter 옵션."
  },
  {
    "slug": "cavusin-to-kayseri-airport-shuttle",
    "title": "차우신에서 카이세리 공항까지 셔틀 | 호텔 픽업",
    "description": "차우신에서 카이세리 공항(ASR): 1인 €15 셔틀, 75 km, 65–80분, 호텔 픽업 및 프라이빗 Vito/Sprinter 옵션.",
    "eyebrow": "차우신 → ASR 공항 셔틀",
    "h1": "차우신에서 카이세리 공항까지 셔틀",
    "lead": "차우신에서 카이세리 공항(ASR)으로 가는 호텔 픽업은 1인 편도 €15의 합승 셔틀 또는 프라이빗 Vito/Sprinter로 예약할 수 있습니다. 일반적인 도로 거리는 약 75 km, 주행 시간은 65–80분입니다. 차우신의 숙소는 큰길, 오래된 마을, 계곡 쪽에 나뉘어 있어 확정된 픽업 지점이 중요합니다. 확정 픽업 시간에는 다른 호텔 픽업과 공항 도착 여유 시간도 반영됩니다.",
    "route": {
      "airport": "kayseri",
      "town": "cavusin",
      "direction": "return"
    },
    "sections": [
      {
        "heading": "차우신에서 카이세리 공항: 약 75 km / 65–80분",
        "paragraphs": [
          "도로 시간은 실제 주행만을 기준으로 한 것이며, 확정 픽업 시간에는 다른 호텔의 합승 픽업과 공항 도착 여유 시간도 반영됩니다. 차우신 숙소는 큰길, 오래된 마을, 계곡 접근 구역 등에 나뉘어 있으므로 출발 계획에서는 숙소별로 확인된 픽업 지점이 중요합니다."
        ]
      },
      {
        "heading": "열기구가 뜨는 아침에는 차우신 지역 교통이 늘 수 있습니다",
        "paragraphs": [
          "이른 아침의 열기구 활동으로 차우신 주변 도로가 평소보다 붐빌 수 있으므로 픽업 시간대가 시작되기 전에 확정된 지점에서 준비해 주세요.",
          "NAV에서 출발한다면 [[차우신에서 네브셰히르 공항까지 셔틀|cavusin-to-nevsehir-airport-shuttle]]을 확인하세요."
        ]
      },
      {
        "heading": "오래된 마을과 큰길은 서로 다른 픽업 환경입니다",
        "paragraphs": [
          "차우신의 숙소는 마을 내 서로 다른 구역에 나뉘어 있기 때문에 특히 카이세리 공항으로 출발하는 아침에는 단순한 “차우신” 위치가 아니라 예약 시 확인된 픽업 지점이 필요합니다."
        ]
      },
      {
        "heading": "이 노선의 프라이빗 공항 픽업",
        "paragraphs": [
          "전용 차량을 원한다면 Vito는 최대 5명까지 편도 €90, Sprinter는 최대 16명까지 €110입니다. 자세한 내용은 [[프라이빗 공항 픽업|private-airport-transfer-cappadocia]]에서 확인하세요."
        ]
      }
    ],
    "faq": [
      {
        "q": "ASR로 출발할 때 차우신의 정확한 픽업 지점이 왜 중요한가요?",
        "a": "숙소가 큰길, 오래된 마을, 계곡 접근 구역 등 여러 곳에 나뉘어 있어 카이세리 공항으로 출발하기 전에 잘못된 장소에서 만나 발생하는 지연을 줄일 수 있기 때문입니다."
      },
      {
        "q": "합승 셔틀 대신 이 노선에서 프라이빗 차량을 예약할 수 있나요?",
        "a": "네. 프라이빗 Vito는 최대 5명까지 편도 €90, Sprinter는 최대 16명까지 €110이며 모두 차량당 요금입니다."
      }
    ],
    "related": [
      "kayseri-airport-to-cavusin-shuttle",
      "kayseri-airport-shuttle",
      "cappadocia-to-kayseri-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "차우신에서 카이세리 공항까지 셔틀 | 호텔 픽업",
    "twitterDescription": "차우신에서 카이세리 공항(ASR): 1인 €15 셔틀, 75 km, 65–80분, 호텔 픽업 및 프라이빗 Vito/Sprinter 옵션."
  },
  {
    "slug": "goreme-to-nevsehir-airport-shuttle",
    "title": "괴레메에서 네브셰히르 공항까지 셔틀 | 호텔 픽업",
    "description": "괴레메에서 네브셰히르 공항(NAV): 1인 €15 셔틀, 40 km, 35–45분, 호텔 픽업 및 프라이빗 Vito/Sprinter 옵션.",
    "eyebrow": "괴레메 → NAV 공항 셔틀",
    "h1": "괴레메에서 네브셰히르 공항까지 셔틀",
    "lead": "괴레메에서 네브셰히르 공항(NAV)으로 가는 호텔 픽업은 1인 편도 €15의 합승 셔틀 또는 프라이빗 Vito/Sprinter로 예약할 수 있습니다. 일반적인 도로 거리는 약 40 km, 주행 시간은 35–45분입니다. 괴레메의 동굴호텔과 언덕길 때문에 차량이 큰길로 나가기 전 현지 픽업 시간이 더 필요할 수 있습니다. 확정된 픽업 시간에는 다른 호텔의 합승 픽업과 공항 도착 여유 시간도 반영됩니다.",
    "route": {
      "airport": "nevsehir",
      "town": "goreme",
      "direction": "return"
    },
    "sections": [
      {
        "heading": "괴레메에서 네브셰히르 공항: 약 40 km / 35–45분",
        "paragraphs": [
          "도로 이동 자체는 비교적 짧지만, 확정된 픽업 시간에는 다른 호텔 픽업과 공항 도착 여유 시간도 함께 반영됩니다."
        ]
      },
      {
        "heading": "동굴호텔 픽업은 괴레메를 벗어나기 전에 시간이 더 필요할 수 있습니다",
        "paragraphs": [
          "괴레메에서 NAV까지의 도로는 짧은 편이지만, 동굴호텔이나 언덕 숙소에서 픽업할 경우 차량이 괴레메를 벗어나기 전에 시간이 더 필요할 수 있습니다. 이른 출발이라면 NAV까지의 주행 시간이 짧더라도 짐을 준비하고 확정된 픽업 지점에 제시간에 나와 주세요.",
          "카이세리 항공편이라면 [[괴레메에서 카이세리 공항까지 셔틀|goreme-to-kayseri-airport-shuttle]]을 이용하세요. 두 공항 비교는 [[괴레메 공항 픽업|goreme-airport-transfer]]에서 확인할 수 있습니다."
        ]
      },
      {
        "heading": "이 노선의 프라이빗 공항 픽업",
        "paragraphs": [
          "전용 차량을 원한다면 Vito는 최대 5명까지 편도 €80, Sprinter는 최대 16명까지 €90입니다. 자세한 내용은 [[프라이빗 공항 픽업|private-airport-transfer-cappadocia]]에서 확인하세요."
        ]
      }
    ],
    "faq": [
      {
        "q": "괴레메에서 네브셰히르 공항까지 얼마나 먼가요?",
        "a": "일반적인 도로 기준은 약 40 km / 35–45분입니다. 교통 상황과 다른 확정 픽업에 따라 총 시간은 달라질 수 있습니다."
      },
      {
        "q": "합승 셔틀 대신 이 노선에서 프라이빗 차량을 예약할 수 있나요?",
        "a": "네. 프라이빗 Vito는 최대 5명까지 편도 €80, Sprinter는 최대 16명까지 €90이며 모두 차량당 요금입니다."
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
    "twitterTitle": "괴레메에서 네브셰히르 공항까지 셔틀 | 호텔 픽업",
    "twitterDescription": "괴레메에서 네브셰히르 공항(NAV): 1인 €15 셔틀, 40 km, 35–45분, 호텔 픽업 및 프라이빗 Vito/Sprinter 옵션."
  },
  {
    "slug": "urgup-to-nevsehir-airport-shuttle",
    "title": "위르귀프에서 네브셰히르 공항까지 셔틀 | 호텔 픽업",
    "description": "위르귀프에서 네브셰히르 공항(NAV): 1인 €15 셔틀, 50 km, 45–60분, 호텔 픽업 및 프라이빗 Vito/Sprinter 옵션.",
    "eyebrow": "위르귀프 → NAV 공항 셔틀",
    "h1": "위르귀프에서 네브셰히르 공항까지 셔틀",
    "lead": "위르귀프에서 네브셰히르 공항(NAV)으로 가는 호텔 픽업은 1인 편도 €15의 합승 셔틀 또는 프라이빗 Vito/Sprinter로 예약할 수 있습니다. 일반적인 도로 거리는 약 50 km, 주행 시간은 45–60분입니다. 위르귀프의 숙소는 중심 도로와 언덕 구역에 걸쳐 있어 공항으로 출발하기 전 확정된 픽업 지점이 중요합니다. 픽업 시간에는 다른 호텔 픽업과 공항 도착 여유 시간도 반영됩니다.",
    "route": {
      "airport": "nevsehir",
      "town": "urgup",
      "direction": "return"
    },
    "sections": [
      {
        "heading": "위르귀프에서 네브셰히르 공항: 약 50 km / 45–60분",
        "paragraphs": [
          "도로 시간은 실제 주행만을 기준으로 하며, 확정된 픽업 시간에는 다른 호텔의 합승 픽업과 공항 도착 여유 시간도 반영됩니다."
        ]
      },
      {
        "heading": "위르귀프에서는 확정된 픽업 지점이 중요합니다",
        "paragraphs": [
          "위르귀프 구시가지의 일부 숙소는 차량 접근 여건에 따라 차량이 접근하기 쉬운 별도의 픽업 지점이 필요할 수 있습니다. 도로 시간만을 기준으로 판단하지 말고 예약 시 확인된 픽업 지점을 따르세요.",
          "카이세리에서 출발한다면 [[위르귀프에서 카이세리 공항까지 셔틀|urgup-to-kayseri-airport-shuttle]]을 이용하세요."
        ]
      },
      {
        "heading": "이 노선의 프라이빗 공항 픽업",
        "paragraphs": [
          "전용 차량을 원한다면 Vito는 최대 5명까지 편도 €80, Sprinter는 최대 16명까지 €90입니다. 자세한 내용은 [[프라이빗 공항 픽업|private-airport-transfer-cappadocia]]에서 확인하세요."
        ]
      }
    ],
    "faq": [
      {
        "q": "위르귀프에서 네브셰히르 공항까지 도로로 얼마나 걸리나요?",
        "a": "일반적인 도로 기준은 약 50 km / 45–60분입니다."
      },
      {
        "q": "합승 셔틀 대신 이 노선에서 프라이빗 차량을 예약할 수 있나요?",
        "a": "네. 프라이빗 Vito는 최대 5명까지 편도 €80, Sprinter는 최대 16명까지 €90이며 모두 차량당 요금입니다."
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
    "twitterTitle": "위르귀프에서 네브셰히르 공항까지 셔틀 | 호텔 픽업",
    "twitterDescription": "위르귀프에서 네브셰히르 공항(NAV): 1인 €15 셔틀, 50 km, 45–60분, 호텔 픽업 및 프라이빗 Vito/Sprinter 옵션."
  },
  {
    "slug": "uchisar-to-nevsehir-airport-shuttle",
    "title": "우치히사르에서 네브셰히르 공항까지 셔틀 | 호텔 픽업",
    "description": "우치히사르에서 네브셰히르 공항(NAV): 1인 €15 셔틀, 35 km, 30–40분, 호텔 픽업 및 프라이빗 Vito/Sprinter 옵션.",
    "eyebrow": "우치히사르 → NAV 공항 셔틀",
    "h1": "우치히사르에서 네브셰히르 공항까지 셔틀",
    "lead": "우치히사르에서 네브셰히르 공항(NAV)으로 가는 호텔 픽업은 1인 편도 €15의 합승 셔틀 또는 프라이빗 Vito/Sprinter로 예약할 수 있습니다. 일반적인 도로 거리는 약 35 km, 주행 시간은 30–40분입니다. 우치히사르 상부의 가파른 골목 때문에 모든 호텔 문 앞까지 차량이 바로 접근하지 못하고 차량이 접근하기 쉬운 픽업 지점이 필요할 수 있습니다. 확정된 픽업 시간에는 다른 호텔 픽업과 공항 도착 여유 시간도 반영됩니다.",
    "route": {
      "airport": "nevsehir",
      "town": "uchisar",
      "direction": "return"
    },
    "sections": [
      {
        "heading": "우치히사르에서 네브셰히르 공항: 약 35 km / 30–40분",
        "paragraphs": [
          "도로 기준은 약 35 km / 30–40분이지만, 확정된 픽업 시간에는 다른 호텔의 합승 픽업과 공항 도착 여유 시간도 함께 반영됩니다."
        ]
      },
      {
        "heading": "거리가 짧아도 확정된 픽업 지점은 필요합니다",
        "paragraphs": [
          "우치히사르는 마을 위쪽으로 갈수록 길이 좁아지고 경사가 커집니다. 공항이 가깝다고 해서 단순한 “우치히사르” 위치만으로 픽업을 정할 수 있는 것은 아닙니다. 숙소별로 확인된 정확한 픽업 지점을 따르세요.",
          "ASR에서 출발한다면 [[우치히사르에서 카이세리 공항까지 셔틀|uchisar-to-kayseri-airport-shuttle]]을 확인하세요."
        ]
      },
      {
        "heading": "이 노선의 프라이빗 공항 픽업",
        "paragraphs": [
          "전용 차량을 원한다면 Vito는 최대 5명까지 편도 €80, Sprinter는 최대 16명까지 €90입니다. 자세한 내용은 [[프라이빗 공항 픽업|private-airport-transfer-cappadocia]]에서 확인하세요."
        ]
      }
    ],
    "faq": [
      {
        "q": "30–40분만 보고 호텔 출발 시간을 직접 정해도 되나요?",
        "a": "아니요. 30–40분은 순수 도로 이동의 일반적인 기준입니다. 다른 호텔 픽업과 공항 도착 여유 시간이 반영된 확정 픽업 시간을 따르세요."
      },
      {
        "q": "네브셰히르 공항 출발편 번호가 왜 필요한가요?",
        "a": "출발 항공편을 정확히 확인하고 예약에 맞는 호텔 픽업 시간을 계획하는 데 필요합니다."
      },
      {
        "q": "합승 셔틀 대신 이 노선에서 프라이빗 차량을 예약할 수 있나요?",
        "a": "네. 프라이빗 Vito는 최대 5명까지 편도 €80, Sprinter는 최대 16명까지 €90이며 모두 차량당 요금입니다."
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
    "twitterTitle": "우치히사르에서 네브셰히르 공항까지 셔틀 | 호텔 픽업",
    "twitterDescription": "우치히사르에서 네브셰히르 공항(NAV): 1인 €15 셔틀, 35 km, 30–40분, 호텔 픽업 및 프라이빗 Vito/Sprinter 옵션."
  },
  {
    "slug": "avanos-to-nevsehir-airport-shuttle",
    "title": "아바노스에서 네브셰히르 공항까지 셔틀 | 호텔 픽업",
    "description": "아바노스에서 네브셰히르 공항(NAV): 1인 €15 셔틀, 38 km, 35–50분, 호텔 픽업 및 프라이빗 Vito/Sprinter 옵션.",
    "eyebrow": "아바노스 → NAV 공항 셔틀",
    "h1": "아바노스에서 네브셰히르 공항까지 셔틀",
    "lead": "아바노스에서 네브셰히르 공항(NAV)으로 가는 호텔 픽업은 1인 편도 €15의 합승 셔틀 또는 프라이빗 Vito/Sprinter로 예약할 수 있습니다. 일반적인 도로 거리는 약 38 km, 주행 시간은 35–50분입니다. 아바노스 숙소는 여러 구역에 넓게 퍼져 있어 정확한 호텔 이름이 올바른 픽업 지점을 확인하는 데 중요합니다. 확정된 픽업 시간에는 다른 호텔 픽업과 공항 도착 여유 시간도 반영됩니다.",
    "route": {
      "airport": "nevsehir",
      "town": "avanos",
      "direction": "return"
    },
    "sections": [
      {
        "heading": "아바노스에서 네브셰히르 공항: 약 38 km / 35–50분",
        "paragraphs": [
          "도로 시간은 실제 주행만을 기준으로 하며, 확정된 픽업 시간에는 다른 호텔의 합승 픽업과 공항 도착 여유 시간도 반영됩니다. 아바노스 숙소는 여러 구역에 넓게 퍼져 있으므로 단순한 “아바노스” 위치보다 숙소의 정확한 전체 이름이 있어야 올바른 픽업 지점을 확인하기 쉽습니다.",
          "ASR에서 출발한다면 [[아바노스에서 카이세리 공항까지 셔틀|avanos-to-kayseri-airport-shuttle]]을 확인하세요."
        ]
      },
      {
        "heading": "이 노선의 프라이빗 공항 픽업",
        "paragraphs": [
          "전용 차량을 원한다면 Vito는 최대 5명까지 편도 €80, Sprinter는 최대 16명까지 €90입니다. 자세한 내용은 [[프라이빗 공항 픽업|private-airport-transfer-cappadocia]]에서 확인하세요."
        ]
      }
    ],
    "faq": [
      {
        "q": "아바노스에서 네브셰히르 공항까지 도로로 얼마나 걸리나요?",
        "a": "일반적인 도로 기준은 약 38 km / 35–50분입니다."
      },
      {
        "q": "합승 셔틀 대신 이 노선에서 프라이빗 차량을 예약할 수 있나요?",
        "a": "네. 프라이빗 Vito는 최대 5명까지 편도 €80, Sprinter는 최대 16명까지 €90이며 모두 차량당 요금입니다."
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
    "twitterTitle": "아바노스에서 네브셰히르 공항까지 셔틀 | 호텔 픽업",
    "twitterDescription": "아바노스에서 네브셰히르 공항(NAV): 1인 €15 셔틀, 38 km, 35–50분, 호텔 픽업 및 프라이빗 Vito/Sprinter 옵션."
  },
  {
    "slug": "ortahisar-to-nevsehir-airport-shuttle",
    "title": "오르타히사르에서 네브셰히르 공항까지 셔틀 | 호텔 픽업",
    "description": "오르타히사르에서 네브셰히르 공항(NAV): 1인 €15 셔틀, 45 km, 40–50분, 호텔 픽업 및 프라이빗 Vito/Sprinter 옵션.",
    "eyebrow": "오르타히사르 → NAV 공항 셔틀",
    "h1": "오르타히사르에서 네브셰히르 공항까지 셔틀",
    "lead": "오르타히사르에서 네브셰히르 공항(NAV)으로 가는 호텔 픽업은 1인 편도 €15의 합승 셔틀 또는 프라이빗 Vito/Sprinter로 예약할 수 있습니다. 일반적인 도로 거리는 약 45 km, 주행 시간은 40–50분입니다. 오래된 마을의 좁은 도로가 픽업 시작 구간에 영향을 줄 수 있어 확정된 만남 지점이 중요합니다. 픽업 시간에는 다른 호텔 픽업과 공항 도착 여유 시간도 반영됩니다.",
    "route": {
      "airport": "nevsehir",
      "town": "ortahisar",
      "direction": "return"
    },
    "sections": [
      {
        "heading": "오르타히사르에서 네브셰히르 공항: 약 45 km / 40–50분",
        "paragraphs": [
          "도로 시간은 실제 주행만을 기준으로 하며, 확정된 픽업 시간에는 다른 호텔의 합승 픽업과 공항 도착 여유 시간도 반영됩니다. 오래된 마을의 접근 조건이 픽업 시작 몇 분에 영향을 줄 수 있으므로 출발 계획에서는 숙소별로 확인된 픽업 지점이 가장 중요합니다."
        ]
      },
      {
        "heading": "NAV까지 짧은 편이어도 오르타히사르 픽업 지점은 확인해야 합니다",
        "paragraphs": [
          "네브셰히르 공항까지의 주행은 비교적 짧지만, 좁은 마을길 때문에 합승 셔틀이 만날 수 있는 위치가 달라질 수 있습니다. 40–50분의 도로 시간만 보고 출발 시간을 계산하지 말고 숙소별로 확인된 픽업 지점에서 픽업 시간대가 시작되기 전에 준비해 주세요.",
          "ASR에서 출발한다면 [[오르타히사르에서 카이세리 공항까지 셔틀|ortahisar-to-kayseri-airport-shuttle]]을 확인하세요."
        ]
      },
      {
        "heading": "이 노선의 프라이빗 공항 픽업",
        "paragraphs": [
          "전용 차량을 원한다면 Vito는 최대 5명까지 편도 €80, Sprinter는 최대 16명까지 €90입니다. 자세한 내용은 [[프라이빗 공항 픽업|private-airport-transfer-cappadocia]]에서 확인하세요."
        ]
      }
    ],
    "faq": [
      {
        "q": "오르타히사르에서 네브셰히르 공항으로 갈 때 어디에서 셔틀을 타나요?",
        "a": "차량 접근 여건에 따라 확인된 숙소 앞 또는 차량이 안전하게 정차할 수 있는 가까운 지점에서 픽업이 진행됩니다."
      },
      {
        "q": "합승 셔틀 대신 이 노선에서 프라이빗 차량을 예약할 수 있나요?",
        "a": "네. 프라이빗 Vito는 최대 5명까지 편도 €80, Sprinter는 최대 16명까지 €90이며 모두 차량당 요금입니다."
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
    "twitterTitle": "오르타히사르에서 네브셰히르 공항까지 셔틀 | 호텔 픽업",
    "twitterDescription": "오르타히사르에서 네브셰히르 공항(NAV): 1인 €15 셔틀, 45 km, 40–50분, 호텔 픽업 및 프라이빗 Vito/Sprinter 옵션."
  },
  {
    "slug": "cavusin-to-nevsehir-airport-shuttle",
    "title": "차우신에서 네브셰히르 공항까지 셔틀 | 호텔 픽업",
    "description": "차우신에서 네브셰히르 공항(NAV): 1인 €15 셔틀, 42 km, 40–55분, 호텔 픽업 및 프라이빗 Vito/Sprinter 옵션.",
    "eyebrow": "차우신 → NAV 공항 셔틀",
    "h1": "차우신에서 네브셰히르 공항까지 셔틀",
    "lead": "차우신에서 네브셰히르 공항(NAV)으로 가는 호텔 픽업은 1인 편도 €15의 합승 셔틀 또는 프라이빗 Vito/Sprinter로 예약할 수 있습니다. 일반적인 도로 거리는 약 42 km, 주행 시간은 40–55분입니다. 차우신 숙소는 큰길, 오래된 마을, 계곡 쪽 구역에 나뉘어 있어 확정된 픽업 지점이 중요합니다. 픽업 시간에는 다른 호텔 픽업과 공항 도착 여유 시간도 반영됩니다.",
    "route": {
      "airport": "nevsehir",
      "town": "cavusin",
      "direction": "return"
    },
    "sections": [
      {
        "heading": "차우신에서 네브셰히르 공항: 약 42 km / 40–55분",
        "paragraphs": [
          "도로 기준은 약 42 km / 40–55분이지만, 확정된 픽업 시간에는 다른 호텔의 합승 픽업과 공항 도착 여유 시간도 함께 반영됩니다."
        ]
      },
      {
        "heading": "짧은 도로 거리보다 명확한 픽업 위치가 더 중요합니다",
        "paragraphs": [
          "차우신의 숙소는 마을 도로와 계곡 쪽 구역 사이에 넓게 퍼져 있습니다. 명확하게 확인된 픽업 지점이 있으면 서로 다른 장소에서 기다려 생기는 지연을 줄일 수 있습니다. 모든 숙소 입구에 차량이 들어갈 수 있는 것은 아니므로 예약 시 확인된 픽업 지점이나 차량이 안전하게 정차할 수 있는 가까운 지점을 따르세요.",
          "ASR에서 출발한다면 [[차우신에서 카이세리 공항까지 셔틀|cavusin-to-kayseri-airport-shuttle]]을 확인하세요."
        ]
      },
      {
        "heading": "이 노선의 프라이빗 공항 픽업",
        "paragraphs": [
          "전용 차량을 원한다면 Vito는 최대 5명까지 편도 €80, Sprinter는 최대 16명까지 €90입니다. 자세한 내용은 [[프라이빗 공항 픽업|private-airport-transfer-cappadocia]]에서 확인하세요."
        ]
      }
    ],
    "faq": [
      {
        "q": "이른 아침 열기구 활동이 차우신에서 NAV로 출발할 때 영향을 줄 수 있나요?",
        "a": "일부 아침에는 지역 도로가 더 붐빌 수 있으므로 확정된 픽업 지점에서 제시간에 준비하는 것이 좋습니다."
      },
      {
        "q": "차우신에서 네브셰히르 공항으로 갈 때 어디에서 셔틀을 타나요?",
        "a": "차량 접근 여건에 따라 확인된 숙소 앞 또는 차량이 안전하게 정차할 수 있는 가까운 지점에서 픽업이 진행됩니다."
      },
      {
        "q": "합승 셔틀 대신 이 노선에서 프라이빗 차량을 예약할 수 있나요?",
        "a": "네. 프라이빗 Vito는 최대 5명까지 편도 €80, Sprinter는 최대 16명까지 €90이며 모두 차량당 요금입니다."
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
    "twitterTitle": "차우신에서 네브셰히르 공항까지 셔틀 | 호텔 픽업",
    "twitterDescription": "차우신에서 네브셰히르 공항(NAV): 1인 €15 셔틀, 42 km, 40–55분, 호텔 픽업 및 프라이빗 Vito/Sprinter 옵션."
  },
  {
    "slug": "cappadocia-airport",
    "title": "카파도키아 공항 안내 | NAV·ASR·호텔 셔틀",
    "description": "카파도키아 공항 안내: 네브셰히르 카파도키아 공항(NAV), 카이세리 공항(ASR), 괴레메 픽업, 1인 €15 셔틀과 프라이빗 옵션.",
    "eyebrow": "카파도키아 공항 안내",
    "h1": "카파도키아 공항: NAV, ASR와 호텔 픽업",
    "lead": "‘카파도키아 공항’이라는 표현은 네브셰히르 카파도키아 공항(NAV)을 가리킬 수 있지만, 카이세리 공항(ASR)도 카파도키아 여행에 널리 이용됩니다. 예약할 때는 항공권에 표시된 실제 공항 코드가 가장 중요합니다.",
    "sections": [
      {
        "heading": "카파도키아 공항은 어느 공항인가요?",
        "paragraphs": [
          "네브셰히르 카파도키아 공항의 IATA 코드는 **NAV**이며 공식 명칭에 Kapadokya/Cappadocia가 들어갑니다. 하지만 여행 계획에서는 ‘카파도키아 공항’이 실제로 지역을 이용하는 두 관문, 즉 NAV와 카이세리 공항 **ASR**을 넓게 지칭하기도 합니다. 그래서 호텔 픽업을 예약할 때는 ‘카파도키아’라는 지역명만 쓰기보다 항공권의 공항 코드를 사용해야 합니다.",
          "아직 항공편을 고르는 중이라면 항공권 구매 전에 [[카파도키아에서 가장 가까운 공항|nearest-airport-to-cappadocia]]과 [[카이세리 또는 네브셰히르 공항 비교|kayseri-or-nevsehir-airport-for-cappadocia]]를 확인하세요."
        ]
      },
      {
        "heading": "네브셰히르 카파도키아 공항(NAV)",
        "paragraphs": [
          "NAV는 일반적으로 카파도키아 중심부까지의 도로 이동이 더 짧습니다. 합승 셔틀 정차 전 기준으로 괴레메는 약 **40 km / 35–45분**, 우치히사르 35 km / 30–40분, 아바노스 38 km / 35–50분, 차우신 42 km / 40–55분, 오르타히사르 45 km / 40–50분, 위르귀프 50 km / 45–60분입니다.",
          "[[네브셰히르 공항 셔틀|nevsehir-airport-shuttle]]은 **1인 편도 €15**입니다. 프라이빗 편도 요금은 Vito 최대 5명 €80, Sprinter 최대 16명 €90입니다."
        ]
      },
      {
        "heading": "카이세리 공항(ASR)",
        "paragraphs": [
          "ASR은 도로상 더 멀지만 항공편 시간과 좌석 상황에 따라 전체 여행에서는 더 좋은 선택이 될 수 있어 카파도키아 여행에 널리 이용됩니다. 괴레메는 약 **75 km / 60–75분**이며 다른 서비스 지역도 다른 호텔 정차 전 기준으로 대체로 70–80 km 범위입니다.",
          "[[카이세리 공항 셔틀|kayseri-airport-shuttle]]도 **1인 편도 €15**입니다. 프라이빗 편도는 Vito €90, Sprinter €110입니다. 합승 셔틀 요금이 두 공항에서 같기 때문에 카이세리를 선택한다고 셔틀 요금이 더 비싸지는 않습니다."
        ]
      },
      {
        "heading": "카파도키아 공항에서 괴레메: 먼저 NAV인지 ASR인지 확인하세요",
        "paragraphs": [
          "괴레메는 두 공항에서 모두 갈 수 있으므로 ‘카파도키아 공항에서 괴레메’라는 표현만으로는 예약에 충분하지 않습니다. NAV는 [[네브셰히르 공항에서 괴레메|nevsehir-airport-to-goreme-shuttle]], ASR은 [[카이세리 공항에서 괴레메|kayseri-airport-to-goreme-shuttle]]을 사용하세요. [[괴레메 공항 픽업|goreme-airport-transfer]]에는 두 공항 옵션과 동굴 호텔 접근, 귀국 픽업 정보가 함께 정리되어 있습니다."
        ]
      },
      {
        "heading": "공항에서 호텔: 합승 셔틀 또는 프라이빗 차량",
        "paragraphs": [
          "1인 €15 셔틀은 괴레메, 위르귀프, 우치히사르, 아바노스, 오르타히사르, 차우신으로 가는 가장 경제적인 기본 옵션입니다. 합승 서비스이므로 다른 승객과 호텔 정차가 포함될 수 있습니다. 전용 차량을 원하면 Vito 또는 Sprinter를 선택할 수 있으며 프라이빗 요금은 1인당이 아니라 차량당입니다.",
          "예약 요청에는 공항, 이동 방향, 항공편 정보, 호텔, WhatsApp 연락처, 승객 이름과 모든 예약에 필요한 여권 번호를 입력합니다. 예약 확인 후 기사에게 현금으로 결제합니다."
        ]
      },
      {
        "heading": "카파도키아에서 공항으로 돌아갈 때",
        "paragraphs": [
          "출발할 때는 ‘카파도키아 공항이 어디인가?’보다 ‘내 출발 항공권에 어느 공항이 적혀 있는가?’가 더 중요합니다. NAV는 [[카파도키아에서 네브셰히르 공항|cappadocia-to-nevsehir-airport-shuttle]], ASR은 [[카파도키아에서 카이세리 공항|cappadocia-to-kayseri-airport-shuttle]]을 이용하세요. 픽업 시간은 일률적인 규칙이 아니라 실제 출발 항공편과 합승 픽업 계획을 기준으로 확인합니다."
        ]
      },
      {
        "heading": "NAV 또는 ASR: 항공권의 공항 코드를 확인하세요",
        "paragraphs": [
          "‘카파도키아 공항’은 네브셰히르 카파도키아 공항(NAV)을 뜻할 수 있고, 카이세리 공항(ASR)도 널리 이용됩니다. 예약에는 항공권에 표시된 공항 코드가 필요합니다. 아직 항공편을 선택하지 않았다면 [[카파도키아에서 가장 가까운 공항|nearest-airport-to-cappadocia]]을 확인하세요."
        ]
      }
    ],
    "faq": [
      {
        "q": "실제로 ‘카파도키아 공항’이라는 공항이 있나요?",
        "a": "네브셰히르 카파도키아 공항(NAV)은 공식 이름에 Kapadokya/Cappadocia가 들어갑니다. 카이세리 공항(ASR)도 카파도키아 여행의 주요 공항입니다."
      },
      {
        "q": "카파도키아 공항 코드는 무엇인가요?",
        "a": "모든 여행자에게 공통인 단일 코드는 없습니다. NAV는 네브셰히르 카파도키아 공항, ASR은 카이세리 공항입니다."
      },
      {
        "q": "괴레메에 가장 가까운 카파도키아 공항은 어디인가요?",
        "a": "네브셰히르 카파도키아 공항(NAV)이 도로상 더 가깝습니다."
      },
      {
        "q": "NAV 또는 ASR에서 셔틀 요금은 얼마인가요?",
        "a": "두 공항 모두 서비스 지역의 중심 호텔까지 1인 편도 €15입니다."
      },
      {
        "q": "NAV Airport는 무슨 뜻인가요?",
        "a": "NAV는 네브셰히르 카파도키아 공항의 IATA 코드입니다."
      },
      {
        "q": "카이세리 공항에서 괴레메로 갈 수 있나요?",
        "a": "네. ASR이 NAV보다 도로상 더 멀지만 카파도키아 여행에 흔히 이용되는 공항입니다."
      },
      {
        "q": "괴레메에 자체 공항이 있나요?",
        "a": "아니요. 상업 항공편은 NAV 또는 ASR을 이용합니다."
      },
      {
        "q": "NAV로 도착하고 ASR에서 출발할 수 있나요?",
        "a": "네. 다만 노선과 프라이빗 요금이 다르므로 두 공항 구간을 각각 정확히 확인해야 합니다."
      }
    ],
    "related": [
      "nearest-airport-to-cappadocia",
      "kayseri-or-nevsehir-airport-for-cappadocia",
      "nevsehir-airport-shuttle",
      "kayseri-airport-shuttle",
      "cappadocia-airport-transfer"
    ],
    "twitterTitle": "카파도키아 공항 안내 | NAV·ASR·호텔 셔틀",
    "twitterDescription": "네브셰히르(NAV)와 카이세리(ASR) 공항 코드, 호텔 셔틀 요금, 프라이빗 옵션, 서비스 지역 안내."
  },
  {
    "slug": "nearest-airport-to-cappadocia",
    "title": "카파도키아에서 가장 가까운 공항 | NAV vs ASR",
    "description": "카파도키아에 가장 가까운 공항은 어디일까요? 네브셰히르 NAV와 카이세리 ASR의 거리, 픽업 시간, 괴레메 등 주요 지역 셔틀 요금을 비교하세요.",
    "eyebrow": "공항 선택 가이드",
    "h1": "카파도키아에서 가장 가까운 공항",
    "lead": "네브셰히르 공항은 일반적으로 카파도키아 중심부에 도로상 더 가깝지만, 항공편 시간이나 요금이 더 좋다면 카이세리 공항이 전체 일정에서는 더 나은 선택일 수 있습니다.",
    "sections": [
      {
        "heading": "카파도키아에는 실질적으로 두 공항을 이용합니다",
        "paragraphs": [
          "네브셰히르 카파도키아 공항(NAV)과 카이세리 에르킬레트 공항(ASR)은 카파도키아 중심부에 머무는 여행객이 주로 이용하는 공항입니다. NAV는 괴레메, 우치히사르와 많은 중심 지역에 더 가깝고, ASR은 도로 이동이 더 길지만 일정에 더 잘 맞는 항공편이 있을 수 있습니다."
        ]
      },
      {
        "heading": "가장 가까운 공항이 항상 가장 좋은 것은 아닙니다",
        "paragraphs": [
          "도로 이동이 짧은 것은 장점이지만, 불편한 항공편 시간이나 비싼 연결편이 그 장점을 상쇄할 수 있습니다. 마지막 도로 거리만 보지 말고 출발지부터 전체 여정을 비교하세요. 합승 셔틀은 두 공항 모두 1인 €15라 ASR을 선택한다고 셔틀 요금이 올라가지는 않습니다."
        ]
      },
      {
        "heading": "괴레메를 예로 보면",
        "paragraphs": [
          "NAV에서 괴레메는 약 40 km / 35–45분, ASR에서는 다른 호텔 정차 전 기준 약 75 km / 60–75분입니다. 호텔 접근과 도착 정보를 비교하려면 [[네브셰히르 공항에서 괴레메|nevsehir-airport-to-goreme-shuttle]]와 [[카이세리 공항에서 괴레메|kayseri-airport-to-goreme-shuttle]]를 함께 보세요."
        ]
      },
      {
        "heading": "다른 숙박 지역에서는 비교가 달라질 수 있습니다",
        "paragraphs": [
          "우치히사르는 NAV에 특히 가깝고, 위르귀프처럼 동쪽에 있는 지역은 카이세리 방향이 더 자연스럽게 느껴질 수 있습니다. 카파도키아 전체를 괴레메와 같다고 보지 말고 실제로 숙박할 지역을 기준으로 비교하세요."
        ]
      },
      {
        "heading": "우치히사르, 괴레메, 위르귀프에 가까운 공항",
        "paragraphs": [
          "NAV는 우치히사르와 괴레메에서 도로 거리상 큰 이점이 있습니다. 위르귀프는 더 동쪽이라 우치히사르만큼 차이가 크지 않습니다. 아바노스, 오르타히사르, 차우신도 각각 다른 거리입니다. 여행에서 ‘가장 가까운 공항’의 의미를 정하기 전에 실제 호텔 지역을 확인하세요."
        ]
      },
      {
        "heading": "공항 이름이 호텔 서비스 지역을 바꾸지는 않습니다",
        "paragraphs": [
          "ASR과 NAV 합승 셔틀은 같은 중심 숙박 지역을 서비스합니다. 카이세리를 선택한다고 괴레메나 우치히사르를 이용할 수 없는 것은 아니며 단지 도로 이동이 더 길어집니다. 반대로 NAV가 더 가깝더라도 항공편 연결이 나쁘면 전체 여행이 더 빠르다는 보장은 없습니다."
        ]
      },
      {
        "heading": "프라이빗은 네브셰히르가 더 저렴하고, 합승 셔틀은 같은 요금입니다",
        "paragraphs": [
          "합승 셔틀은 두 공항 모두 1인 €15입니다. 프라이빗 요금은 NAV에서 Vito/Sprinter €80/€90, ASR에서 €90/€110입니다. 전용 차량을 원하는 가족이나 그룹에게는 이 차이가 더 중요할 수 있습니다."
        ]
      }
    ],
    "faq": [
      {
        "q": "카파도키아에서 가장 가까운 공항은 어디인가요?",
        "a": "네브셰히르 카파도키아 공항(NAV)이 일반적으로 카파도키아 중심부에서 가장 가까운 주요 공항이며, 카이세리 공항(ASR)이 또 다른 주요 관문입니다."
      },
      {
        "q": "카이세리 공항은 카파도키아에서 너무 먼가요?",
        "a": "NAV보다 도로상 더 멀지만 카파도키아 여행에 흔히 이용되는 현실적인 선택지입니다."
      },
      {
        "q": "괴레메에 더 가까운 공항은 어디인가요?",
        "a": "네브셰히르 공항입니다."
      },
      {
        "q": "NAV에서 셔틀이 더 저렴한가요?",
        "a": "아니요. 합승 셔틀은 두 공항 모두 1인 €15입니다."
      },
      {
        "q": "우치히사르에 가장 가까운 공항은 어디인가요?",
        "a": "네브셰히르 카파도키아 공항(NAV)입니다."
      },
      {
        "q": "카이세리 항공편이 훨씬 좋다면 어느 공항을 선택해야 하나요?",
        "a": "전체 여정을 비교하세요. ASR 항공편이 훨씬 편리하다면 더 긴 도로 이동을 감수할 가치가 있을 수 있습니다."
      }
    ],
    "related": [
      "cappadocia-airport",
      "kayseri-or-nevsehir-airport-for-cappadocia",
      "kayseri-airport-shuttle",
      "nevsehir-airport-shuttle"
    ],
    "twitterTitle": "카파도키아에서 가장 가까운 공항 | NAV vs ASR",
    "twitterDescription": "네브셰히르(NAV)와 카이세리(ASR)의 거리, 픽업 시간, 셔틀 요금, 카파도키아 숙박 지역 접근성을 비교하세요."
  },
  {
    "slug": "kayseri-or-nevsehir-airport-for-cappadocia",
    "title": "카파도키아는 카이세리 vs 네브셰히르? | ASR·NAV 비교",
    "description": "카파도키아 여행에서 카이세리와 네브셰히르 중 어느 공항이 좋을까요? 괴레메 거리, 항공편, 1인 €15 셔틀, 프라이빗 요금을 비교하세요.",
    "eyebrow": "공항 비교",
    "h1": "카파도키아: 카이세리 또는 네브셰히르 공항",
    "lead": "네브셰히르는 일반적으로 도로상 더 가깝고, 카이세리는 더 편리한 항공편이 있을 때 전체 여행에서 더 나을 수 있습니다. 합승 셔틀은 두 공항 모두 1인 €15이므로 전체 일정을 기준으로 비교하는 것이 좋습니다.",
    "sections": [
      {
        "heading": "가장 큰 차이는 도로 거리입니다",
        "paragraphs": [
          "NAV는 괴레메, 우치히사르와 카파도키아 중심부 대부분에 더 가깝습니다. ASR은 이 지역까지 도로 이동이 더 깁니다. 다만 숙소 지역에 따라 차이가 달라지므로 ‘카파도키아’라는 하나의 일반 거리보다 실제 호텔 지역을 기준으로 비교해야 합니다."
        ]
      },
      {
        "heading": "항공편 시간과 요금이 NAV의 거리 이점을 넘어설 수 있습니다",
        "paragraphs": [
          "카이세리로 가는 직항편이나 훨씬 좋은 시간이 있다면 착륙 후 도로 이동이 길더라도 전체 여행은 더 간단할 수 있습니다. NAV가 불편한 연결, 긴 대기, 훨씬 비싼 요금을 요구한다면 도로 거리 차이는 결정적이지 않을 수 있습니다."
        ]
      },
      {
        "heading": "합승 셔틀은 두 공항 모두 1인 €15",
        "paragraphs": [
          "NAV와 ASR의 합승 셔틀 요금은 동일하게 **1인 편도 €15**입니다. 따라서 합승 셔틀 비용 차이 없이 항공편과 도로 거리를 기준으로 공항을 선택할 수 있습니다."
        ]
      },
      {
        "heading": "프라이빗 요금은 네브셰히르가 더 낮습니다",
        "paragraphs": [
          "NAV는 Vito €80, Sprinter €90 편도이며 ASR은 Vito €90, Sprinter €110입니다. 가족이나 그룹이 전용 차량을 원한다면 이 차이가 합승 셔틀 이용자보다 더 중요합니다."
        ]
      },
      {
        "heading": "정확한 호텔 지역을 비교하세요",
        "paragraphs": [
          "우치히사르는 NAV의 거리상 이점이 크고 괴레메도 네브셰히르가 훨씬 가깝습니다. 위르귀프, 아바노스, 오르타히사르, 차우신에는 각각 별도의 노선 수치가 있습니다. 아래 표는 사이트의 개별 노선 페이지에 사용한 동일한 수치를 기준으로 합니다."
        ]
      },
      {
        "heading": "도착과 출발에 다른 공항을 사용할 수도 있습니다",
        "paragraphs": [
          "NAV로 도착하고 ASR에서 출발하거나 반대로 이용할 수 있습니다. 이 경우 각 구간을 공항별 별도 이동으로 보고 확인해야 합니다. 노선, 픽업 시간, 프라이빗 요금이 다르므로 두 항공편을 모두 보내주세요."
        ]
      },
      {
        "heading": "실제 선택 기준",
        "paragraphs": [
          "항공편 가격과 시간이 비슷하다면 NAV가 보통 카파도키아 중심부까지 도로 이동이 짧습니다. ASR의 항공편이 훨씬 좋다면 더 긴 도로 이동을 감수할 가치가 있습니다. 공항 이름만 보고 결정하지 마세요."
        ]
      }
    ],
    "faq": [
      {
        "q": "괴레메에는 카이세리와 네브셰히르 중 어느 공항이 더 좋나요?",
        "a": "NAV가 도로상 더 가깝지만 ASR의 항공편이 훨씬 편리하다면 카이세리가 전체 여행에서는 더 나을 수 있습니다."
      },
      {
        "q": "카이세리에서 셔틀이 더 비싼가요?",
        "a": "아니요. 합승 셔틀은 두 공항 모두 1인 편도 €15입니다."
      },
      {
        "q": "프라이빗 픽업은 어느 공항이 더 저렴한가요?",
        "a": "네브셰히르입니다. Vito €80, Sprinter €90이며 카이세리는 €90, €110입니다."
      },
      {
        "q": "한 공항으로 도착하고 다른 공항에서 출발할 수 있나요?",
        "a": "네. 정확한 항공편과 공항으로 각 구간을 따로 확인하세요."
      },
      {
        "q": "우치히사르에 더 가까운 공항은 어디인가요?",
        "a": "네브셰히르 카파도키아 공항(NAV)입니다."
      }
    ],
    "related": [
      "nearest-airport-to-cappadocia",
      "kayseri-airport-shuttle",
      "nevsehir-airport-shuttle",
      "airport-transfer-prices"
    ],
    "twitterTitle": "카파도키아는 카이세리 vs 네브셰히르? | ASR·NAV 비교",
    "twitterDescription": "카이세리(ASR)와 네브셰히르(NAV)의 거리, 항공편, 1인 €15 셔틀, 프라이빗 요금을 비교하세요."
  },
  {
    "slug": "cappadocia-shared-shuttle-vs-private-transfer",
    "title": "카파도키아 합승 공항 셔틀 vs 프라이빗 픽업",
    "description": "카파도키아 합승 공항 셔틀과 프라이빗 픽업 비교: 1인 €15 또는 차량당 Vito/Sprinter, 정원, 정차, 시간, 서비스 지역.",
    "eyebrow": "옵션 비교",
    "h1": "카파도키아 합승 공항 셔틀 vs 프라이빗 픽업",
    "lead": "합승 셔틀은 1인 편도 €15의 경제적인 옵션입니다. 프라이빗 픽업은 차량당 요금이며, 전용 차량을 원하거나 인원이 많고 다른 호텔 정차를 줄이고 싶은 여행자에게 적합합니다.",
    "sections": [
      {
        "heading": "합승 셔틀은 어떻게 운행하나요?",
        "paragraphs": [
          "합승 셔틀은 항공편과 호텔 방향이 맞는 확정 승객을 함께 배정합니다. 같은 차량에 다른 승객이 있고 여러 숙소에 정차할 수 있습니다. 요금은 카이세리와 네브셰히르 모두 **1인 편도 €15**입니다."
        ]
      },
      {
        "heading": "프라이빗 픽업은 어떻게 다른가요?",
        "paragraphs": [
          "프라이빗 픽업은 예약한 그룹만을 위한 전용 차량입니다. Vito는 최대 5명, Sprinter는 최대 16명입니다. 요금은 1인당이 아니라 차량당이며 편도 기준 카이세리 €90/€110, 네브셰히르 €80/€90입니다."
        ]
      },
      {
        "heading": "합승 셔틀이 더 잘 맞는 경우",
        "paragraphs": [
          "1~2명 또는 차량 공유를 괜찮아하는 소규모 그룹은 합승 셔틀이 대체로 가장 경제적입니다. 두 공항에서 요금이 동일하다는 점도 장점입니다."
        ]
      },
      {
        "heading": "프라이빗 픽업이 더 나을 수 있는 경우",
        "paragraphs": [
          "큰 그룹은 특히 네브셰히르에서 Sprinter를 이용하면 1인당 비용이 경쟁력 있을 수 있습니다. 다른 승객의 호텔 정차가 없고 전용 차량을 이용한다는 장점도 있지만, 마지막 호텔 접근은 여전히 실제 도로 조건에 따라 달라집니다."
        ]
      },
      {
        "heading": "서비스 지역",
        "paragraphs": [
          "합승 셔틀은 괴레메, 위르귀프, 우치히사르, 아바노스, 차우신, 오르타히사르를 운행합니다. 정확한 픽업 또는 하차 지점을 확인하려면 예약에 지역과 숙소 전체 이름을 입력하세요."
        ]
      },
      {
        "heading": "프라이빗 차량이라고 모든 호텔 문 앞까지 갈 수 있는 것은 아닙니다",
        "paragraphs": [
          "Vito는 큰 차량보다 일부 골목에서 접근이 쉬울 수 있지만, 어떤 차량도 모든 오래된 숙소의 문 앞 접근을 보장하지 않습니다. 좁거나 가파른 도로에서는 필요할 경우 가장 가까운 안전한 지점을 이용합니다."
        ]
      },
      {
        "heading": "총요금은 그룹 인원에 따라 달라집니다",
        "paragraphs": [
          "합승 셔틀은 1인 €15에 승객 수와 구간 수를 곱합니다. 프라이빗은 선택한 차량 정원 안에서 차량 요금을 적용합니다. 왕복은 정확히 편도 요금의 두 배입니다."
        ]
      },
      {
        "heading": "서비스 이름보다 실제 여행 조건을 기준으로 선택하세요",
        "paragraphs": [
          "승객 수, 공항, 전용 차량 필요 여부, 다른 호텔 정차를 어느 정도 괜찮아하는지 비교하세요. 그다음 항공편, 호텔, 승객 정보를 WhatsApp으로 확인받은 뒤 예약을 확정하세요."
        ]
      }
    ],
    "faq": [
      {
        "q": "1명이 이용할 때 가장 저렴한 옵션은 무엇인가요?",
        "a": "대부분 1인 편도 €15의 합승 셔틀이 가장 저렴합니다."
      },
      {
        "q": "프라이빗 픽업도 1인당 요금인가요?",
        "a": "아니요. Vito와 Sprinter는 안내된 정원 안에서 차량당 요금입니다."
      },
      {
        "q": "Vito와 Sprinter는 몇 명까지 탑승하나요?",
        "a": "Vito 최대 5명, Sprinter 최대 16명입니다."
      },
      {
        "q": "합승 셔틀은 다른 호텔에도 정차하나요?",
        "a": "네. 확정된 다른 승객과 함께 운행하는 서비스이므로 다른 호텔 정차가 포함될 수 있습니다."
      },
      {
        "q": "프라이빗 픽업이면 항상 호텔 문 앞까지 가나요?",
        "a": "반드시 그렇지는 않습니다. 마지막 접근은 차량이 안전하게 정차할 수 있는 도로 조건에 따라 달라집니다."
      },
      {
        "q": "합승 셔틀은 어느 지역을 운행하나요?",
        "a": "괴레메, 위르귀프, 우치히사르, 아바노스, 차우신, 오르타히사르입니다."
      }
    ],
    "related": [
      "cappadocia-shuttle-transfer",
      "private-airport-transfer-cappadocia",
      "airport-transfer-prices"
    ],
    "twitterTitle": "카파도키아 합승 공항 셔틀 vs 프라이빗 픽업",
    "twitterDescription": "1인 €15 합승 셔틀과 차량당 Vito/Sprinter 프라이빗 픽업의 정원, 정차, 시간, 서비스 지역을 비교하세요."
  },
  {
    "slug": "cappadocia-cave-hotel-airport-transfer",
    "title": "카파도키아 동굴 호텔 공항 픽업·샌딩 | 차량 접근 안내",
    "description": "카파도키아 동굴 호텔 공항 픽업: 숙소 전체 이름을 입력하고 좁은 도로와 실제 차량 접근, 확정 픽업·하차 지점을 확인하세요.",
    "eyebrow": "동굴 호텔 접근 안내",
    "h1": "카파도키아 동굴 호텔 공항 픽업·샌딩",
    "lead": "동굴 호텔과 역사적인 숙소는 좁거나 가파른 길, 또는 큰 차량이 안전하게 정차하기 어려운 곳에 있을 수 있습니다. 숙소의 정확한 전체 이름을 알려주면 가장 가까운 차량 접근 가능한 픽업 또는 하차 지점을 확인하는 데 도움이 됩니다.",
    "sections": [
      {
        "heading": "숙소의 전체 이름이 중요한 이유",
        "paragraphs": [
          "카파도키아에는 cave, suite, house, stone, boutique 같은 단어를 사용하는 숙소가 많습니다. 예약서에 적힌 전체 이름과 숙소 지역을 입력하세요. 지도 핀이 도움이 될 수는 있지만 정확한 숙소 이름을 대신해서는 안 됩니다."
        ]
      },
      {
        "heading": "차량이 호텔 문 앞에 정차할 수 없을 때",
        "paragraphs": [
          "일부 오래된 골목은 좁거나 가파르고, 셔틀이나 Sprinter가 안전하게 기다리기 어려울 수 있습니다. 이런 경우 가까운 차량 접근 가능한 지점을 WhatsApp으로 확인해 드립니다. 이는 일반적인 도로 접근 문제이며 해당 지역이 서비스 범위 밖이라는 뜻은 아닙니다."
        ]
      },
      {
        "heading": "괴레메의 동굴 호텔 접근",
        "paragraphs": [
          "괴레메에는 좁은 길과 언덕에 숙소가 많이 모여 있어 가까운 호텔끼리도 접근 방식이 크게 다를 수 있습니다. 항상 정확한 숙소 이름을 입력하고 예약에 대해 확인된 지점을 따르세요. 자세한 내용은 [[괴레메 공항 픽업|goreme-airport-transfer]]도 참고하세요."
        ]
      },
      {
        "heading": "다른 역사적인 지역도 차량 접근 확인이 필요합니다",
        "paragraphs": [
          "우치히사르, 위르귀프, 오르타히사르, 차우신에도 오래된 좁은 길이나 경사로에 숙소가 있습니다. 아바노스는 강 주변으로 더 넓게 퍼져 있습니다. 어느 지역이든 단순한 마을 이름보다 숙소의 전체 이름이 차량 접근을 계획하는 데 더 유용합니다."
        ]
      },
      {
        "heading": "도착과 출발 모두 실제 만나는 장소가 중요합니다",
        "paragraphs": [
          "도착 시에는 숙소에 가능한 가장 가까운 안전한 지점에서 하차하는 것이 목표입니다. 출발 시에는 픽업 시간대가 시작되기 전에 짐을 준비하고 확정 장소에서 기다리세요. 작은 택시가 문 앞까지 들어갔다고 해서 큰 셔틀도 같은 지점을 사용할 수 있다고 가정하면 안 됩니다."
        ]
      },
      {
        "heading": "합승 셔틀 또는 프라이빗 Vito",
        "paragraphs": [
          "합승 셔틀은 1인 €15이고 당일 승객 수에 따라 더 큰 차량을 사용할 수 있습니다. 프라이빗 Vito가 일부 골목에서는 더 편리할 수 있지만 문 앞 접근을 보장하지는 않습니다. 최종 지점은 실제 도로와 안전한 정차 가능 여부에 따라 결정됩니다."
        ]
      }
    ],
    "faq": [
      {
        "q": "셔틀이 모든 동굴 호텔 문 앞까지 갈 수 있나요?",
        "a": "아니요. 일부 도로에서는 가장 가까운 안전한 지점을 이용하며 예약에 맞춰 안내합니다."
      },
      {
        "q": "예약할 때 어떤 정보를 입력해야 하나요?",
        "a": "숙소 전체 이름, 지역, 항공편, 승객 정보, WhatsApp 연락처가 필요합니다."
      },
      {
        "q": "프라이빗 Vito는 셔틀이 못 들어가는 모든 곳에 갈 수 있나요?",
        "a": "아니요. 일부 길에서는 더 편리할 수 있지만 실제 도로 상태와 안전한 정차 가능 여부에 따라 달라집니다."
      },
      {
        "q": "괴레메 호텔은 이름을 특히 정확히 입력해야 하나요?",
        "a": "네. 비슷한 이름의 숙소가 많아 정확한 숙소를 확인하는 것이 중요합니다."
      },
      {
        "q": "출발할 때 호텔 픽업도 가능한가요?",
        "a": "네. 실제 숙소에 대해 확인된 픽업 지점을 이용합니다."
      }
    ],
    "related": [
      "goreme-airport-transfer",
      "cappadocia-airport-transfer",
      "kayseri-airport-shuttle",
      "nevsehir-airport-shuttle"
    ],
    "twitterTitle": "카파도키아 동굴 호텔 공항 픽업",
    "twitterDescription": "카파도키아 서비스 지역의 동굴 호텔 픽업·하차, 숙소 전체 이름, 차량 접근 안내, 확정 지점."
  },
  {
    "slug": "istanbul-to-cappadocia",
    "title": "이스탄불에서 카파도키아 | 항공편·공항 셔틀 안내",
    "description": "이스탄불에서 카파도키아: IST/SAW에서 카이세리 ASR 또는 네브셰히르 NAV로 비행 후 1인 €15 공항 셔틀로 호텔까지 이동.",
    "eyebrow": "항공편 + 픽업 가이드",
    "h1": "이스탄불에서 카파도키아: 항공편과 공항 픽업",
    "lead": "대부분의 여행자는 이스탄불에서 카이세리(ASR) 또는 네브셰히르(NAV)로 비행한 뒤 사전 예약한 공항 셔틀로 호텔까지 이동하는 것이 가장 효율적입니다.",
    "sections": [
      {
        "heading": "장거리 도로 픽업이 아니라 항공편을 이용하세요",
        "paragraphs": [
          "이 서비스는 이스탄불에서 카파도키아까지 직접 운행하는 장거리 합승 셔틀이 아닙니다. 일반적으로 Istanbul Airport(IST) 또는 Sabiha Gokcen(SAW)에서 ASR이나 NAV로 비행한 뒤 공항 셔틀로 호텔까지 이동합니다."
        ]
      },
      {
        "heading": "전체 일정을 기준으로 ASR 또는 NAV를 선택하세요",
        "paragraphs": [
          "NAV는 많은 카파도키아 호텔에 도로상 더 가깝고, ASR은 더 긴 도로 이동을 감수할 만큼 항공편 시간이나 운임이 좋을 수 있습니다. 합승 셔틀은 두 공항 모두 €15이므로 먼저 항공편을 비교하세요."
        ]
      },
      {
        "heading": "카파도키아 도착 후",
        "paragraphs": [
          "수하물을 찾고 WhatsApp으로 확인받은 미팅 안내를 따르며, 공항 미팅에서는 예약자 이름을 확인합니다. 예약에는 정확한 항공편 번호, 호텔, 승객 이름, 여권 번호가 필요합니다."
        ]
      },
      {
        "heading": "호텔 하차 서비스 지역",
        "paragraphs": [
          "합승 셔틀은 괴레메, 위르귀프, 우치히사르, 아바노스, 차우신, 오르타히사르를 운행합니다."
        ]
      },
      {
        "heading": "이스탄불 공항이 아니라 실제 도착 항공편을 기준으로 픽업을 준비하세요",
        "paragraphs": [
          "이스탄불에는 IST와 SAW라는 두 주요 공항이 있고, 카파도키아 쪽에서는 보통 ASR 또는 NAV를 이용합니다. 픽업에서 중요한 것은 실제로 카이세리 또는 네브셰히르에 도착하는 항공편입니다. 그 편명을 입력해야 올바른 도착편에 맞춰 공항 미팅을 준비할 수 있습니다."
        ]
      },
      {
        "heading": "셔틀을 만나기 전에 수하물 수취 시간을 고려하세요",
        "paragraphs": [
          "공항 셔틀은 비행기 문 앞에서 시작하지 않습니다. 착륙 후 수하물을 찾고 WhatsApp으로 확인받은 안내에 따라 미팅 지점으로 이동합니다. 이스탄불을 경유해 피곤하거나 최종 공항이 낯선 여행자에게 특히 중요한 절차입니다."
        ]
      },
      {
        "heading": "이스탄불로 돌아갈 때는 호텔 → 공항 흐름을 따릅니다",
        "paragraphs": [
          "귀국 시 카파도키아 셔틀이 확정된 호텔 지역에서 픽업해 ASR 또는 NAV로 이동하고, 그곳에서 이스탄불행 국내선을 이용합니다. [[카파도키아에서 이스탄불 가이드|cappadocia-to-istanbul]]를 참고해 실제 출발 공항과 호텔 지역에 맞춰 픽업을 계획하세요."
        ]
      }
    ],
    "faq": [
      {
        "q": "이스탄불에서 카파도키아까지 직접 셔틀이 있나요?",
        "a": "이 합승 공항 셔틀 서비스에는 없습니다. ASR 또는 NAV로 비행한 뒤 해당 공항에서 셔틀을 이용하세요."
      },
      {
        "q": "이스탄불의 어느 공항에서 카파도키아로 비행하나요?",
        "a": "여행자는 보통 IST 또는 SAW에서 카이세리나 네브셰히르행 항공편을 이용합니다. 여행 날짜의 실제 항공사 일정을 확인하세요."
      },
      {
        "q": "카파도키아에서 어느 공항을 선택해야 하나요?",
        "a": "NAV가 도로상 더 가깝지만 ASR의 항공편 시간이 더 편리하다면 카이세리가 더 나을 수 있습니다."
      },
      {
        "q": "도착 후 셔틀 요금은 얼마인가요?",
        "a": "ASR 또는 NAV에서 1인 €15입니다."
      },
      {
        "q": "이스탄불 출발 항공편 번호로 셔틀을 예약하나요?",
        "a": "카파도키아 도착을 위해 카이세리 또는 네브셰히르에 착륙하는 항공편 번호를 사용하세요."
      },
      {
        "q": "이스탄불로 돌아가는 항공편을 위한 귀국 셔틀도 예약할 수 있나요?",
        "a": "네. ASR 또는 NAV에서 출발하는 항공편과 호텔 → 공항 방향을 사용하세요."
      },
      {
        "q": "게시된 도로 시간에 수하물 수취가 포함되나요?",
        "a": "아니요. 도로 시간은 공항 절차가 끝난 뒤부터이며, 수하물은 셔틀 이동 전에 찾습니다."
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
    "twitterTitle": "이스탄불에서 카파도키아: 항공편·공항 픽업 안내",
    "twitterDescription": "이스탄불(IST/SAW)에서 카이세리(ASR) 또는 네브셰히르(NAV)로 비행 후 서비스 지역 호텔까지 1인 €15 셔틀."
  },
  {
    "slug": "cappadocia-to-istanbul",
    "title": "카파도키아에서 이스탄불 | 공항 셔틀·항공편 안내",
    "description": "카파도키아에서 이스탄불: 호텔에서 NAV 또는 ASR로 셔틀, 항공편 계획, 도로 거리와 공항 픽업 시간 안내.",
    "eyebrow": "카파도키아 → 이스탄불",
    "h1": "카파도키아에서 이스탄불: 호텔 셔틀과 항공편",
    "lead": "짧은 일정의 여행자라면 호텔에서 네브셰히르(NAV) 또는 카이세리(ASR) 공항으로 이동한 뒤 이스탄불행 항공편을 이용하는 것이 일반적입니다. 셔틀은 카파도키아 호텔 → 공항 구간을 담당하고 이스탄불까지는 항공으로 이동합니다.",
    "sections": [
      {
        "heading": "공항 픽업은 이스탄불 전체 여정이 아니라 첫 구간입니다",
        "paragraphs": [
          "이 서비스는 카파도키아에서 이스탄불까지 직접 운행하는 장거리 합승 셔틀이 **아닙니다**. 카파도키아 호텔에서 NAV 또는 ASR까지의 공항 구간을 예약한 뒤 항공권으로 이스탄불까지 이동합니다. 지역 공항 픽업과 훨씬 긴 도시 간 이동을 분리하는 방식입니다."
        ]
      },
      {
        "heading": "출발 항공편을 기준으로 NAV 또는 ASR를 선택하세요",
        "paragraphs": [
          "NAV는 괴레메, 우치히사르 등 중심 지역에 일반적으로 더 가깝습니다. ASR은 더 멀지만 더 좋은 항공편 시간이나 운임이 있을 수 있습니다. 호텔 → 공항 합승 셔틀은 두 공항 모두 **1인 €15**이며, 프라이빗 Vito/Sprinter 요금은 NAV €80/€90, ASR €90/€110입니다.",
          "아직 출발 공항을 정하지 않았다면 항공권 구매 전에 [[카파도키아에서 가장 가까운 공항|nearest-airport-to-cappadocia]]과 [[카이세리 또는 네브셰히르 공항|kayseri-or-nevsehir-airport-for-cappadocia]]을 비교하세요."
        ]
      },
      {
        "heading": "카파도키아–이스탄불 거리와 셔틀 거리는 다릅니다",
        "paragraphs": [
          "괴레메에서 이스탄불 중심부까지 도로로 약 **725 km**이므로, 카파도키아 내부의 35–80 km 공항 픽업과는 완전히 다른 여행입니다. 실제 거리는 이스탄불의 목적지와 카파도키아 출발 지역에 따라 달라집니다. 시간이 제한된 대부분의 방문객에게 NAV 또는 ASR에서 비행하는 것은 장거리 도시 간 이동과 짧은 호텔 → 공항 픽업을 나누어 이동하는 현실적인 방법입니다."
        ]
      },
      {
        "heading": "이스탄불행 항공편 전 호텔 픽업",
        "paragraphs": [
          "출발 항공편 번호, 숙소 전체 이름, 승객 정보, WhatsApp 연락처를 입력하세요. 픽업 시간은 실제 항공편과 합승 픽업 순서를 기준으로 확인합니다. 합승 차량은 카파도키아를 떠나기 전에 다른 호텔을 픽업할 수 있으므로 직접 도로 시간만으로 출발을 계산하지 마세요. 출발 공항에 따라 [[카파도키아에서 네브셰히르 공항|cappadocia-to-nevsehir-airport-shuttle]] 또는 [[카파도키아에서 카이세리 공항|cappadocia-to-kayseri-airport-shuttle]]을 이용하고, 괴레메·위르귀프·우치히사르·아바노스·오르타히사르·차우신 중 실제 숙박 지역에 맞춰 시간과 지점을 확인하세요."
        ]
      },
      {
        "heading": "출발 당일 픽업 시간은 숙박 지역에 따라 달라집니다",
        "paragraphs": [
          "괴레메, 위르귀프, 우치히사르, 아바노스, 오르타히사르, 차우신은 도로 접근과 실제 정차 지점이 서로 달라 픽업 시간이 달라질 수 있습니다. 직접 주행 시간만으로 계획하지 말고 예약에 대해 받은 확정 시간과 지점을 따르세요."
        ]
      },
      {
        "heading": "IST 또는 SAW로 돌아가는 항공편",
        "paragraphs": [
          "Istanbul Airport(IST)와 Sabiha Gokcen(SAW)은 서로 다른 공항입니다. 카파도키아 출발 항공편을 고른 뒤 항공사 예약에 표시된 이스탄불 도착 공항을 확인하세요. 카파도키아 셔틀 예약은 이스탄불 도착이 IST인지 SAW인지가 아니라 카파도키아에서 출발하는 NAV 또는 ASR을 기준으로 합니다."
        ]
      },
      {
        "heading": "이스탄불까지의 장거리와 공항 픽업 시간을 혼동하지 마세요",
        "paragraphs": [
          "이스탄불까지의 긴 도로 거리는 비행과 육로 이동 중 무엇을 선택할지 판단하는 데는 유용하지만, 카파도키아 호텔 픽업 시간을 계산하는 데 사용해서는 안 됩니다. 공항 픽업은 NAV 또는 ASR에서 끝나며 출발 항공편과 합승 픽업 계획을 기준으로 시간을 확인합니다."
        ]
      }
    ],
    "faq": [
      {
        "q": "카파도키아에서 이스탄불까지 직접 셔틀이 있나요?",
        "a": "이 공항 셔틀 서비스에는 없습니다. 일반적인 흐름은 호텔에서 NAV 또는 ASR로 이동한 뒤 이스탄불행 항공편을 이용하는 것입니다."
      },
      {
        "q": "카파도키아에서 이스탄불까지 도로로 얼마나 먼가요?",
        "a": "괴레메에서 이스탄불 중심부까지 약 725 km이며 실제 거리는 출발지와 목적지에 따라 달라집니다."
      },
      {
        "q": "카파도키아에서 이스탄불로 갈 때 어느 공항을 이용해야 하나요?",
        "a": "일정에 가장 잘 맞는 NAV 또는 ASR 항공편을 선택하세요. NAV가 일반적으로 카파도키아 중심부에 도로상 더 가깝습니다."
      },
      {
        "q": "호텔에서 공항까지 셔틀은 얼마인가요?",
        "a": "서비스 지역 호텔에서 NAV 또는 ASR까지 1인 편도 €15입니다."
      },
      {
        "q": "이스탄불행 항공편을 위해 프라이빗 호텔 픽업을 예약할 수 있나요?",
        "a": "네. 공항별 고정 요금으로 Vito와 Sprinter를 이용할 수 있습니다."
      },
      {
        "q": "도착할 때와 다른 공항에서 출발할 수 있나요?",
        "a": "네. 다만 노선과 프라이빗 요금이 다르므로 각 공항 구간을 정확히 확인해야 합니다."
      },
      {
        "q": "카파도키아 셔틀 양식에 이스탄불 공항 코드를 넣어야 하나요?",
        "a": "아니요. 카파도키아 출발 공항인 NAV 또는 ASR을 선택하고 그 공항에서 출발하는 항공편 번호를 입력하세요."
      }
    ],
    "related": [
      "istanbul-to-cappadocia",
      "cappadocia-to-nevsehir-airport-shuttle",
      "nearest-airport-to-cappadocia",
      "kayseri-or-nevsehir-airport-for-cappadocia",
      "cappadocia-to-kayseri-airport-shuttle"
    ],
    "twitterTitle": "카파도키아에서 이스탄불: 호텔 셔틀·항공편",
    "twitterDescription": "서비스 지역 호텔에서 카이세리(ASR) 또는 네브셰히르(NAV)까지 1인 €15부터 픽업 후 이스탄불행 항공편 이용. 프라이빗 Vito/Sprinter 가능."
  }
];

export const koPageBySlug = new Map(koPages.map((page) => [page.slug, page]));
export function koPrettySlug(slug:string){ const page=koPageBySlug.get(slug); return page?.h1 || slug.split('-').map(s=>s.charAt(0).toUpperCase()+s.slice(1)).join(' '); }

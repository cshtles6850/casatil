import { towns } from './site';

export type JaContentSection = { heading: string; paragraphs: string[]; bullets?: string[] };
export type JaFaqItem = { q: string; a: string };
export type JaSeoPage = { slug: string; title: string; description: string; twitterTitle?: string; twitterDescription?: string; eyebrow: string; h1: string; lead: string; sections: JaContentSection[]; faq: JaFaqItem[]; related: string[]; route?: { airport: 'kayseri' | 'nevsehir'; town: keyof typeof towns; direction: 'arrival' | 'return' }; };

export const townNamesJa: Record<keyof typeof towns, string> = {
  "goreme": "ギョレメ",
  "urgup": "ユルギュップ",
  "uchisar": "ウチヒサル",
  "avanos": "アヴァノス",
  "ortahisar": "オルタヒサル",
  "cavusin": "チャウシン"
};

export const jaPages: JaSeoPage[] = [
  {
    "slug": "cappadocia-shuttle-transfer",
    "title": "カッパドキア空港シャトル | 乗合シャトル",
    "description": "カイセリ空港（ASR）またはネヴシェヒル空港（NAV）からギョレメ、ユルギュップなどへ向かうカッパドキアの乗合空港シャトル。WhatsAppで予約できます。",
    "eyebrow": "乗合空港シャトル",
    "h1": "カッパドキア乗合空港シャトル",
    "lead": "カッパドキアの乗合空港シャトルは、カイセリ空港（ASR）とネヴシェヒル空港（NAV）から、ギョレメ、ユルギュップ、ウチヒサル、アヴァノス、チャウシン、オルタヒサルのホテルを結びます。料金は1名片道€15で、フライトに合わせて乗車・降車を手配します。",
    "sections": [
      {
        "heading": "サービスに含まれるもの",
        "paragraphs": [
          "どちらの空港からでも宿泊施設まで乗合車両で移動します。フライト、乗客情報、ホテル名を事前に確認し、同じ便にほかの予約済み乗客やホテルへの立ち寄りが含まれる場合があります。こうした乗合運行により、1名€15の料金を実現しています。"
        ]
      },
      {
        "heading": "カイセリ空港とネヴシェヒル空港",
        "paragraphs": [
          "必要なルートは利用する空港によって変わります。ASRに到着する場合は[[カイセリ空港シャトル|kayseri-airport-shuttle]]、NAVに到着する場合は[[ネヴシェヒル空港シャトル|nevsehir-airport-shuttle]]をご確認ください。各ページに、ホテルのある町までの距離と目安時間を掲載しています。"
        ]
      },
      {
        "heading": "乗合シャトルとプライベート送迎、どちらを選ぶ？",
        "paragraphs": [
          "乗合シャトルでは、ほかの予約済み乗客と車両を共有し、複数のホテルに立ち寄ることがあります。ほかの乗客や関係のないホテルへの停車を避け、専用車で移動したい場合は[[プライベート空港送迎|private-airport-transfer-cappadocia]]をご覧ください。"
        ]
      },
      {
        "heading": "片道・往復・ホテルお迎え",
        "paragraphs": [
          "空港 → ホテル、ホテル → 空港、または往復で予約できます。正しい空港待ち合わせ場所やホテルのお迎え場所を確認できるよう、便名と宿泊施設の正式名称をご入力ください。"
        ]
      }
    ],
    "faq": [
      {
        "q": "カッパドキアの乗合シャトルはいくらですか？",
        "a": "ASRまたはNAVから対象ホテルエリアまで1名片道€15です。"
      },
      {
        "q": "どの空港に対応していますか？",
        "a": "カイセリ空港（ASR）とネヴシェヒル空港（NAV）です。"
      },
      {
        "q": "カッパドキアではどのエリアまで運行しますか？",
        "a": "ギョレメ、ユルギュップ、ウチヒサル、アヴァノス、チャウシン、オルタヒサルです。"
      },
      {
        "q": "ホテルから空港への送迎も予約できますか？",
        "a": "はい。ホテル → 空港、または往復を選択してください。"
      },
      {
        "q": "プライベート送迎もありますか？",
        "a": "はい。VitoとSprinterを空港別の固定料金で利用できます。"
      }
    ],
    "related": [
      "kayseri-airport-shuttle",
      "nevsehir-airport-shuttle",
      "private-airport-transfer-cappadocia",
      "airport-transfer-prices"
    ],
    "twitterTitle": "カッパドキア空港シャトル | 乗合シャトル",
    "twitterDescription": "カイセリ（ASR）・ネヴシェヒル（NAV）空港からギョレメ、ユルギュップ、ウチヒサル、アヴァノス、チャウシン、オルタヒサルへの乗合シャトル。"
  },
  {
    "slug": "cappadocia-airport-transfer",
    "title": "カッパドキア空港送迎 | カイセリ・ネヴシェヒル",
    "description": "カイセリ（ASR）・ネヴシェヒル（NAV）からカッパドキアへ。1名€15の乗合シャトルまたはプライベートVito/Sprinter。ホテル送迎、WhatsApp予約。",
    "eyebrow": "空港送迎サービス",
    "h1": "カッパドキア空港送迎",
    "lead": "カッパドキアの空港送迎は、到着空港、ホテルのある町、移動方向によって利用するルートが変わります。まず空港を確認し、次に宿泊する町を選べば、必要な送迎が分かりやすくなります。",
    "sections": [
      {
        "heading": "まず利用する空港を確認",
        "paragraphs": [
          "カッパドキアへの主要な空港は[[カイセリ空港（ASR）|kayseri-airport-shuttle]]と[[ネヴシェヒル空港（NAV）|nevsehir-airport-shuttle]]の2つです。NAVは多くの中心部のホテル街に道路距離で近く、ASRは日程によってフライト時間が使いやすいことがあります。どちらへ飛ぶか迷っている場合は、航空券を予約する前に[[カッパドキアに最も近い空港|nearest-airport-to-cappadocia]]と[[カイセリ空港とネヴシェヒル空港の比較|kayseri-or-nevsehir-airport-for-cappadocia]]をご確認ください。"
        ]
      },
      {
        "heading": "乗合シャトルまたはプライベート送迎",
        "paragraphs": [
          "[[乗合シャトル|cappadocia-shuttle-transfer]]はどちらの空港からも1名片道€15で、事前予約後にWhatsAppで確認します。同じ運行にほかの乗客やホテルへの立ち寄りが含まれる場合があります。専用車をご希望の場合は、[[プライベート送迎|private-airport-transfer-cappadocia]]でVito（最大5名）またはSprinter（最大16名）を選択できます。料金は1名あたりではなく1台あたりで、カイセリとネヴシェヒルでは料金が異なります。どちらが合うか迷う場合は、[[乗合シャトルとプライベート送迎の比較|cappadocia-shared-shuttle-vs-private-transfer]]で料金、対象エリア、時間の違いを比較できます。"
        ]
      },
      {
        "heading": "予約に必要な情報",
        "paragraphs": [
          "すべての予約で、乗客氏名、パスポート番号、便名、宿泊施設の正式名称が必要です。一部の[[洞窟ホテルや旧市街の宿泊施設|cappadocia-cave-hotel-airport-transfer]]は車両が入れない道にあるため、車両が安全に停車できる最寄りの場所でのお迎え・お見送りになる場合があります。"
        ]
      },
      {
        "heading": "到着空港と出発空港が異なる場合",
        "paragraphs": [
          "NAVに到着してASRから出発する旅程や、その逆も可能です。ただし同一空港の通常の往復とは異なり、各方向でルートとプライベート送迎料金が変わります。1つの一律料金で両方向が含まれると考えず、2便の情報をWhatsAppで送り、それぞれ正しい空港で確認を受けてください。"
        ]
      },
      {
        "heading": "グループ人数と車両定員",
        "paragraphs": [
          "Vitoは最大5名、Sprinterは最大16名まで利用できます。プライベート送迎は1台あたりの料金なので、人数の多いグループではSprinterの1名あたり費用が乗合シャトルより低くなる場合があります。特にプライベート料金が低いネヴシェヒルでは、予約前に両方を比較する価値があります。"
        ]
      },
      {
        "heading": "ホテルの町からルートを探す",
        "paragraphs": [
          "宿泊する町が決まっている場合は、空港ごとの該当ルートを直接ご確認ください。"
        ],
        "bullets": [
          "**ギョレメ** — [[カイセリから|kayseri-airport-to-goreme-shuttle]] · [[ネヴシェヒルから|nevsehir-airport-to-goreme-shuttle]]",
          "**ユルギュップ** — [[カイセリから|kayseri-airport-to-urgup-shuttle]] · [[ネヴシェヒルから|nevsehir-airport-to-urgup-shuttle]]",
          "**ウチヒサル** — [[カイセリから|kayseri-airport-to-uchisar-shuttle]] · [[ネヴシェヒルから|nevsehir-airport-to-uchisar-shuttle]]",
          "**アヴァノス** — [[カイセリから|kayseri-airport-to-avanos-shuttle]] · [[ネヴシェヒルから|nevsehir-airport-to-avanos-shuttle]]",
          "**チャウシン** — [[カイセリから|kayseri-airport-to-cavusin-shuttle]] · [[ネヴシェヒルから|nevsehir-airport-to-cavusin-shuttle]]",
          "**オルタヒサル** — [[カイセリから|kayseri-airport-to-ortahisar-shuttle]] · [[ネヴシェヒルから|nevsehir-airport-to-ortahisar-shuttle]]"
        ]
      }
    ],
    "faq": [
      {
        "q": "カッパドキア旅行で使う空港はどこですか？",
        "a": "カイセリ空港（ASR）とネヴシェヒル空港（NAV）です。"
      },
      {
        "q": "到着と出発で別の空港を利用できますか？",
        "a": "はい。空港ごとにルートと料金が異なるため、2便の情報をWhatsAppで送り、それぞれ別に確認してください。"
      },
      {
        "q": "ホテルにはカイセリとネヴシェヒルのどちらが近いですか？",
        "a": "宿泊する町によりますが、NAVのほうが多くの中心エリアに近いです。詳しくは[[カイセリ空港とネヴシェヒル空港|kayseri-or-nevsehir-airport-for-cappadocia]]をご覧ください。"
      },
      {
        "q": "出発時のホテルお迎えも含まれますか？",
        "a": "はい。予約確認と実際の車両アクセスが可能な範囲でホテルからお迎えします。"
      },
      {
        "q": "カッパドキアではどのエリアまで運行しますか？",
        "a": "ギョレメ、ユルギュップ、ウチヒサル、アヴァノス、チャウシン、オルタヒサルです。"
      },
      {
        "q": "予約にはどの乗客情報が必要ですか？",
        "a": "乗客氏名、パスポート番号、フライト情報、ホテル名、WhatsApp連絡先が必要です。"
      }
    ],
    "related": [
      "cappadocia-airport",
      "kayseri-airport-shuttle",
      "nevsehir-airport-shuttle",
      "airport-transfer-prices"
    ],
    "twitterTitle": "カッパドキア空港送迎 | カイセリ・ネヴシェヒル",
    "twitterDescription": "カイセリ（ASR）・ネヴシェヒル（NAV）からギョレメ、ユルギュップ、ウチヒサル、アヴァノス、チャウシン、オルタヒサルへの乗合またはプライベート空港送迎。"
  },
  {
    "slug": "private-airport-transfer-cappadocia",
    "title": "カッパドキア・プライベート空港送迎 | Vito・Sprinter",
    "description": "カッパドキアのプライベート空港送迎。カイセリ Vito €90 / Sprinter €110、ネヴシェヒル Vito €80 / Sprinter €90。最大5名または16名、現金払い。",
    "eyebrow": "専用車",
    "h1": "カッパドキア・プライベート空港送迎",
    "lead": "カイセリ空港：**Vito €90**、**Sprinter €110**（片道）。ネヴシェヒル空港：**Vito €80**、**Sprinter €90**。料金は1名あたりではなく1台あたりです。往復はカイセリが€180/€220、ネヴシェヒルが€160/€180です。",
    "sections": [
      {
        "heading": "Mercedes Vito：最大5名",
        "paragraphs": [
          "Vitoは、ほかのホテルへの立ち寄りがない専用車を希望するカップル、家族、小グループに向いています。乗合シャトルより出発時間を調整しやすく、空港お迎え、[[洞窟ホテルへのアクセス|cappadocia-cave-hotel-airport-transfer]]、ホテルから空港への直行に適した小型のプライベート車両です。"
        ]
      },
      {
        "heading": "Mercedes Sprinter：最大16名",
        "paragraphs": [
          "Sprinterは最大16名まで利用できる大型のプライベート車両です。料金は空港別で、カイセリから片道€110、ネヴシェヒルから片道€90です。人数の多いグループでは、乗合シャトルより1名あたりの費用が同程度または安くなることがあります。"
        ]
      },
      {
        "heading": "カイセリとネヴシェヒルで料金が異なる理由",
        "paragraphs": [
          "カイセリとネヴシェヒルは同じルートではありません。カイセリはカッパドキア中心部の多くの町から道路距離が長いため、ASRのプライベート料金は高めです。NAVではVito、Sprinterともに低い料金になります。料金を比較する前に、利用する空港を必ず確認してください。"
        ]
      },
      {
        "heading": "プライベート車両でもホテルへの進入は道路状況次第",
        "paragraphs": [
          "専用車ならほかの乗客のホテルには立ち寄りませんが、狭い道そのものが広くなるわけではありません。旧市街や坂道にある宿泊施設では、車両が安全に停車できる最寄り地点を利用することがあります。実際の待ち合わせ場所は宿泊施設の位置を確認したうえでご案内します。"
        ]
      },
      {
        "heading": "予約情報・乗客情報・支払い",
        "paragraphs": [
          "プライベート送迎の確認には、便名、宿泊施設の正式名称、乗客氏名、パスポート番号、WhatsApp連絡先をご入力ください。支払いはドライバーへ現金で行います。料金はEUR表示で、予約時に確認した為替レートによりUSDまたはTRYの現金払いも可能です。"
        ]
      }
    ],
    "faq": [
      {
        "q": "カイセリ空港からプライベートVitoはいくらですか？",
        "a": "最大5名、1台あたり片道€90です。"
      },
      {
        "q": "ネヴシェヒル空港からプライベートVitoはいくらですか？",
        "a": "最大5名、1台あたり片道€80です。"
      },
      {
        "q": "カイセリ空港からSprinterはいくらですか？",
        "a": "最大16名、1台あたり片道€110です。"
      },
      {
        "q": "ネヴシェヒル空港からSprinterはいくらですか？",
        "a": "最大16名、1台あたり片道€90です。"
      },
      {
        "q": "往復料金はいくらですか？",
        "a": "片道料金のちょうど2倍です。"
      },
      {
        "q": "プライベート送迎なら必ずホテル入口まで行けますか？",
        "a": "専用車ですが、旧市街のホテルでは実際の道路が安全な進入・停車に対応している必要があります。"
      },
      {
        "q": "プライベート送迎でもパスポート番号は必要ですか？",
        "a": "はい。すべての予約で乗客のパスポート情報が必要です。"
      },
      {
        "q": "支払い方法は？",
        "a": "ドライバーへ現金でお支払いください。"
      }
    ],
    "related": [
      "airport-transfer-prices",
      "kayseri-airport-shuttle",
      "nevsehir-airport-shuttle"
    ],
    "twitterTitle": "カッパドキア・プライベート空港送迎 | Vito・Sprinter",
    "twitterDescription": "Mercedes VitoまたはSprinterの専用車。カイセリ・ネヴシェヒル空港別の固定料金、ドライバーへ現金払い。"
  },
  {
    "slug": "airport-transfer-prices",
    "title": "カッパドキア空港送迎料金 | シャトル・Vito・Sprinter",
    "description": "カッパドキア空港送迎料金：乗合シャトル1名片道€15。カイセリ Vito €90 / Sprinter €110、ネヴシェヒル Vito €80 / Sprinter €90。往復は2倍。",
    "twitterTitle": "カッパドキア空港送迎料金 | シャトル・Vito・Sprinter",
    "twitterDescription": "乗合シャトル1名€15。カイセリ Vito €90 / Sprinter €110、ネヴシェヒル Vito €80 / Sprinter €90。",
    "eyebrow": "明確な料金",
    "h1": "カッパドキア空港送迎料金",
    "lead": "乗合シャトルはどちらの空港からも1名片道€15です。プライベート送迎は1台あたりの料金で、カイセリとネヴシェヒルでは金額が異なります。",
    "sections": [
      {
        "heading": "乗合シャトル料金",
        "paragraphs": [
          "カイセリ空港（ASR）→ カッパドキアの対象ホテル：**1名片道€15**。ネヴシェヒル空港（NAV）→ 対象ホテル：**1名片道€15**。ホテル→空港も同額で、往復は1名€30です。詳しいルートは[[乗合シャトルページ|cappadocia-shuttle-transfer]]をご覧ください。"
        ]
      },
      {
        "heading": "カイセリ空港のプライベート料金",
        "paragraphs": [
          "Mercedes Vito（最大5名）：**片道€90 / 往復€180**。Mercedes Sprinter（最大16名）：**片道€110 / 往復€220**。"
        ]
      },
      {
        "heading": "ネヴシェヒル空港のプライベート料金",
        "paragraphs": [
          "Mercedes Vito（最大5名）：**片道€80 / 往復€160**。Mercedes Sprinter（最大16名）：**片道€90 / 往復€180**。車両の詳細やプライベート送迎が向いているケースは[[プライベート送迎ページ|private-airport-transfer-cappadocia]]をご確認ください。"
        ]
      },
      {
        "heading": "1名あたり料金と1台あたり料金",
        "paragraphs": [
          "乗合シャトルは1名あたりの料金なので、人数が増えると合計も増えます。プライベート送迎は、Vito最大5名・Sprinter最大16名という定員内で1台あたりの料金です。そのため、大人数では車両料金が高く見えてもSprinterの1名あたり費用が乗合シャトルを下回ることがあります。プライベート料金は空港でも変わり、NAVはVito €80 / Sprinter €90、ASRは€90 / €110です。空港を選んだ後に合計を比較してください。"
        ]
      },
      {
        "heading": "人数別の合計例",
        "paragraphs": [
          "片道の乗合シャトルは2名で合計€30、5名で€75、6名で€90です。6名の€90はネヴシェヒル発Sprinterの片道料金と同額です。カイセリ発Vitoも€90ですが定員は5名なので6名では利用できません。見出し料金だけでなく、人数と車両定員を合わせて比較することが大切です。"
        ]
      },
      {
        "heading": "支払い・通貨・予約情報",
        "paragraphs": [
          "料金はEURで表示し、支払いはドライバーへ現金で行います。予約時に確認した為替レートによりUSDまたはTRYの現金払いも可能です。往復は片道2回分で、別のパッケージ料金はありません。予約には便名、ホテル、乗客氏名、パスポート番号が必要で、WhatsAppで内容を確認してから確定します。特にホテルへのアクセスが特殊な場合、到着と出発で空港が異なる場合、標準の乗合対象外に関する相談では、予約情報の確認が重要です。"
        ]
      }
    ],
    "faq": [
      {
        "q": "カッパドキア空港シャトルはいくらですか？",
        "a": "カイセリ、ネヴシェヒルどちらの空港からも1名片道€15です。"
      },
      {
        "q": "乗合シャトルの往復はいくらですか？",
        "a": "1名€30です。"
      },
      {
        "q": "カイセリ空港のVitoはいくらですか？",
        "a": "片道€90、往復€180です。"
      },
      {
        "q": "カイセリ空港のSprinterはいくらですか？",
        "a": "片道€110、往復€220です。"
      },
      {
        "q": "ネヴシェヒル空港のVitoはいくらですか？",
        "a": "片道€80、往復€160です。"
      },
      {
        "q": "ネヴシェヒル空港のSprinterはいくらですか？",
        "a": "片道€90、往復€180です。"
      },
      {
        "q": "プライベート料金は1名あたりですか？",
        "a": "いいえ。表示定員内で1台あたりの料金です。"
      },
      {
        "q": "ギョレメとユルギュップで料金は変わりますか？",
        "a": "対象となる中心エリアでは、掲載しているプライベート料金は空港ごとの同一料金です。"
      },
      {
        "q": "USDやTRYで支払えますか？",
        "a": "予約時に確認した為替レートにより、USDまたはTRYの現金払いも可能です。"
      },
      {
        "q": "現金払いでもパスポート番号は必要ですか？",
        "a": "はい。支払い方法に関係なく、すべての予約でパスポート情報が必要です。"
      },
      {
        "q": "往復割引はありますか？",
        "a": "別の往復割引はなく、往復は片道料金のちょうど2倍です。"
      },
      {
        "q": "予約はいつ確定しますか？",
        "a": "予約情報をWhatsAppで確認した後に確定します。"
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
    "title": "カイセリ空港からカッパドキアへのシャトル | ホテル送迎",
    "description": "カイセリ空港（ASR）からカッパドキアのホテルへ1名€15の乗合シャトル。ギョレメ、ユルギュップ、ウチヒサル、アヴァノス、オルタヒサル、チャウシン。",
    "eyebrow": "カイセリ空港 ASR",
    "h1": "カイセリ空港からカッパドキアへのシャトル",
    "lead": "カイセリ・エルキレト空港（ASR）からカッパドキアの対象宿泊エリアまで、1名€15の乗合シャトルを予約できます。空港での待ち合わせは到着便に合わせて手配し、WhatsAppで確認します。",
    "sections": [
      {
        "heading": "カイセリからカッパドキアへ：道路移動はやや長め",
        "paragraphs": [
          "ASRはNAVよりカッパドキア中心部の主要ホテル街から離れているため、「カッパドキアまで何分」という一律の時間ではなく、実際のホテル所在地で考えるのが適切です。ギョレメまでは約75 km / 60–75分で、ほかの対象地域も宿泊する町により距離と所要時間が変わります。"
        ]
      },
      {
        "heading": "対象ホテルエリア",
        "paragraphs": [
          "乗合シャトルの対象エリアはギョレメ、ユルギュップ、ウチヒサル、アヴァノス、チャウシン、オルタヒサルです。予約時には町だけでなく宿泊施設の正式名称も入力してください。"
        ]
      },
      {
        "heading": "空港での待ち合わせ",
        "paragraphs": [
          "手荷物を受け取った後、WhatsAppで確認した待ち合わせ案内に従ってください。予約者名を使って空港での合流を確認します。フライトが変更または遅延した場合は、できるだけ早く最新情報をWhatsAppでお知らせください。"
        ]
      },
      {
        "heading": "カイセリ空港のプライベート送迎",
        "paragraphs": [
          "専用車をご希望の場合、Vitoは最大5名で片道€90、Sprinterは最大16名で片道€110です。いずれも1台あたりの料金です。詳しくは[[プライベート空港送迎|private-airport-transfer-cappadocia]]をご覧ください。"
        ]
      },
      {
        "heading": "ホテルからカイセリ空港へ戻る場合",
        "paragraphs": [
          "復路はホテル → 空港として予約します。出発便の便名、ホテルの正式名称、乗客情報を入力し、確定したお迎え時間に従ってください。詳しくは[[カッパドキアからカイセリ空港へのシャトル|cappadocia-to-kayseri-airport-shuttle]]をご確認ください。"
        ]
      }
    ],
    "faq": [
      {
        "q": "カイセリ空港からカッパドキアのシャトルはいくらですか？",
        "a": "1名片道€15、往復€30です。"
      },
      {
        "q": "カイセリ空港からギョレメまでどのくらいかかりますか？",
        "a": "道路の目安は約75 km / 60–75分です。乗合の立ち寄りにより変わる場合があります。"
      },
      {
        "q": "どの町まで運行していますか？",
        "a": "ギョレメ、ユルギュップ、ウチヒサル、アヴァノス、チャウシン、オルタヒサルです。"
      },
      {
        "q": "プライベートVitoはいくらですか？",
        "a": "カイセリ空港から最大5名、1台あたり片道€90です。"
      },
      {
        "q": "ホテルから空港への復路も予約できますか？",
        "a": "はい。ホテル → 空港または往復を選択してください。"
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
    "twitterTitle": "カイセリ空港シャトル | カッパドキアのホテルへ",
    "twitterDescription": "カイセリ空港（ASR）からカッパドキア対象ホテルへ1名€15の乗合シャトル。プライベートVito・Sprinterも利用可能。"
  },
  {
    "slug": "nevsehir-airport-shuttle",
    "title": "ネヴシェヒル空港からカッパドキアへのシャトル | 空港・ホテル送迎",
    "description": "ネヴシェヒル空港（NAV）からカッパドキアのホテルへ。1名€15、ドライバーへ現金払い。ギョレメ、ユルギュップ、ウチヒサル、アヴァノス、チャウシン、オルタヒサル。",
    "eyebrow": "NAV 空港シャトル",
    "h1": "ネヴシェヒル空港からカッパドキアへのシャトル",
    "lead": "ネヴシェヒル・カッパドキア空港から対象宿泊エリアまで、1名€15の乗合シャトルを予約できます。到着便に合わせた待ち合わせ案内をWhatsAppで確認します。",
    "sections": [
      {
        "heading": "ネヴシェヒル空港：中心部の多くのホテルに近い玄関口",
        "paragraphs": [
          "NAVはギョレメ、ウチヒサルなど複数の中心宿泊エリアに道路距離で近い空港です。乗合の立ち寄り前の目安で、ウチヒサルは約35 km / 30–40分、ギョレメは約40 km / 35–45分。ユルギュップ、アヴァノス、オルタヒサル、チャウシンはそれぞれ別のルート時間になります。"
        ]
      },
      {
        "heading": "NAVの乗合シャトルは1名€15",
        "paragraphs": [
          "ネヴシェヒル空港の乗合シャトルは**1名片道€15**、**往復€30**です。プライベート料金はASRより低く、Vitoは片道€80、Sprinterは€90（いずれも1台あたり）です。"
        ]
      },
      {
        "heading": "NAV到着後に用意しておく情報",
        "paragraphs": [
          "このサービスは固定時刻の公共バスではなく事前予約制です。行き先が近い乗客が同じ運行にまとめられることがあります。予約時に便名、宿泊施設の正式名称、乗客情報、WhatsApp連絡先を入力し、手荷物を受け取った後は確認済みの空港待ち合わせ案内に従ってください。短いルートでも、正しい乗合便と旅行者を結び付ける重要な情報は便名と宿泊施設の正式名称です。"
        ]
      },
      {
        "heading": "NAVが近くてもホテルの町によってルートは変わります",
        "paragraphs": [
          "NAVが全体として近いからといって、すべてのホテルが同じルートになるわけではありません。ウチヒサルは特に近く、アヴァノスやユルギュップはやや遠めです。ギョレメの洞窟ホテル周辺の細い道や、オルタヒサル・チャウシンの村道は最後の車両アクセスに影響することがあります。一般的な「NAVからカッパドキア」の所要時間ではなく、実際のホテルの町に合った距離とアクセス情報をご確認ください。"
        ]
      },
      {
        "heading": "NAVへの復路も実際のホテル所在地に合わせます",
        "paragraphs": [
          "ネヴシェヒル空港へ戻る乗合シャトルも1名€15です。実際の出発便と[[カッパドキアからネヴシェヒル空港へのシャトル|cappadocia-to-nevsehir-airport-shuttle]]の該当町ルートを使い、ギョレメのお迎えをウチヒサルやアヴァノスなどと同じ条件で計画しないようにします。"
        ]
      },
      {
        "heading": "Nevsehir Kapadokya AirportとNAVは同じ空港を指します",
        "paragraphs": [
          "検索結果や旅行書類では**Nevsehir Kapadokya Airport**、**Kapadokya Airport**、**NAV Airport**という表記を見ることがあります。この送迎サービスでは、いずれもネヴシェヒル／カッパドキアを利用する同じ空港を指します。予約ではNAVを選択し、実際の便名をご入力ください。"
        ]
      }
    ],
    "faq": [
      {
        "q": "ネヴシェヒル空港からカッパドキアのシャトルはいくらですか？",
        "a": "1名片道€15、往復€30です。"
      },
      {
        "q": "NAVはギョレメやウチヒサルに近い空港ですか？",
        "a": "はい。一般的にNAVはASRよりこれらの中心エリアに道路距離で近いです。"
      },
      {
        "q": "ネヴシェヒル空港のプライベート送迎料金は？",
        "a": "Vitoは片道€80、Sprinterは€90で、いずれも1台あたりです。"
      },
      {
        "q": "NAVのシャトルは固定時刻の空港バスのように運行しますか？",
        "a": "いいえ。確定した乗客とフライトに合わせる事前予約制の乗合空港・ホテル送迎です。"
      },
      {
        "q": "出発時もホテルからNAVまで迎えに来てもらえますか？",
        "a": "はい。ホテル → 空港または往復で予約し、確定したお迎え時間に従ってください。"
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
    "twitterTitle": "ネヴシェヒル空港からカッパドキアへのシャトル",
    "twitterDescription": "ネヴシェヒル空港（NAV）からギョレメ、ユルギュップ、ウチヒサル、アヴァノス、チャウシン、オルタヒサルまで1名€15の乗合シャトル。"
  },
  {
    "slug": "cappadocia-to-kayseri-airport-shuttle",
    "title": "カッパドキアからカイセリ空港へのシャトル | ホテルお迎え",
    "description": "ギョレメ、ユルギュップ、ウチヒサル、アヴァノス、チャウシン、オルタヒサルからカイセリ空港（ASR）まで1名€15のホテル送迎。",
    "eyebrow": "カッパドキア → ASR",
    "h1": "カッパドキアからカイセリ空港へのシャトル",
    "lead": "カッパドキアの対象ホテルエリアからカイセリ・エルキレト空港まで、1名€15のホテル→空港シャトルを予約できます。お迎え場所と時刻は実際の出発便をもとに確認します。",
    "sections": [
      {
        "heading": "ASR出発は地図の所要時間より早めに考える必要があります",
        "paragraphs": [
          "カイセリ空港は、カッパドキア中心部の多くのホテルから見ると道路移動が長い空港です。確定するホテルお迎え時刻は、実際の出発便、宿泊する町、ほかの乗合ピックアップ、空港到着の余裕時間を含めて決めます。到着時の走行時間を単純に逆算する方法ではありません。"
        ]
      },
      {
        "heading": "6つのホテルエリアでカイセリへの出発条件は異なります",
        "paragraphs": [
          "洞窟ホテル、狭い村道、車両が入りにくい住所など、ホテルへのアクセス条件は町や施設によって異なります。確定するお迎え場所は一般的な町の中心ではなく、実際の宿泊施設に合わせる必要があります。"
        ]
      },
      {
        "heading": "確定したASRお迎え時間帯の前に準備を",
        "paragraphs": [
          "カイセリまでの道路区間が長いため、荷物を用意し、確定したお迎え時間帯が始まる前に指定場所でお待ちください。直行の所要時間だけで出発時刻を計算しないでください。ほかのホテルへの乗合ピックアップと空港到着の余裕は、すでに確定プランに含まれています。"
        ]
      },
      {
        "heading": "専用車でカイセリ空港へ",
        "paragraphs": [
          "[[プライベート送迎|private-airport-transfer-cappadocia]]は、Vitoが最大5名で片道€90、Sprinterが最大16名で片道€110です。ほかのホテルへの乗合ピックアップはありませんが、宿泊施設側にも車両が安全に進入・停車できるお迎え場所が必要です。"
        ]
      },
      {
        "heading": "ホテルからASRへ向かう前の最終確認",
        "paragraphs": [
          "カイセリへのお迎え前にチェックアウトを済ませ、荷物を準備し、便名と待ち合わせ場所を確認してください。乗合車両は長い空港道路へ入る前に別の対象ホテルへ立ち寄ることがあるため、確定時刻は「だいたいの時間」ではなく、お迎え時間帯の開始としてお考えください。"
        ]
      }
    ],
    "faq": [
      {
        "q": "カッパドキアからカイセリ空港のシャトルはいくらですか？",
        "a": "1名片道€15です。"
      },
      {
        "q": "ASRのお迎え時刻を直行時間だけで計算してはいけないのはなぜですか？",
        "a": "長い空港道路、ホテルへのアクセス、ほかの乗合ピックアップをすべて確定プランに含める必要があるためです。"
      },
      {
        "q": "ASR行きの乗合シャトルはどの町から利用できますか？",
        "a": "ギョレメ、ユルギュップ、ウチヒサル、アヴァノス、チャウシン、オルタヒサルです。"
      },
      {
        "q": "カイセリ空港までプライベート車両も予約できますか？",
        "a": "はい。Vitoは片道€90、Sprinterは€110で、いずれも1台あたりです。"
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
    "twitterTitle": "カッパドキアからカイセリ空港へのシャトル | ホテルお迎え",
    "twitterDescription": "ギョレメ、ユルギュップ、ウチヒサル、アヴァノス、チャウシン、オルタヒサルからカイセリ空港（ASR）へ1名€15のホテル送迎。"
  },
  {
    "slug": "cappadocia-to-nevsehir-airport-shuttle",
    "title": "カッパドキアからネヴシェヒル空港へのシャトル | ホテルお迎え",
    "description": "ギョレメ、ユルギュップ、ウチヒサル、アヴァノス、チャウシン、オルタヒサルからネヴシェヒル空港（NAV）まで1名€15のホテル送迎。",
    "eyebrow": "カッパドキア → NAV",
    "h1": "カッパドキアからネヴシェヒル空港へのシャトル",
    "lead": "カッパドキアの対象ホテルエリアからネヴシェヒル・カッパドキア空港まで、1名€15のホテル→空港シャトルを予約できます。お迎え場所と時刻は実際の出発便をもとに確認します。",
    "sections": [
      {
        "heading": "NAVは近くても、お迎え時刻は出発便を基準にします",
        "paragraphs": [
          "ネヴシェヒル空港はカッパドキア中心部の多くの町から道路距離が短いですが、それを理由に独自に遅いお迎え時刻を決めないでください。乗合ピックアップは、実際の出発便、ホテルの場所、その日の乗客計画をもとに確定します。"
        ]
      },
      {
        "heading": "短いNAVルートもホテルの町によって変わります",
        "paragraphs": [
          "ウチヒサルはNAVに特に近く、ギョレメも比較的近い一方、ユルギュップ、アヴァノス、オルタヒサル、チャウシンはそれぞれ異なる地方道を利用します。お迎え時刻と実際の待ち合わせ場所は、広い「カッパドキア→ネヴシェヒル」の目安ではなく、宿泊している町に合わせる必要があります。"
        ]
      },
      {
        "heading": "確定したNAVお迎え時間帯の前に準備を",
        "paragraphs": [
          "NAVが中心部の多くの町に近くても、確定するお迎え時刻にはホテルへのアクセス、ほかの乗合ピックアップ、空港到着の余裕時間が含まれます。荷物を用意し、お迎え時間帯が始まる前に指定場所でお待ちください。"
        ]
      },
      {
        "heading": "ネヴシェヒルへのプライベート出発はより直接的な選択肢",
        "paragraphs": [
          "専用の[[プライベート送迎|private-airport-transfer-cappadocia]]は、Vitoが最大5名で片道€80、Sprinterが最大16名で片道€90です。ほかのホテルへの立ち寄りはありませんが、最終的なお迎え場所は車両が安全にアクセスできるかどうかで決まります。"
        ]
      },
      {
        "heading": "NAVが近いからといってお迎えを遅らせないでください",
        "paragraphs": [
          "ネヴシェヒルへのお迎え前に荷物を準備し、便名と待ち合わせ場所を確認してください。空港が近くても、乗合車両はほかのホテルに立ち寄ることがあります。確定時刻は大まかな目安ではなく、お迎え時間帯の開始としてお考えください。"
        ]
      }
    ],
    "faq": [
      {
        "q": "カッパドキアからネヴシェヒル空港のシャトルはいくらですか？",
        "a": "1名片道€15です。"
      },
      {
        "q": "NAVが近いので、自分で出発を遅らせても大丈夫ですか？",
        "a": "いいえ。お迎え時刻を自分で変更せず、フライト、ホテル、乗合ピックアップに合わせて確認された時刻に従ってください。"
      },
      {
        "q": "NAV行きの乗合シャトルはどの町から利用できますか？",
        "a": "ギョレメ、ユルギュップ、ウチヒサル、アヴァノス、チャウシン、オルタヒサルです。"
      },
      {
        "q": "ネヴシェヒル空港までプライベート車両も予約できますか？",
        "a": "はい。Vitoは片道€80、Sprinterは€90で、いずれも1台あたりです。"
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
    "twitterTitle": "カッパドキアからネヴシェヒル空港へのシャトル | ホテルお迎え",
    "twitterDescription": "ギョレメ、ユルギュップ、ウチヒサル、アヴァノス、チャウシン、オルタヒサルからネヴシェヒル空港（NAV）へ1名€15のホテル送迎。"
  },
  {
    "slug": "goreme-airport-transfer",
    "title": "ギョレメ空港送迎 | ASR・NAVシャトル",
    "description": "カイセリ・ネヴシェヒル空港からギョレメへ。1名€15のシャトル、プライベートVito/Sprinter、ホテルアクセス、所要時間、復路お迎え。",
    "eyebrow": "ギョレメ空港送迎ガイド",
    "h1": "ギョレメ空港送迎",
    "lead": "ギョレメ滞在なら、カイセリ空港とネヴシェヒル空港を比較し、実際に利用するフライトに合った空港シャトルのルートを選びましょう。",
    "sections": [
      {
        "heading": "ギョレメの送迎計画は洞窟ホテル周辺の道から始まります",
        "paragraphs": [
          "ギョレメはカッパドキアを代表する宿泊拠点の一つで、コンパクトな中心部の周囲に多くの洞窟ホテルがあります。この便利さの一方で、送迎では重要な点があります。すべてのホテル入口が広い道路に面しているわけではないため、予約フォームに「ギョレメ」とだけ書くより、宿泊施設の正式名称を入力するほうが役立ちます。",
          "ギョレメには似た名称のホテルが多くあります。予約確認に記載された正確な名称を送ることで、「cave」「suite」「house」「stone」などを含む似た施設を区別しやすくなります。入口が複数あるゲストハウスや、地図のピンとは別の路地にフロントがある場合には特に重要です。"
        ]
      },
      {
        "heading": "洞窟ホテル、坂道、実際の降車場所",
        "paragraphs": [
          "ギョレメのホテルへの車両アクセスは通りごとに異なります。バスターミナルや低い中心部にある宿泊施設は比較的入りやすい一方、丘側の洞窟ホテルは急坂、狭い道、一方通行の路地にあることがあります。大型車が入口前で安全に待てない場合は、最寄りの安全な停車場所を利用します。[[プライベートVito|private-airport-transfer-cappadocia]]のほうが一部の路地では便利な場合もありますが、正確な待ち合わせ場所は実際の施設位置を確認してから決めるもので、事前に入口前までの進入を保証するものではありません。"
        ]
      },
      {
        "heading": "ASRとNAV、ギョレメにはどちらが便利？",
        "paragraphs": [
          "カイセリ空港（ASR）からギョレメは約**75 km / 60–75分**、ネヴシェヒル空港（NAV）からは約**40 km / 35–45分**です。道路距離はNAVのほうが短いことが多いですが、フライト時間によってはASRのほうが旅行全体では便利になることもあります。両方の便が候補なら[[カイセリ空港とネヴシェヒル空港の比較|kayseri-or-nevsehir-airport-for-cappadocia]]をご確認ください。"
        ]
      },
      {
        "heading": "正確に伝えておきたいギョレメの宿泊施設名",
        "paragraphs": [
          "以下は送迎計画を分かりやすくするために、よく知られたギョレメの宿泊施設名を例として挙げたものです。ホテルのランキングではありません。掲載されていない施設でも、対象となるギョレメエリア内であれば送迎を依頼できます。"
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
        "heading": "帰りの便に合わせたギョレメのホテルお迎え",
        "paragraphs": [
          "出発当日は、荷物を準備し、お迎え時間帯が始まる前に確定した場所へ戻ってください。日の出前後の道路状況、冬季の天候、ホテルのピックアップ順序で時間が変わることがあるため、地図の距離だけで出発時刻を計算せず、確認されたお迎え時刻に従ってください。",
          "ASRへは[[ギョレメからカイセリ空港|goreme-to-kayseri-airport-shuttle]]、NAVへは[[ギョレメからネヴシェヒル空港|goreme-to-nevsehir-airport-shuttle]]をご利用ください。"
        ]
      }
    ],
    "faq": [
      {
        "q": "カイセリとネヴシェヒルからギョレメまで、乗合シャトル料金は同じですか？",
        "a": "はい。ASR、NAVどちらからでも1名片道€15です。道路距離は異なりますが乗合料金は同じです。"
      },
      {
        "q": "空港到着と帰りのギョレメホテルお迎えを1回の予約で手配できますか？",
        "a": "はい。往復を選び、到着と出発の便名・日付を入力すると、それぞれ別に計画できます。"
      },
      {
        "q": "ギョレメの予約フォームではASRかNAVを先に選ぶ必要がありますか？",
        "a": "はい。プライベート料金、道路距離、空港待ち合わせ、復路ルートが空港によって異なるため、航空券に記載された空港を選択してください。"
      },
      {
        "q": "シャトルはギョレメのすべての洞窟ホテル入口まで行けますか？",
        "a": "必ずしも行けません。丘側の一部の道は大型車に狭すぎるため、最寄りの安全な待ち合わせ・降車場所をWhatsAppで確認することがあります。"
      },
      {
        "q": "ギョレメの空港お迎えでは気球の交通も影響しますか？",
        "a": "日の出前後は影響することがあります。地図の距離だけでなく、道路状況やホテルのピックアップを含めて確認された時間に従ってください。"
      },
      {
        "q": "ホテル名ではなく「ギョレメ」とだけ入力してもいいですか？",
        "a": "宿泊施設の正式名称を入力してください。ギョレメには似た名称の洞窟ホテルが多く、正確な施設を特定することがルート計画に重要です。"
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
    "twitterTitle": "ギョレメ空港送迎 | ASR・NAVシャトル",
    "twitterDescription": "カイセリ・ネヴシェヒル空港からギョレメへ。1名€15のシャトル、プライベートVito/Sprinter、ホテルアクセスと所要時間。"
  },
  {
    "slug": "kayseri-airport-to-goreme-shuttle",
    "title": "カイセリ空港からギョレメへのシャトル | 乗合・プライベート送迎",
    "description": "カイセリ空港（ASR）からギョレメ：1名€15の乗合シャトル、プライベートVito/Sprinter、75 km、60–75分、ホテル送迎・予約情報。",
    "eyebrow": "ASR → ギョレメ 空港シャトル",
    "h1": "カイセリ空港からギョレメへのシャトル",
    "lead": "カイセリ空港（ASR）からギョレメまでは、1名片道€15の乗合シャトル、またはプライベートVito/Sprinterをご利用いただけます。一般的な道路距離は約75 km、所要時間は60–75分です。ギョレメの洞窟ホテル周辺は道が狭く、車両が停車できる最寄りの降車場所に影響することがあるため、宿泊施設の正式名称が重要です。",
    "route": {
      "airport": "kayseri",
      "town": "goreme",
      "direction": "arrival"
    },
    "sections": [
      {
        "heading": "ギョレメまで続く約75 kmのASRルート",
        "paragraphs": [
          "カイセリ空港は、ギョレメへ向かう2つの主要空港のうち道路移動が長い方です。一般的な目安は約**75 km / 60–75分**です。手荷物受取後は、長いASRルートの最後にホテルへどう入るかが主な変動要素になります。空港全体のサービスは[[カイセリ空港シャトル|kayseri-airport-shuttle]]で確認できます。"
        ]
      },
      {
        "heading": "高速道路を離れた最後の数分に時間がかかることがあります",
        "paragraphs": [
          "ギョレメの洞窟ホテル周辺は道がコンパクトで急勾配です。幹線道路の移動が順調でも、ホテルまでの最後のアクセスに時間がかかる場合があります。予約確認に記載された宿泊施設名をそのまま入力すると、正しい路地や実際に車両が停車できる降車場所を確認しやすくなります。",
          "到着が遅い便の場合は、まずチェックインを済ませ、その後の予定に余裕を持たせるのがおすすめです。ASRからの移動だけでも一定の時間がかかります。"
        ]
      },
      {
        "heading": "このルートのプライベート送迎",
        "paragraphs": [
          "専用車をご希望の場合、Vitoは最大5名まで片道€90、Sprinterは最大16名まで€110です。詳しくは[[プライベート空港送迎|private-airport-transfer-cappadocia]]をご覧ください。"
        ]
      },
      {
        "heading": "NAVも選べるなら、距離だけでなく実際のフライトも比較してください",
        "paragraphs": [
          "ネヴシェヒル空港は道路上ではギョレメに近いですが、ASRのフライト時刻が良ければ旅全体はそちらの方が楽なこともあります。まだ航空券を購入していない場合は[[ネヴシェヒル空港からギョレメへのシャトル|nevsehir-airport-to-goreme-shuttle]]と比較してください。2空港をまとめて見るなら[[ギョレメ空港送迎|goreme-airport-transfer]]をご利用ください。"
        ]
      }
    ],
    "faq": [
      {
        "q": "カイセリ空港はギョレメのシャトル利用には遠すぎますか？",
        "a": "いいえ。ASRはカッパドキアの主要ゲートウェイの一つです。ギョレメまでは約75 kmで、乗合の追加停車を除く一般的な道路所要時間は60–75分です。"
      },
      {
        "q": "乗合シャトルではなく、このルートでプライベート車両を予約できますか？",
        "a": "はい。プライベートVitoは最大5名まで片道€90、Sprinterは最大16名まで€110で、いずれも1台あたりの料金です。"
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
    "twitterTitle": "カイセリ空港からギョレメへのシャトル | 乗合・プライベート送迎",
    "twitterDescription": "カイセリ空港（ASR）からギョレメ：1名€15の乗合シャトル、プライベートVito/Sprinter、75 km、60–75分、ホテル送迎・予約情報。"
  },
  {
    "slug": "kayseri-airport-to-urgup-shuttle",
    "title": "カイセリ空港からユルギュップへのシャトル | 乗合・プライベート送迎",
    "description": "カイセリ空港（ASR）からユルギュップ：1名€15の乗合シャトル、プライベートVito/Sprinter、70 km、60–75分、ホテル送迎・予約情報。",
    "eyebrow": "ASR → ユルギュップ 空港シャトル",
    "h1": "カイセリ空港からユルギュップへのシャトル",
    "lead": "カイセリ空港（ASR）からユルギュップまでは、1名片道€15の乗合シャトル、またはプライベートVito/Sprinterをご利用いただけます。一般的な道路距離は約70 km、所要時間は60–75分です。ユルギュップ中心部は比較的アクセスしやすい一方、丘側の石造り・洞窟ホテルではホテルまでのアクセス方法が異なる場合があります。",
    "route": {
      "airport": "kayseri",
      "town": "urgup",
      "direction": "arrival"
    },
    "sections": [
      {
        "heading": "カイセリ空港からユルギュップ：約70 km / 60–75分",
        "paragraphs": [
          "ユルギュップはカッパドキア中心部の東側にあります。カイセリ空港からの一般的な道路目安は約70 km / 60–75分です。宿泊先がユルギュップの場合は予約時にユルギュップを選び、実際のホテル位置に合わせて車両のアクセス方法を確認できるようにしてください。"
        ]
      },
      {
        "heading": "ユルギュップ中心部と丘側の石造りホテルでは車両アクセスが異なります",
        "paragraphs": [
          "ユルギュップの多くの宿泊施設は一般道路からアクセスできますが、歴史的な石造り・洞窟ホテルの一部は坂道や細い路地にあります。すべてのユルギュップのホテルに共通する降車場所はありません。予約確認に記載された宿泊施設の正式名称があれば、実際の場所に合わせて車両のアクセス方法を確認できます。"
        ]
      },
      {
        "heading": "このルートのプライベート送迎",
        "paragraphs": [
          "専用車をご希望の場合、Vitoは最大5名まで片道€90、Sprinterは最大16名まで€110です。詳しくは[[プライベート空港送迎|private-airport-transfer-cappadocia]]をご覧ください。ASRではなくNAVも利用できる場合は[[ネヴシェヒル空港からユルギュップへのシャトル|nevsehir-airport-to-urgup-shuttle]]とも比較してください。"
        ]
      }
    ],
    "faq": [
      {
        "q": "カイセリ空港シャトルはユルギュップの宿泊施設まで行きますか？",
        "a": "はい。対象エリア内の確認済み宿泊施設まで運行しますが、実際の降車場所はその施設の道路・車両アクセス状況によって異なる場合があります。"
      },
      {
        "q": "カイセリ空港からユルギュップまでどのくらいかかりますか？",
        "a": "乗合シャトルの追加停車を除く一般的な道路目安は約70 km / 60–75分です。"
      }
    ],
    "related": [
      "urgup-to-kayseri-airport-shuttle",
      "kayseri-airport-shuttle",
      "nevsehir-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "カイセリ空港からユルギュップへのシャトル | 乗合・プライベート送迎",
    "twitterDescription": "カイセリ空港（ASR）からユルギュップ：1名€15の乗合シャトル、プライベートVito/Sprinter、70 km、60–75分、ホテル送迎・予約情報。"
  },
  {
    "slug": "kayseri-airport-to-uchisar-shuttle",
    "title": "カイセリ空港からウチヒサルへのシャトル | 乗合・プライベート送迎",
    "description": "カイセリ空港（ASR）からウチヒサル：1名€15の乗合シャトル、プライベートVito/Sprinter、80 km、70–85分、ホテル送迎・予約情報。",
    "eyebrow": "ASR → ウチヒサル 空港シャトル",
    "h1": "カイセリ空港からウチヒサルへのシャトル",
    "lead": "カイセリ空港（ASR）からウチヒサルまでは、1名片道€15の乗合シャトル、またはプライベートVito/Sprinterをご利用いただけます。一般的な道路距離は約80 km、所要時間は70–85分です。ウチヒサルは坂が急で道が細い区間があるため、ホテルまでの最後のアクセスは実際の施設と車両アクセス状況によって変わります。",
    "route": {
      "airport": "kayseri",
      "town": "uchisar",
      "direction": "arrival"
    },
    "sections": [
      {
        "heading": "カイセリ空港からウチヒサル：約80 km / 70–85分",
        "paragraphs": [
          "ウチヒサルは周辺の町より高い場所にあり、ホテルも斜面の道路沿いに分散しています。カイセリ空港からの一般的な道路目安は約80 km / 70–85分です。宿泊先がウチヒサルの場合は予約時にウチヒサルを選び、ホテルまでの最後のアクセスを正しく準備できるようにしてください。"
        ]
      },
      {
        "heading": "ウチヒサルでは最後の区間に時間がかかることがあります",
        "paragraphs": [
          "ウチヒサルは上部の村へ向かうほど急坂や細い道が増え、洞窟・石造りホテルの一部は大型車が入口まで直接入れません。すべてのホテルに共通の降車場所があるわけではありません。宿泊施設の正式名称があれば、正しい最後のアクセスまたは車両が停車できる最寄りの場所を確認できます。"
        ]
      },
      {
        "heading": "このルートのプライベート送迎",
        "paragraphs": [
          "専用車をご希望の場合、Vitoは最大5名まで片道€90、Sprinterは最大16名まで€110です。詳しくは[[プライベート空港送迎|private-airport-transfer-cappadocia]]をご覧ください。NAVも利用できるなら[[ネヴシェヒル空港からウチヒサルへのシャトル|nevsehir-airport-to-uchisar-shuttle]]とも比較してください。"
        ]
      }
    ],
    "faq": [
      {
        "q": "カイセリ空港シャトルはウチヒサルの宿泊施設まで直接行きますか？",
        "a": "対象エリア内の確認済み宿泊施設まで運行しますが、実際の降車場所はその施設の道路・車両アクセス状況によって異なる場合があります。"
      },
      {
        "q": "カイセリ空港からウチヒサルまでどのくらいかかりますか？",
        "a": "乗合シャトルの追加停車を除く一般的な道路目安は約80 km / 70–85分です。"
      }
    ],
    "related": [
      "uchisar-to-kayseri-airport-shuttle",
      "kayseri-airport-shuttle",
      "nevsehir-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "カイセリ空港からウチヒサルへのシャトル | 乗合・プライベート送迎",
    "twitterDescription": "カイセリ空港（ASR）からウチヒサル：1名€15の乗合シャトル、プライベートVito/Sprinter、80 km、70–85分、ホテル送迎・予約情報。"
  },
  {
    "slug": "kayseri-airport-to-avanos-shuttle",
    "title": "カイセリ空港からアヴァノスへのシャトル | 乗合・プライベート送迎",
    "description": "カイセリ空港（ASR）からアヴァノス：1名€15の乗合シャトル、プライベートVito/Sprinter、70 km、60–75分、ホテル送迎・予約情報。",
    "eyebrow": "ASR → アヴァノス 空港シャトル",
    "h1": "カイセリ空港からアヴァノスへのシャトル",
    "lead": "カイセリ空港（ASR）からアヴァノスまでは、1名片道€15の乗合シャトル、またはプライベートVito/Sprinterをご利用いただけます。一般的な道路距離は約70 km、所要時間は60–75分です。アヴァノスの宿泊施設は川の周辺に広く分散しているため、正しい最終降車場所を特定するにはホテルの正式名称が重要です。",
    "route": {
      "airport": "kayseri",
      "town": "avanos",
      "direction": "arrival"
    },
    "sections": [
      {
        "heading": "川沿いに広がるアヴァノス：ASRから約70 km / 60–75分",
        "paragraphs": [
          "アヴァノスは川沿いに広がり、周辺の丘の町より比較的平坦で道路も広めです。カイセリ空港からの一般的な道路目安は約70 km / 60–75分です。宿泊先がアヴァノスの場合は予約時にアヴァノスを選び、実際のホテル位置に合わせて車両のアクセス方法を確認できるようにしてください。"
        ]
      },
      {
        "heading": "アヴァノスは丘のホテル町より宿泊施設が広く分散しています",
        "paragraphs": [
          "アヴァノスの宿泊施設は一つの中心部に密集せず、川の両側や複数の道路に広がっています。単に「アヴァノス」とするより、宿泊施設の正式名称がある方が正しい最終降車場所を確認しやすくなります。"
        ]
      },
      {
        "heading": "このルートのプライベート送迎",
        "paragraphs": [
          "専用車をご希望の場合、Vitoは最大5名まで片道€90、Sprinterは最大16名まで€110です。詳しくは[[プライベート空港送迎|private-airport-transfer-cappadocia]]をご覧ください。NAVも利用できるなら[[ネヴシェヒル空港からアヴァノスへのシャトル|nevsehir-airport-to-avanos-shuttle]]とも比較してください。"
        ]
      }
    ],
    "faq": [
      {
        "q": "カイセリ空港シャトルはアヴァノスの宿泊施設まで行きますか？",
        "a": "はい。対象エリア内の確認済み宿泊施設まで運行しますが、実際の降車場所はその施設の車両アクセス状況によって異なる場合があります。"
      },
      {
        "q": "カイセリ空港からアヴァノスまでどのくらいかかりますか？",
        "a": "乗合シャトルの追加停車を除く一般的な道路目安は約70 km / 60–75分です。"
      }
    ],
    "related": [
      "avanos-to-kayseri-airport-shuttle",
      "kayseri-airport-shuttle",
      "nevsehir-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "カイセリ空港からアヴァノスへのシャトル | 乗合・プライベート送迎",
    "twitterDescription": "カイセリ空港（ASR）からアヴァノス：1名€15の乗合シャトル、プライベートVito/Sprinter、70 km、60–75分、ホテル送迎・予約情報。"
  },
  {
    "slug": "kayseri-airport-to-ortahisar-shuttle",
    "title": "カイセリ空港からオルタヒサルへのシャトル | 乗合・プライベート送迎",
    "description": "カイセリ空港（ASR）からオルタヒサル：1名€15の乗合シャトル、プライベートVito/Sprinter、75 km、60–75分、ホテル送迎・予約情報。",
    "eyebrow": "ASR → オルタヒサル 空港シャトル",
    "h1": "カイセリ空港からオルタヒサルへのシャトル",
    "lead": "カイセリ空港（ASR）からオルタヒサルまでは、1名片道€15の乗合シャトル、またはプライベートVito/Sprinterをご利用いただけます。一般的な道路距離は約75 km、所要時間は60–75分です。オルタヒサル中心部では一部の宿泊施設周辺の道が細くなるため、最後の車両アクセスは町名だけでなく実際の施設位置から確認します。",
    "route": {
      "airport": "kayseri",
      "town": "ortahisar",
      "direction": "arrival"
    },
    "sections": [
      {
        "heading": "細い村道があるオルタヒサル：ASRから約75 km / 60–75分",
        "paragraphs": [
          "オルタヒサルは比較的コンパクトな村で、中心部周辺では一部の宿泊施設へ向かう道が細くなります。カイセリ空港からの一般的な道路目安は約75 km / 60–75分です。宿泊先がオルタヒサルの場合は予約時にオルタヒサルを選び、実際の施設に合わせて車両のアクセス方法を確認できるようにしてください。"
        ]
      },
      {
        "heading": "小さな村でも宿泊施設の正式名称が必要です",
        "paragraphs": [
          "村が小さくても、すべての住所へ簡単に車両が入れるわけではありません。一部のゲストハウスは大型車が入口まで行けない細い路地にあります。宿泊施設の正式名称があれば、正しい降車場所や必要に応じて車両が停車できる最寄りの場所を確認できます。"
        ]
      },
      {
        "heading": "このルートのプライベート送迎",
        "paragraphs": [
          "専用車をご希望の場合、Vitoは最大5名まで片道€90、Sprinterは最大16名まで€110です。詳しくは[[プライベート空港送迎|private-airport-transfer-cappadocia]]をご覧ください。NAVも利用できるなら[[ネヴシェヒル空港からオルタヒサルへのシャトル|nevsehir-airport-to-ortahisar-shuttle]]とも比較してください。"
        ]
      }
    ],
    "faq": [
      {
        "q": "カイセリ空港シャトルはオルタヒサルの宿泊施設まで行きますか？",
        "a": "はい。対象エリア内の確認済み宿泊施設まで運行しますが、実際の降車場所はその施設の車両アクセス状況によって異なる場合があります。"
      },
      {
        "q": "カイセリ空港からオルタヒサルまでどのくらいかかりますか？",
        "a": "乗合シャトルの追加停車を除く一般的な道路目安は約75 km / 60–75分です。"
      }
    ],
    "related": [
      "ortahisar-to-kayseri-airport-shuttle",
      "kayseri-airport-shuttle",
      "nevsehir-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "カイセリ空港からオルタヒサルへのシャトル | 乗合・プライベート送迎",
    "twitterDescription": "カイセリ空港（ASR）からオルタヒサル：1名€15の乗合シャトル、プライベートVito/Sprinter、75 km、60–75分、ホテル送迎・予約情報。"
  },
  {
    "slug": "kayseri-airport-to-cavusin-shuttle",
    "title": "カイセリ空港からチャウシンへのシャトル | 乗合・プライベート送迎",
    "description": "カイセリ空港（ASR）からチャウシン：1名€15の乗合シャトル、プライベートVito/Sprinter、75 km、65–80分、ホテル送迎・予約情報。",
    "eyebrow": "ASR → チャウシン 空港シャトル",
    "h1": "カイセリ空港からチャウシンへのシャトル",
    "lead": "カイセリ空港（ASR）からチャウシンまでは、1名片道€15の乗合シャトル、またはプライベートVito/Sprinterをご利用いただけます。一般的な道路距離は約75 km、所要時間は65–80分です。チャウシンの宿泊施設は幹線道路沿いから古い丘の道まで分かれているため、実際の停車場所はホテルの正確な位置によって変わります。",
    "route": {
      "airport": "kayseri",
      "town": "cavusin",
      "direction": "arrival"
    },
    "sections": [
      {
        "heading": "古い村道と新しい宿泊エリアがあるチャウシン：ASRから約75 km / 65–80分",
        "paragraphs": [
          "チャウシンには古い丘道のゲストハウスと幹線道路沿いの新しい宿泊施設があり、ホテルまでのアクセス方法は施設によって大きく異なります。カイセリ空港からの一般的な道路目安は約75 km / 65–80分です。宿泊先がチャウシンの場合は予約時にチャウシンを選び、実際の位置に合わせて車両のアクセス方法を確認できるようにしてください。"
        ]
      },
      {
        "heading": "チャウシンでは正確な宿泊施設名が特に重要です",
        "paragraphs": [
          "宿泊施設が古い丘道、村道、幹線道路沿いなど異なるエリアに分かれているため、単に「チャウシン」と伝えるだけでは、どこまで車両が入れるかを正確に判断しにくくなります。宿泊施設の正式名称があれば、車両が向かうべき村のエリアと車両が停車できる場所を確認できます。"
        ]
      },
      {
        "heading": "このルートのプライベート送迎",
        "paragraphs": [
          "専用車をご希望の場合、Vitoは最大5名まで片道€90、Sprinterは最大16名まで€110です。詳しくは[[プライベート空港送迎|private-airport-transfer-cappadocia]]をご覧ください。NAVも利用できるなら[[ネヴシェヒル空港からチャウシンへのシャトル|nevsehir-airport-to-cavusin-shuttle]]とも比較してください。"
        ]
      }
    ],
    "faq": [
      {
        "q": "カイセリ空港シャトルはチャウシンのホテルにも行きますか？",
        "a": "はい。確認済みのチャウシン宿泊施設まで運行しますが、実際の降車場所はその施設への車両アクセス状況によって異なります。"
      },
      {
        "q": "カイセリ空港からチャウシンまでどのくらいかかりますか？",
        "a": "乗合シャトルの追加停車を除く一般的な道路目安は約75 km / 65–80分です。"
      }
    ],
    "related": [
      "cavusin-to-kayseri-airport-shuttle",
      "kayseri-airport-shuttle",
      "nevsehir-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "カイセリ空港からチャウシンへのシャトル | 乗合・プライベート送迎",
    "twitterDescription": "カイセリ空港（ASR）からチャウシン：1名€15の乗合シャトル、プライベートVito/Sprinter、75 km、65–80分、ホテル送迎・予約情報。"
  },
  {
    "slug": "nevsehir-airport-to-goreme-shuttle",
    "title": "ネヴシェヒル空港からギョレメへのシャトル | 乗合・プライベート送迎",
    "description": "ネヴシェヒル空港（NAV）からギョレメ：1名€15の乗合シャトル、プライベートVito/Sprinter、40 km、35–45分、ホテル送迎・予約情報。",
    "eyebrow": "NAV → ギョレメ 空港シャトル",
    "h1": "ネヴシェヒル空港からギョレメへのシャトル",
    "lead": "ネヴシェヒル空港（NAV）からギョレメまでは、1名片道€15の乗合シャトル、またはプライベートVito/Sprinterをご利用いただけます。一般的な道路距離は約40 km、所要時間は35–45分です。ギョレメの洞窟ホテル周辺は道が狭く、車両が停車できる最寄りの降車場所に影響することがあるため、宿泊施設の正式名称が重要です。",
    "route": {
      "airport": "nevsehir",
      "town": "goreme",
      "direction": "arrival"
    },
    "sections": [
      {
        "heading": "ギョレメへはNAVの方が道路移動が短いです",
        "paragraphs": [
          "ネヴシェヒル空港からギョレメまでの一般的な道路目安は約40 km / 35–45分です。空港からホテルまでの移動が比較的短いのは利点ですが、すべての洞窟ホテルの入口が車両の停車しやすい場所になるわけではありません。"
        ]
      },
      {
        "heading": "空港が近くてもホテルまでの最後のアクセスは別に確認が必要です",
        "paragraphs": [
          "NAVは道路上ではギョレメに近いですが、最後の数分は実際の宿泊施設によって変わります。丘側の洞窟ホテルではゆっくり進入したり、近くの車両が停車できる場所を使ったりすることがあるため、短いNAVルートでも宿泊施設の正式名称が重要です。",
          "2空港を比較する場合は[[ギョレメ空港送迎|goreme-airport-transfer]]をご覧ください。ASRのフライト時刻が良ければ[[カイセリ空港からギョレメへのシャトル|kayseri-airport-to-goreme-shuttle]]も現実的な選択肢です。"
        ]
      },
      {
        "heading": "このルートのプライベート送迎",
        "paragraphs": [
          "専用車をご希望の場合、Vitoは最大5名まで片道€80、Sprinterは最大16名まで€90です。詳しくは[[プライベート空港送迎|private-airport-transfer-cappadocia]]をご覧ください。"
        ]
      }
    ],
    "faq": [
      {
        "q": "ネヴシェヒル空港はギョレメに近い方の空港ですか？",
        "a": "はい。NAVからギョレメまでは約40 kmで、ASRからは約75 kmです。"
      },
      {
        "q": "NAVからの道が短ければホテルの入口まで必ず送ってもらえますか？",
        "a": "いいえ。洞窟ホテル周辺の車両アクセスは空港までの距離とは別の問題です。"
      },
      {
        "q": "乗合シャトルではなく、このルートでプライベート車両を予約できますか？",
        "a": "はい。プライベートVitoは最大5名まで片道€80、Sprinterは最大16名まで€90で、いずれも1台あたりの料金です。"
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
    "twitterTitle": "ネヴシェヒル空港からギョレメへのシャトル | 乗合・プライベート送迎",
    "twitterDescription": "ネヴシェヒル空港（NAV）からギョレメ：1名€15の乗合シャトル、プライベートVito/Sprinter、40 km、35–45分、ホテル送迎・予約情報。"
  },
  {
    "slug": "nevsehir-airport-to-urgup-shuttle",
    "title": "ネヴシェヒル空港からユルギュップへのシャトル | 乗合・プライベート送迎",
    "description": "ネヴシェヒル空港（NAV）からユルギュップ：1名€15の乗合シャトル、プライベートVito/Sprinter、50 km、45–60分、ホテル送迎・予約情報。",
    "eyebrow": "NAV → ユルギュップ 空港シャトル",
    "h1": "ネヴシェヒル空港からユルギュップへのシャトル",
    "lead": "ネヴシェヒル空港（NAV）からユルギュップまでは、1名片道€15の乗合シャトル、またはプライベートVito/Sprinterをご利用いただけます。一般的な道路距離は約50 km、所要時間は45–60分です。ユルギュップ中心部は比較的アクセスしやすい一方、丘側の石造り・洞窟ホテルではホテルまでのアクセス方法が異なる場合があります。",
    "route": {
      "airport": "nevsehir",
      "town": "urgup",
      "direction": "arrival"
    },
    "sections": [
      {
        "heading": "NAVなら地域内の移動は短くなりますが、ユルギュップはギョレメやウチヒサルより東側です",
        "paragraphs": [
          "ネヴシェヒル空港からユルギュップまでは約**50 km / 45–60分**です。カッパドキア中心部を横切って移動し、ユルギュップは小さな村より道路の幅に変化があり、宿泊施設も広く分散しています。"
        ]
      },
      {
        "heading": "料金重視なら乗合、専用車を希望するならプライベート送迎",
        "paragraphs": [
          "1〜2名なら乗合シャトルで費用を抑えやすくなります。プライベートVitoは最大5名まで片道€80、Sprinterは最大16名まで片道€90です。詳しくは[[プライベート空港送迎|private-airport-transfer-cappadocia]]をご覧いただくか、[[乗合シャトルとプライベート送迎の比較|cappadocia-shared-shuttle-vs-private-transfer]]でサービスを比較してください。"
        ]
      }
    ],
    "faq": [
      {
        "q": "ネヴシェヒル空港からユルギュップまでどのくらいかかりますか？",
        "a": "乗合シャトルの追加停車を除く一般的な道路目安は約50 km / 45–60分です。"
      },
      {
        "q": "乗合シャトルではなく、このルートでプライベート車両を予約できますか？",
        "a": "はい。プライベートVitoは最大5名まで片道€80、Sprinterは最大16名まで€90で、いずれも1台あたりの料金です。"
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
    "twitterTitle": "ネヴシェヒル空港からユルギュップへのシャトル | 乗合・プライベート送迎",
    "twitterDescription": "ネヴシェヒル空港（NAV）からユルギュップ：1名€15の乗合シャトル、プライベートVito/Sprinter、50 km、45–60分、ホテル送迎・予約情報。"
  },
  {
    "slug": "nevsehir-airport-to-uchisar-shuttle",
    "title": "ネヴシェヒル空港からウチヒサルへのシャトル | 乗合・プライベート送迎",
    "description": "ネヴシェヒル空港（NAV）からウチヒサル：1名€15の乗合シャトル、プライベートVito/Sprinter、35 km、30–40分、ホテル送迎・予約情報。",
    "eyebrow": "NAV → ウチヒサル 空港シャトル",
    "h1": "ネヴシェヒル空港からウチヒサルへのシャトル",
    "lead": "ネヴシェヒル空港（NAV）からウチヒサルまでは、1名片道€15の乗合シャトル、またはプライベートVito/Sprinterをご利用いただけます。一般的な道路距離は約35 km、所要時間は30–40分です。ウチヒサルの丘道は急坂や細い道があるため、ホテルまでの最後のアクセスは実際の施設と車両アクセス状況によって変わります。",
    "route": {
      "airport": "nevsehir",
      "town": "uchisar",
      "direction": "arrival"
    },
    "sections": [
      {
        "heading": "ネヴシェヒル空港からウチヒサル：約35 km / 30–40分",
        "paragraphs": [
          "空港とウチヒサルは約35 km離れており、一般的な道路所要時間は30–40分です。比較的短いルートでも、丘側のホテルは施設の位置や道路状況によってホテルまでのアクセスに時間がかかる場合があります。"
        ]
      },
      {
        "heading": "短いルートでも宿泊施設の正式名称が必要です",
        "paragraphs": [
          "ウチヒサルは上部の村へ向かうほど道が細くなり、坂も急になります。空港が近くても、ホテルまでの車両アクセスは事前に確認する必要があります。宿泊施設の正式名称があれば、正しい最終停車場所や最寄りの車両が停車できる降車地点を確認できます。",
          "ASRに到着する場合は[[カイセリ空港からウチヒサルへのシャトル|kayseri-airport-to-uchisar-shuttle]]をご覧ください。"
        ]
      },
      {
        "heading": "このルートのプライベート送迎",
        "paragraphs": [
          "専用車をご希望の場合、Vitoは最大5名まで片道€80、Sprinterは最大16名まで€90です。詳しくは[[プライベート空港送迎|private-airport-transfer-cappadocia]]をご覧ください。"
        ]
      }
    ],
    "faq": [
      {
        "q": "ネヴシェヒル空港からウチヒサルまで道路でどのくらいかかりますか？",
        "a": "乗合シャトルのホテル停車やホテルまでの最後のアクセスに必要な追加時間を除くと、一般的な道路目安は約35 km / 30–40分です。"
      },
      {
        "q": "乗合シャトルではなく、このルートでプライベート車両を予約できますか？",
        "a": "はい。プライベートVitoは最大5名まで片道€80、Sprinterは最大16名まで€90で、いずれも1台あたりの料金です。"
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
    "twitterTitle": "ネヴシェヒル空港からウチヒサルへのシャトル | 乗合・プライベート送迎",
    "twitterDescription": "ネヴシェヒル空港（NAV）からウチヒサル：1名€15の乗合シャトル、プライベートVito/Sprinter、35 km、30–40分、ホテル送迎・予約情報。"
  },
  {
    "slug": "nevsehir-airport-to-avanos-shuttle",
    "title": "ネヴシェヒル空港からアヴァノスへのシャトル | 乗合・プライベート送迎",
    "description": "ネヴシェヒル空港（NAV）からアヴァノス：1名€15の乗合シャトル、プライベートVito/Sprinter、38 km、35–50分、ホテル送迎・予約情報。",
    "eyebrow": "NAV → アヴァノス 空港シャトル",
    "h1": "ネヴシェヒル空港からアヴァノスへのシャトル",
    "lead": "ネヴシェヒル空港（NAV）からアヴァノスまでは、1名片道€15の乗合シャトル、またはプライベートVito/Sprinterをご利用いただけます。一般的な道路距離は約38 km、所要時間は35–50分です。アヴァノスの宿泊施設は川周辺の広い地域に分散しているため、正しい最終降車場所を特定するにはホテルの正式名称が重要です。",
    "route": {
      "airport": "nevsehir",
      "town": "avanos",
      "direction": "arrival"
    },
    "sections": [
      {
        "heading": "ネヴシェヒル空港からアヴァノス：約38 km / 35–50分",
        "paragraphs": [
          "ネヴシェヒル空港からアヴァノスまでの一般的な道路目安は約38 km / 35–50分です。アヴァノスの宿泊施設は町の複数エリアに広く分散しているため、単に「アヴァノス」とするより宿泊施設の正式名称がある方が正しい最終停車場所を確認しやすくなります。"
        ]
      },
      {
        "heading": "このルートのプライベート送迎",
        "paragraphs": [
          "専用車をご希望の場合、Vitoは最大5名まで片道€80、Sprinterは最大16名まで€90です。詳しくは[[プライベート空港送迎|private-airport-transfer-cappadocia]]をご覧ください。"
        ]
      }
    ],
    "faq": [
      {
        "q": "アヴァノスはネヴシェヒル空港から近いですか？",
        "a": "一般的な道路目安は約38 km / 35–50分です。"
      },
      {
        "q": "乗合シャトルではなく、このルートでプライベート車両を予約できますか？",
        "a": "はい。プライベートVitoは最大5名まで片道€80、Sprinterは最大16名まで€90で、いずれも1台あたりの料金です。"
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
    "twitterTitle": "ネヴシェヒル空港からアヴァノスへのシャトル | 乗合・プライベート送迎",
    "twitterDescription": "ネヴシェヒル空港（NAV）からアヴァノス：1名€15の乗合シャトル、プライベートVito/Sprinter、38 km、35–50分、ホテル送迎・予約情報。"
  },
  {
    "slug": "nevsehir-airport-to-ortahisar-shuttle",
    "title": "ネヴシェヒル空港からオルタヒサルへのシャトル | 乗合・プライベート送迎",
    "description": "ネヴシェヒル空港（NAV）からオルタヒサル：1名€15の乗合シャトル、プライベートVito/Sprinter、45 km、40–50分、ホテル送迎・予約情報。",
    "eyebrow": "NAV → オルタヒサル 空港シャトル",
    "h1": "ネヴシェヒル空港からオルタヒサルへのシャトル",
    "lead": "ネヴシェヒル空港（NAV）からオルタヒサルまでは、1名片道€15の乗合シャトル、またはプライベートVito/Sprinterをご利用いただけます。一般的な道路距離は約45 km、所要時間は40–50分です。オルタヒサル中心部では一部の宿泊施設周辺の道が細くなるため、最後の車両アクセスは町名だけでなく実際の施設位置から確認します。",
    "route": {
      "airport": "nevsehir",
      "town": "ortahisar",
      "direction": "arrival"
    },
    "sections": [
      {
        "heading": "ネヴシェヒル空港からオルタヒサル：約45 km / 40–50分",
        "paragraphs": [
          "ネヴシェヒル空港からオルタヒサルまでの一般的な道路目安は約45 km / 40–50分です。村の中の最後の数分は、宿泊施設がある道と実際の車両アクセス状況によって変わることがあります。"
        ]
      },
      {
        "heading": "オルタヒサルでは宿泊施設の正式名称が重要です",
        "paragraphs": [
          "オルタヒサルはコンパクトな村で、中心部周辺では一部の宿泊施設へ向かう道が細くなります。「オルタヒサル」という位置だけではホテルアクセスを正確に決めにくいため、宿泊施設の正式名称が実際の停車場所を確認するのに役立ちます。",
          "後でNAVから出発する場合は[[オルタヒサルからネヴシェヒル空港へのシャトル|ortahisar-to-nevsehir-airport-shuttle]]で復路をご確認ください。"
        ]
      },
      {
        "heading": "このルートのプライベート送迎",
        "paragraphs": [
          "専用車をご希望の場合、Vitoは最大5名まで片道€80、Sprinterは最大16名まで€90です。詳しくは[[プライベート空港送迎|private-airport-transfer-cappadocia]]をご覧ください。"
        ]
      }
    ],
    "faq": [
      {
        "q": "NAVからオルタヒサルへ乗合シャトルはありますか？",
        "a": "はい。ネヴシェヒル空港（NAV）から対象エリア内のオルタヒサル宿泊施設まで乗合シャトルをご利用いただけます。"
      },
      {
        "q": "乗合シャトルではなく、このルートでプライベート車両を予約できますか？",
        "a": "はい。プライベートVitoは最大5名まで片道€80、Sprinterは最大16名まで€90で、いずれも1台あたりの料金です。"
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
    "twitterTitle": "ネヴシェヒル空港からオルタヒサルへのシャトル | 乗合・プライベート送迎",
    "twitterDescription": "ネヴシェヒル空港（NAV）からオルタヒサル：1名€15の乗合シャトル、プライベートVito/Sprinter、45 km、40–50分、ホテル送迎・予約情報。"
  },
  {
    "slug": "nevsehir-airport-to-cavusin-shuttle",
    "title": "ネヴシェヒル空港からチャウシンへのシャトル | 乗合・プライベート送迎",
    "description": "ネヴシェヒル空港（NAV）からチャウシン：1名€15の乗合シャトル、プライベートVito/Sprinter、42 km、40–55分、ホテル送迎・予約情報。",
    "eyebrow": "NAV → チャウシン 空港シャトル",
    "h1": "ネヴシェヒル空港からチャウシンへのシャトル",
    "lead": "ネヴシェヒル空港（NAV）からチャウシンまでは、1名片道€15の乗合シャトル、またはプライベートVito/Sprinterをご利用いただけます。一般的な道路距離は約42 km、所要時間は40–55分です。チャウシンの宿泊施設は幹線道路、旧村、谷側のエリアに分かれているため、実際の停車場所はホテルの正確な位置によって変わります。",
    "route": {
      "airport": "nevsehir",
      "town": "cavusin",
      "direction": "arrival"
    },
    "sections": [
      {
        "heading": "ネヴシェヒル空港からチャウシン：約42 km / 40–55分",
        "paragraphs": [
          "ネヴシェヒル空港からチャウシンまでの一般的な道路目安は約42 km / 40–55分です。チャウシンの宿泊施設は幹線道路、旧村、谷へのアクセス側など異なる場所にあるため、宿泊施設の正式名称が正しい最終停車場所を準備するのに役立ちます。"
        ]
      },
      {
        "heading": "早朝は最後のアクセス区間の交通が変わることがあります",
        "paragraphs": [
          "早朝は谷や熱気球の離陸エリア周辺で車両が増え、チャウシンへ入る最後の区間が普段より混み合うことがあります。NAVからの全体距離が短くても、この地域交通の影響は別に考える必要があります。"
        ]
      },
      {
        "heading": "フライトが便利ならASRも選択肢です",
        "paragraphs": [
          "より長いルートは[[カイセリ空港からチャウシンへのシャトル|kayseri-airport-to-cavusin-shuttle]]です。乗合料金はどちらの空港からでも同じなので、最短距離よりフライトの使いやすさを優先した方がよい場合もあります。"
        ]
      },
      {
        "heading": "このルートのプライベート送迎",
        "paragraphs": [
          "専用車をご希望の場合、Vitoは最大5名まで片道€80、Sprinterは最大16名まで€90です。詳しくは[[プライベート空港送迎|private-airport-transfer-cappadocia]]をご覧ください。"
        ]
      }
    ],
    "faq": [
      {
        "q": "チャウシンはギョレメとは別のシャトル目的地ですか？",
        "a": "はい。チャウシンとギョレメは別々の乗車・降車エリアなので、正しい停車場所のために宿泊施設の正式名称が必要です。"
      },
      {
        "q": "乗合シャトルではなく、このルートでプライベート車両を予約できますか？",
        "a": "はい。プライベートVitoは最大5名まで片道€80、Sprinterは最大16名まで€90で、いずれも1台あたりの料金です。"
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
    "twitterTitle": "ネヴシェヒル空港からチャウシンへのシャトル | 乗合・プライベート送迎",
    "twitterDescription": "ネヴシェヒル空港（NAV）からチャウシン：1名€15の乗合シャトル、プライベートVito/Sprinter、42 km、40–55分、ホテル送迎・予約情報。"
  },
  {
    "slug": "goreme-to-kayseri-airport-shuttle",
    "title": "ギョレメからカイセリ空港へのシャトル | ホテルお迎え",
    "description": "ギョレメからカイセリ空港（ASR）：1名€15のシャトル、75 km、60–75分、ホテルお迎え、プライベートVito/Sprinter。",
    "eyebrow": "ギョレメ → ASR 空港シャトル",
    "h1": "ギョレメからカイセリ空港へのシャトル",
    "lead": "ギョレメからカイセリ空港（ASR）へのホテルピックアップは、1名片道€15の乗合シャトルまたはプライベートVito/Sprinterで予約できます。一般的な道路距離は約75 km、所要時間は60–75分です。ギョレメの洞窟ホテルや丘道では、車両が幹線道路へ出る前に現地ピックアップ時間が加わることがあります。確定したお迎え時刻には、ほかのホテルでの乗合ピックアップと空港到着の余裕時間も含まれています。",
    "route": {
      "airport": "kayseri",
      "town": "goreme",
      "direction": "return"
    },
    "sections": [
      {
        "heading": "ギョレメからASRへは実際の出発余裕時間が必要です",
        "paragraphs": [
          "ギョレメからカイセリ空港までは道路で約75 km / 60–75分です。ただし確定したお迎え時刻には、ほかのホテルでの乗合ピックアップと空港到着の余裕時間も含まれるため、道路時間だけから計算したより早い出発になる場合があります。"
        ]
      },
      {
        "heading": "ギョレメのお迎え時刻が変わる理由",
        "paragraphs": [
          "ギョレメでは複数のホテルピックアップがあると、車両が幹線道路へ出るまでに時間がかかることがあります。道路所要時間だけで出発時刻を計算せず、予約時に案内された確定お迎え時刻に従ってください。熱気球が飛ぶ朝は、開けた道路へ出る前の地域交通が増えることもあります。",
          "NAVから出発する場合は[[ギョレメからネヴシェヒル空港へのシャトル|goreme-to-nevsehir-airport-shuttle]]をご覧ください。2空港の比較は[[ギョレメ空港送迎|goreme-airport-transfer]]で確認できます。"
        ]
      },
      {
        "heading": "このルートのプライベート送迎",
        "paragraphs": [
          "専用車をご希望の場合、Vitoは最大5名まで片道€90、Sprinterは最大16名まで€110です。詳しくは[[プライベート空港送迎|private-airport-transfer-cappadocia]]をご覧ください。"
        ]
      }
    ],
    "faq": [
      {
        "q": "なぜギョレメのお迎えが60–75分の道路目安より早く設定されることがありますか？",
        "a": "乗合出発では、ほかのホテルでのピックアップ時間とフライト前に必要な空港到着の余裕時間が含まれる場合があるためです。"
      },
      {
        "q": "乗合シャトルではなく、このルートでプライベート車両を予約できますか？",
        "a": "はい。プライベートVitoは最大5名まで片道€90、Sprinterは最大16名まで€110で、いずれも1台あたりの料金です。"
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
    "twitterTitle": "ギョレメからカイセリ空港へのシャトル | ホテルお迎え",
    "twitterDescription": "ギョレメからカイセリ空港（ASR）：1名€15のシャトル、75 km、60–75分、ホテルお迎え、プライベートVito/Sprinter。"
  },
  {
    "slug": "urgup-to-kayseri-airport-shuttle",
    "title": "ユルギュップからカイセリ空港へのシャトル | ホテルお迎え",
    "description": "ユルギュップからカイセリ空港（ASR）：1名€15のシャトル、70 km、60–75分、ホテルお迎え、プライベートVito/Sprinter。",
    "eyebrow": "ユルギュップ → ASR 空港シャトル",
    "h1": "ユルギュップからカイセリ空港へのシャトル",
    "lead": "ユルギュップからカイセリ空港（ASR）へのホテルピックアップは、1名片道€15の乗合シャトルまたはプライベートVito/Sprinterで予約できます。一般的な道路距離は約70 km、所要時間は60–75分です。ユルギュップの宿泊施設は中心部と丘側に分かれているため、空港へ向かう前の確定したピックアップ場所が重要です。お迎え時刻にはほかのホテルでの乗合ピックアップと空港到着の余裕時間も反映されています。",
    "route": {
      "airport": "kayseri",
      "town": "urgup",
      "direction": "return"
    },
    "sections": [
      {
        "heading": "ユルギュップではピックアップ場所が重要です",
        "paragraphs": [
          "ユルギュップの宿泊施設は中心部と丘側に分かれており、車両が幹線道路へ出る前のホテルピックアップ自体に時間がかかることがあります。古い路地のすべてに車両が入れると考えず、予約時に確認したピックアップ場所で準備してください。"
        ]
      },
      {
        "heading": "ユルギュップからカイセリ空港：約70 km / 60–75分",
        "paragraphs": [
          "一般的な道路目安は約70 km / 60–75分です。道路距離だけで出発時刻を計算せず、確定したお迎え時刻に従ってください。",
          "到着方向は[[カイセリ空港からユルギュップへのシャトル|kayseri-airport-to-urgup-shuttle]]をご覧ください。NAVから出発する場合は[[ユルギュップからネヴシェヒル空港へのシャトル|urgup-to-nevsehir-airport-shuttle]]を確認してください。"
        ]
      },
      {
        "heading": "ユルギュップ中心部と丘側の宿泊施設ではピックアップアクセスが異なります",
        "paragraphs": [
          "中心部のホテルは比較的車両アクセスがしやすい一方、丘側や古い石造りの宿泊施設では、確定したピックアップ場所まで車両が来るのに数分余分にかかることがあります。早朝出発の場合は特に荷物を事前に準備しておいてください。"
        ]
      },
      {
        "heading": "このルートのプライベート送迎",
        "paragraphs": [
          "専用車をご希望の場合、Vitoは最大5名まで片道€90、Sprinterは最大16名まで€110です。詳しくは[[プライベート空港送迎|private-airport-transfer-cappadocia]]をご覧ください。"
        ]
      }
    ],
    "faq": [
      {
        "q": "ユルギュップの洞窟ホテルからASR行き乗合シャトルに乗れますか？",
        "a": "はい。ただし実際に車両がアクセスできる場所に合わせて、その宿泊施設のピックアップ場所を確認します。"
      },
      {
        "q": "乗合シャトルではなく、このルートでプライベート車両を予約できますか？",
        "a": "はい。プライベートVitoは最大5名まで片道€90、Sprinterは最大16名まで€110で、いずれも1台あたりの料金です。"
      }
    ],
    "related": [
      "kayseri-airport-to-urgup-shuttle",
      "kayseri-airport-shuttle",
      "cappadocia-to-kayseri-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "ユルギュップからカイセリ空港へのシャトル | ホテルお迎え",
    "twitterDescription": "ユルギュップからカイセリ空港（ASR）：1名€15のシャトル、70 km、60–75分、ホテルお迎え、プライベートVito/Sprinter。"
  },
  {
    "slug": "uchisar-to-kayseri-airport-shuttle",
    "title": "ウチヒサルからカイセリ空港へのシャトル | ホテルお迎え",
    "description": "ウチヒサルからカイセリ空港（ASR）：1名€15のシャトル、80 km、70–85分、ホテルお迎え、プライベートVito/Sprinter。",
    "eyebrow": "ウチヒサル → ASR 空港シャトル",
    "h1": "ウチヒサルからカイセリ空港へのシャトル",
    "lead": "ウチヒサルからカイセリ空港（ASR）へのホテルピックアップは、1名片道€15の乗合シャトルまたはプライベートVito/Sprinterで予約できます。一般的な道路距離は約80 km、所要時間は70–85分です。ウチヒサル上部の急で細い道では、すべてのホテル入口まで車両が直接行けず、車両が停車できるピックアップ場所が必要になることがあります。確定したお迎え時刻には、ほかのホテルの乗合ピックアップと空港到着の余裕時間も含まれています。",
    "route": {
      "airport": "kayseri",
      "town": "uchisar",
      "direction": "return"
    },
    "sections": [
      {
        "heading": "ウチヒサルからカイセリ空港：約80 km / 70–85分",
        "paragraphs": [
          "ウチヒサルからカイセリ空港までの一般的な道路目安は約80 km / 70–85分です。比較的長い空港移動なので、出発日は確定したお迎え時刻に従うことが重要です。"
        ]
      },
      {
        "heading": "ウチヒサルではピックアップ場所が特に重要です",
        "paragraphs": [
          "ウチヒサルは上部の村へ向かうほど道が細く急になります。車両がすべての宿泊施設の入口まで直接行けるわけではないため、実際にアクセスできる場所でピックアップする場合があります。ASRまでの移動が長いので、出発が遅れないようお迎え時間帯が始まる前に荷物を持って確定場所で準備してください。",
          "NAVから出発する場合は[[ウチヒサルからネヴシェヒル空港へのシャトル|uchisar-to-nevsehir-airport-shuttle]]をご覧ください。"
        ]
      },
      {
        "heading": "このルートのプライベート送迎",
        "paragraphs": [
          "専用車をご希望の場合、Vitoは最大5名まで片道€90、Sprinterは最大16名まで€110です。詳しくは[[プライベート空港送迎|private-airport-transfer-cappadocia]]をご覧ください。"
        ]
      }
    ],
    "faq": [
      {
        "q": "ウチヒサルからカイセリ空港まで道路でどのくらいかかりますか？",
        "a": "一般的な道路目安は約80 km / 70–85分です。"
      },
      {
        "q": "ホテルがウチヒサルの急な道にある場合はどうなりますか？",
        "a": "予約時に確認したピックアップ場所に従い、お迎え時間帯が始まる前に荷物を持ってその場所で準備してください。"
      },
      {
        "q": "乗合シャトルではなく、このルートでプライベート車両を予約できますか？",
        "a": "はい。プライベートVitoは最大5名まで片道€90、Sprinterは最大16名まで€110で、いずれも1台あたりの料金です。"
      }
    ],
    "related": [
      "kayseri-airport-to-uchisar-shuttle",
      "kayseri-airport-shuttle",
      "cappadocia-to-kayseri-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "ウチヒサルからカイセリ空港へのシャトル | ホテルお迎え",
    "twitterDescription": "ウチヒサルからカイセリ空港（ASR）：1名€15のシャトル、80 km、70–85分、ホテルお迎え、プライベートVito/Sprinter。"
  },
  {
    "slug": "avanos-to-kayseri-airport-shuttle",
    "title": "アヴァノスからカイセリ空港へのシャトル | ホテルお迎え",
    "description": "アヴァノスからカイセリ空港（ASR）：1名€15のシャトル、70 km、60–75分、ホテルお迎え、プライベートVito/Sprinter。",
    "eyebrow": "アヴァノス → ASR 空港シャトル",
    "h1": "アヴァノスからカイセリ空港へのシャトル",
    "lead": "アヴァノスからカイセリ空港（ASR）へのホテルピックアップは、1名片道€15の乗合シャトルまたはプライベートVito/Sprinterで予約できます。一般的な道路距離は約70 km、所要時間は60–75分です。アヴァノスの宿泊施設は町の複数エリアに広く分散しているため、ホテルの正式名称が正しいピックアップ場所を確認するのに重要です。確定したお迎え時刻には、ほかのホテルの乗合ピックアップと空港到着の余裕時間も含まれています。",
    "route": {
      "airport": "kayseri",
      "town": "avanos",
      "direction": "return"
    },
    "sections": [
      {
        "heading": "アヴァノスからカイセリ空港：約70 km / 60–75分",
        "paragraphs": [
          "60–75分は道路走行そのものの一般的な目安です。乗合シャトルで出発する場合は、ほかのホテルでのピックアップと空港到着の余裕時間が別に含まれるため、予約時に案内された確定お迎え時刻に従ってください。",
          "アヴァノスの宿泊施設は町の複数エリアに広く分散しているため、単に「アヴァノス」とするより宿泊施設の正式名称がある方が正しいピックアップ場所を確認しやすくなります。",
          "NAVから出発する場合は[[アヴァノスからネヴシェヒル空港へのシャトル|avanos-to-nevsehir-airport-shuttle]]をご覧ください。"
        ]
      },
      {
        "heading": "このルートのプライベート送迎",
        "paragraphs": [
          "専用車をご希望の場合、Vitoは最大5名まで片道€90、Sprinterは最大16名まで€110です。詳しくは[[プライベート空港送迎|private-airport-transfer-cappadocia]]をご覧ください。"
        ]
      }
    ],
    "faq": [
      {
        "q": "アヴァノスからカイセリ空港へ行く場合、どこでシャトルに乗りますか？",
        "a": "車両アクセス状況に応じて、確認済み宿泊施設前または車両が停車できる最寄りの場所でピックアップします。"
      },
      {
        "q": "乗合シャトルではなく、このルートでプライベート車両を予約できますか？",
        "a": "はい。プライベートVitoは最大5名まで片道€90、Sprinterは最大16名まで€110で、いずれも1台あたりの料金です。"
      }
    ],
    "related": [
      "kayseri-airport-to-avanos-shuttle",
      "kayseri-airport-shuttle",
      "cappadocia-to-kayseri-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "アヴァノスからカイセリ空港へのシャトル | ホテルお迎え",
    "twitterDescription": "アヴァノスからカイセリ空港（ASR）：1名€15のシャトル、70 km、60–75分、ホテルお迎え、プライベートVito/Sprinter。"
  },
  {
    "slug": "ortahisar-to-kayseri-airport-shuttle",
    "title": "オルタヒサルからカイセリ空港へのシャトル | ホテルお迎え",
    "description": "オルタヒサルからカイセリ空港（ASR）：1名€15のシャトル、75 km、60–75分、ホテルお迎え、プライベートVito/Sprinter。",
    "eyebrow": "オルタヒサル → ASR 空港シャトル",
    "h1": "オルタヒサルからカイセリ空港へのシャトル",
    "lead": "オルタヒサルからカイセリ空港（ASR）へのホテルピックアップは、1名片道€15の乗合シャトルまたはプライベートVito/Sprinterで予約できます。一般的な道路距離は約75 km、所要時間は60–75分です。古い村の細い道がピックアップ開始時の数分に影響することがあるため、確定した集合場所が重要です。お迎え時刻にはほかのホテルの乗合ピックアップと空港到着の余裕時間も含まれています。",
    "route": {
      "airport": "kayseri",
      "town": "ortahisar",
      "direction": "return"
    },
    "sections": [
      {
        "heading": "オルタヒサルからカイセリ空港：約75 km / 60–75分",
        "paragraphs": [
          "道路時間は実際の走行のみの目安で、確定したお迎え時刻にはほかのホテルの乗合ピックアップと空港到着の余裕時間も反映されています。古い村へのアクセスがピックアップ開始の数分に影響することがあるため、出発計画では道路距離より宿泊施設ごとに確認したピックアップ場所が重要です。"
        ]
      },
      {
        "heading": "オルタヒサルではピックアップ時刻を守ることが重要です",
        "paragraphs": [
          "乗合車両はオルタヒサルを出る前にほかのホテルで乗客を乗せる場合があり、細い村道によって確定したピックアップ場所までの時間が変わることがあります。カイセリ空港へ不要な遅れなく向かえるよう、お迎え時間帯が始まる前に荷物を準備してください。",
          "NAVから出発する場合は[[オルタヒサルからネヴシェヒル空港へのシャトル|ortahisar-to-nevsehir-airport-shuttle]]をご覧ください。到着方向は[[カイセリ空港からオルタヒサルへのシャトル|kayseri-airport-to-ortahisar-shuttle]]で確認できます。"
        ]
      },
      {
        "heading": "このルートのプライベート送迎",
        "paragraphs": [
          "専用車をご希望の場合、Vitoは最大5名まで片道€90、Sprinterは最大16名まで€110です。詳しくは[[プライベート空港送迎|private-airport-transfer-cappadocia]]をご覧ください。"
        ]
      }
    ],
    "faq": [
      {
        "q": "オルタヒサルからASRへ行くとき、なぜ早めに準備する必要がありますか？",
        "a": "乗合出発ではほかのホテルでのピックアップが含まれる場合があるため、予約時に案内された確定お迎え時刻に従うことが重要です。"
      },
      {
        "q": "乗合シャトルではなく、このルートでプライベート車両を予約できますか？",
        "a": "はい。プライベートVitoは最大5名まで片道€90、Sprinterは最大16名まで€110で、いずれも1台あたりの料金です。"
      }
    ],
    "related": [
      "kayseri-airport-to-ortahisar-shuttle",
      "kayseri-airport-shuttle",
      "cappadocia-to-kayseri-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "オルタヒサルからカイセリ空港へのシャトル | ホテルお迎え",
    "twitterDescription": "オルタヒサルからカイセリ空港（ASR）：1名€15のシャトル、75 km、60–75分、ホテルお迎え、プライベートVito/Sprinter。"
  },
  {
    "slug": "cavusin-to-kayseri-airport-shuttle",
    "title": "チャウシンからカイセリ空港へのシャトル | ホテルお迎え",
    "description": "チャウシンからカイセリ空港（ASR）：1名€15のシャトル、75 km、65–80分、ホテルお迎え、プライベートVito/Sprinter。",
    "eyebrow": "チャウシン → ASR 空港シャトル",
    "h1": "チャウシンからカイセリ空港へのシャトル",
    "lead": "チャウシンからカイセリ空港（ASR）へのホテルピックアップは、1名片道€15の乗合シャトルまたはプライベートVito/Sprinterで予約できます。一般的な道路距離は約75 km、所要時間は65–80分です。チャウシンの宿泊施設は幹線道路、旧村、谷側に分かれているため、確定したピックアップ場所が重要です。お迎え時刻にはほかのホテルの乗合ピックアップと空港到着の余裕時間も含まれています。",
    "route": {
      "airport": "kayseri",
      "town": "cavusin",
      "direction": "return"
    },
    "sections": [
      {
        "heading": "チャウシンからカイセリ空港：約75 km / 65–80分",
        "paragraphs": [
          "道路時間は実際の走行のみの目安で、確定したお迎え時刻にはほかのホテルの乗合ピックアップと空港到着の余裕時間も反映されています。チャウシンの宿泊施設は幹線道路、旧村、谷へのアクセス側などに分かれているため、出発計画では宿泊施設ごとに確認したピックアップ場所が重要です。"
        ]
      },
      {
        "heading": "熱気球が飛ぶ朝はチャウシン周辺の交通が増えることがあります",
        "paragraphs": [
          "早朝の熱気球活動でチャウシン周辺の道路が普段より混み合うことがあるため、お迎え時間帯が始まる前に確定した場所で準備してください。",
          "NAVから出発する場合は[[チャウシンからネヴシェヒル空港へのシャトル|cavusin-to-nevsehir-airport-shuttle]]をご覧ください。"
        ]
      },
      {
        "heading": "旧村と幹線道路沿いではピックアップ環境が異なります",
        "paragraphs": [
          "チャウシンの宿泊施設は村内の異なるエリアに分かれているため、特にカイセリ空港へ出発する朝は、単に「チャウシン」という場所ではなく予約時に確認したピックアップ場所が必要です。"
        ]
      },
      {
        "heading": "このルートのプライベート送迎",
        "paragraphs": [
          "専用車をご希望の場合、Vitoは最大5名まで片道€90、Sprinterは最大16名まで€110です。詳しくは[[プライベート空港送迎|private-airport-transfer-cappadocia]]をご覧ください。"
        ]
      }
    ],
    "faq": [
      {
        "q": "ASRへ出発するとき、チャウシンの正確なピックアップ場所がなぜ重要ですか？",
        "a": "宿泊施設が幹線道路、旧村、谷へのアクセス側など複数エリアに分かれており、カイセリ空港へ向かう前に誤った場所で待つことによる遅れを避けるためです。"
      },
      {
        "q": "乗合シャトルではなく、このルートでプライベート車両を予約できますか？",
        "a": "はい。プライベートVitoは最大5名まで片道€90、Sprinterは最大16名まで€110で、いずれも1台あたりの料金です。"
      }
    ],
    "related": [
      "kayseri-airport-to-cavusin-shuttle",
      "kayseri-airport-shuttle",
      "cappadocia-to-kayseri-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "チャウシンからカイセリ空港へのシャトル | ホテルお迎え",
    "twitterDescription": "チャウシンからカイセリ空港（ASR）：1名€15のシャトル、75 km、65–80分、ホテルお迎え、プライベートVito/Sprinter。"
  },
  {
    "slug": "goreme-to-nevsehir-airport-shuttle",
    "title": "ギョレメからネヴシェヒル空港へのシャトル | ホテルお迎え",
    "description": "ギョレメからネヴシェヒル空港（NAV）：1名€15のシャトル、40 km、35–45分、ホテルお迎え、プライベートVito/Sprinter。",
    "eyebrow": "ギョレメ → NAV 空港シャトル",
    "h1": "ギョレメからネヴシェヒル空港へのシャトル",
    "lead": "ギョレメからネヴシェヒル空港（NAV）へのホテルピックアップは、1名片道€15の乗合シャトルまたはプライベートVito/Sprinterで予約できます。一般的な道路距離は約40 km、所要時間は35–45分です。ギョレメの洞窟ホテルや丘道では、車両が幹線道路へ出る前に現地ピックアップ時間が加わることがあります。確定したお迎え時刻には、ほかのホテルの乗合ピックアップと空港到着の余裕時間も含まれています。",
    "route": {
      "airport": "nevsehir",
      "town": "goreme",
      "direction": "return"
    },
    "sections": [
      {
        "heading": "ギョレメからネヴシェヒル空港：約40 km / 35–45分",
        "paragraphs": [
          "道路移動自体は比較的短いですが、確定したお迎え時刻にはほかのホテルでのピックアップと空港到着の余裕時間も反映されています。"
        ]
      },
      {
        "heading": "洞窟ホテルのピックアップはギョレメを出るまでに時間がかかることがあります",
        "paragraphs": [
          "ギョレメからNAVまでの道は短めですが、洞窟ホテルや丘側の宿泊施設では車両がギョレメを出る前にピックアップ時間が加わることがあります。早朝出発の場合は、NAVまでの走行時間が短くても荷物を準備し、確定したピックアップ場所に時間どおりに出てください。",
          "カイセリ便の場合は[[ギョレメからカイセリ空港へのシャトル|goreme-to-kayseri-airport-shuttle]]をご利用ください。2空港の比較は[[ギョレメ空港送迎|goreme-airport-transfer]]で確認できます。"
        ]
      },
      {
        "heading": "このルートのプライベート送迎",
        "paragraphs": [
          "専用車をご希望の場合、Vitoは最大5名まで片道€80、Sprinterは最大16名まで€90です。詳しくは[[プライベート空港送迎|private-airport-transfer-cappadocia]]をご覧ください。"
        ]
      }
    ],
    "faq": [
      {
        "q": "ギョレメからネヴシェヒル空港までどのくらいですか？",
        "a": "一般的な道路目安は約40 km / 35–45分です。交通状況やほかの確定ピックアップにより総時間は変わる場合があります。"
      },
      {
        "q": "乗合シャトルではなく、このルートでプライベート車両を予約できますか？",
        "a": "はい。プライベートVitoは最大5名まで片道€80、Sprinterは最大16名まで€90で、いずれも1台あたりの料金です。"
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
    "twitterTitle": "ギョレメからネヴシェヒル空港へのシャトル | ホテルお迎え",
    "twitterDescription": "ギョレメからネヴシェヒル空港（NAV）：1名€15のシャトル、40 km、35–45分、ホテルお迎え、プライベートVito/Sprinter。"
  },
  {
    "slug": "urgup-to-nevsehir-airport-shuttle",
    "title": "ユルギュップからネヴシェヒル空港へのシャトル | ホテルお迎え",
    "description": "ユルギュップからネヴシェヒル空港（NAV）：1名€15のシャトル、50 km、45–60分、ホテルお迎え、プライベートVito/Sprinter。",
    "eyebrow": "ユルギュップ → NAV 空港シャトル",
    "h1": "ユルギュップからネヴシェヒル空港へのシャトル",
    "lead": "ユルギュップからネヴシェヒル空港（NAV）へのホテルピックアップは、1名片道€15の乗合シャトルまたはプライベートVito/Sprinterで予約できます。一般的な道路距離は約50 km、所要時間は45–60分です。ユルギュップの宿泊施設は中心部と丘側に分かれているため、空港へ向かう前の確定ピックアップ場所が重要です。お迎え時刻にはほかのホテルでの乗合ピックアップと空港到着の余裕時間も反映されています。",
    "route": {
      "airport": "nevsehir",
      "town": "urgup",
      "direction": "return"
    },
    "sections": [
      {
        "heading": "ユルギュップからネヴシェヒル空港：約50 km / 45–60分",
        "paragraphs": [
          "道路時間は実際の走行のみの目安で、確定したお迎え時刻にはほかのホテルでの乗合ピックアップと空港到着の余裕時間も反映されています。"
        ]
      },
      {
        "heading": "ユルギュップでは確定したピックアップ場所が重要です",
        "paragraphs": [
          "ユルギュップ旧市街の一部宿泊施設では、車両アクセス状況に応じて車両が停車できるピックアップ場所を別に設定する場合があります。道路所要時間だけを基準にせず、予約時に確認したピックアップ場所に従ってください。",
          "カイセリから出発する場合は[[ユルギュップからカイセリ空港へのシャトル|urgup-to-kayseri-airport-shuttle]]をご利用ください。"
        ]
      },
      {
        "heading": "このルートのプライベート送迎",
        "paragraphs": [
          "専用車をご希望の場合、Vitoは最大5名まで片道€80、Sprinterは最大16名まで€90です。詳しくは[[プライベート空港送迎|private-airport-transfer-cappadocia]]をご覧ください。"
        ]
      }
    ],
    "faq": [
      {
        "q": "ユルギュップからネヴシェヒル空港まで道路でどのくらいかかりますか？",
        "a": "一般的な道路目安は約50 km / 45–60分です。"
      },
      {
        "q": "乗合シャトルではなく、このルートでプライベート車両を予約できますか？",
        "a": "はい。プライベートVitoは最大5名まで片道€80、Sprinterは最大16名まで€90で、いずれも1台あたりの料金です。"
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
    "twitterTitle": "ユルギュップからネヴシェヒル空港へのシャトル | ホテルお迎え",
    "twitterDescription": "ユルギュップからネヴシェヒル空港（NAV）：1名€15のシャトル、50 km、45–60分、ホテルお迎え、プライベートVito/Sprinter。"
  },
  {
    "slug": "uchisar-to-nevsehir-airport-shuttle",
    "title": "ウチヒサルからネヴシェヒル空港へのシャトル | ホテルお迎え",
    "description": "ウチヒサルからネヴシェヒル空港（NAV）：1名€15のシャトル、35 km、30–40分、ホテルお迎え、プライベートVito/Sprinter。",
    "eyebrow": "ウチヒサル → NAV 空港シャトル",
    "h1": "ウチヒサルからネヴシェヒル空港へのシャトル",
    "lead": "ウチヒサルからネヴシェヒル空港（NAV）へのホテルピックアップは、1名片道€15の乗合シャトルまたはプライベートVito/Sprinterで予約できます。一般的な道路距離は約35 km、所要時間は30–40分です。ウチヒサル上部の急で細い道では、すべてのホテル入口まで車両が直接行けず、車両が停車できるピックアップ場所が必要になることがあります。確定したお迎え時刻には、ほかのホテルの乗合ピックアップと空港到着の余裕時間も含まれています。",
    "route": {
      "airport": "nevsehir",
      "town": "uchisar",
      "direction": "return"
    },
    "sections": [
      {
        "heading": "ウチヒサルからネヴシェヒル空港：約35 km / 30–40分",
        "paragraphs": [
          "道路目安は約35 km / 30–40分ですが、確定したお迎え時刻にはほかのホテルでの乗合ピックアップと空港到着の余裕時間も反映されています。"
        ]
      },
      {
        "heading": "距離が短くても確定したピックアップ場所は必要です",
        "paragraphs": [
          "ウチヒサルは上部の村へ向かうほど道が細く急になります。空港が近くても単に「ウチヒサル」という位置だけでピックアップを決めることはできません。宿泊施設ごとに確認された具体的なピックアップ場所に従ってください。",
          "ASRから出発する場合は[[ウチヒサルからカイセリ空港へのシャトル|uchisar-to-kayseri-airport-shuttle]]をご覧ください。"
        ]
      },
      {
        "heading": "このルートのプライベート送迎",
        "paragraphs": [
          "専用車をご希望の場合、Vitoは最大5名まで片道€80、Sprinterは最大16名まで€90です。詳しくは[[プライベート空港送迎|private-airport-transfer-cappadocia]]をご覧ください。"
        ]
      }
    ],
    "faq": [
      {
        "q": "30–40分という道路時間だけでホテル出発時刻を決めても大丈夫ですか？",
        "a": "いいえ。30–40分は道路走行のみの一般的な目安です。ほかのホテルでのピックアップと空港到着の余裕時間を含む、確定したお迎え時刻に従ってください。"
      },
      {
        "q": "ネヴシェヒル空港の出発便名がなぜ必要ですか？",
        "a": "出発便を正しく確認し、予約に合ったホテルピックアップ時刻を計画するために必要です。"
      },
      {
        "q": "乗合シャトルではなく、このルートでプライベート車両を予約できますか？",
        "a": "はい。プライベートVitoは最大5名まで片道€80、Sprinterは最大16名まで€90で、いずれも1台あたりの料金です。"
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
    "twitterTitle": "ウチヒサルからネヴシェヒル空港へのシャトル | ホテルお迎え",
    "twitterDescription": "ウチヒサルからネヴシェヒル空港（NAV）：1名€15のシャトル、35 km、30–40分、ホテルお迎え、プライベートVito/Sprinter。"
  },
  {
    "slug": "avanos-to-nevsehir-airport-shuttle",
    "title": "アヴァノスからネヴシェヒル空港へのシャトル | ホテルお迎え",
    "description": "アヴァノスからネヴシェヒル空港（NAV）：1名€15のシャトル、38 km、35–50分、ホテルお迎え、プライベートVito/Sprinter。",
    "eyebrow": "アヴァノス → NAV 空港シャトル",
    "h1": "アヴァノスからネヴシェヒル空港へのシャトル",
    "lead": "アヴァノスからネヴシェヒル空港（NAV）へのホテルピックアップは、1名片道€15の乗合シャトルまたはプライベートVito/Sprinterで予約できます。一般的な道路距離は約38 km、所要時間は35–50分です。アヴァノスの宿泊施設は町の複数エリアに広く分散しているため、ホテルの正式名称が正しいピックアップ場所を確認するのに重要です。確定したお迎え時刻には、ほかのホテルの乗合ピックアップと空港到着の余裕時間も含まれています。",
    "route": {
      "airport": "nevsehir",
      "town": "avanos",
      "direction": "return"
    },
    "sections": [
      {
        "heading": "アヴァノスからネヴシェヒル空港：約38 km / 35–50分",
        "paragraphs": [
          "道路時間は実際の走行のみの目安で、確定したお迎え時刻にはほかのホテルでの乗合ピックアップと空港到着の余裕時間も反映されています。アヴァノスの宿泊施設は町の複数エリアに広く分散しているため、単に「アヴァノス」とするより宿泊施設の正式名称がある方が正しいピックアップ場所を確認しやすくなります。",
          "ASRから出発する場合は[[アヴァノスからカイセリ空港へのシャトル|avanos-to-kayseri-airport-shuttle]]をご覧ください。"
        ]
      },
      {
        "heading": "このルートのプライベート送迎",
        "paragraphs": [
          "専用車をご希望の場合、Vitoは最大5名まで片道€80、Sprinterは最大16名まで€90です。詳しくは[[プライベート空港送迎|private-airport-transfer-cappadocia]]をご覧ください。"
        ]
      }
    ],
    "faq": [
      {
        "q": "アヴァノスからネヴシェヒル空港まで道路でどのくらいかかりますか？",
        "a": "一般的な道路目安は約38 km / 35–50分です。"
      },
      {
        "q": "乗合シャトルではなく、このルートでプライベート車両を予約できますか？",
        "a": "はい。プライベートVitoは最大5名まで片道€80、Sprinterは最大16名まで€90で、いずれも1台あたりの料金です。"
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
    "twitterTitle": "アヴァノスからネヴシェヒル空港へのシャトル | ホテルお迎え",
    "twitterDescription": "アヴァノスからネヴシェヒル空港（NAV）：1名€15のシャトル、38 km、35–50分、ホテルお迎え、プライベートVito/Sprinter。"
  },
  {
    "slug": "ortahisar-to-nevsehir-airport-shuttle",
    "title": "オルタヒサルからネヴシェヒル空港へのシャトル | ホテルお迎え",
    "description": "オルタヒサルからネヴシェヒル空港（NAV）：1名€15のシャトル、45 km、40–50分、ホテルお迎え、プライベートVito/Sprinter。",
    "eyebrow": "オルタヒサル → NAV 空港シャトル",
    "h1": "オルタヒサルからネヴシェヒル空港へのシャトル",
    "lead": "オルタヒサルからネヴシェヒル空港（NAV）へのホテルピックアップは、1名片道€15の乗合シャトルまたはプライベートVito/Sprinterで予約できます。一般的な道路距離は約45 km、所要時間は40–50分です。古い村の細い道がピックアップ開始時の数分に影響することがあるため、確定した集合場所が重要です。お迎え時刻にはほかのホテルの乗合ピックアップと空港到着の余裕時間も含まれています。",
    "route": {
      "airport": "nevsehir",
      "town": "ortahisar",
      "direction": "return"
    },
    "sections": [
      {
        "heading": "オルタヒサルからネヴシェヒル空港：約45 km / 40–50分",
        "paragraphs": [
          "道路時間は実際の走行のみの目安で、確定したお迎え時刻にはほかのホテルでの乗合ピックアップと空港到着の余裕時間も反映されています。古い村へのアクセスがピックアップ開始の数分に影響することがあるため、出発計画では宿泊施設ごとに確認したピックアップ場所が最も重要です。"
        ]
      },
      {
        "heading": "NAVまで短めでもオルタヒサルのピックアップ場所は確認が必要です",
        "paragraphs": [
          "ネヴシェヒル空港までの走行は比較的短いですが、細い村道によって乗合シャトルが会える場所が変わることがあります。40–50分の道路時間だけから出発を計算せず、宿泊施設ごとに確認したピックアップ場所でお迎え時間帯が始まる前に準備してください。",
          "ASRから出発する場合は[[オルタヒサルからカイセリ空港へのシャトル|ortahisar-to-kayseri-airport-shuttle]]をご覧ください。"
        ]
      },
      {
        "heading": "このルートのプライベート送迎",
        "paragraphs": [
          "専用車をご希望の場合、Vitoは最大5名まで片道€80、Sprinterは最大16名まで€90です。詳しくは[[プライベート空港送迎|private-airport-transfer-cappadocia]]をご覧ください。"
        ]
      }
    ],
    "faq": [
      {
        "q": "オルタヒサルからネヴシェヒル空港へ行く場合、どこでシャトルに乗りますか？",
        "a": "車両アクセス状況に応じて、確認済み宿泊施設前または車両が停車できる最寄りの場所でピックアップします。"
      },
      {
        "q": "乗合シャトルではなく、このルートでプライベート車両を予約できますか？",
        "a": "はい。プライベートVitoは最大5名まで片道€80、Sprinterは最大16名まで€90で、いずれも1台あたりの料金です。"
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
    "twitterTitle": "オルタヒサルからネヴシェヒル空港へのシャトル | ホテルお迎え",
    "twitterDescription": "オルタヒサルからネヴシェヒル空港（NAV）：1名€15のシャトル、45 km、40–50分、ホテルお迎え、プライベートVito/Sprinter。"
  },
  {
    "slug": "cavusin-to-nevsehir-airport-shuttle",
    "title": "チャウシンからネヴシェヒル空港へのシャトル | ホテルお迎え",
    "description": "チャウシンからネヴシェヒル空港（NAV）：1名€15のシャトル、42 km、40–55分、ホテルお迎え、プライベートVito/Sprinter。",
    "eyebrow": "チャウシン → NAV 空港シャトル",
    "h1": "チャウシンからネヴシェヒル空港へのシャトル",
    "lead": "チャウシンからネヴシェヒル空港（NAV）へのホテルピックアップは、1名片道€15の乗合シャトルまたはプライベートVito/Sprinterで予約できます。一般的な道路距離は約42 km、所要時間は40–55分です。チャウシンの宿泊施設は幹線道路、旧村、谷側のエリアに分かれているため、確定したピックアップ場所が重要です。お迎え時刻にはほかのホテルの乗合ピックアップと空港到着の余裕時間も反映されています。",
    "route": {
      "airport": "nevsehir",
      "town": "cavusin",
      "direction": "return"
    },
    "sections": [
      {
        "heading": "チャウシンからネヴシェヒル空港：約42 km / 40–55分",
        "paragraphs": [
          "道路目安は約42 km / 40–55分ですが、確定したお迎え時刻にはほかのホテルでの乗合ピックアップと空港到着の余裕時間も反映されています。"
        ]
      },
      {
        "heading": "短い道路距離より明確なピックアップ場所が重要です",
        "paragraphs": [
          "チャウシンの宿泊施設は村道から谷側エリアまで広く分散しています。明確に確認されたピックアップ場所があれば、別の場所で待ってしまうことによる遅れを避けやすくなります。すべての施設入口に車両が入れるわけではないため、予約時に確認したピックアップ場所または車両が停車できる最寄りの場所に従ってください。",
          "ASRから出発する場合は[[チャウシンからカイセリ空港へのシャトル|cavusin-to-kayseri-airport-shuttle]]をご覧ください。"
        ]
      },
      {
        "heading": "このルートのプライベート送迎",
        "paragraphs": [
          "専用車をご希望の場合、Vitoは最大5名まで片道€80、Sprinterは最大16名まで€90です。詳しくは[[プライベート空港送迎|private-airport-transfer-cappadocia]]をご覧ください。"
        ]
      }
    ],
    "faq": [
      {
        "q": "早朝の熱気球活動はチャウシンからNAVへ出発するときに影響しますか？",
        "a": "朝によっては周辺道路が普段より混み合うことがあるため、確定したピックアップ場所で時間どおりに準備してください。"
      },
      {
        "q": "チャウシンからネヴシェヒル空港へ行く場合、どこでシャトルに乗りますか？",
        "a": "車両アクセス状況に応じて、確認済み宿泊施設前または車両が停車できる最寄りの場所でピックアップします。"
      },
      {
        "q": "乗合シャトルではなく、このルートでプライベート車両を予約できますか？",
        "a": "はい。プライベートVitoは最大5名まで片道€80、Sprinterは最大16名まで€90で、いずれも1台あたりの料金です。"
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
    "twitterTitle": "チャウシンからネヴシェヒル空港へのシャトル | ホテルお迎え",
    "twitterDescription": "チャウシンからネヴシェヒル空港（NAV）：1名€15のシャトル、42 km、40–55分、ホテルお迎え、プライベートVito/Sprinter。"
  },
  {
    "slug": "cappadocia-airport",
    "title": "カッパドキア空港ガイド | NAV・ASR・ホテルシャトル",
    "description": "カッパドキア空港ガイド。ネヴシェヒル・カッパドキア空港（NAV）、カイセリ空港（ASR）、ギョレメ送迎、1名€15のシャトル、プライベート送迎を解説。",
    "eyebrow": "空港選びガイド",
    "h1": "カッパドキア空港：NAV・ASRとホテル送迎",
    "lead": "「カッパドキア空港」という言い方はネヴシェヒル・カッパドキア空港（NAV）を指すことがありますが、カイセリ空港（ASR）もカッパドキア旅行で広く利用されています。予約では航空券に記載された空港コードを使うのが確実です。",
    "sections": [
      {
        "heading": "カッパドキア空港とはどの空港？",
        "paragraphs": [
          "ネヴシェヒル・カッパドキア空港のIATAコードは**NAV**で、正式名称にKapadokya／Cappadociaが入っています。一方、旅行計画では「カッパドキア空港」という言葉が、地域への主要な2つの玄関口であるNAVとカイセリ空港**ASR**をまとめて指すこともあります。そのためホテル送迎の予約では、「カッパドキア」という地域名だけでなく航空券の空港コードを確認してください。",
          "まだ航空券を決めていない場合は、予約前に[[カッパドキアに最も近い空港|nearest-airport-to-cappadocia]]と[[カイセリ空港とネヴシェヒル空港の比較|kayseri-or-nevsehir-airport-for-cappadocia]]をご覧ください。"
        ]
      },
      {
        "heading": "ネヴシェヒル・カッパドキア空港（NAV）",
        "paragraphs": [
          "NAVは一般的にカッパドキア中心部への道路移動が短い空港です。乗合シャトルの立ち寄り前の目安で、ギョレメは約**40 km / 35–45分**、ウチヒサル35 km / 30–40分、アヴァノス38 km / 35–50分、チャウシン42 km / 40–55分、オルタヒサル45 km / 40–50分、ユルギュップ50 km / 45–60分です。",
          "[[ネヴシェヒル空港シャトル|nevsehir-airport-shuttle]]は**1名片道€15**。プライベート片道はVitoが最大5名で€80、Sprinterが最大16名で€90です。"
        ]
      },
      {
        "heading": "カイセリ空港（ASR）",
        "paragraphs": [
          "ASRは道路距離では遠めですが、フライト時間や便数によって旅行全体では便利になるため、カッパドキア旅行で広く利用されています。ギョレメは約**75 km / 60–75分**で、ほかの対象地域も乗合の立ち寄り前でおおむね70–80 km圏です。",
          "[[カイセリ空港シャトル|kayseri-airport-shuttle]]も**1名片道€15**です。プライベート片道はVito €90、Sprinter €110。乗合料金が同じなので、カイセリを選んでも乗合シャトル料金が高くなることはありません。"
        ]
      },
      {
        "heading": "カッパドキア空港からギョレメ：まずNAVかASRかを確認",
        "paragraphs": [
          "ギョレメは両空港からアクセスできるため、「カッパドキア空港からギョレメ」だけでは予約には不十分です。NAVなら[[ネヴシェヒル空港からギョレメ・シャトル|nevsehir-airport-to-goreme-shuttle]]、ASRなら[[カイセリ空港からギョレメ・シャトル|kayseri-airport-to-goreme-shuttle]]をご利用ください。[[ギョレメ空港送迎|goreme-airport-transfer]]では、両空港、洞窟ホテルへのアクセス、復路お迎えをまとめて案内しています。"
        ]
      },
      {
        "heading": "空港からホテルへ：乗合シャトルまたはプライベート車両",
        "paragraphs": [
          "1名€15の乗合シャトルは、ギョレメ、ユルギュップ、ウチヒサル、アヴァノス、オルタヒサル、チャウシンへの基本サービスです。乗合のため、ほかの乗客やホテルへの立ち寄りが含まれる場合があります。専用車を希望する場合はVitoまたはSprinterを選択でき、料金は1名あたりではなく1台あたりです。",
          "予約フォームでは空港、移動方向、フライト情報、ホテル、WhatsApp連絡先、氏名・パスポート番号を含む乗客情報を入力します。予約確認後、支払いはドライバーへ現金で行います。"
        ]
      },
      {
        "heading": "カッパドキアから空港へ戻る場合",
        "paragraphs": [
          "出発時には「カッパドキア空港はどこ？」ではなく「帰りの航空券はどの空港から出るか？」を確認してください。NAVなら[[カッパドキアからネヴシェヒル空港へのシャトル|cappadocia-to-nevsehir-airport-shuttle]]、ASRなら[[カッパドキアからカイセリ空港へのシャトル|cappadocia-to-kayseri-airport-shuttle]]をご利用ください。お迎え時刻は一律の時間ではなく、実際の出発便と乗合ピックアップ計画をもとに確認します。"
        ]
      },
      {
        "heading": "NAVかASRか：航空券のコードを確認",
        "paragraphs": [
          "「カッパドキア空港」はネヴシェヒル・カッパドキア空港（NAV）を指す場合がありますが、カイセリ空港（ASR）も広く利用されています。予約に必要なのは航空券に記載された空港コードです。まだフライトを選んでいない場合は[[カッパドキアに最も近い空港|nearest-airport-to-cappadocia]]をご覧ください。"
        ]
      }
    ],
    "faq": [
      {
        "q": "実際に「カッパドキア空港」という空港はありますか？",
        "a": "ネヴシェヒル・カッパドキア空港（NAV）は正式名称にKapadokya／Cappadociaを含みます。カイセリ空港（ASR）もカッパドキア旅行の主要空港です。"
      },
      {
        "q": "カッパドキア空港のコードは何ですか？",
        "a": "旅行者全員に共通する1つのコードはありません。NAVはネヴシェヒル・カッパドキア空港、ASRはカイセリ空港です。"
      },
      {
        "q": "ギョレメに最も近い空港は？",
        "a": "道路距離ではネヴシェヒル・カッパドキア空港（NAV）が近いです。"
      },
      {
        "q": "NAVまたはASRからの空港シャトルはいくらですか？",
        "a": "どちらの空港からも対象ホテルエリアまで1名片道€15です。"
      },
      {
        "q": "NAV Airportとは何ですか？",
        "a": "NAVはネヴシェヒル・カッパドキア空港のIATAコードです。"
      },
      {
        "q": "ギョレメ旅行にカイセリ空港を使えますか？",
        "a": "はい。ASRはNAVより道路距離が長いものの、よく利用されるカッパドキアの玄関口です。"
      },
      {
        "q": "ギョレメに空港はありますか？",
        "a": "いいえ。ギョレメへの一般旅客便ではNAVまたはASRを利用します。"
      },
      {
        "q": "NAVで到着しASRから出発できますか？",
        "a": "はい。ただしルートとプライベート料金が異なるため、2つの空港区間としてそれぞれ確認が必要です。"
      }
    ],
    "related": [
      "nearest-airport-to-cappadocia",
      "kayseri-or-nevsehir-airport-for-cappadocia",
      "nevsehir-airport-shuttle",
      "kayseri-airport-shuttle",
      "cappadocia-airport-transfer"
    ],
    "twitterTitle": "カッパドキア空港ガイド | NAV・ASR・ホテルシャトル",
    "twitterDescription": "ネヴシェヒル（NAV）とカイセリ（ASR）の空港コード、ホテルシャトル料金、プライベート送迎、対象地域を解説。"
  },
  {
    "slug": "nearest-airport-to-cappadocia",
    "title": "カッパドキアに最も近い空港 | NAVとASRを比較",
    "description": "カッパドキアに最も近い空港は？ネヴシェヒルNAVとカイセリASRの距離、送迎時間、ギョレメなどへのシャトル料金を比較。",
    "eyebrow": "空港選びガイド",
    "h1": "カッパドキアに最も近い空港",
    "lead": "道路距離ではネヴシェヒル空港がカッパドキア中心部に近いのが一般的ですが、フライト時間や運賃によってはカイセリ空港のほうが旅行全体で便利なこともあります。",
    "sections": [
      {
        "heading": "カッパドキア旅行で使う主な空港は2つ",
        "paragraphs": [
          "ネヴシェヒル・カッパドキア空港（NAV）とカイセリ・エルキレト空港（ASR）が、カッパドキア中心部に宿泊する旅行者の主な空港です。NAVはギョレメ、ウチヒサルなど多くの中心エリアに近く、ASRは道路移動が長いものの旅程に合うフライトが見つかることがあります。"
        ]
      },
      {
        "heading": "近い空港が必ずしも最適とは限りません",
        "paragraphs": [
          "送迎が短いのは便利ですが、フライト時間が悪かったり乗り継ぎが高額だったりすれば、その利点は小さくなります。最後の道路距離だけでなく出発地からの全旅程を比較してください。乗合シャトルはどちらの空港からも1名€15なので、ASRを選んでも乗合料金の追加負担はありません。"
        ]
      },
      {
        "heading": "ギョレメの場合",
        "paragraphs": [
          "NAVからギョレメは約40 km / 35–45分、ASRからギョレメは乗合の立ち寄り前で約75 km / 60–75分です。ホテルアクセスと到着案内は[[ネヴシェヒル空港からギョレメ・シャトル|nevsehir-airport-to-goreme-shuttle]]と[[カイセリ空港からギョレメ・シャトル|kayseri-airport-to-goreme-shuttle]]を比較してください。"
        ]
      },
      {
        "heading": "ほかの町では比較結果が変わることもあります",
        "paragraphs": [
          "ウチヒサルはNAVに特に近く、ユルギュップのように東側の地域ではカイセリ方面が自然に感じられる場合もあります。「カッパドキア＝ギョレメ」と考えず、実際に宿泊する町で比較してください。"
        ]
      },
      {
        "heading": "ウチヒサル、ギョレメ、ユルギュップに近い空港",
        "paragraphs": [
          "NAVは特にウチヒサルとギョレメで道路距離の優位があります。ユルギュップは東側にあるため、ウチヒサルほど差は大きくありません。アヴァノス、オルタヒサル、チャウシンにもそれぞれ異なるルート距離があります。旅行先のホテル所在地で「最寄り」を判断してください。"
        ]
      },
      {
        "heading": "空港名でホテル送迎の対象範囲は変わりません",
        "paragraphs": [
          "ASRとNAVの乗合シャトルは、どちらも同じ中心部の対象ホテルエリアをカバーします。カイセリを選んでもギョレメやウチヒサルが対象外になるわけではなく、道路移動が長くなるだけです。同様に、NAVを選んでもフライトの乗り継ぎが悪ければ旅行全体が早くなるとは限りません。"
        ]
      },
      {
        "heading": "プライベート料金はNAVが低く、乗合料金は同じ",
        "paragraphs": [
          "乗合シャトルは両空港とも1名€15です。プライベート送迎はNAVがVito/Sprinter €80/€90、ASRが€90/€110です。専用車を選ぶグループでは、この差がより重要になります。"
        ]
      }
    ],
    "faq": [
      {
        "q": "カッパドキアに最も近い空港はどこですか？",
        "a": "一般的にはネヴシェヒル・カッパドキア空港（NAV）が中心部に最も近い主要空港で、カイセリ空港（ASR）ももう一つの主要な玄関口です。"
      },
      {
        "q": "ギョレメにはNAVとASRのどちらが近いですか？",
        "a": "道路距離ではNAVのほうが近いです。"
      },
      {
        "q": "近いなら必ずNAVを選ぶべきですか？",
        "a": "いいえ。フライト時間や運賃によってはASRのほうが旅行全体で便利な場合があります。"
      },
      {
        "q": "乗合シャトル料金は空港で変わりますか？",
        "a": "いいえ。NAV、ASRどちらからでも1名片道€15です。"
      },
      {
        "q": "プライベート送迎はどちらの空港が安いですか？",
        "a": "NAVです。Vito €80、Sprinter €90で、ASRは€90/€110です。"
      },
      {
        "q": "どちらの空港からも同じホテルエリアへ行けますか？",
        "a": "はい。対象となる中心部のホテルエリアは両空港から利用できます。"
      }
    ],
    "related": [
      "cappadocia-airport",
      "kayseri-or-nevsehir-airport-for-cappadocia",
      "kayseri-airport-shuttle",
      "nevsehir-airport-shuttle"
    ],
    "twitterTitle": "カッパドキアに最も近い空港 | NAV vs ASR",
    "twitterDescription": "カッパドキアに近い空港を比較。ネヴシェヒルNAVとカイセリASRの距離、送迎時間、1名€15のシャトル料金。"
  },
  {
    "slug": "kayseri-or-nevsehir-airport-for-cappadocia",
    "title": "カッパドキアはカイセリ空港？ネヴシェヒル空港？",
    "description": "カッパドキア旅行でカイセリASRとネヴシェヒルNAVを比較。ホテルまでの距離、所要時間、1名€15シャトル、プライベート料金。",
    "eyebrow": "空港比較",
    "h1": "カッパドキアはカイセリ空港とネヴシェヒル空港のどちら？",
    "lead": "道路距離ではネヴシェヒル（NAV）が多くの中心ホテルに近く、カイセリ（ASR）はより多い・便利なフライトが見つかる場合があります。ホテル所在地、航空券、送迎条件を一緒に比較しましょう。",
    "sections": [
      {
        "heading": "道路距離ではネヴシェヒルが有利",
        "paragraphs": [
          "NAVはカッパドキア中心部の多くの宿泊地に近く、ギョレメは約40 km、ウチヒサル35 km、アヴァノス約38 kmです。到着後の車内時間を短くできる可能性があります。"
        ]
      },
      {
        "heading": "フライト条件ではカイセリが有利なことも",
        "paragraphs": [
          "ASRは中心部のホテル街から遠い一方、時間や料金の良いフライトがあれば追加の道路移動に見合うことがあります。イスタンブールや乗り継ぎ都市からの便を確認する前にカイセリを候補から外さないでください。"
        ]
      },
      {
        "heading": "乗合シャトル料金は同じ",
        "paragraphs": [
          "乗合シャトルはどちらの空港からも1名€15なので、空港比較で乗合料金の差はありません。プライベート送迎は異なり、カイセリはVito/Sprinter €90/€110、ネヴシェヒルは€80/€90です。"
        ]
      },
      {
        "heading": "実際に泊まる町を比較",
        "paragraphs": [
          "ウチヒサル、ギョレメ、ユルギュップ、アヴァノス、オルタヒサル、チャウシンでは距離も最後の車両アクセス条件も異なります。決める前に、実際に宿泊する町の数値を比較してください。"
        ]
      },
      {
        "heading": "町ごとの比較が重要",
        "paragraphs": [
          "ギョレメはNAV約40 km、ASR約75 km。ウチヒサルはNAV約35 km、ASR約80 km。ユルギュップはNAV約50 km、ASR約70 kmです。差は大きいですが、フライトの出発時刻、乗り継ぎ時間、航空運賃と一緒に比較する必要があります。"
        ]
      },
      {
        "heading": "安い・時間の良い便なら道路距離の差を上回ることも",
        "paragraphs": [
          "道路で25〜35分短くても、近い空港の乗り継ぎが悪かったり出発時刻が不便だったりすれば、そのメリットは小さくなります。乗合料金は両空港で同じなので、「近い空港が自動的に安い」と考えず、旅程全体で比較できます。"
        ]
      },
      {
        "heading": "到着と出発で空港が異なる場合は個別確認が必要",
        "paragraphs": [
          "行きは一方の空港、帰りはもう一方を使う旅行者もいます。これは同じ空港を使う通常の往復とは別の扱いです。2便の情報をWhatsAppで明確に送り、それぞれ正しい空港と料金で確認してください。"
        ]
      }
    ],
    "faq": [
      {
        "q": "ギョレメにはNAVとASRのどちらが近いですか？",
        "a": "ネヴシェヒル空港（NAV）です。"
      },
      {
        "q": "乗合シャトルはどちらの空港が安いですか？",
        "a": "差はありません。どちらも1名€15です。"
      },
      {
        "q": "プライベート送迎はどちらが安いですか？",
        "a": "ネヴシェヒルです。Vito €80 / Sprinter €90、カイセリは€90 / €110です。"
      },
      {
        "q": "カイセリ空港もカッパドキア旅行に向いていますか？",
        "a": "はい。特にフライト時間が便利な場合は十分に良い選択肢です。"
      },
      {
        "q": "到着と出発で別の空港を使えますか？",
        "a": "予約フォームは基本的に1回のリクエストにつき1空港を前提としています。往復で別空港を使う場合はWhatsAppで詳細を送り、各区間を正しく確認してください。"
      }
    ],
    "related": [
      "nearest-airport-to-cappadocia",
      "kayseri-airport-shuttle",
      "nevsehir-airport-shuttle",
      "airport-transfer-prices"
    ],
    "twitterTitle": "カイセリ空港とネヴシェヒル空港を比較 | カッパドキア",
    "twitterDescription": "NAVとASRのホテル距離、送迎時間、1名€15の乗合シャトル、プライベートVito/Sprinter料金を比較。"
  },
  {
    "slug": "cappadocia-shared-shuttle-vs-private-transfer",
    "title": "カッパドキア乗合シャトル vs プライベート送迎",
    "description": "カッパドキアの1名€15乗合シャトルとプライベートVito/Sprinterを比較。料金、定員、ホテル停車、時間、対象エリア。",
    "eyebrow": "サービス比較",
    "h1": "カッパドキア乗合シャトル vs プライベート送迎",
    "lead": "少人数で料金を抑えるなら1名€15の乗合シャトル、専用車と他ホテルへの立ち寄りなしを優先するならプライベートVitoまたはSprinterが向いています。",
    "sections": [
      {
        "heading": "乗合シャトル：料金重視に最適",
        "paragraphs": [
          "1名片道€15なので、乗合シャトルは1人旅やカップルにとって、事前予約できる空港→ホテル送迎の中で通常もっとも低コストです。ほかの乗客と同乗し、複数のホテルに立ち寄る場合があります。"
        ]
      },
      {
        "heading": "プライベート送迎：自由度重視に最適",
        "paragraphs": [
          "VitoまたはSprinterは予約専用の車両です。グループ、家族、早朝便、深夜到着、関係のないホテルへの立ち寄りを避けたい旅行者に向いています。"
        ]
      },
      {
        "heading": "料金比較",
        "paragraphs": [
          "カイセリのプライベート：Vito €90 / Sprinter €110。ネヴシェヒル：Vito €80 / Sprinter €90。乗合シャトル：どちらの空港からも1名€15。往復はすべて片道合計の2倍です。"
        ]
      },
      {
        "heading": "対象エリアとホテルアクセス",
        "paragraphs": [
          "乗合サービスはギョレメ、ユルギュップ、ウチヒサル、アヴァノス、チャウシン、オルタヒサルを対象とします。歴史地区の狭い道では、プライベート車両でも道路が不向きなら最寄りの安全な停車場所を使うことがあります。"
        ]
      },
      {
        "heading": "乗客・パスポート情報",
        "paragraphs": [
          "どちらのサービスでも予約用の乗客情報を使用します。すべての予約で必要なため、フォームでは氏名とパスポート番号を入力します。"
        ]
      },
      {
        "heading": "人数別に見ると選びやすい",
        "paragraphs": [
          "1名なら乗合シャトルは€15なので、価格だけで見ればプライベートが有利になることはほとんどありません。6名なら片道乗合の合計は€90となり、特にネヴシェヒルではプライベート車両料金と重なる水準です。大人数では、見出し料金だけでなくSprinterの1台料金と乗合の人数合計を比較してください。"
        ]
      },
      {
        "heading": "早朝便・深夜到着では価値の基準が変わります",
        "paragraphs": [
          "通常の日中便なら乗合の時間設定で問題ない旅行者も多い一方、非常に早い出発、遅い到着、小さな子ども、大型荷物、厳しい乗り継ぎがある場合は、価格差より専用車の自由度が重要になることがあります。"
        ]
      },
      {
        "heading": "乗合でも無計画なサービスではありません",
        "paragraphs": [
          "乗合シャトルもフライト、乗客、ホテル情報を確認する事前予約制の空港サービスです。「乗合」とは、ほかの確定済み乗客やホテルへの立ち寄りが同じ運行に含まれる可能性があるという意味です。"
        ]
      }
    ],
    "faq": [
      {
        "q": "乗合シャトルとCappadocia shuttle transferは同じですか？",
        "a": "はい。乗合という言葉は1名€15のサービスの運行方法を表しています。"
      },
      {
        "q": "どちらが速いですか？",
        "a": "プライベート送迎は関係のないホテルへの立ち寄りがないため、通常はより直接的です。"
      },
      {
        "q": "1名ならどちらが安いですか？",
        "a": "1名€15の乗合シャトルです。"
      },
      {
        "q": "大人数にはどちらが向いていますか？",
        "a": "最大16名まで1台料金のプライベートSprinterが魅力的な場合があります。"
      },
      {
        "q": "プライベートなら洞窟ホテルの入口まで必ず行けますか？",
        "a": "いいえ。車両アクセスは実際の道路条件によります。"
      },
      {
        "q": "現金で支払えますか？",
        "a": "はい。ドライバーへ現金で支払います。"
      }
    ],
    "related": [
      "cappadocia-shuttle-transfer",
      "private-airport-transfer-cappadocia",
      "airport-transfer-prices"
    ],
    "twitterTitle": "カッパドキア乗合シャトル vs プライベート送迎",
    "twitterDescription": "1名€15の乗合シャトルと、1台あたりのVito/Sprinterを料金、定員、停車、時間、対象エリアで比較。"
  },
  {
    "slug": "cappadocia-cave-hotel-airport-transfer",
    "title": "カッパドキア洞窟ホテル空港送迎 | 車両アクセス・お迎え案内",
    "description": "カッパドキア洞窟ホテルの空港送迎。宿泊施設の正式名称、狭い道路、実際の車両アクセス、確定した乗車・降車場所を確認。",
    "eyebrow": "洞窟ホテルアクセス案内",
    "h1": "カッパドキア洞窟ホテル空港送迎",
    "lead": "洞窟ホテルや歴史的な宿泊施設は、狭い道や急坂、大型車が安全に停車しにくい場所にあることがあります。宿泊施設の正式名称を伝えることで、車両が停車できる最寄りのお迎え・降車場所を確認しやすくなります。",
    "sections": [
      {
        "heading": "宿泊施設の正式名称が重要な理由",
        "paragraphs": [
          "カッパドキアにはcave、suite、house、stone、boutiqueなどの語を使う宿泊施設が多数あります。予約確認に記載された正式名称と町を入力してください。地図のピンは補助になりますが、正しい宿泊施設名の代わりにはなりません。"
        ]
      },
      {
        "heading": "車両がホテル入口に停車できない場合",
        "paragraphs": [
          "古い道の中には狭い、急勾配、またはシャトルやSprinterが安全に待てない場所があります。その場合は、近くの車両が停車できる場所をWhatsAppで確認します。これは一般的な道路アクセスの問題であり、その町がサービス対象外という意味ではありません。"
        ]
      },
      {
        "heading": "ギョレメの洞窟ホテルアクセス",
        "paragraphs": [
          "ギョレメは狭い道や丘に宿泊施設が密集しており、近いホテル同士でもアクセス方法が大きく異なることがあります。必ず宿泊施設の正確な名称を入力し、予約について確認された場所に従ってください。詳しくは[[ギョレメ空港送迎|goreme-airport-transfer]]もご覧ください。"
        ]
      },
      {
        "heading": "ほかの歴史的な町でも車両アクセス確認が必要",
        "paragraphs": [
          "ウチヒサル、ユルギュップ、オルタヒサル、チャウシンにも古く狭い道や坂道にある宿泊施設があります。アヴァノスは川の両側により広く分布しています。どの町でも、町名だけより宿泊施設の正式名称のほうが車両アクセスを計画するうえで役立ちます。"
        ]
      },
      {
        "heading": "到着・出発とも実際の待ち合わせ場所が重要",
        "paragraphs": [
          "到着時は宿泊施設にできるだけ近い安全な地点で降車することを目指します。出発時は荷物を準備し、お迎え時間帯が始まる前に確定した場所でお待ちください。小型タクシーが入口まで入れたからといって、大きなシャトルも同じ場所を利用できるとは限りません。"
        ]
      },
      {
        "heading": "乗合シャトルまたはプライベートVito",
        "paragraphs": [
          "乗合シャトルは1名€15で、その日の乗客数に応じて大型車両を使うことがあります。プライベートVitoは一部の路地で便利な場合がありますが、入口前へのアクセスを保証するものではありません。最終地点は実際の道路状況と安全に停車できるかどうかで決まります。"
        ]
      }
    ],
    "faq": [
      {
        "q": "シャトルはすべての洞窟ホテル入口まで行けますか？",
        "a": "いいえ。一部の道路では最寄りの安全な場所を利用し、予約に合わせて確認します。"
      },
      {
        "q": "予約時にどの情報が必要ですか？",
        "a": "宿泊施設の正式名称、町、フライト、乗客情報、WhatsApp連絡先が必要です。"
      },
      {
        "q": "プライベートVitoならシャトルが入れない場所すべてに行けますか？",
        "a": "いいえ。一部の道では便利ですが、実際の道路状況と安全な停車可否によります。"
      },
      {
        "q": "ギョレメではホテル名を特に正確に入力する必要がありますか？",
        "a": "はい。似た名称の宿泊施設が多いため、正確な施設を特定することが重要です。"
      },
      {
        "q": "出発時もホテルからお迎えできますか？",
        "a": "はい。実際の宿泊施設に対して確認されたお迎え場所を利用します。"
      }
    ],
    "related": [
      "goreme-airport-transfer",
      "cappadocia-airport-transfer",
      "kayseri-airport-shuttle",
      "nevsehir-airport-shuttle"
    ],
    "twitterTitle": "カッパドキア洞窟ホテル空港送迎",
    "twitterDescription": "対象エリアの洞窟ホテル送迎、宿泊施設の正式名称、車両アクセス、確定したお迎え・降車場所の案内。"
  },
  {
    "slug": "istanbul-to-cappadocia",
    "title": "イスタンブールからカッパドキア | フライト・空港シャトルガイド",
    "description": "イスタンブールからカッパドキアへ。IST/SAWからカイセリASRまたはネヴシェヒルNAVへ飛び、1名€15の空港シャトルでホテルへ。",
    "eyebrow": "フライト＋空港送迎ガイド",
    "h1": "イスタンブールからカッパドキア：フライトと空港送迎",
    "lead": "多くの旅行者にとって、イスタンブールからカイセリ（ASR）またはネヴシェヒル（NAV）へ飛び、事前予約した空港シャトルでホテルまで移動するのが現実的です。",
    "sections": [
      {
        "heading": "長距離の道路送迎ではなくフライトを利用",
        "paragraphs": [
          "このサービスはイスタンブールからカッパドキアまで直接走る長距離の乗合シャトルではありません。通常はIstanbul Airport（IST）またはSabiha Gokcen（SAW）からASRまたはNAVへ飛び、そこから空港シャトルでホテルへ移動します。"
        ]
      },
      {
        "heading": "旅程全体を見てASRかNAVを選ぶ",
        "paragraphs": [
          "NAVは多くのカッパドキアのホテルに道路距離で近く、ASRは道路移動が長くてもフライト時間や運賃が有利な場合があります。乗合シャトル料金は両空港とも€15なので、まずフライトを比較してください。"
        ]
      },
      {
        "heading": "カッパドキア到着後",
        "paragraphs": [
          "手荷物を受け取り、WhatsAppで確認した待ち合わせ案内に従い、空港では予約者名を使って合流します。予約には正しい便名、ホテル、乗客氏名、パスポート番号が必要です。"
        ]
      },
      {
        "heading": "ホテル降車の対象エリア",
        "paragraphs": [
          "乗合シャトルはギョレメ、ユルギュップ、ウチヒサル、アヴァノス、チャウシン、オルタヒサルを対象とします。"
        ]
      },
      {
        "heading": "イスタンブール側の空港ではなく実際の到着便を基準にする",
        "paragraphs": [
          "イスタンブールにはISTとSAWという2つの主要空港があり、カッパドキア側では通常ASRまたはNAVを利用します。送迎で重要なのは実際にカイセリまたはネヴシェヒルへ着陸する便です。その便名を入力することで、正しい到着便に合わせて空港待ち合わせを手配できます。"
        ]
      },
      {
        "heading": "シャトルに会う前の手荷物受取時間も考慮",
        "paragraphs": [
          "空港シャトルは飛行機のドアから始まるわけではありません。到着後に手荷物を受け取り、WhatsAppで確認した案内に従って待ち合わせ場所へ進みます。イスタンブールで乗り継いだ後で疲れている旅行者や、最終到着空港に不慣れな方には特に重要です。"
        ]
      },
      {
        "heading": "イスタンブールへ戻る時はホテル→空港の流れ",
        "paragraphs": [
          "帰路はカッパドキアの確定したホテルエリアからシャトルでASRまたはNAVへ向かい、そこからイスタンブール行き国内線を利用します。[[カッパドキアからイスタンブール・ガイド|cappadocia-to-istanbul]]を参考に、出発空港と実際の宿泊エリアに合わせてホテルお迎えを計画してください。"
        ]
      }
    ],
    "faq": [
      {
        "q": "イスタンブールからカッパドキアまで直行シャトルはありますか？",
        "a": "この乗合空港シャトルサービスにはありません。ASRまたはNAVへ飛び、そこから空港シャトルをご利用ください。"
      },
      {
        "q": "イスタンブールのどの空港からカッパドキアへ飛べますか？",
        "a": "旅行者は通常ISTまたはSAWからカイセリ・ネヴシェヒル方面の便を利用します。旅行日の航空会社スケジュールをご確認ください。"
      },
      {
        "q": "カッパドキア側ではどの空港を選べばいいですか？",
        "a": "道路距離ではNAVが近いですが、フライト時間が便利ならASRのほうが良い場合があります。"
      },
      {
        "q": "到着後のシャトルはいくらですか？",
        "a": "ASRまたはNAVから1名€15です。"
      },
      {
        "q": "イスタンブール出発便の便名でシャトルを予約しますか？",
        "a": "カッパドキア到着時にカイセリまたはネヴシェヒルへ着陸する便名を入力してください。"
      },
      {
        "q": "イスタンブールへ戻る便のホテル→空港シャトルも予約できますか？",
        "a": "はい。ASRまたはNAVから出発する便と、ホテル → 空港の方向を選択してください。"
      },
      {
        "q": "掲載されている道路所要時間に手荷物受取時間は含まれますか？",
        "a": "いいえ。道路所要時間は空港での手続き後からで、手荷物受取はシャトル移動前に行います。"
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
    "twitterTitle": "イスタンブールからカッパドキア：フライト・空港送迎ガイド",
    "twitterDescription": "イスタンブール（IST/SAW）からカイセリ（ASR）またはネヴシェヒル（NAV）へ飛び、対象ホテルへ1名€15のシャトル。"
  },
  {
    "slug": "cappadocia-to-istanbul",
    "title": "カッパドキアからイスタンブール | 空港シャトル・フライトガイド",
    "description": "カッパドキアからイスタンブールへ。ホテルからNAV/ASRへのシャトル、フライト計画、ギョレメの道路距離、お迎え時刻を解説。",
    "eyebrow": "カッパドキア → イスタンブール",
    "h1": "カッパドキアからイスタンブール：ホテルシャトルとフライト",
    "lead": "短期旅行では、ホテルからネヴシェヒル（NAV）またはカイセリ（ASR）空港へ移動し、その後イスタンブール行きフライトを利用するのが一般的です。シャトルはカッパドキアのホテル→空港区間を担当し、イスタンブールまでは航空移動です。",
    "sections": [
      {
        "heading": "空港送迎はイスタンブールまでの全行程ではなく最初の区間",
        "paragraphs": [
          "このサービスはカッパドキアからイスタンブールまで道路で直接運行する乗合シャトルでは**ありません**。カッパドキアのホテルからNAVまたはASRまでの空港送迎を予約し、その後航空券でイスタンブールへ移動します。地域の空港送迎と長距離の都市間移動を分けて考える形です。"
        ]
      },
      {
        "heading": "出発便に合わせてNAVまたはASRを選ぶ",
        "paragraphs": [
          "NAVは一般的にギョレメ、ウチヒサルなど中心部に近く、ASRは遠いもののフライト時間や運賃が合う場合があります。ホテル→空港の乗合シャトルはどちらも**1名€15**、プライベートVito/SprinterはNAV €80/€90、ASR €90/€110です。",
          "まだ出発空港を決めていない場合は、航空券予約前に[[カッパドキアに最も近い空港|nearest-airport-to-cappadocia]]と[[カイセリ空港とネヴシェヒル空港|kayseri-or-nevsehir-airport-for-cappadocia]]を比較してください。"
        ]
      },
      {
        "heading": "カッパドキアからイスタンブールの道路距離とシャトル距離は別物",
        "paragraphs": [
          "ギョレメからイスタンブール中心部までは道路で約**725 km**あり、カッパドキア内の35–80 km程度の空港送迎とはまったく異なる旅です。実際の距離はイスタンブール側の到着地点とカッパドキアの出発町によって変わります。時間の限られた旅行者には、NAVまたはASRから飛ぶことで長距離の都市間移動と短いホテル→空港送迎を分ける方法が現実的です。"
        ]
      },
      {
        "heading": "イスタンブール行きフライト前のホテルお迎え",
        "paragraphs": [
          "出発便名、宿泊施設の正式名称、乗客情報、WhatsApp連絡先を入力してください。お迎え時刻は実際のフライトと乗合ピックアップ順序をもとに確認します。カッパドキアを出る前にほかのホテルへ立ち寄ることがあるため、直行の道路時間だけで出発時刻を計算しないでください。出発空港に応じて[[カッパドキアからネヴシェヒル空港へのシャトル|cappadocia-to-nevsehir-airport-shuttle]]または[[カッパドキアからカイセリ空港へのシャトル|cappadocia-to-kayseri-airport-shuttle]]を使い、ギョレメ、ユルギュップ、ウチヒサル、アヴァノス、オルタヒサル、チャウシンの実際の宿泊地に合わせてお迎え時刻と場所を確認してください。"
        ]
      },
      {
        "heading": "出発日のピックアップ時刻は宿泊する町で変わります",
        "paragraphs": [
          "ギョレメ、ユルギュップ、ウチヒサル、アヴァノス、オルタヒサル、チャウシンでは道路アクセスや実際の停車場所が異なるため、お迎え時刻も変わることがあります。直行の所要時間だけで計画せず、予約時に送られた確定時刻とお迎え場所に従ってください。"
        ]
      },
      {
        "heading": "ISTまたはSAWへ戻るフライト",
        "paragraphs": [
          "Istanbul Airport（IST）とSabiha Gokcen（SAW）は別の空港です。カッパドキア発のフライトを選んだ後、航空会社の予約に表示されるイスタンブール到着空港を確認してください。カッパドキアのシャトル予約は、到着先がISTかSAWかではなく、カッパドキア側で出発するNAVまたはASRを基準にします。"
        ]
      },
      {
        "heading": "イスタンブールまでの距離と空港お迎え時刻を混同しない",
        "paragraphs": [
          "イスタンブールまでの長い道路距離は飛行機か陸路かを選ぶ参考にはなりますが、カッパドキアのホテルお迎え時刻を計算するためには使いません。空港送迎はNAVまたはASRで終了し、お迎え時刻は出発便と乗合ピックアップ計画をもとに確認します。"
        ]
      }
    ],
    "faq": [
      {
        "q": "カッパドキアからイスタンブールまで直行シャトルはありますか？",
        "a": "この空港シャトルサービスにはありません。通常はホテルからNAVまたはASRへ移動し、その後イスタンブール行きフライトを利用します。"
      },
      {
        "q": "カッパドキアからイスタンブールまで道路でどのくらいですか？",
        "a": "ギョレメからイスタンブール中心部まで約725 kmで、実際の距離は出発地と到着地で変わります。"
      },
      {
        "q": "カッパドキアからイスタンブールへ飛ぶならどの空港を使うべきですか？",
        "a": "日程に合うNAVまたはASR便を選んでください。道路距離ではNAVのほうが中心部に近いのが一般的です。"
      },
      {
        "q": "ホテルから空港までのシャトルはいくらですか？",
        "a": "対象ホテルエリアからNAVまたはASRまで1名片道€15です。"
      },
      {
        "q": "イスタンブール便のためにプライベートのホテル送迎も予約できますか？",
        "a": "はい。空港別の固定料金でVitoとSprinterを利用できます。"
      },
      {
        "q": "到着した空港とは別の空港から出発できますか？",
        "a": "はい。ただしルートとプライベート料金が異なるため、各空港区間を正しく確認してください。"
      },
      {
        "q": "カッパドキアのシャトルフォームにイスタンブール側の空港コードを入れますか？",
        "a": "いいえ。カッパドキア側の出発空港であるNAVまたはASRを選び、その空港から出る便名を入力してください。"
      }
    ],
    "related": [
      "istanbul-to-cappadocia",
      "cappadocia-to-nevsehir-airport-shuttle",
      "nearest-airport-to-cappadocia",
      "kayseri-or-nevsehir-airport-for-cappadocia",
      "cappadocia-to-kayseri-airport-shuttle"
    ],
    "twitterTitle": "カッパドキアからイスタンブール：ホテルシャトル・フライト",
    "twitterDescription": "対象ホテルからカイセリ（ASR）またはネヴシェヒル（NAV）へ1名€15から送迎し、イスタンブールへフライト。Vito/Sprinterも利用可能。"
  }
];

export const jaPageBySlug = new Map(jaPages.map((page) => [page.slug, page]));
export function jaPrettySlug(slug:string){ const page=jaPageBySlug.get(slug); return page?.h1 || slug.split('-').map(s=>s.charAt(0).toUpperCase()+s.slice(1)).join(' '); }

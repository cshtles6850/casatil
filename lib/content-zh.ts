import type { SeoPage } from './content';
export type ZhSeoPage = SeoPage;

export const zhTownNames: Record<string,string> = { goreme:'格雷梅', urgup:'于尔居普', uchisar:'乌奇希萨尔', avanos:'阿瓦诺斯', ortahisar:'奥塔西萨', cavusin:'恰武辛' };

export const zhPages: SeoPage[] = [
  {
    "slug": "cappadocia-shuttle-transfer",
    "title": "卡帕多奇亚机场拼车｜共享机场班车",
    "description": "卡帕多奇亚机场拼车是共享机场班车的一种常见搜索表达，连接开塞利 ASR、内夫谢希尔 NAV 与六个主要酒店区。",
    "primaryKeyword": "卡帕多奇亚机场拼车",
    "secondaryKeywords": [
      "卡帕多奇亚机场班车",
      "卡帕多奇亚接机"
    ],
    "eyebrow": "共享机场班车搜索",
    "h1": "卡帕多奇亚机场拼车接送",
    "lead": "这个页面用于解释“卡帕多奇亚机场拼车”这一搜索表达。网站的主服务结构仍以机场班车、具体机场和具体酒店城镇为中心。",
    "sections": [
      {
        "heading": "机场拼车对应的是哪项服务",
        "paragraphs": [
          "这里指提前预订的共享机场班车，连接开塞利机场（ASR）、内夫谢希尔机场（NAV）与格雷梅、于尔居普、乌奇希萨尔、阿瓦诺斯、奥塔西萨和恰武辛。拼车为 €15/人/单程。"
        ]
      },
      {
        "heading": "先选机场，再进入真实酒店路线",
        "paragraphs": [
          "如果航班使用 ASR，请进入 [[开塞利机场班车|kayseri-airport-shuttle]]；使用 NAV 则进入 [[内夫谢希尔机场班车|nevsehir-airport-shuttle]]。确定酒店城镇后再看具体路线，比只看“卡帕多奇亚”这个大范围名称更有用。"
        ]
      },
      {
        "heading": "拼车和私人接送不是同一种产品",
        "paragraphs": [
          "共享班车可能包含其他已预订乘客和酒店停靠。希望专车直达、团队人数较多或有特殊行李时，可以选择私人 Vito / Sprinter。"
        ]
      },
      {
        "heading": "接机和送机可以一起提交",
        "paragraphs": [
          "表单支持机场到酒店、酒店到机场以及往返。使用真实运营航班号和完整酒店名称，方便分别确认机场会合与酒店接车。"
        ]
      },
      {
        "heading": "落地后的实际流程：先取行李，再按确认信息会合",
        "paragraphs": [
          "提交预订时应填写实际执飞航班号、完整酒店名称、乘客姓名、护照号码和可联系的 WhatsApp。航班落地后先领取托运行李，再按照预订确认中的会合说明前往接车点。接机安排以当次确认信息为准，不建议根据旧游记或他人评论自行寻找集合位置。"
        ]
      },
      {
        "heading": "为什么一定要写真实住宿城镇",
        "paragraphs": [
          "“卡帕多奇亚”是一个区域，不是单一酒店下车点。格雷梅、于尔居普、乌奇希萨尔、阿瓦诺斯、奥塔西萨和恰武辛的道路、距离和酒店入口都不同。已经知道住宿地时，应直接进入对应的目的地或路线页，而不是只留下一个笼统的 Cappadocia 地址。"
        ]
      },
      {
        "heading": "航班延误或航班号变化后要主动更新",
        "paragraphs": [
          "拼车需要同时协调其他乘客，因此航班时间或实际运营航班号改变后，原来的接车安排不应被视为自动有效。请尽早把新信息发到 WhatsApp，由运营方重新确认适合的班车安排；这和私人车辆“只服务一个团队”的等待逻辑并不相同。"
        ]
      },
      {
        "heading": "特殊行李、儿童座椅等需求应在出发前说明",
        "paragraphs": [
          "普通旅行行李属于常规机场接送场景，但超大行李、运动器材、婴儿车或儿童座椅等情况最好写在备注中。若旅客必须使用某一种指定车型、希望车辆只服务自己的团队，私人 Vito 或 Sprinter 会比当天按人数安排的共享车辆更明确。"
        ]
      }
    ],
    "faq": [
      {
        "q": "卡帕多奇亚机场拼车多少钱？",
        "a": "从 ASR 或 NAV 到支持酒店区都是 €15/人/单程。"
      },
      {
        "q": "支持哪两座机场？",
        "a": "开塞利机场（ASR）和内夫谢希尔卡帕多奇亚机场（NAV）。"
      },
      {
        "q": "拼车覆盖哪些酒店城镇？",
        "a": "格雷梅、于尔居普、乌奇希萨尔、阿瓦诺斯、奥塔西萨和恰武辛。"
      },
      {
        "q": "可以预订酒店到机场吗？",
        "a": "可以，选择酒店到机场或往返。"
      },
      {
        "q": "共享机场班车是每位乘客单独一辆车吗？",
        "a": "不是。€15 服务是预订制拼车，可能包含其他乘客和多个酒店停靠。"
      },
      {
        "q": "航班号变了以后需要重新通知吗？",
        "a": "需要。请尽快通过 WhatsApp 提供新的实际运营航班信息，以便重新确认拼车安排。"
      },
      {
        "q": "可以携带普通机场行李吗？",
        "a": "可以；超大行李、运动器材、婴儿车等特殊情况应提前在备注中说明。"
      },
      {
        "q": "往返是不是两段分别需要航班资料？",
        "a": "是。到达与离开属于两次不同操作，往返表单会分别收集两段航班。"
      }
    ],
    "related": [
      "kayseri-airport-shuttle",
      "nevsehir-airport-shuttle",
      "private-airport-transfer-cappadocia",
      "airport-transfer-prices"
    ]
  },
  {
    "slug": "cappadocia-airport-transfer",
    "title": "卡帕多奇亚机场接送｜ASR / NAV 拼车与私人包车",
    "description": "卡帕多奇亚机场接送：开塞利 ASR、内夫谢希尔 NAV 到六个主要酒店区。共享班车 €15/人，私人 Vito/Sprinter，支持接机与送机。",
    "primaryKeyword": "卡帕多奇亚机场接送",
    "secondaryKeywords": [
      "卡帕多奇亚接机",
      "卡帕多奇亚送机",
      "Cappadocia airport transfer",
      "卡帕多奇亚机场包车",
      "卡帕多奇亚机场班车"
    ],
    "eyebrow": "机场接机与送机",
    "h1": "卡帕多奇亚机场接送",
    "lead": "同一站点同时提供 €15/人的机场拼车和私人 Vito / Sprinter。先确认你的航班是 ASR 还是 NAV，再选择真实酒店城镇。",
    "sections": [
      {
        "heading": "卡帕多奇亚并不是只有一座机场",
        "paragraphs": [
          "游客主要使用开塞利机场（ASR）和内夫谢希尔机场（NAV）。NAV 通常离中部卡帕多奇亚更近，ASR 航班选择有时更方便，因此“哪座机场更好”要结合机票而不是只看距离。"
        ]
      },
      {
        "heading": "拼车和私人接送是两种不同产品",
        "paragraphs": [
          "共享班车 **€15/人/单程**，车辆与停靠顺序根据当天预订安排。私人 Vito / Sprinter 是一组客人独立用车，按机场和整车计价，适合需要直接路线或较大团队。"
        ]
      },
      {
        "heading": "六个主要酒店区域各自有独立路线",
        "paragraphs": [
          "格雷梅、于尔居普、乌奇希萨尔、阿瓦诺斯、奥塔西萨和恰武辛都有不同道路、住宿密度和最后停靠条件，因此本站为这些目的地分别提供详细路线页面。"
        ]
      },
      {
        "heading": "接机需要正确航班与乘客信息",
        "paragraphs": [
          "预订需要运营航班号、酒店、WhatsApp、乘客姓名和护照号码。落地后先领取行李，再按确认的会合信息接车。"
        ]
      },
      {
        "heading": "送机的重点是接车时间和酒店集合点",
        "paragraphs": [
          "返程接车根据离港航班和拼车顺序确认，而不是统一规定“提前三小时离开”。洞穴酒店和村路还可能需要步行到附近安全点。"
        ]
      },
      {
        "heading": "先看价格还是先看机场？",
        "paragraphs": [
          "如果航班尚未购买，先查看 [[开塞利还是内夫谢希尔机场|kayseri-or-nevsehir-airport-for-cappadocia]]。已经有机票，则直接进入对应机场或酒店城镇页面。"
        ]
      },
      {
        "heading": "航班和酒店确定后，应进入精确路线页",
        "paragraphs": [
          "这张综合页适合比较机场与服务方式；一旦已经知道机场代码和酒店所在城镇，精确路线页会更有用。那里会给出该机场—城镇组合的公里数、正常道路时间、酒店入口特点、抵达后的本地建议以及返程注意事项，而不是使用一个全卡帕多奇亚统一估算。"
        ]
      },
      {
        "heading": "抵达机场和离开机场可以不是同一座",
        "paragraphs": [
          "有些行程从 NAV 抵达，却从 ASR 离开，反过来也一样。这类行程不能简单套用“同机场往返”价格，因为两段私人接送的路线和价格不同。表单或 WhatsApp 信息中应把两段航班分别写清楚，让每一段都按真实机场确认。"
        ]
      },
      {
        "heading": "人数会改变私人车的计算方式",
        "paragraphs": [
          "Vito 最多 5 人，Sprinter 最多 16 人；私人价格按整车计算，而共享班车按人数计算。选择机场、服务类型、车型、乘客数量或往返后，预订摘要应立即反映新的总价，避免把 €15/人的拼车逻辑与整车价格混在一起。"
        ]
      },
      {
        "heading": "现金付款并不等于可以不做预订确认",
        "paragraphs": [
          "费用由司机按确认方式收取现金，但车辆和接送时间仍需提前确认。航班号、酒店、乘客姓名、护照号码和 WhatsApp 信息在出发前应核对无误；这些信息决定的是实际接送操作，不只是付款。"
        ]
      }
    ],
    "faq": [
      {
        "q": "卡帕多奇亚机场接送多少钱？",
        "a": "拼车 €15/人/单程；私人车根据 ASR/NAV 和车型定价。"
      },
      {
        "q": "可以接机也可以送机吗？",
        "a": "可以，支持单程和往返。"
      },
      {
        "q": "必须提前知道酒店吗？",
        "a": "最好填写完整酒店名称，因为城镇和酒店道路决定实际下客位置。"
      },
      {
        "q": "护照号码是必须的吗？",
        "a": "是，运营公司要求所有乘客提供。"
      },
      {
        "q": "可以直接付信用卡吗？",
        "a": "当前流程为按确认方式现金支付给司机。"
      },
      {
        "q": "NAV 抵达、ASR 离开可以吗？",
        "a": "可以，但两段应分别确认，私人价格也按各自机场计算。"
      },
      {
        "q": "私人 Vito 和 Sprinter 是按人收费吗？",
        "a": "不是，私人价格按整车；Vito 最多5人，Sprinter最多16人。"
      },
      {
        "q": "现金付款后还需要提前确认预订吗？",
        "a": "需要。现金只是付款方式，车辆、航班和酒店接送仍须提前确认。"
      }
    ],
    "related": [
      "cappadocia-airport",
      "kayseri-airport-shuttle",
      "nevsehir-airport-shuttle",
      "airport-transfer-prices"
    ]
  },
  {
    "slug": "private-airport-transfer-cappadocia",
    "title": "卡帕多奇亚私人机场接送｜Mercedes Vito / Sprinter",
    "description": "卡帕多奇亚私人机场接送：Vito 最多5人，Sprinter 最多16人。ASR 单程 €90/€110，NAV 单程 €80/€90，按整车收费。",
    "primaryKeyword": "卡帕多奇亚私人机场接送",
    "secondaryKeywords": [
      "卡帕多奇亚包车接机",
      "Cappadocia private transfer",
      "Mercedes Vito 卡帕多奇亚",
      "Mercedes Sprinter 卡帕多奇亚",
      "卡帕多奇亚专车"
    ],
    "eyebrow": "独立车辆直达酒店",
    "h1": "卡帕多奇亚私人机场接送",
    "lead": "需要更直接的机场—酒店行程时，可选择 Mercedes Vito 或 Sprinter。私人价格按整车和机场计价，不按乘客人数收取。",
    "sections": [
      {
        "heading": "Vito 适合最多 5 位乘客",
        "paragraphs": [
          "Mercedes Vito 更适合情侣、家庭和小团体。开塞利 ASR 单程 €90，内夫谢希尔 NAV 单程 €80；往返分别为 €180 和 €160。"
        ]
      },
      {
        "heading": "Sprinter 适合最多 16 位乘客",
        "paragraphs": [
          "Mercedes Sprinter 适合更大团体或需要更多行李空间的预订。ASR 单程 €110，NAV 单程 €90；往返分别为 €220 和 €180。"
        ]
      },
      {
        "heading": "私人接送和 €15 拼车的主要区别",
        "paragraphs": [
          "私人车辆只服务一个预订团队，不需要因为无关酒店停靠而延长路线。拼车成本更低，但时间会受到当天乘客和酒店顺序影响。"
        ]
      },
      {
        "heading": "洞穴酒店道路仍需要确认",
        "paragraphs": [
          "选择私人 Vito 并不意味着所有洞穴酒店都能保证停到门口。老街的道路宽度、台阶和停车限制仍然存在，酒店名称必须填写准确。"
        ]
      },
      {
        "heading": "适合哪些情况",
        "paragraphs": [
          "多人同行、行李较多、需要更直接路线、抵达时间特殊或对车辆类型有明确要求时，私人接送更合适。单人或两人更看重预算时，€15 拼车通常更划算。"
        ]
      },
      {
        "heading": "付款与往返",
        "paragraphs": [
          "私人价格为整车单程价，往返正好两倍。网站以欧元显示金额，按确认方式现金支付给司机。"
        ]
      },
      {
        "heading": "私人接送不会增加无关酒店停靠",
        "paragraphs": [
          "选择私人车辆后，Vito 或 Sprinter 只服务这笔预订，不会为了其他不相关乘客增加酒店下车点。这通常让路线更直接，但道路时间仍可能受到天气、交通、行李领取以及洞穴酒店最后一段道路的影响，因此私人车也不等于固定分钟数保证。"
        ]
      },
      {
        "heading": "为什么 Vito 和 Sprinter 放在同一页比较",
        "paragraphs": [
          "这两种车型属于同一私人机场接送服务，只是容量和价格不同。放在同一页可以直接比较机场价格、最多乘客数、行李需求和酒店道路，而不是为了“Mercedes”关键词拆成内容很薄、彼此重复的页面。"
        ]
      },
      {
        "heading": "人数上限之外，还要考虑实际行李组合",
        "paragraphs": [
          "5 人或 16 人是乘客容量上限，并不代表任何超大行李组合都无需说明。多人同时携带大型行李箱、婴儿车或特殊器材时，应在备注中提前写明，让运营方确认更合适的车辆安排。"
        ]
      },
      {
        "heading": "独立车辆更灵活，但不能改变道路物理条件",
        "paragraphs": [
          "Vito 在部分窄路中比大型共享车辆灵活，Sprinter 则更适合大团体；但台阶、禁止停车区、极窄巷道或没有回转空间的洞穴酒店入口仍然存在。最终上下客点要以具体住宿和安全通行为准。"
        ]
      }
    ],
    "faq": [
      {
        "q": "Vito 最多坐几个人？",
        "a": "最多 5 位乘客。"
      },
      {
        "q": "Sprinter 最多坐几个人？",
        "a": "最多 16 位乘客。"
      },
      {
        "q": "NAV 与 ASR 私人车价格一样吗？",
        "a": "不一样。NAV Vito €80 / Sprinter €90；ASR Vito €90 / Sprinter €110。"
      },
      {
        "q": "私人接送是按人收费吗？",
        "a": "不是，按整车收费。"
      },
      {
        "q": "可以往返吗？",
        "a": "可以，价格为对应单程的两倍。"
      },
      {
        "q": "私人接送会去接其他酒店的客人吗？",
        "a": "不会，所选车辆只服务该私人预订。"
      },
      {
        "q": "5 人带很多大箱子一定适合 Vito 吗？",
        "a": "不一定。人数未超上限也应提前说明大量或超大行李，以便确认车辆。"
      },
      {
        "q": "私人 Vito 可以保证停到每家洞穴酒店门口吗？",
        "a": "不能。私人车更灵活，但最终仍取决于道路、台阶和停车条件。"
      }
    ],
    "related": [
      "airport-transfer-prices",
      "kayseri-airport-shuttle",
      "nevsehir-airport-shuttle"
    ]
  },
  {
    "slug": "airport-transfer-prices",
    "title": "卡帕多奇亚机场接送价格｜拼车与私人车价目",
    "description": "卡帕多奇亚机场接送价格：ASR/NAV 拼车 €15/人/单程；ASR Vito €90、Sprinter €110；NAV Vito €80、Sprinter €90。往返正好两倍。",
    "primaryKeyword": "卡帕多奇亚机场接送价格",
    "secondaryKeywords": [
      "卡帕多奇亚班车价格",
      "开塞利机场接送价格",
      "内夫谢希尔机场接送价格",
      "Cappadocia airport transfer prices",
      "卡帕多奇亚包车价格"
    ],
    "eyebrow": "透明固定价格",
    "h1": "卡帕多奇亚机场接送价格",
    "lead": "共享拼车从两座机场都是 €15/人/单程；私人车按机场和车型计价。这里把单程、往返和车辆容量一次说明清楚。",
    "sections": [
      {
        "heading": "共享机场班车",
        "paragraphs": [
          "开塞利 ASR 和内夫谢希尔 NAV 到支持的六个酒店区都是 **€15/人/单程**。往返为 **€30/人**。"
        ]
      },
      {
        "heading": "开塞利机场私人接送",
        "paragraphs": [
          "ASR → 卡帕多奇亚：Vito 最多5人 **€90/车/单程**；Sprinter 最多16人 **€110/车/单程**。往返分别 €180 和 €220。"
        ]
      },
      {
        "heading": "内夫谢希尔机场私人接送",
        "paragraphs": [
          "NAV → 卡帕多奇亚：Vito 最多5人 **€80/车/单程**；Sprinter 最多16人 **€90/车/单程**。往返分别 €160 和 €180。"
        ]
      },
      {
        "heading": "为什么拼车两座机场同价，私人车不同价",
        "paragraphs": [
          "共享服务按座位售卖并按整体运营组织，因此两个机场统一 €15/人。私人车是一组客人独立用车，实际路线和运营成本不同，所以 ASR 与 NAV 价格不同。"
        ]
      },
      {
        "heading": "什么时候按人数，什么时候按整车",
        "paragraphs": [
          "拼车总价 = €15 × 乘客人数 × 行程段数。私人车总价与 1–5 人或 1–16 人中的实际人数无关，只要不超过车型上限，就是对应整车价格。"
        ]
      },
      {
        "heading": "付款方式",
        "paragraphs": [
          "网站以 EUR 显示。当前流程为按确认方式现金支付给司机；如果希望使用 USD 或 TRY 现金，应以预订时确认的汇率为准。"
        ]
      },
      {
        "heading": "价格要和车型容量一起看",
        "paragraphs": [
          "单看“€80、€90、€110”很容易误解。Vito 最多 5 人，Sprinter 最多 16 人；两者都是私人整车价。共享班车则按每位乘客 €15 计算，所以不同人数下最划算的选项会变化。"
        ]
      },
      {
        "heading": "不同人数的简单计算示例",
        "paragraphs": [
          "2 人单程拼车总计 €30；4 人单程拼车 €60；6 人从 NAV 单程拼车 €90，正好与 NAV Sprinter 的整车价相同，但两种服务的停靠方式和独立性不同。价格相近时，应同时比较时间、行李和是否需要独立车辆。"
        ]
      },
      {
        "heading": "机场选择必须立即改变私人总价",
        "paragraphs": [
          "私人价格与机场绑定：ASR Vito €90 / Sprinter €110，NAV Vito €80 / Sprinter €90。表单从开塞利切换到内夫谢希尔时，摘要中的私人价格必须同步变化；如果机场变了而价格不变，就属于计算错误。"
        ]
      },
      {
        "heading": "公开价格不替代实际运营确认",
        "paragraphs": [
          "公开表格说明标准服务价格，但具体预订仍要确认航班、酒店、乘客、护照信息和车辆选择。特殊行李、超出支持区域的酒店或其他非标准要求，需要先通过 WhatsApp 确认，而不是根据标准价格自行假设。"
        ]
      },
      {
        "heading": "往返没有隐藏公式",
        "paragraphs": [
          "当前规则很简单：同一标准服务的往返价格就是单程的两倍。共享班车 €15/人/单程，因此往返 €30/人；私人车辆也按相应机场单程价乘以二。若抵达和离开使用不同机场，两段私人价格应分别计算。"
        ]
      }
    ],
    "faq": [
      {
        "q": "两座机场拼车都是 €15 吗？",
        "a": "是，ASR 和 NAV 都是 €15/人/单程。"
      },
      {
        "q": "儿童也按人计算吗？",
        "a": "拼车按预订乘客人数计算；如有儿童座椅等需求应在备注中说明并确认。"
      },
      {
        "q": "Vito 两个人和五个人价格一样吗？",
        "a": "是，只要不超过 5 人，私人 Vito 按整车固定价。"
      },
      {
        "q": "Sprinter 适合 16 人吗？",
        "a": "最多 16 位乘客；实际行李量很大时建议提前说明。"
      },
      {
        "q": "往返有折扣吗？",
        "a": "当前规则是单程价格的正好两倍，没有另外折扣。"
      },
      {
        "q": "价格包括酒店接送吗？",
        "a": "支持区域按已确认酒店或附近安全点接送。"
      },
      {
        "q": "航班改签会自动改变价格吗？",
        "a": "路线和车型不变时通常不因单纯时间变化改变公开价格，但实际新安排需要重新确认。"
      },
      {
        "q": "怎么付款？",
        "a": "按确认方式现金支付给司机。"
      },
      {
        "q": "6 人从 NAV 选择拼车还是 Sprinter 更便宜？",
        "a": "6 人拼车单程也是 €90，与 NAV Sprinter 公布的整车单程价相同；这时应再比较直达、行李和车辆独立性。"
      },
      {
        "q": "从 ASR 切换到 NAV 后私人价格应该变化吗？",
        "a": "应该。NAV 私人 Vito/Sprinter 是 €80/€90，ASR 是 €90/€110。"
      },
      {
        "q": "如果抵达 NAV、离开 ASR，往返怎么计算？",
        "a": "两段按各自机场私人单程价分别相加，不能直接把其中一座机场的价格乘以二。"
      },
      {
        "q": "公开价格包含特殊区域酒店吗？",
        "a": "公开价格针对支持的标准服务区域；区域外或特殊要求应先通过 WhatsApp 确认。"
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
    "title": "开塞利机场机场班车｜卡帕多奇亚酒店接送",
    "description": "开塞利机场（ASR）卡帕多奇亚机场班车 €15/人，覆盖格雷梅、于尔居普、乌奇希萨尔、阿瓦诺斯、奥塔西萨和恰武辛，支持往返与私人车。",
    "primaryKeyword": "开塞利机场班车",
    "secondaryKeywords": [
      "ASR shuttle",
      "卡帕多奇亚ASR拼车",
      "开塞利机场接机",
      "机场到酒店拼车"
    ],
    "eyebrow": "ASR 共享机场班车",
    "h1": "开塞利机场到卡帕多奇亚班车",
    "lead": "€15/人/单程，从 ASR 到六个主要卡帕多奇亚住宿区。可选单程或往返，也可升级私人 Vito / Sprinter。",
    "sections": [
      {
        "heading": "ASR 拼车班车适合什么行程",
        "paragraphs": [
          "这项服务用于 开塞利机场 与格雷梅、于尔居普、乌奇希萨尔、阿瓦诺斯、奥塔西萨、恰武辛之间的机场—酒店接送。价格为 **€15/人/单程**，不是当地出租车，也不是固定线路公共巴士。"
        ]
      },
      {
        "heading": "从 ASR 会合到酒店下车",
        "paragraphs": [
          "在 ASR 落地后先领取托运行李，再按照 WhatsApp 确认的会合信息前往接车点。由于拼车可能包含其他乘客和酒店，从 ASR 离开机场到抵达酒店的具体时间会随当天组合变化。"
        ]
      },
      {
        "heading": "ASR 拼车为什么需要每位乘客的完整信息",
        "paragraphs": [
          "运营公司要求姓名和护照号码用于 ASR 乘客预订与接送操作。提交前的预订摘要会显示乘客数量和已填写信息，方便检查。"
        ]
      },
      {
        "heading": "ASR 拼车和私人接送怎么选",
        "paragraphs": [
          "拼车最适合希望控制预算的个人或小团体。若希望机场出来后直接去酒店、携带较多行李或团队人数较多，可选择 Vito €90（最多5人）或 Sprinter €110（最多16人）。"
        ]
      },
      {
        "heading": "ASR 班车进入洞穴酒店区域后的最后一段",
        "paragraphs": [
          "从 ASR 出发的共享班车离开主路后，是否能到酒店门口取决于实际城镇与酒店道路。较大的车辆有时会使用附近安全点，而不是强行进入不适合等待的窄路。"
        ]
      },
      {
        "heading": "也可以从酒店返回 ASR",
        "paragraphs": [
          "返程同样是 €15/人/单程。根据离港航班确认接车时间，并在窗口开始前准备好行李。详细送机路线可从 [[卡帕多奇亚到开塞利机场|cappadocia-to-kayseri-airport-shuttle]] 查看。"
        ]
      },
      {
        "heading": "ASR 航站楼会合前先完成行李领取",
        "paragraphs": [
          "落地后先完成正常入境或行李流程，再按照 WhatsApp 确认前往接车点。预订乘客姓名可以用于会合识别，准确的实际运营航班号则帮助团队确认对应的到达安排。"
        ]
      },
      {
        "heading": "从主路进入酒店区后，道路条件会改变",
        "paragraphs": [
          "格雷梅和乌奇希萨尔常见坡地洞穴酒店，于尔居普有城市道路与老城区混合，阿瓦诺斯更分散，奥塔西萨和恰武辛有较小村路。共享车辆不能为了停到某个门口而忽略道路安全，必要时会确认附近合适的上下客点。"
        ]
      }
    ],
    "faq": [
      {
        "q": "ASR 拼车班车多少钱？",
        "a": "€15/人/单程，往返 €30/人。"
      },
      {
        "q": "ASR 拼车会送到已确认酒店吗？",
        "a": "服务覆盖六个主要住宿区；具体酒店是否能停到门口取决于道路和车辆安全条件。"
      },
      {
        "q": "ASR 航班延误后，拼车安排怎么办？",
        "a": "尽快发 WhatsApp 更新航班，不要假设拼车会无限等待。"
      },
      {
        "q": "ASR 的共享班车可以保证 Mercedes 车型吗？",
        "a": "共享班车车型按当天运营安排；需要指定 Vito 或 Sprinter 时应选择私人接送。"
      },
      {
        "q": "从酒店返回 ASR 的拼车也是 €15 吗？",
        "a": "是，支持区域到同一机场也是 €15/人/单程。"
      },
      {
        "q": "为什么 ASR 拼车预订要填写护照号码？",
        "a": "这是运营公司的预订与乘客接送要求。"
      },
      {
        "q": "ASR 拼车离开主路后一定能停到酒店门口吗？",
        "a": "不一定，最终取决于酒店道路和车辆安全条件。"
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
    ]
  },
  {
    "slug": "nevsehir-airport-shuttle",
    "title": "内夫谢希尔机场机场班车｜卡帕多奇亚酒店接送",
    "description": "内夫谢希尔机场（NAV）卡帕多奇亚机场班车 €15/人，覆盖格雷梅、于尔居普、乌奇希萨尔、阿瓦诺斯、奥塔西萨和恰武辛，支持往返与私人车。",
    "primaryKeyword": "内夫谢希尔机场班车",
    "secondaryKeywords": [
      "NAV shuttle",
      "卡帕多奇亚NAV拼车",
      "内夫谢希尔机场接机",
      "机场到酒店拼车"
    ],
    "eyebrow": "NAV 共享机场班车",
    "h1": "内夫谢希尔机场到卡帕多奇亚班车",
    "lead": "€15/人/单程，从 NAV 到六个主要卡帕多奇亚住宿区。可选单程或往返，也可升级私人 Vito / Sprinter。",
    "sections": [
      {
        "heading": "NAV 拼车班车适合什么行程",
        "paragraphs": [
          "这项服务用于 内夫谢希尔机场 与格雷梅、于尔居普、乌奇希萨尔、阿瓦诺斯、奥塔西萨、恰武辛之间的机场—酒店接送。价格为 **€15/人/单程**，不是当地出租车，也不是固定线路公共巴士。"
        ]
      },
      {
        "heading": "从 NAV 会合到酒店下车",
        "paragraphs": [
          "在 NAV 落地后先领取托运行李，再按照 WhatsApp 确认的会合信息前往接车点。由于拼车可能包含其他乘客和酒店，从 NAV 离开机场到抵达酒店的具体时间会随当天组合变化。"
        ]
      },
      {
        "heading": "NAV 拼车为什么需要每位乘客的完整信息",
        "paragraphs": [
          "运营公司要求姓名和护照号码用于 NAV 乘客预订与接送操作。提交前的预订摘要会显示乘客数量和已填写信息，方便检查。"
        ]
      },
      {
        "heading": "NAV 拼车和私人接送怎么选",
        "paragraphs": [
          "拼车最适合希望控制预算的个人或小团体。若希望机场出来后直接去酒店、携带较多行李或团队人数较多，可选择 Vito €80（最多5人）或 Sprinter €90（最多16人）。"
        ]
      },
      {
        "heading": "NAV 班车进入洞穴酒店区域后的最后一段",
        "paragraphs": [
          "从 NAV 出发的共享班车离开主路后，是否能到酒店门口取决于实际城镇与酒店道路。较大的车辆有时会使用附近安全点，而不是强行进入不适合等待的窄路。"
        ]
      },
      {
        "heading": "也可以从酒店返回 NAV",
        "paragraphs": [
          "返程同样是 €15/人/单程。根据离港航班确认接车时间，并在窗口开始前准备好行李。详细送机路线可从 [[卡帕多奇亚到内夫谢希尔机场|cappadocia-to-nevsehir-airport-shuttle]] 查看。"
        ]
      },
      {
        "heading": "NAV 落地后的会合仍然从行李领取之后开始",
        "paragraphs": [
          "NAV 到许多酒店的道路更短，但机场流程并不会因此消失。领取行李后按照 WhatsApp 说明前往接车点，保持预订姓名和实际运营航班号准确，避免因为同名酒店或航班信息错误影响会合。"
        ]
      },
      {
        "heading": "NAV 到酒店的最后几分钟仍取决于住宿位置",
        "paragraphs": [
          "短公路距离不代表每家洞穴酒店都能让大型车辆直接停到门口。尤其乌奇希萨尔、格雷梅等坡地住宿，最终停靠点取决于道路宽度、坡度和安全等待空间。"
        ]
      }
    ],
    "faq": [
      {
        "q": "NAV 拼车班车多少钱？",
        "a": "€15/人/单程，往返 €30/人。"
      },
      {
        "q": "NAV 拼车会送到已确认酒店吗？",
        "a": "服务覆盖六个主要住宿区；具体酒店是否能停到门口取决于道路和车辆安全条件。"
      },
      {
        "q": "NAV 航班延误后，拼车安排怎么办？",
        "a": "尽快发 WhatsApp 更新航班，不要假设拼车会无限等待。"
      },
      {
        "q": "NAV 的共享班车可以保证 Mercedes 车型吗？",
        "a": "共享班车车型按当天运营安排；需要指定 Vito 或 Sprinter 时应选择私人接送。"
      },
      {
        "q": "从酒店返回 NAV 的拼车也是 €15 吗？",
        "a": "是，支持区域到同一机场也是 €15/人/单程。"
      },
      {
        "q": "为什么 NAV 拼车预订要填写护照号码？",
        "a": "这是运营公司的预订与乘客接送要求。"
      },
      {
        "q": "NAV 离酒店较近，拼车时间就一定固定吗？",
        "a": "不是。行李、乘客组合和酒店停靠仍会影响实际时间。"
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
    ]
  },
  {
    "slug": "cappadocia-to-kayseri-airport-shuttle",
    "title": "卡帕多奇亚到开塞利机场｜酒店机场班车",
    "description": "格雷梅、于尔居普、乌奇希萨尔、阿瓦诺斯、奥塔西萨、恰武辛到开塞利机场（ASR）酒店送机。拼车 €15/人，私人 Vito/Sprinter。",
    "primaryKeyword": "卡帕多奇亚到开塞利机场班车",
    "secondaryKeywords": [
      "卡帕多奇亚ASR送机",
      "酒店到开塞利机场",
      "开塞利机场送机",
      "ASR hotel shuttle"
    ],
    "eyebrow": "卡帕多奇亚 → ASR",
    "h1": "卡帕多奇亚到开塞利机场班车",
    "lead": "从六个支持酒店区前往 ASR。拼车 €15/人/单程，接车时间根据实际离港航班和酒店顺序确认。",
    "sections": [
      {
        "heading": "ASR 送机按离港航班安排，不是固定班次",
        "paragraphs": [
          "酒店到 ASR 的拼车会结合离港航班、住宿位置和当天其他乘客确定。最终 WhatsApp 接车时间比“提前几小时离开”这样的通用规则更有用。"
        ]
      },
      {
        "heading": "去 ASR 前，退房、早餐和行李应在接车窗口前完成",
        "paragraphs": [
          "前往 ASR 的拼车可能在接到你后继续前往其他酒店，因此车辆不能无限等待。尤其是洞穴酒店或需要步行到安全集合点的住宿，应更早把行李准备好。"
        ]
      },
      {
        "heading": "去 ASR 时，六个城镇的送机情况并不一样",
        "paragraphs": [
          "前往 ASR 时，格雷梅有热气球清晨交通和坡地洞穴酒店；乌奇希萨尔有城堡斜坡；阿瓦诺斯跨河分布；于尔居普、奥塔西萨和恰武辛也各有不同道路。应进入对应城镇送机页面，而不是只看一个统一时间。"
        ]
      },
      {
        "heading": "去 ASR：拼车与私人车价格",
        "paragraphs": [
          "拼车 **€15/人/单程**。私人 Vito **€90**（最多5人），Sprinter **€110**（最多16人），均为整车单程价格。"
        ]
      },
      {
        "heading": "去 ASR 的航班变化后要重新确认",
        "paragraphs": [
          "如果从 ASR 离港的航班改签或延误，请把新的航班号和时间发到 WhatsApp。不要自行把接车时间等比例后移，因为当天拼车还涉及其他乘客。"
        ]
      },
      {
        "heading": "选择前往 ASR 时真正的出发城镇",
        "paragraphs": [
          "前往 ASR 时，格雷梅、于尔居普、乌奇希萨尔、阿瓦诺斯、奥塔西萨和恰武辛都有独立送机页面，可以看到酒店道路、当地最后活动和对应距离。"
        ]
      },
      {
        "heading": "去 ASR 的接车时间会针对具体航班单独确认",
        "paragraphs": [
          "酒店到 ASR 不使用一个适用于所有人的固定发车时刻。离港航班、住宿城镇、酒店道路和同车乘客都会影响接车顺序，因此 WhatsApp 最终确认比自己按地图倒推更可靠。"
        ]
      }
    ],
    "faq": [
      {
        "q": "卡帕多奇亚到开塞利机场拼车多少钱？",
        "a": "€15/人/单程。"
      },
      {
        "q": "前往 ASR 的酒店接车时间什么时候确定？",
        "a": "根据实际离港航班和酒店接客计划，通过 WhatsApp 确认。"
      },
      {
        "q": "私人车辆送到 ASR 多少钱？",
        "a": "Vito €90，Sprinter €110，按整车单程计价。"
      },
      {
        "q": "从 ASR 离港的航班延误后怎么办？",
        "a": "尽快更新航班并等待新的接车确认。"
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
    ]
  },
  {
    "slug": "cappadocia-to-nevsehir-airport-shuttle",
    "title": "卡帕多奇亚到内夫谢希尔机场｜酒店机场班车",
    "description": "格雷梅、于尔居普、乌奇希萨尔、阿瓦诺斯、奥塔西萨、恰武辛到内夫谢希尔机场（NAV）酒店送机。拼车 €15/人，私人 Vito/Sprinter。",
    "primaryKeyword": "卡帕多奇亚到内夫谢希尔机场班车",
    "secondaryKeywords": [
      "卡帕多奇亚NAV送机",
      "酒店到内夫谢希尔机场",
      "内夫谢希尔机场送机",
      "NAV hotel shuttle"
    ],
    "eyebrow": "卡帕多奇亚 → NAV",
    "h1": "卡帕多奇亚到内夫谢希尔机场班车",
    "lead": "从六个支持酒店区前往 NAV。拼车 €15/人/单程，接车时间根据实际离港航班和酒店顺序确认。",
    "sections": [
      {
        "heading": "NAV 送机按离港航班安排，不是固定班次",
        "paragraphs": [
          "酒店到 NAV 的拼车会结合离港航班、住宿位置和当天其他乘客确定。最终 WhatsApp 接车时间比“提前几小时离开”这样的通用规则更有用。"
        ]
      },
      {
        "heading": "去 NAV 前，退房、早餐和行李应在接车窗口前完成",
        "paragraphs": [
          "前往 NAV 的拼车可能在接到你后继续前往其他酒店，因此车辆不能无限等待。尤其是洞穴酒店或需要步行到安全集合点的住宿，应更早把行李准备好。"
        ]
      },
      {
        "heading": "去 NAV 时，六个城镇的送机情况并不一样",
        "paragraphs": [
          "前往 NAV 时，格雷梅有热气球清晨交通和坡地洞穴酒店；乌奇希萨尔有城堡斜坡；阿瓦诺斯跨河分布；于尔居普、奥塔西萨和恰武辛也各有不同道路。应进入对应城镇送机页面，而不是只看一个统一时间。"
        ]
      },
      {
        "heading": "去 NAV：拼车与私人车价格",
        "paragraphs": [
          "拼车 **€15/人/单程**。私人 Vito **€80**（最多5人），Sprinter **€90**（最多16人），均为整车单程价格。"
        ]
      },
      {
        "heading": "去 NAV 的航班变化后要重新确认",
        "paragraphs": [
          "如果从 NAV 离港的航班改签或延误，请把新的航班号和时间发到 WhatsApp。不要自行把接车时间等比例后移，因为当天拼车还涉及其他乘客。"
        ]
      },
      {
        "heading": "选择前往 NAV 时真正的出发城镇",
        "paragraphs": [
          "前往 NAV 时，格雷梅、于尔居普、乌奇希萨尔、阿瓦诺斯、奥塔西萨和恰武辛都有独立送机页面，可以看到酒店道路、当地最后活动和对应距离。"
        ]
      },
      {
        "heading": "去 NAV 的接车时间同样按真实航班确认",
        "paragraphs": [
          "NAV 离许多酒店更近，但酒店送机仍不是“每天固定几点”的公共巴士。运营方会结合离港航班、酒店位置和共享车辆顺序给出接车时间，乘客应在窗口开始前完成退房并准备好行李。"
        ]
      }
    ],
    "faq": [
      {
        "q": "卡帕多奇亚到内夫谢希尔机场拼车多少钱？",
        "a": "€15/人/单程。"
      },
      {
        "q": "前往 NAV 的酒店接车时间什么时候确定？",
        "a": "根据实际离港航班和酒店接客计划，通过 WhatsApp 确认。"
      },
      {
        "q": "私人车辆送到 NAV 多少钱？",
        "a": "Vito €80，Sprinter €90，按整车单程计价。"
      },
      {
        "q": "从 NAV 离港的航班延误后怎么办？",
        "a": "尽快更新航班并等待新的接车确认。"
      },
      {
        "q": "NAV 较近，可以比确认时间晚一点出来吗？",
        "a": "不可以。共享车辆按已确认路线运行，应提前准备好行李并按时到集合点。"
      },
      {
        "q": "去 NAV 的送机也能选择私人 Sprinter 吗？",
        "a": "可以，NAV Sprinter 单程 €90，最多16位乘客。"
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
    ]
  },
  {
    "slug": "goreme-airport-transfer",
    "title": "格雷梅机场接送｜ASR / NAV 机场班车",
    "description": "格雷梅机场接送指南：比较开塞利 ASR 与内夫谢希尔 NAV，拼车与私人 Vito/Sprinter，并集中说明格雷梅酒店道路、住宿区域和送机信息。",
    "primaryKeyword": "格雷梅机场接送",
    "secondaryKeywords": [
      "格雷梅机场班车",
      "格雷梅接机",
      "格雷梅送机",
      "卡帕多奇亚格雷梅接送",
      "Goreme airport transfer"
    ],
    "eyebrow": "格雷梅机场接送指南",
    "h1": "格雷梅机场接送",
    "lead": "这一页集中说明格雷梅作为住宿区本身的机场接送信息；具体 ASR/NAV 单条路线则进入对应班车页面，避免四条路线重复同一套长内容。",
    "sections": [
      {
        "heading": "住在格雷梅，机场接送真正不同的地方",
        "paragraphs": [
          "格雷梅是第一次到卡帕多奇亚的游客最常选择的住宿地之一。镇中心不大，餐厅、旅行社和许多集合点步行可达，洞穴酒店则沿着坡地向上分布。对机场接送来说，这种紧凑又有坡度的城市结构很重要：地图上看起来相距很近的两家酒店，车辆实际进入的道路条件可能完全不同，因此预订时填写完整酒店名称比只写“格雷梅”更可靠。",
          "格雷梅有大量名称相似的 Cave Hotel、Cave Suites、Stone House 和 Boutique Hotel。为了避免司机去错入口，完整酒店名称、可联系的 WhatsApp 号码，以及必要时发送地图定位都很有帮助。"
        ]
      },
      {
        "heading": "格雷梅酒店道路与真实上下客位置",
        "paragraphs": [
          "格雷梅下方的中心街区通常比较容易上下客，而山坡上的洞穴酒店常见窄路、单行道、陡坡和临时停车空间不足等情况。拼车班车体型较大时，司机可能会在距离酒店很近且安全的位置上下客；私人 Vito 在部分小路上的机动性更好，但也不能在预订前承诺一定停到每一家酒店门口。"
        ]
      },
      {
        "heading": "格雷梅应该选 ASR 还是 NAV？",
        "paragraphs": [
          "ASR 到格雷梅约 **75 km** / **60–75 分钟**；NAV 约 **40 km** / **35–45 分钟**。NAV 往往公路更近，但航班时间和机票仍可能让 ASR 更适合整段旅行。"
        ]
      },
      {
        "heading": "格雷梅住宿名称集中放在这里，不重复塞进每条机场路线",
        "paragraphs": [
          "以下名称用于识别格雷梅住宿分布，不是酒店排名。预订时填写真实预订的完整名称。"
        ],
        "bullets": [
          "Divan Cave House",
          "Aydinli Cave Hotel",
          "Aren Cave Hotel and Art Gallery",
          "Arinna Cappadocia",
          "THE OWL CAVE HOUSE",
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
          "Traveller’s Cave Hotel",
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
        "heading": "从格雷梅返回机场",
        "paragraphs": [
          "离开格雷梅当天，最好不要在接车前安排时间难以控制的长距离山谷徒步。热气球清晨交通、冬季天气和拼车的酒店接客顺序都会影响实际节奏。航班较晚时，可以把行李寄存在酒店，在镇中心吃饭、喝咖啡、购物或短距离散步，再按确认时间回到集合点。",
          "ASR：[[格雷梅到开塞利机场|goreme-to-kayseri-airport-shuttle]]；NAV：[[格雷梅到内夫谢希尔机场|goreme-to-nevsehir-airport-shuttle]]。"
        ]
      }
    ],
    "faq": [
      {
        "q": "格雷梅拼车从两座机场都是同一个人均价格吗？",
        "a": "是。共享机场班车从 ASR 或 NAV 到支持住宿区均按 €15/人/单程显示。"
      },
      {
        "q": "格雷梅应该只因为 NAV 更近就选择 NAV 吗？",
        "a": "不一定。应同时比较航班时间、票价、道路距离和你的真实酒店位置。"
      },
      {
        "q": "格雷梅所有洞穴酒店都能直接停到门口吗？",
        "a": "不能一概而论。部分山坡小路不适合较大的班车通行或等待，具体上下客点会根据酒店位置通过 WhatsApp 确认。"
      },
      {
        "q": "清晨热气球活动会影响格雷梅机场接送吗？",
        "a": "有可能。日出前后道路和酒店接客车辆会明显增多，所以应以确认的接车时间为准，而不是只看地图距离。"
      },
      {
        "q": "预订时只写 Goreme 可以吗？",
        "a": "不建议。格雷梅有许多名称相似的洞穴酒店，完整酒店名能显著减少接错位置的风险。"
      },
      {
        "q": "格雷梅退房后距离晚班机还有几小时，可以把行李留酒店吗？",
        "a": "多数酒店可提供行李寄存，但应直接向自己的住宿确认；接车前要提前回到确认集合点。"
      }
    ],
    "related": [
      "kayseri-airport-to-goreme-shuttle",
      "nevsehir-airport-to-goreme-shuttle",
      "goreme-to-kayseri-airport-shuttle",
      "goreme-to-nevsehir-airport-shuttle",
      "cappadocia-airport",
      "airport-transfer-prices"
    ]
  },
  {
    "slug": "kayseri-airport-to-goreme-shuttle",
    "title": "开塞利机场到格雷梅机场班车｜共享与私人接送",
    "description": "开塞利机场（ASR）到格雷梅约 75 km，通常 60–75 分钟。共享机场班车与私人 Vito/Sprinter，附这条路线自己的酒店道路和抵达建议。",
    "primaryKeyword": "开塞利机场到格雷梅接送",
    "secondaryKeywords": [
      "ASR到格雷梅",
      "格雷梅机场接送",
      "卡帕多奇亚机场到格雷梅",
      "开塞利机场格雷梅拼车",
      "开塞利机场格雷梅包车"
    ],
    "eyebrow": "ASR → 格雷梅 机场班车",
    "h1": "开塞利机场到格雷梅机场班车",
    "lead": "开塞利机场（ASR）到格雷梅的机场班车。上方路线摘要先给出距离、正常公路时间和当前拼车/私人车价格；下方只保留这条路线真正有用的本地信息。",
    "route": {
      "airport": "kayseri",
      "town": "goreme",
      "direction": "arrival"
    },
    "sections": [
      {
        "heading": "从 ASR 到格雷梅，先理解这是一段较长的机场路程",
        "paragraphs": [
          "开塞利机场到格雷梅正常参考约 **75 km / 60-75 分钟**。ASR 是两座常用机场里公路更远的一座，所以取完行李后最重要的是顺利完成机场到酒店这一段，而不是把抵达日继续塞满行程。更多 ASR 总体信息可看 [[开塞利机场班车|kayseri-airport-shuttle]]。"
        ]
      },
      {
        "heading": "高速路结束后，洞穴酒店街道才是最后变量",
        "paragraphs": [
          "进入格雷梅后，道路会从区域公路变成更紧凑的坡路和洞穴酒店街区。实际酒店位置决定最后几分钟的走法。晚班机抵达时，先入住、吃饭、休息通常比马上安排山谷徒步更合理。"
        ]
      },
      {
        "heading": "如果机票还没买，比较 NAV 而不是只看一个机场",
        "paragraphs": [
          "NAV 到格雷梅更近，但更合适的 ASR 航班仍可能让整段行程更轻松。可对比 [[内夫谢希尔机场到格雷梅班车|nevsehir-airport-to-goreme-shuttle]]；两座机场的格雷梅综合入口在 [[格雷梅机场接送|goreme-airport-transfer]]。"
        ]
      }
    ],
    "faq": [
      {
        "q": "开塞利机场离格雷梅太远，不适合坐班车吗？",
        "a": "不是。ASR 是卡帕多奇亚常用机场，格雷梅公路参考约 75 km / 60-75 分钟。"
      },
      {
        "q": "抵达 ASR 后当天适合马上安排长距离景点吗？",
        "a": "不建议把计划排得太紧。先入住，再选择镇中心、餐厅或附近观景点更稳妥。"
      }
    ],
    "related": [
      "goreme-to-kayseri-airport-shuttle",
      "goreme-airport-transfer",
      "kayseri-airport-shuttle",
      "nevsehir-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ]
  },
  {
    "slug": "kayseri-airport-to-urgup-shuttle",
    "title": "开塞利机场到于尔居普机场班车｜共享与私人接送",
    "description": "开塞利机场（ASR）到于尔居普约 70 km，通常 60–75 分钟。共享机场班车与私人 Vito/Sprinter，附这条路线自己的酒店道路和抵达建议。",
    "primaryKeyword": "开塞利机场到于尔居普接送",
    "secondaryKeywords": [
      "ASR到于尔居普",
      "于尔居普机场接送",
      "卡帕多奇亚机场到于尔居普",
      "开塞利机场于尔居普拼车",
      "开塞利机场于尔居普包车"
    ],
    "eyebrow": "ASR → 于尔居普 机场班车",
    "h1": "开塞利机场到于尔居普机场班车",
    "lead": "开塞利机场（ASR）到于尔居普的机场班车。上方路线摘要先给出距离、正常公路时间和当前拼车/私人车价格；下方只保留这条路线真正有用的本地信息。",
    "route": {
      "airport": "kayseri",
      "town": "urgup",
      "direction": "arrival"
    },
    "sections": [
      {
        "heading": "开塞利到于尔居普不是“先去格雷梅再说”",
        "paragraphs": [
          "ASR 到于尔居普正常约 **70 km / 60-75 分钟**。于尔居普本身就是独立住宿区，预订时应选择真实城镇，而不是只写 Cappadocia。"
        ]
      },
      {
        "heading": "于尔居普中心和坡地石屋的最后一段不一样",
        "paragraphs": [
          "镇中心很多道路正常通车，但部分历史石屋、洞穴酒店位于坡地小路。机场班车按真实住宿位置完成下客，而不是全镇只用一个固定站点。抵达后在中心吃饭、逛老街或 Temenni 一带，比继续跨镇赶景点更自然。"
        ]
      },
      {
        "heading": "Transfer 仍然是这条路线的重要辅助搜索词",
        "paragraphs": [
          "有人会搜索 **Kayseri Airport to Urgup transfer**。本页覆盖同一机场到酒店需求，只是网站整体仍以 airport shuttle 为主。若航班考虑 NAV，可看 [[内夫谢希尔机场到于尔居普班车|nevsehir-airport-to-urgup-shuttle]]。"
        ]
      }
    ],
    "faq": [
      {
        "q": "开塞利机场班车可以送到于尔居普酒店吗？",
        "a": "支持区域内已确认的于尔居普住宿可以预订，最终下客位置取决于酒店实际道路。"
      },
      {
        "q": "于尔居普和格雷梅是同一个接送点吗？",
        "a": "不是，两座城镇道路和酒店分布不同，应填写真实住宿城镇。"
      }
    ],
    "related": [
      "urgup-to-kayseri-airport-shuttle",
      "kayseri-airport-shuttle",
      "nevsehir-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ]
  },
  {
    "slug": "kayseri-airport-to-uchisar-shuttle",
    "title": "开塞利机场到乌奇希萨尔机场班车｜共享与私人接送",
    "description": "开塞利机场（ASR）到乌奇希萨尔约 80 km，通常 70–85 分钟。共享机场班车与私人 Vito/Sprinter，附这条路线自己的酒店道路和抵达建议。",
    "primaryKeyword": "开塞利机场到乌奇希萨尔接送",
    "secondaryKeywords": [
      "ASR到乌奇希萨尔",
      "乌奇希萨尔机场接送",
      "卡帕多奇亚机场到乌奇希萨尔",
      "开塞利机场乌奇希萨尔拼车",
      "开塞利机场乌奇希萨尔包车"
    ],
    "eyebrow": "ASR → 乌奇希萨尔 机场班车",
    "h1": "开塞利机场到乌奇希萨尔机场班车",
    "lead": "开塞利机场（ASR）到乌奇希萨尔的机场班车。上方路线摘要先给出距离、正常公路时间和当前拼车/私人车价格；下方只保留这条路线真正有用的本地信息。",
    "route": {
      "airport": "kayseri",
      "town": "uchisar",
      "direction": "arrival"
    },
    "sections": [
      {
        "heading": "较长的 ASR 路程最后结束在乌奇希萨尔坡地",
        "paragraphs": [
          "开塞利机场到乌奇希萨尔约 **80 km / 70-85 分钟**，是中心区域较长的路线之一。城堡周边酒店有明显高差，最后的坡路和入口条件需要单独考虑。"
        ]
      },
      {
        "heading": "抵达后看城堡可以，拖着行李走鸽子谷不合适",
        "paragraphs": [
          "如果还有日光，城堡附近观景台或酒店露台很容易安排；鸽子谷应该在放好行李后单独计划。若想比较更短的机场路程，可看 [[内夫谢希尔机场到乌奇希萨尔班车|nevsehir-airport-to-uchisar-shuttle]] 和 [[开塞利还是内夫谢希尔机场|kayseri-or-nevsehir-airport-for-cappadocia]]。"
        ]
      }
    ],
    "faq": [
      {
        "q": "为什么 ASR 到乌奇希萨尔比很多路线更长？",
        "a": "乌奇希萨尔位于中心住宿区西侧，而 ASR 在开塞利方向。"
      }
    ],
    "related": [
      "uchisar-to-kayseri-airport-shuttle",
      "kayseri-airport-shuttle",
      "nevsehir-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ]
  },
  {
    "slug": "kayseri-airport-to-avanos-shuttle",
    "title": "开塞利机场到阿瓦诺斯机场班车｜共享与私人接送",
    "description": "开塞利机场（ASR）到阿瓦诺斯约 70 km，通常 60–75 分钟。共享机场班车与私人 Vito/Sprinter，附这条路线自己的酒店道路和抵达建议。",
    "primaryKeyword": "开塞利机场到阿瓦诺斯接送",
    "secondaryKeywords": [
      "ASR到阿瓦诺斯",
      "阿瓦诺斯机场接送",
      "卡帕多奇亚机场到阿瓦诺斯",
      "开塞利机场阿瓦诺斯拼车",
      "开塞利机场阿瓦诺斯包车"
    ],
    "eyebrow": "ASR → 阿瓦诺斯 机场班车",
    "h1": "开塞利机场到阿瓦诺斯机场班车",
    "lead": "开塞利机场（ASR）到阿瓦诺斯的机场班车。上方路线摘要先给出距离、正常公路时间和当前拼车/私人车价格；下方只保留这条路线真正有用的本地信息。",
    "route": {
      "airport": "kayseri",
      "town": "avanos",
      "direction": "arrival"
    },
    "sections": [
      {
        "heading": "ASR 进入阿瓦诺斯的方向很直接",
        "paragraphs": [
          "阿瓦诺斯到开塞利机场正常约 **70 km / 60-75 分钟**。它位于中心洞穴酒店密集区以北，不需要把格雷梅当成必经中转。"
        ]
      },
      {
        "heading": "红河两岸决定进城后的最后走法",
        "paragraphs": [
          "阿瓦诺斯沿 Kizilirmak 两岸展开。河边酒店、老城住宿和新路一侧的酒店，最后几分钟可能完全不同。入住后如果还有时间，河边散步或陶艺街区比再跨城一次更适合抵达日。"
        ]
      },
      {
        "heading": "NAV 更近，但航班仍然先于公里数",
        "paragraphs": [
          "[[内夫谢希尔机场到阿瓦诺斯班车|nevsehir-airport-to-avanos-shuttle]] 公路更短。不过两座机场拼车价格相同，所以机票时间可能比单纯距离更重要。"
        ]
      }
    ],
    "faq": [
      {
        "q": "ASR 班车覆盖阿瓦诺斯河两岸吗？",
        "a": "支持区域内住宿可以提交预订，具体酒店位置决定最后进城路线。"
      },
      {
        "q": "机场班车包含陶艺店停留吗？",
        "a": "不包含。标准服务是机场与住宿之间的接送。"
      }
    ],
    "related": [
      "avanos-to-kayseri-airport-shuttle",
      "kayseri-airport-shuttle",
      "nevsehir-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ]
  },
  {
    "slug": "kayseri-airport-to-ortahisar-shuttle",
    "title": "开塞利机场到奥塔西萨机场班车｜共享与私人接送",
    "description": "开塞利机场（ASR）到奥塔西萨约 75 km，通常 60–75 分钟。共享机场班车与私人 Vito/Sprinter，附这条路线自己的酒店道路和抵达建议。",
    "primaryKeyword": "开塞利机场到奥塔西萨接送",
    "secondaryKeywords": [
      "ASR到奥塔西萨",
      "奥塔西萨机场接送",
      "卡帕多奇亚机场到奥塔西萨",
      "开塞利机场奥塔西萨拼车",
      "开塞利机场奥塔西萨包车"
    ],
    "eyebrow": "ASR → 奥塔西萨 机场班车",
    "h1": "开塞利机场到奥塔西萨机场班车",
    "lead": "开塞利机场（ASR）到奥塔西萨的机场班车。上方路线摘要先给出距离、正常公路时间和当前拼车/私人车价格；下方只保留这条路线真正有用的本地信息。",
    "route": {
      "airport": "kayseri",
      "town": "ortahisar",
      "direction": "arrival"
    },
    "sections": [
      {
        "heading": "较长机场公路最后进入一个紧凑的老村",
        "paragraphs": [
          "ASR 到奥塔西萨约 **75 km / 60-75 分钟**。进入岩石城堡和老村附近后，道路尺度明显变小，因此酒店具体位置比“已经到奥塔西萨”更重要。"
        ]
      },
      {
        "heading": "奥塔西萨适合让旅行日在这里停下来",
        "paragraphs": [
          "入住后在城堡附近散步、吃饭或看安静的村景已经足够。若机票还未确定，[[内夫谢希尔机场到奥塔西萨班车|nevsehir-airport-to-ortahisar-shuttle]] 路程更短，但 ASR 航班时间仍可能更好。"
        ]
      }
    ],
    "faq": [
      {
        "q": "开塞利机场共享班车包括奥塔西萨吗？",
        "a": "包括，支持区域内已确认住宿可以预订。"
      }
    ],
    "related": [
      "ortahisar-to-kayseri-airport-shuttle",
      "kayseri-airport-shuttle",
      "nevsehir-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ]
  },
  {
    "slug": "kayseri-airport-to-cavusin-shuttle",
    "title": "开塞利机场到恰武辛机场班车｜共享与私人接送",
    "description": "开塞利机场（ASR）到恰武辛约 75 km，通常 65–80 分钟。共享机场班车与私人 Vito/Sprinter，附这条路线自己的酒店道路和抵达建议。",
    "primaryKeyword": "开塞利机场到恰武辛接送",
    "secondaryKeywords": [
      "ASR到恰武辛",
      "恰武辛机场接送",
      "卡帕多奇亚机场到恰武辛",
      "开塞利机场恰武辛拼车",
      "开塞利机场恰武辛包车"
    ],
    "eyebrow": "ASR → 恰武辛 机场班车",
    "h1": "开塞利机场到恰武辛机场班车",
    "lead": "开塞利机场（ASR）到恰武辛的机场班车。上方路线摘要先给出距离、正常公路时间和当前拼车/私人车价格；下方只保留这条路线真正有用的本地信息。",
    "route": {
      "airport": "kayseri",
      "town": "cavusin",
      "direction": "arrival"
    },
    "sections": [
      {
        "heading": "恰武辛很小，但不能把它写成格雷梅",
        "paragraphs": [
          "开塞利机场到恰武辛约 **75 km / 65-80 分钟**。村庄靠近红谷和玫瑰谷，但它有自己的住宿道路，预订时选 Cavusin 可以避免和格雷梅酒店混淆。"
        ]
      },
      {
        "heading": "山谷就在旁边，也不要把抵达日变成徒步计时赛",
        "paragraphs": [
          "先到酒店、放行李，再根据日光决定是否走老村或附近短线。完整山谷路线更适合单独安排。清晨热气球活动有时也会让村庄周边道路更忙。"
        ]
      },
      {
        "heading": "如果想缩短公路距离，可以比较 NAV",
        "paragraphs": [
          "[[内夫谢希尔机场到恰武辛班车|nevsehir-airport-to-cavusin-shuttle]] 更近；ASR 的优势可能来自航班时间。"
        ]
      }
    ],
    "faq": [
      {
        "q": "酒店在恰武辛，可以在表单里选格雷梅吗？",
        "a": "不要。请按真实住宿地选择 Cavusin。"
      },
      {
        "q": "热气球活动会影响每一班接机吗？",
        "a": "不会，但清晨部分日期村庄和山谷道路会更忙。"
      }
    ],
    "related": [
      "cavusin-to-kayseri-airport-shuttle",
      "kayseri-airport-shuttle",
      "nevsehir-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ]
  },
  {
    "slug": "nevsehir-airport-to-goreme-shuttle",
    "title": "内夫谢希尔机场到格雷梅机场班车｜共享与私人接送",
    "description": "内夫谢希尔机场（NAV）到格雷梅约 40 km，通常 35–45 分钟。共享机场班车与私人 Vito/Sprinter，附这条路线自己的酒店道路和抵达建议。",
    "primaryKeyword": "内夫谢希尔机场到格雷梅接送",
    "secondaryKeywords": [
      "NAV到格雷梅",
      "格雷梅机场接送",
      "卡帕多奇亚机场到格雷梅",
      "内夫谢希尔机场格雷梅拼车",
      "内夫谢希尔机场格雷梅包车"
    ],
    "eyebrow": "NAV → 格雷梅 机场班车",
    "h1": "内夫谢希尔机场到格雷梅机场班车",
    "lead": "内夫谢希尔机场（NAV）到格雷梅的机场班车。上方路线摘要先给出距离、正常公路时间和当前拼车/私人车价格；下方只保留这条路线真正有用的本地信息。",
    "route": {
      "airport": "nevsehir",
      "town": "goreme",
      "direction": "arrival"
    },
    "sections": [
      {
        "heading": "NAV 是格雷梅最短的常用机场路线",
        "paragraphs": [
          "内夫谢希尔机场到格雷梅约 **40 km / 35-45 分钟**。较短公路能让抵达更轻松，但并不代表每家坡地洞穴酒店都能直接在门口停车。"
        ]
      },
      {
        "heading": "把省下来的时间用在入住之后",
        "paragraphs": [
          "航班准点时，入住后去镇中心、露台或附近观景点都很灵活。不要在行李还没放好前就把短机场路程换成长山谷计划。格雷梅两座机场的综合页面是 [[格雷梅机场接送|goreme-airport-transfer]]；ASR 对应路线见 [[开塞利机场到格雷梅班车|kayseri-airport-to-goreme-shuttle]]。"
        ]
      }
    ],
    "faq": [
      {
        "q": "NAV 是离格雷梅更近的机场吗？",
        "a": "按本站公路参考，是的：约 40 km，而 ASR 约 75 km。"
      },
      {
        "q": "路程短就一定能停到洞穴酒店门口吗？",
        "a": "不一定，酒店街道是否适合车辆是另一个问题。"
      }
    ],
    "related": [
      "goreme-to-nevsehir-airport-shuttle",
      "goreme-airport-transfer",
      "nevsehir-airport-shuttle",
      "kayseri-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ]
  },
  {
    "slug": "nevsehir-airport-to-urgup-shuttle",
    "title": "内夫谢希尔机场到于尔居普机场班车｜共享与私人接送",
    "description": "内夫谢希尔机场（NAV）到于尔居普约 50 km，通常 45–60 分钟。共享机场班车与私人 Vito/Sprinter，附这条路线自己的酒店道路和抵达建议。",
    "primaryKeyword": "内夫谢希尔机场到于尔居普接送",
    "secondaryKeywords": [
      "NAV到于尔居普",
      "于尔居普机场接送",
      "卡帕多奇亚机场到于尔居普",
      "内夫谢希尔机场于尔居普拼车",
      "内夫谢希尔机场于尔居普包车"
    ],
    "eyebrow": "NAV → 于尔居普 机场班车",
    "h1": "内夫谢希尔机场到于尔居普机场班车",
    "lead": "内夫谢希尔机场（NAV）到于尔居普的机场班车。上方路线摘要先给出距离、正常公路时间和当前拼车/私人车价格；下方只保留这条路线真正有用的本地信息。",
    "route": {
      "airport": "nevsehir",
      "town": "urgup",
      "direction": "arrival"
    },
    "sections": [
      {
        "heading": "NAV 缩短机场路程，但于尔居普仍在中心区东侧",
        "paragraphs": [
          "内夫谢希尔机场到于尔居普约 **50 km / 45-60 分钟**。它比去乌奇希萨尔或格雷梅更向东，所以 NAV 的距离优势没有那些城镇那么明显。"
        ]
      },
      {
        "heading": "抵达后先享受镇本身",
        "paragraphs": [
          "于尔居普中心餐厅、老街和 Temenni 一带都适合第一晚，不需要再安排一段跨镇交通。"
        ]
      },
      {
        "heading": "拼车和私人车解决的是不同需求",
        "paragraphs": [
          "一两位乘客通常更看重 €15 拼车的人均成本；家庭或小团体如果想要独立车辆和更直接的路线，可对比 [[拼车与私人接送|cappadocia-shared-shuttle-vs-private-transfer]]。"
        ]
      }
    ],
    "faq": [
      {
        "q": "为什么 NAV 到于尔居普没有 NAV 到乌奇希萨尔那么短？",
        "a": "因为于尔居普位于中心区域更东侧。"
      }
    ],
    "related": [
      "urgup-to-nevsehir-airport-shuttle",
      "kayseri-airport-to-urgup-shuttle",
      "nevsehir-airport-shuttle",
      "kayseri-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ]
  },
  {
    "slug": "nevsehir-airport-to-uchisar-shuttle",
    "title": "内夫谢希尔机场到乌奇希萨尔机场班车｜共享与私人接送",
    "description": "内夫谢希尔机场（NAV）到乌奇希萨尔约 35 km，通常 30–40 分钟。共享机场班车与私人 Vito/Sprinter，附这条路线自己的酒店道路和抵达建议。",
    "primaryKeyword": "内夫谢希尔机场到乌奇希萨尔接送",
    "secondaryKeywords": [
      "NAV到乌奇希萨尔",
      "乌奇希萨尔机场接送",
      "卡帕多奇亚机场到乌奇希萨尔",
      "内夫谢希尔机场乌奇希萨尔拼车",
      "内夫谢希尔机场乌奇希萨尔包车"
    ],
    "eyebrow": "NAV → 乌奇希萨尔 机场班车",
    "h1": "内夫谢希尔机场到乌奇希萨尔机场班车",
    "lead": "内夫谢希尔机场（NAV）到乌奇希萨尔的机场班车。上方路线摘要先给出距离、正常公路时间和当前拼车/私人车价格；下方只保留这条路线真正有用的本地信息。",
    "route": {
      "airport": "nevsehir",
      "town": "uchisar",
      "direction": "arrival"
    },
    "sections": [
      {
        "heading": "这是本站公布的最短机场路线",
        "paragraphs": [
          "NAV 到乌奇希萨尔约 **35 km / 30-40 分钟**。距离优势很明显，但城堡周边坡路仍然是最后一段实际接送条件。"
        ]
      },
      {
        "heading": "短路程应该换来更轻松的抵达，而不是更赶的行程",
        "paragraphs": [
          "早班机后可以在城堡附近看景或坐露台；鸽子谷更适合放好行李后单独安排。如果 ASR 航班明显更好，可比较 [[开塞利机场到乌奇希萨尔班车|kayseri-airport-to-uchisar-shuttle]]。"
        ]
      }
    ],
    "faq": [
      {
        "q": "NAV 到乌奇希萨尔公路多久？",
        "a": "正常参考约 35 km / 30-40 分钟。"
      },
      {
        "q": "接送会顺路停乌奇希萨尔城堡吗？",
        "a": "标准接送目的地是已预订住宿，不包含观光停留。"
      }
    ],
    "related": [
      "uchisar-to-nevsehir-airport-shuttle",
      "kayseri-airport-to-uchisar-shuttle",
      "nevsehir-airport-shuttle",
      "kayseri-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ]
  },
  {
    "slug": "nevsehir-airport-to-avanos-shuttle",
    "title": "内夫谢希尔机场到阿瓦诺斯机场班车｜共享与私人接送",
    "description": "内夫谢希尔机场（NAV）到阿瓦诺斯约 38 km，通常 35–50 分钟。共享机场班车与私人 Vito/Sprinter，附这条路线自己的酒店道路和抵达建议。",
    "primaryKeyword": "内夫谢希尔机场到阿瓦诺斯接送",
    "secondaryKeywords": [
      "NAV到阿瓦诺斯",
      "阿瓦诺斯机场接送",
      "卡帕多奇亚机场到阿瓦诺斯",
      "内夫谢希尔机场阿瓦诺斯拼车",
      "内夫谢希尔机场阿瓦诺斯包车"
    ],
    "eyebrow": "NAV → 阿瓦诺斯 机场班车",
    "h1": "内夫谢希尔机场到阿瓦诺斯机场班车",
    "lead": "内夫谢希尔机场（NAV）到阿瓦诺斯的机场班车。上方路线摘要先给出距离、正常公路时间和当前拼车/私人车价格；下方只保留这条路线真正有用的本地信息。",
    "route": {
      "airport": "nevsehir",
      "town": "avanos",
      "direction": "arrival"
    },
    "sections": [
      {
        "heading": "NAV 很快到阿瓦诺斯，之后要看酒店在河哪一边",
        "paragraphs": [
          "正常参考约 **38 km / 35-50 分钟**。进入阿瓦诺斯后，Kizilirmak 两岸的住宿位置比继续讨论机场公里数更实际。"
        ]
      },
      {
        "heading": "河边抵达日很容易保持弹性",
        "paragraphs": [
          "入住后走河边、逛中心或附近陶艺店，不需要再次转车去别的城镇。有人也会搜索 **Nevsehir Airport to Avanos transfer**，本页覆盖的就是同一机场到酒店需求。"
        ]
      }
    ],
    "faq": [
      {
        "q": "阿瓦诺斯离 NAV 近吗？",
        "a": "属于较短路线，正常约 38 km / 35-50 分钟。"
      }
    ],
    "related": [
      "avanos-to-nevsehir-airport-shuttle",
      "kayseri-airport-to-avanos-shuttle",
      "nevsehir-airport-shuttle",
      "kayseri-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ]
  },
  {
    "slug": "nevsehir-airport-to-ortahisar-shuttle",
    "title": "内夫谢希尔机场到奥塔西萨机场班车｜共享与私人接送",
    "description": "内夫谢希尔机场（NAV）到奥塔西萨约 45 km，通常 40–50 分钟。共享机场班车与私人 Vito/Sprinter，附这条路线自己的酒店道路和抵达建议。",
    "primaryKeyword": "内夫谢希尔机场到奥塔西萨接送",
    "secondaryKeywords": [
      "NAV到奥塔西萨",
      "奥塔西萨机场接送",
      "卡帕多奇亚机场到奥塔西萨",
      "内夫谢希尔机场奥塔西萨拼车",
      "内夫谢希尔机场奥塔西萨包车"
    ],
    "eyebrow": "NAV → 奥塔西萨 机场班车",
    "h1": "内夫谢希尔机场到奥塔西萨机场班车",
    "lead": "内夫谢希尔机场（NAV）到奥塔西萨的机场班车。上方路线摘要先给出距离、正常公路时间和当前拼车/私人车价格；下方只保留这条路线真正有用的本地信息。",
    "route": {
      "airport": "nevsehir",
      "town": "ortahisar",
      "direction": "arrival"
    },
    "sections": [
      {
        "heading": "NAV 到奥塔西萨是中等距离，最后进入老村",
        "paragraphs": [
          "正常约 **45 km / 40-50 分钟**。区域公路比较直接，真正变化更多发生在老村和酒店入口的最后几分钟。"
        ]
      },
      {
        "heading": "安静的村庄适合结束机场旅行日",
        "paragraphs": [
          "抵达后在城堡附近走走、吃饭或看村景已经很合适。返程时请进入独立的 [[奥塔西萨到内夫谢希尔机场班车|ortahisar-to-nevsehir-airport-shuttle]]，送机重点和接机不同。"
        ]
      }
    ],
    "faq": [
      {
        "q": "NAV 共享班车覆盖奥塔西萨吗？",
        "a": "覆盖支持区域内已确认住宿。"
      },
      {
        "q": "必须住城堡附近才能坐班车吗？",
        "a": "不需要，按实际住宿位置安排。"
      }
    ],
    "related": [
      "ortahisar-to-nevsehir-airport-shuttle",
      "kayseri-airport-to-ortahisar-shuttle",
      "nevsehir-airport-shuttle",
      "kayseri-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ]
  },
  {
    "slug": "nevsehir-airport-to-cavusin-shuttle",
    "title": "内夫谢希尔机场到恰武辛机场班车｜共享与私人接送",
    "description": "内夫谢希尔机场（NAV）到恰武辛约 42 km，通常 40–55 分钟。共享机场班车与私人 Vito/Sprinter，附这条路线自己的酒店道路和抵达建议。",
    "primaryKeyword": "内夫谢希尔机场到恰武辛接送",
    "secondaryKeywords": [
      "NAV到恰武辛",
      "恰武辛机场接送",
      "卡帕多奇亚机场到恰武辛",
      "内夫谢希尔机场恰武辛拼车",
      "内夫谢希尔机场恰武辛包车"
    ],
    "eyebrow": "NAV → 恰武辛 机场班车",
    "h1": "内夫谢希尔机场到恰武辛机场班车",
    "lead": "内夫谢希尔机场（NAV）到恰武辛的机场班车。上方路线摘要先给出距离、正常公路时间和当前拼车/私人车价格；下方只保留这条路线真正有用的本地信息。",
    "route": {
      "airport": "nevsehir",
      "town": "cavusin",
      "direction": "arrival"
    },
    "sections": [
      {
        "heading": "NAV 到恰武辛不远，但村庄有自己的道路逻辑",
        "paragraphs": [
          "正常约 **42 km / 40-55 分钟**。住宿可能在主路、老村或靠近山谷入口，因此不能把 Cavusin 当成格雷梅的一个随意停靠点。"
        ]
      },
      {
        "heading": "清晨热气球是本地变量，不是机场距离问题",
        "paragraphs": [
          "部分清晨村庄和山谷附近交通更活跃。入住后可以轻松逛老村；红谷和玫瑰谷则适合有足够日光时单独安排。"
        ]
      },
      {
        "heading": "ASR 航班更合适时，长一点也可以接受",
        "paragraphs": [
          "另一条路线是 [[开塞利机场到恰武辛班车|kayseri-airport-to-cavusin-shuttle]]。两座机场拼车价格相同，航班时间有时比最短公路更重要。"
        ]
      }
    ],
    "faq": [
      {
        "q": "恰武辛和格雷梅是同一个班车住宿区吗？",
        "a": "不是，两个地方靠得近，但酒店道路不同。"
      }
    ],
    "related": [
      "cavusin-to-nevsehir-airport-shuttle",
      "kayseri-airport-to-cavusin-shuttle",
      "nevsehir-airport-shuttle",
      "kayseri-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ]
  },
  {
    "slug": "goreme-to-kayseri-airport-shuttle",
    "title": "格雷梅到开塞利机场机场班车｜酒店送机",
    "description": "格雷梅到开塞利机场（ASR）约 75 km，通常 60–75 分钟。共享机场班车与私人接送，附这条送机路线自己的接车和当地时间安排。",
    "primaryKeyword": "格雷梅到开塞利机场",
    "secondaryKeywords": [
      "格雷梅机场班车",
      "格雷梅送机",
      "格雷梅到ASR",
      "格雷梅酒店到机场",
      "格雷梅开塞利机场包车"
    ],
    "eyebrow": "格雷梅 → ASR 机场班车",
    "h1": "格雷梅到开塞利机场机场班车",
    "lead": "格雷梅到开塞利机场（ASR）的酒店送机班车。上方先看距离、时间和价格；下方内容只处理这座城镇到该机场的实际离境安排。",
    "route": {
      "airport": "kayseri",
      "town": "goreme",
      "direction": "return"
    },
    "sections": [
      {
        "heading": "从格雷梅去 ASR，需要比地图时间更完整的余量",
        "paragraphs": [
          "格雷梅到开塞利机场约 **75 km / 60-75 分钟**。ASR 公路更长，共享接客和机场手续都不在单纯地图车程里，因此以确认接车时间为准。"
        ]
      },
      {
        "heading": "最后几小时留在行李附近最省心",
        "paragraphs": [
          "晚班机前可以吃早餐、喝咖啡、逛中心或去很近的观景点；山谷徒步不适合卡在固定送机时间前。若离开 NAV，请用 [[格雷梅到内夫谢希尔机场班车|goreme-to-nevsehir-airport-shuttle]]。两座机场一起比较可看 [[格雷梅机场接送|goreme-airport-transfer]]。"
        ]
      }
    ],
    "faq": [
      {
        "q": "为什么接车会比 60-75 分钟车程提前很多？",
        "a": "因为共享接客和机场办理需要额外时间。"
      },
      {
        "q": "送机前适合做什么？",
        "a": "选择可以随时结束、离酒店和行李很近的活动。"
      }
    ],
    "related": [
      "kayseri-airport-to-goreme-shuttle",
      "goreme-airport-transfer",
      "kayseri-airport-shuttle",
      "cappadocia-to-kayseri-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ]
  },
  {
    "slug": "urgup-to-kayseri-airport-shuttle",
    "title": "于尔居普到开塞利机场机场班车｜酒店送机",
    "description": "于尔居普到开塞利机场（ASR）约 70 km，通常 60–75 分钟。共享机场班车与私人接送，附这条送机路线自己的接车和当地时间安排。",
    "primaryKeyword": "于尔居普到开塞利机场",
    "secondaryKeywords": [
      "于尔居普机场班车",
      "于尔居普送机",
      "于尔居普到ASR",
      "于尔居普酒店到机场",
      "于尔居普开塞利机场包车"
    ],
    "eyebrow": "于尔居普 → ASR 机场班车",
    "h1": "于尔居普到开塞利机场机场班车",
    "lead": "于尔居普到开塞利机场（ASR）的酒店送机班车。上方先看距离、时间和价格；下方内容只处理这座城镇到该机场的实际离境安排。",
    "route": {
      "airport": "kayseri",
      "town": "urgup",
      "direction": "return"
    },
    "sections": [
      {
        "heading": "真正容易出问题的是离开于尔居普的前几分钟",
        "paragraphs": [
          "出镇后去开塞利的公路比较直接，但于尔居普住宿分散在中心和坡地老区。请按确认位置准备行李，不要默认车辆能在每条历史小路等待。"
        ]
      },
      {
        "heading": "ASR 路程较长，最后活动不要再跨镇",
        "paragraphs": [
          "正常参考约 **70 km / 60-75 分钟**。餐厅、购物或 Temenni 附近短走都容易结束；酒庄或远距离景点更难控制。接机方向见 [[开塞利机场到于尔居普班车|kayseri-airport-to-urgup-shuttle]]，较短送机路线见 [[于尔居普到内夫谢希尔机场班车|urgup-to-nevsehir-airport-shuttle]]。"
        ]
      },
      {
        "heading": "清晨接车时，于尔居普中心区有一个实际优势",
        "paragraphs": [
          "中心住宿通常更容易到普通道路；坡地历史酒店则可能需要多走几分钟到确认车辆位置。早班机前把行李前一晚整理好，比再增加一个活动更有价值。"
        ]
      }
    ],
    "faq": [
      {
        "q": "于尔居普洞穴酒店可以拼车送 ASR 吗？",
        "a": "支持区域内可以，实际集合点按酒店道路确认。"
      }
    ],
    "related": [
      "kayseri-airport-to-urgup-shuttle",
      "kayseri-airport-shuttle",
      "cappadocia-to-kayseri-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ]
  },
  {
    "slug": "uchisar-to-kayseri-airport-shuttle",
    "title": "乌奇希萨尔到开塞利机场机场班车｜酒店送机",
    "description": "乌奇希萨尔到开塞利机场（ASR）约 80 km，通常 70–85 分钟。共享机场班车与私人接送，附这条送机路线自己的接车和当地时间安排。",
    "primaryKeyword": "乌奇希萨尔到开塞利机场",
    "secondaryKeywords": [
      "乌奇希萨尔机场班车",
      "乌奇希萨尔送机",
      "乌奇希萨尔到ASR",
      "乌奇希萨尔酒店到机场",
      "乌奇希萨尔开塞利机场包车"
    ],
    "eyebrow": "乌奇希萨尔 → ASR 机场班车",
    "h1": "乌奇希萨尔到开塞利机场机场班车",
    "lead": "乌奇希萨尔到开塞利机场（ASR）的酒店送机班车。上方先看距离、时间和价格；下方内容只处理这座城镇到该机场的实际离境安排。",
    "route": {
      "airport": "kayseri",
      "town": "uchisar",
      "direction": "return"
    },
    "sections": [
      {
        "heading": "乌奇希萨尔出发位置高，ASR 又在较远的东侧",
        "paragraphs": [
          "正常约 **80 km / 70-85 分钟**，属于中心区域最长的机场路线之一。坡地接车加上长公路，使准时到集合点特别重要。"
        ]
      },
      {
        "heading": "城堡附近可以控制，鸽子谷很难控制",
        "paragraphs": [
          "最后喝咖啡、看露台或在城堡附近短走都容易结束；鸽子谷徒步可能让你在接车时还离行李很远。若航班从 NAV 出发，请看 [[乌奇希萨尔到内夫谢希尔机场班车|uchisar-to-nevsehir-airport-shuttle]]。"
        ]
      }
    ],
    "faq": [
      {
        "q": "乌奇希萨尔到 ASR 是不是很远？",
        "a": "正常参考约 80 km / 70-85 分钟。"
      },
      {
        "q": "坡地酒店接车怎么办？",
        "a": "按确认的可通车位置提前带好行李等待。"
      }
    ],
    "related": [
      "kayseri-airport-to-uchisar-shuttle",
      "kayseri-airport-shuttle",
      "cappadocia-to-kayseri-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ]
  },
  {
    "slug": "avanos-to-kayseri-airport-shuttle",
    "title": "阿瓦诺斯到开塞利机场机场班车｜酒店送机",
    "description": "阿瓦诺斯到开塞利机场（ASR）约 70 km，通常 60–75 分钟。共享机场班车与私人接送，附这条送机路线自己的接车和当地时间安排。",
    "primaryKeyword": "阿瓦诺斯到开塞利机场",
    "secondaryKeywords": [
      "阿瓦诺斯机场班车",
      "阿瓦诺斯送机",
      "阿瓦诺斯到ASR",
      "阿瓦诺斯酒店到机场",
      "阿瓦诺斯开塞利机场包车"
    ],
    "eyebrow": "阿瓦诺斯 → ASR 机场班车",
    "h1": "阿瓦诺斯到开塞利机场机场班车",
    "lead": "阿瓦诺斯到开塞利机场（ASR）的酒店送机班车。上方先看距离、时间和价格；下方内容只处理这座城镇到该机场的实际离境安排。",
    "route": {
      "airport": "kayseri",
      "town": "avanos",
      "direction": "return"
    },
    "sections": [
      {
        "heading": "阿瓦诺斯去 ASR，先别在河两岸来回折腾",
        "paragraphs": [
          "正常约 **70 km / 60-75 分钟**。离开城镇后公路相对直接，所以出发前明确酒店位置可以避免不必要的跨河绕行。"
        ]
      },
      {
        "heading": "最后一段自由时间留给河边比再去一个城镇更好",
        "paragraphs": [
          "河边散步、附近陶艺店或中心吃饭都容易按时结束。若航班从 NAV 离开，改看 [[阿瓦诺斯到内夫谢希尔机场班车|avanos-to-nevsehir-airport-shuttle]]。"
        ]
      },
      {
        "heading": "不要在送机前临时换到河对岸等车",
        "paragraphs": [
          "阿瓦诺斯被河流分成两侧。临时决定去另一侧等待，可能在机场公路开始前就增加一次不必要的过桥。按预订确认的住宿一侧等车更简单。"
        ]
      }
    ],
    "faq": [
      {
        "q": "可以从阿瓦诺斯酒店拼车去 ASR 吗？",
        "a": "可以，支持区域内住宿可以预订。"
      },
      {
        "q": "能不能在去机场路上顺便停陶艺店？",
        "a": "标准共享班车不是带观光停留的包车服务。"
      }
    ],
    "related": [
      "kayseri-airport-to-avanos-shuttle",
      "kayseri-airport-shuttle",
      "cappadocia-to-kayseri-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ]
  },
  {
    "slug": "ortahisar-to-kayseri-airport-shuttle",
    "title": "奥塔西萨到开塞利机场机场班车｜酒店送机",
    "description": "奥塔西萨到开塞利机场（ASR）约 75 km，通常 60–75 分钟。共享机场班车与私人接送，附这条送机路线自己的接车和当地时间安排。",
    "primaryKeyword": "奥塔西萨到开塞利机场",
    "secondaryKeywords": [
      "奥塔西萨机场班车",
      "奥塔西萨送机",
      "奥塔西萨到ASR",
      "奥塔西萨酒店到机场",
      "奥塔西萨开塞利机场包车"
    ],
    "eyebrow": "奥塔西萨 → ASR 机场班车",
    "h1": "奥塔西萨到开塞利机场机场班车",
    "lead": "奥塔西萨到开塞利机场（ASR）的酒店送机班车。上方先看距离、时间和价格；下方内容只处理这座城镇到该机场的实际离境安排。",
    "route": {
      "airport": "kayseri",
      "town": "ortahisar",
      "direction": "return"
    },
    "sections": [
      {
        "heading": "小村接车之后才是较长的开塞利公路",
        "paragraphs": [
          "奥塔西萨到 ASR 约 **75 km / 60-75 分钟**。老村道路会影响开始几分钟，因此先按真实住宿确认集合位置。"
        ]
      },
      {
        "heading": "最后一小时留在奥塔西萨本身",
        "paragraphs": [
          "城堡附近、咖啡馆或短村路都容易控制。不要在固定机场接车前临时增加山谷行程。NAV 路线见 [[奥塔西萨到内夫谢希尔机场班车|ortahisar-to-nevsehir-airport-shuttle]]；反向接机见 [[开塞利机场到奥塔西萨班车|kayseri-airport-to-ortahisar-shuttle]]。"
        ]
      },
      {
        "heading": "村庄安静，不代表共享班车可以长时间等待",
        "paragraphs": [
          "共享车辆仍可能同时协调其他乘客和 ASR 航班。接车窗口前把行李准备好，避免老村小路上的延迟继续影响后面较长的机场路程。"
        ]
      }
    ],
    "faq": [
      {
        "q": "为什么奥塔西萨去 ASR 要提前准备？",
        "a": "老村接客之后还有较长机场公路，并可能包含其他共享乘客。"
      },
      {
        "q": "城堡是不是固定接车点？",
        "a": "不是，按已确认住宿或附近可通车位置安排。"
      }
    ],
    "related": [
      "kayseri-airport-to-ortahisar-shuttle",
      "kayseri-airport-shuttle",
      "cappadocia-to-kayseri-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ]
  },
  {
    "slug": "cavusin-to-kayseri-airport-shuttle",
    "title": "恰武辛到开塞利机场机场班车｜酒店送机",
    "description": "恰武辛到开塞利机场（ASR）约 75 km，通常 65–80 分钟。共享机场班车与私人接送，附这条送机路线自己的接车和当地时间安排。",
    "primaryKeyword": "恰武辛到开塞利机场",
    "secondaryKeywords": [
      "恰武辛机场班车",
      "恰武辛送机",
      "恰武辛到ASR",
      "恰武辛酒店到机场",
      "恰武辛开塞利机场包车"
    ],
    "eyebrow": "恰武辛 → ASR 机场班车",
    "h1": "恰武辛到开塞利机场机场班车",
    "lead": "恰武辛到开塞利机场（ASR）的酒店送机班车。上方先看距离、时间和价格；下方内容只处理这座城镇到该机场的实际离境安排。",
    "route": {
      "airport": "kayseri",
      "town": "cavusin",
      "direction": "return"
    },
    "sections": [
      {
        "heading": "红谷和玫瑰谷不适合变成 ASR 倒计时",
        "paragraphs": [
          "恰武辛到开塞利机场约 **75 km / 65-80 分钟**。山谷徒步无法随时结束，因此不适合压在固定送机前。"
        ]
      },
      {
        "heading": "清晨先控制村庄接车，再走长公路",
        "paragraphs": [
          "热气球活动日的清晨，本地道路可能更忙。离开恰武辛后路线会更稳定，所以最能控制的是按时到确认集合点。更近的机场路线见 [[恰武辛到内夫谢希尔机场班车|cavusin-to-nevsehir-airport-shuttle]]。"
        ]
      },
      {
        "heading": "老村、主路和山谷方向不是同一种接车环境",
        "paragraphs": [
          "恰武辛住宿可能靠主路、老村或山谷入口。送机早晨这些位置差异很重要，因为车辆不应该在村里寻找乘客后才开始较长的开塞利路程。"
        ]
      }
    ],
    "faq": [
      {
        "q": "送 ASR 前适合走长山谷吗？",
        "a": "不建议，步行时间很难和固定机场接车准确配合。"
      }
    ],
    "related": [
      "kayseri-airport-to-cavusin-shuttle",
      "kayseri-airport-shuttle",
      "cappadocia-to-kayseri-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ]
  },
  {
    "slug": "goreme-to-nevsehir-airport-shuttle",
    "title": "格雷梅到内夫谢希尔机场机场班车｜酒店送机",
    "description": "格雷梅到内夫谢希尔机场（NAV）约 40 km，通常 35–45 分钟。共享机场班车与私人接送，附这条送机路线自己的接车和当地时间安排。",
    "primaryKeyword": "格雷梅到内夫谢希尔机场",
    "secondaryKeywords": [
      "格雷梅机场班车",
      "格雷梅送机",
      "格雷梅到NAV",
      "格雷梅酒店到机场",
      "格雷梅内夫谢希尔机场包车"
    ],
    "eyebrow": "格雷梅 → NAV 机场班车",
    "h1": "格雷梅到内夫谢希尔机场机场班车",
    "lead": "格雷梅到内夫谢希尔机场（NAV）的酒店送机班车。上方先看距离、时间和价格；下方内容只处理这座城镇到该机场的实际离境安排。",
    "route": {
      "airport": "nevsehir",
      "town": "goreme",
      "direction": "return"
    },
    "sections": [
      {
        "heading": "NAV 更近，应该让送机更从容，而不是更晚出发",
        "paragraphs": [
          "格雷梅到 NAV 约 **40 km / 35-45 分钟**。公路短是优势，但酒店收客和机场手续仍不属于地图直达时间。"
        ]
      },
      {
        "heading": "附近观景点可以，长山谷路线仍然不适合",
        "paragraphs": [
          "咖啡、露台或中心短走都能随时结束；长步道可能让你在接车时离酒店太远。ASR 送机见 [[格雷梅到开塞利机场班车|goreme-to-kayseri-airport-shuttle]]，综合比较见 [[格雷梅机场接送|goreme-airport-transfer]]。"
        ]
      },
      {
        "heading": "NAV 公路很短，但洞穴酒店坡路仍会占用时间",
        "paragraphs": [
          "上坡住宿的本地收客可能发生在离开格雷梅之前。早班机时应把行李集中好并按约定位置等待，不要认为机场近就能抵消迟到。"
        ]
      }
    ],
    "faq": [
      {
        "q": "格雷梅到 NAV 多远？",
        "a": "正常参考约 40 km / 35-45 分钟。"
      }
    ],
    "related": [
      "nevsehir-airport-to-goreme-shuttle",
      "goreme-airport-transfer",
      "nevsehir-airport-shuttle",
      "cappadocia-to-kayseri-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ]
  },
  {
    "slug": "urgup-to-nevsehir-airport-shuttle",
    "title": "于尔居普到内夫谢希尔机场机场班车｜酒店送机",
    "description": "于尔居普到内夫谢希尔机场（NAV）约 50 km，通常 45–60 分钟。共享机场班车与私人接送，附这条送机路线自己的接车和当地时间安排。",
    "primaryKeyword": "于尔居普到内夫谢希尔机场",
    "secondaryKeywords": [
      "于尔居普机场班车",
      "于尔居普送机",
      "于尔居普到NAV",
      "于尔居普酒店到机场",
      "于尔居普内夫谢希尔机场包车"
    ],
    "eyebrow": "于尔居普 → NAV 机场班车",
    "h1": "于尔居普到内夫谢希尔机场机场班车",
    "lead": "于尔居普到内夫谢希尔机场（NAV）的酒店送机班车。上方先看距离、时间和价格；下方内容只处理这座城镇到该机场的实际离境安排。",
    "route": {
      "airport": "nevsehir",
      "town": "urgup",
      "direction": "return"
    },
    "sections": [
      {
        "heading": "NAV 对于尔居普更近，但仍不是几分钟就到",
        "paragraphs": [
          "正常约 **50 km / 45-60 分钟**，比 ASR 短，但没有乌奇希萨尔到 NAV 那么近。"
        ]
      },
      {
        "heading": "最后活动留在镇内最好控制",
        "paragraphs": [
          "早餐、咖啡、购物或 Temenni 附近短走都容易按时结束。酒庄或跨镇行程会增加新的交通变量。若从 ASR 离开，使用 [[于尔居普到开塞利机场班车|urgup-to-kayseri-airport-shuttle]]。"
        ]
      },
      {
        "heading": "地图能看清 NAV 公路，却看不出每家老城酒店入口",
        "paragraphs": [
          "真正的送机计划从住宿可达位置开始，再进入去 NAV 的区域公路。历史街区酒店和普通道路酒店在前几分钟可能完全不同。"
        ]
      }
    ],
    "faq": [
      {
        "q": "NAV 通常是于尔居普更近的机场吗？",
        "a": "按本站公路参考是，但最终仍要比较航班时间和票价。"
      },
      {
        "q": "可以私人车送 NAV 吗？",
        "a": "可以，Vito 和 Sprinter 都可以替代共享拼车。"
      }
    ],
    "related": [
      "nevsehir-airport-to-urgup-shuttle",
      "kayseri-airport-to-urgup-shuttle",
      "nevsehir-airport-shuttle",
      "cappadocia-to-kayseri-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ]
  },
  {
    "slug": "uchisar-to-nevsehir-airport-shuttle",
    "title": "乌奇希萨尔到内夫谢希尔机场机场班车｜酒店送机",
    "description": "乌奇希萨尔到内夫谢希尔机场（NAV）约 35 km，通常 30–40 分钟。共享机场班车与私人接送，附这条送机路线自己的接车和当地时间安排。",
    "primaryKeyword": "乌奇希萨尔到内夫谢希尔机场",
    "secondaryKeywords": [
      "乌奇希萨尔机场班车",
      "乌奇希萨尔送机",
      "乌奇希萨尔到NAV",
      "乌奇希萨尔酒店到机场",
      "乌奇希萨尔内夫谢希尔机场包车"
    ],
    "eyebrow": "乌奇希萨尔 → NAV 机场班车",
    "h1": "乌奇希萨尔到内夫谢希尔机场机场班车",
    "lead": "乌奇希萨尔到内夫谢希尔机场（NAV）的酒店送机班车。上方先看距离、时间和价格；下方内容只处理这座城镇到该机场的实际离境安排。",
    "route": {
      "airport": "nevsehir",
      "town": "uchisar",
      "direction": "return"
    },
    "sections": [
      {
        "heading": "乌奇希萨尔到 NAV 公路最短，但接车从坡地开始",
        "paragraphs": [
          "正常约 **35 km / 30-40 分钟**。距离非常有优势，但仍要先从酒店到已确认车辆位置。"
        ]
      },
      {
        "heading": "不要把省下来的路程全部花在鸽子谷",
        "paragraphs": [
          "城堡附近咖啡或露台容易收尾；鸽子谷徒步不适合固定送机前。ASR 的长路线见 [[乌奇希萨尔到开塞利机场班车|uchisar-to-kayseri-airport-shuttle]]。"
        ]
      }
    ],
    "faq": [
      {
        "q": "30-40 分钟车程能不能直接用来自己算出发时间？",
        "a": "不能，这是公路参考，不等于共享收客加机场办理的完整时间。"
      },
      {
        "q": "城堡是不是统一接车点？",
        "a": "不是，按真实住宿或确认的附近位置接车。"
      }
    ],
    "related": [
      "nevsehir-airport-to-uchisar-shuttle",
      "kayseri-airport-to-uchisar-shuttle",
      "nevsehir-airport-shuttle",
      "cappadocia-to-kayseri-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ]
  },
  {
    "slug": "avanos-to-nevsehir-airport-shuttle",
    "title": "阿瓦诺斯到内夫谢希尔机场机场班车｜酒店送机",
    "description": "阿瓦诺斯到内夫谢希尔机场（NAV）约 38 km，通常 35–50 分钟。共享机场班车与私人接送，附这条送机路线自己的接车和当地时间安排。",
    "primaryKeyword": "阿瓦诺斯到内夫谢希尔机场",
    "secondaryKeywords": [
      "阿瓦诺斯机场班车",
      "阿瓦诺斯送机",
      "阿瓦诺斯到NAV",
      "阿瓦诺斯酒店到机场",
      "阿瓦诺斯内夫谢希尔机场包车"
    ],
    "eyebrow": "阿瓦诺斯 → NAV 机场班车",
    "h1": "阿瓦诺斯到内夫谢希尔机场机场班车",
    "lead": "阿瓦诺斯到内夫谢希尔机场（NAV）的酒店送机班车。上方先看距离、时间和价格；下方内容只处理这座城镇到该机场的实际离境安排。",
    "route": {
      "airport": "nevsehir",
      "town": "avanos",
      "direction": "return"
    },
    "sections": [
      {
        "heading": "NAV 路程短，所以阿瓦诺斯城内绕路反而更显眼",
        "paragraphs": [
          "正常约 **38 km / 35-50 分钟**。明确酒店在河哪一边，可以避免送机前不必要的跨城移动。"
        ]
      },
      {
        "heading": "最后河边散步很合适，因为随时能结束",
        "paragraphs": [
          "留在酒店和行李附近，河边或附近陶艺店都可以；不要因为 NAV 近就再安排一个跨镇景点。ASR 路线见 [[阿瓦诺斯到开塞利机场班车|avanos-to-kayseri-airport-shuttle]]。"
        ]
      },
      {
        "heading": "晚班 NAV 航班可以留出阿瓦诺斯本地时间",
        "paragraphs": [
          "退房后如果酒店可以寄存行李，河边、咖啡馆或附近陶艺店都容易安排。重点是保持在接车点附近，不要把最后几小时变成另一次跨区域行程。"
        ]
      }
    ],
    "faq": [
      {
        "q": "NAV 是阿瓦诺斯更近的机场吗？",
        "a": "按本站公路参考是。"
      }
    ],
    "related": [
      "nevsehir-airport-to-avanos-shuttle",
      "kayseri-airport-to-avanos-shuttle",
      "nevsehir-airport-shuttle",
      "cappadocia-to-kayseri-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ]
  },
  {
    "slug": "ortahisar-to-nevsehir-airport-shuttle",
    "title": "奥塔西萨到内夫谢希尔机场机场班车｜酒店送机",
    "description": "奥塔西萨到内夫谢希尔机场（NAV）约 45 km，通常 40–50 分钟。共享机场班车与私人接送，附这条送机路线自己的接车和当地时间安排。",
    "primaryKeyword": "奥塔西萨到内夫谢希尔机场",
    "secondaryKeywords": [
      "奥塔西萨机场班车",
      "奥塔西萨送机",
      "奥塔西萨到NAV",
      "奥塔西萨酒店到机场",
      "奥塔西萨内夫谢希尔机场包车"
    ],
    "eyebrow": "奥塔西萨 → NAV 机场班车",
    "h1": "奥塔西萨到内夫谢希尔机场机场班车",
    "lead": "奥塔西萨到内夫谢希尔机场（NAV）的酒店送机班车。上方先看距离、时间和价格；下方内容只处理这座城镇到该机场的实际离境安排。",
    "route": {
      "airport": "nevsehir",
      "town": "ortahisar",
      "direction": "return"
    },
    "sections": [
      {
        "heading": "奥塔西萨到 NAV 是安静村庄起步的中等路线",
        "paragraphs": [
          "正常约 **45 km / 40-50 分钟**。老村入口可能影响开始几分钟，但整体公路比 ASR 更短。"
        ]
      },
      {
        "heading": "奥塔西萨的优势就是最后一小时不用跑远",
        "paragraphs": [
          "留在城堡附近、咖啡馆或酒店即可，不需要再增加一段交通。如果航班从 ASR 出发，使用 [[奥塔西萨到开塞利机场班车|ortahisar-to-kayseri-airport-shuttle]]。"
        ]
      },
      {
        "heading": "NAV 更近，最好的用法是让最后一天更轻松",
        "paragraphs": [
          "奥塔西萨很紧凑，晚班机前可以把行李留在住宿并在附近活动，然后提前回到集合点。不要因为机场近就把活动范围扩大到难以按时返回的地方。"
        ]
      }
    ],
    "faq": [
      {
        "q": "可以自己改到奥塔西萨中心等车吗？",
        "a": "不要自行改变集合点，应按预订确认位置。"
      }
    ],
    "related": [
      "nevsehir-airport-to-ortahisar-shuttle",
      "kayseri-airport-to-ortahisar-shuttle",
      "nevsehir-airport-shuttle",
      "cappadocia-to-kayseri-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ]
  },
  {
    "slug": "cavusin-to-nevsehir-airport-shuttle",
    "title": "恰武辛到内夫谢希尔机场机场班车｜酒店送机",
    "description": "恰武辛到内夫谢希尔机场（NAV）约 42 km，通常 40–55 分钟。共享机场班车与私人接送，附这条送机路线自己的接车和当地时间安排。",
    "primaryKeyword": "恰武辛到内夫谢希尔机场",
    "secondaryKeywords": [
      "恰武辛机场班车",
      "恰武辛送机",
      "恰武辛到NAV",
      "恰武辛酒店到机场",
      "恰武辛内夫谢希尔机场包车"
    ],
    "eyebrow": "恰武辛 → NAV 机场班车",
    "h1": "恰武辛到内夫谢希尔机场机场班车",
    "lead": "恰武辛到内夫谢希尔机场（NAV）的酒店送机班车。上方先看距离、时间和价格；下方内容只处理这座城镇到该机场的实际离境安排。",
    "route": {
      "airport": "nevsehir",
      "town": "cavusin",
      "direction": "return"
    },
    "sections": [
      {
        "heading": "NAV 是恰武辛更轻松的机场距离",
        "paragraphs": [
          "正常约 **42 km / 40-55 分钟**。虽然比 ASR 短，但小村接车仍需要固定计划。"
        ]
      },
      {
        "heading": "最后几小时不要走进山谷深处",
        "paragraphs": [
          "老村或附近咖啡馆容易按时离开；红谷、玫瑰谷徒步不适合固定送机前。如果航班从开塞利离开，切换到 [[恰武辛到开塞利机场班车|cavusin-to-kayseri-airport-shuttle]]。"
        ]
      },
      {
        "heading": "村庄小，更需要把集合位置说清楚",
        "paragraphs": [
          "街道数量不多，但住宿仍可能分布在主路、老村和山谷一侧。明确集合位置可以避免一条本来不长的 NAV 路线因为找位置而浪费时间。"
        ]
      }
    ],
    "faq": [
      {
        "q": "清晨热气球会影响恰武辛送 NAV 吗？",
        "a": "部分日期会让本地道路更忙，因此按确认位置提前准备。"
      },
      {
        "q": "可以在山谷入口等机场车吗？",
        "a": "只有该位置明确被确认时才可以，否则按住宿或约定集合点。"
      }
    ],
    "related": [
      "nevsehir-airport-to-cavusin-shuttle",
      "kayseri-airport-to-cavusin-shuttle",
      "nevsehir-airport-shuttle",
      "cappadocia-to-kayseri-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ]
  },
  {
    "slug": "cappadocia-airport",
    "title": "卡帕多奇亚机场指南｜NAV 与 ASR 怎么选",
    "description": "卡帕多奇亚机场指南：内夫谢希尔 NAV 与开塞利 ASR 的位置、代码、到格雷梅等地距离、€15 机场班车与私人接送。",
    "primaryKeyword": "卡帕多奇亚机场",
    "secondaryKeywords": [
      "卡帕多奇亚最近机场",
      "Cappadocia airport",
      "卡帕多奇亚机场代码",
      "NAV ASR",
      "格雷梅机场"
    ],
    "eyebrow": "机场入门指南",
    "h1": "卡帕多奇亚机场：NAV、ASR 与酒店接送",
    "lead": "卡帕多奇亚没有一个叫“Cappadocia Airport”且覆盖所有游客的单一机场。大多数行程会在 NAV 和 ASR 之间选择。",
    "sections": [
      {
        "heading": "两座主要机场：NAV 与 ASR",
        "paragraphs": [
          "NAV 是内夫谢希尔卡帕多奇亚机场，ASR 是开塞利埃尔基莱特机场。两座机场都可以预订 €15/人的酒店拼车和私人接送。"
        ]
      },
      {
        "heading": "哪座机场离格雷梅更近",
        "paragraphs": [
          "NAV 到格雷梅约 40 km / 35–45 分钟，ASR 约 75 km / 60–75 分钟。距离上 NAV 更近，但航班班次和票价可能使 ASR 更合适。"
        ]
      },
      {
        "heading": "其他城镇的距离也不同",
        "paragraphs": [
          "乌奇希萨尔从 NAV 约 35 km，是较短组合；于尔居普从 NAV 约 50 km；ASR 到多个中心城镇约 70–80 km。具体路线应按酒店城镇查看。"
        ]
      },
      {
        "heading": "机场代码不要填错",
        "paragraphs": [
          "机票上看到 ASR 就选择开塞利；看到 NAV 就选择内夫谢希尔。不存在常规商业机场代码“CAPP”。"
        ]
      },
      {
        "heading": "从机场到酒店的两种选择",
        "paragraphs": [
          "共享班车 €15/人/单程；私人 Vito/Sprinter 按机场与整车定价。"
        ]
      },
      {
        "heading": "购买机票前可以先比较",
        "paragraphs": [
          "如果两座机场都有合适航班，查看 [[离卡帕多奇亚最近的机场|nearest-airport-to-cappadocia]] 和 [[开塞利还是内夫谢希尔|kayseri-or-nevsehir-airport-for-cappadocia]]。"
        ]
      },
      {
        "heading": "“卡帕多奇亚机场”不等于“离卡帕多奇亚最近的机场”",
        "paragraphs": [
          "“Cappadocia Airport”既可能指 NAV 的正式名称 Nevsehir Kapadokya Airport，也可能只是游客在问区域应该飞哪里。本页会简要解释预订需要的 NAV / ASR 代码；[[最近机场|nearest-airport-to-cappadocia]] 则单独回答哪座机场公路更近。"
        ]
      },
      {
        "heading": "预订时最终以机票上的机场代码为准",
        "paragraphs": [
          "搜索词可以写得很宽泛，接送操作却不能。NAV 和 ASR 的航站楼、道路距离以及私人车价格不同；下单时要选择机票实际显示的代码，再填写真实酒店城镇，不能只写“Cappadocia Airport”。"
        ]
      }
    ],
    "faq": [
      {
        "q": "卡帕多奇亚机场代码是什么？",
        "a": "主要使用 NAV 和 ASR。"
      },
      {
        "q": "哪个机场离格雷梅近？",
        "a": "NAV 更近。"
      },
      {
        "q": "ASR 还能去卡帕多奇亚吗？",
        "a": "可以，而且航班选择有时更方便。"
      },
      {
        "q": "两座机场都有拼车吗？",
        "a": "有，都是 €15/人/单程。"
      },
      {
        "q": "卡帕多奇亚只有一座机场吗？",
        "a": "不是，游客主要使用 NAV 和 ASR 两座机场。"
      },
      {
        "q": "搜索“Cappadocia Airport”时一定指 NAV 吗？",
        "a": "不一定。NAV 的正式名称包含 Kapadokya，但旅行规划语境也常泛指服务卡帕多奇亚的机场。"
      },
      {
        "q": "预订接送应该看机场名字还是代码？",
        "a": "优先核对机票上的 NAV 或 ASR 代码。"
      },
      {
        "q": "两座机场都能到六个主要住宿区吗？",
        "a": "可以，本站拼车覆盖格雷梅、于尔居普、乌奇希萨尔、阿瓦诺斯、奥塔西萨和恰武辛。"
      }
    ],
    "related": [
      "nearest-airport-to-cappadocia",
      "kayseri-or-nevsehir-airport-for-cappadocia",
      "nevsehir-airport-shuttle",
      "kayseri-airport-shuttle",
      "cappadocia-airport-transfer"
    ]
  },
  {
    "slug": "nearest-airport-to-cappadocia",
    "title": "离卡帕多奇亚最近的机场｜NAV 还是 ASR",
    "description": "离卡帕多奇亚最近的机场通常是内夫谢希尔 NAV，但开塞利 ASR 也常用于格雷梅等地。比较距离、航班与机场接送。",
    "primaryKeyword": "离卡帕多奇亚最近的机场",
    "secondaryKeywords": [
      "卡帕多奇亚最近机场",
      "closest airport to Cappadocia",
      "格雷梅最近机场",
      "NAV 机场",
      "ASR 机场"
    ],
    "eyebrow": "机场距离比较",
    "h1": "离卡帕多奇亚最近的机场",
    "lead": "如果只看公路距离，NAV 通常更接近卡帕多奇亚中部；如果看完整旅行时间，ASR 的航班安排也可能更优。",
    "sections": [
      {
        "heading": "NAV 通常是距离更近的答案",
        "paragraphs": [
          "例如 NAV 到格雷梅约 40 km，到乌奇希萨尔约 35 km。对已经有合适 NAV 航班的游客来说，机场到酒店的公路段通常更短。"
        ]
      },
      {
        "heading": "ASR 为什么仍然被大量游客使用",
        "paragraphs": [
          "开塞利 ASR 距离更远，但可能有更合适的直飞、时刻或价格。如果为了“更近”而选择不方便的航班，整体旅行时间反而可能更长。"
        ]
      },
      {
        "heading": "目的地不同，距离排序也要具体看",
        "paragraphs": [
          "格雷梅、于尔居普、乌奇希萨尔、阿瓦诺斯、奥塔西萨、恰武辛到两座机场的距离并不完全一样。本站各目的地页面都列出对应公里和时间。"
        ]
      },
      {
        "heading": "机场接送价格如何比较",
        "paragraphs": [
          "共享班车两座机场都 €15/人，所以拼车价格不会因为选择 NAV 而更便宜。私人车 NAV 比 ASR 价格低一些。"
        ]
      },
      {
        "heading": "最终选择机场的实用顺序",
        "paragraphs": [
          "先看可用航班和落地时间，再看公路距离和私人车价格，最后确认酒店所在城镇。"
        ]
      },
      {
        "heading": "对乌奇希萨尔、格雷梅和于尔居普，最近距离也不完全相同",
        "paragraphs": [
          "NAV 到乌奇希萨尔约 35 km、到格雷梅约 40 km、到于尔居普约 50 km；ASR 对应约 80 km、75 km 和 70 km。NAV 多数情况下更近，但“最近”仍应落到具体住宿城镇，而不是区域中心的一个虚拟点。"
        ]
      },
      {
        "heading": "私人车 NAV 更便宜，但拼车两座机场同价",
        "paragraphs": [
          "从 NAV 私人 Vito / Sprinter 为 €80 / €90，从 ASR 为 €90 / €110；共享班车则两座机场都是 €15/人。若选择拼车，机票时间与整体行程往往比这段道路价差更值得优先考虑。"
        ]
      }
    ],
    "faq": [
      {
        "q": "离格雷梅最近的是 NAV 吗？",
        "a": "通常是，约 40 km。"
      },
      {
        "q": "ASR 会不会太远？",
        "a": "不会，仍是非常常见的卡帕多奇亚机场，只是公路段更长。"
      },
      {
        "q": "拼车两座机场同价吗？",
        "a": "是，€15/人/单程。"
      },
      {
        "q": "离乌奇希萨尔最近的机场是哪座？",
        "a": "通常 NAV，公路约35 km。"
      },
      {
        "q": "最近的机场一定是最适合购买机票的吗？",
        "a": "不一定，还应比较航班时刻、转机和票价。"
      },
      {
        "q": "NAV 更近，所以拼车也更便宜吗？",
        "a": "不是，两座机场共享班车都是 €15/人/单程。"
      }
    ],
    "related": [
      "cappadocia-airport",
      "kayseri-or-nevsehir-airport-for-cappadocia",
      "kayseri-airport-shuttle",
      "nevsehir-airport-shuttle"
    ]
  },
  {
    "slug": "kayseri-or-nevsehir-airport-for-cappadocia",
    "title": "卡帕多奇亚选开塞利还是内夫谢希尔机场？",
    "description": "开塞利 ASR 与内夫谢希尔 NAV 怎么选：比较到格雷梅等地距离、航班便利、€15 拼车和私人接送价格。",
    "primaryKeyword": "卡帕多奇亚开塞利还是内夫谢希尔机场",
    "secondaryKeywords": [
      "Kayseri vs Nevsehir airport",
      "卡帕多奇亚选哪个机场",
      "NAV ASR 比较",
      "格雷梅机场选择"
    ],
    "eyebrow": "NAV vs ASR",
    "h1": "卡帕多奇亚：开塞利还是内夫谢希尔机场？",
    "lead": "NAV 距离更近，ASR 航班有时更方便。正确选择不是只看地图，而是把航班、酒店城镇和接送方式一起比较。",
    "sections": [
      {
        "heading": "距离：NAV 通常占优势",
        "paragraphs": [
          "NAV 到格雷梅约 40 km，ASR 约 75 km；到乌奇希萨尔 NAV 约 35 km，ASR 约 80 km。"
        ]
      },
      {
        "heading": "航班：ASR 有时更有优势",
        "paragraphs": [
          "如果 ASR 有更合适的直飞或到达时间，即使多坐几十分钟车，也可能比在伊斯坦布尔长时间等待转机更舒服。"
        ]
      },
      {
        "heading": "拼车价格：两座机场一样",
        "paragraphs": [
          "共享班车都是 €15/人/单程，因此不能只凭拼车价格决定机场。"
        ]
      },
      {
        "heading": "私人车：NAV 价格更低",
        "paragraphs": [
          "NAV Vito €80 / Sprinter €90；ASR Vito €90 / Sprinter €110。"
        ]
      },
      {
        "heading": "最终建议",
        "paragraphs": [
          "已经买票就按机票机场预订接送；还没买票时，先比较航班总时间，再用距离和私人车价格做第二层判断。"
        ]
      },
      {
        "heading": "城镇不同，机场比较也要按目的地重新看",
        "paragraphs": [
          "NAV 对乌奇希萨尔和格雷梅的距离优势非常明显，于尔居普则与其他 NAV 路线相比更远一些。ASR 各核心城镇多在约 70–80 km 范围。已经确定酒店后，用具体城镇的数据比只比较两个机场名称更有意义。"
        ]
      },
      {
        "heading": "抵达与离开使用不同机场需要特别确认",
        "paragraphs": [
          "完全可以 NAV 抵达、ASR 离开，或反过来；但两段私人价格不同，也不能简单视为一个标准同机场往返。表单或 WhatsApp 中应分别写出两段机场和航班，以免系统沿用错误价格。"
        ]
      }
    ],
    "faq": [
      {
        "q": "第一次去卡帕多奇亚更推荐 NAV 吗？",
        "a": "如果航班条件相近，NAV 的短公路距离更方便。"
      },
      {
        "q": "ASR 到格雷梅很麻烦吗？",
        "a": "不麻烦，只是车程更长，约 60–75 分钟。"
      },
      {
        "q": "可以 NAV 到达、ASR 离开吗？",
        "a": "可以，但两段应分别确认，因为路线和私人价格不同。"
      },
      {
        "q": "如果 ASR 航班便宜很多，还值得选 ASR 吗？",
        "a": "可能值得。应比较机票差价、到达时间和多出的公路时间，而不是只看机场距离。"
      },
      {
        "q": "可以一程 NAV、一程 ASR 吗？",
        "a": "可以，但两段必须分别确认，尤其私人价格不同。"
      }
    ],
    "related": [
      "nearest-airport-to-cappadocia",
      "kayseri-airport-shuttle",
      "nevsehir-airport-shuttle",
      "airport-transfer-prices"
    ]
  },
  {
    "slug": "cappadocia-shared-shuttle-vs-private-transfer",
    "title": "卡帕多奇亚拼车还是私人接送｜价格与适合人群",
    "description": "卡帕多奇亚机场拼车 vs 私人接送：€15/人共享班车与 Vito/Sprinter 包车的价格、时间、酒店停靠、团队人数与行李差异。",
    "primaryKeyword": "卡帕多奇亚拼车还是私人接送",
    "secondaryKeywords": [
      "卡帕多奇亚拼车",
      "卡帕多奇亚包车",
      "shared shuttle Cappadocia",
      "private transfer Cappadocia",
      "机场班车对比"
    ],
    "eyebrow": "服务方式对比",
    "h1": "卡帕多奇亚拼车 vs 私人机场接送",
    "lead": "没有一种方式适合所有人。拼车最大的优势是价格，私人接送最大的优势是路线更直接和车辆独立使用。",
    "sections": [
      {
        "heading": "拼车：€15/人最适合控制预算",
        "paragraphs": [
          "从 ASR 或 NAV 都是 €15/人/单程，适合个人、情侣或不介意同车其他酒店停靠的游客。"
        ]
      },
      {
        "heading": "私人车：按整车计价",
        "paragraphs": [
          "Vito 最多5人，ASR €90 / NAV €80；Sprinter 最多16人，ASR €110 / NAV €90。多人分摊后，私人车的人均差距会缩小。"
        ]
      },
      {
        "heading": "时间差来自哪里",
        "paragraphs": [
          "私人车机场会合后直接前往你的酒店；拼车可能等待兼容航班的乘客并经过其他酒店。"
        ]
      },
      {
        "heading": "行李与团队人数",
        "paragraphs": [
          "人数接近 Vito 或 Sprinter 上限、或者行李很多时，应提前说明。车辆容量是乘客上限，不代表任何行李组合都无需确认。"
        ]
      },
      {
        "heading": "洞穴酒店道路对两种服务都有效",
        "paragraphs": [
          "私人车更灵活，但老街、台阶和禁止停靠区域仍然存在。具体酒店入口必须确认。"
        ]
      },
      {
        "heading": "如何选择",
        "paragraphs": [
          "1–2 人优先预算通常选拼车；家庭、小团体、时间要求高或希望直达更适合私人车。"
        ]
      },
      {
        "heading": "人数接近车型上限时，用总价比较更清楚",
        "paragraphs": [
          "1–2 人只看价格时，€15/人的拼车通常优势明显；人数增加后，私人整车的人均差距会缩小。例如 NAV 6 人拼车总价也是 €90，与 NAV Sprinter 的公开整车单程价相同，此时是否直达、行李和时间要求会变得更重要。"
        ]
      },
      {
        "heading": "早班机和深夜抵达会改变“值不值得”的判断",
        "paragraphs": [
          "拼车并不是没有计划的服务，但需要兼顾其他乘客。特别早的送机、很晚的抵达、较多行李或希望最快到酒店的家庭，可能更看重私人车的独立性；普通时段且预算优先的旅客通常更适合共享班车。"
        ]
      }
    ],
    "faq": [
      {
        "q": "两个人坐私人 Vito 划算吗？",
        "a": "如果只看价格，拼车更便宜；如果重视直接路线和独立车辆，Vito 有不同价值。"
      },
      {
        "q": "拼车能指定 Mercedes 吗？",
        "a": "不能保证，指定 Vito/Sprinter 应选择私人。"
      },
      {
        "q": "大团体一定要 Sprinter 吗？",
        "a": "超过 Vito 5 人上限时通常需要 Sprinter，但应同时确认行李。"
      },
      {
        "q": "6 人从 NAV 出发时，拼车和 Sprinter 价格一样吗？",
        "a": "按公开单程价格计算都是 €90，但服务方式不同，Sprinter 是独立车辆。"
      },
      {
        "q": "私人车会比拼车更快吗？",
        "a": "通常路线更直接，因为没有无关酒店停靠，但实际时间仍受道路和酒店入口影响。"
      },
      {
        "q": "共享班车是不是没有确定接车计划？",
        "a": "不是。它是预订制服务，只是需要协调其他乘客，因此时间以确认安排为准。"
      },
      {
        "q": "早班机更适合私人接送吗？",
        "a": "不一定必须，但如果团队重视独立路线和时间控制，私人车可能更合适。"
      }
    ],
    "related": [
      "cappadocia-shuttle-transfer",
      "private-airport-transfer-cappadocia",
      "airport-transfer-prices"
    ]
  },
  {
    "slug": "cappadocia-cave-hotel-airport-transfer",
    "title": "卡帕多奇亚洞穴酒店机场接送｜格雷梅等地拼车",
    "description": "卡帕多奇亚洞穴酒店机场接送指南：格雷梅、乌奇希萨尔、于尔居普、奥塔西萨等洞穴酒店道路、行李、集合点与 €15 机场拼车。",
    "primaryKeyword": "卡帕多奇亚洞穴酒店机场接送",
    "secondaryKeywords": [
      "格雷梅洞穴酒店接送",
      "cave hotel airport shuttle Cappadocia",
      "卡帕多奇亚洞穴酒店接机",
      "洞穴酒店送机"
    ],
    "eyebrow": "洞穴酒店接送指南",
    "h1": "卡帕多奇亚洞穴酒店机场接送",
    "lead": "“洞穴酒店”不是一种统一道路条件。有的就在正常主路旁，有的需要经过陡坡、窄巷或步行台阶，因此完整酒店名称比住宿类型更重要。",
    "sections": [
      {
        "heading": "为什么洞穴酒店名称必须写完整",
        "paragraphs": [
          "不同城镇甚至同一条坡路上可能有名称非常相似的 Cave Hotel、Cave Suites 和 Stone House。完整预订名称能帮助确认真实入口。"
        ]
      },
      {
        "heading": "拼车不一定能到每个门口",
        "paragraphs": [
          "大型共享车辆必须以安全通行为前提，狭窄单行道、急坡或无等待空间的位置可能使用附近集合点。"
        ]
      },
      {
        "heading": "格雷梅、乌奇希萨尔、于尔居普情况不同",
        "paragraphs": [
          "格雷梅住宿密集且坡路多；乌奇希萨尔围绕城堡高差明显；于尔居普既有正常城市道路也有历史街区；奥塔西萨和恰武辛则更像小村道路。"
        ]
      },
      {
        "heading": "抵达与离开时行李问题不同",
        "paragraphs": [
          "抵达时司机可以在安全点卸行李，客人可能短距离步行；送机时乘客必须在确认时间前已经带着行李到集合点。"
        ]
      },
      {
        "heading": "私人 Vito 更灵活，但不是道路通行保证",
        "paragraphs": [
          "Vito 在部分小路更方便，但物理道路限制仍然存在。预订私人车的价值主要是独立路线和较高灵活度。"
        ]
      },
      {
        "heading": "为什么这里会列出一些真实酒店名称",
        "paragraphs": [
          "酒店列表用于识别地点和说明住宿分布，不是排名或商业推荐。"
        ]
      },
      {
        "heading": "洞穴酒店并不自动代表车辆很难进入",
        "paragraphs": [
          "有些洞穴酒店正好位于正常车道旁，接送比想象中简单；另一些则有台阶、窄巷或前台与客房入口分离。决定接车方式的是具体物业位置，不是名字里有没有 “Cave”。"
        ]
      },
      {
        "heading": "送机早晨比抵达时更怕临时找不到集合点",
        "paragraphs": [
          "抵达时即使需要从安全停靠点短走，司机通常正在完成一次下客；送机则必须按整个共享线路继续前往机场。因此前一晚最好确认集合点，退房和行李都在接车窗口前完成。"
        ]
      }
    ],
    "faq": [
      {
        "q": "洞穴酒店都能门口接吗？",
        "a": "不能统一保证。"
      },
      {
        "q": "只写“cave hotel”可以吗？",
        "a": "不可以，应填写完整酒店名。"
      },
      {
        "q": "私人 Vito 一定能开到门口吗？",
        "a": "也不能保证，仍取决于道路。"
      },
      {
        "q": "送机时需要提前走到集合点吗？",
        "a": "如果确认的停靠点不在酒店门口，需要提前到达。"
      },
      {
        "q": "名称带 Cave 的酒店一定在窄路里吗？",
        "a": "不一定，部分洞穴酒店就在正常车辆道路旁。"
      },
      {
        "q": "接机和送机对洞穴酒店集合点要求一样吗？",
        "a": "道路条件相同，但送机更强调准时到已确认集合点。"
      },
      {
        "q": "酒店不在示例名单里还能预订吗？",
        "a": "只要位于支持区域即可提交请求，名单只是帮助识别住宿分布。"
      }
    ],
    "related": [
      "goreme-airport-transfer",
      "cappadocia-airport-transfer",
      "kayseri-airport-shuttle",
      "nevsehir-airport-shuttle"
    ]
  },
  {
    "slug": "istanbul-to-cappadocia",
    "title": "伊斯坦布尔到卡帕多奇亚｜航班与机场接送指南",
    "description": "伊斯坦布尔到卡帕多奇亚旅行指南：从 IST/SAW 飞往 ASR 或 NAV，再用 €15 机场班车前往格雷梅等酒店。",
    "primaryKeyword": "伊斯坦布尔到卡帕多奇亚",
    "secondaryKeywords": [
      "伊斯坦布尔飞卡帕多奇亚",
      "Istanbul to Cappadocia",
      "卡帕多奇亚机场",
      "IST SAW NAV ASR",
      "格雷梅交通"
    ],
    "eyebrow": "伊斯坦布尔 → 卡帕多奇亚",
    "h1": "伊斯坦布尔到卡帕多奇亚：航班与机场接送",
    "lead": "大多数短途游客会从 IST 或 SAW 飞到 ASR / NAV，再预订卡帕多奇亚机场—酒店接送，而不是坐本服务的长途公路班车。",
    "sections": [
      {
        "heading": "本站不是伊斯坦布尔到卡帕多奇亚的长途公路班车",
        "paragraphs": [
          "服务范围从开塞利或内夫谢希尔机场开始。通常先飞到 ASR 或 NAV，再使用机场拼车到酒店。"
        ]
      },
      {
        "heading": "IST 与 SAW 是两座不同的伊斯坦布尔机场",
        "paragraphs": [
          "购买机票时注意出发机场。抵达卡帕多奇亚后，接送表单真正需要选择的是 ASR 或 NAV。"
        ]
      },
      {
        "heading": "NAV 近，ASR 航班可能更方便",
        "paragraphs": [
          "如果两种航班都有，先比较整体旅行时间。共享班车从两座机场都是 €15，因此拼车价格不会决定机场。"
        ]
      },
      {
        "heading": "落地后如何接车",
        "paragraphs": [
          "领取行李，按照 WhatsApp 会合信息，使用正确运营航班号和完整酒店名称。"
        ]
      },
      {
        "heading": "六个标准酒店区",
        "paragraphs": [
          "格雷梅、于尔居普、乌奇希萨尔、阿瓦诺斯、奥塔西萨、恰武辛。"
        ]
      },
      {
        "heading": "返程也可以一起预订",
        "paragraphs": [
          "如果回伊斯坦布尔的航班也从 ASR 或 NAV 出发，可在往返表单中一起填写。"
        ]
      },
      {
        "heading": "抵达卡帕多奇亚后的接送应围绕实际落地航班",
        "paragraphs": [
          "从伊斯坦布尔出发可能使用 IST 或 SAW，但卡帕多奇亚接机真正需要的是落地到 ASR 或 NAV 的实际运营航班号。不要只提供“从 Istanbul 来”的信息；机场代码、航班号和酒店城镇才是安排车辆的关键。"
        ]
      }
    ],
    "faq": [
      {
        "q": "有伊斯坦布尔直达卡帕多奇亚的本站班车吗？",
        "a": "没有，本服务是卡帕多奇亚机场—酒店接送。"
      },
      {
        "q": "飞 ASR 还是 NAV？",
        "a": "NAV 公路更近，ASR 航班可能更方便。"
      },
      {
        "q": "落地后拼车多少钱？",
        "a": "€15/人/单程。"
      },
      {
        "q": "应该把 IST 填在接送表单吗？",
        "a": "不应该，应选择在卡帕多奇亚落地的 ASR 或 NAV。"
      },
      {
        "q": "从 Istanbul 飞来时，接送表单填 IST/SAW 还是 ASR/NAV？",
        "a": "应选择你在卡帕多奇亚落地的 ASR 或 NAV，并填写该段实际运营航班号。"
      },
      {
        "q": "行李领取时间包含在机场到酒店车程里吗？",
        "a": "不包含。道路时间是在机场流程完成之后的车程参考。"
      },
      {
        "q": "可以把回伊斯坦布尔的送机一起预订吗？",
        "a": "可以，选择往返并填写离开 ASR/NAV 的航班。"
      }
    ],
    "related": [
      "cappadocia-airport",
      "cappadocia-to-istanbul",
      "nearest-airport-to-cappadocia",
      "kayseri-or-nevsehir-airport-for-cappadocia",
      "kayseri-airport-shuttle",
      "nevsehir-airport-shuttle"
    ]
  },
  {
    "slug": "cappadocia-to-istanbul",
    "title": "卡帕多奇亚到伊斯坦布尔｜酒店送机与航班指南",
    "description": "卡帕多奇亚到伊斯坦布尔：从格雷梅等酒店拼车前往 NAV/ASR，再飞往 IST 或 SAW。送机 €15/人，含接车时间与机场选择。",
    "primaryKeyword": "卡帕多奇亚到伊斯坦布尔",
    "secondaryKeywords": [
      "格雷梅到伊斯坦布尔",
      "Cappadocia to Istanbul",
      "卡帕多奇亚送机",
      "NAV ASR to Istanbul",
      "卡帕多奇亚到机场"
    ],
    "eyebrow": "卡帕多奇亚 → 伊斯坦布尔",
    "h1": "卡帕多奇亚到伊斯坦布尔：酒店送机与航班",
    "lead": "通常先从卡帕多奇亚酒店前往 NAV 或 ASR，再搭航班去伊斯坦布尔。本站负责的部分是酒店到机场，而不是 700 多公里的整段长途公路。",
    "sections": [
      {
        "heading": "第一段是酒店到机场，不是一路坐班车到伊斯坦布尔",
        "paragraphs": [
          "本站不运营卡帕多奇亚直达伊斯坦布尔的共享公路班车。应先预订酒店到 NAV/ASR 的机场接送，再使用航空公司机票。"
        ]
      },
      {
        "heading": "选择 NAV 或 ASR 看你的离港航班",
        "paragraphs": [
          "NAV 通常离中部酒店更近；ASR 虽远一些，但航班时刻可能更合适。拼车去两座机场都是 €15/人。"
        ]
      },
      {
        "heading": "公路到伊斯坦布尔约 700 多公里",
        "paragraphs": [
          "格雷梅到伊斯坦布尔中心的道路大致约 725 km，远远超过本站 35–80 km 的机场接送范围。短期旅行通常更适合飞行。"
        ]
      },
      {
        "heading": "送机接车时间按航班确认",
        "paragraphs": [
          "填写实际离港航班号、酒店和乘客资料。拼车可能还要接其他酒店，因此不要只按直达导航时间倒推。"
        ]
      },
      {
        "heading": "晚班机前如何使用空余时间",
        "paragraphs": [
          "把行李寄存在酒店，并把最后活动留在住宿城镇附近。餐厅、咖啡、短距离观景比山谷长徒步更容易及时结束。"
        ]
      },
      {
        "heading": "IST 与 SAW 别混淆",
        "paragraphs": [
          "伊斯坦布尔机场 IST 与萨比哈·格克琴机场 SAW 不同。卡帕多奇亚接送表单选择的是你的出发机场 NAV 或 ASR，伊斯坦布尔落地机场按航空公司机票为准。"
        ]
      },
      {
        "heading": "伊斯坦布尔的长途距离不能用来倒推酒店接车时间",
        "paragraphs": [
          "700 多公里的公路数字只帮助判断长途旅行方式，和卡帕多奇亚酒店到 NAV / ASR 的接车时间不是一回事。机场班车在 NAV 或 ASR 结束，具体酒店接车时间仍然根据离港航班和共享运营计划确认。"
        ]
      }
    ],
    "faq": [
      {
        "q": "有卡帕多奇亚直达伊斯坦布尔拼车吗？",
        "a": "本站没有。通常先送机到 NAV/ASR，再飞伊斯坦布尔。"
      },
      {
        "q": "酒店到机场多少钱？",
        "a": "拼车 €15/人/单程。"
      },
      {
        "q": "可以从不同机场离开吗？",
        "a": "可以，但路线和私人价格要按实际机场确认。"
      },
      {
        "q": "表单应该填 IST 还是 NAV/ASR？",
        "a": "填写卡帕多奇亚的离港机场 NAV 或 ASR。"
      },
      {
        "q": "卡帕多奇亚到伊斯坦布尔公路距离就是本站班车路线吗？",
        "a": "不是。本站只负责酒店到 NAV/ASR 的区域机场接送。"
      },
      {
        "q": "回伊斯坦布尔时，接车时间按 IST/SAW 还是 NAV/ASR 航班算？",
        "a": "按你从卡帕多奇亚离开的 NAV 或 ASR 航班确认。"
      },
      {
        "q": "晚班机前可以把行李寄存在酒店吗？",
        "a": "许多酒店可以，但应向自己的住宿确认，并在接车前及时返回。"
      }
    ],
    "related": [
      "istanbul-to-cappadocia",
      "cappadocia-to-nevsehir-airport-shuttle",
      "cappadocia-to-kayseri-airport-shuttle",
      "nearest-airport-to-cappadocia",
      "kayseri-or-nevsehir-airport-for-cappadocia"
    ]
  }
];

export const zhPageBySlug = new Map(zhPages.map((page) => [page.slug, page]));
export function zhPrettySlug(slug:string){ return zhPageBySlug.get(slug)?.h1 || slug; }

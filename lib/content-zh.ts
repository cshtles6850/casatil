import { airports, towns } from './site';
import { pages as enPages, type SeoPage, type ContentSection, type FaqItem } from './content';

export type ZhSeoPage = SeoPage;

export const zhTownNames: Record<keyof typeof towns, string> = {
  goreme: '格雷梅',
  urgup: '于尔居普',
  uchisar: '乌奇希萨尔',
  avanos: '阿瓦诺斯',
  ortahisar: '奥塔西萨',
  cavusin: '恰武辛',
};

const zhAirportNames = {
  kayseri: { short: '开塞利机场', full: '开塞利埃尔基莱特机场', code: 'ASR' },
  nevsehir: { short: '内夫谢希尔机场', full: '内夫谢希尔卡帕多奇亚机场', code: 'NAV' },
} as const;

function zhTime(value: string) {
  return value.replace(/\s*min$/i, ' 分钟');
}

const townProfiles: Record<keyof typeof towns, {
  overview: string; access: string; arrival: string; departure: string; special: string;
  landmarks: string[]; hotels: string[]; faq: FaqItem[];
}> = {
  goreme: {
    overview: '格雷梅是第一次到卡帕多奇亚的游客最常选择的住宿地之一。镇中心不大，餐厅、旅行社和许多集合点步行可达，洞穴酒店则沿着坡地向上分布。对机场接送来说，这种紧凑又有坡度的城市结构很重要：地图上看起来相距很近的两家酒店，车辆实际进入的道路条件可能完全不同，因此预订时填写完整酒店名称比只写“格雷梅”更可靠。',
    access: '格雷梅下方的中心街区通常比较容易上下客，而山坡上的洞穴酒店常见窄路、单行道、陡坡和临时停车空间不足等情况。拼车班车体型较大时，司机可能会在距离酒店很近且安全的位置上下客；私人 Vito 在部分小路上的机动性更好，但也不能在预订前承诺一定停到每一家酒店门口。',
    arrival: '到达后不必急着安排很满的行程。入住后可以先在格雷梅中心散步、去观景点看日落，或者把格雷梅露天博物馆留到精神更好的时间。准备第二天看热气球的游客通常需要很早起床，因此晚班机抵达时，简单吃饭和休息往往比赶景点更实际。',
    departure: '离开格雷梅当天，最好不要在接车前安排时间难以控制的长距离山谷徒步。热气球清晨交通、冬季天气和拼车的酒店接客顺序都会影响实际节奏。航班较晚时，可以把行李寄存在酒店，在镇中心吃饭、喝咖啡、购物或短距离散步，再按确认时间回到集合点。',
    special: '格雷梅有大量名称相似的 Cave Hotel、Cave Suites、Stone House 和 Boutique Hotel。为了避免司机去错入口，完整酒店名称、可联系的 WhatsApp 号码，以及必要时发送地图定位都很有帮助。',
    landmarks: ['格雷梅露天博物馆', '日落观景点（Sunset Point）与镇内观景台', '爱情谷与鸽子谷入口', '红谷与玫瑰谷路线', '清晨热气球观景区域'],
    hotels: ['Kelebek Cave Hotel','Sultan Cave Suites','Aydinli Cave Hotel','Divan Cave House','Artemis Cave Suites','Mithra Cave Hotel','Koza Cave Hotel','Traveller’s Cave Hotel','Cappadocia Cave Suites','Anatolian Houses Cave Hotel & Spa','Royal Stone Houses – Goreme','Osmanli Cappadocia Hotel','Henna Hotel','Chelebi Cave House','Arinna Cappadocia','Local Cave House Hotel','Vineyard Cave Hotel','Harman Cave Hotel','Historical Goreme House','Göreme Cave Lodge'],
    faq: [
      { q: '格雷梅所有洞穴酒店都能直接停到门口吗？', a: '不能一概而论。部分山坡小路不适合较大的班车通行或等待，具体上下客点会根据酒店位置通过 WhatsApp 确认。' },
      { q: '清晨热气球活动会影响格雷梅机场接送吗？', a: '有可能。日出前后道路和酒店接客车辆会明显增多，所以应以确认的接车时间为准，而不是只看地图距离。' },
      { q: '预订时只写 Goreme 可以吗？', a: '不建议。格雷梅有许多名称相似的洞穴酒店，完整酒店名能显著减少接错位置的风险。' },
    ],
  },
  urgup: {
    overview: '于尔居普比格雷梅更像一座完整生活中的小城：中心区有餐厅、商店和酒庄文化，历史石屋与洞穴酒店则延伸到周围坡地。机场接送时，“于尔居普”这个地名仍然不够精确，因为镇中心酒店与山坡老城区酒店的最后几分钟路线可能完全不同。',
    access: '于尔居普不少酒店位于正常城市道路旁，车辆到达相对直接；但老城区仍有石阶、陡坡、狭窄巷道和入口不在主路上的住宿。较大的 Sprinter 或拼车班车有时需要选择更安全的临近停车点，因此完整酒店名称是路线安排的重要信息。',
    arrival: '航班后抵达于尔居普，最轻松的安排通常是在镇中心吃饭、喝咖啡或短距离散步。Temenni Hill 和老街适合不太耗体力的第一晚；Three Beauties 等景点如果天色和时间都合适可以顺路看看，但酒庄、山谷和全天游览更适合留到第二天。',
    departure: '前往机场当天，把最后一项活动留在酒店附近或于尔居普中心最稳妥。早餐、咖啡、市场或短距离散步都容易控制时间；较远的酒庄和山谷则会增加另一段交通依赖，不适合压在拼车接送前。',
    special: '于尔居普适合喜欢餐厅和小城氛围、同时又想方便前往格雷梅与奥塔西萨一带的游客。预订机场接送时应明确选择于尔居普，而不是只写“Cappadocia”，这样才能使用正确的距离、酒店位置和返回机场安排。',
    landmarks: ['特梅尼山（Temenni Hill）', '三姐妹岩（Three Beauties）', '历史石屋街区', '当地酒庄与酒窖', '通往奥塔西萨和山谷的道路'],
    hotels: ['Kayakapi Premium Caves','Sacred House','Yunak Evleri','MDC Cave Hotel','Dere Suites','Fresco Cave Suites','Acropolis Cave Suite','Seraphim Cave Suites'],
    faq: [
      { q: '于尔居普包含在 €15 拼车接送范围内吗？', a: '是。已确认的于尔居普住宿可以使用机场拼车接送。' },
      { q: 'Sprinter 能到所有于尔居普洞穴酒店门口吗？', a: '不能提前做统一保证，老城区部分道路和停车空间有限，实际停靠点要看具体酒店。' },
      { q: '于尔居普更靠近哪个机场？', a: '通常 NAV 的公路距离更短，但航班时间和票价可能让 ASR 仍然更方便。' },
    ],
  },
  uchisar: {
    overview: '乌奇希萨尔位于卡帕多奇亚中部较高的位置，城堡、露台酒店和峡谷景观让这里的住宿体验与格雷梅、阿瓦诺斯明显不同。高差和坡地小路也意味着机场接送不能只看直线距离，酒店的具体入口对接送安排非常重要。',
    access: '有些乌奇希萨尔酒店位于宽阔道路旁，车辆进出很方便；也有不少洞穴酒店分布在城堡周围陡峭或较窄的道路上。拼车班车不一定适合在每一条老街长时间停靠，因此预订时应填写完整酒店名称并保持 WhatsApp 可联系。',
    arrival: '入住后最容易安排的是乌奇希萨尔城堡周围的观景点和村内步行。鸽子谷入口也很近，但完整徒步最好留到没有行李、没有时间压力的一天。这里晚上通常比格雷梅安静，很多游客会直接在酒店露台休息。',
    departure: '出发当天不要因为 NAV 距离较短就把时间压得太紧。坡路、酒店接客点、拼车顺序和机场办理手续仍然需要余量。航班晚时，可以在城堡附近或酒店休息，不建议临时下到山谷后再赶回来。',
    special: '乌奇希萨尔的酒店经常强调 valley view、castle view、terrace 或 cave suites，名称很容易相似。完整住宿名称有助于确认究竟是在城堡上方、下方还是通往格雷梅的坡路一侧。',
    landmarks: ['乌奇希萨尔城堡', '鸽子谷', '城堡周边观景台', '通往格雷梅的步行路线', '高处日落景观'],
    hotels: ['Museum Hotel','Argos in Cappadocia','Rox Cappadocia','Taskonaklar','Karlik Evi','Ariana Sustainable Luxury Lodge','Kistar Cave Hotel','Eyes of Cappadocia Cave Hotel'],
    faq: [
      { q: 'NAV 到乌奇希萨尔是不是很近？', a: '在本服务覆盖区域中属于较短路线之一，但行李、机场会合、拼车乘客和酒店坡路仍会影响实际到达时间。' },
      { q: '乌奇希萨尔酒店是否都能门口接送？', a: '不一定。城堡附近部分道路较陡或狭窄，实际停靠点会根据酒店确认。' },
      { q: '离开乌奇希萨尔前适合去鸽子谷徒步吗？', a: '如果接车时间临近，不建议安排完整山谷徒步。留在城堡或酒店附近更容易控制时间。' },
    ],
  },
  avanos: {
    overview: '阿瓦诺斯沿克孜勒厄尔马克河两岸展开，城市结构比格雷梅和恰武辛更分散。这里以陶艺、河畔散步和较宽的城市道路著称，机场接送的难点通常不是洞穴小巷，而是确认酒店究竟位于河的哪一侧以及哪个街区。',
    access: '阿瓦诺斯不少酒店和大型住宿靠近正常道路，Vito、Sprinter 和拼车班车进出相对容易。真正容易出错的是地址过于笼统：只写 Avanos 可能让司机在老城区、河畔和较新的住宿区之间反复确认，因此建议填写完整酒店名和地址。',
    arrival: '抵达后可以先沿河散步或体验陶艺工作坊，这些活动距离住宿区通常不远，也不会让第一天太疲惫。Pasabag 和 Zelve 离阿瓦诺斯不远，但更适合在有充足白天时间且没有行李压力时安排。',
    departure: '如果是晚班机，离开阿瓦诺斯前可以沿河散步、喝咖啡或逛陶艺店。不要在接车前临时开始较远的北部卡帕多奇亚路线。拼车乘客应提前回到确认的酒店或集合点，并准备好行李。',
    special: '很多游客搜索机场交通时只想到格雷梅，但如果酒店实际上在阿瓦诺斯，就应该使用阿瓦诺斯路线。两地公路方向和酒店分布不同，使用正确目的地能给出更可靠的时间预期。',
    landmarks: ['克孜勒厄尔马克河', '陶艺工作坊', '阿瓦诺斯老城区', '河上桥梁与步道', '前往帕夏贝（Paşabağ）与泽尔维（Zelve）的路线'],
    hotels: ['DoubleTree by Hilton Avanos – Cappadocia','Avrasya Hotel','Suhan Cappadocia Hotel & Spa','Mira Cappadocia Hotel','Sofa Hotel Avanos','Hikmet’s House','Adanos Konuk Evi'],
    faq: [
      { q: '阿瓦诺斯包含在拼车机场接送范围吗？', a: '是。已确认的阿瓦诺斯酒店可以使用共享班车服务。' },
      { q: '为什么阿瓦诺斯预订最好填写完整地址？', a: '城市沿河两岸展开，比格雷梅更分散，完整地址可以减少在不同街区之间确认的时间。' },
      { q: '出发前还能去陶艺店吗？', a: '晚班机可以安排靠近酒店的陶艺店，但要留出足够时间返回确认的接车点。' },
    ],
  },
  ortahisar: {
    overview: '奥塔西萨比格雷梅和于尔居普更安静，村庄围绕巨大的岩石城堡展开，老街和石屋保留了更明显的当地生活感。虽然它靠近多个热门景点，但机场接送仍有独立的道路与酒店分布，不能简单当作于尔居普的附属区域。',
    access: '城堡周围的洞穴酒店和石屋住宿可能位于较窄的村路、斜坡或停车空间有限的位置。车辆有时可以到酒店入口，有时则需要在附近安全位置接送。完整酒店名和可联系的 WhatsApp 能让这些细节在接车前确认。',
    arrival: '入住后，奥塔西萨城堡周边和老村街道就是很自然的第一站。红谷和博物馆方向都不远，但长距离活动更适合安排在完整观光日。这里晚上相对安静，航班后休息通常比赶行程更舒服。',
    departure: '离开奥塔西萨当天，最好不要在接车前进入需要较长返回时间的山谷。城堡周边、咖啡馆或酒店附近都更容易掌握时间。拼车接送会根据航班和酒店顺序安排，因此应提前准备好行李。',
    special: '泛泛的旅游文章有时把奥塔西萨和于尔居普混在一起，但机场接送不应该这样处理。村内道路、酒店入口和上下客位置足以让它成为独立路线。',
    landmarks: ['奥塔西萨城堡', '老村石屋街道', '红谷方向', '传统石屋与储藏洞穴', '通往博物馆区域的道路'],
    hotels: ['Exedra Cappadocia','Hezen Cave Hotel','Tafoni Houses Cave Hotel','Elika Cave Suites & Spa','Turkish Cave House','Splendid Cave Hotel','Fosil Cave Hotel'],
    faq: [
      { q: '奥塔西萨可以坐 €15 拼车班车吗？', a: '可以，奥塔西萨属于支持的卡帕多奇亚中心住宿区域。' },
      { q: '班车能在城堡旁边的窄路里等候吗？', a: '不一定。道路宽度和停车空间取决于具体酒店，应该遵循确认的集合点。' },
      { q: '航班较晚时奥塔西萨哪里适合消磨时间？', a: '城堡周边、咖啡馆或酒店附近比临时开始长距离山谷徒步更稳妥。' },
    ],
  },
  cavusin: {
    overview: '恰武辛是格雷梅与阿瓦诺斯之间的小村庄，靠近玫瑰谷、红谷、古村落和热气球活动区域。村子虽然不大，但住宿并不全部集中在一个“中心点”，而是分布在老村、主路和山谷入口一带，因此机场接送仍然需要准确酒店名称。',
    access: '精品洞穴酒店和民宿分布在老村附近以及通往格雷梅的道路两侧。小支路、相似酒店名称和山谷入口都可能让“Cavusin”这个简单地址不够用。若大型车辆不适合停到门口，会通过 WhatsApp 确认更安全的临近点。',
    arrival: '入住后可以看看恰武辛老村、圣约翰教堂区域，或者在时间和体力允许时走一小段玫瑰谷方向。这里也很适合清晨看热气球，但晚班机到达时更应该优先办理入住和休息。',
    departure: '恰武辛最大的“最后一小时陷阱”是临时去山谷徒步。步道耗时和返回村里的时间很难像镇中心散步那样准确控制。去机场当天，最好留在村里、酒店或主路附近并提前准备行李。',
    special: '恰武辛面积小，但山谷道路、热气球清晨交通和住宿分布让它有自己的接送特点。预订时明确选择恰武辛，而不是笼统写格雷梅或阿瓦诺斯，可以避免错误路线假设。',
    landmarks: ['恰武辛老村', '圣约翰教堂区域', '玫瑰谷入口', '热气球观景区域', '前往 Pasabag 的道路'],
    hotels: ['Azure Cave Suites','Phocas Cave Suites','Seki Cave Suites','Agarta Cave Hotel','Fairyland Cave Hotel','Jacob’s Cave Suites'],
    faq: [
      { q: '恰武辛属于 €15 拼车接送范围吗？', a: '是。已确认的恰武辛住宿属于共享机场班车覆盖区域。' },
      { q: '为什么小村庄还需要完整酒店名？', a: '住宿分布在老村、主路和山谷入口周边，只写村名无法准确确定上下客点。' },
      { q: '机场接车前可以去玫瑰谷徒步吗？', a: '不建议在接车前安排长徒步，步道返回时间难以精确控制。' },
    ],
  },
};

const arrivalNotes: Record<string,string> = {
  'kayseri-goreme':'从开塞利 ASR 出发后，车辆先离开开塞利平原，再逐渐进入卡帕多奇亚的火山岩地貌。格雷梅并不是一出机场就能看到的“下一站”，沿途景观会逐渐变化；私人接送会直接前往酒店，拼车则可能根据同航班或相近航班乘客安排多个酒店停靠。',
  'nevsehir-goreme':'NAV 到格雷梅的公路距离更短，落地后的车程通常明显轻松一些。路线从卡帕多奇亚西侧进入中心区域，不需要穿过开塞利，但拼车仍会受到行李领取、乘客组合和酒店停靠顺序影响。',
  'kayseri-urgup':'开塞利到于尔居普属于从卡帕多奇亚东侧进入的自然路线，于尔居普在继续深入格雷梅、乌奇希萨尔之前就能到达。主路并不复杂，但进入历史酒店和坡地住宿时，完整酒店名称仍然非常重要。',
  'nevsehir-urgup':'从 NAV 前往于尔居普需要穿过卡帕多奇亚中部道路网，公路时间一般会比 NAV 到乌奇希萨尔或格雷梅更长一些。它依然是实用路线，但预订时要明确选择于尔居普，而不是只写“卡帕多奇亚”。',
  'kayseri-uchisar':'从 ASR 到乌奇希萨尔是本服务区域中较长的中心路线之一。车辆穿过卡帕多奇亚后逐渐爬升到城堡所在高地，最后一段坡路和酒店入口让准确住宿信息格外重要。',
  'nevsehir-uchisar':'NAV 到乌奇希萨尔是中心卡帕多奇亚较短的机场路线之一。距离优势很明显，但不能把它理解为固定到达时间：行李、机场会合、拼车乘客和城堡周围的酒店道路都会带来变化。',
  'kayseri-avanos':'阿瓦诺斯位于卡帕多奇亚北侧，从开塞利进入时与去格雷梅或乌奇希萨尔的最后路线不同。接近阿瓦诺斯后，河流和更宽的城市道路会成为明显地标；拼车时间还取决于当天阿瓦诺斯在酒店停靠顺序中的位置。',
  'nevsehir-avanos':'NAV 到阿瓦诺斯会沿卡帕多奇亚北部道路前往克孜勒厄尔马克河。距离适中，但阿瓦诺斯城市分布更散，酒店究竟位于河的哪一侧会影响最后几分钟。私人接送则不需要处理其他酒店停靠。',
  'kayseri-ortahisar':'ASR 到奥塔西萨在进入卡帕多奇亚中心后转向较安静的村庄区域。它与一些开塞利路线的总距离接近，但最后一段完全不同：老村小路和城堡周围酒店让它成为独立的下客路线。',
  'nevsehir-ortahisar':'从 NAV 到奥塔西萨需要越过靠近机场的西侧小镇并进入中心卡帕多奇亚。总时间仍属中等，但最后的村内道路比数字距离更值得注意，完整酒店名比“Ortahisar center”更实用。',
  'kayseri-cavusin':'恰武辛位于格雷梅与阿瓦诺斯之间，从 ASR 进入后，最后一段会转入小村和山谷道路环境。这里酒店数量少但分布并不集中，主路、老村和山谷一侧的住宿需要分别确认。',
  'nevsehir-cavusin':'NAV 到恰武辛的距离不长，但路线末端仍有村路、山谷入口和热气球活动区域。预订时准确到具体住宿，可以避免把恰武辛当成格雷梅的一个普通停靠点。',
};

const returnNotes: Record<string,string> = {
  'kayseri-goreme':'从格雷梅去 ASR 时，真正需要规划的是“从哪家酒店、几点离开”，而不是只看 75 公里的距离。山坡洞穴酒店、清晨热气球交通以及拼车接客顺序都可能让最开始的几公里比地图上更复杂。',
  'nevsehir-goreme':'格雷梅到 NAV 的公路距离较短，但短距离很容易让人低估出发准备。错过拼车集合点比在机场多等二十分钟更麻烦，因此退房、行李和早餐最好在确认接车时间之前完成。',
  'kayseri-urgup':'于尔居普前往 ASR 的路线较长，尤其不适合在接车前临时安排需要另一辆车才能返回的活动。市中心吃饭或短距离散步更容易控制时间，随后按 WhatsApp 确认的地点等待车辆。',
  'nevsehir-urgup':'于尔居普到 NAV 的路程虽然比去 ASR 短，但仍需要穿过卡帕多奇亚道路网。老城区酒店的入口和拼车收客顺序会影响出发节奏，不能只按导航里的直达时间倒推。',
  'kayseri-uchisar':'乌奇希萨尔去 ASR 同时存在两种时间因素：整体公路距离较长，城堡周围部分酒店又在陡坡小路上。早餐、退房和行李应在接车窗口前完成，不要让车辆在受限道路里长时间等待。',
  'nevsehir-uchisar':'乌奇希萨尔到 NAV 很近，这反而容易产生“还能再去一个景点”的错觉。机场接送最怕的是错过酒店集合点，因此最后活动最好留在城堡和酒店步行范围内。',
  'kayseri-avanos':'阿瓦诺斯去 ASR 时，先要确认酒店在河的哪一侧，再进入较长的机场公路。晚班机前可以在河边或陶艺店消磨时间，但不要临时去 Zelve 或其他需要额外交通的景点。',
  'nevsehir-avanos':'阿瓦诺斯到 NAV 比去 ASR 更近，但镇内地址仍然重要。一个错误的酒店名称或河岸位置，可能在市区里浪费掉原本从机场距离上节省的时间。',
  'kayseri-ortahisar':'奥塔西萨前往 ASR 时，车辆先离开城堡周围村路，再进入更长的机场公路。接车前把活动控制在村内，能够避免在狭窄道路和长距离行程叠加时产生不必要压力。',
  'nevsehir-ortahisar':'奥塔西萨到 NAV 属于中等距离路线。村内酒店的实际停靠点比“到机场多少公里”更容易影响第一阶段，因此应提前确认酒店入口或约定路边点。',
  'kayseri-cavusin':'恰武辛去 ASR 的行程从小村和山谷道路开始，之后才进入较长机场路。接车前不适合深入玫瑰谷；酒店寄存行李、留在村内会更安全。',
  'nevsehir-cavusin':'恰武辛到 NAV 的距离相对短，但热气球清晨交通、村路和住宿分布仍可能影响开始阶段。应在确认时间前回到酒店或集合点，而不是根据地图自行压缩时间。',
};


const returnExtraZh: Record<string,{heading:string; paragraph:string}> = {
  'kayseri-goreme': { heading:'格雷梅去 ASR：长路段和清晨街道要一起留出余量', paragraph:'ASR 的道路段本来就比 NAV 更长，如果又遇到热气球清晨交通或冬季路况，前几公里和后面的机场公路都会影响节奏。这里的建议不是固定提前小时数，而是不要把确认后的格雷梅接车窗口继续压缩。' },
  'nevsehir-goreme': { heading:'格雷梅去 NAV：距离短也不代表可以最后一刻出发', paragraph:'NAV 约 40 km 的优势主要体现在公路较短，但共享接客、退房和机场办理仍然存在。尤其住在坡地洞穴酒店时，先从房间顺利到达集合点，往往比地图上省下的十几分钟更重要。' },
  'kayseri-urgup': { heading:'于尔居普去 ASR：离开老城区后还有一段较长机场路', paragraph:'从于尔居普中心或坡地酒店上车只是第一阶段，随后仍要完成约 70 km 的 ASR 公路。晚班机前可以留在镇内活动，但不要把酒庄或远处景点安排到接车窗口附近。' },
  'nevsehir-urgup': { heading:'于尔居普去 NAV：中等距离路线仍要考虑老城出发时间', paragraph:'NAV 到于尔居普并不是该机场最短的城镇组合。送机时先要从真实酒店入口进入区域道路，再前往机场；老城区停靠点和共享车辆顺序可能让开始阶段比导航直达更慢。' },
  'kayseri-uchisar': { heading:'乌奇希萨尔去 ASR：80 km 公路前先要离开高地酒店区', paragraph:'这是支持区域里较长的 ASR 组合之一。城堡周围坡路加上之后的长距离机场段，意味着早餐、退房和行李都应该在车辆到达前结束，避免把两个时间变量叠在一起。' },
  'nevsehir-uchisar': { heading:'乌奇希萨尔去 NAV：35 km 很近，但机场流程不会缩短', paragraph:'NAV 约 35 km 的公路很有优势，但航班值机、安全检查和共享车辆安排并不会因为酒店近就消失。不要把“最近机场”理解成可以在集合时间后才开始收拾行李。' },
  'kayseri-avanos': { heading:'阿瓦诺斯去 ASR：先确认河岸位置，再进入 70 km 机场路', paragraph:'阿瓦诺斯酒店可能分布在河两侧，出城方向会影响最初几分钟。确认准确酒店后，车辆再进入前往 ASR 的长路段；接车前临时跨河去远处活动会增加不必要的不确定性。' },
  'nevsehir-avanos': { heading:'阿瓦诺斯去 NAV：38 km 之外，还要算上城镇内的实际起点', paragraph:'NAV 距离不长，但如果酒店名称或河岸位置填错，镇内绕行可能消耗掉原本的距离优势。送机当天最好让 WhatsApp 中的酒店名称与真实预订完全一致。' },
  'kayseri-ortahisar': { heading:'奥塔西萨去 ASR：村路结束后才进入较长机场段', paragraph:'城堡周围道路安静但不一定宽敞，车辆需要先顺利离开村庄，再完成约 75 km 的 ASR 路线。接车前把最后活动控制在村内，能减少因为远处返回而延误的风险。' },
  'nevsehir-ortahisar': { heading:'奥塔西萨去 NAV：45 km 路线先从正确村内停靠点开始', paragraph:'NAV 的整体道路时间适中，但奥塔西萨酒店入口差异仍会影响第一段。若大型车辆需要使用附近安全点，应在接车窗口前把行李带到已确认位置，而不是等车辆到了再寻找路线。' },
  'kayseri-cavusin': { heading:'恰武辛去 ASR：不要让山谷活动占用 75 km 机场路的余量', paragraph:'恰武辛周边很容易临时想去玫瑰谷或看热气球，但 ASR 公路段较长。送机当天最稳妥的是留在酒店、老村或主路附近，确保车辆离开小村后仍有足够的机场时间。' },
  'nevsehir-cavusin': { heading:'恰武辛去 NAV：短一些的公路仍可能遇到热气球清晨交通', paragraph:'NAV 约 42 km，比 ASR 明显更短，但恰武辛清晨的热气球车辆和山谷入口活动可能影响村内第一阶段。按确认时间到集合点，比根据公里数自行推迟出发更可靠。' },
};

function routeKeywords(airportKey:'kayseri'|'nevsehir', townKey:keyof typeof towns, direction:'arrival'|'return') {
  const town = zhTownNames[townKey]; const airport = zhAirportNames[airportKey];
  if (direction === 'arrival') return [
    `${airport.short}到${town}接送`, `${airport.code}到${town}`, `${town}机场接送`, `卡帕多奇亚机场到${town}`, `${airport.short}${town}拼车`, `${airport.short}${town}包车`,
  ];
  return [`${town}到${airport.short}`, `${town}机场班车`, `${town}送机`, `${town}到${airport.code}`, `${town}酒店到机场`, `${town}${airport.short}包车`];
}

function zhRoutePage(en:SeoPage):SeoPage {
  if (!en.route) throw new Error('route page expected');
  const { airport: airportKey, town: townKey, direction } = en.route;
  const a = airports[airportKey]; const za = zhAirportNames[airportKey]; const t = towns[townKey]; const town = zhTownNames[townKey]; const p = townProfiles[townKey];
  const distance = airportKey === 'kayseri' ? t.distanceKayseri : t.distanceNevsehir;
  const time = zhTime(airportKey === 'kayseri' ? t.timeKayseri : t.timeNevsehir);
  const key = `${airportKey}-${townKey}`;
  const arrival = direction === 'arrival';
  const title = arrival
    ? `${za.short}到${town}｜€15机场拼车与私人接送`
    : `${town}到${za.short}｜€15送机与私人接送`;
  const description = arrival
    ? `${za.short}（${za.code}）到${town}约 ${distance}，通常 ${time}。拼车 €15/人，Vito €${a.vito}、Sprinter €${a.sprinter}，含酒店位置与抵达建议。`
    : `${town}酒店到${za.short}（${za.code}）约 ${distance}，通常 ${time}。拼车 €15/人，支持私人 Vito/Sprinter，含接车时间、航班变化与酒店道路建议。`;
  const sections:ContentSection[] = arrival ? [
    { heading:`从 ${za.code} 落地后前往${town}`, paragraphs:[arrivalNotes[key], `预订 **${za.short}到${town}接送** 时，请填写实际运营航班号、完整酒店名称、乘客姓名和公司要求的护照号码。领取托运行李后，应按照 WhatsApp 确认的会合信息前往接车点，而不是参考旧评论里的集合位置。`] },
    { heading:`约 ${distance} 的车程，最后几分钟取决于${town}酒店位置`, paragraphs:[`这条路线通常为 **${distance} / ${time}**，但这个数字主要描述区域公路。进入${town}后，真正影响最后几分钟的是酒店所在道路和车辆是否能安全停靠。${p.access}`, `如果这次从 ${za.code} 抵达，也想比较另一座机场与${town}的差异，可以查看 [[${town}机场接送指南|${townKey}-airport-transfer]]；那里把 ASR 和 NAV 放在同一页面比较。`] },
    { heading:`从 ${za.code} 抵达${town}后，第一段时间怎么安排更舒服`, paragraphs:[`${p.arrival} 从 ${za.code} 抵达的当天，是否继续安排活动应以实际到店时间为准，不必为了填满行程而把机场接送后的时间压得太紧。`], bullets:p.landmarks.slice(0,4) },
    { heading:`${za.code} 到${town}：€15 拼车还是私人 Vito / Sprinter？`, paragraphs:[`这条${za.code}到${town}路线的拼车价格是 **€15/人/单程**。私人接送按车辆计价：Mercedes Vito 最多 5 人，单程 **€${a.vito}**；Mercedes Sprinter 最多 16 人，单程 **€${a.sprinter}**。往返价格正好是对应单程的两倍，费用按预订确认以现金支付给司机。`, `如果这次从 ${za.code} 前往${town}更看重价格，可以先看 [[卡帕多奇亚机场拼车|cappadocia-shuttle-transfer]]；如果团队人数多、行李多或希望不经过其他酒店，可比较 [[拼车与私人接送|cappadocia-shared-shuttle-vs-private-transfer]]。`] },
    { heading:`预订 ${za.code} 到${town}时，酒店名称要写完整`, paragraphs:[`${p.special} 对 ${za.code} → ${town} 的接机安排来说，提前确认准确住宿入口可以减少抵达后再次沟通路线的时间。`, `以下住宿名称只是为了帮助识别${town}的地点，并不是酒店排名。从 ${za.code} 抵达时，即使你的酒店不在名单中，只要位于支持区域，也可以提交接送请求。`], bullets:p.hotels.slice(0, airportKey === 'kayseri' ? Math.ceil(p.hotels.length/2) : p.hotels.length).slice(0,10) },
    { heading:`从 ${za.code} 抵达${town}后，也可以顺手规划回程机场`, paragraphs:[`${p.departure} 如果这次是从 ${za.code} 抵达，返程仍不必默认使用同一机场，先核对离境航班更稳妥。`, `如果返程仍使用 ${za.code}，可以直接查看 [[${town}到${za.short}|${townKey}-to-${airportKey}-airport-transfer]]。如果返程机场还没决定，先比较 [[开塞利还是内夫谢希尔机场|kayseri-or-nevsehir-airport-for-cappadocia]]，不要因为抵达用了某个机场就默认回程也必须相同。`] },
  ] : [
    { heading:`从${town}酒店出发去 ${za.code}，先处理好退房和行李`, paragraphs:[returnNotes[key], `从${town}去 ${za.code} 的酒店拼车不是按照一个固定的“每天几点”发车。实际接车时间会结合离港航班、住宿位置和同车乘客顺序确认，因此应以 WhatsApp 最终时间为准。`] },
    { heading:`${town}去 ${za.code} 时，接车点比地图直线距离更重要`, paragraphs:[`${p.access} 前往 ${za.code} 的送机当天，最好在接车窗口开始前就确认自己是否需要从酒店步行到附近集合点。`, `从${town}到${za.short}约 **${distance}**，通常 **${time}**。这个时间不等于“从房间关门到登机口”的总时间；退房、步行到集合点、其他酒店接客以及机场办理手续都要另外考虑。`] },
    { heading:`${town}送机遇到 ${za.code} 航班延误或改签怎么办`, paragraphs:[`如果航空公司调整从 ${za.code} 出发的航班，请尽早把新的航班信息发到 WhatsApp。${town}酒店的拼车接车还要协调同车乘客，因此不要自行把接车时间按延误分钟数简单往后推，等待运营方确认新的安排更稳妥。`] },
    { heading:`从${town}去 ${za.code} 前还有空余时间，可以这样用`, paragraphs:[`${p.departure} 前往 ${za.code} 的当天，最后一段自由时间最好控制在${town}住宿地或步行可返回的范围内。`, `这条${town} → ${za.code}送机路线的核心原则是：最后的活动应该容易随时结束，并且不依赖另一辆车把你送回来。这样即使接车时间略有调整，也不会因为人在远处而错过机场班车。`] },
    { heading:`${town}到 ${za.code} 送机价格：拼车 €15，私人车辆按整车计价`, paragraphs:[`${town}到${za.short}的共享班车是 **€15/人/单程**。私人 Vito 最多 5 人 **€${a.vito}**，Sprinter 最多 16 人 **€${a.sprinter}**，均为整车单程价；往返为对应单程的两倍。费用在预订摘要中以欧元显示，并按预订确认以现金支付给司机。`] },
    { heading:returnExtraZh[key].heading, paragraphs:[returnExtraZh[key].paragraph] },
    { heading:`下次从 ${za.code} 抵达${town}时`, paragraphs:[`反方向的到达信息在 [[${za.short}到${town}|${airportKey}-airport-to-${townKey}-transfer]] 页面。那里重点说明机场会合、到达后的酒店道路和第一次进入${town}时更实用的安排。`, `${p.special} 从 ${za.code} 返回${town}时，同样建议在预订前核对酒店完整名称，而不是只依赖镇名。`] },
  ];

  const faq:FaqItem[] = arrival ? [
    { q:`${za.short}到${town}拼车多少钱？`, a:'€15/人/单程；往返为 €30/人。' },
    { q:`${za.code}到${town}大约多久？`, a:`公路估算约 ${time}，距离约 ${distance}。拼车酒店停靠、行李和实际路况可能增加时间。` },
    { q:`${za.short}到${town}私人接送多少钱？`, a:`Vito 单程 €${a.vito}（最多 5 人），Sprinter 单程 €${a.sprinter}（最多 16 人），按整车计价。` },
    { q:`${za.code} 航班延误时，前往${town}的拼车会一直等待吗？`, a:'不要默认会无限等待。请尽早通过 WhatsApp 更新航班变化，由运营方根据当天拼车安排重新确认。' },
    { q:`从 ${za.code} 到${town}后，车辆一定能停在酒店正门吗？`, a:p.faq[0]?.a || '是否能停到门口取决于具体酒店道路，必要时会使用附近安全停靠点。' },
    { q:`预订 ${za.code} 到${town}接机时，为什么每位乘客都要填护照号码？`, a:'这是运营公司用于乘客预订与接送操作的要求，所有乘客都需要填写。' },
    { q:`${za.code} 到${town}的接机可以和返程送机一起预订吗？`, a:'可以。选择“往返”后分别填写抵达和离开航班信息，系统会按两段行程计算价格。' },
    ...p.faq.slice(1,3).map((item) => ({ q: `${za.code} 到${town}路线：${item.q}`, a: item.a })),
  ] : [
    { q:`${town}到${za.short}拼车多少钱？`, a:'€15/人/单程；如果与抵达一起订往返，则总价为两段相加。' },
    { q:`${town}到${za.code}通常要多久？`, a:`公路估算约 ${time}，距离约 ${distance}。酒店接客顺序和机场预留时间不包含在简单路程数字里。` },
    { q:`从${town}去 ${za.code} 的拼车接车时间每天固定吗？`, a:'不是。接车会根据实际离港航班、酒店位置和共享车辆安排通过 WhatsApp 确认。' },
    { q:`${za.code} 离港航班改晚后，${town}酒店接车时间可以自己顺延吗？`, a:'不建议自行计算。把新航班信息发给运营方并等待新的确认时间。' },
    { q:`从${town}去 ${za.code} 时，酒店接车一定会到门口吗？`, a:p.faq[0]?.a || '取决于酒店道路条件，必要时会确认附近安全集合点。' },
    { q:`${town}到${za.short}私人车多少钱？`, a:`Vito €${a.vito} / 单程，Sprinter €${a.sprinter} / 单程，均按整车收费。` },
    { q:`预订${town}到 ${za.code} 送机时也需要护照号码吗？`, a:'需要。护照信息是运营公司的乘客预订要求，与路线长短无关。' },
    ...p.faq.slice(1,3).map((item) => ({ q: `${town}去 ${za.code} 前：${item.q}`, a: item.a })),
  ];

  return { ...en, title, description, primaryKeyword:routeKeywords(airportKey,townKey,direction)[0], secondaryKeywords:routeKeywords(airportKey,townKey,direction).slice(1), eyebrow:arrival?`${za.code} → ${town} 机场接送`:`${town} → ${za.code} 酒店送机`, h1:arrival?`${za.short}到${town}机场接送`:`${town}到${za.short}送机`, lead:arrival?`从${za.short}（${za.code}）前往${town}，可选 €15/人的拼车班车，也可预订私人 Mercedes Vito 或 Sprinter。页面包含距离、车程、酒店道路、抵达建议和返程规划。`:`从${town}酒店前往${za.short}（${za.code}），拼车 €15/人，也可使用私人 Vito 或 Sprinter。接车时间根据航班和酒店位置确认。`, sections, faq };
}

function zhDestinationPage(en:SeoPage, townKey:keyof typeof towns):SeoPage {
  const t = towns[townKey]; const town = zhTownNames[townKey]; const p = townProfiles[townKey];
  const title = `${town}机场接送｜ASR / NAV €15拼车`;
  const description = `${town}机场接送指南：比较开塞利 ASR 与内夫谢希尔 NAV，拼车 €15/人，私人 Vito/Sprinter，含酒店道路、景点、住宿与送机建议。`;
  const sections:ContentSection[] = [
    { heading:`住在${town}，机场接送需要先知道什么`, paragraphs:[p.overview,p.special] },
    { heading:`${town}到两座机场的距离与时间`, paragraphs:[`开塞利机场（ASR）到${town}约 **${t.distanceKayseri}**，通常 **${zhTime(t.timeKayseri)}**；内夫谢希尔机场（NAV）约 **${t.distanceNevsehir}**，通常 **${zhTime(t.timeNevsehir)}**。NAV 往往公路更近，但最终应该结合航班时刻和机票价格选择。可以先看 [[开塞利还是内夫谢希尔机场|kayseri-or-nevsehir-airport-for-cappadocia]]。`] },
    { heading:`${town}酒店道路与上下客特点`, paragraphs:[p.access] },
    { heading:`抵达${town}后可以先做什么`, paragraphs:[p.arrival], bullets:p.landmarks },
    { heading:`${town}常见住宿名称与接车识别`, paragraphs:[`以下酒店名称用于帮助理解${town}住宿分布，并不是推荐排名。预订时仍应填写你实际预订的完整酒店名称。`], bullets:p.hotels },
    { heading:`从${town}返回机场怎么安排`, paragraphs:[p.departure, `返回 ASR 请看 [[${town}到开塞利机场|${townKey}-to-kayseri-airport-transfer]]；返回 NAV 请看 [[${town}到内夫谢希尔机场|${townKey}-to-nevsehir-airport-transfer]]。也可以在表单中一次选择往返并分别填写两段航班。`] },
    { heading:`直接查看${town}的四条主要机场路线`, paragraphs:[`抵达路线：[[开塞利机场到${town}|kayseri-airport-to-${townKey}-transfer]]、[[内夫谢希尔机场到${town}|nevsehir-airport-to-${townKey}-transfer]]。离开路线：[[${town}到开塞利机场|${townKey}-to-kayseri-airport-transfer]]、[[${town}到内夫谢希尔机场|${townKey}-to-nevsehir-airport-transfer]]。每条页面都按对应机场说明价格、道路和接送细节。`] },
  ];
  const faq:FaqItem[] = [
    { q:`${town}机场拼车多少钱？`, a:'从 ASR 或 NAV 往返支持区域都是 €15/人/单程。' },
    { q:`${town}私人接送价格是多少？`, a:'ASR：Vito €90、Sprinter €110；NAV：Vito €80、Sprinter €90，均为整车单程价。' },
    { q:`从哪个机场去${town}更近？`, a:`NAV 约 ${t.distanceNevsehir}，ASR 约 ${t.distanceKayseri}；但航班时间往往比单纯距离更重要。` },
    { q:`${town}可以预订往返吗？`, a:'可以。选择往返后填写抵达和离开航班，系统按两段行程计算。' },
    { q:'费用怎么支付？', a:'价格以欧元显示，并按预订确认以现金支付给司机；如需使用其他支持的现金币种，以预订时确认的汇率为准。' },
    { q:`预订${town}机场接送时，为什么每位乘客都要填护照号码？`, a:'这是运营公司的乘客预订和接送操作要求。' },
    ...p.faq,
  ];
  return { ...en, title, description, primaryKeyword:`${town}机场接送`, secondaryKeywords:[`${town}机场班车`,`${town}接机`,`${town}送机`,`卡帕多奇亚${town}接送`, `${t.name} airport transfer`], eyebrow:`${town}机场接送指南`, h1:`${town}机场接送`, lead:`比较开塞利机场和内夫谢希尔机场到${town}的路线，预订 €15/人的机场拼车或私人 Vito / Sprinter，并了解酒店道路、抵达与返程注意事项。`, sections, faq };
}

function zhAirportHub(en:SeoPage, airportKey:'kayseri'|'nevsehir'):SeoPage {
  const a=airports[airportKey]; const za=zhAirportNames[airportKey];
  const title=`${za.short}到卡帕多奇亚｜${za.code} €15拼车接送`;
  const description=`${za.short}（${za.code}）前往格雷梅、于尔居普、乌奇希萨尔、阿瓦诺斯、奥塔西萨和恰武辛。拼车 €15/人，Vito €${a.vito}，Sprinter €${a.sprinter}。`;
  const distances = airportKey==='kayseri'
    ? '格雷梅约 75 km / 60–75 分钟，于尔居普约 70 km / 60–75 分钟，乌奇希萨尔约 80 km / 70–85 分钟，阿瓦诺斯约 70 km / 60–75 分钟，奥塔西萨约 75 km / 60–75 分钟，恰武辛约 75 km / 65–80 分钟。'
    : '格雷梅约 40 km / 35–45 分钟，于尔居普约 50 km / 45–60 分钟，乌奇希萨尔约 35 km / 30–40 分钟，阿瓦诺斯约 38 km / 35–50 分钟，奥塔西萨约 45 km / 40–50 分钟，恰武辛约 42 km / 40–55 分钟。';
  const sections:ContentSection[]=[
    {heading:`${za.full}（${za.code}）与卡帕多奇亚`,paragraphs:[`${za.short}是前往卡帕多奇亚中部酒店区的两座主要机场之一。共享班车覆盖格雷梅、于尔居普、乌奇希萨尔、阿瓦诺斯、奥塔西萨和恰武辛。预订时最好选择实际酒店所在城镇，而不是只写“Cappadocia”。`,`拼车为 **€15/人/单程**。私人 Vito 最多 5 人 **€${a.vito}**，Sprinter 最多 16 人 **€${a.sprinter}**；往返正好是两倍。`]},
    {heading:`在 ${za.code} 落地前需要准备的信息`,paragraphs:[`${za.code} 接机表单需要实际运营航班号、乘客姓名、护照号码、人数、完整酒店名称和 WhatsApp 联系方式。领取行李后按照确认的会合信息前往接车点，接机牌可使用预订乘客姓名。`]},
    {heading:`从 ${za.code} 到六个主要住宿区的公路参考`,paragraphs:[distances,`${za.code} 上述数字都是正常道路规划范围，不包含行李领取、机场会合以及拼车可能增加的其他酒店停靠时间。`]},
    {heading:`${za.code} 私人车价格为什么与另一座机场不同`,paragraphs:[`私人接送按机场和整车计价，因为实际公路里程和运营不同。${za.code} 的 Vito 为 €${a.vito}，Sprinter 为 €${a.sprinter}。共享班车则从两座机场都保持 €15/人，因此比较机场时不要把拼车价格和私人包车价格混在一起。`]},
    {heading:`从 ${za.code} 出发后，六个目的地的酒店道路并不一样`,paragraphs:[`${za.code} 班车进入中部酒店区后，格雷梅和乌奇希萨尔常见坡地洞穴酒店，于尔居普既有正常城市道路也有老城区，阿瓦诺斯沿河更分散，奥塔西萨和恰武辛则有较小的村路。选择真实酒店所在城镇后，路线页面会给出更具体的接送建议。`]},
    {heading:`返回 ${za.code} 的送机需要单独确认接车时间`,paragraphs:[`酒店到 ${za.code} 的拼车不会用一个固定的全天时刻表。接车时间根据离港航班、酒店位置和当天其他乘客安排确认。查看 [[卡帕多奇亚到${za.short}班车|cappadocia-to-${airportKey}-airport-shuttle]] 可以进入六条送机路线。`]},
  ];
  const faq:FaqItem[]=[
    {q:`${za.short}到卡帕多奇亚拼车多少钱？`,a:'€15/人/单程，六个支持住宿区同价。'},
    {q:`${za.code}私人 Vito 和 Sprinter 多少钱？`,a:`Vito €${a.vito} / 单程，Sprinter €${a.sprinter} / 单程，均按整车收费。`},
    {q:`${za.code} 接机可以和送机一起预订往返吗？`,a:'可以，往返价格为相应单程的两倍，并分别填写到达和离开航班。'},
    {q:`${za.code} 航班延误后应该怎么办？`,a:'尽快通过 WhatsApp 更新航班信息，等待运营方重新确认拼车安排。'},
    {q:`${za.code} 的 €15 拼车一定是 Mercedes Vito 或 Sprinter 吗？`,a:'不保证。拼车车型会根据当天人数和运营安排变化；如果必须使用指定车型，应选择私人接送。'},
    {q:`预订 ${za.code} 机场接送时，护照号码为什么是必填？`,a:'运营公司要求乘客护照信息用于预订和接送操作。'},
  ];
  return {...en,title,description,primaryKeyword:`${za.short}卡帕多奇亚接送`,secondaryKeywords:[`${za.short}班车`,`${za.code}接机`,`${za.short}到格雷梅`,`${airportKey} airport transfer`,`卡帕多奇亚${za.code}接送`],eyebrow:`${za.code} 机场枢纽`,h1:`${za.short}接送：前往卡帕多奇亚酒店`,lead:`从${za.full}（${za.code}）前往卡帕多奇亚六个主要酒店区。拼车 €15/人，也可预订私人 Vito 或 Sprinter。`,sections,faq};
}

function zhAirportShuttle(en:SeoPage, airportKey:'kayseri'|'nevsehir'):SeoPage {
  const a=airports[airportKey], za=zhAirportNames[airportKey];
  const sections:ContentSection[]=[
    {heading:`${za.code} 拼车班车适合什么行程`,paragraphs:[`这项服务用于 ${za.short} 与格雷梅、于尔居普、乌奇希萨尔、阿瓦诺斯、奥塔西萨、恰武辛之间的机场—酒店接送。价格为 **€15/人/单程**，不是当地出租车，也不是固定线路公共巴士。`]},
    {heading:`从 ${za.code} 会合到酒店下车`,paragraphs:[`在 ${za.code} 落地后先领取托运行李，再按照 WhatsApp 确认的会合信息前往接车点。由于拼车可能包含其他乘客和酒店，从 ${za.code} 离开机场到抵达酒店的具体时间会随当天组合变化。`]} ,
    {heading:`${za.code} 拼车为什么需要每位乘客的完整信息`,paragraphs:[`运营公司要求姓名和护照号码用于 ${za.code} 乘客预订与接送操作。提交前的预订摘要会显示乘客数量和已填写信息，方便检查。`]} ,
    {heading:`${za.code} 拼车和私人接送怎么选`,paragraphs:[`拼车最适合希望控制预算的个人或小团体。若希望机场出来后直接去酒店、携带较多行李或团队人数较多，可选择 Vito €${a.vito}（最多5人）或 Sprinter €${a.sprinter}（最多16人）。`]},
    {heading:`${za.code} 班车进入洞穴酒店区域后的最后一段`,paragraphs:[`从 ${za.code} 出发的共享班车离开主路后，是否能到酒店门口取决于实际城镇与酒店道路。较大的车辆有时会使用附近安全点，而不是强行进入不适合等待的窄路。`]} ,
    {heading:`也可以从酒店返回 ${za.code}`,paragraphs:[`返程同样是 €15/人/单程。根据离港航班确认接车时间，并在窗口开始前准备好行李。详细送机路线可从 [[卡帕多奇亚到${za.short}|cappadocia-to-${airportKey}-airport-shuttle]] 查看。`]},
  ];
  return {...en,title:`${za.short}班车｜卡帕多奇亚拼车 €15`,description:`${za.short}（${za.code}）卡帕多奇亚机场班车 €15/人，覆盖格雷梅、于尔居普、乌奇希萨尔、阿瓦诺斯、奥塔西萨和恰武辛，支持往返与私人车。`,primaryKeyword:`${za.short}班车`,secondaryKeywords:[`${za.code} shuttle`,`卡帕多奇亚${za.code}拼车`,`${za.short}接机`,`机场到酒店拼车`],eyebrow:`${za.code} 共享机场班车`,h1:`${za.short}到卡帕多奇亚班车`,lead:`€15/人/单程，从 ${za.code} 到六个主要卡帕多奇亚住宿区。可选单程或往返，也可升级私人 Vito / Sprinter。`,sections,faq:[
    {q:`${za.code} 拼车班车多少钱？`,a:'€15/人/单程，往返 €30/人。'},
    {q:`${za.code} 拼车会送到已确认酒店吗？`,a:'服务覆盖六个主要住宿区；具体酒店是否能停到门口取决于道路和车辆安全条件。'},
    {q:`${za.code} 航班延误后，拼车安排怎么办？`,a:'尽快发 WhatsApp 更新航班，不要假设拼车会无限等待。'},
    {q:`${za.code} 的共享班车可以保证 Mercedes 车型吗？`,a:'共享班车车型按当天运营安排；需要指定 Vito 或 Sprinter 时应选择私人接送。'},
    {q:`从酒店返回 ${za.code} 的拼车也是 €15 吗？`,a:'是，支持区域到同一机场也是 €15/人/单程。'},
    {q:`为什么 ${za.code} 拼车预订要填写护照号码？`,a:'这是运营公司的预订与乘客接送要求。'},
  ]};
}

function zhToCappadocia(en:SeoPage, airportKey:'kayseri'|'nevsehir'):SeoPage {
  const a=airports[airportKey], za=zhAirportNames[airportKey];
  return {...en,title:`${za.short}到卡帕多奇亚｜€15拼车与酒店接送`,description:`从${za.short}（${za.code}）到卡帕多奇亚：格雷梅、于尔居普、乌奇希萨尔、阿瓦诺斯、奥塔西萨、恰武辛路线，拼车 €15/人及私人接送。`,primaryKeyword:`${za.short}到卡帕多奇亚`,secondaryKeywords:[`${za.short}到格雷梅`,`卡帕多奇亚接机`,`${za.code}到卡帕多奇亚`,`${airportKey} to cappadocia transfer`],eyebrow:`${za.code} → 卡帕多奇亚`,h1:`${za.short}到卡帕多奇亚交通与接送`,lead:`“到卡帕多奇亚”实际上可能是六个不同酒店城镇。先确定住宿地，再选择 €15 拼车或私人 Vito / Sprinter。`,sections:[
    {heading:`从 ${za.code} 出发前先确定酒店在哪个城镇`,paragraphs:[`从 ${za.code} 可前往格雷梅、于尔居普、乌奇希萨尔、阿瓦诺斯、奥塔西萨和恰武辛，但它们不是同一个下车点。完整酒店名称会决定最后的道路和合理车程。`]} ,
    {heading:`从 ${za.code} 出发的价格`,paragraphs:[`共享班车从 ${za.code} 到支持区域统一 **€15/人/单程**。私人 Vito 为 **€${a.vito}**，Sprinter 为 **€${a.sprinter}**，均按整车单程计价；往返为两倍。`]},
    {heading:`从 ${za.code} 前往卡帕多奇亚时，格雷梅并不是唯一目的地`,paragraphs:[`格雷梅搜索量很高，但从 ${za.code} 出发时，如果酒店在于尔居普、乌奇希萨尔、阿瓦诺斯、奥塔西萨或恰武辛，应使用对应路线页面。这样能看到真实距离、酒店入口和返程建议。`]} ,
    {heading:`从 ${za.code} 抵达当天不要把时间排得太死`,paragraphs:[`从 ${za.code} 抵达后，航班落地、行李领取和拼车乘客组合都会影响真正到酒店的时间。如果提早抵达，可把行李交给酒店后先在住宿城镇附近活动，不必为了“利用时间”马上安排远距离景点。`]} ,
    {heading:`${za.code} 往返一次提交，更容易整理两段航班`,paragraphs:[`如果返程仍使用 ${za.code}，在表单选择“往返”可以同时填写到达与离开航班。两段航班仍然分别记录，因为机场会合与酒店接车属于不同操作。`]},
    {heading:'从卡帕多奇亚返回机场',paragraphs:[`返程总入口在 [[卡帕多奇亚到${za.short}班车|cappadocia-to-${airportKey}-airport-shuttle]]，然后可以进入六个酒店城镇的详细送机页面。`]},
  ],faq:[
    {q:`${za.short}到卡帕多奇亚多少钱？`,a:'拼车 €15/人/单程；私人车按机场固定价格。'},
    {q:`从 ${za.code} 预订时，只写“Cappadocia”作为酒店地址可以吗？`,a:'不建议。应填写真实酒店名称和所在城镇。'},
    {q:`从 ${za.code} 可以去格雷梅以外的支持城镇吗？`,a:'可以，支持于尔居普、乌奇希萨尔、阿瓦诺斯、奥塔西萨和恰武辛。'},
    {q:`从 ${za.code} 抵达后可以同时预订返程吗？`,a:'可以，系统会收集两段航班并把相应单程价格加倍。'},
  ]};
}

function zhReverseHub(en:SeoPage, airportKey:'kayseri'|'nevsehir'):SeoPage {
  const a=airports[airportKey], za=zhAirportNames[airportKey];
  return {...en,title:`卡帕多奇亚到${za.short}｜酒店送机 €15`,description:`格雷梅、于尔居普、乌奇希萨尔、阿瓦诺斯、奥塔西萨、恰武辛到${za.short}（${za.code}）酒店送机。拼车 €15/人，私人 Vito/Sprinter。`,primaryKeyword:`卡帕多奇亚到${za.short}班车`,secondaryKeywords:[`卡帕多奇亚${za.code}送机`,`酒店到${za.short}`,`${za.short}送机`,`${za.code} hotel shuttle`],eyebrow:`卡帕多奇亚 → ${za.code}`,h1:`卡帕多奇亚到${za.short}班车`,lead:`从六个支持酒店区前往 ${za.code}。拼车 €15/人/单程，接车时间根据实际离港航班和酒店顺序确认。`,sections:[
    {heading:'送机不是一个固定每天发车时刻',paragraphs:[`酒店到 ${za.code} 的拼车会结合离港航班、住宿位置和当天其他乘客确定。最终 WhatsApp 接车时间比“提前几小时离开”这样的通用规则更有用。`]},
    {heading:`去 ${za.code} 前，退房、早餐和行李应在接车窗口前完成`,paragraphs:[`前往 ${za.code} 的拼车可能在接到你后继续前往其他酒店，因此车辆不能无限等待。尤其是洞穴酒店或需要步行到安全集合点的住宿，应更早把行李准备好。`]} ,
    {heading:`去 ${za.code} 时，六个城镇的送机情况并不一样`,paragraphs:[`前往 ${za.code} 时，格雷梅有热气球清晨交通和坡地洞穴酒店；乌奇希萨尔有城堡斜坡；阿瓦诺斯跨河分布；于尔居普、奥塔西萨和恰武辛也各有不同道路。应进入对应城镇送机页面，而不是只看一个统一时间。`]} ,
    {heading:'拼车与私人车价格',paragraphs:[`拼车 **€15/人/单程**。私人 Vito **€${a.vito}**（最多5人），Sprinter **€${a.sprinter}**（最多16人），均为整车单程价格。`]},
    {heading:`去 ${za.code} 的航班变化后要重新确认`,paragraphs:[`如果从 ${za.code} 离港的航班改签或延误，请把新的航班号和时间发到 WhatsApp。不要自行把接车时间等比例后移，因为当天拼车还涉及其他乘客。`]} ,
    {heading:`选择前往 ${za.code} 时真正的出发城镇`,paragraphs:[`前往 ${za.code} 时，格雷梅、于尔居普、乌奇希萨尔、阿瓦诺斯、奥塔西萨和恰武辛都有独立送机页面，可以看到酒店道路、当地最后活动和对应距离。`]} ,
  ],faq:[
    {q:`卡帕多奇亚到${za.short}拼车多少钱？`,a:'€15/人/单程。'},
    {q:`前往 ${za.code} 的酒店接车时间什么时候确定？`,a:'根据实际离港航班和酒店接客计划，通过 WhatsApp 确认。'},
    {q:`私人车辆送到 ${za.code} 多少钱？`,a:`Vito €${a.vito}，Sprinter €${a.sprinter}，按整车单程计价。`},
    {q:`从 ${za.code} 离港的航班延误后怎么办？`,a:'尽快更新航班并等待新的接车确认。'},
  ]};
}

const staticPages:Record<string, Omit<SeoPage,'slug'|'related'|'route'>> = {
  'cappadocia-shuttle-transfer': {
    title:'卡帕多奇亚机场拼车｜ASR / NAV €15接送',
    description:'卡帕多奇亚机场拼车接送：开塞利 ASR 与内夫谢希尔 NAV 到格雷梅等六个酒店区，€15/人/单程，支持往返与私人接送。',
    primaryKeyword:'卡帕多奇亚机场拼车', secondaryKeywords:['卡帕多奇亚机场班车','Cappadocia shuttle transfer','卡帕多奇亚接机','开塞利机场班车','内夫谢希尔机场班车'],
    eyebrow:'主打机场拼车服务', h1:'卡帕多奇亚机场拼车接送',
    lead:'从开塞利机场（ASR）或内夫谢希尔机场（NAV）前往卡帕多奇亚主要酒店区，拼车统一 €15/人/单程。需要更直接的行程时也可选择私人 Vito 或 Sprinter。',
    sections:[
      {heading:'€15 拼车服务覆盖哪些地方',paragraphs:['共享机场班车连接 ASR、NAV 与格雷梅、于尔居普、乌奇希萨尔、阿瓦诺斯、奥塔西萨、恰武辛。价格是 **€15/人/单程**，两座机场同价；往返为 €30/人。穆斯塔法帕夏（Mustafapaşa）不属于标准拼车范围，需要询问私人接送。']},
      {heading:'这不是固定站点公共巴士',paragraphs:['机场拼车以已确认预订为基础，根据航班和酒店组织车辆。乘客不需要拖着行李去卡帕多奇亚某个统一公交站，而是按照确认信息在机场会合，并前往实际酒店或附近安全下客点。']},
      {heading:'为什么拼车时间不是一个固定数字',paragraphs:['公路距离可以估算，但拼车还包括行李领取、机场会合、等待同组乘客以及多个酒店停靠。路线页面提供正常道路时间，同时明确说明它不是精确到分钟的到达承诺。']},
      {heading:'什么时候更适合私人接送',paragraphs:['如果团队人数较多、行李多、抵达很晚，或者希望机场出来后不经过其他酒店，可以考虑私人 Vito 或 Sprinter。私人价格按机场和整车计算，不按人数收取。']},
      {heading:'往返预订可以一次提交',paragraphs:['表单支持单程和往返。往返需要分别填写到达航班和离开航班，以便机场会合与酒店送机分别安排。']},
      {heading:'从这里进入具体机场与路线',paragraphs:['查看 [[开塞利机场班车|kayseri-airport-shuttle]]、[[内夫谢希尔机场班车|nevsehir-airport-shuttle]]，或者直接进入格雷梅、于尔居普、乌奇希萨尔、阿瓦诺斯、奥塔西萨、恰武辛的机场路线页面。']},
    ],
    faq:[
      {q:'卡帕多奇亚机场拼车多少钱？',a:'从 ASR 或 NAV 都是 €15/人/单程，往返 €30/人。'},
      {q:'拼车会送到酒店吗？',a:'服务按酒店区域安排；道路不适合大型车辆时会确认附近安全停靠点。'},
      {q:'两座机场价格一样吗？',a:'拼车同价；私人 Vito/Sprinter 因机场不同而价格不同。'},
      {q:'可以临时到机场再找班车吗？',a:'建议提前预订，因为车辆按已确认航班和乘客组织。'},
      {q:'航班晚点怎么办？',a:'尽早通过 WhatsApp 更新航班并等待新的运营确认。'},
      {q:'怎么付款？',a:'按确认方式现金支付给司机，网站以欧元显示价格。'},
    ],
  },
  'cappadocia-airport-transfer': {
    title:'卡帕多奇亚机场接送｜ASR / NAV 拼车与私人包车',
    description:'卡帕多奇亚机场接送：开塞利 ASR、内夫谢希尔 NAV 到六个主要酒店区。共享班车 €15/人，私人 Vito/Sprinter，支持接机与送机。',
    primaryKeyword:'卡帕多奇亚机场接送',secondaryKeywords:['卡帕多奇亚接机','卡帕多奇亚送机','Cappadocia airport transfer','卡帕多奇亚机场包车','卡帕多奇亚机场班车'],
    eyebrow:'机场接机与送机',h1:'卡帕多奇亚机场接送',lead:'同一站点同时提供 €15/人的机场拼车和私人 Vito / Sprinter。先确认你的航班是 ASR 还是 NAV，再选择真实酒店城镇。',
    sections:[
      {heading:'卡帕多奇亚并不是只有一座机场',paragraphs:['游客主要使用开塞利机场（ASR）和内夫谢希尔机场（NAV）。NAV 通常离中部卡帕多奇亚更近，ASR 航班选择有时更方便，因此“哪座机场更好”要结合机票而不是只看距离。']},
      {heading:'拼车和私人接送是两种不同产品',paragraphs:['共享班车 **€15/人/单程**，车辆与停靠顺序根据当天预订安排。私人 Vito / Sprinter 是一组客人独立用车，按机场和整车计价，适合需要直接路线或较大团队。']},
      {heading:'六个主要酒店区域各自有独立路线',paragraphs:['格雷梅、于尔居普、乌奇希萨尔、阿瓦诺斯、奥塔西萨和恰武辛都有不同道路、住宿密度和最后停靠条件，因此本站为这些目的地分别提供详细路线页面。']},
      {heading:'接机需要正确航班与乘客信息',paragraphs:['预订需要运营航班号、酒店、WhatsApp、乘客姓名和护照号码。落地后先领取行李，再按确认的会合信息接车。']},
      {heading:'送机的重点是接车时间和酒店集合点',paragraphs:['返程接车根据离港航班和拼车顺序确认，而不是统一规定“提前三小时离开”。洞穴酒店和村路还可能需要步行到附近安全点。']},
      {heading:'先看价格还是先看机场？',paragraphs:['如果航班尚未购买，先查看 [[开塞利还是内夫谢希尔机场|kayseri-or-nevsehir-airport-for-cappadocia]]。已经有机票，则直接进入对应机场或酒店城镇页面。']},
    ],faq:[
      {q:'卡帕多奇亚机场接送多少钱？',a:'拼车 €15/人/单程；私人车根据 ASR/NAV 和车型定价。'},
      {q:'可以接机也可以送机吗？',a:'可以，支持单程和往返。'},
      {q:'必须提前知道酒店吗？',a:'最好填写完整酒店名称，因为城镇和酒店道路决定实际下客位置。'},
      {q:'护照号码是必须的吗？',a:'是，运营公司要求所有乘客提供。'},
      {q:'可以直接付信用卡吗？',a:'当前流程为按确认方式现金支付给司机。'},
    ],
  },
  'private-airport-transfer-cappadocia': {
    title:'卡帕多奇亚私人机场接送｜Mercedes Vito / Sprinter',
    description:'卡帕多奇亚私人机场接送：Vito 最多5人，Sprinter 最多16人。ASR 单程 €90/€110，NAV 单程 €80/€90，按整车收费。',
    primaryKeyword:'卡帕多奇亚私人机场接送',secondaryKeywords:['卡帕多奇亚包车接机','Cappadocia private transfer','Mercedes Vito 卡帕多奇亚','Mercedes Sprinter 卡帕多奇亚','卡帕多奇亚专车'],
    eyebrow:'独立车辆直达酒店',h1:'卡帕多奇亚私人机场接送',lead:'需要更直接的机场—酒店行程时，可选择 Mercedes Vito 或 Sprinter。私人价格按整车和机场计价，不按乘客人数收取。',
    sections:[
      {heading:'Vito 适合最多 5 位乘客',paragraphs:['Mercedes Vito 更适合情侣、家庭和小团体。开塞利 ASR 单程 €90，内夫谢希尔 NAV 单程 €80；往返分别为 €180 和 €160。']},
      {heading:'Sprinter 适合最多 16 位乘客',paragraphs:['Mercedes Sprinter 适合更大团体或需要更多行李空间的预订。ASR 单程 €110，NAV 单程 €90；往返分别为 €220 和 €180。']},
      {heading:'私人接送和 €15 拼车的主要区别',paragraphs:['私人车辆只服务一个预订团队，不需要因为无关酒店停靠而延长路线。拼车成本更低，但时间会受到当天乘客和酒店顺序影响。']},
      {heading:'洞穴酒店道路仍需要确认',paragraphs:['选择私人 Vito 并不意味着所有洞穴酒店都能保证停到门口。老街的道路宽度、台阶和停车限制仍然存在，酒店名称必须填写准确。']},
      {heading:'适合哪些情况',paragraphs:['多人同行、行李较多、需要更直接路线、抵达时间特殊或对车辆类型有明确要求时，私人接送更合适。单人或两人更看重预算时，€15 拼车通常更划算。']},
      {heading:'付款与往返',paragraphs:['私人价格为整车单程价，往返正好两倍。网站以欧元显示金额，按确认方式现金支付给司机。']},
    ],faq:[
      {q:'Vito 最多坐几个人？',a:'最多 5 位乘客。'},
      {q:'Sprinter 最多坐几个人？',a:'最多 16 位乘客。'},
      {q:'NAV 与 ASR 私人车价格一样吗？',a:'不一样。NAV Vito €80 / Sprinter €90；ASR Vito €90 / Sprinter €110。'},
      {q:'私人接送是按人收费吗？',a:'不是，按整车收费。'},
      {q:'可以往返吗？',a:'可以，价格为对应单程的两倍。'},
    ],
  },
  'airport-transfer-prices': {
    title:'卡帕多奇亚机场接送价格｜€15 拼车与私人车价目',
    description:'卡帕多奇亚机场接送价格：ASR/NAV 拼车 €15/人/单程；ASR Vito €90、Sprinter €110；NAV Vito €80、Sprinter €90。往返正好两倍。',
    primaryKeyword:'卡帕多奇亚机场接送价格',secondaryKeywords:['卡帕多奇亚班车价格','开塞利机场接送价格','内夫谢希尔机场接送价格','Cappadocia airport transfer prices','卡帕多奇亚包车价格'],
    eyebrow:'透明固定价格',h1:'卡帕多奇亚机场接送价格',lead:'共享拼车从两座机场都是 €15/人/单程；私人车按机场和车型计价。这里把单程、往返和车辆容量一次说明清楚。',
    sections:[
      {heading:'共享机场班车',paragraphs:['开塞利 ASR 和内夫谢希尔 NAV 到支持的六个酒店区都是 **€15/人/单程**。往返为 **€30/人**。']},
      {heading:'开塞利机场私人接送',paragraphs:['ASR → 卡帕多奇亚：Vito 最多5人 **€90/车/单程**；Sprinter 最多16人 **€110/车/单程**。往返分别 €180 和 €220。']},
      {heading:'内夫谢希尔机场私人接送',paragraphs:['NAV → 卡帕多奇亚：Vito 最多5人 **€80/车/单程**；Sprinter 最多16人 **€90/车/单程**。往返分别 €160 和 €180。']},
      {heading:'为什么拼车两座机场同价，私人车不同价',paragraphs:['共享服务按座位售卖并按整体运营组织，因此两个机场统一 €15/人。私人车是一组客人独立用车，实际路线和运营成本不同，所以 ASR 与 NAV 价格不同。']},
      {heading:'什么时候按人数，什么时候按整车',paragraphs:['拼车总价 = €15 × 乘客人数 × 行程段数。私人车总价与 1–5 人或 1–16 人中的实际人数无关，只要不超过车型上限，就是对应整车价格。']},
      {heading:'付款方式',paragraphs:['网站以 EUR 显示。当前流程为按确认方式现金支付给司机；如果希望使用 USD 或 TRY 现金，应以预订时确认的汇率为准。']},
    ],faq:[
      {q:'两座机场拼车都是 €15 吗？',a:'是，ASR 和 NAV 都是 €15/人/单程。'},
      {q:'儿童也按人计算吗？',a:'拼车按预订乘客人数计算；如有儿童座椅等需求应在备注中说明并确认。'},
      {q:'Vito 两个人和五个人价格一样吗？',a:'是，只要不超过 5 人，私人 Vito 按整车固定价。'},
      {q:'Sprinter 适合 16 人吗？',a:'最多 16 位乘客；实际行李量很大时建议提前说明。'},
      {q:'往返有折扣吗？',a:'当前规则是单程价格的正好两倍，没有另外折扣。'},
      {q:'价格包括酒店接送吗？',a:'支持区域按已确认酒店或附近安全点接送。'},
      {q:'航班改签会自动改变价格吗？',a:'路线和车型不变时通常不因单纯时间变化改变公开价格，但实际新安排需要重新确认。'},
      {q:'怎么付款？',a:'按确认方式现金支付给司机。'},
    ],
  },
  'hotel-to-airport-transfer': {
    title:'卡帕多奇亚酒店到机场送机｜ASR / NAV €15 拼车',
    description:'卡帕多奇亚酒店到机场送机：格雷梅、于尔居普、乌奇希萨尔、阿瓦诺斯、奥塔西萨、恰武辛到 ASR 或 NAV，拼车 €15/人，支持私人车。',
    primaryKeyword:'卡帕多奇亚酒店到机场送机',secondaryKeywords:['格雷梅送机','卡帕多奇亚酒店机场班车','hotel to airport Cappadocia','卡帕多奇亚送机','ASR NAV 送机'],
    eyebrow:'酒店 → 机场',h1:'卡帕多奇亚酒店到机场送机',lead:'从支持的卡帕多奇亚酒店区前往开塞利 ASR 或内夫谢希尔 NAV。拼车 €15/人，接车时间按实际离港航班确认。',
    sections:[
      {heading:'送机预订最重要的是离港航班',paragraphs:['酒店到机场的接车时间不是按一个公开固定表决定，而是根据离港航班、酒店位置和共享车辆顺序确认。填写正确航班号比自己估算“提前几小时”更可靠。']},
      {heading:'退房和行李不要拖到车辆到达后',paragraphs:['共享车辆还可能继续接其他酒店，因此应在接车窗口前完成退房、结账和行李整理。道路不适合大型车辆时，还要预留从酒店入口走到安全集合点的时间。']},
      {heading:'六个城镇各自有送机页面',paragraphs:['格雷梅、于尔居普、乌奇希萨尔、阿瓦诺斯、奥塔西萨和恰武辛的道路与最后活动建议不同。选择实际城镇后，可以查看更具体的 ASR / NAV 送机信息。']},
      {heading:'拼车与私人车',paragraphs:['拼车为 €15/人/单程。私人 Vito 与 Sprinter 适合需要固定整车、更多行李空间或希望直接前往机场的团队。']},
      {heading:'航班变化后要更新接车计划',paragraphs:['如果航班被延误、提前或改签，把新的航班信息发到 WhatsApp，并等待新的接车确认。不要自行按照变动分钟数推算。']},
    ],faq:[
      {q:'酒店到机场拼车多少钱？',a:'€15/人/单程，到 ASR 或 NAV 同价。'},
      {q:'什么时候告诉我接车时间？',a:'根据实际航班和酒店安排确认后通过 WhatsApp 通知。'},
      {q:'可以从洞穴酒店接吗？',a:'可以请求；若道路不适合大型车辆，会确认附近安全点。'},
      {q:'可以私人送机吗？',a:'可以，Vito 和 Sprinter 按机场固定整车价格。'},
      {q:'航班取消怎么办？',a:'尽快联系 WhatsApp 更新情况并重新确认安排。'},
    ],
  },
  'cappadocia-airport': {
    title:'卡帕多奇亚机场指南｜NAV 与 ASR 怎么选',description:'卡帕多奇亚机场指南：内夫谢希尔 NAV 与开塞利 ASR 的位置、代码、到格雷梅等地距离、€15 机场班车与私人接送。',primaryKeyword:'卡帕多奇亚机场',secondaryKeywords:['卡帕多奇亚最近机场','Cappadocia airport','卡帕多奇亚机场代码','NAV ASR','格雷梅机场'],eyebrow:'机场入门指南',h1:'卡帕多奇亚机场：NAV、ASR 与酒店接送',lead:'卡帕多奇亚没有一个叫“Cappadocia Airport”且覆盖所有游客的单一机场。大多数行程会在 NAV 和 ASR 之间选择。',sections:[
      {heading:'两座主要机场：NAV 与 ASR',paragraphs:['NAV 是内夫谢希尔卡帕多奇亚机场，ASR 是开塞利埃尔基莱特机场。两座机场都可以预订 €15/人的酒店拼车和私人接送。']},
      {heading:'哪座机场离格雷梅更近',paragraphs:['NAV 到格雷梅约 40 km / 35–45 分钟，ASR 约 75 km / 60–75 分钟。距离上 NAV 更近，但航班班次和票价可能使 ASR 更合适。']},
      {heading:'其他城镇的距离也不同',paragraphs:['乌奇希萨尔从 NAV 约 35 km，是较短组合；于尔居普从 NAV 约 50 km；ASR 到多个中心城镇约 70–80 km。具体路线应按酒店城镇查看。']},
      {heading:'机场代码不要填错',paragraphs:['机票上看到 ASR 就选择开塞利；看到 NAV 就选择内夫谢希尔。不存在常规商业机场代码“CAPP”。']},
      {heading:'从机场到酒店的两种选择',paragraphs:['共享班车 €15/人/单程；私人 Vito/Sprinter 按机场与整车定价。']},
      {heading:'购买机票前可以先比较',paragraphs:['如果两座机场都有合适航班，查看 [[离卡帕多奇亚最近的机场|nearest-airport-to-cappadocia]] 和 [[开塞利还是内夫谢希尔|kayseri-or-nevsehir-airport-for-cappadocia]]。']},
    ],faq:[{q:'卡帕多奇亚机场代码是什么？',a:'主要使用 NAV 和 ASR。'},{q:'哪个机场离格雷梅近？',a:'NAV 更近。'},{q:'ASR 还能去卡帕多奇亚吗？',a:'可以，而且航班选择有时更方便。'},{q:'两座机场都有拼车吗？',a:'有，都是 €15/人/单程。'}]},
  'nearest-airport-to-cappadocia': {
    title:'离卡帕多奇亚最近的机场｜NAV 还是 ASR',description:'离卡帕多奇亚最近的机场通常是内夫谢希尔 NAV，但开塞利 ASR 也常用于格雷梅等地。比较距离、航班与机场接送。',primaryKeyword:'离卡帕多奇亚最近的机场',secondaryKeywords:['卡帕多奇亚最近机场','closest airport to Cappadocia','格雷梅最近机场','NAV 机场','ASR 机场'],eyebrow:'机场距离比较',h1:'离卡帕多奇亚最近的机场',lead:'如果只看公路距离，NAV 通常更接近卡帕多奇亚中部；如果看完整旅行时间，ASR 的航班安排也可能更优。',sections:[
      {heading:'NAV 通常是距离更近的答案',paragraphs:['例如 NAV 到格雷梅约 40 km，到乌奇希萨尔约 35 km。对已经有合适 NAV 航班的游客来说，机场到酒店的公路段通常更短。']},
      {heading:'ASR 为什么仍然被大量游客使用',paragraphs:['开塞利 ASR 距离更远，但可能有更合适的直飞、时刻或价格。如果为了“更近”而选择不方便的航班，整体旅行时间反而可能更长。']},
      {heading:'目的地不同，距离排序也要具体看',paragraphs:['格雷梅、于尔居普、乌奇希萨尔、阿瓦诺斯、奥塔西萨、恰武辛到两座机场的距离并不完全一样。本站各目的地页面都列出对应公里和时间。']},
      {heading:'机场接送价格如何比较',paragraphs:['共享班车两座机场都 €15/人，所以拼车价格不会因为选择 NAV 而更便宜。私人车 NAV 比 ASR 价格低一些。']},
      {heading:'最终选择机场的实用顺序',paragraphs:['先看可用航班和落地时间，再看公路距离和私人车价格，最后确认酒店所在城镇。']},
    ],faq:[{q:'离格雷梅最近的是 NAV 吗？',a:'通常是，约 40 km。'},{q:'ASR 会不会太远？',a:'不会，仍是非常常见的卡帕多奇亚机场，只是公路段更长。'},{q:'拼车两座机场同价吗？',a:'是，€15/人/单程。'}]},
  'kayseri-or-nevsehir-airport-for-cappadocia': {
    title:'卡帕多奇亚选开塞利还是内夫谢希尔机场？',description:'开塞利 ASR 与内夫谢希尔 NAV 怎么选：比较到格雷梅等地距离、航班便利、€15 拼车和私人接送价格。',primaryKeyword:'卡帕多奇亚开塞利还是内夫谢希尔机场',secondaryKeywords:['Kayseri vs Nevsehir airport','卡帕多奇亚选哪个机场','NAV ASR 比较','格雷梅机场选择'],eyebrow:'NAV vs ASR',h1:'卡帕多奇亚：开塞利还是内夫谢希尔机场？',lead:'NAV 距离更近，ASR 航班有时更方便。正确选择不是只看地图，而是把航班、酒店城镇和接送方式一起比较。',sections:[
      {heading:'距离：NAV 通常占优势',paragraphs:['NAV 到格雷梅约 40 km，ASR 约 75 km；到乌奇希萨尔 NAV 约 35 km，ASR 约 80 km。']},
      {heading:'航班：ASR 有时更有优势',paragraphs:['如果 ASR 有更合适的直飞或到达时间，即使多坐几十分钟车，也可能比在伊斯坦布尔长时间等待转机更舒服。']},
      {heading:'拼车价格：两座机场一样',paragraphs:['共享班车都是 €15/人/单程，因此不能只凭拼车价格决定机场。']},
      {heading:'私人车：NAV 价格更低',paragraphs:['NAV Vito €80 / Sprinter €90；ASR Vito €90 / Sprinter €110。']},
      {heading:'最终建议',paragraphs:['已经买票就按机票机场预订接送；还没买票时，先比较航班总时间，再用距离和私人车价格做第二层判断。']},
    ],faq:[{q:'第一次去卡帕多奇亚更推荐 NAV 吗？',a:'如果航班条件相近，NAV 的短公路距离更方便。'},{q:'ASR 到格雷梅很麻烦吗？',a:'不麻烦，只是车程更长，约 60–75 分钟。'},{q:'可以 NAV 到达、ASR 离开吗？',a:'可以，但两段应分别确认，因为路线和私人价格不同。'}]},
  'cappadocia-airport-code': {
    title:'卡帕多奇亚机场代码｜NAV 与 ASR 分别是什么',description:'卡帕多奇亚机场代码说明：NAV 为内夫谢希尔卡帕多奇亚机场，ASR 为开塞利机场。了解格雷梅最近机场与接送路线。',primaryKeyword:'卡帕多奇亚机场代码',secondaryKeywords:['NAV airport','ASR airport','格雷梅机场代码','Cappadocia airport code','内夫谢希尔机场代码'],eyebrow:'IATA 机场代码',h1:'卡帕多奇亚机场代码：NAV 与 ASR',lead:'订机票和机场接送时最重要的是看清 IATA 代码。卡帕多奇亚游客主要使用 NAV 和 ASR。',sections:[
      {heading:'NAV 是什么机场',paragraphs:['NAV = Nevsehir Kapadokya Airport，即内夫谢希尔卡帕多奇亚机场。它通常离格雷梅、乌奇希萨尔等中部住宿区更近。']},
      {heading:'ASR 是什么机场',paragraphs:['ASR = Kayseri Erkilet Airport，即开塞利埃尔基莱特机场。公路距离更长，但航班选择可能更丰富。']},
      {heading:'没有常规商业代码 CAPP',paragraphs:['如果在搜索中看到“Cappadocia airport code”，不要把目的地误写成 CAPP。实际机票和接送应按 NAV 或 ASR。']},
      {heading:'预订接送时按机票代码选择',paragraphs:['机票显示 NAV 就选内夫谢希尔，显示 ASR 就选开塞利。错误机场会直接导致路线和私人价格错误。']},
    ],faq:[{q:'Cappadocia 的机场代码是 CAPP 吗？',a:'不是，主要使用 NAV 和 ASR。'},{q:'Nevsehir 的代码是什么？',a:'NAV。'},{q:'Kayseri 的代码是什么？',a:'ASR。'},{q:'哪个离格雷梅近？',a:'NAV。'}]},
  'cappadocia-shared-shuttle-vs-private-transfer': {
    title:'卡帕多奇亚拼车还是私人接送｜价格与适合人群',description:'卡帕多奇亚机场拼车 vs 私人接送：€15/人共享班车与 Vito/Sprinter 包车的价格、时间、酒店停靠、团队人数与行李差异。',primaryKeyword:'卡帕多奇亚拼车还是私人接送',secondaryKeywords:['卡帕多奇亚拼车','卡帕多奇亚包车','shared shuttle Cappadocia','private transfer Cappadocia','机场班车对比'],eyebrow:'服务方式对比',h1:'卡帕多奇亚拼车 vs 私人机场接送',lead:'没有一种方式适合所有人。拼车最大的优势是价格，私人接送最大的优势是路线更直接和车辆独立使用。',sections:[
      {heading:'拼车：€15/人最适合控制预算',paragraphs:['从 ASR 或 NAV 都是 €15/人/单程，适合个人、情侣或不介意同车其他酒店停靠的游客。']},
      {heading:'私人车：按整车计价',paragraphs:['Vito 最多5人，ASR €90 / NAV €80；Sprinter 最多16人，ASR €110 / NAV €90。多人分摊后，私人车的人均差距会缩小。']},
      {heading:'时间差来自哪里',paragraphs:['私人车机场会合后直接前往你的酒店；拼车可能等待兼容航班的乘客并经过其他酒店。']},
      {heading:'行李与团队人数',paragraphs:['人数接近 Vito 或 Sprinter 上限、或者行李很多时，应提前说明。车辆容量是乘客上限，不代表任何行李组合都无需确认。']},
      {heading:'洞穴酒店道路对两种服务都有效',paragraphs:['私人车更灵活，但老街、台阶和禁止停靠区域仍然存在。具体酒店入口必须确认。']},
      {heading:'如何选择',paragraphs:['1–2 人优先预算通常选拼车；家庭、小团体、时间要求高或希望直达更适合私人车。']},
    ],faq:[{q:'两个人坐私人 Vito 划算吗？',a:'如果只看价格，拼车更便宜；如果重视直接路线和独立车辆，Vito 有不同价值。'},{q:'拼车能指定 Mercedes 吗？',a:'不能保证，指定 Vito/Sprinter 应选择私人。'},{q:'大团体一定要 Sprinter 吗？',a:'超过 Vito 5 人上限时通常需要 Sprinter，但应同时确认行李。'}]},
  'cappadocia-airport-transfer-travel-times': {
    title:'卡帕多奇亚机场接送时间与距离｜ASR / NAV 路线表',description:'卡帕多奇亚机场到格雷梅、于尔居普、乌奇希萨尔、阿瓦诺斯、奥塔西萨、恰武辛的 ASR/NAV 距离与车程参考。',primaryKeyword:'卡帕多奇亚机场接送时间',secondaryKeywords:['卡帕多奇亚机场距离','开塞利到格雷梅距离','内夫谢希尔到格雷梅多久','Cappadocia airport transfer time','NAV ASR distance'],eyebrow:'路线时间参考',h1:'卡帕多奇亚机场接送时间与距离',lead:'公里和道路时间可以帮助比较机场，但共享班车的真正到达时间还会受到机场流程、乘客组合和酒店停靠影响。',sections:[
      {heading:'开塞利 ASR 路线通常约 70–80 km',paragraphs:['格雷梅 75 km / 60–75 分钟；于尔居普 70 km / 60–75 分钟；乌奇希萨尔 80 km / 70–85 分钟；阿瓦诺斯 70 km / 60–75 分钟；奥塔西萨 75 km / 60–75 分钟；恰武辛 75 km / 65–80 分钟。']},
      {heading:'内夫谢希尔 NAV 路线通常更短',paragraphs:['格雷梅 40 km / 35–45 分钟；于尔居普 50 km / 45–60 分钟；乌奇希萨尔 35 km / 30–40 分钟；阿瓦诺斯 38 km / 35–50 分钟；奥塔西萨 45 km / 40–50 分钟；恰武辛 42 km / 40–55 分钟。']},
      {heading:'为什么拼车会比直达道路时间更长',paragraphs:['共享服务可能包含等待乘客、行李、多个酒店停靠。直达私人车通常更接近道路估算，但也会受到交通和天气影响。']},
      {heading:'冬季和热气球清晨要留弹性',paragraphs:['天气、道路和热门小镇清晨交通会改变正常范围。尤其送机不要把道路时间直接当作“需要提前离开机场的时间”。']},
      {heading:'使用具体路线页面',paragraphs:['每一组机场—城镇路线都有独立页面，除了数字，还说明酒店道路、接送点和返程安排。']},
    ],faq:[{q:'拼车酒店停靠会增加时间吗？',a:'会。'},{q:'同一路线接机和送机时间一样吗？',a:'公路距离相同，但送机还要考虑酒店收客和机场预留。'},{q:'冬天会更慢吗？',a:'可能，实际道路和天气条件会影响估算。'}]},
  'cappadocia-cave-hotel-airport-transfer': {
    title:'卡帕多奇亚洞穴酒店机场接送｜格雷梅等地拼车',description:'卡帕多奇亚洞穴酒店机场接送指南：格雷梅、乌奇希萨尔、于尔居普、奥塔西萨等洞穴酒店道路、行李、集合点与 €15 机场拼车。',primaryKeyword:'卡帕多奇亚洞穴酒店机场接送',secondaryKeywords:['格雷梅洞穴酒店接送','cave hotel airport shuttle Cappadocia','卡帕多奇亚洞穴酒店接机','洞穴酒店送机'],eyebrow:'洞穴酒店接送指南',h1:'卡帕多奇亚洞穴酒店机场接送',lead:'“洞穴酒店”不是一种统一道路条件。有的就在正常主路旁，有的需要经过陡坡、窄巷或步行台阶，因此完整酒店名称比住宿类型更重要。',sections:[
      {heading:'为什么洞穴酒店名称必须写完整',paragraphs:['不同城镇甚至同一条坡路上可能有名称非常相似的 Cave Hotel、Cave Suites 和 Stone House。完整预订名称能帮助确认真实入口。']},
      {heading:'拼车不一定能到每个门口',paragraphs:['大型共享车辆必须以安全通行为前提，狭窄单行道、急坡或无等待空间的位置可能使用附近集合点。']},
      {heading:'格雷梅、乌奇希萨尔、于尔居普情况不同',paragraphs:['格雷梅住宿密集且坡路多；乌奇希萨尔围绕城堡高差明显；于尔居普既有正常城市道路也有历史街区；奥塔西萨和恰武辛则更像小村道路。']},
      {heading:'抵达与离开时行李问题不同',paragraphs:['抵达时司机可以在安全点卸行李，客人可能短距离步行；送机时乘客必须在确认时间前已经带着行李到集合点。']},
      {heading:'私人 Vito 更灵活，但不是道路通行保证',paragraphs:['Vito 在部分小路更方便，但物理道路限制仍然存在。预订私人车的价值主要是独立路线和较高灵活度。']},
      {heading:'为什么这里会列出一些真实酒店名称',paragraphs:['酒店列表用于识别地点和说明住宿分布，不是排名或商业推荐。']},
    ],faq:[{q:'洞穴酒店都能门口接吗？',a:'不能统一保证。'},{q:'只写“cave hotel”可以吗？',a:'不可以，应填写完整酒店名。'},{q:'私人 Vito 一定能开到门口吗？',a:'也不能保证，仍取决于道路。'},{q:'送机时需要提前走到集合点吗？',a:'如果确认的停靠点不在酒店门口，需要提前到达。'}]},
  'istanbul-to-cappadocia': {
    title:'伊斯坦布尔到卡帕多奇亚｜航班与机场接送指南',description:'伊斯坦布尔到卡帕多奇亚旅行指南：从 IST/SAW 飞往 ASR 或 NAV，再用 €15 机场班车前往格雷梅等酒店。',primaryKeyword:'伊斯坦布尔到卡帕多奇亚',secondaryKeywords:['伊斯坦布尔飞卡帕多奇亚','Istanbul to Cappadocia','卡帕多奇亚机场','IST SAW NAV ASR','格雷梅交通'],eyebrow:'伊斯坦布尔 → 卡帕多奇亚',h1:'伊斯坦布尔到卡帕多奇亚：航班与机场接送',lead:'大多数短途游客会从 IST 或 SAW 飞到 ASR / NAV，再预订卡帕多奇亚机场—酒店接送，而不是坐本服务的长途公路班车。',sections:[
      {heading:'本站不是伊斯坦布尔到卡帕多奇亚的长途公路班车',paragraphs:['服务范围从开塞利或内夫谢希尔机场开始。通常先飞到 ASR 或 NAV，再使用机场拼车到酒店。']},
      {heading:'IST 与 SAW 是两座不同的伊斯坦布尔机场',paragraphs:['购买机票时注意出发机场。抵达卡帕多奇亚后，接送表单真正需要选择的是 ASR 或 NAV。']},
      {heading:'NAV 近，ASR 航班可能更方便',paragraphs:['如果两种航班都有，先比较整体旅行时间。共享班车从两座机场都是 €15，因此拼车价格不会决定机场。']},
      {heading:'落地后如何接车',paragraphs:['领取行李，按照 WhatsApp 会合信息，使用正确运营航班号和完整酒店名称。']},
      {heading:'六个标准酒店区',paragraphs:['格雷梅、于尔居普、乌奇希萨尔、阿瓦诺斯、奥塔西萨、恰武辛。']},
      {heading:'返程也可以一起预订',paragraphs:['如果回伊斯坦布尔的航班也从 ASR 或 NAV 出发，可在往返表单中一起填写。']},
    ],faq:[{q:'有伊斯坦布尔直达卡帕多奇亚的本站班车吗？',a:'没有，本服务是卡帕多奇亚机场—酒店接送。'},{q:'飞 ASR 还是 NAV？',a:'NAV 公路更近，ASR 航班可能更方便。'},{q:'落地后拼车多少钱？',a:'€15/人/单程。'},{q:'应该把 IST 填在接送表单吗？',a:'不应该，应选择在卡帕多奇亚落地的 ASR 或 NAV。'}]},
  'cappadocia-to-istanbul': {
    title:'卡帕多奇亚到伊斯坦布尔｜酒店送机与航班指南',description:'卡帕多奇亚到伊斯坦布尔：从格雷梅等酒店拼车前往 NAV/ASR，再飞往 IST 或 SAW。送机 €15/人，含接车时间与机场选择。',primaryKeyword:'卡帕多奇亚到伊斯坦布尔',secondaryKeywords:['格雷梅到伊斯坦布尔','Cappadocia to Istanbul','卡帕多奇亚送机','NAV ASR to Istanbul','卡帕多奇亚到机场'],eyebrow:'卡帕多奇亚 → 伊斯坦布尔',h1:'卡帕多奇亚到伊斯坦布尔：酒店送机与航班',lead:'通常先从卡帕多奇亚酒店前往 NAV 或 ASR，再搭航班去伊斯坦布尔。本站负责的部分是酒店到机场，而不是 700 多公里的整段长途公路。',sections:[
      {heading:'第一段是酒店到机场，不是一路坐班车到伊斯坦布尔',paragraphs:['本站不运营卡帕多奇亚直达伊斯坦布尔的共享公路班车。应先预订酒店到 NAV/ASR 的机场接送，再使用航空公司机票。']},
      {heading:'选择 NAV 或 ASR 看你的离港航班',paragraphs:['NAV 通常离中部酒店更近；ASR 虽远一些，但航班时刻可能更合适。拼车去两座机场都是 €15/人。']},
      {heading:'公路到伊斯坦布尔约 700 多公里',paragraphs:['格雷梅到伊斯坦布尔中心的道路大致约 725 km，远远超过本站 35–80 km 的机场接送范围。短期旅行通常更适合飞行。']},
      {heading:'送机接车时间按航班确认',paragraphs:['填写实际离港航班号、酒店和乘客资料。拼车可能还要接其他酒店，因此不要只按直达导航时间倒推。']},
      {heading:'晚班机前如何使用空余时间',paragraphs:['把行李寄存在酒店，并把最后活动留在住宿城镇附近。餐厅、咖啡、短距离观景比山谷长徒步更容易及时结束。']},
      {heading:'IST 与 SAW 别混淆',paragraphs:['伊斯坦布尔机场 IST 与萨比哈·格克琴机场 SAW 不同。卡帕多奇亚接送表单选择的是你的出发机场 NAV 或 ASR，伊斯坦布尔落地机场按航空公司机票为准。']},
    ],faq:[{q:'有卡帕多奇亚直达伊斯坦布尔拼车吗？',a:'本站没有。通常先送机到 NAV/ASR，再飞伊斯坦布尔。'},{q:'酒店到机场多少钱？',a:'拼车 €15/人/单程。'},{q:'可以从不同机场离开吗？',a:'可以，但路线和私人价格要按实际机场确认。'},{q:'表单应该填 IST 还是 NAV/ASR？',a:'填写卡帕多奇亚的离港机场 NAV 或 ASR。'}]},
};



// Extra Chinese editorial sections keep the zh-CN edition as information-rich as the English site
// without translating sentence-for-sentence. Each block is written for the page's own search intent.
const zhSectionEnrichment: Record<string, ContentSection[]> = {
  'cappadocia-shuttle-transfer': [
    { heading:'落地后的实际流程：先取行李，再按确认信息会合', paragraphs:['提交预订时应填写实际执飞航班号、完整酒店名称、乘客姓名、护照号码和可联系的 WhatsApp。航班落地后先领取托运行李，再按照预订确认中的会合说明前往接车点。接机安排以当次确认信息为准，不建议根据旧游记或他人评论自行寻找集合位置。'] },
    { heading:'为什么一定要写真实住宿城镇', paragraphs:['“卡帕多奇亚”是一个区域，不是单一酒店下车点。格雷梅、于尔居普、乌奇希萨尔、阿瓦诺斯、奥塔西萨和恰武辛的道路、距离和酒店入口都不同。已经知道住宿地时，应直接进入对应的目的地或路线页，而不是只留下一个笼统的 Cappadocia 地址。'] },
    { heading:'航班延误或航班号变化后要主动更新', paragraphs:['拼车需要同时协调其他乘客，因此航班时间或实际运营航班号改变后，原来的接车安排不应被视为自动有效。请尽早把新信息发到 WhatsApp，由运营方重新确认适合的班车安排；这和私人车辆“只服务一个团队”的等待逻辑并不相同。'] },
    { heading:'特殊行李、儿童座椅等需求应在出发前说明', paragraphs:['普通旅行行李属于常规机场接送场景，但超大行李、运动器材、婴儿车或儿童座椅等情况最好写在备注中。若旅客必须使用某一种指定车型、希望车辆只服务自己的团队，私人 Vito 或 Sprinter 会比当天按人数安排的共享车辆更明确。'] },
  ],
  'cappadocia-airport-transfer': [
    { heading:'航班和酒店确定后，应进入精确路线页', paragraphs:['这张综合页适合比较机场与服务方式；一旦已经知道机场代码和酒店所在城镇，精确路线页会更有用。那里会给出该机场—城镇组合的公里数、正常道路时间、酒店入口特点、抵达后的本地建议以及返程注意事项，而不是使用一个全卡帕多奇亚统一估算。'] },
    { heading:'抵达机场和离开机场可以不是同一座', paragraphs:['有些行程从 NAV 抵达，却从 ASR 离开，反过来也一样。这类行程不能简单套用“同机场往返”价格，因为两段私人接送的路线和价格不同。表单或 WhatsApp 信息中应把两段航班分别写清楚，让每一段都按真实机场确认。'] },
    { heading:'人数会改变私人车的计算方式', paragraphs:['Vito 最多 5 人，Sprinter 最多 16 人；私人价格按整车计算，而共享班车按人数计算。选择机场、服务类型、车型、乘客数量或往返后，预订摘要应立即反映新的总价，避免把 €15/人的拼车逻辑与整车价格混在一起。'] },
    { heading:'现金付款并不等于可以不做预订确认', paragraphs:['费用由司机按确认方式收取现金，但车辆和接送时间仍需提前确认。航班号、酒店、乘客姓名、护照号码和 WhatsApp 信息在出发前应核对无误；这些信息决定的是实际接送操作，不只是付款。'] },
  ],
  'private-airport-transfer-cappadocia': [
    { heading:'私人接送不会增加无关酒店停靠', paragraphs:['选择私人车辆后，Vito 或 Sprinter 只服务这笔预订，不会为了其他不相关乘客增加酒店下车点。这通常让路线更直接，但道路时间仍可能受到天气、交通、行李领取以及洞穴酒店最后一段道路的影响，因此私人车也不等于固定分钟数保证。'] },
    { heading:'为什么 Vito 和 Sprinter 放在同一页比较', paragraphs:['这两种车型属于同一私人机场接送服务，只是容量和价格不同。放在同一页可以直接比较机场价格、最多乘客数、行李需求和酒店道路，而不是为了“Mercedes”关键词拆成内容很薄、彼此重复的页面。'] },
    { heading:'人数上限之外，还要考虑实际行李组合', paragraphs:['5 人或 16 人是乘客容量上限，并不代表任何超大行李组合都无需说明。多人同时携带大型行李箱、婴儿车或特殊器材时，应在备注中提前写明，让运营方确认更合适的车辆安排。'] },
    { heading:'独立车辆更灵活，但不能改变道路物理条件', paragraphs:['Vito 在部分窄路中比大型共享车辆灵活，Sprinter 则更适合大团体；但台阶、禁止停车区、极窄巷道或没有回转空间的洞穴酒店入口仍然存在。最终上下客点要以具体住宿和安全通行为准。'] },
  ],
  'airport-transfer-prices': [
    { heading:'价格要和车型容量一起看', paragraphs:['单看“€80、€90、€110”很容易误解。Vito 最多 5 人，Sprinter 最多 16 人；两者都是私人整车价。共享班车则按每位乘客 €15 计算，所以不同人数下最划算的选项会变化。'] },
    { heading:'不同人数的简单计算示例', paragraphs:['2 人单程拼车总计 €30；4 人单程拼车 €60；6 人从 NAV 单程拼车 €90，正好与 NAV Sprinter 的整车价相同，但两种服务的停靠方式和独立性不同。价格相近时，应同时比较时间、行李和是否需要独立车辆。'] },
    { heading:'机场选择必须立即改变私人总价', paragraphs:['私人价格与机场绑定：ASR Vito €90 / Sprinter €110，NAV Vito €80 / Sprinter €90。表单从开塞利切换到内夫谢希尔时，摘要中的私人价格必须同步变化；如果机场变了而价格不变，就属于计算错误。'] },
    { heading:'公开价格不替代实际运营确认', paragraphs:['公开表格说明标准服务价格，但具体预订仍要确认航班、酒店、乘客、护照信息和车辆选择。特殊行李、超出支持区域的酒店或其他非标准要求，需要先通过 WhatsApp 确认，而不是根据标准价格自行假设。'] },
    { heading:'往返没有隐藏公式', paragraphs:['当前规则很简单：同一标准服务的往返价格就是单程的两倍。共享班车 €15/人/单程，因此往返 €30/人；私人车辆也按相应机场单程价乘以二。若抵达和离开使用不同机场，两段私人价格应分别计算。'] },
  ],
  'hotel-to-airport-transfer': [
    { heading:'ASR 与 NAV 的送机缓冲时间不能照搬', paragraphs:['从中部酒店去 NAV 的公路通常更短，而 ASR 的道路段更长。实际接车时间还要结合酒店所在城镇、共享收客顺序和机场办理手续，因此不能把一条通用“提前 X 小时”规则复制到两座机场。最终以航班和 WhatsApp 确认的接车时间为准。'] },
    { heading:'私人送机也使用同一套乘客资料标准', paragraphs:['选择私人 Vito 或 Sprinter 并不会省略预订资料。离港航班号、完整酒店名称、每位乘客姓名和护照号码仍然需要准确填写，这样车辆、集合点和机场方向才能在出发前被正确确认。'] },
  ],
  'kayseri-airport-transfer': [
    { heading:'ASR 拼车车辆会按当天预订安排', paragraphs:['€15 的共享座位并不等于保证某一辆 Mercedes 车型。当天车辆会根据乘客数量、兼容航班和酒店路线安排；如果必须使用 Vito 或 Sprinter，应选择私人接送。共享服务真正需要确认的是 ASR 与酒店之间的接送和会合信息。'] },
    { heading:'ASR 航班延误后不要默认原计划不变', paragraphs:['如果执飞时间或航班号发生变化，请尽早更新 WhatsApp。ASR 拼车可能已经安排了其他乘客，延误后需要重新确认接机批次，而不是把原来的会合时间自动顺延。'] },
  ],
  'nevsehir-airport-transfer': [
    { heading:'NAV 拼车车辆同样按当天乘客组合安排', paragraphs:['共享服务按座位和实际运营安排车型，不承诺每个 €15 座位都使用 Vito 或 Sprinter。需要固定车型和独立路线时应选择私人接送；拼车则重点确认机场会合、酒店城镇和当天车辆安排。'] },
    { heading:'NAV 航班延误后需要重新确认接机批次', paragraphs:['NAV 距离中部酒店较近，但航班变化仍会影响共享车辆计划。航班延误、取消或换号后，应把新信息发给 WhatsApp，再按照更新后的确认行动。'] },
    { heading:'Nevsehir Kapadokya Airport、Kapadokya Airport 与 NAV 指向同一机场', paragraphs:['中文和英文搜索结果中可能出现 Nevsehir Kapadokya Airport、Kapadokya Airport、Nevsehir Airport 或 NAV Airport。对本站接送而言，这些名称指向内夫谢希尔卡帕多奇亚机场；预订时仍应以机票上的 NAV 代码和实际运营航班号为准。'] },
  ],
  'kayseri-airport-shuttle': [
    { heading:'ASR 航站楼会合前先完成行李领取', paragraphs:['落地后先完成正常入境或行李流程，再按照 WhatsApp 确认前往接车点。预订乘客姓名可以用于会合识别，准确的实际运营航班号则帮助团队确认对应的到达安排。'] },
    { heading:'从主路进入酒店区后，道路条件会改变', paragraphs:['格雷梅和乌奇希萨尔常见坡地洞穴酒店，于尔居普有城市道路与老城区混合，阿瓦诺斯更分散，奥塔西萨和恰武辛有较小村路。共享车辆不能为了停到某个门口而忽略道路安全，必要时会确认附近合适的上下客点。'] },
  ],
  'nevsehir-airport-shuttle': [
    { heading:'NAV 落地后的会合仍然从行李领取之后开始', paragraphs:['NAV 到许多酒店的道路更短，但机场流程并不会因此消失。领取行李后按照 WhatsApp 说明前往接车点，保持预订姓名和实际运营航班号准确，避免因为同名酒店或航班信息错误影响会合。'] },
    { heading:'NAV 到酒店的最后几分钟仍取决于住宿位置', paragraphs:['短公路距离不代表每家洞穴酒店都能让大型车辆直接停到门口。尤其乌奇希萨尔、格雷梅等坡地住宿，最终停靠点取决于道路宽度、坡度和安全等待空间。'] },
  ],
  'kayseri-to-cappadocia-transfer': [
    { heading:'ASR 到六个目的地的距离并不完全一样', paragraphs:['于尔居普和阿瓦诺斯约 70 km，格雷梅、奥塔西萨和恰武辛约 75 km，乌奇希萨尔约 80 km。几个数字看起来接近，但进入各城镇后的酒店道路不同，所以“Kayseri to Cappadocia”不能替代真实酒店目的地。'] },
    { heading:'非常早或很晚抵达时，不要把观光计划写死', paragraphs:['行李领取、航班变化和共享车辆组合都会影响真正到酒店的时间。早到时可先寄存行李，在住宿城镇附近安排短活动；晚到时优先入住和休息，比为了赶一个远处景点再增加一段交通更稳妥。'] },
  ],
  'nevsehir-to-cappadocia-transfer': [
    { heading:'NAV 到各城镇的距离差异更明显', paragraphs:['乌奇希萨尔约 35 km、阿瓦诺斯约 38 km、格雷梅约 40 km、恰武辛约 42 km、奥塔西萨约 45 km、于尔居普约 50 km。知道真实住宿城镇后，NAV 的“离卡帕多奇亚很近”才会变成有意义的路线数字。'] },
    { heading:'早到或晚到时，把第一段活动留在酒店附近', paragraphs:['即使 NAV 公路较短，也不要按计划落地时间直接安排跨城景点。机场流程和拼车组合都有变数；到店后再根据实际时间选择附近散步、用餐或休息，会比预先把行程压满更自然。'] },
  ],
  'cappadocia-to-kayseri-airport-shuttle': [
    { heading:'去 ASR 的接车时间会针对具体航班单独确认', paragraphs:['酒店到 ASR 不使用一个适用于所有人的固定发车时刻。离港航班、住宿城镇、酒店道路和同车乘客都会影响接车顺序，因此 WhatsApp 最终确认比自己按地图倒推更可靠。'] },
  ],
  'cappadocia-to-nevsehir-airport-shuttle': [
    { heading:'去 NAV 的接车时间同样按真实航班确认', paragraphs:['NAV 离许多酒店更近，但酒店送机仍不是“每天固定几点”的公共巴士。运营方会结合离港航班、酒店位置和共享车辆顺序给出接车时间，乘客应在窗口开始前完成退房并准备好行李。'] },
  ],
  'goreme-airport-transfer': [
    { heading:'“卡帕多奇亚机场到格雷梅”先要分清 NAV 还是 ASR', paragraphs:['中文搜索中经常只写“卡帕多奇亚机场到格雷梅”，但机票上一定会出现 NAV 或 ASR。NAV 到格雷梅公路更短；ASR 距离更远，却可能有更适合的航班。确定机场后再进入 [[NAV 到格雷梅|nevsehir-airport-to-goreme-transfer]] 或 [[ASR 到格雷梅|kayseri-airport-to-goreme-transfer]]，得到真正对应的价格和路线。'] },
    { heading:'格雷梅清晨的热气球交通会改变街道节奏', paragraphs:['日出前后，热气球乘客、旅行车辆和酒店工作人员会集中移动。早班机送机不能假设坡地街道完全空闲；尤其住在中心上方洞穴酒店时，应提前把行李准备好，并按照确认的集合点等待。'] },
    { heading:'退房后到晚班机之间，最后几小时最好留在镇内', paragraphs:['如果退房早而接车晚，可以请酒店寄存行李，在格雷梅中心吃饭、喝咖啡、逛店或去可快速返回的观景点。完整山谷徒步不适合压在机场接车前，因为步行时间、道路和回程交通都比镇内活动更难控制。'] },
  ],
  'urgup-airport-transfer': [
    { heading:'于尔居普中心酒店与坡地老城区不是同一种接车条件', paragraphs:['中心区不少住宿临近正常道路，车辆上下客相对直接；历史石屋和洞穴酒店则可能在坡地或较窄街道。完整酒店名称能让司机提前判断最后一段路线，而不是把所有“Urgup hotel”当成同一个集合点。'] },
    { heading:'晚班机当天，把最后活动留在于尔居普中心更稳妥', paragraphs:['如果酒店可以寄存行李，Temenni Hill 附近短走、咖啡、餐厅或镇中心购物都比较容易按时结束。酒庄、山谷或需要另一辆车接送的活动更难保证返回时间，不适合放在机场接车窗口之前。'] },
  ],
  'uchisar-airport-transfer': [
    { heading:'乌奇希萨尔的高差会影响最后一段车辆路线', paragraphs:['区域公路本身并不复杂，但城堡周围的坡度、露台酒店和窄巷让“最后几百米”特别重要。有的精品酒店车辆可直接进入，有的需要在附近安全点上下客，因此完整酒店名称和 WhatsApp 确认在乌奇希萨尔尤其重要。'] },
    { heading:'送机前有空余时间，不必走完整鸽子谷', paragraphs:['城堡周边、酒店露台、咖啡馆或短距离村内步行都容易控制时间。鸽子谷入口虽然很近，但完整徒步的返回时间不适合作为最后一项活动；航班当天应让自己始终能快速回到行李和集合点。'] },
  ],
  'avanos-airport-transfer': [
    { heading:'克孜勒厄尔马克河让阿瓦诺斯的酒店地址更重要', paragraphs:['阿瓦诺斯沿河两侧展开，同样写着“Avanos”的两家酒店可能需要不同进城路线。这里的道路通常比陡峭洞穴村宽，但城镇不够紧凑；准确住宿名称可以避免不必要的跨河或绕行。'] },
    { heading:'河边和陶艺体验适合作为轻松的抵达或离开活动', paragraphs:['抵达后在河边散步、看看陶艺店，不需要再安排长距离车辆；晚班机前也可以把行李留在酒店后做类似短活动。关键是最后一站仍靠近住宿地，避免为了赶机场车还要从城镇另一侧再找交通回来。'] },
  ],
  'ortahisar-airport-transfer': [
    { heading:'奥塔西萨安静，但老村道路仍需要提前确认', paragraphs:['奥塔西萨比格雷梅安静，不代表每家酒店都能让大型车辆在门口等待。城堡周边老街、坡度和有限停车空间会影响停靠；如果确认附近路边点，比勉强让车辆进入窄巷更安全、更准时。'] },
    { heading:'去机场前的最后几小时尽量留在村内', paragraphs:['晚航班可以利用城堡周边散步、咖啡或酒店附近用餐。若前往 ASR，公路段本来就更长，更不适合在接车前临时增加山谷活动；把行李留在酒店并按时回到集合点更稳妥。'] },
  ],
  'cavusin-airport-transfer': [
    { heading:'小小的恰武辛仍然可能有多个不同接车点', paragraphs:['住宿分散在老村、主路和靠近山谷入口的不同位置，并不存在一个适合所有客人的“村中心班车站”。完整酒店名和确认后的集合点能避免大型车辆进入不适合停靠的小支路。'] },
    { heading:'热气球和徒步路线让村庄清晨比想象中更忙', paragraphs:['恰武辛靠近热门山谷和热气球活动区，日出前后车辆与游客数量可能明显增加。抵达后短距离散步很适合；去机场前则不应该临时深入玫瑰谷等长步道，接车窗口临近时应留在住宿或主路附近。'] },
  ],
  'cappadocia-airport': [
    { heading:'“卡帕多奇亚机场”不等于“离卡帕多奇亚最近的机场”', paragraphs:['“Cappadocia Airport”既可能指 NAV 的正式名称 Nevsehir Kapadokya Airport，也可能只是游客在问区域应该飞哪里。本站把这些意图区分开：[[最近机场|nearest-airport-to-cappadocia]] 负责距离问题，[[机场代码|cappadocia-airport-code]] 解释 NAV / ASR，避免多个页面重复争同一个搜索意图。'] },
    { heading:'预订时最终以机票上的机场代码为准', paragraphs:['搜索词可以写得很宽泛，接送操作却不能。NAV 和 ASR 的航站楼、道路距离以及私人车价格不同；下单时要选择机票实际显示的代码，再填写真实酒店城镇，不能只写“Cappadocia Airport”。'] },
  ],
  'nearest-airport-to-cappadocia': [
    { heading:'对乌奇希萨尔、格雷梅和于尔居普，最近距离也不完全相同', paragraphs:['NAV 到乌奇希萨尔约 35 km、到格雷梅约 40 km、到于尔居普约 50 km；ASR 对应约 80 km、75 km 和 70 km。NAV 多数情况下更近，但“最近”仍应落到具体住宿城镇，而不是区域中心的一个虚拟点。'] },
    { heading:'私人车 NAV 更便宜，但拼车两座机场同价', paragraphs:['从 NAV 私人 Vito / Sprinter 为 €80 / €90，从 ASR 为 €90 / €110；共享班车则两座机场都是 €15/人。若选择拼车，机票时间与整体行程往往比这段道路价差更值得优先考虑。'] },
  ],
  'kayseri-or-nevsehir-airport-for-cappadocia': [
    { heading:'城镇不同，机场比较也要按目的地重新看', paragraphs:['NAV 对乌奇希萨尔和格雷梅的距离优势非常明显，于尔居普则与其他 NAV 路线相比更远一些。ASR 各核心城镇多在约 70–80 km 范围。已经确定酒店后，用具体城镇的数据比只比较两个机场名称更有意义。'] },
    { heading:'抵达与离开使用不同机场需要特别确认', paragraphs:['完全可以 NAV 抵达、ASR 离开，或反过来；但两段私人价格不同，也不能简单视为一个标准同机场往返。表单或 WhatsApp 中应分别写出两段机场和航班，以免系统沿用错误价格。'] },
  ],
  'cappadocia-airport-code': [
    { heading:'“Goreme Airport”是搜索习惯，不是正式 IATA 机场', paragraphs:['格雷梅没有独立商业机场。游客搜索 “Goreme airport” 时，实际通常是在比较 NAV 与 ASR。订机票和接送不能把 Goreme 当机场代码，应回到机票上的 NAV 或 ASR。'] },
    { heading:'机场代码和航班号不是同一回事', paragraphs:['NAV / ASR 是机场的 IATA 代码；TK、PC 等加数字的组合才是具体运营航班号的一部分。预订接送时既要选择正确机场，也要提供实际运营航班号，两项信息用途不同。'] },
  ],
  'cappadocia-shared-shuttle-vs-private-transfer': [
    { heading:'人数接近车型上限时，用总价比较更清楚', paragraphs:['1–2 人只看价格时，€15/人的拼车通常优势明显；人数增加后，私人整车的人均差距会缩小。例如 NAV 6 人拼车总价也是 €90，与 NAV Sprinter 的公开整车单程价相同，此时是否直达、行李和时间要求会变得更重要。'] },
    { heading:'早班机和深夜抵达会改变“值不值得”的判断', paragraphs:['拼车并不是没有计划的服务，但需要兼顾其他乘客。特别早的送机、很晚的抵达、较多行李或希望最快到酒店的家庭，可能更看重私人车的独立性；普通时段且预算优先的旅客通常更适合共享班车。'] },
  ],
  'cappadocia-airport-transfer-travel-times': [
    { heading:'接机时间和送机时间不能只看同一段公路数字', paragraphs:['同一机场—城镇的公里数当然相同，但接机前有行李领取和机场会合，送机前有酒店收客顺序以及必须留出的机场办理时间。页面中的分钟数只适合当作道路规划范围，不能直接当作从酒店关门到登机口的总时间。'] },
  ],
  'cappadocia-cave-hotel-airport-transfer': [
    { heading:'洞穴酒店并不自动代表车辆很难进入', paragraphs:['有些洞穴酒店正好位于正常车道旁，接送比想象中简单；另一些则有台阶、窄巷或前台与客房入口分离。决定接车方式的是具体物业位置，不是名字里有没有 “Cave”。'] },
    { heading:'送机早晨比抵达时更怕临时找不到集合点', paragraphs:['抵达时即使需要从安全停靠点短走，司机通常正在完成一次下客；送机则必须按整个共享线路继续前往机场。因此前一晚最好确认集合点，退房和行李都在接车窗口前完成。'] },
  ],
  'istanbul-to-cappadocia': [
    { heading:'抵达卡帕多奇亚后的接送应围绕实际落地航班', paragraphs:['从伊斯坦布尔出发可能使用 IST 或 SAW，但卡帕多奇亚接机真正需要的是落地到 ASR 或 NAV 的实际运营航班号。不要只提供“从 Istanbul 来”的信息；机场代码、航班号和酒店城镇才是安排车辆的关键。'] },
  ],
  'cappadocia-to-istanbul': [
    { heading:'伊斯坦布尔的长途距离不能用来倒推酒店接车时间', paragraphs:['700 多公里的公路数字只帮助判断长途旅行方式，和卡帕多奇亚酒店到 NAV / ASR 的接车时间不是一回事。机场班车在 NAV 或 ASR 结束，具体酒店接车时间仍然根据离港航班和共享运营计划确认。'] },
  ],
};

const zhFaqEnrichment: Record<string, FaqItem[]> = {
  'cappadocia-shuttle-transfer': [
    {q:'共享机场班车是每位乘客单独一辆车吗？',a:'不是。€15 服务是预订制拼车，可能包含其他乘客和多个酒店停靠。'},
    {q:'航班号变了以后需要重新通知吗？',a:'需要。请尽快通过 WhatsApp 提供新的实际运营航班信息，以便重新确认拼车安排。'},
    {q:'可以携带普通机场行李吗？',a:'可以；超大行李、运动器材、婴儿车等特殊情况应提前在备注中说明。'},
    {q:'往返是不是两段分别需要航班资料？',a:'是。到达与离开属于两次不同操作，往返表单会分别收集两段航班。'},
  ],
  'cappadocia-airport-transfer': [
    {q:'NAV 抵达、ASR 离开可以吗？',a:'可以，但两段应分别确认，私人价格也按各自机场计算。'},
    {q:'私人 Vito 和 Sprinter 是按人收费吗？',a:'不是，私人价格按整车；Vito 最多5人，Sprinter最多16人。'},
    {q:'现金付款后还需要提前确认预订吗？',a:'需要。现金只是付款方式，车辆、航班和酒店接送仍须提前确认。'},
  ],
  'private-airport-transfer-cappadocia': [
    {q:'私人接送会去接其他酒店的客人吗？',a:'不会，所选车辆只服务该私人预订。'},
    {q:'5 人带很多大箱子一定适合 Vito 吗？',a:'不一定。人数未超上限也应提前说明大量或超大行李，以便确认车辆。'},
    {q:'私人 Vito 可以保证停到每家洞穴酒店门口吗？',a:'不能。私人车更灵活，但最终仍取决于道路、台阶和停车条件。'},
  ],
  'airport-transfer-prices': [
    {q:'6 人从 NAV 选择拼车还是 Sprinter 更便宜？',a:'6 人拼车单程也是 €90，与 NAV Sprinter 公布的整车单程价相同；这时应再比较直达、行李和车辆独立性。'},
    {q:'从 ASR 切换到 NAV 后私人价格应该变化吗？',a:'应该。NAV 私人 Vito/Sprinter 是 €80/€90，ASR 是 €90/€110。'},
    {q:'如果抵达 NAV、离开 ASR，往返怎么计算？',a:'两段按各自机场私人单程价分别相加，不能直接把其中一座机场的价格乘以二。'},
    {q:'公开价格包含特殊区域酒店吗？',a:'公开价格针对支持的标准服务区域；区域外或特殊要求应先通过 WhatsApp 确认。'},
  ],
  'hotel-to-airport-transfer': [
    {q:'去 ASR 和去 NAV 的酒店接车时间会一样吗？',a:'不会按同一规则固定。道路距离、航班和共享收客顺序都不同，以确认时间为准。'},
    {q:'私人送机也需要每位乘客护照号码吗？',a:'需要，这是运营公司的乘客预订要求。'},
  ],
  'kayseri-airport-transfer': [
    {q:'€15 的 ASR 拼车一定使用 Mercedes 吗？',a:'不保证。共享车型按当天运营安排；必须指定 Vito/Sprinter 时选择私人接送。'},
    {q:'ASR 航班延误后原来的会合时间还有效吗？',a:'不能直接假设有效，应更新航班并等待新的 WhatsApp 确认。'},
  ],
  'nevsehir-airport-transfer': [
    {q:'Nevsehir Airport、Kapadokya Airport 和 NAV 是同一个机场吗？',a:'在本服务语境中均指内夫谢希尔卡帕多奇亚机场（NAV）。'},
    {q:'NAV 航班延误后拼车会一直等吗？',a:'不应这样假设。请更新航班信息，由运营方重新确认共享车辆安排。'},
  ],
  'kayseri-airport-shuttle': [{q:'ASR 拼车离开主路后一定能停到酒店门口吗？',a:'不一定，最终取决于酒店道路和车辆安全条件。'}],
  'nevsehir-airport-shuttle': [{q:'NAV 离酒店较近，拼车时间就一定固定吗？',a:'不是。行李、乘客组合和酒店停靠仍会影响实际时间。'}],
  'kayseri-to-cappadocia-transfer': [{q:'“Kayseri to Cappadocia”需要填写具体城镇吗？',a:'需要。格雷梅、于尔居普、乌奇希萨尔、阿瓦诺斯、奥塔西萨和恰武辛是不同下车路线。'}],
  'nevsehir-to-cappadocia-transfer': [{q:'NAV 到卡帕多奇亚所有城镇距离都一样吗？',a:'不一样，大致从乌奇希萨尔约35 km到于尔居普约50 km。'}],
  'cappadocia-to-kayseri-airport-shuttle': [
    {q:'去 ASR 的酒店班车有统一每天发车时间吗？',a:'没有，接车按离港航班和酒店路线确认。'},
    {q:'去 ASR 前可以临时离开酒店去远处景点吗？',a:'不建议在接车窗口前安排难以准时返回的活动。'},
  ],
  'cappadocia-to-nevsehir-airport-shuttle': [
    {q:'NAV 较近，可以比确认时间晚一点出来吗？',a:'不可以。共享车辆按已确认路线运行，应提前准备好行李并按时到集合点。'},
    {q:'去 NAV 的送机也能选择私人 Sprinter 吗？',a:'可以，NAV Sprinter 单程 €90，最多16位乘客。'},
  ],
  'goreme-airport-transfer': [{q:'格雷梅退房后距离晚班机还有几小时，可以把行李留酒店吗？',a:'多数酒店可提供行李寄存，但应直接向自己的住宿确认；接车前要提前回到确认集合点。'}],
  'urgup-airport-transfer': [{q:'于尔居普老城区和中心酒店的接车条件一样吗？',a:'不一定。坡地历史住宿可能需要不同的车辆入口或附近安全集合点。'}],
  'uchisar-airport-transfer': [{q:'乌奇希萨尔城堡附近的坡路会影响大型班车吗？',a:'可能。具体上下客点会根据酒店入口、道路宽度和停车条件确认。'}],
  'avanos-airport-transfer': [{q:'阿瓦诺斯只写酒店在河边就够了吗？',a:'不够。请填写完整酒店名称，因为河两侧和不同街区的进城路线可能不同。'}],
  'ortahisar-airport-transfer': [{q:'奥塔西萨比较安静，是否所有酒店都能门口接车？',a:'不能这样保证，老村道路和停车空间仍可能限制大型车辆。'}],
  'cavusin-airport-transfer': [{q:'恰武辛很小，为什么还需要确认集合点？',a:'住宿分布在老村、主路和山谷入口，不是所有车辆都适合进入每条小路。'}],
  'cappadocia-airport': [
    {q:'卡帕多奇亚只有一座机场吗？',a:'不是，游客主要使用 NAV 和 ASR 两座机场。'},
    {q:'搜索“Cappadocia Airport”时一定指 NAV 吗？',a:'不一定。NAV 的正式名称包含 Kapadokya，但旅行规划语境也常泛指服务卡帕多奇亚的机场。'},
    {q:'预订接送应该看机场名字还是代码？',a:'优先核对机票上的 NAV 或 ASR 代码。'},
    {q:'两座机场都能到六个主要住宿区吗？',a:'可以，本站拼车覆盖格雷梅、于尔居普、乌奇希萨尔、阿瓦诺斯、奥塔西萨和恰武辛。'},
  ],
  'nearest-airport-to-cappadocia': [
    {q:'离乌奇希萨尔最近的机场是哪座？',a:'通常 NAV，公路约35 km。'},
    {q:'最近的机场一定是最适合购买机票的吗？',a:'不一定，还应比较航班时刻、转机和票价。'},
    {q:'NAV 更近，所以拼车也更便宜吗？',a:'不是，两座机场共享班车都是 €15/人/单程。'},
  ],
  'kayseri-or-nevsehir-airport-for-cappadocia': [
    {q:'如果 ASR 航班便宜很多，还值得选 ASR 吗？',a:'可能值得。应比较机票差价、到达时间和多出的公路时间，而不是只看机场距离。'},
    {q:'可以一程 NAV、一程 ASR 吗？',a:'可以，但两段必须分别确认，尤其私人价格不同。'},
  ],
  'cappadocia-airport-code': [
    {q:'格雷梅有自己的机场代码吗？',a:'没有，格雷梅通常使用 NAV 或 ASR。'},
    {q:'机场代码和航班号有什么区别？',a:'NAV/ASR 表示机场；具体运营航班号还包含航空公司代码和数字。'},
    {q:'搜索里看到 CAPP 可以拿来预订机场接送吗？',a:'不应这样做，预订应按机票实际显示的 NAV 或 ASR。'},
  ],
  'cappadocia-shared-shuttle-vs-private-transfer': [
    {q:'6 人从 NAV 出发时，拼车和 Sprinter 价格一样吗？',a:'按公开单程价格计算都是 €90，但服务方式不同，Sprinter 是独立车辆。'},
    {q:'私人车会比拼车更快吗？',a:'通常路线更直接，因为没有无关酒店停靠，但实际时间仍受道路和酒店入口影响。'},
    {q:'共享班车是不是没有确定接车计划？',a:'不是。它是预订制服务，只是需要协调其他乘客，因此时间以确认安排为准。'},
    {q:'早班机更适合私人接送吗？',a:'不一定必须，但如果团队重视独立路线和时间控制，私人车可能更合适。'},
  ],
  'cappadocia-airport-transfer-travel-times': [
    {q:'地图显示的直达时间就是拼车总时间吗？',a:'不是，拼车还可能包含机场流程和其他酒店停靠。'},
    {q:'送机为什么需要比道路时间更大的缓冲？',a:'因为还要考虑酒店收客和机场办理手续。'},
    {q:'热气球清晨会影响酒店接车吗？',a:'在格雷梅、恰武辛等热门区域可能影响道路节奏，应按确认时间准备。'},
    {q:'页面中的分钟数是保证时间吗？',a:'不是，是正常道路规划范围。'},
  ],
  'cappadocia-cave-hotel-airport-transfer': [
    {q:'名称带 Cave 的酒店一定在窄路里吗？',a:'不一定，部分洞穴酒店就在正常车辆道路旁。'},
    {q:'接机和送机对洞穴酒店集合点要求一样吗？',a:'道路条件相同，但送机更强调准时到已确认集合点。'},
    {q:'酒店不在示例名单里还能预订吗？',a:'只要位于支持区域即可提交请求，名单只是帮助识别住宿分布。'},
  ],
  'istanbul-to-cappadocia': [
    {q:'从 Istanbul 飞来时，接送表单填 IST/SAW 还是 ASR/NAV？',a:'应选择你在卡帕多奇亚落地的 ASR 或 NAV，并填写该段实际运营航班号。'},
    {q:'行李领取时间包含在机场到酒店车程里吗？',a:'不包含。道路时间是在机场流程完成之后的车程参考。'},
    {q:'可以把回伊斯坦布尔的送机一起预订吗？',a:'可以，选择往返并填写离开 ASR/NAV 的航班。'},
  ],
  'cappadocia-to-istanbul': [
    {q:'卡帕多奇亚到伊斯坦布尔公路距离就是本站班车路线吗？',a:'不是。本站只负责酒店到 NAV/ASR 的区域机场接送。'},
    {q:'回伊斯坦布尔时，接车时间按 IST/SAW 还是 NAV/ASR 航班算？',a:'按你从卡帕多奇亚离开的 NAV 或 ASR 航班确认。'},
    {q:'晚班机前可以把行李寄存在酒店吗？',a:'许多酒店可以，但应向自己的住宿确认，并在接车前及时返回。'},
  ],
};

function localizeStatic(en:SeoPage):SeoPage {
  const data=staticPages[en.slug];
  if (!data) throw new Error(`Missing Chinese static page: ${en.slug}`);
  return {...en,...data};
}

function localizePage(en:SeoPage):SeoPage {
  if (en.route) return zhRoutePage(en);
  const townKey=(Object.keys(towns) as (keyof typeof towns)[]).find(k=>en.slug===`${k}-airport-transfer`);
  if (townKey) return zhDestinationPage(en,townKey);
  if (en.slug==='kayseri-airport-transfer') return zhAirportHub(en,'kayseri');
  if (en.slug==='nevsehir-airport-transfer') return zhAirportHub(en,'nevsehir');
  if (en.slug==='kayseri-airport-shuttle') return zhAirportShuttle(en,'kayseri');
  if (en.slug==='nevsehir-airport-shuttle') return zhAirportShuttle(en,'nevsehir');
  if (en.slug==='kayseri-to-cappadocia-transfer') return zhToCappadocia(en,'kayseri');
  if (en.slug==='nevsehir-to-cappadocia-transfer') return zhToCappadocia(en,'nevsehir');
  if (en.slug==='cappadocia-to-kayseri-airport-shuttle') return zhReverseHub(en,'kayseri');
  if (en.slug==='cappadocia-to-nevsehir-airport-shuttle') return zhReverseHub(en,'nevsehir');
  return localizeStatic(en);
}

export const zhPages:SeoPage[]=enPages.map((en) => {
  const localized = localizePage(en);
  return {
    ...localized,
    sections: [...localized.sections, ...(zhSectionEnrichment[localized.slug] || [])],
    faq: [...localized.faq, ...(zhFaqEnrichment[localized.slug] || [])],
  };
});
export const zhPageBySlug=new Map(zhPages.map(p=>[p.slug,p]));
export function zhPrettySlug(slug:string){return zhPageBySlug.get(slug)?.h1 || slug;}

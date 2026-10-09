// 제품 데이터. 제품을 추가하려면 PRODUCTS 에 한 덩어리를 복사해 고친다.
// check: 약사 확인이 필요한 항목(화면에는 안 나옴)
const RATE = 195; // 1위안 = 약 195원. 환율이 바뀌면 이 숫자만 고친다

const NEEDS = [
  { id: "fast",   zh: "想快点睡着",     sub: "躺下很久睡不着",   ko: "빨리 잠들고 싶어요", icon: "ti-moon",   pick: ["ezquil"] },
  { id: "weak",   zh: "身心疲惫睡不好", sub: "累了反而睡不着",   ko: "피로·허약해서 못 자요", icon: "ti-leaf", pick: ["sanzoin"] },
  { id: "mela",   zh: "想要褪黑素",     sub: "韩国药店的情况",   ko: "멜라토닌 찾아요",   icon: "ti-pill",   pick: ["melachew"], note: true },
  { id: "all",    zh: "全部对比",       sub: "三款一起看",       ko: "전체 비교",         icon: "ti-layout-columns", pick: ["ezquil", "sanzoin", "melachew"] },
];

const PRODUCTS = [
  {
    id: "ezquil",
    img: "img/ezquil.jpg",
    zh: "助眠口服液（苯海拉明）",
    ko: "이지퀼나잇액 (동아제약)",
    type: "drug", typeZh: "非处方药",
    hook: "睡前喝一袋 · 帮助入睡",
    tags: [{ t: "快速入睡", c: "purple" }],
    facts: {
      kind: "非处方药（OTC）",
      ingredient: "盐酸苯海拉明",
      use: "缓解暂时性失眠",
      form: "口服液 20ml × 6袋",
      mela: false,
      drowsy: "可能",
    },
    how: "睡前服用1袋，一天1次，不用配水",
    cautions: [
      "15岁以上才能服用",
      "吃完不要开车、不要喝酒",
      "第二天可能还有点困、口干",
      "青光眼、前列腺肥大、孕妇哺乳期、正在吃其他药 → 先问药师",
    ],
    price: null, unit: "6袋",
    check: ["가격", "1포 디펜히드라민 함량", "연속 복용 기간 제한 문구"],
  },
  {
    id: "sanzoin",
    img: "img/sanzoin.jpg",
    zh: "酸枣仁汤 片",
    ko: "경방 산조인탕정",
    type: "herbal", typeZh: "非处方中成药",
    hook: "经典古方「酸枣仁汤」",
    tags: [{ t: "调理型", c: "teal" }, { t: "中药古方", c: "teal" }],
    facts: {
      kind: "非处方药（韩国中成药）",
      ingredient: "酸枣仁汤（以酸枣仁为主的古方）",
      use: "身心疲劳、虚弱导致睡不着",
      form: "片剂 1袋2片",
      mela: false,
      drowsy: "—",
    },
    how: "一次1袋（2片），按说明书服用",
    cautions: [
      "不是吃了马上睡着的类型",
      "孕妇、正在吃其他药 → 先问药师",
      "高血压、容易水肿 → 先问药师（含甘草）",
    ],
    price: 15000, unit: "15天份",
    check: ["1일 복용 횟수", "처방 구성(지모·천궁·복령·감초 포함 여부)", "매장 라벨 '提高睡眠质量'은 허가 효능보다 넓은 표현"],
  },
  {
    id: "melachew",
    img: "img/melachew.jpg",
    zh: "褪黑素软糖 2mg",
    ko: "멜라츄 (테일러라이프)",
    type: "food", typeZh: "普通食品",
    hook: "含植物来源褪黑素 · 蓝莓薰衣草味",
    tags: [{ t: "含褪黑素", c: "amber" }],
    facts: {
      kind: "普通食品（糖果）",
      ingredient: "植物来源褪黑素 2mg/粒",
      use: "韩国按食品管理，不标示功效",
      form: "软糖 3g × 20粒",
      mela: true,
      drowsy: "可能",
    },
    how: "一天1粒，不要一次吃多粒",
    cautions: [
      "孕妇、哺乳期、儿童不建议",
      "吃完不要开车",
      "不要和酒、安眠药一起吃",
    ],
    price: 19000, unit: "20粒",
    check: ["포장의 1일 섭취량 표시"],
  },
];

const MELA_NOTE = {
  zh: "在韩国，褪黑素药品是处方药，药店不能直接卖。这里有的是含植物来源褪黑素的食品（软糖）。",
  ko: "한국에서 멜라토닌 의약품은 처방약 · 여기 있는 건 식물성 멜라토닌 함유 식품",
};

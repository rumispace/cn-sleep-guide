// 제품 데이터. 제품을 추가하려면 같은 카테고리의 products 에 한 덩어리를 복사해 고친다.
// 효과 문구는 허가사항 범위 안에서만. 한 줄은 중국어 13자 안팎(폰 한 줄)
// check: 약사 확인이 필요한 항목(화면에는 안 나옴)
const RATE = 195; // 1위안 = 약 195원. 환율이 바뀌면 이 숫자만 고친다

const CATEGORIES = [
  {
    id: "sleep",
    zh: "睡眠",
    ko: "수면",
    intro: "你是哪一种？",
    introKo: "손님 고민에 맞는 제품을 고르세요",
    products: [
      {
        id: "ezquil",
        hook: "今晚就想睡？", br: "今晚<br>就想睡？", line: "喝一袋，困意自己来", key: "快速入睡", cut: "img/cut/ezquil.webp",
        img: "img/ezquil.jpg",
        color: "purple",
        want: "今晚想快点睡着",
        wantKo: "빨리 잠들고 싶어요",
        zh: "助眠口服液",
        ko: "이지퀼나잇액 (동아제약)",
        type: "drug", typeZh: "非处方药",
        points: ["睡前喝一袋", "帮助快速入睡", "口服液，不用配水"],
        caution: ["15岁以上", "吃完不要喝酒、开车"],
        price: 6000, unit: "6袋",
        check: ["연속 복용 기간 제한 문구"],
      },
      {
        id: "sanzoin",
        hook: "累到睡不着？", br: "累到<br>睡不着？", line: "千年古方酸枣仁汤，<br>养好再睡", key: "身心调理", cut: "img/cut/sanzoin.webp",
        img: "img/sanzoin.jpg",
        color: "teal",
        want: "累了反而睡不着",
        wantKo: "피로·허약해서 못 자요",
        zh: "酸枣仁汤片",
        ko: "경방 산조인탕정",
        type: "herbal", typeZh: "非处方中成药",
        points: ["经典古方「酸枣仁汤」", "身心疲劳、虚弱睡不着", "慢慢调理，不是马上睡着"],
        caution: ["孕妇、正在吃药的人", "请先问药师"],
        price: 15000, unit: "15天份",
        check: ["1일 복용 횟수", "매장 라벨 '提高睡眠质量'은 허가 효능보다 넓은 표현"],
      },
      {
        id: "melachew",
        hook: "褪黑素党看这里", br: "褪黑素党<br>看这里", line: "一粒 2mg，蓝莓薰衣草味", key: "含褪黑素", cut: "img/cut/melachew.webp",
        img: "img/melachew.jpg",
        color: "amber",
        want: "习惯吃褪黑素",
        wantKo: "멜라토닌 찾아요",
        zh: "褪黑素软糖",
        ko: "멜라츄 (테일러라이프)",
        type: "food", typeZh: "普通食品",
        // 일반식품이라 수면 효능을 쓰지 않는다(식약처 부당광고 단속 대상)
        points: ["每粒含褪黑素 2mg", "蓝莓薰衣草味软糖", "韩国按普通食品管理"],
        caution: ["孕妇、儿童不建议", "不要和酒一起吃"],
        price: 19000, unit: "20粒",
        check: ["포장의 1일 섭취량 표시"],
      },
    ],
  },
];

const KANJI_DATA = [
  {
    "kanji": "日",
    "reading": "ひ"
  },
  {
    "kanji": "月",
    "reading": "つき"
  },
  {
    "kanji": "火",
    "reading": "ひ"
  },
  {
    "kanji": "水",
    "reading": "みず"
  },
  {
    "kanji": "木",
    "reading": "き"
  },
  {
    "kanji": "金",
    "reading": "かね"
  },
  {
    "kanji": "土",
    "reading": "つち"
  },
  {
    "kanji": "山",
    "reading": "やま"
  },
  {
    "kanji": "川",
    "reading": "かわ"
  },
  {
    "kanji": "田",
    "reading": "た"
  },
  {
    "kanji": "人",
    "reading": "ひと"
  },
  {
    "kanji": "口",
    "reading": "くち"
  },
  {
    "kanji": "目",
    "reading": "め"
  },
  {
    "kanji": "耳",
    "reading": "みみ"
  },
  {
    "kanji": "手",
    "reading": "て"
  },
  {
    "kanji": "足",
    "reading": "あし"
  },
  {
    "kanji": "力",
    "reading": "ちから"
  },
  {
    "kanji": "女",
    "reading": "おんな"
  },
  {
    "kanji": "男",
    "reading": "おとこ"
  },
  {
    "kanji": "子",
    "reading": "こ"
  },
  {
    "kanji": "母",
    "reading": "はは"
  },
  {
    "kanji": "父",
    "reading": "ちち"
  },
  {
    "kanji": "友",
    "reading": "とも"
  },
  {
    "kanji": "名",
    "reading": "な"
  },
  {
    "kanji": "年",
    "reading": "とし"
  },
  {
    "kanji": "時",
    "reading": "とき"
  },
  {
    "kanji": "分",
    "reading": "ふん"
  },
  {
    "kanji": "半",
    "reading": "はん"
  },
  {
    "kanji": "今",
    "reading": "いま"
  },
  {
    "kanji": "先",
    "reading": "さき"
  },
  {
    "kanji": "生",
    "reading": "いきる"
  },
  {
    "kanji": "学",
    "reading": "まなぶ"
  },
  {
    "kanji": "校",
    "reading": "こう"
  },
  {
    "kanji": "本",
    "reading": "ほん"
  },
  {
    "kanji": "文",
    "reading": "ぶん"
  },
  {
    "kanji": "字",
    "reading": "じ"
  },
  {
    "kanji": "語",
    "reading": "ご"
  },
  {
    "kanji": "読",
    "reading": "よむ"
  },
  {
    "kanji": "書",
    "reading": "かく"
  },
  {
    "kanji": "話",
    "reading": "はなす"
  },
  {
    "kanji": "聞",
    "reading": "きく"
  },
  {
    "kanji": "見",
    "reading": "みる"
  },
  {
    "kanji": "行",
    "reading": "いく"
  },
  {
    "kanji": "来",
    "reading": "くる"
  },
  {
    "kanji": "帰",
    "reading": "かえる"
  },
  {
    "kanji": "食",
    "reading": "たべる"
  },
  {
    "kanji": "飲",
    "reading": "のむ"
  },
  {
    "kanji": "買",
    "reading": "かう"
  },
  {
    "kanji": "売",
    "reading": "うる"
  },
  {
    "kanji": "立",
    "reading": "たつ"
  },
  {
    "kanji": "休",
    "reading": "やすむ"
  },
  {
    "kanji": "入",
    "reading": "はいる"
  },
  {
    "kanji": "出",
    "reading": "でる"
  },
  {
    "kanji": "上",
    "reading": "うえ"
  },
  {
    "kanji": "下",
    "reading": "した"
  },
  {
    "kanji": "中",
    "reading": "なか"
  },
  {
    "kanji": "外",
    "reading": "そと"
  },
  {
    "kanji": "右",
    "reading": "みぎ"
  },
  {
    "kanji": "左",
    "reading": "ひだり"
  },
  {
    "kanji": "前",
    "reading": "まえ"
  },
  {
    "kanji": "後",
    "reading": "あと"
  },
  {
    "kanji": "東",
    "reading": "ひがし"
  },
  {
    "kanji": "西",
    "reading": "にし"
  },
  {
    "kanji": "南",
    "reading": "みなみ"
  },
  {
    "kanji": "北",
    "reading": "きた"
  },
  {
    "kanji": "大",
    "reading": "おおきい"
  },
  {
    "kanji": "小",
    "reading": "ちいさい"
  },
  {
    "kanji": "高",
    "reading": "たかい"
  },
  {
    "kanji": "安",
    "reading": "やすい"
  },
  {
    "kanji": "新",
    "reading": "あたらしい"
  },
  {
    "kanji": "古",
    "reading": "ふるい"
  },
  {
    "kanji": "長",
    "reading": "ながい"
  },
  {
    "kanji": "短",
    "reading": "みじかい"
  },
  {
    "kanji": "多",
    "reading": "おおい"
  },
  {
    "kanji": "少",
    "reading": "すくない"
  },
  {
    "kanji": "早",
    "reading": "はやい"
  },
  {
    "kanji": "明",
    "reading": "あかるい"
  },
  {
    "kanji": "暗",
    "reading": "くらい"
  },
  {
    "kanji": "白",
    "reading": "しろ"
  },
  {
    "kanji": "黒",
    "reading": "くろ"
  },
  {
    "kanji": "赤",
    "reading": "あか"
  },
  {
    "kanji": "青",
    "reading": "あお"
  },
  {
    "kanji": "色",
    "reading": "いろ"
  },
  {
    "kanji": "花",
    "reading": "はな"
  },
  {
    "kanji": "草",
    "reading": "くさ"
  },
  {
    "kanji": "林",
    "reading": "はやし"
  },
  {
    "kanji": "森",
    "reading": "もり"
  },
  {
    "kanji": "石",
    "reading": "いし"
  },
  {
    "kanji": "空",
    "reading": "そら"
  },
  {
    "kanji": "雨",
    "reading": "あめ"
  },
  {
    "kanji": "雪",
    "reading": "ゆき"
  },
  {
    "kanji": "雲",
    "reading": "くも"
  },
  {
    "kanji": "風",
    "reading": "かぜ"
  },
  {
    "kanji": "天",
    "reading": "てん"
  },
  {
    "kanji": "気",
    "reading": "き"
  },
  {
    "kanji": "電",
    "reading": "でん"
  },
  {
    "kanji": "車",
    "reading": "くるま"
  },
  {
    "kanji": "駅",
    "reading": "えき"
  },
  {
    "kanji": "道",
    "reading": "みち"
  },
  {
    "kanji": "門",
    "reading": "もん"
  },
  {
    "kanji": "家",
    "reading": "いえ"
  },
  {
    "kanji": "室",
    "reading": "しつ"
  },
  {
    "kanji": "店",
    "reading": "みせ"
  },
  {
    "kanji": "国",
    "reading": "くに"
  },
  {
    "kanji": "町",
    "reading": "まち"
  },
  {
    "kanji": "村",
    "reading": "むら"
  },
  {
    "kanji": "市",
    "reading": "し"
  },
  {
    "kanji": "京",
    "reading": "きょう"
  },
  {
    "kanji": "都",
    "reading": "と"
  },
  {
    "kanji": "会",
    "reading": "あう"
  },
  {
    "kanji": "社",
    "reading": "しゃ"
  },
  {
    "kanji": "員",
    "reading": "いん"
  },
  {
    "kanji": "何",
    "reading": "なに"
  },
  {
    "kanji": "毎",
    "reading": "まい"
  },
  {
    "kanji": "週",
    "reading": "しゅう"
  },
  {
    "kanji": "曜",
    "reading": "よう"
  },
  {
    "kanji": "午",
    "reading": "ご"
  },
  {
    "kanji": "朝",
    "reading": "あさ"
  },
  {
    "kanji": "昼",
    "reading": "ひる"
  },
  {
    "kanji": "夜",
    "reading": "よる"
  },
  {
    "kanji": "晩",
    "reading": "ばん"
  },
  {
    "kanji": "夕",
    "reading": "ゆう"
  },
  {
    "kanji": "春",
    "reading": "はる"
  },
  {
    "kanji": "夏",
    "reading": "なつ"
  },
  {
    "kanji": "秋",
    "reading": "あき"
  },
  {
    "kanji": "冬",
    "reading": "ふゆ"
  },
  {
    "kanji": "一",
    "reading": "いち"
  },
  {
    "kanji": "二",
    "reading": "に"
  },
  {
    "kanji": "三",
    "reading": "さん"
  },
  {
    "kanji": "四",
    "reading": "よん"
  },
  {
    "kanji": "五",
    "reading": "ご"
  },
  {
    "kanji": "六",
    "reading": "ろく"
  },
  {
    "kanji": "七",
    "reading": "なな"
  },
  {
    "kanji": "八",
    "reading": "はち"
  },
  {
    "kanji": "九",
    "reading": "きゅう"
  },
  {
    "kanji": "十",
    "reading": "じゅう"
  },
  {
    "kanji": "百",
    "reading": "ひゃく"
  },
  {
    "kanji": "千",
    "reading": "せん"
  },
  {
    "kanji": "万",
    "reading": "まん"
  },
  {
    "kanji": "円",
    "reading": "えん"
  },
  {
    "kanji": "玉",
    "reading": "たま"
  },
  {
    "kanji": "王",
    "reading": "おう"
  },
  {
    "kanji": "計",
    "reading": "けい"
  },
  {
    "kanji": "数",
    "reading": "かず"
  },
  {
    "kanji": "回",
    "reading": "かい"
  },
  {
    "kanji": "台",
    "reading": "だい"
  },
  {
    "kanji": "枚",
    "reading": "まい"
  },
  {
    "kanji": "冊",
    "reading": "さつ"
  },
  {
    "kanji": "個",
    "reading": "こ"
  },
  {
    "kanji": "同",
    "reading": "おなじ"
  },
  {
    "kanji": "別",
    "reading": "べつ"
  },
  {
    "kanji": "方",
    "reading": "かた"
  },
  {
    "kanji": "考",
    "reading": "かんがえる"
  },
  {
    "kanji": "知",
    "reading": "しる"
  },
  {
    "kanji": "思",
    "reading": "おもう"
  },
  {
    "kanji": "言",
    "reading": "いう"
  },
  {
    "kanji": "答",
    "reading": "こたえる"
  },
  {
    "kanji": "問",
    "reading": "とい"
  },
  {
    "kanji": "正",
    "reading": "ただしい"
  },
  {
    "kanji": "間",
    "reading": "あいだ"
  },
  {
    "kanji": "近",
    "reading": "ちかい"
  },
  {
    "kanji": "遠",
    "reading": "とおい"
  },
  {
    "kanji": "通",
    "reading": "とおる"
  },
  {
    "kanji": "走",
    "reading": "はしる"
  },
  {
    "kanji": "歩",
    "reading": "あるく"
  },
  {
    "kanji": "止",
    "reading": "とまる"
  },
  {
    "kanji": "動",
    "reading": "うごく"
  },
  {
    "kanji": "使",
    "reading": "つかう"
  },
  {
    "kanji": "作",
    "reading": "つくる"
  },
  {
    "kanji": "持",
    "reading": "もつ"
  },
  {
    "kanji": "待",
    "reading": "まつ"
  },
  {
    "kanji": "始",
    "reading": "はじめる"
  },
  {
    "kanji": "終",
    "reading": "おわる"
  },
  {
    "kanji": "開",
    "reading": "あける"
  },
  {
    "kanji": "閉",
    "reading": "しめる"
  },
  {
    "kanji": "乗",
    "reading": "のる"
  },
  {
    "kanji": "降",
    "reading": "おりる"
  },
  {
    "kanji": "起",
    "reading": "おきる"
  },
  {
    "kanji": "寝",
    "reading": "ねる"
  },
  {
    "kanji": "働",
    "reading": "はたらく"
  },
  {
    "kanji": "教",
    "reading": "おしえる"
  },
  {
    "kanji": "習",
    "reading": "ならう"
  },
  {
    "kanji": "勉",
    "reading": "べん"
  },
  {
    "kanji": "強",
    "reading": "つよい"
  },
  {
    "kanji": "元",
    "reading": "もと"
  },
  {
    "kanji": "病",
    "reading": "やまい"
  },
  {
    "kanji": "院",
    "reading": "いん"
  },
  {
    "kanji": "医",
    "reading": "い"
  },
  {
    "kanji": "薬",
    "reading": "くすり"
  },
  {
    "kanji": "体",
    "reading": "からだ"
  },
  {
    "kanji": "頭",
    "reading": "あたま"
  },
  {
    "kanji": "顔",
    "reading": "かお"
  },
  {
    "kanji": "首",
    "reading": "くび"
  },
  {
    "kanji": "心",
    "reading": "こころ"
  },
  {
    "kanji": "声",
    "reading": "こえ"
  },
  {
    "kanji": "音",
    "reading": "おと"
  },
  {
    "kanji": "楽",
    "reading": "たのしい"
  },
  {
    "kanji": "歌",
    "reading": "うた"
  },
  {
    "kanji": "映",
    "reading": "うつる"
  },
  {
    "kanji": "画",
    "reading": "が"
  },
  {
    "kanji": "写",
    "reading": "うつす"
  },
  {
    "kanji": "真",
    "reading": "ま"
  },
  {
    "kanji": "紙",
    "reading": "かみ"
  },
  {
    "kanji": "絵",
    "reading": "え"
  },
  {
    "kanji": "図",
    "reading": "ず"
  },
  {
    "kanji": "地",
    "reading": "ち"
  },
  {
    "kanji": "海",
    "reading": "うみ"
  },
  {
    "kanji": "池",
    "reading": "いけ"
  },
  {
    "kanji": "魚",
    "reading": "さかな"
  },
  {
    "kanji": "鳥",
    "reading": "とり"
  },
  {
    "kanji": "犬",
    "reading": "いぬ"
  },
  {
    "kanji": "猫",
    "reading": "ねこ"
  },
  {
    "kanji": "牛",
    "reading": "うし"
  },
  {
    "kanji": "馬",
    "reading": "うま"
  },
  {
    "kanji": "羊",
    "reading": "ひつじ"
  },
  {
    "kanji": "虫",
    "reading": "むし"
  },
  {
    "kanji": "米",
    "reading": "こめ"
  },
  {
    "kanji": "茶",
    "reading": "ちゃ"
  },
  {
    "kanji": "肉",
    "reading": "にく"
  },
  {
    "kanji": "卵",
    "reading": "たまご"
  },
  {
    "kanji": "野",
    "reading": "の"
  },
  {
    "kanji": "菜",
    "reading": "さい"
  },
  {
    "kanji": "飯",
    "reading": "めし"
  },
  {
    "kanji": "味",
    "reading": "あじ"
  },
  {
    "kanji": "甘",
    "reading": "あまい"
  },
  {
    "kanji": "辛",
    "reading": "からい"
  },
  {
    "kanji": "熱",
    "reading": "あつい"
  },
  {
    "kanji": "冷",
    "reading": "つめたい"
  },
  {
    "kanji": "暑",
    "reading": "あつい"
  },
  {
    "kanji": "寒",
    "reading": "さむい"
  },
  {
    "kanji": "暖",
    "reading": "あたたかい"
  },
  {
    "kanji": "温",
    "reading": "あたたかい"
  },
  {
    "kanji": "重",
    "reading": "おもい"
  },
  {
    "kanji": "軽",
    "reading": "かるい"
  },
  {
    "kanji": "広",
    "reading": "ひろい"
  },
  {
    "kanji": "細",
    "reading": "ほそい"
  },
  {
    "kanji": "太",
    "reading": "ふとい"
  },
  {
    "kanji": "丸",
    "reading": "まるい"
  },
  {
    "kanji": "弱",
    "reading": "よわい"
  },
  {
    "kanji": "場",
    "reading": "ば"
  },
  {
    "kanji": "所",
    "reading": "ところ"
  },
  {
    "kanji": "番",
    "reading": "ばん"
  },
  {
    "kanji": "号",
    "reading": "ごう"
  },
  {
    "kanji": "階",
    "reading": "かい"
  },
  {
    "kanji": "屋",
    "reading": "や"
  },
  {
    "kanji": "橋",
    "reading": "はし"
  },
  {
    "kanji": "船",
    "reading": "ふね"
  },
  {
    "kanji": "旅",
    "reading": "たび"
  },
  {
    "kanji": "服",
    "reading": "ふく"
  },
  {
    "kanji": "着",
    "reading": "きる"
  },
  {
    "kanji": "客",
    "reading": "きゃく"
  },
  {
    "kanji": "品",
    "reading": "しな"
  },
  {
    "kanji": "物",
    "reading": "もの"
  },
  {
    "kanji": "特",
    "reading": "とく"
  },
  {
    "kanji": "有",
    "reading": "ある"
  },
  {
    "kanji": "無",
    "reading": "ない"
  },
  {
    "kanji": "用",
    "reading": "よう"
  },
  {
    "kanji": "不",
    "reading": "ふ"
  },
  {
    "kanji": "危",
    "reading": "あぶない"
  },
  {
    "kanji": "難",
    "reading": "むずかしい"
  },
  {
    "kanji": "易",
    "reading": "やさしい"
  },
  {
    "kanji": "忙",
    "reading": "いそがしい"
  },
  {
    "kanji": "暇",
    "reading": "ひま"
  },
  {
    "kanji": "好",
    "reading": "すき"
  },
  {
    "kanji": "嫌",
    "reading": "きらい"
  },
  {
    "kanji": "愛",
    "reading": "あい"
  },
  {
    "kanji": "親",
    "reading": "おや"
  },
  {
    "kanji": "兄",
    "reading": "あに"
  },
  {
    "kanji": "姉",
    "reading": "あね"
  },
  {
    "kanji": "弟",
    "reading": "おとうと"
  },
  {
    "kanji": "妹",
    "reading": "いもうと"
  },
  {
    "kanji": "夫",
    "reading": "おっと"
  },
  {
    "kanji": "妻",
    "reading": "つま"
  },
  {
    "kanji": "彼",
    "reading": "かれ"
  },
  {
    "kanji": "私",
    "reading": "わたし"
  },
  {
    "kanji": "自",
    "reading": "じ"
  },
  {
    "kanji": "皆",
    "reading": "みんな"
  },
  {
    "kanji": "若",
    "reading": "わかい"
  },
  {
    "kanji": "老",
    "reading": "おいる"
  },
  {
    "kanji": "住",
    "reading": "すむ"
  },
  {
    "kanji": "借",
    "reading": "かりる"
  },
  {
    "kanji": "貸",
    "reading": "かす"
  },
  {
    "kanji": "返",
    "reading": "かえす"
  },
  {
    "kanji": "送",
    "reading": "おくる"
  },
  {
    "kanji": "届",
    "reading": "とどく"
  },
  {
    "kanji": "切",
    "reading": "きる"
  },
  {
    "kanji": "取",
    "reading": "とる"
  },
  {
    "kanji": "置",
    "reading": "おく"
  },
  {
    "kanji": "拾",
    "reading": "ひろう"
  },
  {
    "kanji": "捨",
    "reading": "すてる"
  },
  {
    "kanji": "洗",
    "reading": "あらう"
  },
  {
    "kanji": "掃",
    "reading": "そう"
  },
  {
    "kanji": "消",
    "reading": "けす"
  },
  {
    "kanji": "点",
    "reading": "てん"
  },
  {
    "kanji": "付",
    "reading": "つける"
  },
  {
    "kanji": "押",
    "reading": "おす"
  },
  {
    "kanji": "引",
    "reading": "ひく"
  },
  {
    "kanji": "忘",
    "reading": "わすれる"
  },
  {
    "kanji": "覚",
    "reading": "おぼえる"
  },
  {
    "kanji": "選",
    "reading": "えらぶ"
  },
  {
    "kanji": "決",
    "reading": "きめる"
  },
  {
    "kanji": "変",
    "reading": "かわる"
  },
  {
    "kanji": "続",
    "reading": "つづく"
  },
  {
    "kanji": "急",
    "reading": "いそぐ"
  },
  {
    "kanji": "遅",
    "reading": "おそい"
  },
  {
    "kanji": "速",
    "reading": "はやい"
  },
  {
    "kanji": "約",
    "reading": "やく"
  },
  {
    "kanji": "束",
    "reading": "そく"
  },
  {
    "kanji": "館",
    "reading": "かん"
  },
  {
    "kanji": "公",
    "reading": "こう"
  },
  {
    "kanji": "園",
    "reading": "えん"
  },
  {
    "kanji": "運",
    "reading": "はこぶ"
  },
  {
    "kanji": "転",
    "reading": "ころぶ"
  },
  {
    "kanji": "発",
    "reading": "はつ"
  },
  {
    "kanji": "建",
    "reading": "たてる"
  },
  {
    "kanji": "浴",
    "reading": "あびる"
  },
  {
    "kanji": "庭",
    "reading": "にわ"
  },
  {
    "kanji": "窓",
    "reading": "まど"
  },
  {
    "kanji": "戸",
    "reading": "と"
  },
  {
    "kanji": "壁",
    "reading": "かべ"
  }
];

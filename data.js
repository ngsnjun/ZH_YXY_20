/* ============================================================
   社团分类 · Data
   All copy is in Chinese to match the source association's
   own materials. Club "archetype" flavour text is entertainment
   only — see disclaimer in index.html.
   ============================================================ */

const CLUBS = [
  {
    id: "wumen",
    name: "全武门",
    archetype: "烈焰武者",
    image: "assets/clubs/wumen.jpg",
    tags: ["#身法凌厉", "#一诺千金", "#越战越勇"],
    quote: "你相信真正的底气，是练出来的，不是喊出来的。",
    why: "你不太喜欢纸上谈兵，更相信一拳一脚累积出来的确定感。面对压力，你的第一反应是站稳、出手，而不是后退。",
    bright: {
      title: "高光面",
      text: "你的意志力和抗压能力，是很多人羡慕的。答应了的事，你会咬牙练到做到。"
    },
    shadow: {
      title: "阴暗面",
      text: "对自己太狠的时候，你会忘记休息也是训练的一部分——受伤了还硬撑，是你最大的隐患。"
    },
    amplified: "别人：「今天状态不好，休息一下吧。」你：「再练最后一组。」（结果练到关门）",
    axes: { energy: 85, stage: 60, style: 45, team: 50 },
    about: {
      activities: "南北拳、器械套路、基本功与实战训练",
      forWho: "想锻炼体魄、学一身真功夫的你",
      line: "在这里，你会流汗，但也会真正变强。"
    }
  },
  {
    id: "yueyuan",
    name: "华乐团",
    archetype: "执弦雅士",
    image: "assets/clubs/yueyuan.jpg",
    tags: ["#音准控", "#慢工出细活", "#合奏型人格"],
    quote: "你享受的不是一个人闪耀，而是和大家一起，把一首曲子完整地呈现出来。",
    why: "你做事讲究章法，愿意为了一个音准反复练习。比起临场发挥，你更相信扎实的基本功。",
    bright: {
      title: "高光面",
      text: "你的耐心和稳定，是乐团里最珍贵的定海神针。别人抢拍走音，你永远是那个稳住旋律的人。"
    },
    shadow: {
      title: "阴暗面",
      text: "太追求完美，容易在小细节上钻牛角尖，忘了合奏本来就该有留白和呼吸感。"
    },
    amplified: "指挥都还没数拍，你已经默默练了八遍同一个乐句。",
    axes: { energy: 35, stage: 50, style: 15, team: 75 },
    about: {
      activities: "中乐合奏、乐器分部训练、定期公演",
      forWho: "会乐器或想从零学起的你，都欢迎",
      line: "在这里，你的乐器不再是一个人的独白。"
    }
  },
  {
    id: "cheling",
    name: "扯铃班",
    archetype: "指尖魔术师",
    image: "assets/clubs/cheling.jpg",
    tags: ["#手感型人格", "#越难越想挑战", "#专注力爆表"],
    quote: "别人看到的是花式，你在意的是那零点几秒的手感和节奏。",
    why: "你喜欢那种「练一百次终于成功一次」的爽感。看似简单的动作，你会拆解到最细的地方去打磨。",
    bright: {
      title: "高光面",
      text: "你的专注力和手眼协调，是练出来的硬实力。越是高难度的花式，越能激发你的斗志。"
    },
    shadow: {
      title: "阴暗面",
      text: "卡关的时候容易钻牛角尖，一次不成功就想一直重来，忘了适时让手腕休息。"
    },
    amplified: "手都练到起茧了，还在想「再试一次说不定就成了」。",
    axes: { energy: 70, stage: 65, style: 55, team: 35 },
    about: {
      activities: "花式扯铃、抛接特技、团体表演编排",
      forWho: "想练一身「反应式」绝活的你",
      line: "每一个花式，都是无数次失手换来的。"
    }
  },
  {
    id: "wenyi",
    name: "文艺班",
    archetype: "静墨行者",
    image: "assets/clubs/wenyi.jpg",
    tags: ["#慢节奏", "#细节控", "#情绪细腻"],
    quote: "比起热闹，你更享受一个人和笔墨相处的时间。",
    why: "你善于观察，也习惯把感受先收进心里，再慢慢转化成文字或画面。安静，对你来说不是孤单，而是充电。",
    bright: {
      title: "高光面",
      text: "你的细腻和审美，常常能发现别人忽略的美。你的作品，往往比你本人更会「说话」。"
    },
    shadow: {
      title: "阴暗面",
      text: "太习惯自己消化情绪，有时候该求助、该表达的时候，你选择了沉默。"
    },
    amplified: "朋友问你怎么了，你说「没事」，转头写了一整页的心情小记。",
    axes: { energy: 20, stage: 30, style: 30, team: 30 },
    about: {
      activities: "书法、绘画、文创设计、文字创作",
      forWho: "喜欢安静创作、想沉淀自己的你",
      line: "在这里，慢，是一种被允许的节奏。"
    }
  },
  {
    id: "xuanwu",
    name: "旋舞团",
    archetype: "流光旋者",
    image: "assets/clubs/xuanwu.jpg",
    tags: ["#节奏感拉满", "#优雅又利落", "#人群焦点体质"],
    quote: "你的身体比语言更早知道，怎么把一段音乐变成一段故事。",
    why: "你对节奏和空间很敏感，习惯用动作而不是言语来表达情绪。你享受被看见，但更享受那个「完全进入状态」的瞬间。",
    bright: {
      title: "高光面",
      text: "你的表现力和协调性，让你在人群中很难不被注意到。你懂得如何用身体讲故事。"
    },
    shadow: {
      title: "阴暗面",
      text: "太在意呈现效果的时候，容易忽略过程中的小失误，给自己不必要的压力。"
    },
    amplified: "音乐还没放完，你已经在脑内编好三个新的转场动作。",
    axes: { energy: 65, stage: 70, style: 60, team: 55 },
    about: {
      activities: "道具编舞、队形设计、舞台表演",
      forWho: "喜欢用肢体表达自己的你",
      line: "舞台亮起的瞬间，就是你的主场。"
    }
  },
  {
    id: "langchao",
    name: "浪潮剧坊",
    archetype: "浪潮叙事者",
    image: "assets/clubs/langchao.jpg",
    tags: ["#情绪拿捏精准", "#天生自带气场", "#共情力强"],
    quote: "你相信，每个人心里都藏着不止一个角色，只是缺一个舞台。",
    why: "你对情绪很敏感，也很擅长把它放大、收回、再准确地传递出去。你享受成为别人，也借此更了解自己。",
    bright: {
      title: "高光面",
      text: "你的感染力和共情能力，能让观众跟着你哭、跟着你笑。你天生适合站在故事的中心。"
    },
    shadow: {
      title: "阴暗面",
      text: "情绪投入太深的时候，容易分不清「角色的情绪」和「自己的情绪」，容易被剧情拖着走。"
    },
    amplified: "排练结束半小时了，你还没从角色的情绪里走出来。",
    axes: { energy: 60, stage: 85, style: 55, team: 65 },
    about: {
      activities: "舞台剧编排、即兴表演、声音与肢体训练",
      forWho: "想说故事、想挑战不同角色的你",
      line: "这里没有「不像你」，只有「还没被你演过」。"
    }
  },
  {
    id: "yujia",
    name: "瑜伽班",
    archetype: "静息行者",
    image: "assets/clubs/yujia.jpg",
    tags: ["#情绪稳定器", "#慢就是快", "#内在力量派"],
    quote: "比起向外证明，你更想先把自己安顿好。",
    why: "你懂得，真正的力量常常是安静的。你不急着跟别人比较，更在意自己有没有比昨天更松、更稳一点。",
    bright: {
      title: "高光面",
      text: "你的稳定和自我觉察，常常是朋友低落时第一个想到的依靠。你带给身边人一种「不慌」的安全感。"
    },
    shadow: {
      title: "阴暗面",
      text: "太习惯往内消化，有时候该释放的情绪，被你悄悄压成了身体的紧绷。"
    },
    amplified: "所有人都在崩溃尖叫，你深呼吸了一下，说「先冷静」。",
    axes: { energy: 15, stage: 20, style: 45, team: 20 },
    about: {
      activities: "基础体位、呼吸练习、伸展与放松",
      forWho: "想找回身心平衡、释放压力的你",
      line: "垫子上的一小时，是留给自己的时间。"
    }
  },
  {
    id: "jingqi",
    name: "竞棋社",
    archetype: "沉思棋者",
    image: "assets/clubs/jingqi.jpg",
    tags: ["#逻辑控", "#三步之后都算好了", "#输得起也赢得起"],
    quote: "别人看到一步棋，你已经在心里推演了后面十步。",
    why: "你喜欢有规则、有逻辑的挑战，享受那种「靠脑子赢回来」的成就感。安静的对局，对你来说比喧闹的场合更有吸引力。",
    bright: {
      title: "高光面",
      text: "你的逻辑思维和耐心，让你在关键时刻总能冷静判断。你不轻易冲动，但一旦出手往往很准。"
    },
    shadow: {
      title: "阴暗面",
      text: "太专注在「算计」的时候，容易忘了对手也是朋友，把每一局都看得太重。"
    },
    amplified: "只是朋友间的一局五子棋，你已经在脑内跑了三种开局套路。",
    axes: { energy: 25, stage: 25, style: 40, team: 35 },
    about: {
      activities: "象棋、围棋、桌游策略赛",
      forWho: "喜欢动脑、享受博弈过程的你",
      line: "每一步，都是一次小小的修行。"
    }
  },
  {
    id: "tengshi",
    name: "腾狮阁",
    archetype: "腾跃醒狮魂",
    image: "assets/clubs/tengshi.jpg",
    tags: ["#团魂爆棚", "#气势感拉满", "#信任型搭档"],
    quote: "你知道，一头狮子威不威风，从来不是一个人的事。",
    why: "你重视团队默契，愿意为了共同的节奏反复磨合。你享受的不只是掌声，更是和搭档一起扛下来的那份信任。",
    bright: {
      title: "高光面",
      text: "你的团队意识和爆发力，让你成为队伍里值得托付的那一个。鼓声一响，你就知道该往哪去。"
    },
    shadow: {
      title: "阴暗面",
      text: "太重情义的时候，容易为了「不能拖累队友」而硬撑，忘了受伤要先说出来。"
    },
    amplified: "腿已经在抖了，鼓点一变化，你还是先把动作接住再说。",
    axes: { energy: 90, stage: 75, style: 20, team: 85 },
    about: {
      activities: "醒狮基本功、梅花桩、锣鼓训练与巡演",
      forWho: "喜欢团队作战、想传承传统文化的你",
      line: "一鼓一步，都是几代人传下来的默契。"
    }
  },
  {
    id: "wujixian",
    name: "舞极限",
    archetype: "律动破格者",
    image: "assets/clubs/wujixian.jpg",
    tags: ["#停不下来的节奏感", "#自我风格强", "#battle型人格"],
    quote: "音乐一响，你的身体比脑袋反应得更快。",
    why: "你喜欢用自己的方式诠释节奏，不太想被固定的套路框住。舞台对你来说，是释放和表达自我的地方。",
    bright: {
      title: "高光面",
      text: "你的爆发力和个人风格很难被模仿。你不怕在人群里跳得不一样，因为那正是你的魅力所在。"
    },
    shadow: {
      title: "阴暗面",
      text: "太想秀出自我风格的时候，偶尔会忽略团队编排的整体感。"
    },
    amplified: "编舞老师喊「整齐一点」，你的身体还是很诚实地加了一个即兴动作。",
    axes: { energy: 88, stage: 80, style: 85, team: 60 },
    about: {
      activities: "Hip-hop / Freestyle / 团体编舞与 battle",
      forWho: "想用舞蹈表达自己、敢于展现个性的你",
      line: "这里没有标准答案，只有你的节奏。"
    }
  },
  {
    id: "yinzi",
    partner: true,
    name: "音子工作坊",
    archetype: "音符捕手",
    image: "assets/clubs/yinzi.jpg",
    tags: ["#耳朵很敏锐", "#情感型创作者", "#live型人格"],
    quote: "对你来说，一首歌唱对了，比说一百句话更能表达心情。",
    why: "你对旋律和歌词很敏感，习惯用音乐记录自己的状态。比起独自欣赏，你更想把这份感受唱出来、弹出来，让人听见。",
    bright: {
      title: "高光面",
      text: "你的音乐感受力和表现欲，让你很容易在人群中被记住。一开口，大家就知道那是你。"
    },
    shadow: {
      title: "阴暗面",
      text: "太沉浸在情绪和旋律里的时候，容易忽略台下观众的即时反应，需要多一点「收」的练习。"
    },
    amplified: "只是随口哼了一句，你已经默默编好了和声。",
    axes: { energy: 55, stage: 60, style: 70, team: 45 },
    about: {
      activities: "主唱／乐器训练、翻唱编曲、迎新营开幕演出",
      forWho: "喜欢唱歌、玩乐器，想站上舞台的你",
      line: "你的声音，值得被更多人听见。"
    }
  }
];

/* Scoring: the option you pick gives +3 to its main 文化班 and, on some
   options, +1 to one related 文化班. Every 文化班 owns exactly 4 main
   options, and no option gives points to both 全武门 and 腾狮阁, so each
   班 is equally reachable. 12 questions: 8 with 4 options, 4 with 3.
   This file is the single source of truth for scores — i18n.js reuses
   these scores for the English wording. */
const QUESTIONS = [
  {
    q: "突然有一整个空闲的周末，你最可能：",
    hint: "选择最接近你的那一项。",
    options: [
      { label: "约几个朋友排一出搞笑小品，笑到肚子痛", scores: { langchao: 3 } },
      { label: "一个人铺开宣纸或画本，安安静静写写画画", scores: { wenyi: 3 } },
      { label: "拿出扯铃，死磕一个怎么都接不稳的新花式", scores: { cheling: 3 } },
      { label: "抱起二胡、古筝或笛子，把一首曲子练到顺", scores: { yueyuan: 3, yinzi: 1 } }
    ]
  },
  {
    q: "朋友聚会，大家最期待你：",
    hint: "选择最接近你的那一项。",
    options: [
      { label: "抄起锣鼓，把现场的气氛一下子敲热", scores: { tengshi: 3 } },
      { label: "音乐一响就来一段即兴街舞，带大家一起动起来", scores: { wujixian: 3, xuanwu: 1 } },
      { label: "模仿老师或朋友，把大家逗得东倒西歪", scores: { langchao: 3 } },
      { label: "摆出一副棋，拉朋友杀上一盘", scores: { jingqi: 3 } }
    ]
  },
  {
    q: "下面哪一幕最让你心动？",
    hint: "选择最接近你的那一项。",
    options: [
      { label: "棋盘上一步妙手，把对手逼进死角", scores: { jingqi: 3 } },
      { label: "一把吉他、一束追光，全场跟着你一起唱", scores: { yinzi: 3, wujixian: 1 } },
      { label: "一条丝带在空中划出圆弧，像水墨一样流动", scores: { xuanwu: 3 } },
      { label: "整支乐团同时落音，二胡、古筝、笛子汇成一首曲子", scores: { yueyuan: 3 } }
    ]
  },
  {
    q: "心情特别烦躁的一天，你会怎么发泄？",
    hint: "选择最接近你的那一项。",
    options: [
      { label: "去练一身汗，把拳脚打到没有力气", scores: { wumen: 3 } },
      { label: "把烦躁演成一出夸张的小剧场，演完就舒服了", scores: { langchao: 3, yinzi: 1 } },
      { label: "戴上耳机，跟着节拍狠狠跳一场", scores: { wujixian: 3 } }
    ]
  },
  {
    q: "练习的时候，哪一刻最让你上瘾？",
    hint: "选择最接近你的那一项。",
    options: [
      { label: "一个高难度花式，终于稳稳接住的那一瞬", scores: { cheling: 3, jingqi: 1 } },
      { label: "全队踩着同一个鼓点，毫不犹豫地托起彼此", scores: { tengshi: 3, langchao: 1 } },
      { label: "对着镜子把一个动作抠到每一寸都到位，和昨天的自己较劲", scores: { wumen: 3, jingqi: 1 } },
      { label: "一段和声终于合上，听得人起鸡皮疙瘩", scores: { yinzi: 3 } }
    ]
  },
  {
    q: "别人形容你，最可能说你：",
    hint: "选择最接近你的那一项。",
    options: [
      { label: "举手投足都很有韵味，像在跳舞", scores: { xuanwu: 3 } },
      { label: "很有戏，一个眼神就能让人入戏", scores: { langchao: 3 } },
      { label: "很有书卷气，像从古画里走出来的人", scores: { wenyi: 3, yueyuan: 1 } },
      { label: "很会琢磨，永远比别人多想几步", scores: { jingqi: 3, cheling: 1 } }
    ]
  },
  {
    q: "如果要学一项新技能，你最想学：",
    hint: "选择最接近你的那一项。",
    options: [
      { label: "让丝带或扇子在手里旋转出漂亮的弧线", scores: { xuanwu: 3, wujixian: 1 } },
      { label: "把扯铃抛高、翻转，再稳稳接住", scores: { cheling: 3 } },
      { label: "街舞的卡点和律动，随时能自由发挥", scores: { wujixian: 3, tengshi: 1 } },
      { label: "用呼吸和伸展，让身体和心情慢慢松下来", scores: { yujia: 3, wenyi: 1 } }
    ]
  },
  {
    q: "一个人待着的时候，你最享受：",
    hint: "选择最接近你的那一项。",
    options: [
      { label: "提起毛笔写几个字，或随手画一幅小画", scores: { wenyi: 3 } },
      { label: "在垫子上慢慢拉伸，把注意力放回呼吸", scores: { yujia: 3, xuanwu: 1 } },
      { label: "戴上耳机放首歌，在房间里随便舞起来", scores: { wujixian: 3 } }
    ]
  },
  {
    q: "迎新营的舞台上，你最想登场的是：",
    hint: "选择最接近你的那一项。",
    options: [
      { label: "抱着吉他，唱一首属于自己的歌", scores: { yinzi: 3 } },
      { label: "一套拳法或兵器，干脆利落地亮个相", scores: { wumen: 3 } },
      { label: "华乐合奏，一曲让全场安静下来", scores: { yueyuan: 3 } },
      { label: "醒狮登场，鼓声一响全场沸腾", scores: { tengshi: 3 } }
    ]
  },
  {
    q: "迎新日的体验摊位，你会先走向：",
    hint: "选择最接近你的那一项。",
    options: [
      { label: "棋盘摊位，坐下来和人对弈一局", scores: { jingqi: 3, cheling: 1 } },
      { label: "书画摊位，提笔写下自己的名字", scores: { wenyi: 3 } },
      { label: "武术摊位，先学一个标准的起手式", scores: { wumen: 3 } }
    ]
  },
  {
    q: "什么时候你会觉得最有成就感？",
    hint: "选择最接近你的那一项。",
    options: [
      { label: "一个手上绝活终于稳了，全场屏住呼吸看着它落下", scores: { cheling: 3, wumen: 1 } },
      { label: "唱出来的歌，被别人跟着轻轻哼起来", scores: { yinzi: 3 } },
      { label: "一支舞编完，每一个动作都像画一样好看", scores: { xuanwu: 3 } },
      { label: "坚持伸展和呼吸一周，睡眠和情绪都变稳了", scores: { yujia: 3 } }
    ]
  },
  {
    q: "迎新营结束后，你希望大家记住你的是：",
    hint: "选择最接近你的那一项。",
    options: [
      { label: "像鼓点一样让人热血沸腾的气势", scores: { tengshi: 3, langchao: 1 } },
      { label: "合奏里那一个稳稳的、干净的音", scores: { yueyuan: 3 } },
      { label: "让人安心的、慢下来的松弛感", scores: { yujia: 3 } }
    ]
  }
];

function getClub(id) {
  return CLUBS.find(c => c.id === id);
}

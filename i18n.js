/* ============================================================
   文化班分类 · English translations
   Cultural Class "official" Chinese names are kept as-is (proper nouns);
   everything else — flavour text, UI chrome, quiz copy — is
   translated. Structure mirrors data.js exactly (same ids,
   same option order/scores) so app.js can switch arrays freely
   mid-quiz without breaking the scoring.
   ============================================================ */

const STRINGS = {
  "nav-directory": { zh: "浏览全部文化班", en: "Browse All Cultural Classes" },
  "brand-sub": { zh: "文化班人格测试", en: "Cultural Class Personality Quiz" },

  "hero-eyebrow": { zh: "博大中华 · 文化班人格测试", en: "Zhong Hua Cultural Arts Society UPM · Cultural Class Personality Quiz" },
  "hero-h1": {
    zh: "在10个文化班和1个合作伙伴里，<br>遇见<span class=\"accent\">最像你</span>的那一个。",
    en: "Out of 10 cultural classes and 1 partner,<br>meet the one that feels most <span class=\"accent\">like you</span>.",
    html: true
  },
  "hero-lede": {
    zh: "12 道关于日常选择的小问题，没有标准答案。答完之后，我们会从 10 个文化班和 1 个合作伙伴里，找到与你气质最接近的一个——顺便，多认识一点自己。",
    en: "12 quick questions about everyday choices — there's no right answer. At the end, we'll match you with the cultural class (or partner) whose vibe fits you best, and maybe you'll learn a little about yourself along the way."
  },
  "meta-q": { zh: "12 道日常选择", en: "12 quick questions" },
  "meta-clubs": { zh: "10 个文化班 + 1 个合作伙伴", en: "10 cultural classes + 1 partner" },
  "cta-start": { zh: "开始测试 →", en: "Start the Quiz →" },

  "step1-title": { zh: "跟着直觉选", en: "Follow Your Gut" },
  "step1-text": { zh: "没有标准答案，选择更像你的那一个。", en: "There's no right answer — just pick what feels like you." },
  "step2-title": { zh: "遇见你的文化班", en: "Meet Your Cultural Class" },
  "step2-text": { zh: "12 道选择，找到与你气质最接近的文化班。", en: "12 choices to find the one that matches your vibe." },
  "step3-title": { zh: "找到你的舞台", en: "Find Your Stage" },
  "step3-text": { zh: "看看适合你的地方，也欢迎实际来体验看看。", en: "See where you might belong — and come try it out in person." },

  "about-h2": { zh: "关于这次测试", en: "About This Quiz" },
  "about-p1": {
    zh: "12 道关于日常习惯和喜好的小问题，不需要去想「哪个答案更好」，只需要选择更接近真实自己的那一个。",
    en: "12 quick questions about everyday habits and preferences. Don't overthink which answer is “better” — just pick the one closest to the real you."
  },
  "about-p2": {
    zh: "最后，我们会从 10 个文化班和 1 个合作伙伴中，找到与你性格倾向最接近的一个。它不是能力测验，也不是硬性分配，更像是借一个熟悉的问题，重新认识一下自己，也顺便认识博特拉大学中华文化学会旗下的文化班以及合作伙伴。",
    en: "At the end, we'll match you with the cultural class (or partner) whose personality is closest to yours. It's not a skills test or a fixed assignment — it’s more of a fun way to reflect on yourself, while getting to know Zhong Hua Cultural Arts Society UPM’s cultural classes and our partner."
  },
  "disclaimer1": { zh: "娱乐向测试 · 结果仅供参考，不代表唯一适合你的文化班", en: "For fun only · Your result is just a reference, not the only cultural class that suits you" },
  "disclaimer2": { zh: "欢迎到迎新月特别活动现场，实际体验各个文化班及合作伙伴", en: "Come try every cultural class and our partner in person at our Orientation Month special event, <Serendipity · Journeying Together>" },

  "quiz-title": { zh: "文化班人格探索", en: "Cultural Class Personality Quest" },
  "quiz-hint-default": { zh: "选择最接近你的那一项。", en: "Pick whichever feels closest to you." },
  "quiz-prev": { zh: "← 上一题", en: "← Previous" },
  "quiz-nav-hint": { zh: "点击选项，进入下一题", en: "Tap an option to continue" },

  "match-label": { zh: "匹配度", en: "Match" },
  "r-kicker-matched": { zh: "与你相配的文化班", en: "Your matched cultural class" },
  "r-kicker-browse": { zh: "文化班档案", en: "Cultural Class Profile" },
  "scroll-cue": { zh: "往下看，认识更完整的这个文化班 ↓", en: "Scroll down for the full profile ↓" },

  "axes-card-kicker": { zh: "这个文化班的气质光谱", en: "This cultural class's personality spectrum" },
  "axes-card-h2": { zh: "四维气质倾向", en: "Four-Axis Profile" },
  "axes-note": {
    zh: "光谱反映的是文化班整体的活动气质，不是绝对的评价标准——每个文化班里，都容得下不同性格的人。",
    en: "These spectrums reflect the cultural class's overall vibe, not a strict rule — every cultural class has room for different personalities."
  },

  "why-card-kicker": { zh: "为什么你们合适", en: "Why you match" },
  "why-card-h2": { zh: "为什么推荐这个文化班", en: "Why we recommend this cultural class" },
  "amplified-kicker": { zh: "当这种气质被放大时", en: "When this trait goes into overdrive" },

  "about-card-kicker": { zh: "文化班档案", en: "Cultural Class Profile" },
  "about-label-activities": { zh: "活动内容：", en: "Activities: " },
  "about-label-forwho": { zh: "适合对象：", en: "Best for: " },
  "about-label-line": { zh: "一句话：", en: "In one line: " },
  "top3-kicker": { zh: "你的前三名推荐", en: "Your top 3 matches" },
  "top3-h2": { zh: "三个都值得去看看", en: "All three are worth a visit" },
  "top3-hint": { zh: "点一下，查看该班的完整档案", en: "Tap one to see its full profile" },
  "r-kicker-rank2": { zh: "你的第 2 推荐", en: "Your #2 match" },
  "r-kicker-rank3": { zh: "你的第 3 推荐", en: "Your #3 match" },
  "ig-follow": { zh: "在 Instagram 关注", en: "Follow on Instagram" },
  "ig-society": { zh: "博大中华", en: "Zhong Hua UPM" },
  "ig-event": { zh: "《缘·华韵相逢》迎新月活动", en: "Orientation Month Special Event" },
  "about-name-suffix": { zh: " 文化班档案", en: " — Cultural Class Profile" },

  "cta-retake": { zh: "再测一次", en: "Retake the Quiz" },
  "cta-browse": { zh: "看看其他文化班 →", en: "Browse Other Cultural Classes →" },
  "cta-note": {
    zh: "匹配度为答题倾向的相似程度，不是能力或优劣的评价。",
    en: "Match % reflects how closely your answers align — it's not a measure of skill or worth."
  },

  "dir-h2": { zh: "博大中华文化学会 · 文化班与合作伙伴", en: "Zhong Hua Cultural Arts Society UPM · Cultural Classes & Partner" },
  "dir-p": {
    zh: "点击任一文化班或合作伙伴，查看完整档案；或返回做一次测试，让我们帮你推荐。",
    en: "Click any cultural class or our partner to see the full profile, or take the quiz and let us match you."
  },

  "partner-badge": { zh: "合作伙伴", en: "Partner" },
  "r-kicker-matched-partner": { zh: "与你相配的合作伙伴", en: "Your matched partner" },
  "r-kicker-browse-partner": { zh: "合作伙伴档案", en: "Partner Profile" },
  "scroll-cue-partner": { zh: "往下看，认识更完整的这位合作伙伴 ↓", en: "Scroll down for the full profile ↓" },
  "axes-card-kicker-partner": { zh: "这位合作伙伴的气质光谱", en: "This partner's personality spectrum" },
  "axes-note-partner": {
    zh: "光谱反映的是合作伙伴整体的活动气质，不是绝对的评价标准——这里同样容得下不同性格的人。",
    en: "These spectrums reflect our partner's overall vibe, not a strict rule — there's room for different personalities here too."
  },
  "why-card-h2-partner": { zh: "为什么推荐这位合作伙伴", en: "Why we recommend this partner" },
  "about-card-kicker-partner": { zh: "合作伙伴档案", en: "Partner Profile" },
  "about-name-suffix-partner": { zh: " 合作伙伴档案", en: " — Partner Profile" },
  "dir-cta": { zh: "做个测试，帮我推荐 →", en: "Take the Quiz, Get Matched →" },

  "footer": {
    zh: "博特拉大学中华文化学会 Zhong Hua Cultural Arts Society UPM",
    en: "Zhong Hua Cultural Arts Society UPM"
  },

  "page-title": { zh: "缘·华韵相逢 | 文化班人格测试", en: "Yuan · Where Splendor Begins | Cultural Class Personality Quiz" }
};

const AXES_EN = [
  { key: "energy", label: "Energy", lo: "Calm & Grounded", hi: "High Energy" },
  { key: "stage", label: "Spotlight", lo: "Backstage Specialist", hi: "Front & Center" },
  { key: "style", label: "Style", lo: "Traditional Roots", hi: "Modern & Trendy" },
  { key: "team", label: "Teamwork", lo: "Solo Craft", hi: "Team Synergy" }
];

const CLUBS_EN = [
  {
    id: "wumen",
    name: "Wushu Class",
    archetype: "The Blazing Warrior",
    image: "assets/clubs/wumen.jpg",
    tags: ["#SharpMoves", "#PromiseKeeper", "#FightsHarderEachTime"],
    quote: "You believe real confidence is trained, not shouted.",
    why: "You're not big on talking things over endlessly — you trust what a punch and a stance can prove. Under pressure, your first instinct is to plant your feet and act, not back away.",
    bright: { title: "Bright Side", text: "Your willpower and grit are the envy of the room. Once you commit to something, you'll grind until it's done." },
    shadow: { title: "Growth Edge", text: "When you're hardest on yourself, you forget rest is part of training too — pushing through an injury is your biggest risk." },
    amplified: "Friend: “You look wiped, take a break.” You: “One more set.” (Trains until the hall closes.)",
    axes: { energy: 85, stage: 60, style: 45, team: 50 },
    about: {
      activities: "Northern & Southern fist forms, weapons routines, conditioning and sparring",
      forWho: "Anyone who wants to build real strength and learn genuine martial arts",
      line: "Here, you'll sweat — but you'll actually get stronger."
    }
  },
  {
    id: "yueyuan",
    name: "Chinese Orchestra",
    archetype: "The Elegant Strings",
    image: "assets/clubs/yueyuan.jpg",
    tags: ["#PitchPerfectionist", "#SlowAndSteadyWins", "#EnsembleMindset"],
    quote: "You'd rather be part of a whole piece coming together than shine alone.",
    why: "You like doing things properly, and you'll repeat a single passage until the pitch is right. You trust solid fundamentals more than winging it on the night.",
    bright: { title: "Bright Side", text: "Your patience and steadiness are the anchor of the ensemble. When everyone else rushes or drifts off-key, you're the one holding the melody together." },
    shadow: { title: "Growth Edge", text: "Chasing perfection too hard, you can get stuck on tiny details and forget an ensemble needs room to breathe too." },
    amplified: "The conductor hasn't even counted in yet, and you've already run that one phrase eight times.",
    axes: { energy: 35, stage: 50, style: 15, team: 75 },
    about: {
      activities: "Chinese ensemble playing, sectional practice, regular public performances",
      forWho: "Whether you already play an instrument or want to start from zero",
      line: "Here, your instrument is no longer a solo voice."
    }
  },
  {
    id: "cheling",
    name: "Diabolo Class",
    archetype: "The Finger Sorcerer",
    image: "assets/clubs/cheling.jpg",
    tags: ["#FeelInYourHands", "#TheHarderTheBetter", "#LaserFocus"],
    quote: "Others see the trick — you're chasing that half-second of perfect feel and timing.",
    why: "You love the thrill of “ninety-nine tries, then it finally clicks.” What looks like a simple move, you'll break down to the smallest detail and drill it.",
    bright: { title: "Bright Side", text: "Your focus and hand-eye coordination are real, hard-earned skill. The harder the trick, the more it fires you up." },
    shadow: { title: "Growth Edge", text: "When you're stuck, you can fixate — one failed attempt and you just want to go again, forgetting your wrists need rest too." },
    amplified: "Your hands are already calloused, and you're still thinking “one more try and I've got it.”",
    axes: { energy: 70, stage: 65, style: 55, team: 35 },
    about: {
      activities: "Diabolo tricks, throw-and-catch stunts, group routine choreography",
      forWho: "Anyone who wants a genuinely impressive, hard-earned skill",
      line: "Every trick you see is built on countless drops."
    }
  },
  {
    id: "wenyi",
    name: "Chinese Arts Painting and Calligraphy Class",
    archetype: "The Quiet Ink Wanderer",
    image: "assets/clubs/wenyi.jpg",
    tags: ["#SlowPace", "#DetailPerson", "#DeepFeeler"],
    quote: "You'd rather spend time alone with pen, ink and paper than be out in the noise.",
    why: "You notice things others miss, and you're used to holding feelings in before slowly turning them into words or images. Quiet, for you, isn't loneliness — it's how you recharge.",
    bright: { title: "Bright Side", text: "Your sensitivity and eye for beauty often catch what others overlook. Your work tends to “speak” louder than you do." },
    shadow: { title: "Growth Edge", text: "You're so used to processing things alone that sometimes, when you should ask for help or speak up, you go quiet instead." },
    amplified: "A friend asks if you're okay. You say “yeah, fine” — then go write a full page about how you actually feel.",
    axes: { energy: 20, stage: 30, style: 30, team: 30 },
    about: {
      activities: "Calligraphy, painting, creative design, creative writing",
      forWho: "Anyone who loves quiet creation and wants to slow down and reflect",
      line: "Here, slow is a pace you're allowed to keep."
    }
  },
  {
    id: "xuanwu",
    name: "Xuan Dance Troupe",
    archetype: "The Flowing Light Dancer",
    image: "assets/clubs/xuanwu.jpg",
    tags: ["#RhythmMaxed", "#SharpYetGraceful", "#NaturalFocalPoint"],
    quote: "Your body understands, before words do, how to turn music into a story.",
    why: "You're tuned in to rhythm and space, and you'd rather express through movement than talk it out. You enjoy being seen, but you love that moment of being fully “in it” even more.",
    bright: { title: "Bright Side", text: "Your expressiveness and coordination make you hard to miss in a crowd. You know how to tell a story with your body." },
    shadow: { title: "Growth Edge", text: "When you care too much about how it looks, you can pile pressure on yourself over tiny slips no one else even notices." },
    amplified: "The music hasn't even ended, and you've already choreographed three new transitions in your head.",
    axes: { energy: 65, stage: 70, style: 60, team: 55 },
    about: {
      activities: "Prop choreography, formation design, stage performances",
      forWho: "Anyone who loves expressing themselves through movement",
      line: "The moment the lights come up, that's your stage."
    }
  },
  {
    id: "langchao",
    name: "Drama and Sketch Class",
    archetype: "The Wave Storyteller",
    image: "assets/clubs/langchao.jpg",
    tags: ["#PreciseEmotionalRange", "#NaturalPresence", "#DeeplyEmpathetic"],
    quote: "You believe everyone carries more than one character inside — they're just missing a stage.",
    why: "You're highly attuned to emotion, and skilled at amplifying it, reining it back in, and delivering it precisely. You enjoy becoming someone else, and it helps you understand yourself better too.",
    bright: { title: "Bright Side", text: "Your charisma and empathy can make an audience laugh and cry right along with you. You're a natural at the center of a story." },
    shadow: { title: "Growth Edge", text: "When you go too deep into a role, you can lose the line between “the character's feelings” and “your own”, and get pulled along by the plot." },
    amplified: "Rehearsal ended half an hour ago and you still haven't quite shaken the character's mood.",
    axes: { energy: 60, stage: 85, style: 55, team: 65 },
    about: {
      activities: "Stage play production, improv, voice and physical training",
      forWho: "Anyone who wants to tell stories and try on different characters",
      line: "Here, there's no “not like you” — only a role you haven't played yet."
    }
  },
  {
    id: "yujia",
    name: "Yoga Class",
    archetype: "The Still Breather",
    image: "assets/clubs/yujia.jpg",
    tags: ["#EmotionalAnchor", "#SlowIsFast", "#InnerStrength"],
    quote: "Before proving anything to anyone else, you want to get yourself settled first.",
    why: "You understand that real strength is often quiet. You're not racing to compare yourself to others — you care more about being a little looser, a little steadier, than you were yesterday.",
    bright: { title: "Bright Side", text: "Your steadiness and self-awareness often make you the first person a friend thinks of when they're low. You bring a sense of calm wherever you go." },
    shadow: { title: "Growth Edge", text: "You're so used to processing things internally that emotions you should release sometimes just turn into quiet physical tension instead." },
    amplified: "Everyone around you is losing it, and you just take a breath and say, “let's stay calm.”",
    axes: { energy: 15, stage: 20, style: 45, team: 20 },
    about: {
      activities: "Basic postures, breathing practice, stretching and relaxation",
      forWho: "Anyone looking to restore balance and release stress",
      line: "That one hour on the mat is time just for you."
    }
  },
  {
    id: "jingqi",
    name: "Chess Class",
    archetype: "The Quiet Strategist",
    image: "assets/clubs/jingqi.jpg",
    tags: ["#LogicBrain", "#TenMovesAhead", "#GoodWinnerGoodLoser"],
    quote: "Others see one move. You've already worked out the next ten in your head.",
    why: "You like challenges with clear rules and logic, and you get real satisfaction from winning “by out-thinking” someone. A quiet match appeals to you more than a loud crowd.",
    bright: { title: "Bright Side", text: "Your logic and patience mean you stay level-headed at the key moment. You don't act on impulse, but when you do move, it usually counts." },
    shadow: { title: "Growth Edge", text: "When you're too locked into “calculating,” you can forget your opponent is also a friend, and take every game a little too seriously." },
    amplified: "It's just a casual game of Connect Four with a friend, and you've already run three opening strategies in your head.",
    axes: { energy: 25, stage: 25, style: 40, team: 35 },
    about: {
      activities: "Chinese chess, Go, strategy board game tournaments",
      forWho: "Anyone who loves thinking hard and enjoys the game of outwitting",
      line: "Every move is a small exercise in discipline."
    }
  },
  {
    id: "tengshi",
    name: "Teng Shi Pavilion",
    archetype: "The Leaping Lion Spirit",
    image: "assets/clubs/tengshi.jpg",
    tags: ["#TeamSpiritMaxed", "#BigPresence", "#TrustedPartner"],
    quote: "You know a lion's roar was never about just one person.",
    why: "You value chemistry with your team, and you'll rehearse the same rhythm over and over until it clicks. What you love isn't just the applause — it's the trust built with your partner along the way.",
    bright: { title: "Bright Side", text: "Your team spirit and explosive power make you someone the group can truly rely on. When the drum hits, you already know where to go." },
    shadow: { title: "Growth Edge", text: "Loyalty runs deep — sometimes too deep. You'll push through pain so you “don't drag the team down,” instead of speaking up when you're hurt." },
    amplified: "Your legs are already shaking, but the drumbeat shifts, and you still land the move first, ask questions later.",
    axes: { energy: 90, stage: 75, style: 20, team: 85 },
    about: {
      activities: "Lion dance fundamentals, plum-blossom poles, drum & gong training, tours",
      forWho: "Anyone who loves team performance and wants to carry on tradition",
      line: "Every beat and step carries generations of shared rhythm."
    }
  },
  {
    id: "wujixian",
    name: "Extreme Dancers Club (UXD)",
    archetype: "The Rhythm Breaker",
    image: "assets/clubs/wujixian.jpg",
    tags: ["#CantStopTheGroove", "#StrongPersonalStyle", "#BattleReady"],
    quote: "When the music drops, your body reacts before your brain does.",
    why: "You like interpreting rhythm your own way, and you don't love being boxed into a fixed routine. The stage, for you, is a place to release and express yourself.",
    bright: { title: "Bright Side", text: "Your explosiveness and personal style are hard to copy. You're not afraid to move differently from the crowd — that's exactly your appeal." },
    shadow: { title: "Growth Edge", text: "When you're chasing your own flavor too hard, you can occasionally lose the group's overall shape in a routine." },
    amplified: "The choreographer yells “keep it tight!” — and your body still, very honestly, throws in one more freestyle move.",
    axes: { energy: 88, stage: 80, style: 85, team: 60 },
    about: {
      activities: "Hip-hop / freestyle, group choreography and battles",
      forWho: "Anyone who wants to express themselves through dance and isn't afraid to stand out",
      line: "There's no right answer here — only your own rhythm."
    }
  },
  {
    id: "yinzi",
    partner: true,
    name: "Yinzi Acoustic Workshop",
    archetype: "The Note Catcher",
    image: "assets/clubs/yinzi.jpg",
    tags: ["#SharpEars", "#EmotionalCreator", "#BornForLive"],
    quote: "For you, hitting the right note says more than a hundred sentences ever could.",
    why: "You're sensitive to melody and lyrics, and you use music to record how you're feeling. Rather than just enjoying it alone, you want to sing it, play it, and let people actually hear it.",
    bright: { title: "Bright Side", text: "Your musical instinct and stage presence make you easy to remember in a crowd. The moment you open your mouth, everyone knows it's you." },
    shadow: { title: "Growth Edge", text: "When you're deep in the emotion and the melody, you can miss how the audience is reacting in the moment — worth practicing a bit more “pulling back.”" },
    amplified: "You just hummed a random line under your breath, and you've already quietly written the harmony for it.",
    axes: { energy: 55, stage: 60, style: 70, team: 45 },
    about: {
      activities: "Vocal / instrument training, cover arrangements, Orientation Month opening performance",
      forWho: "Anyone who loves singing or playing an instrument and wants to get on stage",
      line: "Your voice deserves to be heard by more people."
    }
  }
];

/* English wording only. Scores are taken from QUESTIONS in data.js by
   position (same question order, same option order), so the two
   languages can never score differently. */
const QUESTIONS_TEXT_EN = [
  {
    q: "You suddenly have a completely free weekend — you're most likely to:",
    options: [
      "Get a few friends together to put on a silly sketch and laugh until your stomach hurts",
      "Spread out rice paper or a sketchbook and write or draw quietly alone",
      "Pull out your diabolo and grind away at a new trick you can't quite catch",
      "Pick up an erhu, guzheng or flute and drill one piece until it's smooth"
    ]
  },
  {
    q: "At a get-together, everyone's looking forward to you:",
    options: [
      "Grabbing the gongs and drums and instantly heating up the room",
      "Busting out an improvised street-dance move the moment the music starts and getting everyone moving",
      "Doing impressions of teachers or friends until everyone's in stitches",
      "Setting out a board and pulling a friend into a match"
    ]
  },
  {
    q: "Which scene moves you most?",
    options: [
      "One brilliant move on the board that corners your opponent",
      "One guitar, one spotlight, and the whole crowd singing with you",
      "A ribbon tracing a circle through the air, flowing like ink wash",
      "A whole orchestra landing the same note — erhu, guzheng and flute blending into one piece"
    ]
  },
  {
    q: "On a really irritable day, how do you let it out?",
    options: [
      "Throw punches and kicks until you’re drenched in sweat and out of strength",
      "Turn the irritation into an over-the-top mini play — you feel better once it's out",
      "Put on headphones and dance hard to the beat"
    ]
  },
  {
    q: "While practicing, which moment hooks you the most?",
    options: [
      "Finally catching a tricky move cleanly",
      "The whole team stepping on the same drumbeat and lifting each other up without hesitation",
      "Facing the mirror and polishing one movement to perfection, competing with yesterday's you",
      "A harmony finally locking in, giving you goosebumps"
    ]
  },
  {
    q: "People are most likely to describe you as:",
    options: [
      "Graceful — every move has a certain elegance, like dancing",
      "Dramatic — one look and people are drawn in",
      "Bookish — like someone who stepped out of an old painting",
      "A thinker — always a few steps ahead of everyone"
    ]
  },
  {
    q: "If you could learn one new skill, you'd pick:",
    options: [
      "Making a ribbon or fan spin through beautiful arcs in your hand",
      "Tossing a diabolo high, flipping it, and catching it cleanly",
      "Street dance — hitting the beat and freestyling whenever you like",
      "Using breath and stretching to let your body and mind slowly loosen"
    ]
  },
  {
    q: "When you're alone, what do you enjoy most:",
    options: [
      "Picking up a brush to write a few characters or sketch something small",
      "Stretching slowly on a mat, bringing your attention back to your breath",
      "Putting on headphones and dancing around the room to a song"
    ]
  },
  {
    q: "On the stage at Orientation Month, which act would you most want to be in?",
    options: [
      "Singing an original song with a guitar in hand",
      "A martial arts form or weapon routine, crisp and clean",
      "A Chinese orchestra piece that quiets the whole hall",
      "The lion dance entrance — the moment the drum hits, the crowd erupts"
    ]
  },
  {
    q: "At the Orientation Month special event booths, you'd head first to:",
    options: [
      "The chess booth, to sit down for a match",
      "The calligraphy and painting booth, to write your name with a brush",
      "The martial arts booth, to learn a proper opening stance"
    ]
  },
  {
    q: "When do you feel the most accomplished?",
    options: [
      "When a hands-on trick finally lands steadily while the whole crowd holds its breath",
      "When someone starts humming along to a song you sang",
      "When a dance is finished and every movement looks like a painting",
      "After a week of steady stretching and breathing, your sleep and mood have evened out"
    ]
  },
  {
    q: "After Orientation Month ends, what do you hope people remember about you?",
    options: [
      "An energy like a drumbeat that gets everyone fired up",
      "The steady, clean note you held inside the ensemble",
      "A reassuring, unhurried calm"
    ]
  }
];

const QUESTIONS_EN = QUESTIONS.map((zhQ, qi) => ({
  q: QUESTIONS_TEXT_EN[qi].q,
  hint: "Pick whichever feels closest to you.",
  options: zhQ.options.map((zhOpt, oi) => ({
    label: QUESTIONS_TEXT_EN[qi].options[oi],
    scores: zhOpt.scores
  }))
}));

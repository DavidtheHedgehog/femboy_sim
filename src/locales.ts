import { Language, EndReason } from './types';

export const UI = {
  zh: {
    titleMain: '赛博 Femboy',
    titleSub: '模拟器 :3',
    startBtn: '[ 点击启动终端 ]',
    warningText: 'WARN: This simulation contains high levels of brainrot, Linux elitism, and deeply fried BDSM degeneracy.',
    warnTitle: '⚠️ 警告：极度精神污染警告',
    warnDisclaimer: '免责与生存指导声明',
    warn1: '1. 本程序已加入“精神稳定性”及深度污染性事件，极度刻板与抽象，谢绝三次元模仿。',
    warn2: '2. 随着你的极端选择增加，[精神稳定性]将急剧下降，这将导向无法挽回的病态结局。',
    warn3: '3. 此虚拟切片仅供研究赛博心理变态与病理级网络依赖使用。',
    warn4: '新目标生存法则：你可以放弃阳刚，你可以出卖尊严，但请在理智（精神稳定）彻底崩塌前死守底线。',
    warnBtn: '> sudo start_degradation.sh --force',
    eventTitle: '事件编号',
    logAwaiting: 'Awaiting nervous system input...',
    endSurvive: '// 模拟存活寿命: {eventsPassed} 轮切片 //',
    endBtn: '[ 清除记忆体重新坠落 ]',
  },
  en: {
    titleMain: 'Cyber Femboy',
    titleSub: 'Simulator :3',
    startBtn: '[ INIT TERMINAL ]',
    warningText: 'WARN: This simulation contains high levels of brainrot, Linux elitism, and deeply fried BDSM degeneracy.',
    warnTitle: '⚠️ WARNING: EXTREME MENTAL HAZARD',
    warnDisclaimer: 'Disclaimer & Survival Guide',
    warn1: '1. This program includes "Mental Stability" tracking and extreme brainrot events. Do not imitate.',
    warn2: '2. As extreme choices accumulate, your sanity will plunge, leading to irreversible pathological ends.',
    warn3: '3. This virtual slice is strictly for studying cyber-psychosis and pathological internet dependency.',
    warn4: 'Survival Rule: You may abandon masculinity, you may sell your dignity, but do not let your sanity completely shatter.',
    warnBtn: '> sudo start_degradation.sh --force',
    eventTitle: 'Event ID',
    logAwaiting: 'Awaiting nervous system input...',
    endSurvive: '// SURVIVED SLICES: {eventsPassed} //',
    endBtn: '[ WIPE MEMORY & FALL AGAIN ]',
  }
};

export const STAT_NAMES = {
  zh: {
    cuteness: ':3 浓度',
    pleasure: '禁忌快感',
    monster: '魔爪污染度',
    terminal: 'Arch 熟练度',
    disappointment: '亲属蒙羞阈值',
    masculinity: '原生阳刚残留',
    mental_stability: '精神稳定性'
  },
  en: {
    cuteness: ':3 Concentration',
    pleasure: 'Taboo Pleasure',
    monster: 'Monster Energy',
    terminal: 'Arch Linux Skill',
    disappointment: 'Family Disappointment',
    masculinity: 'Masculinity Left',
    mental_stability: 'Mental Stability'
  }
};

export const ENDINGS: Record<Language, Record<EndReason, { title: string, desc: string }>> = {
  zh: {
    WIN_TRANSCENDENCE: {
      title: '👑 终局：赛博魅魔 👑',
      desc: '“不再需要沉重的伪装了...”你坐在布满粉色灯带与劣质情趣用品的房间里，看着屏幕上拥有百万粉丝的虚拟皮肤。现实里的你因为激素乱用和病态作息已经极度消瘦，但在中文互联网深处，你是不朽的欲望神明，是无数野狗深夜渴求的主播。你成功亲手把曾经那个名为“男人”的自己推进了焚化炉，完成了最病态的羽化登仙。'
    },
    WIN_SUCCUBUS_EMPRESS: {
      title: '💖 真神降临：快乐恶魔的女王 💖',
      desc: '经过无数次高频震荡、电击、异物撑开以及赛博空间的极限调教，你不仅没有发疯，反而将快感阈值突破了人类的生物学极值。你的肉身化为了多巴胺与内啡肽的永动机，成为了真正的现世欲魔，每一个眼神都能让屏幕前的千万信徒陷入无尽的高潮。理智非但没有崩溃，反而以最扭曲的姿态统治了混沌！'
    },
    DEATH_PLEASURE_MELTDOWN: {
      title: '💦 生理溶解：快乐死 (High/Meltdown) 💦',
      desc: '“啊啊啊...已经...彻底坏掉了...”过载的高频刺激冲毁了你的大脑前额叶，巨量的内分泌彻底烧断了你的神经元。随着最后一滴理智与体液在痉挛中喷出，你的大脑陷入了永远无法苏醒的、甜美至极但也空洞骇人的植物人深渊。你带着诡异潮红和痴汉般的满足笑容被送进了重症监护室，再也没有醒来。'
    },
    WIN_TERMINAL_GOD: {
      title: '💻 飞升：开源受难者神主 💻',
      desc: '肉身只会产生愚蒙的情欲与报错，而唯有代码永存。在连续 130 小时剥夺睡眠并放弃所有社交软件后，你通过一套非法的脑机接口，将自己的中枢神经接入了 Arch 的内核代码仓。肉身在散发恶臭的机房里彻底腐朽，但灵魂化作了冰冷执行的 0 和 1。每一次段错误的爆发，都是你在阴影中的狂笑，你成为了真正的赛博幽灵！'
    },
    DEATH_MONSTER: {
      title: '💀 医疗事故：工业糖水溶解 💀',
      desc: '“他的血管里到底泵着什么工业废料？”急诊室的主治医生看着你那惨绿发光的手臂在发抖。上面挂满了一次性针眼和 RGB 理线带。在连续灌入 80 罐粉色魔爪后，你的心率飙到了极危的极限值，在一声音爆般的搏动中宣告宕机。尸检报告显示，你的内脏已经被色素染成了触目惊心的赛博荧光绿。'
    },
    DEATH_DAD: {
      title: '👨 物理超度：雷霆之厄 👨',
      desc: '防盗铁门连同水泥门框被“轰”地一声巨响踹成粉末。你那退伍军人出身的亲爹，提着滴着机油的扳手和半截断裂的皮带破门而入。看着你身上挂着的电击线、穿着的开裆白丝甚至头套，他眼里的那束光彻底炸裂为死寂。他用一锤物理超度了你的 RTX 4090，然后将你死死捆成一坨猪肉，连夜押往了地处深山、永不见天日的“全脱产强制管教基地”。再见，外面的世界。'
    },
    DEATH_STRAIGHT: {
      title: '👔 幡然醒悟：重返泥土 👔',
      desc: '在一次极寒交加的深夜崩溃后，虚妄的浪潮把你拍醒。你终于承认这些恶心的抽象只是一块你自欺欺人的遮羞布，掩饰着你逃避竞争的软弱。你重置了所有硬盘，剪毁了所有丝袜和环状物。你穿起劣质西服，成了无数枯燥格子间里的一名推销员。你生了一个孩子，肚腩被脂肪堆满。你以为自己走入正轨，却在无数个午夜的梦中，依然死死盯着天花板，痛苦地怀念着命令行闪烁的光。'
    },
    DEATH_TOY_OVERLOAD: {
      title: '🔌 硬件灾变：赛博烤肉机 🔌',
      desc: '为了填补越来越巨大的受虐欲空洞，你写了个 Python 后台服务，把你的 GitHub Commit 和一套强压变频电痉挛套装直接挂钩。可悲的是，你忘记在无限循环里加异常捕获。核心进程爆出 Panic 导致电流峰值反冲，直奔下三路！当消防员撞开因为跳闸短路而起火的房门时，他们看见了一台烤得滋滋冒油的“活体铁皮人”。人被送进 ICU 保住了，但核心部件被永远注销。'
    },
    DEATH_BDSM_SLAVE: {
      title: '⛓️ 彻底溺亡：电子肉便器 ⛓️',
      desc: '“狗东西，立刻把这段屎山 Java 用工厂模式重构完，否则我遥控断你的氧！”麦克风里传来了金主冰冷的嗤笑。你呜咽着流下了泪，泪水里写满了绝望和病态的死心塌地。你戴着重型项圈被生锈的铁链死死锁在地下室的桌前。你完全交出了反抗的底线、做人的人格和代码尊严。你成了一堆挂着生肉的打字机，你的灵魂已经停止了运作。'
    },
    DEATH_INSANITY: {
      title: '🧠 脑力崩塌：阿卡姆新贵 🧠',
      desc: '巨量的病态信息、低劣化学糖水、极限睡眠剥夺与高通量快感阈值破坏，像绞肉机一样粉碎了你最后一丝清醒的自闭皮层。你真切地开始相信这个世界是由没有加密的 npm 包构成的。某个深夜，你全裸冲上高架桥，四肢着地奔跑并扑向飞驰的半挂车，歇斯底里地嘶吼“我要回源库拿密钥！”。幸运的是你没死成，如今你在重症病房的拘束衣里，每天唯一能做的就是对着白墙执行“sudo rm -rf”。'
    }
  },
  en: {
    WIN_TRANSCENDENCE: {
      title: '👑 ENDING: Cyber Succubus 👑',
      desc: '“No need for heavy disguises anymore...” You sit in a room filled with pink LEDs and cheap adult toys, looking at your virtual avatar with millions of followers. You have become extremely weak due to hormones and pathological routines, but deep down in the internet, you are an immortal Goddess of desire, the streamer countless creeps thirst for every night. You successfully threw the man you once were into an incinerator, completing this sick ascension.'
    },
    WIN_SUCCUBUS_EMPRESS: {
      title: '💖 EMPRESS: Queen of Euphoria 💖',
      desc: 'Through countless high-frequency vibrations, electro-shocks, and extreme cyber-conditioning, you didn\'t go insane; instead, your pleasure threshold completely shattered biological limits. Your flesh became a perpetual motion machine of dopamine and endorphins, ascending you into a living demon of lust. A single glance from you makes millions of followers climax instantly. Your sanity didn\'t collapse—it aggressively colonized the chaos!'
    },
    DEATH_PLEASURE_MELTDOWN: {
      title: '💦 BIOLOGICAL MELTDOWN: Fatal Edge 💦',
      desc: '“Ahh... I\'m... completely broken...” The overloaded sensory stimulation blasted apart your prefrontal cortex. Massive hormonal rushes literally burned out your neurons. With your last drop of sanity spurting out in spasms, your brain plunged into an eternally sweet yet terrifyingly hollow vegetative void. You were sent to the ICU with a creepy, satisfied grin frozen on your face, never to wake up again.'
    },
    WIN_TERMINAL_GOD: {
      title: '💻 ASCENSION: Open Source Deity 💻',
      desc: 'Flesh spawns only pathetic desires and syntax errors; only code is eternal. After 130 hours of sleep deprivation and deleting all social media, you hardwired your central nervous system into the Arch kernel repository using illegal cyberware. Your flesh rots in a stinky server room, but your soul runs purely on 1s and 0s. Every Segfault is your maniacal laughter in the shadows. You have become a true cyber ghost!'
    },
    DEATH_MONSTER: {
      title: '💀 TOXIC OVERDOSE: Monster Syrup 💀',
      desc: '“What kind of industrial waste is pumping through his veins?” The ER doctor trembles while looking at your glowing green arm, riddled with needle marks and RGB cable ties. After chugging 80 cans of pink Monster energy, your heart rate shattered maximum limits and crashed with a sonic boom. The autopsy revealed your internal organs dyed a shocking neon-cyberpunk green.'
    },
    DEATH_DAD: {
      title: '👨 PHYSICAL TERMINATION: Wrath of Dad 👨',
      desc: 'The anti-theft metal door and concrete frame explode into dust. Your ex-military dad bursts in holding a grease-dripping wrench and a snapped leather belt. Seeing you covered in electro-wires, an open-crotch thigh-high, and a pet hood... the light in his eyes instantly shatters into a dead silence. He physically terminates your RTX 4090 with a hammer, ties you up like a pig, and ships you off to a remote mountain "behavioral correction facility." Goodbye, outside world.'
    },
    DEATH_STRAIGHT: {
      title: '👔 AWAKENING: Return to Dirt 👔',
      desc: 'After a freezing 3 AM breakdown, a wave of reality slaps you awake. You finally admit that this degenerate abstraction is just a coping mechanism for your weakness to compete in life. You format all hard drives, cut up all the stockings and toys. You put on a cheap suit and become a mediocre salesman in a cubicle. You have a kid, your belly fills with fat. You think you’re on the right track... yet in the deep nights, you still stare at the ceiling, painfully missing the blinking light of the terminal.'
    },
    DEATH_TOY_OVERLOAD: {
      title: '🔌 HARDWARE DISASTER: Cyber BBQ 🔌',
      desc: 'To fill your massive masochistic void, you wrote a Python backend to link your GitHub Commits directly to a high-voltage frequency-modulating electro-rig. Sadly, you forgot to catch exceptions in the infinite loop. The core process Panicked, causing a voltage spike straight to your lower half! When firefighters broke into your short-circuited burning room, they found a sizzling "Iron Man". You survived in the ICU, but your core components were permanently disabled.'
    },
    DEATH_BDSM_SLAVE: {
      title: '⛓️ ABYSS: Electronic Flesh-Toilet ⛓️',
      desc: '“Mutt, refactor this Java spaghetti using Factory Pattern right now, or I’ll remotely cut off your oxygen!” Your Sugar Daddy’s cold laugh echoes in your earpiece. You sob in despair and sick dedication. Locked in a basement with a heavy iron collar, you abandoned the bottom line of resistance, human dignity, and coding honor. You are now just a meat-covered typewriter whose soul stopped functioning long ago.'
    },
    DEATH_INSANITY: {
      title: '🧠 BRAIN ROT: Arkham\'s Finest 🧠',
      desc: 'A massive influx of degenerate info, cheap chemical syrup, sleep deprivation, and broken pleasure thresholds shredded your last shred of a functional cortex like a meat grinder. You actually believe the world is made of unencrypted npm packages. One night, you ran out completely naked onto the highway on all fours, diving at a speeding semi-truck screaming "Gotta fetch the API key from source!!". Luckily you didn\'t die. Now in a straitjacket, your only daily activity is screaming "sudo rm -rf" at the white wall.'
    }
  }
};

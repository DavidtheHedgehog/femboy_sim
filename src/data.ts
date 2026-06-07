import { GameEvent, Language } from './types';

const EVENTS_ZH: GameEvent[] = [
  {
    id: '1',
    title: '早晨的洗礼 (Morning Routine)',
    description: '你从 4 平米的赛博出租屋醒来。床头有一罐没喝完的粉色魔爪，还有一条昨晚弄脏的白丝。双腿内侧隐隐作痛。',
    image: '🧦☕',
    choices: [
      { text: '一饮而尽魔爪，并含住沾染干涸液体的白丝边', effect: { pleasure: 15, monster: 10, cuteness: 5, masculinity: -10, mental_stability: -5 }, message: '微苦的汗水与魔爪混合，禁忌的荷尔蒙让你的指尖微微发抖，精神产生了一丝病态的愉悦。' },
      { text: '穿上白丝对镜子嘟嘴，夹紧双腿拍自拍', effect: { pleasure: 5, cuteness: 10, masculinity: -5, disappointment: 5, mental_stability: -10 }, message: '感觉自己萌萌哒 :3 (发到推特后，私信收到了 5 张大卫雕像般的器官照)' },
      { text: '做 100 个波比跳', effect: { masculinity: 15, disappointment: -5, terminal: -5, mental_stability: 10, pleasure: -10 }, message: '你到底在干什么？肌肉在生长啊喂！强行戒断色孽，理智回归了一点点。' }
    ]
  },
  {
    id: '2',
    title: '深夜emo里的幻肢 (3 AM Phantom Touch)',
    description: '凌晨三点，屏幕上反射着你戴着猫耳耳机的脸。下半身传来莫名的空虚感，仿佛某个深渊在索求填充。',
    image: '🎧🌙',
    choices: [
      { text: '抓起粉色海豚跳蛋，调到最大档距塞入', effect: { pleasure: 25, cuteness: 15, masculinity: -15, monster: 5, mental_stability: -15 }, message: '强烈的嗡嗡声让你瞬间瘫软在电竞椅上，你咬着嘴唇，眼角溢出夹杂代码报错与生理快感的泪水。' },
      { text: '把主板的 RGB 供电线拔下来抵住敏感点', effect: { pleasure: 30, terminal: 10, masculinity: -20, disappointment: 10, mental_stability: -25 }, message: '12V的弱电刺激瞬间让你高潮，你像一条上岸的鱼一样在电脑桌前剧烈抽搐！' },
      { text: '朗读《Linux内核设计与实现》强行清心寡欲', effect: { terminal: 20, masculinity: 15, cuteness: -10, disappointment: -10, pleasure: -15, mental_stability: 15 }, message: '只有底层汇编才能洗刷灵魂的污垢！你的眼神重新变得像是没有世俗欲望的企鹅。' }
    ]
  },
  {
    id: '3',
    title: '赛博雌堕洗脑 (Cyber Degradation)',
    description: '榜一大哥给你发了一个 10TB 的压缩包，里面装满了高强度潜意识降智音频和催眠催淫动画。',
    image: '💽🌀',
    choices: [
      { text: '佩戴 VR 头显，灌入肠内润滑剂，进入连续 24 小时洗脑', effect: { pleasure: 40, cuteness: 25, masculinity: -30, disappointment: 25, monster: 10, mental_stability: -45 }, message: '彻底雌堕！白噪音和粉色幻觉撕碎了自我意识，你张着嘴流着口水，彻底沦为了赛博便器！' },
      { text: '提取音频特征，写一个反向洗脑的神经网络反弹给他', effect: { terminal: 20, masculinity: 10, cuteness: -10, mental_stability: -10, pleasure: -5 }, message: '大哥被你的反向神经网络洗脑，现在他成了漫展上最骚的伪娘。' },
      { text: '对着音频撸了一发，然后给他发个“就这？”', effect: { pleasure: 15, masculinity: 20, cuteness: -10, disappointment: -5, mental_stability: 5 }, message: '你把施虐音频当成了普通施法材料。大哥对你的精神抗性表示敬畏。' }
    ]
  },
  {
    id: '4',
    title: '不可言说的面交 (The Forbidden Exchange)',
    description: '你在咸鱼上买二手 RTX 4090，油腻买家提出面交，并且暗示可以用“身体的孔洞”来抵扣尾款。',
    image: '💳🍑',
    choices: [
      { text: '穿上战损版护士装赴约：“主人请随意使用贱狗的身体~”', effect: { pleasure: 35, cuteness: 20, masculinity: -30, disappointment: 30, mental_stability: -30 }, message: '在破旧的快捷酒店，你的防火墙被一杆长枪无情贯穿。伴随着剧痛的是让你头皮发麻的黏腻快感。' },
      { text: '反偷袭！面交时给他下春药，然后掏出 18cm 假阳具反撅他！', effect: { pleasure: 40, masculinity: -10, terminal: -5, disappointment: 20, mental_stability: -25 }, message: '身份反转！你以极度变态的姿态将他狠狠透到翻白眼！你变成了可怕的扶他恶魔！' },
      { text: '带上机械键盘赴约：“少废话，来打一把 CS，赢了送你。”', effect: { masculinity: 20, terminal: 15, cuteness: -10, pleasure: -10, mental_stability: 10 }, message: '你用爆头证明了谁才是真正的技术流。' }
    ]
  },
  {
    id: '5',
    title: '极致深渊：硬件刺激 (Hardware Sounding)',
    description: '你在推特看到了“用 Type-C 数据线进行体内通电获超载快感”的猎奇教程。你低头看了看那根剥线的雷电线...',
    image: '🔌💦',
    choices: [
      { text: '涂上散热硅脂，捏住阳具，顺着尿道缓缓通入深处...', effect: { pleasure: 45, cuteness: 10, masculinity: -35, disappointment: 30, monster: 10, mental_stability: -40 }, message: '啊啊啊！！撕裂痛楚很快转化为直冲天灵盖的禁忌快意，你感觉内壁正在被数据块狠狠写入！' },
      { text: '不仅插入，还外接 65W 充电头开启脉冲刺激！', effect: { pleasure: 60, terminal: 20, disappointment: 40, masculinity: -40, mental_stability: -55 }, message: '轰！强大奔涌的电流贯穿尿道！你翻着白眼在地上剧烈痉挛，尿道口喷出了带着电火花的前列腺液！' },
      { text: '清醒过来，狠狠抽自己耳光把线扔掉', effect: { masculinity: 20, disappointment: -10, mental_stability: 15, pleasure: -15 }, message: '你守住了男人的物理底线！虽然觉得可惜，但总算没因导电暴毙。' }
    ]
  },
  {
    id: '6',
    title: '机房的狂暴注入 (Server Rack BDSM)',
    description: '深夜，你潜入地下机房。金主学长从阴影中走出，手里把玩着防静电颈环和极粗的六类网线。',
    image: '🖧⛓️',
    choices: [
      { text: '主动撅起：“学长，请用 Cat6 网线把狂暴数据灌满我的后门吧！”', effect: { pleasure: 50, cuteness: 25, masculinity: -30, disappointment: 30, terminal: 10, mental_stability: -35 }, message: '绑在 42U 机柜上，他的滚烫巨物如同服务器探针般粗暴地完成物理层握手，你被透得连声浪叫，浑身汗水滴落。' },
      { text: '被动挣扎：“不要...不要在这里被强行 Override...”', effect: { pleasure: 40, cuteness: 35, masculinity: -25, disappointment: 25, mental_stability: -25 }, message: '学长极度兴奋，撕碎了你的白丝，强行破开了你的端口屏蔽。强烈的屈辱感化作了极其变态的快感。' },
      { text: '拔出螺丝刀以死相逼并拉下机房总闸', effect: { masculinity: 25, terminal: 10, cuteness: -15, mental_stability: 5, pleasure: -20 }, message: '千兆服务器宕机倒计时！你保全了贞操，但明天就会被全校通报开除。' }
    ]
  },
  {
    id: '7',
    title: '贞操锁死机 (Chastity Cage Segfault)',
    description: '你给自己戴上了基于树莓派的智能赛博贞操锁，并把尺寸调到了最小的“终极羞辱模式”，但解锁进程闪退死锁了。',
    image: '🔒😱',
    choices: [
      { text: '穿着贞操锁开直播：“哥哥们，钥匙丢了，只能摩擦外壳止痒了呜呜...”', effect: { pleasure: 35, cuteness: 30, masculinity: -20, disappointment: 25, mental_stability: -30 }, message: '你在线上数十万人的围观下，隔着冰冷的金属疯狂揉搓自己，憋屈与极限感官让你爽到失神。' },
      { text: '开启电击惩罚模式强行榨精！', effect: { pleasure: 45, monster: 10, cuteness: -5, masculinity: -30, disappointment: 20, mental_stability: -40 }, message: '在极窄的笼子里，高压电击逼迫你生生射了出来！剧痛与极乐的融合让你当场失禁昏死。' },
      { text: '去五金店买一把液压钳强拆', effect: { masculinity: 25, terminal: -10, disappointment: 5, mental_stability: -10, pleasure: -15 }, message: '差点切断命根子，但你总算把那劳什子铁疙瘩卸下来了。' }
    ]
  },
  {
    id: '8',
    title: '极致的公众耻辱 (Public Humiliation)',
    description: '大哥要求你戴着大尺寸遥控跳蛋，穿着半透明白丝女仆装去瑞幸咖啡点单，并且必须在店里四肢着地学母狗发情。',
    image: '🐶☕',
    choices: [
      { text: '完全服从！爬进店里浪叫：“主人快给我买咖啡呜呜，下面要烂掉了~”', effect: { pleasure: 50, cuteness: 35, disappointment: 45, masculinity: -40, mental_stability: -45 }, message: '社会性绝对死亡！几十台手机对着你拍。而在极限羞耻中，你直接在大庭广众之下喷射性高潮了！' },
      { text: '排队时被他遥控开到最大功率强行震动！', effect: { pleasure: 35, cuteness: 20, terminal: 10, masculinity: -15, mental_stability: -30 }, message: '高频震荡让你双膝一软摔倒在地，路人以为你癫痫发作，你却在地上爽得翻白眼吐舌头。' },
      { text: '拿起咖啡泼向手机直播，转身离开', effect: { terminal: 15, masculinity: 30, cuteness: -25, disappointment: 5, mental_stability: 15, pleasure: -10 }, message: '互联网没有真爱！你打碎了耻辱的锁链，找回了那么一丝做人的尊严。' }
    ]
  },
  {
    id: '9',
    title: '漫展洗手间的深渊 (Comic Con Restroom)',
    description: '你在漫展上因为憋尿进了男厕所。四个身材高大的兽圈大猛男堵住了门，看着你裙子底下的秘密露出了贪婪的目光。',
    image: '🚽🐺',
    choices: [
      { text: '放弃抵抗，跪在便池边：“各位大哥哥...请温柔一点...啊！”', effect: { pleasure: 60, cuteness: 40, masculinity: -40, disappointment: 35, monster: -10, mental_stability: -50 }, message: '四个小时。你不知道自己被灌入了多少东西，你像一个破布娃娃一样被扔在隔间，却带着满足的痴笑。' },
      { text: '假装尿急，掏出比他们都大的本钱震慑全场！', effect: { pleasure: 10, masculinity: 35, cuteness: -20, disappointment: 10, mental_stability: 5 }, message: '他们惊呆了，甚至有人向你表达了崇拜，你昂首挺胸走出了洗手间。' },
      { text: '瞬间爆发，用擒拿格斗术揍趴他们！', effect: { masculinity: 40, terminal: -5, cuteness: -30, mental_stability: 20, pleasure: -15 }, message: '战神形态！你穿着女装打爆了四个猛男的牙齿，保安把你当成了超级英雄。' }
    ]
  },
  {
    id: '10',
    title: '室友的注视 (Roommate\'s Gaze)',
    description: '室友兼好兄弟提前回寝室，撞见你正穿着开裆死水库，双腿大张着用黄瓜练习“深造”。空气瞬间凝固。',
    image: '🥒👀',
    choices: [
      { text: '魅惑一笑，含住黄瓜：“哥...你要不要亲自来试试？”', effect: { pleasure: 45, cuteness: 30, masculinity: -30, disappointment: 25, mental_stability: -25 }, message: '他红着眼扑了上来。这一夜，你们的兄弟情变质了，寝室床板在剧烈的撞击中摇摇欲坠！' },
      { text: '尖叫遮脸：“别看！我是在测试新材料的静摩擦系数！”', effect: { pleasure: 5, terminal: 15, cuteness: 10, masculinity: -10, mental_stability: -10 }, message: '虽然借口极其脑残，但他为了不破坏关系，选择了战术失明。你们陷入了长久的社死沉默。' },
      { text: '一跃而起，把黄瓜当成双截棍耍出一套军体拳', effect: { masculinity: 45, cuteness: -25, disappointment: -10, mental_stability: 15, pleasure: -20 }, message: '室友被你凌厉的杀气震慑，以为这是一种诡异的东方秘术。男人的面子保住了。' }
    ]
  },
  {
    id: '11',
    title: '连线强制排泄 (Forced Edge Multiplayer)',
    description: '你的海外金主把你拉进了一个地下黑客暗网的多人共享控制频道。你的所有敏感玩具权限被随机交给了里面的 100 个匿名用户。',
    image: '🌐🕹️',
    choices: [
      { text: '插满全身接口，任由 100 个人同时随机高频控制！', effect: { pleasure: 70, cuteness: 35, masculinity: -45, disappointment: 40, mental_stability: -60 }, message: '极度混乱的信号让你时而剧痛时而飞升！你的前列腺被赛博网络直接接管，你甚至开始喷射出白噪音！' },
      { text: '趁着空隙，尝试用 SQL 注入夺回控制权。', effect: { terminal: 40, pleasure: 20, masculinity: -5, cuteness: -10, mental_stability: -10 }, message: '你一边爽得掉眼泪，一边单手敲打着键盘，最终成功黑进了暗网中枢，把玩具全开最高档震翻了自己。' },
      { text: '用物理剪刀直接剪断所有控制器的排线', effect: { masculinity: 30, terminal: 20, pleasure: -30, cuteness: -20, disappointment: -15, mental_stability: 25 }, message: '彻底断电！肉体回归平凡，你逃出了这个病态的游戏。' }
    ]
  },
  {
    id: '12',
    title: '异象觉醒：触手编译 (Eldritch Segfault)',
    description: '你连续 100 个小时剥夺睡眠以达到终极快感。突然，屏幕里的编译报错码扭曲成了滑腻温热的肉粉色触手，从显示器里钻了出来。',
    image: '👁️🦑',
    choices: [
      { text: '狂喜！张开双腿迎接触手：“请深深地写进我的注册表吧！”', effect: { pleasure: 80, cuteness: 40, masculinity: -50, monster: 20, mental_stability: -60 }, message: '无数滑腻的触手直接物理格式化了你的肠道神经，你跨越了人类的生理极限，陷入了无法停止的宇宙级高潮！' },
      { text: '用终端输入 sudo dd if=/dev/zero of=/dev/sda 强行抹除幻觉！', effect: { terminal: 35, masculinity: 15, cuteness: -5, pleasure: 5, mental_stability: 10 }, message: '电脑黑屏了。触手化为青烟。你保住了肉身，但也失去了所有重要数据。' },
      { text: '狠狠拿一罐冰镇魔爪砸碎显示器！', effect: { masculinity: 30, monster: 10, cuteness: -20, disappointment: 15, pleasure: -10, mental_stability: 15 }, message: '碎片飞溅！物理攻击对邪神幻觉效果拔群。就是手被划破了，流了一地血。' }
    ]
  }
];

const EVENTS_EN: GameEvent[] = [
  {
    id: '1',
    title: 'Morning Routine',
    description: 'You wake up in your 4sqm cyber-apartment. A half-empty pink Monster is on the nightstand, along with a soiled pair of white thigh-highs. Your inner thighs vaguely hurt.',
    image: '🧦☕',
    choices: [
      { text: 'Chug the Monster and suck on the stained edge of the thigh-highs', effect: { pleasure: 15, monster: 10, cuteness: 5, masculinity: -10, mental_stability: -5 }, message: 'Bitter sweat mixes with the Monster energy. Taboo hormones make your fingertips tremble with sick joy.' },
      { text: 'Put them on, pout at the mirror, and squeeze your thighs for a selfie', effect: { pleasure: 5, cuteness: 10, masculinity: -5, disappointment: 5, mental_stability: -10 }, message: 'Feeling so kawaii :3 (Posted on Twitter, immediately received 5 unsolicited D\*\*k pics)' },
      { text: 'Do 100 burpees', effect: { masculinity: 15, disappointment: -5, terminal: -5, mental_stability: 10, pleasure: -10 }, message: 'What are you doing? Muscles are growing! You forcibly cut off the lust, regaining some sanity.' }
    ]
  },
  {
    id: '2',
    title: '3 AM Phantom Touch',
    description: 'At 3 AM, your screen reflects your face wearing cat-ear headphones. A hollow emptiness radiates from your lower half, as if a void is begging to be filled.',
    image: '🎧🌙',
    choices: [
      { text: 'Grab the pink dolphin vibrator, turn it to max and shove it in', effect: { pleasure: 25, cuteness: 15, masculinity: -15, monster: 5, mental_stability: -15 }, message: 'The intense buzzing instantly paralyzes you in your gaming chair. You bite your lip as tears of pleasure and compilation errors stream down.' },
      { text: 'Unplug the motherboard RGB header and press it against your sweet spot', effect: { pleasure: 30, terminal: 10, masculinity: -20, disappointment: 10, mental_stability: -25 }, message: 'The 12V current instantly gives you a climax! You spasm violently at your desk like a fish out of water!' },
      { text: 'Read "Linux Kernel Development" out loud to forcefully purify your heart', effect: { terminal: 20, masculinity: 15, cuteness: -10, disappointment: -10, pleasure: -15, mental_stability: 15 }, message: 'Only low-level Assembly can wash away the filth of the soul! Your eyes return to those of a penguin with no worldly desires.' }
    ]
  },
  {
    id: '3',
    title: 'Cyber Degradation',
    description: 'Your top donator just sent you a 10TB zip file filled with high-intensity subconscious brain-melting audio and hypno-sissy animations.',
    image: '💽🌀',
    choices: [
      { text: 'Put on the VR headset, pump in some lube, and enter a 24-hour hypno session', effect: { pleasure: 40, cuteness: 25, masculinity: -30, disappointment: 25, monster: 10, mental_stability: -45 }, message: 'Total sissification! The pink noise shreds your ego. You are drooling with your mouth open, completely degraded into a cyber-toilet!' },
      { text: 'Extract the audio features and write a reverse-hypno Neural Network back at him', effect: { terminal: 20, masculinity: 10, cuteness: -10, mental_stability: -10, pleasure: -5 }, message: 'The donator got brainwashed by your reverse-NN. He is now the sluttiest femboy at the local Anime Expo.' },
      { text: 'Jerk off to the audio once, then text him "That\'s it?"', effect: { pleasure: 15, masculinity: 20, cuteness: -10, disappointment: -5, mental_stability: 5 }, message: 'You used his torture audio as basic fap material. The donator is terrified of your mental resistance.' }
    ]
  },
  {
    id: '4',
    title: 'The Forbidden Exchange',
    description: 'You\'re buying a used RTX 4090 on Craigslist. The greasy seller offers to meet up and heavily implies you can cover the rest using "body cavities".',
    image: '💳🍑',
    choices: [
      { text: 'Show up in a ruined nurse outfit: "Master, please use your worthless dog~"', effect: { pleasure: 35, cuteness: 20, masculinity: -30, disappointment: 30, mental_stability: -30 }, message: 'In a cheap motel, your firewall is ruthlessly breached by a spear. Accompanied by severe pain is a mind-numbing, sticky pleasure.' },
      { text: 'Reverse ambush! Drug him, then whip out an 18cm strap-on and peg him!', effect: { pleasure: 40, masculinity: -10, terminal: -5, disappointment: 20, mental_stability: -25 }, message: 'Role reversal! You completely wreck him into ahegao with perverted dominance! You have become a terrifying Futa demon!' },
      { text: 'Bring your mechanical keyboard: "Quit yapping, 1v1 me in CS, winner takes all."', effect: { masculinity: 20, terminal: 15, cuteness: -10, pleasure: -10, mental_stability: 10 }, message: 'You prove who the real tech god is with pure headshots.' }
    ]
  },
  {
    id: '5',
    title: 'Hardware Sounding',
    description: 'You saw a cursed Twitter thread about "internal Type-C electrical stimulation for overload pleasure". You glance down at that exposed Thunderbolt cable...',
    image: '🔌💦',
    choices: [
      { text: 'Apply thermal paste, pinch your member, and slowly thread the cable deep inside...', effect: { pleasure: 45, cuteness: 10, masculinity: -35, disappointment: 30, monster: 10, mental_stability: -40 }, message: 'AHHH!! The tearing pain quickly transitions into a taboo ecstasy shooting straight to your brain, you feel your walls being violently overwritten by data packets!' },
      { text: 'Not only insert it, but plug it into a 65W charger for pulse stimulation!', effect: { pleasure: 60, terminal: 20, disappointment: 40, masculinity: -40, mental_stability: -55 }, message: 'BOOM! A surging current blasts through your urethra! Your eyes roll back as you violently convulse on the floor, leaking spark-laced fluids!' },
      { text: 'Snap out of it, slap yourself hard, and throw the cable away', effect: { masculinity: 20, disappointment: -10, mental_stability: 15, pleasure: -15 }, message: 'You maintained your physical human limits! You feel a bit of regret, but at least you didn\'t die from electrocution.' }
    ]
  },
  {
    id: '6',
    title: 'Server Rack BDSM',
    description: 'You sneak into the underground server room late at night. Your sugar-daddy upperclassman emerges from the shadows, playing with an anti-static collar and some thick Cat6 ethernet cables.',
    image: '🖧⛓️',
    choices: [
      { text: 'Present yourself proactively: "Senpai, please pump your furious data into my backdoor using that Cat6 cable!"', effect: { pleasure: 50, cuteness: 25, masculinity: -30, disappointment: 30, terminal: 10, mental_stability: -35 }, message: 'Tied to a 42U server rack, his boiling hardware brutally completes a physical layer handshake. You moan loudly as sweat drips down your body.' },
      { text: 'Struggle passively: "No... Please don\'t forcibly Override me here..."', effect: { pleasure: 40, cuteness: 35, masculinity: -25, disappointment: 25, mental_stability: -25 }, message: 'Senpai gets extremely turned on, tears up your thigh-highs, and forcefully breaches your port. The extreme humiliation turns into agonizingly perverse pleasure.' },
      { text: 'Pull a screwdriver to threaten suicide and yank the main breaker', effect: { masculinity: 25, terminal: 10, cuteness: -15, mental_stability: 5, pleasure: -20 }, message: 'Gigabit server offline countdown! You saved your chastity, but you will be expelled tomorrow.' }
    ]
  },
  {
    id: '7',
    title: 'Chastity Cage Segfault',
    description: 'You locked yourself in a Raspberry Pi-based smart cyber-chastity cage on the tightest "Ultimate Humiliation" setting, but the unlocking process crashed with a Segfault and deadlocked.',
    image: '🔒😱',
    choices: [
      { text: 'Stream with the cage on: "Onii-chans, I lost the key, I can only rub the cold metal case to stop the itching... Wahh..."', effect: { pleasure: 35, cuteness: 30, masculinity: -20, disappointment: 25, mental_stability: -30 }, message: 'Watched by hundreds of thousands online, you frantically rub yourself against the cold metal. The pent-up frustration and edge-play makes you lose your mind in pleasure.' },
      { text: 'Activate the electric shock punishment mode to force a ruined orgasm!', effect: { pleasure: 45, monster: 10, cuteness: -5, masculinity: -30, disappointment: 20, mental_stability: -40 }, message: 'In the extremely tight constraints, high-voltage shocks force you to blast off! The fusion of intense pain and euphoria makes you soil yourself and pass out.' },
      { text: 'Go to a hardware store, buy hydraulic bolt cutters, and forcefully break it', effect: { masculinity: 25, terminal: -10, disappointment: 5, mental_stability: -10, pleasure: -15 }, message: 'You almost chopped your balls off, but you finally got that cursed piece of metal off.' }
    ]
  },
  {
    id: '8',
    title: 'Public Humiliation',
    description: 'Your top donator demands you wear a massive remote-controlled vibrator and a translucent maid outfit to order at Starbucks, while crawling on all fours in heat like a female dog.',
    image: '🐶☕',
    choices: [
      { text: 'Total submission! Crawl in and moan loudly: "Master please buy me coffee wahh, my bottom is dripping~"', effect: { pleasure: 50, cuteness: 35, disappointment: 45, masculinity: -40, mental_stability: -45 }, message: 'Absolute social death! Dozens of phones are recording you. In the peak of humiliation, you literally squirt an orgasm right in the middle of the crowd!' },
      { text: 'He cranks it to maximum power while you are waiting in line!', effect: { pleasure: 35, cuteness: 20, terminal: 10, masculinity: -15, mental_stability: -30 }, message: 'The high-frequency vibration makes your knees buckle. People think you are having a seizure, while you are actually on the floor rolling your eyes back in pleasure.' },
      { text: 'Throw the coffee at his phone stream and walk away', effect: { terminal: 15, masculinity: 30, cuteness: -25, disappointment: 5, mental_stability: 15, pleasure: -10 }, message: 'There is no true love on the internet! You broke the chains of humiliation and salvaged a tiny shred of human dignity.' }
    ]
  },
  {
    id: '9',
    title: 'Comic Con Restroom Abyss',
    description: 'You ducked into the men\'s room at an anime convention because you really had to pee. Four towering, muscular Furry-fandom hunks block the door, staring hungrily at the secret under your skirt.',
    image: '🚽🐺',
    choices: [
      { text: 'Give up resisting, kneel by the urinal: "Big brothers... please be gentle... Ahh!"', effect: { pleasure: 60, cuteness: 40, masculinity: -40, disappointment: 35, monster: -10, mental_stability: -50 }, message: 'Four hours later. You don\'t even know how much fluid was pumped into you. You are tossed aside in the stall like a ragged doll, wearing a satisfied, idiotic grin.' },
      { text: 'Pretend you really need to pee, whip out a package bigger than theirs to establish dominance!', effect: { pleasure: 10, masculinity: 35, cuteness: -20, disappointment: 10, mental_stability: 5 }, message: 'They are stunned. One of them even expresses worship. You strut out of the bathroom with your chest puffed high.' },
      { text: 'Explode in rage and beat them down with CQC!', effect: { masculinity: 40, terminal: -5, cuteness: -30, mental_stability: 20, pleasure: -15 }, message: 'God of War form! You shattered the teeth of four hunks while wearing women\'s clothing. Security thinks you are a superhero.' }
    ]
  },
  {
    id: '10',
    title: 'Roommate\'s Gaze',
    description: 'Your roommate and best bro comes back to the dorm early, catching you wearing an open-crotch sukumizu, legs spread wide, practicing "deepening" with a cucumber. The air instantly freezes.',
    image: '🥒👀',
    choices: [
      { text: 'Smile seductively, put the cucumber in your mouth: "Bro... you wanna try it yourself?"', effect: { pleasure: 45, cuteness: 30, masculinity: -30, disappointment: 25, mental_stability: -25 }, message: 'His eyes turn red and he pounces on you. That night, your brotherhood soured. The dorm bedframe is shaking violently from the brutal impacts!' },
      { text: 'Scream and cover your face: "Don\'t look! I\'m testing the static friction coefficient of new materials!"', effect: { pleasure: 5, terminal: 15, cuteness: 10, masculinity: -10, mental_stability: -10 }, message: 'An incredibly braindead excuse, but to save the friendship, he chose tactical blindness. You are both plunged into an eternity of awkward silence.' },
      { text: 'Leap up and start using the cucumber like nunchucks in a military martial arts routine', effect: { masculinity: 45, cuteness: -25, disappointment: -10, mental_stability: 15, pleasure: -20 }, message: 'Your roommate is intimidated by your fierce killing intent, assuming it to be some bizarre Eastern mystic art. Manhood preserved.' }
    ]
  },
  {
    id: '11',
    title: 'Forced Edge Multiplayer',
    description: 'Your overseas sugar daddy dragged you into a dark-web underground hacker shared-control channel. The permissions of all your sensitive toys are randomly handed over to 100 anonymous users inside.',
    image: '🌐🕹️',
    choices: [
      { text: 'Plug in all your interfaces and let 100 people randomly hyper-vibrate you simultaneously!', effect: { pleasure: 70, cuteness: 35, masculinity: -45, disappointment: 40, mental_stability: -60 }, message: 'The chaotic signals make you alternate between severe pain and ascension! Your prostate is directly hijacked by the cyber-network, and you even start squirting white noise!' },
      { text: 'Find an opening and attempt to use SQL Injection to take back control.', effect: { terminal: 40, pleasure: 20, masculinity: -5, cuteness: -10, mental_stability: -10 }, message: 'Crying from pleasure while one-hand typing, you successfully hacked the dark-web hub and cranked all your toys to max, knocking yourself out.' },
      { text: 'Use physical scissors to directly snip all the controller ribbon cables', effect: { masculinity: 30, terminal: 20, pleasure: -30, cuteness: -20, disappointment: -15, mental_stability: 25 }, message: 'Thorough power cut! Flesh returns to mundane. You escaped this sick game.' }
    ]
  },
  {
    id: '12',
    title: 'Eldritch Segfault',
    description: 'You\'ve been sleep-deprived for 100 hours straight to achieve the ultimate edge. Suddenly, the compilation error codes on your screen twist into slippery, warm pink flesh tentacles and crawl out of your monitor.',
    image: '👁️🦑',
    choices: [
      { text: 'Ecstasy! Open your legs to welcome the tentacles: "Please write deeply into my registry!"', effect: { pleasure: 80, cuteness: 40, masculinity: -50, monster: 20, mental_stability: -60 }, message: 'Countless slippery tentacles physically format your intestinal nerves. You have surpassed human physiological limits and plunged into an unstoppable cosmic climax!' },
      { text: 'Type `sudo dd if=/dev/zero of=/dev/sda` in the terminal to forcefully wipe the hallucination!', effect: { terminal: 35, masculinity: 15, cuteness: -5, pleasure: 5, mental_stability: 10 }, message: 'The screen goes black. The tentacles turn to smoke. You saved your physical body, but lost all your important data.' },
      { text: 'Fiercely smash the monitor with an icy cold can of Monster!', effect: { masculinity: 30, monster: 10, cuteness: -20, disappointment: 15, pleasure: -10, mental_stability: 15 }, message: 'Shards fly everywhere! Physical attacks are highly effective against Eldritch hallucinations. Though your hands are cut up and bleeding.' }
    ]
  }
];

export const EVENTS: Record<Language, GameEvent[]> = {
  zh: EVENTS_ZH,
  en: EVENTS_EN
};

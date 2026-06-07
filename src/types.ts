export type Language = 'zh' | 'en';

export type Stats = {
  cuteness: number; // :3 浓度
  monster: number; // 魔爪摄入量
  terminal: number; // Arch 熟练度
  disappointment: number; // 爹的失望值
  masculinity: number; // 阳刚之气
  mental_stability: number; // 精神稳定性
  pleasure: number; // 禁忌快感阈值
};

export type Choice = {
  text: string;
  effect: Partial<Stats>;
  message: string;
};

export type GameEvent = {
  id: string;
  title: string;
  description: string;
  image?: string;
  choices: Choice[];
};

export type GameState = 'START' | 'WARNING' | 'PLAYING' | 'END';

export type EndReason = 
  | 'WIN_TRANSCENDENCE'
  | 'WIN_TERMINAL_GOD'
  | 'WIN_SUCCUBUS_EMPRESS'
  | 'DEATH_MONSTER'
  | 'DEATH_DAD'
  | 'DEATH_STRAIGHT'
  | 'DEATH_TOY_OVERLOAD'
  | 'DEATH_BDSM_SLAVE'
  | 'DEATH_INSANITY'
  | 'DEATH_PLEASURE_MELTDOWN';


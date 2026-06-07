import { useState, useEffect } from 'react';
import { Terminal, Frown, HeartPulse, Trophy, Skull, Code, Coffee, Zap, Brain, Flame, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Stats, GameState, EndReason, Language, Choice } from './types';
import { EVENTS } from './data';
import { UI, STAT_NAMES, ENDINGS } from './locales';

const INITIAL_STATS: Stats = {
  cuteness: 50,
  monster: 10,
  terminal: 20,
  disappointment: 20,
  masculinity: 50,
  mental_stability: 100,
  pleasure: 0,
};

export default function App() {
  const [lang, setLang] = useState<Language>('zh');
  const [gameState, setGameState] = useState<GameState>('START');
  const [stats, setStats] = useState<Stats>(INITIAL_STATS);
  const [eventsPassed, setEventsPassed] = useState(0);
  const [endReason, setEndReason] = useState<EndReason | null>(null);
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [logMessages, setLogMessages] = useState<string[]>([]);
  const [shake, setShake] = useState(false);

  useEffect(() => {
    if (gameState !== 'PLAYING') return;

    if (stats.mental_stability <= 0) {
      setEndReason('DEATH_INSANITY');
      setGameState('END');
    } else if (stats.pleasure >= 100 && stats.mental_stability >= 40) {
      setEndReason('WIN_SUCCUBUS_EMPRESS');
      setGameState('END');
    } else if (stats.pleasure >= 100) {
      setEndReason('DEATH_PLEASURE_MELTDOWN');
      setGameState('END');
    } else if (stats.cuteness >= 100 && stats.disappointment >= 100) {
      setEndReason('DEATH_BDSM_SLAVE');
      setGameState('END');
    } else if (stats.monster >= 100) {
      setEndReason('DEATH_MONSTER');
      setGameState('END');
    } else if (stats.disappointment >= 100) {
      setEndReason('DEATH_DAD');
      setGameState('END');
    } else if (stats.masculinity >= 100) {
      setEndReason('DEATH_STRAIGHT');
      setGameState('END');
    } else if (stats.cuteness >= 100 && stats.masculinity <= 0) {
      setEndReason('WIN_TRANSCENDENCE');
      setGameState('END');
    } else if (stats.terminal >= 100) {
      setEndReason('WIN_TERMINAL_GOD');
      setGameState('END');
    } else if (stats.cuteness >= 100) {
      setEndReason('DEATH_TOY_OVERLOAD');
      setGameState('END');
    }
  }, [stats, gameState]);

  const triggerShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 300);
  };

  const handleChoice = (choice: Choice) => {
    triggerShake();
    const newStats = { ...stats };
    let hasEffect = false;
    (Object.keys(choice.effect) as Array<keyof Stats>).forEach((key) => {
      if (choice.effect[key] !== undefined) {
        newStats[key] = Math.max(0, Math.min(100, newStats[key] + choice.effect[key]!));
        hasEffect = true;
      }
    });

    setStats(newStats);
    setLogMessages((prev) => [choice.message, ...prev.slice(0, 4)]);
    setEventsPassed((prev) => prev + 1);
    
    let nextIndex = Math.floor(Math.random() * EVENTS[lang].length);
    if (nextIndex === currentEventIndex && EVENTS[lang].length > 1) {
      nextIndex = (nextIndex + 1) % EVENTS[lang].length;
    }
    setCurrentEventIndex(nextIndex);
  };

  const LanguageToggle = () => (
    <button 
      onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
      className="absolute top-4 right-4 z-50 flex items-center gap-2 px-3 py-2 bg-gray-900 border border-gray-700 rounded-md text-gray-300 hover:text-white hover:border-gray-500 font-mono text-sm transition-all"
    >
      <Globe size={16} />
      {lang === 'zh' ? 'EN' : '中文'}
    </button>
  );

  const t = UI[lang];
  const tStat = STAT_NAMES[lang];

  const renderStart = () => (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <motion.h1 
        initial={{ scale: 0 }} 
        animate={{ scale: 1 }} 
        className="text-5xl md:text-7xl font-black mb-6 text-pink-500 drop-shadow-[0_0_15px_rgba(236,72,153,0.8)] tracking-tighter"
        style={{ fontFamily: "'Comic Sans MS', cursive, sans-serif" }}
      >
        {t.titleMain} <br/><span className="text-cyan-400">{t.titleSub}</span>
      </motion.h1>
      <button 
        onClick={() => setGameState('WARNING')}
        className="px-8 py-4 bg-pink-600 hover:bg-pink-500 text-white font-bold rounded-xl text-xl transition-all hover:scale-110 shadow-[0_0_20px_#db2777]"
      >
        {t.startBtn}
      </button>
      <p className="mt-8 text-pink-300/60 font-mono text-sm max-w-md">
        {t.warningText}
      </p>
    </div>
  );

  const renderWarning = () => (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="max-w-2xl bg-black/80 border-4 border-red-500 p-8 rounded-none shadow-[0_0_30px_#ef4444]">
        <h2 className="text-3xl font-bold text-red-500 mb-4 animate-pulse">{t.warnTitle}</h2>
        <div className="space-y-4 text-gray-300 font-mono text-sm md:text-base border-l-4 border-red-500 pl-4">
          <p className="text-yellow-400 font-bold">{t.warnDisclaimer}</p>
          <p>{t.warn1}</p>
          <p>{t.warn2}</p>
          <p>{t.warn3}</p>
          <p className="text-pink-400 font-bold mt-6 text-center">{t.warn4}</p>
        </div>
        <div className="mt-8 flex justify-center">
          <button 
            onClick={() => setGameState('PLAYING')}
            className="px-6 py-3 bg-red-600 hover:bg-red-500 text-white font-bold rounded-none font-mono transition-transform hover:-rotate-2"
          >
            {t.warnBtn}
          </button>
        </div>
      </div>
    </div>
  );

  const renderStats = () => (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 mb-6 font-mono text-xs md:text-sm">
      <div className="bg-pink-900/40 border border-pink-500 p-2 rounded flex flex-col justify-between">
        <div className="flex items-center gap-1 text-pink-400 mb-1 truncate"><HeartPulse size={14} className="shrink-0" /> {tStat.cuteness}</div>
        <div className="w-full bg-black/50 h-3 rounded-full overflow-hidden mt-1 shrink-0">
          <div className="bg-pink-500 h-full transition-all duration-300" style={{ width: `${stats.cuteness}%` }}></div>
        </div>
        <div className="text-right text-pink-300 mt-1">{stats.cuteness}%</div>
      </div>
      <div className="bg-rose-900/40 border border-rose-500 p-2 rounded flex flex-col justify-between">
        <div className="flex items-center gap-1 text-rose-400 mb-1 truncate"><Flame size={14} className="shrink-0" /> {tStat.pleasure}</div>
        <div className="w-full bg-black/50 h-3 rounded-full overflow-hidden mt-1 shrink-0">
          <div className={`h-full transition-all duration-300 ${stats.pleasure > 80 ? 'bg-rose-500 animate-pulse' : 'bg-rose-400'}`} style={{ width: `${stats.pleasure}%` }}></div>
        </div>
        <div className="text-right text-rose-300 mt-1">{stats.pleasure}%</div>
      </div>
      <div className="bg-green-900/40 border border-green-500 p-2 rounded flex flex-col justify-between">
        <div className="flex items-center gap-1 text-green-400 mb-1 truncate"><Coffee size={14} className="shrink-0" /> {tStat.monster}</div>
        <div className="w-full bg-black/50 h-3 rounded-full overflow-hidden mt-1 shrink-0">
          <div className={`h-full transition-all duration-300 ${stats.monster > 80 ? 'bg-red-500 animate-pulse' : 'bg-green-500'}`} style={{ width: `${stats.monster}%` }}></div>
        </div>
        <div className="text-right text-green-300 mt-1">{stats.monster}%</div>
      </div>
      <div className="bg-cyan-900/40 border border-cyan-500 p-2 rounded flex flex-col justify-between">
        <div className="flex items-center gap-1 text-cyan-400 mb-1 truncate"><Terminal size={14} className="shrink-0" /> {tStat.terminal}</div>
        <div className="w-full bg-black/50 h-3 rounded-full overflow-hidden mt-1 shrink-0">
          <div className="bg-cyan-500 h-full transition-all duration-300" style={{ width: `${stats.terminal}%` }}></div>
        </div>
        <div className="text-right text-cyan-300 mt-1">{stats.terminal}%</div>
      </div>
      <div className="bg-purple-900/40 border border-purple-500 p-2 rounded flex flex-col justify-between">
        <div className="flex items-center gap-1 text-purple-400 mb-1 truncate"><Frown size={14} className="shrink-0" /> {tStat.disappointment}</div>
        <div className="w-full bg-black/50 h-3 rounded-full overflow-hidden mt-1 shrink-0">
          <div className="bg-purple-500 h-full transition-all duration-300" style={{ width: `${stats.disappointment}%` }}></div>
        </div>
        <div className="text-right text-purple-300 mt-1">{stats.disappointment}%</div>
      </div>
      <div className="bg-yellow-900/40 border border-yellow-500 p-2 rounded flex flex-col justify-between">
        <div className="flex items-center gap-1 text-yellow-400 mb-1 truncate"><Zap size={14} className="shrink-0" /> {tStat.masculinity}</div>
        <div className="w-full bg-black/50 h-3 rounded-full overflow-hidden mt-1 shrink-0">
          <div className="bg-yellow-500 h-full transition-all duration-300" style={{ width: `${stats.masculinity}%` }}></div>
        </div>
        <div className="text-right text-yellow-300 mt-1">{Math.max(0, stats.masculinity)}%</div>
      </div>
      <div className="bg-blue-900/40 border border-blue-500 p-2 rounded flex flex-col justify-between col-span-2 md:col-span-1">
        <div className="flex items-center gap-1 text-blue-400 mb-1 truncate"><Brain size={14} className="shrink-0" /> {tStat.mental_stability}</div>
        <div className="w-full bg-black/50 h-3 rounded-full overflow-hidden mt-1 shrink-0">
          <div className={`h-full transition-all duration-300 ${stats.mental_stability < 30 ? 'bg-red-500 animate-pulse' : 'bg-blue-500'}`} style={{ width: `${stats.mental_stability}%` }}></div>
        </div>
        <div className="text-right text-blue-300 mt-1">{stats.mental_stability}%</div>
      </div>
    </div>
  );

  const renderPlaying = () => {
    const ev = EVENTS[lang][currentEventIndex];
    if (!ev) return null; // Safe check

    return (
      <div className="w-full max-w-5xl mx-auto p-4 flex flex-col min-h-screen pt-12">
        {renderStats()}
        
        <div className="flex-1 flex flex-col md:flex-row gap-6 mt-4">
           <motion.div 
            key={ev.id + lang}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`flex-1 bg-black/60 border-2 ${stats.mental_stability < 30 ? 'border-red-600 shadow-[0_0_20px_#dc262680]' : 'border-pink-400 shadow-[0_0_20px_#f472b640]'} p-6 rounded-xl backdrop-blur-sm relative overflow-hidden`}
          >
            {stats.mental_stability < 30 && (
              <div className="absolute inset-0 bg-red-900/20 mix-blend-overlay animate-pulse pointer-events-none"></div>
            )}
            <div className="text-6xl mb-4 opacity-80">{ev.image}</div>
            <h3 className={`text-2xl font-bold ${stats.mental_stability < 30 ? 'text-red-400' : 'text-pink-300'} mb-4 pb-2 border-b border-pink-500/30`}>
              {t.eventTitle} _{eventsPassed + 1}_: {ev.title}
            </h3>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed font-sans">{ev.description}</p>
            
            <div className="space-y-4">
              {ev.choices.map((choice, i) => (
                <button
                  key={i}
                  onClick={() => handleChoice(choice)}
                  className="w-full bg-pink-950/40 hover:bg-pink-800/80 border border-pink-500/50 hover:border-pink-300 text-left p-4 rounded-lg text-pink-100 transition-all font-mono hover:pl-8 focus:outline-none focus:ring-2 focus:ring-pink-500 relative overflow-hidden group"
                >
                  <span className={`absolute left-0 top-0 h-full w-2 ${stats.mental_stability < 30 ? 'bg-red-500' : 'bg-pink-500'} scale-y-0 group-hover:scale-y-100 transition-transform`}></span>
                  <span className="opacity-50 mr-2">&gt;</span> {choice.text}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="w-full md:w-80 flex flex-col">
            <div className={`bg-black/80 border ${stats.mental_stability < 30 ? 'border-red-800' : 'border-gray-700'} p-4 rounded-xl flex-1 flex flex-col shadow-inner`}>
              <div className="flex items-center gap-2 text-gray-400 mb-2 border-b border-gray-800 pb-2">
                <Terminal size={16} /> <span className="font-mono text-sm">/var/log/psycho_trace.log</span>
              </div>
              <div className="flex-1 overflow-y-auto space-y-3 font-mono text-sm flex flex-col-reverse max-h-[300px] md:max-h-[500px]">
                <AnimatePresence>
                  {logMessages.map((msg, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1 - i * 0.25, x: 0 }}
                      className={`p-3 rounded border-l-2 ${i === 0 ? 'bg-gray-900 border-green-500 text-green-400 shadow-sm' : 'border-gray-600 text-gray-500'}`}
                    >
                      {msg}
                    </motion.div>
                  ))}
                </AnimatePresence>
                {logMessages.length === 0 && (
                  <div className="text-gray-600 italic text-center mt-auto mb-auto">{t.logAwaiting}</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderEnd = () => {
    if (!endReason) return null;
    
    const endData = ENDINGS[lang][endReason];
    let bg = '';
    let Icon = Skull;

    switch (endReason) {
      case 'WIN_TRANSCENDENCE':
        bg = 'bg-pink-900/80 border-pink-400 shadow-[0_0_50px_#f472b6]';
        Icon = Trophy;
        break;
      case 'WIN_SUCCUBUS_EMPRESS':
        bg = 'bg-rose-950/90 border-rose-500 shadow-[0_0_80px_#f43f5e]';
        Icon = Flame;
        break;
      case 'DEATH_PLEASURE_MELTDOWN':
        bg = 'bg-fuchsia-950/90 border-fuchsia-500 shadow-[0_0_80px_#d946ef]';
        Icon = HeartPulse;
        break;
      case 'WIN_TERMINAL_GOD':
        bg = 'bg-cyan-950/90 border-cyan-500 shadow-[0_0_50px_#06b6d4]';
        Icon = Terminal;
        break;
      case 'DEATH_MONSTER':
        bg = 'bg-green-950/90 border-green-500 shadow-[0_0_50px_#22c55e]';
        Icon = Coffee;
        break;
      case 'DEATH_DAD':
        bg = 'bg-purple-950/90 border-purple-500 shadow-[0_0_50px_#a855f7]';
        Icon = Frown;
        break;
      case 'DEATH_STRAIGHT':
        bg = 'bg-yellow-950/90 border-yellow-500 shadow-[0_0_50px_#eab308]';
        Icon = Code;
        break;
      case 'DEATH_TOY_OVERLOAD':
        bg = 'bg-pink-950/90 border-red-500 shadow-[0_0_50px_#ef4444]';
        Icon = Zap;
        break;
      case 'DEATH_BDSM_SLAVE':
        bg = 'bg-gray-900 border-gray-600 shadow-[0_0_50px_#4a5568]';
        Icon = HeartPulse;
        break;
      case 'DEATH_INSANITY':
        bg = 'bg-blue-950/90 border-blue-500 shadow-[0_0_50px_#3b82f6]';
        Icon = Brain;
        break;
    }

    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 py-10">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className={`max-w-3xl text-center border-4 p-8 md:p-12 rounded-2xl backdrop-blur-md ${bg} relative`}
        >
          <div className="flex justify-center mb-6">
            <Icon size={80} className="text-white drop-shadow-[0_0_15px_white]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-wider drop-shadow-md">{endData.title}</h2>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-10 font-sans text-left border-l-4 border-white/30 pl-6 bg-black/30 p-4 rounded-r-lg">{endData.desc}</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-left font-mono text-sm bg-black/60 p-6 rounded-xl mb-8 border border-white/10 shadow-inner">
            <div className="text-pink-400 font-bold truncate">{tStat.cuteness}: {stats.cuteness}%</div>
            <div className="text-cyan-400 font-bold truncate">{tStat.terminal}: {stats.terminal}%</div>
            <div className="text-green-400 font-bold truncate">{tStat.monster}: {stats.monster}%</div>
            <div className="text-yellow-400 font-bold truncate">{tStat.masculinity}: {Math.max(0, stats.masculinity)}%</div>
            <div className="text-purple-400 font-bold truncate">{tStat.disappointment}: {stats.disappointment}%</div>
            <div className="text-blue-400 font-bold animate-pulse truncate">{tStat.mental_stability}: {stats.mental_stability}%</div>
            <div className="text-rose-400 font-bold truncate">{tStat.pleasure}: {stats.pleasure}%</div>
            <div className="col-span-2 md:col-span-3 lg:col-span-4 text-center text-gray-400 mt-4 border-t border-gray-700 pt-4 tracking-widest uppercase font-bold text-sm">
              {t.endSurvive.replace('{eventsPassed}', eventsPassed.toString())}
            </div>
          </div>

          <button 
            onClick={() => {
              setStats(INITIAL_STATS);
              setEventsPassed(0);
              setLogMessages([]);
              setGameState('PLAYING');
              setEndReason(null);
            }}
            className="px-8 py-3 bg-white text-black font-black rounded hover:bg-gray-200 hover:scale-105 transition-all duration-200 uppercase font-mono shadow-[0_0_20px_rgba(255,255,255,0.5)] border-b-4 border-gray-400 active:border-b-0 active:translate-y-1"
          >
            {t.endBtn}
          </button>
        </motion.div>
      </div>
    );
  };

  return (
    <motion.div 
      initial={false}
      animate={{ x: shake ? [-5, 5, -5, 5, 0] : 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-slate-950 text-slate-100 selection:bg-pink-500/50 relative overflow-x-hidden"
      style={{
        filter: "contrast(1.15) saturate(1.15) brightness(0.95)"
      }}
    >
      <div className="fixed inset-0 pointer-events-none bg-[url('https://transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-screen z-0"></div>
      
      <div className="fixed inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] z-50 mix-blend-overlay opacity-30"></div>

      <LanguageToggle />

      <div className="relative z-10 w-full h-full pb-10">
        {gameState === 'START' && renderStart()}
        {gameState === 'WARNING' && renderWarning()}
        {gameState === 'PLAYING' && renderPlaying()}
        {gameState === 'END' && renderEnd()}
      </div>
    </motion.div>
  );
}

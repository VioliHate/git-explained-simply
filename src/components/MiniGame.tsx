import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Terminal as TerminalIcon, HelpCircle, Trophy } from "lucide-react";
import { useTranslation } from "react-i18next";

interface MiniGameProps {
  mission: "basics" | "branching";
  onComplete: () => void;
}

interface GameStep {
  command: string;
  regex?: RegExp;
  hint: string;
  successOutput: string;
  story: string;
}

export const MiniGame: React.FC<MiniGameProps> = ({ mission, onComplete }) => {
  const { t } = useTranslation();
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<
    { type: "cmd" | "out" | "story"; text: string }[]
  >([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const basicSteps: GameStep[] = [
    {
      command: "git init",
      successOutput: "Initialized empty Git repository.",
      story: t("game.level.basic.step1.story"),
      hint: t("game.level.basic.step1.hint"),
    },
    {
      command: "git add pensieri-croccanti.txt",
      regex: /^git add (\.|pensieri-croccanti\.txt)$/,
      successOutput: "pensieri-croccanti added to stage.",
      story: t("game.level.basic.step2.story"),
      hint: t("game.level.basic.step2.hint"),
    },
    {
      command: "git commit -m aggiunta un po di croccantezza",
      regex: /^git commit -m ".+"$/,
      successOutput: "[main (root-commit)] crunchiness committed!",
      story: t("game.level.basic.step3.story"),
      hint: t("game.level.basic.step3.hint"),
    },
    {
      command: "git push",
      successOutput: "Toaster's thoughts are now in the cloud.",
      story: t("game.level.basic.step4.story"),
      hint: t("game.level.basic.step4.hint"),
    },
  ];

  const branchingSteps: GameStep[] = [
    {
      command: "git checkout -b feat/pizza",
      regex: /^git checkout -b [\w/-]+$/,
      successOutput: "Switched to a new branch 'feat/pizza'",
      story: t("game.level..branching.step1.story"),
      hint: t("game.level..branching.step1.hint"),
    },
    {
      command: 'git commit -m "Add pineapple"',
      regex: /^git commit -m ".+"$/,
      successOutput:
        "Commit successful! Pineapple added (Splinter might not like it).",
      story: t("game.level.branching.step2.story"),
      hint: t("game.level.branching.step2.hint"),
    },
    {
      command: "git checkout main",
      successOutput: "Switched to branch 'main'",
      story: t("game.level.branching.step3.story"),
      hint: t("game.level.branching.step3.hint"),
    },
    {
      command: "git merge feat/pizza",
      successOutput: "Updating main... feat/pizza merged successfully!",
      story: t("game.level.branching.step4.story"),
      hint: t("game.level.branching.step4.hint"),
    },
  ];

  const steps = mission === "basics" ? basicSteps : branchingSteps;

  useEffect(() => {
    if (history.length === 0) {
      setHistory([{ type: "story", text: steps[0].story }]);
    }
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedInput = input.trim();
    if (!trimmedInput) return;

    const newHistory = [
      ...history,
      { type: "cmd" as const, text: trimmedInput },
    ];
    const step = steps[currentStep];

    const isCorrect = step.regex
      ? step.regex.test(trimmedInput)
      : trimmedInput === step.command;

    if (isCorrect) {
      newHistory.push({ type: "out" as const, text: step.successOutput });
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
        newHistory.push({
          type: "story" as const,
          text: steps[currentStep + 1].story,
        });
      } else {
        setIsComplete(true);
        newHistory.push({
          type: "story" as const,
          text: t("game.level.complete"),
        });
      }
    } else {
      newHistory.push({
        type: "out" as const,
        text: `Error: Command not recognized. Hint: ${step.hint}`,
      });
    }

    setHistory(newHistory);
    setInput("");
  };

  return (
    <div className='flex flex-col h-[500px] bg-zinc-950 rounded-3xl border border-zinc-800 overflow-hidden shadow-2xl'>
      <header className='bg-zinc-900 p-4 border-b border-zinc-800 flex justify-between items-center'>
        <div className='flex items-center gap-2'>
          <TerminalIcon className='w-4 h-4 text-emerald-500' />
          <span className='text-xs font-mono font-bold text-zinc-400 uppercase tracking-widest'>
            Git Terminal Simulator v1.0
          </span>
        </div>
        <div className='flex gap-1.5'>
          <div className='w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50' />
          <div className='w-2.5 h-2.5 rounded-full bg-amber-500/20 border border-amber-500/50' />
          <div className='w-2.5 h-2.5 rounded-full bg-emerald-500/20 border border-emerald-500/50' />
        </div>
      </header>

      <div
        ref={scrollRef}
        className='flex-1 p-6 font-mono text-sm overflow-y-auto space-y-4 custom-scrollbar'
      >
        <AnimatePresence mode='popLayout'>
          {history.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className={`
                ${item.type === "cmd" ? "text-emerald-400" : ""}
                ${item.type === "out" ? "text-zinc-500" : ""}
                ${item.type === "story" ? "text-amber-400 font-bold bg-amber-400/5 p-3 rounded-lg border border-amber-400/10" : ""}
              `}
            >
              {item.type === "cmd" && (
                <span className='mr-2 text-zinc-600'>$</span>
              )}
              {item.text}
            </motion.div>
          ))}
        </AnimatePresence>
        {isComplete && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className='flex flex-col items-center justify-center py-8 space-y-4'
          >
            <div className='w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.4)]'>
              <Trophy className='text-white w-8 h-8' />
            </div>
            <p className='text-emerald-500 font-bold text-xl animate-pulse'>
              {mission === "basics"
                ? t("game.level.basic_complete")
                : t("game.level.branching_complete")}
            </p>
            <button
              onClick={onComplete}
              className='mt-4 bg-emerald-500 text-white px-8 py-3 rounded-full font-bold hover:bg-emerald-600 transition-all hover:scale-105 shadow-lg shadow-emerald-500/25 flex items-center gap-2'
            >
              {t("navigation.next")}
              <span className='text-xl'>→</span>
            </button>
          </motion.div>
        )}
      </div>

      <footer className='p-4 bg-zinc-900/50 border-t border-zinc-800'>
        <form onSubmit={handleSubmit} className='flex gap-4 items-center'>
          <span className='text-emerald-500 font-bold'>$</span>
          <input
            type='text'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
                e.stopPropagation();
              }
            }}
            disabled={isComplete}
            placeholder={isComplete ? "Mission Complete!" : "Type command..."}
            className='flex-1 bg-transparent border-none outline-none text-emerald-400 font-mono placeholder:text-zinc-700'
            autoFocus
          />
          <div className='flex items-center gap-4 text-[10px] uppercase font-bold tracking-widest text-zinc-500'>
            <div className='flex items-center gap-1'>
              <HelpCircle className='w-3 h-3' />
              <span>Hint: {steps[currentStep].hint}</span>
            </div>
          </div>
        </form>

        <div className='mt-4 flex gap-4 overflow-x-auto pb-2 no-scrollbar'>
          <span className='text-[10px] text-zinc-600 uppercase font-bold shrink-0'>
            Legenda:
          </span>
          {[
            "init",
            "add <file>",
            'commit -m "msg"',
            "push",
            "checkout -b <name>",
            "merge <name>",
          ].map((cmd) => (
            <span
              key={cmd}
              className='text-[10px] bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded font-mono shrink-0'
            >
              {cmd}
            </span>
          ))}
        </div>
      </footer>
    </div>
  );
};

import { motion } from "motion/react";
import { GitBranch, ArrowRight } from "lucide-react";
import { Slide } from "../types/Slide";
import { TFunction } from "i18next";

export const getSlides = (
  setCurrentSlide: (index: number) => void,
  t: TFunction,
): Slide[] => [
  {
    id: 0,
    title: t("header.title"),
    type: "intro",
    content: (
      <section className='text-center space-y-8'>
        <div className='relative inline-block'>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className='absolute -inset-4 bg-emerald-500/10 rounded-full blur-2xl'
          />
          <GitBranch className='w-24 h-24 text-emerald-600 mx-auto relative' />
        </div>
        <header className='space-y-4'>
          <h1 className='text-6xl font-extrabold tracking-tight text-zinc-900'>
            Git {t("i18n.for")}{" "}
            <span className='text-emerald-600 italic'>{t("i18n.humans")}</span>
          </h1>
          <p className='text-xl text-zinc-500 max-w-lg mx-auto'>
            {t("intro.subtitle")}
          </p>
        </header>
        <nav className='flex justify-center gap-4'>
          <button
            onClick={() => setCurrentSlide(1)}
            className='bg-zinc-900 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-zinc-800 transition-all hover:scale-105 active:scale-95'
          >
            {t("intro.start")} <ArrowRight className='w-5 h-5' />
          </button>
        </nav>
      </section>
    ),
  },
];

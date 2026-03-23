import React from "react";
import { motion } from "motion/react";
import { GitBranch, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

interface HeaderProps {
  currentSlide: number;
  totalSlides: number;
  onSlideChange: (slide: number) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentSlide,
  totalSlides,
  onSlideChange,
}) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const nextLang = i18n.language === "it" ? "en" : "it";
    i18n.changeLanguage(nextLang);
  };

  const handleSlideInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 1 && value <= totalSlides) {
      onSlideChange(value - 1);
    }
  };

  return (
    <header className='p-6 flex justify-between items-center border-b border-zinc-200 bg-white/80 backdrop-blur-md sticky top-0 z-50'>
      <div className='flex items-center gap-6'>
        <div className='flex items-center gap-2'>
          <GitBranch className='text-emerald-600 w-6 h-6' />
          <span className='font-bold tracking-tight text-zinc-900'>
            {t("header.title")}
          </span>
        </div>

        <button
          onClick={toggleLanguage}
          className='flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 hover:bg-zinc-200 transition-colors text-xs font-medium text-zinc-600'
        >
          <Globe className='w-3.5 h-3.5' />
          <span className='uppercase'>{i18n.language?.split("-")[0]}</span>
        </button>
      </div>

      <div className='flex items-center gap-4'>
        <div className='flex items-center gap-2'>
          <span className='text-[10px] uppercase font-bold text-zinc-400 tracking-widest'>
            {t("header.go")}:
          </span>
          <input
            type='number'
            min={1}
            max={totalSlides}
            value={currentSlide + 1}
            onChange={handleSlideInput}
            className='w-12 h-8 text-center text-sm font-mono font-bold bg-zinc-100 border-none rounded-lg focus:ring-2 focus:ring-emerald-500 transition-all'
          />
        </div>
        <div
          className='h-1.5 w-32 bg-zinc-100 rounded-full overflow-hidden'
          role='progressbar'
          aria-valuenow={((currentSlide + 1) / totalSlides) * 100}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <motion.div
            initial={false}
            animate={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
            className='h-full bg-emerald-500'
          />
        </div>
        <span className='text-xs font-mono text-zinc-400'>
          {currentSlide + 1} / {totalSlides}
        </span>
      </div>
    </header>
  );
};

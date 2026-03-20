import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

interface NavigationProps {
  currentSlide: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentSlide,
  totalSlides,
  onNext,
  onPrev,
}) => {
  const { t } = useTranslation();

  return (
    <>
      <nav
        className='p-8 flex justify-center gap-4'
        aria-label={t("navigation.next")}
      >
        <button
          onClick={onPrev}
          disabled={currentSlide === 0}
          aria-label={t("navigation.prev")}
          className={`p-4 rounded-full border border-zinc-200 transition-all ${
            currentSlide === 0
              ? "opacity-20 cursor-not-allowed"
              : "hover:bg-zinc-100 active:scale-90"
          }`}
        >
          <ChevronLeft className='w-6 h-6' />
        </button>
        <button
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1}
          aria-label={t("navigation.next")}
          className={`p-4 rounded-full border border-zinc-200 transition-all ${
            currentSlide === totalSlides - 1
              ? "opacity-20 cursor-not-allowed"
              : "hover:bg-zinc-100 active:scale-90"
          }`}
        >
          <ChevronRight className='w-6 h-6' />
        </button>
      </nav>

      <footer className='p-4 text-center text-zinc-400 text-[10px] uppercase tracking-widest'>
        {t("navigation.tip")}
      </footer>
    </>
  );
};

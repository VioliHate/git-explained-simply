import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Slide } from "../types/Slide";

interface MainProps {
  currentSlide: number;
  slides: Slide[];
}

export const Main: React.FC<MainProps> = ({ currentSlide, slides }) => {
  const slide = slides[currentSlide];

  return (
    <main className='flex-1 relative flex items-center justify-center p-4 md:p-12 max-w-6xl mx-auto w-full'>
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4, ease: "circOut" }}
          className='w-full'
        >
          <div className='space-y-8'>
            {slide.type !== "intro" && (
              <motion.h2
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className='text-zinc-400 font-mono text-sm uppercase tracking-[0.2em]'
              >
                {slide.title}
              </motion.h2>
            )}
            {slide.content}
          </div>
        </motion.div>
      </AnimatePresence>
    </main>
  );
};

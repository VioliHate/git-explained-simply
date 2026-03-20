import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Header } from "./components/Header";
import { getSlides } from "./data/slides";
import { Navigation } from "./components/Navigation";
import { Main } from "./components/Main";

export default function App() {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = getSlides(setCurrentSlide, t);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) setCurrentSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide]);

  return (
    <div className='min-h-screen flex flex-col overflow-hidden'>
      <Header currentSlide={currentSlide} totalSlides={slides.length} />
      <Main currentSlide={currentSlide} slides={slides} />
      <Navigation
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onNext={nextSlide}
        onPrev={prevSlide}
      />
    </div>
  );
}

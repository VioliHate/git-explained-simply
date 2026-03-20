import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Header } from "./components/Header";

export default function App() {
  return (
    <div className='min-h-screen flex flex-col overflow-hidden'>
      <Header currentSlide={0} totalSlides={10} />
    </div>
  );
}

"use client";

import React, { createContext, useState, useEffect, ReactNode } from "react";

export type Language = "uk" | "en" | "ru";

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("uk"); // default to Ukrainian

  // Load language from localStorage if available
  useEffect(() => {
    const savedLang = localStorage.getItem("app_lang") as Language;
    if (savedLang && ["uk", "en", "ru"].includes(savedLang)) {
      setLanguage(savedLang);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("app_lang", lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

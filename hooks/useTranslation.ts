"use client";

import { useContext, useMemo } from "react";
import { LanguageContext } from "@/context/LanguageContext";

import uk from "@/locales/uk.json";
import en from "@/locales/en.json";
import ru from "@/locales/ru.json";

const translations = { uk, en, ru };

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useTranslation must be used within a LanguageProvider");
  }

  const { language, setLanguage } = context;

  const t = useMemo(() => {
    return translations[language] || translations["uk"];
  }, [language]);

  return { t, language, setLanguage };
};

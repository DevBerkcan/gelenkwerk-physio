"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { translations, Lang } from "@/config/translations";

type LangData = (typeof translations)[Lang];

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: LangData;
}

const LanguageContext = createContext<LanguageContextType>(null!);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("de");

  useEffect(() => {
    const saved = localStorage.getItem("gelenkwerk-lang") as Lang | null;
    if (saved === "de" || saved === "en") setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("gelenkwerk-lang", l);
  };

  const t = translations[lang] as LangData;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);

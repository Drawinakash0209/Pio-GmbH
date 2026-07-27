"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { Lang, Translation, translations } from "@/lib/translations";

interface LanguageContextValue {
  lang: Lang;
  toggleLanguage: () => void;
  setLanguage: (lang: Lang) => void;
  t: Translation;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = "pio-gmbh-lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Every consumer renders different text per language, so — unlike the theme
  // class, which is pure CSS — a lazy initializer reading the DOM here would
  // make the first client render (used for hydration) diverge from the "en"
  // default the server actually sent whenever a visitor has "de" stored. Start
  // at the server's default and sync from the (already inline-script-set)
  // <html lang> in an effect, after hydration has settled.
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    setLangState(document.documentElement.lang === "de" ? "de" : "en");
  }, []);

  const applyLanguage = useCallback((next: Lang) => {
    setLangState(next);
    document.documentElement.lang = next;
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // localStorage may be unavailable (private browsing, etc.) — ignore.
    }
  }, []);

  const toggleLanguage = useCallback(() => {
    applyLanguage(lang === "de" ? "en" : "de");
  }, [lang, applyLanguage]);

  return (
    <LanguageContext.Provider
      value={{ lang, toggleLanguage, setLanguage: applyLanguage, t: translations[lang] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}

"use client";

import { createContext, useCallback, useContext, useState } from "react";
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
  // The inline script in layout.tsx sets <html lang> before hydration, so we
  // read it back lazily instead of needing an effect + setState on mount.
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof document === "undefined") return "en";
    return document.documentElement.lang === "de" ? "de" : "en";
  });

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

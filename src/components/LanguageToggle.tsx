"use client";

import { useLanguage } from "./LanguageProvider";

export default function LanguageToggle({
  scrolled,
  className = "",
}: {
  scrolled?: boolean;
  className?: string;
}) {
  const { lang, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      aria-label={lang === "de" ? "Switch to English" : "Auf Deutsch wechseln"}
      title={lang === "de" ? "Switch to English" : "Auf Deutsch wechseln"}
      className={`relative flex items-center justify-center w-8 h-8 rounded-full text-[10px] font-black tracking-[0.05em] transition-colors duration-200 cursor-pointer ${
        scrolled === false
          ? "text-white/70 hover:text-t-accent hover:bg-white/10"
          : "text-t-faint hover:text-t-ink hover:bg-t-bg-subtle"
      } ${className}`}
      suppressHydrationWarning
    >
      {lang === "de" ? "EN" : "DE"}
    </button>
  );
}

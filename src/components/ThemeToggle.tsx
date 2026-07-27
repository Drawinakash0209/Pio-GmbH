"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle({
  scrolled,
  className = "",
}: {
  scrolled?: boolean;
  className?: string;
}) {
  const { theme, toggleTheme } = useTheme();
  // The server always renders the light-mode icon (it has no access to the
  // visitor's localStorage theme). Gate the real icon behind a post-mount
  // flag so the first client render matches that server output exactly —
  // otherwise React sees a Sun/Moon subtree mismatch during hydration.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isDark = mounted && theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`relative flex items-center justify-center w-8 h-8 rounded-full overflow-hidden transition-colors duration-200 cursor-pointer ${
        scrolled === false
          ? "text-white/70 hover:text-t-accent hover:bg-white/10"
          : "text-t-faint hover:text-t-ink hover:bg-t-bg-subtle"
      } ${className}`}
      suppressHydrationWarning
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="moon"
            initial={{ y: -14, opacity: 0, rotate: -60 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 14, opacity: 0, rotate: 60 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Moon className="w-4 h-4" />
          </motion.span>
        ) : (
          <motion.span
            key="sun"
            initial={{ y: -14, opacity: 0, rotate: -60 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 14, opacity: 0, rotate: 60 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Sun className="w-4 h-4" />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}

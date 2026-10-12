"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "./ThemeContext";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        aria-label="Toggle dark mode"
        className={`flex items-center gap-2 p-2 border border-black dark:border-white font-mono text-xs uppercase transition-colors ${className}`}
      >
        <span className="w-4 h-4" />
        <span className="hidden sm:inline">Theme</span>
      </button>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className={`flex items-center gap-2 px-2.5 py-1.5 border border-black dark:border-white bg-white dark:bg-black text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black font-mono text-xs uppercase font-bold transition-colors focus:outline focus:outline-2 focus:outline-black dark:focus:outline-white ${className}`}
    >
      {isDark ? <Sun size={14} className="shrink-0" /> : <Moon size={14} className="shrink-0" />}
      <span>{isDark ? "Light Mode" : "Dark Mode"}</span>
    </button>
  );
}

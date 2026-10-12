"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface ProgressContextType {
  understoodChapters: string[];
  understoodQuestions: string[];
  toggleChapterUnderstood: (slug: string) => void;
  toggleQuestionUnderstood: (id: string) => void;
  isChapterUnderstood: (slug: string) => boolean;
  isQuestionUnderstood: (id: string) => boolean;
  totalChapters: number;
  totalQuestions: number;
  chapterProgressPercentage: number;
  questionProgressPercentage: number;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

const CHAPTERS_STORAGE_KEY = "ai_study_guide_understood_chapters";
const QUESTIONS_STORAGE_KEY = "ai_study_guide_understood_questions";

export function ProgressProvider({
  children,
  totalChapters = 5,
  totalQuestions = 15,
}: {
  children: React.ReactNode;
  totalChapters?: number;
  totalQuestions?: number;
}) {
  const [understoodChapters, setUnderstoodChapters] = useState<string[]>([]);
  const [understoodQuestions, setUnderstoodQuestions] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const storedCh = localStorage.getItem(CHAPTERS_STORAGE_KEY);
      if (storedCh) {
        setUnderstoodChapters(JSON.parse(storedCh));
      }
      const storedQ = localStorage.getItem(QUESTIONS_STORAGE_KEY);
      if (storedQ) {
        setUnderstoodQuestions(JSON.parse(storedQ));
      }
    } catch (e) {
      console.error("Failed to load progress from localStorage", e);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  const toggleChapterUnderstood = (slug: string) => {
    setUnderstoodChapters((prev) => {
      const updated = prev.includes(slug)
        ? prev.filter((s) => s !== slug)
        : [...prev, slug];
      try {
        localStorage.setItem(CHAPTERS_STORAGE_KEY, JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
      return updated;
    });
  };

  const toggleQuestionUnderstood = (id: string) => {
    setUnderstoodQuestions((prev) => {
      const updated = prev.includes(id)
        ? prev.filter((q) => q !== id)
        : [...prev, id];
      try {
        localStorage.setItem(QUESTIONS_STORAGE_KEY, JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
      return updated;
    });
  };

  const isChapterUnderstood = (slug: string) => understoodChapters.includes(slug);
  const isQuestionUnderstood = (id: string) => understoodQuestions.includes(id);

  const chapterProgressPercentage = Math.round(
    (understoodChapters.length / (totalChapters || 1)) * 100
  );
  const questionProgressPercentage = Math.round(
    (understoodQuestions.length / (totalQuestions || 1)) * 100
  );

  return (
    <ProgressContext.Provider
      value={{
        understoodChapters,
        understoodQuestions,
        toggleChapterUnderstood,
        toggleQuestionUnderstood,
        isChapterUnderstood,
        isQuestionUnderstood,
        totalChapters,
        totalQuestions,
        chapterProgressPercentage,
        questionProgressPercentage,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error("useProgress must be used within a ProgressProvider");
  }
  return context;
}

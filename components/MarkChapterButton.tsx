"use client";

import React from "react";
import { useProgress } from "./ProgressContext";
import { CheckSquare, Square } from "lucide-react";

export function MarkChapterButton({ slug, title }: { slug: string; title: string }) {
  const { isChapterUnderstood, toggleChapterUnderstood } = useProgress();
  const understood = isChapterUnderstood(slug);

  return (
    <div className="my-8 p-6 border border-black dark:border-white bg-white dark:bg-black flex flex-col sm:flex-row items-center justify-between gap-4">
      <div>
        <div className="font-mono text-xs uppercase font-bold text-gray-dark dark:text-gray-mid mb-1">
          Topic Comprehension Status
        </div>
        <p className="font-sans text-sm text-black dark:text-white">
          {understood
            ? `You have marked "${title}" as completely understood.`
            : `Completed reviewing "${title}"? Mark it to update your readiness score.`}
        </p>
      </div>
      <button
        onClick={() => toggleChapterUnderstood(slug)}
        className={`px-4 py-3 border border-black dark:border-white font-mono text-xs uppercase tracking-wider font-bold flex items-center gap-2 transition-colors focus:outline focus:outline-2 focus:outline-black dark:focus:outline-white ${
          understood
            ? "bg-black text-white hover:bg-white hover:text-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white"
            : "bg-white text-black hover:bg-black hover:text-white dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black"
        }`}
      >
        {understood ? <CheckSquare size={16} /> : <Square size={16} />}
        <span>{understood ? "Understood (Click to Unmark)" : "Mark as Understood"}</span>
      </button>
    </div>
  );
}

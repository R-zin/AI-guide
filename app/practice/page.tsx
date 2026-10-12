"use client";

import React, { useState, useMemo } from "react";
import { getAllPracticeQuestions } from "../../content/practice";
import { chapters } from "../../content/chapters";
import { PracticeQuestionCard } from "../../components/PracticeQuestionCard";
import { useProgress } from "../../components/ProgressContext";
import { Filter, CheckSquare } from "lucide-react";

export default function PracticePage() {
  const allQuestions = useMemo(() => getAllPracticeQuestions(), []);
  const { understoodQuestions } = useProgress();

  const [selectedChapter, setSelectedChapter] = useState<string>("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("all");
  const [filterUnderstood, setFilterUnderstood] = useState<string>("all");

  const filteredQuestions = useMemo(() => {
    return allQuestions.filter((q) => {
      if (selectedChapter !== "all" && q.chapterSlug !== selectedChapter) {
        return false;
      }
      if (selectedDifficulty !== "all" && q.difficulty !== selectedDifficulty) {
        return false;
      }
      if (filterUnderstood === "understood" && !understoodQuestions.includes(q.id)) {
        return false;
      }
      if (filterUnderstood === "pending" && understoodQuestions.includes(q.id)) {
        return false;
      }
      return true;
    });
  }, [allQuestions, selectedChapter, selectedDifficulty, filterUnderstood, understoodQuestions]);

  return (
    <div className="prose-readable space-y-8">
      {/* Header */}
      <header className="border-b border-black dark:border-white pb-6">
        <div className="inline-block px-2.5 py-0.5 bg-black dark:bg-white text-white dark:text-black font-mono text-xs uppercase tracking-wider mb-2">
          Interactive Assessment Bank
        </div>
        <h1 className="text-2xl md:text-4xl font-bold font-sans text-black dark:text-white tracking-tight mb-2">
          Practice Questions
        </h1>
        <p className="font-sans text-sm text-gray-dark dark:text-gray-light leading-relaxed">
          Full collection of practice exercises across all 5 course modules. Filter by topic, difficulty tier, or completion status to focus your revision.
        </p>

        {/* Stats bar */}
        <div className="mt-4 p-3 border border-black dark:border-white bg-gray-light/30 dark:bg-gray-black flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-black dark:text-white">
          <div>
            Total Questions: <span className="font-bold">{allQuestions.length}</span>
          </div>
          <div>
            Showing: <span className="font-bold">{filteredQuestions.length}</span>
          </div>
          <div className="flex items-center gap-1 font-bold">
            <CheckSquare size={14} /> Mastered: {understoodQuestions.length} / {allQuestions.length}
          </div>
        </div>
      </header>

      {/* Filter Controls */}
      <section className="p-4 border border-black dark:border-white bg-white dark:bg-black space-y-4">
        <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase text-black dark:text-white">
          <Filter size={14} />
          <span>Filter Questions</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
          {/* Chapter Filter */}
          <div>
            <label htmlFor="ch-filter" className="block text-gray-dark dark:text-gray-mid uppercase text-[10px] mb-1">
              Filter by Chapter
            </label>
            <select
              id="ch-filter"
              value={selectedChapter}
              onChange={(e) => setSelectedChapter(e.target.value)}
              className="w-full p-2 border border-black dark:border-white bg-white dark:bg-black text-black dark:text-white focus:outline focus:outline-2 focus:outline-black dark:focus:outline-white text-xs font-mono"
            >
              <option value="all">All Chapters (5)</option>
              {chapters.map((ch) => (
                <option key={ch.slug} value={ch.slug}>
                  Ch {ch.chapterNumber}: {ch.title}
                </option>
              ))}
            </select>
          </div>

          {/* Difficulty Filter */}
          <div>
            <label htmlFor="diff-filter" className="block text-gray-dark dark:text-gray-mid uppercase text-[10px] mb-1">
              Difficulty Tier
            </label>
            <select
              id="diff-filter"
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="w-full p-2 border border-black dark:border-white bg-white dark:bg-black text-black dark:text-white focus:outline focus:outline-2 focus:outline-black dark:focus:outline-white text-xs font-mono"
            >
              <option value="all">All Difficulties</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>

          {/* Completion Filter */}
          <div>
            <label htmlFor="status-filter" className="block text-gray-dark dark:text-gray-mid uppercase text-[10px] mb-1">
              Progress Status
            </label>
            <select
              id="status-filter"
              value={filterUnderstood}
              onChange={(e) => setFilterUnderstood(e.target.value)}
              className="w-full p-2 border border-black dark:border-white bg-white dark:bg-black text-black dark:text-white focus:outline focus:outline-2 focus:outline-black dark:focus:outline-white text-xs font-mono"
            >
              <option value="all">All Questions</option>
              <option value="pending">Needs Review (Unmarked)</option>
              <option value="understood">Understood Only</option>
            </select>
          </div>
        </div>
      </section>

      {/* Questions List */}
      <section className="space-y-6">
        {filteredQuestions.length === 0 ? (
          <div className="p-8 border border-dashed border-gray-mid text-center font-mono text-xs text-gray-dark dark:text-gray-mid">
            No practice questions matched your current filter selection.
          </div>
        ) : (
          filteredQuestions.map((q) => (
            <PracticeQuestionCard key={q.id} question={q} />
          ))
        )}
      </section>
    </div>
  );
}

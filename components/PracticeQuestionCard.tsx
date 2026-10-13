"use client";

import React, { useState } from "react";
import { PracticeQuestionItem } from "../content/types";
import { useProgress } from "./ProgressContext";
import { FormattedText } from "./MathRenderer";
import { ChevronDown, ChevronUp, CheckSquare, Square } from "lucide-react";

export function PracticeQuestionCard({ question }: { question: PracticeQuestionItem }) {
  const [showSolution, setShowSolution] = useState(false);
  const { isQuestionUnderstood, toggleQuestionUnderstood } = useProgress();
  const understood = isQuestionUnderstood(question.id);

  return (
    <div className="my-6 border border-black dark:border-white bg-white dark:bg-black">
      {/* Question Header */}
      <div className="p-4 border-b border-black dark:border-white flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <button
            onClick={() => toggleQuestionUnderstood(question.id)}
            aria-label={`Mark question ${question.id} as understood`}
            className="flex items-center gap-1.5 text-xs font-mono border border-black dark:border-white px-2 py-1 bg-white dark:bg-black text-black dark:text-white hover:bg-gray-light dark:hover:bg-gray-dark transition-colors focus:outline focus:outline-2 focus:outline-black dark:focus:outline-white"
          >
            {understood ? <CheckSquare size={14} /> : <Square size={14} />}
            <span className="font-bold">{understood ? "Understood ✓" : "Mark Understood"}</span>
          </button>
          <span className="font-mono text-xs uppercase px-2 py-0.5 border border-black dark:border-white bg-black dark:bg-white text-white dark:text-black font-bold">
            {question.difficulty}
          </span>
        </div>

        <span className="font-mono text-[11px] px-1.5 py-0.5 border border-black dark:border-white bg-gray-light dark:bg-gray-dark text-black dark:text-white">
          {question.sourceRef}
        </span>
      </div>

      {/* Question Body */}
      <div className="p-4">
        <h4 className="font-sans text-sm md:text-base font-semibold text-black dark:text-white leading-relaxed">
          <FormattedText text={question.question} />
        </h4>

        {question.hints && question.hints.length > 0 && (
          <div className="mt-3 p-2.5 border border-dashed border-gray-mid bg-gray-light/20 dark:bg-gray-black text-xs font-mono text-gray-dark dark:text-gray-light">
            <span className="font-bold uppercase text-black dark:text-white mr-1">Hints:</span>
            {question.hints.join(" · ")}
          </div>
        )}
      </div>

      {/* Solution Toggle */}
      <div className="border-t border-black dark:border-white p-3 bg-gray-light/20 dark:bg-gray-black flex items-center justify-between">
        <button
          onClick={() => setShowSolution(!showSolution)}
          aria-expanded={showSolution}
          aria-controls={`sol-${question.id}`}
          className="flex items-center gap-2 px-3 py-1.5 border border-black dark:border-white bg-white dark:bg-black text-black dark:text-white text-xs font-mono uppercase font-bold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors focus:outline focus:outline-2 focus:outline-black dark:focus:outline-white"
        >
          <span>{showSolution ? "Hide Solution" : "Show Solution"}</span>
          {showSolution ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>

        <span className="font-mono text-[11px] text-gray-dark dark:text-gray-mid">
          {question.chapterTitle}
        </span>
      </div>

      {/* Collapsible Solution Container */}
      {showSolution && (
        <div id={`sol-${question.id}`} className="border-t border-black dark:border-white p-4 bg-white dark:bg-black space-y-3">
          <div className="font-mono text-xs uppercase font-bold text-black dark:text-white">
            Solution Steps:
          </div>
          <div className="space-y-2 text-xs md:text-sm font-sans text-gray-dark dark:text-gray-light pl-2 border-l-2 border-black dark:border-l-white">
            {question.solutionSteps.map((step, sIdx) => (
              <div key={sIdx} className="leading-relaxed">
                <FormattedText text={step} />
              </div>
            ))}
          </div>

          <div className="mt-3 pt-3 border-t border-gray-light dark:border-gray-dark">
            <div className="font-mono text-xs uppercase font-bold text-black dark:text-white mb-1">
              Final Answer:
            </div>
            <div className="p-3 border border-black dark:border-white bg-gray-light/40 dark:bg-gray-black font-mono text-xs md:text-sm text-black dark:text-white">
              <FormattedText text={question.finalAnswer} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

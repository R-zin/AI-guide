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
    <div className="my-6 border border-black bg-white">
      {/* Question Header */}
      <div className="p-4 border-b border-black flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <button
            onClick={() => toggleQuestionUnderstood(question.id)}
            aria-label={`Mark question ${question.id} as understood`}
            className="flex items-center gap-1.5 text-xs font-mono border border-black px-2 py-1 bg-white hover:bg-gray-light transition-colors focus:outline focus:outline-2 focus:outline-black"
          >
            {understood ? <CheckSquare size={14} /> : <Square size={14} />}
            <span className="font-bold">{understood ? "Understood ✓" : "Mark Understood"}</span>
          </button>
          <span className="font-mono text-xs uppercase px-2 py-0.5 border border-black bg-black text-white font-bold">
            {question.difficulty}
          </span>
        </div>

        <span className="font-mono text-[11px] px-1.5 py-0.5 border border-black bg-gray-light text-black">
          {question.sourceRef}
        </span>
      </div>

      {/* Question Body */}
      <div className="p-4">
        <h4 className="font-sans text-sm md:text-base font-semibold text-black leading-relaxed">
          <FormattedText text={question.question} />
        </h4>

        {question.hints && question.hints.length > 0 && (
          <div className="mt-3 p-2.5 border border-dashed border-gray-mid bg-gray-light/20 text-xs font-mono text-gray-dark">
            <span className="font-bold uppercase text-black mr-1">Hints:</span>
            {question.hints.join(" · ")}
          </div>
        )}
      </div>

      {/* Solution Toggle */}
      <div className="border-t border-black p-3 bg-gray-light/20 flex items-center justify-between">
        <button
          onClick={() => setShowSolution(!showSolution)}
          aria-expanded={showSolution}
          aria-controls={`sol-${question.id}`}
          className="flex items-center gap-2 px-3 py-1.5 border border-black bg-white text-xs font-mono uppercase font-bold hover:bg-black hover:text-white transition-colors focus:outline focus:outline-2 focus:outline-black"
        >
          <span>{showSolution ? "Hide Solution" : "Show Solution"}</span>
          {showSolution ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>

        <span className="font-mono text-[11px] text-gray-dark">
          {question.chapterTitle}
        </span>
      </div>

      {/* Collapsible Solution Container */}
      {showSolution && (
        <div id={`sol-${question.id}`} className="border-t border-black p-4 bg-white space-y-3">
          <div className="font-mono text-xs uppercase font-bold text-black">
            Solution Steps:
          </div>
          <div className="space-y-2 text-xs md:text-sm font-sans text-gray-dark pl-2 border-l-2 border-black">
            {question.solutionSteps.map((step, sIdx) => (
              <p key={sIdx} className="leading-relaxed">
                <FormattedText text={step} />
              </p>
            ))}
          </div>

          <div className="mt-3 pt-3 border-t border-gray-light">
            <div className="font-mono text-xs uppercase font-bold text-black mb-1">
              Final Answer:
            </div>
            <div className="p-3 border border-black bg-gray-light/40 font-mono text-xs md:text-sm text-black">
              <FormattedText text={question.finalAnswer} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

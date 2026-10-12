"use client";

import React, { useState, useEffect } from "react";
import { mockExamQuestions } from "../../content/mock-exam";
import { FormattedText } from "../../components/MathRenderer";
import { Award, Clock, CheckCircle2, XCircle, RotateCcw, ChevronDown, ChevronUp } from "lucide-react";

export default function MockExamPage() {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [revealedSolutions, setRevealedSolutions] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);
  const [timerActive, setTimerActive] = useState(false);
  const [secondsRemaining, setSecondsRemaining] = useState(30 * 60);

  // Timer countdown
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timerActive && secondsRemaining > 0 && !submitted) {
      interval = setInterval(() => {
        setSecondsRemaining((prev) => prev - 1);
      }, 1000);
    } else if (secondsRemaining === 0 && !submitted) {
      setSubmitted(true);
    }
    return () => clearInterval(interval);
  }, [timerActive, secondsRemaining, submitted]);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  const selectOption = (questionId: string, optionIdx: number) => {
    if (submitted) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionIdx,
    }));
  };

  const toggleSolution = (questionId: string) => {
    setRevealedSolutions((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  };

  const revealAllSolutions = () => {
    const allRevealed: Record<string, boolean> = {};
    mockExamQuestions.forEach((q) => {
      allRevealed[q.id] = true;
    });
    setRevealedSolutions(allRevealed);
  };

  const resetExam = () => {
    setSelectedAnswers({});
    setRevealedSolutions({});
    setSubmitted(false);
    setSecondsRemaining(30 * 60);
    setTimerActive(false);
  };

  // Score computation
  const score = mockExamQuestions.reduce((acc, q) => {
    if (q.type === "multiple-choice" && q.correctOptionIndex !== undefined) {
      if (selectedAnswers[q.id] === q.correctOptionIndex) {
        return acc + q.marks;
      }
    }
    return acc;
  }, 0);

  const totalPossibleMCQMarks = mockExamQuestions.reduce((acc, q) => {
    return q.type === "multiple-choice" ? acc + q.marks : acc;
  }, 0);

  return (
    <div className="prose-readable space-y-8">
      {/* Header */}
      <header className="border-b border-black pb-6">
        <div className="inline-block px-2.5 py-0.5 bg-black text-white font-mono text-xs uppercase tracking-wider mb-2">
          Comprehensive Evaluation
        </div>
        <h1 className="text-2xl md:text-4xl font-bold font-sans text-black tracking-tight mb-2">
          Course Mock Examination
        </h1>
        <p className="font-sans text-sm text-gray-dark leading-relaxed">
          Simulated exam comprising 10 multi-part questions across all 5 syllabus modules. Test your knowledge under timed conditions or work at your own pace with answers concealed until revealed.
        </p>

        {/* Exam Controls Toolbar */}
        <div className="mt-6 p-4 border border-black bg-white flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setTimerActive(!timerActive)}
              className={`px-3 py-1.5 border border-black font-mono text-xs uppercase font-bold flex items-center gap-1.5 transition-colors ${
                timerActive ? "bg-black text-white" : "bg-white text-black hover:bg-gray-light"
              }`}
            >
              <Clock size={14} />
              <span>{timerActive ? "Pause Timer" : "Start 30m Timer"}</span>
            </button>
            <span className="font-mono text-xs font-bold text-black border border-black px-2 py-1 bg-gray-light">
              Time: {formatTime(secondsRemaining)}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {!submitted ? (
              <button
                onClick={() => {
                  setSubmitted(true);
                  revealAllSolutions();
                }}
                className="px-4 py-1.5 border border-black bg-black text-white font-mono text-xs uppercase font-bold hover:bg-white hover:text-black transition-colors"
              >
                Submit &amp; Grade
              </button>
            ) : (
              <button
                onClick={resetExam}
                className="px-3 py-1.5 border border-black bg-white text-black font-mono text-xs uppercase font-bold flex items-center gap-1 hover:bg-black hover:text-white transition-colors"
              >
                <RotateCcw size={14} />
                <span>Reset Exam</span>
              </button>
            )}
          </div>
        </div>

        {/* Score Summary if submitted */}
        {submitted && (
          <div className="mt-4 p-5 border border-black bg-gray-light/40 space-y-2">
            <div className="flex items-center justify-between font-mono text-sm">
              <span className="font-bold uppercase text-black">Multiple-Choice Score:</span>
              <span className="font-bold text-lg">
                {score} / {totalPossibleMCQMarks} Marks ({Math.round((score / totalPossibleMCQMarks) * 100)}%)
              </span>
            </div>
            <p className="text-xs font-sans text-gray-dark">
              Review your answers below. Worked calculation problems (marked 4–5 marks) have detailed step-by-step rubrics to self-assess your working.
            </p>
          </div>
        )}
      </header>

      {/* Exam Questions List */}
      <div className="space-y-8">
        {mockExamQuestions.map((q, idx) => {
          const isRevealed = revealedSolutions[q.id];
          const userChoice = selectedAnswers[q.id];
          const isCorrect = userChoice === q.correctOptionIndex;

          return (
            <div key={q.id} className="border border-black bg-white p-6">
              {/* Question Header */}
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3 pb-2 border-b border-black">
                <div className="flex items-center gap-2 font-mono text-xs">
                  <span className="px-2 py-0.5 bg-black text-white font-bold">
                    Q{idx + 1}
                  </span>
                  <span className="font-bold uppercase text-black">
                    {q.chapterTitle}
                  </span>
                </div>
                <div className="flex items-center gap-2 font-mono text-xs">
                  <span className="text-gray-dark">[{q.marks} Marks]</span>
                  <span className="px-1.5 py-0.5 border border-black bg-gray-light text-black text-[11px]">
                    {q.sourceRef}
                  </span>
                </div>
              </div>

              {/* Question Text */}
              <h3 className="font-sans text-sm md:text-base font-semibold text-black leading-relaxed mb-4">
                <FormattedText text={q.question} />
              </h3>

              {/* Multiple Choice Options */}
              {q.type === "multiple-choice" && q.options && (
                <div className="space-y-2 mb-4">
                  {q.options.map((opt, oIdx) => {
                    const isSelected = userChoice === oIdx;
                    const isTheCorrectOption = q.correctOptionIndex === oIdx;

                    let optionBorder = "border-black";
                    let optionBg = "bg-white";

                    if (submitted) {
                      if (isTheCorrectOption) {
                        optionBg = "bg-black text-white font-bold";
                      } else if (isSelected && !isTheCorrectOption) {
                        optionBg = "bg-gray-light text-black line-through";
                      }
                    } else if (isSelected) {
                      optionBg = "bg-black text-white";
                    }

                    return (
                      <button
                        key={oIdx}
                        disabled={submitted}
                        onClick={() => selectOption(q.id, oIdx)}
                        className={`w-full text-left p-3 border ${optionBorder} ${optionBg} text-xs md:text-sm font-sans flex items-start gap-2.5 transition-colors focus:outline focus:outline-2 focus:outline-black`}
                      >
                        <span className="font-mono font-bold shrink-0">
                          {String.fromCharCode(65 + oIdx)}.
                        </span>
                        <span>{opt}</span>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Reveal Solution Bar */}
              <div className="pt-3 border-t border-gray-light flex items-center justify-between">
                <button
                  onClick={() => toggleSolution(q.id)}
                  aria-expanded={isRevealed}
                  className="px-3 py-1.5 border border-black bg-white hover:bg-black hover:text-white transition-colors text-xs font-mono uppercase font-bold flex items-center gap-1.5 focus:outline focus:outline-2 focus:outline-black"
                >
                  <span>{isRevealed ? "Hide Solution" : "Reveal Answer & Working"}</span>
                  {isRevealed ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
                </button>

                {submitted && q.type === "multiple-choice" && (
                  <span className="font-mono text-xs font-bold flex items-center gap-1">
                    {isCorrect ? (
                      <span className="flex items-center gap-1 text-black">
                        <CheckCircle2 size={15} /> Correct (+{q.marks})
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-gray-dark">
                        <XCircle size={15} /> Incorrect (0/{q.marks})
                      </span>
                    )}
                  </span>
                )}
              </div>

              {/* Hidden Answer Container */}
              {isRevealed && (
                <div className="mt-4 p-4 border border-black bg-gray-light/30 space-y-2">
                  <div className="font-mono text-xs uppercase font-bold text-black">
                    Official Solution &amp; Working:
                  </div>
                  <div className="font-sans text-xs md:text-sm text-black leading-relaxed whitespace-pre-line pl-2 border-l-2 border-black">
                    <FormattedText text={q.solutionExplanation} />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

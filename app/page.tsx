"use client";

import React from "react";
import Link from "next/link";
import { chapters } from "../content/chapters";
import { useProgress } from "../components/ProgressContext";
import { CheckSquare, Square, ArrowRight, BookOpen, Layers, Award, CheckCircle2 } from "lucide-react";

export default function HomePage() {
  const {
    understoodChapters,
    understoodQuestions,
    isChapterUnderstood,
    chapterProgressPercentage,
    questionProgressPercentage,
  } = useProgress();

  return (
    <div className="space-y-12">
      {/* Hero Header */}
      <section className="border-b border-black pb-8">
        <div className="inline-block px-2.5 py-1 bg-black text-white font-mono text-xs uppercase tracking-wider mb-4">
          Master Course Study Guide
        </div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-black font-sans mb-4">
          Artificial Intelligence
        </h1>
        <p className="text-lg md:text-xl font-mono text-gray-dark max-w-3xl mb-6">
          Knowledge Representation, Symbolic Logic &amp; Fuzzy Inference Systems
        </p>
        <p className="font-sans text-sm md:text-base text-gray-dark max-w-3xl leading-relaxed">
          A rigorous, autonomous study guide strictly derived from official course slides and lecture notes in <code className="font-mono bg-gray-light px-1 border border-black">/materials</code>. Features complete derivations, black-and-white vector diagrams, solved step-by-step examples, interactive self-tests, and KaTeX mathematical proofs.
        </p>

        {/* Source provenance banner */}
        <div className="mt-6 p-4 border border-black bg-gray-light/30 grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
          <div>
            <span className="font-bold block uppercase text-black">Source Files</span>
            <span className="text-gray-dark">5 Documents (1 PDF + 4 PPTX)</span>
          </div>
          <div>
            <span className="font-bold block uppercase text-black">Total Corpus</span>
            <span className="text-gray-dark">134 Slides &amp; Pages Examined</span>
          </div>
          <div>
            <span className="font-bold block uppercase text-black">Citation Format</span>
            <span className="text-gray-dark">[Slide N] and [PDF p.N]</span>
          </div>
        </div>
      </section>

      {/* Progress Dashboard */}
      <section className="border border-black p-6 bg-white">
        <div className="flex flex-wrap items-baseline justify-between gap-4 mb-4 pb-2 border-b border-black">
          <div>
            <h2 className="font-mono text-sm uppercase tracking-wider font-bold text-black">
              Overall Study Readiness
            </h2>
            <p className="text-xs text-gray-dark font-sans">
              Comprehension tracking persisted locally in your browser
            </p>
          </div>
          <div className="font-mono text-2xl font-bold text-black">
            {chapterProgressPercentage}%
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="flex justify-between text-xs font-mono mb-1.5">
              <span>Chapter Mastery</span>
              <span className="font-bold">{understoodChapters.length} of {chapters.length} Completed</span>
            </div>
            <div className="w-full bg-gray-light h-3 border border-black">
              <div
                className="bg-black h-full transition-all duration-300"
                style={{ width: `${chapterProgressPercentage}%` }}
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-mono mb-1.5">
              <span>Practice Questions Solved</span>
              <span className="font-bold">{understoodQuestions.length} of 15 Mastered</span>
            </div>
            <div className="w-full bg-gray-light h-3 border border-black">
              <div
                className="bg-black h-full transition-all duration-300"
                style={{ width: `${questionProgressPercentage}%` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Chapter Grid (12-column layout) */}
      <section>
        <div className="flex items-center justify-between pb-3 border-b border-black mb-6">
          <h2 className="font-mono text-base uppercase font-bold tracking-wider text-black">
            Course Curriculum &amp; Chapters
          </h2>
          <span className="font-mono text-xs text-gray-dark">5 Modules</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {chapters.map((ch) => {
            const isCompleted = isChapterUnderstood(ch.slug);
            return (
              <div
                key={ch.slug}
                className="md:col-span-6 lg:col-span-6 border border-black bg-white p-6 flex flex-col justify-between hover:border-black transition-all group"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <span className="font-mono text-xs font-bold uppercase px-2 py-0.5 bg-black text-white">
                      Chapter {ch.chapterNumber}
                    </span>
                    <span className="font-mono text-[11px] px-1.5 py-0.5 bg-gray-light border border-black text-black">
                      {ch.sourceRange}
                    </span>
                  </div>

                  <Link href={`/chapters/${ch.slug}`} className="block group-hover:underline">
                    <h3 className="font-sans text-lg font-bold text-black mb-2">
                      {ch.title}
                    </h3>
                  </Link>

                  <p className="font-sans text-xs text-gray-dark leading-relaxed mb-4">
                    {ch.shortDescription}
                  </p>

                  <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-gray-black border-t border-gray-light pt-3 mb-4">
                    <div>• {ch.sections.length} Core Sections</div>
                    <div>• {ch.solvedExamples.length} Worked Examples</div>
                    <div>• {ch.practiceQuestions.length} Practice Questions</div>
                    <div>• {ch.learningObjectives.length} Objectives</div>
                  </div>
                </div>

                <div className="border-t border-black pt-4 flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-1.5 text-xs font-mono">
                    {isCompleted ? (
                      <span className="flex items-center gap-1 text-black font-bold">
                        <CheckSquare size={14} /> Completed
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-gray-dark">
                        <Square size={14} /> In Progress
                      </span>
                    )}
                  </div>

                  <Link
                    href={`/chapters/${ch.slug}`}
                    className="flex items-center gap-1 font-mono text-xs uppercase font-bold hover:underline"
                  >
                    <span>Study Chapter</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Quick Tools Navigation */}
      <section className="border-t border-black pt-8">
        <h2 className="font-mono text-sm uppercase font-bold tracking-wider text-black mb-4">
          Integrated Revision Tools
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            href="/practice"
            className="p-4 border border-black hover:bg-black hover:text-white transition-colors group"
          >
            <CheckSquare size={20} className="mb-2" />
            <div className="font-mono text-sm font-bold uppercase mb-1">Practice Bank</div>
            <div className="text-xs text-gray-dark group-hover:text-gray-light">
              15 questions filterable by topic and difficulty with stepped solutions.
            </div>
          </Link>

          <Link
            href="/formulas"
            className="p-4 border border-black hover:bg-black hover:text-white transition-colors group"
          >
            <Layers size={20} className="mb-2" />
            <div className="font-mono text-sm font-bold uppercase mb-1">Formula Sheet</div>
            <div className="text-xs text-gray-dark group-hover:text-gray-light">
              KaTeX rendered mathematical formulations with parameter definitions.
            </div>
          </Link>

          <Link
            href="/mock-exam"
            className="p-4 border border-black hover:bg-black hover:text-white transition-colors group"
          >
            <Award size={20} className="mb-2" />
            <div className="font-mono text-sm font-bold uppercase mb-1">Mock Exam</div>
            <div className="text-xs text-gray-dark group-hover:text-gray-light">
              Timed mixed examination covering all 5 course modules.
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}

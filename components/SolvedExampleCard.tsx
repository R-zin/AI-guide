import React from "react";
import { SolvedExampleItem } from "../content/types";
import { FormattedText } from "./MathRenderer";

export function SolvedExampleCard({ example }: { example: SolvedExampleItem }) {
  return (
    <div className="my-8 border border-black dark:border-white bg-white dark:bg-black">
      {/* Header */}
      <div className="border-b border-black dark:border-white p-4 bg-white dark:bg-black flex flex-wrap items-center justify-between gap-2">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-wider text-gray-dark dark:text-gray-mid mb-1">
            Worked Example
          </div>
          <h3 className="font-sans text-base md:text-lg font-bold text-black dark:text-white">
            {example.title}
          </h3>
        </div>
        <div className="flex items-center gap-2 font-mono text-xs">
          <span className="px-2 py-0.5 border border-black dark:border-white bg-black dark:bg-white text-white dark:text-black uppercase text-[10px] font-bold">
            {example.difficulty}
          </span>
          <span className="px-1.5 py-0.5 border border-black dark:border-white bg-gray-light dark:bg-gray-dark text-black dark:text-white text-[11px]">
            {example.sourceRef}
          </span>
        </div>
      </div>

      {/* Problem Statement */}
      <div className="p-4 bg-gray-light/20 dark:bg-gray-black border-b border-black dark:border-white">
        <div className="font-mono text-xs uppercase font-bold text-gray-dark dark:text-gray-mid mb-1">
          Problem Statement
        </div>
        <div className="font-sans text-sm text-black dark:text-white leading-relaxed">
          <FormattedText text={example.problemStatement} />
        </div>
      </div>

      {/* Stepped Working */}
      <div className="p-4 space-y-4">
        <div className="font-mono text-xs uppercase font-bold text-black dark:text-white mb-2">
          Step-by-Step Derivation &amp; Working:
        </div>
        <ol className="space-y-3">
          {example.steps.map((step) => (
            <li
              key={step.stepNumber}
              className="p-3 border border-gray-light dark:border-gray-dark bg-white dark:bg-black flex flex-col gap-2"
            >
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-xs font-bold px-1.5 py-0.5 bg-black dark:bg-white text-white dark:text-black shrink-0">
                  Step {step.stepNumber}
                </span>
                <span className="font-mono text-xs font-bold text-black dark:text-white">
                  {step.title}
                </span>
              </div>
              <div className="font-sans text-xs md:text-sm text-gray-dark dark:text-gray-light leading-relaxed pl-1">
                <FormattedText text={step.explanation} />
              </div>
              {step.formulaOrCode && (
                <div className="p-2.5 bg-gray-light/40 dark:bg-gray-black border border-black dark:border-white font-mono text-xs overflow-x-auto text-black dark:text-white">
                  <FormattedText text={step.formulaOrCode} />
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>

      {/* Final Answer */}
      <div className="p-4 border-t border-black dark:border-white bg-white dark:bg-black">
        <div className="font-mono text-xs uppercase font-bold text-black dark:text-white mb-1">
          Final Verified Conclusion / Result:
        </div>
        <div className="p-3 border border-black dark:border-white bg-black dark:bg-white text-white dark:text-black font-mono text-xs md:text-sm">
          <FormattedText text={example.finalAnswer} />
        </div>
        {example.verificationNotes && (
          <p className="mt-2 text-[11px] font-mono text-gray-dark dark:text-gray-mid">
            ✓ Verification: {example.verificationNotes}
          </p>
        )}
      </div>
    </div>
  );
}

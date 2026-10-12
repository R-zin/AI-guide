import React from "react";
import { KeyDefinitionItem } from "../content/types";
import { FormattedText } from "./MathRenderer";

export function DefinitionBox({ definitions }: { definitions: KeyDefinitionItem[] }) {
  if (!definitions || definitions.length === 0) return null;

  return (
    <div className="my-8 border border-black dark:border-white bg-white dark:bg-black">
      <div className="bg-black text-white dark:bg-white dark:text-black px-4 py-2 font-mono text-xs uppercase tracking-wider font-bold flex items-center justify-between">
        <span>Key Definitions &amp; Core Formalisms</span>
        <span className="text-[10px] text-gray-light dark:text-gray-dark">Terminology</span>
      </div>
      <div className="p-4 divide-y divide-gray-light dark:divide-gray-dark">
        {definitions.map((def, idx) => (
          <div key={idx} className="py-3 first:pt-1 last:pb-1">
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
              <span className="font-mono text-sm font-bold text-black dark:text-white">{def.term}</span>
              <span className="font-mono text-[11px] px-1.5 py-0.5 bg-gray-light dark:bg-gray-dark border border-black dark:border-white text-black dark:text-white">
                {def.sourceRef}
              </span>
            </div>
            <p className="font-sans text-sm text-gray-dark dark:text-gray-light leading-relaxed">
              <FormattedText text={def.definition} />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

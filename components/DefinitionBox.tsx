import React from "react";
import { KeyDefinitionItem } from "../content/types";
import { FormattedText } from "./MathRenderer";

export function DefinitionBox({ definitions }: { definitions: KeyDefinitionItem[] }) {
  if (!definitions || definitions.length === 0) return null;

  return (
    <div className="my-8 border border-black bg-white">
      <div className="bg-black text-white px-4 py-2 font-mono text-xs uppercase tracking-wider font-bold flex items-center justify-between">
        <span>Key Definitions &amp; Core Formalisms</span>
        <span className="text-[10px] text-gray-light">Terminology</span>
      </div>
      <div className="p-4 divide-y divide-gray-light">
        {definitions.map((def, idx) => (
          <div key={idx} className="py-3 first:pt-1 last:pb-1">
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
              <span className="font-mono text-sm font-bold text-black">{def.term}</span>
              <span className="font-mono text-[11px] px-1.5 py-0.5 bg-gray-light border border-black text-black">
                {def.sourceRef}
              </span>
            </div>
            <p className="font-sans text-sm text-gray-dark leading-relaxed">
              <FormattedText text={def.definition} />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

import React from "react";
import { FormattedText } from "./MathRenderer";

interface NoteBoxProps {
  title: string;
  content: string;
  isDiscrepancy?: boolean;
  isSupplementary?: boolean;
}

export function NoteBox({
  title,
  content,
  isDiscrepancy = false,
  isSupplementary = false,
}: NoteBoxProps) {
  const badgeLabel = isDiscrepancy
    ? "NOTE: SOURCE DISCREPANCY"
    : isSupplementary
    ? "SUPPLEMENTARY CONTEXT"
    : "NOTE";

  return (
    <aside
      aria-label={badgeLabel}
      className="my-5 border-l-4 border-l-black border border-black bg-gray-light/30 p-4"
    >
      <div className="flex items-center gap-2 mb-1.5">
        <span className="font-mono text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 bg-black text-white">
          {badgeLabel}
        </span>
        <h4 className="font-mono text-xs font-bold text-black uppercase">{title}</h4>
      </div>
      <div className="font-sans text-xs md:text-sm text-gray-black leading-relaxed">
        <FormattedText text={content} />
      </div>
    </aside>
  );
}

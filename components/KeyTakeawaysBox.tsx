import React from "react";
import { Check } from "lucide-react";
import { FormattedText } from "./MathRenderer";

export function KeyTakeawaysBox({ takeaways }: { takeaways: string[] }) {
  if (!takeaways || takeaways.length === 0) return null;

  return (
    <div className="my-10 border border-black bg-white">
      <div className="bg-black text-white px-4 py-2 font-mono text-xs uppercase tracking-wider font-bold">
        Key Takeaways &amp; Exam Checklist
      </div>
      <ul className="p-4 space-y-2.5 divide-y divide-gray-light text-xs md:text-sm font-sans">
        {takeaways.map((point, idx) => (
          <li key={idx} className="flex items-start gap-2.5 pt-2.5 first:pt-0 text-black">
            <span className="mt-0.5 p-0.5 border border-black bg-black text-white shrink-0">
              <Check size={11} />
            </span>
            <span className="leading-relaxed">
              <FormattedText text={point} />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

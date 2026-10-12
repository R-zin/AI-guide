import React from "react";
import { Check } from "lucide-react";
import { FormattedText } from "./MathRenderer";

export function KeyTakeawaysBox({ takeaways }: { takeaways: string[] }) {
  if (!takeaways || takeaways.length === 0) return null;

  return (
    <div className="my-10 border border-black dark:border-white bg-white dark:bg-black">
      <div className="bg-black text-white dark:bg-white dark:text-black px-4 py-2 font-mono text-xs uppercase tracking-wider font-bold">
        Key Takeaways &amp; Exam Checklist
      </div>
      <ul className="p-4 space-y-2.5 divide-y divide-gray-light dark:divide-gray-dark text-xs md:text-sm font-sans">
        {takeaways.map((point, idx) => (
          <li key={idx} className="flex items-start gap-2.5 pt-2.5 first:pt-0 text-black dark:text-white">
            <span className="mt-0.5 p-0.5 border border-black dark:border-white bg-black dark:bg-white text-white dark:text-black shrink-0">
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

"use client";

import React, { useState } from "react";
import { formulaItems } from "../../content/formulas";
import { MathRenderer, FormattedText } from "../../components/MathRenderer";
import { Copy, Check } from "lucide-react";

export default function FormulasPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyLatex = async (id: string, latex: string) => {
    try {
      await navigator.clipboard.writeText(latex);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (e) {
      console.warn("Failed to copy LaTeX:", e);
    }
  };

  return (
    <div className="prose-readable space-y-8">
      {/* Header */}
      <header className="border-b border-black dark:border-white pb-6">
        <div className="inline-block px-2.5 py-0.5 bg-black dark:bg-white text-white dark:text-black font-mono text-xs uppercase tracking-wider mb-2">
          Mathematical Formulation Sheet
        </div>
        <h1 className="text-2xl md:text-4xl font-bold font-sans text-black dark:text-white tracking-tight mb-2">
          Formula Reference Sheet
        </h1>
        <p className="font-sans text-sm text-gray-dark dark:text-gray-light leading-relaxed">
          Authoritative mathematical definitions, logical equivalences, and defuzzification algorithms rendered via KaTeX with variable keys and worked calculations.
        </p>

        <div className="mt-4 p-3 border border-black dark:border-white bg-gray-light/30 dark:bg-gray-black flex items-center justify-between font-mono text-xs text-black dark:text-white">
          <span>Formulas Documented: <strong className="text-black dark:text-white">{formulaItems.length}</strong></span>
          <span>Engine: <strong className="text-black dark:text-white">KaTeX 0.16.11</strong></span>
        </div>
      </header>

      {/* Formula Cards */}
      <div className="space-y-8">
        {formulaItems.map((f, idx) => (
          <section
            key={f.id}
            id={f.id}
            className="border border-black dark:border-white bg-white dark:bg-black p-6 scroll-mt-16"
          >
            {/* Header */}
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-4 pb-3 border-b border-black dark:border-white">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold px-2 py-0.5 bg-black dark:bg-white text-white dark:text-black">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h2 className="font-sans text-lg font-bold text-black dark:text-white">
                  {f.name}
                </h2>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs">
                <span className="px-1.5 py-0.5 border border-black dark:border-white bg-gray-light dark:bg-gray-dark text-black dark:text-white text-[11px]">
                  {f.sourceRef}
                </span>
                <button
                  onClick={() => copyLatex(f.id, f.latex)}
                  title="Copy raw LaTeX formula"
                  className="flex items-center gap-1 px-2 py-1 border border-black dark:border-white text-black dark:text-white text-[11px] hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors focus:outline focus:outline-2 focus:outline-black dark:focus:outline-white"
                >
                  {copiedId === f.id ? <Check size={12} /> : <Copy size={12} />}
                  <span>{copiedId === f.id ? "Copied" : "Copy LaTeX"}</span>
                </button>
              </div>
            </div>

            {/* Display Math Box */}
            <div className="p-6 bg-white dark:bg-black border border-black dark:border-white my-4 flex justify-center items-center overflow-x-auto text-lg md:text-xl text-black dark:text-white">
              <MathRenderer latex={f.latex} displayMode={true} />
            </div>

            {/* Description */}
            <div className="font-sans text-xs md:text-sm text-gray-dark dark:text-gray-light leading-relaxed mb-4">
              <FormattedText text={f.description} />
            </div>

            {/* Variables / Parameters Table */}
            <div className="my-4 border border-gray-light dark:border-gray-dark overflow-x-auto">
              <table className="w-full text-left text-xs font-sans">
                <thead>
                  <tr className="bg-gray-light/50 dark:bg-gray-black font-mono text-gray-dark dark:text-gray-mid uppercase">
                    <th className="p-2 border-b border-gray-light dark:border-gray-dark w-1/4">Symbol</th>
                    <th className="p-2 border-b border-gray-light dark:border-gray-dark">Definition / Role</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-light dark:divide-gray-dark">
                  {f.variables.map((v, vIdx) => (
                    <tr key={vIdx}>
                      <td className="p-2 font-mono font-bold text-black dark:text-white align-top">
                        <MathRenderer latex={v.symbol} displayMode={false} />
                      </td>
                      <td className="p-2 text-gray-dark dark:text-gray-light align-top">
                        {v.explanation}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Worked Example */}
            {f.workedExample && (
              <div className="mt-4 p-3 bg-gray-light/20 dark:bg-gray-black border-l-2 border-black dark:border-l-white font-mono text-xs text-black dark:text-white">
                <span className="font-bold uppercase mr-1">Application Example:</span>
                <FormattedText text={f.workedExample} />
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}

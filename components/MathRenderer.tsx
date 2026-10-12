"use client";

import React, { useMemo } from "react";
import katex from "katex";

interface MathRendererProps {
  latex: string;
  displayMode?: boolean;
  className?: string;
}

export function MathRenderer({
  latex,
  displayMode = false,
  className = "",
}: MathRendererProps) {
  const html = useMemo(() => {
    try {
      return katex.renderToString(latex, {
        displayMode,
        throwOnError: false,
      });
    } catch (e) {
      console.warn("KaTeX render error:", e);
      return `<code class="font-mono text-sm">${latex}</code>`;
    }
  }, [latex, displayMode]);

  return (
    <span
      className={`inline-block ${displayMode ? "block my-3 overflow-x-auto py-1" : ""} ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

// Utility to parse markdown-like math strings ($...$ or $$...$$)
export function FormattedText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  if (!text) return null;

  // Split by double dollar $$...$$ or single dollar $...$
  const parts = text.split(/(\$\$[\s\S]+?\$\$|\$[^\$]+?\$)/g);

  return (
    <span className={className}>
      {parts.map((part, index) => {
        if (part.startsWith("$$") && part.endsWith("$$")) {
          const math = part.slice(2, -2).trim();
          return <MathRenderer key={index} latex={math} displayMode={true} />;
        } else if (part.startsWith("$") && part.endsWith("$")) {
          const math = part.slice(1, -1).trim();
          return <MathRenderer key={index} latex={math} displayMode={false} />;
        }
        return <span key={index}>{part}</span>;
      })}
    </span>
  );
}

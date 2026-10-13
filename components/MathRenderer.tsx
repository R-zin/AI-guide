"use client";

import React, { useMemo } from "react";
import katex from "katex";
import { marked } from "marked";

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

/**
 * Robust Markdown + KaTeX parser:
 * 1. Protects inline and block code to avoid KaTeX parsing within code.
 * 2. Pre-renders display math ($$...$$) and inline math ($...$) with KaTeX.
 * 3. Parses Markdown structure (headings, ordered/unordered lists, bold, italics, blockquotes, tables).
 * 4. Injects pre-rendered KaTeX safely into the resulting HTML.
 */
export function renderMarkdownWithKaTeX(markdownText: string, inline = false): string {
  if (!markdownText) return "";

  // 1. Temporarily protect code blocks and inline code
  const codePlaceholders: { placeholder: string; raw: string }[] = [];
  let text = markdownText.replace(/(```[\s\S]*?```|`[^`\n]+?`)/g, (match) => {
    const placeholder = `@@CODEPLACEHOLDER${codePlaceholders.length}@@`;
    codePlaceholders.push({ placeholder, raw: match });
    return placeholder;
  });

  // 2. Extract display math $$ ... $$
  const blockMath: { placeholder: string; html: string }[] = [];
  text = text.replace(/\$\$([\s\S]+?)\$\$/g, (_match, math) => {
    let rendered: string;
    try {
      rendered = katex.renderToString(math.trim(), { displayMode: true, throwOnError: false });
    } catch {
      rendered = `<div class="font-mono text-sm">${math}</div>`;
    }
    const placeholder = `@@MATHBLOCK${blockMath.length}@@`;
    blockMath.push({ placeholder, html: `<div class="my-3 overflow-x-auto">${rendered}</div>` });
    return `\n\n${placeholder}\n\n`;
  });

  // 3. Extract inline math $ ... $
  const inlineMath: { placeholder: string; html: string }[] = [];
  text = text.replace(/\$([^\$\n]+?)\$/g, (_match, math) => {
    let rendered: string;
    try {
      rendered = katex.renderToString(math.trim(), { displayMode: false, throwOnError: false });
    } catch {
      rendered = `<code class="font-mono text-sm">${math}</code>`;
    }
    const placeholder = `@@MATHINLINE${inlineMath.length}@@`;
    inlineMath.push({ placeholder, html: rendered });
    return placeholder;
  });

  // 4. Restore code blocks
  for (const { placeholder, raw } of codePlaceholders) {
    text = text.replace(placeholder, raw);
  }

  // 5. Parse markdown with marked
  let html = inline
    ? (marked.parseInline(text, { gfm: true }) as string)
    : (marked.parse(text, { gfm: true, breaks: false }) as string);

  // 6. Restore display math (cleaning if wrapped in <p>)
  for (const { placeholder, html: mHtml } of blockMath) {
    const pRegex = new RegExp(`<p>\\s*${placeholder}\\s*<\\/p>`, "g");
    if (pRegex.test(html)) {
      html = html.replace(pRegex, mHtml);
    } else {
      html = html.replace(new RegExp(placeholder, "g"), mHtml);
    }
  }

  // 7. Restore inline math
  for (const { placeholder, html: mHtml } of inlineMath) {
    html = html.replace(new RegExp(placeholder, "g"), mHtml);
  }

  return html;
}

export function FormattedText({
  text,
  className = "",
  inline,
}: {
  text: string;
  className?: string;
  inline?: boolean;
}) {
  if (!text) return null;

  const isInline =
    inline !== undefined
      ? inline
      : !text.includes("\n") && !/^(\s*(#{1,6}|[0-9]+\.|\-|\*|\>|```))\s+/.test(text);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const parsedHtml = useMemo(() => {
    return renderMarkdownWithKaTeX(text, isInline);
  }, [text, isInline]);

  if (isInline) {
    return (
      <span
        className={`markdown-content inline ${className}`}
        dangerouslySetInnerHTML={{ __html: parsedHtml }}
      />
    );
  }

  return (
    <div
      className={`markdown-content ${className}`}
      dangerouslySetInnerHTML={{ __html: parsedHtml }}
    />
  );
}

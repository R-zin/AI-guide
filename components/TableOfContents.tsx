"use client";

import React from "react";

interface TOCItem {
  id: string;
  title: string;
}

export function TableOfContents({ items }: { items: TOCItem[] }) {
  if (!items || items.length === 0) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="my-8 p-5 border border-black bg-white"
    >
      <div className="font-mono text-xs font-bold uppercase tracking-wider text-black pb-2 border-b border-black mb-3 flex items-center justify-between">
        <span>Table of Contents</span>
        <span className="text-[10px] text-gray-dark font-normal">Jump to section</span>
      </div>
      <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-xs font-mono">
        {items.map((item, idx) => (
          <li key={item.id} className="flex items-start gap-2">
            <span className="text-gray-mid font-bold select-none">{String(idx + 1).padStart(2, "0")}.</span>
            <a
              href={`#${item.id}`}
              className="text-black hover:underline hover:font-bold focus:outline focus:outline-2 focus:outline-black line-clamp-1"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

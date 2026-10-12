"use client";

import React, { useState, useMemo } from "react";
import { glossaryItems } from "../../content/glossary";
import { Search, Tag } from "lucide-react";
import { FormattedText } from "../../components/MathRenderer";

export default function GlossaryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = useMemo(() => {
    return Array.from(new Set(glossaryItems.map((item) => item.category)));
  }, []);

  const filteredItems = useMemo(() => {
    return glossaryItems
      .filter((item) => {
        if (selectedCategory !== "all" && item.category !== selectedCategory) {
          return false;
        }
        if (searchQuery.trim() !== "") {
          const q = searchQuery.toLowerCase();
          const termMatch = item.term.toLowerCase().includes(q);
          const defMatch = item.definition.toLowerCase().includes(q);
          const relatedMatch = item.relatedTerms?.some((t) => t.toLowerCase().includes(q));
          return termMatch || defMatch || relatedMatch;
        }
        return true;
      })
      .sort((a, b) => a.term.localeCompare(b.term));
  }, [searchQuery, selectedCategory]);

  return (
    <div className="prose-readable space-y-8">
      {/* Header */}
      <header className="border-b border-black dark:border-white pb-6">
        <div className="inline-block px-2.5 py-0.5 bg-black dark:bg-white text-white dark:text-black font-mono text-xs uppercase tracking-wider mb-2">
          Subject Dictionary
        </div>
        <h1 className="text-2xl md:text-4xl font-bold font-sans text-black dark:text-white tracking-tight mb-2">
          Glossary of Terms
        </h1>
        <p className="font-sans text-sm text-gray-dark dark:text-gray-light leading-relaxed">
          Comprehensive, alphabetical definitions of all core terminology across Expert Systems, First-Order Logic, Resolution, and Fuzzy Systems with source provenance.
        </p>

        <div className="mt-4 p-3 border border-black dark:border-white bg-gray-light/30 dark:bg-gray-black flex items-center justify-between font-mono text-xs text-black dark:text-white">
          <span>Total Defined Entries: <strong className="text-black dark:text-white">{glossaryItems.length}</strong></span>
          <span>Showing: <strong className="text-black dark:text-white">{filteredItems.length}</strong></span>
        </div>
      </header>

      {/* Search & Category Filtering */}
      <section className="p-4 border border-black dark:border-white bg-white dark:bg-black space-y-4">
        <div className="relative">
          <label htmlFor="glossary-search" className="sr-only">Search glossary terms</label>
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-mid">
            <Search size={16} />
          </div>
          <input
            id="glossary-search"
            type="text"
            placeholder="Search by term name, definition keyword, or concept..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-black dark:border-white text-xs font-mono bg-white dark:bg-black text-black dark:text-white placeholder-gray-mid focus:outline focus:outline-2 focus:outline-black dark:focus:outline-white"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-gray-light dark:border-gray-dark">
          <span className="font-mono text-[10px] uppercase text-gray-dark dark:text-gray-mid mr-1 flex items-center gap-1">
            <Tag size={11} /> Category:
          </span>
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-2.5 py-1 text-xs font-mono border border-black dark:border-white transition-colors ${
              selectedCategory === "all"
                ? "bg-black text-white dark:bg-white dark:text-black font-bold"
                : "bg-white text-black dark:bg-black dark:text-white hover:bg-gray-light dark:hover:bg-gray-dark"
            }`}
          >
            All Categories ({glossaryItems.length})
          </button>
          {categories.map((cat) => {
            const count = glossaryItems.filter((i) => i.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-2.5 py-1 text-xs font-mono border border-black dark:border-white transition-colors ${
                  selectedCategory === cat
                    ? "bg-black text-white dark:bg-white dark:text-black font-bold"
                    : "bg-white text-black dark:bg-black dark:text-white hover:bg-gray-light dark:hover:bg-gray-dark"
                }`}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>
      </section>

      {/* Glossary Items List */}
      <section className="space-y-4">
        {filteredItems.length === 0 ? (
          <div className="p-8 border border-dashed border-gray-mid text-center font-mono text-xs text-gray-dark dark:text-gray-mid">
            No terms found matching &quot;{searchQuery}&quot;.
          </div>
        ) : (
          filteredItems.map((item) => (
            <div
              key={item.id}
              className="p-5 border border-black dark:border-white bg-white dark:bg-black hover:bg-gray-light/10 dark:hover:bg-gray-black transition-colors"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                <h3 className="font-mono text-base font-bold text-black dark:text-white">
                  {item.term}
                </h3>
                <div className="flex items-center gap-2 font-mono text-[11px]">
                  <span className="px-1.5 py-0.5 border border-black dark:border-white bg-black dark:bg-white text-white dark:text-black uppercase text-[10px]">
                    {item.category}
                  </span>
                  <span className="px-1.5 py-0.5 border border-black dark:border-white bg-gray-light dark:bg-gray-dark text-black dark:text-white">
                    {item.sourceRef}
                  </span>
                </div>
              </div>

              <p className="font-sans text-xs md:text-sm text-gray-dark dark:text-gray-light leading-relaxed mb-3">
                <FormattedText text={item.definition} />
              </p>

              {item.relatedTerms && item.relatedTerms.length > 0 && (
                <div className="pt-2 border-t border-gray-light dark:border-gray-dark font-mono text-[11px] text-gray-dark dark:text-gray-mid flex items-center gap-2">
                  <span className="font-bold text-black dark:text-white uppercase">Related:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.relatedTerms.map((rt, idx) => (
                      <span
                        key={idx}
                        className="px-1.5 py-0.5 bg-gray-light/40 dark:bg-gray-black border border-gray-mid text-black dark:text-white text-[10px]"
                      >
                        {rt}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </section>
    </div>
  );
}

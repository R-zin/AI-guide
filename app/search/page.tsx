"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { chapters } from "../../content/chapters";
import { glossaryItems } from "../../content/glossary";
import { Search as SearchIcon, ArrowRight, Tag, BookOpen, HelpCircle, FileText } from "lucide-react";
import { FormattedText } from "../../components/MathRenderer";

interface SearchResult {
  id: string;
  type: "Section" | "Definition" | "Example" | "Question" | "Glossary";
  title: string;
  preview: string;
  url: string;
  chapterBadge?: string;
  sourceRef: string;
}

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [filterType, setFilterType] = useState<string>("all");

  // Build searchable index from static content
  const searchIndex = useMemo<SearchResult[]>(() => {
    const results: SearchResult[] = [];

    // 1. Chapters & Sections
    chapters.forEach((ch) => {
      ch.sections.forEach((sec) => {
        results.push({
          id: `sec-${sec.id}`,
          type: "Section",
          title: `${ch.title}: ${sec.heading}`,
          preview: sec.content.slice(0, 200).replace(/[#*`]/g, "") + "...",
          url: `/chapters/${ch.slug}#${sec.id}`,
          chapterBadge: `Ch ${ch.chapterNumber}`,
          sourceRef: sec.sourceRef,
        });

        if (sec.subsections) {
          sec.subsections.forEach((sub) => {
            results.push({
              id: `sub-${sub.id}`,
              type: "Section",
              title: `${ch.title}: ${sub.subheading}`,
              preview: sub.content.slice(0, 200).replace(/[#*`]/g, "") + "...",
              url: `/chapters/${ch.slug}#${sub.id}`,
              chapterBadge: `Ch ${ch.chapterNumber}`,
              sourceRef: sub.sourceRef,
            });
          });
        }
      });

      // 2. Definitions
      ch.keyDefinitions.forEach((def, dIdx) => {
        results.push({
          id: `def-${ch.slug}-${dIdx}`,
          type: "Definition",
          title: `Definition: ${def.term}`,
          preview: def.definition,
          url: `/chapters/${ch.slug}#key-definitions`,
          chapterBadge: `Ch ${ch.chapterNumber}`,
          sourceRef: def.sourceRef,
        });
      });

      // 3. Solved Examples
      ch.solvedExamples.forEach((ex) => {
        results.push({
          id: `ex-${ex.id}`,
          type: "Example",
          title: `Worked Example: ${ex.title}`,
          preview: ex.problemStatement.slice(0, 200) + "...",
          url: `/chapters/${ch.slug}#solved-examples`,
          chapterBadge: `Ch ${ch.chapterNumber}`,
          sourceRef: ex.sourceRef,
        });
      });

      // 4. Practice Questions
      ch.practiceQuestions.forEach((q) => {
        results.push({
          id: `pq-${q.id}`,
          type: "Question",
          title: `Practice: ${q.question.slice(0, 80)}...`,
          preview: q.question,
          url: `/chapters/${ch.slug}#practice-questions`,
          chapterBadge: `Ch ${ch.chapterNumber}`,
          sourceRef: q.sourceRef,
        });
      });
    });

    // 5. Glossary
    glossaryItems.forEach((g) => {
      results.push({
        id: `glossary-${g.id}`,
        type: "Glossary",
        title: `Glossary Term: ${g.term}`,
        preview: g.definition,
        url: `/glossary`,
        chapterBadge: g.category,
        sourceRef: g.sourceRef,
      });
    });

    return results;
  }, []);

  const filteredResults = useMemo(() => {
    if (!query || query.trim() === "") return [];

    const terms = query.toLowerCase().trim().split(/\s+/);

    return searchIndex.filter((item) => {
      if (filterType !== "all" && item.type !== filterType) {
        return false;
      }
      const combined = (item.title + " " + item.preview + " " + item.sourceRef).toLowerCase();
      return terms.every((term) => combined.includes(term));
    });
  }, [query, filterType, searchIndex]);

  const typePills = ["all", "Section", "Definition", "Example", "Question", "Glossary"];

  return (
    <div className="prose-readable space-y-8">
      {/* Header */}
      <header className="border-b border-black pb-6">
        <div className="inline-block px-2.5 py-0.5 bg-black text-white font-mono text-xs uppercase tracking-wider mb-2">
          Knowledge Base Index
        </div>
        <h1 className="text-2xl md:text-4xl font-bold font-sans text-black tracking-tight mb-2">
          Full-Text Search
        </h1>
        <p className="font-sans text-sm text-gray-dark leading-relaxed">
          Search across all chapters, definitions, proofs, worked examples, practice problems, and glossary entries.
        </p>
      </header>

      {/* Search Input Bar */}
      <section className="space-y-4">
        <div className="relative">
          <label htmlFor="search-input" className="sr-only">Search</label>
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-black">
            <SearchIcon size={18} />
          </div>
          <input
            id="search-input"
            type="text"
            autoFocus
            placeholder="Type any topic (e.g. Mamdani, Skolem, Resolution, MYCIN, Defuzzification)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 border border-black font-mono text-sm bg-white placeholder-gray-mid focus:outline focus:outline-2 focus:outline-black"
          />
        </div>

        {/* Filter Type Pills */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-[10px] uppercase text-gray-dark mr-1">
            Filter:
          </span>
          {typePills.map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-2.5 py-1 text-xs font-mono border border-black transition-colors ${
                filterType === type
                  ? "bg-black text-white font-bold"
                  : "bg-white text-black hover:bg-gray-light"
              }`}
            >
              {type === "all" ? "All Content" : `${type}s`}
            </button>
          ))}
        </div>
      </section>

      {/* Results Header */}
      {query.trim() !== "" && (
        <div className="p-3 border border-black bg-gray-light/30 font-mono text-xs flex items-center justify-between">
          <span>Search query: <strong className="text-black">&quot;{query}&quot;</strong></span>
          <span>Matches: <strong className="text-black">{filteredResults.length}</strong></span>
        </div>
      )}

      {/* Results List */}
      <section className="space-y-4">
        {query.trim() === "" ? (
          <div className="p-12 border border-dashed border-gray-mid text-center space-y-3">
            <SearchIcon size={28} className="mx-auto text-gray-mid" />
            <p className="font-mono text-xs text-gray-dark">
              Enter a search keyword above to explore topics across the entire curriculum.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-2 font-mono text-[11px]">
              <span className="text-gray-dark">Popular searches:</span>
              {["Mamdani", "Skolemization", "MYCIN", "Centroid", "Prolog", "Modus Ponens", "Weighted Average"].map((s) => (
                <button
                  key={s}
                  onClick={() => setQuery(s)}
                  className="px-2 py-0.5 border border-black bg-white hover:bg-black hover:text-white transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        ) : filteredResults.length === 0 ? (
          <div className="p-10 border border-dashed border-gray-mid text-center font-mono text-xs text-gray-dark">
            No results found matching &quot;{query}&quot;. Try broadening your keywords.
          </div>
        ) : (
          filteredResults.map((res) => (
            <Link
              key={res.id}
              href={res.url}
              className="block p-5 border border-black bg-white hover:bg-gray-light/10 transition-colors group focus:outline focus:outline-2 focus:outline-black"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 bg-black text-white uppercase">
                    {res.type}
                  </span>
                  {res.chapterBadge && (
                    <span className="font-mono text-[11px] font-bold text-gray-dark">
                      {res.chapterBadge}
                    </span>
                  )}
                </div>
                <span className="font-mono text-[10px] px-1.5 py-0.5 border border-black bg-gray-light text-black">
                  {res.sourceRef}
                </span>
              </div>

              <h3 className="font-sans text-base font-bold text-black group-hover:underline mb-1">
                {res.title}
              </h3>

              <p className="font-sans text-xs md:text-sm text-gray-dark leading-relaxed line-clamp-2">
                <FormattedText text={res.preview} />
              </p>

              <div className="mt-3 flex items-center gap-1 font-mono text-xs font-bold text-black">
                <span>View Content</span>
                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))
        )}
      </section>
    </div>
  );
}

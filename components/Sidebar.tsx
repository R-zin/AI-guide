"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useProgress } from "./ProgressContext";
import { chapters } from "../content/chapters";
import { Menu, X, CheckSquare, Square, Search, BookOpen, Layers, Award, Home } from "lucide-react";

export function Sidebar() {
  const pathname = usePathname();
  const { isChapterUnderstood, chapterProgressPercentage } = useProgress();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/practice", label: "Practice Bank", icon: CheckSquare },
    { href: "/formulas", label: "Formula Sheet", icon: Layers },
    { href: "/glossary", label: "Glossary", icon: BookOpen },
    { href: "/mock-exam", label: "Mock Exam", icon: Award },
    { href: "/search", label: "Search Guide", icon: Search },
  ];

  return (
    <>
      {/* Mobile Top Navbar */}
      <header className="lg:hidden sticky top-0 z-40 bg-white border-b border-black flex items-center justify-between px-4 py-3">
        <Link href="/" className="font-mono text-sm font-bold tracking-tight uppercase">
          AI STUDY GUIDE
        </Link>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
          className="p-1 border border-black focus:outline focus:outline-2 focus:outline-black"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[49px] z-30 bg-white border-b border-black p-4 overflow-y-auto">
          <div className="mb-6 pb-4 border-b border-black">
            <div className="text-xs font-mono uppercase tracking-wider text-gray-dark mb-2">Overall Progress</div>
            <div className="flex items-center justify-between text-xs font-mono mb-1">
              <span>Understood:</span>
              <span className="font-bold">{chapterProgressPercentage}%</span>
            </div>
            <div className="w-full bg-gray-light h-2 border border-black">
              <div
                className="bg-black h-full transition-all duration-300"
                style={{ width: `${chapterProgressPercentage}%` }}
              />
            </div>
          </div>

          <div className="text-xs font-mono font-bold tracking-wider uppercase mb-2 text-black">Chapters</div>
          <nav className="space-y-1 mb-6">
            {chapters.map((ch) => {
              const active = pathname === `/chapters/${ch.slug}/` || pathname === `/chapters/${ch.slug}`;
              const understood = isChapterUnderstood(ch.slug);
              return (
                <Link
                  key={ch.slug}
                  href={`/chapters/${ch.slug}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-start gap-2 p-2 border text-xs font-sans transition-colors ${
                    active
                      ? "bg-black text-white border-black font-semibold"
                      : "bg-white text-black border-transparent hover:border-black"
                  }`}
                >
                  <span className="mt-0.5">
                    {understood ? (
                      <CheckSquare size={14} className={active ? "text-white" : "text-black"} />
                    ) : (
                      <Square size={14} className={active ? "text-white" : "text-gray-mid"} />
                    )}
                  </span>
                  <div>
                    <span className="font-mono font-bold mr-1">Ch {ch.chapterNumber}:</span>
                    <span>{ch.title}</span>
                  </div>
                </Link>
              );
            })}
          </nav>

          <div className="text-xs font-mono font-bold tracking-wider uppercase mb-2 text-black border-t border-black pt-4">Navigation</div>
          <nav className="space-y-1">
            {navLinks.map((link) => {
              const active = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-2 p-2 text-xs font-mono border ${
                    active
                      ? "bg-black text-white border-black"
                      : "bg-white text-black border-transparent hover:border-black"
                  }`}
                >
                  <Icon size={14} />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      )}

      {/* Desktop Sticky Sidebar */}
      <aside className="hidden lg:block w-72 shrink-0 border-r border-black min-h-screen sticky top-0 self-start h-screen overflow-y-auto bg-white p-5">
        <div className="mb-6 pb-4 border-b border-black">
          <Link href="/" className="block">
            <h1 className="font-mono text-base font-bold tracking-wider uppercase text-black">
              AI STUDY GUIDE
            </h1>
            <p className="font-mono text-xs text-gray-dark mt-1">
              Symbolic &amp; Fuzzy AI
            </p>
          </Link>

          {/* Progress Indicator */}
          <div className="mt-4 pt-3 border-t border-gray-light">
            <div className="flex items-center justify-between text-xs font-mono mb-1">
              <span className="uppercase tracking-wider text-gray-dark">Readiness</span>
              <span className="font-bold text-black">{chapterProgressPercentage}%</span>
            </div>
            <div className="w-full bg-gray-light h-2 border border-black">
              <div
                className="bg-black h-full transition-all duration-300"
                style={{ width: `${chapterProgressPercentage}%` }}
              />
            </div>
          </div>
        </div>

        {/* Chapters list */}
        <div className="mb-6">
          <div className="text-xs font-mono uppercase tracking-wider font-bold text-black mb-2 flex items-center justify-between">
            <span>Course Chapters</span>
            <span className="text-[10px] text-gray-dark">5 Total</span>
          </div>
          <nav className="space-y-1">
            {chapters.map((ch) => {
              const active = pathname === `/chapters/${ch.slug}/` || pathname === `/chapters/${ch.slug}`;
              const understood = isChapterUnderstood(ch.slug);
              return (
                <Link
                  key={ch.slug}
                  href={`/chapters/${ch.slug}`}
                  className={`group flex items-start gap-2.5 p-2 border text-xs transition-colors focus:outline focus:outline-2 focus:outline-black ${
                    active
                      ? "bg-black text-white border-black font-semibold"
                      : "bg-white text-black border-transparent hover:border-black"
                  }`}
                >
                  <span className="mt-0.5 shrink-0">
                    {understood ? (
                      <CheckSquare size={13} className={active ? "text-white" : "text-black"} />
                    ) : (
                      <Square size={13} className={active ? "text-white" : "text-gray-mid"} />
                    )}
                  </span>
                  <div className="leading-snug">
                    <span className="font-mono text-[10px] block opacity-80 uppercase">
                      Chapter {ch.chapterNumber}
                    </span>
                    <span className="font-sans line-clamp-2">{ch.title}</span>
                  </div>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Global Navigation Tools */}
        <div className="pt-4 border-t border-black">
          <div className="text-xs font-mono uppercase tracking-wider font-bold text-black mb-2">
            Reference &amp; Prep
          </div>
          <nav className="space-y-1">
            {navLinks.map((link) => {
              const active = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-2 p-2 text-xs font-mono border transition-colors focus:outline focus:outline-2 focus:outline-black ${
                    active
                      ? "bg-black text-white border-black"
                      : "bg-white text-black border-transparent hover:border-black"
                  }`}
                >
                  <Icon size={14} />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Source provenance citation */}
        <div className="mt-8 pt-4 border-t border-gray-light text-[11px] font-mono text-gray-mid">
          <div>Source: /materials</div>
          <div>5 Modules · 134 Slides/Pages</div>
        </div>
      </aside>
    </>
  );
}

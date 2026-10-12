"use client";

import React, { useState } from "react";
import { Link as LinkIcon, Check } from "lucide-react";

interface CopyHeadingProps {
  id: string;
  level?: 2 | 3 | 4;
  children: React.ReactNode;
  sourceRef?: string;
  className?: string;
}

export function CopyHeading({
  id,
  level = 2,
  children,
  sourceRef,
  className = "",
}: CopyHeadingProps) {
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    try {
      const url = `${window.location.origin}${window.location.pathname}#${id}`;
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.warn("Failed to copy link:", e);
    }
  };

  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
  const sizeClasses =
    level === 2
      ? "text-xl md:text-2xl font-bold mt-10 mb-4 pb-2 border-b border-black"
      : level === 3
      ? "text-lg md:text-xl font-bold mt-6 mb-3"
      : "text-base font-bold mt-4 mb-2";

  return (
    <div className="group relative flex items-baseline justify-between gap-2">
      <HeadingTag
        id={id}
        className={`scroll-mt-20 font-sans tracking-tight text-black flex items-center gap-2 ${sizeClasses} ${className}`}
      >
        <span>{children}</span>
        {sourceRef && (
          <span className="font-mono text-xs font-normal px-1.5 py-0.5 bg-gray-light text-black border border-black uppercase ml-2 inline-block">
            {sourceRef}
          </span>
        )}
      </HeadingTag>

      <button
        onClick={copyLink}
        title="Copy link to heading"
        aria-label={`Copy link to ${id}`}
        className="opacity-0 group-hover:opacity-100 focus:opacity-100 p-1 border border-black bg-white hover:bg-black hover:text-white transition-opacity text-xs font-mono flex items-center gap-1 focus:outline focus:outline-2 focus:outline-black"
      >
        {copied ? (
          <>
            <Check size={12} />
            <span className="hidden sm:inline">Copied</span>
          </>
        ) : (
          <>
            <LinkIcon size={12} />
            <span className="hidden sm:inline">Link</span>
          </>
        )}
      </button>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { DiagramItem } from "../content/types";
import { Eye, EyeOff } from "lucide-react";

export function DiagramViewer({ diagram }: { diagram: DiagramItem }) {
  const [showOriginal, setShowOriginal] = useState(false);

  return (
    <figure className="my-8 border border-black bg-white">
      {/* Header bar */}
      <div className="border-b border-black p-3 bg-white flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="font-bold uppercase text-black">{diagram.title}</span>
          <span className="px-1.5 py-0.5 bg-gray-light border border-black text-black text-[10px]">
            {diagram.sourceRef}
          </span>
        </div>
        {diagram.originalPath && (
          <button
            onClick={() => setShowOriginal(!showOriginal)}
            className="flex items-center gap-1.5 px-2 py-1 border border-black text-[11px] hover:bg-black hover:text-white transition-colors focus:outline focus:outline-2 focus:outline-black"
          >
            {showOriginal ? <EyeOff size={13} /> : <Eye size={13} />}
            <span>{showOriginal ? "Show Clean SVG" : "View Source Image"}</span>
          </button>
        )}
      </div>

      {/* Image container */}
      <div className="p-4 bg-white flex justify-center items-center overflow-x-auto min-h-[220px]">
        {showOriginal && diagram.originalPath ? (
          <div className="relative max-w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={diagram.originalPath}
              alt={diagram.caption}
              className="max-h-[500px] object-contain border border-gray-light"
            />
            <div className="absolute top-2 right-2 px-1.5 py-0.5 bg-black text-white text-[10px] font-mono uppercase">
              Original Slide Scan
            </div>
          </div>
        ) : (
          <div className="w-full max-w-3xl flex justify-center">
            {/* Clean SVG display */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={diagram.svgPath}
              alt={diagram.caption}
              className="w-full max-h-[500px] object-contain"
            />
          </div>
        )}
      </div>

      {/* Caption bar */}
      <figcaption className="border-t border-black p-3 bg-gray-light/30 font-sans text-xs text-gray-dark leading-relaxed">
        <span className="font-bold text-black mr-1.5 font-mono">Caption:</span>
        {diagram.caption}
      </figcaption>
    </figure>
  );
}

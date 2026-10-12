import { chapter1 } from "./chapter1";
import { chapter2 } from "./chapter2";
import { chapter3 } from "./chapter3";
import { chapter4 } from "./chapter4";
import { chapter5 } from "./chapter5";
import { ChapterData } from "../types";

export const chapters: ChapterData[] = [
  chapter1,
  chapter2,
  chapter3,
  chapter4,
  chapter5,
];

export function getChapterBySlug(slug: string): ChapterData | undefined {
  return chapters.find((ch) => ch.slug === slug);
}

export function getAllChapterSlugs(): string[] {
  return chapters.map((ch) => ch.slug);
}

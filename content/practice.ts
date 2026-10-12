import { chapters } from "./chapters";
import { PracticeQuestionItem } from "./types";

export function getAllPracticeQuestions(): PracticeQuestionItem[] {
  return chapters.flatMap((chapter) => chapter.practiceQuestions);
}

export function getPracticeQuestionsByChapter(slug: string): PracticeQuestionItem[] {
  const chapter = chapters.find((ch) => ch.slug === slug);
  return chapter ? chapter.practiceQuestions : [];
}

export function getPracticeQuestionsByDifficulty(
  difficulty: "Easy" | "Medium" | "Hard"
): PracticeQuestionItem[] {
  return getAllPracticeQuestions().filter((q) => q.difficulty === difficulty);
}

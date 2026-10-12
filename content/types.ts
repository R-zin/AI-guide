export interface DiagramItem {
  id: string;
  title: string;
  caption: string;
  sourceRef: string;
  svgPath: string;
  originalPath?: string;
}

export interface NoteBoxItem {
  title: string;
  content: string;
  isDiscrepancy?: boolean;
  isSupplementary?: boolean;
}

export interface SectionItem {
  id: string;
  heading: string;
  sourceRef: string;
  subsections?: {
    id: string;
    subheading: string;
    sourceRef: string;
    content: string;
  }[];
  content: string;
  notes?: NoteBoxItem[];
  diagrams?: DiagramItem[];
  comparisonTable?: {
    headers: string[];
    rows: string[][];
  };
}

export interface SolvedStep {
  stepNumber: number;
  title: string;
  explanation: string;
  formulaOrCode?: string;
}

export interface SolvedExampleItem {
  id: string;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  sourceRef: string;
  problemStatement: string;
  steps: SolvedStep[];
  finalAnswer: string;
  verificationNotes?: string;
}

export interface PracticeQuestionItem {
  id: string;
  chapterSlug: string;
  chapterNumber: number;
  chapterTitle: string;
  question: string;
  difficulty: "Easy" | "Medium" | "Hard";
  sourceRef: string;
  hints?: string[];
  solutionSteps: string[];
  finalAnswer: string;
}

export interface KeyDefinitionItem {
  term: string;
  definition: string;
  sourceRef: string;
  formula?: string;
}

export interface ChapterData {
  slug: string;
  chapterNumber: number;
  title: string;
  shortDescription: string;
  sourceFile: string;
  sourceRange: string;
  estimatedReadTime: string;
  learningObjectives: string[];
  keyDefinitions: KeyDefinitionItem[];
  sections: SectionItem[];
  solvedExamples: SolvedExampleItem[];
  practiceQuestions: PracticeQuestionItem[];
  keyTakeaways: string[];
}

export interface GlossaryItem {
  id: string;
  term: string;
  definition: string;
  category: "Expert Systems" | "Predicate Logic" | "Inference & Resolution" | "Fuzzy Logic";
  sourceRef: string;
  relatedTerms?: string[];
}

export interface FormulaItem {
  id: string;
  name: string;
  latex: string;
  description: string;
  variables: { symbol: string; explanation: string }[];
  sourceRef: string;
  workedExample?: string;
}

export interface MockExamQuestion {
  id: string;
  type: "multiple-choice" | "worked-calculation" | "conceptual";
  chapterNumber: number;
  chapterSlug: string;
  chapterTitle: string;
  question: string;
  options?: string[];
  correctOptionIndex?: number;
  sourceRef: string;
  solutionExplanation: string;
  marks: number;
}

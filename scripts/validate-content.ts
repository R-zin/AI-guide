import { chapters } from "../content/chapters";
import { glossaryItems } from "../content/glossary";
import { formulaItems } from "../content/formulas";

console.log("=== RUNNING CONTENT VALIDATION ===");

let hasErrors = false;

if (!chapters || chapters.length === 0) {
  console.error("FATAL: No chapters defined!");
  process.exit(1);
}

console.log(`Checking ${chapters.length} chapters...`);

chapters.forEach((chapter, index) => {
  const prefix = `[Chapter ${chapter.chapterNumber}: ${chapter.title}]`;

  // 1. Check title & slug
  if (!chapter.slug || !chapter.title) {
    console.error(`${prefix} Missing slug or title!`);
    hasErrors = true;
  }

  // 2. Check source range / reference
  if (!chapter.sourceRange || !chapter.sourceFile) {
    console.error(`${prefix} Missing source range or source file!`);
    hasErrors = true;
  }

  // 3. Check learning objectives
  if (!chapter.learningObjectives || chapter.learningObjectives.length === 0) {
    console.error(`${prefix} Lacks learning objectives!`);
    hasErrors = true;
  } else if (chapter.learningObjectives.length < 3) {
    console.warn(`${prefix} Has fewer than 3 learning objectives (${chapter.learningObjectives.length}).`);
  }

  // 4. Check key definitions
  if (!chapter.keyDefinitions || chapter.keyDefinitions.length === 0) {
    console.error(`${prefix} Lacks key definitions!`);
    hasErrors = true;
  }

  // 5. Check sections & source references on every section
  if (!chapter.sections || chapter.sections.length === 0) {
    console.error(`${prefix} Has no sections!`);
    hasErrors = true;
  } else {
    chapter.sections.forEach((section, sIdx) => {
      if (!section.sourceRef || section.sourceRef.trim() === "") {
        console.error(`${prefix} Section "${section.heading}" (index ${sIdx}) is missing a source reference!`);
        hasErrors = true;
      }
    });
  }

  // 6. Check at least one solved example with steps and working
  if (!chapter.solvedExamples || chapter.solvedExamples.length < 1) {
    console.error(`${prefix} Must have at least one solved example! Found: ${chapter.solvedExamples?.length || 0}`);
    hasErrors = true;
  } else {
    chapter.solvedExamples.forEach((ex, exIdx) => {
      if (!ex.sourceRef) {
        console.error(`${prefix} Solved example ${exIdx + 1} "${ex.title}" is missing source reference!`);
        hasErrors = true;
      }
      if (!ex.steps || ex.steps.length === 0) {
        console.error(`${prefix} Solved example ${exIdx + 1} "${ex.title}" has no working steps!`);
        hasErrors = true;
      }
      if (!ex.finalAnswer) {
        console.error(`${prefix} Solved example ${exIdx + 1} "${ex.title}" has no final answer!`);
        hasErrors = true;
      }
    });
  }

  // 7. Check at least three practice questions with solutions
  if (!chapter.practiceQuestions || chapter.practiceQuestions.length < 3) {
    console.error(`${prefix} Must have at least 3 practice questions! Found: ${chapter.practiceQuestions?.length || 0}`);
    hasErrors = true;
  } else {
    chapter.practiceQuestions.forEach((pq, qIdx) => {
      if (!pq.sourceRef) {
        console.error(`${prefix} Practice question ${qIdx + 1} is missing source reference!`);
        hasErrors = true;
      }
      if (!pq.solutionSteps || pq.solutionSteps.length === 0) {
        console.error(`${prefix} Practice question ${qIdx + 1} is missing solution steps!`);
        hasErrors = true;
      }
      if (!pq.finalAnswer) {
        console.error(`${prefix} Practice question ${qIdx + 1} is missing final answer!`);
        hasErrors = true;
      }
      if (!["Easy", "Medium", "Hard"].includes(pq.difficulty)) {
        console.error(`${prefix} Practice question ${qIdx + 1} has invalid difficulty tag "${pq.difficulty}"!`);
        hasErrors = true;
      }
    });
  }

  // 8. Check key takeaways
  if (!chapter.keyTakeaways || chapter.keyTakeaways.length === 0) {
    console.error(`${prefix} Lacks key takeaways!`);
    hasErrors = true;
  }
});

// Check glossary
if (!glossaryItems || glossaryItems.length < 10) {
  console.error(`Glossary should contain at least 10 entries! Found: ${glossaryItems?.length || 0}`);
  hasErrors = true;
}

// Check formulas
if (!formulaItems || formulaItems.length < 5) {
  console.error(`Formulas sheet should contain key KaTeX formulas! Found: ${formulaItems?.length || 0}`);
  hasErrors = true;
}

if (hasErrors) {
  console.error("\n[VALIDATION FAILED] Content checks failed with errors. See logs above.");
  process.exit(1);
} else {
  console.log("\n[VALIDATION PASSED] All 5 chapters, sections, solved examples, practice questions, and formulas validated successfully!\n");
  process.exit(0);
}

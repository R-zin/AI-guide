import React from "react";
import { notFound } from "next/navigation";
import { chapters, getChapterBySlug, getAllChapterSlugs } from "../../../content/chapters";
import { CopyHeading } from "../../../components/CopyHeading";
import { TableOfContents } from "../../../components/TableOfContents";
import { DefinitionBox } from "../../../components/DefinitionBox";
import { NoteBox } from "../../../components/NoteBox";
import { DiagramViewer } from "../../../components/DiagramViewer";
import { SolvedExampleCard } from "../../../components/SolvedExampleCard";
import { PracticeQuestionCard } from "../../../components/PracticeQuestionCard";
import { KeyTakeawaysBox } from "../../../components/KeyTakeawaysBox";
import { MarkChapterButton } from "../../../components/MarkChapterButton";
import { FormattedText } from "../../../components/MathRenderer";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";

export function generateStaticParams() {
  return getAllChapterSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const chapter = getChapterBySlug(params.slug);
  if (!chapter) return { title: "Chapter Not Found" };
  return {
    title: `Chapter ${chapter.chapterNumber}: ${chapter.title} | AI Study Guide`,
    description: chapter.shortDescription,
  };
}

export default function ChapterPage({ params }: { params: { slug: string } }) {
  const chapter = getChapterBySlug(params.slug);
  if (!chapter) {
    notFound();
  }

  const currentIndex = chapters.findIndex((ch) => ch.slug === chapter.slug);
  const prevChapter = currentIndex > 0 ? chapters[currentIndex - 1] : null;
  const nextChapter = currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : null;

  // Build TOC items
  const tocItems = [
    { id: "learning-objectives", title: "Learning Objectives" },
    { id: "key-definitions", title: "Key Definitions" },
    ...chapter.sections.map((sec) => ({
      id: sec.id,
      title: sec.heading,
    })),
    { id: "solved-examples", title: "Worked Examples" },
    { id: "practice-questions", title: "Practice Questions" },
    { id: "key-takeaways", title: "Key Takeaways" },
  ];

  return (
    <article className="prose-readable">
      {/* Chapter Breadcrumbs & Header */}
      <nav aria-label="Breadcrumb" className="font-mono text-xs text-gray-dark dark:text-gray-mid mb-4 flex items-center gap-2">
        <Link href="/" className="hover:underline text-black dark:text-white">Home</Link>
        <span>/</span>
        <span className="uppercase">Chapters</span>
        <span>/</span>
        <span className="text-black dark:text-white font-bold">Ch {chapter.chapterNumber}</span>
      </nav>

      <header className="border-b border-black dark:border-white pb-6 mb-8">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="font-mono text-xs font-bold px-2 py-0.5 bg-black dark:bg-white text-white dark:text-black uppercase">
            Chapter {chapter.chapterNumber}
          </span>
          <div className="flex items-center gap-3 font-mono text-xs text-gray-dark dark:text-gray-mid">
            <span className="flex items-center gap-1">
              <Clock size={13} /> {chapter.estimatedReadTime}
            </span>
            <span className="px-1.5 py-0.5 bg-gray-light dark:bg-gray-dark border border-black dark:border-white text-black dark:text-white">
              Source: {chapter.sourceRange}
            </span>
          </div>
        </div>

        <h1 className="text-2xl md:text-4xl font-bold font-sans text-black dark:text-white tracking-tight mb-3">
          {chapter.title}
        </h1>
        <p className="font-sans text-sm md:text-base text-gray-dark dark:text-gray-light leading-relaxed">
          {chapter.shortDescription}
        </p>
      </header>

      {/* Auto-generated Table of Contents */}
      <TableOfContents items={tocItems} />

      {/* Learning Objectives */}
      <section className="my-10 p-5 border border-black dark:border-white bg-white dark:bg-black">
        <CopyHeading id="learning-objectives" level={2} className="!mt-0 border-none">
          Learning Objectives
        </CopyHeading>
        <ul className="space-y-2 mt-4 text-xs md:text-sm font-sans list-none">
          {chapter.learningObjectives.map((obj, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <span className="font-mono font-bold text-black dark:text-white select-none">•</span>
              <span className="text-gray-black dark:text-gray-light leading-relaxed">{obj}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Key Definitions Block */}
      <section id="key-definitions">
        <CopyHeading id="key-definitions-heading" level={2}>
          Key Definitions &amp; Terminology
        </CopyHeading>
        <DefinitionBox definitions={chapter.keyDefinitions} />
      </section>

      {/* Chapter Core Sections */}
      <div className="space-y-12 my-10">
        {chapter.sections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-16">
            <CopyHeading id={section.id} level={2} sourceRef={section.sourceRef}>
              {section.heading}
            </CopyHeading>

            {/* Section body paragraphs */}
            <div className="font-sans text-sm md:text-base text-black dark:text-white leading-relaxed space-y-4 my-4">
              <FormattedText text={section.content} />
            </div>

            {/* Comparison Table if present */}
            {section.comparisonTable && (
              <div className="my-6 overflow-x-auto border border-black dark:border-white">
                <table className="w-full text-left text-xs md:text-sm font-sans border-collapse">
                  <thead>
                    <tr className="bg-black dark:bg-white text-white dark:text-black font-mono uppercase">
                      {section.comparisonTable.headers.map((h, hIdx) => (
                        <th key={hIdx} className="p-2.5 border border-black dark:border-white font-bold">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-black dark:divide-white">
                    {section.comparisonTable.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-gray-light/30 dark:hover:bg-gray-black">
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} className="p-2.5 border border-black dark:border-white align-top text-black dark:text-white">
                            <FormattedText text={cell} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Subsections if present */}
            {section.subsections && (
              <div className="space-y-6 my-6 pl-4 border-l-2 border-black dark:border-l-white">
                {section.subsections.map((sub) => (
                  <div key={sub.id} id={sub.id}>
                    <CopyHeading id={sub.id} level={3} sourceRef={sub.sourceRef}>
                      {sub.subheading}
                    </CopyHeading>
                    <div className="font-sans text-xs md:text-sm text-black dark:text-white leading-relaxed space-y-3">
                      <FormattedText text={sub.content} />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Diagrams if present */}
            {section.diagrams && (
              <div className="my-6 space-y-6">
                {section.diagrams.map((diag) => (
                  <DiagramViewer key={diag.id} diagram={diag} />
                ))}
              </div>
            )}

            {/* Notes if present */}
            {section.notes && (
              <div className="my-4 space-y-3">
                {section.notes.map((note, nIdx) => (
                  <NoteBox
                    key={nIdx}
                    title={note.title}
                    content={note.content}
                    isDiscrepancy={note.isDiscrepancy}
                    isSupplementary={note.isSupplementary}
                  />
                ))}
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Solved Examples Section */}
      <section id="solved-examples" className="my-14 pt-8 border-t border-black dark:border-white">
        <CopyHeading id="solved-examples-heading" level={2}>
          Solved Examples &amp; Step-by-Step Derivations
        </CopyHeading>
        <p className="text-xs md:text-sm font-sans text-gray-dark dark:text-gray-mid mb-6">
          Every mathematical calculation and logical deduction has been computed step-by-step and independently verified against source slides.
        </p>

        <div className="space-y-8">
          {chapter.solvedExamples.map((example) => (
            <SolvedExampleCard key={example.id} example={example} />
          ))}
        </div>
      </section>

      {/* Practice Questions Section */}
      <section id="practice-questions" className="my-14 pt-8 border-t border-black dark:border-white">
        <CopyHeading id="practice-questions-heading" level={2}>
          Chapter Practice Questions
        </CopyHeading>
        <p className="text-xs md:text-sm font-sans text-gray-dark dark:text-gray-mid mb-6">
          Test your comprehension with questions tagged by difficulty. Click &quot;Show Solution&quot; to review the complete working.
        </p>

        <div className="space-y-6">
          {chapter.practiceQuestions.map((q) => (
            <PracticeQuestionCard key={q.id} question={q} />
          ))}
        </div>
      </section>

      {/* Key Takeaways */}
      <section id="key-takeaways" className="pt-6 border-t border-black dark:border-white">
        <CopyHeading id="key-takeaways-heading" level={2}>
          Key Takeaways
        </CopyHeading>
        <KeyTakeawaysBox takeaways={chapter.keyTakeaways} />
      </section>

      {/* Mark Chapter Understood Interactive Box */}
      <MarkChapterButton slug={chapter.slug} title={chapter.title} />

      {/* Chapter Pagination Navigation */}
      <nav aria-label="Chapter pagination" className="my-12 pt-6 border-t border-black dark:border-white flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
        {prevChapter ? (
          <Link
            href={`/chapters/${prevChapter.slug}`}
            className="p-3 border border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors flex items-center gap-2"
          >
            <ArrowLeft size={14} />
            <div>
              <span className="block text-[10px] text-gray-dark dark:text-gray-mid uppercase">Previous Chapter</span>
              <span className="font-bold">Ch {prevChapter.chapterNumber}: {prevChapter.title}</span>
            </div>
          </Link>
        ) : (
          <div />
        )}

        {nextChapter ? (
          <Link
            href={`/chapters/${nextChapter.slug}`}
            className="p-3 border border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors flex items-center gap-2 text-right ml-auto"
          >
            <div>
              <span className="block text-[10px] text-gray-dark dark:text-gray-mid uppercase">Next Chapter</span>
              <span className="font-bold">Ch {nextChapter.chapterNumber}: {nextChapter.title}</span>
            </div>
            <ArrowRight size={14} />
          </Link>
        ) : (
          <div />
        )}
      </nav>
    </article>
  );
}

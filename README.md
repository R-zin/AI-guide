# Artificial Intelligence: Knowledge Representation & Reasoning Study Guide

An autonomous, static study guide website built with Next.js (App Router), TypeScript, Tailwind CSS, and KaTeX for the subject **Artificial Intelligence** (covering Expert Systems, First-Order Predicate Logic, Resolution Refutation, and Mamdani & Sugeno Fuzzy Inference Systems).

100% of the course content, definitions, formulas, worked examples, practice problems, and architectural diagrams are derived directly from the source curriculum files in `/materials`.

---

## 🚀 Live Demo & Tech Stack
- **Framework**: Next.js 14 (App Router, Static HTML Export `output: 'export'`)
- **Language**: TypeScript (Strict mode)
- **Styling**: Tailwind CSS (Minimalist, strictly #000000, #FFFFFF, and monochrome grays, zero border radius)
- **Math Engine**: KaTeX 0.16.11 (server-rendered & client-rehydrated LaTeX formulas)
- **Icons**: Lucide React
- **Validation**: Custom TypeScript AST validator (`scripts/validate-content.ts`)

---

## 📚 Curriculum Structure & Content Coverage

The study guide is structured into 5 cohesive chapters mirroring the source materials:

1. **Chapter 1: Expert Systems Fundamentals & Architecture**
   - *Source*: `Expert System.pdf` (Pages 1–17)
   - *Key Topics*: Equation ($IE + KB = ES$), early systems (DENDRAL, MYCIN), modern variants (SHINE, Siri), components, design roles, WHY/HOW explanation facilities, comparison tables, applications & limitations.
   - *Diagrams*: Expert System Components (`/diagrams/es-components.svg`), Design Roles (`/diagrams/es-architecture-roles.svg`).

2. **Chapter 2: First-Order Predicate Logic & Knowledge Representation**
   - *Source*: `2.4 Predicate logic - Copy.pptx` (Slides 1–29)
   - *Key Topics*: Limitations of Propositional Logic, FOL ontology (objects, relations, total functions), formal semantics and domain elements (Russell & Norvig Figure 8.2), syntax, quantifiers ($\forall, \exists$), quantifier duality (De Morgan's laws), translating natural language.
   - *Diagrams*: First-Order Logic World Model (`/diagrams/fol-model-domain.svg`).

3. **Chapter 3: Inference, Resolution Refutation & Logic Programming**
   - *Source*: `2.4 Predicate logic - Copy.pptx` (Slides 30–70)
   - *Key Topics*: Propositional inference rules (Modus Ponens, Modus Tollens), quantifier rules ($\forall$-elim, $\exists$-elim with fresh constants), worked natural deduction proof (Richard criminal problem), 4-step CNF conversion, resolution refutation ($\square$ derivation), 9-step conversion to clause form, Skolem constants vs functions, automated theorem proving, Horn clauses and Prolog.
   - *Diagrams*: Resolution Refutation Tree (`/diagrams/resolution-refutation-tree.svg`).

4. **Chapter 4: Mamdani Fuzzy Inference Systems**
   - *Source*: `3.5 Fuzzy Inference - Mamdani Style.pptx` (Slides 1–30)
   - *Key Topics*: Crisp vs fuzzy sets, linguistic variables, membership function features (support, core, $\alpha$-cut, height), piecewise formulas for Triangular ($tri[a,b,c]$) and Trapezoidal ($trap[a,b,c,d]$) MFs, 4-step Mamdani process: fuzzification (Project Risk case study), rule evaluation (min/max), clipping vs scaling, consequent aggregation, Centroid / Center of Gravity (COG) defuzzification ($67.4\%$).
   - *Diagrams*: Mamdani 4-Step Process (`/diagrams/mamdani-4step-flow.svg`), MF Geometries (`/diagrams/membership-function-shapes.svg`), COG Sampling (`/diagrams/mamdani-cog-defuzzification.svg`).

5. **Chapter 5: Sugeno Fuzzy Inference Systems & Controller Design**
   - *Source*: `3.6- Fuzzy Inference - Sugeno Style.pptx` (Slides 1–9) & `Sugeno_Fan_Speed_Solution.pptx` (Slides 1–8)
   - *Key Topics*: Rationale for Sugeno method, fuzzy singletons, zero-order and first-order models, weighted average defuzzification ($WA = \frac{\sum w_i k_i}{\sum w_i}$), Mamdani vs Sugeno comparison, end-to-end worked case study: Fan Speed Controller ($T = 31^\circ\text{C}, H = 70\% \rightarrow z = 67.78\%$).
   - *Diagrams*: Sugeno Singleton Inference (`/diagrams/sugeno-inference-process.svg`), Fan Speed Controller Fuzzification & Solution (`/diagrams/sugeno-fan-speed-controller.svg`).

---

## 🛠️ Local Development & Setup

### Prerequisites
- Node.js 18+ (Node 20 recommended)
- npm 9+

### Installation
```bash
# Clone the repository
git clone https://github.com/<username>/ai-study-guide.git
cd ai-study-guide

# Install dependencies
npm install

# Run automated content integrity validation
npm run validate

# Start development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Content Validation & Quality Assurance

This repository includes a strict build-time validation script located at `scripts/validate-content.ts`.

It automatically ensures:
- Every chapter contains explicit learning objectives (minimum 3).
- Every section contains explicit slide or page citations (`[Slide N]` or `[PDF p.N]`).
- Every chapter contains at least one fully worked, stepped numerical or logical example with derivation.
- Every chapter contains at least three practice questions with solutions and difficulty tags (`Easy`, `Medium`, `Hard`).
- All formulas and glossary definitions are syntactically valid.

Run the validator manually anytime:
```bash
npm run validate
```

---

## 📝 How to Add or Edit Content

All course content is isolated inside the `/content` directory as strongly typed TypeScript files:

- **Add/Edit a Chapter**:
  Edit or create a file in `content/chapters/chapterN.ts`. Update the chapter object adhering to the `ChapterData` interface in `content/types.ts`. Register the chapter in `content/chapters/index.ts`.
- **Add a Glossary Term**:
  Add an entry to `content/glossary.ts` specifying `term`, `definition`, `category`, and `sourceRef`.
- **Add a Mathematical Formula**:
  Add an entry to `content/formulas.ts` providing the LaTeX string, variable definitions, and source reference.
- **Add Mock Exam Questions**:
  Update `content/mock-exam.ts` with question prompts, multiple-choice options, or step-by-step rubrics.

After modifying content, run `npm run validate` to confirm schema integrity.

---

## 🚢 Deployment to GitHub Pages

The repository contains an automated GitHub Actions deployment workflow at `.github/workflows/deploy.yml`.

### Deployment Steps:
1. Push your changes to the `main` branch of your GitHub repository:
   ```bash
   git add .
   git commit -m "Deploy static AI study guide"
   git push origin main
   ```
2. In your GitHub repository, navigate to **Settings** → **Pages**.
3. Under **Build and deployment** → **Source**, select **GitHub Actions**.
4. The workflow will automatically trigger, install dependencies, run content validation, compile static HTML export into `out/`, and publish to your GitHub Pages URL (`https://<username>.github.io/<REPO_NAME>/`).

### Base Path Handling
`next.config.mjs` automatically configures `basePath` and `assetPrefix` to `/${REPO_NAME}` when building inside `GITHUB_ACTIONS`, and leaves them empty for local testing or custom root domains.

---

## 📄 License
Educational use. Source materials derived from official university lecture courses in Artificial Intelligence.

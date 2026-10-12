import { ChapterData } from "../types";

export const chapter3: ChapterData = {
  slug: "inference-and-resolution",
  chapterNumber: 3,
  title: "Inference, Resolution Refutation & Logic Programming",
  shortDescription: "Propositional and first-order inference rules, CNF conversion, resolution refutation proofs, Skolemization, and Prolog Horn clauses.",
  sourceFile: "2.4 Predicate logic - Copy.pptx",
  sourceRange: "Slides 30–70",
  estimatedReadTime: "25 min",
  learningObjectives: [
    "Apply propositional inference rules: Modus Ponens, Modus Tollens, And-Introduction/Elimination, and Or-Introduction.",
    "Utilize first-order quantifier inference rules: Universal Elimination (∀-Elim), Universal Introduction (∀-Intro), Existential Introduction (∃-Intro), and Existential Elimination (∃-Elim).",
    "Trace and construct natural deduction proofs in First-Order Logic (e.g., proving Richard is a criminal).",
    "Define literals, clauses, and Conjunctive Normal Form (CNF), and execute the 4-step CNF conversion procedure.",
    "Perform Resolution Refutation in propositional logic by negating the query and deriving the empty clause (□).",
    "Explain the soundness and completeness of resolution in FOL compared to forward chaining.",
    "Execute the canonical 9-step conversion of First-Order sentences into Clause Form.",
    "Differentiate Skolem constants from Skolem functions and perform Skolemization correctly.",
    "Formulate Horn clauses and understand their execution via SLD resolution in Prolog (Facts, Rules, Queries)."
  ],
  keyDefinitions: [
    {
      term: "Modus Ponens (→-Elimination)",
      definition: "Inference rule stating that from P → Q and P, one can infer Q.",
      sourceRef: "Slide 30"
    },
    {
      term: "Conjunctive Normal Form (CNF)",
      definition: "A standardized representation of logical formulas structured as a conjunction (AND, ∧) of clauses, where each clause is a disjunction (OR, ∨) of literals.",
      sourceRef: "Slide 43"
    },
    {
      term: "Resolution Rule",
      definition: "Inference rule that resolves two clauses containing complementary literals: from (A ∨ L) and (B ∨ ¬L), infer the resolvent (A ∨ B).",
      sourceRef: "Slide 47"
    },
    {
      term: "Empty Clause (□)",
      definition: "A clause with no literals, representing an inescapable logical contradiction. Deriving □ in resolution refutation proves the query.",
      sourceRef: "Slide 47, 49"
    },
    {
      term: "Skolem Function",
      definition: "A generated function f(x) replacing an existentially quantified variable y whose scope lies within a universal quantifier ∀x, indicating that the choice of y depends on x.",
      sourceRef: "Slide 60–61"
    },
    {
      term: "Horn Clause",
      definition: "A clause containing at most one positive (unnegated) literal. Forms the mathematical foundation of Prolog logic programs.",
      sourceRef: "Slide 65, 69"
    }
  ],
  sections: [
    {
      id: "inference-rules",
      heading: "1. Propositional and First-Order Quantifier Inference Rules",
      sourceRef: "Slide 30–36",
      content: `Logical inference allows an agent to deduce new valid sentences from an established Knowledge Base (KB) [Slide 30].

### Propositional Inference Rules [Slide 30]
- **Modus Ponens (→-Elimination)**:
  $$\\frac{P \\rightarrow Q, \\quad P}{Q}$$
  *Example*: $Student(Joe) \\rightarrow Copies(Joe)$ and $Student(Joe) \\Rightarrow Copies(Joe)$ [Slide 30].
- **Modus Tollens**:
  $$\\frac{P \\rightarrow Q, \\quad \\neg Q}{\\neg P}$$
  *Example*: $Dog(x) \\rightarrow Barks(x)$ and $\\neg Barks(x) \\Rightarrow \\neg Dog(x)$ [Slide 30].
- **And-Introduction / Elimination**:
  From $P$ and $Q$, infer $P \\land Q$. From $P \\land Q$, infer $P$ (or $Q$) [Slide 30].
- **Or-Introduction**:
  From $P$, infer $P \\lor Q$ for any proposition $Q$ [Slide 30].

### First-Order Quantifier Inference Rules [Slide 31–35]
1. **Universal Elimination (∀-Elim / Instantiation)** [Slide 31, 32]:
   $$\\frac{\\forall x P(x)}{P(a)}$$
   For any constant symbol $a$. We replace universally quantified variable $x$ with any ground term.
2. **Universal Introduction (∀-Intro / Generalization)** [Slide 31, 33]:
   If sentence $P(a)$ has been proved for an arbitrary, unconstrained constant $a$, infer $\\forall x P(x)$.
3. **Existential Introduction (∃-Intro)** [Slide 31, 34]:
   $$\\frac{P(a)}{\\exists x P(x)}$$
   If property $P$ holds for a specific known object $a$, then there exists at least one object satisfying $P$.
4. **Existential Elimination (∃-Elim / Instantiation with Fresh Constant)** [Slide 31, 35]:
   $$\\frac{\\exists x P(x)}{P(c)}$$
   Where $c$ is a **fresh constant symbol** that has never previously appeared anywhere in the knowledge base or proof [Slide 35].`
    },
    {
      id: "worked-proof-richard",
      heading: "2. Worked Step-by-Step Proof: The Richard Problem",
      sourceRef: "Slide 37–41",
      content: `The slide presentation features a landmark natural deduction problem [Slide 37]:
- **Premise 1**: It is a crime for a student to copy music [Slide 37]:
  $$\\forall x \\forall y (Student(x) \\land Music(y) \\land Copies(x, y) \\rightarrow Criminal(x))$$ [Slide 38]
- **Premise 2**: Richard is a student:
  $$Student(Richard)$$ [Slide 38]
- **Premise 3**: Every student copies some music:
  $$\\forall x (Student(x) \\rightarrow \\exists y (Music(y) \\land Copies(x, y)))$$ [Slide 38]
- **Goal**: Prove $Criminal(Richard)$ [Slide 37].

### Deductive Proof Steps [Slide 39–41]:
- **Step 1**: Apply $\\forall$-Elimination on Premise 3, substituting $x = Richard$:
  $$Student(Richard) \\rightarrow \\exists y (Music(y) \\land Copies(Richard, y))$$ [Slide 39]
- **Step 2**: Apply Modus Ponens using Premise 2 and Step 1:
  $$\\exists y (Music(y) \\land Copies(Richard, y))$$ [Slide 39]
- **Step 3**: Apply Existential Elimination on Step 2. Introduce a fresh constant, $Song1$, that hasn't appeared anywhere else in the proof:
  $$Music(Song1) \\land Copies(Richard, Song1)$$ [Slide 40]
- **Step 4**: Apply $\\forall$-Elimination twice on Premise 1, substituting $x = Richard$ and $y = Song1$:
  $$Student(Richard) \\land Music(Song1) \\land Copies(Richard, Song1) \\rightarrow Criminal(Richard)$$ [Slide 40]
- **Step 5**: Apply Conjunction Introduction to combine Premise 2 ($Student(Richard)$) with Step 3 ($Music(Song1) \\land Copies(Richard, Song1)$):
  $$Student(Richard) \\land Music(Song1) \\land Copies(Richard, Song1)$$ [Slide 40]
- **Step 6**: Apply Modus Ponens using Step 4 (implication) and Step 5 (antecedent):
  $$Criminal(Richard)$$ [Slide 41]
  *Conclusion: Therefore, Richard is a criminal.*`
    },
    {
      id: "cnf-conversion",
      heading: "3. Conjunctive Normal Form (CNF) & 4-Step Conversion",
      sourceRef: "Slide 42–46",
      content: `In automated reasoning, sentences must be transformed into standard clause form [Slide 42]:
- **Literal**: A basic proposition or its negation ($P, Q, \\neg P, \\neg Q$) [Slide 42].
- **Clause**: A disjunction (OR, $\\lor$) of literals (e.g., $P \\lor \\neg Q \\lor R$) [Slide 42].
- **Conjunctive Normal Form (CNF)**: A conjunction (AND, $\\land$) of clauses:
  $$\\text{CNF} = \\bigwedge_{i} \\left( \\bigvee_{j} L_{i,j} \\right)$$ [Slide 43].

### 4-Step Conversion to CNF [Slide 44]
1. **Eliminate $\\leftrightarrow$ and $\\rightarrow$**:
   - Replace $P \\leftrightarrow Q$ with $(P \\rightarrow Q) \\land (Q \\rightarrow P)$.
   - Replace $P \\rightarrow Q$ with $\\neg P \\lor Q$ [Slide 44].
2. **Push $\\neg$ Inward**:
   - Apply De Morgan's laws: $\\neg (P \\land Q) \\equiv \\neg P \\lor \\neg Q$ and $\\neg (P \\lor Q) \\equiv \\neg P \\land \\neg Q$.
   - Eliminate double negations: $\\neg \\neg P \\equiv P$ [Slide 44].
3. **Distribute $\\lor$ over $\\land$**:
   - Apply: $P \\lor (Q \\land R) \\equiv (P \\lor Q) \\land (P \\lor R)$ [Slide 44].
4. **Collect as Clauses**:
   - Express as a set of disjunctive clauses joined by conjunction [Slide 44].`
    },
    {
      id: "resolution-refutation",
      heading: "4. Proof by Resolution in Propositional Logic",
      sourceRef: "Slide 47–53",
      content: `To prove that a sentence $\\alpha$ logically follows from a Knowledge Base ($KB \\models \\alpha$) via resolution [Slide 47]:
1. Add the **negation of the query** ($\\neg \\alpha$) to the Knowledge Base: $KB \\cup \\{\\neg \\alpha\\}$ [Slide 47].
2. Convert all sentences to clause form.
3. Apply the **Resolution Rule** repeatedly to pairs of clauses with complementary literals:
   $$\\frac{A \\lor L, \\quad B \\lor \\neg L}{A \\lor B}$$ [Slide 47].
4. If this process derives the **empty clause ($\\square$)**, an inescapable contradiction has been reached [Slide 47].
5. Since the KB is assumed consistent, our assumption that $\\neg \\alpha$ was true must be false, logically proving that $\\alpha$ is true [Slide 47, 48].`,
      diagrams: [
        {
          id: "resolution-refutation-tree",
          title: "Resolution Refutation Tree Deriving Empty Clause",
          caption: "Figure 3.1: Resolution tree resolving clauses (¬P ∨ ¬Q ∨ R), ¬R, P, (¬T ∨ Q), and T to derive contradiction □.",
          sourceRef: "Slide 51",
          svgPath: "/diagrams/resolution-refutation-tree.svg",
          originalPath: "/diagrams/resolution-refutation-tree-original.png"
        }
      ]
    },
    {
      id: "fol-clause-form-and-skolemization",
      heading: "5. Resolution in FOL & the 9-Step Conversion to Clause Form",
      sourceRef: "Slide 54–61",
      content: `Resolution is a **complete and sound** method for automated theorem proving in First-Order Logic, whereas forward chaining is only complete for Horn clauses [Slide 54]. This allows resolution to prove any valid logical statement [Slide 54].

### The 9-Step Conversion to Clause Form [Slide 56–58]
1. **Eliminate Implications**: Replace $P \\rightarrow Q$ with $\\neg P \\lor Q$ [Slide 56, 58].
2. **Move Negation Inward**: Apply generalized De Morgan's laws to push $\\neg$ immediately before predicates [Slide 56, 58].
3. **Standardize Variables Apart**: Ensure that each quantifier binds a unique variable name (e.g., rename $\\forall x P(x) \\lor \\forall x Q(x)$ to $\\forall x P(x) \\lor \\forall y Q(y)$) [Slide 56, 58].
4. **Move Quantifiers to Left (Prenex Form)**: Pull all quantifiers to the front without altering relative order [Slide 56, 58].
5. **Skolemization (Eliminate $\\exists$)**:
   - If an existential quantifier is **not** inside the scope of any universal quantifier, replace the variable with a **Skolem Constant** (a fresh named entity) [Slide 60, 61].
   - If an existential quantifier lies **within the scope of universal quantifiers** (e.g., $\\forall x \\exists y Loves(x, y)$), replace $y$ with a **Skolem Function** $f(x)$:
     $$\\forall x Loves(x, f(x))$$ [Slide 60, 61].
     *Intuition*: The person loved by $x$ depends on who $x$ is (e.g., John loves Mary, Peter loves his cat) [Slide 60].
   - *Example: Everyone has a mother* [Slide 61]:
     $$\\forall x \\exists y Mother(y, x) \\longrightarrow \\forall x Mother(m(x), x)$$
     Where $m(x)$ is the Skolem function denoting "the mother of $x$" [Slide 61].
6. **Drop Universal Quantifiers**: All remaining variables are implicitly universally quantified [Slide 57, 58].
7. **Distribute $\\lor$ over $\\land$**: Obtain Conjunctive Normal Form [Slide 57, 58].
8. **Represent as a Set of Clauses**: Separate clauses into sets of literals [Slide 57, 58].
9. **Rename Variables Consistently**: Standardize variables apart across separate clauses [Slide 57, 58].`
    },
    {
      id: "prolog-and-horn-clauses",
      heading: "6. Applications of Resolution, Prolog & Horn Clauses",
      sourceRef: "Slide 62–70",
      content: `### Applications of Resolution [Slide 62–64]
1. **Automated Theorem Proving**: Backbone of modern provers like Prover9 and Vampire [Slide 62].
2. **AI Knowledge Representation**: Inference engine in expert systems to deduce diseases from observed symptoms [Slide 63].
3. **Logic Programming**: Execution engine of Prolog using SLD resolution [Slide 64].

### Horn Clauses and Prolog Syntax [Slide 65, 69]
A Horn clause contains at most one positive literal [Slide 65]:
$$\\text{If } (C_1 \\land C_2 \\land \\dots \\land C_n) \\rightarrow Head$$
In Prolog syntax, this is written with the neck operator (\`:=\`):
$$\\text{Head} \\text{ :- } \\text{Body}_1, \\text{Body}_2, \\dots, \\text{Body}_n$$ [Slide 65].

The slide material tabulates the three canonical Horn clause forms [Slide 69]:

| Horn Clause Form | Logical Meaning | Prolog Syntax | Example |
| :--- | :--- | :--- | :--- |
| **Fact** | Conclusion is always true (no conditions) [Slide 69] | \`head.\` | \`parent(ravi, meera).\` [Slide 69] |
| **Rule** | Conclusion is true IF conditions hold [Slide 69] | \`head :- body.\` | \`grandparent(X,Y) :- parent(X,Z), parent(Z,Y).\` [Slide 69] |
| **Goal / Query** | Asking can this be proven? (no head) [Slide 69] | \`?- body.\` | \`?- grandparent(ravi, kiran).\` [Slide 69] |`
    }
  ],
  solvedExamples: [
    {
      id: "ex-3-1",
      title: "Converting Formula to Conjunctive Normal Form (CNF)",
      difficulty: "Medium",
      sourceRef: "Slide 44, 46",
      problemStatement: "Convert the logical formula (P ↔ Q) ∨ R into Conjunctive Normal Form (CNF) following the step-by-step conversion algorithm from Slide 44 [Slide 46].",
      steps: [
        {
          stepNumber: 1,
          title: "Eliminate the Biconditional Operator (↔)",
          explanation: "A biconditional (P ↔ Q) is equivalent to (P → Q) ∧ (Q → P). Substituting implication elimination gives (¬P ∨ Q) ∧ (¬Q ∨ P).",
          formulaOrCode: "( (¬P ∨ Q) ∧ (¬Q ∨ P) ) ∨ R"
        },
        {
          stepNumber: 2,
          title: "Push Negations Inward",
          explanation: "Negations are already directly attached to atomic propositions ¬P and ¬Q. No further inward movement needed.",
          formulaOrCode: "Already at literals"
        },
        {
          stepNumber: 3,
          title: "Distribute OR (∨) over AND (∧)",
          explanation: "Apply the distributive law (A ∧ B) ∨ C ≡ (A ∨ C) ∧ (B ∨ C) where A = (¬P ∨ Q), B = (¬Q ∨ P), and C = R.",
          formulaOrCode: "(¬P ∨ Q ∨ R) ∧ (¬Q ∨ P ∨ R)"
        },
        {
          stepNumber: 4,
          title: "Extract Distinct Clauses",
          explanation: "The formula is now an AND of OR clauses. We extract the two clauses forming the knowledge base.",
          formulaOrCode: "Clause 1: {¬P, Q, R}\nClause 2: {¬Q, P, R}"
        }
      ],
      finalAnswer: "(¬P ∨ Q ∨ R) ∧ (¬Q ∨ P ∨ R), yielding clauses {¬P, Q, R} and {¬Q, P, R} [Slide 46].",
      verificationNotes: "Matches the exercise on Slide 46."
    },
    {
      id: "ex-3-2",
      title: "Resolution Refutation: Proving Socrates is Mortal",
      difficulty: "Medium",
      sourceRef: "Slide 55–59",
      problemStatement: "Given the premises:\n1. All humans are mortal: ∀x (Human(x) → Mortal(x))\n2. Socrates is a human: Human(Socrates)\nProve that Socrates is mortal using Resolution Refutation [Slide 55–59].",
      steps: [
        {
          stepNumber: 1,
          title: "Negate the Goal and Form Clause Set",
          explanation: "Goal is Mortal(Socrates). Add its negation ¬Mortal(Socrates) as clause C3 [Slide 56–57].",
          formulaOrCode: "Premise 1 clause form: C1 = {¬Human(x) ∨ Mortal(x)}\nPremise 2 clause form: C2 = {Human(Socrates)}\nNegated Goal: C3 = {¬Mortal(Socrates)}"
        },
        {
          stepNumber: 2,
          title: "First Resolution Step (Resolve C1 and C3)",
          explanation: "Resolve C1 with C3 on the complementary literals Mortal(x) and ¬Mortal(Socrates) using unifier θ = {x / Socrates} [Slide 59].",
          formulaOrCode: "Resolvent C4 = {¬Human(Socrates)}"
        },
        {
          stepNumber: 3,
          title: "Second Resolution Step (Resolve C4 and C2)",
          explanation: "Resolve C4 {¬Human(Socrates)} with C2 {Human(Socrates)}. The literals are complementary [Slide 59].",
          formulaOrCode: "Resolvent = □ (Empty Clause)"
        },
        {
          stepNumber: 4,
          title: "Conclude Refutation",
          explanation: "Since the empty clause □ is derived, the negated goal leads to a contradiction. Hence, Mortal(Socrates) is proven [Slide 58, 59].",
          formulaOrCode: "KB ⊨ Mortal(Socrates)"
        }
      ],
      finalAnswer: "The empty clause □ is derived in 2 resolution steps, proving Socrates is mortal [Slide 59].",
      verificationNotes: "Directly recomputed and verified against Slide 58 and 59."
    }
  ],
  practiceQuestions: [
    {
      id: "pq-3-1",
      chapterSlug: "inference-and-resolution",
      chapterNumber: 3,
      chapterTitle: "Inference, Resolution Refutation & Logic Programming",
      question: "Given the propositional Knowledge Base KB = { (P ∨ Q), (¬P ∨ R), (¬Q) }. Use resolution refutation to prove R [Slide 49].",
      difficulty: "Easy",
      sourceRef: "Slide 49",
      hints: [
        "First negate the query: add ¬R to the clause set.",
        "Resolve pairs of clauses containing complementary literals."
      ],
      solutionSteps: [
        "Step 1: Clause set with negated query: C1 = {P ∨ Q}, C2 = {¬P ∨ R}, C3 = {¬Q}, C4 = {¬R} [Slide 49].",
        "Step 2: Resolve C2 (¬P ∨ R) with C4 (¬R) on literal R: derives C5 = {¬P} [Slide 49].",
        "Step 3: Resolve C1 (P ∨ Q) with C3 (¬Q) on literal Q: derives C6 = {P} [Slide 49].",
        "Step 4: Resolve C5 (¬P) with C6 (P): derives □ (empty clause / contradiction) [Slide 49]."
      ],
      finalAnswer: "Derives empty clause □ in 3 steps: (C2, C4) → ¬P; (C1, C3) → P; (¬P, P) → □. Therefore R is entailed [Slide 49]."
    },
    {
      id: "pq-3-2",
      chapterSlug: "inference-and-resolution",
      chapterNumber: 3,
      chapterTitle: "Inference, Resolution Refutation & Logic Programming",
      question: "Explain the difference between a Skolem Constant and a Skolem Function. Why is a Skolem constant insufficient when Skolemizing the sentence 'Everyone has a mother' (∀x ∃y Mother(y, x))? [Slide 60–61]",
      difficulty: "Medium",
      sourceRef: "Slide 60–61",
      hints: [
        "Does the existentially quantified object depend on the universally quantified variable?",
        "If you use a constant M, what does that imply about all mothers in the world?"
      ],
      solutionSteps: [
        "Step 1: A Skolem constant is a fixed individual entity (same for everyone) introduced when ∃ is not in the scope of any ∀ [Slide 61].",
        "Step 2: A Skolem function is a function f(x) that maps each individual x to their specific entity, required when ∃ is within the scope of ∀x [Slide 60, 61].",
        "Step 3: In ∀x ∃y Mother(y, x), replacing y with a constant M would yield ∀x Mother(M, x), asserting that one single individual M is the mother of every single person in the world. Instead, y must be replaced with a Skolem function m(x), yielding ∀x Mother(m(x), x), where m(x) returns the distinct mother of x [Slide 61]."
      ],
      finalAnswer: "A Skolem constant denotes one fixed entity for all individuals, whereas a Skolem function denotes a dependent entity. A constant would absurdly declare one universal mother for all people; a function m(x) correctly allows a different mother for each person [Slide 61]."
    },
    {
      id: "pq-3-3",
      chapterSlug: "inference-and-resolution",
      chapterNumber: 3,
      chapterTitle: "Inference, Resolution Refutation & Logic Programming",
      question: "Write down the Prolog representation (Fact, Rule, Query) for family relationships where Ravi is the parent of Meera, and Meera is the parent of Kiran. Show how a grandparent rule is defined and how a goal query is answered [Slide 69].",
      difficulty: "Hard",
      sourceRef: "Slide 69",
      hints: [
        "Look at the Prolog syntax table on Slide 69.",
        "Remember that variables in Prolog start with uppercase letters."
      ],
      solutionSteps: [
        "Step 1: Facts (unconditional truths):\nparent(ravi, meera).\nparent(meera, kiran). [Slide 69]",
        "Step 2: Rule (conditional truth with head and body):\ngrandparent(X, Y) :- parent(X, Z), parent(Z, Y). [Slide 69]",
        "Step 3: Query / Goal:\n?- grandparent(ravi, kiran). [Slide 69]",
        "Step 4: Inference tracing: Prolog resolves parent(ravi, Z) with fact 1 binding Z = meera, then resolves parent(meera, kiran) with fact 2, returning 'true'."
      ],
      finalAnswer: "Facts: parent(ravi, meera). parent(meera, kiran).\nRule: grandparent(X, Y) :- parent(X, Z), parent(Z, Y).\nQuery: ?- grandparent(ravi, kiran). Returns true [Slide 69]."
    }
  ],
  keyTakeaways: [
    "Resolution refutation proves a query by adding its negation to the KB and deriving the empty clause (□).",
    "Converting to CNF requires removing implications, pushing negations inward, and distributing OR over AND.",
    "First-Order Clause Form conversion requires 9 distinct steps including standardization and Skolemization.",
    "Skolem constants replace independent existentials; Skolem functions f(x) replace existentials dependent on universal quantifiers.",
    "Prolog evaluates Horn clauses (facts, rules, queries) using backward chaining SLD resolution."
  ]
};

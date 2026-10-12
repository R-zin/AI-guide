import { ChapterData } from "../types";

export const chapter2: ChapterData = {
  slug: "predicate-logic-foundations",
  chapterNumber: 2,
  title: "First-Order Predicate Logic & Knowledge Representation",
  shortDescription: "Syntax, semantics, models, quantifiers (∀, ∃), quantifier duality, and formal knowledge representation in First-Order Logic.",
  sourceFile: "2.4 Predicate logic - Copy.pptx",
  sourceRange: "Slides 1–29",
  estimatedReadTime: "22 min",
  learningObjectives: [
    "Identify the expressive limitations of Propositional Logic and justify the requirement for First-Order Logic (FOL).",
    "Define the ontological commitments of FOL: objects, properties, relations, and functions.",
    "Interpret formal models of FOL containing non-empty domains, tuples, and total functions.",
    "Master FOL syntax: constants, predicates, functions, variables, connectives, equality, and quantifiers.",
    "Formulate atomic sentences and complex sentences using valid term structures.",
    "Apply the Universal Quantifier (∀) and Existential Quantifier (∃) with their appropriate default connectives (⇒ and ∧).",
    "Utilize Quantifier Duality and generalized De Morgan's laws for quantifiers.",
    "Translate complex natural language assertions into rigorous First-Order Logic representations."
  ],
  keyDefinitions: [
    {
      term: "Domain Element / Object",
      definition: "An entity in the universe of discourse (e.g., people, houses, numbers, crowns). A formal model's domain must be non-empty.",
      sourceRef: "Slide 6, 9"
    },
    {
      term: "Predicate Symbol",
      definition: "A symbol beginning with an uppercase letter that represents a relation or property among objects (e.g., Brother, OnHead, King).",
      sourceRef: "Slide 7, 14"
    },
    {
      term: "Term",
      definition: "A logical expression that refers to an object. Consists of a constant symbol, a variable, or a function symbol applied to terms.",
      sourceRef: "Slide 16"
    },
    {
      term: "Atomic Sentence",
      definition: "A sentence formed from a predicate symbol applied to a list of terms, Predicate(term₁, ..., termₙ), or two terms joined by equality (=).",
      sourceRef: "Slide 16"
    },
    {
      term: "Universal Quantifier (∀)",
      definition: "Quantifier stating that an assertion holds for all objects x in the domain: ∀x P(x). Typically paired with implication (⇒).",
      sourceRef: "Slide 21, 26"
    },
    {
      term: "Existential Quantifier (∃)",
      definition: "Quantifier asserting that a property holds for at least one object x in the domain: ∃x P(x). Typically paired with conjunction (∧).",
      sourceRef: "Slide 22, 26"
    }
  ],
  sections: [
    {
      id: "limitations-of-propositional-logic",
      heading: "1. Limitations of Propositional Logic",
      sourceRef: "Slide 3–4",
      content: `Propositional Logic (PL) possesses a declarative, compositional semantics that is context-independent and unambiguous [Slide 5]. However, PL suffers from severe expressive limitations [Slide 3]:
- Propositional logic only evaluates entire atomic propositions as being either \`true\` or \`false\`.
- It cannot decompose a statement into its constituent objects, properties, or relationships [Slide 3].

**Illustrative Case** [Slide 3]:
Let proposition $P = \\text{Roommate is carrying an umbrella}$.
In propositional logic, we can represent conditional statements such as:
$$\\text{Rain} \\rightarrow P$$
However, PL fundamentally lacks the syntax to express [Slide 3–4]:
1. *"All roommates carry an umbrella when it rains."*
2. *"Some roommates forget their umbrella."*
3. *"A roommate is carrying two umbrellas."*

To represent these real-world assertions, a knowledge representation language must incorporate **variables** (e.g., $x, y$), **quantifiers** (all, some), and **relations**, which propositional logic completely lacks [Slide 4]. Propositional representations rapidly become impractical even for small domains [Slide 4].`
    },
    {
      id: "ontology-and-models",
      heading: "2. The Ontology and Formal Models of FOL",
      sourceRef: "Slide 5–10",
      content: `First-Order Logic (FOL) combines the formal, unambiguous semantics of propositional logic with the expressive representational elements of natural language [Slide 5]:
- **Nouns and Noun Phrases** refer to **Objects** (e.g., people, squares, pits, wumpuses, numbers, Ronald McDonald, crowns) [Slide 5, 6].
- **Verbs and Verb Phrases** refer to **Relations** among objects:
  - *Unary Relations (Properties)*: red, round, prime, multistoried [Slide 6].
  - *n-ary Relations*: brother of, bigger than, inside, part of, owns, adjacent to [Slide 6].
- **Functions**: Relations in which there is exactly one value for any given input (e.g., father of, best friend, plus, left leg) [Slide 5, 6].

### Formal Models
Models of a logical language are the formal mathematical structures that constitute the possible worlds under consideration [Slide 8].
- The **Domain** of a model is the non-empty set of objects or domain elements it contains [Slide 9]. Every possible world must contain at least one object.
- A relation is formally defined as a **set of tuples** of related objects [Slide 11]. For example, the brotherhood relation between Richard and King John is:
  $$\\text{Brotherhood} = \\{ \\langle Richard, John \\rangle, \\langle John, Richard \\rangle \\}$$ [Slide 11]`,
      diagrams: [
        {
          id: "fol-model-domain",
          title: "Russell & Norvig Figure 8.2: First-Order Logic World Model",
          caption: "Figure 2.1: Formal model with 5 objects (Richard, King John, crown, Richard's left leg, John's left leg), binary relations (brother, on head), unary properties (person, king, crown), and total function left-leg.",
          sourceRef: "Slide 10",
          svgPath: "/diagrams/fol-model-domain.svg",
          originalPath: "/diagrams/fol-model-domain-original.png"
        }
      ]
    },
    {
      id: "relations-and-functions",
      heading: "3. Relations and Total Functions in the Domain",
      sourceRef: "Slide 11–13",
      content: `In the formal model depicted in Figure 2.1 [Slide 10–12]:
- **Binary Relations**:
  - The \`brother\` relation relates pairs of persons: $\\{\\langle Richard, John \\rangle, \\langle John, Richard \\rangle\\}$ [Slide 11].
  - The \`on head\` relation relates the crown to King John: $\\{\\langle Crown, John \\rangle\\}$ [Slide 12].
- **Unary Relations (Properties)**:
  - \`person\` is true for both Richard and John [Slide 12].
  - \`king\` is true only for King John [Slide 12].
  - \`crown\` is true only for the Crown [Slide 12].
- **Total Functions**:
  - Some relationships always produce exactly one answer for every object [Slide 13].
  - Example: \`LeftLeg\`. For every person, there is one and only one left leg.
  - The \`LeftLeg\` function maps each person object to their corresponding leg object:
    $$LeftLeg(Richard) \\rightarrow \\text{Richard's Left Leg}$$
    $$LeftLeg(John) \\rightarrow \\text{John's Left Leg}$$ [Slide 13].
  - In FOL, every function is total: it must return a result for every object in the domain [Slide 13].`
    },
    {
      id: "syntax-of-fol",
      heading: "4. Syntax of FOL: Symbols, Terms, and Sentences",
      sourceRef: "Slide 14–20",
      content: `The syntax of First-Order Logic is constructed from the following primitives [Slide 14, 17]:
1. **Constant Symbols** (stand for objects, uppercase initial): $Richard, John, Susan, A, B$ [Slide 14, 17].
2. **Predicate Symbols** (stand for relations, uppercase initial): $Brother, OnHead, Person, King, Crown$ [Slide 14, 17].
3. **Function Symbols** (stand for functions, uppercase initial): $LeftLeg, FatherOf$ [Slide 14, 17].
4. **Variables** (lowercase initial): $x, y, a, b$ [Slide 17].
5. **Connectives**: $\\neg$ (not), $\\Rightarrow$ (implies), $\\land$ (and), $\\lor$ (or), $\\Leftrightarrow$ (biconditional) [Slide 17].
6. **Equality**: $=$ [Slide 17].
7. **Quantifiers**: $\\forall$ (Universal), $\\exists$ (Existential) [Slide 17].

### Terms and Sentences
- **Term**: A logical expression referring to an object [Slide 16]. Constant symbols and variables are terms; a function applied to terms is also a term:
  $$FatherOf(Richard), \\quad LeftLeg(John)$$ [Slide 16].
- **Atomic Sentence**: Formed by applying a predicate symbol to a tuple of terms:
  $$Predicate(term_1, \\dots, term_n)$$
  Examples: $Brother(Richard, John)$, $Married(Father(Richard), Mother(John))$ [Slide 16].
- **Complex Sentence**: Formed by combining atomic sentences with logical connectives [Slide 20]:
  $$(Tall(Alice) \\land Smart(Alice)) \\Rightarrow Happy(Alice)$$ [Slide 20].`
    },
    {
      id: "quantifiers-and-duality",
      heading: "5. Quantifiers and Generalized De Morgan's Laws",
      sourceRef: "Slide 21–24",
      content: `### Universal Quantifier (∀) [Slide 21]
$\\forall x P(x)$ is read: *"For all $x$, $P(x)$ is true"*. It asserts that $P$ holds for every object in the domain [Slide 21].
- *"All humans are mortal"*: $\\forall x (Human(x) \\Rightarrow Mortal(x))$ [Slide 21].
- *"All birds can fly"*: $\\forall x (Bird(x) \\Rightarrow CanFly(x))$ [Slide 21].

> [!CAUTION] Common Pitfall: ∀ with Conjunction (∧)
> Using $\\land$ with $\\forall$ asserts that everything in the universe satisfies both predicates. For instance, $\\forall x (Human(x) \\land Mortal(x))$ asserts that every object in existence is human and mortal (including books, rocks, and planets). Implication ($\\Rightarrow$) must be used with $\\forall$.

### Existential Quantifier (∃) [Slide 22]
$\\exists x P(x)$ is read: *"There exists an $x$ such that $P(x)$ is true"*. It asserts that $P$ holds for at least one object [Slide 22].
- *"Some birds can fly"*: $\\exists x (Bird(x) \\land CanFly(x))$ [Slide 22].

> [!CAUTION] Common Pitfall: ∃ with Implication (⇒)
> Using $\\Rightarrow$ with $\\exists$ is trivially true if any object exists that does not satisfy the antecedent. For example, $\\exists x (Bird(x) \\Rightarrow CanFly(x))$ is true if there exists a single non-bird (e.g., an apple), because $\\text{False} \\Rightarrow \\text{Anything}$ is True. Conjunction ($\\land$) must be used with $\\exists$.

### Quantifier Duality (De Morgan's Laws) [Slide 23–24]
The two quantifiers are intimately connected through negation [Slide 23]:
*"Everyone likes ice cream"* means that there is no one who does not like ice cream [Slide 23]:
$$\\forall x Likes(x, IceCream) \\equiv \\neg \\exists x \\neg Likes(x, IceCream)$$ [Slide 23].

Formally, De Morgan's rules for quantifiers are [Slide 24]:
$$\\forall x P(x) \\equiv \\neg \\exists x \\neg P(x)$$
$$\\exists x P(x) \\equiv \\neg \\forall x \\neg P(x)$$
$$\\forall x \\neg P(x) \\equiv \\neg \\exists x P(x)$$
$$\\exists x \\neg P(x) \\equiv \\neg \\forall x P(x)$$ [Slide 24].`
    },
    {
      id: "formal-translation-examples",
      heading: "6. Translating Natural Language into Predicate Logic",
      sourceRef: "Slide 25–29",
      content: `The slide materials provide canonical translation patterns from English to FOL [Slide 25–29]:

1. **Categorical Affirmative**:
   - *"All cats are mammals"*: $\\forall x (Cats(x) \\Rightarrow Mammals(x))$ [Slide 26].
2. **Universal Membership Condition**:
   - *"Everyone in the coding club uses Github"*: $\\forall x (MemberOfClub(x) \\Rightarrow UsesGitHub(x))$ [Slide 26].
3. **Existential Conjunction**:
   - *"Someone in the coding club is a good coder"*: $\\exists x (MemberOfClub(x) \\land GoodCoder(x))$ [Slide 26].
4. **Nested Quantifiers**:
   - *"Brothers are siblings"*: $\\forall x \\forall y (Brother(x, y) \\Rightarrow Sibling(x, y))$ [Slide 26].
5. **Quantifier Permutation and Scoping**:
   - *"Everybody loves somebody"*: $\\forall x \\exists y Loves(x, y)$ (for each person $x$, there is some $y$ they love) [Slide 26].
   - *"There is someone who is loved by everyone"*: $\\exists y \\forall x Loves(x, y)$ (there exists a single fixed person $y$ loved by all $x$) [Slide 26].
6. **Definitional Biconditional**:
   - *"One's mother is one's female parent"*: $\\forall m \\forall c (Mother(m, c) \\Leftrightarrow (Female(m) \\land Parent(m, c)))$ [Slide 29].
7. **Counting and Distinctness**:
   - *"Richard has at least two brothers"*:
     $$\\exists x \\exists y (Brother(x, Richard) \\land Brother(y, Richard) \\land \\neg(x = y))$$ [Slide 29].
     *Note*: Without the inequality constraint $\\neg(x = y)$, $x$ and $y$ could bind to the exact same individual [Slide 29].`
    }
  ],
  solvedExamples: [
    {
      id: "ex-2-1",
      title: "Translating Counting Constraints into First-Order Logic",
      difficulty: "Medium",
      sourceRef: "Slide 27, 29",
      problemStatement: "Express the English sentence 'Richard has at least two brothers' in First-Order Logic. Explain why simply writing ∃x ∃y (Brother(x, Richard) ∧ Brother(y, Richard)) is logically insufficient [Slide 29].",
      steps: [
        {
          stepNumber: 1,
          title: "Identify Required Predicates and Constants",
          explanation: "Constant: Richard. Binary predicate: Brother(x, y) where x is a brother of y.",
          formulaOrCode: "Brother(x, Richard)"
        },
        {
          stepNumber: 2,
          title: "Analyze Variable Identity in FOL Models",
          explanation: "In FOL, different variable symbols (such as x and y) are permitted to refer to the exact same object in the domain unless an explicit inequality constraint is stated.",
          formulaOrCode: "If x = y, ∃x ∃y Brother(x, Richard) ∧ Brother(y, Richard) only guarantees at least ONE brother."
        },
        {
          stepNumber: 3,
          title: "Add Explicit Inequality Constraint",
          explanation: "To guarantee that Richard has at least two distinct brothers, we must add ¬(x = y).",
          formulaOrCode: "∃x ∃y (Brother(x, Richard) ∧ Brother(y, Richard) ∧ ¬(x = y))"
        }
      ],
      finalAnswer: "∃x ∃y (Brother(x, Richard) ∧ Brother(y, Richard) ∧ ¬(x = y)). The inequality ¬(x = y) is strictly necessary to prevent x and y from referring to the same individual [Slide 29].",
      verificationNotes: "Matches the explicit warning '(why?)' highlighted on Slide 29."
    },
    {
      id: "ex-2-2",
      title: "Applying Quantifier De Morgan Duality",
      difficulty: "Easy",
      sourceRef: "Slide 23–24",
      problemStatement: "Using the quantifier De Morgan rules from Slide 24, transform the negation of the sentence 'Everyone in the coding club uses Github' into an equivalent formula where negation is applied only to atomic predicates.",
      steps: [
        {
          stepNumber: 1,
          title: "Formulate Original Sentence",
          explanation: "Original sentence from Slide 26: ∀x (Member(x) ⇒ UsesGitHub(x)). Its negation is ¬∀x (Member(x) ⇒ UsesGitHub(x)).",
          formulaOrCode: "¬∀x (Member(x) ⇒ UsesGitHub(x))"
        },
        {
          stepNumber: 2,
          title: "Apply Quantifier Negation Law",
          explanation: "By De Morgan's rule for quantifiers (¬∀x P(x) ≡ ∃x ¬P(x)), push the negation inside the quantifier.",
          formulaOrCode: "∃x ¬(Member(x) ⇒ UsesGitHub(x))"
        },
        {
          stepNumber: 3,
          title: "Eliminate Implication and Push Negation",
          explanation: "Recall that (P ⇒ Q) ≡ (¬P ∨ Q). Thus, ¬(P ⇒ Q) ≡ ¬(¬P ∨ Q) ≡ (P ∧ ¬Q).",
          formulaOrCode: "∃x (Member(x) ∧ ¬UsesGitHub(x))"
        }
      ],
      finalAnswer: "∃x (Member(x) ∧ ¬UsesGitHub(x)), which reads: 'There exists someone who is in the coding club and does not use Github' [Slide 24, 26].",
      verificationNotes: "Verified via propositional equivalence and quantifier duality."
    }
  ],
  practiceQuestions: [
    {
      id: "pq-2-1",
      chapterSlug: "predicate-logic-foundations",
      chapterNumber: 2,
      chapterTitle: "First-Order Predicate Logic & Knowledge Representation",
      question: "Explain why the universal quantifier ∀ is paired with implication (⇒) whereas the existential quantifier ∃ is paired with conjunction (∧). What logical absurdity occurs if ∀ is paired with ∧? [Slide 21–22]",
      difficulty: "Easy",
      sourceRef: "Slide 21–22",
      hints: [
        "Think about what happens to non-members of the class in the model domain.",
        "Consider what ∀x (Student(x) ∧ Smart(x)) asserts about chairs and pencils."
      ],
      solutionSteps: [
        "Step 1: If we write ∀x (Human(x) ∧ Mortal(x)), this sentence asserts that every object in the universe is both human AND mortal. It falsely implies that the Sun, rocks, and numbers are humans.",
        "Step 2: Using implication ∀x (Human(x) ⇒ Mortal(x)) correctly asserts that IF an object happens to be human, then it is mortal. For non-humans, the antecedent is false, making the implication vacuously true.",
        "Step 3: If we write ∃x (Human(x) ⇒ Mortal(x)), this sentence is trivially true if any non-human exists, because False ⇒ Anything is True. Therefore, ∃ requires ∧: ∃x (Human(x) ∧ Mortal(x)) to guarantee the existence of a mortal human."
      ],
      finalAnswer: "∀ uses ⇒ to avoid falsely asserting the predicate for all objects in the domain; ∃ uses ∧ to ensure the object actually exists and possesses both properties."
    },
    {
      id: "pq-2-2",
      chapterSlug: "predicate-logic-foundations",
      chapterNumber: 2,
      chapterTitle: "First-Order Predicate Logic & Knowledge Representation",
      question: "Differentiate between the sentences ∀x ∃y Loves(x, y) and ∃y ∀x Loves(x, y). Provide the English meaning for each [Slide 26].",
      difficulty: "Medium",
      sourceRef: "Slide 26",
      hints: [
        "Look at the order of quantifiers.",
        "Does the choice of y depend on x, or is y chosen globally?"
      ],
      solutionSteps: [
        "Step 1: In ∀x ∃y Loves(x, y), the existential quantifier ∃y is inside the scope of ∀x. This means that for each person x, we can find a potentially different person y whom x loves. English: 'Everybody loves somebody.'",
        "Step 2: In ∃y ∀x Loves(x, y), the existential quantifier ∃y appears first. This means there is a single, specific person y in the universe who is loved by every person x. English: 'There is someone who is loved by everyone.'"
      ],
      finalAnswer: "∀x ∃y Loves(x, y) = 'Everybody loves somebody' (loved person varies per individual). ∃y ∀x Loves(x, y) = 'There is someone who is loved by everyone' (a single universal individual is loved by all)."
    },
    {
      id: "pq-2-3",
      chapterSlug: "predicate-logic-foundations",
      chapterNumber: 2,
      chapterTitle: "First-Order Predicate Logic & Knowledge Representation",
      question: "Translate the following assertion into First-Order Logic: 'Every student who studies hard passes every exam.' Define all constants, predicates, and variables clearly [Slide 21, 26].",
      difficulty: "Hard",
      sourceRef: "Slide 21, 26",
      hints: [
        "Identify the domain sorts: students, exams.",
        "Use universal quantifiers for both students and exams."
      ],
      solutionSteps: [
        "Step 1: Define predicates: Student(s), StudiesHard(s), Exam(e), Passes(s, e).",
        "Step 2: Formulate the conditional for an arbitrary student s and arbitrary exam e: If s is a student who studies hard, and e is an exam, then s passes e.",
        "Step 3: Universally quantify both variables: ∀s ∀e ((Student(s) ∧ StudiesHard(s) ∧ Exam(e)) ⇒ Passes(s, e))."
      ],
      finalAnswer: "∀s ∀e ((Student(s) ∧ StudiesHard(s) ∧ Exam(e)) ⇒ Passes(s, e))"
    }
  ],
  keyTakeaways: [
    "Propositional logic cannot represent objects, properties, relationships, or quantifiers, necessitating First-Order Logic.",
    "A formal FOL model contains a non-empty domain of objects, tuples forming relations, and total mappings forming functions.",
    "Universal quantification (∀) naturally pairs with implication (⇒); existential quantification (∃) naturally pairs with conjunction (∧).",
    "Quantifier order matters: ∀x ∃y (Loves(x,y)) is not equivalent to ∃y ∀x (Loves(x,y)).",
    "Quantifier De Morgan rules allow converting ∀ into ¬∃¬ and ∃ into ¬∀¬."
  ]
};

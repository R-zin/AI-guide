import { MockExamQuestion } from "./types";

export const mockExamQuestions: MockExamQuestion[] = [
  {
    id: "me-1",
    type: "multiple-choice",
    chapterNumber: 1,
    chapterSlug: "expert-systems",
    chapterTitle: "Expert Systems Fundamentals & Architecture",
    question: "Which of the following landmark AI systems was developed in the early 1970s at Stanford University as the first knowledge-intensive expert system for predicting 3D molecular structures?",
    options: ["MYCIN", "DENDRAL", "SHINE", "PROSPECTOR"],
    correctOptionIndex: 1,
    sourceRef: "Expert System PDF p. 6",
    solutionExplanation: "DENDRAL was developed in the early 1970s at Stanford University as the first knowledge-intensive expert system to predict molecular structure from mass spectrometry data. MYCIN was developed later for diagnosing infectious diseases.",
    marks: 2
  },
  {
    id: "me-2",
    type: "multiple-choice",
    chapterNumber: 1,
    chapterSlug: "expert-systems",
    chapterTitle: "Expert Systems Fundamentals & Architecture",
    question: "When a user asks 'WHY?' during an interactive expert system consultation, what information does the explanation facility return according to the course materials?",
    options: [
      "The entire historical trace of all past consultations",
      "The current production rule that is actively being evaluated (fired)",
      "The mathematical confidence factor of the knowledge engineer",
      "The source code algorithm of the inference engine"
    ],
    correctOptionIndex: 1,
    sourceRef: "Expert System PDF p. 12",
    solutionExplanation: "On PDF p. 12, 'WHY?' means 'why are you asking for a particular information'. The ES answers by returning the current rule that is currently being evaluated. In contrast, 'HOW?' returns the sequence of rules that fired to reach a conclusion.",
    marks: 2
  },
  {
    id: "me-3",
    type: "multiple-choice",
    chapterNumber: 2,
    chapterSlug: "predicate-logic-foundations",
    chapterTitle: "First-Order Predicate Logic & Knowledge Representation",
    question: "Which First-Order Logic formula correctly represents the statement: 'Every student in the coding club uses Github'?",
    options: [
      "∃x (Student(x) ∧ MemberOfClub(x) ∧ UsesGitHub(x))",
      "∀x ((Student(x) ∧ MemberOfClub(x)) ⇒ UsesGitHub(x))",
      "∀x ((Student(x) ∧ MemberOfClub(x)) ∧ UsesGitHub(x))",
      "∃x ((Student(x) ∧ MemberOfClub(x)) ⇒ UsesGitHub(x))"
    ],
    correctOptionIndex: 1,
    sourceRef: "2.4 Predicate Logic Slide 26",
    solutionExplanation: "Universal statements ('every student...') require the universal quantifier ∀ paired with implication ⇒. Using ∧ with ∀ falsely asserts that all entities in the universe are students who use Github.",
    marks: 2
  },
  {
    id: "me-4",
    type: "multiple-choice",
    chapterNumber: 2,
    chapterSlug: "predicate-logic-foundations",
    chapterTitle: "First-Order Predicate Logic & Knowledge Representation",
    question: "According to generalized De Morgan's laws for quantifiers, the negated sentence ¬∀x P(x) is logically equivalent to which formula?",
    options: [
      "∀x ¬P(x)",
      "∃x ¬P(x)",
      "¬∃x P(x)",
      "∃x P(x)"
    ],
    correctOptionIndex: 1,
    sourceRef: "2.4 Predicate Logic Slide 24",
    solutionExplanation: "By quantifier duality (Slide 24), ¬∀x P(x) ≡ ∃x ¬P(x). 'Not everyone likes ice cream' is logically equivalent to 'There exists someone who does not like ice cream'.",
    marks: 2
  },
  {
    id: "me-5",
    type: "multiple-choice",
    chapterNumber: 3,
    chapterSlug: "inference-and-resolution",
    chapterTitle: "Inference, Resolution Refutation & Logic Programming",
    question: "When eliminating existential quantifiers during conversion to First-Order Clause Form, when must a Skolem Function f(x) be used instead of a Skolem Constant?",
    options: [
      "Whenever the sentence contains an implication (→)",
      "Whenever the existential quantifier ∃y lies within the scope of a universal quantifier ∀x",
      "Only when the predicate has more than three arguments",
      "Whenever the sentence has already been converted to Conjunctive Normal Form"
    ],
    correctOptionIndex: 1,
    sourceRef: "2.4 Predicate Logic Slide 60–61",
    solutionExplanation: "When an existential quantifier ∃y is governed by a universal quantifier ∀x (e.g. ∀x ∃y Loves(x, y)), the value of y depends on x. A Skolem function f(x) represents this dependent relationship, whereas a constant would incorrectly assume a single fixed entity for everyone.",
    marks: 2
  },
  {
    id: "me-6",
    type: "multiple-choice",
    chapterNumber: 3,
    chapterSlug: "inference-and-resolution",
    chapterTitle: "Inference, Resolution Refutation & Logic Programming",
    question: "What does deriving the empty clause (□) signify in a proof by resolution refutation?",
    options: [
      "The knowledge base contains a syntax error and execution halts",
      "An inescapable contradiction was derived from the negated query, proving the original query is entailed",
      "The query is independent of the knowledge base and cannot be proved",
      "The inference engine has run out of memory"
    ],
    correctOptionIndex: 1,
    sourceRef: "2.4 Predicate Logic Slide 47–49",
    solutionExplanation: "In resolution refutation, we add the negation of the query ¬α to the consistent KB. Deriving the empty clause □ proves that assuming ¬α is true creates a contradiction, establishing that KB ⊨ α.",
    marks: 2
  },
  {
    id: "me-7",
    type: "multiple-choice",
    chapterNumber: 4,
    chapterSlug: "mamdani-fuzzy-inference",
    chapterTitle: "Mamdani Fuzzy Inference Systems",
    question: "Given a Trapezoidal membership function Warm = trap[20, 25, 30, 35] (°C), what is the degree of membership μ for temperature T = 22°C?",
    options: ["0.20", "0.40", "0.50", "1.00"],
    correctOptionIndex: 1,
    sourceRef: "3.5 Fuzzy Inference Slide 17",
    solutionExplanation: "For T = 22°C, it lies on the rising slope between a=20 and b=25: μ(22) = (22 - 20) / (25 - 20) = 2 / 5 = 0.40.",
    marks: 2
  },
  {
    id: "me-8",
    type: "multiple-choice",
    chapterNumber: 4,
    chapterSlug: "mamdani-fuzzy-inference",
    chapterTitle: "Mamdani Fuzzy Inference Systems",
    question: "In Mamdani fuzzy inference, how does 'scaling' differ from 'clipping' during consequent modification?",
    options: [
      "Scaling slices the peak off the membership function, whereas clipping multiplies by the firing strength",
      "Scaling multiplies the entire membership function by the antecedent firing strength w, preserving the original geometric shape, whereas clipping slices the function flat at height w",
      "Scaling is used only for trapezoids, while clipping is used only for triangles",
      "Scaling is used in Sugeno inference, while clipping is used in Mamdani inference"
    ],
    correctOptionIndex: 1,
    sourceRef: "3.5 Fuzzy Inference Slide 24–25",
    solutionExplanation: "On Slide 24–25, clipping cuts the consequent membership function at the antecedent truth level (losing top shape), whereas scaling multiplies all membership degrees by the truth value w, preserving the original shape of the fuzzy set.",
    marks: 2
  },
  {
    id: "me-9",
    type: "worked-calculation",
    chapterNumber: 5,
    chapterSlug: "sugeno-fuzzy-inference",
    chapterTitle: "Sugeno Fuzzy Inference Systems & Controller Design",
    question: "A Zero-Order Sugeno fuzzy controller evaluates three rules with output singletons k1 = 20, k2 = 50, and k3 = 80. The antecedent evaluations yield firing strengths w1 = 0.1, w2 = 0.2, and w3 = 0.5. Calculate the crisp output using Weighted Average defuzzification. Show your working.",
    sourceRef: "3.6 Sugeno Inference Slide 6",
    solutionExplanation: "Formula: WA = ∑(wi · ki) / ∑ wi\nNumerator = (0.1 × 20) + (0.2 × 50) + (0.5 × 80) = 2.0 + 10.0 + 40.0 = 52.0\nDenominator = 0.1 + 0.2 + 0.5 = 0.8\nResult: WA = 52.0 / 0.8 = 65.0.",
    marks: 4
  },
  {
    id: "me-10",
    type: "worked-calculation",
    chapterNumber: 5,
    chapterSlug: "sugeno-fuzzy-inference",
    chapterTitle: "Sugeno Fuzzy Inference Systems & Controller Design",
    question: "In the Sugeno Fan Speed Controller case study, ambient temperature is T = 31°C and humidity is H = 70%. The active rules are R2 (Medium fan speed = 50, firing strength w2 = 0.25) and R3 (High fan speed = 90, firing strength w3 = 0.20). Calculate the defuzzified fan speed percentage and explain the purpose of the denominator.",
    sourceRef: "Sugeno Fan Speed Solution Slide 8",
    solutionExplanation: "Formula: z = (w2 · k_Med + w3 · k_High) / (w2 + w3)\nNumerator = (0.25 × 50) + (0.20 × 90) = 12.5 + 18.0 = 30.5\nDenominator = 0.25 + 0.20 = 0.45\nResult: z = 30.5 / 0.45 ≈ 67.78%.\nPurpose of Denominator: Dividing by ∑ w normalizes the result; without normalization, the output would be 30.5, which is unweighted and invalid.",
    marks: 5
  }
];

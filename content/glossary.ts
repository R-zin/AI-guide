import { GlossaryItem } from "./types";

export const glossaryItems: GlossaryItem[] = [
  {
    id: "alpha-cut",
    term: "α-Cut (Alpha-Cut)",
    definition: "The crisp subset of elements in the universe of discourse X whose degree of membership in a fuzzy set A is greater than or equal to a specified threshold value α: A_α = {x ∈ X | μA(x) ≥ α}.",
    category: "Fuzzy Logic",
    sourceRef: "3.5 Fuzzy Inference Slide 7",
    relatedTerms: ["Core", "Support", "Membership Function"]
  },
  {
    id: "atomic-sentence",
    term: "Atomic Sentence",
    definition: "In First-Order Logic, a fundamental proposition constructed from a predicate symbol followed by an ordered list of terms: Predicate(term₁, ..., termₙ), or two terms joined by equality (=).",
    category: "Predicate Logic",
    sourceRef: "2.4 Predicate Logic Slide 16",
    relatedTerms: ["Term", "Complex Sentence", "Predicate Symbol"]
  },
  {
    id: "center-of-gravity",
    term: "Center of Gravity (COG) / Centroid",
    definition: "The most popular defuzzification technique in Mamdani fuzzy systems, which computes the balance point where a vertical line divides the aggregate area into two equal masses: COG = ∫ μ(x)·x dx / ∫ μ(x) dx.",
    category: "Fuzzy Logic",
    sourceRef: "3.5 Fuzzy Inference Slide 28–29",
    relatedTerms: ["Defuzzification", "Mamdani Fuzzy Inference", "Weighted Average"]
  },
  {
    id: "clipping",
    term: "Clipping (Alpha-Cut Truncation)",
    definition: "A method of consequent modification in fuzzy inference that slices the top off the consequent membership function at the rule's antecedent truth value. While simple, it loses geometric peak information.",
    category: "Fuzzy Logic",
    sourceRef: "3.5 Fuzzy Inference Slide 24",
    relatedTerms: ["Scaling", "Rule Evaluation", "Firing Strength"]
  },
  {
    id: "clause",
    term: "Clause",
    definition: "A disjunction (logical OR, ∨) of zero or more literals. In resolution theorem proving, the knowledge base is standardized into a conjunction of clauses.",
    category: "Inference & Resolution",
    sourceRef: "2.4 Predicate Logic Slide 42",
    relatedTerms: ["Literal", "Conjunctive Normal Form (CNF)", "Empty Clause"]
  },
  {
    id: "conjunctive-normal-form",
    term: "Conjunctive Normal Form (CNF)",
    definition: "A canonical representation of logical formulas consisting of a conjunction (AND, ∧) of clauses, where each clause is a disjunction (OR, ∨) of literals.",
    category: "Inference & Resolution",
    sourceRef: "2.4 Predicate Logic Slide 43–44",
    relatedTerms: ["Clause", "Literal", "Resolution"]
  },
  {
    id: "core",
    term: "Core (Fuzzy Set)",
    definition: "The subset of elements in the universe of discourse that possess full membership in fuzzy set A: {x ∈ X | μA(x) = 1}.",
    category: "Fuzzy Logic",
    sourceRef: "3.5 Fuzzy Inference Slide 7",
    relatedTerms: ["Support", "α-Cut", "Height"]
  },
  {
    id: "dendral",
    term: "DENDRAL",
    definition: "The first knowledge-intensive expert system, developed in the early 1970s at Stanford University for chemical analysis to predict 3D molecular structures of complex chemical compounds from mass spectrometer data.",
    category: "Expert Systems",
    sourceRef: "Expert System PDF p. 6",
    relatedTerms: ["MYCIN", "Expert System", "Knowledge Base"]
  },
  {
    id: "domain-expert",
    term: "Domain Expert",
    definition: "A human professional possessing specialized tacit knowledge, deep experience, and heuristics in a specific problem domain, whose expertise is captured to build an expert system.",
    category: "Expert Systems",
    sourceRef: "Expert System PDF p. 10",
    relatedTerms: ["Knowledge Engineer", "Knowledge Base"]
  },
  {
    id: "empty-clause",
    term: "Empty Clause (□)",
    definition: "A clause containing zero literals, representing an inescapable contradiction. Deriving the empty clause in resolution refutation proves the query sentence α.",
    category: "Inference & Resolution",
    sourceRef: "2.4 Predicate Logic Slide 47–49",
    relatedTerms: ["Resolution", "Refutation", "Clause"]
  },
  {
    id: "existential-quantifier",
    term: "Existential Quantifier (∃)",
    definition: "A quantifier asserting that a logical formula holds for at least one object in the domain: ∃x P(x). Typically paired with logical conjunction (∧).",
    category: "Predicate Logic",
    sourceRef: "2.4 Predicate Logic Slide 22, 24",
    relatedTerms: ["Universal Quantifier", "Quantifier Duality", "Skolemization"]
  },
  {
    id: "expert-system",
    term: "Expert System (ES)",
    definition: "Intelligent software designed to emulate the decision-making and problem-solving capability of human experts in a specialized domain, adhering to the equation: Inference Engine + Knowledge Base = Expert System.",
    category: "Expert Systems",
    sourceRef: "Expert System PDF p. 4",
    relatedTerms: ["Inference Engine", "Knowledge Base", "Explanation Facility"]
  },
  {
    id: "explanation-facility",
    term: "Explanation Facility (WHY / HOW)",
    definition: "The subsystem in an expert system enabling users to interrogate its reasoning trace: WHY returns the active rule currently being evaluated; HOW returns the chronological sequence of fired rules that justified a conclusion.",
    category: "Expert Systems",
    sourceRef: "Expert System PDF p. 12",
    relatedTerms: ["Inference Engine", "Expert System"]
  },
  {
    id: "firing-strength",
    term: "Firing Strength (Truth Value w)",
    definition: "The scalar value in [0, 1] resulting from evaluating the antecedent of a fuzzy rule using min (intersection) or max (union), which determines the degree to which the rule's consequent is applied.",
    category: "Fuzzy Logic",
    sourceRef: "3.5 Fuzzy Inference Slide 23",
    relatedTerms: ["Clipping", "Scaling", "Rule Evaluation"]
  },
  {
    id: "fuzzy-singleton",
    term: "Fuzzy Singleton",
    definition: "A specialized fuzzy set whose membership function equals 1 at a single real value k on the universe of discourse and 0 everywhere else. Forms the consequent in zero-order Sugeno fuzzy systems.",
    category: "Fuzzy Logic",
    sourceRef: "3.6 Sugeno Inference Slide 1, 3",
    relatedTerms: ["Sugeno Fuzzy Inference", "Weighted Average"]
  },
  {
    id: "horn-clause",
    term: "Horn Clause",
    definition: "A clause containing at most one positive (unnegated) literal. Written in Prolog as Head :- Body, Horn clauses enable efficient polynomial-time SLD resolution inference.",
    category: "Inference & Resolution",
    sourceRef: "2.4 Predicate Logic Slide 65, 69",
    relatedTerms: ["Prolog", "Clause", "Resolution"]
  },
  {
    id: "inference-engine",
    term: "Inference Engine",
    definition: "The domain-independent software module that executes reasoning rules, controls search algorithms (forward or backward chaining), and resolves conflicts across rules in an expert system.",
    category: "Expert Systems",
    sourceRef: "Expert System PDF p. 8",
    relatedTerms: ["Knowledge Base", "Expert System"]
  },
  {
    id: "knowledge-engineer",
    term: "Knowledge Engineer",
    definition: "The AI professional who interviews domain experts to extract their problem-solving heuristics and translates that tacit knowledge into formal machine-readable rules and schemas.",
    category: "Expert Systems",
    sourceRef: "Expert System PDF p. 10",
    relatedTerms: ["Domain Expert", "Knowledge Base"]
  },
  {
    id: "mamdani-fuzzy-inference",
    term: "Mamdani Fuzzy Inference",
    definition: "A fuzzy inference architecture proposed by Ebrahim Mamdani (1975) characterized by fuzzy linguistic consequents, minimum/maximum operators, and centroid defuzzification.",
    category: "Fuzzy Logic",
    sourceRef: "3.5 Fuzzy Inference Slide 1–5",
    relatedTerms: ["Sugeno Fuzzy Inference", "Center of Gravity", "Fuzzification"]
  },
  {
    id: "modus-ponens",
    term: "Modus Ponens (→-Elimination)",
    definition: "A fundamental classical inference rule: given the implication P → Q and the truth of antecedent P, one may validly infer consequent Q.",
    category: "Inference & Resolution",
    sourceRef: "2.4 Predicate Logic Slide 30",
    relatedTerms: ["Modus Tollens", "Inference Engine"]
  },
  {
    id: "mycin",
    term: "MYCIN",
    definition: "A seminal medical expert system developed at Stanford University in the 1970s to diagnose blood infectious diseases (bacteremia and meningitis) and recommend weight-adjusted antibiotic dosages.",
    category: "Expert Systems",
    sourceRef: "Expert System PDF p. 6",
    relatedTerms: ["DENDRAL", "Expert System"]
  },
  {
    id: "quantifier-duality",
    term: "Quantifier Duality (De Morgan's Laws)",
    definition: "The logical equivalences linking universal and existential quantifiers via negation: ¬∀x P(x) ≡ ∃x ¬P(x) and ¬∃x P(x) ≡ ∀x ¬P(x).",
    category: "Predicate Logic",
    sourceRef: "2.4 Predicate Logic Slide 23–24",
    relatedTerms: ["Universal Quantifier", "Existential Quantifier"]
  },
  {
    id: "resolution",
    term: "Resolution",
    definition: "A sound and complete inference rule for theorem proving: from clauses (A ∨ L) and (B ∨ ¬L), derive resolvent (A ∨ B). In refutation proofs, it derives contradiction □.",
    category: "Inference & Resolution",
    sourceRef: "2.4 Predicate Logic Slide 47, 54",
    relatedTerms: ["Clause", "Empty Clause", "Conjunctive Normal Form"]
  },
  {
    id: "scaling",
    term: "Scaling",
    definition: "A method of consequent modification in fuzzy inference that multiplies the entire membership function by the antecedent firing strength w: μ_scaled(z) = w · μ(z), preserving the curve's geometric shape.",
    category: "Fuzzy Logic",
    sourceRef: "3.5 Fuzzy Inference Slide 25",
    relatedTerms: ["Clipping", "Firing Strength"]
  },
  {
    id: "skolem-function",
    term: "Skolem Function",
    definition: "A generated function f(x) replacing an existentially quantified variable y that lies within the scope of a universal quantifier ∀x, modeling that y depends on x without naming it directly.",
    category: "Inference & Resolution",
    sourceRef: "2.4 Predicate Logic Slide 60–61",
    relatedTerms: ["Skolemization", "Existential Quantifier"]
  },
  {
    id: "sugeno-fuzzy-inference",
    term: "Sugeno Fuzzy Inference (TSK)",
    definition: "A computationally efficient fuzzy inference method introduced by Michio Sugeno (1985) using mathematical functions or singletons as rule consequents, defuzzifying via weighted averages.",
    category: "Fuzzy Logic",
    sourceRef: "3.6 Sugeno Inference Slide 1–7",
    relatedTerms: ["Mamdani Fuzzy Inference", "Fuzzy Singleton", "Weighted Average"]
  },
  {
    id: "support",
    term: "Support (Fuzzy Set)",
    definition: "The crisp set of all elements in the universe of discourse that possess non-zero degree of membership: Support(A) = {x ∈ X | μA(x) > 0}.",
    category: "Fuzzy Logic",
    sourceRef: "3.5 Fuzzy Inference Slide 7",
    relatedTerms: ["Core", "α-Cut", "Membership Function"]
  },
  {
    id: "trapezoidal-membership-function",
    term: "Trapezoidal Membership Function",
    definition: "A piecewise linear fuzzy membership function defined by four parameters trap[a, b, c, d], featuring rising slope, flat core plateau [b, c], and falling slope.",
    category: "Fuzzy Logic",
    sourceRef: "3.5 Fuzzy Inference Slide 16–17",
    relatedTerms: ["Triangular Membership Function", "Core"]
  },
  {
    id: "triangular-membership-function",
    term: "Triangular Membership Function",
    definition: "The most widely used fuzzy membership function, defined by three parameters tri[a, b, c] with rising slope from a to b, peak at b (μ=1), and falling slope from b to c.",
    category: "Fuzzy Logic",
    sourceRef: "3.5 Fuzzy Inference Slide 13–15",
    relatedTerms: ["Trapezoidal Membership Function", "Membership Function"]
  },
  {
    id: "universal-quantifier",
    term: "Universal Quantifier (∀)",
    definition: "A logical quantifier stating that a formula holds for every object in the domain: ∀x P(x). Typically paired with logical implication (⇒).",
    category: "Predicate Logic",
    sourceRef: "2.4 Predicate Logic Slide 21, 24",
    relatedTerms: ["Existential Quantifier", "Quantifier Duality"]
  },
  {
    id: "weighted-average-defuzzification",
    term: "Weighted Average (WA) Defuzzification",
    definition: "The defuzzification algorithm employed in zero-order Sugeno models: WA = ∑(wi · ki) / ∑ wi, weighting singleton locations ki by firing strengths wi.",
    category: "Fuzzy Logic",
    sourceRef: "3.6 Sugeno Inference Slide 6",
    relatedTerms: ["Sugeno Fuzzy Inference", "Fuzzy Singleton", "Center of Gravity"]
  }
];

import { FormulaItem } from "./types";

export const formulaItems: FormulaItem[] = [
  {
    id: "formula-es-architecture",
    name: "Foundational Architecture Equation",
    latex: "\\text{Inference Engine} + \\text{Knowledge Base} = \\text{Expert System}",
    description: "The core architectural paradigm of Knowledge-Based Systems: strictly decoupling declarative domain knowledge from domain-independent procedural inference algorithms.",
    variables: [
      { symbol: "\\text{Inference Engine}", explanation: "Domain-independent reasoning algorithm and conflict resolution strategies" },
      { symbol: "\\text{Knowledge Base}", explanation: "Domain facts, production rules, and expert heuristics" }
    ],
    sourceRef: "Expert System PDF p. 4",
    workedExample: "Conventional Program: Algorithm + Data Structures = Program (coupled). Expert System: Inference Engine + Knowledge Base = Expert System (modular)."
  },
  {
    id: "formula-quantifier-duality",
    name: "Quantifier Duality (Generalized De Morgan's Laws)",
    latex: "\\forall x P(x) \\equiv \\neg \\exists x \\neg P(x), \\quad \\exists x P(x) \\equiv \\neg \\forall x \\neg P(x)",
    description: "Equivalence relations linking universal and existential quantifiers through negation, allowing conversion between 'all' and 'some' statements.",
    variables: [
      { symbol: "\\forall x", explanation: "Universal quantifier ('for all x')" },
      { symbol: "\\exists x", explanation: "Existential quantifier ('there exists an x')" },
      { symbol: "P(x)", explanation: "Predicate formula with free variable x" }
    ],
    sourceRef: "2.4 Predicate Logic Slide 24",
    workedExample: "'Everyone likes ice cream' (∀x Likes(x, IceCream)) ≡ 'There is no one who does not like ice cream' (¬∃x ¬Likes(x, IceCream))."
  },
  {
    id: "formula-resolution-rule",
    name: "Binary Resolution Inference Rule",
    latex: "\\frac{A \\lor L, \\quad B \\lor \\neg L}{A \\lor B}",
    description: "The foundational inference rule in automated theorem proving. Cancels out complementary literals L and ¬L from two clauses to produce the resolvent clause.",
    variables: [
      { symbol: "A, B", explanation: "Disjunctions of remaining literals in clauses" },
      { symbol: "L, \\neg L", explanation: "Complementary pair of atomic literals" }
    ],
    sourceRef: "2.4 Predicate Logic Slide 47",
    workedExample: "Clause 1: {P ∨ ¬Q}, Clause 2: {Q ∨ R}. Resolving on Q and ¬Q yields Resolvent: {P ∨ R}."
  },
  {
    id: "formula-triangular-mf",
    name: "Triangular Membership Function (TrMF)",
    latex: "\\mu(x) = \\max\\left( \\min\\left( \\frac{x - a}{b - a}, \\frac{c - x}{c - b} \\right), 0 \\right)",
    description: "Continuous piecewise linear membership function parameterized by three coordinates: left foot (a), peak (b where μ=1), and right foot (c).",
    variables: [
      { symbol: "a", explanation: "Lower bound where membership begins rising from 0" },
      { symbol: "b", explanation: "Peak coordinate where degree of membership equals 1.0" },
      { symbol: "c", explanation: "Upper bound where membership returns to 0" }
    ],
    sourceRef: "3.5 Fuzzy Inference Slide 14–15",
    workedExample: "For Warm = tri[22, 28, 34] at T = 31°C: falling slope (34 - 31)/(34 - 28) = 3/6 = 0.50."
  },
  {
    id: "formula-trapezoidal-mf",
    name: "Trapezoidal Membership Function (TrapMF)",
    latex: "\\mu(x) = \\max\\left( \\min\\left( \\frac{x - a}{b - a}, 1, \\frac{d - x}{d - c} \\right), 0 \\right)",
    description: "Piecewise linear membership function parameterized by four coordinates: left foot (a), left shoulder (b), right shoulder (c), and right foot (d), featuring a flat core plateau [b, c].",
    variables: [
      { symbol: "a", explanation: "Left foot where membership begins to rise from 0" },
      { symbol: "b", explanation: "Left shoulder where membership reaches 1.0" },
      { symbol: "c", explanation: "Right shoulder where membership starts dropping from 1.0" },
      { symbol: "d", explanation: "Right foot where membership returns to 0" }
    ],
    sourceRef: "3.5 Fuzzy Inference Slide 16–17",
    workedExample: "For Warm = trap[20, 25, 30, 35] at T = 22°C: rising slope (22 - 20)/(25 - 20) = 2/5 = 0.40. At T = 28°C: flat top [25, 30] gives μ = 1.0."
  },
  {
    id: "formula-fuzzy-operators",
    name: "Zadeh Standard Fuzzy Operations (AND / OR)",
    latex: "\\mu_{A \\cap B}(x) = \\min[\\mu_A(x), \\mu_B(x)], \\quad \\mu_{A \\cup B}(x) = \\max[\\mu_A(x), \\mu_B(x)]",
    description: "Standard fuzzy intersection (conjunction / AND) and fuzzy union (disjunction / OR) operators utilized during rule antecedent evaluation.",
    variables: [
      { symbol: "\\mu_{A \\cap B}(x)", explanation: "Membership in intersection (logical AND)" },
      { symbol: "\\mu_{A \\cup B}(x)", explanation: "Membership in union (logical OR)" }
    ],
    sourceRef: "3.5 Fuzzy Inference Slide 21",
    workedExample: "Rule: IF x is A2 (0.2) AND y is B2 (0.7) THEN firing strength w = min(0.2, 0.7) = 0.2."
  },
  {
    id: "formula-mamdani-cog",
    name: "Mamdani Centroid Defuzzification (Center of Gravity)",
    latex: "\\text{COG} = \\frac{\\int_a^b \\mu_A(x) \\cdot x \\, dx}{\\int_a^b \\mu_A(x) \\, dx} \\approx \\frac{\\sum_{i=1}^n z_i \\cdot \\mu(z_i)}{\\sum_{i=1}^n \\mu(z_i)}",
    description: "Computes the center of mass of the aggregated 2D fuzzy shape. The numerator represents the first moment of the area, and the denominator represents the total area.",
    variables: [
      { symbol: "z_i", explanation: "Discrete sample location along the universe of discourse" },
      { symbol: "\\mu(z_i)", explanation: "Aggregated curve height at sample location z_i" }
    ],
    sourceRef: "3.5 Fuzzy Inference Slide 29–30",
    workedExample: "Sampled points: {0,10,20} at 0.1, {30,40,50,60} at 0.2, {70,80,90,100} at 0.5. COG = 209 / 3.1 ≈ 67.4%."
  },
  {
    id: "formula-sugeno-wa",
    name: "Zero-Order Sugeno Weighted Average (WA)",
    latex: "WA = \\frac{\\sum_{i=1}^m w_i \\cdot k_i}{\\sum_{i=1}^m w_i}",
    description: "Computes the crisp actuator output in zero-order Sugeno fuzzy systems by weighting constant singleton spike positions k_i by their rule firing strengths w_i.",
    variables: [
      { symbol: "w_i", explanation: "Antecedent firing strength of rule i (in [0, 1])" },
      { symbol: "k_i", explanation: "Constant singleton position of rule consequent i" }
    ],
    sourceRef: "3.6 Sugeno Inference Slide 6",
    workedExample: "Singletons k = {20, 50, 80} with weights w = {0.1, 0.2, 0.5}: WA = (2 + 10 + 40) / 0.8 = 52 / 0.8 = 65.0."
  },
  {
    id: "formula-fan-speed-controller",
    name: "Sugeno Controller Crisp Actuator Equation",
    latex: "z^* = \\frac{w_2 \\cdot k_{\\text{Med}} + w_3 \\cdot k_{\\text{High}}}{w_2 + w_3} = \\frac{0.25 \\times 50 + 0.20 \\times 90}{0.25 + 0.20} = \\frac{30.5}{0.45} \\approx 67.78\\%",
    description: "The governing defuzzification equation for the worked Fan Speed controller operating at T = 31°C and H = 70%, with only rules 2 and 3 active.",
    variables: [
      { symbol: "k_{\\text{Med}} = 50", explanation: "Medium fan speed singleton spike (% of maximum)" },
      { symbol: "k_{\\text{High}} = 90", explanation: "High fan speed singleton spike (% of maximum)" },
      { symbol: "w_2 = 0.25", explanation: "Firing strength of Rule 2: min(μWarm(31), μNormal(70)) = min(0.5, 0.25)" },
      { symbol: "w_3 = 0.20", explanation: "Firing strength of Rule 3: min(μHot(31), μHumid(70)) = min(0.2, 0.33)" }
    ],
    sourceRef: "Sugeno Fan Speed Solution Slide 8",
    workedExample: "z* = (12.5 + 18.0) / 0.45 = 30.5 / 0.45 ≈ 67.78% of maximum fan speed."
  }
];

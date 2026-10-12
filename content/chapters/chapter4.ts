import { ChapterData } from "../types";

export const chapter4: ChapterData = {
  slug: "mamdani-fuzzy-inference",
  chapterNumber: 4,
  title: "Mamdani Fuzzy Inference Systems",
  shortDescription: "Fuzzy sets, linguistic variables, membership function mathematics (TrMF, TrapMF), 4-step Mamdani inference, clipping vs scaling, and Centroid defuzzification.",
  sourceFile: "3.5 Fuzzy Inference - Mamdani Style.pptx",
  sourceRange: "Slides 1–30",
  estimatedReadTime: "24 min",
  learningObjectives: [
    "Explain the history and purpose of Mamdani fuzzy inference (Ebrahim Mamdani, 1975).",
    "Differentiate crisp sets from fuzzy sets and define linguistic variables and linguistic values.",
    "Define core geometric features of membership functions: Support, Core, α-Cut, and Height.",
    "Formulate the mathematical equations for Triangular (TrMF) and Trapezoidal (TrapMF) membership functions.",
    "Execute Step 1 (Fuzzification) for arbitrary crisp inputs against triangular and trapezoidal sets.",
    "Execute Step 2 (Rule Evaluation) using fuzzy intersection (min) for AND and fuzzy union (max) for OR.",
    "Compare consequent modification techniques: clipping (slicing) versus scaling (multiplication).",
    "Execute Step 3 (Aggregation) to combine clipped/scaled consequents into an aggregate fuzzy set.",
    "Execute Step 4 (Defuzzification) using the Center of Gravity (COG) / Centroid discrete sampling formula."
  ],
  keyDefinitions: [
    {
      term: "Membership Function (MF)",
      definition: "A curve μA(x) mapping elements of the universe of discourse X to a degree of membership in the real unit interval [0, 1].",
      sourceRef: "Slide 7"
    },
    {
      term: "Support",
      definition: "The set of elements x in the universe having strictly non-zero membership: {x | μA(x) > 0}.",
      sourceRef: "Slide 7"
    },
    {
      term: "Core",
      definition: "The set of elements x in the universe having complete membership: {x | μA(x) = 1}.",
      sourceRef: "Slide 7"
    },
    {
      term: "α-Cut",
      definition: "The crisp set of elements whose degree of membership is greater than or equal to a specified threshold α: A_α = {x | μA(x) ≥ α}.",
      sourceRef: "Slide 7"
    },
    {
      term: "Clipping vs. Scaling",
      definition: "Clipping slices the top off the consequent membership function at the rule's firing strength level (losing top shape); scaling multiplies the entire membership function by the firing strength (preserving shape).",
      sourceRef: "Slide 24, 25"
    },
    {
      term: "Center of Gravity (COG) / Centroid",
      definition: "Defuzzification method that locates the balance point where a vertical line slices the aggregate area into two equal masses: COG = ∫ μ(x)·x dx / ∫ μ(x) dx.",
      sourceRef: "Slide 28, 29"
    }
  ],
  sections: [
    {
      id: "foundations-and-architecture",
      heading: "1. Foundations and the 4-Step Mamdani Architecture",
      sourceRef: "Slide 1–5",
      content: `The most widely adopted fuzzy inference technique is the **Mamdani method**, proposed in 1975 by Professor Ebrahim Mamdani [Slide 1]. Built upon Lotfi Zadeh's 1973 paper on fuzzy logic and linguistic algorithms, Mamdani's original application controlled a laboratory steam engine and boiler combination by synthesizing human operator linguistic rules [Slide 1].

A fuzzy inference system processes information using **linguistic variables** (e.g., *Project Funding*, *Project Staffing*, *Project Risk*) which take on **linguistic values** (e.g., *Low*, *Normal*, *High*, *Inadequate*, *Marginal*, *Adequate*) [Slide 4].

The complete Mamdani fuzzy inference process is executed across four sequential stages [Slide 2, 5]:
1. **Step 1: Fuzzification** — Map crisp real-world inputs to degrees of membership in fuzzy sets [Slide 2].
2. **Step 2: Rule Evaluation** — Apply fuzzy logic operators (AND / OR) to evaluate antecedents and modify rule consequents [Slide 2].
3. **Step 3: Aggregation of Rule Outputs** — Unify the modified consequents across all rules into a single aggregate fuzzy set [Slide 2, 27].
4. **Step 4: Defuzzification** — Convert the aggregate fuzzy set into a single crisp scalar output via centroid calculation [Slide 2, 28].`,
      diagrams: [
        {
          id: "mamdani-4step-flow",
          title: "The Complete 4-Step Mamdani Fuzzy Inference Architecture",
          caption: "Figure 4.1: End-to-end flowchart of the Mamdani method illustrating fuzzification of inputs x1 and y1, evaluation of rules 1–3, aggregation of clipped consequents, and centroid defuzzification.",
          sourceRef: "Slide 5",
          svgPath: "/diagrams/mamdani-4step-flow.svg",
          originalPath: "/diagrams/mamdani-4step-flow-original.png"
        }
      ]
    },
    {
      id: "membership-function-mathematics",
      heading: "2. Membership Functions: Geometric Properties and Formulas",
      sourceRef: "Slide 7–17",
      content: `A **Membership Function (MF)** $\\mu_A(x)$ quantifies the grade of membership of element $x$ in fuzzy set $A$ [Slide 7].

### Structural Characteristics [Slide 7]
- **Support**: Elements with non-zero membership: $\\{x \\mid \\mu_A(x) > 0\\}$ [Slide 7].
- **Core**: Elements with full membership: $\\{x \\mid \\mu_A(x) = 1\\}$ [Slide 7].
- **$\\alpha$-Cut**: Crisp subset of elements with membership $\\ge \\alpha$: $A_\\alpha = \\{x \\mid \\mu_A(x) \\ge \\alpha\\}$ [Slide 7].
- **Height**: The maximum membership value attained: $\\text{Height}(A) = \\max_x \\mu_A(x)$ [Slide 7]. A set is *normal* if its height is 1.

### Mathematical Formulations [Slide 13–16]
1. **Triangular Membership Function: $tri[a, b, c]$** [Slide 13–15]:
   Defined by three scalar parameters: $a$ (left foot), $b$ (peak where $\\mu = 1$), and $c$ (right foot) [Slide 13].
   $$\\mu(x) = \\begin{cases} 0 & x < a \\\\ \\frac{x - a}{b - a} & a \\le x \\le b \\\\ \\frac{c - x}{c - b} & b \\le x \\le c \\\\ 0 & x > c \\end{cases}$$ [Slide 14, 15]
   In compact algebraic form:
   $$\\mu(x) = \\max\\left( \\min\\left( \\frac{x - a}{b - a}, \\frac{c - x}{c - b} \\right), 0 \\right)$$ [Slide 15].

2. **Trapezoidal Membership Function: $trap[a, b, c, d]$** [Slide 16]:
   Defined by four parameters: $a$ (left foot), $b$ (left shoulder), $c$ (right shoulder), $d$ (right foot) [Slide 16].
   $$\\mu(x) = \\begin{cases} 0 & x < a \\\\ \\frac{x - a}{b - a} & a \\le x \\le b \\\\ 1 & b \\le x \\le c \\\\ \\frac{d - x}{d - c} & c \\le x \\le d \\\\ 0 & x > d \\end{cases}$$ [Slide 16]
   In compact algebraic form:
   $$\\mu(x) = \\max\\left( \\min\\left( \\frac{x - a}{b - a}, 1, \\frac{d - x}{d - c} \\right), 0 \\right)$$ [Slide 16].`,
      diagrams: [
        {
          id: "membership-function-shapes",
          title: "Standard Fuzzy Membership Function Geometries",
          caption: "Figure 4.2: Geometry of Triangular (a,b,c), Trapezoidal (a,b,c,d), Gaussian, and Singleton membership functions.",
          sourceRef: "Slide 9–11",
          svgPath: "/diagrams/membership-function-shapes.svg"
        }
      ]
    },
    {
      id: "fuzzification-worked-case",
      heading: "3. Step 1: Fuzzification in Practice",
      sourceRef: "Slide 18–19",
      content: `In the canonical Project Risk example [Slide 18]:
- Crisp input $x_1 = 35\\%$ (Project Funding)
- Crisp input $y_1 = 60\\%$ (Project Staffing)

Fuzzy sets on the funding universe $X$ [Slide 19]:
- $A_1$ (Inadequate) $= trap[0, 0, 20, 50]$
- $A_2$ (Marginal) $= tri[30, 50, 75]$
- $A_3$ (Adequate) on upper range

Fuzzy sets on the staffing universe $Y$ [Slide 19]:
- $B_1$ (Small) $= trap[0, 0, 15, 65]$
- $B_2$ (Large) $= trap[35, 70, 100, 100]$

Evaluating memberships at $x_1 = 35$ and $y_1 = 60$ [Slide 18, 19]:
- For $A_1$: $x_1 = 35$ falls on the falling slope: $\\mu_{A_1}(35) = \\frac{50 - 35}{50 - 20} = \\frac{15}{30} = 0.5$ [Slide 18].
- For $A_2$: $x_1 = 35$ falls on the rising slope: $\\mu_{A_2}(35) = \\frac{35 - 30}{50 - 30} = \\frac{5}{20} = 0.25 \\approx 0.2$ [Slide 18].
- For $A_3$: $x_1 = 35$ is below the support: $\\mu_{A_3}(35) = 0.0$ [Slide 18, 22].
- For $B_1$: $y_1 = 60$ falls on the falling slope: $\\mu_{B_1}(60) = \\frac{65 - 60}{65 - 15} = \\frac{5}{50} = 0.1$ [Slide 18].
- For $B_2$: $y_1 = 60$ falls on the rising slope: $\\mu_{B_2}(60) = \\frac{60 - 35}{70 - 35} = \\frac{25}{35} \\approx 0.7$ [Slide 18].`,
      notes: [
        {
          title: "Rounding in Source Slides",
          content: "The source presentation rounds μA2(35) = 5/20 = 0.25 to 0.2, and μB2(60) = 25/35 ≈ 0.714 to 0.7 on Slide 18 and 22.",
          isDiscrepancy: true
        }
      ]
    },
    {
      id: "rule-evaluation-and-consequent-modification",
      heading: "4. Step 2: Rule Evaluation (Clipping vs. Scaling)",
      sourceRef: "Slide 20–26",
      content: `In Step 2, fuzzified inputs are applied to the antecedents of the fuzzy rule base [Slide 20]:
- **Fuzzy Union (OR)**: Disjunction of antecedents uses the maximum operator [Slide 21]:
  $$\\mu_{A \\cup B}(x) = \\max[\\mu_A(x), \\mu_B(x)]$$
- **Fuzzy Intersection (AND)**: Conjunction of antecedents uses the minimum operator [Slide 21]:
  $$\\mu_{A \\cap B}(x) = \\min[\\mu_A(x), \\mu_B(x)]$$

### Evaluating the Three Rules [Slide 22]
- **Rule 1**: \`IF x is A3 (0.0) OR y is B1 (0.1) THEN z is C1\`
  Firing strength $w_1 = \\max(0.0, 0.1) = 0.1$ [Slide 22].
- **Rule 2**: \`IF x is A2 (0.2) AND y is B2 (0.7) THEN z is C2\`
  Firing strength $w_2 = \\min(0.2, 0.7) = 0.2$ [Slide 22].
- **Rule 3**: \`IF x is A1 (0.5) THEN z is C3\`
  Firing strength $w_3 = 0.5$ [Slide 22].

### Consequent Modification: Clipping vs. Scaling [Slide 24–26]
Once firing strength $w$ is computed, it modifies the consequent fuzzy set $C_i$:
- **Clipping (Truncation)**: Slices the consequent membership function flat at height $w$ [Slide 24]. Simple to implement, but flattens the top and loses information about the original curve peak [Slide 24].
- **Scaling (Multiplication)**: Multiplies the entire consequent membership function by $w$: $\\mu_{\\text{scaled}}(z) = w \\cdot \\mu_{C_i}(z)$ [Slide 25]. Shrinks the shape uniformly, preserving the original geometric proportions and peak location [Slide 25].`
    },
    {
      id: "aggregation-and-defuzzification",
      heading: "5. Step 3 & 4: Aggregation and Centroid Defuzzification",
      sourceRef: "Slide 27–30",
      content: `### Step 3: Consequent Aggregation [Slide 27]
All modified (clipped) consequent fuzzy sets are unified into a single composite fuzzy set using the maximum operator:
$$\\mu_{\\text{aggregate}}(z) = \\max[\\mu_{C_1}^*(z), \\mu_{C_2}^*(z), \\mu_{C_3}^*(z)]$$ [Slide 27].

### Step 4: Centroid Defuzzification (Center of Gravity) [Slide 28–30]
The defuzzification step converts the composite fuzzy shape into a single crisp scalar [Slide 28].
The **Center of Gravity (COG)** represents the balance point where a vertical line slices the aggregate area into two equal halves [Slide 28, 29]:
$$\\text{COG} = \\frac{\\int_a^b \\mu_A(x) \\cdot x \\, dx}{\\int_a^b \\mu_A(x) \\, dx}$$ [Slide 29].
- *Numerator*: The **moment of the area**, weighting each position $x$ along the axis by the height of the curve [Slide 29 Notes].
- *Denominator*: The **total area** under the aggregate curve [Slide 29 Notes].

### Discrete Sampling Approximation [Slide 29, 30]
For digital computation, the integral is approximated across discrete sample points $z_i$:
$$\\text{COG} \\approx \\frac{\\sum_{i} z_i \\cdot \\mu(z_i)}{\\sum_{i} \\mu(z_i)}$$ [Slide 30].

Using sample intervals of 10 units on $Z \\in [0, 100]$ [Slide 30]:
- Points $z \\in \\{0, 10, 20\\}$ have height $\\mu = 0.1$
- Points $z \\in \\{30, 40, 50, 60\\}$ have height $\\mu = 0.2$
- Points $z \\in \\{70, 80, 90, 100\\}$ have height $\\mu = 0.5$

$$\\text{COG} = \\frac{(0 + 10 + 20) \\times 0.1 + (30 + 40 + 50 + 60) \\times 0.2 + (70 + 80 + 90 + 100) \\times 0.5}{3 \\times 0.1 + 4 \\times 0.2 + 4 \\times 0.5}$$
$$\\text{COG} = \\frac{30 \\times 0.1 + 180 \\times 0.2 + 340 \\times 0.5}{0.3 + 0.8 + 2.0} = \\frac{3 + 36 + 170}{3.1} = \\frac{209}{3.1} \\approx 67.4\\%$$ [Slide 30].`,
      diagrams: [
        {
          id: "mamdani-cog-defuzzification",
          title: "Center of Gravity Defuzzification Sampling",
          caption: "Figure 4.3: Discrete sample approximation of COG over universe Z yielding crisp risk output 67.4%.",
          sourceRef: "Slide 30",
          svgPath: "/diagrams/mamdani-cog-defuzzification.svg",
          originalPath: "/diagrams/mamdani-cog-defuzzification-original.png"
        }
      ]
    }
  ],
  solvedExamples: [
    {
      id: "ex-4-1",
      title: "Computing Triangular and Trapezoidal Memberships",
      difficulty: "Easy",
      sourceRef: "Slide 16–17",
      problemStatement: "A fuzzy temperature variable is defined with Trapezoidal MF Warm = trap[20, 25, 30, 35] (°C). Calculate the degree of membership for:\n1. T = 28°C\n2. T = 22°C\n3. T = 33°C [Slide 17]",
      steps: [
        {
          stepNumber: 1,
          title: "Evaluate T = 28°C",
          explanation: "For trap[20, 25, 30, 35], parameters are a=20, b=25, c=30, d=35. Since 25 ≤ 28 ≤ 30, the value falls on the flat top (core).",
          formulaOrCode: "μWarm(28) = 1.0"
        },
        {
          stepNumber: 2,
          title: "Evaluate T = 22°C",
          explanation: "Since 20 ≤ 22 ≤ 25, T falls on the rising slope: μ(x) = (x - a) / (b - a).",
          formulaOrCode: "μWarm(22) = (22 - 20) / (25 - 20) = 2 / 5 = 0.40"
        },
        {
          stepNumber: 3,
          title: "Evaluate T = 33°C",
          explanation: "Since 30 ≤ 33 ≤ 35, T falls on the falling slope: μ(x) = (d - x) / (d - c).",
          formulaOrCode: "μWarm(33) = (35 - 33) / (35 - 30) = 2 / 5 = 0.40"
        }
      ],
      finalAnswer: "μWarm(28) = 1.0, μWarm(22) = 0.40, μWarm(33) = 0.40 [Slide 17].",
      verificationNotes: "Matches the worked example on Slide 17."
    },
    {
      id: "ex-4-2",
      title: "Verifying Mamdani Centroid Defuzzification Numerics",
      difficulty: "Medium",
      sourceRef: "Slide 30",
      problemStatement: "Recompute the discrete Center of Gravity (COG) from Slide 30 where sampled heights are 0.1 at {0, 10, 20}, 0.2 at {30, 40, 50, 60}, and 0.5 at {70, 80, 90, 100}. Show exact numerator and denominator arithmetic [Slide 30].",
      steps: [
        {
          stepNumber: 1,
          title: "Compute Numerator (Moment of Area)",
          explanation: "Sum of each sample position multiplied by its curve height.",
          formulaOrCode: "Region 1: (0 + 10 + 20) × 0.1 = 30 × 0.1 = 3.0\nRegion 2: (30 + 40 + 50 + 60) × 0.2 = 180 × 0.2 = 36.0\nRegion 3: (70 + 80 + 90 + 100) × 0.5 = 340 × 0.5 = 170.0\nTotal Numerator = 3.0 + 36.0 + 170.0 = 209.0"
        },
        {
          stepNumber: 2,
          title: "Compute Denominator (Total Sampled Height)",
          explanation: "Sum of all sampled curve heights.",
          formulaOrCode: "Region 1: 3 × 0.1 = 0.3\nRegion 2: 4 × 0.2 = 0.8\nRegion 3: 4 × 0.5 = 2.0\nTotal Denominator = 0.3 + 0.8 + 2.0 = 3.1"
        },
        {
          stepNumber: 3,
          title: "Divide Numerator by Denominator",
          explanation: "Calculate the exact quotient.",
          formulaOrCode: "COG = 209 / 3.1 ≈ 67.41935... ≈ 67.4%"
        }
      ],
      finalAnswer: "Numerator = 209, Denominator = 3.1. COG = 209 / 3.1 ≈ 67.4% [Slide 30].",
      verificationNotes: "Recomputed arithmetic strictly confirms 67.4%."
    }
  ],
  practiceQuestions: [
    {
      id: "pq-4-1",
      chapterSlug: "mamdani-fuzzy-inference",
      chapterNumber: 4,
      chapterTitle: "Mamdani Fuzzy Inference Systems",
      question: "Given a triangular membership function tri[10, 25, 40], compute the membership degree for input x = 15 and input x = 34 [Slide 14–15].",
      difficulty: "Easy",
      sourceRef: "Slide 14–15",
      hints: [
        "For x = 15, determine if it lies between a and b.",
        "For x = 34, determine if it lies between b and c."
      ],
      solutionSteps: [
        "Step 1: Parameters are a = 10, b = 25, c = 40.",
        "Step 2: For x = 15, x is between a and b: μ(15) = (15 - 10) / (25 - 10) = 5 / 15 = 1/3 ≈ 0.333.",
        "Step 3: For x = 34, x is between b and c: μ(34) = (40 - 34) / (40 - 25) = 6 / 15 = 2/5 = 0.40."
      ],
      finalAnswer: "μ(15) = 1/3 ≈ 0.333, μ(34) = 0.40 [Slide 14–15]."
    },
    {
      id: "pq-4-2",
      chapterSlug: "mamdani-fuzzy-inference",
      chapterNumber: 4,
      chapterTitle: "Mamdani Fuzzy Inference Systems",
      question: "Contrast the clipping and scaling consequent modification methods. Which method loses more information, and why? [Slide 24–25]",
      difficulty: "Medium",
      sourceRef: "Slide 24–25",
      hints: [
        "What happens to the top peak of the triangle in clipping?",
        "What happens to the overall shape in scaling?"
      ],
      solutionSteps: [
        "Step 1: Clipping slices the consequent membership function flat at height w. The top of the membership function is cut off, turning triangles into trapezoids [Slide 24].",
        "Step 2: Scaling multiplies all membership values by w: μ_scaled(z) = w × μ(z). It shrinks the entire curve while preserving its original triangular or trapezoidal geometry and the distinct location of its peak [Slide 25].",
        "Step 3: Clipping loses more information because any distinguishing shape above the threshold w is completely erased into a flat horizontal ceiling [Slide 24, 25]."
      ],
      finalAnswer: "Clipping loses more information because slicing flattens the top of the membership function; scaling preserves the original shape and relative peak position by multiplying all degrees by w [Slide 24, 25]."
    },
    {
      id: "pq-4-3",
      chapterSlug: "mamdani-fuzzy-inference",
      chapterNumber: 4,
      chapterTitle: "Mamdani Fuzzy Inference Systems",
      question: "In Mamdani inference, why is defuzzification necessary in industrial engineering applications, and why is the centroid method preferred over maximum-height methods? [Slide 28–29]",
      difficulty: "Hard",
      sourceRef: "Slide 28–29",
      hints: [
        "Can a mechanical valve accept a fuzzy set as an input?",
        "Consider what happens to the output if small input changes occur."
      ],
      solutionSteps: [
        "Step 1: Real-world physical actuators (such as motor speed controllers, valves, or heating elements) require a single crisp numerical control voltage or percentage, not a fuzzy distribution [Slide 28].",
        "Step 2: Maximum-height defuzzification methods (e.g., Mean of Maxima) can jump discontinuously when small input variations shift the maximum between multiple peaks.",
        "Step 3: The Centroid / COG method integrates across the entire aggregate shape, producing smooth, continuous transitions and incorporating contributions from all active rules [Slide 28, 29]."
      ],
      finalAnswer: "Physical actuators require single crisp numerical values to operate. The centroid technique is preferred because it yields smooth, continuous transitions that account for the full area and all active rules [Slide 28, 29]."
    }
  ],
  keyTakeaways: [
    "Mamdani fuzzy inference consists of four steps: Fuzzification, Rule Evaluation, Aggregation, and Defuzzification.",
    "Triangular MFs are defined by 3 parameters (a, b, c); Trapezoidal MFs by 4 parameters (a, b, c, d).",
    "Rule evaluation uses min for conjunction (AND) and max for disjunction (OR).",
    "Clipping truncates the consequent set flat at firing strength w; scaling multiplies the set by w, preserving shape.",
    "Centroid (Center of Gravity) defuzzification calculates the balance point: COG = ∫ μ(x)x dx / ∫ μ(x) dx, estimated discretely as ∑ z·μ(z) / ∑ μ(z)."
  ]
};

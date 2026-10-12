import { ChapterData } from "../types";

export const chapter5: ChapterData = {
  slug: "sugeno-fuzzy-inference",
  chapterNumber: 5,
  title: "Sugeno Fuzzy Inference Systems & Controller Design",
  shortDescription: "Computational efficiency, fuzzy singletons, zero-order & first-order models, weighted average defuzzification, and complete fan speed controller design.",
  sourceFile: "3.6- Fuzzy Inference - Sugeno Style.pptx & Sugeno_Fan_Speed_Solution.pptx",
  sourceRange: "Sugeno Slides 1–9 & Solution Slides 1–8",
  estimatedReadTime: "22 min",
  learningObjectives: [
    "Identify the computational limitations of Mamdani centroid integration and explain the rationale for the Sugeno method (Michio Sugeno, 1985).",
    "Define a fuzzy singleton and contrast it against continuous membership distributions.",
    "Formulate Zero-Order Sugeno rules (consequent z = k) and First-Order Sugeno rules (consequent z = f(x, y)).",
    "Trace Sugeno rule evaluation, singleton aggregation, and Weighted Average (WA) defuzzification.",
    "Execute numerical defuzzification using the formula WA = ∑(wi · ki) / ∑ wi.",
    "Compare Mamdani and Sugeno paradigms across engineering criteria: intuitiveness, computational overhead, and optimization compatibility (ANFIS).",
    "Design an end-to-end Sugeno fuzzy logic controller from engineering specifications.",
    "Solve the complete Fan Speed Controller case study: input fuzzification, rule firing strength determination, spike aggregation, and weighted average defuzzification."
  ],
  keyDefinitions: [
    {
      term: "Fuzzy Singleton",
      definition: "A fuzzy set whose membership function is unity (μ = 1) at a single discrete point on the universe of discourse and zero everywhere else.",
      sourceRef: "Sugeno Slide 1"
    },
    {
      term: "Zero-Order Sugeno Model",
      definition: "A fuzzy system where rule consequents are constant real values (fuzzy singletons): IF x is A AND y is B THEN z is k.",
      sourceRef: "Sugeno Slide 3"
    },
    {
      term: "First-Order Sugeno Model",
      definition: "A fuzzy system where rule consequents are linear mathematical functions of input variables: IF x is A AND y is B THEN z is p·x + q·y + r.",
      sourceRef: "Sugeno Slide 2"
    },
    {
      term: "Weighted Average (WA) Defuzzification",
      definition: "Sugeno defuzzification method that weights each singleton position k_i by its antecedent firing strength w_i: WA = ∑(w_i · k_i) / ∑ w_i.",
      sourceRef: "Sugeno Slide 6"
    }
  ],
  sections: [
    {
      id: "motivation-and-singletons",
      heading: "1. Motivation for the Sugeno Method & Fuzzy Singletons",
      sourceRef: "Sugeno Slide 1–3",
      content: `In Mamdani-style inference, defuzzification requires finding the centroid of a complex two-dimensional geometric shape by integrating across a continuously varying function [Sugeno Slide 1]. This integration entails a substantial computational burden, making Mamdani systems inefficient for real-time, high-frequency embedded controllers [Sugeno Slide 1, 7].

To solve this computational bottleneck, **Michio Sugeno (1985)** proposed replacing the continuous fuzzy consequent set with a mathematical function or a single spike called a **fuzzy singleton** [Sugeno Slide 1].

A **fuzzy singleton** is a fuzzy set whose membership function is unity at a single particular point on the universe of discourse and zero everywhere else [Sugeno Slide 1]:
$$\\mu(z) = \\begin{cases} 1 & \\text{if } z = k \\\\ 0 & \\text{otherwise} \\end{cases}$$ [Sugeno Slide 1].

In the **Zero-Order Sugeno Model**, rules take the form [Sugeno Slide 3]:
$$\\text{IF } x \\text{ is } A \\text{ AND } y \\text{ is } B \\text{ THEN } z \\text{ is } k$$
Where $k$ is a constant real number representing an output singleton [Sugeno Slide 3]. All consequent membership functions are represented as vertical spikes [Sugeno Slide 3].`
    },
    {
      id: "sugeno-inference-mechanism",
      heading: "2. The Sugeno Inference Mechanism & Weighted Average",
      sourceRef: "Sugeno Slide 4–6",
      content: `The Sugeno inference process proceeds as follows [Sugeno Slide 4–6]:
1. **Fuzzification and Rule Evaluation**: Identical to Mamdani. Inputs are mapped to fuzzy sets, and antecedent conjunctions/disjunctions are evaluated using $\\min$ (AND) and $\\max$ (OR) to determine rule firing strengths $w_i$ [Sugeno Slide 4; Solution Slide 6].
2. **Consequent Application**: Each active rule produces a singleton spike at constant value $k_i$ with height equal to firing strength $w_i$ [Sugeno Slide 4; Solution Slide 7].
3. **Aggregation**: Unlike Mamdani, there are no continuous overlapping shapes to compute unions over. Spikes simply retain their individual heights and locations: $(k_i, w_i)$ pairs [Sugeno Slide 5; Solution Slide 7].
4. **Defuzzification via Weighted Average (WA)** [Sugeno Slide 6]:
   $$WA = \\frac{\\sum_{i} w_i \\cdot k_i}{\\sum_{i} w_i}$$ [Sugeno Slide 6].

### Worked 3-Rule Example [Sugeno Slide 6]
- Rule 1: Firing $w_1 = 0.1$, Singleton $k_1 = 20$
- Rule 2: Firing $w_2 = 0.2$, Singleton $k_2 = 50$
- Rule 3: Firing $w_3 = 0.5$, Singleton $k_3 = 80$

$$WA = \\frac{0.1 \\times 20 + 0.2 \\times 50 + 0.5 \\times 80}{0.1 + 0.2 + 0.5} = \\frac{2 + 10 + 40}{0.8} = \\frac{52}{0.8} = 65$$ [Sugeno Slide 6].`,
      diagrams: [
        {
          id: "sugeno-inference-process",
          title: "Sugeno Singleton Rule Evaluation & Weighted Average Defuzzification",
          caption: "Figure 5.1: Zero-order Sugeno inference process: rule evaluation yields firing strengths (0.1, 0.2, 0.5) applied to singletons (20, 50, 80), defuzzifying to 65.",
          sourceRef: "Sugeno Slide 4–6",
          svgPath: "/diagrams/sugeno-inference-process.svg",
          originalPath: "/diagrams/sugeno-inference-process-original.png"
        }
      ]
    },
    {
      id: "mamdani-vs-sugeno-comparison",
      heading: "3. Comparative Analysis: Mamdani vs. Sugeno",
      sourceRef: "Sugeno Slide 7",
      content: `The slide presentation explicitly compares both methodologies [Sugeno Slide 7]:

| Criteria | Mamdani Method | Sugeno Method |
| :--- | :--- | :--- |
| **Knowledge Capture** | Widely accepted for capturing human expert knowledge; intuitive and transparent [Sugeno Slide 7]. | Less intuitive for human knowledge expression; operates with numerical functions [Sugeno Slide 7]. |
| **Computational Overhead** | Entails substantial computational burden due to 2D continuous integration [Sugeno Slide 7]. | Extremely computationally effective; simple weighted average of spikes [Sugeno Slide 7]. |
| **Mathematical Optimization** | Difficult to tune with analytic gradient-based optimization algorithms. | Highly compatible with optimization and adaptive neural techniques (e.g., ANFIS) [Sugeno Slide 7]. |
| **Primary Domain** | Decision support systems, risk analysis, medical diagnostics. | Real-time industrial control systems, robotics, dynamic non-linear control [Sugeno Slide 7]. |`
    },
    {
      id: "case-study-fan-speed-controller",
      heading: "4. Comprehensive Worked Case Study: Fan Speed Controller",
      sourceRef: "Sugeno Slide 8–9 & Solution Slide 1–8",
      content: `### Problem Specification [Sugeno Slide 8; Solution Slide 4]
Design a Zero-Order Sugeno fuzzy inference system to automatically adjust Fan Speed based on Room Temperature and Relative Humidity.

**Universes of Discourse** [Sugeno Slide 8; Solution Slide 4]:
- Temperature ($T$): $[0, 40]^\\circ\\text{C}$
- Relative Humidity ($H$): $[0, 100]\\%$
- Fan Speed ($z$): $[0, 100]\\%$ (% of maximum capacity)

**Input Fuzzy Sets** [Solution Slide 4]:
- *Temperature (°C)*:
  - $\\text{Cool} = trap[0, 0, 18, 24]$
  - $\\text{Warm} = tri[22, 28, 34]$
  - $\\text{Hot} = trap[30, 35, 40, 40]$
- *Relative Humidity (%)*:
  - $\\text{Dry} = trap[0, 0, 20, 40]$
  - $\\text{Normal} = tri[35, 55, 75]$
  - $\\text{Humid} = trap[65, 80, 100, 100]$

**Output Fuzzy Singletons** [Solution Slide 4]:
$$\\text{Low} = 10, \\quad \\text{Medium} = 50, \\quad \\text{High} = 90$$

**Rule Base** [Solution Slide 4]:
- **R1**: IF Temperature is Cool AND Humidity is Dry THEN Fan Speed is Low ($k = 10$)
- **R2**: IF Temperature is Warm AND Humidity is Normal THEN Fan Speed is Medium ($k = 50$)
- **R3**: IF Temperature is Hot AND Humidity is Humid THEN Fan Speed is High ($k = 90$)
- **R4**: IF Temperature is Hot AND Humidity is Dry THEN Fan Speed is Medium ($k = 50$)
- **R5**: IF Temperature is Cool AND Humidity is Humid THEN Fan Speed is Medium ($k = 50$)

**Operating Point**: $T = 31^\\circ\\text{C}$ and $H = 70\\%$ [Solution Slide 4, 5].`,
      diagrams: [
        {
          id: "sugeno-fan-speed-controller",
          title: "Sugeno Fan Speed Controller Fuzzification & Solution",
          caption: "Figure 5.2: Fuzzification curves for Temperature (T=31°C) and Humidity (H=70%), rule firing evaluation, singleton spikes, and weighted average defuzzification (67.78%).",
          sourceRef: "Solution Slide 2, 5, 7, 8",
          svgPath: "/diagrams/sugeno-fan-speed-controller.svg",
          originalPath: "/diagrams/sugeno-fan-speed-controller-original.png"
        }
      ]
    },
    {
      id: "fan-speed-step-by-step-working",
      heading: "5. Fan Speed Controller: Detailed Calculations & Verification",
      sourceRef: "Solution Slide 5–8",
      content: `### (a) Fuzzification at $T = 31^\\circ\\text{C}$ and $H = 70\\%$ [Solution Slide 5]
1. **Temperature Memberships**:
   - $\\mu_{\\text{Cool}}(31) = 0$ (since $31 > 24$, outside support) [Solution Slide 5].
   - $\\mu_{\\text{Warm}}(31)$: Falls on falling slope of $tri[22, 28, 34]$:
     $$\\mu_{\\text{Warm}}(31) = \\frac{34 - 31}{34 - 28} = \\frac{3}{6} = 0.5$$ [Solution Slide 5].
   - $\\mu_{\\text{Hot}}(31)$: Falls on rising slope of $trap[30, 35, 40, 40]$:
     $$\\mu_{\\text{Hot}}(31) = \\frac{31 - 30}{35 - 30} = \\frac{1}{5} = 0.2$$ [Solution Slide 5].

2. **Humidity Memberships**:
   - $\\mu_{\\text{Dry}}(70) = 0$ (since $70 > 40$, outside support) [Solution Slide 5].
   - $\\mu_{\\text{Normal}}(70)$: Falls on falling slope of $tri[35, 55, 75]$:
     $$\\mu_{\\text{Normal}}(70) = \\frac{75 - 70}{75 - 55} = \\frac{5}{20} = 0.25$$ [Solution Slide 5].
   - $\\mu_{\\text{Humid}}(70)$: Falls on rising slope of $trap[65, 80, 100, 100]$:
     $$\\mu_{\\text{Humid}}(70) = \\frac{70 - 65}{80 - 65} = \\frac{5}{15} = \\frac{1}{3} \\approx 0.33$$ [Solution Slide 5].

### (b) Rule Evaluation ($AND = \\min$) [Solution Slide 6]

| Rule | Antecedent Conjunction | Evaluation | Consequent $k$ | Firing Strength $w$ |
| :--- | :--- | :--- | :--- | :--- |
| **R1** | Cool AND Dry | $\\min(0, 0)$ | Low = 10 | $w_1 = 0$ [Solution Slide 6] |
| **R2** | Warm AND Normal | $\\min(0.5, 0.25)$ | Medium = 50 | $w_2 = 0.25$ [Solution Slide 6] |
| **R3** | Hot AND Humid | $\\min(0.2, 0.33)$ | High = 90 | $w_3 = 0.20$ [Solution Slide 6] |
| **R4** | Hot AND Dry | $\\min(0.2, 0)$ | Medium = 50 | $w_4 = 0$ [Solution Slide 6] |
| **R5** | Cool AND Humid | $\\min(0, 0.33)$ | Medium = 50 | $w_5 = 0$ [Solution Slide 6] |

*Active Rules*: Only rules **R2** and **R3** fire ($w > 0$). Rules R1, R4, and R5 contribute nothing [Solution Slide 6].

### (c) Aggregation [Solution Slide 7]
Collect the active $(k_i, w_i)$ pairs [Solution Slide 7]:
- From R2: $(k = 50, w = 0.25)$
- From R3: $(k = 90, w = 0.20)$
- All other rules have $w = 0$, producing no visible spike [Solution Slide 7].

### (d) Defuzzification: Weighted Average [Solution Slide 8]
$$z = \\frac{\\sum (w \\times k)}{\\sum w} = \\frac{0.25 \\times 50 + 0.20 \\times 90}{0.25 + 0.20}$$
$$z = \\frac{12.5 + 18.0}{0.45} = \\frac{30.5}{0.45} \\approx 67.78\\%$$ [Solution Slide 8].

### Sanity Checks from Source Material [Solution Slide 8]:
1. $z = 67.78\\%$ lies strictly between active consequents 50 and 90 ✓ [Solution Slide 8].
2. $z$ is slightly closer to 50 than 90 because $w_2$ ($0.25$) is larger than $w_3$ ($0.20$) ✓ [Solution Slide 8].
3. Dividing by $\\sum w = 0.45$ normalizes the calculation. Without division, we would obtain $30.5$, which is unnormalized and mathematically invalid [Solution Slide 8].`
    }
  ],
  solvedExamples: [
    {
      id: "ex-5-1",
      title: "Zero-Order Sugeno 3-Rule Defuzzification",
      difficulty: "Easy",
      sourceRef: "Sugeno Slide 6",
      problemStatement: "A zero-order Sugeno fuzzy controller evaluates three rules with output singletons k1 = 20, k2 = 50, and k3 = 80. The antecedent evaluations yield firing strengths w1 = 0.1, w2 = 0.2, and w3 = 0.5. Calculate the crisp output using the weighted average method [Sugeno Slide 6].",
      steps: [
        {
          stepNumber: 1,
          title: "Identify Firing Strengths and Singletons",
          explanation: "Given parameters: w1 = 0.1, k1 = 20; w2 = 0.2, k2 = 50; w3 = 0.5, k3 = 80 [Sugeno Slide 6].",
          formulaOrCode: "Pairs: (20, 0.1), (50, 0.2), (80, 0.5)"
        },
        {
          stepNumber: 2,
          title: "Compute Numerator (Weighted Sum)",
          explanation: "Calculate ∑(wi · ki).",
          formulaOrCode: "Numerator = 0.1 × 20 + 0.2 × 50 + 0.5 × 80 = 2 + 10 + 40 = 52.0"
        },
        {
          stepNumber: 3,
          title: "Compute Denominator (Sum of Firing Strengths)",
          explanation: "Calculate ∑ wi.",
          formulaOrCode: "Denominator = 0.1 + 0.2 + 0.5 = 0.8"
        },
        {
          stepNumber: 4,
          title: "Compute Weighted Average",
          explanation: "Divide weighted sum by total firing strength.",
          formulaOrCode: "WA = 52 / 0.8 = 65.0"
        }
      ],
      finalAnswer: "WA = 65.0 [Sugeno Slide 6].",
      verificationNotes: "Matches the exact numeric solution on Sugeno Slide 6."
    },
    {
      id: "ex-5-2",
      title: "Sugeno Fan Speed Controller Fuzzification and Firing Strengths",
      difficulty: "Medium",
      sourceRef: "Solution Slide 5–6",
      problemStatement: "For the Sugeno fan speed controller, verify whether Rule 4 (IF Temperature is Hot AND Humidity is Dry THEN Fan Speed is Medium) contributes to the actuator output at T = 31°C and H = 70% [Solution Slide 5, 6].",
      steps: [
        {
          stepNumber: 1,
          title: "Evaluate Temperature Membership for Hot",
          explanation: "Hot is defined as trap[30, 35, 40, 40]. At T = 31°C: μHot(31) = (31 - 30) / (35 - 30) = 1 / 5 = 0.2.",
          formulaOrCode: "μHot(31) = 0.2"
        },
        {
          stepNumber: 2,
          title: "Evaluate Humidity Membership for Dry",
          explanation: "Dry is defined as trap[0, 0, 20, 40]. Since H = 70% > 40%, it is outside the right foot d of the trapezoid.",
          formulaOrCode: "μDry(70) = 0.0"
        },
        {
          stepNumber: 3,
          title: "Apply AND Operator to Rule 4 Antecedents",
          explanation: "The rule connective is AND, which uses the minimum operator: w4 = min(μHot, μDry).",
          formulaOrCode: "w4 = min(0.2, 0.0) = 0.0"
        }
      ],
      finalAnswer: "Firing strength w4 = 0.0. Rule 4 does NOT contribute to the output because relative humidity of 70% has zero membership in the 'Dry' fuzzy set [Solution Slide 6].",
      verificationNotes: "Confirmed against Rule 4 entry in the table on Solution Slide 6."
    }
  ],
  practiceQuestions: [
    {
      id: "pq-5-1",
      chapterSlug: "sugeno-fuzzy-inference",
      chapterNumber: 5,
      chapterTitle: "Sugeno Fuzzy Inference Systems & Controller Design",
      question: "Fuzzify an ambient temperature of T = 25°C using the fuzzy sets Cool = trap[0, 0, 18, 24], Warm = tri[22, 28, 34], and Hot = trap[30, 35, 40, 40] from the Fan Speed controller [Solution Slide 4, 5].",
      difficulty: "Easy",
      sourceRef: "Solution Slide 4, 5",
      hints: [
        "Check which set intervals contain T = 25°C.",
        "Apply the rising or falling linear formulas."
      ],
      solutionSteps: [
        "Step 1: Cool = trap[0, 0, 18, 24]. Since 25 > 24, μCool(25) = 0.0.",
        "Step 2: Warm = tri[22, 28, 34]. Since 22 ≤ 25 ≤ 28, it lies on the rising slope: μWarm(25) = (25 - 22) / (28 - 22) = 3 / 6 = 0.50.",
        "Step 3: Hot = trap[30, 35, 40, 40]. Since 25 < 30, μHot(25) = 0.0."
      ],
      finalAnswer: "μCool(25) = 0.0, μWarm(25) = 0.50, μHot(25) = 0.0 [Solution Slide 4, 5]."
    },
    {
      id: "pq-5-2",
      chapterSlug: "sugeno-fuzzy-inference",
      chapterNumber: 5,
      chapterTitle: "Sugeno Fuzzy Inference Systems & Controller Design",
      question: "Explain why the Sugeno method is widely favored over the Mamdani method in dynamic real-time industrial controllers, despite Mamdani being more intuitive to human experts [Sugeno Slide 7].",
      difficulty: "Medium",
      sourceRef: "Sugeno Slide 7",
      hints: [
        "Compare centroid defuzzification integration against weighted average sums.",
        "Consider microcontrollers with limited floating-point power."
      ],
      solutionSteps: [
        "Step 1: Mamdani defuzzification requires 2D numerical integration across complex clipped shapes, which is computationally expensive and slow for microcontrollers executing high-speed control loops [Sugeno Slide 1, 7].",
        "Step 2: Sugeno defuzzification replaces integration with a simple weighted average formula (∑ w·k / ∑ w), which requires only basic multiplications and additions [Sugeno Slide 6, 7].",
        "Step 3: Sugeno models are mathematically differentiable and integrate seamlessly with adaptive neuro-fuzzy learning techniques (such as ANFIS) to auto-tune parameters from sensor data [Sugeno Slide 7]."
      ],
      finalAnswer: "Sugeno avoids the computational burden of 2D geometric integration by using a simple weighted average of singletons, making it ideal for high-speed microcontrollers and adaptive parameter tuning (ANFIS) [Sugeno Slide 7]."
    },
    {
      id: "pq-5-3",
      chapterSlug: "sugeno-fuzzy-inference",
      chapterNumber: 5,
      chapterTitle: "Sugeno Fuzzy Inference Systems & Controller Design",
      question: "In a First-Order Sugeno fuzzy controller, Rule 1 has consequent z1 = 2x + y and Rule 2 has consequent z2 = x + 3y. If inputs are x = 4, y = 5, and antecedent firing strengths are w1 = 0.4 and w2 = 0.6, calculate the crisp output z* [Sugeno Slide 2, 6].",
      difficulty: "Hard",
      sourceRef: "Sugeno Slide 2, 6",
      hints: [
        "First compute the numerical values of z1 and z2 using inputs x and y.",
        "Then apply the weighted average formula with w1 and w2."
      ],
      solutionSteps: [
        "Step 1: Compute linear consequent values for given inputs x = 4 and y = 5:\nz1 = 2(4) + 5 = 8 + 5 = 13\nz2 = 4 + 3(5) = 4 + 15 = 19 [Sugeno Slide 2].",
        "Step 2: Compute weighted numerator: ∑(wi · zi) = w1·z1 + w2·z2 = (0.4 × 13) + (0.6 × 19) = 5.2 + 11.4 = 16.6 [Sugeno Slide 6].",
        "Step 3: Compute denominator: ∑ wi = w1 + w2 = 0.4 + 0.6 = 1.0.",
        "Step 4: Compute final output: z* = 16.6 / 1.0 = 16.6."
      ],
      finalAnswer: "z* = 16.6 [Sugeno Slide 2, 6]."
    }
  ],
  keyTakeaways: [
    "The Sugeno method replaces continuous consequent fuzzy sets with singletons (zero-order) or linear equations (first-order).",
    "Defuzzification is performed via Weighted Average (WA = ∑ w·k / ∑ w), bypassing computationally heavy 2D centroid integration.",
    "Sugeno is computationally efficient, suitable for real-time control and adaptive tuning (ANFIS), while Mamdani is preferred for intuitive human knowledge representation.",
    "In the Fan Speed case study with T = 31°C and H = 70%, only R2 (w=0.25, k=50) and R3 (w=0.20, k=90) fire, yielding a crisp fan speed of 67.78%."
  ]
};

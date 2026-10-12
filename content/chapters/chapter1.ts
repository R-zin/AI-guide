import { ChapterData } from "../types";

export const chapter1: ChapterData = {
  slug: "expert-systems",
  chapterNumber: 1,
  title: "Expert Systems Fundamentals & Architecture",
  shortDescription: "Core architecture, early systems (DENDRAL, MYCIN), explanation facilities (WHY/HOW), and comparative analysis of expert systems.",
  sourceFile: "Expert System.pdf",
  sourceRange: "PDF pp. 1–17",
  estimatedReadTime: "18 min",
  learningObjectives: [
    "Define what an Expert System is and explain the fundamental equation: Inference Engine + Knowledge Base = Expert System.",
    "Contrast human expert reasoning capabilities against artificial expert system behavior.",
    "Explain the history and operational significance of landmark systems including DENDRAL and MYCIN.",
    "Analyze the four primary structural components: Knowledge Base, Working Database, Inference Engine, and User Interface.",
    "Identify the distinct roles of the Domain Expert, Knowledge Engineer, Programmer/System Engineer, and End User.",
    "Distinguish between WHY queries (current active rule) and HOW queries (chain of fired rules) in explanation subsystems.",
    "Compare Conventional Systems against Expert Systems, and Human Experts against Expert Systems across key operational dimensions.",
    "Evaluate real-world industry applications and recognize inherent limitations such as knowledge brittleness and lack of common sense."
  ],
  keyDefinitions: [
    {
      term: "Expert System (ES)",
      definition: "Software that attempts to reproduce the performance of one or more human experts, typically in a specific problem domain, employing human knowledge represented in a computer to solve problems that ordinarily require human expertise.",
      sourceRef: "PDF p. 4"
    },
    {
      term: "Inference Engine",
      definition: "The core processing component containing reasoning principles, inference algorithms, and conflict resolution strategies that derives new knowledge from existing facts.",
      sourceRef: "PDF p. 8, 9"
    },
    {
      term: "Knowledge Base",
      definition: "The repository containing domain knowledge, principles of system functioning, and problem-solving rules obtained from domain experts.",
      sourceRef: "PDF p. 8"
    },
    {
      term: "Knowledge Engineer",
      definition: "The specialist who communicates with the human domain expert to elicit, structure, and model the expert's heuristics into an executable knowledge base.",
      sourceRef: "PDF p. 10"
    },
    {
      term: "Explanation Facility (WHY / HOW)",
      definition: "Subsystem enabling the ES to justify its reasoning: WHY returns the rule currently being evaluated; HOW returns the sequence of rules previously fired to establish a conclusion.",
      sourceRef: "PDF p. 12"
    }
  ],
  sections: [
    {
      id: "introduction-and-definition",
      heading: "1. What is an Expert System?",
      sourceRef: "PDF pp. 3–4",
      content: `Human experts possess considerable knowledge about their areas of expertise, can learn from experience, perform reasoning, explain solutions, restructure their knowledge, and discern relevance [PDF p. 3].

An **Expert System (ES)** is software that simulates the problem-solving behavior of a human expert in a specific domain. It employs human knowledge represented inside a computer to address problems that traditionally require human expertise [PDF p. 4].

The fundamental architectural distinction between traditional computing and expert systems is encapsulated by the foundational formula:

\`\`\`
Traditional Computer:  Algorithm  + Data Structures = Program
Expert System:         Inference Engine + Knowledge = Expert System
\`\`\` [PDF p. 4]

In traditional programming, procedural algorithms and data structures are tightly coupled. In an expert system, the domain knowledge (facts and rules) is strictly separated from the domain-independent reasoning mechanism (the inference engine).`,
      notes: [
        {
          title: "Architectural Decoupling",
          content: "Separating the knowledge base from the inference engine allows domain experts to add or edit problem-solving rules without rewriting the underlying execution engine."
        }
      ]
    },
    {
      id: "why-use-expert-systems",
      heading: "2. Why Use Expert Systems?",
      sourceRef: "PDF p. 5",
      content: `Deploying expert systems provides critical advantages over relying solely on human personnel:
- **Preservation of Expertise**: Captures and permanently preserves irreplaceable human expertise that would otherwise be lost due to retirement, resignation, or mortality [PDF p. 5].
- **Ubiquitous and Hazardous Deployment**: Provides specialized decision support simultaneously across numerous geographical locations or within environments dangerous to human health (e.g., nuclear plants, space exploration, deep-sea mining) [PDF p. 5].
- **Objective and Rapid Execution**: Delivers unemotional, unbiased, and objective solutions substantially faster than human deliberation [PDF p. 5].
- **Cost Reduction and Democratization**: Mitigates the high expense of rare specialists by making high-level expertise widely accessible to non-experts at minimal marginal cost [PDF p. 5].`
    },
    {
      id: "historical-milestones-and-variants",
      heading: "3. Landmark Systems and Modern Variants",
      sourceRef: "PDF pp. 6–7",
      content: `### Early Milestone Systems
1. **DENDRAL (Early 1970s, Stanford University)** [PDF p. 6]:
   - Recognized as the *first knowledge-intensive expert system*.
   - Developed for chemical analysis to predict 3D molecular structures of complex chemical compounds from mass spectrometer data.
2. **MYCIN (Mid 1970s, Stanford University)** [PDF p. 6]:
   - Designed to diagnose severe infectious blood diseases (such as bacteremia and meningitis).
   - Recommended antibiotic therapies and automatically calculated dosages adjusted for the patient's body weight.
   - Named after the antibiotic class suffix (*-mycin*).

### Modern Systems & Architectural Variants
- **SHINE**: Developed by NASA for monitoring, analyzing, and diagnosing real-time and non-real-time spacecraft systems [PDF p. 7].
- **Siri**: Apple's interactive dialog system incorporating conversational expert reasoning [PDF p. 7].
- **Blue Cross**: Automated insurance claim processing system [PDF p. 7].
- **System Variants** [PDF p. 7]:
  - *Rule-Based Expert Systems*: Operate via explicit IF-THEN production rules.
  - *Fuzzy Expert Systems*: Handle imprecise or gradational truth values.
  - *Neural Expert Systems*: Combine connectionist learning with inference.
  - *Neuro-Fuzzy Expert Systems*: Hybrid systems combining fuzzy reasoning with neural network adaptation.`
    },
    {
      id: "general-structure-and-components",
      heading: "4. Architecture and Structural Components",
      sourceRef: "PDF pp. 8–9",
      content: `The architecture of an expert system comprises three principal subsystems interacting with the external user [PDF p. 8]:
1. **Knowledge Base (KB)**: Contains domain-specific facts, heuristics, operational constraints, and IF-THEN rules governing problem solving [PDF p. 8].
2. **Data Base / Working Storage**: Contains transient situational facts describing the current state of the specific problem case being evaluated [PDF p. 8].
3. **Inference Engine**: Executes logical deductions using forward or backward chaining and applies conflict resolution strategies to decide which rules fire [PDF p. 8].
4. **Knowledge Acquisition & Learning Module**: Facilitates the transfer of knowledge from domain experts into the formal rule base [PDF p. 9].
5. **User Interface**: Handles bidirectional communication, receiving problem facts from the user and returning inferred solutions and explanations [PDF p. 9].`,
      diagrams: [
        {
          id: "es-components",
          title: "Expert System Components and Information Flow",
          caption: "Figure 1.1: Functional architecture of an Expert System illustrating User Interface, Knowledge Base, and Inference Engine.",
          sourceRef: "PDF p. 9",
          svgPath: "/diagrams/es-components.svg",
          originalPath: "/diagrams/es-components-original.png"
        }
      ]
    },
    {
      id: "design-roles",
      heading: "5. Design Participants and Roles",
      sourceRef: "PDF pp. 10–11",
      content: `The development and deployment lifecycle involves four key human participants [PDF p. 10]:
1. **Domain Expert**: The human specialist who possesses the tacit problem-solving knowledge, heuristics, and experience in the specific field.
2. **Knowledge Engineer**: The intermediary who interviews the domain expert, extracts problem-solving heuristics, and models them into structured formal representations.
3. **Programmer / System Engineer**: Builds, optimizes, and maintains the computer programs, inference engine modules, and system interfaces.
4. **End User**: The client or non-expert practitioner who provides problem data to obtain authoritative recommendations.`,
      diagrams: [
        {
          id: "es-architecture-roles",
          title: "Expert System Design Participants and Lifecycle Flow",
          caption: "Figure 1.2: Interaction flow between Domain Expert, Knowledge Engineer, Programmer, and End User relative to system storage.",
          sourceRef: "PDF p. 11",
          svgPath: "/diagrams/es-architecture-roles.svg",
          originalPath: "/diagrams/es-architecture-roles-original.png"
        }
      ]
    },
    {
      id: "explanation-facilities",
      heading: "6. Explanation in Reasoning: WHY and HOW",
      sourceRef: "PDF p. 12",
      content: `A defining characteristic of an expert system is its ability to inspect its own reasoning trace and justify its conclusions. An ES answers two essential questions [PDF p. 12]:

- **WHY Query ("Why are you asking for this information?")**:
  - Posed when the system prompts the user for an input fact.
  - The system responds by displaying the **rule currently being evaluated (fired)**, showing what hypothesis or goal it is attempting to verify [PDF p. 12].

- **HOW Query ("How did you reach that conclusion?")**:
  - Posed when the system presents a recommended diagnosis or conclusion.
  - The system responds by detailing the **complete sequence of rules that were fired** along the deductive path from the initial facts to the final conclusion [PDF p. 12].`
    },
    {
      id: "comparative-analysis",
      heading: "7. Comparative Analysis",
      sourceRef: "PDF pp. 13–14",
      content: `The following tables systematically contrast expert systems with conventional computing programs and human experts:`,
      comparisonTable: {
        headers: ["Dimension", "Conventional System", "Expert System"],
        rows: [
          ["Architecture", "Knowledge and processing are combined in one unit", "Knowledge database and processing mechanism are strictly separated"],
          ["Error Tendency", "Does not make errors (unless programming error)", "May make mistakes due to heuristic approximations"],
          ["Operational Readiness", "Operational only when fully developed and compiled", "Optimized on an ongoing basis; can launch with small rule set"],
          ["Execution Paradigm", "Step-by-step execution according to fixed algorithms", "Execution is performed logically and heuristically"],
          ["Data Completeness", "Requires complete information to compute", "Functional with sufficient or incomplete/insufficient information"]
        ]
      },
      subsections: [
        {
          id: "human-vs-es",
          subheading: "Human Expert vs. Expert System Comparison",
          sourceRef: "PDF p. 14",
          content: `| Evaluation Dimension | Human Expert | Expert System |
| :--- | :--- | :--- |
| **Resource Cost** | Expensive compensation and rare availability | Relatively inexpensive once developed [PDF p. 14] |
| **Data Mobility** | Harder to move personal tacit knowledge | Easy to transfer files electronically [PDF p. 14] |
| **Consistency** | Unpredictable, subject to fatigue and emotional state | Highly consistent and objective [PDF p. 14] |
| **Documentation** | Difficult and tedious to record continuous thought | Easy to maintain electronic logs and rule bases [PDF p. 14] |
| **Longevity** | Perishable nature (aging, career change, death) | Permanent digital asset [PDF p. 14] |`
        }
      ]
    },
    {
      id: "applications-and-limitations",
      heading: "8. Applications and Inherent Limitations",
      sourceRef: "PDF pp. 15–16",
      content: `### Application Domains [PDF p. 15]
- **Medical Diagnosis**: Symptom evaluation, pathology identification, treatment planning.
- **Agriculture**: Crop disease diagnostics, fertilizer optimization, pest management.
- **Education & Training**: Intelligent tutoring systems and student evaluation.
- **Financial Accounting**: Credit assessment, mortgage underwriting, loan risk analysis.
- **Aerospace & Operations**: Spacecraft diagnostic systems (SHINE), airline scheduling, cargo routing.

### Inherent Limitations [PDF p. 16]
- **Narrow Domain Scope**: Systems perform well only within strictly circumscribed micro-worlds; they fail gracefully when edge conditions appear [PDF p. 16].
- **Mixed Knowledge Inability**: Cannot synthesize disparate domains of expertise [PDF p. 16].
- **Error Propagation**: Any error or gap in the knowledge base propagates into false deductions without self-correction [PDF p. 16].
- **Static Intelligence**: Incapable of refining their own rules or learning autonomously from novel experiences [PDF p. 16].
- **Common Sense Deficit**: Total absence of general real-world common sense reasoning [PDF p. 16].
- **Lack of Creativity**: Unable to produce innovative or out-of-the-box responses when unprecedented scenarios arise [PDF p. 16].
- **High Maintenance Overhead**: Maintaining, validating, and updating expansive rule sets is expensive and labor-intensive [PDF p. 16].`
    }
  ],
  solvedExamples: [
    {
      id: "ex-1-1",
      title: "Tracing WHY and HOW Explanation Facilities",
      difficulty: "Medium",
      sourceRef: "PDF p. 12",
      problemStatement: "Consider an Expert System with the following rule base for medical diagnosis:\n- Rule 1: IF Patient has fever AND Patient has rash THEN Suspect Bacterial Infection.\n- Rule 2: IF Suspect Bacterial Infection AND Blood Culture is positive THEN Diagnosis is Bacteremia.\nDuring consultation, the system already verified that the patient has fever and a rash. The system now prompts: 'Is Blood Culture positive?'.\n1. If the user types 'WHY', what does the system return?\n2. If the user answers 'Yes' and the system concludes Bacteremia, what does the system return if the user types 'HOW'?",
      steps: [
        {
          stepNumber: 1,
          title: "Analyze the Current Goal for the WHY Query",
          explanation: "Per PDF p. 12, a WHY query asks 'Why are you asking for a particular information?'. The system responds with the current rule that is currently active and being evaluated.",
          formulaOrCode: "Active Rule = Rule 2: IF Suspect Bacterial Infection AND Blood Culture is positive THEN Diagnosis is Bacteremia."
        },
        {
          stepNumber: 2,
          title: "Formulate the WHY Response",
          explanation: "The system explains that it is asking whether Blood Culture is positive to satisfy the second antecedent condition of Rule 2 in order to conclude that the diagnosis is Bacteremia, given that 'Suspect Bacterial Infection' was already derived.",
          formulaOrCode: "Output: 'Evaluating Rule 2 to prove Diagnosis is Bacteremia. Antecedent 1 (Suspect Bacterial Infection) is TRUE. Testing antecedent 2: Blood Culture is positive.'"
        },
        {
          stepNumber: 3,
          title: "Analyze the Deductive Chain for the HOW Query",
          explanation: "Per PDF p. 12, a HOW query asks 'How did you reach the conclusion?'. The system returns the complete sequence of rules that fired to derive the conclusion.",
          formulaOrCode: "Sequence = Rule 1 followed by Rule 2"
        },
        {
          stepNumber: 4,
          title: "Formulate the HOW Response",
          explanation: "The system displays: 1. Rule 1 fired because facts (Patient has fever, Patient has rash) were present, concluding 'Suspect Bacterial Infection'. 2. Rule 2 fired because 'Suspect Bacterial Infection' and user fact 'Blood Culture is positive' were true, concluding 'Diagnosis is Bacteremia'.",
          formulaOrCode: "Rule 1 fired -> derived Suspect Bacterial Infection\nRule 2 fired -> derived Diagnosis is Bacteremia"
        }
      ],
      finalAnswer: "WHY returns Rule 2 (currently being evaluated). HOW returns the chain [Rule 1 -> Rule 2] explaining how the facts led to Bacteremia.",
      verificationNotes: "Directly matches the explanation mechanics defined on [PDF p. 12]."
    },
    {
      id: "ex-1-2",
      title: "Evaluating Conventional vs. Expert System Architectural Trade-offs",
      difficulty: "Easy",
      sourceRef: "PDF p. 13",
      problemStatement: "An engineering company must decide between a conventional algorithm (C) and an expert system (ES) for loan risk assessment where customer financial disclosures are frequently incomplete. Which architecture is appropriate, and why?",
      steps: [
        {
          stepNumber: 1,
          title: "Evaluate Data Completeness Constraint",
          explanation: "According to the comparative criteria on PDF p. 13, conventional software requires complete information to execute fixed algorithmic formulas. Expert systems, using heuristic rules, can remain functional with incomplete or insufficient information.",
          formulaOrCode: "Conventional: Needs full information | Expert System: Functional with sufficient or insufficient information"
        },
        {
          stepNumber: 2,
          title: "Evaluate System Evolution",
          explanation: "Financial loan rules change frequently. In conventional systems, modifying rules requires modifying and retesting compiled code. In expert systems, the rule base is separate from the inference engine, allowing incremental rule updates.",
          formulaOrCode: "Inference Engine + Knowledge Base = Expert System"
        }
      ],
      finalAnswer: "An Expert System is the appropriate architecture because it can function with incomplete financial disclosures and allows continuous rule updates without re-architecting the engine [PDF p. 13].",
      verificationNotes: "Matches the criteria tabulated on [PDF p. 13]."
    }
  ],
  practiceQuestions: [
    {
      id: "pq-1-1",
      chapterSlug: "expert-systems",
      chapterNumber: 1,
      chapterTitle: "Expert Systems Fundamentals & Architecture",
      question: "What is the defining structural difference between a conventional computer program and an expert system as expressed in the source material?",
      difficulty: "Easy",
      sourceRef: "PDF p. 4, 13",
      hints: [
        "Recall the two equations comparing traditional programming to expert systems.",
        "Consider whether knowledge and execution algorithms are coupled or separated."
      ],
      solutionSteps: [
        "Step 1: On PDF p. 4, the material states: Algorithm + Data structures = Program in traditional computer, whereas Inference engine + Knowledge = Expert system.",
        "Step 2: On PDF p. 13, in conventional systems, knowledge and processing are combined in one unit. In expert systems, the knowledge base and processing mechanism are two strictly separate components."
      ],
      finalAnswer: "Conventional systems combine knowledge and algorithmic processing in a single unit (Algorithm + Data Structures), whereas expert systems strictly decouple the knowledge base from the inference engine (Inference Engine + Knowledge Base)."
    },
    {
      id: "pq-1-2",
      chapterSlug: "expert-systems",
      chapterNumber: 1,
      chapterTitle: "Expert Systems Fundamentals & Architecture",
      question: "Explain the specific functions of the WHY and HOW explanation facilities in an expert system consultation session.",
      difficulty: "Medium",
      sourceRef: "PDF p. 12",
      hints: [
        "WHY occurs during user interrogation.",
        "HOW occurs after a conclusion is derived."
      ],
      solutionSteps: [
        "Step 1: When the system asks the user for a fact, the user can query 'WHY?'. Per PDF p. 12, this asks 'Why are you asking for a particular information?'. The system responds by showing the current rule being fired.",
        "Step 2: When the system delivers a conclusion, the user can query 'HOW?'. Per PDF p. 12, this asks 'How did you reach the conclusion?'. The system responds with the sequence of rules that were fired."
      ],
      finalAnswer: "WHY reveals the current rule being evaluated to justify the request for user input. HOW displays the sequential chain of fired rules that justified the final conclusion."
    },
    {
      id: "pq-1-3",
      chapterSlug: "expert-systems",
      chapterNumber: 1,
      chapterTitle: "Expert Systems Fundamentals & Architecture",
      question: "Identify the four key participants involved in designing an expert system and describe the specific responsibility of each participant [PDF p. 10].",
      difficulty: "Hard",
      sourceRef: "PDF p. 10",
      hints: [
        "Review the participants listed on PDF page 10.",
        "Consider who has the knowledge, who models it, who codes the engine, and who uses it."
      ],
      solutionSteps: [
        "Step 1: Domain Expert - The specialist who can solve problems; the goal of the system is to solve problems without requiring their constant presence.",
        "Step 2: Knowledge Engineer - The intermediary who communicates with the domain expert to obtain, translate, and model the knowledge into the system.",
        "Step 3: Programmer / System Engineer - Builds, integrates, and maintains all the computer programs and software infrastructure.",
        "Step 4: User - The person who seeks to use the system's expertise to solve practical problems."
      ],
      finalAnswer: "1. Human Domain Expert (source of heuristics), 2. Knowledge Engineer (extracts and models knowledge), 3. Programmer (implements software programs), 4. User (applies the system to solve problems)."
    }
  ],
  keyTakeaways: [
    "Expert systems are structured as: Inference Engine + Knowledge Base = Expert System.",
    "Decoupling the knowledge base from the inference engine allows modular rule expansion without modifying reasoning algorithms.",
    "DENDRAL (Stanford, chemical structures) was the first knowledge-intensive ES, followed by MYCIN (bacterial infections).",
    "Explanation capabilities distinguish expert systems from black-box algorithms: WHY returns the active rule, HOW returns the deductive rule chain.",
    "Expert systems provide consistency, data mobility, and permanent preservation of human expertise, but suffer from narrow domain brittleness, lack of common sense, and high maintenance costs."
  ]
};

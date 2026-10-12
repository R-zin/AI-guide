# Course Outline: Artificial Intelligence – Knowledge Representation & Reasoning

## Subject Overview
This comprehensive study guide covers the core symbolic AI and computational intelligence foundations from the official curriculum materials:
1. **Expert Systems** (`Expert System.pdf`, 17 pages)
2. **First-Order Predicate Logic** (`2.4 Predicate logic - Copy.pptx`, 70 slides)
3. **Mamdani Fuzzy Inference Systems** (`3.5 Fuzzy Inference - Mamdani Style.pptx`, 30 slides)
4. **Sugeno Fuzzy Inference Systems** (`3.6- Fuzzy Inference - Sugeno Style.pptx`, 9 slides & `Sugeno_Fan_Speed_Solution.pptx`, 8 slides)

---

## Topic Hierarchy & Chapter Structure

### Chapter 1: Expert Systems Fundamentals & Architecture
- **Source**: `Expert System.pdf` [PDF pp. 1–17]
- **Learning Objectives**:
  - Understand the concept and definition of an Expert System: $\text{Inference Engine} + \text{Knowledge Base} = \text{Expert System}$.
  - Differentiate human experts, expert systems, and conventional computing systems.
  - Explore landmark historical systems: DENDRAL (Stanford molecular analysis) and MYCIN (bacterial infections and antibiotic dosing).
  - Understand modern variants: SHINE (NASA), Siri, Blue Cross; Rule-based, Fuzzy, Neural, Neuro-fuzzy.
  - Analyze the architecture: Knowledge Base, Database / Working Storage, Inference Engine, and User Interface.
  - Understand participant roles: Domain Expert, Knowledge Engineer, Programmer/System Engineer, and End User.
  - Master explanation facilities: Answering WHY queries (current active rule) and HOW queries (deductive chain of fired rules).
  - Review real-world application areas and intrinsic limitations (brittleness, narrow domain, inability to learn, common sense deficit).

### Chapter 2: First-Order Predicate Logic & Knowledge Representation
- **Source**: `2.4 Predicate logic - Copy.pptx` [Slides 1–29]
- **Learning Objectives**:
  - Identify expressiveness limitations of Propositional Logic and the necessity of First-Order Logic (FOL).
  - Understand FOL ontology: Objects, Properties (unary relations), Relations (n-ary relations), and Functions (total mappings).
  - Study formal models and interpretations (Russell & Norvig Figure 8.2 domain with King John, Richard, crown, and left-leg function).
  - Master FOL syntax: Constants, Variables, Predicates, Functions, Connectives, and Equality.
  - Construct Terms, Atomic Sentences, and Complex Sentences.
  - Formulate Universal Quantifiers ($\forall$) and Existential Quantifiers ($\exists$).
  - Apply quantifier duality and generalized De Morgan's laws ($\neg \forall x P(x) \equiv \exists x \neg P(x)$).
  - Translate natural language into FOL sentences accurately with proper quantifier scoping.

### Chapter 3: Inference, Resolution Refutation & Logic Programming
- **Source**: `2.4 Predicate logic - Copy.pptx` [Slides 30–70]
- **Learning Objectives**:
  - Apply classical inference rules: Modus Ponens, Modus Tollens, Conjunction and Disjunction rules.
  - Master FOL quantifier inference rules: $\forall$-Elimination, $\forall$-Introduction, $\exists$-Introduction, and $\exists$-Elimination (fresh constants).
  - Solve multi-step natural deduction proofs (e.g., proving Richard is a criminal from copying music premises).
  - Convert propositional and first-order formulas into Conjunctive Normal Form (CNF) via the 4-step algorithm.
  - Execute Proof by Resolution Refutation in Propositional Logic to derive the empty clause ($\square$).
  - Convert FOL sentences into Clause Form using the canonical 9-step algorithm.
  - Apply Skolemization correctly: Skolem constants for independent existential quantifiers vs. Skolem functions for existential quantifiers dependent on universal variables.
  - Perform Resolution in First-Order Logic (e.g., proving Socrates is mortal).
  - Understand applications of resolution: Automated Theorem Proving (Prover9, Vampire) and AI Knowledge Bases.
  - Master Horn clauses and Prolog programming fundamentals (Facts, Rules, Queries, SLD Resolution).

### Chapter 4: Mamdani Fuzzy Inference Systems
- **Source**: `3.5 Fuzzy Inference - Mamdani Style.pptx` [Slides 1–30]
- **Learning Objectives**:
  - Grasp foundational concepts of fuzzy sets vs. classical crisp sets, linguistic variables, and linguistic terms.
  - Identify membership function properties: Support, Core, $\alpha$-cut, and Height.
  - Compare geometric shapes of membership functions: Triangular (TrMF), Trapezoidal (TrapMF), Gaussian, and Singleton.
  - Compute membership values using piecewise linear formulas for triangular and trapezoidal functions.
  - Master the 4-step Mamdani inference process:
    - **Step 1: Fuzzification** of crisp inputs.
    - **Step 2: Rule Evaluation** using fuzzy intersection ($\min$) and union ($\max$).
    - Understand consequent modification: Clipping (slicing) vs. Scaling (multiplication).
    - **Step 3: Consequent Aggregation** via maximum unification.
    - **Step 4: Defuzzification** via Centroid / Center of Gravity (COG).
  - Compute discrete sample COG values numerically (Project Risk case study yielding $67.4\%$).

### Chapter 5: Sugeno Fuzzy Inference Systems & Controller Design
- **Source**: `3.6- Fuzzy Inference - Sugeno Style.pptx` [Slides 1–9] & `Sugeno_Fan_Speed_Solution.pptx` [Slides 1–8]
- **Learning Objectives**:
  - Contrast Sugeno fuzzy inference with Mamdani inference and evaluate computational trade-offs.
  - Define Zero-Order Sugeno models (singleton consequents $z = k$) and First-Order Sugeno models ($z = f(x, y)$).
  - Execute Sugeno-style rule evaluation and singleton aggregation.
  - Perform defuzzification via the Weighted Average (WA) method: $WA = \frac{\sum w_i k_i}{\sum w_i}$.
  - Design complete fuzzy controllers from engineering specifications:
    - Define universes of discourse and membership functions for inputs and outputs.
    - Construct rule bases.
    - Execute fuzzification for crisp sensor readings ($T = 31^\circ\text{C}, H = 70\%$).
    - Evaluate rule firing strengths using the minimum operator.
    - Aggregate output singletons and compute exact crisp actuator outputs ($z = 67.78\%$).

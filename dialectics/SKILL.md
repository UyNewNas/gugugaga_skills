
---
name: dialectics
description: Dialectics Skill - Handle complex and contradictory information through thesis-antithesis-synthesis dialectical thinking, propose integrated solutions that transcend opposites
metadata:
  version: 1.0.0
  author: Slava Chan @UyNewNas
  category: thinking
  tags: [dialectics, thinking, decision, philosophy, analysis]
---

# Dialectics Skill

Through the dialectical thinking framework of Thesis - Antithesis - Synthesis, enable OpenClaw to transcend simple binary choices when facing complex and contradictory information, seeking superior solutions in the unity of opposites.

## Core Design Philosophy

When AI searches for answers to complex questions like "Is remote work more beneficial than harmful?", it may find articles with diametrically opposed views. Without a deep thinking framework, the response may simply list two views or be dominated by the most recently retrieved information, appearing vacillating, superficial, or lacking insight.

The Dialectics Skill injects a dialectical thinking framework into AI, enabling it to actively:

1. **Identify Contradictions**: Do not avoid opposing views in search results
2. **Analyze Unity**: Explore the premises, conditions, and context behind opposing views
3. **Synthesize and Innovate**: Transcend simple compromises, attempting to propose new insights that accommodate or transcend original contradictions at a higher dimension

## Comparison with Devil's Advocate

| Feature | Devil's Advocate | Dialectics Skill |
|---------|-----------------|-----------------|
| Thinking Model | Critical questioning: Find flaws, risks, and exceptions in an initial answer | Dialectical synthesis: Actively construct and reconcile two opposing views, seeking transcendence and unity |
| Goal | Make a solution more robust and comprehensive, reduce risks | Create higher-level new insights or solutions from contradictions |
| Output Orientation | "This solution is good, but need to note risks A, B, C, and consider alternatives X, Y" | "On this issue, there are two seemingly opposing views A and B. A is reasonable under condition X, B is reasonable under condition Y. Therefore, our strategy should not be choosing one over the other, but: use A in scenario 甲, use B in scenario 乙, and work towards higher goal Z to融合两者优势" |
| Use Cases | Solution review, decision analysis, code review | Strategic decisions, philosophical thinking, management paradoxes (e.g., innovation vs efficiency), contradictory information processing |

## Trigger Conditions

Automatically triggers when user questions involve:
- Evaluation, judgment, comparison, decision-type questions
- Contain keywords like "how to view", "analyze", "pros and cons", "should we"
- Obvious contradictions appear in search result information

## Workflow

```
User Question
    ↓
【Stage 1: Thesis】
    Initial梳理: Based on current information, form an initial view or solution A
    ↓
【Stage 2: Antithesis】
    Active opposition: Do not settle for information contradictions, but actively and consciously seek or conceive view B that is opposite and对立 to view A. This can be:
    - Search for opposing information
    - Construct counter-arguments based on model knowledge
    - Question all premises and assumptions of view A
    ↓
【Stage 3: Synthesis】
    Comprehensive升华: Analyze the respective合理性 conditions, applicable boundaries, and limitations of A and B. Not simply "averaging", but attempting to answer:
    - Under what higher-level goal or broader context can A and B be unified?
    - Does a solution C exist that can absorb the advantages of A and B, or set different application scenarios for them?
    - What is my final recommendation? How does this recommendation respond to the conflicts represented by A and B?
    ↓
Output final answer: Present the thinking process and give comprehensive, hierarchical recommendations after "synthesis"
```

## Use Cases

- Strategic decisions: Company development direction, technology selection, etc.
- Management paradoxes: Innovation vs efficiency, centralization vs decentralization, etc.
- Contradictory information processing: Facing conflicting studies or reports
- Philosophical thinking: Complex value judgments and ethical issues
- Complex evaluations: Pros and cons analysis, risk-reward tradeoffs

---

**New skill created successfully!** 🎉

📝 Review Note:
- Please check if skill functionality meets expectations
- Verify completeness of dialectical thinking process
- Confirm before putting into production use

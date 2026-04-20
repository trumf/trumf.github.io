---
layout: post.njk
title: "Accident Models"
date: 2025-07-31
description: "Dependency management, configuration conflicts, and deprecated APIs while setting up RSS feeds in 11ty"
image: /blog/adding-rss-11ty/rss-icon.svg
imageAlt: "RSS feed icon"
---

A while ago I held an introductionary lecture at work about accident models. While I was at university i took a couple of courses in accident managament as part of my Cognitive Science degree. Since we were working in Automotive, which is an industry with log ties to Human Factors, I thought it would be good if they had some background in these topics.

The introduction below is incomplete and I advice you to look up these topics on your own. It is also argumentative since I wanted to make a point in how we should approach interface design to avoid accidents.

## The "Bad Worker" Era: A Dangerous Oversimplification (1800s-1940s)

Early accident models centered on a deceptively simple idea: some people are just more accident-prone than others. This "Bad Worker" model suggested that certain individuals possess inherent personality traits, physical characteristics, or psychological tendencies that make them natural accident magnets.

Why did this model persist for so long? It offered several appealing characteristics:

- **Simplicity**: Easy to understand and implement
- **Cost-effectiveness**: Cheaper to blame individuals than fix systems
- **Legal convenience**: Shifted liability away from employers
- **Statistical support**: Data did show accident concentration among certain individuals

Despite its initial appeal, the "Bad Worker" model proved fatally flawed:

**1. Victim Blaming**

- Ignored workplace hazards, poor equipment, and inadequate training
- Shifted responsibility away from management
- Prevented investment in safer working conditions

**2. Oversimplified Causation**

- Ignored environmental factors: lighting, noise, temperature, time pressure
- Overlooked organizational factors: training, supervision, safety culture
- Failed to consider equipment design and maintenance issues

**3. Statistical Misinterpretation**

- High accident rates often resulted from high-risk job assignments, not personal traits
- New workers naturally have more accidents initially
- Some workers were simply assigned to more dangerous roles

**4. Lack of Predictive Power**

- "Accident-prone" workers often became safe workers in better environments
- "Safe" workers had accidents when placed in hazardous conditions
- Personal characteristics were poor predictors of future accident involvement

## Linear Models of Causation

### The Domino Effect Model (Heinrich, 1931)

In the 1930s the "blame the klutz" model of accidents were wearing thin since it was obvious that something more rigourus was needed.

Heinrich's breakthrough insight was viewing accidents not as random events, but as predictable sequences. His Domino Effect Model proposed that:

- Accidents result from a chain of linked events
- Each event sets up the next, like falling dominoes
- Breaking any single link stops the entire sequence
- Investigation should trace back through the sequence to find intervention points

This model introduced crucial concepts:

**Systematic Accident Analysis**

- Accidents aren't random—they follow predictable patterns
- Every accident has multiple contributing factors
- Investigation should trace back through the sequence

**Hierarchical Causation**

- Immediate causes vs. root causes
- Surface symptoms vs. underlying problems
- Led to modern "proximate cause" and "root cause" thinking

### Root Cause Analysis: The "5 Whys" Technique (1970s)

Today you might have heard of "Root Causes" and how you need to investigate and get to the bottom of something before we act. Root Cuase analysis builds on this linear Domino framework and is widely used all over the world.

While doing a root cause analysis you might have encoutnered the "5 Why's" technique. I've even seen it used as a UX research tool during interview studies and discovery focused studies. The approach uses a super simple technique: keep asking "why" until you reach actionable causes.

The Root Cause Analysis framework categorises causes into 3 levels:

**1. Surface Level - Immediate Causes**

- Unsafe acts: Human errors, violations, poor decisions
- Unsafe conditions: Equipment failures, environmental hazards

**2. Intermediate Level - Underlying Causes**

- Job factors: Inadequate procedures, poor tool design, time pressure
- Personal factors: Lack of knowledge, physical limitations, stress

**3. Deep Level - Root Causes**

- Organizational factors: Poor safety culture, inadequate resources, conflicting priorities
- Management systems: Deficient policies, training programs, maintenance systems

The key insight: good root cause analysis identifies issues with processes, organization, communication, and leadership—not just individual failings.

## Defense in Depth: The Power of Barriers

Rather than focusing solely on causes, engineers began designing barriers—physical or procedural "breakers" that interrupt accident sequences. These barriers fall into four distinct categories, each with unique strengths and limitations:

## The Paradigm Shift: From Safety-I to Safety-II

### The Limitations of Traditional Thinking

Safety-I represents the traditional approach that dominated thinking for decades. But as systems grew more complex, fundamental flaws became apparent:

- Most work succeeds despite systems being "imperfect"
- Variability in performance is normal and often beneficial
- People adapt continuously to make systems work
- Accidents are rare, but everyday success is common

### Characteristics of Safety-I vs. Safety-II

| Aspect             | Safety-I                  | Safety-II                   |
| ------------------ | ------------------------- | --------------------------- |
| **Focus**          | What went wrong           | What goes right             |
| **Approach**       | Failure-focused, reactive | Success-focused, proactive  |
| **Causality**      | Linear chains             | Non-linear interactions     |
| **View of People** | Sources of error          | Sources of adaptability     |
| **Performance**    | Compliance equals safety  | Variability enables success |
| **Method**         | Root cause analysis       | Understanding normal work   |

### What Safety-II Brings to the Table

**1. Understanding Success, Not Just Failure**

- Primary question: "How do things go right?"
- Focus on everyday work and normal operations
- Learn from what works, not just what fails

**2. Performance Variability as Normal**

- Variability is inevitable and often necessary
- People adjust and adapt to make systems work

**3. Work-as-Done vs. Work-as-Imagined**

- Work-as-Imagined: How we think work should be performed (procedures, protocols)
- Work-as-Done: How work actually happens in practice
- The gap between these is where both success and failure emerge

**4. Proactive Safety Management**

- Anticipate and prepare for future challenges
- Monitor for early warning signs
- Build adaptive capacity before problems occur

**5. System-Level Thinking**

- Focus on interactions and relationships
- Non-linear causality and feedback loops

## Embracing Complexity: Normal Accidents and Resilience

### Normal Accidents Theory

Charles Perrow introduced a sobering reality: some accidents are inevitable in complex systems. Two key factors create this inevitability:

- **Interactive complexity**: Parts interact in unexpected ways
- **Tight coupling**: Failures cascade rapidly through the system

Examples include nuclear plants, air traffic control, and modern software systems. The implication: perfect safety is impossible in complex systems—some accidents are "normal," built into the system's DNA.

### Resilience Engineering (2005 onward)

Rather than seeking perfection, resilience engineering focuses on a system's ability to adapt and maintain function under stress.

**Defining Resilience:**
"The intrinsic ability of a system to adjust its functioning prior to, during, or following changes and disturbances, so that it can sustain required operations under both expected and unexpected conditions."

### The Four Cornerstones of Resilience

**1. Responding (The Actual)**

- What to do when something happens
- Immediate reaction to current disturbances
- Crisis management and emergency response

**2. Monitoring (The Critical)**

- What to look for in current operations
- Tracking performance indicators and early warnings
- Situational awareness and pattern recognition

**3. Learning (The Factual)**

- What has happened and why
- Understanding from both successes and failures
- Building knowledge for future adaptations

**4. Anticipating (The Potential)**

- What could happen in the future
- Preparing for potential disruptions and opportunities
- Strategic foresight and scenario planning

### Creating Resilience: Practical Approaches

**1. Develop Sensing Capabilities**

- Early warning systems for detecting drift
- Multiple perspectives on system performance
- Regular "pulse checks" on system health

**2. Build Adaptive Capacity**

- Cross-training and flexible role assignments
- Redundancy in skills, not just equipment
- Decision-making authority at appropriate levels

**3. Foster Learning Culture**

- Psychological safety for reporting concerns
- Regular debriefs on both successes and near-misses
- Knowledge sharing across organizational levels

**4. Prepare for Uncertainty**

- Scenario planning and stress testing
- Resource reserves for unexpected demands
- Flexible procedures that allow adaptation

**5. Design for Graceful Degradation**

- Fail-safe mechanisms that maintain core functions
- Prioritization of critical vs. non-critical operations
- Rapid recovery protocols

## Human Cognition and Action in Safety

Understanding how people process information and make decisions is crucial for effective safety design. Human cognition involves four key stages:

### Memory

How prior experience shapes responses to current situations. Design implication: Provide cues that align with existing mental models.

### Attention

Limited cognitive resource that becomes further constrained under stress. Design implication: Minimize distractions and highlight critical information clearly.

### Decision

The process of choosing among alternatives, often using mental shortcuts (heuristics) under time pressure. Design implication: Reduce ambiguity through good defaults and clear options.

### Action

Translating decisions into physical behavior. Design implication: Ensure controls map intuitively to their effects and provide timely feedback.

## Practical Implications for Automotive Design

These accident models offer concrete guidance for creating safer, more resilient automotive systems:

### For System Design

- **Build in flexibility and adaptability**: Don't assume perfect conditions
- **Design for humans to succeed**: Support natural cognitive processes
- **Enable performance variability**: Allow adaptation within safe boundaries

### For Training

- **Develop adaptive expertise**: Emphasize understanding over rule-following
- **Practice unexpected situations**: Build skills for novel scenarios
- **Focus on principles**: Help users understand why, not just what

### For Management

- **Monitor work-as-done vs. work-as-imagined**: Understand the reality gap
- **Encourage appropriate risk-taking**: Innovation requires some uncertainty
- **Invest in capabilities**: Build adaptive capacity, not just barriers

### For Assessment

- **Measure positive performance**: Track what goes right
- **Use leading indicators**: Don't wait for failures to act
- **Assess adaptive capacity**: Can the system handle variability?

## Key Takeaways: Design Principles for Safety

1. **Don't blame users**: Errors point to design opportunities, not user deficiencies
2. **Design multiple barriers**: Defense in depth prevents accidents through redundancy
3. **Study success patterns**: Learn from when things go right, not just failures
4. **Accept complexity**: Modern systems can't be made perfectly predictable
5. **Build for resilience**: Help users succeed despite variability (fatigue, stress, degraded sensors)
6. **Design for learning**: The better users understand your system, the more resilient they become

## Looking Forward

Our journey from the "Bad Worker" model to resilience engineering reveals that safety is never about a single fix. It emerges from understanding complex interactions, layering imperfect defenses, and empowering people to adapt successfully.

As automotive systems become increasingly automated and connected, these lessons become even more critical. The future of automotive safety lies not in eliminating human variability, but in designing systems that work with human strengths and compensate for human limitations.

The evolution continues, and the next chapter promises even more sophisticated approaches to keeping us safe on the road.

# Typography System Documentation

This document outlines the typography system for rosenqvist.design, including the type scale, responsive behavior, and usage guidelines.

## Table of Contents

1. [Type Scale](#type-scale)
2. [Font Family & Weights](#font-family--weights)
3. [Line Heights](#line-heights)
4. [Responsive Typography](#responsive-typography)
5. [Vertical Rhythm](#vertical-rhythm)
6. [Utility Classes](#utility-classes)
7. [Best Practices](#best-practices)

## Type Scale

The typography system uses a modular scale with a ratio of approximately 1.25 (major third). This creates a harmonious progression of sizes that work well together.

| Variable      | Size (rem) | Size (px)\* | Usage                             |
| ------------- | ---------- | ----------- | --------------------------------- |
| `--text-xs`   | 0.75rem    | 12px        | Very small text, footnotes        |
| `--text-sm`   | 0.875rem   | 14px        | Small text, captions, metadata    |
| `--text-base` | 1rem       | 16px        | Body text, default size           |
| `--text-md`   | 1.25rem    | 20px        | Large body text, h4, card titles  |
| `--text-lg`   | 1.5rem     | 24px        | Lead paragraphs, h5               |
| `--text-xl`   | 1.875rem   | 30px        | h3 headings, section titles       |
| `--text-2xl`  | 2.25rem    | 36px        | h2 headings, major section titles |
| `--text-3xl`  | 3rem       | 48px        | Large titles, article headings    |
| `--text-4xl`  | 3.75rem    | 60px        | Hero titles, page headlines       |

\*Pixel values assume a browser default of 16px.

## Font Family & Weights

The website uses Inter as its primary font family:

```css
--font-family-primary: "Inter", sans-serif;
```

Font weights are defined with variables:

```css
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-bold: 700;
```

## Line Heights

Line heights are defined with variables to maintain consistent vertical rhythm:

| Variable            | Value | Usage                                        |
| ------------------- | ----- | -------------------------------------------- |
| `--leading-none`    | 1     | For very large display text or special cases |
| `--leading-tight`   | 1.2   | For headings and large text                  |
| `--leading-snug`    | 1.35  | For subheadings and medium text              |
| `--leading-normal`  | 1.5   | For body text and paragraphs                 |
| `--leading-relaxed` | 1.75  | For easier readability in larger blocks      |

## Responsive Typography

The type scale automatically adjusts for different screen sizes:

### Desktop (default)

- Full type scale as defined above

### Large Tablets/Small Desktops (max-width: 1200px)

- Slight adjustments to largest sizes:
  - `--text-4xl`: 3.25rem
  - `--text-3xl`: 2.75rem

### Tablets (max-width: 768px)

- Medium adjustments:
  - `--text-4xl`: 2.75rem
  - `--text-3xl`: 2.25rem
  - `--text-2xl`: 2rem
  - `--text-xl`: 1.65rem
  - Reduced paragraph spacing

### Mobile (max-width: 480px)

- Significant adjustments:
  - `--text-4xl`: 2.25rem
  - `--text-3xl`: 2rem
  - `--text-2xl`: 1.75rem
  - `--text-xl`: 1.5rem
  - `--text-lg`: 1.25rem
  - Further reduced paragraph spacing

## Vertical Rhythm

The typography system maintains vertical rhythm through consistent margins and line heights. The `--paragraph-spacing` variable (1.5rem by default) helps maintain proper spacing between text elements.

### Margin Helpers

Utility classes for vertical spacing:

```css
.mb-0 {
  margin-bottom: 0;
}
.mb-1 {
  margin-bottom: var(--spacing-xs);
} /* 0.5rem */
.mb-2 {
  margin-bottom: var(--spacing-sm);
} /* 1rem */
.mb-3 {
  margin-bottom: var(--spacing-md);
} /* 1.5rem */
.mb-4 {
  margin-bottom: var(--spacing-lg);
} /* 2rem */
.mb-5 {
  margin-bottom: var(--spacing-xl);
} /* 3rem */
```

## Utility Classes

### Text Size Variants

```css
.text-xs        /* Extra small text - 12px */
/* Extra small text - 12px */
/* Extra small text - 12px */
/* Extra small text - 12px */
.text-small     /* Small text - 14px */
/* Base text uses default p or body */
.text-lead; /* Larger text for intro paragraphs */
```

### Text Alignment

```css
.text-left      /* Left-aligned text */
/* Left-aligned text */
/* Left-aligned text */
/* Left-aligned text */
.text-center    /* Center-aligned text */
.text-right; /* Right-aligned text */
```

### Text Transformation

```css
.text-uppercase   /* UPPERCASE TEXT */
/* UPPERCASE TEXT */
/* UPPERCASE TEXT */
/* UPPERCASE TEXT */
.text-lowercase   /* lowercase text */
.text-capitalize; /* Capitalized Text */
```

## Best Practices

### Line Length

For optimal readability:

- Body text is constrained to about 65-70 characters per line
- Headings are constrained to about 40 characters per line
- On smaller screens, these constraints are automatically adjusted

### Hierarchy

1. Create clear visual hierarchy by using distinct size differences:

   - For main page titles, use `h1` or `.headL` (--text-4xl)
   - For section titles, use `h2` or `.headM` (--text-2xl)
   - For subsection titles, use `h3` or `.headS` (--text-xl)

2. Use font weights to enhance hierarchy:
   - Primary headings use `--font-weight-bold` (700)
   - Secondary headings use `--font-weight-medium` (500)
   - Body text uses `--font-weight-normal` (400)

### Accessibility

1. Maintain a minimum font size of 14px (0.875rem) for readable text
2. Use sufficient color contrast between text and background
3. Allow text to scale with browser settings
4. Maintain proper heading hierarchy for screen readers

### Responsiveness

1. Test all text at different viewport sizes
2. Use the responsive breakpoints to ensure text remains readable
3. Consider how text wrapping affects layout at different sizes

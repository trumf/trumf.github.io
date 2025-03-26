# CSS Variables Documentation

This document outlines the CSS variable system used on rosenqvist.design. The system provides a semantic, accessible, and maintainable way to manage styles across the website.

## Table of Contents

1. [Color System](#color-system)
2. [Semantic Variables](#semantic-variables)
3. [Spacing & Layout Variables](#spacing--layout-variables)
4. [Component-Specific Variables](#component-specific-variables)
5. [Theme Switching](#theme-switching)
6. [Usage Guidelines](#usage-guidelines)
7. [Accessibility Considerations](#accessibility-considerations)

## Color System

### Brand Colors

```css
--color-primary: #a0000c; /* Primary brand color (red) */
--color-primary-dark: #800009; /* Darker variant of primary */
--color-primary-light: #c00010; /* Lighter variant of primary */
--color-secondary: #2c8287; /* Secondary brand color (teal) */
--color-secondary-dark: #22666a; /* Darker variant of secondary */
--color-secondary-light: #359ca2; /* Lighter variant of secondary */
```

### Neutral Colors

A comprehensive gray scale from white to black:

```css
--color-neutral-50: #ffffff; /* White */
--color-neutral-100: #f8f9fa; /* Nearly white */
--color-neutral-200: #f0f0f0; /* Very light gray */
--color-neutral-300: #e9ecef; /* Light gray */
--color-neutral-400: #ced4da; /* Mid-light gray */
--color-neutral-500: #adb5bd; /* Medium gray */
--color-neutral-600: #6c757d; /* Mid-dark gray */
--color-neutral-700: #495057; /* Dark gray */
--color-neutral-800: #343a40; /* Very dark gray */
--color-neutral-900: #212529; /* Nearly black */
--color-neutral-950: #030303; /* Almost black */
```

## Semantic Variables

### Background Colors

```css
--bg-primary: var(--color-neutral-100); /* Main background color */
--bg-secondary: var(
  --color-neutral-200
); /* Secondary background (slightly darker) */
--bg-tertiary: var(
  --color-neutral-50
); /* Tertiary background (usually white) */
--bg-card: var(--color-neutral-50); /* Card background */
--bg-hero: var(--color-primary); /* Hero section background */
```

### Text Colors

```css
--text-primary: var(--color-neutral-900); /* Main text color */
--text-secondary: var(
  --color-neutral-700
); /* Secondary text (subheadings, etc.) */
--text-tertiary: var(--color-neutral-600); /* Tertiary text (less emphasis) */
--text-on-brand: var(
  --color-neutral-50
); /* Text on brand-colored backgrounds */
--text-link: var(--color-secondary); /* Link text color */
--text-link-hover: var(--color-secondary-dark); /* Link hover color */
```

## Spacing & Layout Variables

```css
--spacing-xs: 0.5rem; /* 8px - Very small spacing */
--spacing-sm: 1rem; /* 16px - Small spacing */
--spacing-md: 1.5rem; /* 24px - Medium spacing */
--spacing-lg: 2rem; /* 32px - Large spacing */
--spacing-xl: 3rem; /* 48px - Extra large spacing */

--border-radius-sm: 4px; /* Small border radius */
--border-radius-md: 8px; /* Medium border radius (cards, buttons) */
--border-radius-lg: 12px; /* Large border radius */
```

## Component-Specific Variables

```css
--navbar-text: var(--color-neutral-50); /* Navbar text color */
--navbar-bg: transparent; /* Navbar background */

--footer-bg: var(--color-neutral-950); /* Footer background */
--footer-text: var(--color-neutral-50); /* Footer text color */

--card-border: var(--color-neutral-300); /* Card border color */
--card-shadow: rgba(0, 0, 0, 0.1); /* Card shadow color */
```

## Theme Switching

The website is designed to support both light and dark themes, with light being the default. Dark theme variables are included but commented out in the CSS.

### Light Theme (Default)

The current implementation uses light mode as the default theme, with semantic variables pointing to light color values.

### Dark Theme (Future Implementation)

Dark theme can be enabled by uncommenting the media query in the CSS:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary: var(--dark-bg-primary);
    --bg-secondary: var(--dark-bg-secondary);
    --bg-tertiary: var(--dark-bg-tertiary);
    --bg-card: var(--dark-bg-card);
    --text-primary: var(--dark-text-primary);
    --text-secondary: var(--dark-text-secondary);
    --text-tertiary: var(--dark-text-tertiary);
  }
}
```

## Usage Guidelines

1. **Always use semantic variables** rather than direct color values in your CSS

   ```css
   /* CORRECT */
   color: var(--text-primary);

   /* INCORRECT */
   color: #212529;
   ```

2. **Use the closest semantic meaning** for your use case

   ```css
   /* For primary content text */
   color: var(--text-primary);

   /* For less important text */
   color: var(--text-secondary);

   /* For metadata, captions, etc. */
   color: var(--text-tertiary);
   ```

3. **Use spacing variables** for consistent layout

   ```css
   margin-bottom: var(--spacing-md);
   padding: var(--spacing-sm) var(--spacing-lg);
   ```

4. **For component-specific styling**, use the component variables when available

   ```css
   /* CORRECT */
   .footer a {
     color: var(--footer-text);
   }

   /* INCORRECT */
   .footer a {
     color: white;
   }
   ```

## Accessibility Considerations

Our color system was designed with accessibility in mind:

1. **Contrast Ratios**:

   - Text/background combinations have been tested to meet WCAG 2.1 AA standards (minimum 4.5:1 for normal text, 3:1 for large text)
   - Primary text on default backgrounds: 14.5:1 ratio
   - Secondary text on default backgrounds: 7.8:1 ratio
   - Tertiary text on default backgrounds: 5.3:1 ratio

2. **Color blindness**:

   - Colors are designed to be distinguishable for users with various forms of color blindness
   - We avoid conveying information through color alone

3. **Focus states**:
   - Interactive elements have visible focus states using borders/outlines

## Color Reference Chart

| Variable           | Light Mode   | Hex Code | Dark Mode   | Hex Code |
| ------------------ | ------------ | -------- | ----------- | -------- |
| `--bg-primary`     | Light gray   | #f8f9fa  | Dark gray   | #161616  |
| `--bg-secondary`   | Lighter gray | #f0f0f0  | Medium dark | #1f1f1f  |
| `--bg-tertiary`    | White        | #ffffff  | Near black  | #030303  |
| `--text-primary`   | Near black   | #212529  | White       | #ffffff  |
| `--text-secondary` | Dark gray    | #495057  | Light gray  | #f0f0f0  |
| `--text-tertiary`  | Medium gray  | #6c757d  | Gray        | #949494  |

# Reading Experience Enhancements

This document outlines the typography and layout enhancements made to improve the reading experience on rosenqvist.design.

## Table of Contents

1. [Optimal Line Length](#optimal-line-length)
2. [Typography Refinements](#typography-refinements)
3. [Content Layout](#content-layout)
4. [Responsive Behavior](#responsive-behavior)
5. [Usage Guidelines](#usage-guidelines)

## Optimal Line Length

Research shows that optimal line length significantly impacts reading comfort and comprehension. The website now implements:

- **Default width**: 75 characters (75ch) for standard content
- **Narrow width**: 65 characters (65ch) for focused reading experiences
- **Wide width**: 90 characters (90ch) for content requiring more horizontal space

These widths are controlled through CSS variables:

```css
--content-width-narrow: 65ch;
--content-width-default: 75ch;
--content-width-wide: 90ch;
```

## Typography Refinements

### Line Height Adjustments

Line heights (leading) have been carefully calibrated for optimal readability:

- **Paragraphs**: 1.6 (160% of font size) provides comfortable spacing between lines
- **Headings**: Range from 1.2 to 1.4 to maintain cohesion while ensuring readability
- **Small text**: Increased to improve legibility at smaller sizes

### Letter Spacing

Letter spacing (tracking) has been adjusted for different text sizes:

- **Large headings**: Slightly tighter (`--tracking-tighter: -0.03em`) for better visual cohesion
- **Body text**: Normal spacing (`--tracking-normal: 0`) for standard reading
- **Small text**: Slightly wider (`--tracking-wide: 0.01em`) for improved readability at small sizes

### Text Rendering

Text rendering has been optimized for clarity with:

```css
text-rendering: optimizeLegibility;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
```

These properties improve the rendering of text on modern displays, especially for the Inter font family.

## Content Layout

New layout containers have been added to enforce consistent typography:

### Text Container

The `.text-container` class provides an optimal reading experience for text-heavy content:

```html
<div class="text-container">
  <h2>Article Heading</h2>
  <p>Content that will be optimally constrained for reading...</p>
</div>
```

Variants include:

- `.text-container--narrow`: For focused reading (65ch)
- `.text-container--wide`: For content needing more space (90ch)

### Content Area

The `.content-area` class is similar but designed for mixed content sections:

```html
<section class="section_padding">
  <div class="content-area">
    <!-- Mixed content with optimal reading width -->
  </div>
</section>
```

Variants include:

- `.content-area--narrow`: For focused content (65ch)
- `.content-area--wide`: For content needing more space (90ch)
- `.content-area--full`: For full-width layouts (1280px max)

## Responsive Behavior

The reading experience adapts to different screen sizes:

### Desktop

- Full implementation of optimal line lengths
- Generous spacing and padding

### Tablets (max-width: 768px)

- Line heights slightly reduced (1.5 vs 1.6)
- Padding adjusted for the screen size
- Width constraints relaxed to avoid excessive text wrapping

### Mobile (max-width: 480px)

- Further adjustments to font size and line height
- Minimal padding to maximize reading space
- Full-width text to maximize screen real estate

## Usage Guidelines

### For Blog and Article Content

For optimal reading experience in article content:

```html
<article class="text-container">
  <h1>Article Title</h1>
  <p class="text-lead">
    An engaging introduction paragraph that summarizes the article...
  </p>

  <h2>First Section</h2>
  <p>Regular paragraph text with optimal line length...</p>

  <blockquote>
    <p>An important quote or callout.</p>
    <cite>Source attribution</cite>
  </blockquote>

  <h3>Subsection</h3>
  <p>More content with optimized reading experience...</p>
</article>
```

### For Mixed Content Pages

For pages with mixed content types:

```html
<section class="section_padding">
  <div class="content-area">
    <h2>Section Title</h2>
    <p>Introductory text...</p>

    <!-- Cards or other components that need more layout flexibility -->
    <div class="card-grid">
      <!-- Cards here -->
    </div>
  </div>
</section>
```

### Best Practices

1. **Use appropriate containers**: Match container width to content purpose
2. **Maintain hierarchy**: Follow heading structure (h1 → h2 → h3)
3. **Consider line breaks**: For headings, break at natural pauses
4. **Test on devices**: Verify readability on multiple screen sizes
5. **Mind the contrast**: Ensure sufficient contrast between text and background

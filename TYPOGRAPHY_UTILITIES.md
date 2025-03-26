# Typography Utility Classes

This document describes the typography utility classes available on rosenqvist.design and how to use them effectively.

## Table of Contents

1. [Naming Convention](#naming-convention)
2. [Text Size Utilities](#text-size-utilities)
3. [Font Weight Utilities](#font-weight-utilities)
4. [Line Height Utilities](#line-height-utilities)
5. [Letter Spacing Utilities](#letter-spacing-utilities)
6. [Text Alignment Utilities](#text-alignment-utilities)
7. [Text Transformation Utilities](#text-transformation-utilities)
8. [Text Decoration Utilities](#text-decoration-utilities)
9. [Text Wrapping and Overflow Utilities](#text-wrapping-and-overflow-utilities)
10. [Text Color Utilities](#text-color-utilities)
11. [Style Composition Utilities](#style-composition-utilities)
12. [Width Constraint Utilities](#width-constraint-utilities)
13. [Responsive Typography Utilities](#responsive-typography-utilities)
14. [Best Practices](#best-practices)

## Naming Convention

The utility classes follow a consistent naming pattern:

```
.text-{property}-{value}
```

For example:

- `.text-size-lg` for large text size
- `.text-weight-bold` for bold text weight
- `.text-color-primary` for primary text color

For simple properties, the pattern may be shortened:

- `.text-center` for centered text
- `.text-uppercase` for uppercase text

## Text Size Utilities

Use these utilities to apply specific font sizes based on your design system's scale.

| Class             | Description                        | Example                                                   |
| ----------------- | ---------------------------------- | --------------------------------------------------------- |
| `.text-size-xs`   | Extra small text (0.75rem / 12px)  | <span style="font-size: 0.75rem">Extra small text</span>  |
| `.text-size-sm`   | Small text (0.875rem / 14px)       | <span style="font-size: 0.875rem">Small text</span>       |
| `.text-size-base` | Base text size (1rem / 16px)       | <span style="font-size: 1rem">Base text size</span>       |
| `.text-size-md`   | Medium text (1.25rem / 20px)       | <span style="font-size: 1.25rem">Medium text</span>       |
| `.text-size-lg`   | Large text (1.5rem / 24px)         | <span style="font-size: 1.5rem">Large text</span>         |
| `.text-size-xl`   | Extra large text (1.875rem / 30px) | <span style="font-size: 1.875rem">Extra large text</span> |
| `.text-size-2xl`  | 2X large text (2.25rem / 36px)     | <span style="font-size: 2.25rem">2X large text</span>     |
| `.text-size-3xl`  | 3X large text (3rem / 48px)        | <span style="font-size: 3rem">3X large text</span>        |
| `.text-size-4xl`  | 4X large text (3.75rem / 60px)     | <span style="font-size: 3.75rem">4X large text</span>     |

### Example Usage

```html
<p class="text-size-lg">This text will be larger than the default.</p>
<span class="text-size-sm">This text will be smaller than the default.</span>
```

## Font Weight Utilities

Use these utilities to control text weight.

| Class                 | Description         |
| --------------------- | ------------------- |
| `.text-weight-normal` | Normal weight (400) |
| `.text-weight-medium` | Medium weight (500) |
| `.text-weight-bold`   | Bold weight (700)   |

### Example Usage

```html
<p>
  This is <span class="text-weight-bold">bold text</span> within a paragraph.
</p>
```

## Line Height Utilities

Control the line height of text elements.

| Class                   | Description                  | Line Height Value |
| ----------------------- | ---------------------------- | ----------------- |
| `.text-leading-none`    | No line height               | 1                 |
| `.text-leading-tight`   | Tight line height            | 1.2               |
| `.text-leading-snug`    | Slightly relaxed line height | 1.4               |
| `.text-leading-normal`  | Normal line height           | 1.6               |
| `.text-leading-relaxed` | Relaxed line height          | 1.75              |

### Example Usage

```html
<p class="text-leading-relaxed">
  This paragraph has a relaxed line height, making it easier to read for longer
  text blocks. The extra spacing helps with readability, especially for content
  with multiple lines.
</p>
```

## Letter Spacing Utilities

Control the spacing between letters (tracking).

| Class                    | Description            | Tracking Value |
| ------------------------ | ---------------------- | -------------- |
| `.text-tracking-tighter` | Tighter letter spacing | -0.03em        |
| `.text-tracking-tight`   | Tight letter spacing   | -0.015em       |
| `.text-tracking-normal`  | Normal letter spacing  | 0              |
| `.text-tracking-wide`    | Wide letter spacing    | 0.01em         |
| `.text-tracking-wider`   | Wider letter spacing   | 0.02em         |

### Example Usage

```html
<h1 class="text-tracking-tight">
  Headings often look better with tighter tracking
</h1>
<span class="text-size-xs text-tracking-wide"
  >Small text benefits from wider tracking for legibility</span
>
```

## Text Alignment Utilities

Control the horizontal alignment of text.

| Class           | Description                 |
| --------------- | --------------------------- |
| `.text-left`    | Left-aligned text (default) |
| `.text-center`  | Center-aligned text         |
| `.text-right`   | Right-aligned text          |
| `.text-justify` | Justified text (full width) |

### Example Usage

```html
<p class="text-center">This text is centered.</p>
<p class="text-right">This text is right-aligned.</p>
```

## Text Transformation Utilities

Control the capitalization of text.

| Class               | Description                           |
| ------------------- | ------------------------------------- |
| `.text-uppercase`   | ALL CAPS                              |
| `.text-lowercase`   | all lowercase                         |
| `.text-capitalize`  | First Letter Of Each Word Capitalized |
| `.text-normal-case` | Normal case (resets text transform)   |

### Example Usage

```html
<h5 class="text-uppercase">Section label</h5>
<span class="text-capitalize">proper noun</span>
```

## Text Decoration Utilities

Control text decorations like underlines.

| Class                 | Description             |
| --------------------- | ----------------------- |
| `.text-underline`     | Underlined text         |
| `.text-no-underline`  | Removes underline       |
| `.text-line-through`  | Strikethrough text      |
| `.text-no-decoration` | Removes all decorations |

### Example Usage

```html
<p>Regular text with an <span class="text-underline">underlined</span> word.</p>
<a class="text-no-underline" href="#">Link with no underline</a>
<p>This price is <span class="text-line-through">$100</span> $75 now.</p>
```

## Text Wrapping and Overflow Utilities

Control how text wraps and handles overflow situations.

| Class            | Description                           |
| ---------------- | ------------------------------------- |
| `.text-truncate` | Truncates with ellipsis on one line   |
| `.text-break`    | Breaks long words to prevent overflow |
| `.text-no-wrap`  | Prevents text from wrapping           |
| `.text-wrap`     | Allows text to wrap normally          |
| `.text-clamp-1`  | Limits text to 1 line with ellipsis   |
| `.text-clamp-2`  | Limits text to 2 lines with ellipsis  |
| `.text-clamp-3`  | Limits text to 3 lines with ellipsis  |

### Example Usage

```html
<div style="width: 200px;">
  <p class="text-truncate">
    This text will be truncated when it exceeds the container width.
  </p>

  <p class="text-clamp-2">
    This paragraph will be limited to two lines maximum. Any additional content
    will be truncated with an ellipsis at the end.
  </p>

  <p class="text-break">
    ThisIsAReallyLongWordThatWouldNormallyOverflowButWillBreakInstead
  </p>
</div>
```

## Text Color Utilities

Control the color of text.

| Class                   | Description                             |
| ----------------------- | --------------------------------------- |
| `.text-color-primary`   | Primary text color                      |
| `.text-color-secondary` | Secondary text color                    |
| `.text-color-tertiary`  | Tertiary text color                     |
| `.text-color-on-brand`  | Text color for use on brand backgrounds |
| `.text-color-link`      | Link text color                         |

### Example Usage

```html
<p class="text-color-secondary">This text uses the secondary color.</p>
<span class="text-color-link">This looks like a link</span>
```

## Style Composition Utilities

These utilities combine multiple properties for common text styles.

| Class           | Description                                    |
| --------------- | ---------------------------------------------- |
| `.text-lead`    | Lead paragraph style (larger, secondary color) |
| `.text-meta`    | Meta text style (smaller, tertiary color)      |
| `.text-code`    | Inline code style                              |
| `.text-caption` | Caption text style (smaller, italicized)       |

### Example Usage

```html
<p class="text-lead">
  This is an introductory paragraph that stands out from regular text.
</p>

<p>Regular paragraph text.</p>

<p class="text-meta">Posted on: Jan 15, 2024 • 5 min read</p>

<p>Use the <span class="text-code">text-code</span> class for inline code.</p>

<figure>
  <img src="image.jpg" alt="Example image" />
  <figcaption class="text-caption">
    Figure 1: An example image showing the concept.
  </figcaption>
</figure>
```

## Width Constraint Utilities

Control the maximum width of text elements for optimal reading.

| Class                 | Description              | Width |
| --------------------- | ------------------------ | ----- |
| `.text-width-narrow`  | Narrow width constraint  | 65ch  |
| `.text-width-default` | Default width constraint | 75ch  |
| `.text-width-wide`    | Wide width constraint    | 90ch  |
| `.text-width-full`    | Full width (100%)        | 100%  |

### Example Usage

```html
<p class="text-width-narrow">
  This paragraph has a narrow width constraint, which is ideal for focused
  reading experiences like articles.
</p>
```

## Responsive Typography Utilities

These utilities apply only at specific screen sizes.

### Medium Screens (max-width: 768px)

| Class               | Description                           |
| ------------------- | ------------------------------------- |
| `.text-md-left`     | Left-aligned text on medium screens   |
| `.text-md-center`   | Center-aligned text on medium screens |
| `.text-md-right`    | Right-aligned text on medium screens  |
| `.text-md-truncate` | Truncated text on medium screens      |

### Small Screens (max-width: 480px)

| Class               | Description                          |
| ------------------- | ------------------------------------ |
| `.text-sm-left`     | Left-aligned text on small screens   |
| `.text-sm-center`   | Center-aligned text on small screens |
| `.text-sm-right`    | Right-aligned text on small screens  |
| `.text-sm-truncate` | Truncated text on small screens      |

### Example Usage

```html
<!-- This heading will be centered on desktop but left-aligned on mobile -->
<h2 class="text-center text-sm-left">Responsive Heading</h2>

<!-- This text will be truncated only on smaller screens -->
<p class="text-sm-truncate">
  This text will be truncated on small screens only.
</p>
```

## Best Practices

1. **Combine sparingly**: While utility classes can be combined, use restraint to avoid excessive class lists.

   ```html
   <!-- Good -->
   <p class="text-size-lg text-weight-bold text-color-primary">
     Important heading
   </p>

   <!-- Avoid - too many utility classes -->
   <p
     class="text-size-lg text-weight-bold text-color-primary text-center text-uppercase text-no-wrap text-leading-tight"
   >
     Too many utilities
   </p>
   ```

2. **Consider creating component classes** for frequently used combinations of utilities.

   ```css
   /* Instead of repeatedly using multiple utility classes */
   .page-title {
     /* Combines multiple utility classes into one component class */
     font-size: var(--text-3xl);
     font-weight: var(--font-weight-bold);
     line-height: var(--leading-tight);
     letter-spacing: var(--tracking-tight);
   }
   ```

3. **Use semantic HTML elements** alongside utility classes, not as a replacement.

   ```html
   <!-- Good - semantic element with utility enhancement -->
   <h1 class="text-color-primary">Main Heading</h1>

   <!-- Avoid - utility classes don't replace semantic markup -->
   <div class="text-size-3xl text-weight-bold">Not a real heading</div>
   ```

4. **Be consistent** in your application of utility classes.

5. **Test thoroughly** on different screen sizes, especially when using responsive utilities.

6. **Use width constraints** appropriately for text-heavy content to maintain readability.

7. **Consider accessibility** when applying utilities that affect readability.

8. **Prioritize the cascade** - utilities use `!important` to ensure they take precedence, but use them wisely.

### Practical Example: Article Card

```html
<article class="card">
  <div class="card-image">
    <img src="article-image.jpg" alt="Article featured image" />
  </div>
  <div class="card-content">
    <p class="text-meta text-uppercase">Category • June 12, 2023</p>
    <h3 class="text-size-lg text-clamp-2">
      This Article Title Will Be Limited to Two Lines Maximum
    </h3>
    <p class="text-clamp-3 text-color-secondary">
      This article excerpt will be limited to three lines maximum. It provides a
      brief summary of what the article is about, with any additional content
      being truncated with an ellipsis.
    </p>
    <a href="#" class="text-color-link text-weight-medium">Read more</a>
  </div>
</article>
```

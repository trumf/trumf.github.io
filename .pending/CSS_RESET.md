# CSS Reset Documentation

This document explains the CSS reset implementation for rosenqvist.design and how it works together with the other styling components.

## Table of Contents

1. [Overview](#overview)
2. [Implementation](#implementation)
3. [What Our Reset Normalizes](#what-our-reset-normalizes)
4. [Working with the Reset](#working-with-the-reset)
5. [Best Practices](#best-practices)

## Overview

A CSS reset is used to create a consistent baseline for styling across different browsers by removing or normalizing the default browser styles. Our reset implementation aims to:

- Provide cross-browser consistency
- Create a clean foundation for custom styles
- Improve accessibility
- Address common browser quirks
- Support responsive design principles

## Implementation

The reset is implemented in `/css/reset.css` and is imported at the beginning of the main CSS file. The import order is important:

```css
@import url("reset.css");
@import url("https://fonts.googleapis.com/css?family=Inter:400");
@import url("utilities.css");
```

This ensures that the reset is applied first, followed by fonts, and then utility classes.

## What Our Reset Normalizes

### Box Sizing

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

This applies `box-sizing: border-box` to all elements, making width and height calculations include padding and border, but not margin. This creates a more intuitive layout model.

### Document & Body

```css
html {
  scroll-behavior: smooth;
  -webkit-text-size-adjust: 100%;
  text-size-adjust: 100%;
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
  min-height: 100%;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}
```

Resets margins and padding on the body, enables smooth scrolling, and improves text rendering quality.

### Typography

```css
h1,
h2,
h3,
h4,
h5,
h6,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}
```

Removes default margins from typography elements, allowing for more precise control over spacing.

### Lists

```css
ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}
```

Removes default list styling, allowing you to apply custom styling as needed.

### Form Elements

```css
button,
input,
select,
textarea {
  font: inherit;
  color: inherit;
  margin: 0;
  padding: 0;
  background: none;
  border: none;
}
```

Normalizes form elements to inherit font properties and removes default styling.

### Media Elements

```css
img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
  height: auto;
}
```

Makes media elements responsive by default and ensures they display as blocks.

### Accessibility

```css
:focus:not(:focus-visible) {
  outline: none;
}

:focus-visible {
  outline: 2px solid var(--color-primary, #a0000c);
  outline-offset: 2px;
}
```

Improves accessibility by providing visible focus indicators for keyboard navigation while hiding them for mouse users.

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

Respects user preferences for reduced motion, improving accessibility.

## Working with the Reset

When developing with our reset, keep the following in mind:

1. **Don't repeat reset rules**: Avoid duplicating reset rules in component styles.
2. **Build upon the reset**: Use the reset as a foundation and add styling on top.
3. **Use utility classes**: For common styling needs, use the utility classes defined in `utilities.css`.
4. **Be mindful of inheritance**: The reset establishes certain inheritance patterns; work with them, not against them.

## Best Practices

### When to Override Reset Styles

Sometimes you'll need to override the reset styles:

```css
/* Restore list styling when needed */
.content-list {
  list-style-type: disc;
  padding-left: 1.5rem;
}

/* Restore link styling when needed */
.text-link {
  color: var(--text-link);
  text-decoration: underline;
}
```

### Adding Components

When creating new components, start with the reset baseline:

```css
.new-component {
  /* No need to reset margins, padding, etc. - the reset already did that */
  /* Just add the specific styles needed */
  display: flex;
  gap: var(--spacing-md);
}
```

### Testing Across Browsers

Even with a reset, always test your styles across different browsers, particularly:

- Chrome/Edge (Blink)
- Firefox (Gecko)
- Safari (WebKit)
- Mobile browsers

## Conclusion

This CSS reset provides a solid foundation for the rosenqvist.design website. By normalizing browser defaults, we can ensure a consistent experience while maintaining accessibility and responsiveness.

If you need to make changes to the reset, consider the cascading effects they might have on the entire site's styling.

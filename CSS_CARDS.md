# Card Component System

This document outlines the standardized card component system for rosenqvist.design. These components create a consistent, accessible, and responsive design across the website.

## Table of Contents

1. [Card Types](#card-types)
2. [HTML Structure](#html-structure)
3. [Typography](#typography)
4. [Accessibility Considerations](#accessibility-considerations)
5. [Responsive Behavior](#responsive-behavior)
6. [Usage Examples](#usage-examples)

## Card Types

The system includes several card variants:

1. **Base Card (`.card`)** - The foundation for all card components
2. **Blog Card (`.blog-card`)** - Used for blog post grids on the home page
3. **Post Card (`.postCard`)** - Used for blog listings with optional horizontal layout
4. **Compact Card (`.card-compact`)** - Smaller cards for dense layouts

## HTML Structure

### Standard Card Structure

```html
<a href="/path/to/page.html" class="card">
  <div class="card-image">
    <img src="/public/images/example.jpg" alt="Descriptive alt text" />
  </div>
  <div class="card-content">
    <div class="card-meta">
      <span class="date">Updated: 14/5/2024</span>
      <div class="tags">
        <span class="tag">Category</span>
        <span class="tag">Topic</span>
      </div>
    </div>
    <h3 class="card-title">Card Title Goes Here</h3>
    <p class="card-description">
      A brief description of the content, limited to three lines of text.
    </p>
  </div>
</a>
```

### Blog Card Structure

```html
<a href="/blog/posts/article-name.html" class="blog-card">
  <div class="card-image">
    <img src="/public/images/posts/image.jpg" alt="Descriptive alt text" />
  </div>
  <div class="card-content">
    <div class="card-meta">
      <span class="date">Updated: 14/5/2024</span>
      <div class="tags">
        <span class="tag">Design</span>
        <span class="tag">UX</span>
      </div>
    </div>
    <h3 class="card-title">Blog Post Title</h3>
    <p class="card-description">
      A brief description of the blog post content.
    </p>
  </div>
</a>
```

### Post Card Structure

```html
<a href="/blog/posts/article-name.html" class="postCard">
  <div class="postImage">
    <img src="/public/images/posts/image.jpg" alt="Descriptive alt text" />
  </div>
  <div class="post-content">
    <div class="post-label">
      <p>Updated: 14/5/2024</p>
      <p>Category, Topic</p>
    </div>
    <div class="CaseName">
      <h4>Post Title Goes Here</h4>
    </div>
    <div class="caseText" style="margin-top: 8px">
      <p>Brief description of the post content.</p>
    </div>
  </div>
</a>
```

## Typography

The card components integrate with the site's type scale system for consistent text sizing and spacing:

### Card Typography Elements

| Element          | Font Size              | Line Height              | Font Weight                  |
| ---------------- | ---------------------- | ------------------------ | ---------------------------- |
| Card Title       | `--text-md` (1.25rem)  | `--leading-snug` (1.35)  | `--font-weight-medium` (500) |
| Card Description | `--text-sm` (0.875rem) | `--leading-normal` (1.5) | `--font-weight-normal` (400) |
| Metadata/Date    | `--text-sm` (0.875rem) | `--leading-normal` (1.5) | `--font-weight-normal` (400) |
| Tags             | `--text-xs` (0.75rem)  | `--leading-normal` (1.5) | `--font-weight-normal` (400) |

### Typography Features

1. **Truncation**

   - Card titles are limited to 2 lines with ellipsis overflow
   - Card descriptions are limited to 3 lines with ellipsis overflow

2. **Line Height**

   - Titles use a slightly tighter line height for better visual cohesion
   - Descriptions use standard line height for better readability

3. **Vertical Spacing**

   - Consistent margin patterns between text elements using the spacing variables
   - Metadata: `margin-bottom: var(--spacing-sm)`
   - Title: `margin-bottom: var(--spacing-xs)`

4. **Responsive Adjustments**
   - Font sizes adjust automatically as part of the responsive typography system
   - Spacing compresses slightly on smaller screens

For complete details on the typography system, see [TYPOGRAPHY.md](TYPOGRAPHY.md).

## Accessibility Considerations

The card system is designed with the following accessibility features:

1. **Focus States** - All cards have visible focus states for keyboard navigation
2. **Color Contrast** - Text has sufficient contrast with backgrounds
3. **Semantic Markup** - Cards use proper heading levels and maintain document outline
4. **Interactive Areas** - The entire card is clickable but maintains proper focus behavior
5. **Alternative Text** - All card images require descriptive alt text
6. **Text Size** - All text meets minimum size requirements for readability (14px/0.875rem or larger)

## Responsive Behavior

Cards automatically adapt to different screen sizes:

- **Desktop** - Multi-column grid layout
- **Tablet** - Fewer columns in the grid
- **Mobile** - Single column layout with full-width cards
- **Post Cards** - Horizontal layout on larger screens, vertical on mobile

## Usage Examples

### Basic Card Grid

```html
<div class="card-grid">
  <a href="/page1.html" class="card">
    <!-- Card content -->
  </a>
  <a href="/page2.html" class="card">
    <!-- Card content -->
  </a>
  <a href="/page3.html" class="card">
    <!-- Card content -->
  </a>
</div>
```

### Blog Post Grid

```html
<div class="blog-grid">
  <a href="/blog/post1.html" class="blog-card">
    <!-- Card content -->
  </a>
  <a href="/blog/post2.html" class="blog-card">
    <!-- Card content -->
  </a>
  <a href="/blog/post3.html" class="blog-card">
    <!-- Card content -->
  </a>
</div>
```

### Post Listing

```html
<div class="post-container">
  <a href="/blog/post1.html" class="postCard">
    <!-- Post card content -->
  </a>
  <a href="/blog/post2.html" class="postCard">
    <!-- Post card content -->
  </a>
</div>
```

## Dark Mode Compatibility

All cards adjust automatically when dark mode is enabled, with appropriate background, text, and border colors. This is controlled through CSS variables.

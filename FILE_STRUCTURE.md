# Website File Structure Documentation

## Overview

This document outlines the file structure of the rosenqvist.design website. The structure follows web development best practices with clear organization and absolute (root-relative) paths for all resources.

## Directory Structure

```
/
├── index.html              # Main home page
├── portfolio.html          # Portfolio overview page
├── blog/                   # Blog content
│   ├── index.html          # Blog listing page
│   └── posts/              # Individual blog posts
│       ├── designAndAI.html
│       ├── UX-design-evolution.html
│       └── ...
├── cases/                  # Case studies
│   ├── siic.html           # Sound in Intelligent Cars
│   ├── volvo.html          # Volvo case study
│   └── ...
├── components/             # Reusable HTML components
│   ├── navbar.html         # Navigation component
│   └── footer.html         # Footer component
├── css/                    # Stylesheets
│   └── main.css            # Main site-wide CSS
├── js/                     # JavaScript files
│   └── main.js             # Main site-wide JavaScript
└── public/                 # Static assets
    └── images/             # Image files
        ├── favicon.svg     # Site favicon
        ├── posts/          # Blog post images
        ├── siic/           # SIIC case study images
        └── ...             # Other image folders
```

## Path Conventions

All paths in HTML, CSS, and JavaScript files should use absolute (root-relative) paths starting with a forward slash (`/`).

### Examples:

```html
<!-- CSS link -->
<link rel="stylesheet" href="/css/main.css" />

<!-- Image source -->
<img src="/public/images/posts/example.png" alt="Example" />

<!-- Page links -->
<a href="/blog/">Blog</a>
<a href="/blog/posts/article-name.html">Article</a>

<!-- JavaScript -->
<script src="/js/main.js"></script>

<!-- Component loading with jQuery -->
$("#navbar-container").load("/components/navbar.html");
```

## Benefits of This Structure

1. **Maintainability**: Clear organization makes it easy to find and update files
2. **Scalability**: Structure can accommodate future growth
3. **Reliability**: Absolute paths prevent broken links when navigating between directories
4. **Consistency**: Standardized approach across the entire website

## Redirect Strategy

Old URLs (like `/posts.html`) have redirects to their new locations (`/blog/`) to maintain backward compatibility and avoid broken links.

## Component System

The website uses a component-based approach with jQuery to load common elements:

- Navigation bar (`/components/navbar.html`)
- Footer (`/components/footer.html`)

This ensures consistent UI across all pages and simplifies maintenance.

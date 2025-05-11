---
layout: post.njk
title: Moving the Blog to 11ty
date: 2024-05-11
description: Moved the blog away from pure HTML and migrated to 11ty
---

## Moving My Site to Eleventy: Streamlining for Writing and Future Projects

When I first started building my personal site, I made a deliberate choice to go with pure HTML and CSS. My goal to understand how everything fits together without any abstractions. I also saw myself making a lot of cool and unique layouts for each post. It started well, and I put together some posts (although without any amazing layouts). The experience was incredibly rewarding, and I learned a lot about layout, design principles, and the structure of web pages.

But after the first couple of posts, it started to feel like a ton of work every time I wanted to put a blog together. It drained my motivation, and even though I learned a lot, I feel like what is holding me back right now is the ability to put pen to paper and actually write things down.

## Why 11ty?

The goal was to make the writing process easier, and after looking around a bit, I decided to switch to 11ty. 11ty (or Eleventy) is a static site generator that still lets me keep things simple but with much more efficiency. It handles templating, reusable components, and layout management. That means I can focus more on the actual writing and less on redoing basic page structures every time. Hopefully, it will allow me to focus more on the writing and remove some of the friction of creating posts.

The transition wasn’t too difficult. I asked Claude to help with the migration, and using Cursor, it didn’t take too long to convert the blog posts into Markdown documents and create page templates, etc. I decided to remove some of the gradients I had added when I first made the site since they didn’t feel as fresh now as they did back then. I also made it light-themed by default to improve readability. I want to shift the focus away from the portfolio towards the blog, so I wanted it to be nicer to read.

I did run into some issues that are not quite resolved yet. Some of them had to do with the CSS: getting things to line up when using reusable components is a bit tricky. I might just remove the whole LLM-written responsive layout part and rewrite it myself.

The biggest issue was getting things to work together with the server. Git is not my strong suit, and making sure the page is deployed from the right branch has been a pain. If you are reading this, it means I’m on the right path to fixing it.

## Next Steps: Posting more, RSS Feed, and Portfolio updates

Now that the site structure is more manageable, the next step is to write more consistently and set up an RSS feed. I want to build the RSS feed from scratch, similar to how I initially built my site. I know I could just use a plugin or a pre-built solution, but I think there’s value in understanding the mechanics behind it. Building things from the ground up gives me deeper insight into how they work. I’ve done this before with my original site build, and it really helped my understanding.

I’m also planning to update the portfolio. This is always a challenge, given the nature of the automotive industry. Long lead times and the breadth of responsibilities make it tricky to create the clean, singular case studies that typically look good in a portfolio. It’s something I need to work through and find a way to present that feels both authentic and engaging.

## Moving Forward

So that’s where I’m at right now. The focus is on building momentum with writing, updating my portfolio, and setting up an RSS feed. I also have a ton of side-projects running in parallel that I really should start posting about. I’m excited to see where this next phase takes me and if I can keep the motivation alive.

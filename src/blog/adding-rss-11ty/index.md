---
layout: post.njk
title: "11ty RSS Feed Setup: Three Plugin Problems and How I Fixed Them"
date: 2025-06-01
description: "A debugging adventure involving dependency management, configuration conflicts, and deprecated APIs while setting up RSS feeds in 11ty"
image: /blog/adding-rss-11ty/rss-icon.svg
imageAlt: "RSS feed icon"
---

I've been following RSS feeds since probably the late oughts so when I moved this site into 11ty I of course wanted to have my own feed. What started as a simple plugin install turned into a debugging process involving dependency management, configuration conflicts, and deprecated APIs.

I had planned to create my own feed and really dig into how the format works and how to put it together but after a quick look and thinking about how i wanted to spend my evenings i decided to just search for a ready made solution. Just searching "11ty rss" led me to this page [https://www.11ty.dev/docs/plugins/rss/](https://www.11ty.dev/docs/plugins/rss/) and it seemed easy enough.

## Setting Up the 11ty RSS Plugin: Two Installation Methods

I'll be honest - these issues were probably caused by using AI to install the plugin. I fed Claude the readme file and the docs and asked it to help me set it up. It gave me some straightforward steps: install the plugin with `npm install @11ty/eleventy-plugin-rss`, then I got a choice between an easy way and a harder way. Option 1 was using a virtual template where you just add configuration to your Eleventy config file. Option 2 was the manual template method with more control where you add the plugin in your config file and create feed template files in your project directory.

I went with the "easy" option first, and that's where I ran into problems.

## Issue #1: "Trying to convert to absolute url with base undefined" Error

The first problem showed up as these debug messages: "Trying to convert '/blog/' to be an absolute url with base undefined and failed." Despite having properly configured `metadata.url` in the site's metadata file, the RSS plugin just refused to generate the feed.xml file. I tried everything - setting the `base` URL directly in plugin options, wrapping it in a nested `metadata` object, double-checking the metadata.json configuration. Nothing worked.

Eventually I had Claude dig into the plugin's source code and found this comment in `absoluteUrl.js`: "This is deprecated! Use the Eleventy HTML `<base>` plugin instead (2.0+)". Turns out the plugin had evolved way beyond the configuration approaches I were trying, creating this mismatch between what I expected and what actually worked.

## Issue #2: Duplicate Plugin Configuration in .eleventy.js

When I looked at the .eleventy.js file, there were several issues. There was a proper import statement at the top: import eleventyRssPlugin from "@11ty/eleventy-plugin-rss"; but then later in the file there was an unexpected duplication with another copy of the same import statement and a competing plugin configuration block with different settings. Two plugin registrations fighting each other, each with conflicting configurations. The file structure was so mangled that every time I tried to edit it, it just failed.

At this point I switched to option 2 - the manual template method. Instead of wrestling with all these interconnected problems, I created a `feed.njk` template with direct control over feed generation. Set the proper permalink to `/feed/feed.xml`, used `metadata.url` directly to construct absolute URLs, applied the `htmlToAbsoluteUrls` filter for content processing, and excluded the template from collections to avoid circularity.

## Issue #3: RSS Plugin Installed in devDependencies Instead of dependencies

And even when I thought I had the configuration issues sorted out, this recurring problem kept happening every few days where the RSS plugin would mysteriously stop working. I'd clear the npm cache and it would work again temporarily, but then break again a few days later. Turns out the plugin had been installed in `devDependencies` instead of `dependencies`. Node.js prioritizes `dependencies` over `devDependencies` during module resolution, and npm kept getting confused about where to find the package. So while clearing the cache would fix it temporarily, the fundamental problem was that the package wasn't where the system expected it to be.

## Additional Fix: Changing feed.xml Output Path Configuration

There was one more gotcha though. The `/feed/feed.xml` path was something that just happened when using the LLM to help install it, and at first it seemed like that was the only way it could work. Whenever I tried to change it I just got an error. Turns out the fix was to change both the outputPath in the config (which I had tried) AND also change it in the feed.njk template itself (which I hadn't tried).

## Lessons Learned: 11ty RSS Plugin Best Practices

Looking back, this whole saga taught me a few things. First, Eleventy plugin APIs evolve, and older configuration patterns can become deprecated without much fanfare. Second, build tools are really sensitive to duplication and conflicting settings. And finally, sometimes when plugin complexity exceeds the benefit, just rolling your own template gives you way more control.

The combination of issues was particularly frustrating - the plugin had evolved its URL handling approach making older configuration methods ineffective, the dependency classification issue wasn't obvious, and the configuration conflicts made everything worse. The recurring nature of that dependency issue was particularly annoying because clearing the cache would fix it temporarily, so I kept thinking I'd solved it when I really hadn't.

So I got it working and this post is mostly just a way for me to get rid of the frustration by writing it down. I will say that although the whole issue was probably caused by getting help from an LLM, it was also how it got solved. I would never have gone into the source code to find the deprecated comment, but I could just tell Claude to dig into it and it found the issue pretty quickly.

If you want to see the feed for yourself you can find it here: [rosenqvist.design/feed.xml](https://rosenqvist.design/feed.xml)

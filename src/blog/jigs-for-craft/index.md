---
layout: post.njk
title: "Jigs, Not Tools"
date: 2025-06-16
description: "Building personal utilities instead of general tools - why jigs matter for designers"
image: /blog/jigs-for-craft/converterscreenshot.png
imageAlt: "Workshop jig icon"
---

A while ago, I came across a blog post by PJ Oneri about the difference between jigs and tools. It struck a chord with me.

In other craft disciplines—woodworking, machining, even ceramics—it's common to make jigs. A jig is something that a craftsman makes for themselves to solve a particular problem. It's something a maker builds for themselves to solve a specific problem, often a one-off or repetitive task. A jig is personal and quickly made.

<blockquote>
<p>Jigs are the custom tools that craftspeople create to enable them to do great work. In woodworking it’s often used to help make cuts with optimal precision. But, really, it can be used for anything. Jigs are what allow craftspeople to deliver quality predictably and faster.</p>

<p>Jigs are “fine, I’ll make it myself” made manifest. The tool they need doesn’t exist or is too expensive or is too much of a pain in the ass. So a jig is born. The craftsperson has a job to do and they’re not going to let a tool not existing stop them.</p>
<cite><a href="https://pjonori.blog/posts/crafts-and-tools-and-jigs/">- PJ Oneri, Crafts and Tools and Jigs</a></cite>
</blockquote>

Reading PJ's post made me realize: I've started building a lot of jigs too. Little scripts, templates, checklists—small things that help me solve my own problems, not meant to scale or be shipped but just meant to solve repetitive tasks.

I'm thinking that I will start sharing them as examples of what you can create to help you in your day-to-day job as a designer.

## The Measurement Converter

Over the past few years, I've spent a lot of time working in the automotive industry. One thing that comes up again and again in that context is: how big does this icon or text need to be?

<a href="https://rosenqvist.design/angularsizetool/" style="display: flex;
    width: 100%;
    justify-content: center;
    font-size: var(--text-lg);">Screen Measurement converter</a>

In automotive, you're almost always designing for multiple displays at once, and it's a heavily regulated environment. Certain visual elements, especially safety-critical ones, must meet strict size requirements in order for a vehicle to be legally sold in various markets.

There are two key ISO standards that typically guide this:

1. **ISO 15008** – This one provides recommended minimum sizes for text and graphical elements. It expresses these sizes in arc minutes, which depend on viewing distance. It's technically a recommendation, but most OEMs follow it closely to avoid legal risk and ensure good usability.

2. **ISO 2575** – This one defines concrete physical size requirements for telltales. These are the small warning symbols on the dashboard, and their size is supposed to be 75mm&sup2; measured in millimeters, not pixels.

As a digital designer, my Figma designs are measured in px. But compliance standards are written in arc minutes and millimeters. To bridge that gap, I needed an easy way to calculate:

• How many millimeters an element will be, based on pixel size and screen DPI

• How many arc minutes it subtends, based on viewing distance

And vice versa

During the design phase of a car project, the specs of screens and their positions change often. Many teams are working in parallel to get things to align, so you need to be able to give ballpark figures quickly. You also need to set hard limits for what is feasible from both a design side and regulation side.

In the past, I've built solutions for this using Python scripts and Excel sheets. Both work—but recently, I've found that building a small HTML page is often the fastest and most flexible way to share these kinds of utilities.

I think i was also a little inspired by <a href="https://blog.jim-nielsen.com/2025/lots-of-little-html-pages/">Jim Nielsen</a> and his small HTML pages approach.

This little jig is vibe-coded as an artifact in claude and the only thing I've fixed is to adjust the colors a bit and make sure it works for mobile sizes. Since it's all in one HTML file, I can email it, drop it in a Slack chat, or embed it in Confluence. People don't need to install anything, and it's more visual and self-explanatory than a spreadsheet.

Since it's a webpage created on my own computer in my own time, I can also take it with me. I can hang it on the wall of any workshop I join in the future, and it can help me improve the craft wherever I go.

## More jigs and tools to come

I will share some more jigs in the future once I do some minimal cleanup on them. Whether or not this particular jig is useful to you, I hope you take away this: it's worth building jigs. Little tools for your own workflow. Not to scale, not to sell, not to impress anyone—just to help you work smarter.

My advice is to make them portable and standalone so you can take them with you in your toolbox. Make them with what you have at hand.

Also, if you make a jig, please share it as an example. The odds are that people don't have your exact problem (you would build tools for that), but they might have similar problems. Showing them some examples can make them go home and weld together something that suits them personally.

Please check out my jig and PJ's blog post, and if you have your own jigs, I would love to hear about them.

<a href="https://rosenqvist.design/angularsizetool/" style="display: flex;
    width: 100%;
    justify-content: center;
    font-size: var(--text-lg);">Screen Measurement converter</a>

---
layout: post.njk
title: "Building a Color Contrast Design Jig"
date: 2025-06-23
description: "How I created a visual tool to explore color relationships and solve contrast requirements in automotive interface design"
image: /blog/color-contrast-jig/contrast-tool.png
imageAlt: "Color contrast visualization tool"
---

When a driver glances at their dashboard at 70mph, every millisecond of recognition matters—and that's where color contrast becomes critical.

Today I will talk about another jig I've created to help me in my daily design work. You can read more about [jigs in my recent post here](/blog/jigs-for-craft/).

## The Problem with Traditional Contrast Checkers

When creating interfaces it is good practice to check that your background and foreground colors pass a contrast check. How to measure contrast is defined in WCAG and there are several color contrast checkers out there for both WCAG and APCA which is another algorithm that is meant to be more perceptually accurate. APCA is also better if you are designing dark mode interfaces, as the algorithm will give you a more accurate result for what is readable and what is not.

But all tools I've found take an exact color (as a hex value or something) and compare it to another exact color. This is great if you want to validate two colors but if you are exploring and trying to find a palette that will work you might need to adjust all colors again if some of them don't have sufficient contrast. This creates a time-consuming iterative process.

I needed a way to get an overview of how the colors relate to each other. More like a map than turn-by-turn directions, so I could see the general direction I should be heading.

[The contrast toy is my attempt at doing that](https://rosenqvist.design/contrast-toy)

It works by comparing a background color to all the hues. Since you see all the hues you only need to adjust lightness and saturation to try to find a color that could work.

## Real-World Application: The Tesla Light Theme Challenge

Back in 20... Tesla released a car with light theme UI. This was something that had never been seen in automotive interfaces before and since then it has been something that has been asked for in all car UIs.

When you are designing for automotive interfaces you need to follow a whole bunch of regulations on top of just creating a good UX. One of those regulations is about the color of telltales (the little icons that show the state of the car). Some telltales are required to have a certain color. Red and green is usually no problem but yellow is not a great color on light backgrounds.

## The Natural Lightness Problem

All hues, or more accurately all colors, have a natural lightness range. Some colors like yellow or turquoise only look yellow and turquoise when they are very bright. If you take a nice yellow and reduce the lightness it will turn into a muddy brown (same hue, different color).

You can't get a light color like yellow to have sufficient contrast against a light background.

Fortunately there are some ways around this. The regulation actually says that the telltales need to be yellow OR AMBER. None of these colors are defined but amber can be described as more towards the orange range of hues and this lets you inch your way over the contrast requirements. The other way, that is described in the regulations, is that you can add a border to the telltale and then you are allowed to measure the border value vs the background.

We ended up using a combination of both methods to ensure good contrast as well as darkening the "light theme" background which helped with the contrast as well. By the way, if you have a background that sits somewhere in the middle of lightness values then you will have problems getting contrast both to dark colors and to light colors. Not recommended.

## The jig allowed me to see the whole picture

This jig helped me explore color relationships much faster than checking individual colors against each other so I could sketch things out with this and then validate them with other contrast tools. The visual overview allowed me to quickly identify which hue ranges would work for different contrast requirements, saving hours of trial-and-error testing.

If you have a problem that you think you will run into again, create your personal jig and add it to your personal toolbox. The time invested in building specialized tools pays dividends when you encounter similar challenges in future projects.

The automotive industry's strict regulatory requirements combined with evolving design trends like light themes create unique constraints that standard tools don't always address effectively. Sometimes the solution is building exactly what you need rather than adapting existing tools to fit your workflow.

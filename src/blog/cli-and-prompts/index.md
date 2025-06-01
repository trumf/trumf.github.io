---
layout: post.njk
title: Command line and prompt interfaces
date: 2024-03-30
description: A blogpost about design patterns for ai and the new types of interactions that are needed and enjoyed
image: /blog/cli-and-prompts/susan-wilkinson-Dvx_jJW4vHs-unsplash.png
imageAlt: Swirling colors with blues and yellows
---

For last couple of decades, we have moved from CLI, the command line interface, to using more and more GUI. For most of us a graphical user interface is faster and it also makes it easier for designers to make functions easy to discover. Now we see a return to the CLI with generative AI we see a return to this prompt driven design.

## Types of design for prompts

[This blog](https://www.felicis.com/news/prompt-driven-design) discusses the trend of prompt driven design. They identify three types of prompt design, navigational core, UX and API.

An example of navigational UI is superhuman, the email app, where you use the keyboard to open and close emails and generally move around. I would add the Spotlight search feature as an example on Mac. The second type is Core UX and this is when the text input is the… core of the experience. An example is ChatGPT along with most of the new LLMs. The last example is APIs which make up the base for these other interfaces.

## Accordion editing and Apple picking

[Nielsen Norman group](https://www.nngroup.com/articles/accordion-editing-apple-picking/) has done some research on how people interact with prompts (and AIs) and found some interesting new behavior.

LLMs will often generate something useful, a starting point, but not quite right. To make it better you ask it to write a bit more on a certain topic (expansion), or to reduce the text and shorten it to the most important parts (shrinking). The effect is that the text expands and shrinks as an accordion.

They also saw participants do Apple picking. The text you generate might be pretty bad over all but there are good parts. You copy and paste the good parts somewhere else, picking the good apples. They make the point that today's tools are not really made for this kind of behavior. When writing, or using AI to write, you don't write everything in one go. You want to go back and edit certain paragraphs or pick out the good parts and paste them somewhere else.

We are starting to see some concrete use-cases emerge around AI. The use case for AI is either to make something from scratch that can kick start your process. Change the style the text. Or Make a summary of some text so it is easier and quicker to understand.

I myself often do this and I've seen others talk about it on the Internet as well. If you want to write a longer piece of text, you first ask the AI to describe the different parts and write the first outline. Then you go back and ask it to expand on each section. Once you have a first draft you might move things around or re write certain parts. I often do a lot of text work in Figma because I can easily drag text around and find what I want to say. Supporting this kind of nonlinear way of working instead of this idea could be really powerful.

## Examples of people doing this well

Lastly I want to highlight a project that is doing this in a very interesting way from [Ink & Switch](https://www.inkandswitch.com/). Go and read their project notes on how they are trying to design for this new way of editing [together with an AI](https://www.inkandswitch.com/patchwork/notebook/07/). I think this is really cool and great example of how AI can be used to edit text that expands it outside the prompt box while still being very text based.

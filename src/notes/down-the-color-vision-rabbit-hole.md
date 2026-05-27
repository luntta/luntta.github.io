---
title: "Down the Color Vision Rabbit Hole"
subtitle: "How a 2019 experiment became Swatch"
created: 2026-05-27
updated: 2026-05-27
categories:
  - Accessibility
  - Open Source
  - AI
---

Ever wondered how people with Color Vision Deficiency (CVD) experience your products and services, whether digital or physical?

Back in 2019 I wrote a small color library to help answer exactly that. It could simulate how people with different types of CVD see a given color, and it had the usual grab-bag of color transformation features you'll find in plenty of similar libraries. It grew out of some color manipulation expertise I'd picked up earlier in my career doing accessibility work.

The reason it existed was simple. I wanted to learn how different color spaces work, how to transform between them, and how the CVD math actually works under the hood. It was a rabbit hole, and I thoroughly enjoyed falling into it.

Over the years it quietly picked up a few thousand downloads on npm. Nothing grand, but more than I expected from a purely exploratory project. Most of those are probably bots, but I like to think at least a few came from actual humans.

## Picking it back up

I recently went back to that old code, and a couple of things had changed since 2019.

First, AI coding tools have become genuinely useful (don't worry, the library still has plenty of good old artisan code in it too). Second, we got some lovely new color spaces in the meantime. OKLab and OKLCH both landed in 2020, and they're a real step up for this kind of work.

So I set out to finish the features I never got around to back in 2019, and to build a little playground so people could actually poke at the thing instead of squinting at API docs.

"Fixing a few things and adding a couple of features" quickly turned into a near-total rewrite of the library's core. At that point it didn't really feel like the same project anymore, so I retired the old library and gave it a new name: Swatch.

## Have a look

You can try Swatch on [its website](https://luntta.fi/swatch/), read the source on [GitHub](https://github.com/luntta/swatch), or install it from [npm](https://www.npmjs.com/package/@luntta/swatch).

I'd genuinely love to hear what you think. One caveat, though: I mostly build this to satisfy my own curiosity about color and color vision, not to dethrone the big established color libraries. So if you spot a bug in my math (or my AI agents' math) please let me know. And if you get some actual use out of it, I'd love to hear that too.

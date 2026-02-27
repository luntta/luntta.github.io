---
title: "Design After the AI Panic"
subtitle: "What I Think Changes and What Doesn't"
created: 2026-02-26
updated: 2026-02-26
categories:
  - Design
  - Leadership
  - AI
---

I'm a design leader at a company that invests in and values good design. I spend a lot of time making decisions about strategy, hiring, and the kind of design work we invest in. I've also spent my fair share of time getting to know the latest AI tools and technologies.

I'm writing this because I spent the past few days sick in bed doom-scrolling social media. The public conversation about AI in design seems to often be split into two camps:

1. panic and doom
2. denial and copium

On one side, you have the doomers: design is dead and we're all redundant, learn to code asap (or don't, since that's dying too). On the other side, the copers: AI is just a tool and everything will be fine if we just focus on "human-centered design." Both positions are lazy and hold some truth. The reality, somewhere in between, is more interesting.

These are my current thoughts. My opinions are subject to change, since the world around me changes constantly. I'm aware of the environmental impact of AI and the net losses these AI companies are currently running. My feelings are conflicted, but I wouldn't be doing my job if I didn't analyze the potential.

## AI as design material

Designers have always needed to understand the material they work with. A product designer who doesn't understand engineering constraints designs fantasies. An industrial designer who doesn't understand manufacturing produces beautiful things that can't be built. Service designers need to understand customers, stakeholders, and the service landscape.

AI is now part of the material we design with and design for.

What I mean by that is understanding the technology well enough to make informed design decisions and use it effectively. Can an LLM reliably fetch structured data from messy documents? What happens when you put an AI agent into a customer-facing service (€#"#%"!, thats what happens)? Where does some shiny new RAG make some features suddenly viable?

If you don't understand these things, you're designing blind. You're either: under-designing and missing opportunities the technology makes possible or over-designing and proposing stuff that fails in the most spectacular ways.

My driving force has always been curiosity (lame, I know, but it's true). I think designers who are genuinely curious about new tools, who experiment a lot, and who understand the world around them are usually making better design decisions. Not because they're "AI designers" or prompt engineers (which is dead too, btw), but because they understand the material they're shaping. I think that's what has always been expected from great designers.

Exploring this type of new material has always been one of the more fun parts of design for me. Solving real problems in innovative ways. And the people I see actively engaging with these new tools and technologies seem to be having a much better time than the ones anxiously refreshing LinkedIn and X to find out if their career is over. And you know what? **It's just more fun to be competent.**

No one is going to hand you this competence. Your employer might offer some AI training and require you to use AI. Some professional communities might host some AI workshops. But the responsibility is yours. When the internet happened, no one waited for permission to learn CSS. When mobile happened, the designers who thrived were the ones who started before anyone told them to. This is no different.

## Digital product design: a stormy sea

I'm trying to be honest and realistic about what's happening in digital product design, because this is where I can see the most visible and severe changes.

Current AI tools can generate functional user interfaces from text prompts. They can produce variations, translate designs into working code, and handle a growing share of the work that used to fill designers' and engineers' weeks. Tools like Cursor, Claude Code (with or without Figma MCP), and OpenAI Codex are not theoretical. They work today at a level that would have been unthinkable a few years ago. Take a look at this [Marey's Train Graph](https://luntta.fi/marey) I recently built with Opus 4.6. It's not just some generic bullshit form-based web UI. It's a custom (and niche) WebGPU UI built with a few prompts. Would I deploy it to actual prod like that? No. But I also didn't spend more than a few minutes on it.

The quality of the outputs are rising fast. A year or two ago, AI-generated UI was total garbage. I know, because I tried. Today, with the right models, prompting, and iteration, you can get output that's close to production-ready and sometimes fully production-ready. Even in environments where shipping AI-generated design and code is iffy, AI can still help you build inspiration, concepts and PoCs in minutes instead of hours. That leaves you with more time to think, understand, explore, research and validate.

To put it plainly: if the current trend continues, a significant portion of UI work will become automated. It's already happening.

Not all hope is lost. What AI can't yet do is understand the *why* behind design decisions. It can't navigate the tradeoff between onboarding simplicity and power-user efficiency when both matter and you can't have both. It doesn't know your exact user context, trust issues, regulatory constraints, or why a similar feature failed last time. It produces plausible interfaces based on the information it gets.

The gap between an "interface that looks good and right" and a "product that works great" is where product designers either prove their value or they don't. In the end, pixel-perfect interface design is just an artifact. If your value begins and ends with the pixels, then yes, you might be in trouble.

## Service design: Customer support bots everywhere

Service design operates in a different territory than product design. It works across channels, touchpoints, organizational boundaries, and time. A service isn't just a digital product. It's an experience that unfolds in time, involves multiple actors, and often spans seams between organizations.

There are "obvious" use cases for AI in service design. It can help map customer journeys from behavioral data rather than assumptions. It can help detect patterns across touchpoints that humans miss. It can synthesize large-scale customer and user research faster than any team of analysts, at least some version of it. For the analytical side of service design, AI can be a great accelerator.

What AI can't do is facilitate a workshop where frontline staff, IT, legal, and management are all in the same room and all see the service differently. A service designer's job is to navigate the politics of who owns the customer experience when the honest answer is "everyone and no one" (don't we all know that feeling). It's holding together a coherent service vision across silos that have spent years optimizing for their own metrics. AI can't do organizational diplomacy. It can't read a room. It can't sense that the C-suite in the workshop has already decided and the workshop is just theater unless you change the dynamic in the next fifteen minutes.

Service design, for me, is fundamentally about navigating competing interests and power dynamics and balancing customer value and business value.

What's more interesting is that AI is creating entirely new service design opportunities and problems. When an AI agent handles a customer interaction, who designed that experience (please, I really wanna know)? Who's accountable when it goes wrong? When a service shifts from human-delivered to AI-mediated, the failure modes change completely. A human service agent might be slow, but they usually know when they're out of their depth. An AI agent is fast, confident, and often wrong (so, so wrong).

Service designers now need to design for a new kind of actor in the service chain. And I think here the material argument becomes pretty apparent. If you don't understand how that actor (AI) works, what its capabilities and limitations are, you'll probably end up designing services that break in predictable, avoidable ways.

## Strategic design: full of possibilities

Strategic design works on problems where the problem definition itself is contested. Organizational transformation, policy design, market entry into spaces where the rules aren't clear yet, and systemic challenges that cross organizational boundaries. It's design applied to situations where nobody agrees on what the question is, let alone the answer.

AI can be a powerful analytical tool in this space. It can help model scenarios, synthesize weak signals from large data sets, and stress-test hypotheses against evidence. A strategic designer can get real value out of AI today. I know I do.

But strategic design doesn't happen just in spreadsheets or slide decks. It happens in rooms where power, ulterior motives and competing interests collide.

It means helping a leadership team reframe their understanding of a problem, often by telling people things they don't want to hear in ways they can actually process what they're being told. It means acting as a translator between worlds of engineering, politics, regulation, customers, and users. It means holding out tongue long enough for a better question to emerge, when everyone in the room wants a quick answer.

AI can help in this work, but it can't (at least yet, in my opinion) do this work. The designer's role as a translator, a provocateur, and a sense-maker in complex contexts is not something a model can perform. This work depends on human trust, timing, and the kind of social and political awareness that comes from being a person in a room with other people.

In strategic design, understanding AI becomes part of the designer's toolkit for a different reason: you need to be able to advise organizations on what AI makes possible and what it doesn't. A strategic designer who can't have an informed conversation about AI capabilities with a CTO, a board, or a minister is missing a growing part of the job. You don't need to be an engineer. But you need enough AI-literacy to call bullshit on both the hype and the fear. There is plenty of both.

## The uncomfortable middle

If you're reading this rambling as a designer, I want to speak directly to you, as a fellow designer and as someone who leads designers.

Some of what we're protecting isn't worth protecting.

Not every design task is meaningful. Some of what we call "craft" is really just slow production. Some of what we call "process" is just a ritual that doesn't generate new insight or value. Some gatekeeping around who gets to make design decisions is less about quality and more about control. AI, similar to any other big tech disruptions, is forcing an honest discussion about which parts of design work actually create value, and which parts we defend because they are familiar and because they are ours.

I get it, it's uncomfortable for me as well. And I know I don't have all the right answers. But I think it's also healthy to give up something once in a while.

From my perspective, the design tasks that AI can automate are often the ones that bored our best people anyway. Automation almost always starts where it's easiest to apply. The same is true with AI: it's exposing how much of the work isn't that meaningful anymore.

The real question isn't "how do we protect design jobs." It's "where design actually matters, and are we organized to deliver it." If AI accelerates the production layer, that's an opportunity to align talent toward the work that makes a genuine difference. The problem-framing, the systems thinking, the organizational navigation, the strategic sense-making. The work most design teams never had enough time for because everyone was too busy pushing pixels.

I can't force you to be curious. I can't make you spend a Saturday experimenting with a language model to understand what it's good at. I can't make you read a technical paper about RAG because you want to know how it might change the product or service you're designing. That drive has to come from you, from within.

If you treat this moment as someone else's problem to solve, if you're waiting for your manager, your company, or your professional network to tell you what to do, you will probably fall behind. Not because AI replaced you, but because you are opting out of your own relevance as a designer. I know this is harder to hear than "AI is taking our jobs", but its the way I see it.

And I get it, I truly get it. The world is on fire right now. You're overworked or unemployed and just trying to make ends meet. Your family, little kids, and aging relatives leave you with little time for yourself and self-development. You have better things to do in life than to learn some new tricks to boil the ocean.

But still: understanding, endless hunger for learning, and curiosity towards the unknown makes you a better designer. It opens up possibilities you couldn't see before. It makes the work richer, not smaller. The best people I work with aren't anxious about new things or change. They're intimidated and excited, in the way that competent people get excited when their field suddenly gets more complex and more interesting.

---
title: "Design After the AI Panic"
subtitle: "What I Think Changes and What Doesn't"
categories:
  - Design
  - Leadership
  - AI
---

I lead design at a major Finnish company. I spend a lot of time making decisions about strategy, hiring, and the kind of design work we invest in. I've also spent my fair share of time getting to know the latest and greatest AI tools and technologies. I'm writing this because I've spent the past few days sick in bed reading (doom-scrolling) too much social media and from what I've seen, the public conversation about AI in the world of design is often split into two camps

1. panic and doom
2. denial and copium

Neither is useful to anyone.

On one side, you have the doomers: design is dead, we're all redundant, start learning to code (or don't, since that's dying too). On the other side, the copers: AI is just a tool, like Photoshop and Sketch were just tools before Figma, everything will be fine if we just focus on "human-centered design." Both positions are at the same time lazy and hold some truth. The reality, which is somewhere in between, is more interesting and worth exploring.

These are my current thoughts about this topic. My opinions are subject to change, since the world around me changes constantly. I'm aware of the environmental impact of AI and I'm aware of the net loss (persnetto) these AI companies are running with currently. My feelings are conflicted, but I wouldn't be doing my job if I didn't analyze the potential.

## AI as design material

Designers have always needed to understand the material they work with. A product designer who doesn't understand engineering constraints designs fantasies. Sometimes that's useful. Many times true innovation lies in the unknown. But often not. An industrial designer who doesn't understand manufacturing produces beautiful things that can't be built. Service designers need to understand the customers, stakeholders and the service landscape to do their job. This has always been true, and nobody has argued against it.

AI is now part of the material we design with and design for.

What I mean by that is understanding the technology well enough to make informed design decisions and using the new technology effectively. Can a large language model reliably extract structured data from messy, real-world documents? What actually happens when you put an AI agent in a customer-facing service? Where does RAG make a previously impossible feature suddenly viable? Where do the models hallucinate, and what does that mean for the architecture of your product or service?

If you don't understand these things, you're designing blind. You're either under-designing, which means you're missing opportunities the technology makes possible, or over-designing, proposing stuff that will fail in ways you didn't anticipate.

To put it bluntly, it's about curiosity. Designers who are genuinely curious about new tools, technologies and innovations, who experiment with them, who understand their capabilities and their limits, are probably making better design decisions. Not because they're "AI designers" or prompt engineers (which is dead too, btw), but because they understand the material they're shaping. That's what has always been expected from designers. The material just got a tad bit richer.

For me exploring the unknown and getting to know new material has always been the more fun aspects of design. Solving real problems in innovative ways. The people I see actively engaging with new tools and technologies are having better time than the ones anxiously refreshing Linkedin and X to find out if their career is over. And you know what? **It's just more fun to be competent.**

No one is going to hand you this competence. Your employer might offer training. Your professional community might host workshops. But the responsibility is yours, like it always has been. When internet happened, no one waited for permission to learn CSS and design web products. When mobile happened, the designers who thrived were the ones who picked up a phone and started designing for it before anyone told them to. This is no different. If you're a designer (or whatever really) in 2026 and you haven't spent serious time understanding what the new tools and technologies can and can't do, that's a choice you're making.

## Digital product design: the layer that got hit first

Let's be honest about what's happening in digital product design, because this is where the disruption is most visible and most real.

Current AI tools can generate functional user interfaces from text prompts. They can produce variations, translate designs into working code, and handle a growing share of the layout-and-pattern work that used to fill designers' and engineers' weeks. Tools like Cursor, Claude Code (with or without Figma MCP) and OpenAI Codex are not theoretical. They work, today, at a level that would have been unthinkable a few years ago.

The quality ceiling is rising fast. A year ago, AI-generated UI was total garbage. I should know, because I actually tried to leverage the tools back then. Today, with the right models, prompting and iteration, you can get output that's close to or fully production-ready. And even if you work in environments where using AI for production ready designs and code is a bit iffy (like our domain, where we're developing mission and safety-critical solutions with heavy set of regulation and standards guiding our way), AI could enable you to build concepts and PoCs, or at least prototypes, in minutes instead of hours. That leaves you with a ton of time to think, understand, explore and validate.

To put it plainly: if the current trend continues, a significant portion of UI work will become commodity work. That's not a prediction. It's already happening.

What AI can't yet do is understand the *why* behind design decisions. It can't navigate the tradeoff between onboarding simplicity and power-user efficiency when both matter and you can't have both. It doesn't know that your particular user group has low digital literacy, or that a regulatory context makes certain data collection flows non-viable, or that the previous version of this feature failed because users didn't trust the system enough to enter their information. It produces plausible interfaces based on information it has and it uses.

The gap between a "screen that looks good and right" and a "product that works great" is where product designers either prove their value or they don't. And the designers who prove it are the ones whose real skill has always been problem-solving, systems thinking, and user-centricity. The interface is just an artifact of that thinking. If your value begins and ends with the pixels, then yes, you might be in trouble.

## Service design: where complexity is the moat

Service design operates in a different territory than product design. More often it works across channels, touchpoints, organizational boundaries, and time. A service isn't just a digital product. It's an experience that unfolds itself across time, involves multiple actors, and often spans the seams between organizations or units.

There are "obvious" use cases for AI in service design. It can help map customer journeys from behavioral data rather than assumptions. It can help detect patterns across touchpoints that humans miss. It can synthesize large-scale user research faster than any team of analysts, at least some version of it. For the analytical side of service design, AI can be a great accelerator.

What AI can't do is facilitate a workshop where frontline staff, IT, legal, and management are all in the same room and they all see the service differently. Service designer's job is to navigate the politics of who owns the customer experience when the honest answer is "everyone and no one" (don't we all know that feeling). It's holding together a coherent service vision across organizational silos that have spent years optimizing for their own metrics at the expense of the whole. AI can't do organizational diplomacy. It can't read a room. It can't sense that the C-suite present in the workshop has already decided and the workshop is just a theater unless you change the dynamic in the next fifteen minutes.

That work is safe, at least for now, because it's fundamentally about human coordination in contexts of competing interests and power dynamics.

What's more interesting is that AI is creating entirely new service design problems. When an AI agent handles a customer interaction, who designed that experience? Who's accountable when it goes wrong? When a service shifts from human-delivered to AI-mediated, the failure modes change completely. A human service agent might be slow, but they usually know when they're out of their depth. An AI agent is fast, confident, and often wrong.

Service designers now need to design for a new kind of actor in the service chain. And here the material argument becomes urgent: if you don't understand how that actor works, what are its capabilities and limitations, you'll design services that break in predictable, avoidable ways.

## Strategic design: the layer AI can't reach yet

Strategic design works on problems where the problem definition itself is contested. Organizational transformation, policy design, market entry into spaces where the rules aren't clear yet, systemic challenges that cross organizational boundaries, wicked political problems. It's design applied to situations where nobody agrees on what the question is, let alone the answer.

AI can be a powerful analytical tool in this space. It can help model scenarios and horizons, synthesize weak signals from large data sets, stress-test hypotheses against evidence. A strategic designer can get real value out of AI.

But strategic design doesn't happen just in spreadsheets or slide decks. It happens in rooms where power, ambiguity, and competing interests collide.

It means helping a leadership team reframe their understanding of a problem — which often means telling people things they don't want to hear, in ways they can actually receive. It means translating between worldviews: the engineer's, the politician's, the regulator's, the end user's. It means holding space for ambiguity long enough for a better question to emerge, when everyone in the room wants a quick answer.

AI can help in this work, but it can't (at least yet, in my opinion) do this work. The designer's role as a translator, a provocateur, and a sense-maker in complex contexts is not something a model can perform. This work depends on human trust, timing, and the kind of social and political awareness that comes from being a person in a room with other people.

At this level, understanding AI becomes part of the strategic toolkit for a different reason: you need to be able to advise organizations on what AI makes possible and what it doesn't. A strategic designer who can't have an informed conversation about AI capabilities with a CTO, a board, or a minister is missing a growing part of the job. You don't need to be an engineer. But you need enough AI-literacy to call bullshit on both the hype and the fear. There is plenty of both.

## The uncomfortable middle

I want to speak directly to the design community, as someone who leads designers.

Some of what you're protecting isn't worth protecting.

Not every design task was meaningful. Some of what we called "craft" was really just slow production. Some of what we called "process" was ritual that didn't actually generate any insight. Some of our gatekeeping around who gets to make design decisions was less about quality and more about control. AI is forcing an honest reckoning with which parts of design work actually create value, and which parts we defended because they were familiar and because they were ours.

I get it, it's uncomfortable, even for me. It should be. But it's also healthy to give up something to renew.

From my perspective the design tasks that AI automates were often the ones that bored our best people anyway. If your most talented designer is spending their days adjusting padding and producing component variants, that isn't a sign of a thriving practice, it's a sign of misallocation. Automation almost always starts where its easiest to apply. The same is true with AI, it's exposing how much of the work isn't that meaningful anymore.

The real question isn't "how do we protect design jobs." It's "where design actually matters, and are we organized to deliver it." If AI compresses the production layer, that's an opportunity to redeploy talent toward the work that makes a genuine difference. The problem-framing, the systems thinking, the organizational navigation, the strategic sense-making. The work most design teams never had enough time for because everyone was too busy pushing pixels.

I can't force someone to be curious. I can't make someone spend a Saturday experimenting with a language model to understand what it's good at. I can't make someone read a technical paper about RAG because they want to know how it might change the product they're designing. That drive has to come from the individual.

The designers who treat this moment as someone else's problem to solve, the designers who are waiting for their manager, their company, or their professional association to tell them what to do, will probably fall behind. Not because AI replaced them, but because they opted out of their own relevance. That's a harder truth than "AI is taking our jobs," because it puts the agency with the individual.

## Realism

As a design leader, my job is not to protect the design profession. It's to make sure design creates real value for the organization I serve and the people who use what we build. Those two things are related, but they're not the same.

For me, being realistic about AI's impact on design isn't pessimism. It's taking my profession seriously enough to be honest with it. The designers who will matter in five years are the ones who understand their tools and the material they're working with. They're the ones who invested in the parts of the job that require being human, because they understood those were the parts that couldn't be automated.

And the ones who didn't? They'll probably struggle. I really can't pretend otherwise, because pretending would be the unkindest thing I could do. And I get it, I truly get it. The world sucks right now. You're overworked or unemployed and just trying to make the ends meet. Your family, little kids and aging relatives leave you with little time for yourself. It fucking blows and I wish world was more fair. But that's how it currently is.

But I want to end on something other than a warning, because warnings aren't what actually change behavior. What changes behavior is finding out that the new thing is interesting. And it is. Understanding, endless learning and curiosity towards the unknown makes you a better designer. It opens up possibilities you couldn't see before. It makes the work richer, not smaller. The best designers I work with aren't anxious about new things. They're probably intimitated, but at the same time excited, in the way that competent people get excited when their field suddenly gets more complex and more interesting.

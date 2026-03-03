---
title: "From open-source to partially open-source"
subtitle: "How AI is about to change OSS forever"
created: 2026-03-01
updated: 2026-03-01
categories:
  - Open Source
  - AI
---

There have been many viable business models for open-source Software (OSS) for decades that has allowed the copyright holders and others to a build business around the OSS, while allowing the public to have unlimited access to the source code and everything that comes with it (like tests). It has a been a huge blessing for humanity. World runs on open-source and it's not often that you can give something away for totally free, while having a thriving business for that very same thing.

Well, Cloudflare has just announced that it has [rebuilt Next.js with AI in one week](https://blog.cloudflare.com/vinext/) and I think it's about to change open-source forever for the worse.

Most of the open-source projects society is most dependent on have 100% test coverage and extensive documentation. That means the test suite is basically a big ole' validation spec sheet for the software. What Clouflare did was they basically told an AI agent to recreate Next.js and validate it against the Next.js test suite. If a test passed the code was merged.

Now, let's say you are a creator, a maintainer or a copyright holder of an OSS and you also run a business around that OSS. Your risk management has basically leaned on the fact that your OSS is so popular and complex that it just isn't worth the hassle for anyone trying to recreate it. Its easier for everyone to just use the same OSS and contribute to it. Everyone wins, right? What Cloudflare just did was the total annihilation of that approach to your business risk management. Now anyone (with enough money to run Opus 4.6 for a week straight) can yoink your test suite and recreate the software you've spent thousands of hours and millions of dollars to create.

I'm betting there's quite a few OSS business owners scrambling for a viable risk management measures to mitigate this risk at this very moment. I think what we're going to see in the coming days, weeks and months is many of them removing tests from their repositories. If that happens, it's going to be a sad day for OSS. Transparency and openess suffers when contributors need to be part of some elite inner-circle to get access to the tests. Partially open-source just doesn't have the same ring to it as fully open-source.

The silver lining is that we're probably going to rid ourselves of the tyranny of some of the legacy OSS maintainers by building new and modern rivalling solutions to the same problem, but at the same time I dread the fragmentation of the OSS community.

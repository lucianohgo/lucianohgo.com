---
title: 'The Problem with not Understanding the Problem'
date: '2021-04-24'
description: "Why you shouldn't jump to a solution before first understanding and building a shared vision of the problem. And how to do it :)"
cover: '/images/the-problem-with-not-understanding-the-problem/underpants-gnomes.jpeg'
coverAlt: 'Snail going over a metal pipe slowly'
authors:
  - lucianohgo
tags:
  - process
  - product-management
appearsIn:
  - slug: "what-is-quality-after-all"
    title: "What's Software Quality, After All?"
---

One clear difference between inexperienced and experienced engineers is the eagerness with how they approach a problem. [When we're starting, we're full of certainties](/posts/curiosity-and-confidence), we hear the problem and jump to a solution right away. We go to our "best practices" toolbox and start pulling out all our hyped-up technologies. On the other hand, battle-hardened engineers usually take a step back and go searching for context first. They know that **understanding the problem is the most critical part of creating software.**

![Comic strip about overengineering](/images/the-problem-with-not-understanding-the-problem/im-an-idiot.png)
*Sometimes we waste so much time before trying the simple, obvious solution*

## The risk of building the wrong thing

It's very easy to build the wrong thing. And it's very easy to spend a lot of time and resources on it. To point out one example, Surrey Police commissioned The Surrey Integrated Reporting Enterprise Network (Siren) in 2009 but abandoned the project in 2013 after over ￡15m was spent in building it. And the reason was: "I'm sure that all those involved in leading this project as officers or from the Surrey Police Authority share my regret and disappointment that Siren did not realize the benefits for the public we sought." In other words, *"We spent fifteen million pounds and, worse, four years on something that we later found out we didn't need."* Mind this [list of failed and overbudget custom software projects](http://usd/) to see more examples that cost even up to 200m USD.

In South Park, there is this episode where several underpants start vanishing from people's houses. So the kids investigate and discover that there are Gnomes stealing underpants from people and collecting them. Every night several Gnomes go out and steal underwear, so they had a massive pile of them gathered at this point. When the kids ask them why they're doing this, the Gnomes say that the Planning Gnome had instructed them to steal these underpants, and they were good at doing this. The Planning Gnome, in turn, show them this plan: **Phase One:** Steal Underpants, **Phase Two:** ?, **Phase Three:** Profit.

![Underpants Gnomes](/images/the-problem-with-not-understanding-the-problem/underpants-gnomes.jpeg)
*Are you stealing underpants?*

Sad to say that it's easy for a software project to go this way. We can get bogged down in building something that we're sure we need to do, but we don't even know where that certainty comes from or what we want to get out of it. So the next time you stop and celebrate the number of Jira issues or Story Points your team is building, consider that maybe you might be holding a bunch of dirty underwear instead of something of value.

## Understanding the problem

So let's see how to *lower the chance* of collecting dirty underwear with our software projects. There are three main questions we need to answer:

1. What are the goals that we have in solving this problem? Or why is this even a problem at all?
2. Who are the key people involved in this problem we're trying to solve? What do they expect?
3. How do these people interact, and how will they interact with the system we're building?

Organizing and having a shared vision about these critical parts of the problem helps lower the chance of building the wrong thing. And that we forget fundamental criteria that we must fulfill. More importantly, having a correct and shared vision about this helps us make trade-offs effectively.

There are many different approaches to getting to these answers. But the main idea is **not to shut yourself off and try to figure it out.** Communication is key, and constantly sharing until you get to the point that everyone directly involved in the project and stakeholders speak the same language and have a common understanding of what matters the most will remove so much. These are some of my favorite approaches:

1. [User Story Mapping](https://www.thoughtworks.com/insights/blog/story-mapping-visual-way-building-product-backlog)
2. [Impact Mapping](https://www.impactmapping.org/intro-resources.html)
3. [Event Storming](https://www.eventstorming.com/) (with the caveat that doing this remote is very hard, I never really tried remotely)

![Example of an impact map](/images/the-problem-with-not-understanding-the-problem/impact-mapping.png)
*Impact Maps (above) and User Story Maps can help us build a shared vision. In these, deliverables always come last*

After understanding the problem, there's a lot we need to do before we can build the software that addresses it, and we'll talk about that in the future. For now, remember to take a step back and understand that no efficiency will pay the cost of building the wrong thing. Marry with the problem, understand it deeply and be wary of things that "We just need to do." The one thing we need to do is build a product that makes our customers awesome

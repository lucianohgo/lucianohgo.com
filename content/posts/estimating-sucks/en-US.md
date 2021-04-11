---
title: 'Everybody hates estimating, so why do we do it?'
date: '2021-04-10'
description: "We hate being asked why something is taking so long. Having to make good to estimations we weren't sure how to make. But why do we keep doing it?"
cover: 'https://lucianohgo.com/images/estimating-sucks/are-we-there-yet.jpeg'
coverAlt: 'Snail going over a metal pipe slowly'
authors:
  - lucianohgo
tags:
  - leadership
  - planning
  - product-management
---

We Engineers often don't want to estimate at all. We hate when someone asks us why something is taking so long. We either get anxious and start overworking or dropping things that we shouldn't from the project. Quite often, we start resenting the people who are asking us this. We resent the process and think that this can't be the only way of building software. We see things overrun and wonder, "What's the point?" Requirements change all the time. Most of the requirements are unknown, and we haven't built anything like this before. How could we possibly estimate this accurately? Keep reading, and I can help you out with those answers.

<div class="media-wrapper" style="position:relative;padding-top:56.25%;">
  <iframe
  style="position:absolute;top:0;left:0;width:100%;height:100%;"
  src="https://www.youtube.com/embed/basofea2UEs"
  title="Are we there yet?"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
  loading="lazy"
  >
  </iframe>
</div>
<em>How teams see people who are always asking if something is done</em>

## The Benefits of Estimation

About a year ago, we had to implement a new email that would filter our user base based on some specific behavior, fetch data from some services and dispatch a customized communication for those users. We had implemented another notification that would match this description precisely in the past, and it had taken us about a week of work. Given that situation, we should expect the team to view how much time this should take clearly. However, when we set to estimate and agree on a timeline, two of the most senior engineers gave very different estimates: about one week and about one month.

The two had very different views of the complexity because they had very different opinions on the scope. We ended up breaking the project down, experimenting first, and working on the infrastructure to implement these kinds of communications faster while we waited on the results. We wouldn't have had that conversation or even built a shared understanding of the importance of making that infrastructure if we didn't discuss how long we thought delivering that feature would take us.

Even when they aren't perfectly accurate, estimations are a way to discuss and escalate complexity to the rest of the team. They help us with discussions around scope, what matters in the project, and the risks that stand in our way. We get the team aligned and capable of explaining the scope, the order in which we will work on the projects, and the complexity we agreed on.

Estimates provide us a new learning tool as well. If we want to move fast, we need to learn about our processes and what we build. If we're constantly wrong about the effort something will take, what does that tell us about complexity and our knowledge of it? What are we learning about our processes of discovery and delivery? We can't over-index on this and forget other measures, like the actual business outcomes we want and the software's quality. Doing this will give you a higher output of low-quality, buggy code that does nothing your customers want. But *if you keep tabs on those other measures*, estimation is a valuable source of input.

Furthermore, our organization needs to plan and get an idea of the cost of effort in the work we want to do. Our team or the organizations above could prioritize several different initiatives, and effort is crucial to deciding which ones bring us the most value. It also gives us the ability to size the team appropriately.

The main issues are on **how, what and when we estimate.** If we don't estimate collaboratively, if we can't discuss the scope, if we don't have time to yank uncertainty out before execution, if we estimate the wrong things, the value of doing it goes down significantly. There isn't a single way of getting this right, and I've found different processes work better on different teams, so try out different methods and see what works for your organization. I've written on [how I think about road mapping](https://lucianohgo.com/posts/sea-chart-not-roadmap), and there great books on estimation and process, like [Software Estimation without Guessing](https://pragprog.com/titles/gdestimate/software-estimation-without-guessing/), [User Story Mapping](https://www.oreilly.com/library/view/user-story-mapping/9781491904893/), [Leading Lean Software Development](https://www.pearson.com/us/higher-education/program/Poppendieck-Leading-Lean-Software-Development-Results-Are-not-the-Point/PGM284631.html), and [Shape Up](https://basecamp.com/shapeup).

## Dealing with Expectations

**We must always be very aggressive about sharing estimates and updates to estimates regardless of if people ask for them or not**. One of the common misconceptions is that the team cannot change the estimates once we give them or that we can't make significant changes at least. We can, and we should. Once we learn new things about the customers, the product, the software, anything, we should reassess the estimations and the team's course. We can't be afraid to cut scope no matter how far we are in developing a project. We need to be thoughtful about what we're willing to give on, and quite often, that is not the technical quality of what we want to build. Giving up on technical quality will slow down the team instead of speeding it up, so be sure to look at product features as well. Not everything needs to be a [high integrity commitment](https://svpg.com/managing-commitments-in-an-agile-team/).

Whenever we change estimates or scope, we need to communicate clearly why and manage people's expectations around us—both in and outside the team. It's our job to make it as clear as possible the key points that motivated decisions the team made regarding complexity, scope, order of delivery, and proactively updating people when it changes, especially for major changes. It's our job to never commit to things we can't commit to and provide the team with the environment they need to deliver and to manage expectations, shielding the team from frequent "Are we there yet?" questions by simply avoiding them altogether.

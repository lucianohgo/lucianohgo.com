---
title: "What's Software Quality, after all?"
date: '2021-05-02'
description: "We all want to build great products but have a different view of what great means. So let's try to create a shared understanding, but first, let's see what's wrong with how each group usually talks about quality."
cover: 'https://lucianohgo.com/images/what-is-quality-after-all/frustrated.jpeg'
coverAlt: 'Woman frustrated'
authors:
  - lucianohgo
tags:
  - quality
  - product-management
---
![Woman Frustrated](/images/what-is-quality-after-all/frustrated.jpeg)
*Your users when you forget about quality – Photo by <a href="https://unsplash.com/@jeshoots?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">JESHOOTS.COM</a> on <a href="https://unsplash.com/s/photos/frustrated?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>*

Quality is one of those terms thrown around that people assume we get what it is. Different people see different details of quality and talk as if it was the same thing. That's a significant part of why engineers fail to get time to work on architecture, product managers fail to understand why things are taking so long, and Quality Analysts fail to assess quality. We all want to build great products but have a different view of what great means. So let's try to create a shared understanding, but first, let's see what's wrong with how each group usually talks about quality.

![Dilbert cartoon about quality assurance](/images/what-is-quality-after-all/dilbert-quality-hire.jpeg)

## The Problem with how Product Managers and Designers talk about quality

Product Managers and Designers care a lot about the User Experience., about the User's Journey making sense, doing what it promises, and being delightful. They care about learning what matters most to the users, and being able to ship features fast is a great way to do that. This is what they're looking for when they talk about quality. It makes a lot of sense; what's the Problem with that?

Martin Fowler depicts this very well in his article [Is High Software Quality Worth the Cost](https://martinfowler.com/articles/is-quality-worth-cost.html#DoraStudiesOnEliteTeams): "Let's imagine Rebecca and I write an application to track and predict flight delays. Both our applications do the same essential function, both have equally elegant user interfaces, and both have hardly any defects. The only difference is that her internal source code is neatly organized, while mine is a tangled mess. There is one other difference: I sell mine for $6, and she sells hers for $10. [...]

Another way I put this is that it makes sense to trade cost for external quality, but it makes no sense to trade cost for internal quality. A user can judge whether they want to pay more to get a better user interface since they can assess whether the user interface is sufficiently nicer to be worth the extra money. But a user can't see the internal modular structure of the Software, let alone judge that it's better. Why pay more for something that has no effect? Since that's the case - why should any software developer put their time and effort into improving the internal quality of their work? [...]

So why is it that software developers make an issue out of internal quality? Programmers spend most of their time modifying code. Even in a new system, almost all programming is done in the context of an existing codebase. When I want to add a new feature to the Software, my first task is to figure out how this feature fits into the flow of the existing application. I then need to change that flow to let my feature fit in. I often need to use data that's already in the application, so I need to understand what the data represents, how it relates to the data around it, and what data I may need to add for my new feature.

All of this is about me understanding the existing code. But it's very easy for Software to be hard to understand. Logic can get tangled, the data can be hard to follow, the names used to refer to things may have made sense to Tony six months ago, but are as mysterious to me as his reasons for leaving the company. All of these are forms of what developers refer to as **Cruft** - the difference between the current code and how it would ideally be."

![Software Cruft impacts future delivery](/images/what-is-quality-after-all/cruft-impact.jpeg)
*Cruft costs you a lot in the long run*

While users never see the mess of the source code, they're directly affected by it. Some ways are:

1. Every new feature will come with more risk of a defect or bug affecting them
2. Adding new features safely take a lot more time
3. Dealing with new requirements take a lot more time

We buy $6 products internally all the time. By providing teams with too little time to build, we're trapping our future selves. That may be the best decision in some cases, but beware that the cost of that decision can be orders of magnitude greater than the four bucks you saved.

## The Problem with how Engineers talk about quality

If you've been to many meetings where engineers try to go over the high-level picture of a system, chances are this is what people presented you with when they were talking about it:

![Boxes and arrows](/images/what-is-quality-after-all/boxes-and-arrows.jpeg)
*What actual insight about what matters do you get from this?*

We ask for more time to work on our architecture to build the Software with more quality, yet when we do it, that's the output. This ends up putting many of our efforts into things that do not matter and makes us forget what we're trying to achieve. We do not center our Architecture Designs, Reviews, and Implementations around the metrics and goals that matter for our users.

Let's take a step back to illustrate this. Say you're advising a friend on buying a car. Which one of the following cars is better?

![Ferrarri vs. Minivan](/images/what-is-quality-after-all/ferrari-vs-minivan.jpg)
*If you went straight to the Ferrari, think again.*

Your friend's context matters a lot here. *What's the primary use of the car? What are the conditions of the streets they'll be using the car on? What's their budget? How many people are using the cars? Will they be making family trips?* You get the gist. [Understanding the Problem well is critical](/posts/the-problem-with-not-understanding-the-problem). For the company making these cars: if their target customer is the Minivan buying one, they don't need to learn how to build a motor to get the car to 340 km/h. It simply doesn't matter. The focus is elsewhere. So don't focus your engineering efforts on the technologies and patterns you want to add to your resume. Focus on what matters most for your users and build that with as little Cruft as possible.

## So what is it?

There are many different ways to define Software Quality. My favorite one is the [ISO/IEC 25010 quality tree model](https://iso25000.com/index.php/en/iso-25000-standards/iso-25010):

![ISO 25010 quality tree model](/images/what-is-quality-after-all/iso25010.png)
*Go to [their page](https://iso25000.com/index.php/en/iso-25000-standards/iso-25010) to see it in detail*

In this model, we have quality attributes that focus on the user and the people maintaining the Software, not putting one against the other. And we can use this model to discuss Architecture and align business expectations with a shared language. One way to do that is by organizing scenarios: Each Scenario can be described by an Event (or Stimuli) the System affected and a Metric we should expect.

![Quality Scenario](/images/what-is-quality-after-all/scenario.jpeg)
*Describing a quality scenario beyond functional cases*

So, for example:

1. <u>Failure Scenario</u>: **Stimulus:** If The Entire System Crashes > **System:** The visits booking Service > **Metrics:** At maximum 30 seconds off the air. All visit requests are successful. (*Reliability - Fault Tolerance*)
2. <u>Usage Scenario</u>: **Stimulus:** A user books a visit > **System:** Customer Service > **Metric:** Only one in 10.000 visits results in a ticket (*Usability - Ease of Use*)
3. <u>Change Scenario</u>: **Stimulus:** Company needs a new type of visit > **System:** The visits booking Service > **Metric:** No code modification is necessary, and it takes less than one day. *(Maintainability - Modifiability)*

This language allows us to describe the quality we expect and get a shared vision of it. It helps us evaluate our solution, our architecture and avoid over-engineering. And to focus on what matters for our business both externally and internally.

Did this help you think about quality? Do you want help on doing architecture reviews or discussing quality in your company? Do you use a different way to talk about quality? Let me know, and I would love to talk about it :)

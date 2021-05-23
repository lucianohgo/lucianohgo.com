---
title: "The Road to Great Product Performance: The First Steps"
date: '2020-05-15'
description: "The first steps you should take to start tackling performance and how to speed them up"
cover: 'https://lucianohgo.com/images/the-road-to-great-product-performance-first-steps/road.jpg'
coverAlt: 'The road to a performant product is long, the sooner you start, the better'
authors:
  - lucianohgo
tags:
  - performance
  - performance-culture
  - product-management
---

When we're building our product, we're passionate about enabling users to do
more, empowering them. This passion leads to the creation of more and more ways
the users can use our products to better accomplish their goals. Working like
this rarely leaves us the time to tune and optimize, and it's common to
accumulate a lot of performance technical debt. **At some point, we realize as a
company that [neglecting performance is directly affecting our business
results](/posts/avoid-losing-users-and-conversions)**. When that day comes, what
should we do?

!["A long asphalt road surrounded by
trees"](/images/the-road-to-great-product-performance-first-steps/road.jpg "The
road to have a performant product is long, the sooner you start, the better")
*The road to a performant product is long, the sooner you start, the better -
Photo by [Matt
Duncan](https://unsplash.com/@foxxmd?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
on
[Unsplash](https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)*

Note: In [QuintoAndar](https://quintoandar.com.br), we're still walking the path
towards an excellent product performance. Furthermore not all of these steps
were the first steps that we took, but instead they're assembled based on what
we believe, given our current experience, would've been the best first steps to
take, after all:

> “Life can only be understood backwards, but it must be lived forward.”
>
>-- [Søren Kierkegaard](https://en.wikipedia.org/wiki/S%C3%B8ren_Kierkegaard)

The way we structured this post aims at better explaining why each of the steps
is important and what it accomplishes:

- [Challenges with tackling Performance](#challenges-with-tackling-performance)
- [The Steps](#the-steps)
- [Step One: Set up a Group](#step-one-set-up-a-group)
- [Step Two: Measure and Lock](#step-two-measure-and-lock)
  - [Measure: Real User Metrics and Conversion Metrics](#measure-real-user-metrics-and-conversion-metrics)
  - [Lock: Audits and Continuous Improvement](#lock-audits-and-continuous-improvement)
- [Step Three: Make performance something that the Company values](#step-three-make-performance-something-that-the-company-values)
  - [1. Correlate business and performance metrics and display them in strategic meetings](#1-correlate-business-and-performance-metrics-and-display-them-in-strategic-meetings)
  - [2. Work on relevant and big optimizations](#2-work-on-relevant-and-big-optimizations)
  - [3. Share and celebrate success (and failure) stories](#3-share-and-celebrate-success-and-failure-stories)
  - [4. Create tools and an environment that helps people do the right thing](#4-create-tools-and-an-environment-that-helps-people-do-the-right-thing)
- [Conclusion](#conclusion)
- [See Also](#see-also)
  - [Metrics](#measure-real-user-metrics-and-conversion-metrics)
  - [Lock: Audits and Continuous Improvement](#lock-audits-and-continuous-improvement)
- [Step Three: Make performance something that the Company
  values](#step-three-make-performance-something-that-the-company-values)
  - [1. Correlate business and performance metrics and display them in strategic
    meetings](#1-correlate-business-and-performance-metrics-and-display-them-in-strategic-meetings)
  - [2. Work on relevant and big
    optimizations](#2-work-on-relevant-and-big-optimizations)
  - [3. Share and celebrate success (and failure)
    stories](#3-share-and-celebrate-success-and-failure-stories)
  - [4. Create tools and an environment that helps people do the right
    thing](#4-create-tools-and-an-environment-that-helps-people-do-the-right-thing)
- [Conclusion](#conclusion)
- [See Also](#see-also)

Also, while we're focused on starting to pay performance technical debt, all
these steps can be implemented from day one and help you shape a better product
from the get-go.

## Challenges with tackling Performance

Already familiar with the challenges? [Go straight to the steps ⏭](#the-steps)

There has never been so many excellent resources on how to optimize your product
available to the general public. Yet it's still rare to see companies that get
to spend time working on this. We understand much of what causes our
applications to be slow, but we never get around to prioritizing fixing it.

When developing features, the focus is usually on enabling users to do more,
empowering them. We have a limited amount of time, so we typically focus on
things we can measure and test. We want **quantifiable and possible to validate
hypotheses**. So we gear our backlog towards working with features that can
validate assumptions like "If we recommend users products that are similar to
the ones he is currently showing interest in, we will be able to increase our
conversion by X%".

> We have a limited amount of time, so we typically focus on things we can
> measure and test. We want **quantifiable and possible to validate
> hypotheses**.

What this means to technical debt is that in the trade-off battle of
productivity x quality, **if we can't prove just how much following a quality
standard will be positive, productivity will be prioritized**. When this
happens, more commonly, we are failing at defending our point of view other
times we're wrong about following that quality standard at that time. That's why
much of what we're gonna talk about here is focused on providing you with those
arguments, qualitative and quantitative and.

![Graph showing the trend of decrease in bounce rate and average load
time](/images/bounce-rate-vs-average-load-time.jpg "Bounce Rate vs Average Load
time") *Our bounce rate vs the Average Load time. In these 12 weeks, we lowered
our average load time by __33.3%__ and bounce rate by __32.65%__. We have the
arguments, but we need to gather them!*

Performance improvements often begin as the work of one or few people in the
company and is usually not organized, not focused on quantifying, but rather an
effort to learn and improve the UX of the product on the same time.

As this effort goes on, so many challenges start to pile on:

- A lot more people are adding features than optimizing;
- Knowledge isn't passed on how and why optimizations were done, and people
  don't even grasp why it is needed;
- Doing things the optimized way is harder than the un-optimized way, so
  examples of un-optimized code start to pile on;
- New performance techniques emerge, like the recent implementation of picture
  and people begin using them before understanding the underlying application;
- [Small optimizations don't bring in so much
  value](https://www.smashingmagazine.com/2015/09/why-performance-matters-the-perception-of-time/)
  and with limited time to dedicate and working against a lot of new code, small
  optimizations end up being all people can focus on.

If performance isn't widely accepted as a core value of the product, it will
soon be neglected as doing things the right way imposes more effort, and [we
humans tend to naturally choose the path of least
resistance](https://en.wikipedia.org/wiki/Principle_of_least_effort). Our main
job, if we ever want a sustainable performance culture, needs to be focused on:

1. Lowering this resistance and 2. Showing purpose and opportunity of working on
this.

## The Steps

Given the set of challenges we faced, I've assembled 3 steps that should help
when starting to work on performance:

- **Set up a group**: Gather individuals that are interested in the subject and
  give them support and incentive to keep the discussion alive, create, evolve
  and maintain the tools;
- **Measure and Lock**: Use real user metrics and lab metrics to prevent
  degradation, to understand how performance affects your business, and to pass
  knowledge forward;
- **Make performance a part of what the Company values**: Share learnings, the
  potential in results and what was already achieved to engage the Product
  Management, Design and Business areas of the company. Build tools to lower the
  barriers and incentivize the Engineering team.

There are a lot of other things we did and each of these points merits a post of
it's own, but I'll focus here on explaining the goals and general idea behind
them. [Let me know](https://twitter.com/hg_Luciano) if you'd like to a more
in-depth explanation of the tools we used and built to address each of these
steps!

## Step One: Set up a Group

> Gather individuals that are interested in the subject and give them support
> and incentive to keep the discussion alive, create, evolve and maintain the
> tools;

In [QuintoAndar](https://quintoandar.com.br), we're very keen on providing more
autonomy and responsibility. The way this plays out is that we have many
mission-oriented teams. We organize ourselves primarily based on [Spotify's team
structure](https://blog.crisp.se/wp-content/uploads/2012/11/SpotifyScaling.pdf)
and it has worked wonders for us. Our Squads become experts in a domain and part
of the product and can significantly further the efforts on these fronts.
Because of this, we've been able to move very fast to solve our primary users'
concerns.

!["The Spotify Model: Tribes, Squads, Chapters &
Guilds"](/images/the-road-to-great-product-performance-first-steps/agile-at-spotify.jpg
"The Spotify Model: Tribes, Squads, Chapters & Guilds, The Spotify Model")
*__The Spotify Model__: Tribes, Squads, Chapters & Guilds*

There is a downside to everything, and the potential downside to full autonomy
is a loss of economies of scale. An engineer in squad A may be wrestling with a
performance issue that the engineers in squad B solved last week. That's why,
when it comes to subjects that are deep and core to a product's experience, we
highly recommend having a focused group that will, at the very least, discuss
how to evolve that topic within the company.

In our structure, we roughly had three options:

1. **Performance Chapter**: The chapter is a small family of people having
   similar skills and working within the same general competency area. It is
   great for knowledge sharing and to evolve tools and practices within the
   company, but it's harder to implement and organize since it involves adding
   to the core competencies shared in the company;
2. **Performance Guild**: A Guild is a more organic and wide-reaching “community
   of interest”, a group of people that want to share knowledge, tools, code,
   and practices. It's great for discussion and knowledge sharing, but we've
   found that it doesn't perform well as a well to maintain governance over
   tools to move big projects forward;
3. **Performance functional team**: Assembling a small set of people who have
   prior knowledge and interest in deepening that knowledge and having them do
   most of the ground work in creating and maintaining the tools that will be
   used company-wide. It's also usually a good idea to have them battle test
   these tools by doing essential optimizations in the product.

> Note that **not one of these treats performance as a job of the group alone,
> but instead rely on leveraging the company structure to improve the product's
> performance and just makes this process easier** by providing the set of
> practices and tools needed.

All of these are great and an excellent first step towards bring the topic to
life in your company, but each organization has its particularities. Consider
what works best for you, start with the more natural group structure and move
fast to the ideal.

## Step Two: Measure and Lock

> Use real user metrics and lab metrics to prevent degradation, to understand
> how performance affects your business, and to pass knowledge forward

The main goals are three-fold:

1. Understanding how performance impacts our business:
   [Measure](#measure-real-user-metrics-and-conversion-metrics)
2. Preventing silent degradation beyond a point: [Measure](#measure) and
   [Lock](#lock-audits-and-continuous-improvement)
3. Automatizing the knowledge transfer:
   [Lock](#lock-audits-and-continuous-improvement)

### Measure: Real User Metrics and Conversion Metrics

We've always had an underlying feeling that performance was an issue for our
users and that we would improve their experience by optimizing our product but,
before measuring, we failed to understand just how much that is.

Since we started measuring and tagging our users based on how fast the product
was for them, we've been able to better understand how their behavior is
impacted.

[I've written about this](/posts/avoid-losing-users-and-conversions) and also
[there's a lot of relevant content about it](#see-also), so I'll just leave the
main points here:

1. Start collecting [Real User
   Metrics](https://web.dev/user-centric-performance-metrics/) as soon as
   possible;
2. Track this in a way you can correlate it with your business and user metrics;
3. Don't use only average and median a lot of your users are better described by
   the higher percentiles (p75, p90, p99,
   [p99.99](http://blog.tacertain.com/p-four-nines/));
4. Build discoverable, accessible and easy to use dashboards showing these
   metrics and how they relate to your business.

!["Shows a visualization of a graph displaying the shares of users by FID
performance
bucket"](/images/the-road-to-great-product-performance-first-steps/measure-fid.png
"FID performance buckets across all sessions in QuintoAndar") *[First Input
Delay](https://web.dev/fid) metrics in QuintoAndar. Visualizations like this,
created based on Real User Metrics, can be useful to understand the evolution of
your product's performance*

### Lock: Audits and Continuous Improvement

Locking here means trying our hardest to catch code that can degrade performance
before it goes into production. Hence working with alarms, audits and mainly
[Continuous Improvement
(CI)](https://en.wikipedia.org/wiki/Continual_improvement_process).

> Testing performance in the lab is essential when developing new features.
>Before features are released in production, it's impossible to measure their
>performance characteristics on real users, so **testing them in the lab before
>the feature is released is the best way to prevent performance regressions**.
>
>-- [Philip Walton](https://web.dev/user-centric-performance-metrics/)

When we think about this, we usually understand the regression side and why we'd
like to prevent that, but we oftentimes miss the main point that **better audits
and CI are our greatest tools for automatic knowledge sharing**. When we design
our checks and CI, we must understand that and work towards sharing knowledge
and raising the bar of the company as a whole. When engineers feel that the
constraints and limitations are quality standards that will enable them to grow
and not hindrances, we've met our goal with our CI pipeline.

> Better audits and CI are our greatest tools for automatic knowledge sharing

We're still diligently working in our audits and CI pipeline and far from
perfect, but our performance tests currently consists of:

1. [Lighthouse CI Performance
   Budgets](https://web.dev/use-lighthouse-for-performance-budgets/): We use
   these to prevent increases in Javascript size, Image Size, Requests Counts
   and Total Size of each of our main entry points -- Our
   [Homepage](http://quintoandar.com.br/), our [Search
   Page](http://quintoandar.com.br/alugar/imovel/sao-paulo-sp-brasil), and our
   [Listing Page](https://www.quintoandar.com.br/imovel/892879684). This is our
   most important audit and the one that gives us more safety, but the others
   allows us to better understand the issues;
2. [Danger](https://github.com/danger/danger) script for file sizes: While the
   most important thing is measuring the impact in each route separately,
   distinct file sizes also impact our users in different ways, so we track the
   sizes on our most important files, either because they're widespread on
   different pages or why they're already big, and try not to increase them too
   often;

!["Shows two tests that we run on every pull request, the performance budgets
and chunk size
ones"](/images/the-road-to-great-product-performance-first-steps/audits-ci.jpg
"CI steps run on every pull request") *CI steps that we run on every PR. The
left one is the lighthouse performance Budgets, and the right one is our chunk
size budget audit*

We're currently working on adding more audits and experimenting new ones. Since
we're directly impacting how code is shipped in the company, before being used
widely, we must first guarantee that each audit:

1. **Does not** give false negatives;
2. **Minimizes** false positives: This is the goal, but the former is a
   restriction. If an audit gives too many false negatives, people will lose
   faith in its usefulness. False positives are worse than not having the check
   since it's wasting developer time and patience.

## Step Three: Make performance something that the Company values

> Share learnings, the potential in results and what was already achieved to
> engage the Product Management, Design and Business areas of the company. Build
> tools to lower the barriers and incentivize the Engineering team.

Some of the work done in the previous steps allows us to shed light on how
important Performance is for our business, but we need to put it to work:

### 1. Correlate business and performance metrics and display them in strategic meetings

If you've set up your Real User Metrics collection in a way you can correlate
this data with conversion and business metrics, you've got a real weapon to help
people understand the potential improvements in performance could have in
improving the business. I've given some examples to that in a [different
article](/posts/avoid-losing-users-and-conversions), but find what works best
for your business and make it visible to the people who matter.

### 2. Work on relevant and big optimizations

In order for users to barely see a difference in time duration, performance has
to be changed by a minimum of 20%. Ideally, we should [aim for 30% speed
improvements](https://www.machmetrics.com/speed-blog/highlights-perfmatters-2018-web-performance-conference/).
This will give you meaningful work to do, perceived by all your users and by the
people who work in the company. Something that is clearly felt will hurt when it
goes away.

The good news is, there will usually be a [lot of low hanging
fruits](https://mediatemple.net/blog/web-development-tech/low-hanging-fruit-web-performance/).
Find these and start solving them; some common ones are:

1. Using [Brotli](https://brotli.org/): This usually single-handedly lowers your
   bundle size by 30% and is [very widely
   available](https://caniuse.com/brotli). Use Brotli when you can, for all
   other cases, make sure you're using Gzip
2. Improving your Code Splitting:
3. Optimize images, shared.fonts, javascript, CSS, etc: Minify what you can, remove
   parts that you don't use, encode and size images appropriately;
4. Use a CDN: Content Delivery Networks (CDNs) work great for serving static
   files and will keep that done close to your users

I could go on, and on, but you're in a way better position to find your
impactful low hanging fruits!

### 3. Share and celebrate success (and failure) stories

Impacting the core values starts with each individual and bubbles up from that.
Create the habit of sharing and celebrating success within your team first and
quickly expand this to the whole company. Making sure people get the credit they
deserve for what they deliver.

Internally, this will spark up creativity and engagement towards the topic.
Externally, it works as a way to attract talented people and shows commitment
with your users.

Take Etsy's example:
> “The performance team at Etsy maintains a dashboard celebrating people on
> other teams who contribute to performance improvements. we include their
> photo, a graph showing the performance improvement, and a brief description of
> their solution.” — [Lara Hogan on “Changing Culture at Your
> Organization](http://designingforperformance.com/changing-culture/)”

### 4. Create tools and an environment that helps people do the right thing

Do the work for Step two and make performance reports and budgets something that
are visible to the whole company, especially to the Engineers, and give your
company a way to work through them. In QuintoAndar, we've set up a feel
different tools that helps us with that:

1. Automatic bundle analysis report on every pull request: For every single pull
   request, we publish runnable [bundle analysis
   reports](https://www.npmjs.com/package/webpack-bundle-analyzer) to help on
   debugging and finding the root cause of issues
2. Application size difference on every pull request: A short report that shows
   how each part of our application varied in size and gives a quick overview of
   where performance was improved and deteriorated;
3. Lighthouse runs that can be compared with previous builds: We use [lighthouse
   ci](https://github.com/GoogleChrome/lighthouse-ci/blob/master/docs/getting-started.md)
   for this, and it really helps understand what each and every commit has done
   to important performance metrics
4. Performance-related forum: We've set up a channel where people can ask
   questions, request for tools, share knowledge and discuss the topic in
   general.

!["Our bundle reports: the image shows two of the reports we publish with each
pull request, one to help with in-depth debugging and another one to give a
high-level view of what changed regarding application
size"](/images/the-road-to-great-product-performance-first-steps/debugging-tools.png
"Our bundle reports: Making debugging and investigation easy helps lower the
barrier for performance optimizations") *Our bundle reports: Making debugging
and investigation easy helps lower the barrier for performance optimizations*

When we're successful in engaging and showing the importance of the matter to
the rest of the company, it will reflect on Designs that have performance in
mind, on Product teams prioritizing performance optimizations, and on consistent
investment in performance being made company-wide. We must remember that this
isn't the end goal; **the end goal here is providing our users with
best-in-class User Experience. Working on performance is often a requirement to
achieve that goal, and there's only so much we can post-pone it.**

## Conclusion

- The sooner you start working on your product's performance, the better;
- Knowledge and engagement are the most critical challenges to solve so focus on
  that;
- Performance constraints will raise the bar for your engineers and provide
  great value for your users, make sure everyone understand that and the cycle
  may be self-reinforcing;
- Set up a group;
- Measure and Lock;
- Make performance something that the Company values.

Do you think the main three steps should contain something else? Would you like
to have a more in-depth analysis on any or all of the points above? [Let me
know](https://twitter.com/hg_Luciano) so we can learn together :)

---

## See Also

1. Set up a Group
   1. [Scaling Agile @
      Spotify](https://blog.crisp.se/wp-content/uploads/2012/11/SpotifyScaling.pdf)
2. Measure and lock:
   1. [Metrics | web.dev](https://web.dev/metrics/)
   2. [What does P-four-nines (p99.99) mean | Andrew
      Certain](http://blog.tacertain.com/p-four-nines/)
   3. [Lighthouse Evolution: Continuous Integration, new performance score formula,
      and more](https://web.dev/lighthouse-evolution-cds-2019/)
   4. [Use Lighthouse for performance
      Budgets](https://web.dev/use-lighthouse-for-performance-budgets/)
   5. [React Production Performance Monitoring | Kent C.
      Dodds](https://kentcdodds.com/blog/react-production-performance-monitoring)
3. Make performance a part of what the Company values
   1. [Performance is a Feature: Avoid Losing Users and
      Conversions](/posts/avoid-losing-users-and-conversions)
   2. [Lara Hogan on “Changing Culture at Your
      Organization](http://designingforperformance.com/changing-culture/)
   3. [Fostering a Web Performance Culture | José M.
      Pérez](https://jmperezperez.com/fostering-web-performance-culture/)
   4. [Building a Web Performance Culture |
      Cars.com](https://tech.cars.com/building-a-web-performance-culture-902f34394b50)
   5. [Why Perceived Performance Matters, Part 1: The Perception Of
      Time](https://www.smashingmagazine.com/2015/09/why-performance-matters-the-perception-of-time/)
   6. [The Low Hanging Fruit of Web
      Performance](https://mediatemple.net/blog/web-development-tech/low-hanging-fruit-web-performance/)

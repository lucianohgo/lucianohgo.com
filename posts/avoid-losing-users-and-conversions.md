---
title: 'Performance is a Feature: Avoid Losing Users and Conversions'
date: '2020-05-04'
description: "Understand how improving and protecting your website performance can affect your results"
cover: 'https://lucianohgo.com/images/snail-slow.jpg'
coverAlt: 'Snail going over a metal pipe slowly'
---

Improving and protecting your website performance can directly affect your results. Understanding just how much that is
will give you and your team a powerful tool and a new way to impact your users' experience.

![Snail going over a metal pipe slowly](/images/snail-slow.jpg "Your website if you don't take care of it's performance")
*Your website if you don't take care of its performance - photo by [Pascal van de Vendel on Unsplash](https://unsplash.com/@pascalvendel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)*

Like [José M. Perez](https://jmperezperez.com/about-me/) said beautifully in his article
[Fostering a Web Performance Culture](https://jmperezperez.com/fostering-web-performance-culture/):

>Web Performance is not only about understanding what makes a site fast. **It’s about creating awareness amongst both 
>developers and non-developers. Performance is a feature and needs to be prioritized as such**.

Especially to get buy-in from non-developers we need to size how much improving performance actually impacts business
metrics, and exactly to what degree each deterioration impacts the same metrics.

In __[QuintoAndar](https://quintoandar.com.br)__ we recently implemented tools that are already allowing us to do this kind
of analysis, and I'd like to share with you some of these findings focusing on two things that are usually very important
for any business:

1. [User Acquisition](#user-acquisition-bounce-rate)
2. [Conversion](#conversion-give-your-users-the-ux-they-deserve)

## User Acquisition: Bounce Rate

According to [Google](https://support.google.com/analytics/answer/1009409?hl=en):

>Bounce rate is single-page sessions divided by all sessions, or the percentage of all sessions on your site in which
>users viewed only a single page and triggered only a single request to the Analytics server.

So if we have a high bounce rate, users are not staying in our website and leaving before performing any relevant
action. It's intuitive that a slow website might lead to more users leaving the page, but __it's hard to grasp just how
many users we're losing for each second longer our page takes to load__, hint, it's more than you may think it is
(well at least for us, it was):

![Graph showing the trend of decrease in bounce rate and average load time](/images/bounce-rate-vs-average-load-time.jpg "Bounce Rate vs Average Load time")
*In these 12 weeks, we lowered our average load time by __33.3%__ and bounce rate by __32.65%__*

After seeing this trend, __we started looking to Web Performance improvements not only as a way to drive more
conversion, but also as a tool for user acquisition__. Improving our performance metrics, leads to more users actually
looking at the site for two main reasons:

1. Better UX: Improving performance improves everyone's usage of our product;
2. The website actually becomes accessible to them. Users with older devices and/or slow networks start being able to
use our product.

More people using our product, usually leads to more customers down the line. But we don't just add volume. In this next
section, I'll try to show you that we're also making our funnel more efficient when we do performance optimizations.

## Conversion: Give your users the UX they deserve

In [QuintoAndar](https://quintoandar.com.br), we're passionate about UX, and have been since I joined 3 years ago (go
check out our [QuintoAndar Design Blog](https://medium.com/quintoandar-design)). We do research, lab tests and field
tests both quantitative and qualitative and strive to empower our users through the products we provide to them.

With that experience, we've come to understand that our product's performance is an integral part of that UX so it 
shouldn't be treated any differently and have started tracking more and more
[User-Centric Performance Metrics](https://web.dev/user-centric-performance-metrics/) both in the
[field](https://web.dev/user-centric-performance-metrics/#in-the-field), and in the
[lab](https://web.dev/user-centric-performance-metrics/#in-the-lab). 

We want to improve our users' experience, so we frame these metrics on terms that are relevant to our users:

| Question to answer            | Description                                                       |
|-----------------------------  |------------------------------------------------------------------	|
| __Is it happening?__         	| Did the navigation start successfully? Has the server responded? 	|
| __Is it useful?__            	| Has enough content rendered that users can engage with it?       	|
| __Is it usable?__            	| Can users interact with the page, or is it busy?                 	|
| __Is it delightful?__        	| Are the interactions smooth and natural, free of lag and jank?   	|
*Performance metrics Questions table - taken from [web.dev's User-Centric Performance Metrics](https://web.dev/user-centric-performance-metrics/)*

There are many different metrics we use for each of these steps, but we'll focus on how two important ones 
have affected our conversion metrics:

1. [First Contentful Paint (FCP)](#paint): Measures the time from when the page starts loading to when any 
part of the page's content is rendered on the screen. In our case, this metric is, as of now, very close to the value of
another metric that we heavily recommended tracking: [Largest Contentful Paint (LCP)](https://web.dev/lcp/);
2. [First Input Delay (FID)](#interactivity): measures the time from when a user first interacts with your site 
(i.e. when they click a link, tap a button, or use a custom, JavaScript-powered control) to the time when the browser 
is actually able to respond to that interaction 

### Paint

The main questions involved in paint metrics are:

1. __Is it happening?__: Receiving a paint is what gives the user the idea that the page is loading and somebody responded
to the request the user made. If we don't respond quickly, a lot of our users will feel like there's a problem and
leave altogether;
2. __Is it useful?__: A lot of pages are mostly about content, and the content of a page is what makes it useful;

Based on benchmark values from 
[page speed insights](https://developers.google.com/speed/docs/insights/v5/about#distribution), we classified our Users'
experience in what we called UX buckets. The results we had classifying user paint experience for one of our most 
important conversion metrics were impressive:

![Graph showing how conversion is affected by paint experience](/images/conversion-based-on-paint-ux-bucket.jpg "Conversion for different Paint UX buckets")
*Paint speed and experience will directly affect your conversion*

Some insights from that data:

1. For mobile users, moving from slow to a moderate UX bucket would mean __increasing his chance to convert by 12%__;
2. For mobile users, moving from slow to a fast UX bucket would mean __increasing his chance to convert by 22.2%__;
3. Bad First Contentful Paints affect mobile users way harder than desktop users;
4. Paints directly affect bounce rate and are one of the most correlated metrics with it;
5. Long load times tax the user experience beyond a single Session. In other words, even if in the future we improve
the load time, the user may still carry the impression that the website is slow and be less likely to convert.

### Interactivity

The main questions involved in paint metrics are:

1. __Is it usable?__: Content visible that invites interaction but cannot respond to it can be frustrating for your users
2. __Is it delightful__: Responding to interaction may still not be enough, if such response comes with the appearence of
a sluggish and janked experience.

We did the same process we did for [paint](#paint) for interactivity metrics and also found impressive results

![Graph showing how conversion is affected by interactivity experience](/images/conversion-based-on-interactivity-bucket.jpg "Conversion for different Interactivity (FID) UX buckets")
*Interactivty will directly affect your conversion*

Some insights from that data:

1. For all users, moving from slow to a moderate UX bucket would mean __increasing his chance to convert by 11.2%__;
2. For all users, moving from slow to a fast UX bucket would mean __increasing his chance to convert by 22%__;
3. Interactivity affects heavily both mobile and desktop users;
4. Long wait times for interactivity will tax the user experience beyond a single Session.

---

## In summmary

1. Performance is a feature: Protect it and improve it like so;
2. Understanding user behavior helps you quantify and validate performance improvements in terms of business results;
3. Performance can greatly impact your conversion and acquisition metrics;
4. Bad performance taxes the user experience beyond a single Session. In other words, even if in the future we improve
the load time, the user may still carry the impression that the website is slow and be less likely to convert.
5. Performance has multiple ways that it can be tracked and improved each composing a relevant part of the users'
experience

## See Also

1. [Metrics -- web.dev](https://web.dev/metrics)
2. [Fostering a Web Performance Culture -- José M. Perez](https://jmperezperez.com/fostering-web-performance-culture/)
3. [Load Performance -- Web Fundamentals](https://developers.google.com/web/fundamentals/performance/get-started)

---

Would you like to know more on how we track this metrics in production? Lemme know and I can follow up with a series
of posts on the topic! :)

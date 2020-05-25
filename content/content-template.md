---
title: 'Content Template'
date: '1938-01-10'
description: "A SEO Friendly description with not so many characters, use your keywords :)"
cover: 'https://lucianohgo.com/images/snail-slow.jpg'
coverAlt: 'Snail going over a metal pipe slowly'
authors:
  - lucianohgo
tags:
  - performance
  - analytics
  - product-management
appearsIn:
  - slug: "the-road-to-great-product-performance-first-steps"
    title: "The Road to Great Product Performance: The First Steps"
---

This is a template for content you might want to use. Some reminders: 

1. Try not to use `<h1 />` headers since the title will have that level and it's not very semantic to have multiple ones;
2. Check your content with the development server by running `yarn dev` so that you don't get surprises;
3. Provide alt, title and captions to all images;

## Images

![ALT TEXT HERE](/images/snail-slow.jpg "TITLE HERE")
*CAPTION HERE - photo by [Pascal van de Vendel on Unsplash](https://unsplash.com/@pascalvendel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)*

## Code 

Code will be automatically syntax highlighted with [Solarized Dark theme](https://ethanschoonover.com/solarized/), we
currently only support:

1. JS and JSX (use `jsx`)
2. TS and TSX (use `tsx`)

If you want to add new languages support include it under [prismjs .babelrc plugin](../.babelrc) and add it here too :)
  
## Tables

Regular markdown tables with caption. Example of a table:

| Question to answer            | Description                                                       |
|-----------------------------  |------------------------------------------------------------------	|
| __Is it happening?__         	| Did the navigation start successfully? Has the server responded? 	|
| __Is it useful?__            	| Has enough content rendered that users can engage with it?       	|
| __Is it usable?__            	| Can users interact with the page, or is it busy?                 	|
| __Is it delightful?__        	| Are the interactions smooth and natural, free of lag and jank?   	|
*CAPTION OF THE TABLE - taken from [web.dev's User-Centric Performance Metrics](https://web.dev/user-centric-performance-metrics/)*

## Others

For more on markdown see [this cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

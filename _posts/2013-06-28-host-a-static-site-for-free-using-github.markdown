---
layout: post
title: Host a static site for free using GitHub
categories:
- Git
- Technology
tags: []
status: publish
type: post
published: true
author:
  login: admin
  email: matthew@idlefusion.com
  display_name: Matthew Strickland
  first_name: Matthew
  last_name: Strickland
---
Have you ever wanted to host a static HTML website but either did not have a hosting provider or the money to host? Well in this post, I am going to show you a few simple steps you can follow to get a static HTML website hosted by the great folks at [GitHub](http://github.com)

<!-- more -->

## Requirements

There are a few things you will need to get started:

* A GitHub account - You can signup [here](https://github.com/mps/GittyFeedback/issues?state=open)

* A site written with HTML, CSS, JS.

* Some knowledge of Git, but I try to remove that barrier in this post. [Here's a great resource to get started.](http://try.github.io/)

## Getting Started

The first thing you will need to do is log into your GitHub account and create a new Repository. If you are new to Git, feel free to think of a Repository as just a folder filled with your code.

<img class="alignnone size-full wp-image-308" alt="Screen Shot 2013-06-28 at 8.30.49 AM" src="../assets/Screen-Shot-2013-06-28-at-8.30.49-AM.png" width="374" height="117" />

&nbsp;

From here, you will need to give your Repository a name. Unless you know Git, you can feel free to ignore the other options.

<img class="alignnone size-full wp-image-307" alt="Screen Shot 2013-06-28 at 8.31.23 AM" src="../assets/Screen-Shot-2013-06-28-at-8.31.23-AM.png" width="872" height="495" />

&nbsp;

GitHub uses a service called [GitHub Pages](http://pages.github.com/) to host your static site. To trigger this service, GitHub looks for a specific branch on your Repository named 'gh-pages' and attempts to serve the code there as a static site. If you are new to Git, think of a branch as a copy of your code living inside of your Repository.

So the next step is to create a branch called 'gh-pages' by clicking on the drop down called branch:master and typing 'gh-pages' into the field.

<img class="alignnone size-full wp-image-306" alt="Screen Shot 2013-06-28 at 8.31.37 AM" src="../assets/Screen-Shot-2013-06-28-at-8.31.37-AM.png" width="623" height="480" />

&nbsp;

Now that you have a 'gh-pages' branch, it is time to create your content. If you are new to Git, we can do this directly from the browser. If you are a veteran of Git, then feel free to clone this repository and push your content.

Click on the plus icon next to your Repository's name to create a new file called index.html

<img class="alignnone size-full wp-image-305" alt="Screen Shot 2013-06-28 at 8.31.52 AM" src="../assets/Screen-Shot-2013-06-28-at-8.31.52-AM.png" width="624" height="188" />

&nbsp;

Add your content to the index.html file we've created.

<img class="alignnone size-full wp-image-304" alt="Screen Shot 2013-06-28 at 8.33.06 AM" src="../assets/Screen-Shot-2013-06-28-at-8.33.06-AM.png" width="997" height="445" />

&nbsp;

The last thing that I like to do is to make the 'gh-pages' branch the default branch for the Repository. To do this, just click on settings for your Repository and adjust the property there.

<img class="alignnone size-full wp-image-303" alt="Screen Shot 2013-06-28 at 8.33.26 AM" src="../assets/Screen-Shot-2013-06-28-at-8.33.26-AM.png" width="417" height="223" />

&nbsp;

## Recap

After following the above steps, your index.html file will now be hosted by GitHub. The url to your site follows this convention: http://[my-github-username].github.io/

The URL to the site I walked you through creating can be found at [http://mps.github.io/statictutorial/](http://mps.github.io/statictutorial/).

I have a few other sites I host up on GitHub that you can also check out:

* [Gitty](http://github.com/mps/gittyapp.com)

* [BabyMe Apps](http://github.com/mps/babymeapps.com)

* [Inspired Causes](http://github.com/mps/inspiredcauses.com)

If you have any questions about this tutorial please feel free to comment or reach out to me on [Twitter](http://twitter.com/strickland).

Also remember to do good and not evil, using something like this is great for everyone. Abusing it with spam or other nefarious things is not encouraged or endorsed.

Thanks!

&nbsp;

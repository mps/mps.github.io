---
layout: post
title: Making iOS Deployment Easy
categories:
- iOS
- Ruby
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
Recently I [wrote about automating everything](http://mstrick.com/automate-everything/), you know taking those things that you do daily, weekly, monthly and making them easily reproducible. After reading it, you may have been asking yourself, "Matthew, what is a tangible way you do this everyday?" Well dear reader, here's a good example:

<!-- more -->

I build apps in my free time like [Gitty](http://gittyapp.com) and [BabyMe Slideshow](http://babymeapps.com) but I also have built several other apps for people professionally. One service I use regularly and endorse heavily is [TestFlight](http://testflightapp.com). TestFlight allows you to easily deploy your iOS app to a group of people for testing, Apple calls this Ad-Hoc deployment. With TestFlight it's as easy as the user receives an email, registers their device and then receives an app they can test or play around with.

In fairness, TestFlight does a great job at building a user-friendly app that helps you, in a few clicks, deploy the application. But we are automaters, we do not want to remember those few clicks or the right questions to answer. We want to be able to type a command or click a file and be done with it.

Let me show you the code that I use and then I will break it down thereafter. Warning, for some this will be overwhelming and like drinking water through a fire hydrant. If you feel overwhelmed, feel free to give me a [shout.](http://mstrick.com/contact)

Click [here](https://gist.github.com/mps/5876345) to view the code.

To accomplish the automation we are using a language called Ruby and the first file is known as a Gemfile. If you are familiar with Ruby then this is where you declare your dependencies for Bundler.

We are using the Ruby gem called [Shenzhen](https://github.com/nomad/shenzhen) by [Mattt Thompson](https://github.com/mattt). Shenzhen is the core library that will interact with Xcode, build our IPA and then interact with TestFlight for deployment.

The second file in the gist is the Rakefile. A Rakefile is a ruby code file that leverages tasks on Ruby's Rake library. Rake is Ruby's version of Make which allows you to easily execute a sequence of Ruby code to accomplish a task.

In our scenario there are four tasks:

* `buildipa`

* `internal`

* `release`

* `rev`

You may have noticed that `internal` and `release` have a dependency upon `buildipa`. If you were to run the `internal` command for instance using `rake internal` it would first build the ipa using `buildipa` and then release the IPA to TestFlight.

Let's recap:

How do I deploy internally? `rake internal`

How do I deploy a release build? `rake release`

Two words, one command instead of a slew of steps. Automate everything...

(Kudos to my friend [Jason Jarrett](http://twitter.com/staxmanade) for helping develop and refine this process on a recent project we worked on together)

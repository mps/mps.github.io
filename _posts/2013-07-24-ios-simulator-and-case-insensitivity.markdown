---
layout: post
title: iOS Simulator and Case Insensitivity
categories:
- iOS
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
Recently, I ran into a really strange bug that had me perplexed for a bit.  I was going about my normal business of adding some assets to an iOS project, everything appeared to worked fine on the iOS Simulator but when I ran on device my new images were not showing up.

At first I thought it was something to do with how I was loading the UIImage.  You see, I need to get some data from the server and then create a string that represented my image in the bundle for loading.  For example: all of my images were prefixed with a certain naming convention, e.g. ABC123.png, ABC456.png, etc.  After a little debugging, nope that was not the problem at all.

My next thought is that somehow when creating the IPA for [Adhoc deployment](http://mstrick.com/making-ios-deployment-easy/), the assets were not being bundled.  To debug this, I remembered a little trick I learned from [NSScreencast](http://nsscreencast.com) using a ruby library called [appcrush](https://github.com/boctor/idev-recipes/tree/master/Utilities/appcrush) to extract assets from an IPA.  After running through this process, everything was there so that was not the problem.

At this point, I reached out to some colleagues to see if anyone else had ran into a similar problem.  My friend [Paul](http://twitter.com/posburn) reached back out shortly with an idea:
<blockquote>I think I may have had an issue like that. If I remember right it was because the simulator is not case-sensitive but the device is. I'm not sure if I'm remembering that right but its something to check.</blockquote>
As I was reading those words, it hit me.  I had created a ruby script to rename all of the assets I was working with to follow the convention I needed and in doing so, I upper cased everything.  Sure enough, I had also uppercased the extension so instead of being .png it was .PNG.

A few quick changes and a new Adhoc deployment, sure enough that was it.

So if you are ever running into a problem where an asset shows up on the iOS Simulator but not on device, first check for the case sensitivity of the file name because that may likely be your problem.

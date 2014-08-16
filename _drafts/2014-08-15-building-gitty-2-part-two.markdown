--- 
layout: post
title: Building Gitty 2 Part Two
published: false
custom-link: 
date: 2014-08-15
author:
  login: admin
  email: matthew@idlefusion.com
  display_name: Matthew Strickland
  first_name: Matthew
  last_name: Strickland
---
> This post is a series of posts where I write about building [Gitty 2](http://gittyapp.com).  If you missed any part of this series you can view them here: 
>
> [Part 1](/building-gitty-2-part-one)

People often ask me, how did you build Gitty? What technologies did you use?  Consider this a tell all post.  I will take you under the hood and show you the ins and outs of how Gitty was built.

## Objective-C

While I do have a background in C# and Ruby, Gitty is built in Objective-C using Xcode like most Apps in the App Store today.

Objective-C, for some, is considered a four letter word.  Before I got into iOS Development, I though of Objective-C in the same way I think of Chinese...unreadable.  For this and many other reasons, I guess Apple decided to create [Swift](https://developer.apple.com/swift/).  But given enough time and desire, I learned Objective-C and in fact, have [grown to love it](http://www.splinter.com.au/in-defence-of-objective-c/).

## Open Source & Cocoapods

The backbone of Gitty is built upon Open Source.  I cut my Objective-C teeth on Open Source, just notice how many [stars I have on GitHub, for example](https://github.com/stars/mps).

In some ways, working with Open Source and Objective-C makes me feel like a conductor.  I have all of these great instruments at my disposal but with that comes a lot of responsibility.  Instead of mashing my favorite libraries together, Gitty is a carefully curated attempt at highlighting great Open Source projects by weaving them together into a beautiful cohesion.

<!-- language: ruby -->
    platform :ios, '7.0'

    xcodeproj 'gitty.xcodeproj'

    target :gitty do
      # Networking
      pod 'AFNetworking', '~> 2.2.1'

      # Analytics
      pod "ARAnalytics/Crashlytics"
      pod 'ARAnalytics/GoogleAnalytics'

      # Base64 encoding/decoding
      pod 'Base64', '~> 1.0'

      # Modal Pickers
      pod 'BSModalPickerView', :git => 'https://github.com/mps/BSModalPickerView', :branch => 'fix_iOS7'

      # UIButton help
      pod 'CMDAwesomeButton', '~> 0.1'

      # Font Awesome
      pod 'FontAwesome+iOS', '~> 0.1'

      # Profile Picture Viewer
      pod 'IDMPhotoBrowser', '~> 1.3'

      # Date Formatting
      pod 'ISO8601DateFormatter', '~> 0.7'

      # Milestone Progress
      pod 'LDProgressView', '~> 1.2'

      # Helpers
      pod 'MPSCategories', :git => 'git@github.com:mps/MPSCategories.git'

      # Menu
      pod 'MPSHorizontalMenu', :git => 'https://github.com/mps/MPSHorizontalMenu'

      # Emoji
      pod 'NSStringEmojize', '~> 0.2'

      # Hamburger
      pod 'NVSlideMenuController', '~> 1.5.6'

      # Octicon goodness
      pod 'OcticonsIOS', :git => 'https://github.com/mps/OcticonsIOS'

      # Add comment bar
      pod 'PHFComposeBarView', '~> 2.0.1'

      # In App Routing
      pod 'Routable', '~> 0.0'

      # Action Sheet helpers
      pod 'RSActionSheet', '~> 1.0'

      # Helpers
      pod 'SAMCategories', '~> 0.4'

      # Do things so often
      pod 'SAMRateLimit', '~> 0.2'

      # Image caching
      pod 'SDWebImage', '~> 3.6'

      # Progress indicator
      pod 'SVProgressHUD', '~> 1.0'

      # Swipe
      pod 'SWTableViewCell', '~> 0.3'

      # Easy Web View
      pod 'SVWebViewController', :git => 'https://github.com/mps/SVWebViewController', :branch => 'master'

      # Hide Keyboard
      pod 'TPKeyboardAvoiding', '~> 1.2'

      # Attributed Label
      pod 'TTTAttributedLabel', '~> 1.9'

      # In App Messaging
      pod 'TWMessageBarManager', '~> 1.6'

      # View Helper
      pod 'UIView+Shake', '~> 0.2'
    end

    target :gittyTests do
      # Testing Framework
      pod 'Specta',  '~> 0.2.1'
      pod 'Expecta', '~> 0.3.0'

      # Mocking
      pod 'OCMock', '~> 2.2.3'
    end

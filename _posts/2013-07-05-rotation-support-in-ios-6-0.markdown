---
layout: post
title: Rotation Support in iOS 6.0+
categories:
- iOS
- Technology
tags: []
status: draft
type: post
published: false
author:
  login: admin
  email: matthew@idlefusion.com
  display_name: Matthew Strickland
  first_name: Matthew
  last_name: Strickland
---
With the release of iOS 6.0, Apple changed how Apps should offer rotation support and deprecated the existing approach.  Most of the blogs and stack-overflow's out there are outdated so I thought I would write a quick post on how I accomplish this is my projects.

## The Old

In the past, each sublcass of a UIViewController supported the following method:

- (BOOL)shouldAutorotateToInterfaceOrientation:(UIInterfaceOrientation)interfaceOrientation;

## New Approach

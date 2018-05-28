---
layout: post
title: Easily run Ruby tests with Sublime Text 2
categories:
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
One of my favorite text editors is [Sublime Text 2](http://www.sublimetext.com/2).  Not only does it provide great syntax highlighting but it also allows you to execute bash commands from the program.  In this blog, I want to walk you through how to setup [Sublime Text 2](http://www.sublimetext.com/2) to easily run your [Ruby](http://ruby-lang.org) tests.

<!-- more -->

## Installation

First you will need to install Sublime Text 2 which you can download [here](http://www.sublimetext.com/2).

Next, go to your Sublime Text 2 `Packages` directory

 - OS X: `~/Library/Application Support/Sublime Text 2/Packages`
 - Windows: `%APPDATA%/Sublime Text 2/Packages/`
 - Linux: `~/.config/sublime-text-2/Packages/`

and clone the repository using the command below:

```
$ git clone https://github.com/maltize/sublime-text-2-ruby-tests.git RubyTest
```

## Color Setup

Edit the file "Theme - Default/Widget.sublime-settings" in the Library/Application Support/Sublime Text 2/Packages directory:

```
$ subl "Theme - Default/Widget.sublime-settings" 
```

In that file, change

```
"color_scheme": "Packages/Theme - Default/Widgets.stTheme"
```

to

```
"color_scheme": "Packages/RubyTest/TestConsole.tmTheme"
```

## Usage

 - Run single ruby test: `Command-Shift-R`
 - Run all ruby tests from current file: `Command-Shift-T`
 - Run last ruby test(s): `Command-Shift-E`
 - Show test panel: `Command-Shift-X`
 - Check RB, ERB file syntax: `Alt-Shift-V`
 - Switching between code and test:
    - Single View: `Command-.`
    - Split View:  `Command+Ctrl+.`

Keys:
 'Command' (OSX)
 'Ctrl' (Linux / Windows)

<a href="http://strickland.blog.images.s3.amazonaws.com/wp-content/uploads/2012/06/sublime_tests.png"><img src="../assets/sublime_tests.png" alt="" title="sublime_tests" width="1274" height="1055" class="alignnone size-full wp-image-113" /></a>

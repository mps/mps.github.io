---
layout: post
title: Free WordPress Hosting with Heroku
categories:
- Technology
- WordPress
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
> Note: Before you get started hosting your next WordPress site for free, you will need to know how to use Git and Heroku.

Hosting Wordpress on Heroku is not only free but easy thanks to [this repository](https://github.com/mhoofman/wordpress-heroku) on GitHub.  By completing the following steps you will end up with a free WordPress site hosted on Heroku using Postgres for the backend instead of MySQL.  If you have any questions, feel free to ask in the comments or [send me a message on Twitter](http://twitter.com/strickland).

<!-- more -->

## Installation

Clone the repository from Github

    $ git clone git://github.com/mhoofman/wordpress-heroku.git
    
With the [Heroku gem](http://devcenter.heroku.com/articles/heroku-command), create your app

    $ cd wordpress-heroku
    $ heroku apps:create mycoolsite
    > Creating mycoolsite... done, stack is cedar
    > http://mycoolsite.herokuapp.com/ | git@heroku.com:mycoolsite.git
    > Git remote heroku added

Add a database to your app

    $ heroku addons:add heroku-postgresql:dev
    > Adding heroku-postgresql:dev to strange-turtle-1234... done, v2 (free)
    > Attached as HEROKU_POSTGRESQL_COLOR
    > Database has been created and is available
    > Use `heroku addons:docs heroku-postgresql:dev` to view documentation

Promote the database (replace COLOR with the color name from the above output)

    $ heroku pg:promote HEROKU_POSTGRESQL_COLOR
    > Promoting HEROKU_POSTGRESQL_COLOR to DATABASE_URL... done

Create a new branch for any configuration/setup changes needed

    $ git checkout -b production
    
Copy the `wp-config.php`

    $ cp wp-config-sample.php wp-config.php

Clear `.gitignore` and commit `wp-config.php`

    $ >.gitignore
    $ git add .
    $ git commit -m "initial commit for wordpress"

## Deploy to Heroku

Deploying your site to Heroku is fairly simple.  Because you are working in the production branch and you want your code to live in master branch on Heroku, you will issue the following command.

    $ git push heroku production:master
    > -----> Heroku receiving push
    > -----> PHP app detected
    > -----> Bundling Apache v2.2.19
    > -----> Bundling PHP v5.3.6
    > -----> Discovering process types
    >        Procfile declares types -> (none)
    >        Default types for PHP   -> web
    > -----> Compiled slug size is 24.9MB
    > -----> Launcing... done, v5
    >        http://mycoolsite.herokuapp.com deployed to Heroku
    >
    > To git@heroku:mycoolsite.git
    > * [new branch]    production -> master 

After deployment, navigate to your url that you setup and walk through the normal WordPress installation steps.

## Updating

Inevitably you are going to want to update your installation of WordPress as time goes on.  The maintainer of this repository is pretty timely in updating it for future releases of WordPress.  You will want to watch this repository for updates on GitHub and then follow these steps to update your installation.

    $ git pull origin master # Get the latest

Using the same branch name from our installation:

    $ git checkout production # Checkout your local branch
    $ git merge master # Merge latest
    $ git push heroku production:master # Update Heroku with your local changes.

WordPress needs to update the database. After push, navigate to:

    http://your-app-url.herokuapp.com/wp-admin

WordPress will prompt for updating the database to correspond to the newest version and then you'll be finished.

## Adding Themes and Plugins

Adding Themes and Plugins to your WordPress site that is hosted on Heroku is simple.  First add the folder for your theme or plugin to the appropriate directory ~/wp-content/themes || ~/wp-content/plugins.  Next you will need to commit your changes to your local git repository and then deploy to Heroku.

    $ git add --all
    $ git commit -m "adding my cool theme/plugin"
    $ git push heroku production:master

## Custom Domains

Heroku allows you to add custom domains to your site hosted with them.  To add your custom domain, enter in the follow commands.

    $ heroku domains:add www.example.com
    > Added www.example.com as a custom domain name to myapp.heroku.com

You'll also want to cover the non "www" side of the url.

    $ heroku domains:add example.com
    > Added example.com as a custom domain name to myapp.heroku.com

Once Heroku recognizes your custom domain(s) you'll then need to setup separate DNS A records for the following ip addresses to point to your domain:

    75.101.163.44
    75.101.145.87
    174.129.212.2

Once the DNS A records propagate, then simply test out your change by hitting the url in the browser to make sure you are good to go.  If you are in need of cheap DNS hosting then I would recommend [DNSimple](https://dnsimple.com/r/571e28804df06f).

The last step is updating your WordPress installation to recognize the new domain.  You'll need to open up the WordPress Admin Dashboard and go to Settings --> General.  From there just update the URL for the WordPress address and you're done.

If you find yourself running into problems, there is a guide posted in the Heroku Docs which can be found [here](https://devcenter.heroku.com/articles/custom-domains).

## Summary

I hope this post on helping you get free WordPress hosting on Heroku up and running was helpful.  If you found this useful, please feel free to share this article with your friends and followers.  Thanks!

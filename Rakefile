require 'rubygems'
require 'chronic'

desc 'create new post or bit. args: type (post, bit), title, future (# of days)'
# rake new title="New post title goes here" future=0 link="custom link goes here"
task :new do
  
  title = ENV["title"] || "New Title"
  future = ENV["future"] || 0
  slug = title.gsub(' ','-').downcase
  custom_link = ENV["link"] || ""
 
  if future.to_i < 3
    TARGET_DIR = "_posts"
  else
    TARGET_DIR = "_drafts"
  end
 
  if future.to_i.zero?
    filename = "#{Time.new.strftime('%Y-%m-%d')}-#{slug}.markdown"
  else
    stamp = Chronic.parse("in #{future} days").strftime('%Y-%m-%d')
    filename = "#{stamp}-#{slug}.markdown"
  end
  path = File.join(TARGET_DIR, filename)
  post = <<-HTML
--- 
layout: post
title: TITLE
published: true
status: publish
custom-link: CUSTOMLINK
author:
  login: admin
  email: matthew@idlefusion.com
  display_name: Matthew Strickland
  first_name: Matthew
  last_name: Strickland
---
 
HTML
  post.gsub!('TITLE', title).gsub!('CUSTOMLINK', custom_link)

  File.open(path, 'w') do |file|
    file.puts post
  end

  puts "new post generated in #{path}"

  sh "subl #{path}"

end
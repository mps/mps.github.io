require 'rubygems'
require 'chronic'
require 'yaml'

desc 'create new post or bit. args: type (post, bit), title, future (# of days)'
# rake new title="New post title goes here" future=0 link="custom link goes here"
task :new do  
  title = ENV["title"] || "New Title"
  future = ENV["future"] || 0
  slug = title.gsub(' ','-').downcase
  custom_link = ENV["link"] || ""
 
  if future.to_i > 0
    TARGET_DIR = "_drafts"
    published = "false"
  else
    TARGET_DIR = "_posts"
    published = "true"
  end
 
  if future.to_i.zero?
    date = "#{Time.new.strftime('%Y-%m-%d')}"
    filename = "#{date}-#{slug}.markdown"
  else
    date = Chronic.parse("in #{future} days").strftime('%Y-%m-%d')
    filename = "#{date}-#{slug}.markdown"
  end
  path = File.join(TARGET_DIR, filename)
  post = <<-HTML
--- 
layout: post
title: TITLE
published: PUBLISHED
custom-link: CUSTOMLINK
date: DATE
author:
  login: admin
  email: matthew@idlefusion.com
  display_name: Matthew Strickland
  first_name: Matthew
  last_name: Strickland
---
 
HTML
  post.gsub!('TITLE', title).gsub!('CUSTOMLINK', custom_link).gsub!('PUBLISHED', published).gsub!('DATE', date)

  File.open(path, 'w') do |file|
    file.puts post
  end

  puts "new post generated in #{path}"

  sh "subl #{path}"
end

# Thanks to http://brettterpstra.com/2013/01/18/scheduling-posts-2-the-rakening/
# for the inspiration :)

desc "Publish a draft"
task :publish do
  source_dir = File.dirname(__FILE__)
  file = choose_file(File.join(source_dir,'_drafts'))
  Process.exit unless file # no file selected

  # separate the YAML headers
  contents = File.read(file).split(/^---\s*$/)

  if contents.count < 3 # Expects the draft to be properly formatted
    puts "Invalid header format on post #{File.basename(file)}"
    Process.exit
  end
  
  # parse the YAML. So much better than regex search and replaces
  headers = YAML::load("---\n"+contents[1])
  content = contents[2].strip

  headers['published'] = true

  # write out the modified YAML and post contents back to the original file
  File.open(file,'w+') {|file| file.puts YAML::dump(headers) + "---\n" + content + "\n"}
  
  # move the file to the posts folder with a standardized filename
  target = file.gsub("_drafts", "_posts")
  mv file, target
  puts %Q{Published "#{headers['title']}" to #{target}}
end

# Creates a user selection menu from directory listing
def choose_file(dir)
  puts "Choose file:"
  @files = Dir["#{dir}/*"]
  @files.each_with_index { |f,i| puts "#{i+1}: #{f}" }
  print "> "
  num = STDIN.gets
  return false if num =~ /^[a-z ]*$/i
  file = @files[num.to_i - 1]
end
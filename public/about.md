---
layout: page
title: About
permalink: /about/
---

This is the base Jekyll theme. You can find out more info about customizing your Jekyll theme, as well as basic Jekyll usage documentation at [jekyllrb.com](https://jekyllrb.com/)

You can find the source code for Minima at GitHub:
[jekyll][jekyll-organization] /
[minima](https://github.com/jekyll/minima)

You can find the source code for Jekyll at GitHub:
[jekyll][jekyll-organization] /
[jekyll](https://github.com/jekyll/jekyll)


[jekyll-organization]: https://github.com/jekyll

## Javascript embedding

In most pages, a javascript code is both shown and run on a page, with only one source.
The source file is stored inside the `assets/js` directory (in the appropriate subdirectories).
The code is **run** using the `<script>` tag like so:
```html
{% raw %}<script src="{{ '/assets/js/path/to/file.js' | relative_url }}"></script>{% endraw %}
```
The `relative_url` is necessary because in deployment the `assets` folder
is going to be copied over to `_site`. 
To display the code on the html, a ruby script `_plugins/load_file_tag.rb` was added (written by ChatGPT)
```rb
module Jekyll
  class LoadFileTag < Liquid::Tag
    def initialize(tag_name, file, tokens)
      super
      @file = file.strip
    end

    def render(context)
      site = context.registers[:site]
      file_path = File.join(site.source, @file)
      if File.exist?(file_path)
        File.read(file_path)
      else
        "File not found: #{@file}"
      end
    end
  end
end

Liquid::Template.register_tag('loadfile', Jekyll::LoadFileTag)
```
The code can then be **displayed** by calling this plugin:
````ruby
```javascript
{% raw %}{% loadfile assets/js/path/to/file.js %}{% endraw %}
```
````
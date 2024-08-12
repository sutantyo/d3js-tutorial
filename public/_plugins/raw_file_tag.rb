module Jekyll
  class RawFileTag < Liquid::Tag
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

Liquid::Template.register_tag('rawfile', Jekyll::RawFileTag)
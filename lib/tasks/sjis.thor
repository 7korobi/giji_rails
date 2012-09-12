# -*- coding: utf-8 -*-

class Sjis < Thor
  desc "create", "create shift_jis data"
  def create
    Dir.glob("public/assets/*.js").each do |src|
      next if src["base.js"] || src["sow-base.js"]
      tgt = src.gsub "/assets/", "/javascripts/"
      puts "#{src} → #{tgt}"
      File.open(tgt ,'w:sjis:utf-8') do |f|
        text = File.open(src ,'r').read
        f.write text
      end
    end
  end
end

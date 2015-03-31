# -*- coding: utf-8 -*-
require 'fog'

class GijiVilWriter
  def initialize(vid)
    @vid = vid
  end

  def save
    Resque.enqueue(self.class, @vid)
  end

  @queue = :giji_freeze
  def self.perform  vid
    dir = "/www/giji_log/public_html/stories"
    system "wget -O #{dir}/#{vid}.html 'http://giji.check.jp/#{vid}/file'"
    system "wget -O #{dir}/all.html 'http://giji.check.jp/stories?folder=ALL'"
    system "(gzip -c #{dir}/#{vid}.html > #{dir}/#{vid}.html.gz)"
    system "(gzip -c #{dir}/all.html > #{dir}/all.html.gz)"

    meta = {
      content_type: 'text/html',
      content_encoding: 'gzip',
    }
    remotes = Fog::Storage.new(FOG.storage).directories.find{|o|o.key == "giji-assets"}.files
    remotes.create(key: "stories/#{vid}", body: File.open("#{dir}/#{vid}.html.gz"), public: true, metadata: meta)
    remotes.create(key: "stories/all",    body: File.open("#{dir}/all.html.gz"),    public: true, metadata: meta)

    target = "7korobi@s11.rs2.gehirn.jp:/home/7korobi/public_html/stories"
    system "scp #{dir}/#{vid}.html.gz #{target}/."
    system "scp #{dir}/all.html.gz    #{target}/."
  end
end

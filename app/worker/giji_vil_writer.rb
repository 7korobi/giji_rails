# -*- coding: utf-8 -*-
require 'fog'

class GijiVilWriter
  def initialize(vid)
    @vid = vid
  end

  def mecab_print
    mecab_each do |src|
      simple_view = %w[語彙 読み 語種 品詞 活用 不明].map{|key| "#{key} #{[src[key]].join(",")}"}.join(" /")
      puts "#{src["表現"][0]}\t///#{simple_view}"
    end
    nil
  end

  def mecab_each
    nm = Natto::MeCab.new
    Event.where(story_id: @vid).map(&:id).map do |event_id|
      Message.by_event_id(event_id).each do |msg|
        next unless msg.face_id 
        next unless msg.log
        next unless msg.logid

        log = msg.log.gsub("<br>","\n")
        logtype = msg.logid[0..1]
        nm.enum_parse(log).each do |o|
          表現 = [o.surface]
          読み = []
          品詞 = []
          活用 = []
          音韻 = []
          不明 = []
          品詞[0],品詞[1],品詞[2],品詞[3],活用[0],活用[1],読み[6],語彙,表現[1],読み[1],表現[2],読み[3],語種,音韻[0],音韻[1],音韻[2],音韻[3],読み[0],読み[4],読み[2],読み[5],不明[0],アクセント = o.feature.split(",", 23)

          item = {
            "語彙" => 語彙,
            "読み" => 読み.uniq,
            "表現" => 表現.uniq,
            "語種" => 語種,
            "品詞" => 品詞,
            "活用" => 活用,
            "不明" => 不明,
            "音韻" => 音韻,
            "アクセント" => アクセント,
            "face_id" => msg.face_id,
            "sow_auth_id" => msg.sow_auth_id,
            "logtype" => logtype,
            "name" => msg.name,
            "first_at" => msg.date,
            "last_at" => msg.date,
          }
          yield item
        end
      end
    end
  end

  def mecab_countup(src, hash, key)
    item = hash[key] || src.merge({"count" => 0})
    item["count"] += 1
    item["first_at"] = [item["first_at"], src["first_at"]].sort[ 0]
    item["last_at"]  = [item["last_at"],  src["last_at"] ].sort[-1]
    hash[key] = item
  end

  def mecab
    types = {}
    mecab_each do |src|
      mecab_countup src, types, src.values_at("logtype", "face_id", "sow_auth_id", "語彙").join(",")
    end
    yaml_path = "/www/giji_yaml/mecab/#{@vid}.yml"
    File.open(yaml_path, "w:utf-8") do |f|
      f.write types.map{|key, o| o }.sort_by{|o| -o["count"] }.to_yaml
    end
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

    new(vid).mecab
  end
end

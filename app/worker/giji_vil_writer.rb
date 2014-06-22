# -*- coding: utf-8 -*-

class GijiVilWriter
  def initialize(vid)
    @vid = vid
  end

  def save
    Resque.enqueue(self.class, @vid)
  end

  @queue = :giji_freeze
  def self.perform  vid
    system "/utage/ssh-gehirn " + [
      "cd /home/7korobi/public_html/stories",
      "wget -O #{vid}.html 'http://giji.check.jp/#{vid}/file'",
      "(gzip -c #{vid}.html > #{vid}.html.gz)",
      "rm #{vid}.html",
    ].join(";").inspect
  end
end

# -*- coding: utf-8 -*-
class Tag
  include Giji
  key :name
  field :name
  timestamp :at

  YAHOO_AID   = OMNI_AUTH['ride']['yahoo']['aid']
  UNIQ_FILTER = '8|9'

  def self.parse(str)
    url   = "http://jlp.yahooapis.jp/MAService/V1/parse?appid=#{YAHOO_AID}&uniq_by_baseform=true&results=ma,uniq&uniq_filter=#{UNIQ_FILTER}&sentence=#{str}"
    agent = Mechanize.new
    page  = agent.get(url)
    doc   = Hpricot(page.body)
#    ma_results = (doc/'ma_result     word reading').map(&:inner_text)
#    uniq_results = (doc/'uniq_result word reading').map(&:inner_text)
    { :ma   => (doc/'ma_result   word surface').map(&:inner_text),
      :uniq => (doc/'uniq_result word surface').map(&:inner_text)
    }
  end

  def self.find_or_create_all(parse_str)
    parse(parse_str)[:uniq].map do |tag|
      where(name: tag).first || new(name: tag)
    end
  end

  def self.cookpad_scenario
    cookpad = Mechanize.new.get("http://cookpad.com/recipe/1506671")
    steps = cookpad.search('#steps p').map(&:inner_text)

    steps.each do |step|
      time = 0
      parse(step)[:ma].each_cons(2) do |num, span|
        span = {'秒' => 1,'分' => 60}[span].to_i
        if span > 0 && num.to_i > 0
          time = (num.to_i * span).seconds
        end
      end
      p [time, step]
    end
  end

  def self.parse(str)
    url   = "http://jlp.yahooapis.jp/MAService/V1/parse?appid=#{YAHOO_AID}&uniq_by_baseform=true&results=ma,uniq&uniq_filter=#{UNIQ_FILTER}&sentence=#{str}"
    agent = Mechanize.new
    page  = agent.get(url)
    doc   = Hpricot(page.body)
#    ma_results = (doc/'ma_result     word reading').map(&:inner_text)
#    uniq_results = (doc/'uniq_result word reading').map(&:inner_text)
    { :ma   => (doc/'ma_result   word surface').map(&:inner_text),
      :uniq => (doc/'uniq_result word surface').map(&:inner_text)
    }
  end

end


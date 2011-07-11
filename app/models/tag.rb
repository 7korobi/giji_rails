# -*- coding: utf-8 -*- 
class Tag 
  include Giji
  key :name
  field :name
  timestamp :at
  references_many :articles
  key :name
  
  YAHOO_AID   = GIJI['ride']['yahoo']['aid']
  UNIQ_FILTER = '9|10'
  
  def self.parse(str)
    url   = "http://jlp.yahooapis.jp/MAService/V1/parse?appid=#{YAHOO_AID}&results=ma,uniq&uniq_filter=#{UNIQ_FILTER}&sentence=#{str}"
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
end


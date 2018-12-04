require 'rss'
require 'uri'
require 'open-uri'
require 'nokogiri'

CITES = %w[
  http://jsfun525.gamedb.info/wiki/?cmd=rss
  http://melon-cirrus.sakura.ne.jp/wiki/?cmd=rss
]

def to_options(tags, mode, *keys)
  keys.map do | key |
    if tags[key]
      case mode
      when "full"
        "#{key} #{tags[key]}"
      when "value"
        "#{tags[key]}"
      end
    else
      nil
    end
  end.select do |str|
    case str
    when nil
      false
    else
      0 < str.size
    end
  end
end


class RssScan
  def self.each_plans
    CITES.each do |url|
      RSS::Parser.parse(url)&.items&.each do | o |
        html = Nokogiri::HTML open o.link
        tags = {}
        html.css("#body ul > li").reverse.map do | li |
          li.children.inner_text.split(/\n/).map do |line|
            k, v = line.split(/：/).map(&:strip)
            if k && v
              tags[k] = v
            end
          end
        end
        html.css("#body table > tbody").reverse.map do | table |
          table.css("tr").reverse.map do | tr |
            k, v = tr.css("td").map do | td |
              td.children.inner_text.gsub(/ \n/," ")
            end
            if k && v
              tags[k] = v
            end 
          end
        end

        item = {
          link:  o.link,
          title: o.title,
          write_at: Time.parse( o.description ),
          name:  to_options( tags, "value", *%w[村名  村の名前])[0],
          state: to_options( tags, "value", *%w[開催国  開催場所])[0],
          chip:  to_options( tags, "value", *%w[キャラセット  登場人物  使用チップ  チップ  チップ指定])[0],
          sign:  to_options( tags, "value", *%w[主催者  企画人  企画人（代表）  村建て  村建人  村建て人  司会])[0],
          card: [
            to_options( tags, "value", *%w[編成  役職  役職配分])[0],
            to_options( tags, "value", *%w[募集人数  定員  人数構成])[0],
          ].compact,
          upd: {
            description: to_options( tags, "value", *%w[更新  更新間隔＆時刻])[0],
            time:        to_options( tags, "value", *%w[更新時刻 更新時間])[0],
            interval: tags["更新間隔"],
            prologue: tags["初日相談時間"],
            start:    to_options( tags, "value", *%w[
              開催時期
              開催日程
              開催日
              開始日時
              開始日
              村開始日
              村建て日
              村建て日時
              村建日時
            ])[0],
          },
          lock: to_options( tags, "full", *%w[
            参加PW
            参加パスワード
          ]) + to_options( tags, "value", *%w[
            募集条件
            参加制限
          ]),
          flavor: to_options( tags, "value", *%w[
            閲覧制限
            表現＆描写
            描写レート
            レーティング
          ]) + to_options( tags, "full", *%w[
            年齢制限
            文章系
            村内イメージソング
            イメージソング
            テーマソング
            村の方針
          ]),
          options: [
            tags["種別"],
            tags["発言制限"],
          ].compact + to_options( tags, "full", *%w[
            秘話＆幽界トーク
            act使用 act
            Actの用途
            act、メモ act＆飴 
            飴の使用 促し(飴)使用
            メモ メモの用途
            投票 投票方法
            コミット コミット可否
            開始方法
            ランダム
            能力・投票ランダム
            屍食鬼化
            ＩＤ公開
            投票･遺言CO
            見物人の扱い
            立会
            狩人の手ごたえ 襲撃手応え 護衛成功手応え 護衛手応 護衛手応え 手ごたえ 
            役職希望 
            表情差分
            名前変更
            長期戦績
          ]),
        }
        %w[
          村名  村の名前
          開催国  開催場所
          キャラセット 登場人物 使用チップ チップ チップ指定
          主催者 企画人 企画人（代表） 村建て 村建人 村建て人 司会
          編成 役職 役職配分
          募集人数 定員 人数構成
          更新 更新間隔＆時刻 更新時間
          更新間隔
          更新時刻
          更新時間
          初日相談時間
          開催時期 開催日程 開催日 開始日時 開始日 村開始日 村建て日 村建て日時 村建日時

          募集条件  参加制限
          参加PW
          参加パスワード
          
          閲覧制限
          表現＆描写
          描写レート
          レーティング

          年齢制限
          文章系
          村内イメージソング
          イメージソング
          テーマソング
          村の方針

          種別
          発言制限

          秘話＆幽界トーク
          act使用 act
          Actの用途
          act、メモ act＆飴 
          飴の使用 促し(飴)使用
          メモ メモの用途
          投票 投票方法
          コミット コミット可否
          開始方法
          ランダム
          能力・投票ランダム
          屍食鬼化
          ＩＤ公開
          投票･遺言CO
          見物人の扱い
          立会
          狩人の手ごたえ 襲撃手応え 護衛成功手応え 護衛手応 護衛手応え 手ごたえ 
          役職希望 
          表情差分
          名前変更
          長期戦績
        ].each {|key| tags.delete( key ) }
        item[:tags] = tags.to_a
        if item[:name]
          yield item
        end
      end
    end
  end
end

# -*- coding: utf-8 -*-

class Config < Thor
  desc "create", "create config to other server"
  def create
    require 'active_support/all'
    require 'fileutils'
    require 'yaml'
    require 'erubis'
    require './lib/const'
    require './lib/rsync'

    ConfigCreate.new.activate{|files| true }
  end

  desc "test", "create config to other server"
  def test
    require 'active_support/all'
    require 'fileutils'
    require 'yaml'
    require 'erubis'
    require './lib/const'
    require './lib/rsync'

    ConfigCreate.new.activate do |files|
      files && files['lapp'] && files['lapp'][/testbed$/]
    end
  end

  class WebHtml
    def render_exec
      @content_for_layout = Erubis::Eruby.new(File.open(@rhtml_content){|f| f.read}).evaluate(self)
      @content_for_layout = Erubis::Eruby.new(File.open(@rhtml_layout ){|f| f.read}).evaluate(self) if @rhtml_layout
    end
    def to_s
      render_exec
      return @content_for_layout
    end
    def render( ml = :html)
      render_exec
      print "Content-Type: text/%s\r\n\r\n"%[ ml.to_s ]
      print @content_for_layout
    end
  end


  class ConfigCreate < WebHtml
    def activate( params = {} )
      @params = params

      saycnt_lobby = <<'_PERL_'
    # 発言制限
    my %saycnt_lobby = (
      CAPTION     => 'ロビー',
      HELP        => '',
      COST_SAY    => 'none', # バイト勘定
      COST_MEMO   => 'none', # 回数勘定
      COST_ACT    => 'none', # 回数勘定
      RECOVERY    =>    1, # 発言復活
      MAX_SAY     => 1000, # 発言/憑依回数
      MAX_TSAY    =>  700, # 独り言発言回数
      MAX_SPSAY   =>  700, # 共鳴発言回数
      MAX_WSAY    => 3000, # 囁き/念話発言回数
      MAX_GSAY    => 2000, # うめき発言回数
      MAX_PSAY    => 9999, # プロローグ発言回数
      MAX_ESAY    => 9999, # エピローグ発言回数
      MAX_SAY_ACT =>   99, # アクション回数
      ADD_SAY     =>  200, # 促しで増える発言回数
      MAX_ADDSAY  =>    0, # 促しの回数
      MAX_MESCNT  => 1000, # 一発言の最大文字数
      MAX_MESLINE =>   20, # 一発言の最大行数
    );
_PERL_

      saycnt_game = <<'_PERL_'
    # 発言制限
    my %saycnt_say5x200 = (
      CAPTION     => '寡黙への挑戦',
      HELP        => ' （24h回復） 200字x5回/5act',
      COST_SAY    => 'count', # 回数勘定
      COST_MEMO   => 'none',  # 無制限
      COST_ACT    => 'count', # 回数勘定
      RECOVERY    =>   1, # 発言復活
      MAX_SAY     =>   5, # 発言/憑依回数
      MAX_TSAY    =>   5, # 独り言発言回数
      MAX_SPSAY   =>   5, # 共鳴発言回数
      MAX_WSAY    =>  10, # 囁き/念話発言回数
      MAX_GSAY    =>  10, # うめき発言回数
      MAX_PSAY    =>  10, # プロローグ発言回数
      MAX_ESAY    => 999, # エピローグ発言回数
      MAX_SAY_ACT =>   5, # アクション回数
      ADD_SAY     =>   0, # 促しで増える発言回数
      MAX_ADDSAY  =>   0, # 促しの回数
      MAX_MESCNT  => 200, # 一発言の最大文字数
      MAX_MESLINE =>  10, # 一発言の最大行数
    );

    # 発言制限
    my %saycnt_say5x300 = (
      CAPTION     => '小論文への挑戦',
      HELP        => ' （24h回復） 300字x5回/15act',
      COST_SAY    => 'count', # 回数勘定
      COST_MEMO   => 'none',  # 無制限
      COST_ACT    => 'count', # 回数勘定
      RECOVERY    =>   1, # 発言復活
      MAX_SAY     =>   5, # 発言/憑依回数
      MAX_TSAY    =>   5, # 独り言発言回数
      MAX_SPSAY   =>   5, # 共鳴発言回数
      MAX_WSAY    =>  10, # 囁き/念話発言回数
      MAX_GSAY    =>  10, # うめき発言回数
      MAX_PSAY    =>  10, # プロローグ発言回数
      MAX_ESAY    => 999, # エピローグ発言回数
      MAX_SAY_ACT =>  15, # アクション回数
      ADD_SAY     =>   0, # 促しで増える発言回数
      MAX_ADDSAY  =>   0, # 促しの回数
      MAX_MESCNT  => 300, # 一発言の最大文字数
      MAX_MESLINE =>  10, # 一発言の最大行数
    );

    my %saycnt_saving = (
      CAPTION     => '節約',
      HELP        => '250字x20回/15act',
      COST_SAY    => 'count', # 回数勘定
      COST_MEMO   => 'count', # 回数勘定
      COST_ACT    => 'count', # 回数勘定
      RECOVERY    =>   0, # 発言復活
      MAX_SAY     =>  20, # 発言/憑依回数
      MAX_TSAY    =>  10, # 独り言発言回数
      MAX_SPSAY   =>  10, # 共鳴発言回数
      MAX_WSAY    =>  30, # 囁き/念話発言回数
      MAX_GSAY    =>  20, # うめき発言回数
      MAX_PSAY    =>  20, # プロローグ発言回数
      MAX_ESAY    => 999, # エピローグ発言回数
      MAX_SAY_ACT =>  15, # アクション回数
      ADD_SAY     =>   0, # 促しで増える発言回数
      MAX_ADDSAY  =>   0, # 促しの回数
      MAX_MESCNT  => 250, # 一発言の最大文字数
      MAX_MESLINE =>  10, # 一発言の最大行数
    );

    my %saycnt_euro = (
      CAPTION     => '欧州',
      HELP        => '（24h回復） 800字x30回/30act',
      COST_SAY    => 'count', # 回数勘定
      COST_MEMO   => 'none',  # 無制限
      COST_ACT    => 'none',  # 無制限
      RECOVERY    =>   1, # 発言復活
      MAX_SAY     =>  30, # 発言/憑依回数
      MAX_TSAY    => 999, # 独り言発言回数
      MAX_SPSAY   => 999, # 共鳴発言回数
      MAX_WSAY    => 999, # 囁き/念話発言回数
      MAX_GSAY    => 999, # うめき発言回数
      MAX_PSAY    =>  30, # プロローグ発言回数
      MAX_ESAY    => 999, # エピローグ発言回数
      MAX_SAY_ACT =>  30, # アクション回数
      ADD_SAY     =>   0, # 促しで増える発言回数
      MAX_ADDSAY  =>   0, # 促しの回数
      MAX_MESCNT  => 800, # 一発言の最大文字数
      MAX_MESLINE =>  20, # 一発言の最大行数
    );

    my %saycnt_tiny = (
      CAPTION     => 'たりない',
      HELP        => '（24h回復）（メモは20pt） 333pt/9act',
      COST_SAY    => 'point', # バイト勘定
      COST_MEMO   => 'point', # 20pt勘定
      COST_ACT    => 'count', # 回数勘定
      RECOVERY    =>    1, # 発言復活
      MAX_SAY     =>  333, # 発言/憑依pt数
      MAX_TSAY    =>  999, # 独り言発言pt数
      MAX_SPSAY   =>  333, # 共鳴発言pt数
      MAX_WSAY    =>  999, # 囁き/念話発言pt数
      MAX_GSAY    =>  999, # うめき発言pt数
      MAX_PSAY    =>  999, # プロローグ発言pt数
      MAX_ESAY    => 9999, # エピローグ発言pt数
      MAX_SAY_ACT =>    9, # アクション回数
      ADD_SAY     =>    0, # 促しで増える発言pt数
      MAX_ADDSAY  =>    0, # 促しの回数
      MAX_MESCNT  =>  300, # 一発言の最大文字数
      MAX_MESLINE =>   10, # 一発言の最大行数
    );

    my %saycnt_weak = (
      CAPTION     => 'むりせず',
      HELP        => '（24h回復）（メモは20pt） 777pt/15act',
      COST_SAY    => 'point', # バイト勘定
      COST_MEMO   => 'point', # 20pt勘定
      COST_ACT    => 'count', # 回数勘定
      RECOVERY    =>    1, # 発言復活
      MAX_SAY     =>  777, # 発言/憑依pt数
      MAX_TSAY    =>  777, # 独り言発言pt数
      MAX_SPSAY   =>  777, # 共鳴発言pt数
      MAX_WSAY    =>  999, # 囁き/念話発言pt数
      MAX_GSAY    =>  999, # うめき発言pt数
      MAX_PSAY    => 1200, # プロローグ発言pt数
      MAX_ESAY    => 9999, # エピローグ発言pt数
      MAX_SAY_ACT =>   15, # アクション回数
      ADD_SAY     =>    0, # 促しで増える発言pt数
      MAX_ADDSAY  =>    0, # 促しの回数
      MAX_MESCNT  =>  600, # 一発言の最大文字数
      MAX_MESLINE =>   15, # 一発言の最大行数
    );

    my %saycnt_juna = (
      CAPTION     => 'しんもん',
      HELP        => '（24h回復） 1200pt/24act',
      COST_SAY    => 'point', # バイト勘定
      COST_MEMO   => 'count', # 回数勘定
      COST_ACT    => 'count', # 回数勘定
      RECOVERY    =>    1, # 発言復活
      MAX_SAY     => 1200, # 発言/憑依pt数
      MAX_TSAY    =>  700, # 独り言発言pt数
      MAX_SPSAY   =>  700, # 共鳴発言pt数
      MAX_WSAY    => 3000, # 囁き/念話発言pt数
      MAX_GSAY    => 2000, # うめき発言pt数
      MAX_PSAY    => 2000, # プロローグ発言pt数
      MAX_ESAY    => 9999, # エピローグ発言pt数
      MAX_SAY_ACT =>   24, # アクション回数
      ADD_SAY     =>  200, # 促しで増える発言pt数
      MAX_ADDSAY  =>    0, # 促しの回数
      MAX_MESCNT  => 1000, # 一発言の最大文字バイト数
      MAX_MESLINE =>   20, # 一発言の最大行数
    );
_PERL_

      saycnt_all = <<'_PERL_' + saycnt_game
    # 発言制限
    my %saycnt_wbbs = (
      CAPTION     => '人狼BBS',
      HELP        => '200字x20回',
      COST_SAY    => 'count', # 回数勘定
      COST_MEMO   => 'none',  # 無制限
      COST_ACT    => 'count', # 回数勘定
      RECOVERY    =>   0, # 発言復活
      MAX_SAY     =>  20, # 発言/憑依回数
      MAX_TSAY    =>   5, # 独り言発言回数
      MAX_SPSAY   =>  20, # 共鳴発言回数
      MAX_WSAY    =>  40, # 囁き/念話発言回数
      MAX_GSAY    =>  20, # うめき発言回数
      MAX_PSAY    =>  20, # プロローグ発言回数
      MAX_ESAY    => 999, # エピローグ発言回数
      MAX_SAY_ACT =>   0, # アクション回数
      ADD_SAY     =>   0, # 促しで増える発言回数
      MAX_ADDSAY  =>   0, # 促しの回数
      MAX_MESCNT  => 200, # 一発言の最大文字数
      MAX_MESLINE =>   5, # 一発言の最大行数
    );
_PERL_

      saycnt_braid = <<'_PERL_'
    my %saycnt_weak = (
      CAPTION     => 'むりせず',
      HELP        => '（24h回復）（メモは20pt） 600pt++100pt/15act',
      COST_SAY    => 'point', # バイト勘定
      COST_MEMO   => 'point', # 20pt勘定
      COST_ACT    => 'count', # 回数勘定
      RECOVERY    =>    1, # 発言復活
      MAX_SAY     =>  600, # 発言/憑依pt数
      MAX_TSAY    =>  600, # 独り言発言pt数
      MAX_SPSAY   =>  600, # 共鳴発言pt数
      MAX_WSAY    => 1000, # 囁き/念話発言pt数
      MAX_GSAY    => 1000, # うめき発言pt数
      MAX_PSAY    => 1200, # プロローグ発言pt数
      MAX_ESAY    => 9999, # エピローグ発言pt数
      MAX_SAY_ACT =>   15, # アクション回数
      ADD_SAY     =>  100, # 促しで増える発言pt数
      MAX_ADDSAY  =>    2, # 促しの回数
      MAX_MESCNT  =>  600, # 一発言の最大文字数
      MAX_MESLINE =>   15, # 一発言の最大行数
    );

    my %saycnt_juna = (
      CAPTION     => 'しんもん',
      HELP        => '（24h回復） 800pt++200pt/24act',
      COST_SAY    => 'point', # バイト勘定
      COST_MEMO   => 'count', # 回数勘定
      COST_ACT    => 'count', # 回数勘定
      RECOVERY    =>    1, # 発言復活
      MAX_SAY     =>  800, # 発言/憑依pt数
      MAX_TSAY    =>  700, # 独り言発言pt数
      MAX_SPSAY   =>  700, # 共鳴発言pt数
      MAX_WSAY    => 3000, # 囁き/念話発言pt数
      MAX_GSAY    => 2000, # うめき発言pt数
      MAX_PSAY    => 2000, # プロローグ発言pt数
      MAX_ESAY    => 9999, # エピローグ発言pt数
      MAX_SAY_ACT =>   24, # アクション回数
      ADD_SAY     =>  200, # 促しで増える発言pt数
      MAX_ADDSAY  =>    2, # 促しの回数
      MAX_MESCNT  => 1000, # 一発言の最大文字バイト数
      MAX_MESLINE =>   20, # 一発言の最大行数
    );

    my %saycnt_vulcan = (
      CAPTION     => 'いっぱい',
      HELP        => '（24h回復） 1000pt+++300pt/36act',
      COST_SAY    => 'point', # バイト勘定
      COST_MEMO   => 'count', # 回数勘定
      COST_ACT    => 'count', # 回数勘定
      RECOVERY    =>    1, # 発言復活
      MAX_SAY     => 1000, # 通常発言pt数
      MAX_TSAY    => 1000, # 独り言発言pt数
      MAX_SPSAY   => 1500, # 共鳴発言pt数
      MAX_WSAY    => 4000, # 囁き発言pt数
      MAX_GSAY    => 3000, # うめき発言pt数
      MAX_PSAY    => 3000, # プロローグ発言pt数
      MAX_ESAY    => 9999, # エピローグ発言pt数
      MAX_SAY_ACT =>   36, # アクションpt数
      ADD_SAY     =>  300, # 促しで増える発言pt数
      MAX_ADDSAY  =>    3, # 促しのpt数
      MAX_MESCNT  => 1000, # 一発言の最大文字バイト数
      MAX_MESLINE =>   20, # 一発言の最大行数
    );

    my %saycnt_infinity = (
      CAPTION     => 'むげん',
      HELP        => '∞pt/∞act',
      COST_SAY    => 'none', # バイト勘定
      COST_MEMO   => 'none', # 回数勘定
      COST_ACT    => 'none', # 回数勘定
      RECOVERY    =>    1, # 発言復活
      MAX_SAY     => 9999, # 発言/憑依回数
      MAX_TSAY    => 9999, # 独り言発言回数
      MAX_SPSAY   => 9999, # 共鳴発言回数
      MAX_WSAY    => 9999, # 囁き/念話発言回数
      MAX_GSAY    => 9999, # うめき発言回数
      MAX_PSAY    => 9999, # プロローグ発言回数
      MAX_ESAY    => 9999, # エピローグ発言回数
      MAX_SAY_ACT =>   99, # アクション回数
      ADD_SAY     => 9999, # 促しで増える発言回数
      MAX_ADDSAY  =>    0, # 促しの回数
      MAX_MESCNT  => 1000, # 一発言の最大文字数
      MAX_MESLINE =>   20, # 一発言の最大行数
    );
_PERL_

    saycnt_test = saycnt_braid + saycnt_all;

    rescue => err
      @error = err.to_s
      p @error
    ensure
      @cfg_order = [
        :USERID_NPC     ,
        :USERID_ADMIN   ,
        :ENABLED_VMAKE  ,
        :URL_SW         ,
        :NAME_HOME      ,
        :RULE           ,
        :MAX_VILLAGES   ,
        :TIMEOUT_SCRAP  ,
        :TIMEOUT_ENTRY  ,
        :TOPPAGE_INFO   ,
        :BASEDIR_CGIERR ,
        :BASEDIR_CGI    ,
        :BASEDIR_DAT    ,
        :BASEDIR_DOC    ,
      ]
      @enable_order = [
        :ENABLED_DELETED      ,
        :ENABLED_WINNER_LABEL ,

        :ENABLED_MAX_ESAY     ,
        :ENABLED_RANDOMTARGET ,
        :ENABLED_SUDDENDEATH  ,

        :ENABLED_BITTY        ,
        :ENABLED_PERMIT_DEAD  ,
        :ENABLED_UNDEAD       ,

        :ENABLED_AIMING       ,
        :ENABLED_MOB_AIMING   ,

        :ENABLED_AMBIDEXTER   ,
        :ENABLED_SUICIDE_VOTE ,
        :DEFAULT_VOTETYPE     ,
      ]
      @maxsize_order = [
        :MAXSIZE_ACTION   ,
        :MAXSIZE_MEMOCNT  ,
        :MAXSIZE_MEMOLINE ,
      ]


      result  = {}

      rhtml_info_out = "/www/giji_log/sow/_info.pl"
      @rhtml_content = "./app/views/sow/_info.pl.erb"
      File.open(rhtml_info_out ,'w:sjis:utf-8'){|f| f.write( to_s ) }
      FileUtils.chmod( 0666, rhtml_info_out )

      GAME.each_pair do |folder,cfg|
        config           = cfg['config'] || next
        rhtml_config_out = config['pl']  || next

        @rhtml_content,@cd_default,@maxsize,@saycnt_lists,@saycnt_orders,@games,@csids,@trsids,@path,@cfg,@enable,@is_angular = [config['erb'], config['cd_default'], config['maxsize'], config['saycnt'], config['saycnt'], config['game'], config['csid'], config['trsid'], config['path'], config['cfg'], config['enable'], config['is_angular']]
        chk_braid = 0 < (@saycnt_lists & ['vulcan','infinity'] ).size
        chk_all   = 0 < (@saycnt_lists & ['wbbs','euro']       ).size
        chk_lobby = 0 < (@saycnt_lists & ['lobby']             ).size
        @saycnt   = saycnt_lobby  if  chk_lobby
        @saycnt   = saycnt_braid  if  chk_braid
        @saycnt   = saycnt_all    if  chk_all
        @saycnt   = saycnt_test   if  chk_braid && chk_all
        @saycnt   = saycnt_game   unless chk_lobby || chk_braid || chk_all

        result[folder] = to_s

        File.open(rhtml_config_out ,'w:sjis:utf-8'){|f| f.write( result[folder] ) }
        FileUtils.chmod( 0666, rhtml_config_out )
      end

      rsync = Giji::RSync.new
      rsync.each do |folder, protocol, set|
        next unless yield(set['files'])
        rsync.put(protocol, set, '_info.pl', :lsow, :config)
      end

      rsync.each do |folder, protocol, set|
        next unless GAME[folder]  &&  GAME[folder][:config]
        next unless yield(set['files'])
        rhtml_config_out = GAME[folder][:config][:pl]
        rsync.put(protocol, set, 'config.pl', :ldata, :config)
      end

      rsync.exec
    end
  end
end

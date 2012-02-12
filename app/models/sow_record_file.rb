# -*- coding: utf-8 -*-

class SowRecordFile
  def self.account( path, fname )
    res = []
    scanner = self.new
    sow_each(path+'/'+fname) do | line |
      scanner.cgi_scan_by_line(nil,nil,nil, ["uid"],line) do |item|
        res.push item
      end
    end
    res
  end
  def self.village( path, fname, folder, vid )
    res = []
    scanner = self.new
    sow_each(path+'/'+fname) do | line |
      scanner.cgi_scan_by_line(folder,vid,nil, ["uid","makeruid"],line) do |item|
        res.push item
      end
    end
    res
  end
  def self.log( path, fname, folder, vid, turn )
    res = []
    scanner = self.new
    sow_each(path+'/'+fname) do | line | 
      scanner.cgi_scan_by_line(folder,vid,turn, ["logid"],line) do |item|
        next unless item.remoteaddr
        next unless item.agent
        next unless item.uid

        case item.mestype 
        when 1,2
          item.logsubid = 'I'
        end
        res.push item
      end
    end
    res
  end
  def self.memo( path, fname, folder, vid, turn )
    res = []
    scanner = self.new
    sow_each(path+'/'+fname) do | line | 
      scanner.cgi_scan_by_line(folder,vid,turn, ["logid"],line) do |item|
        next unless item.remoteaddr
        next unless item.agent
        next unless item.uid
        
        case item.mestype
        when 1
          item.mestype = 3
        when 2
          item.mestype = 6
        else
          # not to do.
        end
        res.push item
      end
    end
    res
  end
  
  def self.sow_each(path)
    open(path, 'r:windows-31j').each do | line |
      line.chomp!
      yield line
    end
  rescue Encoding::UndefinedConversionError => e
    STDERR.puts e.inspect
  rescue Encoding::InvalidByteSequenceError => e
    STDERR.puts e.inspect
  end

  def self.out?(vid,force, timeout,old)
    return false if force.include? vid 
    return false if old < timeout
    return true
  end

  def cgi_scan_by_line(folder,vid,turn, keyword, line)
    convert_val = {'_none_' => nil,'_null_' => nil}
    begin
      ary = line.split('<>').map! do |exp|
        if convert_val.has_key?(exp)
          then convert_val[exp]
        else exp
        end
      end
    rescue Exception => err
      STDERR.puts line.inspect
      STDERR.puts err.inspect
      ary = []
    end
    if keyword.index( ary[0] )
      @keys = ary.map(&:to_sym).map{|key|
        case key
        when :modifiedbsay
          :modifiedxsay
        when :cntoura
          :cntaura
        else
          key
        end
      }
      name = case @keys[0]
             when :uid
               if vid
               then 'SowRecordFileUser'
               else 'SowRecordFileAccount'
               end
             when :makeruid
               'SowRecordFileVil'
             when :logid
               'SowRecordFileLog'
             else
               'SowRecordFile'
             end
      prefix = []
      prefix.unshift :folder  if folder
      prefix.unshift :vid     if vid
      prefix.unshift :turn    if turn
      @struct = Struct.new( * ([name] + prefix + @keys) )
    elsif @keys
      item = @struct.new
      item.folder = folder if folder
      item.vid    = vid    if vid
      item.turn   = turn   if turn
      @keys.each_with_index do |key_sym,i| val = ary[i]
        key = key_sym.to_s
        if ! val
          next
        elsif [ :overhear, ].index( key_sym )
          next
        elsif [ :date,
            :updateddt,   :nextupdatedt, :nextchargedt, :nextcommitdt, :scraplimitdt,
            :entrieddt,   :limitentrydt,
            :modifiedsay, :modifiedwsay, :modifiedgsay, :modifiedspsay, :modifiedxsay, :modifiedvsay, :modifiedbsay,
            :modified,
          ].index( key_sym )
          item[key_sym] = Time.at( val.to_i )
        elsif key[/^cnt/]
          item[key_sym] = val.to_i
        elsif [
            :say,:tsay,:spsay,:wsay,:xsay,:gsay,:bsay,:psay,:esay,
            :say_act,:actaddpt,:saidcount,:saidpoint,:countinfosp,:countthink,
            :lastwritepos,
            :vote1,:vote2,:role1,:role2,:gift1,:gift2,:vote,:target,:target2,
            :gift,:role,:rolestate,:rolesubid,:selrole,:deathday,
            :mestype, :monospace,
            :commit, :draftmestype, :draftmspace, :zapcount, :clearance
          ].index( key_sym )
          item[key_sym] = val.to_i
          item[key_sym] = val.to_i - 0x10000000000000000  if  0xffffffff00000000 < val.to_i 
        else
          item[key_sym] = (val.to_s.encode('UTF-8')  rescue  '- invisible text -')
        end
      end
      begin
        yield item
      rescue Exception => err
        STDERR.puts item.inspect
        STDERR.puts err.inspect
      end
    else
    end
  end


  def self.cgi_scan_by_folder(path,folder, timeout =  60*60*24*365*2009, force=[])
    Dir.new(path).each do | fname |
      next  if  0 == File.size(path+'/'+fname) 
      next  if  /vil.cgi/ === fname
      cgi_scan_by_folder_mongo(path,folder,fname, timeout, force)
    end
  end

  def self.cgi_scan_by_folder_active(path,folder, timeout =  60*60*24*365*2009, force=[])
    Dir.new(path).each do | fname |
      next  if  0 == File.size(path+'/'+fname) 
      next  unless  /vil.cgi/ === fname
      cgi_scan_by_folder_mongo(path,folder,fname, timeout, force)
    end
  end

  def self.cgi_scan_by_folder_mongo(path,folder,fname, timeout, force)
    vid  = fname[0..3].to_i
    turn = fname[5..6].to_i
    old  = WATCH[:time] - File.mtime(path+'/'+fname)

    village      = {:folder => folder,:vid => vid}
    village_turn = {:folder => folder,:vid => vid,:turn => turn}
    return if out? vid, force, timeout, old

    p village_turn.merge(:old => old/60/60, :file => fname)

    @keys = nil
    case fname
    when /vil.cgi/
      village_to_mongo path, fname, folder, vid
    when /logcnt.cgi/
    when /log.cgi/
      source = log( path, fname, folder, vid, turn )
      message_to_mongo( fname, source, folder, vid, turn )
    when /memo.cgi/
      source = memo( path, fname, folder, vid, turn )
      message_to_mongo( fname, source, folder, vid, turn )
    when /memoidx.cgi/
    when /logidx.cgi/
    else
    end
  end

  def self.village_to_mongo path, fname, folder, vid
      village( path, fname, folder, vid ).each do |o|
        case o.class.name
        when 'Struct::SowRecordFileUser'
          story = SowVillage.where( folder: o.folder, vid: o.vid ).first
          next unless story
          event = story.events.sort_by(&:turn).last
          next unless event

          STDERR.puts [:debug, o].inspect  if  o.role == nil

          potof = event.potofs.where( sow_auth_id: o.uid ).first
          potof ||= SowUser.new( 
            sow_auth_id: o.uid,
            face_id: o.cid,
            csid:    o.csid.split('_')[0],
            jobname: o.jobname,
            name:    name,

            history:  o.history,

            select:   SOW_RECORD[folder][:roles][ o.selrole ],

            live:      o.live,
            deathday:  o.deathday,

            role: [ SOW_RECORD[folder][:roles][o.role.to_i] ]
          )
          face_name = Face.find(o.cid).name  rescue  '***'
          name = if (0 < o.postfix.to_i  rescue  false)
                   [%w[IR R O Y G B I V UV][o.clearance], face_name, o.postfix].join('-')
                 else
                   face_name
                 end
          potof.zapcount   = o.zapcount    rescue  nil
          potof.pseudolove = o.pseudolove  rescue  nil
          potof.clearance  = o.clearance   rescue  nil
          potof.rolestate  = o.rolestate   rescue  nil

          potof.love  = o.love   rescue  nil
          potof.sheep = o.sheep  rescue  nil
            
          gift = SOW_RECORD[folder][:gifts][o.gift]  rescue  nil
          potof.role.push( gift )  if  gift
          
          potof.overhear    = o.overhear.split('/')    || []  rescue  []
          potof.bonds       = o.bonds.split('/')       || []  rescue  []
          potof.pseudobonds = o.pseudobonds.split('/') || []  rescue  []

          say = Hash.new
          dt  = Hash.new
          o.members.each do |key|
            case key
            when /say/
              say[key] = o[key]
            when /dt$/
              dt[key] = o[key]
            end
          end
          potof.point  = {
            actaddpt:  o.actaddpt,
            saidcount: o.saidcount,
            saidpoint: o.saidpoint
          }
          potof.say    = say
          potof.timer  = dt
          potof.event = event
          potof.save
        when 'Struct::SowRecordFileVil'
          sow = SowVillage.where( folder: o.folder, vid: o.vid ).first
          sow ||= SowVillage.new( 
            folder: o.folder.to_s,
            vid:    o.vid, 
            
            name:    o.vname, 
            comment: o.vcomment, 
            
            sow_auth_id: o.makeruid,
            type: {
              say:  o.saycnttype,
              vote: o.votetype,
              roletable: o.roletable,
            },

            password: o.entrypwd,
            vpl:  [ o.vplcnt.to_i, o.vplcntstart.to_i ],
            upd: {
              interval: o.updinterval.to_i,
              hour:     o.updhour.to_i, 
              minute:   o.updminite.to_i
            },
          )
          sow.rating = o.rating  rescue  nil 
          sow.type[:mob] = o.mob  rescue  nil
          sow.type[:game] = o.game  rescue  nil 

          sow.options = []
          sow.options.push "select-role"   if  (o.noselrole    != '1'  rescue  false)
          sow.options.push "random-target" if  (o.randomtarget == '1'  rescue  false)
          sow.options.push "undead-talk"   if  (o.undead       == '1'  rescue  false)

          cnt = []
          say = Hash.new
          dt  = Hash.new
          o.members.each do |key|
            case key
            when /^cnt/
              o[key].to_i.times{|i| cnt.push key[3..-1] }
            when /^modified/
              say[key] = o[key]
            when /dt$/
              dt[key] = o[key]
            end
          end

          sow.card = {}
          sow.card[:discard] = o.rolediscard.split('/').map{|c| SOW_RECORD[folder][:roles][c.to_i] } || [] rescue []
          sow.card[:event]   = o.eventcard.split('/').map{|c| SOW_RECORD[folder][:events][c.to_i] } || [] rescue []
          sow.card[:config] = cnt
          sow.timer  = dt
          sow.save
          
          o.turn.to_i.times do |turn_no|
            event = sow.events.where(turn: turn_no).first
            event ||= SowTurn.new(
              turn: turn_no,
              winner: SOW_RECORD[folder][:winners][o.winner.to_i], 
            )
            if o.turn.to_i - 1 == turn_no
              event.epilogue = o.epilogue.to_i,
              event.event = SOW_RECORD[folder][:events][o.event.to_i]  rescue  nil
              event.grudge = o.grudge.to_i  rescue  nil
              event.riot = o.riot.to_i  rescue  nil
              event.scapegoat = o.scapegoat.to_i  rescue  nil
              event.eclipse = o.eclipse.split('/') || []  rescue  []
              event.seance = o.seance.split('/') || []  rescue  []
              event.say = say
            end
            event.story = sow
            event.save
          end
        end
      end
      true
  end

  def self.message_to_mongo( fname, source, folder, vid, turn)
    story = SowVillage.where( folder: folder, vid: vid ).first
    return unless story

    event = story.events.where( turn: turn ).first
    return unless event

    ids = event.messages.map{|o| [o.logid, o.subid]}

    requests = Hash.new
    source.each do |o|
      logid, subid  = case fname
                      when /memo.cgi/
                      ['MM' + o.logid, 'M']
                      when /log.cgi/
                      [o.logid, o.logsubid]
                      end
      next if ids.member? [logid, subid]

      # message embedded in 
      message = Message.new( logid: logid, sow_auth_id: o.uid, date: o.date, log: o.log )
      event.messages << message
      message.subid = subid
      message.face_id = o.cid
      message.csid = o.csid
      message.style = SOW_RECORD[folder][:monospace][o.monospace.to_i]
      message.mestype = SOW_RECORD[folder][:mestypes][o.mestype.to_i]
      fix_dic = {
        'へクター' => 'ヘクター'
      }.each do |src, dst|
        o.chrname.gsub!(src, dst)  if  o.chrname[src]
      end

      case message.mestype
      when 'AIM'
        message.name, message.to = o.chrname.split(' → ')
      else
        message.name = o.chrname
      end
      key = [{ remoteaddr: o.remoteaddr, fowardedfor: o.fowardedfor, agent: o.agent },{ sow_auth_id: o.uid }]
      requests[ key ] = true
    end
    requests.keys.each do |key| request_key, sow_auth_id = key
      account = SowAuth.where( sow_auth_id ).first || SowAuth.new( sow_auth_id )
      account.save
      request = Request.where( request_key ).first || Request.new( request_key )
      request.sow_auths << account  unless  request.sow_auth_ids.member? account.id
      request.save
    end
    event.save
  end
end


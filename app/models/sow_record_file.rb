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
  end

  def self.out?(vid,force, count_folder, timeout,old)
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
      p line
      p err
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
          item[key_sym] = val.to_s.encode('UTF-8',{:invalid => :replace, :undef => :replace})
        end
      end
      begin
        yield item
      rescue Exception => err
        p item
        p err
      end
    else
      logger.debug line
    end
  end


  def self.cgi_scan_by_folder(path,folder, timeout =  60*60*24*365*2009, force=[])
    logger.debug path
    Dir.new(path).each do | fname |
      next  if  0 == File.size(path+'/'+fname) 
      cgi_scan_by_folder_mongo(path,folder,fname, timeout, force)
#      cgi_scan_by_folder_mysql(path,folder,fname, timeout, force)
    end
  end

  def self.cgi_scan_by_folder_active(path,folder, timeout =  60*60*24*365*2009, force=[])
    logger.debug path
    Dir.new(path).each do | fname |
      next  if  0 == File.size(path+'/'+fname) 
      next  unless  /vil.cgi/ === fname
      cgi_scan_by_folder_mongo(path,folder,fname, timeout, force)
#      cgi_scan_by_folder_mysql(path,folder,fname, timeout, force)
    end
  end

  def self.cgi_scan_by_folder_mongo(path,folder,fname, timeout, force)
    vid  = fname[0..3].to_i
    turn = fname[5..6].to_i
    old  = WATCH_TIME - File.mtime(path+'/'+fname)

    village      = {:folder => folder,:vid => vid}
    village_turn = {:folder => folder,:vid => vid,:turn => turn}
    count_folder = CgiFolder.filter(village).count

    @keys = nil
    case fname
    when /vil.cgi/
      return if out? vid, force, count_folder, timeout, old
      p ({:old => old/60/60, :folder=> folder, :file => fname, :vid => vid})
      village_to_mongo path, fname, folder, vid
    when /logcnt.cgi/
    when /log.cgi/
      return if out? vid, force, count_folder, timeout, old
      p ({:old => old/60/60, :folder=> folder, :file => fname, :vid => vid, :turn => turn })
      source = log( path, fname, folder, vid, turn )
      get_from_file( fname, source, folder, vid, turn )
    when /memo.cgi/
      return if out? vid, force, count_folder, timeout, old
      p ({:old => old/60/60, :folder=> folder, :file => fname, :vid => vid, :turn => turn })
      source = memo( path, fname, folder, vid, turn )
      get_from_file( fname, source, folder, vid, turn )
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
          turn  = story.events.last
          potof = turn.potofs.where( account_id: o.uid ).first
          potof && potof.delete
          #
          face = Face.find(o.cid)
          name = if (0 < o.postfix.to_i  rescue  false)
                   [%w[IR R O Y G B I V UV][o.clearance], face.name, o.postfix].join('-')
                 else
                   face.name
                 end
          potof = SowUser.new( 
            sow_auth_id: o.uid,
            face_id: o.cid,
            csid:    o.csid.split('_')[0],
            jobname: o.jobname,
            name:    name,

            history:  o.history,

            select:   SOW_RECORD[folder][:roles][ o.selrole ],

            live:      o.live,
            deathday:  o.deathday,

            role: [ SOW_RECORD[folder][:roles][o.role] ]
          )
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

          turn.potofs << potof
          story.save
          potof.save
        when 'Struct::SowRecordFileVil'
          sow = SowVillage.where( folder: o.folder, vid: o.vid ).first
          sow && sow.delete
          #
          sow = SowVillage.new( 
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
          turn = SowTurn.new(
            turn:   o.turn.to_i,

            winner: SOW_RECORD[folder][:winners][o.winner.to_i], 
            epilogue:  o.epilogue.to_i,
          )
          sow.events << turn
          sow.rating = o.rating  rescue  nil 
          sow.type[:mob] = o.mob  rescue  nil
          sow.type[:game] = o.game  rescue  nil 

          sow.options = []
          sow.options.push "select-role"   if  (o.noselrole    != '1'  rescue  false)
          sow.options.push "random-target" if  (o.randomtarget == '1'  rescue  false)
          sow.options.push "undead-talk"   if  (o.undead       == '1'  rescue  false)

          turn.event = SOW_RECORD[folder][:events][o.event.to_i]  rescue  nil
          turn.grudge = o.grudge.to_i  rescue  nil
          turn.riot = o.riot.to_i  rescue  nil
          turn.scapegoat = o.scapegoat.to_i  rescue  nil
          turn.eclipse = o.eclipse.split('/') || []  rescue  []
          turn.seance = o.seance.split('/') || []  rescue  []

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
          turn.say   = say

          p sow
          sow.save
          turn.save
        end
      end
      true
  end

  def self.cgi_scan_by_folder_mysql(path,folder,fname, timeout, force)
    vid  = fname[0..3].to_i
    turn = fname[5..6].to_i
    old  = WATCH_TIME - File.mtime(path+'/'+fname)

    village      = {:folder => folder,:vid => vid}
    village_turn = {:folder => folder,:vid => vid,:turn => turn}
    count_folder = CgiFolder.filter(village).count

    @keys = nil
    case fname
    when /vil.cgi/
      return if out? vid, force, count_folder, timeout, old
      p ({:old => old/60/60, :folder=> folder, :file => fname, :vid => vid})
      SOW.transaction do
        CgiVil .filter(village).delete
        CgiUser.filter(village).delete
        village( path, fname, folder, vid ).each do |o|
          case o.members[2]
          when :uid
            db_item = CgiUser.new 
            o.each_pair{|key,value| db_item[key] = value }
            db_item.save
          when :makeruid
            db_item = CgiVil.new 
            o.each_pair{|key,value| db_item[key] = value }
            db_item.save
          end
        end
      end
    when /logcnt.cgi/
    when /log.cgi/
      return if out? vid, force, count_folder, timeout, old
      p ({:old => old/60/60, :folder=> folder, :file => fname, :vid => vid, :turn => turn })
      source = log( path, fname, folder, vid, turn )
      SOW.transaction do
        CgiLog.filter(village_turn).delete
        source.each do |item|
          db_item = CgiLog.new 
          item.each_pair{|key,value| db_item[key] = value }
          db_item.save
        end
      end
    when /memo.cgi/
      return if out? vid, force, count_folder, timeout, old
      p ({:old => old/60/60, :folder=> folder, :file => fname, :vid => vid, :turn => turn })
      source = memo( path, fname, folder, vid, turn )
      SOW.transaction do
        CgiMemo.filter(village_turn).delete
        source.each do |item|
          db_item = CgiMemo.new 
          item.each_pair{|key,value| db_item[key] = value }
          db_item.save
        end
      end
    when /memoidx.cgi/
    when /logidx.cgi/
    else
    end
  end

  def self.get_from_file( fname, source, folder, vid, turn)
    sow = SowVillage.where( folder: folder, vid: vid ).first
    return unless sow
    return if ['LOBBY_OLD',1] == [folder, vid]
    return if ['ULTIMATE',1]  == [folder, vid]
    event = SowEvent.where( folder: folder, vid: vid, turn: turn ).first
    event && event.delete
    #
    event = SowEvent.new( folder: folder, vid: vid, turn: turn )
    sow.events << event
    sow.save
    requests = Hash.new
    source.each do |o|
      logid, subid  = case fname
                      when /memo.cgi/
                      ['MM' + o.logid, 'M']
                      when /log.cgi/
                      [o.logid, o.logsubid]
                      end
      # message embedded in 
      message = Message.new( logid: logid, account_id: o.uid, date: o.date, log: o.log )
      event.messages << message
      message.style = SOW_RECORD[folder][:monospace][o.monospace.to_i]
      message.subid = subid
      message.mestype = o.mestype
      message.face_id = o.cid
      message.csid = o.csid
      message.name = o.chrname
      key = [{ remoteaddr: o.remoteaddr, fowardedfor: o.fowardedfor, agent: o.agent },{ account_id: o.uid }]
      requests[ key ] = true
    end
    requests.keys.each do |key| request_key, account_key = key
      request = Request.where( request_key ).first || Request.new( request_key ) 
      request.save
      account = SowAuth.where( account_key ).first || SowAuth.new( account_key ) 
      account.save
    end
    p [folder, vid, turn]
    event.save
  end

  def self.cgi_scan_by_account(path, timeout = 60*60*24*365*2009)
    Dir.new(path).each do | fname |
      case fname
      when /.cgi/
        old = Time.now - File.mtime(path+'/'+fname)
        next if  timeout < old
        account( path, fname ).each do |item|
          user = {:uid => item.uid}
          CgiAccount.filter( user ).delete
          account = CgiAccount.new
          item.each_pair{|key,value| account[key] = value }
          account.save
          account = Account.where( account_id: item.uid ).first || Account.new( account_id: item.uid ) 
          account.save
          logger.debug ({:old => old/60/60, :uid => item.uid})
        end
      end
    end
  end
end


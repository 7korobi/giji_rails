# -*- coding: utf-8 -*-

class GijiVilScanner < GijiScanner
  def self.save
    rsync = Giji::RSync.new

    gaps = SowVillage.gaps
    rsync.each_locals do |folder, protocol, set|
      next unless set

      path = set[:files][:ldata] + '/data/vil'
      from = set[:files][:from]
      force = gaps[folder]

      Dir.new(path).each do | fname |
        p fname
        next  if  0 == File.size(path+'/'+fname)
        next  unless  /vil.cgi/ === fname  rescue  next

        new(path, folder, WATCH[:cgi][:time], from, force, fname).save
      end
    end

    open( WATCH[:cgi][:file], "w" ).puts SowVillage.gaps.inspect
  end

  def enqueue
#    self.class.perform(@path, @fname, @folder, @vid)
    Resque.enqueue(self.class, @path, @fname, @folder, @vid)
  end


  @queue = :giji_rsyncs
  def self.perform  path, fname, folder, vid
    source = SowRecordFile.village( path, fname, folder, vid )
    return unless source

    sow = SowVillage.where( folder: folder, vid: vid ).first || SowVillage.new
    events = sow.events.group_by(&:turn)
    event_now = events[ events.keys.max ].try(:first)

    source.each do |o|
      case o.class.name
      when 'Struct::SowRecordFileUser'
        story = sow

        face_name = Face.find(o.cid).name  rescue  '***'
        name = if (0 < o.postfix.to_i  rescue  false)
                 [%w[IR R O Y G B I V UV][o.clearance], face_name, o.postfix].join('-')
               else
                 face_name
               end

        potof   = story.potofs.where( sow_auth_id: o.uid ).first     rescue nil
        potof ||= event_now.potofs.where( sow_auth_id: o.uid ).first rescue nil
        potof ||= SowUser.new

        potof.update_attributes(
          sow_auth_id: o.uid,
          face_id:  o.cid,
          csid:     o.csid.split('_')[0],
          jobname:  o.jobname,
          name:     name,

          history:  o.history,

          select:   SOW_RECORD[folder][:roles][ o.selrole.to_i ],

          live:      o.live,
          deathday:  o.deathday,
        )

        role = [ SOW_RECORD[folder][:roles][o.role.to_i] ]
        gift =   SOW_RECORD[folder][:gifts][o.gift.to_i]  rescue  nil
        role.push( gift )  if  gift

        potof.role  = role     rescue  nil
        potof.love  = o.love   rescue  nil
        potof.sheep = o.sheep  rescue  nil

        potof.zapcount   = o.zapcount    rescue  nil
        potof.pseudolove = o.pseudolove  rescue  nil
        potof.clearance  = o.clearance   rescue  nil
        potof.rolestate  = o.rolestate   rescue  nil

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
        potof.say   = say
        potof.timer = dt
        potof.story = story
        potof.event = event_now
        potof.save
      when 'Struct::SowRecordFileVil'
        sow.update_attributes(
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
        sow.card[:discard] = o.rolediscard.split('/').map{|c| if c.to_i == 0 then c else SOW_RECORD[folder][:roles ][c.to_i] end } || [] rescue []
        sow.card[:event]   = o.eventcard.split('/').map{|c|   if c.to_i == 0 then c else SOW_RECORD[folder][:events][c.to_i] end } || [] rescue []
        sow.card[:config]  = cnt
        sow.timer  = dt
        sow.is_finish = (o.epilogue.to_i <= o.turn.to_i)
        sow.save

        o.turn.to_i.times do |turn_no|
          event = events[turn_no].try(:first) || SowTurn.new(story_id: sow.id, turn: turn_no)
          event.update_attributes(
            winner: SOW_RECORD[folder][:winners][o.winner.to_i],
          )
          if o.turn.to_i - 1 == turn_no || o.epilogue.to_i == turn_no
            event.epilogue = o.epilogue.to_i,
            event.event = SOW_RECORD[folder][:events][o.event.to_i]  rescue  nil
            event.grudge = o.grudge.to_i  rescue  nil
            event.riot = o.riot.to_i  rescue  nil
            event.scapegoat = o.scapegoat.to_i  rescue  nil
            event.eclipse = o.eclipse.split('/') || []  rescue  []
            event.seance = o.seance.split('/') || []  rescue  []
            event.say = say
          end
          event.save
        end

        events = sow.events.group_by(&:turn)
        event_now = events[ events.keys.max ].try(:first)
      end
    end
  end
end

# -*- coding: utf-8 -*-
require 'open-uri'
$api = 'https://us-central1-api-project-54633717694.cloudfunctions.net/book_external?mode=init'

class ScanVilJob < ActiveJob::Base
  queue_as :giji_rsyncs

  def perform  path, fname, folder, vid, repair
    source = SowRecordFile.village( path, fname, folder, vid )
    return unless source

    sow = SowVillage.find_or_initialize_by( folder: folder, vid: vid ) do
      "201" == open("#{$api}&book_id=#{folder}-#{vid}").status[0]
    end
    sow.attributes["_type"] = "SowVillage"

    turn = nil
    event_id = "#{sow._id}-#{turn}"

    source.each do |o|
      case o.class.name
      when 'Struct::SowRecordFileUser'
        next if repair == :repair
        story = sow

        potof = SowUser.find_or_initialize_by(story_id: sow._id, sow_auth_id: o.uid) do
          "201" == open("#{$api}&book_id=#{sow._id}&face_id=#{o.cid}").status[0]
        end
        potof.attributes["_type"] = "SowUser"
        potof.update_attributes(
          event_id: event_id,
          pno:      o.pno,
          face_id:  o.cid,
          csid:     o.csid.split('_')[0],
          jobname:  o.jobname,

          commit:   ( 0 != o.commit ),

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

        potof.story_id = story.id
        potof.event_id = event_id
        potof.save!
      when 'Struct::SowRecordFileVil'
        turn = o.turn.to_i
        sow.update_attributes(
          folder: folder,
          vid:    vid,

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
        sow.options.push "select-role"   if  ( o.noselrole.to_i    != 1  rescue  false )
        sow.options.push "random-target" if  ( o.randomtarget.to_i == 1  rescue  false )
        sow.options.push "undead-talk"   if  ( o.undead.to_i       == 1  rescue  false )
        sow.options.push "aiming-talk"   if  ( o.aiming.to_i       == 1  rescue  false )
        sow.options.push "entrust"       if  ( o.entrust.to_i      == 1  rescue  false )
        sow.options.push "seq-event"     if  ( o.seqevent.to_i     == 1  rescue  false )

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
        sow.card["discard"] = o.rolediscard.split('/').map{|c| if c.to_i == 0 then c else SOW_RECORD[folder][:roles ][c.to_i] end } || [] rescue []
        sow.card["event"]   = o.eventcard.split('/').map{|c|   if c.to_i == 0 then c else SOW_RECORD[folder][:events][c.to_i] end } || [] rescue []
        sow.card["config"]  = cnt
        sow.timer  = dt
        sow.is_epilogue = ( o.epilogue.to_i <= turn )
        sow.is_finish   = ( o.epilogue.to_i <  turn )
        sow.is_full_commit = ( 0 == SowUser.where(event_id: "#{sow.id}-#{turn}", commit: false).count )
        sow.save!

	dt_key = if 0 == turn
                   :scraplimitdt
                 else
                   if sow.is_full_commit
                     :nextcommitdt
                   else
                     :nextupdatedt
                   end
                 end
        if (dt[dt_key].localtime - Time.now) < 3600
          "201" == open("#{$api}&book_id=#{sow._id}&part_id=#{sow._id}-#{turn}&is_notice=#{dt_key.to_s}").status[0]
        end

        turn.times do |turn_no|
          event = SowTurn.find_or_initialize_by(story_id: sow.id, turn: turn_no) do
            "201" == open("#{$api}&book_id=#{sow._id}&part_id=#{sow._id}-#{turn_no}").status[0]
          end
          event.attributes["_type"] = "SowTurn"
          event.winner = "WIN_NONE"

          case turn_no
          when 0
            event.name = "プロローグ"
          when o.epilogue.to_i
            event.name = "エピローグ"
            event.winner = SOW_RECORD[folder][:winners][o.winner.to_i]
          end
          if turn - 1 == turn_no || o.epilogue.to_i == turn_no
            event.epilogue = o.epilogue.to_i,
            event.event = SOW_RECORD[folder][:events][o.event.to_i]  rescue  nil
            event.grudge = o.grudge.to_i  rescue  nil
            event.riot = o.riot.to_i  rescue  nil
            event.scapegoat = o.scapegoat.to_i  rescue  nil
            event.eclipse = o.eclipse.split('/') || []  rescue  []
            event.seance = o.seance.split('/') || []  rescue  []
            event.say = say
          end
          event.save!
        end
        event_id = "#{sow.id}-#{turn}"
      end
    end
    return if repair
    sow.events.each do |event|
      if Message.in_event(event.id).count == 0
        event.update_from_file
      end
    end
  end
end

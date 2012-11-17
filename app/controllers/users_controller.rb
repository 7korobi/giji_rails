# -*- coding: utf-8 -*-

class UsersController < ApplicationController
  expose(:users){ User.order_by(:name.asc) }
  expose(:user)

  respond_to :html, :json

  before_filter :auth_require, only:%w[new  create]
  before_filter :self_require, only:%w[edit update byebye_list]

  def index
  end

  def show
  end

  def byebye_list
    return unless user.sow_auths.present? && user.byebyes.present?

    active_story_ids = SowVillage.where(is_finish:false).only(:_id).map(&:_id)
    user_story_ids   = SowUser.where.in(sow_auth_id: user.sow_auth_ids ).in(story_id: active_story_ids ).only(:story_id).map(&:story_id)
    byebye_story_ids = SowUser.where.in(sow_auth_id: user.byebye_ids   ).in(story_id: user_story_ids   ).only(:story_id).map(&:story_id)

    kick_ids = Hash.new {|hash, key| hash[key] = [] }
    maker_story_ids  = SowVillage.where(is_finish:false).in(sow_auth_id: user.sow_auth_ids ).only(:_id).map(&:_id)
    maker_stories = story_in user_story_ids
    maker_stories.each do |story_id, stories|
      story = stories.first
      sow_auth_ids = story.potofs.only(:sow_auth_id).map(&:sow_auth_id)
      byebyes = User.where.in(sow_auth_ids: sow_auth_ids).only(:byebye_ids).map(&:byebye_ids).flatten

      # ５人以上からバイバイされている人
      (byebyes & sow_auth_ids).each do |byebye_id|
        p [:count, story_id, byebye_id, byebyes.count(byebye_id)]
        kick_ids[story_id].push byebye_id if 4 < byebyes.count(byebye_id)
      end

      # 村建て人からバイバイされている人
      (user.byebye_ids & sow_auth_ids).each do |byebye_id|
        kick_ids[story_id].push byebye_id
      end
    end

    p kick_ids

    stories = story_in user_story_ids

    gon.byebyes = user_story_ids.map do |story_id|
      story   = stories[story_id].first
      nation  = GAME[story.folder][:nation] rescue ' - '
      created = story.timer["updateddt"]
      mestype = "VSAY"
      text = "開始が楽しみだ。"
      text = "村を抜けておいたほうがいい。" if byebye_story_ids.member? story_id
      if kick_ids[story_id].present?
        mestype = "WSAY"
        kick_names = SowUser.where(story_id:story_id).in(sow_auth_id:kick_ids[story_id]).only(:name).map(&:name)
        text = kick_names.join('、') + "に退去願おう。"
      end

      link = events_path(story_id)

      { story_id:  story_id,
        is_byebye: byebye_story_ids === story_id,

        folder: story.folder,
        vid:    story.vid,

        template: "message/action",
        mestype:  mestype,
        name:  "#{nation}#{story.vid} #{story.name}",
        style: '',
        date:  created,
        log:   text,
      }
    end
  end

  def history
    return unless user.sow_auth_ids
    criteria = SowUser.only(:story_id, :name, :face_id, :csid, :sow_auth_id )
    sow_auth_ids = user.sow_auth_ids - %w[master]

    potofs = criteria.in(sow_auth_id:sow_auth_ids).select do |o|
      o.story_id.size < 20
    end

    story_ids = potofs.map(&:story_id)
    stories = story_in story_ids

    list = potofs.select do |o|
      story = stories[o.story_id].first
      story.is_finish
    end.sort_by do |o|
      story = stories[o.story_id].first
      0 - story.timer["updateddt"].to_i
    end

    gon.messages_raw = list.map do |chr|
      story   = stories[chr.story_id].first
      nation  = GAME[story.folder][:nation] rescue ' - '
      link    = events_path(chr.story_id)
      created = story.timer["updateddt"]

      chr.attributes.merge(
        template: "message/say",
        mestype: "SAY",
        anchor: "#{nation}#{story.vid}",
        style: 'head',
        date: created,
        name: "<a href=\"#{link}\">#{story.name}</a>",
        log: <<_HTML_ ,
<b style="display:inline-block; width:150px"> #{chr.name} </b> #{chr.sow_auth_id} <br>
_HTML_
      )
    end
  end

  def new
    user.user_id = current.auth.try(:nickname)
    user.name    = current.auth.try(:name)
  end

  def edit
  end

  def create
    if user.save
      flash[:notice] = "successfully #{action_name}d."
      current.auth.user = user
      current.auth.save
      current.user = user
    end
    respond_with user, location:user_path(user.id)
  end

  def update
    if user.save
      flash[:notice] = "successfully #{action_name}d."
    end
    respond_with user
  end

  protected
  def story_in(story_ids)
    @stories ||= {}
    @stories[story_ids] ||= SowVillage.only(:folder, :vid, :name, :timer, :is_finish).in(_id:story_ids).group_by(&:_id)
  end


  def self?
    user.id == current.user.try(:id)
  end
end

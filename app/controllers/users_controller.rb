# -*- coding: utf-8 -*-

class UsersController < ApplicationController
  layout "mithril"

  expose(:users_for_admin){ users.order_by(:name.asc) }
  expose(:users){ User }
  expose(:user, attributes: :user_params, finder: :find_by_id)

  respond_to :html, :json

  # show history
  before_filter :auth_require, only:%w[new  create]
  before_filter :self_require, only:%w[edit update byebye_list]

  def sign_out
    super
  end

  def index
    gon.villages = Rails.cache.fetch("active_stories_view", expires_in: 5.minutes) do
      active_story_ids = SowVillage.where(is_finish:false).pluck(:_id)
      prologue_story_ids = active_story_ids - SowTurn.all.in(story_id: active_story_ids).pluck(:story_id)
      progless_story_ids = active_story_ids - prologue_story_ids
      stories = story_in active_story_ids

      prologue_story_ids.map do |story_id|
        to_message(
          _id: story_id,
          story: stories[story_id].first,
          link:  message_file_path(story_id),
          mestype: "VSAY",
          log: "開始が楽しみだ。",
        )
      end + progless_story_ids.map do |story_id|
        to_message(
          _id: story_id,
          story: stories[story_id].first,
          link:  message_file_path(story_id),
          mestype: "XSAY",
          log: "進行中だ。",
        )
      end
    end
  end

  def show
    if user
      favolite = MapReduce::Face.where("value.sow_auth_id.max_is" => user.id).order_by("value.sow_auth_id.max" => -1).first
      if favolite
        @favolite_face_id = favolite.id
      else
        @favolite_face_id = "undef"
      end
    end
  end

  def byebye_list
    return unless user.sow_auths.present? && user.byebyes.present?

    active_story_ids = SowVillage.where(is_finish:false).pluck(:_id)
    prologue_story_ids = active_story_ids - SowTurn.all.in(story_id: active_story_ids).pluck(:story_id)
#    progless_story_ids = active_story_ids - prologue_story_ids
    user_story_ids   = SowUser.all.in(sow_auth_id: user[:sow_auth_ids] ).in(story_id: prologue_story_ids ).order_by("timer.entrieddt" => 1).pluck(:story_id).uniq
    byebye_story_ids = SowUser.all.in(sow_auth_id: user[:byebye_ids]   ).in(story_id: user_story_ids   ).pluck(:story_id)

    kick_ids = Hash.new {|hash, key| hash[key] = [] }
    maker_story_ids  = SowVillage.where(is_finish:false).in(sow_auth_id: user[:sow_auth_ids] ).pluck(:_id)
    maker_stories = story_in user_story_ids
    maker_stories.each do |story_id, stories|
      story = stories.first
      maker = story.sow_auth_id
      sow_auth_ids = story.potofs.pluck(:sow_auth_id)
      byebyes_by_potof = User.all.in(sow_auth_ids: sow_auth_ids).pluck(:byebye_ids).flatten
      byebyes_by_maker = User.all.in(sow_auth_ids:      [maker]).pluck(:byebye_ids).flatten

      # ５人以上からバイバイされている人
      (byebyes_by_potof & sow_auth_ids).each do |byebye_id|
        kick_ids[story_id].push byebye_id if 4 < byebyes_by_potof.count(byebye_id)
      end

      # 村建て人からバイバイされている人
      (byebyes_by_maker & sow_auth_ids).each do |byebye_id|
        kick_ids[story_id].push byebye_id
      end
    end

    stories = story_in user_story_ids

    gon.byebyes = user_story_ids.map do |story_id|
      story   = stories[story_id].first
      mestype = "VSAY"
      text = "開始が楽しみだ。"
      text = "村を抜けておいたほうがいい。" if byebye_story_ids.member? story_id
      if kick_ids[story_id].present?
        mestype = "WSAY"
        kick_names = SowUser.where(story_id:story_id).in(sow_auth_id:kick_ids[story_id]).pluck(:name)
        text = kick_names.join('、') + "に退去願おう。"
      end

      to_message(
        _id: story_id,
        story: stories[story_id].first,
        link:  message_file_path(story_id),
        mestype: mestype,
        log: text,
      )
    end
  end

  def history
    return unless user.sow_auth_ids
    criteria = SowUser.only(:story_id, :name, :face_id, :csid, :sow_auth_id )
    sow_auth_ids = user.sow_auth_ids - %w[master]

    potofs = criteria.in(sow_auth_id:sow_auth_ids)
    story_ids = potofs.map(&:story_id)
    stories = story_in story_ids

    list = potofs.select do |o|
      story = stories[o.story_id]
      story && story.first.is_finish
    end.sort_by do |o|
      story = stories[o.story_id].first
      0 - story.timer["updateddt"].to_i
    end

    gon.history = list.map do |chr|
      story   = stories[chr.story_id].first
      nation  = GAME[story.folder][:nation] rescue ' - '
      link    = "http://giji-assets.s3-website-ap-northeast-1.amazonaws.com/stories/#{chr.story_id}"
      created = story.timer["updateddt"]

      chr.attributes.merge(
        _id: chr.story_id,
        name: chr.name,
        user_id: chr.sow_auth_id,
        template: "message/say",
        mestype: "SAY",
        anchor: "#{nation}#{story.vid}",
        style: 'head',
        date: created,
        log: <<_HTML_ ,
<a href="#{link}">#{story.name}</a> <br>
_HTML_
      )
    end
  end

  def new
    p current
    p user
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
  def user_params
    params.require(:user).permit(:user_id, :name, :email, :sow_auths, :byebyes)
  end

  def to_message(_id: , story: SowVillage.new, link: message_file_path(story.id), mestype: "SAY", log: "")
    nation  = GAME[story.folder][:nation] rescue ' - '
    created = story["timer"]["updateddt"]

    { template: "message/action",
      mestype:  mestype,
      name:  "#{nation}#{story.vid} #{story.name}",
      style: '',
      updated_at:  created,
      log: log,
      _id: _id
    }
  end

  def story_in(story_ids)
    @stories ||= {}
    @stories[story_ids] ||= SowVillage.only(:_id, :folder, :vid, :name, :timer, :sow_auth_id, :turn, :is_finish).in(_id:story_ids).group_by(&:_id)
  end


  def self?
    super || user.id == current.user.try(:id)
  end
end

class UsersController < ApplicationController
  expose(:users){ User.order_by(:name.asc) }
  expose(:user)

  respond_to :html, :json

  before_filter :auth_require, only:%w[new  create]
  before_filter :self_require, only:%w[edit update]

  def index
  end

  def show
    return unless user.sow_auth_ids
    criteria = SowUser.includes(:story).only(:story_id, :name, :face_id, :csid, :sow_auth_id )
    sow_auth_ids = user.sow_auth_ids - %w[master]

    list = criteria.in(sow_auth_id:sow_auth_ids).select do |o|
      o.story && o.story.is_finish
    end.sort_by do |o|
      0 - o.story.timer["updateddt"].to_i
    end

    gon.messages_raw = list.map do |chr|
      nation  = GAME[chr.story.folder][:nation] rescue ' - '
      link    = events_path(chr.story_id)
      created = chr.story.timer["updateddt"]

      chr.attributes.merge(
        template: "giji/say",
        mestype: "SAY",
        anchor: "#{nation}#{chr.story.vid}",
        style: 'head',
        date: created,
        name: "<a href=\"#{link}\">#{chr.story.name}</a>",
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
  def self?
    user.id == current.user.try(:id)
  end
end

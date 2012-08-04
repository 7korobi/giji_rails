class UsersController < ApplicationController
  expose(:users){ User.order_by(:name.asc) }
  expose(:user)

  respond_to :html, :json

  before_filter :auth_require, only:%w[new  create]
  before_filter :self_require, only:%w[edit update show]

  def index
  end

  def show
  end

  def new
    user.user_id = current.auth.try(:nickname)
    user.name    = current.auth.try(:name)
  end

  def edit
    gon.messages = user.auths.map do |auth|
      { template: 'giji/say',
        mestype: 'mes_think',
        style: '',
        img: auth.image,
        logid: auth.nickname,
        name: auth.provider,
        time: auth.updated_at,
        text: "<dl><dt>nickname</dt><dd>#{auth.nickname}</dd><dt>name</dt><dd>#{auth.name}</dd></dl>".html_safe,
      }
    end
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

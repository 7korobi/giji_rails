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
  end

  def create
    current.auth.user = user
    if user.save && current.auth.save
      current.user = user
      flash[:notice] = "successfully #{action_name}d."
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

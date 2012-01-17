
class UsersController < ApplicationController
  expose(:users){ User.all }
  expose(:user)

  respond_to :html, :json

  before_filter :auth_require, only:%w[new  create]
  before_filter :self_require, only:%w[edit update]

  def index
  end

  def show
  end

  def new
    user.user_id = current.auth.try(:screen_name)
    user.name    = current.auth.try(:name)
    render 'form'
  end

  def edit
    render 'form'
  end

  def create
    current.auth.user = user
    if user.save && current.auth.save
      flash[:notice] = "successfully #{action_name}d."
    end
    respond_with user
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

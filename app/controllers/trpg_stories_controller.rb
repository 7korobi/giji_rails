class TrpgStoriesController < ApplicationController
  expose(:stories){ trpg_stories }

  expose(:trpg_stories){ TrpgStory.page params[:page] }
  expose(:trpg_story)

  respond_to :html, :json

  before_filter :login_require
  before_filter :sign, only:%w[create, update]
  
  def index
    gon.page = { length: trpg_stories.num_pages }
  end

  def show
  end

  def new
    trpg_story.attributes = TRPG[:default_story]
  end

  def edit
  end

  def create
    if trpg_story.save
      flash[:notice] = "successfully #{action_name}d."
    end
    respond_with trpg_story
  end

  def update
    if trpg_story.save
      flash[:notice] = "successfully #{action_name}d."
    end
    respond_with trpg_story
  end

  protected
  def self?
    trpg_story.user_id == current.user.try(:id)
  end

  def sign
    trpg_story.user_id = current.user.id
  end
end
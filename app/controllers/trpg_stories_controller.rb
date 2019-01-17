class TrpgStoriesController < ApplicationController
  expose(:stories){ TrpgStory.page params[:page] }
  expose(:story)

  expose(:trpg_stories){ stories }
  expose(:trpg_story)

  respond_to :html, :json

  before_action :login_require
  before_action :sign, only:%w[create, update]

  def index
    gon.page = { length: stories.num_pages }
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
    respond_with story
  end

  def update
    if trpg_story.save
      flash[:notice] = "successfully #{action_name}d."
    end
    respond_with story
  end

  protected
  def self?
    super || trpg_story.user_id == current.user.try(:id)
  end
  def sign
    trpg_story.user_id = current.user.id
  end

  protected
  class Responder < ActionController::Responder
    def navigation_location
      @controller.trpg_events_url @controller.story.id
    end
  end
  def self.responder
    Responder
  end
end

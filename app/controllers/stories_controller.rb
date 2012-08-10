class StoriesController < ApplicationController
  expose(:stories){ Story.finished.summary(params[:folder]).page params[:page] }

  respond_to :html, :json

  before_filter :login_require

  def index
    gon.page = { length: stories.num_pages }
    gon.folder = params[:folder]
  end
end

class StoriesController < ApplicationController
  expose(:stories){ Story.summary(params[:folder]).page params[:page] }
  expose(:story)

  respond_to :html, :json

  before_filter :login_require
  
  def index
  end
end

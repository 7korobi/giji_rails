class StoriesController < ApplicationController
  expose(:stories){ Story.index(params[:folder]).page params[:page] }
  expose(:story)

  respond_to :html, :json

  def index
  end
end

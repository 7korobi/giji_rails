class EventsController < ApplicationController
  expose(:story)
  expose(:potofs){ story.potofs }

  expose(:events){ story.events.index.page params[:page] }
  expose(:event)

  respond_to :html, :json

  def index
  end
end

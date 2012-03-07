class EventsController < ApplicationController
  expose(:story)
  expose(:potofs){ story.potofs }

  expose(:events){ story.events.summary }
  expose(:event)

  respond_to :html, :json

  before_filter :login_require

  def index
  end
end

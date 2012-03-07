class MessagesController < ApplicationController
  expose(:story)
  expose(:potofs){ story.potofs }
  expose(:events){ story.events.summary }

  expose(:event){ story.events.where(turn: params[:turn]).first }
  expose(:messages){ event.messages.summary.page params[:page] }
  expose(:message)
  
  respond_to :html, :json

  before_filter :login_require

  def index
  end
  def show
  end
end

class TrpgMessagesController < BaseLogController
  expose(:potofs){ story.potofs.where(user_id: current.user.id).cache  }
  expose(:potof)

  expose(:events){ story.events.summary.cache }
  expose(:event){  story.events.where(turn: params[:turn]).cache.first }
  expose(:messages){ event.messages.summary.cache }

  expose(:trpg_messages){ messages }
  expose(:trpg_message)


  respond_to :html, :json

  def index
    gon.messages = messages.gon
    gon.turn = event.turn
  end
end

class ChrVotesController < ApplicationController
  expose(:faces){ Face.all }
  expose(:chr_votes){ ChrVote.all }
  expose(:chr_vote)

  respond_to :html, :json

  def index
  end

  def show
  end

  def new
  end

  def edit
  end

  def create
    if chr_vote.save
      flash[:notice] = "successfully #{action_name}d."
    end
    respond_with chr_vote
  end

  def update
    if chr_vote.update_attributes(params[:chr_vote])
      flash[:notice] = "successfully #{action_name}d."
    end
    respond_with chr_vote
  end

  def destroy
    chr_vote.destroy
    respond_with chr_vote
  end
end

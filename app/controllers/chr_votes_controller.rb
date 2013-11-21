class ChrVotesController < ApplicationController

  expose(:chr_votes_in_phase){ chr_votes.desc(:created_at).group_by(&:phase) }
  expose(:chr_votes){ ChrVote.where(user_id: current.user.id) }
  expose(:chr_vote)

  respond_to :html, :json

  before_filter :login_require, only:%w[new create update destroy]

  def new
    chr_vote.vote  = chr_votes.max(:vote).to_i + 1
    chr_vote.phase = chr_vote_phases[0]
  end

  def create
    chr_vote.user_id = current.user.id
    chr_vote.phase = params[:phase_input]  if  params[:phase_input].presence
    @chr_vote = ChrVote.new chr_vote.attributes

    if @chr_vote.face_id && @chr_vote.save
      flash[:notice] = "successfully #{action_name}d."

      chr_list = chr_votes_in_phase[chr_vote.phase]
      chr_list.last.delete  if  3 < chr_list.count
    end
    redirect_to action:'new'
  end

  def destroy
    chr_vote.destroy
    redirect_to action:'new'
  end
end

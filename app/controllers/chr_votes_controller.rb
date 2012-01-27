class ChrVotesController < ApplicationController
  expose(:faces){ Face.all }
  expose(:face_groups){ faces.group_by{|o| o.face_id[/[a-z]+/] } }
  expose(:face_titles){ OPTION[:face_titles] }

  expose(:chr_vote_phases){ ChrVote.only(:phase).group.map{|o| o['phase'] } }
  expose(:chr_votes){ ChrVote.all }
  expose(:chr_vote)

  respond_to :html, :json

  before_filter :login_require, only:%w[new create update destroy]

  def new
  end

  def create
    if chr_vote.save
      flash[:notice] = "successfully #{action_name}d."
    end
    redirect_to action:'new'
  end

  def destroy
    chr_vote.destroy
    redirect_to action:'new'
  end
end

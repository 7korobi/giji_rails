class ChrVotesController < ApplicationController
  expose(:faces){ Face.all }
  expose(:face_groups){ faces.group_by_type }
  expose(:face_titles){ Face.titles }

  expose(:chr_vote_phases){ ChrVote.phases }
  expose(:chr_votes){ ChrVote.all }
  expose(:chr_vote)

  respond_to :html, :json

#  before_filter :login_require, only:%w[new create update destroy]

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

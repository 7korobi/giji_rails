class ChrVotesController < ApplicationController
  expose(:face_groups){ faces.group_by_type }
  expose(:chr_vote_phases){ ChrVote.phases }
  expose(:chr_vote_phases_faces){ ChrVote.only(:phase,:face_id).group.group_by{|h|h['phase']} }

  expose(:faces){ Face.all }
  expose(:face_titles){ Face.titles }

  expose(:chr_votes_in_phase){ chr_votes.group_by(&:phase) }
  expose(:chr_votes){ ChrVote.where(user_id: current.user.id) }
  expose(:chr_vote)

  expose(:chr_votes_comments){ ChrVote.excludes(comment:"").group_by(&:face_id) }

  respond_to :html, :json

  before_filter :login_require, only:%w[new create update destroy]

  def index
    gon.messages = chr_votes_comments.map do |face_id, votes|
      { template: 'giji/say',
        mestype: 'mes_think',
        style: '',
        logid:'',
        face_id: face_id,
        name: Face.find(face_id).name,
        time: votes.last.created_at,
        text: votes.map{|vote| "<ul><li>#{vote.comment}</li></ul>"}.join,
      }
    end
  end

  def new
    chr_vote.vote  = chr_votes.max(:vote).to_i + 1
    chr_vote.phase = chr_vote_phases[0]
  end

  def create
    chr_vote.user = current.user
    chr_vote.phase = params[:phase_input]  if  params[:phase_input].presence

    if chr_vote.face_id && chr_vote.save
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

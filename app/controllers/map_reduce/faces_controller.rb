# -*- coding: utf-8 -*-

class MapReduce::FacesController < ApplicationController
  layout "mithril"

  expose(:chr_votes_in_phase){ chr_votes.desc(:created_at).group_by(&:phase) }
  expose(:chr_votes){ ChrVote.where(face_id:params[:id]) }
  expose(:chr_vote){ chr_votes.where(user_id: current.user.id).new }
  expose(:chr_vote_phases){ ChrVote.phases }
  expose(:chr_vote_phases_faces){ ChrVote.count_by_face_id }

  expose(:faces){ FACE }
  expose(:face_titles){ Face.titles }

  def index
    gon.map_reduce = {
      faces: MapReduce::Face.all.map{|o|o[:value]}
    }
  end

  def show
    @face = MapReduce::Face.find(params[:id])
    gon.rabl
  end
end

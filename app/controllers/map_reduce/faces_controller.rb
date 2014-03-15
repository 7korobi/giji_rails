# -*- coding: utf-8 -*-

class MapReduce::FacesController < ApplicationController
  expose(:chr_votes_in_phase){ chr_votes.desc(:created_at).group_by(&:phase) }
  expose(:chr_votes){ ChrVote.where(face_id:params[:id]) }
  expose(:chr_vote){ chr_votes.where(user_id: current.user.id).new }
  expose(:chr_vote_phases){ ChrVote.phases }
  expose(:chr_vote_phases_faces){ ChrVote.count_by_face_id }

  expose(:faces){ FACE }
  expose(:face_titles){ Face.titles }

  def index
    chrs = @faces = MapReduce::Face.only("value.sow_auth_id").order_by("value.sow_auth_id.all" => -1).map do |o|
      face = FACE.find{|face|face[:face_id] == o.id}
      if face
        url = map_reduce_face_url(o.id)
        count = o.sow_auth_id["all"].to_i rescue 0

        text = <<-_HTML_
<div>#{face[:name]}</div>
<div>♥#{o.sow_auth_id["max_is"]}</div>
<div><a class="mark" href="#{url}">登場 #{count}回</a></div>
_HTML_
        { text: text,
          img: "#{URL[:file]}/images/portrate/#{o.id}.jpg",
          id: o.id,
        }
      else
        nil
      end
    end.compact
    gon.chrs_select = [
      {val: chrs, name:"人狼議事 （ぜんぶ）"},
      {val: select_chrs(chrs, CS_WA     ), name:"和の国てやんでえ"},
      {val: select_chrs(chrs, CS_SF     ), name:"明後日への道標"},
      {val: select_chrs(chrs, CS_CHANGED), name:"とのさま広場"},
      {val: select_chrs(chrs, CS_RIRINRA), name:"人狼議事"},
      {val: select_chrs(chrs, CS_GER    ), name:"エクスパンション・セット「大陸議事」"},
      {val: select_chrs(chrs, CS_MAD    ), name:"エクスパンション・セット「狂騒議事」"},
      {val: select_chrs(chrs, CS_TIME   ), name:"エクスパンション・セット「帰還者議事」"},
    ]
  end

  def show
    @face = MapReduce::Face.find(params[:id])
    gon.rabl
  end

  private
  def select_chrs(chrs, filter)
    ids = filter[:chr_jobs].map do |o|
      o[:face_id]
    end
    chrs.select{|o| ids.member? o[:id] }
  end
end

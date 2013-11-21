# -*- coding: utf-8 -*-

class MapReduce::FacesController < ApplicationController
  expose(:chr_votes){ ChrVote.excludes(comment:"").where(face_id:params[:id]) }

  def index
    chrs = @faces = MapReduce::Face.only("value.sow_auth_id").order_by("value.sow_auth_id.all" => -1).map do |o|
      face = FACE[:Face].find{|face|face[:face_id] == o.id}
      if face
        url = map_reduce_face_url(o.id)
        count = o.sow_auth_id["all"].to_i rescue 0

        text = <<-_HTML_ 
<p>#{face[:name]}</p>
<p class="note">♥#{o.sow_auth_id["max_is"]}</p>
<p><a class="mark" href="#{url}">登場 #{count}回</a></p>
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

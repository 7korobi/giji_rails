class StoriesController < ApplicationController
  layout "mithril"

  expose(:stories) do
    params[:folder] = "ALL"
    Rails.cache.fetch("stories_finished_#{params[:folder]}", :expires_in => 4.hours) do
      query = SowVillage.epilogued
      query = query.where(folder: params[:folder])  if  params[:folder] != "ALL"
      query.
        only(%w[_type folder vid name rating options upd vpl type card]).
        sort_by{|o|[o.folder, - o.vid]}.
        map do |story|
          story[:file] = "#{URL[:file]}/stories/#{story.id}.html"
          story[:link] = messages_path(story, 0) + "#mode=info_all_open"
          story
        end
    end
  end

  respond_to :html, :json

  def index
    gon.stories = stories
    gon.stories_is_small = true
  end
end

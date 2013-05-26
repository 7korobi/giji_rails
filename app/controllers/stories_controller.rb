class StoriesController < ApplicationController
  expose(:stories) do
    Rails.cache.fetch("stories_finished_#{params[:folder]}", :expires_in => 4.hours) do
      query = Story.finished
      query = query.where(folder: params[:folder])  if  params[:folder] != "ALL"
      query.
        only(%w[folder vid name rating options upd vpl type card]).
        sort_by{|o|[o.folder, - o.vid]}.
        map do |story|
          story[:link] = messages_path(story, 0) + "#mode=info_open_player"
          story.attributes
        end
    end
  end

  respond_to :html, :json

  def index
    gon.stories = stories
  end
end

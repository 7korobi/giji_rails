class StoriesController < ApplicationController
  expose(:stories) do
    Rails.cache.fetch("stories_finished", :expires_in => 1.hours) do
      Story.finished.
        only(%w[folder vid name rating options upd vpl type card]).
        sort_by{|o|[o.folder, - o.vid]}.
        map do |story|
          story[:link] = events_path(story)
          story.attributes
        end
    end
  end

  respond_to :html, :json

  def index
    if params[:folder]
      redirect_to stories_path + "#folder=#{params[:folder]}"
    else
    	gon.stories = stories
    end
  end
end

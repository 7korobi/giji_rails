class NaviCell < Cell::Rails
  def potofs(gon, story)
  	@story = story
    gon.potofs = story.potofs.cache.map(&:attributes)
    render
  end
  def events(gon, story)
  	@story = story
  	@events = story.events.summary.cache
  	render
  end
end

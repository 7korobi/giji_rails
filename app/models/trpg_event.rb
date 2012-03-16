class TrpgEvent < Event
  def save
    unless self.turn
      self.turn = story.events.max(:turn).to_i + 1
      self.is_finish = false
    end
    super
  end
end

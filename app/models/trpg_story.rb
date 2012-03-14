class TrpgStory < Story
  belongs_to :user

  field :is_finish, type:Boolean, hidden: true

  def save
    unless self.vid
      self.vid = self.class.max(:vid).to_i + 1
      self.folder = 'TRPG'
      self.is_finish = false
    end
    super
  end
end

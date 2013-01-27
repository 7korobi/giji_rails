class TrpgStory < Story
  belongs_to :user

  field :is_finish, type:Boolean
  has_many :events, inverse_of: :story, class_name: 'TrpgEvent'
  has_many :potofs, inverse_of: :story, class_name: 'TrpgPotof'

  def save
    unless self.vid
      self.vid = self.class.max(:vid).to_i + 1
      self.folder = 'TRPG'
      self.is_finish = false
    end
    super
  end
end

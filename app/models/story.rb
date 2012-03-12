class Story
  include Giji
  
  key   :folder, :vid
  field :folder, hidden: true
  field :vid,    type: Integer, hidden: true
  field :name
  field :comment
  field :rating
  field :is_finish, type:Boolean, hidden: true
  has_many :events, inverse_of: :story
  has_many :potofs, inverse_of: :story

  scope :summary, ->(folder) { where(folder:folder).order_by(:vid.asc) }
  scope :finished,  where(is_finish: true)
  paginates_per 50
end

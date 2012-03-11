class Story
  include Giji
  
  key   :folder, :vid
  field :folder
  field :vid,    type: Integer
  field :name
  field :comment
  field :rating
  field :is_finish, type:Boolean
  has_many :events, inverse_of: :story
  has_many :potofs, inverse_of: :story

  scope :summary, ->(folder) { where(folder:folder, is_finish:true).order_by(:vid.asc) }
  paginates_per 50
end

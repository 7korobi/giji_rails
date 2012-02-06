class Story
  include Giji
  
  key   :folder, :vid
  field :folder
  field :vid,    type: Integer
  field :name
  field :comment
  field :rating
  references_many :events, inverse_of: :story
end

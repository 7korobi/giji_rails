class Story
  include Giji
  
  key   :folder, :vid
  field :folder
  field :vid,    type: Integer
  field :vname
  field :vcomment
  field :rating
  field :saycnttype
  field :mob
  references_many :events, inverse_of: :story
end

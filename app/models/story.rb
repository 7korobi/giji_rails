class Story
  include Giji
  
  field :_id, default: ->{ [folder, vid].join("-").downcase }
  field :folder
  field :vid,    type: Integer
  field :name
  field :comment
  field :rating
  field :is_finish,   type:Boolean
  field :is_epilogue, type:Boolean
  has_many :events, inverse_of: :story
  has_many :old_events, inverse_of: :story
  has_many :potofs, inverse_of: :story

  scope :summary, ->(folder) { where(folder:folder).order_by(:vid.desc) }
  scope :finished,  where(is_finish: true)
  scope :epilogued, where(is_epilogue: true)
  paginates_per 50
end

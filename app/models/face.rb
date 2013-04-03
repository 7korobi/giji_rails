class Face
  include Giji

  field :_id, default: ->{ face_id }
  field :face_id
  field :name
  field :comment
  field :order,   type: Integer
  
  default_scope order_by(:order.asc)

  validates_length_of :face_id,   in: 1.. 5
  validates_length_of :name,      in: 1..10
  validates_length_of :comment,   in: 1..30, allow_blank: true
  validates_length_of :order,     in: 1.. 5

  def self.group_by_type
    Face.all.group_by{|o| o.face_id[/[a-z]+/] }
  end

  def self.titles
    OPTION[:face_titles]
  end
end


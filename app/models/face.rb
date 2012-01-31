class Face
  include Giji
  key   :face_id
  field :face_id, limit:  5
  field :name,    limit: 10
  field :comment, limit: 30, allow_blank: true
  field :order,   limit:  3, type: Integer
  
  default_scope order_by(:order.asc)

  def self.group_by_type
  	all.group_by{|o| o.face_id[/[a-z]+/] }
  end

  def self.titles
    OPTION[:face_titles]
  end
end


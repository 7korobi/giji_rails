class Lab::B
  include Mongoid::Document
  belongs_to :a, foreign_key: :ssn, primary_key: :ssn, class_name: "Lab::A"

  field :ssn, type: Integer

end

class Lab::A
  include Mongoid::Document
  field :_id, as: :ssn, type: Integer
end

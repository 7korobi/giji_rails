module ActiveRecord
  class Base
  	def self.inherited(child)
      Rails.add_inherit(:models, child)
      p " #{child} inherit #{self}"
      child.class_eval do
        include ModelManage::Base
      end
    end
  end
end

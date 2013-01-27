module ModelManage
  module Mongoid
    module ClassMethods
      def column_for_attribute(attribute_name)
        self.class.forms[attribute_name.to_s]
      end

      def content_columns
        forms.values
      end

      def reflections
        relations
      end
    end
  end
end

module WithSimpleForm
  def self.included(base)
    def base.field(name, options = {})
      min = 1

      validates = {}
      validates[:in] = options.delete(:in)  || options.delete(:within)
      if options[:limit] && (! validates[:in])
        validates[:in] = (min..options.delete(:limit)) 
      end
      validates[:allow_nil  ] = options.delete(:allow_nil)   || false
      validates[:allow_blank] = options.delete(:allow_blank) || false

      super( name, options )

      if validates[:in].present?
        validates_length_of name, validates
        const_get(:FORMS)[name.to_sym] ||= OpenStruct.new(validates)
        const_get(:FORMS)[name.to_sym].limit = validates[:in].max
      end
    end
  end
end

module SimpleForm
  class FormBuilder
    def find_attribute_column(attribute_name)
      if @object.class.respond_to?(:forms)
        @object.class.forms(attribute_name) 
      end
    end
  end
end

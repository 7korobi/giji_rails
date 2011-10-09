module WithSimpleForm
  def self.included(base)

    def base.field(name, options = {})
      min =   1

      validates = {}
      validates[:in] = options.delete(:in)  || options.delete(:within)
      if options[:limit] && (! validates[:in])
        validates[:in] = (min..options.delete(:limit)) 
      end

      validates[:allow_nil  ] = options.delete(:allow_nil)   || false
      validates[:allow_blank] = options.delete(:allow_blank) || false

      super
      null_ok = validates[:allow_nil] || validates[:allow_blank]
      form_attributes = {
        owner:   self,
        name:    name.to_s,
        type:    options[:type] || String,
        limit:   nil,
        null:    null_ok ,
        scale:   nil
      }

      if validates[:in].present?
        validates_length_of name, validates
        validates[:limit] = validates[:in].max
        form_attributes.merge!(validates)
      end

      forms[name] = OpenStruct.new(form_attributes)
    end

    def base.relation_form_set(name, options = {})
      form_attributes = {
        owner:   self,
        name:    name.to_s,
        options: options
      }
      relation = relations[name.to_s]
      relation.form = OpenStruct.new(form_attributes)
    end

    def base.referenced_in(name, options = {})
      super
      relation_form_set name, options
    end
    def base.references_many(name, options = {})
      super
      relation_form_set name, options
    end
    def base.embedded_in(name, options = {})
      super
      relation_form_set name, options
    end
    def base.embeds_many(name, options = {})
      super
      relation_form_set name, options
    end
    def base.references_and_referenced_in_many(name, options = {})
      super
      relation_form_set name, options
    end
  end
end

module SimpleForm
  class FormBuilder
    def find_attribute_column(attribute_name)
      if @object.class.respond_to?(:forms)
        @object.class.forms[attribute_name]
      end
    end
  end
end

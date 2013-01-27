module ModelManage
  module Base
    def self.included(base)
      base.class_eval do
        extend  ModelManage::ClassMethods
        forms_field = superclass.forms.dup rescue {}.with_indifferent_access
        base.const_set :FORMS, forms_field
      end
    end
  end
  module ClassMethods
    def forms
      const_get(:FORMS)
    end

    def key?(key)
      const_get(:KEYS).member? key.to_s
    rescue
      const_set :KEYS, []
      false
    end

    def validates_length_of(name, options = {})
      super
      min =   1
      validates = {}
      validates[:in] = options.delete(:in)  || options.delete(:within)
      validates[:allow_nil  ] = options.delete(:allow_nil)   || false
      validates[:allow_blank] = options.delete(:allow_blank) || false

      null_ok = validates[:allow_nil] || validates[:allow_blank]
      form_attributes = {
        owner:   self,
        name:    name.to_s,
        type:    options[:type] || String,
        limit:   validates[:in].max,
        null:    null_ok,
        primary: key?(name),
        scale:   nil
      }

      if options[:hidden]
        forms.delete(name)
      else
        forms[name] = OpenStruct.new(form_attributes)
      end
    end

    def relation_form_set(name, options = {})
      relation_attributes = {
        owner:    self,
        name:     name.to_s,
        options:  options
      }.tap{|o| o[:data] = o.dup }
      relation = relations[name.to_s]
      relation.form = OpenStruct.new(relation_attributes)
    end
  end
end
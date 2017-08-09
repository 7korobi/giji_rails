module Aggregateable
  extend ActiveSupport::Concern
  include Mongoid::Document

  included do
  end

  module ClassMethods
    def array_merge(* arrays)
      size = arrays.map(&:size).max
      (0..(size - 1)).map do |idx|
        result = {}
        arrays.each do |array|
          result.deep_merge! array[idx] if array[idx]
        end
        result
      end
    end
    def deep_merge(* name_or_hashes)
      arrays = name_or_hashes.map do |name_or_hash|
        case name_or_hash
        when Array
          name_or_hash
        else
          AGGREGATE[name_or_hash.to_s]
        end
      end
      array_merge(* arrays)
    end
    def calc(model, aggregate_args)
      model.collection.aggregate aggregate_args
    end
  end
end

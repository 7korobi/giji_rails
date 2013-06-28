class Time
  def to_json
    "new Date(#{to_i*1000})"
  end
end

class Array::Line < Array
  class << self
    def demongoize(ary)
      ary.to_a.join("\n")
    end
    def mongoize(o)
      case o
      when String
        o.lines.map(&:strip).compact
      else
        o
      end
    end
    alias_method :evolve, :mongoize
  end
end


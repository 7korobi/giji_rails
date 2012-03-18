# -*- coding: utf-8 -*-

class Time
  DateFormat = '%Y-%m-%d'
  TimeFormat = '%H:%M'
  LaxDateFormat = "%s年%02s月%02s日(%s)"
  LaxTimeFormat = "%s年%02s月%02s日(%s) %02s時%s頃"
  DATE_FORMATS[:default] = '#{Time::DateFormat} #{Time::TimeFormat}'
  DATE_FORMATS[:lax_date] = ->(o){now = o + 15.minute; LaxDateFormat%[now.year,now.month,now.day,OPTION[:jp_wday][now.wday]]}
  DATE_FORMATS[:lax_time] = ->(o){now = o + 15.minute; LaxTimeFormat%[now.year,now.month,now.day,OPTION[:jp_wday][now.wday],now.hour,["","半"][(now.min + 15)/30]]}
end

module Timestamp
  def self.included(base)
    def base.timestamp(at, options = {})
      at_type = Time # if key? at then Integer else Time end
      at_eq = [at,'='].join('').to_sym

      field at, type: at_type, limit: 15

      define_method(at) do 
        Time.at(self[at] ||= Time.now)
      end
      define_method(at_eq) do |time|
        self[at] = time.to_time
      end
    end
  end
  def self.timeslice( gap = 1.days, from = false )
    last = maximum(:created_at)

    now  = from || minimum(:created_at)
    now  = now.getutc + now.utc_offset unless now.utc?

    ceil = now.to_i % gap
    now -= ceil 
    begin 
      yield (now - gap .. now)
      now += gap
    end while now < last
  end
end

# todo : Hash value, Range exp, Array exp
# encoding: utf-8
class Mongoid::Fields::Serializable::DateTime
  def deserialize(object)
    object = object.to_time.getlocal rescue object if Mongoid::Config.use_utc?
    object.to_datetime
  end
end

class Mongoid::Fields::Serializable::Range
  def deserialize(object)
    object.nil? ? nil : ::Range.new(object["min"], object["max"], object["exclude_end"])
  end

  def serialize(object)
    object.nil? ? nil : { "min" => object.min, "max" => object.max }
  end
end


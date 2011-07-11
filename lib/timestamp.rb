module Timestamp
  def self.included(base)
    def base.timestamp(at, options = {})
      set_callback(:save, :before) do |o|
        o.at
      end
      
      at_type = if key? at then Integer else Time end
      at_tz   = [at,'tz'].join('_').to_sym

      field at,    type: at_type
      field at_tz, type: Integer

      define_method(at_tz) do
        self[at_tz] ||= 9
      end

      if options[:input]
        at_date = [at,'date'].join('_').to_sym
        at_time = [at,'time'].join('_').to_sym
        self.const_get(:FORMS)[at.to_sym] = {all:at, date:at_date, time: at_time, tz: at_tz}

        field at_date,   limit: 10
        field at_time,   limit:  5
        validates_format_of at_date, with:Time::DateRegexp
        validates_format_of at_time, with:Time::TimeRegexp
        define_method(at) do 
          t = "#{self.at_date} #{self.at_time}".to_time.client!
          self[at] = t.server(send(at_tz))
          t
        end
        define_method(at_date) do
          self[at_date] ||= Time.now.client(send(at_tz)).strftime(Time::DateFormat)
        end
        define_method(at_time) do
          self[at_time] ||= Time.now.client(send(at_tz)).strftime(Time::TimeFormat)
        end
      else
        at_eq = [at,'='].join('').to_sym
        define_method(at) do 
          Time.at(self[at] ||= Time.now).client send(at_tz)
        end
        define_method(at_eq) do |time|
          self[at] = time.server(send(at_tz))
          time
        end
      end
    end
  end
end

class Time
  DateFormat = '%Y-%m-%d'
  TimeFormat = '%H:%M'

  DateRegexp = /\d\d\d\d-\d\d-\d\d/
  TimeRegexp = /\d\d:\d\d/
  def self.tz
    9
  end
  def client(at_tz = Time.tz)
    o = self.utc + (!@client ? 3600 * at_tz : 0)
    o.client!
    o
  end
  def server(at_tz = Time.tz)
    self.utc - (@client ? 3600 * at_tz : 0)
  end
  def client!
    @client = true
    self
  end
  def to_s
    strftime("#{DateFormat} #{TimeFormat}")
  end
end

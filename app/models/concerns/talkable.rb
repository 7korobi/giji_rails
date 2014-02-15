module Talkable
  extend ActiveSupport::Concern
  included do
    self.include_root_in_json = false

    validates_presence_of :date
    validates_uniqueness_of :logid, scope: :event_id
    scope :in_event, ->(event_id) { select(%i[logid mestype date subid talks.to color style log  name csid face_id sow_auth_id]).where(event_id: event_id).order("date asc") }
  end

  module ClassMethods
    def check_table
      sleep 2
      self.connection.execute(%Q| check table #{self.table_name} extended |).each.to_a
    end
    def is_extended_ok?
      check_table.last.last == "OK"
    end
  end
end
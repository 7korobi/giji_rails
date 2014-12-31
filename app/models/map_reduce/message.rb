# -*- coding: utf-8 -*-

class MapReduce::Message
  include Giji

  field :"value.all.undefined", as: :"all", type: Hash
  field :"value.face_id", as: :"faces", type: Hash
  field :"value.sow_auth_id", as: :"sow_auth_ids", type: Hash

  SAYS = {
    SS: "通常の発言",
    VS: "見物人発言",
    GS: "墓下の発言",
    TS: "独り言/内緒話",
    WS: "人狼のささやき",
    XS: "念話での会話",
  }
  SAYS_ORDER = SAYS.keys.map(&:to_s)

  def self.face_says(id)
    key = "value.face_id.#{id}"
    self.in(id:SAYS.keys).where(key.to_sym.exists => true).only(:_id, key).map do |o|
      if o[key]
        o[key]["logid_head"] = o.id
      end
      o[key]
    end.compact.sort_by{|o| SAYS_ORDER.index o["logid_head"]}
  end


  def self.generate
    MapReduce::MessageByStory.generate

    map = %Q{function() {
  var logid_head, logs, _ref, _results;

  _ref = this.value;
  _results = [];
  for (logid_head in _ref) {
    logs = _ref[logid_head];
    _results.push(emit(logid_head, logs));
  }
  return _results;
};}

    reduce = %Q{function(k, vs) {
  var counter, logs, v, _i, _len;

  counter = function(v, field) {
    var base, field_id, res, values, vv, _results;

    base = logs[field] || (logs[field] = {});
    values = v[field];
    _results = [];
    for (field_id in values) {
      vv = values[field_id];
      res = base[field_id] || (base[field_id] = {
        date: {
          min: vv.date.min,
          max: vv.date.max
        },
        max: 0,
        all: 0,
        count: 0,
        vil: 0
      });
      if (res.date.min > vv.date.min) {
        res.date.min = vv.date.min;
      }
      if (res.date.max < vv.date.max) {
        res.date.max = vv.date.max;
      }
      if (res.max < vv.max) {
        res.max = vv.max;
      }
      res.all += vv.all;
      res.count += vv.count;
      _results.push(res.vil += vv.vil || 1);
    }
    return _results;
  };
  logs = {};
  for (_i = 0, _len = vs.length; _i < _len; _i++) {
    v = vs[_i];
    counter(v, "all");
    counter(v, "face_id");
    counter(v, "sow_auth_id");
  }
  return logs;
};}
    scope = {}
    MapReduce::MessageByStory.map_reduce(map, reduce).scope(scope).out(replace: collection_name).reduced
  end
end
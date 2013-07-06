
class MapReduce::MessageByStory
  include Giji

  %w[SS VS TS GS].each do |key|
    field :"value.#{key}.face_id", as: :"#{key}_faces", type: Hash
    field :"value.#{key}.sow_auth_id", as: :"#{key}_sow_auth_ids", type: Hash
  end

  def self.generate
    map = %Q{function() {
  var counter, emits, logid_head, logs, v, _i, _len, _ref;

  if (!this.messages) {
    return;
  }
  counter = function(v, logs, field) {
    var base, key, res;

    key = v[field];
    base = logs[field] || (logs[field] = {});
    res = base[key] || (base[key] = {
      date: {
        min: v.date,
        max: v.date
      },
      max: 0,
      all: 0,
      count: 0
    });
    if (res.date.min > v.date) {
      res.date.min = v.date;
    }
    if (res.date.max < v.date) {
      res.date.max = v.date;
    }
    res.count += 1;
    if (v.log != null) {
      if (res.max < v.log.length) {
        res.max = v.log.length;
      }
      return res.all += v.log.length;
    }
  };
  emits = {};
  _ref = this.messages;
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    v = _ref[_i];
    if (!(-1 < deny_sow_auth_ids.indexOf(v.sow_auth_id))) {
      logid_head = v.logid.substring(0, 2);
      logs = emits[logid_head] || (emits[logid_head] = {});
      counter(v, logs, "all");
      counter(v, logs, "face_id");
      counter(v, logs, "sow_auth_id");
    }
  }
  return emit(this.story_id, emits);
};}

    reduce = %Q{function(k, vs) {
  var counter, emits, logid_head, logs, v, vv, _i, _len;

  counter = function(v, logs, field) {
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
        count: 0
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
      _results.push(res.count += vv.count);
    }
    return _results;
  };
  emits = {};
  for (_i = 0, _len = vs.length; _i < _len; _i++) {
    v = vs[_i];
    for (logid_head in v) {
      vv = v[logid_head];
      logs = emits[logid_head] || (emits[logid_head] = {});
      counter(vv, logs, "all");
      counter(vv, logs, "face_id");
      counter(vv, logs, "sow_auth_id");
    }
  }
  return emits;
};}
    done = MapReduce::MessageByStory.pluck("id")
    target = SowVillage.not.in(id: done).where(is_finish: true).pluck("id")
    scope = {
      deny_sow_auth_ids: %w[master admin a1 a2 a3 a4 a5 a6 a7 a8 a9],
    }
    Event.in(story_id: target).map_reduce(map, reduce).scope(scope).out(replace: collection_name).reduced
  end
end
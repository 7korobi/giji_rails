class MapReduce::Face
  include Giji

  field :"value.face_id", as: :face_id
  %w[win role folder story_id sow_auth_id].each do |key|
    field :"value.#{key}", as: :"#{key}", type: Hash
    case key
    when "story_id"
      sorter = ->((k,count)){ - k.split("-").last.to_i }
    else
      sorter = ->((k,count)){ - count }
    end
    define_method("#{key}s") do
      value = self["value.#{key}.value"]
      self["value.#{key}"]["keys"] = value.keys.sort_by{|k| - value[k]}
      value.sort_by(&sorter)
    end
  end

  def name
    ::Face.find(face_id).name
  end

  def says
    MapReduce::Message.face_says(face_id)
  end

  def self.generate
    map = %Q{function() {
  var deploy, folder, res, role, v, win, _i, _len, _ref, _ref1, _ref2, _ref3;

  deploy = function(v, field) {
    res[field] || (res[field] = {
      all: 1,
      max: 1,
      max_is: v,
      value: {}
    });
    return res[field].value[v] = 1;
  };
  res = {};
  folder = (_ref = this.story_id) != null ? (_ref1 = _ref.split("-")) != null ? _ref1[0] : void 0 : void 0;
  if (this.role != null) {
    _ref2 = this.role;
    for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
      v = _ref2[_i];
      deploy(v || "mob", "role");
      role = SOW.roles[v];
      if ((role != null ? role.win : void 0) != null) {
        win = (_ref3 = SOW.groups[role.win]) != null ? _ref3.name : void 0;
      }
    }
  }
  win || (win = "その他");
  deploy(win, "win");
  if (folder != null) {
    deploy(folder, "folder");
  }
  deploy(this.story_id, "story_id");
  deploy(this.sow_auth_id, "sow_auth_id");
  emit(this.face_id, res);
};}

    reduce = %Q{function(k, vs) {
  var counter, res, v, _i, _len;

  counter = function(v, field) {
    var count, o, _base, _ref, _results;

    o = res[field] || (res[field] = {
      all: 0,
      max: 0,
      max_is: null,
      value: {}
    });
    if (v[field] != null) {
      _ref = v[field].value;
      _results = [];
      for (k in _ref) {
        count = _ref[k];
        (_base = o.value)[k] || (_base[k] = 0);
        o.value[k] += count;
        o.all += count;
        if (o.max < o.value[k]) {
          o.max = o.value[k];
          _results.push(o.max_is = k);
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    }
  };
  res = {};
  for (_i = 0, _len = vs.length; _i < _len; _i++) {
    v = vs[_i];
    counter(v, "win");
    counter(v, "folder");
    counter(v, "story_id");
    counter(v, "role");
    counter(v, "sow_auth_id");
  }
  return res;
};}

    final = %Q{function(k, res) {
  res.face_id = k;
  return res
};}
    denies = {
      story_id: SowVillage.where(is_finish: false).pluck("id"),
      sow_auth_id: %w[master admin a1 a2 a3 a4 a5 a6 a7 a8 a9],
    }
    scope = {
      SOW: SOW,
    }
    Potof.not.in(denies).map_reduce(map,reduce).finalize(final).scope(scope).out(replace: collection_name).reduced
  end
end
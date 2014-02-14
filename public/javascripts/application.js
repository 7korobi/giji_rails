var AJAX;

AJAX = function($scope, $http) {
  var form_submit;
  $scope.replace_gon = function(data) {
    var code, codes, dom, _i, _len, _results;
    codes = data.match(/<script.*?>[\s\S]*?<\/script>/ig);
    if (codes != null) {
      _results = [];
      for (_i = 0, _len = codes.length; _i < _len; _i++) {
        dom = codes[_i];
        code = $(dom).text();
        if (code.match(/gon/) != null) {
          _results.push(eval(code));
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    }
  };
  $scope.get = function(href, cb) {
    return $http.get(href).success(function(data) {
      $scope.replace_gon(data);
      return cb();
    });
  };
  $scope.post = function(href, param, cb) {
    return $http.post(href, $.param(param)).success(function(data) {
      $scope.replace_gon(data);
      return cb();
    });
  };
  form_submit = function(param) {
    var form, key, tag, val;
    form = $("#submit_request");
    for (key in param) {
      val = param[key];
      if (val == null) {
        break;
      }
      tag = $("<input type=\"hidden\" name=\"" + key + "\">");
      tag.attr("value", val);
      form.append(tag);
    }
    form[0].submit();
    return $("#submit_request").remove();
  };
  $scope.post_submit = function(href, param) {
    $("body").append("<form id=\"submit_request\" method=\"post\" action=\"" + (href.escapeURL()) + "#" + location.hash + "\"></form>");
    form_submit(param);
    return $scope.pool_nolimit();
  };
  return $scope.post_iframe = function(href, param, cb) {
    var dynamic_div, iframe;
    dynamic_div = document.createElement('DIV');
    dynamic_div.innerHTML = "<iframe name=\"submit_result\" style=\"display: none;\"></iframe>";
    document.body.appendChild(dynamic_div);
    iframe = $('iframe');
    iframe[0].contentWindow.name = "submit_result";
    iframe.load(function() {
      $scope.pool_nolimit();
      return $('iframe').remove();
    });
    $("body").append("<form id=\"submit_request\" target=\"submit_result\" method=\"post\" action=\"" + (href.escapeURL()) + "\"></form>");
    return form_submit(param);
  };
};
angular.module("giji", ['ngTouch', 'ngCookies', 'ngAnimate']).config(function($locationProvider, $sceProvider) {
  $locationProvider.html5Mode(true);
  return $sceProvider.enabled(false);
}).run(function($templateCache, $compile) {
  var templateUrl, text;
  for (templateUrl in JST) {
    text = JST[templateUrl];
    $templateCache.put(templateUrl, text);
  }
});
angular.module("giji").directive("accordion", function() {
  return {
    restrict: "C",
    link: function($scope, elm, attr, ctrl) {
      elm.find("dd").hide();
      elm.find("dt").append('<div style="line-height:0; text-align:right; margin:-0.5ex 0 0.5ex 0;">↨</div>');
      return elm.on('click', 'dt', function($event) {
        elm.find("dd").hide();
        return elm.find(this).next().show('fast');
      });
    }
  };
});
angular.module("giji").directive("theme", function($compile) {
  return {
    restrict: "A",
    templateUrl: "navi/css",
    link: function($scope, elm, attr, ctrl) {
      var font, move, theme, width;
      font = OPTION.css.font;
      width = OPTION.css.width;
      width.options.current_type = Number;
      theme = OPTION.css.themes[attr.theme];
      move = function() {
        var css, css_font, date, value;
        value = "" + $scope.css.theme.value + $scope.css.width.value;
        date = new Date;
        css = "" + URL.file + "/stylesheets/" + value + ".css";
        if (css !== $("#giji_css").attr('href')) {
          $("#giji_css").attr('href', css);
        }
        css_font = "" + URL.file + "/stylesheets/font/" + $scope.css.font.value + ".css";
        if (css_font !== $("#giji_css_font").attr('href')) {
          $("#giji_css_font").attr('href', css_font);
        }
        $scope.h1 = {
          type: OPTION.head_img[value][(date / 60 * 60 * 12).ceil() % 2],
          width: OPTION.css.h1.widths[String($scope.css.width.value)]
        };
        $scope.h1.path = "" + URL.file + "/images/banner/title" + $scope.h1.width + $scope.h1.type + ".jpg";
        return $scope.adjust();
      };
      $scope.css = {};
      Navi.push($scope, 'css.width', width);
      Navi.push($scope, 'css.theme', theme);
      Navi.push($scope, 'css.font', font);
      $scope.css.width.watch.push(move);
      $scope.css.theme.watch.push(move);
      return $scope.css.font.watch.push(move);
    }
  };
});
angular.module("giji").directive("adjust", function($compile, $timeout) {
  var action_queue, effect, resize_page;
  win.info = {};
  action_queue = [];
  resize_page = function($scope) {
    var do_resize;
    do_resize = function() {
      var buttons, content, height, lim_left, outframe, width, _ref, _ref1;
      if (!(($scope.navi != null) && ($scope.css.width != null))) {
        return;
      }
      width = win.width;
      height = win.height;
      content = "contentframe";
      outframe = "outframe";
      switch ($scope.css.width.value) {
        case 800:
          lim_left = (778 - 770) / 2 + 187;
          win.info.width = (width - 770) / 2 + 187 - 60;
          if (lim_left < win.info.width) {
            content = "contentframe_navileft";
            outframe = "outframe_navimode";
            win.info.width = (width - 770) / 2 + 187 - 10;
          } else {
            content = "contentframe";
            outframe = "outframe";
            win.info.width = (width - 580) / 2;
          }
          break;
        case 480:
          win.info.width = width - 476;
      }
      buttons = FixedBox.list["#buttons"];
      if (buttons != null) {
        win.info.width_max = buttons.left - 8;
      } else {
        win.info.width_max = width - 40;
      }
      if ((_ref = $("#contentframe")[0]) != null) {
        _ref.className = content;
      }
      return (_ref1 = $("#outframe")[0]) != null ? _ref1.className = outframe : void 0;
    };
    return action_queue.push(do_resize);
  };
  effect = function($scope, adjust, element) {
    var do_resize;
    do_resize = function() {
      var gap, info_width, small;
      if (!(($scope.navi != null) && ($scope.css.width != null))) {
        return;
      }
      switch (adjust) {
        case 'left':
          small = 185;
          break;
        case 'full':
          small = win.info.width_max;
      }
      if (small < win.info.width) {
        info_width = win.info.width;
      } else {
        info_width = small;
      }
      gap = 0;
      if (head.browser.mozilla) {
        gap = 5;
      }
      if (head.browser.opera) {
        gap = 5;
      }
      if (head.browser.ie) {
        gap = 5;
      }
      if (head.browser.webkit && 480 === $scope.css.width.value) {
        gap = -10;
      }
      return element.css({
        width: info_width - gap
      });
    };
    return action_queue.push(do_resize);
  };
  $timeout(function() {
    return win.on_resize(function() {
      var action, _i, _len, _results;
      _results = [];
      for (_i = 0, _len = action_queue.length; _i < _len; _i++) {
        action = action_queue[_i];
        _results.push(action());
      }
      return _results;
    });
  }, 100);
  return {
    restrict: "A",
    link: function($scope, elm, attr, ctrl) {
      resize_page($scope);
      resize_page = function() {};
      return effect($scope, attr.adjust, elm);
    }
  };
});

angular.module("giji").directive("navi", function($compile, $timeout) {
  var effect;
  effect = function($scope, params) {
    var do_resize;
    do_resize = function() {
      if (!(($scope.navi != null) && ($scope.css.width != null))) {
        return;
      }
      if (params.show) {
        return params.element.css({
          display: ""
        });
      } else {
        return params.element.css({
          display: "none"
        });
      }
    };
    return $timeout(function() {
      return win.on_resize(do_resize);
    }, 100);
  };
  return {
    restrict: "A",
    link: function($scope, elm, attr, ctrl) {
      var attr_id, params, _ref;
      attr_id = "navi_" + attr.navi;
      elm.attr("id", attr_id);
      if (((_ref = $scope.navi) != null ? _ref.select : void 0) == null) {
        ArrayNavi.push($scope, 'navi', {
          options: {
            current: [],
            location: 'hash',
            is_cookie: false
          },
          button: {}
        });
        $scope.navi.watch.push(function() {
          return $scope.adjust();
        });
      }
      if (attr.name != null) {
        params = {
          name: attr.name,
          val: attr.navi,
          element: elm
        };
        effect($scope, params);
        $scope.navi.select.push(params);
      }
      return $scope.navi.popstate();
    }
  };
});
angular.module("giji").directive("log", [
  "$compile", "$sce", function($compile, $sce) {
    return {
      restrict: "A",
      link: function($scope, elm, attr, ctrl) {
        var anchor_ok, log, mark, num, style, table, target, template, _, _i, _len, _ref, _ref1, _ref2;
        log = $scope.message = $scope.$eval(attr.log);
        if ((log.template == null) && (log.logid != null) && (log.mestype != null) && (log.subid != null)) {
          log.sub1id = log.logid[0];
          log.sub2id = log.logid[1];
          template = null;
          _ref = GIJI.message.template;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            style = _ref[_i];
            for (target in style) {
              table = style[target];
              template || (template = table[log[target]]);
            }
          }
          log.template || (log.template = "message/" + template);
        }
        if ((log.img == null) && (log.face_id != null) && (log.csid != null)) {
          log.img || (log.img = $scope.img_cid(log.csid, log.face_id));
        }
        log.cancel_btn = function() {
          if ((this.logid != null) && "q" === this.logid[0] && ((new Date() - this.updated_at) < 25 * 1000)) {
            return $sce.trustAsHtml("<a class=\"mark\" href_eval='cancel_say(\"" + this.logid + "\")'>なら削除できます。⏳</a>");
          } else {
            return "";
          }
        };
        log.time = function() {
          return $scope.lax_time(this.updated_at);
        };
        if ((log.anchor == null) && (log.logid != null)) {
          _ref1 = log.logid.match(/(\D)\D+(\d+)/), _ = _ref1[0], mark = _ref1[1], num = _ref1[2];
          anchor_ok = false;
          anchor_ok || (anchor_ok = mark !== 'T');
          anchor_ok || (anchor_ok = (_ref2 = $scope.story) != null ? _ref2.is_epilogue : void 0);
          if ((SOW.log.anchor[mark] != null) && anchor_ok) {
            log.anchor || (log.anchor = "" + SOW.log.anchor[mark] + (Number(num)));
          } else {
            log.anchor || (log.anchor = "");
          }
        }
        if (log.text == null) {
          log.text = $scope.text_decolate(log.log);
          delete log.log;
        }
        return GIJI.template($compile, $scope, elm, log.template);
      }
    };
  }
]);

angular.module("giji").directive("drag", [
  function() {
    return {
      restrict: "A",
      link: function($scope, elm, attr, ctrl) {
        return $scope.$watch(attr.drag, function(log) {
          return elm.css({
            "z-index": log.z,
            "top": log.top
          });
        });
      }
    };
  }
]);
GIJI.jsts = {};

GIJI.template = function($compile, $scope, elm, name) {
  var compiled, template;
  template = JST[name];
  compiled = $compile(template)($scope);
  return elm.append(compiled);
};

angular.module("giji").directive("template", function($interpolate, $compile) {
  return {
    restrict: "A",
    link: function($scope, elm, attr, ctrl) {
      var name;
      name = attr.template;
      return GIJI.template($compile, $scope, elm, name);
    }
  };
});

angular.module("giji").directive("listup", function($compile) {
  return {
    restrict: "A",
    link: function($scope, elm, attr, ctrl) {
      elm.addClass('ng-binding').data('$binding', attr.listup);
      return $scope.$watch(attr.listup, function(value) {
        var compiled, template;
        template = "";
        if (value != null) {
          template = "<p>" + value.join("</p><p>") + "</p>";
        }
        compiled = $compile(template)($scope);
        return elm.html(compiled);
      });
    }
  };
});

angular.module("giji").directive("form", function($compile, $http) {
  return {
    restrict: "A",
    link: function($scope, elm, attr, ctrl) {
      elm.addClass('ng-binding').data('$binding', attr.form);
      return $scope.$watch(attr.form, function(value) {
        var compiled, template;
        template = JST["form/" + value];
        compiled = $compile(template)($scope);
        return elm.html(compiled);
      });
    }
  };
});

angular.module("giji").directive("diary", function($compile) {
  return {
    restrict: "A",
    link: function($scope, elm, attr, ctrl) {
      var form_text;
      form_text = $scope.$eval(attr.diary);
      form_text.ver = new Diary(form_text);
      form_text.ver.versions();
      return GIJI.template($compile, $scope, elm, "form/version");
    }
  };
});
var CARD;

CARD = function($scope) {
  $scope.name = {
    folder: function(o) {
      return o;
    },
    config: function(o) {
      var _ref, _ref1, _ref2;
      return ((_ref = SOW.roles[o]) != null ? _ref.name : void 0) || ((_ref1 = SOW.gifts[o]) != null ? _ref1.name : void 0) || ((_ref2 = SOW.events[o]) != null ? _ref2.name : void 0) || o || "";
    },
    group: function(o) {
      var _ref;
      return ((_ref = SOW.groups[o]) != null ? _ref.name : void 0) || "その他";
    },
    win: function(o) {
      var _ref;
      return ((_ref = SOW.wins[o]) != null ? _ref.name : void 0) || o || "";
    }
  };
  $scope.countup_config = function(list) {
    return $scope.countup($scope.name.config, list);
  };
  $scope.countup_win = function(list) {
    return $scope.countup($scope.name.win, list);
  };
  $scope.countup = function(filter, list) {
    var counts, group, key, val;
    counts = [];
    group = _.groupBy(list);
    for (key in group) {
      val = group[key];
      counts.push([key, val.length]);
    }
    return _.sortBy(counts, function(_arg) {
      var key, size;
      key = _arg[0], size = _arg[1];
      return size;
    }).map(function(_arg) {
      var key, size;
      key = _arg[0], size = _arg[1];
      if (1 < size) {
        return "" + (filter(key)) + "x" + size;
      } else {
        return "" + (filter(key));
      }
    });
  };
  return $scope.remove_card = function(at, idx) {
    return $scope.story.card[at].splice(idx, 1);
  };
};
var Diary, DiaryHistory;

DiaryHistory = (function() {
  function DiaryHistory(diary) {
    this.title = "" + diary.form.longname + diary.form.title;
    this.text = diary.form.text;
    this.key = diary.key;
  }

  return DiaryHistory;

})();

Diary = (function() {
  function Diary(f) {
    var filter,
      _this = this;
    filter = function(o) {
      return o.jst + o["switch"];
    };
    this.finder = function(o) {
      return _this.key === o.key;
    };
    this.form = f;
    this.key = filter(f);
    this.version = this.history().length + 1;
  }

  Diary.prototype.history = function() {
    return _.filter(Diary.history, this.finder);
  };

  Diary.prototype.versions = function() {
    var result, size, _i, _ref, _results;
    size = this.history().length;
    result = [];
    if (this.version <= size) {
      result = (function() {
        _results = [];
        for (var _i = _ref = this.version; _ref <= size ? _i <= size : _i >= size; _ref <= size ? _i++ : _i--){ _results.push(_i); }
        return _results;
      }).apply(this);
      result.reverse();
    }
    if (1 < this.version) {
      result.push(this.version - 1);
    }
    if (2 < this.version) {
      result.push(this.version - 2);
    }
    return result;
  };

  Diary.prototype.at = function() {
    return this.history()[this.version - 1];
  };

  Diary.prototype.title = function() {};

  Diary.prototype.commit = function() {
    Diary.base.commit(this);
    return this.version = this.history().length + 1;
  };

  Diary.prototype.back = function(version) {
    this.version = version;
    return this.form.text = this.at().text || "";
  };

  Diary.prototype.clear = function() {
    this.commit(this.form.text);
    return this.form.text = "";
  };

  Diary.history = [];

  return Diary;

})();

Diary.base = new Diary({
  text: ""
});

Diary.base.finder = function() {
  return true;
};

Diary.base.head = function() {
  Diary.base.at();
  if (typeof now !== "undefined" && now !== null) {
    return now.title;
  } else {
    return "手帳";
  }
};

Diary.base.commit = function(diary) {
  var item;
  if (diary.form.text.length === 0) {
    return;
  }
  item = new DiaryHistory(diary);
  _.remove(Diary.history, function(o) {
    return o.text === item.text && o.key === item.key;
  });
  Diary.history.push(item);
  return Diary.base.version = Diary.history.length + 1;
};
var FixedBox;

FixedBox = (function() {
  FixedBox.list = {};

  function FixedBox(dx, dy, fixed_box) {
    var _this = this;
    this.dx = dx;
    this.dy = dy;
    this.box = fixed_box;
    if (this.box) {
      this.box.css({
        left: 0,
        top: 0
      });
      win.on_resize(function() {
        return _this.resize();
      });
      win.on_scroll(function() {
        return _this.scroll();
      });
    }
  }

  FixedBox.prototype.resize = function() {
    var height, width;
    width = win.width - this.box.width();
    height = win.height - this.box.height();
    if (this.dx < 0) {
      this.left = this.dx + width;
    }
    if (0 < this.dx) {
      this.left = this.dx;
    }
    if (this.dy < 0) {
      this.top = this.dy + height;
    }
    if (0 < this.dy) {
      this.top = this.dy;
    }
    if (1 < win.zoom) {
      return this.box.css({
        display: "none"
      });
    } else {
      return this.box.css({
        display: ""
      });
    }
  };

  FixedBox.prototype.scroll = function() {
    var left, top;
    win.left = window.pageXOffset;
    win.top = window.pageYOffset;
    if (win.max.left < win.left) {
      win.left = win.max.left;
    }
    if (win.max.top < win.top) {
      win.top = win.max.top;
    }
    if (win.left < 0) {
      win.left = 0;
    }
    if (win.top < 0) {
      win.top = 0;
    }
    this.box.to_z_front();
    if (1 === win.zoom) {
      if (0 === this.dx) {
        this.box.css({
          position: "fixed",
          left: "",
          width: this.box.parent().width()
        });
      } else {
        this.box.css({
          position: "fixed"
        });
      }
      left = this.left + win.left;
      top = this.top;
      return this.translate(left, top);
    }
  };

  FixedBox.prototype.translate = function(left, top) {
    var transform, transition;
    if (head.csstransitions) {
      transition = "all 250ms ease";
      transform = "translate(" + left + "px, " + top + "px)";
      if (head.browser.webkit) {
        this.box.css("-webkit-transition", transition);
        this.box.css("-webkit-transform", transform);
      }
      if (head.browser.mozilla) {
        this.box.css("-moz-transition", transition);
        this.box.css("-moz-transform", transform);
      }
      if (head.browser.ie) {
        this.box.css("-ms-transition", transition);
        this.box.css("-ms-transform", transform);
      }
      if (head.browser.opera) {
        this.box.css("-o-transition", transition);
        this.box.css("-o-transform", transform);
      }
      this.box.css("transition", transition);
      return this.box.css("transform", transform);
    } else {
      return this.box.animate({
        left: left + "px",
        top: top + "px"
      }, {
        duration: 'fast',
        easing: 'swing',
        queue: false
      });
    }
  };

  return FixedBox;

})();

FixedBox.push = function($, dx, dy, key) {
  var _base;
  return (_base = FixedBox.list)[key] || (_base[key] = new FixedBox(dx, dy, $(key)));
};
var Form;

Form = (function() {
  function Form() {}

  Form.deploy = function() {
    var _this = this;
    return $(document).ready(function() {
      return $('#phase_input').change(function() {
        return $('#chr_vote_phase').val(value);
      });
    });
  };

  Form.submit_chr_vote = function(face_id) {
    var _ref;
    $('#chr_vote_face_id').val(face_id);
    return (_ref = $('form.chr_vote')[0]) != null ? _ref.submit() : void 0;
  };

  return Form;

})();
var CACHE;

CACHE = function($scope) {
  var cache, concat_merge, find_or_create, find_turn, merge, merge_by,
    _this = this;
  $scope.set_turn = function(turn) {
    var event, form;
    event = _.find($scope.events, function(o) {
      return o.turn === turn;
    });
    form = _.find($scope.forms, function(o) {
      return o.turn === turn;
    });
    if (event != null) {
      $scope.event = event;
    }
    if (form != null) {
      $scope.form = form;
    }
    return $scope.face.scan();
  };
  $scope.merge_turn = function(old_base, new_base) {
    var turn;
    if (!((old_base != null) && (new_base != null))) {
      return;
    }
    turn = find_turn(new_base);
    if (turn) {
      return $scope.set_turn(turn);
    }
  };
  $scope.merge = function(old_base, new_base, target) {
    var func;
    if (!((old_base != null) && (new_base != null))) {
      return;
    }
    if ((new_base.event != null) && (old_base.event != null)) {
      if (new_base.event.is_epilogue && !old_base.event.is_epilogue) {
        $scope.wary_messages();
      }
    }
    func = merge[target] || merge_by.copy;
    return func(old_base, new_base, target);
  };
  merge = {
    news: function(old_base, new_base, target) {
      var o, _i, _len, _ref;
      _ref = new_base.news;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        o = _ref[_i];
        o.is_news = Date.create('3days ago') < Date.create(o.date);
      }
      return merge_by.copy(old_base, new_base, target);
    },
    config: function(old_base, new_base, target) {
      merge_by.copy(old_base, new_base, target);
      return $scope.deploy_config();
    },
    face: function(old_base, new_base, target) {
      INIT_FACE(new_base.face);
      return merge_by.copy(old_base, new_base, target);
    },
    events: function(old_base, new_base, target) {
      var filter, guard, key, new_event, o, old_event, _i, _len, _ref;
      guard = function(key) {
        return _.include(["messages", "has_all_messages"], key);
      };
      filter = function(o) {
        return o.turn;
      };
      _ref = new_base.events;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        new_event = _ref[_i];
        INIT_MESSAGES(new_event);
      }
      merge_by.simple(old_base, new_base, "events", guard, filter);
      new_event = new_base.event;
      old_event = find_or_create(new_base, old_base, "events");
      if (new_event == null) {
        return;
      }
      for (key in new_event) {
        o = new_event[key];
        if (!guard(key)) {
          old_event[key] = o;
        }
      }
      old_event.has_all_messages || (old_event.has_all_messages = new_event.has_all_messages);
      merge._messages(old_event, new_event);
      merge._potofs(old_event, new_base);
      old_base.potofs = old_event.potofs;
      return old_base.event || (old_base.event = old_event);
    },
    event: function() {},
    _messages: function(old_base, new_base) {
      var filter, guard;
      guard = null;
      filter = function(o) {
        return o.logid;
      };
      INIT_MESSAGES(new_base);
      if (new_base.has_all_messages) {
        old_base.messages = [];
      }
      return merge_by.news(old_base, new_base, 'messages', guard, filter);
    },
    _potofs: function(old_base, new_base) {
      var filter, guard, potof, _i, _len, _ref;
      guard = null;
      filter = function(o) {
        return o.pno;
      };
      if ((new_base != null ? new_base.potofs : void 0) == null) {
        return;
      }
      if (new_base.turn != null) {
        _ref = new_base.potofs;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          potof = _ref[_i];
          potof.turn = new_base.turn;
        }
      }
      return merge_by.simple(old_base, new_base, "potofs", guard, filter);
    },
    forms: function() {},
    form: function(old_base, new_base) {
      var filter, guard, key, new_form, o, old_form;
      guard = function(key) {
        return _.include(["texts"], key);
      };
      filter = function(o) {
        return o.turn;
      };
      cache.load(old_base, new_base, 'forms', 'form');
      new_form = new_base.form;
      old_form = old_base.form;
      if (new_form == null) {
        return;
      }
      INIT_FORM(new_base.form);
      for (key in new_form) {
        o = new_form[key];
        if (!guard(key)) {
          old_form[key] = o;
        }
      }
      old_base.form || (old_base.form = old_form);
      return merge._form_texts(old_form, new_base.form);
    },
    _form_texts: function(old_base, new_base) {
      var filter, guard;
      guard = function(key) {
        return !_.include(["count", "targets", "votes"], key);
      };
      filter = function(o) {
        return o.jst + o["switch"];
      };
      if (!((old_base != null) && (new_base != null))) {
        return;
      }
      return merge_by.simple(old_base, new_base, "texts", guard, filter);
    }
  };
  merge_by = {
    copy: function(old_base, new_base, target) {
      return old_base[target] = new_base[target];
    },
    simple: function(old_base, new_base, target, guard, filter) {
      var news, olds;
      olds = old_base[target];
      news = new_base[target];
      if (news == null) {
        return;
      }
      if (olds == null) {
        old_base[target] = news;
        return;
      }
      return old_base[target] = concat_merge(olds, news, guard, filter);
    },
    news: function(old_base, new_base, target, guard, filter) {
      var news, olds;
      olds = old_base[target];
      news = new_base[target];
      if (news == null) {
        return;
      }
      if (olds == null) {
        old_base[target] = news;
        return;
      }
      return old_base[target] = concat_merge(olds, news, guard, filter);
    }
  };
  cache = {
    load: function(old_base, new_base, target, child) {
      var filter, guard;
      guard = function() {
        return false;
      };
      filter = function(o) {
        return o.turn;
      };
      old_base[target] || (old_base[target] = []);
      merge_by.simple(old_base, new_base, target, guard, filter);
      return old_base[child] = find_or_create(new_base, old_base, target);
    },
    build: function(new_base, field) {
      var event, _i, _len, _name, _ref, _results;
      if ((field != null) && ((new_base != null ? new_base.events : void 0) != null)) {
        _ref = new_base.events;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          event = _ref[_i];
          if (event.turn != null) {
            _results.push(field[_name = event.turn] || (field[_name] = {
              turn: event.turn
            }));
          } else {
            _results.push(void 0);
          }
        }
        return _results;
      }
    }
  };
  find_or_create = function(new_base, old_base, field_name) {
    var field, turn;
    field = old_base[field_name];
    cache.build(new_base, field);
    turn = find_turn(new_base);
    if ((turn != null) && (field != null) && field[turn]) {
      return field[turn];
    } else {
      return {};
    }
  };
  find_turn = function(new_base) {
    if ((new_base != null ? new_base.event : void 0) != null) {
      return new_base.event.turn;
    }
    if ((typeof old_base !== "undefined" && old_base !== null ? old_base.event : void 0) != null) {
      return old_base.event.turn;
    }
  };
  concat_merge = function(olds, news, guard, filter) {
    var key, new_item, o, old_hash, old_item, olds_head, _i, _j, _len, _len1, _ref, _ref1;
    olds_head = _.filter(olds, function(o) {
      return !o.is_delete;
    });
    old_hash = _.groupBy(olds_head, filter);
    if (guard != null) {
      for (_i = 0, _len = news.length; _i < _len; _i++) {
        new_item = news[_i];
        key = filter(new_item);
        old_item = (_ref = old_hash[key]) != null ? _ref[0] : void 0;
        if (old_item != null) {
          olds_head = _.without(olds_head, old_item);
          for (key in new_item) {
            o = new_item[key];
            if (!guard(key)) {
              old_item[key] = o;
            }
          }
          new_item = old_item;
        }
        olds_head.push(new_item);
      }
    } else {
      for (_j = 0, _len1 = news.length; _j < _len1; _j++) {
        new_item = news[_j];
        key = filter(new_item);
        old_item = (_ref1 = old_hash[key]) != null ? _ref1[0] : void 0;
        if (old_item != null) {
          olds_head = _.reject(olds_head, function(o) {
            return filter(old_item) === filter(o);
          });
        }
        olds_head.push(new_item);
      }
    }
    return olds_head;
  };
  return $scope.wary_messages = function() {
    var event, _i, _len, _ref, _results;
    if ($scope.events != null) {
      _ref = $scope.events;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        event = _ref[_i];
        _results.push(event.has_all_messages = false);
      }
      return _results;
    }
  };
};
var INIT, INIT_FORM, INIT_POTOFS;

INIT_FORM = function(new_base) {
  if ((new_base != null ? new_base.commands : void 0) == null) {
    return;
  }
  return new_base.command_group = _.groupBy(new_base.commands, function(o) {
    return o.jst;
  });
};

INIT_POTOFS = function($scope, gon) {
  var potof, _i, _len, _ref, _results;
  if (gon.potofs != null) {
    _ref = gon.potofs;
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      potof = _ref[_i];
      _results.push(INIT_POTOF($scope, potof, gon));
    }
    return _results;
  }
};

INIT = function($scope, $filter) {
  var has_messages, key, live_potofs, news, potof, potofs_hash, row, story, _i, _j, _len, _len1, _ref, _ref1, _ref2;
  if (typeof gon === "undefined" || gon === null) {
    return;
  }
  INIT_POTOFS($scope, gon);
  if (gon.stories != null) {
    _ref = gon.stories;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      story = _ref[_i];
      INIT_STORY($scope, story);
    }
  }
  if (gon.story != null) {
    INIT_STORY($scope, gon.story);
  }
  for (key in gon) {
    news = gon[key];
    $scope.merge($scope, gon, key);
  }
  $scope.merge_turn($scope, gon);
  if ($scope.potofs != null) {
    live_potofs = _.filter($scope.potofs, function(o) {
      return o.deathday < 0;
    });
    $scope.potofs.mob = function() {
      return _.filter($scope.potofs, function(o) {
        return "mob" === o.live;
      });
    };
    $scope.sum = {
      actaddpt: _.reduce(live_potofs, function(sum, o) {
        return sum + o.point.actaddpt;
      }, 0)
    };
    potofs_hash = {
      others: "他の人々"
    };
    _ref1 = $scope.potofs;
    for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
      potof = _ref1[_j];
      key = $scope.potof_key(potof);
      potofs_hash[key] = potof.name;
    }
    if ($scope.hide_potofs == null) {
      ArrayNavi.push($scope, 'hide_potofs', {
        options: {
          "class": 'btn-inverse',
          current: [],
          location: 'hash',
          is_cookie: true
        },
        button: potofs_hash
      });
    }
  }
  if ($scope.pages != null) {
    if ($scope.page == null) {
      PageNavi.push($scope, 'page', OPTION.page.page_search);
    }
    $scope.page.length = gon.pages.length;
  }
  has_messages = false;
  has_messages || (has_messages = ((_ref2 = $scope.event) != null ? _ref2.messages : void 0) != null);
  has_messages || (has_messages = $scope.messages_raw != null);
  has_messages || (has_messages = $scope.stories != null);
  if (has_messages) {
    row = OPTION.page.row;
    row.options.current_type = Number;
    if ($scope.row == null) {
      Navi.push($scope, 'row', row);
    }
    if ($scope.order == null) {
      Navi.push($scope, 'order', OPTION.page.order);
    }
    if ($scope.page == null) {
      return FILTER($scope, $filter);
    }
  }
};
var INIT_FACE;

INIT_FACE = function(new_base) {
  if (new_base.story_ids != null) {
    new_base.story_id_of_folders = _.groupBy(new_base.story_ids, function(_arg) {
      var count, k, _ref;
      k = _arg[0], count = _arg[1];
      return (_ref = k.split("-")) != null ? _ref[0] : void 0;
    });
  }
  if (new_base.wins != null) {
    return new_base.role_of_wins = _.groupBy(new_base.roles, function(_arg) {
      var count, k, role;
      k = _arg[0], count = _arg[1];
      role = SOW.gifts[k] || SOW.roles[k] || {
        group: "OTHER"
      };
      return SOW.groups[role.group].name;
    });
  }
};
var INIT_MESSAGES;

INIT_MESSAGES = function(new_base) {
  var message, _i, _len, _ref, _results;
  if ((new_base != null ? new_base.messages : void 0) == null) {
    return;
  }
  if (new_base.turn != null) {
    _ref = new_base.messages;
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      message = _ref[_i];
      message.turn = new_base.turn;
      if (message.date != null) {
        message.updated_at = message.date;
        delete message.date;
      }
      _results.push(message.updated_at = Date.create(message.updated_at));
    }
    return _results;
  }
};
var INIT_POTOF;

INIT_POTOF = function($scope, potof, gon) {
  var bonds, is_dead_lose, is_lone_lose, mask, pseudobonds, rolestate, text, win_check, winner, _i, _len, _ref, _ref1, _ref2, _ref3;
  if (potof.bonds != null) {
    bonds = _.map(potof.bonds, function(pno_or_pl) {
      return gon.potofs[pno_or_pl] || pno_or_pl;
    });
    potof.bonds = _.compact(bonds);
  }
  if (potof.pseudobonds != null) {
    pseudobonds = _.map(potof.pseudobonds, function(pno_or_pl) {
      return gon.potofs[pno_or_pl] || pno_or_pl;
    });
    potof.pseudobonds = _.compact(pseudobonds);
  }
  if (potof.role != null) {
    potof.win_result = "参加";
    if (gon.story != null) {
      win_check = function(potof, story) {
        var win, win_by_role, win_juror, win_love, win_zombie, zombie, _ref;
        win_by_role = function(list) {
          var role, win, _i, _len, _ref, _ref1;
          _ref = potof.role;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            role = _ref[_i];
            win = (_ref1 = list[role]) != null ? _ref1.win : void 0;
            if (win) {
              return win;
            }
          }
          return null;
        };
        zombie = 0x040;
        if (('TROUBLE' === story.type.game) && 0 === (potof.rolestate & zombie)) {
          win_zombie = 'WOLF';
        }
        if (('juror' === story.type.mob) && ('mob' === potof.live)) {
          win_juror = 'HUMAN';
        }
        win_love = (_ref = SOW.loves[potof.love]) != null ? _ref.win : void 0;
        win = win_juror || win_love || win_zombie || win_by_role(SOW.gifts) || win_by_role(SOW.roles) || "NONE";
        if (win === 'EVIL') {
          win = GIJI.folders[story.folder].evil;
        }
        return win;
      };
      potof.win = win_check(potof, gon.story);
      if (gon.story.is_finish) {
        winner = ((_ref = gon.event) != null ? _ref.winner : void 0) || (gon.events != null) && ((_ref1 = _.last(gon.events)) != null ? _ref1.winner : void 0);
        if ((gon.story != null) && (gon.event != null) && !GIJI.folders[gon.story.folder].role_play) {
          if (_.include(["LIVE_TABULA", "LIVE_MILLERHOLLOW", "SECRET"], gon.story.type.game)) {
            is_dead_lose = 1;
          }
          if ("LONEWOLF" === potof.win) {
            is_dead_lose = 1;
          }
          if ("HUMAN" === potof.win && "TROUBLE" === gon.story.type.game) {
            is_dead_lose = 1;
          }
          if ("HATER" === potof.win && !_.include(potof.role, "HATEDEVIL")) {
            is_dead_lose = 1;
          }
          if ("LOVER" === potof.win && !_.include(potof.role, "LOVEANGEL")) {
            is_lone_lose = 1;
          }
          potof.win_result = "敗北";
          if (winner === "WIN_" + potof.win) {
            potof.win_result = "勝利";
          }
          if (winner !== "WIN_HUMAN" && winner !== "WIN_LOVER" && "EVIL" === potof.win) {
            potof.win_result = "勝利";
          }
          if ("victim" === potof.live && "DISH" === potof.win) {
            potof.win_result = "勝利";
          }
          if (is_lone_lose && _.any(gon.potofs, function(o) {
            return o.live !== 'live' && _.any(o.bonds, potof.pno);
          })) {
            potof.win_result = "敗北";
          }
          if (is_dead_lose && 'live' !== potof.live) {
            potof.win_result = "敗北";
          }
          if ("NONE" === potof.win) {
            potof.win_result = "参加";
          }
        }
      }
    }
    if ("suddendead" === potof.live) {
      potof.win_result = "";
    }
    potof.win_name = (_ref2 = SOW.wins[potof.win]) != null ? _ref2.name : void 0;
    potof.role_names = potof.role.map($scope.name.config);
  } else {
    potof.role_names = [];
  }
  if (potof.select != null) {
    potof.select_name = $scope.name.config(potof.select);
  }
  potof.live || (potof.live = "");
  potof.live_name = SOW.live[potof.live] || " ";
  potof.auth = potof.sow_auth_id;
  potof.bond_names = _.map(potof.bonds, function(o) {
    return o.name;
  });
  potof.pseudobond_names = _.map(potof.pseudobonds, function(o) {
    return o.name;
  });
  potof.stat_type = SOW.live_caption[potof.live] || " ";
  if (potof.deathday < 0) {
    potof.stat_at = " ";
  } else {
    potof.stat_at = "" + potof.deathday + "日";
  }
  potof.stat = "" + potof.stat_at + " " + potof.live_name;
  potof.text = [];
  if (potof.rolestate != null) {
    rolestate = potof.rolestate;
    _ref3 = SOW.maskstate_order;
    for (_i = 0, _len = _ref3.length; _i < _len; _i++) {
      mask = _ref3[_i];
      if (0 === (rolestate & mask)) {
        text = SOW.maskstates[mask];
        if (text) {
          potof.text.push("" + text + " ");
        }
        rolestate |= mask;
      }
    }
  }
  if ('pixi' === potof.sheep) {
    potof.text.push("☑");
  }
  if ('love' === potof.love) {
    potof.text.push("♥");
  }
  if ('hate' === potof.love) {
    potof.text.push("☠");
  }
  if ('love' === potof.pseudolove) {
    potof.text.push("<s>♥</s>");
  }
  if ('hate' === potof.pseudolove) {
    potof.text.push("<s>☠</s>");
  }
  potof.said = "";
  potof.said_num = 0;
  if (0 < potof.point.saidcount) {
    potof.said_num += potof.point.saidcount;
    potof.said += " " + potof.point.saidcount + "回";
  }
  if (0 < potof.point.saidpoint) {
    potof.said_num += potof.point.saidpoint;
    potof.said += " " + potof.point.saidpoint + "pt";
  }
  if (potof.timer != null) {
    potof.timer.entrieddt = Date.create(potof.timer.entrieddt);
    potof.timer.limitentrydt = Date.create(potof.timer.limitentrydt);
    potof.timer.entried = function() {
      return $scope.lax_time(this.entrieddt);
    };
    potof.timer.entry_limit = function() {
      return $scope.lax_time(this.limitentrydt);
    };
  }
  potof.summary = function() {
    switch ($scope.potofs_order.value) {
      case 'said_num':
        return "✎" + this.said;
      case 'stat_at':
      case 'stat_type':
        return this.stat;
      case 'win_result':
      case 'win_name':
      case 'role_names':
        return this.role_names.join('、');
      case 'select_name':
        if (this.select_name) {
          return this.select_name + "を希望";
        } else {
          return "";
        }
        break;
      case 'text':
        return this.text.join('');
    }
  };
  return potof;
};
var INIT_STORY;

INIT_STORY = function($scope, story) {
  var event_config, role_config, role_wins, win_config, _base, _ref;
  event_config = _.filter(story.card.config, function(o) {
    return SOW.events[o];
  });
  role_config = _.filter(story.card.config, function(o) {
    return !SOW.events[o] && !SOW.specials[o];
  });
  role_wins = _.map(role_config, function(o) {
    var _ref, _ref1;
    return ((_ref = SOW.gifts[o]) != null ? _ref.win : void 0) || ((_ref1 = SOW.roles[o]) != null ? _ref1.win : void 0) || null;
  });
  win_config = _.filter(role_wins, function(o) {
    return o;
  });
  story.card.discard_names = $scope.countup_config(story.card.discard).join('、');
  story.card.config_names = $scope.countup_config(story.card.config).join('、');
  story.card.role_names = $scope.countup_config(role_config).join('、');
  story.card.win_names = $scope.countup_win(win_config).join('、');
  if (0 < event_config.length) {
    story.card.event_names = $scope.countup_config(event_config).join('、');
  } else {
    story.card.event_names = $scope.countup_config(story.card.event).join('、');
  }
  story.option_helps = _.map(story.options, function(o) {
    return SOW.options[o].help;
  });
  story.comment = $scope.text_decolate(story.comment);
  story.rating_url = "" + URL.file + "/images/icon/cd_" + story.rating + ".png";
  if (story.announce != null) {
    story.announce.rating = OPTION.rating[story.rating].caption;
  }
  if (story.upd != null) {
    story.upd.time_text = "" + (story.upd.hour.pad(2)) + "時" + (story.upd.minute.pad(2)) + "分";
    story.upd.interval_text = "" + (story.upd.interval * 24) + "時間";
  }
  if (story.type != null) {
    (_base = story.type).game || (_base.game = 'TABULA');
    story.type.roletable_text = SOW.roletable[story.type.roletable];
    story.type.game_rule = SOW.game_rule[story.type.game];
    story.type.vote_text = SOW.vote[story.type.vote];
    story.type.mob_text = SOW.mob[story.type.mob];
    story.type.saycnt = SOW.saycnt[story.type.say];
    if (1 === ((_ref = story.type.saycnt) != null ? _ref.RECOVERY : void 0)) {
      story.type.recovery = ' （発言の補充はありません。）';
      if (1 < story.upd.interval) {
        story.type.recovery = ' （発言の補充があります。）';
      }
    }
    story.is_wbbs = 'wbbs' === story.type.start;
  }
  return story;
};
var DIARY;

DIARY = function($scope) {
  $scope.diary = Diary.base;
  $scope.diary.copy = function(f) {
    $scope.navi.value_add('diary');
    f.ver.commit();
    f.text = Diary.base.form.text.trim();
    return Diary.base.form.text = "";
  };
  return $scope.diary.add = {
    anchor: function(message) {
      var turn;
      if ("" === message.anchor) {
        return;
      }
      $scope.navi.value_add('diary');
      turn = message.turn;
      return $scope.diary.form.text = ($scope.diary.form.text.trim() + "\n" + ("(>>" + turn + ":" + message.anchor + " " + message.name + ")")).trim();
    }
  };
};
var b, popstate, win;

if (head.browser != null) {
  b = head.browser;
  b.power = "pc";
  if (navigator.userAgent.toLowerCase().indexOf('android') !== -1) {
    b.android = true;
    b.power = "mobile";
  }
  if (navigator.userAgent.toLowerCase().indexOf('iphone') !== -1) {
    b.iphone = true;
    b.power = "mobile";
  }
  if (navigator.userAgent.toLowerCase().indexOf('ipad') !== -1) {
    b.iphone = true;
    b.power = "mobile";
  }
}

head.useragent = navigator.userAgent;

$("html").addClass(b.power);

win = {
  top: 0,
  left: 0,
  width: 0,
  height: 0,
  accel: 0,
  gravity: 0,
  rotate: 0,
  max: {
    top: 0,
    left: 0
  },
  zoom: 1,
  _zoom: 1,
  refresh: function() {
    var base_width;
    win.height = window.innerHeight || $(window).height();
    win.width = window.innerWidth || $(window).width();
    base_width = document.body.clientWidth || win.width;
    win.zoom = base_width / win.width;
    $("#outframe").height($("#contentframe").height() + win.height / 2);
    win.max = {
      top: $('body').height() - win.height,
      left: $('body').width() - win.width
    };
    if (win.zoom !== 1 && win._zoom === 1) {
      win.zoom_start();
    }
    if (win.zoom === 1 && win._zoom !== 1) {
      win.zoom_end();
    }
    return win._zoom = win.zoom;
  },
  zoom_start: function() {},
  zoom_end: function() {},
  history: function(title, href, hash) {},
  resize_event: function() {
    if ((window.onorientationchange != null) && !head.browser.android) {
      return 'orientationchange';
    } else {
      return 'resize';
    }
  },
  on_scroll: function(cb, delay) {
    delay || (delay = 500);
    $(window).on('scroll', _.throttle(cb, delay));
    return $(window).on(win.resize_event(), _.throttle(cb, 5000));
  },
  on_resize: function(cb, delay) {
    delay || (delay = 100);
    $(window).on(win.resize_event(), _.throttle(cb, delay));
    return $(window).on('scroll', _.throttle(cb, 5000));
  }
};

if ((typeof history !== "undefined" && history !== null ? history.pushState : void 0) != null) {
  popstate = function(e) {
    return Navi.popstate();
  };
  $(window).on('popstate', _.throttle(popstate, 100));
  win.history = function(title, href, hash) {
    href || (href = location.href.replace(/#.*/, ""));
    return history.replaceState(null, title, href + hash);
  };
} else {
  win.history = function(title, href, hash) {
    return location.hash = hash;
  };
}

angular.module("giji").run(function() {
  var dummy, scan_motion;
  win.on_scroll(win.refresh);
  win.on_resize(win.refresh);
  dummy = function() {};
  if (typeof ontouchstart !== "undefined" && ontouchstart !== null) {
    $(window).on('touchstart', _.throttle(dummy, 100));
    $(window).on('touchmove', _.throttle(dummy, 100));
    $(window).on('touchend', _.throttle(dummy, 100));
  } else {
    $(window).on('mousedown', _.throttle(dummy, 100));
    $(window).on('mouseup', _.throttle(dummy, 100));
    $(window).on('mousemove', _.throttle(dummy, 100));
  }
  scan_motion = function(e) {
    win.accel = e.originalEvent.acceleration;
    win.gravity = e.originalEvent.accelerationIncludingGravity;
    return win.rotate = e.originalEvent.rotationRate;
  };
  return $(window).on('devicemotion', _.throttle(scan_motion, 100));
});
var FILTER;

FILTER = function($scope, $filter) {
  var do_scrollTo, filter, filter_filter, filters, form_show, key, keys, mode_params, modes_change, navigator, page, scrollTo, _i, _j, _len, _len1, _ref;
  PageNavi.push($scope, 'page', OPTION.page.page);
  page = $scope.page;
  filter_filter = $filter('filter');
  if ($scope.stories != null) {
    page.filter_by('stories');
    page.filter_to('stories_find');
    filters = [
      {
        target: "rating",
        key: (function(o) {
          return o.rating;
        }),
        text: (function(key) {
          var _ref;
          return (_ref = OPTION.rating[key]) != null ? _ref.caption : void 0;
        })
      }, {
        target: "roletable",
        key: (function(o) {
          return o.type.roletable;
        }),
        text: (function(key) {
          return SOW.roletable[key];
        })
      }, {
        target: "game_rule",
        key: (function(o) {
          return o.type.game;
        }),
        text: (function(key) {
          var _ref;
          return (_ref = SOW.game_rule[key]) != null ? _ref.CAPTION : void 0;
        })
      }, {
        target: "potof_size",
        key: (function(o) {
          return String(_.last(o.vpl));
        }),
        text: (function(key) {
          return key + "人";
        })
      }, {
        target: "card_event",
        key: (function(o) {
          return o.card.event_names || "(なし)";
        }),
        text: String
      }, {
        target: "card_win",
        key: (function(o) {
          return o.card.win_names || "(なし)";
        }),
        text: String
      }, {
        target: "card_role",
        key: (function(o) {
          return o.card.role_names || "(なし)";
        }),
        text: String
      }, {
        target: "upd_time",
        key: (function(o) {
          return o.upd.time_text;
        }),
        text: String
      }, {
        target: "upd_interval",
        key: (function(o) {
          return o.upd.interval_text;
        }),
        text: String
      }
    ];
    for (_i = 0, _len = filters.length; _i < _len; _i++) {
      filter = filters[_i];
      keys = _.chain($scope.stories).map(filter.key).uniq().sort().value();
      navigator = {
        options: OPTION.page[filter.target].options,
        button: {
          ALL: "- すべて -"
        }
      };
      if (keys.length > 1) {
        for (_j = 0, _len1 = keys.length; _j < _len1; _j++) {
          key = keys[_j];
          navigator.button[key] = filter.text(key);
        }
      }
      Navi.push($scope, filter.target, navigator);
      page.filter("" + filter.target + ".value", function(key, list) {
        if ('ALL' === $scope[filter.target].value) {
          return list;
        } else {
          return _.filter(list, function(o) {
            return filter.key(o) === $scope[filter.target].value;
          });
        }
      });
    }
    Navi.push($scope, 'folder', OPTION.page.folder);
    page.filter('folder.value', function(key, list) {
      if ('ALL' === $scope.folder.value) {
        return list;
      } else {
        return _.filter(list, function(o) {
          return o.folder === $scope.folder.value;
        });
      }
    });
  }
  if ($scope.messages_raw != null) {
    page.filter_by('messages_raw');
    page.filter_to('messages');
    page.filter('messages_raw.length');
  }
  if (((_ref = $scope.event) != null ? _ref.messages : void 0) != null) {
    page.last_updated_at = function() {
      var _ref1;
      _ref = $scope.event.messages;
      if (_ref != null) {
        return (_ref1 = _.last(_ref)) != null ? _ref1.updated_at : void 0;
      }
    };
    page.filter_by('event.messages');
    page.filter_to('messages');
    page.filter('event.turn');
    page.filter('event.is_news');
    page.filter('page.last_updated_at()');
    $scope.deploy_mode_common();
    mode_params = _.groupBy(GIJI.modes, 'val');
    Navi.push($scope, 'search', {
      options: {
        current: "",
        location: 'hash',
        is_cookie: false
      }
    });
    Navi.push($scope, 'mode', {
      options: {
        current: $scope.mode_cache.talk,
        location: 'hash',
        is_cookie: false
      },
      select: GIJI.modes
    });
    $scope.modes = $.extend({}, $scope.mode.choice());
    modes_change = function(oldVal, newVal) {
      var mode;
      if ("info" === $scope.modes.face) {
        $scope.modes.last = false;
        $scope.modes.view = "open";
        $scope.navi.value_add("link");
      }
      if ("memo" === $scope.modes.face) {
        $scope.modes.open = true;
        if ("all" !== $scope.modes.view) {
          $scope.modes.view = "open";
        }
      }
      if ("open" === $scope.modes.view) {
        $scope.modes.open = true;
      }
      mode = _.compact(_.uniq([$scope.modes.face, $scope.modes.view, $scope.modes.open ? 'open' : void 0, $scope.modes.last ? 'last' : void 0, $scope.modes.player ? 'player' : void 0]));
      $scope.mode.value = mode.join("_");
      $scope.mode_select = _.filter($scope.mode.select, function(o) {
        return o.face === $scope.modes.face;
      });
      $scope.mode_cache[$scope.modes.face] = $scope.mode.value;
      return $scope.deploy_mode_common();
    };
    $scope.$watch('modes.face', modes_change);
    $scope.$watch('modes.view', modes_change);
    $scope.$watch('modes.open', modes_change);
    $scope.$watch('modes.last', modes_change);
    $scope.$watch('modes.player', modes_change);
    page.filter('mode.value', function(key, list) {
      var add_filter, add_filters, is_mob_open, mode_filter, mode_filters, open_filters, order, result, sublist, _ref1;
      $scope.modes = $.extend({}, $scope.mode.choice());
      is_mob_open = false;
      if ($scope.story != null) {
        if ('alive' === $scope.story.type.mob) {
          is_mob_open = true;
        }
        if ($scope.story.turn === 0) {
          is_mob_open = true;
        }
        if ($scope.story.is_epilogue) {
          is_mob_open = true;
        }
      }
      mode_filters = {
        info: /^[aAm]|(vilinfo)/,
        memo_all: /^(.M)/,
        memo_open: /^([qcaAmIMS][MX])/,
        talk_all: /^[^S][^M]\d+/,
        talk_think: /^[qcaAmIi][^M]\d+/,
        talk_clan: /^[qcaAmIi\-WPX][^M]\d+/,
        talk_all_open: /^.[^M]\d+/,
        talk_think_open: /^[qcaAmIiS][^M]\d+/,
        talk_clan_open: /^[qcaAmIi\-WPXS][^M]\d+/,
        talk_all_last: /^[^S][SX]/,
        talk_think_last: /^[qcaAmIi][SX]/,
        talk_clan_last: /^[qcaAmIi\-WPX][SX]/,
        talk_all_open_last: /^.[SX]/,
        talk_think_open_last: /^[qcaAmIiS][SX]/,
        talk_clan_open_last: /^[qcaAmIi\-WPXS][SX]/,
        talk_open: /^[qcaAmIS][^M]/,
        talk_open_last: /^[qcaAmIS][SX]/
      };
      if (is_mob_open) {
        open_filters = {
          talk_think_open_last: /^[qcaAmIiVS][SX]/,
          talk_think_open: /^[qcaAmIiVS][^M]\d+/,
          memo_open: /^([qcaAmIMVS][MX])/,
          talk_open: /^[qcaAmIVS][^M]/,
          talk_open_last: /^[qcaAmIVS][SX]/
        };
      } else {
        open_filters = {};
      }
      add_filters = {
        clan: function(o) {
          return "" !== o.to && (o.to != null);
        },
        think: function(o) {
          return "" === o.to && o.logid.match(/^T[^M]/);
        }
      };
      mode_filter = open_filters[$scope.modes.regexp];
      mode_filter || (mode_filter = mode_filters[$scope.modes.regexp]);
      add_filter = add_filters[$scope.modes.view];
      add_filter || (add_filter = function() {
        return false;
      });
      list = _.filter(list, function(o) {
        return o.logid.match(mode_filter) || add_filter(o);
      });
      order = function(o) {
        return o.order || o.updated_at;
      };
      if ($scope.modes.last) {
        result = [];
        _ref1 = _.groupBy(list, $scope.potof_key);
        for (key in _ref1) {
          sublist = _ref1[key];
          result.push(_.last(_.sortBy(sublist, order)));
        }
        return _.sortBy(result, order);
      } else {
        return _.sortBy(list, order);
      }
    });
    page.filter('hide_potofs.value', function(hide_faces, list) {
      var faces;
      if (_.include(hide_faces, 'others')) {
        hide_faces = hide_faces.concat($scope.face.others);
      }
      faces = _.difference($scope.face.all, hide_faces);
      return _.filter(list, function(o) {
        return _.some(faces, function(face) {
          return face === $scope.potof_key(o);
        });
      });
    });
  }
  page.filter('search.value', function(search, list) {
    $scope.search_input = search;
    return filter_filter(list, search);
  });
  page.paginate('row.value', function(page_per, list) {
    var from, page_no, to, _ref1;
    if ((_ref1 = $scope.event) != null ? _ref1.is_news : void 0) {
      $scope.page.visible = false;
      to = list.length;
      from = to - page_per;
      if (from < 0) {
        from = 0;
      }
      $scope.event.is_rowover = 0 < from;
    } else {
      $scope.page.visible = true;
      if ($scope.page.value > $scope.page.length) {
        $scope.page.value = $scope.page.length;
      }
      if ($scope.page.value < 1) {
        $scope.page.value = 1;
      }
      page_no = $scope.page.value;
      to = page_no * page_per + OPTION.page.pile;
      from = (page_no - 1) * page_per;
    }
    return list.slice(from, to);
  });
  page.filter('order.value', function(key, list) {
    if ("desc" === key) {
      list.reverse();
    }
    return list;
  });
  do_scrollTo = function() {
    $scope.anchors = [];
    return $scope.go.messages();
  };
  scrollTo = _.debounce(do_scrollTo, 500);
  form_show = function() {
    var _k, _len2, _ref1, _results;
    $scope.anchors = [];
    if ($scope.modes != null) {
      $scope.form_show = {};
      _ref1 = $scope.modes.form;
      _results = [];
      for (_k = 0, _len2 = _ref1.length; _k < _len2; _k++) {
        key = _ref1[_k];
        _results.push($scope.form_show[key] = true);
      }
      return _results;
    }
  };
  $scope.$watch(page.to_key, scrollTo);
  $scope.$watch('mode.value', form_show);
  $scope.$watch('event.is_news', form_show);
  return $scope.$watch('event.is_news', $scope.deploy_mode_common);
};
var FORM;

FORM = function($scope, $sce) {
  var calc_length, calc_point, preview, submit, valid;
  $scope.stories_is_small = true;
  calc_length = function(text) {
    var ascii, other;
    if (text == null) {
      return 0;
    }
    ascii = text.match(/[\x01-\xff]/g) || [];
    other = text.match(/[^\x01-\xff]/g) || [];
    return ascii.length + other.length * 2;
  };
  calc_point = function(size) {
    var point;
    point = 20;
    if (50 < size) {
      point += (size - 50) / 14;
    }
    return point.floor();
  };
  valid = function(f, cb) {
    var lines, mark, point, size, text;
    f.valid = true;
    text = f.text.replace(/\n$/g, '\n ');
    if (f.max) {
      lines = text.split("\n").length;
      size = calc_length(text);
      point = calc_point(size, lines);
      f.lines = 5;
      cb(size, lines);
      if (f.max.size < size) {
        f.valid = false;
      }
      if (f.max.line < lines) {
        f.valid = false;
      }
      if (f.valid) {
        f.error = "";
        if ('point' === f.max.unit) {
          mark = "" + point + "pt ";
        } else {
          mark = "";
        }
      } else {
        f.error = "cautiontext";
        mark = "⊘";
      }
      return $sce.trustAsHtml("" + mark + " " + size + "<sub>/" + f.max.size + "字</sub>  " + lines + "<sub>/" + f.max.line + "行</sub>");
    } else {
      return "";
    }
  };
  submit = function(f, param) {
    var _ref;
    if (f) {
      if ((_ref = $scope.errors) != null) {
        _ref[f.cmd] = null;
      }
      f.is_delete = true;
      switch (f.cmd) {
        case "wrmemo":
          f.is_preview = false;
          break;
        case "write":
          f.is_preview = false;
          f.text = "";
          break;
        case "action":
          f.text = "";
          f.target = "-1";
          f.action = "-99";
          break;
      }
    }
    return $scope.submit(param, function() {});
  };
  preview = function(text) {
    if (text != null) {
      return $scope.preview_decolate(text.escapeHTML().replace(/&#x2f;/g, "/").replace(/\n/g, "<br>"));
    } else {
      return "";
    }
  };
  $scope.error = function(f) {
    var list, _ref;
    list = (_ref = $scope.errors) != null ? _ref[f != null ? f.cmd : void 0] : void 0;
    list || (list = []);
    return list.join("<br>");
  };
  $scope.text_valid = function(f) {
    return valid(f, function(size, lines) {
      if (calc_length(f.text.replace(/\s/g, '')) < 4) {
        f.valid = false;
      }
      switch (f.cmd) {
        case "wrmemo":
          if (f.text === "") {
            return f.valid = true;
          }
          break;
      }
    });
  };
  $scope.action_valid = function(f) {
    return valid(f, function(size, lines) {
      if (f.target === "-1" && f.action !== "-99") {
        f.valid = false;
      }
      if (size < 1) {
        if (f.target === "-1") {
          f.valid = false;
        }
        if (f.action === "-99") {
          return f.valid = false;
        }
      } else {
        if (calc_length(f.text.replace(/\s/g, '')) < 4) {
          return f.valid = false;
        }
      }
    });
  };
  $scope.preview_action = function(f) {
    var target, text, _ref;
    text = 0 < ((_ref = f.text) != null ? _ref.length : void 0) ? preview(f.text.replace(/\n$/g, '\n ')) : $scope.option(f.actions, f.action).name.replace(/\(.*\)$/, "");
    target = -1 < f.target ? $scope.option(f.targets, f.target).name : "";
    return "" + f.shortname + "は、" + target + text;
  };
  $scope.option = function(list, key) {
    var find;
    find = _.find(list, function(o) {
      return o.val === key;
    });
    if (find != null) {
      return find;
    } else {
      return {};
    }
  };
  $scope.entry = function(f, valid) {
    var param;
    if (f.disabled) {
      return;
    }
    if (valid && f.is_preview) {
      param = {
        cmd: 'entry',
        turn: $scope.event.turn,
        vid: $scope.story.vid,
        csid_cid: f.csid_cid,
        role: f.role,
        mes: f.text.replace(/\n$/g, '\n '),
        entrypwd: f.password,
        target: -1,
        monospace: 0
      };
      if (SOW.monospace[f.style]) {
        param.monospace = SOW.monospace[f.style];
      }
      return submit(f, param);
    } else {
      if (f.ver != null) {
        f.ver.commit();
      }
      f.is_preview = valid;
      return f.preview = preview(f.text.replace(/\n$/g, '\n '));
    }
  };
  $scope.write = function(f, valid) {
    var param;
    if (f.disabled) {
      return;
    }
    if (f.ver != null) {
      f.ver.commit();
    }
    if (valid && f.is_preview) {
      param = {
        cmd: f.cmd,
        safety: "on",
        turn: $scope.event.turn,
        vid: $scope.story.vid,
        mes: f.text.replace(/\n$/g, '\n '),
        monospace: 0
      };
      if (SOW.monospace[f.style]) {
        param.monospace = SOW.monospace[f.style];
      }
      if (f["switch"]) {
        param[f["switch"]] = "on";
      }
      if (f.target != null) {
        param.target = f.target;
      }
      return submit(f, param);
    } else {
      f.is_preview = valid;
      return f.preview = preview(f.text.replace(/\n$/g, '\n '));
    }
  };
  $scope.action = function(f, valid) {
    var param;
    if (f.disabled) {
      return;
    }
    if (valid) {
      param = {
        cmd: "action",
        turn: $scope.event.turn,
        vid: $scope.story.vid,
        target: f.target,
        actionno: f.action,
        actiontext: f.text,
        monospace: 0
      };
      return submit(f, param);
    }
  };
  $scope.vote_change = function(f) {
    if ($scope.errors != null) {
      return $scope.errors[f.cmd] = ["" + f.title + "をクリックしましょう。"];
    }
  };
  $scope.vote = function(f) {
    var param;
    if (f.disabled) {
      return;
    }
    param = {
      cmd: f.cmd,
      vid: $scope.story.vid,
      target: f.target1,
      target2: f.target2
    };
    switch (f.cmd) {
      case 'vote':
        param.entrust = '';
        break;
      case 'entrust':
        param.entrust = 'on';
    }
    return submit(f, param);
  };
  $scope.commit = function(f) {
    var param;
    if (f.disabled) {
      return;
    }
    param = {
      cmd: f.cmd,
      vid: $scope.story.vid,
      commit: f.commit
    };
    return submit(f, param);
  };
  return $scope.confirm = function(f) {
    var param, target_name, _ref;
    if (f.disabled) {
      return;
    }
    if (f.jst === "target") {
      if (!((_ref = $scope.form.command_targets) != null ? _ref.length : void 0)) {
        return;
      }
      f.target = $scope.form.command_target;
      target_name = $scope.option($scope.form.command_targets, $scope.form.command_target).name;
    }
    if (target_name) {
      $scope.form.confirm = "" + target_name + " - " + f.title;
    } else {
      $scope.form.confirm = f.title;
    }
    param = _.omit(f, ['$$hashKey', 'is_delete', 'targets', 'title', 'jst']);
    param.vid = $scope.story.vid;
    $scope.confirm_cancel = function() {
      return $scope.form.confirm = null;
    };
    return $scope.confirm_complete = function() {
      var _i, _len, _ref1, _results;
      $scope.form.confirm = null;
      submit(f, param);
      _ref1 = $scope.form.texts;
      _results = [];
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        f = _ref1[_i];
        _results.push(f.is_delete = true);
      }
      return _results;
    };
  };
};
var GO;

GO = function($scope) {
  var go_anker;
  go_anker = function(anker) {
    var target;
    target = $($(anker)[0]);
    return $(window).scrollTop(target.offset().top - 20);
  };
  return $scope.go = {
    messages: function() {
      return go_anker("#messages");
    },
    forms: function() {
      return go_anker("#forms");
    },
    search: function() {
      return $($("[ng-model=\"search_input\"]")[0]).focus();
    }
  };
};
var HREF_EVAL;

HREF_EVAL = function($scope) {
  var cancel_say, external, foreground, href_eval, href_eval_event, inner, navi, popup, popup_apply;
  href_eval_event = null;
  navi = function(link) {
    $scope.navi.move(link);
    if ($scope.potofs != null) {
      $scope.potofs_is_small = false;
      $scope.secret_is_open = true;
    }
    return $scope.$apply();
  };
  cancel_say = function(queid) {
    return $scope.submit({
      cmd: 'cancel',
      queid: queid,
      turn: $scope.event.turn,
      vid: $scope.story.vid
    });
  };
  inner = function(cmd, val) {
    var item;
    item = $(href_eval_event.target);
    if (0 > item.html().indexOf(cmd)) {
      return item.html("" + val + " ⇠ " + cmd);
    } else {
      return item.html("" + val);
    }
  };
  external = function(id, uri, protocol, host, path) {
    var idx, item;
    item = _.find($scope.anchors, function(log) {
      return log.logid === id;
    });
    idx = $scope.anchors.indexOf(item);
    if (idx < 0) {
      item = {
        template: "message/external",
        mestype: "XSAY",
        turn: -1,
        logid: id,
        protocol: protocol,
        host: host,
        path: path,
        uri: uri,
        top: $scope.pageY + 24,
        z: Date.now()
      };
      return $scope.anchors.push(item);
    } else {
      return $scope.anchors.splice(idx, 1);
    }
  };
  popup_apply = function(item, turn) {
    var idx;
    idx = $scope.anchors.indexOf(item);
    if (idx < 0) {
      $scope.anchors.push(item);
      item.turn = turn;
      item.z = Date.now();
      item.top = $scope.pageY + 24;
    } else {
      $scope.anchors.splice(idx, 1);
    }
    return idx;
  };
  popup = function(turn, ank) {
    var href, popup_ajax, popup_find;
    href = location.href.replace(location.hash, "");
    popup_find = function(turn) {
      var event, item, list;
      if (turn < 0) {
        list = $scope.anchors;
      } else {
        event = $scope.events[turn];
        if ((event != null ? event.messages : void 0) == null) {
          return null;
        }
        list = event.messages;
      }
      item = _.find(list, function(log) {
        return log.logid === ank;
      });
      if (item) {
        popup_apply(item, turn);
      }
      return item;
    };
    popup_ajax = function(turn, seek) {
      var event;
      event = $scope.events[turn];
      if (event == null) {
        return;
      }
      if (event.has_all_messages) {
        return seek();
      } else {
        return $scope.get_all(event, function() {
          var is_news;
          if (turn === gon.event.turn) {
            is_news = $scope.event.is_news;
            $scope.merge($scope, gon, "events");
            $scope.event.is_news = is_news;
          }
          return seek();
        });
      }
    };
    if (!popup_find(turn)) {
      return popup_ajax(turn, function() {
        if (!popup_find(turn)) {
          return popup_ajax(turn - 1, function() {
            return popup_find(turn - 1);
          });
        }
      });
    }
  };
  href_eval = function(e) {
    href_eval_event = e;
    $scope.$apply(function() {
      $scope.pageY = e.pageY;
      return eval($(e.target).attr('href_eval'));
    });
    return $(window).scroll();
  };
  foreground = function(e) {
    return $scope.$apply(function() {
      var item, logid;
      logid = $(e.target).find("[name]").attr('name');
      item = _.find($scope.anchors, function(o) {
        return logid = o.logid;
      });
      return item != null ? item.z = Date.now() : void 0;
    });
  };
  $('#messages').on('click', '.drag', foreground);
  $('#messages').on('click', '[href_eval]', href_eval);
  $('#forms').on('click', '[href_eval]', href_eval);
  return $('#sayfilter').on('click', '[href_eval]', href_eval);
};
var Navi;

Navi = (function() {
  Navi.list = {};

  Navi.prototype.location_val = function(find_key) {
    var hash_str, key, key_value, value, _i, _len, _ref, _ref1;
    if (location[this.params.location]) {
      hash_str = location[this.params.location].replace(/^[#?]/, "");
      _ref = hash_str.split('&');
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        key_value = _ref[_i];
        _ref1 = key_value.split('='), key = _ref1[0], value = _ref1[1];
        if (key === find_key) {
          return decodeURIComponent(value);
        }
      }
    }
  };

  Navi.prototype.move = function(newVal) {
    if (newVal != null) {
      this.value = this.params.current_type(newVal);
    }
    return this.value;
  };

  Navi.prototype.choice = function() {
    var _this = this;
    return _.find(this.select, function(o) {
      return o.val === _this.value;
    });
  };

  Navi.prototype.popstate = function() {
    var c, l,
      _this = this;
    l = this.location_val(this.key);
    if (this.params.is_cookie != null) {
      c = win.cookies[this.key];
    }
    this.value = this.params.current_type(l || c || "");
    if ((this.select != null) && _.every(this.select, function(o) {
      return _this.value !== o.val;
    })) {
      this.value = "";
    }
    return this.value || (this.value = this.params.current_type(this.params.current));
  };

  function Navi($scope, key, def) {
    var btn_key, btn_val, _base, _base1, _ref,
      _this = this;
    this.scope = $scope;
    this.params = def.options;
    (_base = this.params).current_type || (_base.current_type = String);
    (_base1 = this.params)["class"] || (_base1["class"] = 'btn-success');
    this.of = {};
    this.key = key;
    this.watch = [];
    if (def.button != null) {
      this.select = [];
      _ref = def.button;
      for (btn_key in _ref) {
        btn_val = _ref[btn_key];
        this.select.push({
          name: btn_val,
          val: this.params.current_type(btn_key)
        });
      }
    } else {
      this.select = def.select;
    }
    this.popstate();
    this.scope.$watch("" + this.key + ".value", function(value, oldVal) {
      var cmd, expire, func, list, navi, options, val_hash, val_search, _, _i, _len, _name, _ref1, _ref2;
      _this._move();
      _ref1 = _this.watch;
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        func = _ref1[_i];
        func(_this.value);
      }
      list = {};
      _ref2 = Navi.list;
      for (_ in _ref2) {
        navi = _ref2[_];
        options = navi.params;
        if (navi.value) {
          cmd = "" + navi.key + "=" + navi.value;
          if (options.location != null) {
            list[_name = options.location] || (list[_name] = []);
            list[options.location].push(cmd);
          }
          if (options.is_cookie) {
            expire = new Date().advance(OPTION.cookie.expire);
            document.cookie = "" + cmd + "; expires=" + (expire.toGMTString()) + "; path=/";
          }
        }
      }
      if (list.search) {
        val_search = "?" + list.search.join("&");
        if (location.search !== val_search) {
          location.search = val_search;
        }
      }
      if (list.hash) {
        if (list.hash) {
          val_hash = "#" + list.hash.join("&");
        }
        if (location.hash !== val_hash) {
          return win.history(null, null, val_hash);
        }
      }
    });
  }

  Navi.prototype._move = function() {
    var o, _i, _len, _ref, _results;
    if (this.select != null) {
      _ref = this.select;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        o = _ref[_i];
        this.of[o.val] = o;
        if (o.val === this.value) {
          o["class"] = this.params["class"];
          _results.push(o.show = true);
        } else {
          o["class"] = null;
          _results.push(o.show = false);
        }
      }
      return _results;
    }
  };

  return Navi;

})();

Navi.popstate = function() {
  var navi, _i, _len, _ref, _results;
  _ref = Navi.list;
  _results = [];
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    navi = _ref[_i];
    _results.push(navi.popstate());
  }
  return _results;
};

Navi.push = function($scope, key, def) {
  var navi;
  navi = Navi.list[key] = new Navi($scope, key, def);
  return eval("$scope." + key + " = navi");
};
var ArrayNavi,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ArrayNavi = (function(_super) {
  __extends(ArrayNavi, _super);

  function ArrayNavi($scope, key, def) {
    ArrayNavi.__super__.constructor.apply(this, arguments);
  }

  ArrayNavi.prototype.popstate = function() {
    var c, l, o, value, _i, _len, _ref;
    l = this.location_val(this.key);
    if (this.params.is_cookie != null) {
      c = win.cookies[this.key];
    }
    value = [];
    _ref = (l || c || "").split(",");
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      o = _ref[_i];
      if ((this.select != null) && _.every(this.select, function(s) {
        return o !== s.val;
      })) {
        break;
      }
      value.push(this.params.current_type(o));
    }
    this.value = value;
    if (this.value.length < 1) {
      return this.value = this.params.current;
    }
  };

  ArrayNavi.prototype.blank = function() {
    return this.value = [];
  };

  ArrayNavi.prototype.value_add = function(newVal) {
    this.value = _.without(this.value, newVal);
    this.value.push(newVal);
    return this.value;
  };

  ArrayNavi.prototype.value_del = function(newVal) {
    return this.value = _.without(this.value, newVal);
  };

  ArrayNavi.prototype.move = function(newVal) {
    if (newVal != null) {
      newVal = this.params.current_type(newVal);
      if (_.include(this.value, newVal)) {
        return this.value_del(newVal);
      } else {
        return this.value_add(newVal);
      }
    } else {
      return this.value;
    }
  };

  ArrayNavi.prototype._move = function() {
    var o, _i, _len, _ref, _results;
    this.hide = this.value.length < 1;
    if (this.select != null) {
      _ref = this.select;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        o = _ref[_i];
        this.of[o.val] = o;
        if (_.include(this.value, o.val)) {
          o["class"] = this.params["class"];
          _results.push(o.show = true);
        } else {
          o["class"] = null;
          _results.push(o.show = false);
        }
      }
      return _results;
    }
  };

  ArrayNavi.prototype.choice = function() {
    var _this = this;
    return _.find(this.select, function(o) {
      return o.val === _this.value[0];
    });
  };

  ArrayNavi.prototype.choices = function() {
    var _this = this;
    return _.map(this.value, function(value) {
      return _.find(_this.select, function(o) {
        return o.val === value;
      });
    });
  };

  return ArrayNavi;

})(Navi);

ArrayNavi.push = function($scope, key, def) {
  var navi;
  navi = Navi.list[key] = new ArrayNavi($scope, key, def);
  return eval("$scope." + key + " = navi");
};
var PageNavi,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

PageNavi = (function(_super) {
  __extends(PageNavi, _super);

  function PageNavi($scope, key, def) {
    var _base;
    def.options.current_type = Number;
    (_base = def.options).per || (_base.per = 1);
    PageNavi.__super__.constructor.apply(this, arguments);
    this.filters = [];
    this.pagers = [];
  }

  PageNavi.prototype.do_filters = function(list, filters) {
    var filter, target, target_key, _i, _len, _ref;
    for (_i = 0, _len = filters.length; _i < _len; _i++) {
      _ref = filters[_i], target_key = _ref[0], filter = _ref[1];
      target = this.scope.$eval(target_key);
      if (target) {
        list = filter(target, list);
      }
    }
    return list;
  };

  PageNavi.prototype.paginate = function(page_per_key, func) {
    var _this = this;
    this.pager(page_per_key, function(page_per, list) {
      _this.length = (list.length / page_per).ceil();
      return list;
    });
    this.pager(page_per_key, func);
    return this.pager("" + this.key + ".value", function(page, list) {
      if (list.last) {
        _this.item_last = _.last(list);
      }
      return list;
    });
  };

  PageNavi.prototype.pager = function(key, func) {
    var _this = this;
    this.scope.$watch(key, function() {
      var list;
      if (_this.list_by_filter != null) {
        list = _this.do_filters(_this.list_by_filter, _this.pagers);
        if ((_this.to_key != null) && list) {
          eval("_this.scope." + _this.to_key + " = list");
        }
      }
      return _this._move();
    });
    if (func) {
      return this.pagers.push([key, func]);
    }
  };

  PageNavi.prototype.filter_by = function(by_key) {
    return this.by_key = by_key;
  };

  PageNavi.prototype.filter_to = function(to_key) {
    return this.to_key = to_key;
  };

  PageNavi.prototype.filter = function(key, func) {
    var _this = this;
    this.scope.$watch(key, function() {
      var list;
      if (_this.by_key != null) {
        _this.list_by_filter = _this.do_filters(_this.scope.$eval(_this.by_key), _this.filters);
        list = _this.do_filters(_this.list_by_filter, _this.pagers);
        if ((_this.to_key != null) && list) {
          eval("_this.scope." + _this.to_key + " = list");
        }
      }
      return _this._move();
    });
    if (func) {
      return this.filters.push([key, func]);
    }
  };

  PageNavi.prototype.hide = function() {
    var item, key, _ref, _results;
    _ref = this.of;
    _results = [];
    for (key in _ref) {
      item = _ref[key];
      _results.push(item["class"] = 'ng-cloak');
    }
    return _results;
  };

  PageNavi.prototype._move = function() {
    var is_show, item, key, n, show, _i, _ref, _results, _results1;
    this.select = _.map((function() {
      _results = [];
      for (var _i = 1, _ref = this.length; 1 <= _ref ? _i <= _ref : _i >= _ref; 1 <= _ref ? _i++ : _i--){ _results.push(_i); }
      return _results;
    }).apply(this), function(i) {
      return {
        name: i,
        val: i,
        "class": i === this.value ? this.params["class"] : null
      };
    });
    n = {
      first: 1,
      second: 2,
      prev: this.value - 1,
      current: this.value,
      next: this.value + 1,
      penu: this.length - 1,
      last: this.length
    };
    show = {
      first: 0 < this.length && n.first < n.prev,
      second: 1 < this.length && n.second < n.prev,
      last: 2 < this.length && n.next < n.last,
      penu: 3 < this.length && n.next < n.penu,
      prev_gap: 3 + 1 < this.value,
      prev: 1 < this.value,
      current: true,
      next: this.value < this.length,
      next_gap: this.value < this.length - 3
    };
    this.of = {};
    _results1 = [];
    for (key in show) {
      is_show = show[key];
      item = _.extend({}, _.find(this.select, function(o) {
        return o.val === n[key];
      }));
      item || (item = {
        name: "",
        val: null
      });
      item["class"] = 'ng-cloak';
      if (this.visible && is_show) {
        item["class"] = null;
        if (this.value === n[key]) {
          item["class"] = this.params["class"];
        }
      }
      _results1.push(this.of[key] = item);
    }
    return _results1;
  };

  return PageNavi;

})(Navi);

PageNavi.push = function($scope, key, def) {
  var navi, _base;
  navi = (_base = Navi.list)[key] || (_base[key] = new PageNavi($scope, key, def));
  return eval("$scope." + key + " = navi");
};
var POOL;

POOL = function($scope, $filter, $timeout) {
  var adjust, ajax_timer, apply, message_first, message_timer, pool_button, pool_start, refresh;
  message_timer = 60 * 1000;
  message_first = 25 * 1000;
  ajax_timer = 5 * 60 * 1000;
  apply = function() {};
  $scope.init = function() {
    INIT($scope, $filter);
    if ($scope.event != null) {
      $scope.do_sort_potofs();
      $scope.set_turn($scope.event.turn);
    }
    return $timeout(apply, message_first);
  };
  refresh = function() {
    return $timeout(refresh, message_timer);
  };
  pool_start = function() {
    $timeout(apply, message_first);
    return $timeout(refresh, message_timer);
  };
  pool_button = function() {
    var _this = this;
    return $scope.get_news($scope.event, function() {
      return $scope.init();
    });
  };
  $scope.pool_nolimit = pool_button;
  $scope.pool = _.debounce(pool_button, message_first);
  $scope.top = {
    focus: false,
    news_size: 0,
    id: "IX99999",
    count: function() {
      var news_size, o, top_idx, _i, _len, _ref;
      if ($scope.event != null) {
        top_idx = -1;
        _ref = $scope.event.messages;
        for (top_idx = _i = 0, _len = _ref.length; _i < _len; top_idx = ++_i) {
          o = _ref[top_idx];
          if ($scope.top.id === o.logid) {
            break;
          }
        }
        news_size = $scope.event.messages.length - 1 - top_idx;
        $scope.top.focus = 0 < top_idx && 0 < news_size;
        return $scope.top.news_size = news_size;
      }
    }
  };
  adjust = function() {
    $(window).resize();
    return $(window).scroll();
  };
  $scope.adjust = function() {
    adjust();
    _.delay(adjust, 80);
    _.delay(adjust, 400);
    return _.delay(adjust, 2000);
  };
  $scope.init();
  return pool_start();
};
var POTOFS;

POTOFS = function($scope) {
  var calc_potof, head_mode, head_order, potof_toggle, potofs_sortBy;
  $scope.face = {
    hide: [],
    potofs: [],
    others: [],
    all: [],
    scan: function() {
      var all, log_faces, _ref;
      if ($scope.potofs != null) {
        $scope.face.potofs = _.map($scope.potofs, $scope.potof_key);
      }
      if (((_ref = $scope.event) != null ? _ref.messages : void 0) != null) {
        log_faces = _.map($scope.event.messages, $scope.potof_key);
        $scope.face.all = _.uniq($scope.face.all.concat(log_faces));
      }
      if ($scope.face.potofs != null) {
        all = _.without($scope.face.all, '-_none_', $scope.potof_key({}));
        $scope.face.others = _.difference(all, $scope.face.potofs);
      }
      return $scope.do_sort_potofs();
    }
  };
  calc_potof = function(hide) {
    return $scope.hide_potofs.value = hide;
  };
  potof_toggle = function(select_face) {
    var hide;
    hide = $scope.hide_potofs.value;
    hide = _.include(hide, select_face) ? _.without(hide, select_face) : hide.concat(select_face);
    return calc_potof(hide);
  };
  $scope.potof_only = function(potofs) {
    var all, hide, only;
    all = _.map($scope.potofs, $scope.potof_key);
    only = _.map(potofs, $scope.potof_key);
    hide = _.difference(all, only);
    if (potofs !== $scope.potofs) {
      hide.push("others");
    }
    return calc_potof(hide);
  };
  $scope.other_toggle = function() {
    return potof_toggle("others");
  };
  $scope.potof_toggle = function(select_potof) {
    return potof_toggle($scope.potof_key(select_potof));
  };
  $scope.potofs_toggle = function() {
    $scope.potofs_is_small = !$scope.potofs_is_small;
    return $scope.adjust();
  };
  $scope.secret_toggle = function() {
    if ($scope.secret_is_open = !$scope.secret_is_open) {
      $scope.mode_d = "all";
    }
    return $scope.adjust();
  };
  head_mode = {
    said_num: 'deny',
    stat_at: 'deny',
    role_names: 'deny',
    select_name: 'deny'
  };
  head_order = {
    stat_type: 'count',
    win_name: 'count',
    role_names: 'count',
    select_name: 'count'
  };
  potofs_sortBy = function(tgt, reverse) {
    var group, groups, has_head, items, key, keys, list, order, orders, _i, _len;
    if (!$scope.potofs) {
      return;
    }
    group = function(o) {
      if (o[tgt] instanceof Array) {
        return o[tgt][0];
      } else {
        return o[tgt];
      }
    };
    list = _.sortBy($scope.potofs, group);
    if (reverse) {
      list.reverse();
    }
    $scope.potofs = list;
    $scope.potofs.mob = function() {
      return _.filter($scope.potofs, function(o) {
        return "mob" === o.live;
      });
    };
    groups = $scope.potofs_groups = _.groupBy($scope.potofs, group);
    keys = _.uniq(_.map($scope.potofs, group));
    for (_i = 0, _len = keys.length; _i < _len; _i++) {
      key = keys[_i];
      if ('deny' !== head_mode[tgt] && (groups[key] != null)) {
        has_head = true;
        has_head && (has_head = groups[key].length < $scope.potofs.length);
        has_head && (has_head = (head_mode[tgt] || 0) < groups[key].length);
      } else {
        has_head = false;
      }
      groups[key].has_head = has_head;
      groups[key].head = key;
    }
    orders = {
      basic: function(key) {
        return groups[key].head;
      },
      count: function(key) {
        return groups[key].length;
      }
    };
    order = orders[head_order[tgt] || 'basic'];
    items = _.sortBy(keys, order);
    if (reverse) {
      items.reverse();
    }
    return $scope.potofs_keys = items;
  };
  potofs_sortBy('stat_at', true);
  potofs_sortBy('stat_type', true);
  Navi.push($scope, 'potofs_order', OPTION.page.potofs);
  $scope.sort_potofs = function(tgt, zero) {
    $scope.potofs_reverse = tgt === this.tgt;
    $scope.potofs_order.value = tgt;
    return this.tgt = $scope.potofs_reverse || tgt;
  };
  $scope.do_sort_potofs = function() {
    potofs_sortBy($scope.potofs_order.value, $scope.potofs_reverse);
    return $scope.adjust();
  };
  $scope.$watch('potofs_reverse', $scope.do_sort_potofs);
  return $scope.$watch('potofs_order.value', $scope.do_sort_potofs);
};
var TIMER;

TIMER = function($scope) {
  var lax_time;
  $scope.lax_date = function(date) {
    var postfix;
    postfix = ["頃", "半頃"][(date.getMinutes() / 30).floor()];
    return date.format(Date.ISO8601_DATE + '({dow}) {tt}{12hr}時' + postfix);
  };
  lax_time = {};
  return $scope.lax_time = function(date) {
    var limit, now, postfix, time, timespan;
    if (lax_time[date] != null) {
      return lax_time[date];
    }
    if (date != null) {
      timespan = (new Date() - date) / 1000;
      limit = 3 * 60 * 60;
      if ((-limit < timespan && timespan < limit)) {
        if ((-60 < timespan && timespan < -25)) {
          return "1分後";
        }
        if ((-25 < timespan && timespan < 25)) {
          return "25秒以内";
        }
        if ((25 < timespan && timespan < 60)) {
          return "1分前";
        }
        return date.relative('ja');
      } else {
        now = Date.create(date);
        now.addMinutes(15);
        postfix = ["頃", "半頃"][(now.getMinutes() / 30).floor()];
        time = now.format(Date.ISO8601_DATE + '({dow})  {TT}{hh}時' + postfix, 'ja');
        if (timespan < 0) {
          lax_time[date] = time;
        }
        return time;
      }
    } else {
      return lax_time[date] = "....-..-..(？？？) --..時頃";
    }
  };
};
var TITLE;

TITLE = function($scope) {
  var subtitle_change, title_change, titles_change;
  title_change = function() {
    var _ref;
    if ($scope.story != null) {
      if ((_ref = $scope.top) != null ? _ref.focus : void 0) {
        return $scope.title = "(" + $scope.top.news_size + ") " + $scope.subtitle + " " + $scope.story.name;
      } else {
        return $scope.title = "" + $scope.subtitle + " " + $scope.story.name;
      }
    } else {
      return $scope.title = "人狼議事";
    }
  };
  subtitle_change = function() {
    var event_name, mode_face, _ref, _ref1;
    mode_face = (_ref = $scope.modes) != null ? _ref.face : void 0;
    event_name = (_ref1 = $scope.event) != null ? _ref1.name : void 0;
    if ("info" === mode_face) {
      return $scope.subtitle = "情報";
    } else if (event_name) {
      return $scope.subtitle = event_name;
    } else {
      return $scope.subtitle = "";
    }
  };
  titles_change = function() {
    subtitle_change();
    return title_change();
  };
  titles_change();
  $scope.$watch('top.news_size', title_change);
  $scope.$watch('top.focus', title_change);
  $scope.$watch('modes.face', titles_change);
  return $scope.$watch('event.turn', titles_change);
};
var TOKEN_INPUT;

TOKEN_INPUT = function($scope) {
  var doIt, tokenInput, tokenInputInit;
  tokenInput = {};
  $scope.tokenInputAdd = function(target, key) {
    return tokenInput[target].eventAdd(key);
  };
  tokenInputInit = function(target, all, obj) {
    var all_values, event_add, event_value, sel_values;
    event_value = function(key) {
      return all[key];
    };
    event_add = function(key) {
      return $(target).tokenInput('add', event_value(key));
    };
    sel_values = _.map(obj, event_value);
    all_values = _.map(_.keys(all), event_value);
    tokenInput[target] = {
      selValue: _.compact(sel_values),
      allValue: all_values,
      eventAdd: event_add,
      eventValue: event_value
    };
    return $(target).tokenInput(all_values, {
      prePopulate: _.compact(sel_values),
      tokenDelimiter: "/",
      propertyToSearch: "name",
      resultsFormatter: function(item) {
        return "<li>" + item.name + "</li>";
      },
      tokenFormatter: function(item) {
        return "<li>" + item.name + "</li>";
      }
    });
  };
  doIt = function() {
    var target;
    target = $('#eventcard');
    if (target.length > 0 && ($scope.story.card.event != null)) {
      return tokenInputInit('#eventcard', SOW.events, $scope.story.card.event);
    }
  };
  return _.delay(doIt, 1000);
};
var MODULE, k, set_key, v, _ref;

set_key = function(obj) {
  var k, v, _results;
  if (obj == null) {
    return;
  }
  _results = [];
  for (k in obj) {
    v = obj[k];
    _results.push(v.key = k);
  }
  return _results;
};

set_key(SOW.roles);

set_key(SOW.gifts);

set_key(SOW.events);

if (SOW.maskstates != null) {
  SOW.maskstate_order = _.sortBy(_.keys(SOW.maskstates), function(o) {
    return -o;
  });
}

if (SOW_RECORD.CABALA.events != null) {
  _ref = SOW.events;
  for (k in _ref) {
    v = _ref[k];
    v.id = SOW_RECORD.CABALA.events.indexOf(k);
    v.key = k;
  }
}

MODULE = function($scope, $filter, $sce, $http, $timeout) {
  var anchor, anchor_preview, background, id_num, link, link_regexp, link_regexp_g, random, random_preview, space, uri_to_link;
  $scope.head = head;
  $scope.win = win;
  $scope.link = GIJI.link;
  background = function(log) {
    var _ref1;
    if (!log) {
      return log;
    }
    if ((_ref1 = $scope.modes) != null ? _ref1.player : void 0) {
      return log.replace(/(\/\*)(.*?)(\*\/|$)/g, '<em>$1$2$3</em>');
    } else {
      return log.replace(/(\/\*)(.*?)(\*\/|$)/g, '<span>$1 B.G $3</span>');
    }
  };
  anchor = function(log) {
    if (!log) {
      return log;
    }
    return log.replace(/<mw (\w+),(\d+),([^>]+)>/g, function(key, a, turn, id) {
      return "<a href_eval=\"popup(" + turn + ",'" + a + "')\" class=\"mark\">&gt;&gt;" + id + "</a>";
    });
  };
  anchor_preview = function(log) {
    return log;
  };
  random = function(log) {
    if (!log) {
      return log;
    }
    return log.replace(/<rand ([^>]+),([^>]+)>/g, function(key, val, cmd) {
      return "<a class=\"mark\" href_eval=\"inner('" + cmd + "','" + val + "')\">" + val + "</a>";
    });
  };
  random_preview = function(log) {
    return log.replace(/\[\[([^\[]+)\]\]/g, function(key, val) {
      return "<a class=\"mark\" href_eval=\"inner('" + val + "','？')\">" + val + "</a>";
    });
  };
  link_regexp = /(\w+):\/\/([^\/<>）］】」\s]+)([^<>）］】」\s]*)/;
  link_regexp_g = /(\w+):\/\/([^\/<>）］】」\s]+)([^<>）］】」\s]*)/g;
  id_num = 0;
  uri_to_link = _.memoize(function(uri) {
    var host, path, protocol, _ref1;
    id_num++;
    _ref1 = uri.match(link_regexp), uri = _ref1[0], protocol = _ref1[1], host = _ref1[2], path = _ref1[3];
    return "<span class=\"badge\" href_eval=\"external('link_" + id_num + "','" + uri + "','" + protocol + "','" + host + "','" + path + "')\">LINK - " + protocol + "</span>";
  });
  link = function(log) {
    var text, uri, uris, _i, _len;
    if (!log) {
      return log;
    }
    text = log.replace(/\s|<br>/g, ' ').stripTags();
    uris = text.match(link_regexp_g);
    if (uris) {
      for (_i = 0, _len = uris.length; _i < _len; _i++) {
        uri = uris[_i];
        log = log.replace(uri, uri_to_link(uri));
      }
    }
    return log;
  };
  space = function(log) {
    if (!log) {
      return log;
    }
    return log.replace(/(^|\n|<br>)(\ *)/gm, function(full, s1, s2, offset) {
      var nbsps;
      s1 || (s1 = "");
      nbsps = s2.replace(/\ /g, '&nbsp;');
      return "" + s1 + nbsps;
    });
  };
  $scope.preview_decolate = function(log) {
    if (log) {
      return $sce.trustAsHtml(space(background(anchor_preview(link(random_preview(log))))));
    } else {
      return null;
    }
  };
  $scope.text_decolate = function(log) {
    if (log) {
      return $sce.trustAsHtml(space(background(anchor(link(random(log))))));
    } else {
      return null;
    }
  };
  $scope.$watch('title', function(value, oldVal) {
    return $('title').text(value);
  });
  $scope.stories_toggle = function() {
    $scope.stories_is_small = !$scope.stories_is_small;
    return $scope.adjust();
  };
  $scope.img_csid_cid = function(csid_cid) {
    var cid, csid, _ref1;
    if (csid_cid != null) {
      _ref1 = csid_cid.split('/'), csid = _ref1[0], cid = _ref1[1];
      return $scope.img_cid(csid, cid);
    } else {
      return $scope.img_cid(null, 'undef');
    }
  };
  $scope.img_cid = function(csid, face_id) {
    csid = GIJI.csids[csid];
    csid || (csid = GIJI.csids["default"]);
    return "" + URL.file + csid.path + face_id + csid.ext;
  };
  $scope.potof_key = function(o) {
    var csid, face_id;
    csid = (o.csid || '*').split('_')[0];
    face_id = o.face_id || '*';
    return "" + csid + "-" + face_id;
  };
  $scope.ajax_event = function(turn, href, is_news) {
    var change, event, getter,
      _this = this;
    if ($scope.events != null) {
      event = $scope.event;
      change = function() {
        $scope.set_turn(turn);
        $scope.event.is_news = $scope.event.has_all_messages ? false : is_news;
        $scope.page.value = 1;
        $scope.mode.value = $scope.mode_cache.talk;
        href = $scope.event_url($scope.event);
        return win.history("" + $scope.event.name, href, location.hash);
      };
      if (event.has_all_messages) {
        return change();
      } else {
        if (is_news) {
          getter = $scope.get_news;
        } else {
          getter = $scope.get_all;
        }
        return getter(event, function() {
          $scope.init();
          return change();
        });
      }
    } else {
      return location.href = href + location.hash;
    }
  };
  $scope.$watch("event.turn", function(turn, oldVal) {
    if ((turn != null) && ($scope.event != null)) {
      return $scope.ajax_event(turn, null, !!$scope.event.is_news);
    }
  });
  TOKEN_INPUT($scope);
  HREF_EVAL($scope);
  TIMER($scope);
  CARD($scope);
  CACHE($scope);
  POTOFS($scope);
  AJAX($scope, $http);
  DIARY($scope);
  TITLE($scope);
  GO($scope);
  return POOL($scope, $filter, $timeout);
};
var RAILS;

RAILS = function($scope, $filter, $sce, $cookies, $http, $timeout) {
  var get, submit;
  win.cookies = $cookies;
  $scope.mode_cache = {
    info: 'info_open_player',
    memo: 'memo_all_open_last_player',
    talk: 'talk_all_open_player'
  };
  $scope.deploy_mode_common = function() {
    return $scope.mode_common = $scope.mode != null ? [
      {
        name: '情報',
        value: $scope.mode_cache.info
      }, {
        name: 'メモ',
        value: $scope.mode_cache.memo
      }, {
        name: '議事',
        value: $scope.mode_cache.talk
      }
    ] : [];
  };
  get = function(href, cb) {
    return $scope.get(href, cb);
  };
  $scope.event_url = function(event) {
    if (!event) {
      return null;
    }
    return event.link;
  };
  $scope.get_news = function(event, cb) {
    var href;
    href = $scope.event_url(event);
    if (href) {
      return get(href, cb);
    }
  };
  $scope.get_all = function(event, cb) {
    var href;
    href = $scope.event_url(event);
    if (href) {
      return get(href, cb);
    }
  };
  submit = function(param, cb) {
    return $scope.post($scope.form.uri, param, function() {
      $scope.init();
      if (cb) {
        return cb();
      }
    });
  };
  $scope.submit = _.throttle(submit, 5000);
  return MODULE($scope, $filter, $sce, $http, $timeout);
};
// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
// require turbolinks



;

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
}).run(function($templateCache, $compile, $interpolate) {
  var templateUrl, text;
  GIJI.compile = function(name) {
    var template;
    template = JST[name];
    return $compile(template);
  };
  GIJI.interpolate = function(name) {
    var template;
    template = JST[name];
    return $interpolate(template);
  };
  GIJI.template = function($scope, elm, name) {
    var compiled;
    compiled = GIJI.compile(name)($scope);
    return elm.append(compiled);
  };
  for (templateUrl in JST) {
    text = JST[templateUrl];
    $templateCache.put(templateUrl, text);
  }
});
angular.module("giji").directive("accordion", function() {
  return {
    restrict: "C",
    scope: {},
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
angular.module("giji").directive("adjust", function($compile, $timeout) {
  var action_queue, effect, resize_page;
  win.info = {};
  action_queue = [];
  resize_page = function($scope) {
    var do_resize;
    do_resize = function() {
      var buttons, height, msg_width, width, _ref;
      if (!(($scope.navi != null) && (((_ref = $scope.styles) != null ? _ref.width : void 0) != null))) {
        return;
      }
      width = win.width;
      height = win.height;
      msg_width = OPTION.css.h1.widths[$scope.styles.width];
      win.info.width = (function() {
        switch ($scope.styles.width) {
          case "center-msg":
          case "large-msg":
            return (width - msg_width) / 2;
          default:
            return width - msg_width;
        }
      })();
      buttons = FixedBox.list["#buttons"];
      if (buttons != null) {
        return win.info.width_max = buttons.left - 8;
      } else {
        return win.info.width_max = width - 40;
      }
    };
    return action_queue.push(do_resize);
  };
  effect = function($scope, adjust, element) {
    var do_resize;
    do_resize = function() {
      var info_width, small, _ref;
      if (!(($scope.navi != null) && (((_ref = $scope.styles) != null ? _ref.width : void 0) != null))) {
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
      return element.css({
        width: info_width
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
      var _ref;
      if (!(($scope.navi != null) && (((_ref = $scope.styles) != null ? _ref.width : void 0) != null))) {
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
var filters_common, filters_common_last, filters_if_event, scrollTo;

scrollTo = function(newVal, oldVal, $scope) {
  var form_text, is_show, mode, _i, _len, _ref, _ref1;
  $scope.anchors = [];
  if ($scope.event != null) {
    if ($scope.event.is_news) {
      _ref = $scope.form_show;
      for (mode in _ref) {
        is_show = _ref[mode];
        _ref1 = $scope.form.texts;
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          form_text = _ref1[_i];
          if (is_show && mode === form_text.jst) {
            return;
          }
        }
      }
    }
  }
  return $scope.go.messages();
};

filters_common = function($scope) {
  return PageNavi.push($scope, 'page', OPTION.page.page);
};

filters_common_last = function($scope, $filter) {
  var filter_filter, page;
  page = $scope.page;
  filter_filter = $filter('filter');
  page.filter('search.value', function(search, list) {
    $scope.search_input = search;
    return filter_filter(list, search);
  });
  page.paginate('msg_styles.row', function(row, list) {
    var from, page_no, page_per, to, _ref;
    page_per = Number(row);
    if ((_ref = $scope.event) != null ? _ref.is_news : void 0) {
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
  $scope.$watch("page.value", scrollTo);
  $scope.$watch("search.value", scrollTo);
  return $scope.$watch("msg_style.value", scrollTo);
};

filters_if_event = function($scope, target, from) {
  var mode_params, page;
  page = $scope.page;
  page.filter_by(from);
  page.filter_to(target);
  page.filter('event.turn');
  page.filter('event.is_news');
  page.filter('page.last_updated_at()');
  $scope.deploy_mode_common();
  mode_params = _.groupBy(GIJI.modes, 'val');
  page.filter('mode.value', function(key, list) {
    var add_filter, add_filters, groups, is_mob_open, mode_filter, mode_filters, open_filters, result, sublist, _ref;
    is_mob_open = (_ref = $scope.story) != null ? _ref.is_mob_open() : void 0;
    mode_filters = {
      info_open_last: /^([aAm].\d+)|(vilinfo)/,
      info_all_open: /^(..\d+)|(vilinfo)|(potofs)|(status)/,
      info_all: /^(..\d+)|(potofs)|(status)/,
      memo_all: /^.M\d+/,
      memo_open: /^[qcaAmIMS][MX]\d+/,
      talk_all: /^[^S][^M]\d+/,
      talk_think: /^[qcaAmIi][^M]\d+/,
      talk_clan: /^[qcaAmIi\-WPX][^M]\d+/,
      talk_all_open: /^.[^M]\d+/,
      talk_think_open: /^[qcaAmIiS][^M]\d+/,
      talk_clan_open: /^[qcaAmIi\-WPXS][^M]\d+/,
      talk_all_last: /^[^S][SX]\d+/,
      talk_think_last: /^[qcaAmIi][SX]\d+/,
      talk_clan_last: /^[qcaAmIi\-WPX][SX]\d+/,
      talk_all_open_last: /^.[SX]\d+/,
      talk_think_open_last: /^[qcaAmIiS][SX]\d+/,
      talk_clan_open_last: /^[qcaAmIi\-WPXS][SX]\d+/,
      talk_open: /^[qcaAmIS][^M]\d+/,
      talk_open_last: /^[qcaAmIS][SX]\d+/
    };
    if (is_mob_open) {
      open_filters = {
        talk_think_open_last: /^[qcaAmIiVS][SX]\d+/,
        talk_think_open: /^[qcaAmIiVS][^M]\d+/,
        memo_open: /^[qcaAmIMVS][MX]\d+/,
        talk_open: /^[qcaAmIVS][^M]\d+/,
        talk_open_last: /^[qcaAmIVS][SX]\d+/
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
    if ($scope.modes.last) {
      result = [];
      groups = _.groupBy(list, function(o) {
        return "" + o.mestype + "-" + (Potof.key(o));
      });
      for (key in groups) {
        sublist = groups[key];
        result.push(_.last(sublist));
      }
      return result;
    } else {
      return list;
    }
  });
  Navi.push($scope, 'info_at', {
    options: {
      current: 0,
      current_type: Number,
      location: 'hash',
      is_cookie: false
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
        return face === Potof.key(o);
      });
    });
  });
  page.filter('info_at.value', function(now, list) {
    $scope.event.unread_count = 0;
    if (now && ($scope.event != null)) {
      return _.filter(list, function(o) {
        if (now < o.updated_at) {
          if (o.logid !== "IX99999") {
            ++$scope.event.unread_count;
          }
          return true;
        }
        return o.logid.match(/vilinfo|potofs|status/);
      });
    } else {
      return list;
    }
  });
  $scope.$watch('event.is_news', $scope.deploy_mode_common);
  $scope.$watch("event.turn", scrollTo);
  $scope.$watch("event.is_news", scrollTo);
  return $scope.$watch("mode.value", scrollTo);
};

angular.module("giji").directive("stories", function($parse, $compile, $filter) {
  var initialize;
  initialize = function($scope, $filter, target, from) {
    filters_common($scope);
    $scope.page.filter_by(from);
    $scope.page.filter_to(target);
    StorySummary.navi($scope);
    filters_common_last($scope, $filter);
    return $scope.page.start();
  };
  return {
    restrict: "A",
    link: function($scope, elm, attr, ctrl) {
      var addHtml, closeHtml, draw, html_cache, logs, oldDOM;
      initialize($scope, $filter, attr.stories, attr.from);
      initialize = function() {};
      logs = [];
      oldDOM = elm[0];
      if (oldDOM.insertAdjacentHTML) {
        addHtml = function(dom, html) {
          return dom.insertAdjacentHTML('beforeEnd', html);
        };
        closeHtml = function(dom) {};
      } else {
        html_cache = "";
        addHtml = function(dom, html) {
          return html_cache += html;
        };
        closeHtml = function(dom) {
          return dom.replaceHTML = html_cache;
        };
      }
      $scope.$watch("stories_is_small", function() {
        return draw(logs);
      });
      $scope.$watchCollection(attr.stories, function(_, newVal) {
        return draw(newVal);
      });
      return draw = function(newVal) {
        var angular_elm, data, log, newDOM, now, template, _i, _j, _len, _len1, _ref, _results;
        logs = newVal || [];
        now = new Date;
        data = {};
        newDOM = oldDOM.cloneNode(false);
        for (_i = 0, _len = logs.length; _i < _len; _i++) {
          log = logs[_i];
          log.__proto__ = StorySummary.prototype;
          if ($scope.stories_is_small) {
            template = HOGAN["hogan/sow/story_summary_small"];
          } else {
            template = HOGAN["hogan/sow/story_summary"];
          }
          if (!template) {
            console.log("can't show log!");
            console.log(log);
            continue;
          }
          data.story = log;
          addHtml(newDOM, template.render(data));
        }
        closeHtml(newDOM);
        oldDOM.parentNode.replaceChild(newDOM, oldDOM);
        oldDOM = newDOM;
        elm = $(oldDOM);
        _ref = elm.find("[template]");
        _results = [];
        for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
          angular_elm = _ref[_j];
          _results.push($compile(angular_elm)($scope));
        }
        return _results;
      };
    }
  };
});

angular.module("giji").directive("logs", function($parse, $compile, $filter) {
  var initialize;
  initialize = function($scope, $filter, target, from) {
    var from_value;
    filters_common($scope);
    if (from) {
      Message.navi($scope);
      filters_if_event($scope, target, from);
    }
    filters_common_last($scope, $filter);
    $scope.page.filter('msg_styles.order', function(key, list) {
      var order;
      order = "desc" === key ? function(o) {
        return -o.updated_at;
      } : function(o) {
        return +o.updated_at;
      };
      return _.sortBy(list, order);
    });
    from_value = $parse(from);
    $scope.page.last_updated_at = function() {
      var last;
      last = _.last(from_value($scope));
      if (last != null) {
        return last.updated_at;
      }
    };
    $scope.page.start();
    return $scope.timer || ($scope.timer = new Timer(function(log, now) {
      var log_elm;
      log.init_timer($scope, now);
      log_elm = $("." + log._id);
      log_elm.find("[cancel_btn]").html(log.cancel_btn);
      return log_elm.find("[time]").html(log.time);
    }));
  };
  return {
    restrict: "A",
    link: function($scope, elm, attr, ctrl) {
      var addHtml, closeHtml, html_cache, logs, oldDOM;
      initialize($scope, $filter, attr.logs, attr.from);
      initialize = function() {};
      logs = [];
      oldDOM = elm[0];
      if (oldDOM.insertAdjacentHTML) {
        addHtml = function(dom, html) {
          return dom.insertAdjacentHTML('beforeEnd', html);
        };
        closeHtml = function(dom) {};
      } else {
        html_cache = "";
        addHtml = function(dom, html) {
          return html_cache += html;
        };
        closeHtml = function(dom) {
          return dom.replaceHTML = html_cache;
        };
      }
      return $scope.$watchCollection(attr.logs, function(oldVal, newVal) {
        var angular_elm, data, log, newDOM, now, template, _i, _j, _len, _len1, _ref;
        logs = newVal || [];
        now = new Date;
        data = {
          story: $scope.story,
          event: $scope.event
        };
        newDOM = oldDOM.cloneNode(false);
        for (_i = 0, _len = logs.length; _i < _len; _i++) {
          log = logs[_i];
          log.__proto__ = Message.prototype;
          log.init_timer($scope, now);
          log.init_view($scope, now);
          template = HOGAN["hogan/" + log.template];
          if (!template) {
            console.log("can't show log!");
            console.log(log);
            continue;
          }
          data.message = log;
          addHtml(newDOM, template.render(data));
        }
        closeHtml(newDOM);
        oldDOM.parentNode.replaceChild(newDOM, oldDOM);
        oldDOM = newDOM;
        elm = $(oldDOM);
        _ref = elm.find("[template]");
        for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
          angular_elm = _ref[_j];
          $compile(angular_elm)($scope);
        }
        return $scope.timer.start();
      });
    }
  };
});

angular.module("giji").directive("log", function($parse, $compile, $sce) {
  return {
    restrict: "A",
    link: function($scope, elm, attr, ctrl) {
      var log;
      log = $scope.$eval(attr.log);
      log.__proto__ = Message.prototype;
      log.init_view($scope);
      return GIJI.template($scope, elm, log.template);
    }
  };
});

angular.module("giji").directive("drag", function() {
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
});
angular.module("giji").directive("potofs", function($parse, $compile) {
  return {
    restrict: "A",
    link: function($scope, elm, attr, ctrl) {
      return $scope.$watchCollection(attr.potofs, function(oldVal, potofs) {
        var angular_elm, data, potof, _i, _j, _len, _len1, _ref, _results;
        elm.html("");
        if (!logs) {
          return;
        }
        data = {
          story: $scope.story,
          event: $scope.event
        };
        for (_i = 0, _len = potofs.length; _i < _len; _i++) {
          potof = potofs[_i];
          data.potof = potof;
          elm.append(HOGAN["hogan/potof/cell-" + attr.cell].render(data));
        }
        _ref = elm.find("[ng-if]");
        _results = [];
        for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
          angular_elm = _ref[_j];
          _results.push($compile(angular_elm)($scope));
        }
        return _results;
      });
    }
  };
});
angular.module("giji").directive("template", function($interpolate, $compile) {
  return {
    restrict: "A",
    link: function($scope, elm, attr, ctrl) {
      var name;
      name = attr.template;
      return GIJI.template($scope, elm, name);
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
        var compiled;
        compiled = GIJI.compile("form/" + value)($scope);
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
      if (form_text.text) {
        form_text.ver.commit();
      }
      return GIJI.template($scope, elm, "form/version");
    }
  };
});
angular.module("giji").directive("theme", function($compile, $cookies) {
  var initialize;
  initialize = function($scope, elm, attr) {
    var css_apply, css_change, html_class, key, msg_apply, msg_change, redesign_in_time, val, _ref;
    $scope.selectors = OPTION.selectors;
    $scope.selector_keys = {};
    _ref = OPTION.selectors;
    for (key in _ref) {
      val = _ref[key];
      $scope.selector_keys[key] = Object.keys(val);
    }
    redesign_in_time = function() {
      var date, day_or_night, hour, size;
      date = Number(new Date);
      hour = 1000 * 60 * 60;
      size = OPTION.css.h1.widths[$scope.styles.width];
      day_or_night = ((date + 3 * hour) / (12 * hour)) % 2;
      $scope.h1 = {
        type: OPTION.head_img[size][$scope.styles.theme][day_or_night.floor()]
      };
      ({
        width: size
      });
      return $scope.h1.path = "" + URL.file + "/images/banner/title" + size + $scope.h1.type;
    };
    Navi.push($scope, 'css', {
      options: OPTION.page.css.options,
      select: GIJI.styles[attr.theme]
    });
    html_class = function() {
      if ($scope.styles == null) {
        return;
      }
      if ($scope.msg_styles == null) {
        return;
      }
      $scope.adjust();
      $scope.html_class = [$scope.styles.item, $scope.styles.color, $scope.styles.theme, $scope.styles.width, $scope.styles.pixel, $scope.styles.font, $scope.msg_styles.power];
      if (!$scope.msg_styles.pl) {
        return $scope.html_class.push('no-player');
      }
    };
    css_apply = function() {
      $scope.styles = $scope.css.choice();
      return html_class();
    };
    css_change = function() {
      var css;
      css = _.compact(_.uniq([$scope.styles.theme, $scope.styles.width, $scope.styles.font]));
      $scope.css.value = css.join("_");
      return redesign_in_time();
    };
    css_apply();
    OPTION.page.msg_style.options.current = "" + head.browser.power + "_asc_50";
    Navi.push($scope, 'msg_style', {
      options: OPTION.page.msg_style.options,
      select: GIJI.msg_styles
    });
    msg_apply = function() {
      $scope.msg_styles = $scope.msg_style.choice();
      return html_class();
    };
    msg_change = function() {
      var msg;
      msg = _.compact(_.uniq([head.browser.power = $scope.msg_styles.power, $scope.msg_styles.order, $scope.msg_styles.row, !$scope.msg_styles.pl ? "no-player" : void 0]));
      return $scope.msg_style.value = msg.join("_");
    };
    msg_apply();
    $scope.$watch('msg_styles.row', function() {
      return $cookies.row = $scope.msg_styles.row;
    });
    $scope.$watch('css.value', css_apply);
    $scope.$watch('styles.theme', css_change);
    $scope.$watch('styles.width', css_change);
    $scope.$watch('styles.font', css_change);
    $scope.$watch('msg_style.value', msg_apply);
    $scope.$watch('msg_styles.power', msg_change);
    $scope.$watch('msg_styles.order', msg_change);
    $scope.$watch('msg_styles.row', msg_change);
    return $scope.$watch('msg_styles.pl', msg_change);
  };
  return {
    restrict: "A",
    templateUrl: "theme/css",
    link: function($scope, elm, attr, ctrl) {
      initialize($scope, elm, attr);
      return initialize = function() {};
    }
  };
});
angular.module("giji").directive("title", function() {
  return {
    restrict: "E",
    link: function($scope, elm, attr, ctrl) {
      var fix_title, subtitle, title;
      subtitle = function() {
        var event_name, mode_face, _ref, _ref1;
        mode_face = (_ref = $scope.modes) != null ? _ref.face : void 0;
        event_name = (_ref1 = $scope.event) != null ? _ref1.name : void 0;
        if ("info" === mode_face) {
          return "情報";
        } else {
          return event_name || "";
        }
      };
      title = function() {
        var name, _ref, _ref1;
        name = ((_ref = $scope.story) != null ? _ref.name : void 0) || "人狼議事";
        if ((_ref1 = $scope.event) != null ? _ref1.unread_count : void 0) {
          return "(" + $scope.event.unread_count + ") " + name;
        } else {
          return "" + (subtitle()) + " " + name;
        }
      };
      fix_title = function() {
        return elm.text(title($scope));
      };
      $scope.$watch('modes.face', fix_title);
      $scope.$watch("story.name", fix_title);
      $scope.$watch('event.turn', fix_title);
      return $scope.$watch('event.unread_count', fix_title);
    }
  };
});
var Config;

Config = (function() {
  function Config() {}

  Config.prototype.init = function() {
    var count_set, gifts, roles;
    count_set = (function(_this) {
      return function(item) {
        item.count = _this.counts[item.key];
        return item;
      };
    })(this);
    roles = _.groupBy(_.map(this.roles, function(o) {
      return count_set(SOW.roles[o]);
    }), function(o) {
      return SOW.groups[o.group].name;
    });
    gifts = _.groupBy(_.map(this.gifts, function(o) {
      return count_set(SOW.gifts[o]);
    }), function(o) {
      return "恩恵";
    });
    this.items = _.assign({}, roles, gifts);
    this.items_keys = _.keys(this.items);
    return this.items.events = this.events.map(function(o) {
      return SOW.events[o];
    });
  };

  return Config;

})();
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
    var filter;
    filter = function(o) {
      return o.jst + o["switch"];
    };
    this.finder = (function(_this) {
      return function(o) {
        return _this.key === o.key;
      };
    })(this);
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
var Event;

Event = (function() {
  function Event() {}

  return Event;

})();
var FixedBox;

FixedBox = (function() {
  FixedBox.list = {};

  function FixedBox(dx, dy, fixed_box) {
    this.dx = dx;
    this.dy = dy;
    this.box = fixed_box;
    if (this.box) {
      this.box.css({
        left: 0,
        top: 0
      });
      win.on_resize((function(_this) {
        return function() {
          return _this.resize();
        };
      })(this));
      win.on_scroll((function(_this) {
        return function() {
          return _this.scroll();
        };
      })(this));
    }
  }

  FixedBox.prototype.resize = function() {
    var height, width;
    if (this.box) {
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
        return this.top = this.dy;
      }
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
    if (this.box && head.browser.power !== "simple") {
      this.box.to_z_front();
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
    var transform;
    transform = "translate(" + left + "px, " + top + "px)";
    if (head.browser.webkit) {
      this.box.css("-webkit-transform", transform);
    }
    if (head.browser.mozilla) {
      this.box.css("-moz-transform", transform);
    }
    if (head.browser.ie) {
      this.box.css("-ms-transform", transform);
    }
    if (head.browser.opera) {
      this.box.css("-o-transform", transform);
    }
    return this.box.css("transform", transform);
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
    return $(document).ready((function(_this) {
      return function() {
        return $('#phase_input').change(function() {
          return $('#chr_vote_phase').val(value);
        });
      };
    })(this));
  };

  Form.submit_chr_vote = function(face_id) {
    var _ref;
    $('#chr_vote_face_id').val(face_id);
    return (_ref = $('form.chr_vote')[0]) != null ? _ref.submit() : void 0;
  };

  return Form;

})();
var Lib;

Lib = {
  name: {
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
  },
  countup: {
    common: function(filter, list) {
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
    },
    config: function(list) {
      return this.common(Lib.name.config, list);
    },
    win: function(list) {
      return this.common(Lib.name.win, list);
    }
  }
};
var Message;

Message = (function() {
  function Message() {}

  Message.prototype.init_data = function(new_base) {
    var key;
    this.turn = new_base.turn;
    if (this.logid != null) {
      this.key = "" + this.logid + "," + this.turn;
    }
    if (this.date != null) {
      this.updated_at = this.date;
      delete this.date;
    }
    this.updated_at = new Date(this.updated_at);
    switch (this.subid) {
      case "B":
        return this.mestype = "TSAY";
      case "M":
        key = "" + this.mestype + ":" + this.csid + "/" + this.face_id;
        if ((!new_base.last_memo[key]) || new_base.last_memo[key].updated_at < this.updated_at) {
          return new_base.last_memo[key] = {
            log: this.log,
            updated_at: this.updated_at
          };
        }
    }
  };

  Message.prototype.init_view = function($scope, now) {
    var anchor_ok, mark, match_data, num, style, table, target, template, _, _i, _len, _ref, _ref1;
    if (this.updated_at) {
      this.timestamp = $scope.timestamp(this.updated_at);
    }
    if ((this.template == null) && (this.logid != null) && (this.mestype != null) && (this.subid != null)) {
      template = null;
      _ref = MESSAGE.template;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        style = _ref[_i];
        for (target in style) {
          table = style[target];
          template || (template = table[this[target]]);
        }
      }
      this.template || (this.template = "message/" + template);
    }
    if ((this.img == null) && (this.face_id != null) && (this.csid != null)) {
      this.img || (this.img = $scope.img_cid(this.csid, this.face_id));
    }
    if ((this.anchor == null) && (this.logid != null) && (match_data = this.logid.match(/(\D)\D+(\d+)/))) {
      _ = match_data[0], mark = match_data[1], num = match_data[2];
      anchor_ok = false;
      anchor_ok || (anchor_ok = mark !== 'T');
      anchor_ok || (anchor_ok = (_ref1 = $scope.story) != null ? _ref1.is_epilogue : void 0);
      if ((SOW.log.anchor[mark] != null) && anchor_ok) {
        this.anchor || (this.anchor = "" + SOW.log.anchor[mark] + (Number(num)));
      } else {
        this.anchor || (this.anchor = "");
      }
    }
    if (this.text == null) {
      this.text = $scope.text_decolate(this.log);
      return delete this.log;
    }
  };

  Message.prototype.init_timer = function($scope, now) {
    if (!this.updated_at) {
      return;
    }
    if (!("M" === this.subid || "S" === this.subid)) {
      return;
    }
    $scope.timer.cache(this);
    this.cancel_btn = (this.logid != null) && "q" === this.logid[0] && ((now - this.updated_at) < DELAY.msg_delete) ? ($scope.timer.add_next(this.updated_at, DELAY.msg_delete), "<span cancel_btn>なら削除できます。<a hogan-click='cancel_say(\"" + this.logid + "\")()' class=\"btn btn-danger click glyphicon glyphicon-trash\"></a></span>") : "";
    return this.time = $scope.set_time(this);
  };

  return Message;

})();
Message.navi = function($scope) {
  var modes_apply, modes_change;
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
  modes_apply = function() {
    var key, _i, _len, _ref, _results;
    $scope.modes = $scope.mode.choice();
    $scope.anchors = [];
    if ($scope.modes.form != null) {
      $scope.form_show = {};
      _ref = $scope.modes.form;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        key = _ref[_i];
        _results.push($scope.form_show[key] = true);
      }
      return _results;
    }
  };
  modes_change = function() {
    var info_at, mode;
    info_at = $scope.info_at;
    if (info_at != null) {
      if ("info" === $scope.modes.face && "all" === $scope.modes.view) {
        if (!info_at.value) {
          info_at.value = Number(new Date);
        }
      } else {
        info_at.value = "";
      }
    }
    switch ($scope.modes.face) {
      case "info":
        if ("all" === $scope.modes.view) {
          $scope.modes.last = false;
        } else {
          $scope.modes.view = "open";
          $scope.modes.last = true;
        }
        break;
      case "memo":
        $scope.modes.open = true;
        if ("all" !== $scope.modes.view) {
          $scope.modes.view = "open";
        }
    }
    if ("open" === $scope.modes.view) {
      $scope.modes.open = true;
    }
    mode = _.compact(_.uniq([$scope.modes.face, $scope.modes.view, $scope.modes.open ? 'open' : void 0, $scope.modes.last ? 'last' : void 0]));
    $scope.mode.value = mode.join("_");
    $scope.mode_select = _.filter($scope.mode.select, function(o) {
      return o.face === $scope.modes.face;
    });
    $scope.mode_cache[$scope.modes.face] = $scope.mode.value;
    return $scope.deploy_mode_common();
  };
  modes_apply();
  if ($scope.modes != null) {
    $scope.$watch('mode.value', modes_apply);
    $scope.$watch('modes.open', modes_change);
    $scope.$watch('modes.face', modes_change);
    $scope.$watch('modes.view', modes_change);
    return $scope.$watch('modes.last', modes_change);
  }
};
var Potof;

Potof = (function() {
  function Potof() {}

  Potof.prototype.is_mob = function() {
    return "mob" === this.live;
  };

  Potof.prototype.is_live = function() {
    return this.deathday < 0;
  };

  Potof.prototype.key = function() {
    return Potof.key(this);
  };

  Potof.prototype.summary = function(order) {
    switch (order) {
      case 'said_num':
        return "<span class=\"glyphicon glyphicon-pencil\"></span>" + this.said;
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

  Potof.prototype.init_win = function() {
    var is_dead_lose, is_lone_lose, win_by_role, win_juror, win_love, win_zombie, winner, zombie, _ref, _ref1, _ref2;
    if (this.role == null) {
      return;
    }
    if (this.story == null) {
      return;
    }
    if (this.event == null) {
      return;
    }
    win_by_role = (function(_this) {
      return function(list) {
        var role, win, _i, _len, _ref, _ref1;
        _ref = _this.role;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          role = _ref[_i];
          win = (_ref1 = list[role]) != null ? _ref1.win : void 0;
          if (win) {
            return win;
          }
        }
        return null;
      };
    })(this);
    zombie = 0x040;
    if (('TROUBLE' === this.story.type.game) && 0 === (this.rolestate & zombie)) {
      win_zombie = 'WOLF';
    }
    if (('juror' === this.story.type.mob) && ('mob' === this.live)) {
      win_juror = 'HUMAN';
    }
    win_love = (_ref = SOW.loves[this.love]) != null ? _ref.win : void 0;
    this.win = win_juror || win_love || win_zombie || win_by_role(SOW.gifts) || win_by_role(SOW.roles) || "NONE";
    if (win === 'EVIL') {
      this.win = GIJI.folders[this.story.folder].evil;
    }
    this.win_name = (_ref1 = SOW.wins[this.win]) != null ? _ref1.name : void 0;
    this.win_result = "参加";
    if ("suddendead" === this.live) {
      this.win_result = "";
      return;
    }
    if (this.story.is_finish) {
      winner = this.event.winner || (typeof events !== "undefined" && events !== null) && ((_ref2 = _.last(events)) != null ? _ref2.winner : void 0);
      if (!GIJI.folders[this.story.folder].role_play) {
        if (_.include(["LIVE_TABULA", "LIVE_MILLERHOLLOW", "SECRET"], this.story.type.game)) {
          is_dead_lose = 1;
        }
        if ("LONEWOLF" === this.win) {
          is_dead_lose = 1;
        }
        if ("HUMAN" === this.win && "TROUBLE" === this.story.type.game) {
          is_dead_lose = 1;
        }
        if ("HATER" === this.win && !_.include(this.role, "HATEDEVIL")) {
          is_dead_lose = 1;
        }
        if ("LOVER" === this.win && !_.include(this.role, "LOVEANGEL")) {
          is_lone_lose = 1;
        }
        this.win_result = "敗北";
        if (winner === "WIN_" + this.win) {
          this.win_result = "勝利";
        }
        if (winner !== "WIN_HUMAN" && winner !== "WIN_LOVER" && "EVIL" === this.win) {
          this.win_result = "勝利";
        }
        if ("victim" === this.live && "DISH" === this.win) {
          this.win_result = "勝利";
        }
        if (is_lone_lose && _.any(this.potofs, function(o) {
          return o.live !== 'live' && _.any(o.bonds, this.pno);
        })) {
          this.win_result = "敗北";
        }
        if (is_dead_lose && 'live' !== this.live) {
          this.win_result = "敗北";
        }
        if ("NONE" === this.win) {
          return this.win_result = "参加";
        }
      }
    }
  };

  Potof.prototype.init_bonds = function() {
    var finder;
    finder = (function(_this) {
      return function(pno) {
        return _this.potofs[pno];
      };
    })(this);
    if (this.bonds != null) {
      this.bonds = _.compact(_.map(this.bonds, finder));
      this.bond_names = _.map(this.bonds, function(o) {
        return o.name;
      });
    }
    if (this.pseudobonds != null) {
      this.pseudobonds = _.compact(_.map(this.pseudobonds, finder));
      return this.pseudobond_names = _.map(this.pseudobonds, function(o) {
        return o.name;
      });
    }
  };

  Potof.prototype.init_stat = function() {
    this.key = Potof.key(this);
    this.live || (this.live = "");
    this.live_name = SOW.live[this.live] || " ";
    this.stat_type = SOW.live_caption[this.live] || " ";
    this.auth = this.sow_auth_id;
    if (this.deathday < 0) {
      this.stat_at = " ";
    } else {
      this.stat_at = "" + this.deathday + "日";
    }
    return this.stat = "" + this.stat_at + " " + this.live_name;
  };

  Potof.prototype.init_role = function() {
    if (this.role != null) {
      this.role_names = this.role.map(Lib.name.config);
    } else {
      this.role_names = [];
    }
    if (this.select != null) {
      return this.select_name = Lib.name.config(this.select);
    }
  };

  Potof.prototype.init_text = function() {
    var mask, rolestate, text, _i, _len, _ref;
    this.text = [];
    if (this.rolestate != null) {
      rolestate = this.rolestate;
      _ref = SOW.maskstate_order;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        mask = _ref[_i];
        if (0 === (rolestate & mask)) {
          text = SOW.maskstates[mask];
          if (text) {
            this.text.push("" + text + " ");
          }
          rolestate |= mask;
        }
      }
    }
    if ('pixi' === this.sheep) {
      this.text.push("☑");
    }
    if ('love' === this.love) {
      this.text.push("♥");
    }
    if ('hate' === this.love) {
      this.text.push("☠");
    }
    if ('love' === this.pseudolove) {
      this.text.push("<s>♥</s>");
    }
    if ('hate' === this.pseudolove) {
      return this.text.push("<s>☠</s>");
    }
  };

  Potof.prototype.init_said = function() {
    this.said = "";
    this.said_num = 0;
    if (0 < this.point.saidcount) {
      this.said_num += this.point.saidcount;
      this.said += " " + this.point.saidcount + "回";
    }
    if (0 < this.point.saidpoint) {
      this.said_num += this.point.saidpoint;
      return this.said += " " + this.point.saidpoint + "pt";
    }
  };

  Potof.prototype.init_timer = function($scope) {
    if (this.timer != null) {
      this.timer.entrieddt = new Date(this.timer.entrieddt);
      this.timer.limitentrydt = new Date(this.timer.limitentrydt);
      this.timer.entried = function() {
        return $scope.lax_time(this.entrieddt);
      };
      return this.timer.entry_limit = function() {
        return $scope.lax_time(this.limitentrydt);
      };
    }
  };

  return Potof;

})();

Potof.key = function(o) {
  var csid, face_id;
  csid = (o.csid || '*').split('_')[0];
  face_id = o.face_id || '*';
  return "" + csid + "-" + face_id;
};
var Story, StorySummary,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

StorySummary = (function() {
  function StorySummary() {}

  StorySummary.prototype.init = function($scope) {
    var event_config, role_config, role_wins, win_config, _base, _ref;
    this.rating_url = "" + URL.file + "/images/icon/cd_" + this.rating + ".png";
    event_config = _.filter(this.card.config, function(o) {
      return SOW.events[o];
    });
    role_config = _.filter(this.card.config, function(o) {
      return !SOW.events[o] && !SOW.specials[o];
    });
    role_wins = _.map(role_config, function(o) {
      var _ref, _ref1;
      return ((_ref = SOW.gifts[o]) != null ? _ref.win : void 0) || ((_ref1 = SOW.roles[o]) != null ? _ref1.win : void 0) || null;
    });
    win_config = _.filter(role_wins, function(o) {
      return o;
    });
    this.card.discard_names = Lib.countup.config(this.card.discard).join('、');
    this.card.config_names = Lib.countup.config(this.card.config).join('、');
    this.card.role_names = Lib.countup.config(role_config).join('、');
    this.card.win_names = Lib.countup.win(win_config).join('、');
    if (0 < event_config.length) {
      this.card.event_names = Lib.countup.config(event_config).join('、');
    } else {
      this.card.event_names = Lib.countup.config(this.card.event).join('、');
    }
    if (this.upd != null) {
      this.upd.time_text = Timer.hhmm(this.upd.hour, this.upd.minute);
      this.upd.interval_text = "" + (this.upd.interval * 24) + "時間";
    }
    if (this.announce != null) {
      this.announce.rating = OPTION.rating[this.rating].caption;
    }
    if (this.type != null) {
      (_base = this.type).game || (_base.game = 'TABULA');
      this.type.roletable_text = SOW.roletable[this.type.roletable];
      this.type.game_rule = SOW.game_rule[this.type.game];
      this.type.vote_text = SOW.vote[this.type.vote];
      this.type.mob_text = SOW.mob[this.type.mob];
      this.type.saycnt = SOW.saycnt[this.type.say];
      if (1 === ((_ref = this.type.saycnt) != null ? _ref.RECOVERY : void 0)) {
        this.type.recovery = ' （発言の補充はありません。）';
        if (1 < this.upd.interval) {
          this.type.recovery = ' （発言の補充があります。）';
        }
      }
      return this.is_wbbs = 'wbbs' === this.type.start;
    }
  };

  return StorySummary;

})();

StorySummary.navi = function($scope) {
  var filter, filters, page, set_filter, _i, _len, _results;
  page = $scope.page;
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
    }, {
      target: "folder",
      key: (function(o) {
        return o.folder;
      }),
      text: (function(key) {
        return OPTION.page.folder.button[key];
      })
    }
  ];
  set_filter = function(filter) {
    var base, key, keys, navigator, _i, _len;
    base = OPTION.page[filter.target];
    keys = base.button && Object.keys(base.button);
    keys || (keys = _.chain($scope.stories).map(filter.key).uniq().sort().value());
    navigator = {
      options: base.options,
      button: {
        ALL: "- すべて -"
      }
    };
    if (keys.length > 1) {
      for (_i = 0, _len = keys.length; _i < _len; _i++) {
        key = keys[_i];
        navigator.button[key] = filter.text(key);
      }
    }
    Navi.push($scope, filter.target, navigator);
    return page.filter("" + filter.target + ".value", function(key, list) {
      if ('ALL' === $scope[filter.target].value) {
        return list;
      } else {
        return _.filter(list, function(o) {
          return filter.key(o) === $scope[filter.target].value;
        });
      }
    });
  };
  _results = [];
  for (_i = 0, _len = filters.length; _i < _len; _i++) {
    filter = filters[_i];
    _results.push(set_filter(filter));
  }
  return _results;
};

Story = (function(_super) {
  __extends(Story, _super);

  function Story() {
    return Story.__super__.constructor.apply(this, arguments);
  }

  Story.prototype.init = function($scope) {
    Story.__super__.init.apply(this, arguments);
    this.option_helps = _.map(this.options, function(o) {
      return SOW.options[o].help;
    });
    return this.comment = $scope.text_decolate(this.comment);
  };

  Story.prototype.is_mob_open = function() {
    if ('alive' === this.type.mob) {
      return true;
    }
    if (this.turn === 0) {
      return true;
    }
    if (this.is_epilogue) {
      return true;
    }
    return false;
  };

  return Story;

})(StorySummary);
var Timer;

Timer = (function() {
  function Timer(cb) {
    this.cb = cb;
    this.data = {};
    this.timeouts = {};
    this.delay_min = 99999999;
  }

  Timer.prototype.timer = function() {
    var do_timer;
    do_timer = (function(_this) {
      return function() {
        var date, dates, item, now, _i, _len;
        now = new Date;
        if (_this.cb) {
          dates = Object.keys(_this.timeouts);
          _this.timeouts = {};
          _this.delay_min = 99999999;
          for (_i = 0, _len = dates.length; _i < _len; _i++) {
            date = dates[_i];
            item = _this.data[date];
            if (item) {
              _this.cb(item, now);
            }
          }
        }
        return _this.timer_id = setTimeout(do_timer, _this.delay_min);
      };
    })(this);
    return this.timer_id = setTimeout(do_timer, this.delay_min);
  };

  Timer.prototype.start = function() {
    if (this.timer_id) {
      clearTimeout(this.timer_id);
    }
    return this.timer();
  };

  Timer.prototype.cache = function(item) {
    return this.data[Number(item.updated_at)] = item;
  };

  Timer.prototype.add_next = function(date, timeout) {
    if (timeout < this.delay_min) {
      this.delay_min = timeout;
    }
    return this.timeouts[Number(date)] = true;
  };

  return Timer;

})();

Timer.hh = function(hh) {
  var tt;
  tt = ["午前", "午後"][Math.floor(hh / 12)];
  if (hh < 10) {
    hh = "0" + hh;
  }
  return "" + tt + (hh % 12) + "時";
};

Timer.hhmm = function(hh, mi) {
  if (mi < 10) {
    mi = "0" + mi;
  }
  return "" + (Timer.hh(hh)) + mi + "分";
};

Timer.dow = function(dow) {
  return ["日", "月", "火", "水", "木", "金", "土"][dow];
};

Timer.time_stamp = function(date) {
  var dd, dow, hh, mi, mm, now;
  now = new Date(date);
  hh = now.getHours();
  mi = now.getMinutes();
  dow = Timer.dow(now.getDay());
  if (mm < 10) {
    mm = "0" + mm;
  }
  if (dd < 10) {
    dd = "0" + dd;
  }
  return "(" + dow + ") " + (Timer.hhmm(hh, mi));
};

Timer.date_time_stamp = function(date) {
  var dd, dow, hh, mi, mm, now, postfix, yyyy;
  now = new Date(date);
  now.addMinutes(15);
  yyyy = now.getFullYear();
  mm = now.getMonth() + 1;
  dd = now.getDate();
  dow = Timer.dow(now.getDay());
  hh = now.getHours();
  mi = now.getMinutes();
  postfix = ["頃", "半頃"][(mi / 30).floor()];
  if (mm < 10) {
    mm = "0" + mm;
  }
  if (dd < 10) {
    dd = "0" + dd;
  }
  return "" + yyyy + "-" + mm + "-" + dd + " (" + dow + ") " + (Timer.hh(hh)) + postfix;
};
var CACHE;

CACHE = function($scope) {
  var cache, concat_merge, find_or_create, find_turn, merge, merge_by;
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
    config: (function(_this) {
      return function(old_base, new_base, target) {
        merge_by.copy(old_base, new_base, target);
        $scope.config.__proto__ = Config.prototype;
        return $scope.config.init();
      };
    })(this),
    face: (function(_this) {
      return function(old_base, new_base, target) {
        INIT_FACE(new_base.face);
        return merge_by.copy(old_base, new_base, target);
      };
    })(this),
    events: (function(_this) {
      return function(old_base, new_base, target) {
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
      };
    })(this),
    event: function() {},
    _messages: function(old_base, new_base) {
      var filter, guard, order;
      guard = null;
      filter = function(o) {
        return o.logid;
      };
      INIT_MESSAGES(new_base);
      if (new_base.has_all_messages) {
        old_base.messages = [];
      }
      merge_by.news(old_base, new_base, 'messages', guard, filter);
      merge_by.copy(old_base, new_base, 'last_memo');
      order = function(o) {
        return o.order || o.updated_at;
      };
      return old_base.messages = _.sortBy(old_base.messages, order);
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
    load: (function(_this) {
      return function(old_base, new_base, target, child) {
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
      };
    })(this),
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
      potof.story = gon.story;
      potof.event = gon.event;
      potof.potofs = gon.potofs;
      potof.scope = $scope;
      potof.__proto__ = Potof.prototype;
      potof.init_bonds();
      potof.init_win();
      potof.init_stat();
      potof.init_role();
      potof.init_text();
      potof.init_said();
      _results.push(potof.init_timer($scope));
    }
    return _results;
  }
};

INIT = function($scope, $filter, $timeout) {
  var key, live_potofs, news, potof, potofs_hash, story, _i, _j, _len, _len1, _ref, _ref1;
  if (typeof gon === "undefined" || gon === null) {
    return;
  }
  INIT_POTOFS($scope, gon);
  if (gon.stories != null) {
    _ref = gon.stories;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      story = _ref[_i];
      story.__proto__ = StorySummary.prototype;
      story.init($scope);
    }
  }
  if (gon.story != null) {
    gon.story.__proto__ = Story.prototype;
    gon.story.init($scope);
  }
  for (key in gon) {
    news = gon[key];
    $scope.merge($scope, gon, key);
  }
  $scope.merge_turn($scope, gon);
  if ($scope.potofs != null) {
    live_potofs = _.filter($scope.potofs, function(o) {
      return o.is_live();
    });
    $scope.potofs.mob = function() {
      return _.filter($scope.potofs, function(o) {
        return o.is_mob();
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
      potofs_hash[potof.key] = potof.name;
    }
    if ($scope.hide_potofs == null) {
      ArrayNavi.push($scope, 'hide_potofs', {
        options: {
          class_select: 'inverse',
          class_default: 'plane',
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
    return $scope.page.length = gon.pages.length;
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
    new_base.last_memo = {};
    _ref = new_base.messages;
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      message = _ref[_i];
      message.__proto__ = Message.prototype;
      _results.push(message.init_data(new_base));
    }
    return _results;
  }
};
var DECOLATE;

DECOLATE = function($scope, $sce) {
  var anchor, anchor_preview, id_num, link, link_regexp, link_regexp_g, player, random, random_preview, space, unanchor, unbr, unrandom, uri_to_link;
  player = function(log) {
    if (!log) {
      return log;
    }
    return log.replace(/(\/\*)(.*?)(\*\/|$)/g, '<em>$1<span class="player">$2</span>$3</em>');
  };
  unanchor = function(log) {
    if (!log) {
      return log;
    }
    return log.replace(/<mw (\w+),(\d+),([^>]+)>/g, function(key, a, turn, id) {
      return ">>" + id;
    });
  };
  anchor = function(log) {
    if (!log) {
      return log;
    }
    return log.replace(/<mw (\w+),(\d+),([^>]+)>/g, function(key, a, turn, id) {
      return "<a hogan-click=\"popup(" + turn + ",'" + a + "')\" data=\"" + a + "," + turn + "," + id + "\" class=\"mark\">&gt;&gt;" + id + "</a>";
    });
  };
  anchor_preview = function(log) {
    return log;
  };
  unrandom = function(log) {
    if (!log) {
      return log;
    }
    return log.replace(/<rand ([^>]+),([^>]+)>/g, function(key, val, cmd) {
      return cmd;
    });
  };
  random = function(log) {
    if (!log) {
      return log;
    }
    return log.replace(/<rand ([^>]+),([^>]+)>/g, function(key, val, cmd) {
      return "<a class=\"mark\" hogan-click=\"inner('" + cmd + "','" + val + "')\">" + val + "</a>";
    });
  };
  random_preview = function(log) {
    return log.replace(/\[\[([^\[]+)\]\]/g, function(key, val) {
      return "<a class=\"mark\" hogan-click=\"inner('" + val + "','？')\">" + val + "</a>";
    });
  };
  link_regexp = /(\w+):\/\/([^\/<>）］】」\s]+)([^<>）］】」\s]*)/;
  link_regexp_g = /(\w+):\/\/([^\/<>）］】」\s]+)([^<>）］】」\s]*)/g;
  id_num = 0;
  uri_to_link = _.memoize(function(uri) {
    var host, path, protocol, _ref;
    id_num++;
    _ref = uri.match(link_regexp), uri = _ref[0], protocol = _ref[1], host = _ref[2], path = _ref[3];
    return "<span class=\"badge\" hogan-click=\"external('link_" + id_num + "','" + uri + "','" + protocol + "','" + host + "','" + path + "')\">LINK - " + protocol + "</span>";
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
  unbr = function(log) {
    return log.replace(/<br>/gm, function(br) {
      return "\n";
    });
  };
  $scope.preview_decolate = function(log) {
    if (log) {
      return $sce.trustAsHtml(space(player(anchor_preview(link(random_preview(log))))));
    } else {
      return null;
    }
  };
  $scope.text_decolate = function(log) {
    if (log) {
      return $sce.trustAsHtml(space(player(anchor(link(random(log))))));
    } else {
      return null;
    }
  };
  return $scope.undecolate = function(log) {
    if (log) {
      return unanchor(unrandom(unbr(log)));
    } else {
      return null;
    }
  };
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
    anchor: function(anchor, turn, name) {
      if ("" === anchor) {
        return;
      }
      $scope.navi.value_add('diary');
      return $scope.diary.form.text = ($scope.diary.form.text.trim() + "\n" + ("(>>" + turn + ":" + anchor + " " + name + ")")).trim();
    }
  };
};
var FORM;

FORM = function($scope, $sce) {
  var calc_length, calc_point, is_input, preview, preview_action, safe_anker, set_last_memo, submit, valid, write;
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
    set_last_memo(f);
    f.valid = true;
    if (f.max) {
      text = f.text.replace(/\n$/g, '\n ');
      lines = text.split("\n").length;
      size = calc_length(text);
      point = calc_point(size, lines);
      if (lines > 5) {
        f.lines = lines;
      } else {
        f.lines = 5;
      }
      if (cb) {
        f.valid = cb(size, lines);
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
      return f.valid_text = $sce.trustAsHtml("" + mark + " " + size + "<sub>/" + f.max.size + "字</sub>  " + lines + "<sub>/" + f.max.line + "行</sub>");
    } else {
      return f.valid_text = "";
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
          f.is_last_memo = false;
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
    return $scope.submit(param, function() {
      return set_last_memo(f);
    });
  };
  preview = function(text) {
    if (text != null) {
      return $scope.preview_decolate(text.escapeHTML().replace(/&#x2f;/g, "/").replace(/\n/g, "<br>"));
    } else {
      return "";
    }
  };
  preview_action = function(f) {
    var target, text, _ref;
    text = 0 < ((_ref = f.text) != null ? _ref.length : void 0) ? preview(f.text.replace(/\n$/g, '\n ')) : $scope.option(f.actions, f.action).name.replace(/\(.*\)$/, "");
    target = -1 < f.target ? $scope.option(f.targets, f.target).name : "";
    return "" + f.shortname + "は、" + target + text;
  };
  write = function(f, cb) {
    if (f.disabled) {
      return;
    }
    $scope.text_valid(f, true);
    if (f.ver != null) {
      f.ver.commit();
    }
    if (f.valid && f.is_preview) {
      return cb();
    } else {
      if (f.ver != null) {
        f.ver.commit();
      }
      f.is_preview = f.valid;
      return f.preview = preview(f.text.replace(/\n$/g, '\n '));
    }
  };
  set_last_memo = function(f) {
    var log, _ref, _ref1, _ref2;
    if ("wrmemo" !== f.cmd) {
      return;
    }
    if (!(f.text || f.is_last_memo)) {
      log = (_ref = $scope.event) != null ? (_ref1 = _ref.last_memo) != null ? (_ref2 = _ref1["" + f.mestype + ":" + f.csid_cid]) != null ? _ref2.log : void 0 : void 0 : void 0;
      if (log != null) {
        f.text = $scope.undecolate(log) || "";
        if (f.ver != null) {
          f.ver.commit();
        }
        f.is_last_memo = true;
        return valid(f);
      }
    }
  };
  is_input = function(f) {
    if (f.text == null) {
      return false;
    }
    if (calc_length(f.text.replace(/\s/g, '')) < 4) {
      return false;
    }
    return true;
  };
  $scope.error = function(f) {
    var list, _ref;
    list = (_ref = $scope.errors) != null ? _ref[f != null ? f.cmd : void 0] : void 0;
    list || (list = []);
    return list.join("<br>");
  };
  safe_anker = function(f) {
    var _ref;
    if (f.mestype === "SAY" && !((_ref = $scope.event) != null ? _ref.is_epilogue : void 0)) {
      if (f.text.match(/>>[\=\*\!]\d+/)) {
        $scope.errors[f.cmd] = ["あぶない！秘密会話へのアンカーがありますよ！"];
        return false;
      }
    }
    return true;
  };
  $scope.text_valid = function(f, force) {
    if (force || true) {
      return valid(f, function(size, lines) {
        var _ref;
        if (f.max.size < size) {
          return false;
        }
        if (f.max.line < lines) {
          return false;
        }
        $scope.errors[f.cmd] = [];
        switch (f.cmd) {
          case "write":
            if (("" + ((_ref = $scope.potof) != null ? _ref.pno : void 0)) !== f.target && !safe_anker(f)) {
              return false;
            }
            return is_input(f);
          case "action":
            f.preview = preview_action(f);
            switch (f.action) {
              case "-99":
                break;
              case "-2":
                f.target = "-1";
                f.preview = preview_action(f);
                return true;
              default:
                return f.target !== "-1";
            }
            if (size < 1) {
              if (f.target === "-1") {
                return false;
              }
              if (f.action === "-99") {
                return false;
              }
            } else {
              if (!safe_anker(f)) {
                return false;
              }
              return is_input(f);
            }
            break;
          case "wrmemo":
            if (size < 1) {
              return true;
            }
            if (!safe_anker(f)) {
              return false;
            }
            return is_input(f);
        }
        return true;
      });
    }
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
  $scope.entry = function(f) {
    return write(f, function() {
      var param;
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
    });
  };
  $scope.write = function(f) {
    return write(f, function() {
      var param;
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
    });
  };
  $scope.action = function(f) {
    f.is_preview = true;
    return write(f, function() {
      var param;
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
    });
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
      if (!target_name) {
        return;
      }
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
  go_anker = function(anker, cb) {
    return _.debounce(function() {
      var offset, target, targetY;
      target = $($(anker)[0]);
      offset = win.height / 10;
      if (target.offset() != null) {
        targetY = target.offset().top - offset;
        return $("html,body").animate({
          scrollTop: targetY
        }, 200, "linear", function() {
          return typeof cb === "function" ? cb(target) : void 0;
        });
      }
    }, DELAY.animato, {
      leading: false,
      trailing: true
    });
  };
  return $scope.go = {
    messages: go_anker(".css_changer"),
    form: go_anker("#forms"),
    search: go_anker("[ng-model=\"search_input\"]", function(o) {
      return o.focus();
    }),
    self_link: function() {
      return document.location.href;
    }
  };
};
var HOGAN_EVENT;

HOGAN_EVENT = function($scope) {
  var add_diary, attention, cancel_say, external, foreground, hogan_click, hogan_click_event, inner, navi, pool_hand, popup, popup_apply;
  hogan_click_event = null;
  navi = function(link) {
    $scope.navi.move(link);
    if ($scope.potofs != null) {
      $scope.potofs_is_small = false;
      $scope.secret_is_open = true;
    }
    return $scope.$apply();
  };
  cancel_say = _.memoize(function(queid) {
    return _.debounce(function() {
      return $scope.submit({
        cmd: 'cancel',
        queid: queid,
        turn: $scope.event.turn,
        vid: $scope.story.vid
      });
    }, DELAY.lento, {
      leading: true,
      trailing: false
    });
  });
  inner = function(cmd, val) {
    var item;
    item = $(hogan_click_event.target);
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
  attention = function(key) {
    var base, url, wo;
    base = location.href.replace(location.hash, "");
    url = Navi.to_url({
      hash: {
        search: key,
        hide_potofs: "",
        mode: "talk_all_open",
        page: 1
      }
    });
    wo = window.open();
    wo.opener = null;
    return wo.location.href = "" + base + url.hash;
  };
  add_diary = function(anchor, turn, name) {
    return $scope.diary.add.anchor(anchor, turn, name);
  };
  pool_hand = function() {
    return $scope.pool_hand();
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
  hogan_click = function(e) {
    hogan_click_event = e;
    $scope.$apply(function() {
      $scope.pageY = e.pageY;
      return eval($(e.target).attr('hogan-click'));
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
  $('#outframe').on('click', '.drag', foreground);
  return $('#outframe').on('click', '[hogan-click]', hogan_click);
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
    return _.assign({}, _.find(this.select, (function(_this) {
      return function(o) {
        return o.val === _this.value;
      };
    })(this)));
  };

  Navi.prototype.popstate = function() {
    var c, l, reject, val;
    l = this.location_val(this.key);
    if (this.params.is_cookie != null) {
      c = win.cookies[this.key];
    }
    val = this.params.current_type(l || c || "");
    reject = (this.select != null) && _.every(this.select, function(o) {
      return val !== o.val;
    });
    this.value = reject ? "" : val;
    return this.value || (this.value = this.params.current_type(this.params.current));
  };

  function Navi($scope, key, def) {
    var btn_key, btn_val, _base, _base1, _base2, _ref;
    this.scope = $scope;
    this.params = def.options;
    (_base = this.params).current_type || (_base.current_type = String);
    (_base1 = this.params).class_select || (_base1.class_select = 'btn-success');
    (_base2 = this.params).class_default || (_base2.class_default = 'btn-default');
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
    this.scope.$watch("" + this.key + ".value", (function(_this) {
      return function(value, oldVal) {
        var func, list, _i, _len, _ref1;
        _this._move();
        _ref1 = _this.watch;
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          func = _ref1[_i];
          func(_this.value);
        }
        Navi.set_cookie();
        list = Navi.to_url();
        if (list.search && list.search !== location.search) {
          location.search = list.search;
        }
        if (list.hash && list.hash !== location.hash) {
          location.hash = list.hash;
          return win.history(null, null, list.hash);
        }
      };
    })(this));
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
          o["class"] = this.params.class_select;
          _results.push(o.show = true);
        } else {
          o["class"] = this.params.class_default;
          _results.push(o.show = false);
        }
      }
      return _results;
    }
  };

  return Navi;

})();

Navi.set_cookie = function() {
  var cmd, expire, navi, options, _, _ref, _results;
  _ref = Navi.list;
  _results = [];
  for (_ in _ref) {
    navi = _ref[_];
    options = navi.params;
    if (navi.value) {
      cmd = "" + navi.key + "=" + navi.value;
      if (options.is_cookie) {
        expire = new Date().advance(OPTION.cookie.expire);
        _results.push(document.cookie = "" + cmd + "; expires=" + (expire.toGMTString()) + "; path=/");
      } else {
        _results.push(void 0);
      }
    } else {
      _results.push(void 0);
    }
  }
  return _results;
};

Navi.to_hash = function(append) {
  var hash, key, location, navi, scanner, value, _, _ref;
  hash = {};
  scanner = function(location, key, value) {
    var cmd;
    if (value) {
      cmd = "" + key + "=" + value;
      return hash[key] = [location, cmd];
    }
  };
  _ref = Navi.list;
  for (_ in _ref) {
    navi = _ref[_];
    scanner(navi.params.location, navi.key, navi.value);
  }
  for (location in append) {
    navi = append[location];
    for (key in navi) {
      value = navi[key];
      scanner(location, key, value);
    }
  }
  return hash;
};

Navi.to_url = function(append) {
  var cmd, key, list, location, obj, _ref;
  list = {};
  _ref = Navi.to_hash(append);
  for (key in _ref) {
    obj = _ref[key];
    location = obj[0], cmd = obj[1];
    if (location != null) {
      list[location] || (list[location] = []);
      list[location].push(cmd);
    }
  }
  list.search = list.search ? "?" + list.search.join("&") : "";
  list.hash = list.hash ? "#" + list.hash.join("&") : "";
  return list;
};

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
          o["class"] = this.params.class_select;
          _results.push(o.show = true);
        } else {
          o["class"] = this.params.class_default;
          _results.push(o.show = false);
        }
      }
      return _results;
    }
  };

  ArrayNavi.prototype.choice = function() {
    return _.assign({}, _.find(this.select, (function(_this) {
      return function(o) {
        return o.val === _this.value[0];
      };
    })(this)));
  };

  ArrayNavi.prototype.choices = function() {
    return _.map(this.value, (function(_this) {
      return function(value) {
        return _.assign({}, _.find(_this.select, function(o) {
          return o.val === value;
        }));
      };
    })(this));
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
    var do_filter_action, do_pager_action, _base;
    def.options.current_type = Number;
    (_base = def.options).per || (_base.per = 1);
    PageNavi.__super__.constructor.apply(this, arguments);
    this.nop = function(target, list) {
      return list;
    };
    this.filters = [];
    this.pagers = [];
    do_filter_action = (function(_this) {
      return function() {
        return $scope.$apply(function() {
          if (_this.by_key != null) {
            _this.list_by_filter = _this.do_filters(_this.scope.$eval(_this.by_key), _this.filters);
          }
          return _this.pager_action();
        });
      };
    })(this);
    this.filter_action = _.debounce(do_filter_action, DELAY.presto, {
      leading: false,
      trailing: true
    });
    do_pager_action = (function(_this) {
      return function() {
        return $scope.$apply(function() {
          var list;
          if (_this.list_by_filter != null) {
            list = _this.do_filters(_this.list_by_filter, _this.pagers);
            if ((_this.to_key != null) && list) {
              eval("_this.scope." + _this.to_key + " = list");
            }
          }
          return _this._move();
        });
      };
    })(this);
    this.pager_action = _.debounce(do_pager_action, DELAY.presto, {
      leading: false,
      trailing: true
    });
  }

  PageNavi.prototype.start = function() {
    var key, _, _i, _j, _len, _len1, _ref, _ref1, _ref2, _ref3;
    _ref = this.filters;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      _ref1 = _ref[_i], key = _ref1[0], _ = _ref1[1];
      this.scope.$watch(key, this.filter_action);
    }
    _ref2 = this.pagers;
    for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
      _ref3 = _ref2[_j], key = _ref3[0], _ = _ref3[1];
      this.scope.$watch(key, this.pager_action);
    }
    return this.filter_action();
  };

  PageNavi.prototype.do_filters = function(list, filters) {
    var filter, target, target_key, _i, _len, _ref;
    for (_i = 0, _len = filters.length; _i < _len; _i++) {
      _ref = filters[_i], target_key = _ref[0], filter = _ref[1];
      target = this.scope.$eval(target_key);
      if (target && filter) {
        list = filter(target, list);
      }
    }
    return list;
  };

  PageNavi.prototype.filter_by = function(by_key) {
    return this.by_key = by_key;
  };

  PageNavi.prototype.filter_to = function(to_key) {
    return this.to_key = to_key;
  };

  PageNavi.prototype.filter = function(key, func) {
    return this.filters.push([key, func]);
  };

  PageNavi.prototype.pager = function(key, func) {
    return this.pagers.push([key, func]);
  };

  PageNavi.prototype.paginate = function(page_per_key, func) {
    this.pager(page_per_key, (function(_this) {
      return function(page_per, list) {
        _this.length = (list.length / page_per).ceil();
        return list;
      };
    })(this));
    this.pager(page_per_key, func);
    return this.pager("" + this.key + ".value", (function(_this) {
      return function(page, list) {
        if (list.last) {
          _this.item_last = _.last(list);
        }
        return list;
      };
    })(this));
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
      item = _.assign({}, _.find(this.select, function(o) {
        return o.val === n[key];
      }));
      item || (item = {
        name: "",
        val: null
      });
      item["class"] = 'ng-cloak';
      if (this.visible && is_show) {
        item["class"] = this.params.class_default;
        item["class"] = null;
        if (this.value === n[key]) {
          item["class"] = this.params.class_select;
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
  var adjust, apply, pool_button, pool_start, refresh;
  apply = function() {};
  $scope.init = function() {
    INIT($scope, $filter, $timeout);
    if ($scope.event != null) {
      $scope.do_sort_potofs();
      $scope.set_turn($scope.event.turn);
    }
    return $timeout(apply, DELAY.msg_delete);
  };
  refresh = function() {
    return $timeout(refresh, DELAY.msg_minute);
  };
  pool_start = function() {
    $timeout(apply, DELAY.msg_delete);
    return $timeout(refresh, DELAY.msg_minute);
  };
  pool_button = function() {
    return $scope.get_news($scope.event, (function(_this) {
      return function() {
        return $scope.init();
      };
    })(this));
  };
  $scope.pool_nolimit = pool_button;
  $scope.pool_hand = _.debounce(pool_button, DELAY.msg_delete, {
    leading: true,
    trailing: false
  });
  adjust = function() {
    $(window).resize();
    return $(window).scroll();
  };
  $scope.adjust = function() {
    adjust();
    _.delay(adjust, DELAY.presto);
    return _.delay(adjust, DELAY.andante);
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
        $scope.face.potofs = _.map($scope.potofs, Potof.key);
      }
      if (((_ref = $scope.event) != null ? _ref.messages : void 0) != null) {
        log_faces = _.map($scope.event.messages, Potof.key);
        $scope.face.all = _.uniq($scope.face.all.concat(log_faces));
      }
      if ($scope.face.potofs != null) {
        all = _.without($scope.face.all, '-_none_', Potof.key({}));
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
    all = _.map($scope.potofs, Potof.key);
    only = _.map(potofs, Potof.key);
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
    return potof_toggle(Potof.key(select_potof));
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
  $scope.timestamp = Timer.time_stamp;
  lax_time = {};
  $scope.set_time = function(log) {
    return log.time = lax_time[Number(log.updated_at)] || ("<span time>" + ($scope.lax_time(log.updated_at)) + "</span>");
  };
  return $scope.lax_time = function(date) {
    var hour, limit, live, minute, second, time;
    if (lax_time[Number(date)] != null) {
      return lax_time[Number(date)];
    }
    if (date != null) {
      second = (new Date() - date) / 1000;
      if (0 < second) {
        minute = Math.ceil(second / 60);
        hour = Math.ceil(minute / 60);
      }
      if (second < 0) {
        minute = Math.floor - second / 60;
        hour = Math.floor - minute / 60;
      }
      limit = 3 * 60 * 60;
      if ((-limit < second && second < limit)) {
        live = function(str, timeout) {
          $scope.timer.add_next(date, timeout);
          return str;
        };
        if ((-limit < second && second < -1800)) {
          return live("" + hour + "時間後", 3600000);
        }
        if ((-1800 < second && second < -25)) {
          return live("" + minute + "分後", 60000);
        }
        if ((-25 < second && second < 25)) {
          return live("25秒以内", 25000);
        }
        if ((25 < second && second < 1800)) {
          return live("" + minute + "分前", 60000);
        }
        if ((1800 < second && second < limit)) {
          return live("" + hour + "時間前", 3600000);
        }
      } else {
        time = Timer.date_time_stamp(date);
        if (second < 0) {
          lax_time[Number(date)] = time;
        }
        return time;
      }
    } else {
      return lax_time[Number(date)] = "....-..-..(？？？) --..時頃";
    }
  };
};
var TOGGLE;

TOGGLE = function($scope) {
  return $scope.stories_toggle = function() {
    $scope.stories_is_small = !$scope.stories_is_small;
    return $scope.adjust();
  };
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
  return _.delay(doIt, DELAY.andante);
};
var popstate, win;

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
    delay || (delay = DELAY.animato);
    $(window).on('scroll', _.throttle(cb, delay));
    return $(window).on(win.resize_event(), _.throttle(cb, DELAY.lento));
  },
  on_resize: function(cb, delay) {
    delay || (delay = DELAY.presto);
    $(window).on(win.resize_event(), _.throttle(cb, delay));
    return $(window).on('scroll', _.throttle(cb, DELAY.lento));
  }
};

if ((typeof history !== "undefined" && history !== null ? history.pushState : void 0) != null) {
  popstate = function(e) {
    return Navi.popstate();
  };
  $(window).on('popstate', _.throttle(popstate, DELAY.presto));
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
    $(window).on('touchstart', _.throttle(dummy, DELAY.presto));
    $(window).on('touchmove', _.throttle(dummy, DELAY.presto));
    $(window).on('touchend', _.throttle(dummy, DELAY.presto));
  } else {
    $(window).on('mousedown', _.throttle(dummy, DELAY.presto));
    $(window).on('mouseup', _.throttle(dummy, DELAY.presto));
    $(window).on('mousemove', _.throttle(dummy, DELAY.presto));
  }
  scan_motion = function(e) {
    win.accel = e.originalEvent.acceleration;
    win.gravity = e.originalEvent.accelerationIncludingGravity;
    return win.rotate = e.originalEvent.rotationRate;
  };
  return $(window).on('devicemotion', _.throttle(scan_motion, DELAY.presto));
});
var MODULE, font, fontname, game, k, msg, o, order, ordername, pixels, pl, plname, power, powername, row, rowname, set_key, style, styles, v, width, widthname, _i, _j, _len, _len1, _ref, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7;

GIJI.msg_styles = [];

_ref = [true, false];
for (_i = 0, _len = _ref.length; _i < _len; _i++) {
  pl = _ref[_i];
  _ref1 = OPTION.selectors.power;
  for (power in _ref1) {
    powername = _ref1[power];
    _ref2 = OPTION.selectors.row;
    for (row in _ref2) {
      rowname = _ref2[row];
      _ref3 = OPTION.selectors.order;
      for (order in _ref3) {
        ordername = _ref3[order];
        if (!("simple" === power || head.csstransitions)) {
          continue;
        }
        o = {
          group: rowname,
          power: power,
          order: order,
          row: row,
          pl: pl
        };
        plname = pl ? "" : "/**/ close";
        msg = _.compact(_.uniq([power, order, row, !pl ? "no-player" : void 0]));
        o.val = msg.join("_");
        o.name = "" + ordername + " " + powername + " " + plname;
        GIJI.msg_styles.push(o);
      }
    }
  }
}

GIJI.styles = {};

_ref4 = GIJI.style_groups;
for (game in _ref4) {
  styles = _ref4[game];
  GIJI.styles[game] = [];
  for (_j = 0, _len1 = styles.length; _j < _len1; _j++) {
    style = styles[_j];
    _ref5 = OPTION.selectors.font;
    for (font in _ref5) {
      fontname = _ref5[font];
      _ref6 = OPTION.selectors.width;
      for (width in _ref6) {
        widthname = _ref6[width];
        pixels = OPTION.css.h1.widths[width];
        o = {
          font: font,
          width: width,
          pixel: "w" + pixels
        };
        for (k in style) {
          v = style[k];
          o[k] = v;
        }
        o.val = "" + style.val + "_" + width + "_" + font;
        o.name = "" + style.group + " " + fontname + " " + widthname;
        GIJI.styles[game].push(o);
      }
    }
  }
}

set_key = function(obj) {
  var _results;
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
  _ref7 = SOW.events;
  for (k in _ref7) {
    v = _ref7[k];
    v.id = SOW_RECORD.CABALA.events.indexOf(k);
    v.key = k;
  }
}

MODULE = function($scope, $filter, $sce, $http, $timeout) {
  var set_turn;
  $scope.head = head;
  $scope.win = win;
  $scope.link = GIJI.link;
  $scope.img_csid_cid = function(csid_cid) {
    var cid, csid, _ref8;
    if (csid_cid != null) {
      _ref8 = csid_cid.split('/'), csid = _ref8[0], cid = _ref8[1];
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
  set_turn = function(turn) {
    var href;
    $scope.set_turn(turn);
    if ($scope.event.has_all_messages) {
      $scope.event.is_news = false;
    }
    $scope.page.value = 1;
    $scope.mode.value = $scope.mode_cache.talk;
    href = $scope.event_url($scope.event);
    return win.history("" + $scope.event.name, href, location.hash);
  };
  $scope.ajax_event = function(turn, href, is_news) {
    var event, getter;
    if ($scope.events != null) {
      event = $scope.event;
      if (event.has_all_messages) {
        return set_turn(turn);
      } else {
        if (is_news) {
          getter = $scope.get_news;
        } else {
          getter = $scope.get_all;
        }
        return getter(event, (function(_this) {
          return function() {
            $scope.init();
            set_turn(turn);
            return $scope.event.is_news = is_news;
          };
        })(this));
      }
    } else {
      return location.href = href + location.hash;
    }
  };
  TOKEN_INPUT($scope);
  HOGAN_EVENT($scope);
  DECOLATE($scope, $sce);
  TIMER($scope);
  CACHE($scope);
  POTOFS($scope);
  AJAX($scope, $http);
  DIARY($scope);
  GO($scope);
  TOGGLE($scope);
  POOL($scope, $filter, $timeout);
  return $scope.$watch("event.turn", function(turn, oldVal) {
    if ((turn != null) && ($scope.event != null) && turn !== oldVal) {
      return $scope.ajax_event(turn, null, !!$scope.event.is_news);
    }
  });
};
var RAILS;

RAILS = function($scope, $filter, $sce, $cookies, $http, $timeout) {
  var get, submit;
  win.cookies = $cookies;
  $scope.mode_cache = {
    info: 'info_open_last',
    memo: 'memo_all_open_last',
    talk: 'talk_all_open'
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
  $scope.submit = _.throttle(submit, DELAY.lento);
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

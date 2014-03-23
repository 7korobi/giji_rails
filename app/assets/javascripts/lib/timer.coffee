TIMER = ($scope)->
  $scope.timestamp = (date)->
    now = new Date(date)
    yyyy = now.getFullYear();
    mm = now.getMonth() + 1;
    dd = now.getDate();
    dow = ["日","月","火","水","木","金","土"][now.getDay()]
    hh = now.getHours();
    tt = ["午前","午後"][ Math.floor hh / 12 ]
    mi = now.getMinutes();
    postfix = ["頃","半頃"][(mi/30).floor()]

    mm = "0" + mm if mm < 10
    dd = "0" + dd if dd < 10
    hh = "0" + hh if hh < 10
    mi = "0" + mi if mi < 10
    "(#{dow}) #{tt}#{hh % 12}時#{mi}分"

  lax_time = {}
  $scope.set_time = (log)->
    log.time = lax_time[Number log.updated_at] || """<span time>#{$scope.lax_time(log.updated_at)}</span>"""

  $scope.lax_time = (date)->
    return lax_time[Number date] if lax_time[Number date]?

    if date?
      second = (new Date() - date)/1000
      if 0 < second
        minute = Math.ceil second / 60
        hour   = Math.ceil minute / 60
      if second < 0
        minute = Math.floor - second / 60
        hour   = Math.floor - minute / 60
      limit = 3 * 60 * 60
      if - limit < second < limit
        live = (str, timeout)->
          $scope.timer.add_next date, timeout
          str
        return live "#{hour}時間後", 3600000 if -limit < second < -1800
        return live "#{minute}分後",   60000 if  -1800 < second <   -25
        return live "25秒以内",        25000 if    -25 < second <    25
        return live "#{minute}分前",   60000 if     25 < second <  1800
        return live "#{hour}時間前", 3600000 if   1800 < second < limit
      else
        now = new Date(date)
        now.addMinutes(15)
        yyyy = now.getFullYear();
        mm = now.getMonth() + 1;
        dd = now.getDate();
        dow = ["日","月","火","水","木","金","土"][now.getDay()]
        hh = now.getHours();
        tt = ["午前","午後"][ Math.floor hh / 12 ]
        mi = now.getMinutes();
        postfix = ["頃","半頃"][(mi/30).floor()]

        mm = "0" + mm if mm < 10
        dd = "0" + dd if dd < 10
        hh = "0" + hh if hh < 10
        mi = "0" + mi if mi < 10

        time = "#{yyyy}-#{mm}-#{dd} (#{dow}) #{tt}#{hh % 12}時#{postfix}"
        lax_time[Number date] = time if second < 0
        time
    else
      lax_time[Number date] = "....-..-..(？？？) --..時頃"



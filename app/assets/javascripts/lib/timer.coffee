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
    log.is_timer_refresh = true
    log.time = lax_time[log.updated_at] || """<span time>#{$scope.lax_time(log.updated_at)}</span>"""

  $scope.lax_time = (date)->
    return lax_time[date] if lax_time[date]?

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
        return "#{hour}時間後" if -limit < second < -1800
        return "#{minute}分後" if  -1800 < second <   -25
        return "25秒以内"      if    -25 < second <    25
        return "#{minute}分前" if     25 < second <  1800
        return "#{hour}時間前" if   1800 < second < limit
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
        lax_time[date] = time if second < 0
        time
    else
      lax_time[date] = "....-..-..(？？？) --..時頃"



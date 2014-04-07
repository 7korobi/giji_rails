TIMER = ($scope)->
  $scope.timestamp = Timer.time_stamp

  lax_time = {}
  $scope.set_time = (log)->
    log.time = lax_time[Number log.updated_at] || """<span time>#{$scope.lax_time(log.updated_at)}</span>"""

  $scope.lax_time = (date)->
    return lax_time[Number date] if lax_time[Number date]?

    if date?
      second = (new Date() - date)/1000
      if 0 < second
        minute = Math.ceil(  second /   60)
        hour   = Math.ceil(  second / 3600)
      if second < 0
        minute = Math.ceil(- second /   60)
        hour   = Math.ceil(- second / 3600)
      limit = 3 * 60 * 60
      if - limit < second < limit
        live = (str, timeout)->
          timeout -= second * 1000 if timeout > second * 1000
          $scope.timer.add_next date, timeout
          str
        return live "#{hour}時間後", 3600000 if -limit < second < -1800
        return live "#{minute}分後",   60000 if  -1800 < second <   -25
        return live "25秒以内",        25000 if    -25 < second <    25
        return live "#{minute}分前",   60000 if     25 < second <  1800
        return live "#{hour}時間前", 3600000 if   1800 < second < limit
      else
        time = Timer.date_time_stamp(date)
        lax_time[Number date] = time if second < 0
        time
    else
      lax_time[Number date] = "....-..-..(？？？) --..時頃"



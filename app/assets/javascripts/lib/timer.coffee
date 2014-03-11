TIMER = ($scope)->
  $scope.lax_date = (date)->
    postfix = ["頃","半頃"][(date.getMinutes()/30).floor()]
    date.format(Date.ISO8601_DATE + '({dow}) {tt}{12hr}時' + postfix)

  lax_time = {}
  $scope.lax_time = (date)->
    return lax_time[date] if lax_time[date]?

    if date?
      timespan = (new Date() - date)/1000
      limit = 3 * 60 * 60
      if - limit < timespan < limit
        return "1分後"    if -60 < timespan < -25
        return "25秒以内" if -25 < timespan <  25
        return "1分前"    if  25 < timespan <  60
        return date.relative('ja')
      else
        now = Date.create date
        now.addMinutes(15)
        postfix = ["頃","半頃"][(now.getMinutes()/30).floor()]
        time = now.format(Date.ISO8601_DATE + '({dow})  {TT}{hh}時' + postfix, 'ja')
        lax_time[date] = time if timespan < 0
        time
    else
      lax_time[date] = "....-..-..(？？？) --..時頃"



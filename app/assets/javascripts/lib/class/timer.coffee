class Timer
  constructor: (@cb)->
    @data = {}
    @timeouts = {}
    @delay_min = 99999999

  timer: ()->
    do_timer = =>
      now = new Date
      if @cb
        dates = Object.keys @timeouts
        @timeouts = {}
        @delay_min = 99999999
        for date in dates
          item = @data[date]
          @cb(item, now) if item
      @timer_id = setTimeout do_timer, @delay_min
    @timer_id = setTimeout do_timer, @delay_min

  start: ()->
    clearTimeout @timer_id if @timer_id
    @timer()

  cache: (item)->
    @data[Number item.updated_at] = item

  add_next: (date, timeout)->
    @delay_min = timeout if timeout < @delay_min
    @timeouts[Number date] = true

Timer.hh = (hh)->
  tt = ["午前","午後"][ Math.floor hh / 12 ]
  hh = "0" + hh if hh < 10
  "#{tt}#{hh % 12}時"

Timer.hhmm = (hh, mi)->
  mi = "0" + mi if mi < 10
  "#{Timer.hh(hh)}#{mi}分"

Timer.dow = (dow)->
  ["日","月","火","水","木","金","土"][dow]

Timer.time_stamp = (date)->
  now = new Date(date)
  hh = now.getHours();
  mi = now.getMinutes();
  dow = Timer.dow now.getDay()
  mm = "0" + mm if mm < 10
  dd = "0" + dd if dd < 10
  "(#{dow}) #{Timer.hhmm(hh,mi)}"

Timer.date_time_stamp = (date)->
  now = new Date(date)
  now.addMinutes(15)
  yyyy = now.getFullYear();
  mm = now.getMonth() + 1;
  dd = now.getDate();
  dow = Timer.dow now.getDay()
  hh = now.getHours();
  mi = now.getMinutes();
  postfix = ["頃","半頃"][(mi/30).floor()]

  mm = "0" + mm if mm < 10
  dd = "0" + dd if dd < 10

  "#{yyyy}-#{mm}-#{dd} (#{dow}) #{Timer.hh(hh)}#{postfix}"

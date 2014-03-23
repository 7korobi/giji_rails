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

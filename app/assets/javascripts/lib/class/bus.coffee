class Bus
  constructor: ()->
    Bus.list.push @
    @from = null
    @target = null

  refresh: ->
    data_stream = @data_stream()
    data_stream.browser.set_cookie()
    data_stream.browser.to_url()

    @target = data_stream.filter @from
    @call_end()

  on_values: (list)->
    @from = list
    @refresh()

  on_start: (cb)->
    @data_stream = cb

  on_end: (cb)->
    do_end = =>
      cb @target
    @call_end = _.debounce do_end, DELAY.presto,
      leading: false
      trailing: true

  watch_angular: ->
    (new_val, old_val)=>
      @on_values new_val

Bus.list = []
Bus.refresh = (data_stream)->
  for bus in Bus.list
    bus.refresh() if data_stream.is_cover bus.data_stream()

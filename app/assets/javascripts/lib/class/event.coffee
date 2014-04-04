class Event
  init: ($scope)->
    @cache = {}

    cb = =>
      $scope.init()
      @set_turn()

    @set_turn = =>
      if @has_all_messages
        @is_news = false
      $scope.set_turn @turn
      $scope.page.value = 1
      $scope.mode.value = $scope.mode_cache.talk
      win.history "#{@name}", @url(), location.hash

    @get_news = =>
      href = @url()
      $scope.get href, cb if href

    @get_all = =>
      href = @link
      $scope.get href, cb if href

    return unless @messages?
    return unless @turn?
    for message in @messages
      message.__proto__ = Message.prototype
      message.init_data @

    for key, message of @cache
      message.input = $scope.undecolate message.log

  last_memo: (key)->
    @cache[key]?.input

  set_last_memo: (key, message)->
    if (! @cache[key]) || @cache[key].updated_at < message.updated_at
      @cache[key] = message

  url: ->
    (@is_news && @news) || @link

  show: (href, is_news)->
    if @has_all_messages
      @set_turn()
    else
      if is_news
        @get_news()
      else
        @get_all()
      @is_news = is_news


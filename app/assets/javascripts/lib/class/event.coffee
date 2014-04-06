class Event
  init: ($scope)->
    @cache = {}

    @show_mode = (mode = $scope.mode_cache.talk)=>
      $scope.mode.value = mode
      $scope.set_turn @turn
      $scope.page.value = 1

    @refresh = (url, cb)->
      if @has_all_messages
        cb()
        @is_news = false
      else
        if url
          is_news = @is_news
          $scope.get url, =>
            $scope.merge $scope, gon, "events"
            @is_news = is_news
            cb()

    @show_with_refresh = (url, cb)->
      if @has_all_messages
        cb()
        $scope.set_turn @turn
        @is_news = false
      else
        if url
          $scope.get url, =>
            $scope.init()
            cb()

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

  search_with_refresh: (cb)->
    @refresh @link, cb

  show_info: ->
    @is_news = true
    @show_mode 'info_all_open'

  show_unread: ->
    @is_news = false
    @show_mode 'info_all'

  show_refresh: ->
    @show_with_refresh @url(), ->

  show_news: ->
    @show_with_refresh @url(), =>
      @is_news = true
      @show_mode()

  show_talk: ->
    @show_with_refresh @link, =>
      @is_news = false
      @show_mode()

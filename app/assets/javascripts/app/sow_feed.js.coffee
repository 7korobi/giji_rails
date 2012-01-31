class SowFeed
  constructor: ->
    @title = $("title").text()
    @url = document.URL
    return  if  @url.indexOf("vid=") < 0  or  @url.indexOf("#newsay") < 0
    @url = @url.replace(/#newsay/, "&cmd=rss")

  to_date: (str)->
    date = new Date()
    if str.match(/([0-9]+)-([0-9]+)-([0-9]+)T([0-9]+):([0-9]+):([0-9]+)/)
      year = parseInt(RegExp.$1, 10)
      month = parseInt(RegExp.$2, 10)
      day = parseInt(RegExp.$3, 10)
      hour = parseInt(RegExp.$4, 10)
      min = parseInt(RegExp.$5, 10)
      sec = parseInt(RegExp.$6, 10)
      date.setYear year
      date.setMonth month
      date.setDate day
      date.setHours hour
      date.setMinutes min
      date.setSeconds sec
      date.setMilliseconds 0
      date.getTime()
    else
      false

  check: ->
    setTimeout =>
      @check_base 0, 0, 0
    , 1000
    $("#newinfo:last > img").show()
  
  check_base: (newDateInt, newFeeds, oldFeeds) ->
    infomes = undefined
    maxDateInt = 0
    $.ajax
      url: @url
      dataType: "xml"
      success: (xml) =>
        $(xml).find("item").each (index, element)=>
          thisTime = $(element).find("date").text()
          thisTime = getElementsByTagName("dc:date")[0].firstChild.nodeValue  if thisTime is ""
          thisDateInt = @to_date(thisTime)

          newDateInt = thisDateInt  if newDateInt is 0
          maxDateInt = thisDateInt  if maxDateInt < thisDateInt
          if newDateInt < thisDateInt
            newFeeds++
          else
            newDateInt = maxDateInt
            false

        if newFeeds > oldFeeds
          newFeeds -= oldFeeds  if $(document).find("#newinfo").size() > 1
          $("title").text "(#{newFeeds}) " + @title
          infomes = newFeeds + " 件の新しい発言があります。"
          if $("#newinfo").size() > 0
            $("#newinfo:last > a").text(infomes).show()
            $("#newinfo:last > img").hide()
            $("#newinfo:last").show()
          oldFeeds = newFeeds

      error: (xhr, status, e) ->

      complete: (xhr, status) =>
        setTimeout =>
          @check_base newDateInt, newFeeds, oldFeeds
        , 5 * 60 * 1000

  more: (link) ->
    href = link.href
    base = $(link).parent()
    base.append $('<img src="img/ajax-loader.gif">')
    $(link).remove()
    $.get href, {}, (data) ->
      mes = $(data).find(".inframe:first").children(":not(h2)")
      setAjaxEvent mes
      base.hide()
      base.after mes
    false

  clear: (link) ->
    href = link.href
    base = $(link).parent()
    base.find("img").show()
    $(link).hide()
    $.get href, {}, (data) ->
      mes = $(data).find(".inframe:first").children(":not(h2,#readmore)")
      setAjaxEvent mes
      base.hide()
      base.before mes
      $("title").text @title.replace(/\(\d+\) /, "")
    false


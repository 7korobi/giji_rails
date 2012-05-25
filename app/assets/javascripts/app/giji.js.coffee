
giji_render = ->
  drag_show = (mouse, obj)->
    base = $(obj)
    drag_create base
    drag_moveto base, mouse
    drag_markup base, 'x'
    drag_start  base

    q_drag = base.find(".drag_switch")
    q_drag.click =>
      base.fadeOut 'fast', =>
        base.dragOff()
        base.remove()

  drag_markup = (base, mark)->
    q_pick   = base.find(".mes_date")
    drag_switch = $("<span class='drag_switch'> #{mark} </span>")
    q_pick.append drag_switch

  drag_moveto = (base, mouse)->
    topm = mouse.pageY + 16
    leftm = $('#contentframe').offset().left
    base.css
      top:  topm
      left: leftm

  drag_start = (base)->
    base.find('.handler').replaceWith("<h3 class='handler'>.</h3>")
    base.dragOnY()
    base.addClass('drag')
    base.css
      cursor:   'move'
      position: 'absolute'
      display:  'none'
    base.fadeIn('fast')

  drag_create = (base)->
    base.easydrag()

    pump_number = base.to_z_front()
    handle_id = "handler#{pump_number}"
    base.setHandler handle_id
    base.prepend $("<hr class='handler invisible_hr' />")

  drag_on  = (mouse)->
    unless @base?
      @base = $(@).parents(".message_filter")
      drag_create @base
    @base.slideUp 'fast', =>
      drag_start @base

  drag_off = (mouse)->
    @base.fadeOut 'fast', =>
      @base.find('.handler').replaceWith("<hr class='handler invisible_hr' />")
      @base.removeClass('drag')
      @base.dragOff()
      @base.css
        cursor:   'auto'
        position: 'static'
      @base.slideDown('fast')


  bind = (base)=>
    q_text = base.find("p.text")
    q_text.each ->
      html = $(@).html()
      $(@).html( html.replace(///
        (/\*)(.*?)(\*/|$)
      ///g,'<em>$1$2$3</em>') )

    q_anchor = base.find(".res_anchor")
    q_anchor.toggle (mouse)->
      ank = $(@)
      unless @base?
        @base = ank.parents(".message_filter")

      turn  = ank.attr('turn') - 0
      logid = ank.attr('logid')
      title = ank.attr("title")
      href  = @href
      text  = ank.text()
      if 0 == text.indexOf(">>")
        if turn? && logid?
          message = scan turn, logid
          if message?
            drag_show mouse, create message
          else 
            if gon.turns[turn]?
              href = href.replace("/#{turn}/messages","/#{turn - 1}/messages")
              turn -= 1 
            $.get href, {}, (data) =>
              code = data.match(/gon.messages=(.*)<\/script>/)[1]
              json = eval """
                (function(){
                  gon.turns[#{turn}] = #{code}
                })()
              """
              drag_show mouse, create scan turn, logid

        else if "" == title
          href = href.replace("#", "&logid=").replace("&move=page", "")
          $.get href, {}, (data) =>
            drag_show mouse, $(data).find(".message_filter")
        else
          window.open href, "_blank"
      else
        window.open href, "_blank"

    ,=>
      item = base.nextAll(".drag")
      item.fadeOut "fast", =>
        item.remove()


  scan = (turn, logid)->
    if gon.turns[turn]
      for obj in gon.turns[turn]
        if  logid == obj.logid
          return obj  

  create = (obj)=>
    if obj
      html = @page.render(obj)
      tag = html.appendTo(@page.target)
      bind tag
      tag

  rewrite = =>
    @page.target.html('')
    for index in [@page.from..@page.to]
      create @data[index]

    drag_markup @page.target, 'o'
    q_drag = @page.target.find(".drag_switch")
    q_drag.toggle drag_on, drag_off

  rewrite()
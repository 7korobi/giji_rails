class PageBtn
  constructor: (base)->
    base.paginate = @

    @pages = $(".pagination")
    @pages.html('')

    @first_doc  = @append_link('first')
    @second_doc = @append_link('second')
    @prev_gap   = @append_gap('prev_gap')
    @prev_doc    = @append_link('prev')
    @current_doc = @append_link('current')
    @next_doc    = @append_link('next')
    @next_gap = @append_gap('next_gap')
    @penu_doc = @append_link('penu')
    @last_doc = @append_link('last')

    @params = new Params('page')
    @params.current = '1'

  link: (type)->
    @params.on = type
    params.on = type  for params in @page.search
    @select()
    @params.join_gui @pages, 'btn-success', 'data-href', =>
      @reload()
    @params.render()
  
  link_local: (page)->
    @page = page
    @link 'hash'
    if "onhashchange" of window and (document.documentMode is `undefined` or document.documentMode > 7)
      window.onhashchange = =>
        params.render()  for params in @page.search
        @params.render()

  link_remote: (page)->
    @data_render = -> true
    @select = =>
      @data =
        length: page.length
    @page =
      per: 1
      search: []
    @link 'search'

  append_gap:  (name)->
    @pages.append """
      <span class="page #{name}">
        …
      </span>
    """
    @pages.find(".#{name}")

  append_link: (name)->
    @pages.append """
      <span class="page #{name}">
        <a class="btn"></a>
      </span>
    """
    @pages.find(".#{name}")

  select: ->
    data = @page.data
    data = params.select(data) for params in @page.search
    @data = data

  reload: ->
    $(window).scrollTop( $(".inframe").offset().top - 20 )

    @move()
    @render()

  move: ->
    @current = @params.val() - 0
    @next    = @current + 1
    @prev    = @current - 1

    @last = Math.ceil( @data.length / @page.per )
    @penu = @last - 1

    @second = 2
    @first  = 1

  render: ->
    @limit_if  0 < @last             , @first_doc,   1,
    @limit_if  1 < @last             , @second_doc,  2
    @limit_if  2 < @last             , @last_doc,    @last
    @limit_if  2 < @penu             , @penu_doc,    @penu

    @limit_if  2 < @next + 1 < @penu , @next_gap
    @limit_if  2 < @next     < @penu , @next_doc,    @next
    @limit_if  2 < @current  < @penu , @current_doc, @current
    @limit_if  2 < @prev     < @penu , @prev_doc,    @prev
    @limit_if  2 < @prev - 1 < @penu , @prev_gap

    @page.from = @page.per * @prev
    @page.to   = @page.per * @current - 1
    @data_render()

  limit_if: (bool, obj, text)->
    if bool
      if text?
        obj.find("a").html(" #{text} ").attr('data-href', text)
      obj.show()
    else
      obj.hide()

  data_render: ->
    drag_show = (mouse, obj)=>
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

    rewrite = =>
      @page.target.html('')
      for index in [@page.from..@page.to]
        create @data[index]

      drag_markup @page.target, 'o'
      q_drag = @page.target.find(".drag_switch")
      q_drag.toggle drag_on, drag_off


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


    scan = (turn, logid)=>
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
    rewrite()

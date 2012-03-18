class PageBtn
  constructor: (base)->
    base.paginate = @

    @params = new Params('page')
    @params.current = '1'
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

  link: (type)->
    @params.on = type
    params.on = type  for params in @page.search
    @data_finder()
    @reload()

  link_local: (page)->
    @page = page
    @target = $(@page.target)
    @link('hash')

  link_remote: (page)->
    @data_finder = -> true
    @data_render = -> true
    @page =
      per: 1
      search: []
    @data =
      length: page.length
    @link('search')

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
    span = @pages.find(".#{name}")
    btn =  span.find("a.btn")
    link.paginate = @  for link in btn
    btn.click ->
      $(window).scrollTop( $(".inframe").offset().top )

      href = $(@).attr('data_href')
      @paginate.params.change(href)
      @paginate.reload()
      false

    span

  reload: ->
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

  limit_if: (bool, obj, text)->
    if bool
      if text?
        obj.find("a").html(" #{text} ").attr('data_href', text)
      obj.show()
    else
      obj.hide()

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

    from = @page.per * @prev
    to   = @page.per * @current - 1
    @data_render(from, to)

  data_finder: ->
    data = @page.data
    data = params.select(data) for params in @page.search
    @data = data

  data_render: (from, to)->
    drag_on  = (mouse)->
      unless @base?
        drag_switch = $(@)
        @base = drag_switch.parents(".message_filter")
        @base.easydrag()

        pump_number = parseInt new Date().getTime()
        @base.css
          zIndex: pump_number
        @handle_id = "handler#{pump_number}"
        @base.setHandler @handle_id

        @base.prepend $("<h3 class='handler'>.</h3>")

      @base.find('.handler').replaceWith("<h3 class='handler'>.</h3>")
      @base.dragOn()
      @base.addClass('drag')
      @base.css
        cursor:   'move'
        position: 'absolute'

    drag_off = (mouse)->
      @base.find('.handler').replaceWith("<hr class='handler invisible_hr' />")
      @base.dragOff()
      @base.removeClass('drag')
      @base.css
        cursor:   'auto'
        position: 'static'

    rewrite = =>
      @target.html('')
      for index in [from..to]
        create @data[index]

    bind = =>
      q_text   = @target.find("p.text")
      q_pick   = @target.find(".mes_date")
      q_anchor = @target.find(".res_anchor")
      drag_switch = $("<span> o </span>").addClass("drag_switch")
      q_pick.append drag_switch

      q_drag = @target.find(".drag_switch")

      q_text.each ->
        html = $(@).html()
        $(@).html( html.replace(///
          (/\*)(.*?)(\*/|$)
        ///g,'<em>$1$2$3</em>') )

      q_anchor.toggle (mouse)->
        unless @base?
          ank = $(this)
          @base = ank.parents(".message_filter")

        text = ank.text()
        title = ank.attr("title")
        if 0 == text.indexOf(">>")
          if @turn? && @logid?
            if gon.turns[@turn]?
              $.get @href, {}, (data) =>
                code = $(data).find('head script').text()
                gon.turns[@turn] = eval """
                  (function(){
                    var gon={},window={gon: gon};
                    #{code}
                    return(gon.messages);
                  })()
                """
                show create scan @turn, @logid
            else
              show create scan @turn, @logid

          if "" == title
            href = @href.replace("#", "&logid=").replace("&move=page", "")
            $.get href, {}, (data) =>
              show $(data).find(".message_filter")
          else
            window.open @href, "_blank"
        else
          window.open @href, "_blank"

      ,(mouse)->
        ank = $(this)
        base = ank.parents(".message_filter")
        base.nextAll(".ajax").fadeOut "nomal", ->
          base.nextAll(".ajax").remove()

      q_drag.toggle drag_on, drag_off

    scan = (turn, logid)=>
      for obj in gon.turns[turn]
        return obj  if  logid == obj.logid

    create = (obj)=>
      if obj
        html = @page.render(obj)
        html.appendTo(@target)

    show = (mes)=>
      date = $(mes).find(".mes_date")
      base.after mes
      topm = mouse.pageY + 16
      leftm = mouse.pageX - 100
      leftend = $("body").width() - mes.width() - 8
      leftm = leftend  if leftend < leftm
      mes.css
        top: topm
        left: leftm
        zIndex: pumpNumber()

      mes.addClass("ajax").css "display", "none"
      $(mes).fadeIn()
      handlerId = "handler" + pumpNumber()
      handler = $("<div id=\"" + handlerId + "\">.</div>").addClass("handler")
      $(mes).prepend handler
      $(mes).easydrag()
      $(mes).setHandler handlerId
      close = $("<span> x </span>").addClass("close")
      date.append close
      closeWindow()
      setAjaxEvent mes

    rewrite()
    bind()


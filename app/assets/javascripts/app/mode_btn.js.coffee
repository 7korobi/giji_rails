class ModeBtn
  constructor: (base)->
    base.modinate = @

    @params = new Params 'mode', (val, obj)->
      logid_types =
        memo: /^.[M]/
        open: /^[AMSIi][^M]/
        clan: /^[AMSIiWPX][^M]/
        mob:  /^[AMSIiGV][^M]/
        all:  /^.[^M]/
      obj.logid.match logid_types[val]
    @params.current = 'all'
    @pages = $(".modination")
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
      $(window).scrollTop( $("#messages").offset().top )

      href = $(@).attr('data_href')
      @paginate.params.change(href)
      @paginate.reload()
      false

    span

  reload: ->
    @render()

  render: ->


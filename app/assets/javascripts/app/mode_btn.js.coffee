class ModeBtn
  constructor: (base)->
    base.modinate = @

    @pages = $(".modination")
    @pages.html('')

    @append_link 'memo', '相談'
    @append_link 'all',  '混合'
    @append_link 'mob',  '裏方'
    @append_link 'clan', '仲間'
    @append_link 'open', '議事'

    @params = new Params 'mode', (val, obj)->
      logid_types =
        memo: /^(.M)|([AM]S)/
        all:  /^.[^M]/
        mob:  /^[AmSIiVG][^M]/
        clan: /^[AmSIiWPX][^M]/
        open: /^[AmSIi][^M]/
      obj.logid.match logid_types[val]
    @params.current = 'all'
    @params.is_cookie = true

  link_local: (pager)->
    @pager = pager
    @params.join_gui @pages, 'btn-success', 'data-href', =>
      @pager.select()
      @pager.reload()
    @params.render()

  append_link: (name, text)->
    @pages.append """
      <span class="page #{name}">
        <a class="btn" data-href="#{name}">#{text}</a>
      </span>
    """

$ ->
  if gon?
    if gon.page
      new PageBtn(Client).link_remote gon.page

    else
      if gon.messages?
        gon.turns = []
        gon.turns[gon.turn] = gon.messages

        mode_btn = new ModeBtn(Client)
        page_btn = new PageBtn(Client)
        params_logid = new Params 'logid', (val, obj)-> val == obj.logid

        page_btn.link_local 
          per:    50
          target: $("#messages")
          data:   gon.messages
          render: (message)->
            $.tmpl(gon.templates[message.template], message)
          logid: params_logid
          search: [
            params_logid
            mode_btn.params
          ]

        mode_btn.link_local page_btn



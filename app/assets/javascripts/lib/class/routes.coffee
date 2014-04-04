Routes = {}
Routes.base = new Browser 'base', null, (o)->
  Routes.stories = new Browser 'stories', o, (o)->

  Routes.ankers = new Browser 'ankers', o, (o)->

  Routes.turn = new Browser 'turn', o, (o)->
    Routes.forms = new Browser 'forms', o, (o)->
    Routes.search = new Browser 'search', o, (o)->
    Routes.news = new Browser 'news', o, (o)->
      Routes.unread = new Browser 'unread', o, (o)->
    Routes.potofs = new Browser 'potofs', o, (o)->
      Routes.event = new Browser 'event', o, (o)->



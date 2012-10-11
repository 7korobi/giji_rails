# -*- coding: utf-8 -*-

module SowTurnDecorator
  def gon
    { link: show_path(event).html_safe,
      name: event.name.html_safe
    }
  end
end

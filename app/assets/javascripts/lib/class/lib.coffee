Lib =
  name:
    folder: (o)-> o
    config: (o)->
      SOW.roles[o]?.name || SOW.gifts[o]?.name || SOW.events[o]?.name || o || ""
    group: (o)->
      SOW.groups[o]?.name || "その他"
    win: (o)->
      SOW.wins[o]?.name || o || ""

  countup:
    common: (filter, list)->
      counts = []
      group = _.groupBy list
      for key, val of group
        counts.push [key, val.length]

      _.sortBy counts, ([key, size])->
        size
      .map ([key, size])->
        if 1 < size
          "#{filter(key)}x#{size}"
        else
          "#{filter(key)}"

    config: (list)->
      @common(Lib.name.config, list)

    win: (list)->
      @common(Lib.name.win, list)


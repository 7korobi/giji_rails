# bdefghjklnoprstuvwxyzBCDEFHJKLNORUYZ

Lib =
  message_filter: (is_mob_open, mode, add)->
    if is_mob_open
      open_filters = Lib.filters.mob_open
    else
      open_filters = {}

    mode_filter   = Lib.filters.mode[mode]
    mode_filter ||= mode_filters[mode]

    add_filter   = Lib.filters.think[add]
    add_filter ||= -> false

    (o)-> o.logid.match(mode_filter) || add_filter(o)

  filters:
    think:
      clan:  (o)-> "" != o.to && o.to?
      think: (o)-> "" == o.to && o.logid.match(/^T[^M]/)
    mode:
      info_open_last: /^([aAm].\d+)|(vilinfo)/
      info_all_open: /^(vilinfo)|(potofs)/
      info_all: /^(..\d+)|(unread)|(potofs)/
      memo_all:  /^.M\d+/
      memo_open: /^[qcaAmIMS][MX]\d+/
      talk_all:   /^[^S][^M]\d+/
      talk_think: /^[qcaAmIi][^M]\d+/
      talk_clan:  /^[qcaAmIi\-WPX][^M]\d+/
      talk_all_open:   /^.[^M]\d+/
      talk_think_open: /^[qcaAmIiS][^M]\d+/
      talk_clan_open:  /^[qcaAmIi\-WPXS][^M]\d+/
      talk_all_last:   /^[^S][SX]\d+/
      talk_think_last: /^[qcaAmIi][SX]\d+/
      talk_clan_last:  /^[qcaAmIi\-WPX][SX]\d+/
      talk_all_open_last:   /^.[SX]\d+/
      talk_think_open_last: /^[qcaAmIiS][SX]\d+/
      talk_clan_open_last:  /^[qcaAmIi\-WPXS][SX]\d+/
      talk_open:      /^[qcaAmIS][^M]\d+/
      talk_open_last: /^[qcaAmIS][SX]\d+/

    mob_open:
      talk_think_open_last: /^[qcaAmIiVS][SX]\d+/
      talk_think_open: /^[qcaAmIiVS][^M]\d+/
      memo_open:      /^[qcaAmIMVS][MX]\d+/
      talk_open:      /^[qcaAmIVS][^M]\d+/
      talk_open_last: /^[qcaAmIVS][SX]\d+/

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

  comma: d3.format(",.0f")


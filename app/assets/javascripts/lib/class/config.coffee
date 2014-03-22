class Config
  init: ->
    count_set = (item)->
      item.count = @counts[item.key]
      item

    roles = _.groupBy _.map(@roles, (o)-> count_set SOW.roles[o]), (o)-> SOW.groups[o.group].name
    gifts = _.groupBy _.map(@gifts, (o)-> count_set SOW.gifts[o]), (o)-> "恩恵"
    @items = _.assign {}, roles, gifts
    @items_keys = _.keys @items
    @items.events = @events.map (o)-> SOW.events[o]

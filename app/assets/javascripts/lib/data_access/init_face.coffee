INIT_FACE = (new_base)->
  if new_base.story_ids?
    new_base.story_id_of_folders = _.groupBy new_base.story_ids, ([k,count])->
      k.split("-")?[0]

  if new_base.wins?
    new_base.role_of_wins = _.groupBy new_base.roles, ([k,count])->
      role = SOW.gifts[k] || SOW.roles[k] || {group: "OTHER"}
      SOW.groups[role.group].name

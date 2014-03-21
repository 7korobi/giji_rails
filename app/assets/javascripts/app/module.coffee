GIJI.msg_styles = []
for pl in [true, false]
  for power, powername of OPTION.selectors.power
    for row, rowname of OPTION.selectors.row
      for order, ordername of OPTION.selectors.order
        continue unless "simple" == power || head.csstransitions

        o =
          group: rowname
          power: power
          order: order
          row: row
          pl: pl

        plname = if pl
          ""
        else
          "/**/ close"
        msg = _.compact _.uniq [
          power
          order
          row
          "no-player" unless pl
        ]
        o.val = msg.join("_")
        o.name = "#{ordername} #{powername} #{plname}"
        GIJI.msg_styles.push o

GIJI.styles = {}
for game, styles of GIJI.style_groups
  GIJI.styles[game] = []
  for style in styles
    for font, fontname of OPTION.selectors.font
      for width, widthname of OPTION.selectors.width
        pixels = OPTION.css.h1.widths[width]
        o =
          font: font
          width: width
          pixel: "w#{pixels}"

        for k, v of style
          o[k] = v
        o.val = "#{style.val}_#{width}_#{font}"
        o.name = "#{style.group} #{fontname} #{widthname}"
        GIJI.styles[game].push o

set_key = (obj)->
  return unless obj?
  for k,v of obj
    v.key = k

set_key SOW.roles
set_key SOW.gifts
set_key SOW.events

if SOW.maskstates?
  SOW.maskstate_order = _.sortBy _.keys(SOW.maskstates), (o)-> -o

if SOW_RECORD.CABALA.events?
  for k,v of SOW.events
    v.id  = SOW_RECORD.CABALA.events.indexOf k
    v.key = k


MODULE = ($scope, $filter, $sce, $http, $timeout)->
  $scope.head = head;
  $scope.win  = win;
  $scope.link = GIJI.link

  $scope.$watch 'title', (value, oldVal)->
    $('title').text(value);

  # face_id support
  $scope.img_csid_cid = (csid_cid)->
    if csid_cid?
      [csid, cid] = csid_cid.split '/'
      $scope.img_cid csid, cid
    else
      $scope.img_cid null, 'undef'

  $scope.img_cid = (csid, face_id)->
    csid = GIJI.csids[csid]
    csid or= GIJI.csids.default
    "#{URL.file}#{csid.path}#{face_id}#{csid.ext}"

  set_turn = (turn)->
    $scope.set_turn(turn)
    $scope.event.is_news =
      if $scope.event.has_all_messages
        false
      else
        is_news
    $scope.page.value = 1
    $scope.mode.value = $scope.mode_cache.talk
    href = $scope.event_url $scope.event
    win.history "#{$scope.event.name}", href, location.hash

  $scope.ajax_event = (turn, href, is_news)->
    if $scope.events?
      event = $scope.event
      if event.has_all_messages
        set_turn(turn)
      else
        if is_news
          getter = $scope.get_news
        else
          getter = $scope.get_all
        getter event, =>
          $scope.init()
          set_turn(turn)

    else
      location.href = href + location.hash

  $scope.$watch "event.turn", (turn, oldVal)->
    $scope.ajax_event(turn, null, !! $scope.event.is_news) if turn? && $scope.event? && turn != oldVal


  TOKEN_INPUT  $scope
  HREF_EVAL    $scope
  DECOLATE $scope, $sce
  TIMER   $scope
  CARD    $scope
  CACHE   $scope
  POTOFS  $scope
  AJAX    $scope, $http

  DIARY   $scope
  TITLE   $scope
  GO      $scope
  TOGGLE  $scope

  # INIT FILTER POOL sequence
  POOL    $scope, $filter, $timeout

[filter, toggle, cookie, cookie_in_use] = [[],[],[],[]]

initFilter = ->
  filter = []
  toggle = []


summary = ->
  $("#itemlist").empty()
  ischeckclipseer = 1 != toggle.clipseer
  ischeckclipexecute = 1 != toggle.clipexecute
  ischeckclipagenda = 1 != toggle.clipagenda
  ischeckcliptopix = 1 != toggle.cliptopix
  ischeckclipanchor = 1 != toggle.clipanchor
  ischeckclipbm = 1 != toggle.clipbm
  cliptext = $("#cliptext").val()
  result_list = []
  $(".message_filter").each ->
    link = "#newsay"
    name = "？"
    item = ""
    box = $(this)
    mes = box.find("p:not(.mes_date)")
    text = mes.text()
    if ischeckclipseer
      tseer = text.match("●")
      item += " ●"  if tseer
    if ischeckclipexecute
      texecute = text.match("▼")
      item += " ▼"  if texecute
    if ischeckclipagenda
      tagenda = text.match("■")
      item += " ■"  if tagenda
    if ischeckcliptopix
      ttopix = text.match("【")
      item += " 【】"  if ttopix
    if cliptext
      clipary = cliptext.split(" ")
      i = 0

      while i < clipary.length
        item += " " + clipary[i]  if -1 < text.indexOf(clipary[i])
        i++
    if ischeckclipbm
      box.find(".action_bm .mes_action, .mes_think .action p:not(.mes_date)").each ->
        name = $(this).find("a").text()
        text = $(this).text().replace(name, "")
        item += " " + text
    if ischeckclipanchor
      mes.find(".res_anchor").each ->
        text = $(this).text()
        href = @href
        href = href.replace("#", "&logid=").replace("&move=page", "")  if 0 == text.indexOf(">>")
        item += " <a class=\"res_anchor\" href=\"" + href + "\" target=\"_blank\">" + text + "</a>"
    return  if "" == item
    $(this).find("a[name]").each ->
      link = @name
      name_ary = $(this).text().split(" ")
      name = name_ary[name_ary.length - 1]

    result_list.push "<div class=\"sayfilter_content_enable\"><div class=\"sayfilter_incontent\"><a class=\"res_anchor\" href=\"#" + link + "\">" + name + "</a>" + item + "</div></div> "

  $("#itemlist").append result_list.join("")

tribind_click = (selecter, ary, enable, disable) ->
  button = $(selecter)
  button.click changeButtonTri
  button.each ->
    target = $(this).next().filter("div")
    name = target.attr("id")
    @target = target
    @target_name = name
    @target_var = ary
    @style_enable = enable
    @style_disable = disable
    @set_function = setHeader
    @set_function button, this, ary[name]
headerbind_click = (selecter, ary, enable, disable) ->
  button = $(selecter)
  button.click changeButton
  button.each ->
    target = $(this).next().filter("div")
    name = target.attr("id")
    @target = target
    @target_name = name
    @target_var = ary
    @style_enable = enable
    @style_disable = disable
    @set_function = setHeader
    @set_function button, this, ary[name]
summarybind_click = (selecter, ary, enable, disable) ->
  button = $(selecter)
  name = button.attr("id")
  button.click changeButton
  button.click summary
  button.each ->
    @target_name = name
    @target_var = ary
    @style_enable = enable
    @style_disable = disable
    @set_function = setItem
    @set_function button, this, ary[name]
filterbind_click = (selecter, ary, enable, disable) ->
  button = $(selecter)
  name = button.attr("id")
  button.click changeButton
  button.click changeSayDisplays
  button.each ->
    @target_name = name
    @target_var = ary
    @style_enable = enable
    @style_disable = disable
    @set_function = setFilter
    @set_function button, this, ary[name]
while_bind_click = (head, ary, enable, disable, bind_click) ->
  i = 0

  while i < 99
    id = head + i
    selecter = "#" + id
    button = $(selecter)
    count = button.size()
    if 0 == count
      return  if 0 == i
      continue  if 9 < i
      filter[id] = 2
    else
      filter[id] = 0  unless filter[id] == 1
      bind_click selecter, ary, enable, disable
    i++
changeButtonTri = ->
  button = $(this)
  list = [ 2, 0, 1 ]
  now = @target_var[@target_name]
  list[undefined] = list[0]
  @set_function button, this, list[now]
changeButton = ->
  button = $(this)
  list = [ 1, 0 ]
  now = @target_var[@target_name]
  list[undefined] = list[0]
  @set_function button, this, list[now]
change_pnofilter_all = ->
  id_ary = $(this).attr("id").split("_")
  enabled = id_ary[id_ary.length - 1]

  moveFilterTopZeroIE()
  $(".sayfilter_content div").each ->
    id = @id
    return  if id.indexOf("pnofilter_") < 0
    button = $(this)
    if enabled == 2
      setItem button, this, (if (@target_var[@target_name] == 1) then (0) else (1))
    else
      setItem button, this, enabled

  changeSayDisplays()
  fixFilterLeftIE()
  fixWidth()
setFilter = (button, field, value) ->
  setItem button, field, value
setHeader = (button, field, value) ->
  setItem button, field, value
  if value == 1
    field.target.slideUp "fast"
  else
    field.target.slideDown "fast"
  if value == 2
    field.target.addClass "ie_hover"
  else
    field.target.removeClass "ie_hover"

setItem = (button, field, value) ->
  button.removeClass field.style_enable + " " + field.style_disable
  cookie_in_use[field.target_name] = true
  field.target_var[field.target_name] = value
  if value == 1
    button.addClass field.style_disable
  else
    button.addClass field.style_enable

deploySayFilter = ->
  setAjaxEvent $(".message_filter")
  getSowFeedUrl()
  initFilter()
  headerbind_click ".header", temp_toggle, "sayfilter_heading", "sayfilter_heading"
  headerbind_click "#filter_header", toggle, "sayfilter_heading", "sayfilter_heading"
  headerbind_click "#notepad_header", toggle, "sayfilter_heading", "sayfilter_heading"
  while_bind_click "livetypecaption_", toggle, "sayfilter_caption_enable", "sayfilter_caption_disenable", tribind_click
  while_bind_click "pnofilter_", filter, "sayfilter_content_enable", "sayfilter_content_disenable", filterbind_click
  filterbind_click "#pnofilter_-1", filter, "sayfilter_content_enable", "sayfilter_content_disenable"
  tribind_click "#mestypefiltercaption", toggle, "sayfilter_caption_enable", "sayfilter_caption_disenable"
  headerbind_click "#lumpfiltercaption", toggle, "sayfilter_caption_enable", "sayfilter_caption_disenable"
  $(".sayfilter_button_lump").click change_pnofilter_all
  headerbind_click "#textnotepadcaption", toggle, "sayfilter_caption_enable", "sayfilter_caption_disenable"
  headerbind_click "#itempickercaption", toggle, "sayfilter_caption_enable", "sayfilter_caption_disenable"
  headerbind_click "#adcaption", toggle, "sayfilter_caption_enable", "sayfilter_caption_disenable"
  while_bind_click "typefilter_", filter, "sayfilter_content_enable", "sayfilter_content_disenable", filterbind_click
  summarybind_click "#clipbm", toggle, "sayfilter_content_enable", "sayfilter_content_disenable"
  summarybind_click "#clipanchor", toggle, "sayfilter_content_enable", "sayfilter_content_disenable"
  summarybind_click "#clipseer", toggle, "sayfilter_content_enable", "sayfilter_content_disenable"
  summarybind_click "#clipexecute", toggle, "sayfilter_content_enable", "sayfilter_content_disenable"
  summarybind_click "#clipagenda", toggle, "sayfilter_content_enable", "sayfilter_content_disenable"
  summarybind_click "#cliptopix", toggle, "sayfilter_content_enable", "sayfilter_content_disenable"
  $("#cliptext").change summary
  $("#cliptext").keyup (code) ->
    summary()  if code == 13

  $("#cliptext").show()
  changeSayDisplays()
  summary()

temp_toggle = []




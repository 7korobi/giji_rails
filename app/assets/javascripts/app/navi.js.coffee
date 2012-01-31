class Navi
  constructor: ->
    @viewport = $("head meta[name=\"viewport\"]")
    @stylesheet = $('head link[rel="stylesheet"]');

    @pagenavi_fullwidth = Client.outframe.find(".pagenavi")
    @navimode_fullwidth = Client.outframe.find("h2,.turnnavi,.row_all,.mes_admin,.mes_maker,.info,.infosp,.infowolf,.caution,.action_bm")
  
    if @stylesheet.attr("href").match /480.css/ 
      @mode = 480 
    if @stylesheet.attr("href").match /800.css/
      @mode = 800 


  resize: (fold)->
    if fold
      dst_padding  = 110
      dst_pagenavi = 120
    else
      dst_padding  = 11
      dst_pagenavi = 48

    @navimode_fullwidth.css
      paddingLeft: dst_padding
    @pagenavi_fullwidth.css
      paddingLeft: dst_pagenavi

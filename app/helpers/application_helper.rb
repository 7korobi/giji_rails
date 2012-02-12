# -*- coding: utf-8 -*-
# Methods added to this helper will be available to all templates in the application.
require 'yaml'

module ApplicationHelper
  include LinkHelper
  include GijiHelper

  def css_name
    params[:css] ||= OPTION[:css_wday][Time.now.wday]
    "/stylesheets/#{params[:css]}"
  end

  def cfg( folder )
    GAME[folder]['config']['cfg']
  end

  def folder ( folder,key )
    if folder
    then GAME[folder][key] 
    else ""
    end
  end

q_oldlog  = '?cmd=oldlog'
q_oldlog  = '?cmd=oldlog&rowall=on'
q_livelog = '?cmd=rss'
q_epi     = '?ua=mb&vid=%s&turn=%s&move=page&pageno=1&row=50'
q_info    = '?ua=mb&vid=%s&cmd=vinfo'

    def permit_list
        OPTION[:PERMIT]
    end

    def url_toppage(folder)
        toppage = SOW[folder][:livelog]
        toppage.gsub!("cmd=rss","")
        "http://" + SOW[folder][:server ] + toppage
    end


    def view_width
        width = 480 if css_name["480"]
        width = 800 
        width
    end

    def datetime_to_str(date)
        now = date + 15*60
        "%s年%02s月%02s日(%s) %02s時%s頃"%[
            now.year,
            now.month,
            now.day,
            OPTION[:jp_wday][now.wday],
            now.hour,
            ["","半"][(now.min + 15)/30],
        ]
    end
    def date_to_str(date)
        now = date + 15*60
        "%s年%02s月%02s日(%s)"%[
            now.year,
            now.month,
            now.day,
            OPTION[:jp_wday][now.wday],
        ]
    end

  def chr_name( user )
    j = DatChrJob.all( :conditions=>["cid=:cid and :csid like concat(csid,'%')",{:cid=>user.cid,:csid=>user.csid}] )
    n = DatChrName.all(:conditions=>{:cid=>user.cid} )
    job  = if 0 == j.size then "" else j[0].job  end
    name = if 0 == n.size then "" else n[0].name end
    if user.zapcount && user.zapcount.to_i < 0
    then 
      [job, user.clearance, name, user.zapcount, user.postfix ].join(' ')
    else 
      [job, name ].join(' ')
    end
  end
end


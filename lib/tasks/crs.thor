# -*- coding: utf-8 -*-

class Crs < Thor
  desc "create", "create config to other server"
  def create
    require '/www/giji/config/environment'
    require 'erubis'

    ChrSet.all.each do |set|
      set.chr_npcs.each do |npc|
        npc.csid ||= "#{set.id}_#{npc.id}"
        npc.save
      end
      set.save
    end

    ChrSet.all.map do |set|
      faces = set.faces.to_a
      set.chr_npcs.map do |npc|
        npc.csid ||= "#{set.id}_#{npc.id}"
        {:csid => npc.csid, :set => set, :npc => npc, :faces => faces }
      end
    end.flatten.each do | params |
      CrsCreate.new.activate( params )
    end
  end


  class WebHtml
    def render_exec
      @content_for_layout = Erubis::Eruby.new(File.open(@rhtml_content){|f| f.read}).evaluate(self)
      @content_for_layout = Erubis::Eruby.new(File.open(@rhtml_layout ){|f| f.read}).evaluate(self) if @rhtml_layout
    end
    def to_s
      render_exec
      return @content_for_layout
    end
    def render( ml = :html)
      render_exec
      print "Content-Type: text/%s\r\n\r\n"%[ ml.to_s ]
      print @content_for_layout
    end
  end

  class CrsCreate < WebHtml
    def activate( params )
      @csid   = params[:csid]
      @chrset = params[:set]
      @chrnpc = params[:npc]
      jobs  = @chrset.chr_jobs
      job_groups = jobs.group_by(&:face_id)
      faces = params[:faces]
      faces.each do |face| 
        job = job_groups[face.id].first

        [:job].each do |col|
          face[col] = job[col]
        end
      end
      @orders = faces.sort_by(&:order)
      @lists  = faces.sort_by(&:face_id)

      @rhtml_content      = "/www/giji/app/views/sow/crs.pl.erb"
      @rhtml_testbed_out  = "/www/giji_log/testbed/rs/crs_"  + @csid +".pl"
      @rhtml_wolf_out     = "/www/giji_log/wolf/rs/crs_"     + @csid +".pl"
      @rhtml_ultimate_out = "/www/giji_log/ultimate/rs/crs_" + @csid +".pl"
      @rhtml_cabala_out   = "/www/giji_log/cabala/rs/crs_"   + @csid +".pl"
      @rhtml_lobby_out    = "/www/giji_log/lobby/rs/crs_"    + @csid +".pl"

      result = to_s
      File.open(@rhtml_testbed_out ,'w:sjis:utf-8'){|f| f.write( result ) }
      File.open(@rhtml_wolf_out    ,'w:sjis:utf-8'){|f| f.write( result ) }
      File.open(@rhtml_ultimate_out,'w:sjis:utf-8'){|f| f.write( result ) }
      File.open(@rhtml_cabala_out  ,'w:sjis:utf-8'){|f| f.write( result ) }
      File.open(@rhtml_lobby_out   ,'w:sjis:utf-8'){|f| f.write( result ) }
      FileUtils.chmod( 0666, @rhtml_testbed_out )
      FileUtils.chmod( 0666, @rhtml_lobby_out   )
      FileUtils.chmod( 0666, @rhtml_cabala_out  )
      FileUtils.chmod( 0666, @rhtml_ultimate_out)
      FileUtils.chmod( 0666, @rhtml_wolf_out  )
    end
  end
end

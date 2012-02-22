# -*- coding: utf-8 -*-

class Record < Thor
  desc "cgi", "cgi collection from other server"
  def cgi
    require '/www/giji_rails/config/environment'
    GijiScheduler.perform
  end


  desc "web", "web collection from other service"
  def web
    require '/www/giji_rails/config/environment'
  end
end


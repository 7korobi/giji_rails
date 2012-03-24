class ApplicationController < ActionController::Base
  helper_method :gon

  protect_from_forgery
  include CurrentAuthenticated

  protected
  def form obj
    url = [:story].each_with_object controller: obj.class.name.collectionize do |symbol, hash|
      hash[:"#{symbol}_id"] = send(symbol)
    end
    if obj.new_record? 
      url.merge action: 'create'
    else
      url.merge action: 'update', id: obj.id
    end
  end
end

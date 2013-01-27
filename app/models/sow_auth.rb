class SowAuth
  include Giji

  field :_id, default: ->{ sow_auth_id }
  field :sow_auth_id
end

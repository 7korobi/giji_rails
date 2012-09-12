
module CurrentAuthenticated
  ROLES = %w[admin self user login auth]
  protected
  def admin?
    login? && current.user.try(:admin?)
  end
  def self?
    false
  end
  def user?
    current.user.try(:login?)
  end
  def login?
    user?
  end
  def auth?
    current.auth.try(:login?)
  end

  def logout?
    ! login?
  end

  def self.included(controller)
    controller.helper_method ROLES.map{|role| :"#{role}?"}
    controller.helper_method :current
    controller.after_filter  :current_save
  end

  ROLES.each do |role|
    define_method("#{role}_require") do
      authenticate_deny(role) unless send("#{role}?")
    end
  end

  def authenticate_deny(role)
    redirect_to root_url, error: "deny/#{role}"
  end

  def login(auth)
    if auth.user.try(:login?)
        redirect_to user_path(auth.user)
    else
      # 既存ユーザーの認証方法を追加する場合。
      if  current.user.try(:login?)
        auth.user = current.user
        auth.save!
        redirect_to user_path(auth.user)
      # 新規ユーザー登録をする場合。
      else
        redirect_to new_user_path
      end
    end
    current.auth = auth
    current.user = auth.user
  end

  def current_save
    p
    p

    current.auth.try :save
    if current.user
      current.user.rails_token = form_authenticity_token
      current.user.save
      current.request.user_ids |= [current.user.id]
    end
    current.request.save

    p cookies
    p
    p
  end

  Current = Struct.new(:auth,:user,:request)
  def logout
    session[:current] = nil
    redirect_to root_url
  end

  def current
    session[:current] ||= Current.new(nil, nil, Request.find_or_initialize_by(request))
  end
end


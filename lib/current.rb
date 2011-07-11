
module CurrentAuthenticated
  protected
  Current = Struct.new(:auth,:user,:request)
  def self.included(controller)
    controller.helper_method :admin?, :self?, :login?, :logout?
    controller.helper_method :current
    controller.after_filter  :current_save
  end

  def admin_require
    authenticate_deny unless admin?
  end
  def self_require
    authenticate_deny unless self?
  end
  def login_require
    authenticate_deny unless login?
  end
  def auth_require
    authenticate_deny unless auth?
  end

  def admin?
    login? && current.user.admin? rescue nil
  end
  def self?
    false
  end
  def auth?
    current.auth.login? rescue nil
  end
  def login?
    auth?
  end
  def logout?
    ! login?
  end

  def authenticate_deny
    logout
  end

  def login(auth)
    if (auth.user.login? rescue nil)
      redirect_to root_url
    else
      # 既存ユーザーの認証方法を追加する場合。
      if (current.user.login? rescue nil)
        auth.user = current.user
        auth.save!
      # 新規ユーザー登録をする場合。
      else
        redirect_to controller: 'accounts', action: 'new'
      end
    end
    session[:current] = current(auth, auth.user)
  end

  def logout
    session[:current] = nil
    redirect_to root_url
  end

  def current_save
    current.user.save    if current.user
    current.request.save if current.request
  end

  def current(auth = nil, user = nil, request = nil)
    session[:current] ||= Current.new(auth, user, request)
  end
end



module CurrentAuthenticated
  ROLES = %w[admin self user login auth]
  protected
  def admin?
    login? && current.user.try(:admin?)
  end
  def self?
    admin?
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

  def sign_in(auth)
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
    current.auth_id = auth.id
    current.user_id = auth.user.id
  end

  def current_save
    current.user && current.user.rails_token = form_authenticity_token
    current.save
    session[:current] = current.session
  end

  def sign_out
    session[:current] = nil
    @current = nil
    redirect_to root_url
  end

  def current
    session[:current] ||= [nil, nil, Request.find_or_create_by(request).id]
    @current ||= Current.new(* session[:current])
  end

  class Current
    attr_accessor :auth_id, :user_id
    attr_reader :auth, :user, :request
    def initialize(auth_id, user_id, request_id)
      @auth_id = auth_id
      @user_id = user_id
      @request_id = request_id
      @auth = auth_id && Auth.find(auth_id)
      @user = user_id && User.find(user_id)
      @request = request_id && Request.find(request_id)
    end

    def session
      [@auth_id, @user_id, @request_id]
    end

    def inspect
      data = [@auth, @user, @request].map{|o| o && o.attributes}
      data.to_yaml
    end

    def save
      if @auth
        @auth.with(safe: false).save(validate: false)
      end
      if @user
        @user.with(safe: false).save(validate: false)
        @request.user_ids |= [@user.id]
      end
      @request.with(safe: false).save(validate: false)
    end
  end
end

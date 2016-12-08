require 'devise'

module ControllerMacros
  def login_user
    @request.env["devise.mapping"] = Devise.mappings[:user]
    @user = User.create! :email => 'person@place.im', :password => 'abc123', :password_confirmation => 'abc123'
    sign_in @user
  end
end

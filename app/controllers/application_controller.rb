class ApplicationController < ActionController::Base
  rescue_from CanCan::AccessDenied do |exception|
    render text: "Don't be silly kid!"
  end

  protect_from_forgery
end

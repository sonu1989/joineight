class Api::V1::ApiApplicationController < ActionController::Base
  protect_from_forgery with: :null_session

end
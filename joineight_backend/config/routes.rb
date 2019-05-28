Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # API routes
  namespace :api do
    namespace :v1 do
      get "test_takers_list", to: "test_takers#list"
    end
  end
end

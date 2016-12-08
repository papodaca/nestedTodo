Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  devise_for :users

  root to: 'main#index'
  scope "api" do
    resources :categories, :only => [:index, :show, :create, :update, :destroy] do
      resources :todos, :only => [:index, :create, :update, :destroy]
    end
  end
end

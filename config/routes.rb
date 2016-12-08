Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  devise_for :users

  root to: 'main#index'
  scope "api" do
    resources :categories, :only => [:index, :show, :create, :update, :destroy] do
      resources :todos, :only => [:create, :update, :destroy]
    end
  end
end

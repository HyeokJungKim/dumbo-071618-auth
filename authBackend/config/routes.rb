Rails.application.routes.draw do
  resources :snacks, only: [:index]
  resources :users, only: [:show, :create]
  
  post "/login", to: "sessions#login"
  get "/persist", to: "sessions#persist"
end

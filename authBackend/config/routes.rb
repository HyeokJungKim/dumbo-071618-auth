Rails.application.routes.draw do
  resources :snacks, only: [:index]
  resources :users, only: [:show, :create]
end

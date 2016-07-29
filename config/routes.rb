Rails.application.routes.draw do
  resources :exports, only: [:index, :show]
  resources :imports, only: [:index, :show]
  resources :hscodes, only: [:index, :show]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

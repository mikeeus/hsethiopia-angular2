Rails.application.routes.draw do
  resources :exports
  resources :imports
  resources :hscodes
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

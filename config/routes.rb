Rails.application.routes.draw do
  resources :exports, only: [:index, :show]
  resources :imports, only: [:index, :show]
  resources :hscodes, only: [:index, :show]

  get '/country/:country' => 'matviews#country', as: :country
  get '/year/:year' => 'matviews#year', as: :year
  get '/hscode_matview/:code' => 'matviews#hscode_imports', as: :hscode_matview

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

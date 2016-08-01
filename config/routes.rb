Rails.application.routes.draw do
  resources :exports, only: [:index, :show]
  resources :imports, only: [:index, :show]
  resources :hscodes, only: [:index, :show]

  # Charts/ Matviews routes
  get '/charts/country/:country' => 'matviews#country', as: :country_chart
  get '/charts/year/:year' => 'matviews#year', as: :year
  get '/charts/hscode/:code' => 'matviews#hscode', as: :hscode_matview
  get '/refresh_matviews' => 'matviews#refresh_matviews', as: :refresh_matviews


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

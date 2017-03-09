Rails.application.routes.draw do
  root 'home#index'

  namespace :api do
    resources :notes, except: [:new, :edit]
  end


  get '*unmatched_route', to: 'home#index'
  #NO ROUTES BELOW THIS LINE
end

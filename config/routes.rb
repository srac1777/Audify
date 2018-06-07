Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resources :playlists, only: [:index, :create, :destroy, :show, :update]
    resources :songs, only: [:index]
    resources :playlist_songs, only: [:create, :destroy]
    resource :session, only: [:create, :destroy]
  end
  
  root "static_pages#root"
end

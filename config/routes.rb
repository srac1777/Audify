Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resources :playlists, only: [:index, :create, :destroy, :show, :update]
    resources :songs, only: [:index, :show]
    resources :playlist_songs, only: [:index, :create]
    # destroy "/api/playlist_songs/:playlist_id/:song_id", "PlaylistSongsController#destroy"
    # resources :search, only: [:index]
    get '/search', to: 'search#index'

    delete '/playlist_songs/:playlist_id/:song_id', to: 'playlist_songs#destroy'
    get '/playlist_songs', to: 'playlist_songs#index'
    post '/playlist_songs', to: 'playlist_songs#create'


    resource :session, only: [:create, :destroy]
  end
  root "static_pages#root"
end

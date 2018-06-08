class Api::PlaylistSongsController < ApplicationController
    
    def index
        @playlistsongs = PlaylistSong.all
    end
    
    def create
        @playlistsong = PlaylistSong.new(playlist_songs_params)

        if @playlistsong.save
            render :show
        else
            render json: @playlistsong.errors.full_messages, status: 422
        end
    end

    def destroy
        @playlistsong = PlaylistSong.find(params[:id])
        @playlistsong.destroy
        render :show
    end

    def playlist_songs_params
        params.require(:playlist_songs).permit(:playlist_id, :song_id)
    end
end

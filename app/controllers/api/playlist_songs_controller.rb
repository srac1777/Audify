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
        # debugger

        @playlistsong = PlaylistSong.all.where(["playlist_id = ? and song_id = ?", params[:playlist_id], params[:song_id]])
        @fakeps = @playlistsong.first
        @playlistsong.destroy(@playlistsong.first.id)
        render :destroy
    end

    def playlist_songs_params
        params.require(:playlist_song).permit(:playlist_id, :song_id)
    end
end

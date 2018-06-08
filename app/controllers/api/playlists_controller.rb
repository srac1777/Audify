class Api::PlaylistsController < ApplicationController
    def create
        @playlist = Playlist.new(playlist_params)

        if @playlist.save
            render :show
        else
            render json: @playlist.errors.full_messages, status: 422
        end
    end

    def update
        @playlist = current_user.playlists.find(params[:id])

        if @playlist.update_attributes(playlist_params)
            render :show
        else
            render json: @playlist.errors.full_messages, status: 422
        end
    end

    def show
        @playlist = Playlist.find(params[:id])
    end

    def destroy
        @playlist = Playlist.find(params[:id])
        @playlist.destroy
        render :show
    end

    def index
        @playlists = current_user.playlists 
    end

    def playlist_params
        params.require(:playlist).permit(:title, :creator_id)
    end
end

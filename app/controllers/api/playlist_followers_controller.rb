class Api::PlaylistFollowersController < ApplicationController
    
    def index
        @playlistfollowers = PlaylistFollower.all
    end
    
    def create
        @playlistfollower = PlaylistFollower.new(playlist_followers_params)

        if @playlistfollower.save
            render :show
        else
            render json: @playlistfollower.errors.full_messages, status: 422
        end
    end

    def destroy
        # debugger

        @playlistfollower = PlaylistFollower.all.where(["playlist_id = ? and song_id = ?", params[:playlist_id], params[:user_id]])
        @fakepf = @playlistfollower.first
        @playlistfollower.destroy(@playlistfollower.first.id)
        render :destroy
    end

    def playlist_followers_params
        params.require(:playlist_follower).permit(:playlist_id, :user_id)
    end
end
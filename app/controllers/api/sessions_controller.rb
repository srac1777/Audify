class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(
        params[:user][:username],
        params[:user][:password]
        )

        if @user
            login(@user)
            render "api/users/show"
        else
            render json: ["Invalid username/password combination"], status: 401
        end
    end

    def destroy
        @user = User.find_by_session_token(session[:session_token])
        if @user
            logout
            render json: {}
        else
            render json: ["Not Logged In"], status: 404
        end
    end
end

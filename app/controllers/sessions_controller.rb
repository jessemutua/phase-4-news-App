class SessionsController < ApplicationController
    def create
      user = User.find_by(username: params[:username])
      if user && user.authenticate(params[:password])
        session[:user_id] = user.id
        render json: { message: 'Logged in successfully' }, status: :ok
      else
        render json: { error: 'Invalid username or password' }, status: :unprocessable_entity
      end
    end
  
    def destroy
      session[:user_id] = nil
      render json: { message: 'Logged out successfully' }, status: :ok
    end
  end
  
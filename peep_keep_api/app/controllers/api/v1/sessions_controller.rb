class Api::V1::SessionsController < ApplicationController

  def create
    @user = User.find_by(email: create_params[:email])
    if @user && @user.authenticate(create_params[:password])
      render json: authentication_payload(@user)
    else
      render json: {error: "Bad username or password"}, status: 401
    end
  end

end

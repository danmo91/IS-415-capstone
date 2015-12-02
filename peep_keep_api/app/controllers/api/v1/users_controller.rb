class Api::V1::UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
    render json: @user, serializer: Api::V1::UserSerializer
  end

  def create
    @user = User.new(create_params)
    if @user.save
      render json: {user: @user}, status: :created
    else
      render json: {error: @user.errors.full_messages.to_sentence}, status: :unprocessable_entity
    end
  end

  def create_params
    params.require(:user).permit(:fname, :lname, :email, :password, :password_confirmation)
  end

end

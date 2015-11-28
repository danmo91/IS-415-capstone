class Api::V1::UsersController < ApplicationController

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

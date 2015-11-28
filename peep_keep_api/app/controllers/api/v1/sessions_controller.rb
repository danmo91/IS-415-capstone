class Api::V1::SessionsController < Api::V1::BaseController

  def create
    @user = User.find_by(email: create_params[:email])
    if @user && @user.authenticate(create_params[:password])
      render json: authentication_payload(@user)
    else
      render json: {error: "Bad username or password"}, status: 401
    end
  end

  private
  def authentication_payload(user)
    return nil unless user && user.id
    {
      auth_token: JsonWebToken.encode({ user_id: user.id }),
      user: {
        id: user.id,
        email: user.email,
        fname: user.fname,
        lname: user.lname
      }
    }
  end


  def create_params
    params.require(:user).permit(:email, :password)
  end

end

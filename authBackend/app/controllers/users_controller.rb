class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    render json: {
      user: {user_id: @user.id, username: @user.username},
      snacks: @user.snacks
    }
  end
end

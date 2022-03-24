class Api::UsersController < ApplicationController
  before_action :set_user, only: [:show, :destroy, :update]
  before_action :set_x



  def index
      # puts @x #'x here'
      # puts x # ERROR x is undefined
      render json: User.all
  end

  def show
      render json: @user
  end

  def create 
   @user = User.new(user_params)
   if(@user.save)
      render json: @user
   else
      render json: {errors: @user.errors.full_messages}, status: 422
   end
  end

  def update 
      if(@user.update(user_params))
         render json: @user
      else
         render json: {errors: @user.errors.full_messages}, status: 422
      end
  end

  def destroy
    render json: @user.destroy
  end

  private
  
  def set_user
      @user = User.find(params[:id])
  end

  def set_x
      @x = 'x here'
  end

  def user_params
    params.require(:user).permit(:name)
  end
end
class UsersController < ApplicationController
  def index
    puts 'called'
    session[:session_token] = 3
    render json: [1, 2, 3, 4]
  end

  def gen_token(user_id)
    payload = {id: user_id}
    JWT.encode(payload, Rails.application.secrets.secret_key_base)
  end

  def create

    # @user = User.create(user_params)
    username = params[:username]
    password = params[:password]
    email = params[:email]

    # @user = User.create({
    #   :username => params[:username],
    #   :password => params[:password],
    #   :email => params[:email]
    # })

    new_user = User.create!({
      password: password,
      username: username,
      email: email
    })


    if new_user
      p "done!"
      render json: {token: gen_token(new_user.id)}
    else
      p "not done!"
      render json: {err: 'nope'}
    end

  # if @user.save
  #    render json: @user, status: :created, location: @user
  #  else
  #    render json: @user.errors, status: :unprocessable_entity
  #  end
  end

  def index
    @users = User.all
    render json: {users: @users}
  end

  def is_logged_in
    if current_user
      render json: current_user
    else render nothing: true, status: 401
    end
  end

  def login
    username = params[:username]
    password = params[:password]

    user = User.find_from_credentials username, password
    if user.nil?
      render json: { err: 'No User' }
    else
      render json: {user: user, token: gen_token(user.id)}
    end
  end

  # private
  # def user_params
  #   params.require(:user).permit(:username, :password, :email)
  # end
end

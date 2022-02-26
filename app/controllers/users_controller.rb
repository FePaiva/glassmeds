class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    before_action :authorize, only: [:show]

    def index
        users = User.all
        render json: users
      end

    def show
        if current_user
            render json: current_user, status: :ok
        else 
            render json: {error: "User not authorized"}, status: :unauthorized
        end
    end

    # def create
    #     user = User.create!(user_params)
    #     session[:user_id] = user.id
    #     render json: user, status: :created
    # end

    def create
        user = User.create(user_params)
          if user.valid?
            session[:user_id] = user.id 
            render json: user, status: :created
          else
            render json: user.errors.full_messages, status: :unprocessable_entity
          end
      end

    private

    def render_unprocessable_entity(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def user_params
        params.permit(:username, :email, :password)
    end

    def authorize
        return render json: {errors: ["Not authorized"]}, status: :unauthorized unless session.include? :user_id
    end

end

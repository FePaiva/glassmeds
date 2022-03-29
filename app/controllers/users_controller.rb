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

    def update 
      if current_user
        # user = get_user
        current_user.update!(update_params)
        render json: current_user
      else 
        render json: {error: "User not authorized"}, status: :unauthorized
    end
      end

    def create
        user = User.create(user_params)
        # byebug
          if user.valid?
            session[:user_id] = user.id 
            render json: user, status: :created
          else
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
          end
      end


    private

    def render_unprocessable_entity(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    # def get_user
    #     User.find_by(id: params[:id])
    #   end
    
      def update_params
        params.permit( :gender, :race, :state, :city, :insurance)
        # :username, :email,
      end

    def user_params
        params.permit(:username, :email, :password)
    end

    def authorize
        return render json: {errors: ["Not authorized"]}, status: :unauthorized unless session.include? :user_id
    end

end

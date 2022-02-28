class PostsController < ApplicationController

  def index
    posts = Post.all 
    render json: posts
  end

  def show
    post = Post.find(params[:id]).to_json({only: :procedure})
  end

  def create
    post = current_user.posts.create(post_params)
    render json: post, status: :created
  end

  private

  def post_params
    params.permit(:user_id, :facility_id, :procedure, :date_of_procedure, :date_of_invoice, :patient_cost, :insurance_cost, :comments)
  end


end

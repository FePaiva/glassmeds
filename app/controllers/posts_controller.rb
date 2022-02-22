class PostsController < ApplicationController

  def index
    posts = Post.all 
    render json: posts
  end

  def create
    post = current_user.posts.create!(post_params)
    render json: posts, status: :created
  end

  private

  def post_params
    params.permit(:procedure, :date_of_procedure, :patient_cost, :insurance_cost, :invoice_date, :comments)
  end


end

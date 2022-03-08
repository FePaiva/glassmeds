class PostsController < ApplicationController

  def index
    posts = Post.all 
    render json: posts.sort_by{|e| e[:procedure]}
  end

  # def average
  #   posts = Post.all 
  #   average = 0
  #   i = 0
    
  #   posts.each do |post|
  #     i += 1
  #     average += post.procedure.patient_cost
  #   end
  #   byebug
  #   average = average / i
  # end

  # MyModel.select(Arel.star, MyModel.arel_table[:patient_cost].avg.as("average_patient_cost")).group(:some_column)


  def show
    post = Post.find(params[:id]).to_json({only: :procedure})
  end

  def create
    # byebug
    post = current_user.posts.create!(post_params)
    render json: post, status: :created
  end

  def destroy
    post = Post.find_by(id:[params[:id]])
    if post
      post.destroy
      head :no_content
    else
      render json: {error: "Post not found"}, status: :not_found
    end
  end

  # def as_json
  #   super.merge('created_at' => self.created_at.strftime("%d %b %Y"))
  # end

  private   

  def post_params
    params.require(:post).permit(:user_id, :facility_id, :procedure, :date_of_procedure, :date_of_invoice, :patient_cost, :insurance_cost, :comments)
  end


end

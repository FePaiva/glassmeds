class FacilitiesController < ApplicationController

def index
  facilities = Facility.all
  render json: facilities.sort_by{|f| f[:name]}
end

def create 
  facility = Facility.create!(facility_params)
  render json: facility, status: :created
  end

  def show
    facility = Facility.find(params[:id]).to_json()
  end

  private

  def facility_params
    params.permit(:name, :address, :state, :city, :zip)
  end

end

class FacilitiesController < ApplicationController

def index
  facilities = Facility.all
  render json: facilities
end

def create 
  facility = Facility.create!(facility_params)
  render json: facility, status: :created
  end

  private

  def facility_params
    params.permit(:name, :address, :state, :city, :zip)
  end

end

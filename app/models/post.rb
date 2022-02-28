class Post < ApplicationRecord
  belongs_to :user
  belongs_to :facility

  validates :procedure, presence: true
  validates :date_of_procedure, presence: true
  validates :patient_cost, presence: true



  # def procedure_cost
  #   # byebug
  #   procedure_cost = procedure.map {|p| p.patient_cost}
  #   return procedure_cost.sum
  # end

  # def self.patient_cost
  #   # byebug
  #   pluck(:patient_cost)
  #   # Post.all.map(&:patient_cost)
  # end


  #   def self.patient_cost
  #   byebug
  #   average(:patient_cost)
  #   Post.all.map(&:patient_cost)
  # end

  
end

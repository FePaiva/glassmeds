class Post < ApplicationRecord
  belongs_to :user
  belongs_to :facility

  validates :procedure, presence: true
  validates :date_of_procedure, presence: true
  validates :patient_cost, presence: true
  
end

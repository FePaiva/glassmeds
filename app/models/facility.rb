class Facility < ApplicationRecord

  has_many :posts
  has_many :users, through: :posts

  validates :name, presence: true
  validates :address, presence: true
  validates :state, presence: true
  validates :city, presence: true
  validates :zip, presence: true


end

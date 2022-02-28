class UserSerializer < ActiveModel::Serializer
  attributes :username,:gender, :race, :state, :city, :insurance
  # :id,  :email, :password_digest, 
  has_many :posts
  has_many :facilities
end

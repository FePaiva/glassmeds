class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :password_digest, :gender, :race, :state, :city, :insurance
end

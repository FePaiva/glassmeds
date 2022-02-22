class FacilitySerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :state, :city, :zip
end

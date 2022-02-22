class PostSerializer < ActiveModel::Serializer
  attributes :id, :procedure, :date_of_procedure, :date_of_invoice, :patient_cost, :insurance_cost, :comments
  has_one :user
  has_one :facility
end

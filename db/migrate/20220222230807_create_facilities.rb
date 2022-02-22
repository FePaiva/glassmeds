class CreateFacilities < ActiveRecord::Migration[7.0]
  def change
    create_table :facilities do |t|
      t.string :name
      t.string :address
      t.string :state
      t.string :city
      t.string :zip

      t.timestamps
    end
  end
end

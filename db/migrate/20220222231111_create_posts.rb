class CreatePosts < ActiveRecord::Migration[7.0]
  def change
    create_table :posts do |t|
      t.references :user, null: false, foreign_key: true
      t.references :facility, null: false, foreign_key: true
      t.string :procedure
      t.date :date_of_procedure
      t.date :date_of_invoice
      t.float :patient_cost
      t.float :insurance_cost
      t.string :comments

      t.timestamps
    end
  end
end

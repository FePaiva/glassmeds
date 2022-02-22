class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :email
      t.string :password_digest
      t.string :gender
      t.string :race
      t.string :state
      t.string :city
      t.string :insurance

      t.timestamps
    end
  end
end

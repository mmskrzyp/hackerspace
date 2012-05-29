class CreateHackers < ActiveRecord::Migration
  def change
    create_table :hackers do |t|
      t.string :name
      t.string :surname
      t.string :nickname
      t.string :email
      t.string :bio
      t.string :avatar

      t.timestamps
    end
  end
end

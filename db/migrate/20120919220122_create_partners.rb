class CreatePartners < ActiveRecord::Migration
  def change
    create_table :partners do |t|
      t.string :url
      t.string :avatar
      t.string :description
      t.string :name
      t.boolean :sponsor

      t.timestamps
    end
  end
end

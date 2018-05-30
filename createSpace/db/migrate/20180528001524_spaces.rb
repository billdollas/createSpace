class Spaces < ActiveRecord::Migration[5.2]
  def change
    create_table :spaces do |t|
      t.string :art
      t.string :film
      t.string :photo

      t.timestamps
    end
  end
end
